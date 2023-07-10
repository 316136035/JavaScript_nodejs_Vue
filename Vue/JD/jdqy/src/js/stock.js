//引入md5加密算法
var md5 = require("md5");
//引入SHA256加密算法
const { SHA256 } = require("./sha256")
//接口  post：https://gia.jd.com/jsTk.do?a=7TJI7TceW0Pu7Tce7TZ37Tce7Tce7T7L7TcezlP47Tce7TZ37Tce7Tce7T7L7TceiQPmSg6PwHcPwj<PwH766kZivAbRS4WPwHcPw4wPwH7QieAewGAB6SAew4*jZPfTSj9364alZTFTR<bgfjPLwjctZ4b0wkWjf<N7fHJRTkojA<PRfLJ6644k6AfKA4fvSPJfA<7STjbKf<fO64pwT<ZcgAR<AkZiTLf76ApO6kP1TL7iASAewGAe6eAewQkXF0APwHcPwj<PwH7BJ17pit6PwHcPw4wPwH7*7Tce7TZ37TceWeAewGAe6eAewQF*7Tce7TZ37TcewlweOLfGFLAtZg6Dw06lZH3Qil6*wHwkigcxwgAtiB6PwHcPw4wPwH7HJ1P*FSAewGAB6T<Pw4wPwH7l7Tce7TZ37TceweDxvH<uwIAewGAe6eAewQiPwHcPwj<PwHcx7Tce7T7L7TcezeAewGAB6SAewQPjFgjuyQ6uil9C7T70wT2*wL6*wTaewTwjvQbjzg*PwHcPw4wPwH7xWeAewGAB6SAewGAewGAe6eAewQpBf0sPwHcPwj<PwH7UF06*wj*jZPfTSj9364alZTFTR<bgfjPLwjctZ4b0wkWjf<N7fHJRTkojA<PRfLJ6644k6AfKA4fvSPJfA<7STjbKf<fO64pwT<ZcgAR<AkZiTLf76ApO6kP1TL7iAAN36ANZSAb0wkbc6jP36AN36ARRwHRgRAkwf<FFTjDjgIAewGAe6eAewdNp7Tce7TZ37Tce7Tce7TJ</
//返回：
// data__eid_token = { "token": "jdd03L46USKOABH656SDHVWIC3B76HF3W4TAIV7QOZ4PIQT7PBI5AEJREKJWUPBROHJTENBJLLCHYDDSSXL5IAJNCYGL2XQAAAAMIIHOZ54IAAAAACT42WWJAKUUUNYX", "eid": "L46USKOABH656SDHVWIC3B76HF3W4TAIV7QOZ4PIQT7PBI5AEJREKJWUPBROHJTENBJLLCHYDDSSXL5IAJNCYGL2XQ", "gia_d": 1, "deMap": null, "ds": 120 }
//   CCCCCCCCC
skuId_cat_area_shopId_venderId_paramJson_num_bbTraffic= {
    "skuId": 100025875341,
    "cat": "737,13297,13691",
    "area": "19_1601_50258_129167",
    "shopId": "1000000907",
    "venderId": 1000000907,
    "paramJson": "{\"platform2\":\"100000000001\",\"specialAttrStr\":\"p0ppppppppp5pppppppppppppp\",\"skuMarkStr\":\"00\"}",
    "num": 1,
    "bbTraffic": "1"
}
stringify = JSON.stringify(skuId_cat_area_shopId_venderId_paramJson_num_bbTraffic)
console.log("CCCCCCCCC格式化后:", stringify)
//      RRRRRRRR
appid_functionId_client_clientVersion_t_body = {
    "appid": "pc-item-soa",
    "functionId": "pc_detailpage_wareBusiness",
    "client": "pc",
    "clientVersion": "1.0.0",
    "t": 1685008177444,
    "body": stringify
}
//      NNNNNNNNN
n = {
    skuId: 100025875341,
    cat: "737,13297,13691",
    area: "19_1601_50258_129167",
    shopId: "1000000907",
    venderId: 1000000907,
    paramJson:  "{\"platform2\":\"1\",\"specialAttrStr\":\"p0ppppppppp5pppppppppppppp\",\"skuMarkStr\":\"00\"}",
    num: 1,
    bbTraffic: ""
}
//N对象转J送字符串 复制给S
S = JSON.stringify(n)
console.log("NNNNNNNN 格式化后:",S)

//加密S JON字符串
const  sha256= SHA256(S).toString()
console.log("sha256:", sha256)
//RRRRRRRR 格式化
var Jappid_functionId_client_clientVersion_t_body_stringify= JSON.parse(JSON.stringify(appid_functionId_client_clientVersion_t_body));
console.log("RRRRRRRR 格式化后:",Jappid_functionId_client_clientVersion_t_body_stringify)
//这个参数就是window.PSign.sign(d) 中的d
Jappid_functionId_client_clientVersion_t_body_stringify.body=sha256
console.log("R完整格式化后",Jappid_functionId_client_clientVersion_t_body_stringify)
window_PSign = {
    _appId: "fb5df",        //
    _debug: false,             
    _defaultToken: "",
    _fingerprint: "7181391295806411",  //浏览器指纹
    _formatVersion: 2.1,
    _isNormal: false,
    _storageAlgnKey: "dy_algo_s_fb5df",
    _storageFormatVersionKey: "f_v_fb5df",
    _storageFpKey: "vk1_fb5df",
    _storagetokenKey: "dy_tk_s_fb5df",
    _timeout: 5,
    _token: "tk03w85231b5a18nb3FTo03kI9Sl-WCbpI_e9nl5ntR0wFFLwFNWWYCSWgipol_X4Eat3y0-HXAWLA-Z30IVsLq6uKxg",
    _version: "3.1",
    _ts: "20230525202044703"
}
//注意rd会变
//function test(tk,fp,ts,ai,algo){var rd='37pc0Mex8M00';var str=`${tk}${fp}${ts}${ai}${rd}`;return algo.MD5(str)}
function test(tk, fp, ts, ai) {
    var rd = "CSmsfYBBA19C";
    var str = `${tk}${fp}${ts}${ai}${rd}`;
    console.log("tk:", tk, " ", "fp:", fp, " ", "ts:", ts, " ", "ai:", ai, " ", "rd:", rd)
    console.log("str:", str)
    return md5(str)
    //  return SHA256(str)
}
const md5test = test(window_PSign._token, window_PSign._fingerprint, window_PSign._ts, window_PSign._appId)
console.log(" md5:", md5test)
var CryptoJS = require("crypto-js/crypto-js");
//a="appid:pc-item-soa"&body:"SHA256(S).toString())"&client:pc&clientVersion:1.0.0&functionId:pc_detailpage_wareBusiness&时间戳
a="appid:pc-item-soa&body:95b11a4eb48a6534e879c9570fb6688ef26e14ce52fbdced9362ddca1d768220&client:pc&clientVersion:1.0.0&functionId:pc_detailpage_wareBusiness&t:1685023384919"
//n= "上面的md5test"
n="bc2d318603744d3b6a055eb9c302ffef"
// str 是按照网站或者自己的规则拼接的字符串，像 BI AN 里面就是将传递的参数拼接成字符串
// key 是网站设置的秘钥，像 BI AN 就是secretKey
// 此方法为HMAC-SHA256的签名方式
let hmacSHA256 = CryptoJS.HmacSHA256(a, n);
console.log (hmacSHA256)
console.log (hmacSHA256.toString());



//时间格式化
function gettime(dt) {
    let year = dt.getFullYear();
    let month = (dt.getMonth() + 1).toString().padStart(2, '0');
    let date = dt.getDate().toString().padStart(2, '0');
    let hour = dt.getHours().toString().padStart(2, '0');
    let minute = dt.getMinutes().toString().padStart(2, '0');
    let second = dt.getSeconds().toString().padStart(2, '0');
    let Millisecond = dt.getMilliseconds()
    console.log(`${year}${month}${date}${hour}${minute}${second}${Millisecond}`)
    return (`${year}${month}${date}${hour}${minute}${second}${Millisecond}`)

};

