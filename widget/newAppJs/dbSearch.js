//初始化sdk
// 应用 ID，用来识别应用
var APP_ID = 'jjagdvss81s2w8gaho8pjsgttd2ormabhinggca2gmctoi5b';
// 应用 Key，用来校验权限（Web 端可以配置安全域名来保护数据安全）
var APP_KEY = '6aocso66b977p1lfdohqx28jligeytw75bob3218xvy9swhu';
// 初始化
AV.init({
	appId : APP_ID,
	appKey : APP_KEY
});

var userObj = AV.Object.extend("_User");
var deliveryManObj = AV.Object.extend('deliveryMan');
var deliveryOrderObj = AV.Object.extend('deliveryOrder');
var cafeCarObj = AV.Object.extend('cafeCar');
var orderObj = AV.Object.extend('order');
var customerObj = AV.Object.extend('customer');
//判断此用户是否已经分配了送餐区域
function checkDeliverManSataus(user) {
	var query = new AV.Query(deliveryManObj);
	var delverObj = {};
	var userPoniter = AV.Object.createWithoutData("_User", user.id);
	query.equalTo("owner", userPoniter);
	query.include("_User");
	query.include("cafeCar");
	return query.first().then(function(deliver) {
		deliver.set("status", "在岗");
		return deliver.save();
	}).then(function(manObj) {
		if (manObj) {
			delverObj = {
				id : manObj.id,
				name : manObj.get("name"),
				phone : manObj.get("mobilePhoneNumber"),
				status : manObj.get("status"),
				area : manObj.get("area"),
				cafeCar : manObj.get("cafeCar") ? manObj.get("cafeCar").id : "",
				cafeCarName : manObj.get("cafeCar") ? manObj.get("cafeCar").get("name") : "暂无区域",
				owner : manObj.get("owner").id,
				realName : manObj.get("realName"),
				idCardNo : manObj.get("idCardNo"),
				auditState : manObj.get("auditState")
			};
		}
		//		console.log("checkDeliverManSataus>>>" + JSON.stringify(delverObj))
		return delverObj;
	}).catch(function(error) {
		errorAlert(error);
	});
}

//根据区域id获取这个区域的配送员信息
function getDeliverManByArea(carId, isOwner) {
	var manArr = [];
	var queryCafeCar = new AV.Query(cafeCarObj);
	return queryCafeCar.get(carId).then(function(carObj) {
		var queryMan = new AV.Query(deliveryManObj);
		queryMan.equalTo("cafeCar", carObj);
		queryMan.equalTo("status", "在岗");
		return queryMan.find();
	}).then(function(mans) {
		var isMe = 0;
		for (var i = 0; i < mans.length; i++) {
			//			console.log("mans[i].id == isOwner.>>>>>>" + mans[i].id + "------" + isOwner)
			if (mans[i].id == isOwner) {
				isMe = 1;
			}
			var manObj = {
				manId : mans[i].id,
				manName : mans[i].get('name'),
				manPhone : mans[i].get('mobilePhoneNumber'),
				manStatus : mans[i].get('status'),
				manArea : mans[i].get('area'),
				manCafeCar : mans[i].get('cafeCar').id,
				isMe : isMe
			};
			manArr.push(manObj);
		}
		return manArr;
	}).catch(function(error) {
		console.log("error>>>" + JSON.stringify(error))
	});
}

//注册用户进user
function saveUser(phone) {
	//看user表是否存在这个user
	var queryUser = new AV.Query(userObj);
	queryUser.equalTo("mobilePhoneNumber", phone);
	return queryUser.first().then(function(ret) {
		//存在user,直接更新user到deliver表中
		if (ret) {
			var deliver = new deliveryManObj();
			deliver.set('name', phone);
			deliver.set('mobilePhoneNumber', phone);
			deliver.set('owner', ret);
			return deliver.save();
		} else {
			//不存在user,先保存user然后在关联deliverMan
			var user = new userObj();
			user.set('username', phone);
			user.set('mobilePhoneNumber', phone);
			return user.save().then(function(user) {
				var deliver = new deliveryManObj();
				deliver.set('name', phone);
				deliver.set('mobilePhoneNumber', phone);
				deliver.set('owner', user);
				return deliver.save();
			}).then(function(deliver) {
				console.log("user>>>>" + JSON.stringify(user))
				return deliver;
			}).catch(function(error) {
				console.log(JSON.stringify(error));
				return error;
			});
		}
		return ret;
	}).catch(function(error) {
		console.log("error>>>" + JSON.stringify(error))
	});
}

//修改订餐員状态,在岗或者休息
function setDeliverManStatus(deliverManId, status) {
	var queryMan = new AV.Query(deliveryManObj);
	var st = "";
	if (status == 0) {
		st = "休息";
	} else {
		st = "在岗";
	}
	return queryMan.get(deliverManId).then(function(man) {
		man.set('status', st);
		return man.save();
	}).then(function(manobj) {
		return manobj.id;
	}).catch(function(error) {
		console.log("error>>>" + JSON.stringify(error))
	});
}

//修改送餐员名称
function updateDeliverManName(manId, updateName) {
	console.log(manId + "__" + updateName)
	var queryMan = new AV.Query(deliveryManObj);
	queryMan.include("cafeCar");
	var deliverMan = {};
	return queryMan.get(manId).then(function(man) {
		man.set("name", updateName);
		return man.save();
	}).then(function(manobj) {
		if (manobj) {
			deliverMan = {
				id : manobj.id,
				name : manobj.get("name"),
				phone : manobj.get("mobilePhoneNumber"),
				status : manobj.get("status"),
				area : manobj.get("area"),
				cafeCar : manobj.get("cafeCar") ? manobj.get("cafeCar").id : "",
				cafeCarName : manobj.get("cafeCar") ? manobj.get("cafeCar").get("name") : "暂无区域",
				owner : manobj.get("owner").id
			}
		}
		return deliverMan;
	}).catch(function(error) {
		console.log("error>>>" + JSON.stringify(error))
	})
}

//获取配送区域信息
function getAeraInfo(getCity) {
	var queryCafebar = new AV.Query(cafeCarObj);
	var carArr = [];
	queryCafebar.equalTo("status", "营业中");
	queryCafebar.equalTo("city", getCity);
	queryCafebar.include('owner');
	return queryCafebar.find().then(function(cars) {
		for (var i = 0; i < cars.length; i++) {
			carArr.push({
				carId : cars[i].id,
				carName : cars[i].get("name"),
				city : cars[i].get("city"),
				masterPhone : cars[i].get("mobilePhoneNumber"),
				status : cars[i].get("status"),
				ownerName : cars[i].get("owner").get("username"),
				ownerPhone : cars[i].get("owner").get("mobilePhoneNumber")
			});
		}
		return carArr;
	}).catch(function(error) {
		console.log(JSON.stringify(error))
	});
}

//执行送餐员信息保存姓名、身份证
function updateDeliverNameAndCard(loginUser, inputNameVal, inputIDcardVal, cafeCarId) {
	var query = new AV.Query(deliveryManObj);
	var queryCafeCar = new AV.Query(cafeCarObj);
	query.equalTo('owner', loginUser);
	query.include('cafeCar');
	return AV.Promise.when(query.first(), queryCafeCar.get(cafeCarId)).then(function(diliver, cafeCar) {
		diliver.set("realName", inputNameVal);
		diliver.set("mobilePhoneNumber", diliver.get("mobilePhoneNumber"));
		diliver.set("status", "休息");
		diliver.set("area", "暂无");
		diliver.set("idCardNo", inputIDcardVal);
		diliver.set("auditState", 1);
		diliver.set("cafeCar", cafeCar);
		return diliver.save();
	}).then(function(man) {
		console.log("man>>>>>>>" + JSON.stringify(man.get("cafeCar")))
		return man.get("cafeCar") ? man.get("cafeCar").id : "5562927de4b07ae45cf76dd5";
	}).catch(function(error) {
		console.log(JSON.stringify(error.message))
	});
}

//根据送餐员信息获取区域信息
function areaByDeliver(manId) {
	var query = new AV.Query(deliveryManObj);
	var queryCafeCar = new AV.Query(cafeCarObj);
	var carObj = {};
	query.include('cafeCar');
	return query.get(manId).then(function(man) {
		queryCafeCar.equalTo('objectId', man.get("cafeCar").id);
		return AV.Promise.when(queryCafeCar.first(), man);
	}).then(function(cafecar, man) {
		carObj = {
			carId : cafecar.id,
			carName : cafecar.get("name"),
			carCity : cafecar.get("city"),
			address : cafecar.get("parkingAddress"),
			phone : cafecar.get("mobilePhoneNumber"),
			status : cafecar.get("status"),
			rejectReason: man.get("rejectReason"),
			remittanceInfo : cafecar.get("remittanceInfo"),
			realName : man.get("realName") ? man.get("realName") : "未填写",
			idCardNo : man.get("idCardNo") ? man.get("idCardNo") : "未填写",
			auditState : man.get("auditState")
		};
		return carObj;
	}).catch(function(error) {
		console.log("error>>>>" + JSON.stringify(error.message))
	});
}

//更新审核状态
function updateAuditStatus(manId, status, reson) {
	console.log(manId + "  " + status + "  " + reson)
	var query = new AV.Query(deliveryManObj);
	return query.get(manId).then(function(man) {
		console.log("man>>>>>>" + JSON.stringify(man))
		man.set("auditState", status);
		man.set("rejectReason", reson);
		return man.save();
	}).then(function(manObj) {
		return manObj;
	}).catch(function(error) {
		console.log("error>>>" + JSON.stringify(error.message))
	})
}

//获取文件名
function getFileName(o) {
	var pos = o.lastIndexOf('/');
	return o.substring(pos + 1);
}

//弹出的提示
function toast(result) {
	api.toast({
		msg : result,
		location : 'middle',
		duration : 2000
	});
}

