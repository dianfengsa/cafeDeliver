/**
 * Created by binza on 2016/11/10.
 */

var footerH = 60;


//打开外卖订单页面
	function openOrderDelive(pageParam) {
	var winHeight = api.winHeight;
		console.log("openOrderDelive>>>pageParam>>>>>>" + JSON.stringify(pageParam))
		api.openFrame({
			name: 'orderDelive',
			url: '../newAppHtml/orderDelive.html',
			rect: {
				x: 0,
				y: 0,
				w: "auto",
				h: winHeight - footerH
			},
			reload:false,
			opaque: true, // 页面不透明
			bounces: false, // 不允许页面弹动，ripple
			vScrollBarEnabled: false,
			slidBackEnabled: false,
			pageParam: pageParam,
		/*	animation: {
				type: "movein", //动画类型（详见动画类型常量）
				subType: "from_right", //动画子类型（详见动画子类型常量）
				curve: "ease_out",
				duration: 200 //动画过渡时间，默认300毫秒
			},*/
			delay: 0
		});

	}

//打开配送请求订单页面
	function openOrderRequest(pageParam) { 
		var winHeight = api.winHeight;
		console.log("openOrderRequest>>>pageParam>>>>>>" + JSON.stringify(pageParam))
		api.openFrame({
			name: 'orderRequest',
			url: '../newAppHtml/orderRequest.html',
			rect: {
				x: 0,
				y: 0,
				w: "auto",
				h: winHeight - footerH
			},
			reload:false,
			opaque: true, // 页面不透明
			bounces: false, // 不允许页面弹动，ripple
			vScrollBarEnabled: false,
			slidBackEnabled: false,
			pageParam: pageParam,
		/*	animation: {
				type: "movein", //动画类型（详见动画类型常量）
				subType: "from_right", //动画子类型（详见动画子类型常量）
				curve: "ease_out",
				duration: 200 //动画过渡时间，默认300毫秒
			},*/
			delay: 0
		});
	}

//打开搜索订单页面
	function openOrderSearch(pageParam) {
		var winHeight = api.winHeight;
		console.log("openOrderSearch>>>pageParam>>>>>>" + JSON.stringify(pageParam))
		api.openFrame({
			name: 'orderSearch',
			url: '../newAppHtml/orderSearch.html',
			rect: {
				x: 0,
				y: 0,
				w: "auto",
				h: winHeight - footerH
			},
			reload:false,
			opaque: true, // 页面不透明
			bounces: false, // 不允许页面弹动，ripple
			vScrollBarEnabled: false,
			slidBackEnabled: false,
			pageParam: pageParam,
		/*	animation: {
				type: "movein", //动画类型（详见动画类型常量）
				subType: "from_right", //动画子类型（详见动画子类型常量）
				curve: "ease_out",
				duration: 200 //动画过渡时间，默认300毫秒
			},*/
			delay: 0
		});
	}

//打开配送员信息
	function openOrderDeliveInfo(pageParam) {
		var winHeight = api.winHeight;
		console.log("openOrderDeliveInfo>>>pageParam>>>>>>" + JSON.stringify(pageParam))
		api.openFrame({
			name: 'orderDelive',
			url: '../newAppHtml/orderDeliveInfo.html',
			rect: {
				x: 0,
				y: 0,
				w: "auto",
				h: winHeight - footerH
			},
			reload:false,
			opaque: true, // 页面不透明
			bounces: false, // 不允许页面弹动，ripple
			vScrollBarEnabled: false,
			slidBackEnabled: false,
			pageParam: pageParam,
		/*	animation: {
				type: "movein", //动画类型（详见动画类型常量）
				subType: "from_right", //动画子类型（详见动画子类型常量）
				curve: "ease_out",
				duration: 200 //动画过渡时间，默认300毫秒
			},*/
			delay: 0
		});
	}

function openOrderDine(pageParam) {
	var winHeight = api.winHeight;
	console.log("openOrderDine>>>pageParam>>>>>>" + JSON.stringify(pageParam))
	api.openFrame({
		name: 'orderDine',
		url: '../newAppHtml/orderDine.html',
		rect: {
			x: 0,
			y: 0,
			w: "auto",
			h: winHeight - footerH
		},
		reload:false,
		opaque: true, // 页面不透明
		bounces: false, // 不允许页面弹动，ripple
		vScrollBarEnabled: false,
		slidBackEnabled: false,
		pageParam: pageParam,
		/*	animation: {
		 type: "movein", //动画类型（详见动画类型常量）
		 subType: "from_right", //动画子类型（详见动画子类型常量）
		 curve: "ease_out",
		 duration: 200 //动画过渡时间，默认300毫秒
		 },*/
		delay: 0
	});
}

