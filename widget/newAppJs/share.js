/**
 * Created by binza on 2016/11/10.
 */

//打开外卖订单页面
function openOrderDelive(pageParam) {
	console.log("openOrderDelive>>>pageParam>>>>>>" + JSON.stringify(pageParam))
	api.openFrame({
		name : 'orderDelive',
		url : '../newAppHtml/orderDelive.html',
		opaque : true, // 页面不透明
		bounces : false, // 不允许页面弹动，ripple
		vScrollBarEnabled : false,
		slidBackEnabled : false,
		pageParam : pageParam,
		animation : {
			type : "fade", //动画类型（详见动画类型常量）
			subType : "from_right", //动画子类型（详见动画子类型常量）
			duration : 300 //动画过渡时间，默认300毫秒
		},
		delay : 0
	});

}

//打开配送请求订单页面
function openOrderRequest(pageParam) {

	console.log("openOrderRequest>>>pageParam>>>>>>" + JSON.stringify(pageParam))
	api.openFrame({
		name : 'orderRequest',
		url : '../newAppHtml/orderRequest.html',
		opaque : true, // 页面不透明
		bounces : false, // 不允许页面弹动，ripple
		vScrollBarEnabled : false,
		slidBackEnabled : false,
		pageParam : pageParam,
		animation : {
			type : "fade", //动画类型（详见动画类型常量）
			subType : "from_right", //动画子类型（详见动画子类型常量）
			duration : 300 //动画过渡时间，默认300毫秒
		},
		delay : 0
	});
}

//打开搜索订单页面
function openOrderSearch(pageParam) {

	console.log("openOrderSearch>>>pageParam>>>>>>" + JSON.stringify(pageParam))
	api.openFrame({
		name : 'orderSearch',
		url : '../newAppHtml/orderSearch.html',
		opaque : true, // 页面不透明
		bounces : false, // 不允许页面弹动，ripple
		vScrollBarEnabled : false,
		slidBackEnabled : false,
		pageParam : pageParam,
		animation : {
			type : "fade", //动画类型（详见动画类型常量）
			subType : "from_right", //动画子类型（详见动画子类型常量）
			duration : 300 //动画过渡时间，默认300毫秒
		},
		delay : 0
	});
}

//打开配送员信息
function openOrderDeliveInfo(pageParam) {

	console.log("openOrderDeliveInfo>>>pageParam>>>>>>" + JSON.stringify(pageParam))
	api.openFrame({
		name : 'orderDelive',
		url : '../newAppHtml/orderDeliveInfo.html',
		opaque : true, // 页面不透明
		bounces : false, // 不允许页面弹动，ripple
		vScrollBarEnabled : false,
		slidBackEnabled : false,
		pageParam : pageParam,
		animation : {
			type : "fade", //动画类型（详见动画类型常量）
			subType : "from_right", //动画子类型（详见动画子类型常量）
			duration : 300 //动画过渡时间，默认300毫秒
		},
		delay : 0
	});
}

