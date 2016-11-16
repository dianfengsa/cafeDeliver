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
//判断此用户是否已经分配了送餐区域
function checkDeliverManSataus(user) {
	var query = new AV.Query(deliveryManObj);
	var delverObj = {};
	var userPoniter = AV.Object.createWithoutData("_User", user.id);
	query.equalTo("owner", userPoniter);
	query.include("_User");
	return query.first().then(function(manObj) {
		if (manObj) {
			delverObj = {
				id : manObj.id,
				name : manObj.get("name"),
				phone : manObj.get("mobilePhoneNumber"),
				status : manObj.get("status"),
				area : manObj.get("area"),
				cafeCar : manObj.get("cafeCar") ? manObj.get("cafeCar").id : "",
				owner : manObj.get("owner").id
			};
		} 
		console.log("delverObj>>>>>>" + JSON.stringify(delverObj))
		return delverObj;
	}).catch(function(error) {
		errorAlert(error);
	});
}
//根据区域id获取这个区域的配送员信息
function getDeliverManByArea(id){

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
			deliver.set('name', "捷易飞哥");
			deliver.set('mobilePhoneNumber', phone);
			deliver.set('owner', ret);
			return deliver.save();
		} else {
			//不存在user,先保存user然后在关联deliverMan
			var user = new userObj();
			user.set('username', "捷易速送");
			user.set('mobilePhoneNumber', phone);
			return user.save().then(function(user) { 
				var deliver = new deliveryManObj();
				deliver.set('name', "捷易飞哥");
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