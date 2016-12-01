/**
 * ajpush
 *
 */
var jpush = null;
function ajpushInit(callBack) {
	jpush = api.require('ajpush');
	api.addEventListener({
		name : 'appintent'
	}, function(ret, err) {
		if (ret && ret.appParam.ajpush) {
			var tmpData = JSON.parse(ret.appParam.ajpush.extra);
			var orderId = tmpData.orderId;
			if (tmpData.type) {
				var type = parseInt(tmpData.type);
				switch(type) {
					case 0 : {
						// 餐车注册
						api.execScript({
							name : 'homeFixed',
							script : 'updateLSInfo();'
						});
						api.openWin({
							name : 'carInfo',
							url : './html/carInfo.html',
							rect : {
								x : 0,
								y : 0,
								w : 'auto',
								h : 'auto'
							},
							reload : true,
							opaque : true,
							bounces : false,
							delay : 0
						});
						break;
					}
					case 1 : {
						// 餐车来订单
						// coding...
						break;
					}
					case 2: {
						// 餐车货存
						// coding...
						break;
					}
					case 3: {
						// 客户收货
						break;
					}
					default:
						break;
				}
			}
		}
	});
	jpush.setListener(function(ret, err) {
		if (ret) {
			var tmpData = JSON.parse(ret.extra);
			var orderId = tmpData.orderId;
			var param = {
				id : -1
			};
			if (tmpData.type) {
				var type = parseInt(tmpData.type);
				switch(type) {
					case 0: {
						// 餐车注册
						alertSound('carRegist');
						api.execScript({
							name : 'homeFixed',
							script : 'updateLSInfo();'
						});
						break;
					}
					case 1: {
						// 餐车来订单
						//alertSound('finishOrder');
						api.execScript({
							name : 'homeSlide',
							frameName : 'orderList_simple',
							script : 'reloadFrame();'
						});
						break;
					}
					case 2: {
						// 餐车货存
						// coding...
						break;
					}
					case 3: {
						// 客户收货
						alertSound('finishOrder');
						api.execScript({
							name : 'homeSlide',
							frameName : 'orderList_simple',
							script : 'reloadFrame();'
						});
						break;
					}
					default:
						break;
				}
			}
			//			jpush.clearNotification(param, function(ret, err) {//清除通知栏
			//				if (ret && ret.status) {
			//					//success
			//				}
			//			});
			//			jpush.setBadge({//清除角标,ios
			//				badge : 0
			//			});
		}
	});
	api.addEventListener({
		name : 'pause'
	}, function(ret, err) {
		onPause();
		//监听应用进入后台，通知jpush暂停事件
	});

	api.addEventListener({
		name : 'resume'
	}, function(ret, err) {
		onResume();
		if (api.systemType == 'ios') {//清除ios角标，暂时不清除通知栏消息
			jpush.setBadge({
				badge : 0
			});
		}
		//监听应用恢复到前台，通知jpush恢复事件
	});
	//统计-app恢复
	function onResume() {
		jpush.onResume();
	}

	//统计-app暂停
	function onPause() {
		jpush.onPause();
	}


	jpush.init(function(ret, err) {
		if (ret && ret.status) {
		} else {
		}
	});

	function alertSound(name) {
		api.startPlay({
			path : 'widget://res/' + name + '.mp3'
		}, function() {
		});
	}
}

function getDeviceId(callBack) {//获取设备id，极光推送
	jpush = api.require('ajpush');
	var systemType = api.systemType;
	if (systemType === "android") {//初始化推送服务，只Android有效，ios上会自动初始化
		jpush.init(function(ret, err) {
			if (ret && ret.status) {
				jpush.getRegistrationId(function(ret, err) {
					callBack(ret, err);
				});
			} else {
				callBack(ret, err);
			}
		});
	} else {
		jpush.getRegistrationId(function(ret, err) {
			callBack(ret, err);
		});
	}
}

/**
 * 推送到 customer, deliveryMan
 *
 */
function ajPushToCustomer(JPushRegistrationId, orderId, status) {
	AV.Cloud.run('aJpush', {
		'JPushRegistrationId' : JPushRegistrationId,
		'appType' : 1,
		'orderId' : orderId,
		'alert' : status
	}, {
		success : function(result) {
			console.log(JSON.stringify(result));
		},
		error : function(error) {
			console.log(JSON.stringify(error));
		}
	});
}

function ajPushToDeliveryMan(JPushRegistrationId, orderId, status, type) {
	AV.Cloud.run('aJpush', {
		'JPushRegistrationId' : JPushRegistrationId,
		'appType' : 3,
		'orderId' : orderId,
		'alert' : status,
		'type' : type
	}, {
		success : function(result) {
			console.log(JSON.stringify(result));
		},
		error : function(error) {
			console.log(JSON.stringify(error));
		}
	});
}
