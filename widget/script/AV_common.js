function AVinit() {
	var appId = "jjagdvss81s2w8gaho8pjsgttd2ormabhinggca2gmctoi5b";
	var appKey = "6aocso66b977p1lfdohqx28jligeytw75bob3218xvy9swhu";
	AV.initialize(appId, appKey);
}

AVinit();
//AV.setProduction(0);

/**
 * LeanCloud class extending
 * (只有relation要用this.relation())
 */

var kitchenObj = AV.Object.extend("cafeKitchen", {
	objectId : function() {
		return this.id;
	},
	name : function() {
		return this.get("name");
	},
	city : function() {
		return this.get("city");
	},
	status : function() {
		return this.get("status");
	},
	addressDetail : function() {
		return this.get("addressDetail");
	},
	cafecar : function() {
		return this.get("cafecar");
	},
	menu : function() {
		return this.get("menu");
	}
}, {

});

var User = AV.Object.extend("_User", {
	objectId : function() {
		return this.id;
	},
	username : function() {
		return this.get("username");
	},
	mobilePhoneNumber : function() {
		return this.get("mobilePhoneNumber");
	}
}, {

});

var CafeCar = AV.Object.extend('cafeCar', {
	objectId : function() {
		return this.id;
	},
	owner : function() {
		return this.get('owner');
	},
	JPushRegistrationId : function() {
		return this.get('JPushRegistrationId');
	},
	cart : function() {
		return this.get('cart');
		// get cart details...
	},
	name : function() {
		return this.get('name');
	},
	mobile : function() {
		return this.get('mobilePhoneNumber');
	},
	status : function() {
		return this.get('status');
	},
	radius : function() {
		return this.get('radius');
	},
	gps : function() {
		return this.get('gps');
	},
	currentOfficeHours : function() {
		return this.get('currentOfficeHours');
	},
	parkingAddress : function() {
		return this.get('parkingAddress');
	},
	deliveryManRelation : function() {
		return this.relation('deliveryMan');
	}
}, {
	init : function(id) {
		var cafecar = new CafeCar();
		cafecar.id = id;
		return cafecar;
	}
});
var deliveryOrder = AV.Object.extend('deliveryOrder');
var Order = AV.Object.extend('order', {
	objectId : function() {
		return this.id;
	},
	cart : function() {
		return this.get('cart');
		// get cart details...
	},
	totalPrice : function() {
		return this.get('totalPrice');
	},
	payType : function() {
		return this.get('payType');
	},

	customer : function() {
		return this.get('customer');
	},
	paidTime : function() {
		return this.get('paidTime');
	},
	receiptTime : function() {
		return this.get('receiptTime');
	},
	status : function() {
		return this.get('status');
	},
	cafeCar : function() {
		return this.get('cafeCar');
	},
	orderTime : function() {
		return this.get('orderTime');
	},
	deliveryMan : function() {
		return this.get('deliveryMan');
	},
	deliverAddress : function() {
		return this.get('deliverAddress');
	},
	presetTime : function() {
		return this.get('presetTime');
	},
	mark : function() {
		return this.get('mark');
	},
	deliverMark : function() {
		return this.get('deliverMark');
	},
	presetTime1 : function() {
		return this.get('presetTime1');
	}
}, {

});

var Customer = AV.Object.extend('customer', {
	objectId : function() {
		return this.id;
	},
	JPushRegistrationId : function() {
		return this.get('JPushRegistrationId');
	},
	name : function() {
		return this.get('name');
	},
	mobilePhoneNumber : function() {
		return this.get('mobilePhoneNumber');
	}
}, {

});

var DeliveryMan = AV.Object.extend('deliveryMan', {
	objectId : function() {
		return this.id;
	},
	JPushRegistrationId : function() {
		return this.get('JPushRegistrationId');
	},
	cart : function() {
		return this.get('cart');
	},
	name : function() {
		return this.get('name');
	},
	mobilePhoneNumber : function() {
		return this.get('mobilePhoneNumber');
	},
	cafeCar : function() {
		return this.get('cafeCar');
	},
	status : function() {
		return this.get('status');
	},
	area : function() {
		return this.get('area');
	}
}, {
	init : function(id) {
		var deliveryMan = new DeliveryMan();
		deliveryMan.id = id;
		return deliveryMan;
	}
});

var Menu = AV.Object.extend('menu', {
	objectId : function() {
		return this.id;
	},
	name : function() {
		return this.get('name');
	},
	numberCode : function() {
		return this.get('numberCode');
	},
	status : function() {
		return this.get('status');
	},
	price : function() {
		return this.get('price');
	},
	purchasePrice : function() {
		return this.get('purchasePrice');
	},
	imageFile : function() {
		return this.get('image');
	},
	description : function() {
		return this.get('description');
	}
}, {

});

var Exception = AV.Object.extend('exception');
var CafeTask = AV.Object.extend('cafeTask', {
	cart : function() {
		return this.get('cart');
		// get cart details...
	}
}, {});
/**
 *整合各个cart详情(修改成直接从Menu表中查询)
 */
function getCartDetails(item) {
	console.log("item:" + JSON.stringify(item) + typeof item);
	console.log( typeof item);
	var query = new AV.Query(Menu);
	var arr = new Array();
	var cart = item.cart;
	for (var name in cart) {
		arr.push(parseInt(name));
	}
	query.containedIn("numberCode", arr);
	return query.find().then(function(menuDetails) {
		console.log("menuDetails:" + JSON.stringify(menuDetails))
		var cartDetails = new Array();
		for ( i = 0; i < menuDetails.length; i++) {
			if (item.cart().hasOwnProperty(menuDetails[i].numberCode())) {
				//				var imageFile = menuDetails[i].get('image');
				//				if (imageFile) {
				//					var imageUrl = imageFile.thumbnailURL(100, 100, 100, true, 'jpeg');
				//				} else {
				//					var imageUrl = '';
				//				}
				var menuInfo = {
					No : menuDetails[i].numberCode(),
					name : menuDetails[i].name(),
					status : menuDetails[i].status(),
					price : menuDetails[i].price(),
					purchasePrice : menuDetails[i].purchasePrice(),
					num : item.cart()[menuDetails[i].numberCode().toString()],
					//					imageUrl : imageUrl
					//					description : menuDetails[i].description()
				}
				cartDetails.push(menuInfo);
			}
		}
		var promise = new AV.Promise(function(resolve, reject) {
			resolve(cartDetails);
		});
		return promise;
	});
}