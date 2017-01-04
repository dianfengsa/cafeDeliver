/**
 * Created by binza on 2016/11/10.
 */

var footerH = 60;

//打开外卖订单页面
function openOrderDelive(pageParam) {
	var winHeight = api.winHeight;
	console.log("openOrderDelive>>>pageParam>>>>>>" + JSON.stringify(pageParam))
	api.openFrame({
		name : 'orderDelive',
		url : '../newAppHtml/orderDelive.html',
		rect : {
			x : 0,
			y : 0,
			w : "auto",
			h : winHeight
		},
		reload : false,
		opaque : true, // 页面不透明
		bounces : false, // 不允许页面弹动，ripple
		vScrollBarEnabled : false,
		slidBackEnabled : false,
		pageParam : pageParam,
		delay : 0
	});

}

//打开配送请求订单页面
function openOrderRequest(pageParam) {
	var winHeight = api.winHeight;
	console.log("openOrderRequest>>>pageParam>>>>>>" + JSON.stringify(pageParam))
	api.openFrame({
		name : 'orderRequest',
		url : '../newAppHtml/orderRequest.html',
		rect : {
			x : 0,
			y : 0,
			w : "auto",
			h : winHeight
		},
		reload : false,
		opaque : true, // 页面不透明
		bounces : false, // 不允许页面弹动，ripple
		vScrollBarEnabled : false,
		slidBackEnabled : false,
		pageParam : pageParam,
		delay : 0
	});
}

//打开送餐员审核页面
function openOrderSearch(pageParam) {
	var winHeight = api.winHeight;
	console.log("pageParam>>>" + JSON.stringify(pageParam))
	areaByDeliver(pageParam.id).then(function(carManager) { 
		console.log("carManager>>>" + JSON.stringify(carManager))
		console.log(pageParam.owner.objectId + "---------" + carManager.carOwner.id)
		if (pageParam.owner.id == carManager.carOwner.id) {
			console.log(1)
			api.openFrame({
				name : 'deliverAudit',
				url : '../newAppHtml/deliverAudit.html',
				rect : {
					x : 0,
					y : 0,
					w : "auto",
					h : winHeight - footerH
				},
				reload : false,
				opaque : true, // 页面不透明
				bounces : false, // 不允许页面弹动，ripple
				vScrollBarEnabled : false,
				slidBackEnabled : false,
				pageParam : pageParam,
				delay : 0
			});
		} else {

			console.log(2)
			api.toast({
				msg : '此功能仅限区域管理员使用',
				location : 'middle',
				duration : 3000
			});
		}
	});

}

//打开配送员信息
function openOrderDeliveInfo(pageParam) {
	var winHeight = api.winHeight; 
	api.openFrame({
		name : 'orderDelive',
		url : '../newAppHtml/orderDeliveInfo.html',
		rect : {
			x : 0,
			y : 0,
			w : "auto",
			h : winHeight - footerH
		},
		reload : false,
		opaque : true, // 页面不透明
		bounces : false, // 不允许页面弹动，ripple
		vScrollBarEnabled : false,
		slidBackEnabled : false,
		pageParam : pageParam,
		delay : 0
	});
}

function openOrderDine(pageParam) {
	var winHeight = api.winHeight;
	console.log("openOrderDine>>>pageParam>>>>>>" + JSON.stringify(pageParam))
	api.openFrame({
		name : 'orderDine',
		url : '../newAppHtml/orderDine.html',
		rect : {
			x : 0,
			y : 0,
			w : "auto",
			h : winHeight - footerH
		},
		reload : false,
		opaque : true, // 页面不透明
		bounces : false, // 不允许页面弹动，ripple
		vScrollBarEnabled : false,
		slidBackEnabled : false,
		pageParam : pageParam,
		delay : 0
	});
}

