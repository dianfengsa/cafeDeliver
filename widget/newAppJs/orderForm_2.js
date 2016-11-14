/**
 * Created by binza on 2016/10/20.
 */

/*配送页面*/
$(document).ready(function(){


//输入模板





    //导航栏按钮时间

    var hideAll = function () {
        $(".user-info-other-box").hide();
        $(".i-2") .removeClass("rotate");
    };


    //导航栏按钮——待接单，切换待接单页面
    var nav1 = function () {
        $("#nav-1").addClass("active");
        $("#nav-2").removeClass("active");
        $("#nav-3").removeClass("active");
        $("#nav-new1").hide();
        $(".dispatch").val("立即接单").css("background-color","#5abfdf");

        hideAll();


    };
    //导航栏按钮——配送中，切换到配送中页面
    var nav2 = function () {
        $("#nav-2").addClass("active");
        $("#nav-1").removeClass("active");
        $("#nav-3").removeClass("active");
        $("#nav-new2").hide();

        $(".dispatch").val("派送中").css("background-color","#c9c9c9");

        hideAll();

    };

    //导航栏按钮——判定已完成订单中的状态
    var finishOrder = function () {

     /*   var formStatus = function(){            //判断已完成页面中订单的状态
          var x =  $(".user-box").find(".orderNumber");


            if() {
                return 1
            }
            if(){
                return 2
            }

            return 3
        };*/
        var dispatch = $(".user-box").find(".dispatch");
        var status = 3;




        if (status == 1){
         return   dispatch.val("申请退款").css("background-color","#c9c9c9");
        }
        if (status == 2){
          return  dispatch.val("已取消").css("background-color","#c9c9c9").attr("disabled", true);
        }
        if (status == 3){
            return  dispatch.val("已完成")
        }
    };


    //导航栏按钮——已完成，切换到已完成页面
    var nav3 =function () {
        $("#nav-3").addClass("active");
        $("#nav-1").removeClass("active");
        $("#nav-2").removeClass("active");
        $("#nav-new3").hide();
        $(".dispatch2").hide();
        finishOrder();

        hideAll();
    };

    //点击触发事件
    $("#nav-1").click(function(){

        nav1();

    });

    $("#nav-2").click(function(){

        nav2();
    });

    $("#nav-3").click(function(){

         nav3();

    });



    //点击后显示该订单的商家信息
    $(".m-content").on("click",".i-1",function () {
        var phone = $(this).siblings("span").text();

        api.call({
            type: 'tel_prompt',
            number: '18902531737'
        });

    });

    $(".m-content").on("click",".i-2",function () {
      $(this).parents().siblings('.user-info-other-box').toggle();
        $(this).toggleClass("rotate");

    });


    //dispatch按钮，用户信息中的订单状态按钮
    $(".m-content").on("click",".dispatch",function () {
            var status = $(".dispatch").val();
        $(".mask").toggle();
        $("body").addClass("ban-scroll");
        if( status == '申请退款'){      //已完成页面中的退款选项
            $(".refund").toggle();

            return
        }

        $(".reset-shop").toggle();

    });

    //退款弹窗选项
    $("#refund-yes").click(function () {
        $(this).parents('.refund').hide();
        $(".mask").toggle();
        $("body").removeClass("ban-scroll");
    });

    $("#refund-no").click(function () {
        $(this).parents('.refund').hide();
        $(".mask").toggle();
        $("body").removeClass("ban-scroll");
    });

    $("#refund-cancel").click(function () {
        $(this).parents('.refund').hide();
        $(".mask").toggle();
        $("body").removeClass("ban-scroll");
    });

    //dispatch2按钮，商家信息中的订单按钮
    $(".m-content").on("click",".dispatch2",function () {
        $(".reset-shop").toggle();
        $(".mask").toggle();
        $("body").addClass("ban-scroll");
    });


    //配送员选择按钮
    $("#shop-no").click(function () {
        $(".reset-shop").toggle();
        $(".mask").toggle();
        $("body").removeClass("ban-scroll");
    });

    $("#shop-yes").click(function () {
        $(".reset-shop").toggle();
        $(".mask").toggle();
        $("body").removeClass("ban-scroll");
    });

    $(".off").click(function () {
        $(".reset-shop").hide();
        $(".mask").hide();
        $("body").removeClass("ban-scroll");
    });

    //点击后隐藏新消息图标
    $("#footer-1").click(function(){

        $("#footer-new1").hide();
    });

        //底部菜单按钮
  /*  $("#footer-1").click(function(){
        $("#footer-1").addClass("active");
        $("#footer-2").removeClass("active").find("img").attr('src','./images/process_active.png');
        $("#footer-3").removeClass("active");
        $("#footer-4").removeClass("active");
        $("#footer-new1").hide();
    });

    $("#footer-2").click(function(){
        $("#footer-2").addClass("active");
        $("#footer-1").removeClass("active");
        $("#footer-3").removeClass("active");
        $("#footer-4").removeClass("active");

    });

    $("#footer-3").click(function(){
        $("#footer-3").addClass("active");
        $("#footer-1").removeClass("active");
        $("#footer-2").removeClass("active");
        $("#footer-4").removeClass("active");

    });

    $("#footer-4").click(function(){
        $("#footer-4").addClass("active");
        $("#footer-1").removeClass("active");
        $("#footer-2").removeClass("active");
        $("#footer-3").removeClass("active");

    });
*/
    /*我的信息页面按钮
*/

});



