var CryptoJS = function () {
    var t, e, r, n, i, o, a, c, s, h, u, f, l, p, d, v, y, g, _, w, m, k, B, x, S, b, C, A, H, z, E, I, R, D, M, F, L,
        O, j, P = P || function (t) {
            var e = Object.create || function (t) {
                return r.prototype = t, t = new r, r.prototype = null, t
            };


            var n = {}, i = n.lib = {}, o = i.Base = {
                extend: function (t) {
                    var r = e(this);
                    return t && r.mixIn(t), r.hasOwnProperty("init") && this.init !== r.init || (r.init = function () {
                        r.$super.init.apply(this, arguments)
                    }), (r.init.prototype = r).$super = this, r
                }, create: function () {
                    var t = this.extend();
                    return t.init.apply(t, arguments), t
                }, init: function () {
                }, mixIn: function (t) {
                    for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                    t.hasOwnProperty("toString") && (this.toString = t.toString)
                }, clone: function () {
                    return this.init.prototype.extend(this)
                }
            }, a = i.WordArray = o.extend({
                init: function (t, e) {
                    t = this.words = t || [], this.sigBytes = null != e ? e : 4 * t.length
                }, toString: function (t) {
                    return (t || s).stringify(this)
                }, concat: function (t) {
                    var e = this.words, r = t.words, n = this.sigBytes, i = t.sigBytes;
                    if (this.clamp(), n % 4) for (var o = 0; o < i; o++) {
                        var a = r[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                        e[n + o >>> 2] |= a << 24 - (n + o) % 4 * 8
                    } else for (var c = 0; c < i; c += 4) e[n + c >>> 2] = r[c >>> 2];
                    return this.sigBytes += i, this
                }, clamp: function () {
                    var e = this.words, r = this.sigBytes;
                    e[r >>> 2] &= 4294967295 << 32 - r % 4 * 8, e.length = t.ceil(r / 4)
                }, clone: function () {
                    var t = o.clone.call(this);
                    return t.words = this.words.slice(0), t
                }, random: function (t) {
                    for (var e = [], r = 0; r < t; r += 4) e.push(function () {
                        throw new Error("Native crypto module could not be used to get secure random number.")
                    }());
                    return new a.init(e, t)
                }
            }), c = n.enc = {}, s = c.Hex = {
                stringify: function (t) {
                    for (var e = t.words, r = t.sigBytes, n = [], i = 0; i < r; i++) {
                        var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        n.push((o >>> 4).toString(16)), n.push((15 & o).toString(16))
                    }
                    return n.join("")
                }, parse: function (t) {
                    for (var e = t.length, r = [], n = 0; n < e; n += 2) r[n >>> 3] |= parseInt(t.substr(n, 2), 16) << 24 - n % 8 * 4;
                    return new a.init(r, e / 2)
                }
            }, h = c.Latin1 = {
                stringify: function (t) {
                    for (var e = t.words, r = t.sigBytes, n = [], i = 0; i < r; i++) {
                        var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        n.push(String.fromCharCode(o))
                    }
                    return n.join("")
                }, parse: function (t) {
                    for (var e = t.length, r = [], n = 0; n < e; n++) r[n >>> 2] |= (255 & t.charCodeAt(n)) << 24 - n % 4 * 8;
                    return new a.init(r, e)
                }
            }, u = c.Utf8 = {
                stringify: function (t) {
                    try {
                        return decodeURIComponent(escape(h.stringify(t)))
                    } catch (t) {
                        throw new Error("Malformed UTF-8 data")
                    }
                }, parse: function (t) {
                    return h.parse(unescape(encodeURIComponent(t)))
                }
            }, f = i.BufferedBlockAlgorithm = o.extend({
                reset: function () {
                    this._data = new a.init, this._nDataBytes = 0
                }, _append: function (t) {
                    "string" == typeof t && (t = u.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
                }, _process: function (e) {
                    var r, n = this._data, i = n.words, o = n.sigBytes, c = this.blockSize, s = o / (4 * c),
                        h = (s = e ? t.ceil(s) : t.max((0 | s) - this._minBufferSize, 0)) * c;
                    o = t.min(4 * h, o);
                    if (h) {
                        for (var u = 0; u < h; u += c) this._doProcessBlock(i, u);
                        r = i.splice(0, h), n.sigBytes -= o
                    }
                    return new a.init(r, o)
                }, clone: function () {
                    var t = o.clone.call(this);
                    return t._data = this._data.clone(), t
                }, _minBufferSize: 0
            }), l = (i.Hasher = f.extend({
                cfg: o.extend(), init: function (t) {
                    this.cfg = this.cfg.extend(t), this.reset()
                }, reset: function () {
                    f.reset.call(this), this._doReset()
                }, update: function (t) {
                    return this._append(t), this._process(), this
                }, finalize: function (t) {
                    return t && this._append(t), this._doFinalize()
                }, blockSize: 16, _createHelper: function (t) {
                    return function (e, r) {
                        return new t.init(r).finalize(e)
                    }
                }, _createHmacHelper: function (t) {
                    return function (e, r) {
                        return new l.HMAC.init(t, r).finalize(e)
                    }
                }
            }), n.algo = {});
            return n
        }(Math);

    //这段代码是一个位运算函数，用于将t和e两个32位的整数进行按位与运算，然后将结果与t按位取反后和r进行按位与运算。这个函数通常用于加密算法中，例如SHA-1和MD5。
    function N(t, e, r) {
        return t & e | ~t & r
    }

    function W(t, e, r) {
        return t & r | e & ~r
    }
    //这段代码是一个简单的位运算函数，用于将一个32位的整数t向左移动e位或向右移动32-e位。这个函数通常用于加密算法中，例如SHA-1和MD5。
    function J(t, e) {
        return t << e | t >>> 32 - e
    }

    function T(t, e, r, n) {
        var i, o = this._iv;
        o ? (i = o.slice(0), this._iv = void 0) : i = this._prevBlock, n.encryptBlock(i, 0);
        for (var a = 0; a < r; a++) t[e + a] ^= i[a]
    }

    function U(t) {
        var e, r, n;
        return 255 == (t >> 24 & 255) ? (r = t >> 8 & 255, n = 255 & t, 255 == (e = t >> 16 & 255) ? (e = 0, 255 === r ? (r = 0, 255 === n ? n = 0 : ++n) : ++r) : ++e, t = 0, t += e << 16, t += r << 8, t += n) : t += 1 << 24, t
    }
    //这段代码是一个加密函数，用于对数据进行加密。具体的加密算法需要根据代码中的变量和常量来确定，这里无法确定具体的加密算法。但是可以看出，这个函数使用了一些位运算和数学运算，包括按位与、按位或、位移、加法、乘法等。这些运算通常用于加密算法中，以保证加密的安全性和可靠性。
    function K() {
        for (var t = this._X, e = this._C, r = 0; r < 8; r++) I[r] = e[r];
        for (e[0] = e[0] + 1295307597 + this._b | 0, e[1] = e[1] + 3545052371 + (e[0] >>> 0 < I[0] >>> 0 ? 1 : 0) | 0, e[2] = e[2] + 886263092 + (e[1] >>> 0 < I[1] >>> 0 ? 1 : 0) | 0, e[3] = e[3] + 1295307597 + (e[2] >>> 0 < I[2] >>> 0 ? 1 : 0) | 0, e[4] = e[4] + 3545052371 + (e[3] >>> 0 < I[3] >>> 0 ? 1 : 0) | 0, e[5] = e[5] + 886263092 + (e[4] >>> 0 < I[4] >>> 0 ? 1 : 0) | 0, e[6] = e[6] + 1295307597 + (e[5] >>> 0 < I[5] >>> 0 ? 1 : 0) | 0, e[7] = e[7] + 3545052371 + (e[6] >>> 0 < I[6] >>> 0 ? 1 : 0) | 0, this._b = e[7] >>> 0 < I[7] >>> 0 ? 1 : 0, r = 0; r < 8; r++) {
            var n = t[r] + e[r], i = 65535 & n, o = n >>> 16;
            R[r] = ((i * i >>> 17) + i * o >>> 15) + o * o ^ ((4294901760 & n) * n | 0) + ((65535 & n) * n | 0)
        }
        t[0] = R[0] + (R[7] << 16 | R[7] >>> 16) + (R[6] << 16 | R[6] >>> 16) | 0, t[1] = R[1] + (R[0] << 8 | R[0] >>> 24) + R[7] | 0, t[2] = R[2] + (R[1] << 16 | R[1] >>> 16) + (R[0] << 16 | R[0] >>> 16) | 0, t[3] = R[3] + (R[2] << 8 | R[2] >>> 24) + R[1] | 0, t[4] = R[4] + (R[3] << 16 | R[3] >>> 16) + (R[2] << 16 | R[2] >>> 16) | 0, t[5] = R[5] + (R[4] << 8 | R[4] >>> 24) + R[3] | 0, t[6] = R[6] + (R[5] << 16 | R[5] >>> 16) + (R[4] << 16 | R[4] >>> 16) | 0, t[7] = R[7] + (R[6] << 8 | R[6] >>> 24) + R[5] | 0
    }

    function X() {
        for (var t = this._X, e = this._C, r = 0; r < 8; r++) O[r] = e[r];
        for (e[0] = e[0] + 1295307597 + this._b | 0, e[1] = e[1] + 3545052371 + (e[0] >>> 0 < O[0] >>> 0 ? 1 : 0) | 0, e[2] = e[2] + 886263092 + (e[1] >>> 0 < O[1] >>> 0 ? 1 : 0) | 0, e[3] = e[3] + 1295307597 + (e[2] >>> 0 < O[2] >>> 0 ? 1 : 0) | 0, e[4] = e[4] + 3545052371 + (e[3] >>> 0 < O[3] >>> 0 ? 1 : 0) | 0, e[5] = e[5] + 886263092 + (e[4] >>> 0 < O[4] >>> 0 ? 1 : 0) | 0, e[6] = e[6] + 1295307597 + (e[5] >>> 0 < O[5] >>> 0 ? 1 : 0) | 0, e[7] = e[7] + 3545052371 + (e[6] >>> 0 < O[6] >>> 0 ? 1 : 0) | 0, this._b = e[7] >>> 0 < O[7] >>> 0 ? 1 : 0, r = 0; r < 8; r++) {
            var n = t[r] + e[r], i = 65535 & n, o = n >>> 16;
            j[r] = ((i * i >>> 17) + i * o >>> 15) + o * o ^ ((4294901760 & n) * n | 0) + ((65535 & n) * n | 0)
        }
        t[0] = j[0] + (j[7] << 16 | j[7] >>> 16) + (j[6] << 16 | j[6] >>> 16) | 0, t[1] = j[1] + (j[0] << 8 | j[0] >>> 24) + j[7] | 0, t[2] = j[2] + (j[1] << 16 | j[1] >>> 16) + (j[0] << 16 | j[0] >>> 16) | 0, t[3] = j[3] + (j[2] << 8 | j[2] >>> 24) + j[1] | 0, t[4] = j[4] + (j[3] << 16 | j[3] >>> 16) + (j[2] << 16 | j[2] >>> 16) | 0, t[5] = j[5] + (j[4] << 8 | j[4] >>> 24) + j[3] | 0, t[6] = j[6] + (j[5] << 16 | j[5] >>> 16) + (j[4] << 16 | j[4] >>> 16) | 0, t[7] = j[7] + (j[6] << 8 | j[6] >>> 24) + j[5] | 0
    }

    return M = (D = P).lib, t = M.Base, e = M.WordArray, (D = D.x64 = {}).Word = t.extend({
        init: function (t, e) {
            this.high = t, this.low = e
        }
    }), D.WordArray = t.extend({
        init: function (t, e) {
            t = this.words = t || [], this.sigBytes = null != e ? e : 8 * t.length
        }, toX32: function () {
            for (var t = this.words, r = t.length, n = [], i = 0; i < r; i++) {
                var o = t[i];
                n.push(o.high), n.push(o.low)
            }
            return e.create(n, this.sigBytes)
        }, clone: function () {
            for (var e = t.clone.call(this), r = e.words = this.words.slice(0), n = r.length, i = 0; i < n; i++) r[i] = r[i].clone();
            return e
        }
    }), "function" == typeof ArrayBuffer && (F = P.lib.WordArray, r = F.init, (F.init = function (t) {
        if ((t = (t = t instanceof ArrayBuffer ? new Uint8Array(t) : t) instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t) instanceof Uint8Array) {
            for (var e = t.byteLength, n = [], i = 0; i < e; i++) n[i >>> 2] |= t[i] << 24 - i % 4 * 8;
            r.call(this, n, e)
        } else r.apply(this, arguments)
    }).prototype = F), function () {
        var t, e = (t = P).lib.WordArray;

        function r(t) {
            return t << 8 & 4278255360 | t >>> 8 & 16711935
        }

        (t = t.enc).Utf16 = t.Utf16BE = {
            stringify: function (t) {
                for (var e = t.words, r = t.sigBytes, n = [], i = 0; i < r; i += 2) {
                    var o = e[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
                    n.push(String.fromCharCode(o))
                }
                return n.join("")
            }, parse: function (t) {
                for (var r = t.length, n = [], i = 0; i < r; i++) n[i >>> 1] |= t.charCodeAt(i) << 16 - i % 2 * 16;
                return e.create(n, 2 * r)
            }
        }, t.Utf16LE = {
            stringify: function (t) {
                for (var e = t.words, n = t.sigBytes, i = [], o = 0; o < n; o += 2) {
                    var a = r(e[o >>> 2] >>> 16 - o % 4 * 8 & 65535);
                    i.push(String.fromCharCode(a))
                }
                return i.join("")
            }, parse: function (t) {
                for (var n = t.length, i = [], o = 0; o < n; o++) i[o >>> 1] |= r(t.charCodeAt(o) << 16 - o % 2 * 16);
                return e.create(i, 2 * n)
            }
        }
    }(), n = (C = P).lib.WordArray, C.enc.Base64 = {
        stringify: function (t) {
            var e = t.words, r = t.sigBytes, n = this._map;
            t.clamp();
            for (var i = [], o = 0; o < r; o += 3) for (var a = (e[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (e[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | e[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, c = 0; c < 4 && o + .75 * c < r; c++) i.push(n.charAt(a >>> 6 * (3 - c) & 63));
            var s = n.charAt(64);
            if (s) for (; i.length % 4;) i.push(s);
            return i.join("")
        }, parse: function (t) {
            var e = t.length, r = this._map;
            if (!(i = this._reverseMap)) for (var i = this._reverseMap = [], o = 0; o < r.length; o++) i[r.charCodeAt(o)] = o;
            var a = r.charAt(64);
            return !a || -1 !== (a = t.indexOf(a)) && (e = a), function (t, e, r) {
                for (var i = [], o = 0, a = 0; a < e; a++) {
                    var c, s;
                    a % 4 && (c = r[t.charCodeAt(a - 1)] << a % 4 * 2, s = r[t.charCodeAt(a)] >>> 6 - a % 4 * 2, s |= c, i[o >>> 2] |= s << 24 - o % 4 * 8, o++)
                }
                return n.create(i, o)
            }(t, e, i)
        }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }, i = (M = P).lib.WordArray, M.enc.Base64url = {
        stringify: function (t, e = !0) {
            var r = t.words, n = t.sigBytes, i = e ? this._safe_map : this._map;
            t.clamp();
            for (var o = [], a = 0; a < n; a += 3) for (var c = (r[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (r[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | r[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, s = 0; s < 4 && a + .75 * s < n; s++) o.push(i.charAt(c >>> 6 * (3 - s) & 63));
            var h = i.charAt(64);
            if (h) for (; o.length % 4;) o.push(h);
            return o.join("")
        },
        parse: function (t, e = !0) {
            var r = t.length, n = e ? this._safe_map : this._map;
            if (!(o = this._reverseMap)) for (var o = this._reverseMap = [], a = 0; a < n.length; a++) o[n.charCodeAt(a)] = a;
            return !(e = n.charAt(64)) || -1 !== (e = t.indexOf(e)) && (r = e), function (t, e, r) {
                for (var n = [], o = 0, a = 0; a < e; a++) {
                    var c, s;
                    a % 4 && (c = r[t.charCodeAt(a - 1)] << a % 4 * 2, s = r[t.charCodeAt(a)] >>> 6 - a % 4 * 2, s |= c, n[o >>> 2] |= s << 24 - o % 4 * 8, o++)
                }
                return i.create(n, o)
            }(t, r, o)
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
    }, function (t) {
        var e = P, r = (i = e.lib).WordArray, n = i.Hasher, i = e.algo, o = [];

        function a(t, e, r, n, i, o, a) {
            return ((a = t + (e & r | ~e & n) + i + a) << o | a >>> 32 - o) + e
        }

        function c(t, e, r, n, i, o, a) {
            return ((a = t + (e & n | r & ~n) + i + a) << o | a >>> 32 - o) + e
        }

        function s(t, e, r, n, i, o, a) {
            return ((a = t + (e ^ r ^ n) + i + a) << o | a >>> 32 - o) + e
        }
        //这段代码是一个函数，用于计算MD5算法中的一个步骤。具体来说，它使用了一些位运算和加法运算，包括按位或、按位非、按位异或、位移、加法等。这些运算通常用于加密算法中，以保证加密的安全性和可靠性
        function h(t, e, r, n, i, o, a) {
            return ((a = t + (r ^ (e | ~n)) + i + a) << o | a >>> 32 - o) + e
        }

        !function () {
            for (var e = 0; e < 64; e++) o[e] = 4294967296 * t.abs(t.sin(e + 1)) | 0
        }(), i = i.MD5 = n.extend({
            _doReset: function () {
                this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878])
            }, _doProcessBlock: function (t, e) {
                for (var r = 0; r < 16; r++) {
                    var n = e + r, i = t[n];
                    t[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8)
                }
                var u = this._hash.words, f = t[e + 0], l = t[e + 1], p = t[e + 2], d = t[e + 3], v = t[e + 4],
                    y = t[e + 5], g = t[e + 6], _ = t[e + 7], w = t[e + 8], m = t[e + 9], k = t[e + 10], B = t[e + 11],
                    x = t[e + 12], S = t[e + 13], b = t[e + 14], C = t[e + 15],
                    A = a(A = u[0], E = u[1], z = u[2], H = u[3], f, 7, o[0]), H = a(H, A, E, z, l, 12, o[1]),
                    z = a(z, H, A, E, p, 17, o[2]), E = a(E, z, H, A, d, 22, o[3]);
                A = h(A = s(A = s(A = s(A = s(A = c(A = c(A = c(A = c(A = a(A = a(A = a(A, E, z, H, v, 7, o[4]), E = a(E, z = a(z, H = a(H, A, E, z, y, 12, o[5]), A, E, g, 17, o[6]), H, A, _, 22, o[7]), z, H, w, 7, o[8]), E = a(E, z = a(z, H = a(H, A, E, z, m, 12, o[9]), A, E, k, 17, o[10]), H, A, B, 22, o[11]), z, H, x, 7, o[12]), E = a(E, z = a(z, H = a(H, A, E, z, S, 12, o[13]), A, E, b, 17, o[14]), H, A, C, 22, o[15]), z, H, l, 5, o[16]), E = c(E, z = c(z, H = c(H, A, E, z, g, 9, o[17]), A, E, B, 14, o[18]), H, A, f, 20, o[19]), z, H, y, 5, o[20]), E = c(E, z = c(z, H = c(H, A, E, z, k, 9, o[21]), A, E, C, 14, o[22]), H, A, v, 20, o[23]), z, H, m, 5, o[24]), E = c(E, z = c(z, H = c(H, A, E, z, b, 9, o[25]), A, E, d, 14, o[26]), H, A, w, 20, o[27]), z, H, S, 5, o[28]), E = c(E, z = c(z, H = c(H, A, E, z, p, 9, o[29]), A, E, _, 14, o[30]), H, A, x, 20, o[31]), z, H, y, 4, o[32]), E = s(E, z = s(z, H = s(H, A, E, z, w, 11, o[33]), A, E, B, 16, o[34]), H, A, b, 23, o[35]), z, H, l, 4, o[36]), E = s(E, z = s(z, H = s(H, A, E, z, v, 11, o[37]), A, E, _, 16, o[38]), H, A, k, 23, o[39]), z, H, S, 4, o[40]), E = s(E, z = s(z, H = s(H, A, E, z, f, 11, o[41]), A, E, d, 16, o[42]), H, A, g, 23, o[43]), z, H, m, 4, o[44]), E = s(E, z = s(z, H = s(H, A, E, z, x, 11, o[45]), A, E, C, 16, o[46]), H, A, p, 23, o[47]), z, H, f, 6, o[48]), E = h(E = h(E = h(E = h(E, z = h(z, H = h(H, A, E, z, _, 10, o[49]), A, E, b, 15, o[50]), H, A, y, 21, o[51]), z = h(z, H = h(H, A = h(A, E, z, H, x, 6, o[52]), E, z, d, 10, o[53]), A, E, k, 15, o[54]), H, A, l, 21, o[55]), z = h(z, H = h(H, A = h(A, E, z, H, w, 6, o[56]), E, z, C, 10, o[57]), A, E, g, 15, o[58]), H, A, S, 21, o[59]), z = h(z, H = h(H, A = h(A, E, z, H, v, 6, o[60]), E, z, B, 10, o[61]), A, E, p, 15, o[62]), H, A, m, 21, o[63]), u[0] = u[0] + A | 0, u[1] = u[1] + E | 0, u[2] = u[2] + z | 0, u[3] = u[3] + H | 0
            }, _doFinalize: function () {
                var e = this._data, r = e.words, n = 8 * this._nDataBytes, i = 8 * e.sigBytes;
                r[i >>> 5] |= 128 << 24 - i % 32;
                var o = t.floor(n / 4294967296);
                n = n;
                r[15 + (64 + i >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), r[14 + (64 + i >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), e.sigBytes = 4 * (r.length + 1), this._process();
                for (var a = (r = this._hash).words, c = 0; c < 4; c++) {
                    var s = a[c];
                    a[c] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                }
                return r
            }, clone: function () {
                var t = n.clone.call(this);
                return t._hash = this._hash.clone(), t
            }
        }), e.MD5 = n._createHelper(i), e.HmacMD5 = n._createHmacHelper(i)
    }(Math), F = (D = P).lib, o = F.WordArray, a = F.Hasher, F = D.algo, c = [], F = F.SHA1 = a.extend({
        _doReset: function () {
            this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
        }, _doProcessBlock: function (t, e) {
            for (var r = this._hash.words, n = r[0], i = r[1], o = r[2], a = r[3], s = r[4], h = 0; h < 80; h++) {
                h < 16 ? c[h] = 0 | t[e + h] : (u = c[h - 3] ^ c[h - 8] ^ c[h - 14] ^ c[h - 16], c[h] = u << 1 | u >>> 31);
                var u = (n << 5 | n >>> 27) + s + c[h];
                u += h < 20 ? 1518500249 + (i & o | ~i & a) : h < 40 ? 1859775393 + (i ^ o ^ a) : h < 60 ? (i & o | i & a | o & a) - 1894007588 : (i ^ o ^ a) - 899497514, s = a, a = o, o = i << 30 | i >>> 2, i = n, n = u
            }
            r[0] = r[0] + n | 0, r[1] = r[1] + i | 0, r[2] = r[2] + o | 0, r[3] = r[3] + a | 0, r[4] = r[4] + s | 0
        }, _doFinalize: function () {
            var t = this._data, e = t.words, r = 8 * this._nDataBytes, n = 8 * t.sigBytes;
            return e[n >>> 5] |= 128 << 24 - n % 32, e[14 + (64 + n >>> 9 << 4)] = Math.floor(r / 4294967296), e[15 + (64 + n >>> 9 << 4)] = r, t.sigBytes = 4 * e.length, this._process(), this._hash
        }, clone: function () {
            var t = a.clone.call(this);
            return t._hash = this._hash.clone(), t
        }
    }), D.SHA1 = a._createHelper(F), D.HmacSHA1 = a._createHmacHelper(F), function (t) {
        var e = P, r = (i = e.lib).WordArray, n = i.Hasher, i = e.algo, o = [], a = [];
        !function () {
            function e(t) {
                return 4294967296 * (t - (0 | t)) | 0
            }

            for (var r = 2, n = 0; n < 64;) !function (e) {
                for (var r = t.sqrt(e), n = 2; n <= r; n++) if (!(e % n)) return;
                return 1
            }(r) || (n < 8 && (o[n] = e(t.pow(r, .5))), a[n] = e(t.pow(r, 1 / 3)), n++), r++
        }();
        var c = [];
        i = i.SHA256 = n.extend({
            _doReset: function () {
                this._hash = new r.init(o.slice(0))
            }, _doProcessBlock: function (t, e) {
                for (var r = this._hash.words, n = r[0], i = r[1], o = r[2], s = r[3], h = r[4], u = r[5], f = r[6], l = r[7], p = 0; p < 64; p++) {
                    p < 16 ? c[p] = 0 | t[e + p] : (d = c[p - 15], v = c[p - 2], c[p] = ((d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3) + c[p - 7] + ((v << 15 | v >>> 17) ^ (v << 13 | v >>> 19) ^ v >>> 10) + c[p - 16]);
                    var d = n & i ^ n & o ^ i & o,
                        v = l + ((h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25)) + (h & u ^ ~h & f) + a[p] + c[p];
                    l = f, f = u, u = h, h = s + v | 0, s = o, o = i, i = n, n = v + (((n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22)) + d) | 0
                }
                r[0] = r[0] + n | 0, r[1] = r[1] + i | 0, r[2] = r[2] + o | 0, r[3] = r[3] + s | 0, r[4] = r[4] + h | 0, r[5] = r[5] + u | 0, r[6] = r[6] + f | 0, r[7] = r[7] + l | 0
            }, _doFinalize: function () {
                var e = this._data, r = e.words, n = 8 * this._nDataBytes, i = 8 * e.sigBytes;
                return r[i >>> 5] |= 128 << 24 - i % 32, r[14 + (64 + i >>> 9 << 4)] = t.floor(n / 4294967296), r[15 + (64 + i >>> 9 << 4)] = n, e.sigBytes = 4 * r.length, this._process(), this._hash
            }, clone: function () {
                var t = n.clone.call(this);
                return t._hash = this._hash.clone(), t
            }
        });
        e.SHA256 = n._createHelper(i), e.HmacSHA256 = n._createHmacHelper(i)
    }(Math), s = (C = P).lib.WordArray, M = C.algo, h = M.SHA256, M = M.SHA224 = h.extend({
        _doReset: function () {
            this._hash = new s.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
        }, _doFinalize: function () {
            var t = h._doFinalize.call(this);
            return t.sigBytes -= 4, t
        }
    }), C.SHA224 = h._createHelper(M), C.HmacSHA224 = h._createHmacHelper(M), function () {
        var t = P, e = t.lib.Hasher, r = (i = t.x64).Word, n = i.WordArray, i = t.algo;

        function o() {
            return r.create.apply(r, arguments)
        }

        var a = [o(1116352408, 3609767458), o(1899447441, 602891725), o(3049323471, 3964484399), o(3921009573, 2173295548), o(961987163, 4081628472), o(1508970993, 3053834265), o(2453635748, 2937671579), o(2870763221, 3664609560), o(3624381080, 2734883394), o(310598401, 1164996542), o(607225278, 1323610764), o(1426881987, 3590304994), o(1925078388, 4068182383), o(2162078206, 991336113), o(2614888103, 633803317), o(3248222580, 3479774868), o(3835390401, 2666613458), o(4022224774, 944711139), o(264347078, 2341262773), o(604807628, 2007800933), o(770255983, 1495990901), o(1249150122, 1856431235), o(1555081692, 3175218132), o(1996064986, 2198950837), o(2554220882, 3999719339), o(2821834349, 766784016), o(2952996808, 2566594879), o(3210313671, 3203337956), o(3336571891, 1034457026), o(3584528711, 2466948901), o(113926993, 3758326383), o(338241895, 168717936), o(666307205, 1188179964), o(773529912, 1546045734), o(1294757372, 1522805485), o(1396182291, 2643833823), o(1695183700, 2343527390), o(1986661051, 1014477480), o(2177026350, 1206759142), o(2456956037, 344077627), o(2730485921, 1290863460), o(2820302411, 3158454273), o(3259730800, 3505952657), o(3345764771, 106217008), o(3516065817, 3606008344), o(3600352804, 1432725776), o(4094571909, 1467031594), o(275423344, 851169720), o(430227734, 3100823752), o(506948616, 1363258195), o(659060556, 3750685593), o(883997877, 3785050280), o(958139571, 3318307427), o(1322822218, 3812723403), o(1537002063, 2003034995), o(1747873779, 3602036899), o(1955562222, 1575990012), o(2024104815, 1125592928), o(2227730452, 2716904306), o(2361852424, 442776044), o(2428436474, 593698344), o(2756734187, 3733110249), o(3204031479, 2999351573), o(3329325298, 3815920427), o(3391569614, 3928383900), o(3515267271, 566280711), o(3940187606, 3454069534), o(4118630271, 4000239992), o(116418474, 1914138554), o(174292421, 2731055270), o(289380356, 3203993006), o(460393269, 320620315), o(685471733, 587496836), o(852142971, 1086792851), o(1017036298, 365543100), o(1126000580, 2618297676), o(1288033470, 3409855158), o(1501505948, 4234509866), o(1607167915, 987167468), o(1816402316, 1246189591)],
            c = [];
        !function () {
            for (var t = 0; t < 80; t++) c[t] = o()
        }(), i = i.SHA512 = e.extend({
            _doReset: function () {
                this._hash = new n.init([new r.init(1779033703, 4089235720), new r.init(3144134277, 2227873595), new r.init(1013904242, 4271175723), new r.init(2773480762, 1595750129), new r.init(1359893119, 2917565137), new r.init(2600822924, 725511199), new r.init(528734635, 4215389547), new r.init(1541459225, 327033209)])
            }, _doProcessBlock: function (t, e) {
                for (var r, n = (r = this._hash.words)[0], i = r[1], o = r[2], s = r[3], h = r[4], u = r[5], f = r[6], l = r[7], p = n.high, d = n.low, v = i.high, y = i.low, g = o.high, _ = o.low, w = s.high, m = s.low, k = h.high, B = h.low, x = u.high, S = u.low, b = f.high, C = f.low, A = l.high, H = p, z = d, E = v, I = y, R = g, D = _, M = w, F = m, L = k, O = B, j = x, P = S, N = b, W = C, J = A, T = r = l.low, U = 0; U < 80; U++) {
                    var K, X, V = c[U];
                    U < 16 ? (X = V.high = 0 | t[e + 2 * U], K = V.low = 0 | t[e + 2 * U + 1]) : (tt = (G = c[U - 15]).high, et = G.low, q = ($ = c[U - 2]).high, Y = $.low, Z = (Q = c[U - 7]).high, G = Q.low, Q = ($ = c[U - 16]).high, X = (X = ((tt >>> 1 | et << 31) ^ (tt >>> 8 | et << 24) ^ tt >>> 7) + Z + ((K = (Z = (et >>> 1 | tt << 31) ^ (et >>> 8 | tt << 24) ^ (et >>> 7 | tt << 25)) + G) >>> 0 < Z >>> 0 ? 1 : 0)) + ((q >>> 19 | Y << 13) ^ (q << 3 | Y >>> 29) ^ q >>> 6) + ((K += et = (Y >>> 19 | q << 13) ^ (Y << 3 | q >>> 29) ^ (Y >>> 6 | q << 26)) >>> 0 < et >>> 0 ? 1 : 0), K += tt = $.low, V.high = X = X + Q + (K >>> 0 < tt >>> 0 ? 1 : 0), V.low = K);
                    var G = L & j ^ ~L & N, Z = O & P ^ ~O & W, Y = H & E ^ H & R ^ E & R,
                        q = (z >>> 28 | H << 4) ^ (z << 30 | H >>> 2) ^ (z << 25 | H >>> 7), $ = (et = a[U]).high,
                        Q = et.low, tt = T + ((O >>> 14 | L << 18) ^ (O >>> 18 | L << 14) ^ (O << 23 | L >>> 9)),
                        et = (V = J + ((L >>> 14 | O << 18) ^ (L >>> 18 | O << 14) ^ (L << 23 | O >>> 9)) + (tt >>> 0 < T >>> 0 ? 1 : 0), q + (z & I ^ z & D ^ I & D));
                    J = N, T = W, N = j, W = P, j = L, P = O, L = M + (V = (V = (V = V + G + ((tt += Z) >>> 0 < Z >>> 0 ? 1 : 0)) + $ + ((tt += Q) >>> 0 < Q >>> 0 ? 1 : 0)) + X + ((tt += K) >>> 0 < K >>> 0 ? 1 : 0)) + ((O = F + tt | 0) >>> 0 < F >>> 0 ? 1 : 0) | 0, M = R, F = D, R = E, D = I, E = H, I = z, H = V + (((H >>> 28 | z << 4) ^ (H << 30 | z >>> 2) ^ (H << 25 | z >>> 7)) + Y + (et >>> 0 < q >>> 0 ? 1 : 0)) + ((z = tt + et | 0) >>> 0 < tt >>> 0 ? 1 : 0) | 0
                }
                d = n.low = d + z, n.high = p + H + (d >>> 0 < z >>> 0 ? 1 : 0), y = i.low = y + I, i.high = v + E + (y >>> 0 < I >>> 0 ? 1 : 0), _ = o.low = _ + D, o.high = g + R + (_ >>> 0 < D >>> 0 ? 1 : 0), m = s.low = m + F, s.high = w + M + (m >>> 0 < F >>> 0 ? 1 : 0), B = h.low = B + O, h.high = k + L + (B >>> 0 < O >>> 0 ? 1 : 0), S = u.low = S + P, u.high = x + j + (S >>> 0 < P >>> 0 ? 1 : 0), C = f.low = C + W, f.high = b + N + (C >>> 0 < W >>> 0 ? 1 : 0), r = l.low = r + T, l.high = A + J + (r >>> 0 < T >>> 0 ? 1 : 0)
            }, _doFinalize: function () {
                var t = this._data, e = t.words, r = 8 * this._nDataBytes, n = 8 * t.sigBytes;
                return e[n >>> 5] |= 128 << 24 - n % 32, e[30 + (128 + n >>> 10 << 5)] = Math.floor(r / 4294967296), e[31 + (128 + n >>> 10 << 5)] = r, t.sigBytes = 4 * e.length, this._process(), this._hash.toX32()
            }, clone: function () {
                var t = e.clone.call(this);
                return t._hash = this._hash.clone(), t
            }, blockSize: 32
        }), t.SHA512 = e._createHelper(i), t.HmacSHA512 = e._createHmacHelper(i)
    }(), F = (D = P).x64, u = F.Word, f = F.WordArray, F = D.algo, l = F.SHA512, F = F.SHA384 = l.extend({
        _doReset: function () {
            this._hash = new f.init([new u.init(3418070365, 3238371032), new u.init(1654270250, 914150663), new u.init(2438529370, 812702999), new u.init(355462360, 4144912697), new u.init(1731405415, 4290775857), new u.init(2394180231, 1750603025), new u.init(3675008525, 1694076839), new u.init(1203062813, 3204075428)])
        }, _doFinalize: function () {
            var t = l._doFinalize.call(this);
            return t.sigBytes -= 16, t
        }
    }), D.SHA384 = l._createHelper(F), D.HmacSHA384 = l._createHmacHelper(F), function (t) {
        var e = P, r = (o = e.lib).WordArray, n = o.Hasher, i = e.x64.Word, o = e.algo, a = [], c = [], s = [];
        !function () {
            for (var t = 1, e = 0, r = 0; r < 24; r++) {
                a[t + 5 * e] = (r + 1) * (r + 2) / 2 % 64;
                var n = (2 * t + 3 * e) % 5;
                t = e % 5, e = n
            }
            for (t = 0; t < 5; t++) for (e = 0; e < 5; e++) c[t + 5 * e] = e + (2 * t + 3 * e) % 5 * 5;
            for (var o = 1, h = 0; h < 24; h++) {
                for (var u, f = 0, l = 0, p = 0; p < 7; p++) 1 & o && ((u = (1 << p) - 1) < 32 ? l ^= 1 << u : f ^= 1 << u - 32), 128 & o ? o = o << 1 ^ 113 : o <<= 1;
                s[h] = i.create(f, l)
            }
        }();
        var h = [];
        !function () {
            for (var t = 0; t < 25; t++) h[t] = i.create()
        }(), o = o.SHA3 = n.extend({
            cfg: n.cfg.extend({ outputLength: 512 }), _doReset: function () {
                for (var t = this._state = [], e = 0; e < 25; e++) t[e] = new i.init;
                this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32
            }, _doProcessBlock: function (t, e) {
                for (var r = this._state, n = this.blockSize / 2, i = 0; i < n; i++) {
                    var o = t[e + 2 * i], u = t[e + 2 * i + 1];
                    o = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
                    (C = r[i]).high ^= u = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8), C.low ^= o
                }
                for (var f = 0; f < 24; f++) {
                    for (var l = 0; l < 5; l++) {
                        for (var p = 0, d = 0, v = 0; v < 5; v++) p ^= (C = r[l + 5 * v]).high, d ^= C.low;
                        var y = h[l];
                        y.high = p, y.low = d
                    }
                    for (l = 0; l < 5; l++) {
                        var g = h[(l + 4) % 5], _ = (w = h[(l + 1) % 5]).high, w = w.low;
                        for (p = g.high ^ (_ << 1 | w >>> 31), d = g.low ^ (w << 1 | _ >>> 31), v = 0; v < 5; v++) (C = r[l + 5 * v]).high ^= p, C.low ^= d
                    }
                    for (var m = 1; m < 25; m++) {
                        var k = (C = r[m]).high, B = C.low, x = a[m];
                        d = x < 32 ? (p = k << x | B >>> 32 - x, B << x | k >>> 32 - x) : (p = B << x - 32 | k >>> 64 - x, k << x - 32 | B >>> 64 - x), (x = h[c[m]]).high = p, x.low = d
                    }
                    var S = h[0], b = r[0];
                    for (S.high = b.high, S.low = b.low, l = 0; l < 5; l++) for (v = 0; v < 5; v++) {
                        var C = r[m = l + 5 * v], A = h[m], H = h[(l + 1) % 5 + 5 * v], z = h[(l + 2) % 5 + 5 * v];
                        C.high = A.high ^ ~H.high & z.high, C.low = A.low ^ ~H.low & z.low
                    }
                    C = r[0], b = s[f], C.high ^= b.high, C.low ^= b.low
                }
            }, _doFinalize: function () {
                var e = this._data, n = e.words, i = (this._nDataBytes, 8 * e.sigBytes), o = 32 * this.blockSize;
                n[i >>> 5] |= 1 << 24 - i % 32, n[(t.ceil((1 + i) / o) * o >>> 5) - 1] |= 128, e.sigBytes = 4 * n.length, this._process();
                for (var a = this._state, c = (n = this.cfg.outputLength / 8) / 8, s = [], h = 0; h < c; h++) {
                    var u = (f = a[h]).high, f = f.low;
                    u = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8);
                    s.push(f = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8)), s.push(u)
                }
                return new r.init(s, n)
            }, clone: function () {
                for (var t = n.clone.call(this), e = t._state = this._state.slice(0), r = 0; r < 25; r++) e[r] = e[r].clone();
                return t
            }
        }), e.SHA3 = n._createHelper(o), e.HmacSHA3 = n._createHmacHelper(o)
    }(Math), Math, M = (C = P).lib, p = M.WordArray, d = M.Hasher, M = C.algo, v = p.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]), y = p.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]), g = p.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]), _ = p.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]), w = p.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), m = p.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), M = M.RIPEMD160 = d.extend({
        _doReset: function () {
            this._hash = p.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
        }, _doProcessBlock: function (t, e) {
            for (var r = 0; r < 16; r++) {
                var n = e + r, i = t[n];
                t[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8)
            }
            var o, a, c, s, h, u, f = this._hash.words, l = w.words, p = m.words, d = v.words, k = y.words, B = g.words,
                x = _.words, S = o = f[0], b = a = f[1], C = c = f[2], A = s = f[3], H = h = f[4];
            for (r = 0; r < 80; r += 1) u = o + t[e + d[r]] | 0, u += r < 16 ? (a ^ c ^ s) + l[0] : r < 32 ? N(a, c, s) + l[1] : r < 48 ? ((a | ~c) ^ s) + l[2] : r < 64 ? W(a, c, s) + l[3] : (a ^ (c | ~s)) + l[4], u = (u = J(u |= 0, B[r])) + h | 0, o = h, h = s, s = J(c, 10), c = a, a = u, u = S + t[e + k[r]] | 0, u += r < 16 ? (b ^ (C | ~A)) + p[0] : r < 32 ? W(b, C, A) + p[1] : r < 48 ? ((b | ~C) ^ A) + p[2] : r < 64 ? N(b, C, A) + p[3] : (b ^ C ^ A) + p[4], u = (u = J(u |= 0, x[r])) + H | 0, S = H, H = A, A = J(C, 10), C = b, b = u;
            u = f[1] + c + A | 0, f[1] = f[2] + s + H | 0, f[2] = f[3] + h + S | 0, f[3] = f[4] + o + b | 0, f[4] = f[0] + a + C | 0, f[0] = u
        }, _doFinalize: function () {
            var t = this._data, e = t.words, r = 8 * this._nDataBytes, n = 8 * t.sigBytes;
            e[n >>> 5] |= 128 << 24 - n % 32, e[14 + (64 + n >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), t.sigBytes = 4 * (e.length + 1), this._process();
            for (var i = (e = this._hash).words, o = 0; o < 5; o++) {
                var a = i[o];
                i[o] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8)
            }
            return e
        }, clone: function () {
            var t = d.clone.call(this);
            return t._hash = this._hash.clone(), t
        }
    }), C.RIPEMD160 = d._createHelper(M), C.HmacRIPEMD160 = d._createHmacHelper(M), F = (D = P).lib.Base, k = D.enc.Utf8, D.algo.HMAC = F.extend({
        init: function (t, e) {
            t = this._hasher = new t.init, "string" == typeof e && (e = k.parse(e));
            var r = t.blockSize, n = 4 * r;
            (e = e.sigBytes > n ? t.finalize(e) : e).clamp();
            t = this._oKey = e.clone(), e = this._iKey = e.clone();
            for (var i = t.words, o = e.words, a = 0; a < r; a++) i[a] ^= 1549556828, o[a] ^= 909522486;
            t.sigBytes = e.sigBytes = n, this.reset()
        }, reset: function () {
            var t = this._hasher;
            t.reset(), t.update(this._iKey)
        }, update: function (t) {
            return this._hasher.update(t), this
        }, finalize: function (t) {
            var e = this._hasher;
            t = e.finalize(t);
            return e.reset(), e.finalize(this._oKey.clone().concat(t))
        }
    }), D = (M = (C = P).lib).Base, B = M.WordArray, M = (F = C.algo).SHA1, x = F.HMAC, S = F.PBKDF2 = D.extend({
        cfg: D.extend({
            keySize: 4,
            hasher: M,
            iterations: 1
        }), init: function (t) {
            this.cfg = this.cfg.extend(t)
        }, compute: function (t, e) {
            for (var r = this.cfg, n = x.create(r.hasher, t), i = B.create(), o = B.create([1]), a = i.words, c = o.words, s = r.keySize, h = r.iterations; a.length < s;) {
                var u = n.update(e).finalize(o);
                n.reset();
                for (var f = u.words, l = f.length, p = u, d = 1; d < h; d++) {
                    p = n.finalize(p), n.reset();
                    for (var v = p.words, y = 0; y < l; y++) f[y] ^= v[y]
                }
                i.concat(u), c[0]++
            }
            return i.sigBytes = 4 * s, i
        }
    }), C.PBKDF2 = function (t, e, r) {
        return S.create(r).compute(t, e)
    }, M = (D = (F = P).lib).Base, b = D.WordArray, D = (C = F.algo).MD5, A = C.EvpKDF = M.extend({
        cfg: M.extend({
            keySize: 4,
            hasher: D,
            iterations: 1
        }), init: function (t) {
            this.cfg = this.cfg.extend(t)
        }, compute: function (t, e) {
            for (var r, n = this.cfg, i = n.hasher.create(), o = b.create(), a = o.words, c = n.keySize, s = n.iterations; a.length < c;) {
                r && i.update(r), r = i.update(t).finalize(e), i.reset();
                for (var h = 1; h < s; h++) r = i.finalize(r), i.reset();
                o.concat(r)
            }
            return o.sigBytes = 4 * c, o
        }
    }), F.EvpKDF = function (t, e, r) {
        return A.create(r).compute(t, e)
    }, P.lib.Cipher || function () {
        var t = (p = P).lib, e = t.Base, r = t.WordArray, n = t.BufferedBlockAlgorithm,
            i = ((h = p.enc).Utf8, h.Base64), o = p.algo.EvpKDF, a = t.Cipher = n.extend({
                cfg: e.extend(), createEncryptor: function (t, e) {
                    return this.create(this._ENC_XFORM_MODE, t, e)
                }, createDecryptor: function (t, e) {
                    return this.create(this._DEC_XFORM_MODE, t, e)
                }, init: function (t, e, r) {
                    this.cfg = this.cfg.extend(r), this._xformMode = t, this._key = e, this.reset()
                }, reset: function () {
                    n.reset.call(this), this._doReset()
                }, process: function (t) {
                    return this._append(t), this._process()
                }, finalize: function (t) {
                    return t && this._append(t), this._doFinalize()
                }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: function (t) {
                    return {
                        encrypt: function (e, r, n) {
                            return c(r).encrypt(t, e, r, n)
                        }, decrypt: function (e, r, n) {
                            return c(r).decrypt(t, e, r, n)
                        }
                    }
                }
            });

        function c(t) {
            return "string" == typeof t ? d : l
        }

        t.StreamCipher = a.extend({
            _doFinalize: function () {
                return this._process(!0)
            }, blockSize: 1
        });
        var s = p.mode = {}, h = t.BlockCipherMode = e.extend({
            createEncryptor: function (t, e) {
                return this.Encryptor.create(t, e)
            }, createDecryptor: function (t, e) {
                return this.Decryptor.create(t, e)
            }, init: function (t, e) {
                this._cipher = t, this._iv = e
            }
        });
        h = s.CBC = ((s = h.extend()).Encryptor = s.extend({
            processBlock: function (t, e) {
                var r = this._cipher, n = r.blockSize;
                u.call(this, t, e, n), r.encryptBlock(t, e), this._prevBlock = t.slice(e, e + n)
            }
        }), s.Decryptor = s.extend({
            processBlock: function (t, e) {
                var r = this._cipher, n = r.blockSize, i = t.slice(e, e + n);
                r.decryptBlock(t, e), u.call(this, t, e, n), this._prevBlock = i
            }
        }), s);

        function u(t, e, r) {
            var n, i = this._iv;
            i ? (n = i, this._iv = void 0) : n = this._prevBlock;
            for (var o = 0; o < r; o++) t[e + o] ^= n[o]
        }

        s = (p.pad = {}).Pkcs7 = {
            pad: function (t, e) {
                for (var n = (e = 4 * e) - t.sigBytes % e, i = n << 24 | n << 16 | n << 8 | n, o = [], a = 0; a < n; a += 4) o.push(i);
                e = r.create(o, n), t.concat(e)
            }, unpad: function (t) {
                var e = 255 & t.words[t.sigBytes - 1 >>> 2];
                t.sigBytes -= e
            }
        };
        var f = (t.BlockCipher = a.extend({
            cfg: a.cfg.extend({ mode: h, padding: s }), reset: function () {
                var t;
                a.reset.call(this);
                var e = (r = this.cfg).iv, r = r.mode;
                this._xformMode == this._ENC_XFORM_MODE ? t = r.createEncryptor : (t = r.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == t ? this._mode.init(this, e && e.words) : (this._mode = t.call(r, this, e && e.words), this._mode.__creator = t)
            }, _doProcessBlock: function (t, e) {
                this._mode.processBlock(t, e)
            }, _doFinalize: function () {
                var t, e = this.cfg.padding;
                return this._xformMode == this._ENC_XFORM_MODE ? (e.pad(this._data, this.blockSize), t = this._process(!0)) : (t = this._process(!0), e.unpad(t)), t
            }, blockSize: 4
        }), t.CipherParams = e.extend({
            init: function (t) {
                this.mixIn(t)
            }, toString: function (t) {
                return (t || this.formatter).stringify(this)
            }
        })), l = (s = (p.format = {}).OpenSSL = {
            stringify: function (t) {
                var e = t.ciphertext;
                return (e = (t = t.salt) ? r.create([1398893684, 1701076831]).concat(t).concat(e) : e).toString(i)
            }, parse: function (t) {
                var e, n = i.parse(t);
                return 1398893684 == (t = n.words)[0] && 1701076831 == t[1] && (e = r.create(t.slice(2, 4)), t.splice(0, 4), n.sigBytes -= 16), f.create({
                    ciphertext: n,
                    salt: e
                })
            }
        }, t.SerializableCipher = e.extend({
            cfg: e.extend({ format: s }), encrypt: function (t, e, r, n) {
                n = this.cfg.extend(n);
                e = (i = t.createEncryptor(r, n)).finalize(e);
                var i = i.cfg;
                return f.create({
                    ciphertext: e,
                    key: r,
                    iv: i.iv,
                    algorithm: t,
                    mode: i.mode,
                    padding: i.padding,
                    blockSize: t.blockSize,
                    formatter: n.format
                })
            }, decrypt: function (t, e, r, n) {
                return n = this.cfg.extend(n), e = this._parse(e, n.format), t.createDecryptor(r, n).finalize(e.ciphertext)
            }, _parse: function (t, e) {
                return "string" == typeof t ? e.parse(t, this) : t
            }
        })), p = (p.kdf = {}).OpenSSL = {
            execute: function (t, e, n, i) {
                return i = i || r.random(8), t = o.create({ keySize: e + n }).compute(t, i), n = r.create(t.words.slice(e), 4 * n), t.sigBytes = 4 * e, f.create({
                    key: t,
                    iv: n,
                    salt: i
                })
            }
        }, d = t.PasswordBasedCipher = l.extend({
            cfg: l.cfg.extend({ kdf: p }), encrypt: function (t, e, r, n) {
                return r = (n = this.cfg.extend(n)).kdf.execute(r, t.keySize, t.ivSize), n.iv = r.iv, (n = l.encrypt.call(this, t, e, r.key, n)).mixIn(r), n
            }, decrypt: function (t, e, r, n) {
                return n = this.cfg.extend(n), e = this._parse(e, n.format), r = n.kdf.execute(r, t.keySize, t.ivSize, e.salt), n.iv = r.iv, l.decrypt.call(this, t, e, r.key, n)
            }
        })
    }(), P.mode.CFB = ((M = P.lib.BlockCipherMode.extend()).Encryptor = M.extend({
        processBlock: function (t, e) {
            var r = this._cipher, n = r.blockSize;
            T.call(this, t, e, n, r), this._prevBlock = t.slice(e, e + n)
        }
    }), M.Decryptor = M.extend({
        processBlock: function (t, e) {
            var r = this._cipher, n = r.blockSize, i = t.slice(e, e + n);
            T.call(this, t, e, n, r), this._prevBlock = i
        }
    }), M), P.mode.CTR = (F = (D = P.lib.BlockCipherMode.extend()).Encryptor = D.extend({
        processBlock: function (t, e) {
            var r = this._cipher, n = r.blockSize, i = this._iv, o = this._counter;
            i && (o = this._counter = i.slice(0), this._iv = void 0);
            var a = o.slice(0);
            r.encryptBlock(a, 0), o[n - 1] = o[n - 1] + 1 | 0;
            for (var c = 0; c < n; c++) t[e + c] ^= a[c]
        }
    }), D.Decryptor = F, D), P.mode.CTRGladman = (F = (M = P.lib.BlockCipherMode.extend()).Encryptor = M.extend({
        processBlock: function (t, e) {
            var r = this._cipher, n = r.blockSize, i = this._iv, o = this._counter;
            i && (o = this._counter = i.slice(0), this._iv = void 0), 0 === ((i = o)[0] = U(i[0])) && (i[1] = U(i[1]));
            var a = o.slice(0);
            r.encryptBlock(a, 0);
            for (var c = 0; c < n; c++) t[e + c] ^= a[c]
        }
    }), M.Decryptor = F, M), P.mode.OFB = (F = (D = P.lib.BlockCipherMode.extend()).Encryptor = D.extend({
        processBlock: function (t, e) {
            var r = this._cipher, n = r.blockSize, i = this._iv, o = this._keystream;
            i && (o = this._keystream = i.slice(0), this._iv = void 0), r.encryptBlock(o, 0);
            for (var a = 0; a < n; a++) t[e + a] ^= o[a]
        }
    }), D.Decryptor = F, D), P.mode.ECB = ((M = P.lib.BlockCipherMode.extend()).Encryptor = M.extend({
        processBlock: function (t, e) {
            this._cipher.encryptBlock(t, e)
        }
    }), M.Decryptor = M.extend({
        processBlock: function (t, e) {
            this._cipher.decryptBlock(t, e)
        }
    }), M), P.pad.AnsiX923 = {
        pad: function (t, e) {
            var r = (r = t.sigBytes) + (e = (e = 4 * e) - r % e) - 1;
            t.clamp(), t.words[r >>> 2] |= e << 24 - r % 4 * 8, t.sigBytes += e
        }, unpad: function (t) {
            var e = 255 & t.words[t.sigBytes - 1 >>> 2];
            t.sigBytes -= e
        }
    }, P.pad.Iso10126 = {
        pad: function (t, e) {
            e *= 4, e -= t.sigBytes % e, t.concat(P.lib.WordArray.random(e - 1)).concat(P.lib.WordArray.create([e << 24], 1))
        }, unpad: function (t) {
            var e = 255 & t.words[t.sigBytes - 1 >>> 2];
            t.sigBytes -= e
        }
    }, P.pad.Iso97971 = {
        pad: function (t, e) {
            t.concat(P.lib.WordArray.create([2147483648], 1)), P.pad.ZeroPadding.pad(t, e)
        }, unpad: function (t) {
            P.pad.ZeroPadding.unpad(t), t.sigBytes--
        }
    }, P.pad.ZeroPadding = {
        pad: function (t, e) {
            e *= 4, t.clamp(), t.sigBytes += e - (t.sigBytes % e || e)
        }, unpad: function (t) {
            var e = t.words, r = t.sigBytes - 1;
            for (r = t.sigBytes - 1; 0 <= r; r--) if (e[r >>> 2] >>> 24 - r % 4 * 8 & 255) {
                t.sigBytes = r + 1;
                break
            }
        }
    }, P.pad.NoPadding = {
        pad: function () {
        }, unpad: function () {
        }
    }, H = (F = P).lib.CipherParams, z = F.enc.Hex, F.format.Hex = {
        stringify: function (t) {
            return t.ciphertext.toString(z)
        }, parse: function (t) {
            return t = z.parse(t), H.create({ ciphertext: t })
        }
    }, function () {
        var t = P, e = t.lib.BlockCipher, r = t.algo, n = [], i = [], o = [], a = [], c = [], s = [], h = [], u = [],
            f = [], l = [];
        !function () {
            for (var t = [], e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
            var r = 0, p = 0;
            for (e = 0; e < 256; e++) {
                var d = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4;
                n[r] = d = d >>> 8 ^ 255 & d ^ 99;
                var v = t[i[d] = r], y = t[v], g = t[y], _ = 257 * t[d] ^ 16843008 * d;
                o[r] = _ << 24 | _ >>> 8, a[r] = _ << 16 | _ >>> 16, c[r] = _ << 8 | _ >>> 24, s[r] = _, h[d] = (_ = 16843009 * g ^ 65537 * y ^ 257 * v ^ 16843008 * r) << 24 | _ >>> 8, u[d] = _ << 16 | _ >>> 16, f[d] = _ << 8 | _ >>> 24, l[d] = _, r ? (r = v ^ t[t[t[g ^ v]]], p ^= t[t[p]]) : r = p = 1
            }
        }();
        var p = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
        r = r.AES = e.extend({
            _doReset: function () {
                if (!this._nRounds || this._keyPriorReset !== this._key) {
                    for (var t = this._keyPriorReset = this._key, e = t.words, r = t.sigBytes / 4, i = 4 * (1 + (this._nRounds = 6 + r)), o = this._keySchedule = [], a = 0; a < i; a++) a < r ? o[a] = e[a] : (d = o[a - 1], a % r ? 6 < r && a % r == 4 && (d = n[d >>> 24] << 24 | n[d >>> 16 & 255] << 16 | n[d >>> 8 & 255] << 8 | n[255 & d]) : (d = n[(d = d << 8 | d >>> 24) >>> 24] << 24 | n[d >>> 16 & 255] << 16 | n[d >>> 8 & 255] << 8 | n[255 & d], d ^= p[a / r | 0] << 24), o[a] = o[a - r] ^ d);
                    for (var c = this._invKeySchedule = [], s = 0; s < i; s++) {
                        var d;
                        a = i - s;
                        d = s % 4 ? o[a] : o[a - 4], c[s] = s < 4 || a <= 4 ? d : h[n[d >>> 24]] ^ u[n[d >>> 16 & 255]] ^ f[n[d >>> 8 & 255]] ^ l[n[255 & d]]
                    }
                }
            }, encryptBlock: function (t, e) {
                this._doCryptBlock(t, e, this._keySchedule, o, a, c, s, n)
            }, decryptBlock: function (t, e) {
                var r = t[e + 1];
                t[e + 1] = t[e + 3], t[e + 3] = r, this._doCryptBlock(t, e, this._invKeySchedule, h, u, f, l, i), r = t[e + 1], t[e + 1] = t[e + 3], t[e + 3] = r
            }, _doCryptBlock: function (t, e, r, n, i, o, a, c) {
                for (var s = this._nRounds, h = t[e] ^ r[0], u = t[e + 1] ^ r[1], f = t[e + 2] ^ r[2], l = t[e + 3] ^ r[3], p = 4, d = 1; d < s; d++) {
                    var v = n[h >>> 24] ^ i[u >>> 16 & 255] ^ o[f >>> 8 & 255] ^ a[255 & l] ^ r[p++],
                        y = n[u >>> 24] ^ i[f >>> 16 & 255] ^ o[l >>> 8 & 255] ^ a[255 & h] ^ r[p++],
                        g = n[f >>> 24] ^ i[l >>> 16 & 255] ^ o[h >>> 8 & 255] ^ a[255 & u] ^ r[p++],
                        _ = n[l >>> 24] ^ i[h >>> 16 & 255] ^ o[u >>> 8 & 255] ^ a[255 & f] ^ r[p++];
                    h = v, u = y, f = g, l = _
                }
                v = (c[h >>> 24] << 24 | c[u >>> 16 & 255] << 16 | c[f >>> 8 & 255] << 8 | c[255 & l]) ^ r[p++], y = (c[u >>> 24] << 24 | c[f >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & h]) ^ r[p++], g = (c[f >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[h >>> 8 & 255] << 8 | c[255 & u]) ^ r[p++], _ = (c[l >>> 24] << 24 | c[h >>> 16 & 255] << 16 | c[u >>> 8 & 255] << 8 | c[255 & f]) ^ r[p++], t[e] = v, t[e + 1] = y, t[e + 2] = g, t[e + 3] = _
            }, keySize: 8
        });
        t.AES = e._createHelper(r)
    }(), function () {
        var t, e = P, r = (t = e.lib).WordArray, n = t.BlockCipher,
            i = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4],
            o = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32],
            a = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], c = [{
                0: 8421888,
                268435456: 32768,
                536870912: 8421378,
                805306368: 2,
                1073741824: 512,
                1342177280: 8421890,
                1610612736: 8389122,
                1879048192: 8388608,
                2147483648: 514,
                2415919104: 8389120,
                2684354560: 33280,
                2952790016: 8421376,
                3221225472: 32770,
                3489660928: 8388610,
                3758096384: 0,
                4026531840: 33282,
                134217728: 0,
                402653184: 8421890,
                671088640: 33282,
                939524096: 32768,
                1207959552: 8421888,
                1476395008: 512,
                1744830464: 8421378,
                2013265920: 2,
                2281701376: 8389120,
                2550136832: 33280,
                2818572288: 8421376,
                3087007744: 8389122,
                3355443200: 8388610,
                3623878656: 32770,
                3892314112: 514,
                4160749568: 8388608,
                1: 32768,
                268435457: 2,
                536870913: 8421888,
                805306369: 8388608,
                1073741825: 8421378,
                1342177281: 33280,
                1610612737: 512,
                1879048193: 8389122,
                2147483649: 8421890,
                2415919105: 8421376,
                2684354561: 8388610,
                2952790017: 33282,
                3221225473: 514,
                3489660929: 8389120,
                3758096385: 32770,
                4026531841: 0,
                134217729: 8421890,
                402653185: 8421376,
                671088641: 8388608,
                939524097: 512,
                1207959553: 32768,
                1476395009: 8388610,
                1744830465: 2,
                2013265921: 33282,
                2281701377: 32770,
                2550136833: 8389122,
                2818572289: 514,
                3087007745: 8421888,
                3355443201: 8389120,
                3623878657: 0,
                3892314113: 33280,
                4160749569: 8421378
            }, {
                0: 1074282512,
                16777216: 16384,
                33554432: 524288,
                50331648: 1074266128,
                67108864: 1073741840,
                83886080: 1074282496,
                100663296: 1073758208,
                117440512: 16,
                134217728: 540672,
                150994944: 1073758224,
                167772160: 1073741824,
                184549376: 540688,
                201326592: 524304,
                218103808: 0,
                234881024: 16400,
                251658240: 1074266112,
                8388608: 1073758208,
                25165824: 540688,
                41943040: 16,
                58720256: 1073758224,
                75497472: 1074282512,
                92274688: 1073741824,
                109051904: 524288,
                125829120: 1074266128,
                142606336: 524304,
                159383552: 0,
                176160768: 16384,
                192937984: 1074266112,
                209715200: 1073741840,
                226492416: 540672,
                243269632: 1074282496,
                260046848: 16400,
                268435456: 0,
                285212672: 1074266128,
                301989888: 1073758224,
                318767104: 1074282496,
                335544320: 1074266112,
                352321536: 16,
                369098752: 540688,
                385875968: 16384,
                402653184: 16400,
                419430400: 524288,
                436207616: 524304,
                452984832: 1073741840,
                469762048: 540672,
                486539264: 1073758208,
                503316480: 1073741824,
                520093696: 1074282512,
                276824064: 540688,
                293601280: 524288,
                310378496: 1074266112,
                327155712: 16384,
                343932928: 1073758208,
                360710144: 1074282512,
                377487360: 16,
                394264576: 1073741824,
                411041792: 1074282496,
                427819008: 1073741840,
                444596224: 1073758224,
                461373440: 524304,
                478150656: 0,
                494927872: 16400,
                511705088: 1074266128,
                528482304: 540672
            }, {
                0: 260,
                1048576: 0,
                2097152: 67109120,
                3145728: 65796,
                4194304: 65540,
                5242880: 67108868,
                6291456: 67174660,
                7340032: 67174400,
                8388608: 67108864,
                9437184: 67174656,
                10485760: 65792,
                11534336: 67174404,
                12582912: 67109124,
                13631488: 65536,
                14680064: 4,
                15728640: 256,
                524288: 67174656,
                1572864: 67174404,
                2621440: 0,
                3670016: 67109120,
                4718592: 67108868,
                5767168: 65536,
                6815744: 65540,
                7864320: 260,
                8912896: 4,
                9961472: 256,
                11010048: 67174400,
                12058624: 65796,
                13107200: 65792,
                14155776: 67109124,
                15204352: 67174660,
                16252928: 67108864,
                16777216: 67174656,
                17825792: 65540,
                18874368: 65536,
                19922944: 67109120,
                20971520: 256,
                22020096: 67174660,
                23068672: 67108868,
                24117248: 0,
                25165824: 67109124,
                26214400: 67108864,
                27262976: 4,
                28311552: 65792,
                29360128: 67174400,
                30408704: 260,
                31457280: 65796,
                32505856: 67174404,
                17301504: 67108864,
                18350080: 260,
                19398656: 67174656,
                20447232: 0,
                21495808: 65540,
                22544384: 67109120,
                23592960: 256,
                24641536: 67174404,
                25690112: 65536,
                26738688: 67174660,
                27787264: 65796,
                28835840: 67108868,
                29884416: 67109124,
                30932992: 67174400,
                31981568: 4,
                33030144: 65792
            }, {
                0: 2151682048,
                65536: 2147487808,
                131072: 4198464,
                196608: 2151677952,
                262144: 0,
                327680: 4198400,
                393216: 2147483712,
                458752: 4194368,
                524288: 2147483648,
                589824: 4194304,
                655360: 64,
                720896: 2147487744,
                786432: 2151678016,
                851968: 4160,
                917504: 4096,
                983040: 2151682112,
                32768: 2147487808,
                98304: 64,
                163840: 2151678016,
                229376: 2147487744,
                294912: 4198400,
                360448: 2151682112,
                425984: 0,
                491520: 2151677952,
                557056: 4096,
                622592: 2151682048,
                688128: 4194304,
                753664: 4160,
                819200: 2147483648,
                884736: 4194368,
                950272: 4198464,
                1015808: 2147483712,
                1048576: 4194368,
                1114112: 4198400,
                1179648: 2147483712,
                1245184: 0,
                1310720: 4160,
                1376256: 2151678016,
                1441792: 2151682048,
                1507328: 2147487808,
                1572864: 2151682112,
                1638400: 2147483648,
                1703936: 2151677952,
                1769472: 4198464,
                1835008: 2147487744,
                1900544: 4194304,
                1966080: 64,
                2031616: 4096,
                1081344: 2151677952,
                1146880: 2151682112,
                1212416: 0,
                1277952: 4198400,
                1343488: 4194368,
                1409024: 2147483648,
                1474560: 2147487808,
                1540096: 64,
                1605632: 2147483712,
                1671168: 4096,
                1736704: 2147487744,
                1802240: 2151678016,
                1867776: 4160,
                1933312: 2151682048,
                1998848: 4194304,
                2064384: 4198464
            }, {
                0: 128,
                4096: 17039360,
                8192: 262144,
                12288: 536870912,
                16384: 537133184,
                20480: 16777344,
                24576: 553648256,
                28672: 262272,
                32768: 16777216,
                36864: 537133056,
                40960: 536871040,
                45056: 553910400,
                49152: 553910272,
                53248: 0,
                57344: 17039488,
                61440: 553648128,
                2048: 17039488,
                6144: 553648256,
                10240: 128,
                14336: 17039360,
                18432: 262144,
                22528: 537133184,
                26624: 553910272,
                30720: 536870912,
                34816: 537133056,
                38912: 0,
                43008: 553910400,
                47104: 16777344,
                51200: 536871040,
                55296: 553648128,
                59392: 16777216,
                63488: 262272,
                65536: 262144,
                69632: 128,
                73728: 536870912,
                77824: 553648256,
                81920: 16777344,
                86016: 553910272,
                90112: 537133184,
                94208: 16777216,
                98304: 553910400,
                102400: 553648128,
                106496: 17039360,
                110592: 537133056,
                114688: 262272,
                118784: 536871040,
                122880: 0,
                126976: 17039488,
                67584: 553648256,
                71680: 16777216,
                75776: 17039360,
                79872: 537133184,
                83968: 536870912,
                88064: 17039488,
                92160: 128,
                96256: 553910272,
                100352: 262272,
                104448: 553910400,
                108544: 0,
                112640: 553648128,
                116736: 16777344,
                120832: 262144,
                124928: 537133056,
                129024: 536871040
            }, {
                0: 268435464,
                256: 8192,
                512: 270532608,
                768: 270540808,
                1024: 268443648,
                1280: 2097152,
                1536: 2097160,
                1792: 268435456,
                2048: 0,
                2304: 268443656,
                2560: 2105344,
                2816: 8,
                3072: 270532616,
                3328: 2105352,
                3584: 8200,
                3840: 270540800,
                128: 270532608,
                384: 270540808,
                640: 8,
                896: 2097152,
                1152: 2105352,
                1408: 268435464,
                1664: 268443648,
                1920: 8200,
                2176: 2097160,
                2432: 8192,
                2688: 268443656,
                2944: 270532616,
                3200: 0,
                3456: 270540800,
                3712: 2105344,
                3968: 268435456,
                4096: 268443648,
                4352: 270532616,
                4608: 270540808,
                4864: 8200,
                5120: 2097152,
                5376: 268435456,
                5632: 268435464,
                5888: 2105344,
                6144: 2105352,
                6400: 0,
                6656: 8,
                6912: 270532608,
                7168: 8192,
                7424: 268443656,
                7680: 270540800,
                7936: 2097160,
                4224: 8,
                4480: 2105344,
                4736: 2097152,
                4992: 268435464,
                5248: 268443648,
                5504: 8200,
                5760: 270540808,
                6016: 270532608,
                6272: 270540800,
                6528: 270532616,
                6784: 8192,
                7040: 2105352,
                7296: 2097160,
                7552: 0,
                7808: 268435456,
                8064: 268443656
            }, {
                0: 1048576,
                16: 33555457,
                32: 1024,
                48: 1049601,
                64: 34604033,
                80: 0,
                96: 1,
                112: 34603009,
                128: 33555456,
                144: 1048577,
                160: 33554433,
                176: 34604032,
                192: 34603008,
                208: 1025,
                224: 1049600,
                240: 33554432,
                8: 34603009,
                24: 0,
                40: 33555457,
                56: 34604032,
                72: 1048576,
                88: 33554433,
                104: 33554432,
                120: 1025,
                136: 1049601,
                152: 33555456,
                168: 34603008,
                184: 1048577,
                200: 1024,
                216: 34604033,
                232: 1,
                248: 1049600,
                256: 33554432,
                272: 1048576,
                288: 33555457,
                304: 34603009,
                320: 1048577,
                336: 33555456,
                352: 34604032,
                368: 1049601,
                384: 1025,
                400: 34604033,
                416: 1049600,
                432: 1,
                448: 0,
                464: 34603008,
                480: 33554433,
                496: 1024,
                264: 1049600,
                280: 33555457,
                296: 34603009,
                312: 1,
                328: 33554432,
                344: 1048576,
                360: 1025,
                376: 34604032,
                392: 33554433,
                408: 34603008,
                424: 0,
                440: 34604033,
                456: 1049601,
                472: 1024,
                488: 33555456,
                504: 1048577
            }, {
                0: 134219808,
                1: 131072,
                2: 134217728,
                3: 32,
                4: 131104,
                5: 134350880,
                6: 134350848,
                7: 2048,
                8: 134348800,
                9: 134219776,
                10: 133120,
                11: 134348832,
                12: 2080,
                13: 0,
                14: 134217760,
                15: 133152,
                2147483648: 2048,
                2147483649: 134350880,
                2147483650: 134219808,
                2147483651: 134217728,
                2147483652: 134348800,
                2147483653: 133120,
                2147483654: 133152,
                2147483655: 32,
                2147483656: 134217760,
                2147483657: 2080,
                2147483658: 131104,
                2147483659: 134350848,
                2147483660: 0,
                2147483661: 134348832,
                2147483662: 134219776,
                2147483663: 131072,
                16: 133152,
                17: 134350848,
                18: 32,
                19: 2048,
                20: 134219776,
                21: 134217760,
                22: 134348832,
                23: 131072,
                24: 0,
                25: 131104,
                26: 134348800,
                27: 134219808,
                28: 134350880,
                29: 133120,
                30: 2080,
                31: 134217728,
                2147483664: 131072,
                2147483665: 2048,
                2147483666: 134348832,
                2147483667: 133152,
                2147483668: 32,
                2147483669: 134348800,
                2147483670: 134217728,
                2147483671: 134219808,
                2147483672: 134350880,
                2147483673: 134217760,
                2147483674: 134219776,
                2147483675: 0,
                2147483676: 133120,
                2147483677: 2080,
                2147483678: 131104,
                2147483679: 134350848
            }], s = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679],
            h = (t = e.algo).DES = n.extend({
                _doReset: function () {
                    for (var t = this._key.words, e = [], r = 0; r < 56; r++) {
                        var n = i[r] - 1;
                        e[r] = t[n >>> 5] >>> 31 - n % 32 & 1
                    }
                    for (var c = this._subKeys = [], s = 0; s < 16; s++) {
                        var h = c[s] = [], u = a[s];
                        for (r = 0; r < 24; r++) h[r / 6 | 0] |= e[(o[r] - 1 + u) % 28] << 31 - r % 6, h[4 + (r / 6 | 0)] |= e[28 + (o[r + 24] - 1 + u) % 28] << 31 - r % 6;
                        for (h[0] = h[0] << 1 | h[0] >>> 31, r = 1; r < 7; r++) h[r] = h[r] >>> 4 * (r - 1) + 3;
                        h[7] = h[7] << 5 | h[7] >>> 27
                    }
                    var f = this._invSubKeys = [];
                    for (r = 0; r < 16; r++) f[r] = c[15 - r]
                }, encryptBlock: function (t, e) {
                    this._doCryptBlock(t, e, this._subKeys)
                }, decryptBlock: function (t, e) {
                    this._doCryptBlock(t, e, this._invSubKeys)
                }, _doCryptBlock: function (t, e, r) {
                    this._lBlock = t[e], this._rBlock = t[e + 1], u.call(this, 4, 252645135), u.call(this, 16, 65535), f.call(this, 2, 858993459), f.call(this, 8, 16711935), u.call(this, 1, 1431655765);
                    for (var n = 0; n < 16; n++) {
                        for (var i = r[n], o = this._lBlock, a = this._rBlock, h = 0, l = 0; l < 8; l++) h |= c[l][((a ^ i[l]) & s[l]) >>> 0];
                        this._lBlock = a, this._rBlock = o ^ h
                    }
                    var p = this._lBlock;
                    this._lBlock = this._rBlock, this._rBlock = p, u.call(this, 1, 1431655765), f.call(this, 8, 16711935), f.call(this, 2, 858993459), u.call(this, 16, 65535), u.call(this, 4, 252645135), t[e] = this._lBlock, t[e + 1] = this._rBlock
                }, keySize: 2, ivSize: 2, blockSize: 2
            });

        function u(t, e) {
            e = (this._lBlock >>> t ^ this._rBlock) & e, this._rBlock ^= e, this._lBlock ^= e << t
        }

        function f(t, e) {
            e = (this._rBlock >>> t ^ this._lBlock) & e, this._lBlock ^= e, this._rBlock ^= e << t
        }

        e.DES = n._createHelper(h), t = t.TripleDES = n.extend({
            _doReset: function () {
                if (2 !== (n = this._key.words).length && 4 !== n.length && n.length < 6) throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
                var t = n.slice(0, 2), e = n.length < 4 ? n.slice(0, 2) : n.slice(2, 4),
                    n = n.length < 6 ? n.slice(0, 2) : n.slice(4, 6);
                this._des1 = h.createEncryptor(r.create(t)), this._des2 = h.createEncryptor(r.create(e)), this._des3 = h.createEncryptor(r.create(n))
            }, encryptBlock: function (t, e) {
                this._des1.encryptBlock(t, e), this._des2.decryptBlock(t, e), this._des3.encryptBlock(t, e)
            }, decryptBlock: function (t, e) {
                this._des3.decryptBlock(t, e), this._des2.encryptBlock(t, e), this._des1.decryptBlock(t, e)
            }, keySize: 6, ivSize: 2, blockSize: 2
        }), e.TripleDES = n._createHelper(t)
    }(), function () {
        var t = P, e = t.lib.StreamCipher, r = t.algo, n = r.RC4 = e.extend({
            _doReset: function () {
                for (var t = this._key, e = t.words, r = t.sigBytes, n = this._S = [], i = 0; i < 256; i++) n[i] = i;
                i = 0;
                for (var o = 0; i < 256; i++) {
                    var a = e[(a = i % r) >>> 2] >>> 24 - a % 4 * 8 & 255;
                    o = (o + n[i] + a) % 256, a = n[i];
                    n[i] = n[o], n[o] = a
                }
                this._i = this._j = 0
            }, _doProcessBlock: function (t, e) {
                t[e] ^= i.call(this)
            }, keySize: 8, ivSize: 0
        });

        function i() {
            for (var t = this._S, e = this._i, r = this._j, n = 0, i = 0; i < 4; i++) {
                r = (r + t[e = (e + 1) % 256]) % 256;
                var o = t[e];
                t[e] = t[r], t[r] = o, n |= t[(t[e] + t[r]) % 256] << 24 - 8 * i
            }
            return this._i = e, this._j = r, n
        }

        t.RC4 = e._createHelper(n), r = r.RC4Drop = n.extend({
            cfg: n.cfg.extend({ drop: 192 }), _doReset: function () {
                n._doReset.call(this);
                for (var t = this.cfg.drop; 0 < t; t--) i.call(this)
            }
        }), t.RC4Drop = e._createHelper(r)
    }(), M = (D = P).lib.StreamCipher, F = D.algo, E = [], I = [], R = [], F = F.Rabbit = M.extend({
        _doReset: function () {
            for (var t = this._key.words, e = this.cfg.iv, r = 0; r < 4; r++) t[r] = 16711935 & (t[r] << 8 | t[r] >>> 24) | 4278255360 & (t[r] << 24 | t[r] >>> 8);
            var n = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16],
                i = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]];
            for (r = this._b = 0; r < 4; r++) K.call(this);
            for (r = 0; r < 8; r++) i[r] ^= n[r + 4 & 7];
            if (e) {
                var o, a = (o = e.words)[0], c = o[1];
                a = (e = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8)) >>> 16 | 4294901760 & (o = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)), c = o << 16 | 65535 & e;
                for (i[0] ^= e, i[1] ^= a, i[2] ^= o, i[3] ^= c, i[4] ^= e, i[5] ^= a, i[6] ^= o, i[7] ^= c, r = 0; r < 4; r++) K.call(this)
            }
        }, _doProcessBlock: function (t, e) {
            var r = this._X;
            K.call(this), E[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16, E[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16, E[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16, E[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16;
            for (var n = 0; n < 4; n++) E[n] = 16711935 & (E[n] << 8 | E[n] >>> 24) | 4278255360 & (E[n] << 24 | E[n] >>> 8), t[e + n] ^= E[n]
        }, blockSize: 4, ivSize: 2
    }), D.Rabbit = M._createHelper(F), M = (D = P).lib.StreamCipher, F = D.algo, L = [], O = [], j = [], F = F.RabbitLegacy = M.extend({
        _doReset: function () {
            for (var t = this._key.words, e = this.cfg.iv, r = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16], n = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]], i = this._b = 0; i < 4; i++) X.call(this);
            for (i = 0; i < 8; i++) n[i] ^= r[i + 4 & 7];
            if (e) {
                var o, a = (o = e.words)[0];
                t = o[1], a = (e = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8)) >>> 16 | 4294901760 & (o = 16711935 & (t << 8 | t >>> 24) | 4278255360 & (t << 24 | t >>> 8)), t = o << 16 | 65535 & e;
                for (n[0] ^= e, n[1] ^= a, n[2] ^= o, n[3] ^= t, n[4] ^= e, n[5] ^= a, n[6] ^= o, n[7] ^= t, i = 0; i < 4; i++) X.call(this)
            }
        }, _doProcessBlock: function (t, e) {
            var r = this._X;
            X.call(this), L[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16, L[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16, L[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16, L[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16;
            for (var n = 0; n < 4; n++) L[n] = 16711935 & (L[n] << 8 | L[n] >>> 24) | 4278255360 & (L[n] << 24 | L[n] >>> 8), t[e + n] ^= L[n]
        }, blockSize: 4, ivSize: 2
    }), D.RabbitLegacy = M._createHelper(F), P
}(),
    window = {
        chrome: {
            app: {
                isInstalled: !1,
                InstallState: { DISABLED: "disabled", INSTALLED: "installed", NOT_INSTALLED: "not_installed" },
                RunningState: { CANNOT_RUN: "cannot_run", READY_TO_RUN: "ready_to_run", RUNNING: "running" }
            }
        }
    },
    navigator = { userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36" },
    document = { referrer: "" };
window.__JS_SECURITY_VERSION = "v3.2.1";
function XC() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now(),
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-MM-dd", r = new Date(t), n = e, i = {
            "M+": r.getMonth() + 1,
            "d+": r.getDate(),
            "D+": r.getDate(),
            "h+": r.getHours(),
            "H+": r.getHours(),
            "m+": r.getMinutes(),
            "s+": r.getSeconds(),
            "w+": r.getDay(),
            "q+": Math.floor((r.getMonth() + 3) / 3),
            "S+": r.getMilliseconds()
        };
    return /(y+)/i.test(n) && (n = n.replace(RegExp.$1, "".concat(r.getFullYear()).substr(4 - RegExp.$1.length))), Object.keys(i).forEach(function (t) {
        if (new RegExp("(".concat(t, ")")).test(n)) {
            var e = "S+" === t ? "000" : "00";
            n = n.replace(RegExp.$1, 1 == RegExp.$1.length ? i[t] : "".concat(e).concat(i[t]).substr("".concat(i[t]).length))
        }
    }), n
}
var VC = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];
function YC(t) {
    var e, r, n, i, o, a, c;
    for (a = t.length, o = 0, c = ""; o < a;) {
        do {
            e = VC[255 & t.charCodeAt(o++)]
        } while (o < a && -1 == e);
        if (-1 == e) break;
        do {
            r = VC[255 & t.charCodeAt(o++)]
        } while (o < a && -1 == r);
        if (-1 == r) break;
        c += String.fromCharCode(e << 2 | (48 & r) >> 4);
        do {
            if (61 == (n = 255 & t.charCodeAt(o++))) return c;
            n = VC[n]
        } while (o < a && -1 == n);
        if (-1 == n) break;
        c += String.fromCharCode((15 & r) << 4 | (60 & n) >> 2);
        do {
            if (61 == (i = 255 & t.charCodeAt(o++))) return c;
            i = VC[i]
        } while (o < a && -1 == i);
        if (-1 == i) break;
        c += String.fromCharCode((3 & n) << 6 | i)
    }
    return c
}
function hI(t, e) {
    var r, n = [], i = t.length, o = aI(t);
    try {
        for (o.s(); !(r = o.n()).done;) {
            var a = r.value;
            if (Math.random() * i < e && (n.push(a), 0 == --e)) break;
            i--
        }
    } catch (t) {
        o.e(t)
    } finally {
        o.f()
    }
    for (var c = "", s = 0; s < n.length; s++) {
        var h = 0 | Math.random() * (n.length - s);
        c += n[h], n[h] = n[n.length - s - 1]
    }
    return c
}
function cI(t, e) {
    if (t) {
        if ("string" == typeof t) return uI(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? uI(t, e) : void 0
    }
}
function uI(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}
function aI(t, e) {
    var r;
    if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (r = cI(t)) || e && t && "number" == typeof t.length) {
            r && (t = r);
            var n = 0, i = function () {
            };
            return {
                s: i, n: function () {
                    var e = { done: !0 };
                    if (n >= t.length) return e;
                    var r = { done: !1 };
                    return r.value = t[n++], r
                }, e: function (t) {
                    throw t
                }, f: i
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var o, a = !0, c = !1;
    return {
        s: function () {
            r = t[Symbol.iterator]()
        }, n: function () {
            var t = r.next();
            return a = t.done, t
        }, e: function (t) {
            c = !0, o = t
        }, f: function () {
            try {
                a || null == r.return || r.return()
            } finally {
                if (c) throw o
            }
        }
    }
}
function sI() {
    return 10 * Math.random() | 0
}
var X_ = J_, Z_ = X_;
function J_(t) {
    return X_ = J_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, J_(t)
}
function xI(t) {
    var e = Z_(t);
    return "number" == e && !isNaN(t) || "string" == e || "boolean" == e
}

function vI(t, e) {
    for (var r = 0; r < e.length; r++) {
        -1 !== t.indexOf(e[r]) && (t = t.replace(e[r], ""))
    }
    return t
}

function lI(t) {
    for (var e = t.size, r = t.num, n = ""; e--;) n += r[Math.random() * r.length | 0];
    return n
}

function fI() {
    var t = "0123456789", e = hI(t, 3), r = sI(), n = vI(t, e), i = {};
    i.size = r, i.num = n;
    for (var o = (lI(i) + e + lI({
        size: 14 - (r + 3) + 1,
        num: n
    }) + r).split(""), a = []; o.length > 0;) a.push(9 - parseInt(o.pop()));
    return a.join("")
}

function qI(t) {
    var e = new RegExp("(^| )" + t + "(?:=([^;]*))?(;|$)"), r = document.cookie.match(e);
    if (!r || !r[2]) return "";
    var n = r[2];
    try {
        return /(%[0-9A-F]{2}){2,}/.test(n) ? decodeURIComponent(n) : unescape(n)
    } catch (t) {
        return unescape(n)
    }
}

var FI = Object.freeze({
    __proto__: null, get: qI, set: function (t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = r.path || "/",
            i = r.domain || null, o = r.secure || !1;
        document.cookie = t + "=" + escape(e) + ";expires=" + HI(r) + (n ? ";path=" + n : "") + (i ? ";domain=" + i : "") + (o ? ";secure" : "")
    }, del: function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = qI(t), n = e.path || "/",
            i = e.domain || null, o = e.secure || !1;
        if (null != r) {
            var a = new Date;
            a.setMinutes(a.getMinutes() - 1e3), document.cookie = t + "=;expires=" + a.toGMTString() + (n ? ";path=" + n : "") + (i ? ";domain=" + i : "") + (o ? ";secure" : "")
        }
    }
});

function $_(t, e, r, n, i, o, a) {
    try {
        var c = t[o](a), s = c.value
    } catch (t) {
        return void r(t)
    }
    c.done ? e(s) : Promise.resolve(s).then(n, i)
}

var tm = function (t) {
    return function () {
        var e = this, r = arguments;
        return new Promise(function (n, i) {
            var o = t.apply(e, r);

            function a(t) {
                $_(o, n, i, a, c, "next", t)
            }

            function c(t) {
                $_(o, n, i, a, c, "throw", t)
            }

            a(void 0)
        })
    }
}, Q_ = { exports: {} };
!function (t) {
    var e = function (t) {
        var e, r = Object.prototype, n = r.hasOwnProperty, i = Object.defineProperty || function (t, e, r) {
            t[e] = r.value
        }, o = "function" == typeof Symbol ? Symbol : {}, a = o.iterator || "@@iterator",
            c = o.asyncIterator || "@@asyncIterator", s = o.toStringTag || "@@toStringTag";

        function h(t, e, r) {
            return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]
        }

        try {
            h({}, "")
        } catch (t) {
            h = function (t, e, r) {
                return t[e] = r
            }
        }

        function u(t, e, r, n) {
            var o = e && e.prototype instanceof y ? e : y, a = Object.create(o.prototype), c = new H(n || []);
            return i(a, "_invoke", {
                value: function (t, e, r) {
                    var n = l;
                    return function (i, o) {
                        if (n === p) throw new Error("Generator is already running");
                        if (n === d) {
                            if ("throw" === i) throw o;
                            return E()
                        }
                        for (r.method = i, r.arg = o; ;) {
                            var a = r.delegate;
                            if (a) {
                                var c = b(a, r);
                                if (c) {
                                    if (c === v) continue;
                                    return c
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                                if (n === l) throw n = d, r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = p;
                            var s = f(t, e, r);
                            if ("normal" === s.type) {
                                if (n = r.done ? d : "suspendedYield", s.arg === v) continue;
                                return { value: s.arg, done: r.done }
                            }
                            "throw" === s.type && (n = d, r.method = "throw", r.arg = s.arg)
                        }
                    }
                }(t, r, c)
            }), a
        }

        function f(t, e, r) {
            try {
                return { type: "normal", arg: t.call(e, r) }
            } catch (t) {
                return { type: "throw", arg: t }
            }
        }

        t.wrap = u;
        var l = "suspendedStart", p = "executing", d = "completed", v = {};

        function y() {
        }

        function g() {
        }

        function _() {
        }

        var w = {};
        h(w, a, function () {
            return this
        });
        var m = Object.getPrototypeOf, k = m && m(m(z([])));
        k && k !== r && n.call(k, a) && (w = k);
        var B = _.prototype = y.prototype = Object.create(w);

        function x(t) {
            ["next", "throw", "return"].forEach(function (e) {
                h(t, e, function (t) {
                    return this._invoke(e, t)
                })
            })
        }

        function S(t, e) {
            function r(i, o, a, c) {
                var s = f(t[i], t, o);
                if ("throw" !== s.type) {
                    var h = s.arg, u = h.value;
                    return u && "object" === Z_(u) && n.call(u, "__await") ? e.resolve(u.__await).then(function (t) {
                        r("next", t, a, c)
                    }, function (t) {
                        r("throw", t, a, c)
                    }) : e.resolve(u).then(function (t) {
                        h.value = t, a(h)
                    }, function (t) {
                        return r("throw", t, a, c)
                    })
                }
                c(s.arg)
            }

            var o;
            i(this, "_invoke", {
                value: function (t, n) {
                    function i() {
                        return new e(function (e, i) {
                            r(t, n, e, i)
                        })
                    }

                    return o = o ? o.then(i, i) : i()
                }
            })
        }

        function b(t, r) {
            var n = r.method, i = t.iterator[n];
            if (i === e) return r.delegate = null, "throw" === n && t.iterator.return && (r.method = "return", r.arg = e, b(t, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), v;
            var o = f(i, t.iterator, r.arg);
            if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, v;
            var a = o.arg;
            return a ? a.done ? (r[t.resultName] = a.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, v) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, v)
        }

        function C(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function A(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function H(t) {
            this.tryEntries = [{ tryLoc: "root" }], t.forEach(C, this), this.reset(!0)
        }

        function z(t) {
            if (t) {
                var r = t[a];
                if (r) return r.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var i = -1, o = function r() {
                        for (; ++i < t.length;) if (n.call(t, i)) return r.value = t[i], r.done = !1, r;
                        return r.value = e, r.done = !0, r
                    };
                    return o.next = o
                }
            }
            return { next: E }
        }

        function E() {
            return { value: e, done: !0 }
        }

        return g.prototype = _, i(B, "constructor", { value: _, configurable: !0 }), i(_, "constructor", {
            value: g,
            configurable: !0
        }), g.displayName = h(_, s, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
        }, t.mark = function (t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, _) : (t.__proto__ = _, h(t, s, "GeneratorFunction")), t.prototype = Object.create(B), t
        }, t.awrap = function (t) {
            return { __await: t }
        }, x(S.prototype), h(S.prototype, c, function () {
            return this
        }), t.AsyncIterator = S, t.async = function (e, r, n, i, o) {
            void 0 === o && (o = Promise);
            var a = new S(u(e, r, n, i), o);
            return t.isGeneratorFunction(r) ? a : a.next().then(function (t) {
                return t.done ? t.value : a.next()
            })
        }, x(B), h(B, s, "Generator"), h(B, a, function () {
            return this
        }), h(B, "toString", function () {
            return "[object Generator]"
        }), t.keys = function (t) {
            var e = Object(t), r = [];
            for (var n in e) r.push(n);
            return r.reverse(), function t() {
                for (; r.length;) {
                    var n = r.pop();
                    if (n in e) return t.value = n, t.done = !1, t
                }
                return t.done = !0, t
            }
        }, t.values = z, H.prototype = {
            constructor: H, reset: function (t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(A), !t) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
            }, stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            }, dispatchException: function (t) {
                if (this.done) throw t;
                var r = this;

                function i(n, i) {
                    return c.type = "throw", c.arg = t, r.next = n, i && (r.method = "next", r.arg = e), !!i
                }

                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var a = this.tryEntries[o], c = a.completion;
                    if ("root" === a.tryLoc) return i("end");
                    if (a.tryLoc <= this.prev) {
                        var s = n.call(a, "catchLoc"), h = n.call(a, "finallyLoc");
                        if (s && h) {
                            if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                        } else if (s) {
                            if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                        } else {
                            if (!h) throw new Error("try statement without catch or finally");
                            if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                        }
                    }
                }
            }, abrupt: function (t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var i = this.tryEntries[r];
                    if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                        var o = i;
                        break
                    }
                }
                o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                var a = o ? o.completion : {};
                return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, v) : this.complete(a)
            }, complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
            }, finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), A(r), v
                }
            }, catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.tryLoc === t) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var i = n.arg;
                            A(r)
                        }
                        return i
                    }
                }
                throw new Error("illegal catch attempt")
            }, delegateYield: function (t, r, n) {
                return this.delegate = {
                    iterator: z(t),
                    resultName: r,
                    nextLoc: n
                }, "next" === this.method && (this.arg = e), v
            }
        }, t
    }(Q_.exports);
    try {
        regeneratorRuntime = e
    } catch (t) {
        "object" === ("undefined" == typeof globalThis ? "undefined" : Z_(globalThis)) ? globalThis.regeneratorRuntime = e : Function("r", "regeneratorRuntime = r")(e)
    }
}();
var om = Q_.exports;

function pI() {
    var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = e.size,
        n = void 0 === r ? 10 : r, i = e.dictType, o = void 0 === i ? "number" : i, a = e.customDict, c = "";
    if (a && "string" == typeof a) t = a; else switch (o) {
        case "alphabet":
            t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
        case "max":
            t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
            break;
        case "number":
        default:
            t = "0123456789"
    }
    for (; n--;) c += t[Math.random() * t.length | 0];
    return c
}

function VI() {
    return (VI = tm(om.mark(function t(e) {
        var r, n, i, o;
        return om.wrap(function (t) {
            for (; ;) switch (t.prev = t.next) {
                case 0:
                    return o = function () {
                        return (o = tm(om.mark(function t(i, o) {
                            return om.wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        if (t.prev = 0, !(1 === e && n.includes(i) || 0 === e)) {
                                            t.next = 5;
                                            break
                                        }
                                        return t.next = 4, o();
                                    case 4:
                                        r[i] = t.sent;
                                    case 5:
                                        t.next = 9;
                                        break;
                                    case 7:
                                        t.prev = 7, t.t0 = t.catch(0);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, null, [[0, 7]])
                        }))).apply(this, arguments)
                    }, i = function (t, e) {
                        return o.apply(this, arguments)
                    }, r = {}, n = ["pp", "sua", "random", "referer", "v"], t.next = 6, i("wc", function (t) {
                        return /Chrome/.test(window.navigator.userAgent) && !window.chrome ? 1 : 0
                    });
                case 6:
                    return t.next = 8, i("wd", function (t) {
                        return navigator.webdriver ? 1 : 0
                    });
                case 8:
                    return t.next = 10, i("l", function (t) {
                        return navigator.language
                    });
                case 10:
                    return t.next = 12, i("ls", function (t) {
                        return navigator.languages.join(",")
                    });
                case 12:
                    return t.next = 14, i("ml", function (t) {
                        return navigator.mimeTypes.length
                    });
                case 14:
                    return t.next = 16, i("pl", function (t) {
                        return navigator.plugins.length
                    });
                case 16:
                    return t.next = 18, i("av", function (t) {
                        return navigator.appVersion
                    });
                case 18:
                    return t.next = 20, i("ua", function (t) {
                        return navigator.userAgent
                    });
                case 20:
                    return t.next = 22, i("sua", function (t) {
                        var e = new RegExp("Mozilla/5.0 \\((.*?)\\)"), r = navigator.userAgent.match(e);
                        return r && r[1] ? r[1] : ""
                    });
                case 22:
                    return t.next = 24, i("pp", function (t) {
                        return {} || {}
                    });
                case 24:
                    return t.next = 26, i("pp1", function (t) {
                        var e = FI.get("pwdt_id"), r = FI.get("pin"), n = FI.get("pt_pin");
                        if (!e && !r && !n) {
                            var i = document.cookie;
                            if (i) return i
                        }
                        return ""
                    });
                case 26:
                    return t.next = 28, i("pm", function () {
                        var t = { lKfcB: "notifications", cmkAv: "return" }, e = t, r = tm(om.mark(function t(r) {
                            var n;
                            return om.wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        t.next = 2;
                                        var r = {};
                                        return r.name = e.lKfcB, navigator.permissions.query(r);
                                    case 2:
                                        n = t.sent;
                                        var i = {};
                                        return i.ps = n.state, i.np = Notification.permission, t.abrupt(e.cmkAv, i);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t)
                        }));
                        return function (t) {
                            return r.apply(this, arguments)
                        }
                    }());
                case 28:
                    return t.next = 30, i("w", function (t) {
                        return window.screen.width
                    });
                case 30:
                    return t.next = 32, i("h", function (t) {
                        return window.screen.height
                    });
                case 32:
                    return t.next = 34, i("ow", function (t) {
                        return window.outerWidth
                    });
                case 34:
                    return t.next = 36, i("oh", function (t) {
                        return window.outerHeight
                    });
                case 36:
                    return t.next = 38, i("url", function (t) {
                        return location.href
                    });
                case 38:
                    return t.next = 40, i("og", function (t) {
                        return location.origin
                    });
                case 40:
                    return t.next = 42, i("pf", function (t) {
                        return window.platform
                    });
                case 42:
                    return t.next = 44, i("pr", function (t) {
                        return window.devicePixelRatio
                    });
                case 44:
                    return t.next = 46, i("re", function (t) {
                        return document.referrer
                    });
                case 46:
                    return t.next = 48, i("random", function (t) {
                        return pI({ size: 10, dictType: "max", customDict: null })
                    });
                case 48:
                    return t.next = 50, i("referer", function (t) {
                        var e = new RegExp("[^?]*"), r = document.referrer.match(e);
                        return r && r[0] ? r[0] : ""
                    });
                case 50:
                    return t.next = 52, i("v", function (t) {
                        return window.__JS_SECURITY_VERSION || "v3.2.1"
                    });
                case 52:
                    return t.abrupt("return", r);
                case 53:
                case "end":
                    return t.stop()
            }
        }, t)
    }))).apply(this, arguments)
}

function encryptData(t, e) {
    return CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(t), CryptoJS.enc.Utf8.parse(e.join("")), {
        iv: CryptoJS.enc.Utf8.parse(["01", "02", "03", "04", "05", "06", "07", "08"].join("")),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).ciphertext.toString()
}

function decryptData(t) {
    const e = CryptoJS.AES.decrypt({ ciphertext: CryptoJS.enc.Hex.parse(t) }, CryptoJS.enc.Utf8.parse(["wm", "0!@", "w-", "s#l", "l1fl", "o("].join("")), {
        iv: CryptoJS.enc.Utf8.parse(["01", "02", "03", "04", "05", "06", "07", "08"].join("")),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(e).toString()
}
var _appId = "f06cc",
    _version = "3.1";

function __genSign(t, e) {
    var r = e.map(function (t) {
        return t.key + ":" + t.value
    }).join("&");
    return CryptoJS.HmacSHA256(r, t).toString(CryptoJS.enc.Hex)
}
function KI(t) {
    return VI.apply(this, arguments)
}

function SHA256(t) {
    var e = 8, r = 0;

    function n(t, e) {
        var r = (65535 & t) + (65535 & e);
        return (t >> 16) + (e >> 16) + (r >> 16) << 16 | 65535 & r
    }

    function i(t, e) {
        return t >>> e | t << 32 - e
    }

    function o(t, e) {
        return t >>> e
    }

    function a(t, e, r) {
        return t & e ^ ~t & r
    }

    function c(t, e, r) {
        return t & e ^ t & r ^ e & r
    }

    function s(t) {
        return i(t, 2) ^ i(t, 13) ^ i(t, 22)
    }

    function h(t) {
        return i(t, 6) ^ i(t, 11) ^ i(t, 25)
    }

    function u(t) {
        return i(t, 7) ^ i(t, 18) ^ o(t, 3)
    }

    return function (t) {
        for (var e = r ? "0123456789ABCDEF" : "0123456789abcdef", n = "", i = 0; i < 4 * t.length; i++) n += e.charAt(t[i >> 2] >> 8 * (3 - i % 4) + 4 & 15) + e.charAt(t[i >> 2] >> 8 * (3 - i % 4) & 15);
        return n
    }(function (t, e) {
        var r, f, l, p, d, v, y, g, _, w, m,
            k = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
            B = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225),
            x = new Array(64);
        t[e >> 5] |= 128 << 24 - e % 32, t[15 + (e + 64 >> 9 << 4)] = e;
        for (var S = 0; S < t.length; S += 16) {
            r = B[0], f = B[1], l = B[2], p = B[3], d = B[4], v = B[5], y = B[6], g = B[7];
            for (var b = 0; b < 64; b++) x[b] = b < 16 ? t[b + S] : n(n(n(i(m = x[b - 2], 17) ^ i(m, 19) ^ o(m, 10), x[b - 7]), u(x[b - 15])), x[b - 16]), _ = n(n(n(n(g, h(d)), a(d, v, y)), k[b]), x[b]), w = n(s(r), c(r, f, l)), g = y, y = v, v = d, d = n(p, _), p = l, l = f, f = r, r = n(_, w);
            B[0] = n(r, B[0]), B[1] = n(f, B[1]), B[2] = n(l, B[2]), B[3] = n(p, B[3]), B[4] = n(d, B[4]), B[5] = n(v, B[5]), B[6] = n(y, B[6]), B[7] = n(g, B[7])
        }
        return B
    }(function (t) {
        for (var r = Array(), n = (1 << e) - 1, i = 0; i < t.length * e; i += e) r[i >> 5] |= (t.charCodeAt(i / e) & n) << 24 - i % 32;
        return r
    }(t = function (t) {
        t = t.replace(/\r\n/g, "\n");
        for (var e = "", r = 0; r < t.length; r++) {
            var n = t.charCodeAt(r);
            n < 128 ? e += String.fromCharCode(n) : n > 127 && n < 2048 ? (e += String.fromCharCode(n >> 6 | 192), e += String.fromCharCode(63 & n | 128)) : (e += String.fromCharCode(n >> 12 | 224), e += String.fromCharCode(n >> 6 & 63 | 128), e += String.fromCharCode(63 & n | 128))
        }
        return e
    }(t)), t.length * e))
}

function getExpand(fp) {
    var env = {
        "wc": 0,
        "wd": 0,
        "l": "zh-CN",
        "ls": "zh-CN,zh",
        "ml": 2,
        "pl": 5,
        "av": "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
        "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
        "sua": "Windows NT 10.0; Win64; x64",
        "pp": {},
        "pp1": "",
        "pm": {
            "ps": "prompt",
            "np": "default"
        },
        "w": 1920,
        "h": 1080,
        "ow": 1920,
        "oh": 1080,
        "og": "https://list.jd.com",
        "pr": 1,
        "re": "",
        "random": pI({ size: 10, dictType: "max", customDict: null }),
        "referer": "",
        "v": "v3.2.1",
        "ai": "f06cc",
        "fp": fp
    }

    return encryptData(JSON.stringify(env, null, 2), ["wm", "0!@", "w-", "s#l", "l1fl", "o("]);
}

function __genSignParams(t, e, r, n, fp, token) {
    return ["".concat(r), "".concat(fp), "".concat(_appId), "".concat(token), "".concat(t), "".concat(_version), "".concat(e), "".concat(n)].join(";")
}
//这段代码是一个函数，用于生成签名。具体来说，它使用了一些加密算法和函数，包括SHA256、XCgenSignParams、encryptData等它还使用了一些变量和常量包括t、data、fp、funstr和tkgenSign、等。这些变量和常量用于生成签名参数和加密数据。如果您需要更详细的解释，请提供更多的代码和信息。
function sign(t, data, fp, funstr, tk) {
    const __genKey = funstr && new Function("return ".concat(funstr))();
    var t = {
        appid: "search-pc-java",
        functionId: "pctradesoa_getprice",
        client: "pc",
        clientVersion: "1.0.0",
        t: t,
        body: SHA256(data)
    };
    const e = { sua: "Windows NT 10.0; Win64; x64", pp: {}, referer: "", v: "v3.2.1" };
    e.random = pI({ size: 10, dictType: "max", customDict: null }), t = Object.keys(t).sort().map(function (e) {
        var r = {};
        return r.key = e, r.value = t[e], r
    }).filter(function (t) {
        return xI(t.value)
    });
    var r = Date.now(), n = XC(r, "yyyyMMddhhmmssSSS"),
        i = __genSign(__genKey(tk, fp, n, _appId, CryptoJS).toString(), t);
    return e.fp = fp, __genSignParams(i, r, n, encryptData(JSON.stringify(e, null, 2), ["wm", "0!@", "w_", "s#l", "l1fl", "o("]))
}



// //用过获取fp浏览器指纹  
// const fp = fI()
// console.log("fp:", fp); //��ȡfI()
// //用过获取Expand加密函数字符串
// console.log("Expand:", getExpand(fp))


module.exports={
    fI:fI,
    getExpand:getExpand

}
  


//tk_algo={"status":200,"message":"","data":{"version":"3.1","result":{"tk":"tk03w9e1d1b4018ncho7J3ZbjT0ZesFSDbwkAjHhnWPZdKO5fqV77NJGjGCckYV1HSECHWC2bYcwoGX8sGTa66BW9SLM","algo":"function test(tk,fp,ts,ai,algo){var rd='mMBNGtmr11ZZ';var str=`${tk}${fp}${ts}${ai}${rd}`;return algo.SHA512(str)}","fp":"2373264085177792"}}}


// tk_algo = { "status": 200, "message": "", "data": { "version": "3.1", "result": { "tk": "tk03w9e1d1b4018ncho7J3ZbjT0ZesFSDbwkAjHhnWPZdKO5fqV77NJGjGCckYV1HSECHWC2bYcwoGX8sGTa66BW9SLM", "algo": "function test(tk,fp,ts,ai,algo){var rd='mMBNGtmr11ZZ';var str=`${tk}${fp}${ts}${ai}${rd}`;return str}", "fp": "2373264085177792" } } }
// const result = tk_algo.data.result
// console.log("tk", result.tk)
// console.log("algo", result.algo)
// let test = eval("(false || " + result.algo + ")");
// const str = test("A", "A", "A", "A", "A")
// console.log("str------------------------------------------------", str)
// console.log("result.algo)------------------------------------------------", result.algo)
// let funcTest = new Function('return ' + result.algo);
// console.log("Function:", funcTest()("A", "A", "A", "A", "A"))

