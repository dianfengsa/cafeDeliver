/**
 * Created by binza on 2016/11/1.
 */
    //用jquery获取模板
var infoBar1   =  $("#info-bar1").html();       //待接单的页面模版
var infoBar2   =  $("#info-bar2").html();       //配送中的页面模版
var infoBar3   =  $("#info-bar3").html();       //已完成的页面模版
var status1   =  $("#status1").html();       //已完成-取消封条的页面模版
var status2   =  $("#status2").html();       //已完成-退单封条的页面模版
var status3   =  $("#status3").html();       //已完成-完成封条页面模版
var transportPersonnelBar   =  $("#transportPersonnel-bar").html();         //选择配送员弹窗的页面模版
//预编译模板
var orderModule1 = Handlebars.compile(infoBar1);
var orderModule2 = Handlebars.compile(infoBar2);
var orderModule3 = Handlebars.compile(infoBar3);
var statusSeal1 = Handlebars.compile(status1);
var statusSeal2 = Handlebars.compile(status2);
var statusSeal3 = Handlebars.compile(status3);
var deliveryStaff = Handlebars.compile(transportPersonnelBar);

//模拟json数据
var wait = {
    "wait": [
        {
            //用户信息数据
            phone:"15648531467",orderNumber:"06111",time:"30",money:"55.22",destination:"珠海市香洲区范德萨发",source:"珠海市吉大中行大厦4楼",comment:"加急",
            //商家信息数据
            businessIphone:"0756-5584324",paymentMethod:"现金支付",orderStatus:"配送中",foodSort:"火腿",amount:"2",foodNumber:"12"},
        {
            //用户信息数据
            phone:"15648888867",orderNumber:"06112",time:"30",money:"55.22",destination:"珠海市香洲区范德萨发",source:"珠海市吉大中行大厦4楼",comment:"加急",
            //商家信息数据
            businessIphone:"0756-5584324",paymentMethod:"现金支付",orderStatus:"配送中",foodSort:"火腿",amount:"2",foodNumber:"12"},
        {
            //用户信息数据
            phone:"18978987956",orderNumber:"06113",time:"50",money:"65.22",destination:"珠海市香洲区范德萨发",source:"珠海市吉大中行大厦7楼",comment:"加急",
            //商家信息数据
            businessIphone:"0756-5534536",paymentMethod:"在线支付",orderStatus:"未配送",foodSort:"番茄炒蛋",amount:"5",foodNumber:"8"},
        {
            //用户信息数据
            phone:"15688888867",orderNumber:"06114",time:"30",money:"55.00",destination:"珠海市香洲区范德萨发",source:"珠海市吉大中行大厦4楼",comment:"加急",
            //商家信息数据
            businessIphone:"0756-5584324",paymentMethod:"现金支付",orderStatus:"配送中",foodSort:"火腿",amount:"2",foodNumber:"12"},
        {
            //用户信息数据
            phone:"15648531467",orderNumber:"06116",time:"30",money:"55.00",destination:"珠海市香洲区范德萨发",source:"珠海市吉大中行大厦4楼",comment:"加急",
            //商家信息数据
            businessIphone:"0756-5584324",paymentMethod:"现金支付",orderStatus:"配送中",foodSort:"火腿",amount:"2",foodNumber:"12"}
    ]
};
var underway = {
    "underway": [
        {
            //用户信息数据
            phone:"15648531467",orderNumber:"06111",time:"30",money:"55.33",destination:"珠海市香洲区范德萨发",source:"珠海市吉大中行大厦4楼",comment:"加急",
            //商家信息数据
            businessIphone:"0756-5584324",paymentMethod:"现金支付",orderStatus:"配送中",foodSort:"火腿",amount:"2",foodNumber:"12"},
        {
            //用户信息数据
            phone:"15648888867",orderNumber:"06112",time:"30",money:"55.44",destination:"珠海市香洲区范德萨发",source:"珠海市吉大中行大厦4楼",comment:"加急",
            //商家信息数据
            businessIphone:"0756-5584324",paymentMethod:"现金支付",orderStatus:"配送中",foodSort:"火腿",amount:"2",foodNumber:"12"},
        {
            //用户信息数据
            phone:"18978987956",orderNumber:"06113",time:"50",money:"65.55",destination:"珠海市香洲区范德萨发",source:"珠海市吉大中行大厦7楼",comment:"加急",
            //商家信息数据
            businessIphone:"0756-5534536",paymentMethod:"在线支付",orderStatus:"未配送",foodSort:"番茄炒蛋",amount:"5",foodNumber:"8"},
        {
            //用户信息数据
            phone:"15688888867",orderNumber:"06114",time:"30",money:"55.00",destination:"珠海市香洲区范德萨发",source:"珠海市吉大中行大厦4楼",comment:"加急加急加急加急加急加急加急加急加急加急加急加急加急加急加急加急",
            //商家信息数据
            businessIphone:"0756-5584324",paymentMethod:"现金支付",orderStatus:"配送中",foodSort:"火腿",amount:"2",foodNumber:"12"},
        {
            //用户信息数据
            phone:"15648531467",orderNumber:"06116",time:"30",money:"55.77",destination:"珠海市香洲区范德萨发",source:"珠海市吉大中行大厦4楼",comment:"加急",
            //商家信息数据
            businessIphone:"0756-5584324",paymentMethod:"现金支付",orderStatus:"配送中",foodSort:"火腿",amount:"2",foodNumber:"12"}
    ]
};
var complete = {
    "complete": [
        {
            //用户信息数据
            phone:"15648531467",orderNumber:"06111",time:"30",money:"55.88",destination:"珠海市香洲区范德萨发",source:"珠海市吉大中行大厦4楼",comment:"加急",
            //商家信息数据
            businessIphone:"0756-5584324",paymentMethod:"现金支付",orderStatus:"配送中",foodSort:"火腿",amount:"2",foodNumber:"12",status:0},
        {
            //用户信息数据
            phone:"15648888867",orderNumber:"06112",time:"30",money:"55.00",destination:"珠海市香洲区范德萨发",source:"珠海市吉大中行大厦4楼",comment:"加急",
            //商家信息数据
            businessIphone:"0756-5584324",paymentMethod:"现金支付",orderStatus:"配送中",foodSort:"火腿",amount:"2",foodNumber:"12",status:1},
        {
            //用户信息数据
            phone:"18978987956",orderNumber:"06113",time:"50",money:"65.00",destination:"珠海市香洲区范德萨发",source:"珠海市吉大中行大厦7楼",comment:"加急",
            //商家信息数据
            businessIphone:"0756-5534536",paymentMethod:"在线支付",orderStatus:"未配送",foodSort:"番茄炒蛋",amount:"5",foodNumber:"8",status:2},
        {
            //用户信息数据
            phone:"15688888867",orderNumber:"06114",time:"30",money:"55.00",destination:"珠海市香洲区范德萨发",source:"珠海市吉大中行大厦4楼",comment:"加急加急加急加急加急加急加急加急加急加急加急加急加急加急加急",
            //商家信息数据
            businessIphone:"0756-5584324",paymentMethod:"现金支付",orderStatus:"配送中",foodSort:"火腿",amount:"2",foodNumber:"12",status:1},
        {
            //用户信息数据
            phone:"15648531467",orderNumber:"06116",time:"30",money:"55.00",destination:"珠海市香洲区范德萨发",source:"珠海市吉大中行大厦4楼",comment:"加急",
            //商家信息数据
            businessIphone:"0756-5584324",paymentMethod:"现金支付",orderStatus:"配送中",foodSort:"火腿",amount:"2",foodNumber:"12",status:2}
    ]
};
var delivery = {
    "delivery":[{transportPersonnelNumber:"123456789",transportArea:"凤凰路"},
        {transportPersonnelNumber:"123456789",transportArea:"拱北"},
        {transportPersonnelNumber:"123456789",transportArea:"吉大"},
        {transportPersonnelNumber:"123456789",transportArea:"唐家湾"},
        {transportPersonnelNumber:"123456789",transportArea:"吉大"},
        {transportPersonnelNumber:"123456789",transportArea:"唐家湾"},
        {transportPersonnelNumber:"123456789",transportArea:"吉大"},
        {transportPersonnelNumber:"123456789",transportArea:"唐家湾"}
    ]
};





//匹配json内容
var statusSealDiv1 = statusSeal1();
var statusSealDiv2 = statusSeal2();
var statusSealDiv3 = statusSeal3();

Handlebars.registerHelper("state",function() { //判断订单状态渲染相应封条

    if (this.status == 0){
        return statusSealDiv1;
    }

    if (this.status == 1){
        return statusSealDiv2;
    }

    if (this.status == 2){
        return statusSealDiv3;
    }

});

var userinfo1 = orderModule1(wait);
var userinfo2 = orderModule2(underway);
var userinfo3 = orderModule3(complete);
var transportPersonnelInfo = deliveryStaff(delivery);





//渲染模版到选择的元素中


$(".m-container-1").html(userinfo1);
$(".m-container-2").html(userinfo2);
$(".m-container-3").html(userinfo3);

$("#transportPersonnel").html(transportPersonnelInfo);


function animationDelay() {
    var max = $('#m-content').children('.user-box').length;
    var x="";


    for (var i=0;i<max;i++)
    {
        x=x + 1;
    }


}




