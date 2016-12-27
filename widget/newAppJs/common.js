/**
 * Created by Administrator on 2014/12/17.
 */
/**
 *
 *  Secure Hash Algorithm (SHA1)
 *  http://www.webtoolkit.info/
 *
 **/

function SHA1(msg) {

	function rotate_left(n, s) {
		var t4 = (n << s ) | (n >>> (32 - s));
		return t4;
	};

	function lsb_hex(val) {
		var str = "";
		var i;
		var vh;
		var vl;

		for ( i = 0; i <= 6; i += 2) {
			vh = (val >>> (i * 4 + 4)) & 0x0f;
			vl = (val >>> (i * 4)) & 0x0f;
			str += vh.toString(16) + vl.toString(16);
		}
		return str;
	};

	function cvt_hex(val) {
		var str = "";
		var i;
		var v;

		for ( i = 7; i >= 0; i--) {
			v = (val >>> (i * 4)) & 0x0f;
			str += v.toString(16);
		}
		return str;
	};

	function Utf8Encode(string) {
		string = string.replace(/\r\n/g, "\n");
		var utftext = "";

		for (var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			} else if ((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			} else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	};

	var blockstart;
	var i, j;
	var W = new Array(80);
	var H0 = 0x67452301;
	var H1 = 0xEFCDAB89;
	var H2 = 0x98BADCFE;
	var H3 = 0x10325476;
	var H4 = 0xC3D2E1F0;
	var A, B, C, D, E;
	var temp;

	msg = Utf8Encode(msg);

	var msg_len = msg.length;

	var word_array = new Array();
	for ( i = 0; i < msg_len - 3; i += 4) {
		j = msg.charCodeAt(i) << 24 | msg.charCodeAt(i + 1) << 16 | msg.charCodeAt(i + 2) << 8 | msg.charCodeAt(i + 3);
		word_array.push(j);
	}

	switch (msg_len % 4) {
		case 0:
			i = 0x080000000;
			break;
		case 1:
			i = msg.charCodeAt(msg_len - 1) << 24 | 0x0800000;
			break;

		case 2:
			i = msg.charCodeAt(msg_len - 2) << 24 | msg.charCodeAt(msg_len - 1) << 16 | 0x08000;
			break;

		case 3:
			i = msg.charCodeAt(msg_len - 3) << 24 | msg.charCodeAt(msg_len - 2) << 16 | msg.charCodeAt(msg_len - 1) << 8 | 0x80;
			break;
	}

	word_array.push(i);

	while ((word_array.length % 16) != 14)
	word_array.push(0);

	word_array.push(msg_len >>> 29);
	word_array.push((msg_len << 3) & 0x0ffffffff);

	for ( blockstart = 0; blockstart < word_array.length; blockstart += 16) {

		for ( i = 0; i < 16; i++)
			W[i] = word_array[blockstart + i];
		for ( i = 16; i <= 79; i++)
			W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);

		A = H0;
		B = H1;
		C = H2;
		D = H3;
		E = H4;

		for ( i = 0; i <= 19; i++) {
			temp = (rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B, 30);
			B = A;
			A = temp;
		}

		for ( i = 20; i <= 39; i++) {
			temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B, 30);
			B = A;
			A = temp;
		}

		for ( i = 40; i <= 59; i++) {
			temp = (rotate_left(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B, 30);
			B = A;
			A = temp;
		}

		for ( i = 60; i <= 79; i++) {
			temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B, 30);
			B = A;
			A = temp;
		}

		H0 = (H0 + A) & 0x0ffffffff;
		H1 = (H1 + B) & 0x0ffffffff;
		H2 = (H2 + C) & 0x0ffffffff;
		H3 = (H3 + D) & 0x0ffffffff;
		H4 = (H4 + E) & 0x0ffffffff;

	}

	var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);

	return temp.toLowerCase();

}

/*
* 浮点数计算
*/
///* 两个浮点数求和 *///
function accAdd(num1, num2) {
	var r1, r2, m;
	try {
		r1 = num1.toString().split('.')[1].length;
	} catch(e) {
		r1 = 0;
	}
	try {
		r2 = num2.toString().split(".")[1].length;
	} catch(e) {
		r2 = 0;
	}
	m = Math.pow(10, Math.max(r1, r2));
	// return (num1*m+num2*m)/m;
	return Math.round(num1 * m + num2 * m) / m;
}

///* 两个浮点数相减 *///
function accSub(num1, num2) {
	var r1, r2, m;
	try {
		r1 = num1.toString().split('.')[1].length;
	} catch(e) {
		r1 = 0;
	}
	try {
		r2 = num2.toString().split(".")[1].length;
	} catch(e) {
		r2 = 0;
	}
	m = Math.pow(10, Math.max(r1, r2));
	n = (r1 >= r2) ? r1 : r2;
	return (Math.round(num1 * m - num2 * m) / m).toFixed(n);
}

///* 两数浮点数相除 *///
function accDiv(num1, num2) {
	var t1, t2, r1, r2;
	try {
		t1 = num1.toString().split('.')[1].length;
	} catch(e) {
		t1 = 0;
	}
	try {
		t2 = num2.toString().split(".")[1].length;
	} catch(e) {
		t2 = 0;
	}
	r1 = Number(num1.toString().replace(".", ""));
	r2 = Number(num2.toString().replace(".", ""));
	return (r1 / r2) * Math.pow(10, t2 - t1);
}

///* 两数浮点数相乘 *///
function accMul(num1, num2) {
	var m = 0, s1 = num1.toString(), s2 = num2.toString();
	try {
		m += s1.split(".")[1].length
	} catch(e) {
	};
	try {
		m += s2.split(".")[1].length
	} catch(e) {
	};
	return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}

//////////** 浮点数强制保留两位小数，返回string格式 **/////////
function changeTwoDecimal_f(x) {
	var f_x = parseFloat(x);
	if (isNaN(f_x)) {
		return '0.00';
	}
	var f_x = Math.round(x * 100) / 100;
	var s_x = f_x.toString();
	var pos_decimal = s_x.indexOf('.');
	if (pos_decimal < 0) {
		pos_decimal = s_x.length;
		s_x += '.';
	}
	while (s_x.length <= pos_decimal + 2) {
		s_x += '0';
	}
	return s_x;
}

/**
 * 错误码处理
 *
 */
var ERROR = {
	'-1' : '网络连接不可用，请检查网络连接',
	//	'1' : '服务器内部错误或者参数错误',
	'100' : '网络故障或服务器故障',
	'101' : '查询对象不存在',
	'104' : '查询objectId非法',
	'107' : '无效的JSON对象',
	'113' : '缺少必填项',
	'117' : 'Key只读不允许更新',
	'124' : '请求超时，网络故障或操作太耗时',
	'126' : '无效的用户 Id，可能用户不存在',
	'127' : '手机号码无效',
	'141' : '云代码脚本编译或者运行报错',
	'142' : '云代码校验错误',
	'160' : '帐户余额不足',
	'200' : '没有提供用户名，或者用户名为空',
	'201' : '没有提供密码，或者密码为空',
	'202' : '用户名已经被占用',
	'206' : '当前用户没有登录',
	'210' : '用户名和密码不匹配',
	'211' : '找不到用户',
	'212' : '请提供手机号码',
	'213' : '手机号码对应的用户不存在',
	'214' : '手机号码已经被注册',
	'215' : '未验证的手机号码',
	'251' : '无效的账户连接',
	'401' : '未经授权的访问',
	'403' : '没有class操作权限',
	'502' : '服务器维护中',
	'503' : '超过流量访问限制'
}
function errorAlert(error) {
	if (ERROR.hasOwnProperty(error.code)) {
		api.alert({
			title : '错误提示',
			msg : ERROR[error.code],
			buttons : ['确定']
		}, function(ret, err) {
		});
	} else if (ERROR.hasOwnProperty(error.message)) {
		api.alert({
			title : '错误提示',
			msg : error.message,
			buttons : ['确定']
		}, function(ret, err) {
		});
	} else {
		api.alert({
			title : '错误提示',
			msg : JSON.stringify(error),
			buttons : ['确定']
		}, function(ret, err) {
		});
	}
}

function getDeviceId(callBack) {//获取设备id，极光推送
	jpush = api.require('ajpush');
	var systemType = api.systemType;
	if (systemType === "android") {//初始化推送服务，只Android有效，ios上会自动初始化
		jpush.init(function(ret, err) {
			if (ret && ret.status) {
				jpush.getRegistrationId(function(ret, err) {
					callBack(ret, err);
				});
			} else {
				callBack(ret, err);
			}
		});
	} else {
		jpush.getRegistrationId(function(ret, err) {
			callBack(ret, err);
		});
	}
}