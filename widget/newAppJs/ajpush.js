/**
 * ajpush
 *
 */
//////////重新极光推送函数
//////////////2016-12-28
////////////////////通知送餐员审核
////////////////////////////推送给区域管理员
function newAJpush(JPushRegistrationId, message, appType, type) {
	/**
	 * appType 1@cafebar，2@cafecar，3@cafedeliver
	 */
	var base64JSON = {
		1 : "ZTNiNGZlZjMyZWU5MmVkOGYzZmI5YjBiOjkyNDM1MGI1MTVmNTdjMTEyYTM2MjhlNA==",
		2 : "ZmM0MmFmMzM2M2IzNjZmOTlmNGRkZDQ1OmJiNjUwOGM4ODBmNmRlMzFkNjIyOWRjMA==",
		3 : "MjkzMzkxMGE3NTNiNTdhNmYxN2RkNDQzOjY5MTcyNzA0ZDA1NzA2ZWIzNmM1OGRlZg=="
	};
	var titleJSON = {
		1 : "开饭吧",
		2 : "开饭吧区域",
		3 : "开饭吧送餐"
	};
	console.log("JPushRegistrationId, message, appType, type" + JPushRegistrationId + "----" + message + "----" + appType + "----" + type)
	var registration_id = new Array();
	var alert = message;
	var title = titleJSON[appType];
	var apns_production = true;
	registration_id.push(JPushRegistrationId);
	AV.Cloud.httpRequest({
		method : 'POST',
		url : 'https://api.jpush.cn/v3/push',
		headers : {
			'Content-Type' : 'application/json',
			"Authorization" : "Basic " + base64JSON[appType]
		},
		body : {
			"platform" : "all",
			"audience" : {
				"registration_id" : registration_id
			},
			"notification" : {
				"android" : {
					"alert" : alert,
					"title" : title,
					"extras" : {
						"type" : type,
						"restaurantName" : "开饭吧餐饮"
					}
				},
				"ios" : {
					"alert" : alert,
					"sound" : "sound.caf",
					"badge" : "+1",
					"extras" : {
						"type" : type,
						"restaurantName" : "开饭吧餐饮"
					}
				}
			},
			"message" : {
				"msg_content" : '',
				"extras" : {
					"type" : type
				}
			},
			"options" : {
				"time_to_live" : 60,
				"apns_production" : apns_production
			}
		},
		success : function(httpResponse) {
			console.log("httpResponse>>>>>>>>>>" + httpResponse.text);
			//			response.success({
			//				"status" : 1
			//			});
		},
		error : function(httpResponse) {
			console.error('aJpush Request failed with response code ' + httpResponse.status);
			//			response.error({
			//				"status" : httpResponse.status
			//			});
		}
	});
}
