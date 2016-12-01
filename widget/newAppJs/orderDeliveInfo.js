
/**
 * Created by binza on 2016/11/3.
 */
/* 切换配送员状态*/
$(document).ready(function() {

    var div2 = document.getElementById("div2");
    var div1 = document.getElementById("div1");

    var touchOff = function () {
        div1.className = (div1.className == "close1") ? "open1" : "close1";
    };

    var touchNo = function () {
        div2.className = (div2.className == "close2") ? "open2" : "close2";
    };

    var touchStatus = function () {
        if (div1.className == "open1") {
            $(".user-logo-img").css({
                "background": 'url("../image/info_no.png")center center no-repeat',
                'background-size': 'auto 100%'
            });
            $(".user-logo").css({
                'border': '#ff6600 solid 0.3rem'
            });
            $(".user-info-web-bg").css({
                "background": 'url("../image/info_no_bg.jpg")center center no-repeat',
                'background-size': '100% 100%',
                'border-bottom': '#ff6600 solid 0.1rem'
            });
            $(".buff").css({
                'color': '#ff6600'
            });

        }
        if (div1.className == "close1") {
            $(".user-logo-img").css({
                "background": 'url("../image/info_off.png")center center no-repeat',
                'background-size': 'auto 100%'
            });
            $(".user-logo").css({
                'border': '#c9c9c9 solid 0.3rem'
            });
            $(".user-info-web-bg").css({
                'background': 'url("../image/info_off_bg.png")center center no-repeat',
                'background-size': '100% 100%',
                'border-bottom': '#c9c9c9 solid 0.1rem'
            });
            $(".buff").css({
                'color': '#818181'
            });

        }

    };


    /*我的信息页面按钮*/
    $("#div2").click(function () {
        touchOff();
        touchNo();
        touchStatus();

    });


});