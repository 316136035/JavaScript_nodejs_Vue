(function(){"use strict";var e={3815:function(e,w,P){var c=P(6369),A=function(){var e=this,w=e._self._c;return w("div",{attrs:{id:"app"}},[w("A01_ajaxGet"),w("A02_ajaxPost"),w("A03_服务器响应JSON数据"),w("A04_IE浏览器缓存问题"),w("A05_请求超时和网络异常处理"),w("A06_请求取消"),w("A07_请求重复问题处理"),w("A08_jquery发送ajax请求"),w("A09_axios发送请求"),w("A10_fetch发送请求")],1)},T=[],t=function(){var e=this,w=e._self._c;return w("div",[w("button",{on:{click:e.buttonget}},[e._v("发送ajaxGet请求")]),w("span",[e._v(e._s(e.string))])])},i=[],o={name:"A01_ajaxGet",data(){return{string:""}},methods:{buttonget(){const e=new XMLHttpRequest;e.open("Get","http://127.0.0.1:80/serverget?a=a&b=b"),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e.send("sda:qwr"),e.onreadystatechange=()=>{4===e.readyState&&e.status>=200&&e.status<=300&&(console.log("状态码：",e.status),console.log("状态码字符串：",e.statusText),console.log("所有响应头：",e.getAllResponseHeaders()),console.log("响应体：",e.response),this.string=e.response)}}}},s=o,g=P(1001),H=(0,g.Z)(s,t,i,!1,null,"3c16d14c",null),l=H.exports,F=function(){var e=this,w=e._self._c;return w("div",[w("button",{on:{click:e.buttonget}},[e._v("发送ajaxPost请求")]),w("span",[e._v(e._s(e.string))])])},f=[],n={name:"A02_ajaxPost",data(){return{string:""}},methods:{buttonget(){const e=new XMLHttpRequest;e.open("POST","http://127.0.0.1:80/servepost"),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e.send("d=7TJI7TceJ1wPwHcPwj<PZjcPwH74FhFpilfAygkP7Tce7TZ3wTiDwBijOLWkwB<xZGAe6eAewQRPJQPHFAfuFNRpzgAPwHcPwj<xZHaBZH6DZBABwTck7TJ<7T7L7Tceil<PwHcPwj<PZjcPwH7jF<bbWlaPwHcPwj<PwHceiBJQw0cDOLixZl7GFL4BZgZPOTwjwH<EFH2tZ0<kZIAewGAe6eAewQZXzdRPq1ROigkP7Tce7TZ37TceJlfGFl*Pw4ZPq13PWQPCFgEjig*CJlfGFl*PwHcPw4wPwH7tFg7dz1FPWdZpzlDPwHcPwj<PwH7hFg71TIAewL<uwIAewIb5W0fuRj*PwH3NAeAewLcuwIAew<ZoWQ9CyhfCKSAewGAe6eAewdZoigRpzQJwfGAewGAB6SAewPJPi4Jw7Tc*RjxTTIAew<fT7Tc*wSD*7Tc*K<9*FgE1TIAew<fT7Tc*RjxTTIAew<fT7Tc*wSD*7Tc*6lbezlkpJgjp7Tce7T7L7TceJQfuF09e7Tce7TZ37TceflfGSlPj7Tce7T7L7TceWQfuF0feFhcPwHcPwj<PwH7hFg7vyh6PwH3hFg71TIAewGAe6eAewQfDJ0fuWlPXzdwPwHcPwj<PZAcPwH73T4JwRf9pzdZjigEHFgRVih7eihPB7Tce7T7L7TceRfbAhl7sFgE4hlkpzQkbqIAewGAe6eAew4fifN9HzlxXWP9GJgFQFh7Vy0NsFP9Qz09bJIAewGAe6eAew4fifN94yhZUzlPuJN9jygkPWP9xJgfeqSAewGAe6eAew4fifN9Qz09bJN9Gz0fuFIAewGAe6eAew4fifN9QWQNdhlRPW1Ro7Tce7T7L7TceRfbAhtZoigRPWP9jFhbjJh7PhlxXFIAewGAe6eAew4fifN9jFhbjJh7PhlZXzh3eFhZByg9uhl7*J0wPwHcPw4wPwH7NgNRVJ0fDJ1feFf9Hzlk*WQfBWlPXzP9eFtRH7Tce7T7L7TceRfbAhtRPq1RkWQfVFQPsJ0fehlNuyhZXJ17XW0PH7Tce7T7L7TceRfbAhtZSRjcPwHcPw4wPwH7vSN7VW0NeigxsFgxVWlbbF0fehlZXzh3pz0APwHcPw4wPwH75RfZVFgxPzgfuJN9pzQRPqN9kygEj7Tce7T7L7TceTjfThlFGzk9eFgE4Fh7VzgP*zgN*7Tce7T7L7TceTjfThtZjigE4ih74hlRPWQPlihRpJQfB7Tce7T7L7TceTjfThtRPq1RkWQfVFQxXih6PwHcPw4wPwH75RfZVJ0fDJ1feFf9Qz09bJN9sygEPihcPwHcPw4wPwH75RfZVJ0fDJ1feFf9oigxQhlFszlNj7Tce7T7L7TceTjfThtRPq1RkWQfVy0NsFP9Qz09bJN9sygEPihcPwHcPw4wPwH75RfZVJQfeJ0fDhlNeWQNEhl9GyQfHJIAewGAe6eAewPJN64JwhlZXz09ehl7kFQFPWP9Qz09bJIAewGAe6eAewPJN64JwhlZXzh3eFhZBFgRVJ0fDJ1feFf9BwtRH7Tce7T7L7TcefjfIRjxVil9CW17PWtZPFN9jFhbjJh7PhtwBJ0ZVWt7diGAewGAe6eAewPJN64JwhlRPidfdht7PzQRPWQfehlPuFQ8PwHcPw4wPwH7hRA71TN94Fg7kFk9By0N4Fh7B7Tce7T7L7TcefjfIRjxVF0f*J0bVJ0fDJ1feFSAewGAe6eAewPJN64JwhlReihJVidfQFQfeWeAewGAe6eAewPJN64JwhlxXWlfVil9uJ0fDJIAewGAe6eAewPJN64Jwhlkkz1RphlReihWPwHcPZA6Pw4wPwH7tJhiPwHcPwj<PwH71zl9dz0APwH37zQwu7Tc*K<EgSAR76S4PwHcPw4wPwH7tJhcPwHcPwj<PwH73T4JwRSAewIbOf4P<SA<Pw4wPwH3Of4P<SA<PwH31FAFXWQZP7Tc*APRi7Tc*wH2lwIAewNZfA<fS7Tc*R0PeFgZjwj6xwSAew1FBhBfVwIAew13BhBfVwIAe6eAew<6BRL<xKSAewGAtRIAe6eAewQjPwHcPwj<PZjcPwH7Hzlk*ihRZzlRP7Tce7TZ37Tce6kZTwAZXzh3bJIAewGAtRIAe6eAewQFX7Tce7TZ37TfI7Tf<7T7L7TcezGAewGAB6SAt6GAewdFPzQRXWPZkiGAewGAB6SAewGAewGAe6eAewd3ezlRkitRTJgcPwHcPwj<PwHcewL2BwL<*ZeAewGAe6eAewdFPzQRXWGAewGAB6SAew4JXzlJsFSAew<PuieDPwHcPw4wPwH7CihbAztfHyN3XygEjWeAewGAB6T2Pw4wPwH7*F0FgygftFh7NzQNGz0f47Tce7TZ3J17kFSAe6eAewQbbWQRtih7P6l9uitfeWQfuit4PwHcPwj<ewIAe6eAewQZXzlCpFAfuig7sFg6PwHcPwjNjWdfP7T7L7Tceih3*6l94FAEbzgAPwHcPwj<PwH7Zztppz0xb7Tce7T7L7Tceih3*TQNCFSAewGAB6SAew4EPJ1ZHih3P7Tce7T7L7Tceih3*fQfeWlPXzGAewGAB6SAewHAuwIAewIbhygE4ztJB7Tc*TP6PwH2xwID*7TZI7Tc*flPuZH6PwjcPwH3DZH6p7Tc*6h3*z0fhFg7vyh6Pw4ikwBWuwBiPwH2oSjbATA*Pw4wPwH3sygCP7Tc*RlfHyl8p7Tc*6lbezlkP7T70wT<xvH2uwID*7Tc*AlNQih7p7T70ZTwtvHwl7Tce7T7L7TceW0xbJ0FXWQjPwHcPwj<PwH7hygDBwGAewGAe6eAewd3ezlRkit6PwHcPwj<PwH71FgZrzeAewGAe6eAewdfBFh73FlfuJIAewGAB6SAew4kXqQPsz0<Pw4ikvH2PwH2oflPuF09tWeAew<EA7Tc*wT2uwIAB6GAewNJpzHij7TZI7Tc*qLijKSAew<N*W0xPflfGSlPj7T70ZTwtvHwl7Tc*K<Ccf<kw7T7L7Tc*z0PrFSAew<JPilCXKSAew<ZoWQ9CFSAeRH<xwSD*vH2uwIAewNZbFQNeySAeRHABZeDBZGAewGAe6eAewQxbzQJkigJP7Tce7TZ37TceqQaC6jDPwHcPw4wPwH7Xz4xpzQAPwHcPwjNjWdfP7T7L7TceJlfGF17pJQfe7Tce7TZ3FQNsWlAPw4wPwH7UihFbRgEbiQxPFIAewGAB6gFbz1ZP7T7L7TceF0flygZPTgfCzt7E7Tce7TZ3OIAe6eAewQfuJgkPWQNjyg9uTt74FhcPwHcPwj<PZAcPwH7lFgE4zt7TJgcPwHcPw4wPwH7*WQ94JgZjAtfG7Tce7T7L7TceJQfuF09e7Tce7T7L7TcezgNDf09kilb6zlPuJ1wPwHcPw4wPwH7BilbPF1fsygEd7Tce7T7L7TceJhZPW4NHJ0PlihRpzlDPwHcPw4wPwH74zjEXJNReigZr7Tce7T7L7TceFlfXz09HihRpzlDPwHcPw4wPwH7HzlEuFgZjyg9u7Tce7T7L7TceW0xkFlPuWeAewGAe6eAewQkpzgfAqh3PWeAewGAe6eAewd34FPFpFhJPW4fuig7sFg6PwHcPw4wPwH7tFg7ryhRAFgk*zt7bWdPTJ09eigJP7Tce7T7L7TceJlfGylPjA0feWlPBJ0fuJNZjzt7bFlAPwHcPw4wPwH7oih74JlNeFAZXzQZkWd7PzQZE7Tce7T7L7Tceil9XylPPRgEbiQxPFIAewGAe6eAewQN*W<ZXF0fOigkP7Tce7T7L7Tceih3*TQNCFSAewGAe6eAewQN*WNFPWdZpzlDPwHcPw4wPwH7*z0NjFQ9ezSAewGAe6eAewd3ezlRkit6PwHcPw4wPwH7kWlfe6gJPzd6PwHcPw4wPwH7sigEdJgNdFSAewGAe6eAewQxbzQJkigJPWeAewGAe6eAewQ9uT0PuFSAewGAe6eAewdJPiQReyhFPWGAewGAe6eAewQJPJ<Jbzgf*igRB7Tce7T7L7TceyQNliAfuig7sFg6PwHcPw4wPwH7BFgE46Qfbil9u7Tce7T7L7TceJQPGWQNjFSAewGAe6eAewQ7sJgfjzl9jyIAewGAe6eAewQZsyh3GzlNeFIAewGAe6eAewQZeFgRPzdRpigxB7Tce7T7L7TceylfEiQ9bWQ6PwHcPw4wPwH7CigEbFlf47Tce7T7L7Tcezgf4ygN<FhFpilfB7Tce7T7L7TceWtRXWQNdFSAewGAe6eAewdZPWdFpilfhzt7rFhcPwHcPw4wPwH7lyh7jJgNsSlfEiQ9bWQ6PwHcPw4wPwH7tigCPT09HyeAewGAe6eAewQRPJQPHFAkPzg9eqSAewGAe6eAewQPuyeAewGAe6eAewQbpFIAewGAe6eAewQxXilCB7Tce7T7L7Tcezgf4ygNLih3biQPsyhRpFhwPwHcPw4wPwH7CFgRpifZPWtZpzlDPwHcPw4wPwH7*Fh7CyhZByg9uWeAewGAe6eAewd3eFhZPzdRbJ0PXzGAewGAe6eAewdZPWQPbzIAewGAe6eAewdfBiGAewGAe6eAewdJpzQRXJjZXzdRezlxBTtFPWQxbqSAewGAe6eAewdbe7Tce7T7L7TceJhZPW4NdFgEjR0NjiSAewGAe6eAewQZbzPZoih7P7Tce7T7L7TceWlbbWQAPwHcPw4wPwH7Hz0fbW4N*W<7bF0JP7Tce7T7L7TceFlfj6QNjJ0feqSAewGAe6eAewQJPJNfBFh7ZFgRpiSAewGAe6eAewd7PWhfPWtRZSAR76gZHFhZB7Tce7T7L7TceWQfxJgfBJ<kPF0PbSlfEAtPBJ0fC6gZHFhZB7Tce7T7L7TceWlfj6h3*6QN4FlAPwHcPw4wPwH7tFg7ryhR1FhRfWlfeTgf4yg<PwHcPw4wPwH7dFhR7zdZjigxsFgRSFgxbJ0f46h3*WeAewGAe6eAewd7PFlPBJ0feA17XJ09HzlxcigE4z0fe7Tce7T7L7TceJgEeFgJpWtRPWP3eztRXil9sS0NuF0xPWGAewGAkRIAtRIAe6eAewd2PwHcPwj<PZAcPZjcPwH7uigkP7Tce7TZ37TceA<R07Tc*fQPPJlfe7Tce7T7L7TceFQPsFgEbzgAPwHcPwj<PwH7pzdRPWQEbzIk*F0iCJQPPJlfe7Tce7T7L7TceF0fBit7pW1RpzlDPwHcPwj<PwH76zt7jig7sFSAew<RXitfCFgEj7Tc*RQ9ezgNj7Tce7T7L7TcezgPCFfREW0fB7Tce7TZ37TfI7TJI7TceF0fBit7pW1RpzlDPwHcPwj<PwH76zt7jig7sFSAew<RXitfCFgEj7Tc*RQ9ezgNj7Tce7T7L7TceWtfQFQPDFhwPwHcPwj<PwH7*F0iPwHcPw4wPwH7jqh3P7Tce7TZ37Tceih3*z0PHihRpzlDPw4F*F0iPwHcPZj6Pw4wPZjcPwH74FhZHWQP*J0PXzGAewGAB6SAewP3XWdRbiQxP7Tc*R09HJgkPzd6PwH30zt7Cih6PwHcPw4wPwH7BJgFQyhbPWeAewGAB6SAewd34FGAewGAe6eAewdREW0APwHcPwj<PwH7jFhbj7T70W0RQ7Tce7TJ<7Tf<7TJ<7T7L7TJI7TcezQNCFSAewGAB6SAew4ZoWQ9CFSAewN3<RGAewNFpFhJPWGAewGAe6eAewQFpz0fuigkP7Tce7TZ37TceygEjFh7uig*CW0RQvhFpFhJPWGAewGAe6eAewQRPWlZeyh3jyg9u7Tce7TZ37TceA09eJ0NGz0APwH3<zlZkzgfuJIAew<FXWQkbJIAewGAe6eAewQkpzgfAqh3PWeAewGAB6SAk6GAt6GAewQRPWlZeyh3jyg9u7Tce7TZ37TceA09eJ0NGz0APwH3<zlZkzgfuJIAew<FXWQkbJIAewGAe6eAewdZkFQFpq0fB7Tce7TZ37TceW0RQ7Tce7T7L7TceJ1P*FSAewGAB6SAewQN*W0xpilNjyg9u7T70W0RQ7Tce7TJ<7T7L7TJI7TceF0fBit7pW1RpzlDPwHcPwj<PwH76zt7jig7sFSAew<RXitfCFgEj7Tc*RQ9ezgNj7Tce7T7L7TceWtfQFQPDFhwPwHcPwj<PwH7*F0iPwHcPw4wPwH7jqh3P7Tce7TZ37TceJ0fDJIAeRd34FGAewGAtRIAkRIAtRIAe6eAt6GAewQEbzgAPwHcPwj<PwH7Ly17XzgPkzSAewN3<RGAewNFpFhJPWGAewGAe6eAewQFpz0fuigkP7Tce7TZ37TceygEjFh7uig*CW0RQvhFpFhJPWGAewGAe6eAewQRPWlZeyh3jyg9u7Tce7TZ37TceA09eJ0NGz0APwH3<zlZkzgfuJIAew<FXWQkbJIAewGAe6eAewQkpzgfAqh3PWeAewGAB6SAk6GAt6GAewQRPWlZeyh3jyg9u7Tce7TZ37TceA09eJ0NGz0APwH3<zlZkzgfuJIAew<FXWQkbJIAewGAe6eAewdZkFQFpq0fB7Tce7TZ37TceW0RQ7Tce7T7L7TceJ1P*FSAewGAB6SAewQN*W0xpilNjyg9u7T70W0RQ7Tce7TJ<7T7L7TJI7TceF0fBit7pW1RpzlDPwHcPwj<PwH76zt7jig7sFSAew<RXitfCFgEj7Tc*RQ9ezgNj7Tce7T7L7TceWtfQFQPDFhwPwHcPwj<PwH7*F0iPwHcPw4wPwH7jqh3P7Tce7TZ37TceJ0fDJIAeRd34FGAewGAtRIAkRIAtRIAe6eAt6GAewQEbzgAPwHcPwj<PwH7ZygZeztZXFd6PwH3NF0JP7Tc*A<R07Tc*fQPPJlfe7Tce7T7L7TceFQPsFgEbzgAPwHcPwj<PwH7pzdRPWQEbzIk*F0iCJQPPJlfe7Tce7T7L7TceF0fBit7pW1RpzlDPwHcPwj<PwH76zt7jig7sFSAew<RXitfCFgEj7Tc*RQ9ezgNj7Tce7T7L7TcezgPCFfREW0fB7Tce7TZ37TfI7TJI7TceF0fBit7pW1RpzlDPwHcPwj<PwH76zt7jig7sFSAew<RXitfCFgEj7Tc*RQ9ezgNj7Tce7T7L7TceWtfQFQPDFhwPwHcPwj<PwH7*F0iPwHcPw4wPwH7jqh3P7Tce7TZ37Tceih3*z0PHihRpzlDPw4F*F0iPwHcPZj6Pw4wPZjcPwH74FhZHWQP*J0PXzGAewGAB6SAewP3XWdRbiQxP7Tc*R09HJgkPzd6PwH30zt7Cih6PwHcPw4wPwH7BJgFQyhbPWeAewGAB6SAewd34FGAewGAe6eAewdREW0APwHcPwj<PwH7jFhbj7T70W0RQ7Tce7TJ<7Tf<7TJ<7T7L7TJI7TcezQNCFSAewGAB6SAewPJPi4CpJIAew07kygxjvgPu7Tc*A<R07Tce7T7L7TceFQPsFgEbzgAPwHcPwj<PwH7pzdRPWQEbzIk*F0iCJQPPJlfe7Tce7T7L7TceF0fBit7pW1RpzlDPwHcPwj<PwH76zt7jig7sFSAew<RXitfCFgEj7Tc*RQ9ezgNj7Tce7T7L7TcezgPCFfREW0fB7Tce7TZ37TfI7TJI7TceF0fBit7pW1RpzlDPwHcPwj<PwH76zt7jig7sFSAew<RXitfCFgEj7Tc*RQ9ezgNj7Tce7T7L7TceWtfQFQPDFhwPwHcPwj<PwH7*F0iPwHcPw4wPwH7jqh3P7Tce7TZ37Tceih3*z0PHihRpzlDPw4F*F0iPwHcPZj6Pw4wPZjcPwH74FhZHWQP*J0PXzGAewGAB6SAewP3XWdRbiQxP7Tc*R09HJgkPzd6PwH30zt7Cih6PwHcPw4wPwH7BJgFQyhbPWeAewGAB6SAewd34FGAewGAe6eAewdREW0APwHcPwj<PwH7jFhbj7T70W0RQ7Tce7TJ<7Tf<7TJ<7Tf<7T7L7TceJeAewGAB6SAt6GAewQRPJQPHFf3pq0fsAQNjyg8PwHcPwj<x7T7L7TceWlZeFgfuf09*7Tce7TZ3wBAPw4wPwH7Bit7PFgEwFgFj7Tce7TZ3wT6kZSAtRIAe6eAewdwPwHcPwj<PZjcPwH7bJQNpz<bPygJoJIAewGAB6T<xZH2Pw4wPwH7bJQNpzNJpF1Ro7Tce7TZ3wBajwIAe6eAewQZXz09eR0f*J0aPwHcPwj<eZIAe6eAewQbPygJoJIAewGAB6T<ewL2Pw4wPwH7tygRjyIAewGAB6TwDZL2Pw4wPwH7*yhbPz<RPW1Ro7Tce7TZ3wH6PZj6Pw4wPwH7BieAewGAB6SAt6GAtRIAe6eAewdZB7Tce7TZ37TJI7Tceil9XylPP7Tce7TZ3J17kFSAe6eAewQxXilNsAtRXWQNdFSAewGAB6hReJgAPw4wPwH7BFhZByg9uAtRXWQNdFSAewGAB6hReJgAPw4wPwH7dz09GigxTJ09eigJP7Tce7TZ3FQNsWlAPw4wPwH7pzQRPq0f4R<cPwHcPwjNjWdfP7TJ<7T7L7TceJ1oPwHcPwj<CZLa*7T7L7Tcez0Ps7Tce7TZ37Tce7Tce7T7L7TceJlPs7Tce7TZ37Tce7Tce7TJ</"),e.onreadystatechange=()=>{4===e.readyState&&e.status>=200&&e.status<=300&&(console.log("状态码：",e.status),console.log("状态码字符串：",e.statusText),console.log("所有响应头：",e.getAllResponseHeaders()),console.log("响应体：",e.response),this.string=e.response)}}}},h=n,J=(0,g.Z)(h,F,f,!1,null,"e3372c7a",null),j=J.exports,Q=function(){var e=this,w=e._self._c;return w("div",[w("button",{on:{click:e.buttonget}},[e._v("A03_服务器响应JSON数据")]),w("span",[e._v(e._s(e.string))])])},R=[],z={name:"A03_服务器响应JSON数据",data(){return{string:""}},methods:{buttonget(){const e=new XMLHttpRequest;e.open("POST","http://127.0.0.1:80/serveallJson"),e.responseType="json",e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e.send("d=7TJI7TceJ1wPwHcPwj<PZjcPwH74FhFpilfAygkP7Tce7TZ3wTiDwBijOLWkwB<xZGAe6eAewQRPJQPHFAfuFNRpzgAPwHcPwj<xZHaBZH6DZBABwTck7TJ<7T7L7Tceil<PwHcPwj<PZjcPwH7jF<bbWlaPwHcPwj<PwHceiBJQw0cDOLixZl7GFL4BZgZPOTwjwH<EFH2tZ0<kZIAewGAe6eAewQZXzdRPq1ROigkP7Tce7TZ37TceJlfGFl*Pw4ZPq13PWQPCFgEjig*CJlfGFl*PwHcPw4wPwH7tFg7dz1FPWdZpzlDPwHcPwj<PwH7hFg71TIAewL<uwIAewIb5W0fuRj*PwH3NAeAewLcuwIAew<ZoWQ9CyhfCKSAewGAe6eAewdZoigRpzQJwfGAewGAB6SAewPJPi4Jw7Tc*RjxTTIAew<fT7Tc*wSD*7Tc*K<9*FgE1TIAew<fT7Tc*RjxTTIAew<fT7Tc*wSD*7Tc*6lbezlkpJgjp7Tce7T7L7TceJQfuF09e7Tce7TZ37TceflfGSlPj7Tce7T7L7TceWQfuF0feFhcPwHcPwj<PwH7hFg7vyh6PwH3hFg71TIAewGAe6eAewQfDJ0fuWlPXzdwPwHcPwj<PZAcPwH73T4JwRf9pzdZjigEHFgRVih7eihPB7Tce7T7L7TceRfbAhl7sFgE4hlkpzQkbqIAewGAe6eAew4fifN9HzlxXWP9GJgFQFh7Vy0NsFP9Qz09bJIAewGAe6eAew4fifN94yhZUzlPuJN9jygkPWP9xJgfeqSAewGAe6eAew4fifN9Qz09bJN9Gz0fuFIAewGAe6eAew4fifN9QWQNdhlRPW1Ro7Tce7T7L7TceRfbAhtZoigRPWP9jFhbjJh7PhlxXFIAewGAe6eAew4fifN9jFhbjJh7PhlZXzh3eFhZByg9uhl7*J0wPwHcPw4wPwH7NgNRVJ0fDJ1feFf9Hzlk*WQfBWlPXzP9eFtRH7Tce7T7L7TceRfbAhtRPq1RkWQfVFQPsJ0fehlNuyhZXJ17XW0PH7Tce7T7L7TceRfbAhtZSRjcPwHcPw4wPwH7vSN7VW0NeigxsFgxVWlbbF0fehlZXzh3pz0APwHcPw4wPwH75RfZVFgxPzgfuJN9pzQRPqN9kygEj7Tce7T7L7TceTjfThlFGzk9eFgE4Fh7VzgP*zgN*7Tce7T7L7TceTjfThtZjigE4ih74hlRPWQPlihRpJQfB7Tce7T7L7TceTjfThtRPq1RkWQfVFQxXih6PwHcPw4wPwH75RfZVJ0fDJ1feFf9Qz09bJN9sygEPihcPwHcPw4wPwH75RfZVJ0fDJ1feFf9oigxQhlFszlNj7Tce7T7L7TceTjfThtRPq1RkWQfVy0NsFP9Qz09bJN9sygEPihcPwHcPw4wPwH75RfZVJQfeJ0fDhlNeWQNEhl9GyQfHJIAewGAe6eAewPJN64JwhlZXz09ehl7kFQFPWP9Qz09bJIAewGAe6eAewPJN64JwhlZXzh3eFhZBFgRVJ0fDJ1feFf9BwtRH7Tce7T7L7TcefjfIRjxVil9CW17PWtZPFN9jFhbjJh7PhtwBJ0ZVWt7diGAewGAe6eAewPJN64JwhlRPidfdht7PzQRPWQfehlPuFQ8PwHcPw4wPwH7hRA71TN94Fg7kFk9By0N4Fh7B7Tce7T7L7TcefjfIRjxVF0f*J0bVJ0fDJ1feFSAewGAe6eAewPJN64JwhlReihJVidfQFQfeWeAewGAe6eAewPJN64JwhlxXWlfVil9uJ0fDJIAewGAe6eAewPJN64Jwhlkkz1RphlReihWPwHcPZA6Pw4wPwH7tJhiPwHcPwj<PwH71zl9dz0APwH37zQwu7Tc*K<EgSAR76S4PwHcPw4wPwH7tJhcPwHcPwj<PwH73T4JwRSAewIbOf4P<SA<Pw4wPwH3Of4P<SA<PwH31FAFXWQZP7Tc*APRi7Tc*wH2lwIAewNZfA<fS7Tc*R0PeFgZjwj6xwSAew1FBhBfVwIAew13BhBfVwIAe6eAew<6BRL<xKSAewGAtRIAe6eAewQjPwHcPwj<PZjcPwH7Hzlk*ihRZzlRP7Tce7TZ37Tce6kZTwAZXzh3bJIAewGAtRIAe6eAewQFX7Tce7TZ37TfI7Tf<7T7L7TcezGAewGAB6SAt6GAewdFPzQRXWPZkiGAewGAB6SAewGAewGAe6eAewd3ezlRkitRTJgcPwHcPwj<PwHcewL2BwL<*ZeAewGAe6eAewdFPzQRXWGAewGAB6SAew4JXzlJsFSAew<PuieDPwHcPw4wPwH7CihbAztfHyN3XygEjWeAewGAB6T2Pw4wPwH7*F0FgygftFh7NzQNGz0f47Tce7TZ3J17kFSAe6eAewQbbWQRtih7P6l9uitfeWQfuit4PwHcPwj<ewIAe6eAewQZXzlCpFAfuig7sFg6PwHcPwjNjWdfP7T7L7Tceih3*6l94FAEbzgAPwHcPwj<PwH7Zztppz0xb7Tce7T7L7Tceih3*TQNCFSAewGAB6SAew4EPJ1ZHih3P7Tce7T7L7Tceih3*fQfeWlPXzGAewGAB6SAewHAuwIAewIbhygE4ztJB7Tc*TP6PwH2xwID*7TZI7Tc*flPuZH6PwjcPwH3DZH6p7Tc*6h3*z0fhFg7vyh6Pw4ikwBWuwBiPwH2oSjbATA*Pw4wPwH3sygCP7Tc*RlfHyl8p7Tc*6lbezlkP7T70wT<xvH2uwID*7Tc*AlNQih7p7T70ZTwtvHwl7Tce7T7L7TceW0xbJ0FXWQjPwHcPwj<PwH7hygDBwGAewGAe6eAewd3ezlRkit6PwHcPwj<PwH71FgZrzeAewGAe6eAewdfBFh73FlfuJIAewGAB6SAew4kXqQPsz0<Pw4ikvH2PwH2oflPuF09tWeAew<EA7Tc*wT2uwIAB6GAewNJpzHij7TZI7Tc*qLijKSAew<N*W0xPflfGSlPj7T70ZTwtvHwl7Tc*K<Ccf<kw7T7L7Tc*z0PrFSAew<JPilCXKSAew<ZoWQ9CFSAeRH<xwSD*vH2uwIAewNZbFQNeySAeRHABZeDBZGAewGAe6eAewQxbzQJkigJP7Tce7TZ37TceqQaC6jDPwHcPw4wPwH7Xz4xpzQAPwHcPwjNjWdfP7T7L7TceJlfGF17pJQfe7Tce7TZ3FQNsWlAPw4wPwH7UihFbRgEbiQxPFIAewGAB6gFbz1ZP7T7L7TceF0flygZPTgfCzt7E7Tce7TZ3OIAe6eAewQfuJgkPWQNjyg9uTt74FhcPwHcPwj<PZAcPwH7lFgE4zt7TJgcPwHcPw4wPwH7*WQ94JgZjAtfG7Tce7T7L7TceJQfuF09e7Tce7T7L7TcezgNDf09kilb6zlPuJ1wPwHcPw4wPwH7BilbPF1fsygEd7Tce7T7L7TceJhZPW4NHJ0PlihRpzlDPwHcPw4wPwH74zjEXJNReigZr7Tce7T7L7TceFlfXz09HihRpzlDPwHcPw4wPwH7HzlEuFgZjyg9u7Tce7T7L7TceW0xkFlPuWeAewGAe6eAewQkpzgfAqh3PWeAewGAe6eAewd34FPFpFhJPW4fuig7sFg6PwHcPw4wPwH7tFg7ryhRAFgk*zt7bWdPTJ09eigJP7Tce7T7L7TceJlfGylPjA0feWlPBJ0fuJNZjzt7bFlAPwHcPw4wPwH7oih74JlNeFAZXzQZkWd7PzQZE7Tce7T7L7Tceil9XylPPRgEbiQxPFIAewGAe6eAewQN*W<ZXF0fOigkP7Tce7T7L7Tceih3*TQNCFSAewGAe6eAewQN*WNFPWdZpzlDPwHcPw4wPwH7*z0NjFQ9ezSAewGAe6eAewd3ezlRkit6PwHcPw4wPwH7kWlfe6gJPzd6PwHcPw4wPwH7sigEdJgNdFSAewGAe6eAewQxbzQJkigJPWeAewGAe6eAewQ9uT0PuFSAewGAe6eAewdJPiQReyhFPWGAewGAe6eAewQJPJ<Jbzgf*igRB7Tce7T7L7TceyQNliAfuig7sFg6PwHcPw4wPwH7BFgE46Qfbil9u7Tce7T7L7TceJQPGWQNjFSAewGAe6eAewQ7sJgfjzl9jyIAewGAe6eAewQZsyh3GzlNeFIAewGAe6eAewQZeFgRPzdRpigxB7Tce7T7L7TceylfEiQ9bWQ6PwHcPw4wPwH7CigEbFlf47Tce7T7L7Tcezgf4ygN<FhFpilfB7Tce7T7L7TceWtRXWQNdFSAewGAe6eAewdZPWdFpilfhzt7rFhcPwHcPw4wPwH7lyh7jJgNsSlfEiQ9bWQ6PwHcPw4wPwH7tigCPT09HyeAewGAe6eAewQRPJQPHFAkPzg9eqSAewGAe6eAewQPuyeAewGAe6eAewQbpFIAewGAe6eAewQxXilCB7Tce7T7L7Tcezgf4ygNLih3biQPsyhRpFhwPwHcPw4wPwH7CFgRpifZPWtZpzlDPwHcPw4wPwH7*Fh7CyhZByg9uWeAewGAe6eAewd3eFhZPzdRbJ0PXzGAewGAe6eAewdZPWQPbzIAewGAe6eAewdfBiGAewGAe6eAewdJpzQRXJjZXzdRezlxBTtFPWQxbqSAewGAe6eAewdbe7Tce7T7L7TceJhZPW4NdFgEjR0NjiSAewGAe6eAewQZbzPZoih7P7Tce7T7L7TceWlbbWQAPwHcPw4wPwH7Hz0fbW4N*W<7bF0JP7Tce7T7L7TceFlfj6QNjJ0feqSAewGAe6eAewQJPJNfBFh7ZFgRpiSAewGAe6eAewd7PWhfPWtRZSAR76gZHFhZB7Tce7T7L7TceWQfxJgfBJ<kPF0PbSlfEAtPBJ0fC6gZHFhZB7Tce7T7L7TceWlfj6h3*6QN4FlAPwHcPw4wPwH7tFg7ryhR1FhRfWlfeTgf4yg<PwHcPw4wPwH7dFhR7zdZjigxsFgRSFgxbJ0f46h3*WeAewGAe6eAewd7PFlPBJ0feA17XJ09HzlxcigE4z0fe7Tce7T7L7TceJgEeFgJpWtRPWP3eztRXil9sS0NuF0xPWGAewGAkRIAtRIAe6eAewd2PwHcPwj<PZAcPZjcPwH7uigkP7Tce7TZ37TceA<R07Tc*fQPPJlfe7Tce7T7L7TceFQPsFgEbzgAPwHcPwj<PwH7pzdRPWQEbzIk*F0iCJQPPJlfe7Tce7T7L7TceF0fBit7pW1RpzlDPwHcPwj<PwH76zt7jig7sFSAew<RXitfCFgEj7Tc*RQ9ezgNj7Tce7T7L7TcezgPCFfREW0fB7Tce7TZ37TfI7TJI7TceF0fBit7pW1RpzlDPwHcPwj<PwH76zt7jig7sFSAew<RXitfCFgEj7Tc*RQ9ezgNj7Tce7T7L7TceWtfQFQPDFhwPwHcPwj<PwH7*F0iPwHcPw4wPwH7jqh3P7Tce7TZ37Tceih3*z0PHihRpzlDPw4F*F0iPwHcPZj6Pw4wPZjcPwH74FhZHWQP*J0PXzGAewGAB6SAewP3XWdRbiQxP7Tc*R09HJgkPzd6PwH30zt7Cih6PwHcPw4wPwH7BJgFQyhbPWeAewGAB6SAewd34FGAewGAe6eAewdREW0APwHcPwj<PwH7jFhbj7T70W0RQ7Tce7TJ<7Tf<7TJ<7T7L7TJI7TcezQNCFSAewGAB6SAew4ZoWQ9CFSAewN3<RGAewNFpFhJPWGAewGAe6eAewQFpz0fuigkP7Tce7TZ37TceygEjFh7uig*CW0RQvhFpFhJPWGAewGAe6eAewQRPWlZeyh3jyg9u7Tce7TZ37TceA09eJ0NGz0APwH3<zlZkzgfuJIAew<FXWQkbJIAewGAe6eAewQkpzgfAqh3PWeAewGAB6SAk6GAt6GAewQRPWlZeyh3jyg9u7Tce7TZ37TceA09eJ0NGz0APwH3<zlZkzgfuJIAew<FXWQkbJIAewGAe6eAewdZkFQFpq0fB7Tce7TZ37TceW0RQ7Tce7T7L7TceJ1P*FSAewGAB6SAewQN*W0xpilNjyg9u7T70W0RQ7Tce7TJ<7T7L7TJI7TceF0fBit7pW1RpzlDPwHcPwj<PwH76zt7jig7sFSAew<RXitfCFgEj7Tc*RQ9ezgNj7Tce7T7L7TceWtfQFQPDFhwPwHcPwj<PwH7*F0iPwHcPw4wPwH7jqh3P7Tce7TZ37TceJ0fDJIAeRd34FGAewGAtRIAkRIAtRIAe6eAt6GAewQEbzgAPwHcPwj<PwH7Ly17XzgPkzSAewN3<RGAewNFpFhJPWGAewGAe6eAewQFpz0fuigkP7Tce7TZ37TceygEjFh7uig*CW0RQvhFpFhJPWGAewGAe6eAewQRPWlZeyh3jyg9u7Tce7TZ37TceA09eJ0NGz0APwH3<zlZkzgfuJIAew<FXWQkbJIAewGAe6eAewQkpzgfAqh3PWeAewGAB6SAk6GAt6GAewQRPWlZeyh3jyg9u7Tce7TZ37TceA09eJ0NGz0APwH3<zlZkzgfuJIAew<FXWQkbJIAewGAe6eAewdZkFQFpq0fB7Tce7TZ37TceW0RQ7Tce7T7L7TceJ1P*FSAewGAB6SAewQN*W0xpilNjyg9u7T70W0RQ7Tce7TJ<7T7L7TJI7TceF0fBit7pW1RpzlDPwHcPwj<PwH76zt7jig7sFSAew<RXitfCFgEj7Tc*RQ9ezgNj7Tce7T7L7TceWtfQFQPDFhwPwHcPwj<PwH7*F0iPwHcPw4wPwH7jqh3P7Tce7TZ37TceJ0fDJIAeRd34FGAewGAtRIAkRIAtRIAe6eAt6GAewQEbzgAPwHcPwj<PwH7ZygZeztZXFd6PwH3NF0JP7Tc*A<R07Tc*fQPPJlfe7Tce7T7L7TceFQPsFgEbzgAPwHcPwj<PwH7pzdRPWQEbzIk*F0iCJQPPJlfe7Tce7T7L7TceF0fBit7pW1RpzlDPwHcPwj<PwH76zt7jig7sFSAew<RXitfCFgEj7Tc*RQ9ezgNj7Tce7T7L7TcezgPCFfREW0fB7Tce7TZ37TfI7TJI7TceF0fBit7pW1RpzlDPwHcPwj<PwH76zt7jig7sFSAew<RXitfCFgEj7Tc*RQ9ezgNj7Tce7T7L7TceWtfQFQPDFhwPwHcPwj<PwH7*F0iPwHcPw4wPwH7jqh3P7Tce7TZ37Tceih3*z0PHihRpzlDPw4F*F0iPwHcPZj6Pw4wPZjcPwH74FhZHWQP*J0PXzGAewGAB6SAewP3XWdRbiQxP7Tc*R09HJgkPzd6PwH30zt7Cih6PwHcPw4wPwH7BJgFQyhbPWeAewGAB6SAewd34FGAewGAe6eAewdREW0APwHcPwj<PwH7jFhbj7T70W0RQ7Tce7TJ<7Tf<7TJ<7T7L7TJI7TcezQNCFSAewGAB6SAewPJPi4CpJIAew07kygxjvgPu7Tc*A<R07Tce7T7L7TceFQPsFgEbzgAPwHcPwj<PwH7pzdRPWQEbzIk*F0iCJQPPJlfe7Tce7T7L7TceF0fBit7pW1RpzlDPwHcPwj<PwH76zt7jig7sFSAew<RXitfCFgEj7Tc*RQ9ezgNj7Tce7T7L7TcezgPCFfREW0fB7Tce7TZ37TfI7TJI7TceF0fBit7pW1RpzlDPwHcPwj<PwH76zt7jig7sFSAew<RXitfCFgEj7Tc*RQ9ezgNj7Tce7T7L7TceWtfQFQPDFhwPwHcPwj<PwH7*F0iPwHcPw4wPwH7jqh3P7Tce7TZ37Tceih3*z0PHihRpzlDPw4F*F0iPwHcPZj6Pw4wPZjcPwH74FhZHWQP*J0PXzGAewGAB6SAewP3XWdRbiQxP7Tc*R09HJgkPzd6PwH30zt7Cih6PwHcPw4wPwH7BJgFQyhbPWeAewGAB6SAewd34FGAewGAe6eAewdREW0APwHcPwj<PwH7jFhbj7T70W0RQ7Tce7TJ<7Tf<7TJ<7Tf<7T7L7TceJeAewGAB6SAt6GAewQRPJQPHFf3pq0fsAQNjyg8PwHcPwj<x7T7L7TceWlZeFgfuf09*7Tce7TZ3wBAPw4wPwH7Bit7PFgEwFgFj7Tce7TZ3wT6kZSAtRIAe6eAewdwPwHcPwj<PZjcPwH7bJQNpz<bPygJoJIAewGAB6T<xZH2Pw4wPwH7bJQNpzNJpF1Ro7Tce7TZ3wBajwIAe6eAewQZXz09eR0f*J0aPwHcPwj<eZIAe6eAewQbPygJoJIAewGAB6T<ewL2Pw4wPwH7tygRjyIAewGAB6TwDZL2Pw4wPwH7*yhbPz<RPW1Ro7Tce7TZ3wH6PZj6Pw4wPwH7BieAewGAB6SAt6GAtRIAe6eAewdZB7Tce7TZ37TJI7Tceil9XylPP7Tce7TZ3J17kFSAe6eAewQxXilNsAtRXWQNdFSAewGAB6hReJgAPw4wPwH7BFhZByg9uAtRXWQNdFSAewGAB6hReJgAPw4wPwH7dz09GigxTJ09eigJP7Tce7TZ3FQNsWlAPw4wPwH7pzQRPq0f4R<cPwHcPwjNjWdfP7TJ<7T7L7TceJ1oPwHcPwj<CZLa*7T7L7Tcez0Ps7Tce7TZ37Tce7Tce7T7L7TceJlPs7Tce7TZ37Tce7Tce7TJ</"),e.onreadystatechange=()=>{4===e.readyState&&e.status>=200&&e.status<=300&&(console.log("状态码：",e.status),console.log("状态码字符串：",e.statusText),console.log("所有响应头：",e.getAllResponseHeaders()),console.log("响应体：",e.response),this.string=e.response.name)}}}},u=z,Z=(0,g.Z)(u,Q,R,!1,null,"3a6e3abe",null),a=Z.exports,r=function(){var e=this,w=e._self._c;return w("div",[w("button",{on:{click:e.buttonget}},[e._v("A04_IE浏览器缓存问题")]),w("span",[e._v(e._s(e.string))])])},G=[],d={name:"A04_IE浏览器缓存问题",data(){return{string:""}},methods:{buttonget(){const e=new XMLHttpRequest;e.open("Get","http://127.0.0.1:80/serverget?time="+Date.now()),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e.send("sda:qwr"),e.onreadystatechange=()=>{4===e.readyState&&e.status>=200&&e.status<=300&&(console.log("状态码：",e.status),console.log("状态码字符串：",e.statusText),console.log("所有响应头：",e.getAllResponseHeaders()),console.log("响应体：",e.response),this.string=e.response)}}}},W=d,p=(0,g.Z)(W,r,G,!1,null,"3e6ace16",null),b=p.exports,k=function(){var e=this,w=e._self._c;return w("div",[w("button",{on:{click:e.buttonget}},[e._v("A05_请求超时和网络异常处理")]),w("span",[e._v(e._s(e.string))])])},N=[],B={name:"A05_请求超时和网络异常处理",data(){return{string:""}},methods:{buttonget(){const e=new XMLHttpRequest;e.open("Get","http://127.0.0.1:80/serversetTimeout"),e.timeout=1e3,e.ontimeout=()=>{alert("返回时间过长....")},e.onerror=()=>{alert("网络异常...")},e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e.send("sda:qwr"),e.onreadystatechange=()=>{4===e.readyState&&e.status>=200&&e.status<=300&&(console.log("状态码：",e.status),console.log("状态码字符串：",e.statusText),console.log("所有响应头：",e.getAllResponseHeaders()),console.log("响应体：",e.response),this.string=e.response)}}}},y=B,S=(0,g.Z)(y,k,N,!1,null,"1a64e0be",null),I=S.exports,L=function(){var e=this,w=e._self._c;return w("div",[w("button",{on:{click:e.buttonget1}},[e._v("A06_请求")]),w("button",{on:{click:e.buttonget2}},[e._v("A06_取消请求")]),w("span",[e._v(e._s(e.string))])])},x=[],X={name:"A06_请求取消",data(){return{string:""}},methods:{buttonget1(){const e=new XMLHttpRequest;this.XMLHttpRequest=e,e.open("Get","http://127.0.0.1:80/serversetTimeout"),e.timeout=2e3,e.ontimeout=()=>{alert("返回时间过长....")},e.onerror=()=>{alert("网络异常...")},e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e.send("sda:qwr"),e.onreadystatechange=()=>{4===e.readyState&&e.status>=200&&e.status<=300&&(console.log("状态码：",e.status),console.log("状态码字符串：",e.statusText),console.log("所有响应头：",e.getAllResponseHeaders()),console.log("响应体：",e.response),this.string=e.response)}},buttonget2(){this.XMLHttpRequest.abort()}}},E=X,_=(0,g.Z)(E,L,x,!1,null,"2bc5f1c7",null),C=_.exports,v=function(){var e=this,w=e._self._c;return w("div",[w("button",{on:{click:e.buttonget1}},[e._v("A07_请求重复问题处理")]),w("span",[e._v(e._s(e.string))])])},D=[],q={name:"A07_请求重复问题处理",data(){return{string:"",isSending:!1}},methods:{buttonget1(){this.isSending&&this.XMLHttpRequest.abort();const e=new XMLHttpRequest;this.isSending=!0,this.XMLHttpRequest=e,e.open("Get","http://127.0.0.1:80/serversetTimeout"),e.timeout=2e3,e.ontimeout=()=>{alert("返回时间过长....")},e.onerror=()=>{alert("网络异常...")},e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e.send("sda:qwr"),e.onreadystatechange=()=>{4===e.readyState&&(this.isSending=!1,e.status>=200&&e.status<=300&&(console.log("状态码：",e.status),console.log("状态码字符串：",e.statusText),console.log("所有响应头：",e.getAllResponseHeaders()),console.log("响应体：",e.response),this.string=e.response))}}}},m=q,V=(0,g.Z)(m,v,D,!1,null,"283dcd66",null),O=V.exports,K=function(){var e=this,w=e._self._c;return w("div",[w("button",{on:{click:e.buttonget1}},[e._v("A08_jquery发送ajax请求和JSON get请求")]),w("span",[e._v(e._s(e.getstring))]),w("button",{on:{click:e.buttonget2}},[e._v("A08_jquery发送ajax请求和JSON post请求")]),w("span",[e._v(e._s(e.poststring))]),w("button",{on:{click:e.buttonget3}},[e._v(" A08_jquery发送ajax请求完整写法和JSON get请求")]),w("span",[e._v(e._s(e.jquery))])])},M=[],U=P(7387),$=P.n(U),Y={name:"A07_请求重复问题处理",data(){return{getstring:"",poststring:"",jquery:"",isSending:!1}},methods:{buttonget1(){$().get("http://127.0.0.1:80/jquery",{a:"a",b:"b"},(e=>{console.log(e),this.getstring=e}),"json")},buttonget2(){$().post("http://127.0.0.1:80/jquery",{a:"a",b:"b"},(e=>{this.poststring=e}),"json")},buttonget3(){$().ajax({url:"http://127.0.0.1:80/jqueryjson",data:{a:"a",b:"b"},dataType:"json",type:"Get",timeout:1e3,Headers:{eid:"eideideideid",Header:"HeaderHeaderHeader"},success:e=>{console.log("正常回调:",e),this.jquery=e},error:e=>{console.log("出错："+e)},complete:e=>{console.log("本次请求完成了..")},statusCode:e=>{console.log("本次请求完成状态码:",e)}})}}},ee=Y,we=(0,g.Z)(ee,K,M,!1,null,"5671372a",null),Pe=we.exports,ce=function(){var e=this,w=e._self._c;return w("div",[w("button",{on:{click:e.buttonget1}},[e._v("A09_axios发送请求 get请求")]),w("span",[e._v(e._s(e.getstring))]),w("button",{on:{click:e.buttonget2}},[e._v("A09_axios发送请求 post请求")]),w("span",[e._v(e._s(e.poststring))]),w("button",{on:{click:e.button3}},[e._v("A09_axios发送请求完整写法")]),w("span",[e._v(e._s(e.jquery))])])},Ae=[],Te=P(4161),te={name:"A09_axios发送请求",data(){return{getstring:"",poststring:"",jquery:"",isSending:!1}},methods:{buttonget1(){Te.Z.defaults.withCredentials=!0,Te.Z.get("/axios",{params:{id:1,name:"axios发送请求get跨越请求"},headers:{cookies:"cookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookies; "}}).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},buttonget2(){Te.Z.defaults.withCredentials=!0,Te.Z.post("/axios",{username:"admin",password:"admin"},{params:{id:1,name:"axios发送请求post跨越请求"},headers:{cookies:"cookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookies; "}}).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},button3(){(0,Te.Z)({url:"/axios",params:{id:1,name:"axios发送请求post跨越请求"},data:{username:"admin",password:"admin"},dataType:"json",method:"Post",timeout:1e3,headers:{cookies:"cookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookies; ",eid:"eideideideid",Header:"HeaderHeaderHeader"}}).then((e=>{console.log(e.status)})).catch((()=>{}))}}},ie=te,oe=(0,g.Z)(ie,ce,Ae,!1,null,"01bb03d2",null),se=oe.exports,ge=function(){var e=this,w=e._self._c;return w("div",[w("button",{on:{click:e.buttonget1}},[e._v("A10_fetch发送请求")]),w("span",[e._v(e._s(e.getstring))])])},He=[],le={name:"A10_fetch发送请求",data(){return{getstring:"",poststring:"",jquery:"",isSending:!1}},methods:{buttonget1(){Te.Z.defaults.withCredentials=!0,fetch("/axios",{params:{id:1,name:"axios发送请求get跨越请求"},headers:{cookies:"cookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookies; "}}).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}}},Fe=le,fe=(0,g.Z)(Fe,ge,He,!1,null,"153ca2a3",null),ne=fe.exports,he={name:"App",components:{A01_ajaxGet:l,A02_ajaxPost:j,"A03_服务器响应JSON数据":a,"A04_IE浏览器缓存问题":b,"A05_请求超时和网络异常处理":I,"A06_请求取消":C,"A07_请求重复问题处理":O,"A08_jquery发送ajax请求":Pe,"A09_axios发送请求":se,"A10_fetch发送请求":ne}},Je=he,je=(0,g.Z)(Je,A,T,!1,null,null,null),Qe=je.exports;c.ZP.config.productionTip=!1,new c.ZP({render:e=>e(Qe)}).$mount("#app")}},w={};function P(c){var A=w[c];if(void 0!==A)return A.exports;var T=w[c]={exports:{}};return e[c].call(T.exports,T,T.exports,P),T.exports}P.m=e,function(){var e=[];P.O=function(w,c,A,T){if(!c){var t=1/0;for(g=0;g<e.length;g++){c=e[g][0],A=e[g][1],T=e[g][2];for(var i=!0,o=0;o<c.length;o++)(!1&T||t>=T)&&Object.keys(P.O).every((function(e){return P.O[e](c[o])}))?c.splice(o--,1):(i=!1,T<t&&(t=T));if(i){e.splice(g--,1);var s=A();void 0!==s&&(w=s)}}return w}T=T||0;for(var g=e.length;g>0&&e[g-1][2]>T;g--)e[g]=e[g-1];e[g]=[c,A,T]}}(),function(){P.n=function(e){var w=e&&e.__esModule?function(){return e["default"]}:function(){return e};return P.d(w,{a:w}),w}}(),function(){P.d=function(e,w){for(var c in w)P.o(w,c)&&!P.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:w[c]})}}(),function(){P.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){P.o=function(e,w){return Object.prototype.hasOwnProperty.call(e,w)}}(),function(){var e={143:0};P.O.j=function(w){return 0===e[w]};var w=function(w,c){var A,T,t=c[0],i=c[1],o=c[2],s=0;if(t.some((function(w){return 0!==e[w]}))){for(A in i)P.o(i,A)&&(P.m[A]=i[A]);if(o)var g=o(P)}for(w&&w(c);s<t.length;s++)T=t[s],P.o(e,T)&&e[T]&&e[T][0](),e[T]=0;return P.O(g)},c=self["webpackChunkajax"]=self["webpackChunkajax"]||[];c.forEach(w.bind(null,0)),c.push=w.bind(null,c.push.bind(c))}();var c=P.O(void 0,[998],(function(){return P(3815)}));c=P.O(c)})();
//# sourceMappingURL=app.b097e5cd.js.map