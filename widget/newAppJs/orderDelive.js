/**
 * Created by binza on 2016/10/20.
 */



$(document).ready(function(){


  /*  function slide(page) {//滑动事件
        var slideWidth = window.innerWidth;
        var scrollLeft = $(".m-content").scrollLeft();
        var slideWindow = $(".m-content");
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

    */
    function maskStaus(Staus) { //遮罩与锁定全局滚动
        if (Staus == 1){
            $(".mask").fadeIn(200);
            $("body").removeClass("ban-scroll");
         }
        if (Staus == 0){
            $(".mask").fadeOut(200);
            $("body").removeClass("ban-scroll");
         }
     }
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
      /*      myScroll1.scrollTo(0,0,100);
            myScroll2.scrollTo(0,0,100);
            myScroll3.scrollTo(0,0,100);
            */
            $("#nav-1").addClass("active");
            $("#nav-2").removeClass("active");
            $("#nav-3").removeClass("active");
            hideAll();
        //    slide("1");
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
          //  slide("2");
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


    /*$("#m-content").swipe( {  //触屏左右滑动事件
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            if ($("#m-content").scrollLeft() == 0 ){
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

*/





});
