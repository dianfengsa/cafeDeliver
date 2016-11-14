var acountMessage = new Array();

function initial() {
	var queryCar = new AV.Query(CafeCar);
	var citys = new Array();
	var cafeCars = new Array();
	var discounts = new Array();
	queryCar.find().then(function(cars) {
		for (var i = 0; i < cars.length; i++) {
			if (citys.indexOf(cars[i].get("city")) == -1) {
				citys.push(cars[i].get("city"));
			}
			var obj = {
				city : cars[i].get("city"),
				car : cars[i].get("name"),
				carId : cars[i].id
			}
			cafeCars.push(obj);
			var descriptions = new Array();
			var temp = cars[i].get("discountStrategy");
			for (var j = 0; j < temp.length; j++) {
				descriptions.push(temp[j].description);
			}
			var tmp = {
				car : cars[i].get("name"),
				description : descriptions,
				carId : cars[i].id
			}
			discounts.push(tmp);
		}
		return AV.Promise.as(citys, cafeCars, discounts);
	}).then(function(citys, cafeCars, discounts) {
		getCitys(citys, cafeCars, discounts);
	})
}

function getCitys(citys, cafeCars, discounts) {
	var dom = $("#city");
	dom.empty();
	dom.append("<option selected value='0'>请选择城市</option>");
	dom.append("<option value='all'>全国城市</option>");
	for (var i = 0; i < citys.length; i++) {
		dom.append("<option value='" + citys[i] + "'>" + citys[i] + "</option>");
	}
	dom.change(function() {
		getCars(citys, cafeCars, discounts);
	})
}

function getCars(citys, cafeCars, discounts) {
	var dom = $("#cars");
	var city = $("#city option:selected").val();
	dom.empty();
	dom.append("<option selected value='0'>请选择区域</option>");
	dom.append("<option value='all'>全部区域</option>");
	for (var i = 0; i < cafeCars.length; i++) {
		if (city == "all") {
			dom.append("<option value='" + cafeCars[i].carId + "'>" + cafeCars[i].car + "</option>");
		} else {
			if (cafeCars[i].city == city) {
				dom.append("<option value='" + cafeCars[i].carId + "'>" + cafeCars[i].car + "</option>");
			}
		}
	}
	dom.change(function() {
		getDiscounts(citys, cafeCars, discounts);
	})
}

function getDiscounts(citys, cafeCars, discounts) {
	var dom = $("#discount");
	var carId = $("#cars option:selected").val();
	dom.empty();
	dom.append("<option selected value='0'>请选择优惠类型</option>");
	dom.append("<option value='none'>不含优惠</option>");
	if (carId != "all") {
		for (var i = 0; i < discounts.length; i++) {
			if (discounts[i].carId == carId) {
				console.log(">>>>>>  " + discounts[i].description);
				var description = discounts[i].description;
				for (var j = 0; description && j < description.length; j++) {
					dom.append("<option value='" + description[j] + "'>" + description[j] + "</option>")
				}
				break;
			}
		}
	}
}

;(function($) { 
	initial(); 
})(jQuery);
