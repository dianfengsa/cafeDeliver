/**
 * Created by binzaa on 2016/10/20.
 */
$(document).ready(function(){
   function hideAll() {
        $(".user-info-other-box").hide();
        $(".i-2") .removeClass("rotate");
    }
     function nav(x) { //导航栏按钮——切换待接单页面
        if(x == 1 ){
            $(".m-container-1").show();
            $(".m-container-2").hide();
            $(".m-container-3").hide();
            myScroll.refresh();
            myScroll.scrollTo(0, 0);
            $("#nav-1").addClass("active");
            $("#nav-2").removeClass("active");
            $("#nav-3").removeClass("active");
            hideAll();
        }
        if(x == 2 ) {
            $(".m-container-1").hide();
            $(".m-container-2").show();
            $(".m-container-3").hide();
            myScroll.refresh();
            myScroll.scrollTo(0, 0);
            $('.user-info-other-box').show();
            $('.user-info-other-box').hide();
         $("#nav-2").addClass("active");
         $("#nav-1").removeClass("active");
            $("#nav-3").removeClass("active");
            hideAll();
         }
        if(x == 3 ){
            $(".m-container-1").hide();
            $(".m-container-2").hide();
            $(".m-container-3").show();
            myScroll.refresh();
            myScroll.scrollTo(0, 0);
            $("#nav-3").addClass("active");
            $("#nav-1").removeClass("active");
            $("#nav-2").removeClass("active");
         //   slide("3");
            hideAll();
        }
    }
    //点击触发事件
    $(".nav-box").on("touchend","#nav-1",function () {nav(1);});
    $(".nav-box").on("touchend","#nav-2",function () {nav(2);});
    $(".nav-box").on("touchend","#nav-3",function () {nav(3);});
    $(".m-content").on("click",".businessInfo",function () {    //点击后显示该订单的商家信息
        var businessInfo =  $(this).parents().siblings('.user-info-other-box');
        var i2 =  $(this).find('.i-2');
        $(".user-info-other-box:not(businessInfo)").slideUp();
        $(".i-2:not(i2)").removeClass('rotate');
        if(businessInfo.css("display") == "none" ){
            businessInfo.slideToggle(200);
            i2.addClass('rotate');
        }
        else {
        }
    });
});
