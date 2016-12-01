// 订单导航对象
var navBarOrder = $api.dom('.navbar');
///* 切换orderList *///
var changeOrderList = function(index) {
	var tmp = $api.getStorage('frameIndex');
	if (tmp) {
		$api.rmStorage('frameIndex');
	}
	api.setFrameGroupIndex({
		name : 'order',
		index : index,
		sroll : true
	});
	$api.setStorage("page", 1); 
}
///* 设置orderList导航状态 *///
function setFrameGroupStatus(frameIndex) {
	var title = $api.byId('title'), navmark = $api.byId('navmark');
	var waitingList = $api.byId('navbar-item-waitForAcceptance'), deliveringList = $api.byId('navbar-item-deliveringList'), otherDeliveringList = $api.byId('navbar-item-otherDeliveringList'), receiptedList = $api.byId('navbar-item-receiptedList'), reject = $api.byId('navbar-item-reject');
	var imgW = $api.dom('#navmark img').offsetHeight;
	var leftW = (api.winWidth / 5 - imgW) / 5;
	switch (frameIndex) {
		case 0: {
			waitingList.className = "navbar-item navbar-item-active";
			deliveringList.className = "navbar-item";
			otherDeliveringList.className = "navbar-item";
			receiptedList.className = "navbar-item";
			reject.className = "navbar-item";
			$api.css(navmark, "-webkit-transform:translate(" + leftW + "px,0)");
			break;
		}
		case 1: {
			waitingList.className = "navbar-item";
			deliveringList.className = "navbar-item navbar-item-active";
			otherDeliveringList.className = "navbar-item";
			receiptedList.className = "navbar-item";
			reject.className = "navbar-item";
			var num = (api.winWidth / 5) * frameIndex + leftW;
			$api.css(navmark, "-webkit-transform:translate(" + num + "px,0)");
			break;
		}
		case 2: {
			waitingList.className = "navbar-item";
			deliveringList.className = "navbar-item";
			otherDeliveringList.className = "navbar-item navbar-item-active";
			receiptedList.className = "navbar-item";
			reject.className = "navbar-item";
			var num = (api.winWidth / 5) * frameIndex + leftW;
			$api.css(navmark, "-webkit-transform:translate(" + num + "px,0)");
			break;
		}
		case 3: {
			waitingList.className = "navbar-item";
			deliveringList.className = "navbar-item";
			otherDeliveringList.className = "navbar-item";
			receiptedList.className = "navbar-item navbar-item-active";
			reject.className = "navbar-item";
			var num = (api.winWidth / 5) * frameIndex + leftW;
			$api.css(navmark, "-webkit-transform:translate(" + num + "px,0)");
			break;
		}
		case 4: {
			waitingList.className = "navbar-item";
			deliveringList.className = "navbar-item";
			otherDeliveringList.className = "navbar-item";
			receiptedList.className = "navbar-item";
			reject.className = "navbar-item navbar-item-active";
			var num = (api.winWidth / 5) * frameIndex + leftW;
			$api.css(navmark, "-webkit-transform:translate(" + num + "px,0)");
			break;
		}
		default:
			break;
	}
}

///* 加载orderLists *///
window.loadingOrderLists = function() {
	window.header = $api.byId('header');
	$api.fixStatusBar(header);
	var headerPos = $api.offset(header);
	var main = $api.byId('main');
	var mainPos = $api.offset(main);
	var navBarOrder = $api.dom('.navbar');
	//	var topInTime = $api.byId('topInTime');
	//	var topInTimePos = $api.offset(topInTime);
	api.openFrameGroup({
		name : 'order',
		background : '#EEEEF0',
		scrollEnabled : false,
		rect : {
			x : 0,
			//			y : topInTimePos.h + headerPos.h + $api.offset(navBarOrder).h,
			y : headerPos.h + $api.offset(navBarOrder).h,
			w : 'auto',
			h : 'auto'
		},
		index : 0,
		preload : 4,
		frames : [{
			name : 'waitingList',
			url : './orderList_simple.html',
			pageParam : {//等待接单
				type : 0
			},
			bounces : true,
			opaque : true,
			bgColor : '#EEEEF0',
		}, {
			name : 'deliveringList',
			url : './orderList_simple.html',
			pageParam : {//配送中
				type : 1
			},
			bounces : true,
			opaque : true,
			bgColor : '#EEEEF0'
		}, {
			name : 'otherDeliveringList',
			url : './orderList_simple.html',
			pageParam : {//配送中
				type : 2
			},
			bounces : true,
			opaque : true,
			bgColor : '#EEEEF0'
		}, {
			name : 'finishedList',
			url : './orderList_simple.html',
			pageParam : {//已收货 或 已拒单
				type : 3
			},
			bounces : true,
			opaque : true,
			bgColor : '#EEEEF0'
		}, {
			name : 'rejectList',
			url : './orderList_simple.html',
			pageParam : {//已收货 或 已拒单
				type : 4
			},
			bounces : true,
			opaque : true,
			bgColor : '#EEEEF0'
		}]
	}, function(ret, err) {
		var name = ret.name;
		var index = ret.index;
		var tmp = $api.getStorage('frameIndex');
		if (tmp) {
			$api.rmStorage('frameIndex');
		}
		$api.setStorage('frameIndex', index);
		setFrameGroupStatus(index);
	});
}