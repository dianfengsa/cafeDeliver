/**
 * Created by binza on 2016/10/20.
 */



$(document).ready(function(){


    function slide(page) {//滑动事件
        var slideWidth = window.innerWidth;
        var scrollLeft = $("#m-content").scrollLeft();
        var slideWindow = $("#m-content");
        if(page == "1"){  slideWindow.scrollTop(0);
            slideWindow.animate({scrollLeft:"0px"}, 200,"swing");
        }
        if(page == "2"){ slideWindow.scrollTop(0);
            slideWindow.animate({scrollLeft:slideWidth}, 200,"swing");
        }
        if(page == "3"){ slideWindow.scrollTop(0);
            slideWindow.animate({scrollLeft:slideWidth*2}, 200,"swing");
        }
    }
    function maskStaus(Staus) { //遮罩与锁定全局滚动
        if (Staus == 1){
            $(".mask").show();
            $("body").addClass("ban-scroll");
         }
        if (Staus == 0){
            $(".mask").hide();
            $("body").removeClass("ban-scroll");
         }
     }
   function hideAll() {
        $(".user-info-other-box").hide();
        $(".i-2") .removeClass("rotate");
    }
    var nav = function (x) { //导航栏按钮——切换待接单页面
        if(x == 1 ){
            $("#nav-1").addClass("active");
            $("#nav-2").removeClass("active");
            $("#nav-3").removeClass("active");
            $("#nav-new1").hide();
            hideAll();
            slide("1");
        }
        if(x == 2 ) {
         $("#nav-2").addClass("active");
         $("#nav-1").removeClass("active");
            $("#nav-3").removeClass("active");
            $("#nav-new2").hide();
            hideAll();
            slide("2");
         }
        if(x == 3 ){
            $("#nav-3").addClass("active");
            $("#nav-1").removeClass("active");
            $("#nav-2").removeClass("active");
            $("#nav-new3").hide();
            slide("3");
            hideAll();

        }
    };
    //点击触发事件
    $(".nav-box").on("touchend","#nav-1",function () {nav(1);});
    $(".nav-box").on("touchend","#nav-2",function () {nav(2);});
    $(".nav-box").on("touchend","#nav-3",function () {nav(3);});
    $("#m-content").swipe( {  //触屏左右滑动事件
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            if ( $("#m-content").scrollLeft() == 0 ){
                nav(2);

            }
            if ( $("#m-content").scrollLeft() == window.innerWidth){
                nav(3);
            }
        },
        swipeRight:function(event, direction, distance, duration, fingerCount) {
            if ($("#m-content").scrollLeft() == window.innerWidth ){
                nav(1);
            }
            if ($("#m-content").scrollLeft() == window.innerWidth*2){
                nav(2);
            }
        }, threshold:60            //Default is 75px, set to 0 for demo so any distance triggers swipe
    });
  /*  $(".m-content").on("click",".user-info-text",function () {    //快捷拨号
        var phone = $(this).siblings("p").text();
        api.call({type: 'tel_prompt', number: phone});
    });*/
    $(".m-content").on("touchend",".businessInfo",function () {    //点击后显示该订单的商家信息
      $(this).parents().siblings('.user-info-other-box').slideToggle(200);
        $(this).parents().children(".i-2").toggleClass("rotate");
    });


    //dispatch3按钮(确认订单)

    $(".reset-shop").on("click",".off",function () {   //配送员窗口关闭按钮
        $(".reset-shop").hide();
        maskStaus(0);
    });
    $(".reset-shop").on("click",".reset-shop-text",function () { //配送员确认
        $("body").addClass("ban-scroll");
        $(".reset-shop").toggle();
        $("#sure").toggle();
    });
    $(".refund-box").on("click","#sure-yes",function () { //确认窗口事件
        $(this).parents('.refund').hide();
        $(".mask").toggle();
        $("body").removeClass("ban-scroll");
        alert("配送成功");
    });
    $(".refund-box").on("click","#sure-no",function () {
        $(".reset-shop").toggle();
        $("#sure").toggle();
    });


});


