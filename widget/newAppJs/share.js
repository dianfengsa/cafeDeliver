/**
 * Created by binza on 2016/11/10.
 */
$(document).ready(function() {

//底部栏跳转
    $(".footer-box").on("touchend", "#footer-1", function () {
        api.showProgress({
            style: 'default',
            animationType: 'fade',
            title: '努力加载中...',
            text: '先喝杯茶...',
            modal: true
        });
        api.openWin({
            name: 'orderDelive.html',
            url: '../newAppHtml/orderDelive.html',
            opaque: true, // 页面不透明
            bounces: false, // 不允许页面弹动，ripple
            vScrollBarEnabled: false,
            slidBackEnabled: false,
            animation: {
                type: "fade", //动画类型（详见动画类型常量）
                subType: "from_right", //动画子类型（详见动画子类型常量）
                duration: 300 //动画过渡时间，默认300毫秒
            },
            delay: 0
        });
        api.hideProgress();

        $("#footer-new1").hide();//点击后隐藏新消息图标
    });
    $(".footer-box").on("touchend", "#footer-2", function () {
        api.showProgress({
            style: 'default',
            animationType: 'fade',
            title: '努力加载中...',
            text: '先喝杯茶...',
            modal: true
        });
        api.openWin({
            name: 'orderRequest',
            url: '../newAppHtml/orderRequest.html',
            opaque: true, // 页面不透明
            bounces: false, // 不允许页面弹动，ripple
            vScrollBarEnabled: false,
            slidBackEnabled: false,
            animation: {
                type: "fade", //动画类型（详见动画类型常量）
                subType: "from_right", //动画子类型（详见动画子类型常量）
                duration: 300 //动画过渡时间，默认300毫秒
            },
            delay: 0
        });
        api.hideProgress();

        $("#footer-new1").hide();//点击后隐藏新消息图标
    });
    $(".footer-box").on("touchend", "#footer-3", function () {
        api.showProgress({
            style: 'default',
            animationType: 'fade',
            title: '努力加载中...',
            text: '先喝杯茶...',
            modal: true
        });
        api.openWin({
            name: 'orderSearch',
            url: '../newAppHtml/orderSearch.html',
            opaque: true, // 页面不透明
            bounces: false, // 不允许页面弹动，ripple
            vScrollBarEnabled: false,
            slidBackEnabled: false,
            animation: {
                type: "fade", //动画类型（详见动画类型常量）
                subType: "from_right", //动画子类型（详见动画子类型常量）
                duration: 300 //动画过渡时间，默认300毫秒
            },
            delay: 0
        });
        api.hideProgress();

        $("#footer-new1").hide();//点击后隐藏新消息图标
    });
    $(".footer-box").on("touchend", "#footer-4", function () {
        api.showProgress({
            style: 'default',
            animationType: 'fade',
            title: '努力加载中...',
            text: '先喝杯茶...',
            modal: true
        });
        api.openWin({
            name: 'orderDeliveInfo',
            url: '../newAppHtml/orderDeliveInfo.html',
            opaque: true, // 页面不透明
            bounces: false, // 不允许页面弹动，ripple
            vScrollBarEnabled: false,
            slidBackEnabled: false,
            animation: {
                type: "fade", //动画类型（详见动画类型常量）
                subType: "from_right", //动画子类型（详见动画子类型常量）
                duration: 300 //动画过渡时间，默认300毫秒
            },
            delay: 0
        });
        api.hideProgress();

        $("#footer-new1").hide();//点击后隐藏新消息图标
    });

});