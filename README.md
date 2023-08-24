


<head>
<link rel="stylesheet" type="text/css" href="stylesheet.css">
<link rel="apple-touch-icon" sizes="180x180" href="./assets/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="./assets/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">

<!--- <link rel="shortcut icon" type="image/x-icon" href="./assets/favicon.png?"> --->

<!--- <script src="js.md" type="text/javascript"></script> --->
<script src="script.js" type="text/javascript"></script>

{% include google-analytics.html %}  

<script async src="https://www.googletagmanager.com/gtag/js?id=G-Q6GZV3PF0L"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Q6GZV3PF0L');
</script>

<!--- Google adSense Abschnitt allgemein --->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6322012356239211"
     crossorigin="anonymous"></script>

<!--- Google adSense Abschnitt Ausgleich von Werbeumsatz --->
<script async src="https://fundingchoicesmessages.google.com/i/pub-6322012356239211?ers=1" nonce="n4bX-ijz441N4FV_9S7ubA"></script><script nonce="n4bX-ijz441N4FV_9S7ubA">(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();</script>

<!--- Google adSense Abschnitt Mitteilung zum Fehlerschutz --->
<script>(function(){'use strict';function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var fa=ea(this);function ha(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},l;if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var m;a:{var ja={a:!0},ka={};try{ka.__proto__=ja;m=ka.a;break a}catch(a){}m=!1}l=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var la=l;
function n(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.A=b.prototype}function ma(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
var na="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};ha("Object.assign",function(a){return a||na});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var p=this||self;function q(a){return a};var t,u;a:{for(var oa=["CLOSURE_FLAGS"],v=p,x=0;x<oa.length;x++)if(v=v[oa[x]],null==v){u=null;break a}u=v}var pa=u&&u[610401301];t=null!=pa?pa:!1;var z,qa=p.navigator;z=qa?qa.userAgentData||null:null;function A(a){return t?z?z.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}function B(a){var b;a:{if(b=p.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};function C(){return t?!!z&&0<z.brands.length:!1}function D(){return C()?A("Chromium"):(B("Chrome")||B("CriOS"))&&!(C()?0:B("Edge"))||B("Silk")};var ra=C()?!1:B("Trident")||B("MSIE");!B("Android")||D();D();B("Safari")&&(D()||(C()?0:B("Coast"))||(C()?0:B("Opera"))||(C()?0:B("Edge"))||(C()?A("Microsoft Edge"):B("Edg/"))||C()&&A("Opera"));var sa={},E=null;var ta="undefined"!==typeof Uint8Array,ua=!ra&&"function"===typeof btoa;var F="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0,G=F?function(a,b){a[F]|=b}:function(a,b){void 0!==a.g?a.g|=b:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function va(a){var b=H(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Array.prototype.slice.call(a)),I(a,b|1))}
var H=F?function(a){return a[F]|0}:function(a){return a.g|0},J=F?function(a){return a[F]}:function(a){return a.g},I=F?function(a,b){a[F]=b}:function(a,b){void 0!==a.g?a.g=b:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function wa(){var a=[];G(a,1);return a}function xa(a,b){I(b,(a|0)&-99)}function K(a,b){I(b,(a|34)&-73)}function L(a){a=a>>11&1023;return 0===a?536870912:a};var M={};function N(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}var O,ya=[];I(ya,39);O=Object.freeze(ya);var P;function Q(a,b){P=b;a=new a(b);P=void 0;return a}
function R(a,b,c){null==a&&(a=P);P=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-2095105|(b&1023)<<11)}else{if(!Array.isArray(a))throw Error();d=H(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(N(g)){d|=256;b=(d>>9&1)-1;e=f-b;1024<=e&&(za(c,b,g),e=1023);d=d&-2095105|(e&1023)<<11;break a}}b&&(g=(d>>9&1)-1,b=Math.max(b,e-g),1024<b&&(za(c,g,{}),d|=256,b=1023),d=d&-2095105|(b&1023)<<11)}}I(a,d);return a}
function za(a,b,c){for(var d=1023+b,e=a.length,f=d;f<e;f++){var g=a[f];null!=g&&g!==c&&(c[f-b]=g)}a.length=d+1;a[d]=c};function Aa(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)&&ta&&null!=a&&a instanceof Uint8Array){if(ua){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else{void 0===b&&(b=0);if(!E){E={};c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");d=["+/=","+/","-_=","-_.","-_"];for(var e=
0;5>e;e++){var f=c.concat(d[e].split(""));sa[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===E[h]&&(E[h]=g)}}}b=sa[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],w=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|w>>4];w=b[(w&15)<<2|h>>6];h=b[h&63];c[e++]=g+k+w+h}g=0;h=d;switch(a.length-f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=b[a>>2]+b[(a&3)<<4|g>>4]+h+d}a=c.join("")}return a}}return a};function Ba(a,b,c){a=Array.prototype.slice.call(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)Object.prototype.hasOwnProperty.call(e,f)&&(b[f]=c(e[f]))}return a}function Da(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&H(a)&1?void 0:f&&H(a)&2?a:Ea(a,b,c,void 0!==d,e,f);else if(N(a)){var g={},h;for(h in a)Object.prototype.hasOwnProperty.call(a,h)&&(g[h]=Da(a[h],b,c,d,e,f));a=g}else a=b(a,d);return a}}
function Ea(a,b,c,d,e,f){var g=d||c?H(a):0;d=d?!!(g&32):void 0;a=Array.prototype.slice.call(a);for(var h=0;h<a.length;h++)a[h]=Da(a[h],b,c,d,e,f);c&&c(g,a);return a}function Fa(a){return a.s===M?a.toJSON():Aa(a)};function Ga(a,b,c){c=void 0===c?K:c;if(null!=a){if(ta&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=H(a);if(d&2)return a;if(b&&!(d&64)&&(d&32||0===d))return I(a,d|34),a;a=Ea(a,Ga,d&4?K:c,!0,!1,!0);b=H(a);b&4&&b&2&&Object.freeze(a);return a}a.s===M&&(b=a.h,c=J(b),a=c&2?a:Q(a.constructor,Ha(b,c,!0)));return a}}function Ha(a,b,c){var d=c||b&2?K:xa,e=!!(b&32);a=Ba(a,b,function(f){return Ga(f,e,d)});G(a,32|(c?2:0));return a};function Ia(a,b){a=a.h;return Ja(a,J(a),b)}function Ja(a,b,c,d){if(-1===c)return null;if(c>=L(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+((b>>9&1)-1);if(b<e)return a[b]}}function Ka(a,b,c,d,e){var f=L(b);if(c>=f||e){e=b;if(b&256)f=a[a.length-1];else{if(null==d)return;f=a[f+((b>>9&1)-1)]={};e|=256}f[c]=d;e&=-1025;e!==b&&I(a,e)}else a[c+((b>>9&1)-1)]=d,b&256&&(d=a[a.length-1],c in d&&delete d[c]),b&1024&&I(a,b&-1025)}
function La(a,b){var c=Ma;var d=void 0===d?!1:d;var e=a.h;var f=J(e),g=Ja(e,f,b,d);var h=!1;if(null==g||"object"!==typeof g||(h=Array.isArray(g))||g.s!==M)if(h){var k=h=H(g);0===k&&(k|=f&32);k|=f&2;k!==h&&I(g,k);c=new c(g)}else c=void 0;else c=g;c!==g&&null!=c&&Ka(e,f,b,c,d);e=c;if(null==e)return e;a=a.h;f=J(a);f&2||(g=e,c=g.h,h=J(c),g=h&2?Q(g.constructor,Ha(c,h,!1)):g,g!==e&&(e=g,Ka(a,f,b,e,d)));return e}function Na(a,b){a=Ia(a,b);return null==a||"string"===typeof a?a:void 0}
function Oa(a,b){a=Ia(a,b);return null!=a?a:0}function S(a,b){a=Na(a,b);return null!=a?a:""};function T(a,b,c){this.h=R(a,b,c)}T.prototype.toJSON=function(){var a=Ea(this.h,Fa,void 0,void 0,!1,!1);return Pa(this,a,!0)};T.prototype.s=M;T.prototype.toString=function(){return Pa(this,this.h,!1).toString()};
function Pa(a,b,c){var d=a.constructor.v,e=L(J(c?a.h:b)),f=!1;if(d){if(!c){b=Array.prototype.slice.call(b);var g;if(b.length&&N(g=b[b.length-1]))for(f=0;f<d.length;f++)if(d[f]>=e){Object.assign(b[b.length-1]={},g);break}f=!0}e=b;c=!c;g=J(a.h);a=L(g);g=(g>>9&1)-1;for(var h,k,w=0;w<d.length;w++)if(k=d[w],k<a){k+=g;var r=e[k];null==r?e[k]=c?O:wa():c&&r!==O&&va(r)}else h||(r=void 0,e.length&&N(r=e[e.length-1])?h=r:e.push(h={})),r=h[k],null==h[k]?h[k]=c?O:wa():c&&r!==O&&va(r)}d=b.length;if(!d)return b;
var Ca;if(N(h=b[d-1])){a:{var y=h;e={};c=!1;for(var ca in y)Object.prototype.hasOwnProperty.call(y,ca)&&(a=y[ca],Array.isArray(a)&&a!=a&&(c=!0),null!=a?e[ca]=a:c=!0);if(c){for(var rb in e){y=e;break a}y=null}}y!=h&&(Ca=!0);d--}for(;0<d;d--){h=b[d-1];if(null!=h)break;var cb=!0}if(!Ca&&!cb)return b;var da;f?da=b:da=Array.prototype.slice.call(b,0,d);b=da;f&&(b.length=d);y&&b.push(y);return b};function Qa(a){return function(b){if(null==b||""==b)b=new a;else{b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);G(b,32);b=Q(a,b)}return b}};function Ra(a){this.h=R(a)}n(Ra,T);var Sa=Qa(Ra);var U;function V(a){this.g=a}V.prototype.toString=function(){return this.g+""};var Ta={};function Ua(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)};function Va(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}function Wa(a){this.g=a||p.document||document}Wa.prototype.appendChild=function(a,b){a.appendChild(b)};/*

 SPDX-License-Identifier: Apache-2.0
*/
function Xa(a,b){a.src=b instanceof V&&b.constructor===V?b.g:"type_error:TrustedResourceUrl";var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)};function Ya(a){a=void 0===a?document:a;return a.createElement("script")};function Za(a,b,c,d,e,f){try{var g=a.g,h=Ya(g);h.async=!0;Xa(h,b);g.head.appendChild(h);h.addEventListener("load",function(){e();d&&g.head.removeChild(h)});h.addEventListener("error",function(){0<c?Za(a,b,c-1,d,e,f):(d&&g.head.removeChild(h),f())})}catch(k){f()}};var $a=p.atob("aHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vaW1hZ2VzL2ljb25zL21hdGVyaWFsL3N5c3RlbS8xeC93YXJuaW5nX2FtYmVyXzI0ZHAucG5n"),ab=p.atob("WW91IGFyZSBzZWVpbmcgdGhpcyBtZXNzYWdlIGJlY2F1c2UgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlIGlzIGludGVyZmVyaW5nIHdpdGggdGhpcyBwYWdlLg=="),bb=p.atob("RGlzYWJsZSBhbnkgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlLCB0aGVuIHJlbG9hZCB0aGlzIHBhZ2Uu");function db(a,b,c){this.i=a;this.l=new Wa(this.i);this.g=null;this.j=[];this.m=!1;this.u=b;this.o=c}
function eb(a){if(a.i.body&&!a.m){var b=function(){fb(a);p.setTimeout(function(){return gb(a,3)},50)};Za(a.l,a.u,2,!0,function(){p[a.o]||b()},b);a.m=!0}}
function fb(a){for(var b=W(1,5),c=0;c<b;c++){var d=X(a);a.i.body.appendChild(d);a.j.push(d)}b=X(a);b.style.bottom="0";b.style.left="0";b.style.position="fixed";b.style.width=W(100,110).toString()+"%";b.style.zIndex=W(2147483544,2147483644).toString();b.style["background-color"]=hb(249,259,242,252,219,229);b.style["box-shadow"]="0 0 12px #888";b.style.color=hb(0,10,0,10,0,10);b.style.display="flex";b.style["justify-content"]="center";b.style["font-family"]="Roboto, Arial";c=X(a);c.style.width=W(80,
85).toString()+"%";c.style.maxWidth=W(750,775).toString()+"px";c.style.margin="24px";c.style.display="flex";c.style["align-items"]="flex-start";c.style["justify-content"]="center";d=Va(a.l.g,"IMG");d.className=Ua();d.src=$a;d.alt="Warning icon";d.style.height="24px";d.style.width="24px";d.style["padding-right"]="16px";var e=X(a),f=X(a);f.style["font-weight"]="bold";f.textContent=ab;var g=X(a);g.textContent=bb;Y(a,e,f);Y(a,e,g);Y(a,c,d);Y(a,c,e);Y(a,b,c);a.g=b;a.i.body.appendChild(a.g);b=W(1,5);for(c=
0;c<b;c++)d=X(a),a.i.body.appendChild(d),a.j.push(d)}function Y(a,b,c){for(var d=W(1,5),e=0;e<d;e++){var f=X(a);b.appendChild(f)}b.appendChild(c);c=W(1,5);for(d=0;d<c;d++)e=X(a),b.appendChild(e)}function W(a,b){return Math.floor(a+Math.random()*(b-a))}function hb(a,b,c,d,e,f){return"rgb("+W(Math.max(a,0),Math.min(b,255)).toString()+","+W(Math.max(c,0),Math.min(d,255)).toString()+","+W(Math.max(e,0),Math.min(f,255)).toString()+")"}function X(a){a=Va(a.l.g,"DIV");a.className=Ua();return a}
function gb(a,b){0>=b||null!=a.g&&0!=a.g.offsetHeight&&0!=a.g.offsetWidth||(ib(a),fb(a),p.setTimeout(function(){return gb(a,b-1)},50))}
function ib(a){var b=a.j;var c="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if(c)b=c.call(b);else if("number"==typeof b.length)b={next:aa(b)};else throw Error(String(b)+" is not an iterable or ArrayLike");for(c=b.next();!c.done;c=b.next())(c=c.value)&&c.parentNode&&c.parentNode.removeChild(c);a.j=[];(b=a.g)&&b.parentNode&&b.parentNode.removeChild(b);a.g=null};function jb(a,b,c,d,e){function f(k){document.body?g(document.body):0<k?p.setTimeout(function(){f(k-1)},e):b()}function g(k){k.appendChild(h);p.setTimeout(function(){h?(0!==h.offsetHeight&&0!==h.offsetWidth?b():a(),h.parentNode&&h.parentNode.removeChild(h)):a()},d)}var h=kb(c);f(3)}function kb(a){var b=document.createElement("div");b.className=a;b.style.width="1px";b.style.height="1px";b.style.position="absolute";b.style.left="-10000px";b.style.top="-10000px";b.style.zIndex="-10000";return b};function Ma(a){this.h=R(a)}n(Ma,T);function lb(a){this.h=R(a)}n(lb,T);var mb=Qa(lb);function nb(a){a=Na(a,4)||"";if(void 0===U){var b=null;var c=p.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:q,createScript:q,createScriptURL:q})}catch(d){p.console&&p.console.error(d.message)}U=b}else U=b}a=(b=U)?b.createScriptURL(a):a;return new V(a,Ta)};function ob(a,b){this.m=a;this.o=new Wa(a.document);this.g=b;this.j=S(this.g,1);this.u=nb(La(this.g,2));this.i=!1;b=nb(La(this.g,13));this.l=new db(a.document,b,S(this.g,12))}ob.prototype.start=function(){pb(this)};
function pb(a){qb(a);Za(a.o,a.u,3,!1,function(){a:{var b=a.j;var c=p.btoa(b);if(c=p[c]){try{var d=Sa(p.atob(c))}catch(e){b=!1;break a}b=b===Na(d,1)}else b=!1}b?Z(a,S(a.g,14)):(Z(a,S(a.g,8)),eb(a.l))},function(){jb(function(){Z(a,S(a.g,7));eb(a.l)},function(){return Z(a,S(a.g,6))},S(a.g,9),Oa(a.g,10),Oa(a.g,11))})}function Z(a,b){a.i||(a.i=!0,a=new a.m.XMLHttpRequest,a.open("GET",b,!0),a.send())}function qb(a){var b=p.btoa(a.j);a.m[b]&&Z(a,S(a.g,5))};(function(a,b){p[a]=function(){var c=ma.apply(0,arguments);p[a]=function(){};b.apply(null,c)}})("__h82AlnkH6D91__",function(a){"function"===typeof window.atob&&(new ob(window,mb(window.atob(a)))).start()});}).call(this);

window.__h82AlnkH6D91__("WyJwdWItNjMyMjAxMjM1NjIzOTIxMSIsW251bGwsbnVsbCxudWxsLCJodHRwczovL2Z1bmRpbmdjaG9pY2VzbWVzc2FnZXMuZ29vZ2xlLmNvbS9iL3B1Yi02MzIyMDEyMzU2MjM5MjExIl0sbnVsbCxudWxsLCJodHRwczovL2Z1bmRpbmdjaG9pY2VzbWVzc2FnZXMuZ29vZ2xlLmNvbS9lbC9BR1NLV3hVUTJPSkczT29iVHZkQkxHOXZXdnphT0JHTlhkTXdSd25TMTBYUHFSbHVNUTJPS2t2THBXa2R4OVZUcXIwTmlWYndNaWE1Z1VzU1l2Z083VnM1WE81c1pBXHUwMDNkXHUwMDNkP3RlXHUwMDNkVE9LRU5fRVhQT1NFRCIsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2VsL0FHU0tXeFU1b1JTU3N3UTJ4OE1kOGRXNUFQdnVHTUg1SW9yMFRIQWFzN2J1YXNOVG1GeGhFVW1zNFhxLWpEbkN1RTFzZW9MLTI0NWNyRGdfamRONktiTm9zSjZTUGdcdTAwM2RcdTAwM2Q/YWJcdTAwM2QxXHUwMDI2c2JmXHUwMDNkMSIsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2VsL0FHU0tXeFV0dVN2NUF2VzdSSktHSFRFemc2X1BlMW5EVy1hc1FwQ1NCMmdkUGJodlJ0Wk9ETTZOdW9COTVnYUdLdHdnc1BVMVF4dFhLYTN5MGFFQTgxbEJCVzYwNmdcdTAwM2RcdTAwM2Q/YWJcdTAwM2QyXHUwMDI2c2JmXHUwMDNkMSIsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2VsL0FHU0tXeFhPMmZTYWVVRy1nOW9LOVJMOVpjUlpGaXVvdzNMZVcyR3RldFR1VVNweXdhMkxibzFVX0JDSndaRmlJejBUZDB4UUV4ZUgwbDVhcHBxUU1abmFaVy10SEFcdTAwM2RcdTAwM2Q/c2JmXHUwMDNkMiIsImRpdi1ncHQtYWQiLDIwLDEwMCwiY0hWaUxUWXpNakl3TVRJek5UWXlNemt5TVRFXHUwMDNkIixbbnVsbCxudWxsLG51bGwsImh0dHBzOi8vd3d3LmdzdGF0aWMuY29tLzBlbW4vZi9wL3B1Yi02MzIyMDEyMzU2MjM5MjExLmpzP3VzcXBcdTAwM2RDQUUiXSwiaHR0cHM6Ly9mdW5kaW5nY2hvaWNlc21lc3NhZ2VzLmdvb2dsZS5jb20vZWwvQUdTS1d4VnNxT1U0bi1vRzJkZE5BZmwtR3lKaVFHNFpCdWJfMGJSZ2dWUDRLTUR4ODhMcm5nMklJNzVYYTFJVGYya3J2NGJkQmZwV01PeWZTZi1NNmdGdnlzZDl0d1x1MDAzZFx1MDAzZCJd");</script>


</head>

<div id="progress-bar"></div>

<div id="Top"></div><BR>

![image](images/IMG_0184_corrected_20210403_Banner_Logo.jpg "Banner-List-Ellenbogen")


# Webcam Widgets Sylt -  live auf dem iPhone

<marquee>08.06.23: Jetzt sind auch die Webcams in List dabei 06.06.2023: Die Webcam Hörnum Weststrand ist neu dabei 01.06.2023 Die WebCam Widgetgs sind auf den Webseiten der Gemeinde Wenningstedt verlinkt und wurden im aktuellen Newsletter im Rahmen eines Artikels beschrieben 31.05.2023 neu: die 3 Webcams in Wenningstedt sind jetzt neu eingebunden 21.04.2023: neu: Webcam in der Friesenkapelle Wenningstedt</marquee><BR>

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fjluetzen.github.io%2FWebCamWidgetsSylt%2F&count_bg=%230277BD&title_bg=%23555555&icon=slideshare.svg&icon_color=%23E7E7E7&title=Besucher&edge_flat=false)](https://hits.seeyoufarm.com)

## Einleitung
Hier ist eine Sammlung von Webcam Widgets von Sylt. Widgets, das sind kleine Apps, die Informationen direkt auf dem Homescreen vom Smartphone darstellen und eben nicht nur das App-Symbol.
Diese hier zeigen Bilder von WebCams auf der wundervollen Nordsee-Insel Sylt.

Wie das genau auf dem Smartphone aussieht, zeigt dieses Video: [https://youtu.be/xDe2LnULC7Y](https://youtu.be/xDe2LnULC7Y)

{% include youtubePlayer.html id="xDe2LnULC7Y" %}

<BR>

-----
<div id="Inhalt"></div><BR>

## Inhalt
* [Mit einem Script zu allen Cams](#EinsfuerAlles)  
* [Kurzbefehle und Anleitungen zur Einrichtung auf dem Homescreen](#UebersichtKurzbefehle)  
* [Sofort-Ansicht im Browser - für Androiden und PC-Benutzer](#InstantView)
* [Weitere Hinweise](#WeitereHinweise)   
* [Liste der Cams](#ListederCams)   
* ["Das will ich auch haben"](#Daswillichauch)
* [Danke an meine Unterstützer](#Danksagung)  
* [News and Updates](#NewsUpdates)
* [Lizenz](#Lizenz)



-----
<div id="EinsfuerAlles"></div><BR>

## Mit einem Script zu allen Cams
Das deutlich verbesserte Script der 2. Generation hat folgende Features:

* Vereinfachtes Einrichten durch **Kurzbefehl**, dazu den Kurzbefehl unten ausführen
* Automatische Updates
* Sonnenaufgangs- und Sonnenuntergangszeiten (im Widget rechts unten)
* Nennung der Website, die die WebCam bereitstellt (im Widget rechts unten)
* erleichterte Erweiterung um neue WebCams ohne Neu-Installation
* Bessere Benutzerunterstützung bei fehlerhafter Einrichtung
* tägliche Aktualisierung der WebCam-Listen
* News-Zeile, falls notwendig (zeigt sich dann im Widget links oberhalb Datum/Uhrzeit)

![image](images/WWS_Beispielbild.jpeg "Beispielbild")

Das vorherige Script (die "Nerd-Version" ;-) ) wird weiterhin genutzt für die [Livespotting Cams](#LivespottingWebcamsCoast) an der Nordsee.
Wie das geht, steht [hier](#Nerd-Version).

----------------------------------------------------

**Der Ablauf in in 3 Schritten:**
  1. Scriptable installieren
  2. Update-Kurzbefehl laden und ausführen
  3. Widgets einrichten    
      3.1 Einrichten als Kurzbefehl-Menue (Webcam-Bild ansehen)     
      3.2 Einrichten auf dem Homescreen (Webcam-Bild ansehen & Livestream starten)    

Hier folgt die Schritt-für-Schritt Anleitung am Beispiel der Sylt-Cams. Weiter unten ist dann eine Zusammenfassung für <i>alle</i> Scripte, Kurzbefehle und Anleitung

-----

**1. Scriptable installieren**

Im App Store die App [Scriptable](https://apps.apple.com/de/app/scriptable/id1405459188) auf dem iPhone installieren

-----

**2. Update-Kurzbefehl laden und ausführen**

**Einfach das Bild unten antippen** und den Kurzbefehl installieren.
Der Kurzbefehl kopiert das Update-Scrpit auf das iPhone, danach startet es. Dieser Updater kopiert alles Notwendige auf das iPhone. Einfach und unkompliziert. Und das funktioniert auch, wenn neue Widgets verfügbar sind. Wenn sich bei den Cams etwas ändert, aktualisiert sich das Widget automatisch über Nacht.

<table class="center">
  <tr>
    <td text align="center"><a href="https://www.icloud.com/shortcuts/6159c22b53e544cfa4e8bf1cb80c89b8"><img src="images/WWS_Shortcut_Sylt_Singles.jpg" title="Link zum Kurzbefehl zum Installieren" height="200"></a></td>
  </tr>
</table>

-----

**3. Widgets einrichten**

#### 3.1 Einrichten als Kurzbefehl-Menue (Webcam-Bild ansehen)

Diese Kurzbefehle starten ein Auswahlmenue, das alle WebCams zeigt und man sucht sich die Webcam aus, deren aktuelles Bild gezeigt werden soll. Bei dieser Variante funktioniert der Livestream leider nicht. Der funktioniert nur, wenn die Widgets auf dem Homescreen eingerichtet werden, wie unter 3.2  beschrieben. Man kann auf diese Weise aber sehr schnell eben mal auf der WebCam vorbei schauen.


  <table class="center" width="600">
  <tr>
    <th>Kurzbefehl-Menue<BR> Sylt-Cams</th>
    <th>Kurzbefehl-Menue<BR>Sylt-Shuttle & Fähre</th>
 </tr>
 <tr>
    <td text align="center" width="50%"><a href="https://www.icloud.com/shortcuts/760918a4383e4db4bbd8690df5995d8e" target="_blank" rel="noopener"><img src="images/SC_SyltCams.jpg" title="Kurzbefehl Sylt-Cams" width="150"></a></td>
    <td text align="center" width="50%"><a href="https://www.icloud.com/shortcuts/ad873c0c7c23400b9d0fdbc1822e7fe8" target="_blank" rel="noopener"><img src="images/SC_Syltshuttle.jpg" title="Kurzbefehl Syltshuttle" width="150"></a></td>
  </tr>
</table>  

<!---1. SyltCams [HIER den Kurzbefehl downloaden und speichern](https://www.icloud.com/shortcuts/664efef35fe941c18a028576b6a84c39)
  2. Autozug und Syltfähre: [HIER den Kurzbefehl downloaden und speichern](https://www.icloud.com/shortcuts/ad873c0c7c23400b9d0fdbc1822e7fe8)
--->

und so sieht der Aufruf des Kurzbefehls dann aus:

  <table class="center">
  <tr>
    <td text align="center"><a href="images/Kurzbefehl1.jpeg"><img src="images/Kurzbefehl1.jpeg" title="Kurzbefehl Menue" width="300"></a></td>
    <td text align="center"><a href="images/Kurzbefehl2.jpeg"><img src="images/Kurzbefehl2.jpeg" title="Kurzbefehl Aufruf" width="300"></a></td>
    <td text align="center"><a href="images/Kurzbefehl3.jpeg"><img src="images/Kurzbefehl3.jpeg" title="Kurzbefehl Ergebnis" width="300"></a></td>
  </tr>
</table>  

<ins>kleiner Tip:</ins>
Man kann Kurzbefehle auf den Homescreen legen.

-----

#### 3.2 Einrichten auf dem Homescreen (Webcam-Bild ansehen & Livestream starten)  

Das Einrichten der Widgets auf dem Homescreen bietet den vollen Funktionsumfang. Das Widget liegt dann auf dem Homescreen und der Livestream startet nach Antippen des Bildes. Mehrere Widgets können zu einem SmartStack gestapelt werden und diese Stapel sind scrollbar, wie in dem YouTube Video dargestellt.
Der hier beschriebene Weg zum Einrichten der Widgets auf dem Homescreen ist von Apple so vorgegeben, mit der aktuellen iOS-Version geht nicht einfacher.    
So auch bestätigt vom Entwickler von Scriptable, Simon B. Støvring.   

Diese wenigen Schritte sind heute auszuführen:   


  1. Einmal lange auf den HomeScreen tippen, bis die Icons wackeln. Dann über das Plus-Zeichen oben ein neues Widget erstellen.
  2. Nach unten scrollen und <b>Scriptable</b> auswählen (Schneller gehts, wenn man in das Suchfenster SC eingibt...), die <i>mittlere</i> Widget-Größe auswählen und <b>Add Widget</b> antippen.
  3. Neues Widget antippen führt zu den Einstellungen
  5. Unter <b>Script</b> das neue Script auswählen, zB <i>WWS_Sylt_SurfcamSylt</i>
  6. Das war's. Jetzt oben rechts auf <b>Fertig</b> oder den HomeScreen tippen, um die Einstellung abzuschliessen.

 Um den Livestream zu starten, einfach das Bild auf dem Homescreen antippen.

 <ins>Stapeln der Bilder:</ins>

Wenn die Icons wackeln, ein Bild auf das andere ziehen, um einen Smart Stapel zu erzeugen, mit dem man durch die Cams mit dem Daumen durchscrollen kann. Das ist ein Smart Stack. bis zu 10 Bilder können so gestapelt werden.



Das Ergebnis kann sich sehen lassen (Tap oder Click zum Vergrößern):
<table class="center">
  <tr>
    <td text align="center"><a href="images/WWSv2-1.jpeg"><img src="images/WWSv2-1.jpeg" title="Sylt-Shuttle"></a></td>
    <td text align="center"><a href="images/WWSv2-2.jpeg"><img src="images/WWSv2-2.jpeg" title="Sylt-Shuttle"></a></td>
    <td text align="center"><a href="images/WWSv2-3.jpeg"><img src="images/WWSv2-3.jpeg" title="Sylt-Shuttle"></a></td>
  </tr>
</table>

Die wesentlichen Neuerungen sind, falls es interessiert, weiter unten genannt.

[Zurück zum Seitenanfang](#Top)

------------------------------------------------
-----
<div id="UebersichtKurzbefehle"></div><BR>

## Kurzbefehle und Anleitungen zur Einrichtung auf dem Homescreen      


#### Sylt-Cams

<table class="center" width="900">
  <tr>
    <th></th>
    <th>Sylt-Cams.</th>
    <th>Sylt-Shuttle & Ferry</th>    
  </tr>
  <tr>
    <td text align="center" width="20%">Kurzbefehle zum <BR>Update der Scripte</td>
    <td text align="center" width="40%"><a href="https://www.icloud.com/shortcuts/87908925b9cd4c83987d1125433e5d4c" target="_blank" rel="noopener"><img style="display: block; margin-left: auto; margin-right: auto" src="images/WWS_Shortcut_Sylt_Singles.jpg" width="200" /></a></td>
    <td text align="center" width="40%"><a href="https://www.icloud.com/shortcuts/87908925b9cd4c83987d1125433e5d4c" target="_blank" rel="noopener"><img style="display: block; margin-left: auto; margin-right: auto" src="images/WWS_Shortcut_Sylt_Singles.jpg" width="200" /></a></td>

  </tr>
  <tr>
    <td text align="center">Kurzbefehl für <BR>Cam-Menue 3.1</td>
    <td text align="center"><a href="https://www.icloud.com/shortcuts/760918a4383e4db4bbd8690df5995d8e" target="_blank" rel="noopener"><img style="display: block; margin-left: auto; margin-right: auto" src="images/SC_SyltCams.jpg" width="120" /></a></td>
    <td text align="center"><a href="https://www.icloud.com/shortcuts/ad873c0c7c23400b9d0fdbc1822e7fe8" target="_blank" rel="noopener"><img     style="display: block; margin-left: auto; margin-right: auto" src="images/SC_Syltshuttle.jpg" width="120" /></a></td>
  </tr>
  <tr>
    <td text align="center" width="20%">Anleitung für<BR>den Homescreen</td>
    <td text colspan="2" align="left" width="80%">
      <b>ACHTUNG</b>: Es ist dasselbe Script, nur die Kurzbefehle sind aufgeteilt.<BR>
      1. Einmal lange auf den HomeScreen tippen, bis die Icons wackeln. Dann über das Plus-Zeichen oben ein neues Widget erstellen.<BR>
      2. <b>Scriptable</b> auswählen, die <i>mittlere</i> Widget-Größe auswählen und <b>Add Widget</b> antippen.<BR>
      3. Neues Widget antippen führt zu den Einstellungen<BR>
      4. Unter "Script" das neue Script auswählen, zB <i>WWS_Sylt_SurfcamSylt</i>, fertig<BR>
    </td>  
  </tr>  
</table>


#### Andere Cams

<table width="900">
  <tr>
    <th></th>
    <th>Urlaubsziele</th>
    <th>Surfcams Bayern</th>
  </tr>
  <tr>
    <td text align="center" width="20%">Kurzbefehle zum <BR>Update der Scripte</td>
    <td text align="center" width="40%"><a href="https://www.icloud.com/shortcuts/b234d6913789411abcfe1ac239799bfe" target="_blank" rel="noopener"><img style="display: block; margin-left: auto; margin-right: auto"  src="images/WWS_Shortcut_UrlaubszieleCSML.jpg" width="200" /></a></td>
    <td text align="center" width="40%"><a href="https://www.icloud.com/shortcuts/b58e3f131aac4e49881b4439919ed6e6" target="_blank" rel="noopener"><img  style="display: block; margin-left: auto; margin-right: auto" src="images/WWS_Shortcut_Surfcams_Bayern.jpg" width="200" /></a></td>
  </tr>
  <tr>
    <td text align="center">Kurzbefehl für <BR>Cam-Menue 3.1</td>
    <td text align="center"><a href="https://www.icloud.com/shortcuts/9635a87a0cbe42eca8d513f7f8a43e90" target="_blank" rel="noopener"><img style="display: block; margin-left: auto; margin-right: auto" src="images/SC_UrlaubszieleCSML.jpg" width="120" /></a></td>
    <td text align="center"><a href="https://www.icloud.com/shortcuts/562b9b2a3dff43a5b687a3faa3da6e03" target="_blank" rel="noopener"><img style="display: block; margin-left: auto; margin-right: auto" src="images/SC_SurfcamsBayern.jpg" width="120" /></a></td>
  </tr>
  <tr>
    <td text align="center" width="20%">Anleitung für<BR>den Homescreen</td>
    <td text colspan="2" align="left" width="80%">
      1. Einmal lange auf den HomeScreen tippen, bis die Icons wackeln. Dann über das Plus-Zeichen oben ein neues Widget erstellen.<BR>
      2. <b>Scriptable</b> auswählen, die <i>mittlere</i> Widget-Größe auswählen und <b>Add Widget</b> antippen.<BR>
      3. Neues Widget antippen führt zu den Einstellungen<BR>
      4. Unter "Script" das neue Script auswählen, zB <i>WWS_CSML_Buesum_Hauptstrand</i>, fertig<BR>
    </td>  
  </tr>    
</table>

[Zurück zum Seitenanfang](#Top)


------------------------------------------------
-----
<div id="InstantView"></div><BR>

## Sofort-Ansicht im Browser - für Androiden und PC-Benutzer
<br>
Für alle ohne iPhone oder am Desktop ist hier die Möglichkeit, alle Cams auf einer Seite im Browser anzusehen. Das Bild anklicken, um den Livestream zu sehen
<br><br>

* [SyltCams](Browser_View/SyltCams_MD.md)  
* [Cams SyltShutte und Syltfähre](Browser_View/SyltShuttle_Express_MD.md)  

Extra-Seite:      
* [SyltCams](Browser_View/SyltCams.html)  
* [Webcams an Autozug und Fähre](Browser_View/SyltShuttle_Express.html)        

[Zurück zum Seitenanfang](#Top)


------------------------------------------------
-----
<div id="WeitereHinweise"></div><BR>

## Weitere Hinweise

<br>
Desweiteren gibt es [dieses kommentierte](https://youtu.be/okgi-ZKg_PY) Video und vom Sylt-Shuttle [dieses unkommentierte](https://youtu.be/En-h2LZYh1w) YouTube-Video, um sich einen Eindruck zu verschaffen.

Für alle, die nicht auf ihre Lieblings-Insel können (wie ich 😉) bietet sich somit hier die Gelegenheit, Live-Bilder und Streams sehr bequem anzusehen.
Wer aber auf die Insel reisen möchte oder sie wieder verlassen muss, der findet hier ein sehr angenehmes Angebot, sich über die Situation an den Verladestationen in Westerland oder Niebüll sowie an den Fähranlegern in List oder Havneby zu informieren.
Das macht diese Widgets so attraktiv.

Das iPhone aktualisiert diese Bilder alle 15-20 min und damit sind die Bilder immer aktuell.
Der Livestream der WebCam öffnet sich, wenn man das Bild antippt.

------------------------------------------------

Richtig interessant wird es, wenn man die Bilder auf dem Homescreen kombiniert, z.B. die Bilder von der Verladestation in Niebüll mit denen vom Fähr-Anleger in Havneby.
So weiß man bei der Anreise immer, wie viel gerade los ist und ob man unter Umständen mit Wartezeiten rechnen muss.

Gleiches gilt natürlich auch für die Abreise mit der Kombination Verladestation Westerland und Fähranleger List.

Hier einmal das Beispiel für die Anreise von Ostern 2021:

<img src="images/IMG_0447_Ostern.jpg" title="Anreise" height="300" />

Hier noch ein paar Impressionen, wie man sich die Widgets einrichten kann:

<table class="center">
  <tr>
    <td text align="center"><a href="images/IMG_1070.jpeg"><img src="images/IMG_1070.jpeg" title="Sylt-Shuttle"></a></td>
    <td text align="center"><a href="images/IMG_1075.jpeg"><img src="images/IMG_1075.jpeg" title="FRS-Syltfähre"></a></td>
    <td text align="center"><a href="images/IMG_1076.jpeg"><img src="images/IMG_1076.jpeg" title="Livespotting & andere"></a></td>
  </tr>
</table>

Cool, oder? Now have fun and enjoy!

-JL-

------------------------------------------------
Übrigens:
Die Firma Livespotting hat einen Blog-Eintrag zu diesem Projekt veröffentlicht: [HIER](https://livespotting.com/blog/ios-widget-fuer-livespotting-webcams-sylt)

![Livespotting_Blog_Eintrag](images/livestreaming-open-source-app-sylt.jpg "livestreaming-open-source-app-sylt")


------------------------------------------------

### 2,99 € für die Kaffeedose


Wenn Euch die Widgets gefallen, würde ich mich über einen Einwurf in meine Kaffedose sehr freuen. Vielen herzlichen Dank!

<a href="https://www.buymeacoffee.com/8gy54qdgqyq/e/61153" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-blue.png" alt="Buy Me A Coffee" height="41" width="174"></a>


Und wenn es irgendwo hakt, bei Fragen oder Problemen bin ich hier erreichbar: [kliffkieker67@gmail.com](mailto:kliffkieker67@gmail.com).

------------------------------------------------

### Aufkleber....

<img src="https://user-images.githubusercontent.com/76537507/125843823-b743bf3d-b305-4e16-9646-dd337ec3472e.jpeg" title="Aufkleber" height="400" />

Ich gebe diese Aufkleber weg für 1,50 € pro Stück plus Porto (90 ct) , wenn Ihr den Betrag in die Paypal Kaffeedose einzahlt und mir per eMail Bescheid gebt.

Die Aufkleber sind rund, 7 cm Durchmesser, weiße Schrift auf transparenter Folie. Sie halten ca. 2 Jahre, wie ich jetzt festgestellt habe.

Versand erfolgt allerdings nur innerhalb Deutschlands.

[Zurück zum Seitenanfang](#Top)

------------------------------------------------
-----
<div id="ListederCams"></div><BR>

## Liste der Cams

### Syltcams (Stand 06.06.2023)

Diese Sylter Cams sind eingebunden:
* Westerland Kurpromendade
* Surfcam Sylt auf Hotel Miramar
* Hörnum Webcam im Leuchtturm
* Kampen Quermarkenfeuer an Kliffende
* Kampen Hotel Runghold
* Rantum Beach
* Sansibar Beach
* Kampen Golfclub Sylt
* Friesenkapelle Norddörfer Wenningstedt
* Wenningstedt, Haus am Kliff
* Wenningstedt, Berthin-Bleeg-Straße
* Wenningstedt, Risgap
* Hörnum Weststrand
* List Weststrand
* List Hafen


------------------------------------------------

### FRS-Syltfähre (Stand 12.06.2022)

Diese Cams der FRS Syltfähre sind abrufbar:
* Anleger Havneby/Rømø
* Anleger List/Sylt
* Anleger List/Sylt - Zoom


------------------------------------------------

### Autozug Sylt / Syltshuttle (Stand 12.06.2022)

Vom Blauen Autozug und Syltshuttle sind diese 6 WebCams wählbar:
* 3 x Autoverladung Niebüll
* 3 x Autoverladung Westerland


------------------------------------------------

### Surfcams Bayern (Stand 12.06.2022)

Auch an den Bayrischen Seen gibt es Webcams, die von Surfern genutzt werden.

Diese Seen sind eingebunden:
* Brombachsee
* Altmühlsee
* Chiemsee
* Ammersee
* Walchensee
* Kochelsee
* Starnbergersee
* Tegernsee
* Gardasee Malcesine


------------------------------------------------

### Urlaubsziele (Stand 07.08.2022)

Webcams im Norden und Süden...

Diese Webcams sind eingebunden:
* Sankt Peter-Ording, Badestelle Ording
* Sankt Peter-Ording, Erlebnispromenade
* Sankt Peter-Ording, Küstenpanorama
* Büsum I
* Büsum II
* Büsum Deichhausen
* Greetsiel
* Hotel Color Bardolino


------------------------------------------------
<div id="LivespottingWebcamsCoast"></div><BR>
### Livespotting Webcams Coast (Stand 29.08.2022)

In Zusammenarbeit mit [https://www.livespotting.com](https://www.livespotting.com) sind diese Webcams von [https://livespotting.tv](https://livespotting.tv) der Kategorie "Coast" eingebunden:
Die Einrichtung ist [hier](#Nerd-Version) beschrieben. Das aufzurufende Script heißt <b>WWS_Livespotting_Coast</b>

      1: Live aus dem Seebad Warnemünde am Alten Strom
      2: Live-Streaming im Fischereihafen Neuharlingersiel
      3: Webcam im Hafen von Neuharlingersiel
      4: Webcam vom UNSECO-Welterbe Wattenmeer in Friedrichskoog
      5: Live vom Nordsee-Strand in Neuharlingersiel
      6: Webcam auf der Halbinsel Holnis bei Glücksburg
      7: Webcam aus der Marina Kröslin im Baltic Sea Resort
      8: Webcam am Sandstrand auf der Nordseeinsel Wangerooge
      9: Webcam in Büsum an der Familienlagune Perlebucht
      10: Webcam aus Scharbeutz, Seebrücke an der Lübecker Bucht
      11: Live-Streaming von Helgoland mit Düne und Hafen
      12: Live vom endlosen feinen Sandstrand in Rantum auf SYLT
      13: Live von der höchsten Webcam mit Blick über Borkum
      14: Rügen, Wiek
      15: Webcam im Seehafen Kiel mit Kreuzfahrtterminal
      16: Live über den Dächern von Kühlungsborn mit Strand und Ostsee
      17: Webcam am Nord-Ostsee Kanal an der Schleuse Brunsbüttel
      18: Webcam am Nord-Ostsee-Kanal NOK Schleuse Kieler Förde
      19: Webcam am Sandstrand in Eckernförde an der Ostsee
      20: Live aus den Dünen von Kampen vom Quermarkenfeuer
      21: Webcam am Bodensee mit dem einzigen Leuchtturm Bayerns
      22: Webcam auf der ostfriesischen Inseln Juist in der Nordsee
      23: Live aus Hörnum auf SYLT mit Sicht bis zur Insel Föhr
      24: Höchste Webcam von St. Peter-Ording mit Küstenpanorama
      25: Live aus dem Stadthafen von Sassnitz auf Rügen
      26: Live vom Seebrückenvorplatz in Scharbeutz an der Ostsee
      27: Webcam mit Ostsee und Strand aus der Lübecker Bucht
      28: Webcam an der Ostsee am Strand von Scharbeutz
      29: Live vom Weltnaturerbe Wattenmeer und dem Jadebusen
      30: Live vom Fähranleger und Hafen in Norddeich Mole
      31: Webcam vom Bodensee aus dem Luftkurort Nonnenhorn
      32: Livecam im Norderneyer Hafen mit Blick auf die Nordsee
      33: Live in Norddeich mit Drachenwiese und Wassersport
      34: Webcam am Sandstrand von Norddeich mit Strandfeeling
      35: Webcam mit Strand und Ostsee im Bootshafen Kühlungsborn
      36: Webcam mit Hafen, Nordsee und dem Strand von Bensersiel
      37: Webcam vom Sandstrand an der Sansibar auf SYLT
      38: Webcam aus Stralsund mit Segelschulschiff Gorch Fock
      39: Webcam vom breitesten Sandstrand der deutschen Ostsee
      40: Live am Wattenmeer der Nordsee an der Meldorfer Bucht
      41: Live vom Königsstuhl der Kreidefelsformation auf Rügen
      42: Live am Sandstrand mit Seebrücke von Graal-Müritz
      43: Webcam Baustelle Dünenlandschaft
      44: Live vom Sandstrand an der Ostsee in Markgrafenheide
      45: Webcam im Hafen von Barth mit Bodden und Ostsee
      46: Webcam aus Haffkrug mit Blick auf Ostsee und Seebrücke
      47: Webcam in der Kieler Förde am Leuchtturm Friedrichsort
      48: Webcam in Laboe mit Blick auf Schilksee und die Ostsee
      49: Webcam am Strand und dem Wohnmobilstellplatz in Harlesiel
      50: Webcam vom Hotel Stranddistel auf Norderney
      51: Webcam am ATLANTIC Hotel in Wilhelmshaven
      52: Webcam aus Sipplingen am Bodensee
      53: Residenz Strandhotel in Warnemünde
      54: Webcam am Museumshafen in Carolinensiel
      55: Webcam mit Promenade und Strand in Westerland auf SYLT
      56: Webcam von der Seebrücke in Heiligenhafen
      57: Webcam mit Strand und Seebrücke in Heiligenhafen
      58: Webcam mit Blick auf die Seebrücke Seelin



[Zurück zum Seitenanfang](#Top)

------------------------------------------------
-----
<div id="Daswillichauch"></div><BR>

## "Das will ich auch haben..."

Wenn Ihr Webcams habt, die ich Euch in Widgets einbinden soll oder für die ich Euch Widgets schreiben soll, dann meldet Euch gerne per Mail bei mir.


------------------------------------------------

![image](images/DSC01323_Banner.JPG "Banner-Kliffende")

[Zurück zum Seitenanfang](#Top)

------------------------------------------------
-----
<div id=Danksagung></div><BR>

## Danke an meine Unterstützer:

- Sabine
- D. Erdmann, [Hotel Rungholt](https://hotel-rungholt.de), Kampen
- C. Kochanek, [C-A Ferienwohnung Sylt](https://www.cundasylt.de), Westerland
- S. Erbeck, [Livespotting.com](https://livespotting.com)
- H.-J. Rotter, [feratel media Technologies GmbH](https://www.feratel.com/)
- D. Boysen, [Tourismus-Service Kampen](https://www.kampen.de/service/tourismus-service-kampen)      
- M. Franzen, P. Villwock, Insel Sylt Tourismus-Service, [www.insel-sylt.de](https://www.insel-sylt.de)
- A. Wagner, [SANSIBAR Sylt](https://www.sansibar.de)
- S. Bukowsky, [FRS Syltfähre](https://www.frs-syltfaehre.de)
- M. Hoppe, [www.nordwind-ev.de](https://www.nordwind-ev.de)
- J. Heimberger, [www.wenningstedt.de](https://www.wenningstedt.de)  
- M. Neubauer, [www.list-sylt.de](https://www.list-sylt.de)  
- D.-O. Strempler, [https://friesenkapelle.de](https://friesenkapelle.de/)      
- [sunrise-sunset.org](https://www.sunrise-sunset.org)
- Scriptable Widget der [Hessenschau](https://www.scriptables.de/widget/hs-webcam)
- [A. Konarski](http://www.konarski-wuppertal.de/andreaskw/Javascript.html)


------------------------------------------------
#### Hashtags:
#sylt #sychtig #syltliebe #kampensylt #einflirtfürsleben #syltfähre
#webcamwidgets #webcamwidgetssylt

[Zurück zum Seitenanfang](#Top)

------------------------------------------------
-----
<div id=NewsUpdates></div><BR>

## News and Updates:
----------------------------------------------------
### 08.06.2023: Neu: List
Seit heute sind auch die Webcams der Gemeinde List auf Sylt eingebunden.
Das sind List Weststrand und List Hafen.
Zudem konnten wir uns für die Friesenkapelle Wenningstedt auf das Logo verständigen.

----------------------------------------------------
### 06.06.2023: Neu: Hörnum Weststrand
Heute wurde die WebCam Hörnum Westrand aufgenommen.

----------------------------------------------------
### 01.06.2023: Webcams der Gemeinde Wenningstedt
Die 3 Webcams der Gemeinde Wenningstedt sind neu aufgenommen in der Familie der Webcam Widgets Sylt.
Diese Neuigkeit wurde im heutigen Newsletter erwähnt und die Website [https://www.wenningstedt.de/service/webcams](https://www.wenningstedt.de/service/webcams) enthält jetzt einen Hinweis auf [https://wwsylt.live](https://wwsylt.live). Sehr cool!

----------------------------------------------------
### 20.04.2023: Friesenkapelle Wenningstedt
Die Panorama-Cam in der Friesenkapelle Wenningstedt ist neu mit aufgenommen.
Arbeiten an einem GitBook zur Dokumentation sind begonnen.

----------------------------------------------------
### 13.03.2023: Für alle Android- und PC-Benutzer
Für alle Android- und PC-Benutzer wurde eine Browser-Lösung bereitgestellt. Einfach dem Link ... folgen

----------------------------------------------------
### 28.08.2022: Sonnenauf- und Untergangszeiten angepasst
Die Berechnung der Sonnenauf- und Untergangszeiten wurde von "Bürgerliche Dämmerung" umgestellt auf Sonnenauf- und Untergang, so wie sie zB in Wetter-Apps für den Standort angegeben werden.

----------------------------------------------------
### 14.08.2022: Livespotting Coast Cams Version verfügbar
Seit heute gibt es die aktuell 58 Coast Cams bei Livespotting auch als Widget. Dazu die den Kurzbefehl der iPhone Nerd Version (s.a. weiter unten) laden und ausführen. Dadurch werden die Ur-Scripte der Nerd-Version aufs iPhone kopiert, auch das neue Script für die Livespotting Coast Cams.<BR>
Diese Coast-Cams stecken im Script "WWS_Livespotting_Coast". Viel Spaß damit!<BR>

----------------------------------------------------
### 10.08.2022: Neue Script-Version: Widget zeigt Update Hinweis
Die Widgets sind so erweitert, dass bei Verfügbarkeit einer neuen Version im Widget ein Hinweis zum Updaten dargestellt wird.
Dann müssen auf dem iPhone unter den Kurzbefehlen alle blauen Update-Kurzbefehle ausgeführt werden.
Mit der nächsten Aktualisierung der Widgets auf dem Homescreen verschwindet der Update Hinweis wieder.<BR>
<img src="images/Update_hint.jpeg" title="Update Hinweis" width="300"><br>  

----------------------------------------------------
### 09.08.2022: Umbau Sonnenauf- und Untergangszeiten fertig
Die Scripte sind jetzt so erweitert, dass die Berechnung der Sonnenauf- und Untergangszeiten nicht mehr über einen Fremd-WebService erfolgt, sondern direkt im Script berechnet wird. Dazu habe ich den Kollegen von der Hessenschau und Andreas Konarski zu danken, die die Berechnung ins Netz gestellt haben. Errechnet wird der Zetipunkt der sog. Zivilen oder Bürgerlichen Dämmerung. Das ist der Zeitpunkt, zu dem die Mitte der Sonne 6° unterhalb des Horizonts steht (s.a. https://www.timeanddate.de/astronomie/buergerliche-daemmerung).


----------------------------------------------------
### 07.08.2022: Umbau Sonnenauf- und Untergangszeiten begonnen
- Der Zertifikats-Fehler auf dem api unter https://sunrise-sunset.org besteht immer noch.Deshalb fange ich jetzt an, diesen Teil umzubauen.<BR>
- Neu aufgenommen ist die Cam im Hotel Color, Bardolino, unter den Urlaubszielen


----------------------------------------------------
### 23.07.2022: Fehler beim api für Sonnenauf- und Untergangszeiten
Probleme auf dem Server zur Berechnung der Sonnenauf- und Untergangszeiten.<br>
<img src="images/Sunset_api_error.jpeg" title="Sunset_api_error" width="300"><br>
Bitte Update-Kurzbefehle ausführen <br>
24.07.2022<br>
Der Fehler wird jetzt abgefangen und sollte nicht mehr auftreten.
Im Bild wird im Fall erneuter Probleme der Hinweis eingeblendet, dass keine Zeiten verfügbar sind. <br>
<img src="images/Sunset_api_displayedtext.jpeg" title="Sunset_api_didplayedtext" width="300"><br>    

----------------------------------------------------
<div id="Nerd-Version"></div><BR>
### 18.06.2022: iPhone Nerd Version

Warum eine Nerd-Version?

Weils so ursprünglich programmiert war:     
Ein Widget-Script bekommt beim Aufruf eine Zahl >1 als Parameter übergeben, der beschreibt welche Zeilennummer aus der CamListe genommen werden soll.<BR>
So erspart man sich, pro Cam ein einzelnes Script auf dem iPhone zu haben. Wenn in der Liste der Cams viele Einträge sind, wird das schnell unübersichtlich. Daher die Version mit Parameter.

<ins>Vorteil:</ins>     
Man hat nur wenige Scripte auf dem iPhone.  

<ins>Nachteil:</ins>     
Das Einrichten auf dem Homescreen ist... sagen wir einmal .. nerdisch ;-).    

Daher die "Singles"-Version oben, für jede Cam gibt es genau ein Script mit einem sprechenden Namen. Das macht es kinderleicht.     
Wer es eher etwas aufgeräumt in seinem Scriptable Folder auf dem iCloud Drive mag, kann diese Version hier verwenden.     
Beim Einrichten der Widgets auf dem Homescreen dann den Wert "When Interacting" nicht verändern und nur den Wert von "Parameter" mit einer Zahl ab 1 füllen, bis das Maximum erreicht wurde (steht im Widget).

Im Gist ist das auch noch einmal erklärt. [HIER](https://gist.github.com/JLuetzen/c30ec199e664938198e8f38e16a2aed6) stehts bereit. Da steht noch etwas anderes zu "When interacting", aber dieser Wert kann so stehen bleiben.


<table class="center">
  <tr>
    <td text align="center"><a href="https://www.icloud.com/shortcuts/8d46e117081f48a89b25cfe9b9cb06ab"><img src="images/WWS_Shortcut.jpg" title="Link zum Kurzbefehl zum Installieren" height="200"></a></td>
  </tr>
</table>

**Update 09.07.2023**

Der Kurzbefehl <b>Update WWSylt</b> kopiert die Scripte für diese Nerd-Version auf das iPhone in die Scriptable App. Folgende Scripte stehen dann für diese Version in Scriptable zur Verfügung:

- WWS_Syltcams
- WWS_Syltfaehre
- WWS_Syltshuttle
- WWS_CSML-Edition
- WWS_Surfcams_Bayern
- WWS_Livespotting_Coast

------------------------------------------------
### 17.06.2022: Einführung von Kurzbefehlen für erleichtertes Einrichten und Updaten
Erleichterte Installation durch einen iPhone Kurzbefehl. Der lädt das Update-Script und das wiederum speichert die Scripts für die Widgets wie benötigt. Das machts extrem leicht, die Widgets zu nutzen. Das Einrichten der Widgets (Homescreen drücken, bis die Symbole wackeln,...) muss erst einmal weiter von Hand gemacht werden. Aber wer weiß schon was iOS 16 kann oder ob ich nicht doch einmal eine App in den Store bringe.. ;-)

------------------------------------------------
### 12.06.2022: Script der 2. Generation
Die neue Version WWS_Master.js, **das Eine für Alle** steht ab sofort zur Verfügung, eine für alles.
Die Installation erfolgt über einen Kurzbefehl, die List der verfügbaren Cams wird dann täglich heruntergeladen.
[Hier](https://gist.github.com/JLuetzen/c30ec199e664938198e8f38e16a2aed6) gehts zum Anschauen.
Unbedingt Aktualisieren, die Scripte der 1. Generation werden nicht mehr weiter gepflegt.

------------------------------------------------
### 06.02.2022: Scripts der 1. Generation
Die geänderte Adresse der Webcam am Altmühlsee ist eingearbeitet und neu ist die WebCam an der Prienavera mit schönem Blick auf die Halbinsel, den See und das Alpenpanorama dahinter. Damit die Änderungen sichtbar werden, muss das Script "WebCams_Surfcams_Bayern" neu geladen werden, es ist [Hier](https://gist.github.com/JLuetzen/32108386834dce1f2c2de70ca597626f) zu finden.
---> Das erneute Laden entfällt bei Verwendung des Scripts der 2. Generation --> unbedingt Aktualsieren!

------------------------------------------------
### 20.08.2021 Scripts der 1. Generation
Der Fehler beim Sylt Shuttle Widget mit der ausgefallenen Webcam von der Verladung in Westerland ist korrigiert. [Hier](https://bit.ly/3dj5YcN) geht's zum Widget zum Aktualisieren.
---> Das erneute Laden entfällt bei Verwendung des Scripts der 2. Generation --> unbedingt Aktualsieren!



------------------------------------------------
### Neuerungen im Script der 2. Generation

Diese Neuerungen sind in dem Script der 2. Generation **WWS_Master.js** umgesetzt:
* die Daten der Cams stehen jetzt nicht mehr im Script, sondern in einer zentralen Datei, die das Script täglich 1x aktualisiert. Dadurch kommt der Benutzer viel schneller in den Genuss neuer verfügbarer Cams. Die Textdateien mit den Daten der Cams liegen hier im [Data-Verzeichnis des GitHub Projects](https://github.com/JLuetzen/WebcamWidgetsSylt/tree/main/data)
* Die Parameter pro Script werden in einer zentralen Datei geführt, die auch täglch 1x aktualisiert wird. Damit kann zentral und schnell auf Änderungsbedarf reagiert werden, ohne das Script selber ändern zu müssen. Die Parameter-Datei _WWSmod_Paramters.js_ mit den Parametern der einzelnen Scripte liegt liegt hier im [Data-Verzeichnis des GitHub Projects](https://github.com/JLuetzen/WebcamWidgetsSylt/tree/main/data)
* Auf einigen WebCams sind die Informationen zu den WebCams oder Livestreams mit Zeitstempeln versehen. Damit ändert sich laufend der Verweis auf die WebCam und das kann zu ärgerlichen Widget-Fehlern führen. Mit der neuen Scriptversion werden die gerade gültigen Pfade zu den Medien direkt von der Website des Herstellers ausgelesen, wenn das Widget sich aktualisiert. Auch dieses Verfahren kann sich laufend ändern und deshalb wird die Datei 1x pro Tag aktualisiert. Die Parameter-Datei _WWSmod_Specialcases.js_ mit den Auslese-Routinen von den Websites liegt liegt hier im [Data-Verzeichnis des GitHub Projects](https://github.com/JLuetzen/WebcamWidgetsSylt/tree/main/data)


------------------------------------------------
### Scripts der ersten Generation
Zu allen Widgets geht es [hier entlang:](https://gist.github.com/JLuetzen)
Ihr findet da alles, den Code und die Installations-Anleitung in Text und als YouTube-Video.
Das erste Video erklärt, wie das Widget-Script von Github nach Scriptable gebracht wird: [https://youtu.be/tRHFpwIr_l0](https://youtu.be/tRHFpwIr_l0)
Das zweite Video stellt dann dar, wie danach das Widget eingerichtet wird [https://youtu.be/LnrikIM3T0U](https://youtu.be/LnrikIM3T0U) .

Ihr werdet sehen, das ist alles sehr einfach.

<table class="center">
  <tr>
    <th>7 Webcams Livespotting & andere von Sylt</th>
    <th>6 Webcams Autozug Sylt-Shuttle</th>
    <th>3 WebCams Syltfähre</th>
  </tr>
  <tr>
    <td text align="center"><img src="images/Preview_Livespotting.jpg" title="Livespotting.com"></td>
    <td text align="center"><img src="images/Preview_SyltShuttle.jpg" title="Sylt-Shuttle"></td>
    <td text align="center"><img src="images/Preview_SyltFaehre.jpg" title="FRS-Syltfähre"></td>

  </tr>
  <tr>
    <td text align="center"><a href="https://bit.ly/3b2wrsd">[Link zum Einrichten]</a></td>
    <td text align="center"><a href="https://bit.ly/3dj5YcN">[Link zum Einrichten]</a></td>
    <td text align="center"><a href="https://bit.ly/3eCBe7d">[Link zum Einrichten]</a></td>
  </tr>
</table>


[Zurück zum Seitenanfang](#Top)

------------------------------------------------
-----
<div id=Lizenz></div><BR>

## Lizenz:

Dieses Projekt ist lizensiert nach der [BSD 3-Clause "New" or "Revised" License](https://github.com/JLuetzen/WebcamWidgetsSylt/blob/main/LICENSE)
