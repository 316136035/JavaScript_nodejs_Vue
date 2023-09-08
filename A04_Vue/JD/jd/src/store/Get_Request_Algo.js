var bp_bizid = "JDLS-PC-SEARCH"; //主页script里面返回
var _riskFpMode = _riskFpMode || "strict";
var jdtRiskContext = {
    d: !1,
    canvas_fp_md5: "",
    isJsTokenFinished: !1,
    version: "3.1.1.0",
    deviceInfo: {jsToken: "", eid: "", fp: ""}
}
var collectConfig = {
    fp: {
        language: "language",
        userAgent: "userAgent",
        colorDepth: "colorDepth",
        screenResolution: "screenResolution",
        timezoneOffset: "timezoneOffset",
        sessionStorage: "sessionStorage",
        localStorage: "localStorage",
        indexedDb: "indexedDb",
        addBehavior: "addBehavior",
        openDatabase: "openDatabase",
        cpuClass: "cpuClass",
        platform: "platform",
        hardwareConcurrency: "hardwareConcurrency",
        audioKey: "audioKey",
        doNotTrack: "doNotTrack",
        plugins: "plugins",
        canvas: "canvas",
        webgl: "webgl"
    },
    env: {
        color: "color",
        canvas: "canvas",
        browserMode: "browserMode",
        fonts: "fonts",
        feature: "feature",
        plugins: "plugins",
        screen: "screen",
        position: "position",
        storeCheck: "storeCheck"
    },
    store: {
        giaDKey: "_gia_d",
        canvasFpKey: "CA1AN5BV0CA8DS2EPC",
        ldeKey: "GIA_LDE_MAP_KEY",
        strict: {
            jsTokenKey: "3AB9D23F7A4B3CSS",
            fpKey: "PCA9D23F7A4B3CSS",
            fpTsKey: "PCTSD23F7A4B3CSS",
            eidKey: "3AB9D23F7A4B3C9B"
        },
        fast: {
            jsTokenKey: "3AB9D23F7A4B3CFF",
            fpKey: "PCA9D23F7A4B3CFF",
            fpTsKey: "PCTSD23F7A4B3CFF",
            eidKey: "3AB9D23F7A4B3CFF"
        }
    }
}
var jdtRiskUtil = function (l) {
    var m = "https://", n = "gia.jd.com",
        g = "cat=670%2C671%2C673", f = "jd.com", d = "list.jd.com/list.html";
    // (function () {
    //     var a = document.location.href.toString();
    //     try {
    //         var b = /^https?:\/\/(?:\w+\.)*?(\w*\.(?:com\.cn|cn|com|net|id))[\\\/]*/.exec(a);
    //         f = b && 1 < b.length ? b[1] : document.domain.split(".").slice(-2).join(".");
    //         var e = a.indexOf("?");
    //         0 < e && (g = a.substring(e + 1), 500 < g.length && (g = g.substring(0, 499)), a = a.substring(0, e));
    //         d = a.substring(m.length)
    //     } catch (c) {
    //     }
    // })();
    l.getCurrentPageUrl = function () {
        return d
    };
    l.getCurrentPageProtocol = function () {
        return m
    };
    l.getCurrentRootDomain = function () {
        return f
    };
    l.getFpServerDomain = function () {
        return n
    };
    l.getUrlQueryStr = function () {
        return g
    };
    l.getBizId = function () {
        return "undefined" == typeof bp_bizid ? "" : bp_bizid
    };
    l.createWorker = function () {
        if (window.Worker && !l.worker) {
            try {
                var a = new Blob(["onmessage = function (event) {\n    var data = JSON.parse(event.data);\n    try {\n        var httpRequest;\n        try {\n            httpRequest = new XMLHttpRequest();\n        } catch (h) {}\n        if (!httpRequest)\n            try {\n                httpRequest = new (window['ActiveXObject'])('Microsoft.XMLHTTP')\n            } catch (l) {}\n        if (!httpRequest)\n            try {\n                httpRequest = new (window['ActiveXObject'])('Msxml2.XMLHTTP')\n            } catch (r) {}\n        if (!httpRequest)\n            try {\n                httpRequest = new (window['ActiveXObject'])('Msxml3.XMLHTTP')\n            } catch (n) {}\n\n        if(data){\n            httpRequest['open']('POST', data.url, false);\n            httpRequest['setRequestHeader']('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');\n            httpRequest['onreadystatechange'] = function () {\n                if (4 === httpRequest['readyState'] && 200 === httpRequest['status']) {\n                    postMessage(httpRequest.responseText);\n                }\n            };\n            httpRequest['send'](data.data);\n        }\n\n    }catch (e){console.error(e);}\n};"], {type: "application/javascript"})
            } catch (b) {
                window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder, a = new BlobBuilder, a.append("onmessage = function (event) {\n    var data = JSON.parse(event.data);\n    try {\n        var httpRequest;\n        try {\n            httpRequest = new XMLHttpRequest();\n        } catch (h) {}\n        if (!httpRequest)\n            try {\n                httpRequest = new (window['ActiveXObject'])('Microsoft.XMLHTTP')\n            } catch (l) {}\n        if (!httpRequest)\n            try {\n                httpRequest = new (window['ActiveXObject'])('Msxml2.XMLHTTP')\n            } catch (r) {}\n        if (!httpRequest)\n            try {\n                httpRequest = new (window['ActiveXObject'])('Msxml3.XMLHTTP')\n            } catch (n) {}\n\n        if(data){\n            httpRequest['open']('POST', data.url, false);\n            httpRequest['setRequestHeader']('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');\n            httpRequest['onreadystatechange'] = function () {\n                if (4 === httpRequest['readyState'] && 200 === httpRequest['status']) {\n                    postMessage(httpRequest.responseText);\n                }\n            };\n            httpRequest['send'](data.data);\n        }\n\n    }catch (e){console.error(e);}\n};"), a = a.getBlob()
            }
            try {
                l.worker = new Worker(URL.createObjectURL(a))
            } catch (b) {
            }
        }
    };
    l.reportWorker = function (a, b, e, c) {
        try {
            l.worker && (this.worker.postMessage(JSON.stringify({
                url: a,
                data: b,
                success: !1,
                async: !1
            })), this.worker.onmessage = function (h) {
            })
        } catch (h) {
        }
    };
    l.compareVersion = function (a, b) {
        try {
            if (a === b) return 0;
            var e = a.split(".");
            var c = b.split(".");
            for (a = 0; a < e.length; a++) {
                var h = parseInt(e[a]);
                if (!c[a]) return 1;
                var k = parseInt(c[a]);
                if (h < k) break;
                if (h > k) return 1
            }
        } catch (p) {
        }
        return -1
    };
    l.obtainPin = function (a) {
        var b = "";
        "string" === typeof jd_jr_td_risk_pin && 1 == a ? b = jd_jr_td_risk_pin : "string" === typeof pin ? b = pin : "object" === typeof pin && "string" === typeof jd_jr_td_risk_pin && (b = jd_jr_td_risk_pin);
        return b
    };
    l.sendRequest = function (a, b, e) {
        try {
            try {
                var c = new window.XMLHttpRequest
            } catch (h) {
            }
            if (!c) try {
                c = new window.ActiveXObject("Microsoft.XMLHTTP")
            } catch (h) {
            }
            if (!c) try {
                c = new window.ActiveXObject("Msxml2.XMLHTTP")
            } catch (h) {
            }
            if (!c) try {
                c = new window.ActiveXObject("Msxml3.XMLHTTP")
            } catch (h) {
            }
            c.open("POST", a, !0);
            c.timeout = 1E4;
            c.withCredentials = !0;
            c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
            c.onreadystatechange = function () {
                4 === c.readyState && 200 === c.status && e && e(c.responseText)
            };
            c.send(b)
        } catch (h) {
            jdtRiskContext.d && console.error("sendRequest error : ", h)
        }
    };
    l.isDegrade = function () {
        var a = jdtRiskCookieManager.getCookie(collectConfig.store.giaDKey);
        if (a && 1 == a) return !0;
        a = jdtLocalStorageManager.get(collectConfig.store.ldeKey);
        if (!a) return !1;
        try {
            var b = JSON.parse(a)[jdtRiskUtil.getBizId()];
            return b ? b >= (new Date).getTime() : !1
        } catch (e) {
        }
        return !1
    };
    l.isValidJsToken = function (a) {
        return a ? a.startsWith("jdd03") && a.endsWith("X") : !1
    };
    l.cleanAndPushDeS = function (a, b) {
        try {
            if (a && b) {
                var e = jdtLocalStorageManager.get(collectConfig.store.ldeKey), c = {};
                e && (c = JSON.parse(e));
                var h = (new Date).getTime(), k;
                for (k in c) c[k] < h && delete c[k];
                c[a] = h + 1E3 * b;
                jdtLocalStorageManager.set(collectConfig.store.ldeKey, JSON.stringify(c))
            }
        } catch (p) {
        }
    };
    l.randomStr = function (a) {
        var b = "";
        try {
            for (var e = 0; e < a; e++) b += "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(62 * Math.random()))
        } catch (c) {
        }
        return b
    };
    return l
}(jdtRiskUtil || {})
var jdtRiskEncryptUtil = function (l) {
    l.MD5 = function () {
        function m(a, b, e, c, h, k) {
            a = d(d(b, a), d(c, k));
            return d(a << h | a >>> 32 - h, e)
        }

        function n(a, b, e, c, h, k, p) {
            return m(b & e | ~b & c, a, b, h, k, p)
        }

        function g(a, b, e, c, h, k, p) {
            return m(b & c | e & ~c, a, b, h, k, p)
        }

        function f(a, b, e, c, h, k, p) {
            return m(e ^ (b | ~c), a, b, h, k, p)
        }

        function d(a, b) {
            var e = (a & 65535) + (b & 65535);
            return (a >> 16) + (b >> 16) + (e >> 16) << 16 | e & 65535
        }

        return {
            hex_md5: function (a) {
                if (null == a || void 0 == a || "" == a) return "";
                if (null == a || void 0 == a || "" == a) var b = ""; else {
                    b = [];
                    for (var e = 0; e < 8 * a.length; e += 8) b[e >> 5] |= (a.charCodeAt(e / 8) & 255) << e % 32
                }
                a = 8 * a.length;
                b[a >> 5] |= 128 << a % 32;
                b[(a + 64 >>> 9 << 4) + 14] = a;
                a = 1732584193;
                e = -271733879;
                for (var c = -1732584194, h = 271733878, k = 0; k < b.length; k += 16) {
                    var p = a, q = e, t = c, u = h;
                    a = n(a, e, c, h, b[k + 0], 7, -680876936);
                    h = n(h, a, e, c, b[k + 1], 12, -389564586);
                    c = n(c, h, a, e, b[k + 2], 17, 606105819);
                    e = n(e, c, h, a, b[k + 3], 22, -1044525330);
                    a = n(a, e, c, h, b[k + 4], 7, -176418897);
                    h = n(h, a, e, c, b[k + 5], 12, 1200080426);
                    c = n(c, h, a, e, b[k + 6], 17, -1473231341);
                    e = n(e, c, h, a, b[k + 7], 22, -45705983);
                    a = n(a, e, c, h, b[k + 8], 7, 1770035416);
                    h = n(h, a, e, c, b[k + 9], 12, -1958414417);
                    c = n(c, h, a, e, b[k + 10], 17, -42063);
                    e = n(e, c, h, a, b[k + 11], 22, -1990404162);
                    a = n(a, e, c, h, b[k + 12], 7, 1804603682);
                    h = n(h, a, e, c, b[k + 13], 12, -40341101);
                    c = n(c, h, a, e, b[k + 14], 17, -1502002290);
                    e = n(e, c, h, a, b[k + 15], 22, 1236535329);
                    a = g(a, e, c, h, b[k + 1], 5, -165796510);
                    h = g(h, a, e, c, b[k + 6], 9, -1069501632);
                    c = g(c, h, a, e, b[k + 11], 14, 643717713);
                    e = g(e, c, h, a, b[k + 0], 20, -373897302);
                    a = g(a, e, c, h, b[k + 5], 5, -701558691);
                    h = g(h, a, e, c, b[k + 10], 9, 38016083);
                    c = g(c, h, a, e, b[k + 15], 14, -660478335);
                    e = g(e, c, h, a, b[k + 4], 20, -405537848);
                    a = g(a, e, c, h, b[k + 9], 5, 568446438);
                    h = g(h, a, e, c, b[k + 14], 9, -1019803690);
                    c = g(c, h, a, e, b[k + 3], 14, -187363961);
                    e = g(e, c, h, a, b[k + 8], 20, 1163531501);
                    a = g(a, e, c, h, b[k + 13], 5, -1444681467);
                    h = g(h, a, e, c, b[k + 2], 9, -51403784);
                    c = g(c, h, a, e, b[k + 7], 14, 1735328473);
                    e = g(e, c, h, a, b[k + 12], 20, -1926607734);
                    a = m(e ^ c ^ h, a, e, b[k + 5], 4, -378558);
                    h = m(a ^ e ^ c, h, a, b[k + 8], 11, -2022574463);
                    c = m(h ^ a ^ e, c, h, b[k + 11], 16, 1839030562);
                    e = m(c ^ h ^ a, e, c, b[k + 14], 23, -35309556);
                    a = m(e ^ c ^ h, a, e, b[k + 1], 4, -1530992060);
                    h = m(a ^ e ^ c, h, a, b[k + 4], 11, 1272893353);
                    c = m(h ^ a ^ e, c, h, b[k + 7], 16, -155497632);
                    e = m(c ^ h ^ a, e, c, b[k + 10], 23, -1094730640);
                    a = m(e ^ c ^ h, a, e, b[k + 13], 4, 681279174);
                    h = m(a ^ e ^ c, h, a, b[k + 0], 11, -358537222);
                    c = m(h ^ a ^ e, c, h, b[k + 3], 16, -722521979);
                    e = m(c ^ h ^ a, e, c, b[k + 6], 23, 76029189);
                    a = m(e ^ c ^ h, a, e, b[k + 9], 4, -640364487);
                    h = m(a ^ e ^ c, h, a, b[k + 12], 11, -421815835);
                    c = m(h ^ a ^ e, c, h, b[k + 15], 16, 530742520);
                    e = m(c ^ h ^ a, e, c, b[k + 2], 23, -995338651);
                    a = f(a, e, c, h, b[k + 0], 6, -198630844);
                    h = f(h, a, e, c, b[k + 7], 10, 1126891415);
                    c = f(c, h, a, e, b[k + 14], 15, -1416354905);
                    e = f(e, c, h, a, b[k + 5], 21, -57434055);
                    a = f(a, e, c, h, b[k + 12], 6, 1700485571);
                    h = f(h, a, e, c, b[k + 3], 10, -1894986606);
                    c = f(c, h, a, e, b[k + 10], 15, -1051523);
                    e = f(e, c, h, a, b[k + 1], 21, -2054922799);
                    a = f(a, e, c, h, b[k + 8], 6, 1873313359);
                    h = f(h, a, e, c, b[k + 15], 10, -30611744);
                    c = f(c, h, a, e, b[k + 6], 15, -1560198380);
                    e = f(e, c, h, a, b[k + 13], 21, 1309151649);
                    a = f(a, e, c, h, b[k + 4], 6, -145523070);
                    h = f(h, a, e, c, b[k + 11], 10, -1120210379);
                    c = f(c, h, a, e, b[k + 2], 15, 718787259);
                    e = f(e, c, h, a, b[k + 9], 21, -343485551);
                    a = d(a, p);
                    e = d(e, q);
                    c = d(c, t);
                    h = d(h, u)
                }
                b = [a, e, c, h];
                a = "";
                for (e = 0; e < 4 * b.length; e++) a += "0123456789abcdef".charAt(b[e >> 2] >> e % 4 * 8 + 4 & 15) + "0123456789abcdef".charAt(b[e >> 2] >> e % 4 * 8 & 15);
                return a
            }
        }
    }();
    l.HASH = function () {
        function m(b, e) {
            b = [b[0] >>> 16, b[0] & 65535, b[1] >>> 16, b[1] & 65535];
            e = [e[0] >>> 16, e[0] & 65535, e[1] >>> 16, e[1] & 65535];
            var c = [0, 0, 0, 0];
            c[3] += b[3] + e[3];
            c[2] += c[3] >>> 16;
            c[3] &= 65535;
            c[2] += b[2] + e[2];
            c[1] += c[2] >>> 16;
            c[2] &= 65535;
            c[1] += b[1] + e[1];
            c[0] += c[1] >>> 16;
            c[1] &= 65535;
            c[0] += b[0] + e[0];
            c[0] &= 65535;
            return [c[0] << 16 | c[1], c[2] << 16 | c[3]]
        }

        function n(b, e) {
            b = [b[0] >>> 16, b[0] & 65535, b[1] >>> 16, b[1] & 65535];
            e = [e[0] >>> 16, e[0] & 65535, e[1] >>> 16, e[1] & 65535];
            var c = [0, 0, 0, 0];
            c[3] += b[3] * e[3];
            c[2] += c[3] >>> 16;
            c[3] &= 65535;
            c[2] += b[2] * e[3];
            c[1] += c[2] >>> 16;
            c[2] &= 65535;
            c[2] += b[3] * e[2];
            c[1] += c[2] >>> 16;
            c[2] &= 65535;
            c[1] += b[1] * e[3];
            c[0] += c[1] >>> 16;
            c[1] &= 65535;
            c[1] += b[2] * e[2];
            c[0] += c[1] >>> 16;
            c[1] &= 65535;
            c[1] += b[3] * e[1];
            c[0] += c[1] >>> 16;
            c[1] &= 65535;
            c[0] += b[0] * e[3] + b[1] * e[2] + b[2] * e[1] + b[3] * e[0];
            c[0] &= 65535;
            return [c[0] << 16 | c[1], c[2] << 16 | c[3]]
        }

        function g(b, e) {
            e %= 64;
            if (32 === e) return [b[1], b[0]];
            if (32 > e) return [b[0] << e | b[1] >>> 32 - e, b[1] << e | b[0] >>> 32 - e];
            e -= 32;
            return [b[1] << e | b[0] >>> 32 - e, b[0] << e | b[1] >>> 32 - e]
        }

        function f(b, e) {
            e %= 64;
            return 0 === e ? b : 32 > e ? [b[0] << e | b[1] >>> 32 - e, b[1] << e] : [b[1] << e - 32, 0]
        }

        function d(b, e) {
            return [b[0] ^ e[0], b[1] ^ e[1]]
        }

        function a(b) {
            b = d(b, [0, b[0] >>> 1]);
            b = n(b, [4283543511, 3981806797]);
            b = d(b, [0, b[0] >>> 1]);
            b = n(b, [3301882366, 444984403]);
            return b = d(b, [0, b[0] >>> 1])
        }

        return {
            hash128: function (b, e) {
                b = b || "";
                var c = e || 0;
                e = b.length % 16;
                var h = b.length - e, k = [0, c];
                c = [0, c];
                for (var p, q, t = [2277735313, 289559509], u = [1291169091, 658871167], r = 0; r < h; r += 16) p = [b.charCodeAt(r + 4) & 255 | (b.charCodeAt(r + 5) & 255) << 8 | (b.charCodeAt(r + 6) & 255) << 16 | (b.charCodeAt(r + 7) & 255) << 24, b.charCodeAt(r) & 255 | (b.charCodeAt(r + 1) & 255) << 8 | (b.charCodeAt(r + 2) & 255) << 16 | (b.charCodeAt(r + 3) & 255) << 24], q = [b.charCodeAt(r + 12) & 255 | (b.charCodeAt(r + 13) & 255) << 8 | (b.charCodeAt(r + 14) & 255) << 16 | (b.charCodeAt(r + 15) & 255) << 24, b.charCodeAt(r + 8) & 255 | (b.charCodeAt(r + 9) & 255) << 8 | (b.charCodeAt(r + 10) & 255) << 16 | (b.charCodeAt(r + 11) & 255) << 24], p = n(p, t), p = g(p, 31), p = n(p, u), k = d(k, p), k = g(k, 27), k = m(k, c), k = m(n(k, [0, 5]), [0, 1390208809]), q = n(q, u), q = g(q, 33), q = n(q, t), c = d(c, q), c = g(c, 31), c = m(c, k), c = m(n(c, [0, 5]), [0, 944331445]);
                p = [0, 0];
                q = [0, 0];
                switch (e) {
                    case 15:
                        q = d(q, f([0, b.charCodeAt(r + 14)], 48));
                    case 14:
                        q = d(q, f([0, b.charCodeAt(r + 13)], 40));
                    case 13:
                        q = d(q, f([0, b.charCodeAt(r + 12)], 32));
                    case 12:
                        q = d(q, f([0, b.charCodeAt(r + 11)], 24));
                    case 11:
                        q = d(q, f([0, b.charCodeAt(r + 10)], 16));
                    case 10:
                        q = d(q, f([0, b.charCodeAt(r + 9)], 8));
                    case 9:
                        q = d(q, [0, b.charCodeAt(r + 8)]), q = n(q, u), q = g(q, 33), q = n(q, t), c = d(c, q);
                    case 8:
                        p = d(p, f([0, b.charCodeAt(r + 7)], 56));
                    case 7:
                        p = d(p, f([0, b.charCodeAt(r + 6)], 48));
                    case 6:
                        p = d(p, f([0, b.charCodeAt(r + 5)], 40));
                    case 5:
                        p = d(p, f([0, b.charCodeAt(r + 4)], 32));
                    case 4:
                        p = d(p, f([0, b.charCodeAt(r + 3)], 24));
                    case 3:
                        p = d(p, f([0, b.charCodeAt(r + 2)], 16));
                    case 2:
                        p = d(p, f([0, b.charCodeAt(r + 1)], 8));
                    case 1:
                        p = d(p, [0, b.charCodeAt(r)]), p = n(p, t), p = g(p, 31), p = n(p, u), k = d(k, p)
                }
                k = d(k, [0, b.length]);
                c = d(c, [0, b.length]);
                k = m(k, c);
                c = m(c, k);
                k = a(k);
                c = a(c);
                k = m(k, c);
                c = m(c, k);
                return ("00000000" + (k[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (k[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8)
            }
        }
    }();
    l.TDEncrypt = function () {
        return function (m) {
            m = JSON.stringify(m);
            m = encodeURIComponent(m);
            var n = "", g = 0;
            do {
                var f = m.charCodeAt(g++);
                var d = m.charCodeAt(g++);
                var a = m.charCodeAt(g++);
                var b = f >> 2;
                f = (f & 3) << 4 | d >> 4;
                var e = (d & 15) << 2 | a >> 6;
                var c = a & 63;
                isNaN(d) ? e = c = 64 : isNaN(a) && (c = 64);
                n = n + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(b) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(f) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(e) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(c)
            } while (g < m.length);
            return n + "/"
        }
    }();
    return l
}(jdtRiskEncryptUtil || {})
var JdtRiskFingerPrint = function (l) {
    function m() {
        //var f = document.createElement("canvas");
        //return !(!f.getContext || !f.getContext("2d"))
        return true; //浏览器环境返回true;
    }

    l = l || {};
    var n = "", g = function () {
        var f = {};
        f.nativeForEach = Array.prototype.forEach;
        f.nativeMap = Array.prototype.map;
        f.each = function (d, a, b) {
            if (null !== d) if (f.nativeForEach && d.forEach === f.nativeForEach) d.forEach(a, b); else if (d.length === +d.length) for (var e = 0, c = d.length; e < c && a.call(b, d[e], e, d) !== {}; e++) ; else for (e in d) if (d.hasOwnProperty(e) && a.call(b, d[e], e, d) === {}) break
        };
        f.map = function (d, a, b) {
            var e = [];
            if (null == d) return e;
            if (f.nativeMap && d.map === f.nativeMap) return d.map(a, b);
            f.each(d, function (c, h, k) {
                e[e.length] = a.call(b, c, h, k)
            });
            return e
        };
        f.execute = function (d) {
            try {
                if (this[d]) {
                    var a = (new Date).getTime(), b = this[d]();
                    jdtRiskContext.d && console.log("FP function : [" + d + "] Cost time :", (new Date).getTime() - a);
                    return b
                }
            } catch (e) {
                return jdtRiskContext.d && console.log("fp collect error", e), ""
            }
        };
        f.getLanguage = function () {
            return navigator.language
        };
        f.getUserAgent = function () {
            return navigator.userAgent.toLowerCase()
        };
        f.getOsInfo = function () {
            var d = f.getUserAgent(), a = "NA", b = "NA";
            try {
                -1 != d.indexOf("win") && -1 != d.indexOf("95") && (a = "windows", b = "95"), -1 != d.indexOf("win") && -1 != d.indexOf("98") && (a = "windows", b = "98"), -1 != d.indexOf("win 9x") && -1 != d.indexOf("4.90") && (a = "windows", b = "me"), -1 != d.indexOf("win") && -1 != d.indexOf("nt 5.0") && (a = "windows", b = "2000"), -1 != d.indexOf("win") && -1 != d.indexOf("nt") && (a = "windows", b = "NT"), -1 != d.indexOf("win") && -1 != d.indexOf("nt 5.1") && (a = "windows", b = "xp"), -1 != d.indexOf("win") && -1 != d.indexOf("32") && (a = "windows", b = "32"), -1 != d.indexOf("win") && -1 != d.indexOf("nt 5.1") && (a = "windows", b = "7"), -1 != d.indexOf("win") && -1 != d.indexOf("6.0") && (a = "windows", b = "8"), -1 == d.indexOf("win") || -1 == d.indexOf("nt 6.0") && -1 == d.indexOf("nt 6.1") || (a = "windows", b = "9"), -1 != d.indexOf("win") && -1 != d.indexOf("nt 6.2") && (a = "windows", b = "10"), -1 != d.indexOf("linux") && (a = "linux"), -1 != d.indexOf("unix") && (a = "unix"), -1 != d.indexOf("sun") && -1 != d.indexOf("os") && (a = "sun os"), -1 != d.indexOf("ibm") && -1 != d.indexOf("os") && (a = "ibm os/2"), -1 != d.indexOf("mac") && -1 != d.indexOf("pc") && (a = "mac"), -1 != d.indexOf("aix") && (a = "aix"), -1 != d.indexOf("powerpc") && (a = "powerPC"), -1 != d.indexOf("hpux") && (a = "hpux"), -1 != d.indexOf("netbsd") && (a = "NetBSD"), -1 != d.indexOf("bsd") && (a = "BSD"), -1 != d.indexOf("osf1") && (a = "OSF1"), -1 != d.indexOf("irix") && (a = "IRIX", b = ""), -1 != d.indexOf("freebsd") && (a = "FreeBSD"), -1 != d.indexOf("symbianos") && (a = "SymbianOS", b = d.substring(d.indexOf("SymbianOS/") + 10, 3))
            } catch (e) {
            }
            return {os: a, osVersion: b}
        };
        f.getBrowserInfo = function () {
            var d = f.getUserAgent(), a = "NA", b = "NA";
            try {
                -1 != d.indexOf("msie") && (a = "ie", b = d.substring(d.indexOf("msie ") + 5), b.indexOf(";") && (b = b.substring(0, b.indexOf(";"))));
                -1 != d.indexOf("firefox") && (a = "Firefox", b = d.substring(d.indexOf("firefox/") + 8));
                -1 != d.indexOf("opera") && (a = "Opera", b = d.substring(d.indexOf("opera/") + 6, 4));
                -1 != d.indexOf("safari") && (a = "safari", b = d.substring(d.indexOf("safari/") + 7));
                -1 != d.indexOf("chrome") && (a = "chrome", b = d.substring(d.indexOf("chrome/") + 7), b.indexOf(" ") && (b = b.substring(0, b.indexOf(" "))));
                -1 != d.indexOf("navigator") && (a = "navigator", b = d.substring(d.indexOf("navigator/") + 10));
                -1 != d.indexOf("applewebkit") && (a = "applewebkit_chrome", b = d.substring(d.indexOf("applewebkit/") + 12), b.indexOf(" ") && (b = b.substring(0, b.indexOf(" "))));
                -1 != d.indexOf("sogoumobilebrowser") && (a = "\u641c\u72d7\u624b\u673a\u6d4f\u89c8\u5668");
                if (-1 != d.indexOf("ucbrowser") || -1 != d.indexOf("ucweb")) a = "UC\u6d4f\u89c8\u5668";
                if (-1 != d.indexOf("qqbrowser") || -1 != d.indexOf("tencenttraveler")) a = "QQ\u6d4f\u89c8\u5668";
                -1 != d.indexOf("metasr") && (a = "\u641c\u72d7\u6d4f\u89c8\u5668");
                -1 != d.indexOf("360se") && (a = "360\u6d4f\u89c8\u5668");
                -1 != d.indexOf("the world") && (a = "\u4e16\u754c\u4e4b\u7a97\u6d4f\u89c8\u5668");
                -1 != d.indexOf("maxthon") && (a = "\u9068\u6e38\u6d4f\u89c8\u5668")
            } catch (e) {
            }
            return {browser: a, browserVersion: b}
        };
        f.getColorDepth = function () {
            return screen.colorDepth
        };
        f.getScreenResolution = function () {
            return [screen.height, screen.width].join("x")
        };
        f.getTimezoneOffset = function () {
            return (new Date).getTimezoneOffset()
        };
        f.getSessionStorageSupport = function () {
            try {
                return !!window.sessionStorage
            } catch (d) {
                return !0
            }
        };
        f.getLocalStorageSupport = function () {
            try {
                return !!window.localStorage
            } catch (d) {
                return !0
            }
        };
        f.getIndexedDBSupport = function () {
            return !!window.indexedDB
        };
        f.getAddBehaviorSupport = function () {
            return document.body && !!document.body.addBehavior
        };
        f.getOpenDatabaseSupport = function () {
            return !!window.openDatabase
        };
        f.getNavigatorCpuClass = function () {
            return navigator.oscpu || navigator.cpuClass ? navigator.cpuClass : "NA"
        };
        f.getNavigatorPlatform = function () {
            return navigator.platform ? navigator.platform : "NA"
        };
        f.getHardwareConcurrency = function () {
            return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "NA"
        };
        f.getAudioKey = function () {
            var d = "", a = navigator.userAgent.toLowerCase();
            -1 != a.indexOf("chrome") && (a = a.substring(a.indexOf("chrome/") + 7), a.indexOf(" ") && (d = a = a.substring(0, a.indexOf(" ")), "" != d && d.indexOf(".") && (d = a.substring(0, a.indexOf(".")))));
            a = !0;
            "" != d && !isNaN(d) && 47 > parseInt(d) && (a = !1);
            d = "";
            a && (a = window.AudioContext || window.webkitAudioContext) && (a = new a, d = a.sampleRate.toString(), a.close && a.close());
            return d
        };
        f.getDoNotTrack = function () {
            return navigator.doNotTrack || navigator.msDoNotTrack ? navigator.doNotTrack || navigator.msDoNotTrack : "NA"
        };
        f.getIEPluginsString = function () {
            return void 0 !== window.ActiveXObject ? f.map("AcroPDF.PDF;Adodb.Stream;AgControl.AgControl;DevalVRXCtrl.DevalVRXCtrl.1;MacromediaFlashPaper.MacromediaFlashPaper;Msxml2.DOMDocument;Msxml2.XMLHTTP;PDF.PdfCtrl;QuickTime.QuickTime;QuickTimeCheckObject.QuickTimeCheck.1;RealPlayer;RealPlayer.RealPlayer(tm) ActiveX Control (32-bit);RealVideo.RealVideo(tm) ActiveX Control (32-bit);Scripting.Dictionary;SWCtl.SWCtl;Shell.UIHelper;ShockwaveFlash.ShockwaveFlash;Skype.Detection;TDCCtl.TDCCtl;WMPlayer.OCX;rmocx.RealPlayer G2 Control;rmocx.RealPlayer G2 Control.1".split(";"), function (d) {
                try {
                    return new ActiveXObject(d), d
                } catch (a) {
                    return null
                }
            }).join(";") : ""
        };
        f.getRegularPluginsString = function () {
            // return f.map(navigator.plugins, function (d) {
            //     var a = f.map(d, function (b) {
            //         return [b.type, b.suffixes].join("~")
            //     }).join(",");
            //     return [d.name, d.description, a].join("::")
            // }, this).join(";")
            //按环境生成，不知道是否必须，自测
            return "PDF Viewer::Portable Document Format::application/pdf~pdf,text/pdf~pdf;Chrome PDF Viewer::Portable Document Format::application/pdf~pdf,text/pdf~pdf;Chromium PDF Viewer::Portable Document Format::application/pdf~pdf,text/pdf~pdf;Microsoft Edge PDF Viewer::Portable Document Format::application/pdf~pdf,text/pdf~pdf;WebKit built-in PDF::Portable Document Format::application/pdf~pdf,text/pdf~pdf"
        };
        f.getCanvasFp = function () {
            // var d = [], a = document.createElement("canvas");
            // a.width = 2E3;
            // a.height = 200;
            // a.style.display = "inline";
            // var b = a.getContext("2d");
            // b.rect(0, 0, 10, 10);
            // b.rect(2, 2, 6, 6);
            // d.push("cw:" + (!1 === b.isPointInPath(5, 5, "evenodd") ? "yes" : "no"));
            // b.textBaseline = "alphabetic";
            // b.fillStyle = "#f60";
            // b.fillRect(125, 1, 62, 20);
            // b.fillStyle = "#069";
            // b.font = "11pt no-real-font-123";
            // b.fillText("Cwwm aa fjorddbank glbyphs veext qtuiz, \ud83d\ude03", 2, 15);
            // b.fillStyle = "rgba(102, 204, 0, 0.2)";
            // b.font = "18pt Arial";
            // b.fillText("Cwwm aa fjorddbank glbyphs veext qtuiz, \ud83d\ude03", 4, 45);
            // b.globalCompositeOperation = "multiply";
            // b.fillStyle = "rgb(255,0,255)";
            // b.beginPath();
            // b.arc(50, 50, 50, 0, 2 * Math.PI, !0);
            // b.closePath();
            // b.fill();
            // b.fillStyle = "rgb(0,255,255)";
            // b.beginPath();
            // b.arc(100, 50, 50, 0, 2 * Math.PI, !0);
            // b.closePath();
            // b.fill();
            // b.fillStyle = "rgb(255,255,0)";
            // b.beginPath();
            // b.arc(75, 100, 50, 0, 2 * Math.PI, !0);
            // b.closePath();
            // b.fill();
            // b.fillStyle = "rgb(255,0,255)";
            // b.arc(75, 75, 75, 0, 2 * Math.PI, !0);
            // b.arc(75, 75, 25, 0, 2 * Math.PI, !0);
            // b.fill("evenodd");
            // d.push("cfp:" + a.toDataURL());
            // return d.join("~")
            //按环境生成，不知道是否必须，自测
            return "cw:yes~cfp:data:image/png;base64,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QIAAAQIECBAgQIAAAQIE5rpA9QH6JGH6+K70gSx49a8Z3PJSvv6Lm3Pn2Q91xTBfXjSaLV8dzROP35EsbVq6GJon2dFKq/m3iwABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgSugMCcCtAn+k3Ymb7u4vfSl4x8LHc/fij3Pn1j7jzbO6vWLy86mK1fOJVdD67IudveHAvM00pr26z24WEECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgcFmBORugv3PFlwTq1/3+mqzduTifHVma/sN9uePcdTP6joz2nMh3bj2ThSv+lJ3fWpk3+n+bZHcrreEZfY5iBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDBjAvMmQJ9MbCxUTz6/qz8PfO+9OZm1+dz+q7Pk3I255Y1r8vYZ65fbrX40yem8+L5/ZO8Nr+e+v4xky9fek2fvFOWQ1wAAB99JREFUOpTf3X1aWD5j76hCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQmBWBeR2gz4qwhxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIBAFQIC9CrGpEkCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKC0gQC8trD4BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIVCEgQK9iTJokQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgdICAvTSwuoTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQBUCAvQqxqRJAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgtIEAvLaw+AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECFQhIECvYkyaJECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHSAgL00sLqEyBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgEAVAgL0KsakSQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoLSBALy2sPgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhUISBAr2JMmiRAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACB0gIC9NLC6hMgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIBAFQIC9CrGpEkCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKC0gQC8trD4BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIVCEgQK9iTJokQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgdICAvTSwuoTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQBUCAvQqxqRJAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgtIEAvLaw+AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECFQhIECvYkyaJECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHSAgL00sLqEyBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgEAVAgL0KsakSQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoLSBALy2sPgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhUISBAr2JMmiRAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACB0gIC9NLC6hMgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIBAFQIC9CrGpEkCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKC0gQC8trD4BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIVCEgQK9iTJokQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgdICAvTSwuoTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQBUCAvQqxqRJAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgtIEAvLaw+AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECFQhIECvYkyaJECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHSAgL00sLqEyBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgEAVAgL0KsakSQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoLSBALy2sPgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhUISBAr2JMmiRAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACB0gIC9NLC6hMgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIBAFQIC9CrGpEkCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKC0gQC8trD4BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIVCEgQK9iTJokQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgdICAvTSwuoTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQBUCAvQqxqRJAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgtIEAvLaw+AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECFQhIECvYkyaJECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHSAgL00sLqEyBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgEAVAgL0KsakSQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoLSBALy2sPgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhUISBAr2JMmiRAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACB0gIC9NLC6hMgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIBAFQIC9CrGpEkCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKC3wH3JzKeW38MokAAAAAElFTkSuQmCC"
        };
        f.getWebglFp = function () {
            // var d = function (q) {
            //     a.clearColor(0, 0, 0, 1);
            //     a.enable(a.DEPTH_TEST);
            //     a.depthFunc(a.LEQUAL);
            //     a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT);
            //     return "[" + q[0] + ", " + q[1] + "]"
            // };
            // var a = this.getWebglCanvas();
            // if (!a) return null;
            // var b = [], e = a.createBuffer();
            // a.bindBuffer(a.ARRAY_BUFFER, e);
            // var c = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
            // a.bufferData(a.ARRAY_BUFFER, c, a.STATIC_DRAW);
            // e.itemSize = 3;
            // e.numItems = 3;
            // c = a.createProgram();
            // var h = a.createShader(a.VERTEX_SHADER);
            // a.shaderSource(h, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
            // a.compileShader(h);
            // var k = a.createShader(a.FRAGMENT_SHADER);
            // a.shaderSource(k, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
            // a.compileShader(k);
            // a.attachShader(c, h);
            // a.attachShader(c, k);
            // a.linkProgram(c);
            // a.useProgram(c);
            // c.vertexPosAttrib = a.getAttribLocation(c, "attrVertex");
            // c.offsetUniform = a.getUniformLocation(c, "uniformOffset");
            // a.enableVertexAttribArray(c.vertexPosArray);
            // a.vertexAttribPointer(c.vertexPosAttrib, e.itemSize, a.FLOAT, !1, 0, 0);
            // a.uniform2f(c.offsetUniform, 1, 1);
            // a.drawArrays(a.TRIANGLE_STRIP, 0, e.numItems);
            // null != a.canvas && b.push(a.canvas.toDataURL());
            // b.push("extensions:" + a.getSupportedExtensions().join(";"));
            // b.push("w1" + d(a.getParameter(a.ALIASED_LINE_WIDTH_RANGE)));
            // b.push("w2" + d(a.getParameter(a.ALIASED_POINT_SIZE_RANGE)));
            // b.push("w3" + a.getParameter(a.ALPHA_BITS));
            // b.push("w4" + (a.getContextAttributes().antialias ? "yes" : "no"));
            // b.push("w5" + a.getParameter(a.BLUE_BITS));
            // b.push("w6" + a.getParameter(a.DEPTH_BITS));
            // b.push("w7" + a.getParameter(a.GREEN_BITS));
            // b.push("w8" + function (q) {
            //     var t,
            //         u = q.getExtension("EXT_texture_filter_anisotropic") || q.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || q.getExtension("MOZ_EXT_texture_filter_anisotropic");
            //     return u ? (t = q.getParameter(u.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === t && (t = 2), t) : null
            // }(a));
            // b.push("w9" + a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
            // b.push("w10" + a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE));
            // b.push("w11" + a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS));
            // b.push("w12" + a.getParameter(a.MAX_RENDERBUFFER_SIZE));
            // b.push("w13" + a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS));
            // b.push("w14" + a.getParameter(a.MAX_TEXTURE_SIZE));
            // b.push("w15" + a.getParameter(a.MAX_VARYING_VECTORS));
            // b.push("w16" + a.getParameter(a.MAX_VERTEX_ATTRIBS));
            // b.push("w17" + a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
            // b.push("w18" + a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS));
            // b.push("w19" + d(a.getParameter(a.MAX_VIEWPORT_DIMS)));
            // b.push("w20" + a.getParameter(a.RED_BITS));
            // b.push("w21" + a.getParameter(a.RENDERER));
            // b.push("w22" + a.getParameter(a.SHADING_LANGUAGE_VERSION));
            // b.push("w23" + a.getParameter(a.STENCIL_BITS));
            // b.push("w24" + a.getParameter(a.VENDOR));
            // b.push("w25" + a.getParameter(a.VERSION));
            // try {
            //     var p = a.getExtension("WEBGL_debug_renderer_info");
            //     p && (b.push("wuv:" + a.getParameter(p.UNMASKED_VENDOR_WEBGL)), b.push("wur:" + a.getParameter(p.UNMASKED_RENDERER_WEBGL)))
            // } catch (q) {
            // }
            // if (!a.getShaderPrecisionFormat) return b.join("\u00a7");
            // b.push("w26" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).precision);
            // b.push("w27" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMin);
            // b.push("w28" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMax);
            // b.push("w29" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).precision);
            // b.push("w30" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMin);
            // b.push("w31" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMax);
            // b.push("w32" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).precision);
            // b.push("w33" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMin);
            // b.push("w34" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMax);
            // b.push("w35" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).precision);
            // b.push("w36" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMin);
            // b.push("w37" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMax);
            // b.push("w38" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).precision);
            // b.push("w39" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMin);
            // b.push("w40" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMax);
            // b.push("w41" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).precision);
            // b.push("w42" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMin);
            // b.push("w43" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMax);
            // b.push("w44" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).precision);
            // b.push("w45" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMin);
            // b.push("w46" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMax);
            // b.push("w47" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).precision);
            // b.push("w48" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMin);
            // b.push("w49" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMax);
            // b.push("w50" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).precision);
            // b.push("w51" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMin);
            // b.push("w52" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMax);
            // b.push("w53" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).precision);
            // b.push("w54" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMin);
            // b.push("w55" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMax);
            // b.push("w56" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).precision);
            // b.push("w57" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMin);
            // b.push("w58" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMax);
            // b.push("w59" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).precision);
            // b.push("w60" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMin);
            // b.push("w61" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMax);
            // return b.join("\u00a7")
            //按环境生成，不知道是否必须，自测
            return "data:image/png;base64,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§extensions:ANGLE_instanced_arrays;EXT_blend_minmax;EXT_color_buffer_half_float;EXT_disjoint_timer_query;EXT_float_blend;EXT_frag_depth;EXT_shader_texture_lod;EXT_texture_compression_bptc;EXT_texture_compression_rgtc;EXT_texture_filter_anisotropic;EXT_sRGB;KHR_parallel_shader_compile;OES_element_index_uint;OES_fbo_render_mipmap;OES_standard_derivatives;OES_texture_float;OES_texture_float_linear;OES_texture_half_float;OES_texture_half_float_linear;OES_vertex_array_object;WEBGL_color_buffer_float;WEBGL_compressed_texture_s3tc;WEBGL_compressed_texture_s3tc_srgb;WEBGL_debug_renderer_info;WEBGL_debug_shaders;WEBGL_depth_texture;WEBGL_draw_buffers;WEBGL_lose_context;WEBGL_multi_draw§w1[1, 1]§w2[1, 1024]§w38§w4yes§w58§w624§w78§w816§w932§w1016384§w111024§w1216384§w1316§w1416384§w1530§w1616§w1716§w184095§w19[32767, 32767]§w208§w21WebKit WebGL§w22WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)§w230§w24WebKit§w25WebGL 1.0 (OpenGL ES 2.0 Chromium)§wuv:Google Inc. (NVIDIA)§wur:ANGLE (NVIDIA, NVIDIA GeForce GTX 1660 Ti Direct3D11 vs_5_0 ps_5_0, D3D11)§w2623§w27127§w28127§w2923§w30127§w31127§w3223§w33127§w34127§w3523§w36127§w37127§w3823§w39127§w40127§w4123§w42127§w43127§w440§w4531§w4630§w470§w4831§w4930§w500§w5131§w5230§w530§w5431§w5530§w560§w5731§w5830§w590§w6031§w6130"
        };
        f.getWebglCanvas = function () {
            var d = document.createElement("canvas"), a = null;
            try {
                a = d.getContext("webgl") || d.getContext("experimental-webgl")
            } catch (b) {
            }
            a || (a = null);
            return a
        };
        return f
    }();
    return {
        getFp: function () {
            var b = g.execute("getCanvasFp");
            jdtRiskContext.canvas_fp_md5 = jdtRiskEncryptUtil.MD5.hex_md5(b);
            var d = [
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
                "zh-CN",
                "applewebkit_chrome",
                "537.36",
                "windows",
                "NT",
                24,
                "1080x1920",
                g.execute("getTimezoneOffset"),
                "sessionStorageKey",
                "localStorageKey",
                "indexedDbKey",
                "openDatabase",
                "NA",
                "Win32",
                12,  //getHardwareConcurrency
                "48000",
                "NA",
                "PDF Viewer::Portable Document Format::application/pdf~pdf,text/pdf~pdf;Chrome PDF Viewer::Portable Document Format::application/pdf~pdf,text/pdf~pdf;Chromium PDF Viewer::Portable Document Format::application/pdf~pdf,text/pdf~pdf;Microsoft Edge PDF Viewer::Portable Document Format::application/pdf~pdf,text/pdf~pdf;WebKit built-in PDF::Portable Document Format::application/pdf~pdf,text/pdf~pdf",
                b,
                "data:image/png;base64,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§extensions:ANGLE_instanced_arrays;EXT_blend_minmax;EXT_color_buffer_half_float;EXT_disjoint_timer_query;EXT_float_blend;EXT_frag_depth;EXT_shader_texture_lod;EXT_texture_compression_bptc;EXT_texture_compression_rgtc;EXT_texture_filter_anisotropic;EXT_sRGB;KHR_parallel_shader_compile;OES_element_index_uint;OES_fbo_render_mipmap;OES_standard_derivatives;OES_texture_float;OES_texture_float_linear;OES_texture_half_float;OES_texture_half_float_linear;OES_vertex_array_object;WEBGL_color_buffer_float;WEBGL_compressed_texture_s3tc;WEBGL_compressed_texture_s3tc_srgb;WEBGL_debug_renderer_info;WEBGL_debug_shaders;WEBGL_depth_texture;WEBGL_draw_buffers;WEBGL_lose_context;WEBGL_multi_draw§w1[1, 1]§w2[1, 1024]§w38§w4yes§w58§w624§w78§w816§w932§w1016384§w111024§w1216384§w1316§w1416384§w1530§w1616§w1716§w184095§w19[32767, 32767]§w208§w21WebKit WebGL§w22WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)§w230§w24WebKit§w25WebGL 1.0 (OpenGL ES 2.0 Chromium)§wuv:Google Inc. (NVIDIA)§wur:ANGLE (NVIDIA, NVIDIA GeForce GTX 1660 Ti Direct3D11 vs_5_0 ps_5_0, D3D11)§w2623§w27127§w28127§w2923§w30127§w31127§w3223§w33127§w34127§w3523§w36127§w37127§w3823§w39127§w40127§w4123§w42127§w43127§w440§w4531§w4630§w470§w4831§w4930§w500§w5131§w5230§w530§w5431§w5530§w560§w5731§w5830§w590§w6031§w6130"
            ]

            n = jdtRiskEncryptUtil.HASH.hash128(d.join("~~~"), 31);
            return n;
        }
    }
}

var TDEnvCollector = function (l) {
    function m(g) {
        var f = {};
        f.name = g.name;
        f.filename = g.filename.toLowerCase();
        f.description = g.description;
        void 0 !== g.version && (f.version = g.version);
        f.mimeTypes = [];
        for (var d = 0; d < g.length; d++) {
            var a = g[d], b = {};
            b.description = a.description;
            b.suffixes = a.suffixes;
            b.type = a.type;
            f.mimeTypes.push(b)
        }
        return f
    }

    l = l || {};
    var n = function () {
        return {
            execute: function (g) {
                try {
                    if (this[g]) {
                        var f = (new Date).getTime(), d = this[g]();
                        jdtRiskContext.d && console.log("ENV Collector function : [" + g + "] Cost time :", (new Date).getTime() - f);
                        return d
                    }
                } catch (a) {
                    return jdtRiskContext.d && console.log("env collect error", a), ""
                }
            },
            getColorRgb: function () {
                var g = {};
                try {
                    var f = document.createElement("div"),
                        d = "ActiveBorder ActiveCaption AppWorkspace Background ButtonFace ButtonHighlight ButtonShadow ButtonText CaptionText GrayText Highlight HighlightText InactiveBorder InactiveCaption InactiveCaptionText InfoBackground InfoText Menu MenuText Scrollbar ThreeDDarkShadow ThreeDFace ThreeDHighlight ThreeDLightShadow ThreeDShadow Window WindowFrame WindowText".split(" ");
                    if (window.getComputedStyle) for (var a = 0; a < d.length; a++) document.body.appendChild(f), f.style.color = d[a], g[d[a]] = window.getComputedStyle(f).getPropertyValue("color"), document.body.removeChild(f)
                } catch (b) {
                }
                return g
            },
            getCanvasInfo: function () {
                var g = {};
                g.tdHash = jdtRiskContext.canvas_fp_md5;//对应
                var f = !1;
                if (window.WebGLRenderingContext) {
                    for (var d = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"], a = [], b, e = 0; e < d.length; e++) try {
                        var c = !1;
                        (c = document.createElement("canvas").getContext(d[e], {stencil: !0})) && c && (b = c, a.push(d[e]))
                    } catch (k) {
                    }
                    a.length && (f = {name: a, gl: b})
                }
                if (f) {
                    d = f.gl;
                    g.contextName = f.name.join();
                    g.webglversion = d.getParameter(d.VERSION);
                    g.shadingLV = d.getParameter(d.SHADING_LANGUAGE_VERSION);
                    g.vendor = d.getParameter(d.VENDOR);
                    g.renderer = d.getParameter(d.RENDERER);
                    f = [];
                    try {
                        f = d.getSupportedExtensions(), g.extensions = f
                    } catch (k) {
                    }
                    try {
                        var h = d.getExtension("WEBGL_debug_renderer_info");
                        h && (g.wuv = d.getParameter(h.UNMASKED_VENDOR_WEBGL), g.wur = d.getParameter(h.UNMASKED_RENDERER_WEBGL))
                    } catch (k) {
                    }
                }
                return g
            },
            getBrowserMode: function () {
                return {documentMode: document.documentMode, compatMode: document.compatMode}
            },
            getSupportFonts: function () {
                function g(p) {
                    var q = {};
                    c.style.fontFamily = p;
                    document.body.appendChild(c);
                    q.height = c.offsetHeight;
                    q.width = c.offsetWidth;
                    document.body.removeChild(c);
                    return q
                }

                function f(p) {
                    for (var q = 0; q < e.length; q++) {
                        var t = g(p + "," + b[q]), u = e[q];
                        if (t.height !== u.height || t.width !== u.width) return !0
                    }
                    return !1
                }

                var d = [],
                    a = "Abadi MT Condensed Light;Adobe Fangsong Std;Adobe Hebrew;Adobe Ming Std;Agency FB;Arab;Arabic Typesetting;Arial Black;Batang;Bauhaus 93;Bell MT;Bitstream Vera Serif;Bodoni MT;Bookman Old Style;Braggadocio;Broadway;Calibri;Californian FB;Castellar;Casual;Centaur;Century Gothic;Chalkduster;Colonna MT;Copperplate Gothic Light;DejaVu LGC Sans Mono;Desdemona;DFKai-SB;Dotum;Engravers MT;Eras Bold ITC;Eurostile;FangSong;Forte;Franklin Gothic Heavy;French Script MT;Gabriola;Gigi;Gisha;Goudy Old Style;Gulim;GungSeo;Haettenschweiler;Harrington;Hiragino Sans GB;Impact;Informal Roman;KacstOne;Kino MT;Kozuka Gothic Pr6N;Lohit Gujarati;Loma;Lucida Bright;Lucida Fax;Magneto;Malgun Gothic;Matura MT Script Capitals;Menlo;MingLiU-ExtB;MoolBoran;MS PMincho;MS Reference Sans Serif;News Gothic MT;Niagara Solid;Nyala;Palace Script MT;Papyrus;Perpetua;Playbill;PMingLiU;Rachana;Rockwell;Sawasdee;Script MT Bold;Segoe Print;Showcard Gothic;SimHei;Snap ITC;TlwgMono;Tw Cen MT Condensed Extra Bold;Ubuntu;Umpush;Univers;Utopia;Vladimir Script;Wide Latin".split(";"),
                    b = ["monospace", "sans-serif", "serif"], e = [], c = document.createElement("span");
                c.style.fontSize = "72px";
                c.style.visibility = "hidden";
                c.innerHTML = "mmmmmmmmmmlli";
                for (var h = 0; h < b.length; h++) e[h] = g(b[h]);
                for (h = 0; h < a.length; h++) {
                    var k = a[h];
                    f(k) && d.push(k)
                }
                return d
            },
            getFeature: function () {
                var g = {}, f = [], d;
                for (d in navigator) "object" != typeof navigator[d] && (g[d] = navigator[d]), f.push(d);
                g.enumerationOrder = f;
                g.javaEnabled = navigator.javaEnabled();
                try {
                    g.taintEnabled = navigator.taintEnabled()
                } catch (a) {
                }
                return g
            },
            getPlugins: function () {
                var g = [],
                    f = "4game;AdblockPlugin;AdobeExManCCDetect;AdobeExManDetect;Alawar NPAPI utils;Aliedit Plug-In;Alipay Security Control 3;AliSSOLogin plugin;AmazonMP3DownloaderPlugin;AOL Media Playback Plugin;AppUp;ArchiCAD;AVG SiteSafety plugin;Babylon ToolBar;Battlelog Game Launcher;BitCometAgent;Bitdefender QuickScan;BlueStacks Install Detector;CatalinaGroup Update;Citrix ICA Client;Citrix online plug-in;Citrix Receiver Plug-in;Coowon Update;DealPlyLive Update;Default Browser Helper;DivX Browser Plug-In;DivX Plus Web Player;DivX VOD Helper Plug-in;doubleTwist Web Plugin;Downloaders plugin;downloadUpdater;eMusicPlugin DLM6;ESN Launch Mozilla Plugin;ESN Sonar API;Exif Everywhere;Facebook Plugin;File Downloader Plug-in;FileLab plugin;FlyOrDie Games Plugin;Folx 3 Browser Plugin;FUZEShare;GDL Object Web Plug-in 16.00;GFACE Plugin;Ginger;Gnome Shell Integration;Google Earth Plugin;Google Earth Plug-in;Google Gears 0.5.33.0;Google Talk Effects Plugin;Google Update;Harmony Firefox Plugin;Harmony Plug-In;Heroes & Generals live;HPDetect;Html5 location provider;IE Tab plugin;iGetterScriptablePlugin;iMesh plugin;Kaspersky Password Manager;LastPass;LogMeIn Plugin 1.0.0.935;LogMeIn Plugin 1.0.0.961;Ma-Config.com plugin;Microsoft Office 2013;MinibarPlugin;Native Client;Nitro PDF Plug-In;Nokia Suite Enabler Plugin;Norton Identity Safe;npAPI Plugin;NPLastPass;NPPlayerShell;npTongbuAddin;NyxLauncher;Octoshape Streaming Services;Online Storage plug-in;Orbit Downloader;Pando Web Plugin;Parom.TV player plugin;PDF integrado do WebKit;PDF-XChange Viewer;PhotoCenterPlugin1.1.2.2;Picasa;PlayOn Plug-in;QQ2013 Firefox Plugin;QQDownload Plugin;QQMiniDL Plugin;QQMusic;RealDownloader Plugin;Roblox Launcher Plugin;RockMelt Update;Safer Update;SafeSearch;Scripting.Dictionary;SefClient Plugin;Shell.UIHelper;Silverlight Plug-In;Simple Pass;Skype Web Plugin;SumatraPDF Browser Plugin;Symantec PKI Client;Tencent FTN plug-in;Thunder DapCtrl NPAPI Plugin;TorchHelper;Unity Player;Uplay PC;VDownloader;Veetle TV Core;VLC Multimedia Plugin;Web Components;WebKit-integrierte PDF;WEBZEN Browser Extension;Wolfram Mathematica;WordCaptureX;WPI Detector 1.4;Yandex Media Plugin;Yandex PDF Viewer;YouTube Plug-in;zako".split(";"),
                    d = navigator.userAgent.toLowerCase(), a;
                if (a = d.match(/rv:([\d.]+)\) like gecko/)) var b = a[1];
                if (a = d.match(/msie ([\d.]+)/)) b = a[1];
                if (b) for (d = "AcroPDF.PDF;Adodb.Stream;AgControl.AgControl;DevalVRXCtrl.DevalVRXCtrl.1;MacromediaFlashPaper.MacromediaFlashPaper;Msxml2.DOMDocument;Msxml2.XMLHTTP;PDF.PdfCtrl;QuickTime.QuickTime;QuickTimeCheckObject.QuickTimeCheck.1;RealPlayer;RealPlayer.RealPlayer(tm) ActiveX Control (32-bit);RealVideo.RealVideo(tm) ActiveX Control (32-bit);rmocx.RealPlayer G2 Control;Scripting.Dictionary;Shell.UIHelper;ShockwaveFlash.ShockwaveFlash;SWCtl.SWCtl;TDCCtl.TDCCtl;WMPlayer.OCX".split(";"), b = 0; b < d.length; b++) {
                    var e = d[b];
                    try {
                        var c = new ActiveXObject(e);
                        a = {};
                        a.name = e;
                        try {
                            a.version = c.GetVariable("$version")
                        } catch (h) {
                        }
                        try {
                            a.version = c.GetVersions()
                        } catch (h) {
                        }
                        a.version && 0 < a.version.length || (a.version = "");
                        g.push(a)
                    } catch (h) {
                    }
                } else {
                    d = navigator.plugins;
                    a = {};
                    for (b = 0; b < d.length; b++) e = d[b], a[e.name] = 1, g.push(m(e));
                    for (b = 0; b < f.length; b++) c = f[b], a[c] || (e = d[c], e && g.push(m(e)))
                }
                return g
            },
            getScreenInfo: function () {
                for (var g = {}, f = "availHeight availWidth colorDepth bufferDepth deviceXDPI deviceYDPI height width logicalXDPI logicalYDPI pixelDepth updateInterval".split(" "), d = 0; f.length > d; d++) {
                    var a = f[d];
                    void 0 !== screen[a] && (g[a] = screen[a])
                }
                return g
            },
            getPositionInfo: function () {
                for (var g = {}, f = ["devicePixelRatio", "screenTop", "screenLeft"], d = 0; f.length > d; d++) {
                    var a = f[d];
                    void 0 !== window[a] && (g[a] = window[a])
                }
                return g
            },
            getStoreCheck: function () {
                var g = {};
                try {
                    g.cookie = navigator.cookieEnabled, g.localStorage = !!window.localStorage, g.sessionStorage = !!window.sessionStorage, g.globalStorage = !!window.globalStorage, g.indexedDB = !!window.indexedDB
                } catch (f) {
                }
                return g
            }
        }
    }();
    return {
        getEncryptedCollectInfo: function () {
            var f = {}, d = new Date;
            f.ts = {};
            f.ts.deviceTime = d.getTime();
            f.ca = {
                "tdHash": jdtRiskContext.canvas_fp_md5,
                "contextName": "webgl,experimental-webgl",
                "webglversion": "WebGL 1.0 (OpenGL ES 2.0 Chromium)",
                "shadingLV": "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)",
                "vendor": "WebKit",
                "renderer": "WebKit WebGL",
                "extensions": [
                    "ANGLE_instanced_arrays",
                    "EXT_blend_minmax",
                    "EXT_color_buffer_half_float",
                    "EXT_disjoint_timer_query",
                    "EXT_float_blend",
                    "EXT_frag_depth",
                    "EXT_shader_texture_lod",
                    "EXT_texture_compression_bptc",
                    "EXT_texture_compression_rgtc",
                    "EXT_texture_filter_anisotropic",
                    "EXT_sRGB",
                    "KHR_parallel_shader_compile",
                    "OES_element_index_uint",
                    "OES_fbo_render_mipmap",
                    "OES_standard_derivatives",
                    "OES_texture_float",
                    "OES_texture_float_linear",
                    "OES_texture_half_float",
                    "OES_texture_half_float_linear",
                    "OES_vertex_array_object",
                    "WEBGL_color_buffer_float",
                    "WEBGL_compressed_texture_s3tc",
                    "WEBGL_compressed_texture_s3tc_srgb",
                    "WEBGL_debug_renderer_info",
                    "WEBGL_debug_shaders",
                    "WEBGL_depth_texture",
                    "WEBGL_draw_buffers",
                    "WEBGL_lose_context",
                    "WEBGL_multi_draw"
                ],
                "wuv": "Google Inc. (NVIDIA)",
                "wur": "ANGLE (NVIDIA, NVIDIA GeForce GTX 1660 Ti Direct3D11 vs_5_0 ps_5_0, D3D11)"
            } ; //n.execute("getCanvasInfo")
            f.m = {
                "documentMode":undefined,
                "compatMode": "CSS1Compat"
            }
            f.fo = [
                "Arial Black",
                "Bauhaus 93",
                "Calibri",
                "FangSong",
                "Franklin Gothic Heavy",
                "Gabriola",
                "Impact",
                "Malgun Gothic",
                "MingLiU-ExtB",
                "Segoe Print",
                "SimHei"
            ] //n.execute("getSupportFonts")
            f.n = {
                "vendorSub": "",
                "productSub": "20030107",
                "vendor": "Google Inc.",
                "maxTouchPoints": 0,
                "pdfViewerEnabled": true,
                "hardwareConcurrency": 12,
                "cookieEnabled": true,
                "appCodeName": "Mozilla",
                "appName": "Netscape",
                "appVersion": "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
                "platform": "Win32",
                "product": "Gecko",
                "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
                "language": "zh-CN",
                "onLine": true,
                "webdriver": false,
                "javaEnabled": false,
                "deviceMemory": 8,
                "enumerationOrder": [
                    "vendorSub",
                    "productSub",
                    "vendor",
                    "maxTouchPoints",
                    "scheduling",
                    "userActivation",
                    "doNotTrack",
                    "geolocation",
                    "connection",
                    "plugins",
                    "mimeTypes",
                    "pdfViewerEnabled",
                    "webkitTemporaryStorage",
                    "webkitPersistentStorage",
                    "hardwareConcurrency",
                    "cookieEnabled",
                    "appCodeName",
                    "appName",
                    "appVersion",
                    "platform",
                    "product",
                    "userAgent",
                    "language",
                    "languages",
                    "onLine",
                    "webdriver",
                    "getGamepads",
                    "javaEnabled",
                    "sendBeacon",
                    "vibrate",
                    "bluetooth",
                    "clipboard",
                    "credentials",
                    "keyboard",
                    "managed",
                    "mediaDevices",
                    "storage",
                    "serviceWorker",
                    "virtualKeyboard",
                    "wakeLock",
                    "deviceMemory",
                    "ink",
                    "hid",
                    "locks",
                    "mediaCapabilities",
                    "mediaSession",
                    "permissions",
                    "presentation",
                    "serial",
                    "gpu",
                    "usb",
                    "windowControlsOverlay",
                    "xr",
                    "userAgentData",
                    "canShare",
                    "share",
                    "clearAppBadge",
                    "getBattery",
                    "getUserMedia",
                    "requestMIDIAccess",
                    "requestMediaKeySystemAccess",
                    "setAppBadge",
                    "webkitGetUserMedia",
                    "getInstalledRelatedApps",
                    "registerProtocolHandler",
                    "unregisterProtocolHandler"
                ]
            } //n.execute("getFeature")
            f.p = [
                {
                    "name": "PDF Viewer",
                    "filename": "internal-pdf-viewer",
                    "description": "Portable Document Format",
                    "mimeTypes": [
                        {
                            "description": "Portable Document Format",
                            "suffixes": "pdf",
                            "type": "application/pdf"
                        },
                        {
                            "description": "Portable Document Format",
                            "suffixes": "pdf",
                            "type": "text/pdf"
                        }
                    ]
                },
                {
                    "name": "Chrome PDF Viewer",
                    "filename": "internal-pdf-viewer",
                    "description": "Portable Document Format",
                    "mimeTypes": [
                        {
                            "description": "Portable Document Format",
                            "suffixes": "pdf",
                            "type": "application/pdf"
                        },
                        {
                            "description": "Portable Document Format",
                            "suffixes": "pdf",
                            "type": "text/pdf"
                        }
                    ]
                },
                {
                    "name": "Chromium PDF Viewer",
                    "filename": "internal-pdf-viewer",
                    "description": "Portable Document Format",
                    "mimeTypes": [
                        {
                            "description": "Portable Document Format",
                            "suffixes": "pdf",
                            "type": "application/pdf"
                        },
                        {
                            "description": "Portable Document Format",
                            "suffixes": "pdf",
                            "type": "text/pdf"
                        }
                    ]
                },
                {
                    "name": "Microsoft Edge PDF Viewer",
                    "filename": "internal-pdf-viewer",
                    "description": "Portable Document Format",
                    "mimeTypes": [
                        {
                            "description": "Portable Document Format",
                            "suffixes": "pdf",
                            "type": "application/pdf"
                        },
                        {
                            "description": "Portable Document Format",
                            "suffixes": "pdf",
                            "type": "text/pdf"
                        }
                    ]
                },
                {
                    "name": "WebKit built-in PDF",
                    "filename": "internal-pdf-viewer",
                    "description": "Portable Document Format",
                    "mimeTypes": [
                        {
                            "description": "Portable Document Format",
                            "suffixes": "pdf",
                            "type": "application/pdf"
                        },
                        {
                            "description": "Portable Document Format",
                            "suffixes": "pdf",
                            "type": "text/pdf"
                        }
                    ]
                }
            ]
            f.w = {
                "devicePixelRatio": 1,
                "screenTop": 126,
                "screenLeft": 266
            }
            f.s = {
                "availHeight": 1080,
                "availWidth": 1920,
                "colorDepth": 24,
                "height": 1080,
                "width": 1920,
                "pixelDepth": 24
            }
            f.sc = {
                "ActiveBorder": "rgb(0, 0, 0)",
                "ActiveCaption": "rgb(0, 0, 0)",
                "AppWorkspace": "rgb(255, 255, 255)",
                "Background": "rgb(255, 255, 255)",
                "ButtonFace": "rgb(240, 240, 240)",
                "ButtonHighlight": "rgb(240, 240, 240)",
                "ButtonShadow": "rgb(240, 240, 240)",
                "ButtonText": "rgb(0, 0, 0)",
                "CaptionText": "rgb(0, 0, 0)",
                "GrayText": "rgb(109, 109, 109)",
                "Highlight": "rgb(0, 120, 215)",
                "HighlightText": "rgb(255, 255, 255)",
                "InactiveBorder": "rgb(0, 0, 0)",
                "InactiveCaption": "rgb(255, 255, 255)",
                "InactiveCaptionText": "rgb(128, 128, 128)",
                "InfoBackground": "rgb(255, 255, 255)",
                "InfoText": "rgb(0, 0, 0)",
                "Menu": "rgb(255, 255, 255)",
                "MenuText": "rgb(0, 0, 0)",
                "Scrollbar": "rgb(255, 255, 255)",
                "ThreeDDarkShadow": "rgb(0, 0, 0)",
                "ThreeDFace": "rgb(240, 240, 240)",
                "ThreeDHighlight": "rgb(0, 0, 0)",
                "ThreeDLightShadow": "rgb(0, 0, 0)",
                "ThreeDShadow": "rgb(0, 0, 0)",
                "Window": "rgb(255, 255, 255)",
                "WindowFrame": "rgb(0, 0, 0)",
                "WindowText": "rgb(0, 0, 0)"
            }
            f.ss = {
                "cookie": true,
                "localStorage": true,
                "sessionStorage": true,
                "globalStorage": false,
                "indexedDB": true
            }
            f.tz = d.getTimezoneOffset();
            f.ts.deviceEndTime = (new Date).getTime();
            f.lil = "";
            f.wil = "";
            return jdtRiskEncryptUtil.TDEncrypt(f)
        }
    }
};
var d = new TDEnvCollector({}).getEncryptedCollectInfo();
jdtRiskContext.deviceInfo.fp = new JdtRiskFingerPrint({}).getFp()


var g = {
    pin: jdtRiskUtil.obtainPin(1),
    oid: "",
    bizId: jdtRiskUtil.getBizId(),
    fc: null,
    mode: _riskFpMode,
    p: "s", //"https:" == document.location.protocol s or h
    fp: jdtRiskContext.deviceInfo.fp,
    ctype: 1,
    v: jdtRiskContext.version,
    f: "1",
    o: jdtRiskUtil.getCurrentPageUrl(),
    qs: jdtRiskUtil.getUrlQueryStr(),
    jsTk: null
};
var  a= jdtRiskEncryptUtil.TDEncrypt(g)

//用于获取eid和token  xhr请求  https://gia.jd.com/jsTk.do?a=xxx    表单数据 d=xxx    
// console.log("a:=============================",a) //url����;
// console.log("n:=============================",d) //body����



module.exports={
    a: a,
    d: d,
   

}
  