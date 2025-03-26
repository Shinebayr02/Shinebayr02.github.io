"use strict";(self["webpackChunkmy_vue_app"]=self["webpackChunkmy_vue_app"]||[]).push([[504],{34:function(t,e,n){var r=n(4901);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},81:function(t,e,n){var r=n(9565),i=n(9306),s=n(8551),o=n(6823),a=n(851),c=TypeError;t.exports=function(t,e){var n=arguments.length<2?a(t):e;if(i(n))return s(r(n,t));throw new c(o(t)+" is not iterable")}},116:function(t,e,n){var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{find:function(t){o(this),s(t);var e=a(this),n=0;return i(e,(function(e,r){if(t(e,n++))return r(e)}),{IS_RECORD:!0,INTERRUPTED:!0}).result}})},283:function(t,e,n){var r=n(9504),i=n(9039),s=n(4901),o=n(9297),a=n(3724),c=n(350).CONFIGURABLE,u=n(3706),l=n(1181),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,m=r("".slice),g=r("".replace),v=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),w=String(String).split("String"),_=t.exports=function(t,e,n){"Symbol("===m(f(e),0,7)&&(e="["+g(f(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),y&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return o(r,"source")||(r.source=v(w,"string"==typeof e?e:"")),t};Function.prototype.toString=_((function(){return s(this)&&d(this).source||u(this)}),"toString")},350:function(t,e,n){var r=n(3724),i=n(9297),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},397:function(t,e,n){var r=n(7751);t.exports=r("document","documentElement")},421:function(t){t.exports={}},507:function(t,e,n){var r=n(9565);t.exports=function(t,e,n){var i,s,o=n?t:t.iterator,a=t.next;while(!(i=r(a,o)).done)if(s=e(i.value),void 0!==s)return s}},616:function(t,e,n){var r=n(9039);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},655:function(t,e,n){var r=n(6955),i=String;t.exports=function(t){if("Symbol"===r(t))throw new TypeError("Cannot convert a Symbol value to a string");return i(t)}},679:function(t,e,n){var r=n(1625),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw new i("Incorrect invocation")}},713:function(t,e,n){var r=n(9565),i=n(9306),s=n(8551),o=n(1767),a=n(9462),c=n(6319),u=a((function(){var t=this.iterator,e=s(r(this.next,t)),n=this.done=!!e.done;if(!n)return c(t,this.mapper,[e.value,this.counter++],!0)}));t.exports=function(t){return s(this),i(t),new u(o(this),{mapper:t})}},741:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},757:function(t,e,n){var r=n(7751),i=n(4901),s=n(1625),o=n(7040),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&s(e.prototype,a(t))}},851:function(t,e,n){var r=n(6955),i=n(5966),s=n(4117),o=n(6269),a=n(8227),c=a("iterator");t.exports=function(t){if(!s(t))return i(t,c)||i(t,"@@iterator")||o[r(t)]}},989:function(t,e,n){n.d(e,{gS:function(){return pu},C3:function(){return wu},hq:function(){return yu},rJ:function(){return ic},kd:function(){return fu},H9:function(){return sc},x7:function(){return cu},GG:function(){return lu},aU:function(){return uc},P:function(){return Gc},O5:function(){return vu},BN:function(){return hu},mZ:function(){return du},_M:function(){return Jc}});n(4114),n(6573),n(8100),n(7936),n(8111),n(1148),n(2489),n(116),n(7588),n(1701),n(8237),n(3579),n(1806),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(7467),n(4732),n(9577),n(4979);var r,i,s=n(3863),o=n(1640),a=n(9951),c=n(8506),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},l={};(function(){var t;
/** @license
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
         */function e(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function o(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function a(t,e){var n=u;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}function c(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},s.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.B,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)o(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){o(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){o(this,r),i=0;break}}this.h=i,this.o+=e},s.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var u={};function h(t){return-128<=t&&128>t?a(t,(function(t){return new c([0|t],0>t?-1:0)})):new c([0|t],0>t?-1:0)}function d(t){if(isNaN(t)||!isFinite(t))return p;if(0>t)return w(d(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=4294967296;return new c(e,0)}function f(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return w(f(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=d(Math.pow(e,8)),r=p,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=d(Math.pow(e,s)),r=r.j(s).add(d(o))):(r=r.j(n),r=r.add(d(o)))}return r}var p=h(0),m=h(1),g=h(16777216);function v(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function y(t){return-1==t.h}function w(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new c(n,~t.h).add(m)}function _(t,e){return t.add(w(e))}function b(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function E(t,e){this.g=t,this.h=e}function T(t,e){if(v(e))throw Error("division by zero");if(v(t))return new E(p,p);if(y(t))return e=T(w(t),e),new E(w(e.g),w(e.h));if(y(e))return e=T(t,w(e)),new E(w(e.g),e.h);if(30<t.g.length){if(y(t)||y(e))throw Error("slowDivide_ only works with positive integers.");for(var n=m,r=e;0>=r.l(t);)n=I(n),r=I(r);var i=S(n,1),s=S(r,1);for(r=S(r,2),n=S(n,2);!v(r);){var o=s.add(r);0>=o.l(t)&&(i=i.add(n),s=o),r=S(r,1),n=S(n,1)}return e=_(t,i.j(e)),new E(i,e)}for(i=p;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=d(n),o=s.j(e);y(o)||0<o.l(t);)n-=r,s=d(n),o=s.j(e);v(s)&&(s=m),i=i.add(s),t=_(t,o)}return new E(i,t)}function I(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.i(r)<<1|t.i(r-1)>>>31;return new c(n,t.h)}function S(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.i(s+n)>>>e|t.i(s+n+1)<<32-e:t.i(s+n);return new c(i,t.h)}t=c.prototype,t.m=function(){if(y(this))return-w(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.i(n);t+=(0<=r?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(v(this))return"0";if(y(this))return"-"+w(this).toString(t);for(var e=d(Math.pow(t,6)),n=this,r="";;){var i=T(n,e).g;n=_(n,i.j(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,v(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return t=_(this,t),y(t)?-1:v(t)?0:1},t.abs=function(){return y(this)?w(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(65535&this.i(i))+(65535&t.i(i)),o=(s>>>16)+(this.i(i)>>>16)+(t.i(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new c(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(v(this)||v(t))return p;if(y(this))return y(t)?w(this).j(w(t)):w(w(this).j(t));if(y(t))return w(this.j(w(t)));if(0>this.l(g)&&0>t.l(g))return d(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.i(r)>>>16,o=65535&this.i(r),a=t.i(i)>>>16,u=65535&t.i(i);n[2*r+2*i]+=o*u,b(n,2*r+2*i),n[2*r+2*i+1]+=s*u,b(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,b(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,b(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new c(n,0)},t.A=function(t){return T(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)&t.i(r);return new c(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)|t.i(r);return new c(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)^t.i(r);return new c(n,this.h^t.h)},s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,i=l.Md5=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=d,c.fromString=f,r=l.Integer=c}).apply("undefined"!==typeof u?u:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var h,d,f,p,m,g,v,y,w="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},_={};(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};function n(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof w&&w];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function i(t,n){if(n)t:{var i=r;t=t.split(".");for(var s=0;s<t.length-1;s++){var o=t[s];if(!(o in i))break t;i=i[o]}t=t[t.length-1],s=i[t],n=n(s),n!=s&&null!=n&&e(i,t,{configurable:!0,writable:!0,value:n})}}function s(t,e){t instanceof String&&(t+="");var n=0,r=!1,i={next:function(){if(!r&&n<t.length){var i=n++;return{value:e(i,t[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}i("Array.prototype.values",(function(t){return t||function(){return s(this,(function(t,e){return e}))}}));
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
var o=o||{},a=this||self;function c(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function u(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function l(t,e,n){return t.call.apply(t.bind,arguments)}function b(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function T(t,e,n){return T=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?l:b,T.apply(null,arguments)}function I(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function S(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function C(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function A(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(c(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}class k{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function O(t){return/^[\s\xa0]*$/.test(t)}function R(){var t=a.navigator;return t&&(t=t.userAgent)?t:""}function x(t){return x[" "](t),t}x[" "]=function(){};var N=-1!=R().indexOf("Gecko")&&!(-1!=R().toLowerCase().indexOf("webkit")&&-1==R().indexOf("Edge"))&&!(-1!=R().indexOf("Trident")||-1!=R().indexOf("MSIE"))&&-1==R().indexOf("Edge");function D(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function P(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function L(t){const e={};for(const n in t)e[n]=t[n];return e}const M="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function U(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<M.length;e++)n=M[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function F(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function j(t){a.setTimeout((()=>{throw t}),0)}function V(){var t=K;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ${constructor(){this.h=this.g=null}add(t,e){const n=B.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var B=new k((()=>new q),(t=>t.reset()));class q{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let z,H=!1,K=new $,W=()=>{const t=a.Promise.resolve(void 0);z=()=>{t.then(G)}};var G=()=>{for(var t;t=V();){try{t.h.call(t.g)}catch(n){j(n)}var e=B;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}H=!1};function Q(){this.s=this.s,this.C=this.C}function J(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},J.prototype.h=function(){this.defaultPrevented=!0};var X=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};a.addEventListener("test",t,e),a.removeEventListener("test",t,e)}catch(n){}return t}();function Y(t,e){if(J.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(N){t:{try{x(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:Z[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Y.aa.h.call(this)}}S(Y,J);var Z={2:"touch",3:"pen",4:"mouse"};Y.prototype.h=function(){Y.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var tt="closure_listenable_"+(1e6*Math.random()|0),et=0;function nt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++et,this.da=this.fa=!1}function rt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function it(t){this.src=t,this.g={},this.h=0}function st(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=Array.prototype.indexOf.call(i,e,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(rt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ot(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.da&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}it.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=ot(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new nt(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var at="closure_lm_"+(1e6*Math.random()|0),ct={};function ut(t,e,n,r,i){if(r&&r.once)return dt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ut(t,e[s],n,r,i);return null}return n=wt(n),t&&t[tt]?t.K(e,n,u(r)?!!r.capture:!!r,i):lt(t,e,n,!1,r,i)}function lt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=u(i)?!!i.capture:!!i,a=vt(t);if(a||(t[at]=a=new it(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=ht(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)X||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(mt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ht(){function t(n){return e.call(t.src,t.listener,n)}const e=gt;return t}function dt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)dt(t,e[s],n,r,i);return null}return n=wt(n),t&&t[tt]?t.L(e,n,u(r)?!!r.capture:!!r,i):lt(t,e,n,!0,r,i)}function ft(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)ft(t,e[s],n,r,i);else r=u(r)?!!r.capture:!!r,n=wt(n),t&&t[tt]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=ot(s,n,r,i),-1<n&&(rt(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=vt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ot(e,n,r,i)),(n=-1<t?e[t]:null)&&pt(n))}function pt(t){if("number"!==typeof t&&t&&!t.da){var e=t.src;if(e&&e[tt])st(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(mt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=vt(e))?(st(n,t),0==n.h&&(n.src=null,e[at]=null)):rt(t)}}}function mt(t){return t in ct?ct[t]:ct[t]="on"+t}function gt(t,e){if(t.da)t=!0;else{e=new Y(e,this);var n=t.listener,r=t.ha||t.src;t.fa&&pt(t),t=n.call(r,e)}return t}function vt(t){return t=t[at],t instanceof it?t:null}var yt="__closure_events_fn_"+(1e9*Math.random()>>>0);function wt(t){return"function"===typeof t?t:(t[yt]||(t[yt]=function(e){return t.handleEvent(e)}),t[yt])}function _t(){Q.call(this),this.i=new it(this),this.M=this,this.F=null}function bt(t,e){var n,r=t.F;if(r)for(n=[];r;r=r.F)n.push(r);if(t=t.M,r=e.type||e,"string"===typeof e)e=new J(e,t);else if(e instanceof J)e.target=e.target||t;else{var i=e;e=new J(r,t),U(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Et(o,r,!0,e)&&i}if(o=e.g=t,i=Et(o,r,!0,e)&&i,i=Et(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Et(o,r,!1,e)&&i}function Et(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.da&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.fa&&st(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}function Tt(t,e,n){if("function"===typeof t)n&&(t=T(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=T(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function It(t){t.g=Tt((()=>{t.g=null,t.i&&(t.i=!1,It(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}S(_t,Q),_t.prototype[tt]=!0,_t.prototype.removeEventListener=function(t,e,n,r){ft(this,t,e,n,r)},_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)rt(n[r]);delete e.g[t],e.h--}}this.F=null},_t.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},_t.prototype.L=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class St extends Q{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:It(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ct(t){Q.call(this),this.h=t,this.g={}}S(Ct,Q);var At=[];function kt(t){D(t.g,(function(t,e){this.g.hasOwnProperty(e)&&pt(t)}),t),t.g={}}Ct.prototype.N=function(){Ct.aa.N.call(this),kt(this)},Ct.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ot=a.JSON.stringify,Rt=a.JSON.parse,xt=class{stringify(t){return a.JSON.stringify(t,void 0)}parse(t){return a.JSON.parse(t,void 0)}};function Nt(){}function Dt(t){return t.h||(t.h=t.i())}function Pt(){}Nt.prototype.h=null;var Lt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mt(){J.call(this,"d")}function Ut(){J.call(this,"c")}S(Mt,J),S(Ut,J);var Ft={},jt=null;function Vt(){return jt=jt||new _t}function $t(t){J.call(this,Ft.La,t)}function Bt(t){const e=Vt();bt(e,new $t(e))}function qt(t,e){J.call(this,Ft.STAT_EVENT,t),this.stat=e}function zt(t){const e=Vt();bt(e,new qt(e,t))}function Ht(t,e){J.call(this,Ft.Ma,t),this.size=e}function Kt(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}function Wt(){this.g=!0}function Gt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Qt(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Jt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Yt(t,n)+(r?" "+r:"")}))}function Xt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Yt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ot(n)}catch(a){return e}}Ft.La="serverreachability",S($t,J),Ft.STAT_EVENT="statevent",S(qt,J),Ft.Ma="timingevent",S(Ht,J),Wt.prototype.xa=function(){this.g=!1},Wt.prototype.info=function(){};var Zt,te={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ee={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function ne(){}function re(t,e,n,r){this.j=t,this.i=e,this.l=n,this.R=r||1,this.U=new Ct(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ie}function ie(){this.i=null,this.g="",this.h=!1}S(ne,Nt),ne.prototype.g=function(){return new XMLHttpRequest},ne.prototype.i=function(){return{}},Zt=new ne;var se={},oe={};function ae(t,e,n){t.L=1,t.v=Me(xe(e)),t.m=n,t.P=!0,ce(t,null)}function ce(t,e){t.F=Date.now(),he(t),t.A=xe(t.v);var n=t.A,r=t.R;Array.isArray(r)||(r=[String(r)]),Qe(n.i,"t",r),t.C=0,n=t.j.J,t.h=new ie,t.g=Bn(t.j,n?e:null,!t.m),0<t.O&&(t.M=new St(T(t.Y,t,t.g),t.O)),e=t.U,n=t.g,r=t.ca;var i="readystatechange";Array.isArray(i)||(i&&(At[0]=i.toString()),i=At);for(var s=0;s<i.length;s++){var o=ut(n,i[s],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}e=t.H?L(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Bt(),Gt(t.i,t.u,t.A,t.l,t.R,t.m)}function ue(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function le(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?oe:(n=Number(e.substring(n,r)),isNaN(n)?se:(r+=1,r+n>e.length?oe:(e=e.slice(r,r+n),t.C=r+n,e)))}function he(t){t.S=Date.now()+t.I,de(t,t.I)}function de(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Kt(T(t.ba,t),e)}function fe(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function pe(t){0==t.j.G||t.J||Un(t.j,t)}function me(t){fe(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,kt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function ge(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||be(n.h,t)))if(!t.K&&be(n.h,t)&&3==n.G){try{var r=n.Da.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Mn(n),Sn(n)}Dn(n),zt(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Kt(T(n.Za,n),6e3));if(1>=_e(n.h)&&n.ca){try{n.ca()}catch(u){}n.ca=void 0}}else jn(n,11)}else if((t.K||n.g==t)&&Mn(n),!O(e))for(i=n.Da.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const e=u[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Ee(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.ya=t,Le(r.I,r.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms")),r=n;var o=t;if(r.qa=$n(r,r.J?r.ia:null,r.W),o.K){Te(r.h,o);var a=o,c=r.L;c&&(a.I=c),a.B&&(fe(a),he(a)),r.g=o}else Nn(r);0<n.i.length&&An(n)}else"stop"!=u[0]&&"close"!=u[0]||jn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?jn(n,7):In(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}Bt(4)}catch(u){}}re.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==wn(t)?e.j():this.Y(t)},re.prototype.Y=function(t){try{if(t==this.g)t:{const d=wn(this.g);var e=this.g.Ba();const f=this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||_n(this.g)))){this.J||4!=d||7==e||Bt(8==e||0>=f?3:2),fe(this);var n=this.g.Z();this.X=n;e:if(ue(this)){var r=_n(this.g);t="";var i=r.length,s=4==wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){me(this),pe(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:!(s&&e==i-1)});r.length=0,this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,Qt(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(c)){var l=c;break e}}l=null}if(!(n=l)){this.o=!1,this.s=3,zt(12),me(this),pe(this);break t}Jt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ge(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<o.length;){if(t=le(this,o),t==oe){4==d&&(this.s=4,zt(14),n=!1),Jt(this.i,this.l,null,"[Incomplete Response]");break}if(t==se){this.s=4,zt(15),Jt(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}Jt(this.i,this.l,t,null),ge(this,t)}if(ue(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=o.length||this.h.h||(this.s=1,zt(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),Pn(h),h.M=!0,zt(11))}}else Jt(this.i,this.l,o,"[Invalid Chunked Response]"),me(this),pe(this)}else Jt(this.i,this.l,o,null),ge(this,o);4==d&&me(this),this.o&&!this.J&&(4==d?Un(this.j,this):(this.o=!1,he(this)))}else bn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,zt(12)):(this.s=0,zt(13)),me(this),pe(this)}}}catch(d){}},re.prototype.cancel=function(){this.J=!0,me(this)},re.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Xt(this.i,this.A),2!=this.L&&(Bt(),zt(17)),me(this),this.s=2,pe(this)):de(this,this.S-t)};var ve=class{constructor(t,e){this.g=t,this.map=e}};function ye(t){this.l=t||10,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function we(t){return!!t.h||!!t.g&&t.g.size>=t.j}function _e(t){return t.h?1:t.g?t.g.size:0}function be(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Ee(t,e){t.g?t.g.add(e):t.h=e}function Te(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Ie(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return C(t.i)}function Se(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(c(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ce(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(c(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Ae(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(c(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Ce(t),r=Se(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}ye.prototype.cancel=function(){if(this.i=Ie(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var ke=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Oe(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Re(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Re){this.h=t.h,Ne(this,t.j),this.o=t.o,this.g=t.g,De(this,t.s),this.l=t.l;var e=t.i,n=new He;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Pe(this,n),this.m=t.m}else t&&(e=String(t).match(ke))?(this.h=!1,Ne(this,e[1]||"",!0),this.o=Ue(e[2]||""),this.g=Ue(e[3]||"",!0),De(this,e[4]),this.l=Ue(e[5]||"",!0),Pe(this,e[6]||"",!0),this.m=Ue(e[7]||"")):(this.h=!1,this.i=new He(null,this.h))}function xe(t){return new Re(t)}function Ne(t,e,n){t.j=n?Ue(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function De(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function Pe(t,e,n){e instanceof He?(t.i=e,Xe(t.i,t.h)):(n||(e=Fe(e,qe)),t.i=new He(e,t.h))}function Le(t,e,n){t.i.set(e,n)}function Me(t){return Le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ue(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fe(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,je),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function je(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Re.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fe(e,Ve,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(Fe(e,Ve,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Fe(n,"/"==n.charAt(0)?Be:$e,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",Fe(n,ze)),t.join("")};var Ve=/[#\/\?@]/g,$e=/[#\?:]/g,Be=/[#\?]/g,qe=/[#\?@]/g,ze=/#/g;function He(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ke(t){t.g||(t.g=new Map,t.h=0,t.i&&Oe(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function We(t,e){Ke(t),e=Je(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ge(t,e){return Ke(t),e=Je(t,e),t.g.has(e)}function Qe(t,e,n){We(t,e),0<n.length&&(t.i=null,t.g.set(Je(t,e),C(n)),t.h+=n.length)}function Je(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Xe(t,e){e&&!t.j&&(Ke(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(We(this,e),Qe(this,n,t))}),t)),t.j=e}function Ye(t,e){const n=new Wt;if(a.Image){const r=new Image;r.onload=I(tn,n,"TestLoadImage: loaded",!0,e,r),r.onerror=I(tn,n,"TestLoadImage: error",!1,e,r),r.onabort=I(tn,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=I(tn,n,"TestLoadImage: timeout",!1,e,r),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Ze(t,e){const n=new Wt,r=new AbortController,i=setTimeout((()=>{r.abort(),tn(n,"TestPingServer: timeout",!1,e)}),1e4);fetch(t,{signal:r.signal}).then((t=>{clearTimeout(i),t.ok?tn(n,"TestPingServer: ok",!0,e):tn(n,"TestPingServer: server error",!1,e)})).catch((()=>{clearTimeout(i),tn(n,"TestPingServer: error",!1,e)}))}function tn(t,e,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function en(){this.g=new xt}function nn(t,e,n){const r=n||"";try{Ae(t,(function(t,n){let i=t;u(t)&&(i=Ot(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function rn(t){this.l=t.Ub||null,this.j=t.eb||!1}function sn(t,e){_t.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function on(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function an(t){t.readyState=4,t.l=null,t.j=null,t.v=null,cn(t)}function cn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function un(t){let e="";return D(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function ln(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=un(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Le(t,e,n))}function hn(t){_t.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}t=He.prototype,t.add=function(t,e){Ke(this),this.i=null,t=Je(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){Ke(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},t.na=function(){Ke(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},t.V=function(t){Ke(this);let e=[];if("string"===typeof t)Ge(this,t)&&(e=e.concat(this.g.get(Je(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return Ke(this),this.i=null,t=Je(this,t),Ge(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t?(t=this.V(t),0<t.length?String(t[0]):e):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")},S(rn,Nt),rn.prototype.g=function(){return new sn(this.l,this.j)},rn.prototype.i=function(t){return function(){return t}}({}),S(sn,_t),t=sn.prototype,t.open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,cn(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,an(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,cn(this)),this.g&&(this.readyState=3,cn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;on(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?an(this):cn(this),3==this.readyState&&on(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,an(this))},t.Qa=function(t){this.g&&(this.response=t,an(this))},t.ga=function(){this.g&&an(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(sn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),S(hn,_t);var dn=/^https?$/i,fn=["POST","PUT"];function pn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,mn(t),vn(t)}function mn(t){t.A||(t.A=!0,bt(t,"complete"),bt(t,"error"))}function gn(t){if(t.h&&"undefined"!=typeof o&&(!t.v[1]||4!=wn(t)||2!=t.Z()))if(t.u&&4==wn(t))Tt(t.Ea,0,t);else if(bt(t,"readystatechange"),4==wn(t)){t.h=!1;try{const o=t.Z();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var i=String(t.D).match(ke)[1]||null;!i&&a.self&&a.self.location&&(i=a.self.location.protocol.slice(0,-1)),r=!dn.test(i?i.toLowerCase():"")}n=r}if(n)bt(t,"complete"),bt(t,"success");else{t.m=6;try{var s=2<wn(t)?t.g.statusText:""}catch(c){s=""}t.l=s+" ["+t.Z()+"]",mn(t)}}finally{vn(t)}}}function vn(t,e){if(t.g){yn(t);const r=t.g,i=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||bt(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function yn(t){t.I&&(a.clearTimeout(t.I),t.I=null)}function wn(t){return t.g?t.g.readyState:0}function _n(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(E){return null}}function bn(t){const e={};t=(t.g&&2<=wn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(O(t[r]))continue;var n=F(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}P(e,(function(t){return t.join(", ")}))}function En(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Tn(t){this.Aa=0,this.i=[],this.j=new Wt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=En("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=En("baseRetryDelayMs",5e3,t),this.cb=En("retryDelaySeedMs",1e4,t),this.Wa=En("forwardChannelMaxRetries",2,t),this.wa=En("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new ye(t&&t.concurrentRequestLimit),this.Da=new en,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function In(t){if(Cn(t),3==t.G){var e=t.U++,n=xe(t.I);if(Le(n,"SID",t.K),Le(n,"RID",e),Le(n,"TYPE","terminate"),Rn(t,n),e=new re(t,t.j,e),e.L=2,e.v=Me(xe(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=Bn(e.j,null),e.g.ea(e.v)),e.F=Date.now(),he(e)}Vn(t)}function Sn(t){t.g&&(Pn(t),t.g.cancel(),t.g=null)}function Cn(t){Sn(t),t.u&&(a.clearTimeout(t.u),t.u=null),Mn(t),t.h.cancel(),t.s&&("number"===typeof t.s&&a.clearTimeout(t.s),t.s=null)}function An(t){if(!we(t.h)&&!t.s){t.s=!0;var e=t.Ga;z||W(),H||(z(),H=!0),K.add(e,t),t.B=0}}function kn(t,e){return!(_e(t.h)>=t.h.j-(t.s?1:0))&&(t.s?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa))&&(t.s=Kt(T(t.Ga,t,e),Fn(t,t.B)),t.B++,!0))}function On(t,e){var n;n=e?e.l:t.U++;const r=xe(t.I);Le(r,"SID",t.K),Le(r,"RID",n),Le(r,"AID",t.T),Rn(t,r),t.m&&t.o&&ln(r,t.m,t.o),n=new re(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=xn(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Ee(t.h,n),ae(n,r,e)}function Rn(t,e){t.H&&D(t.H,(function(t,n){Le(e,n,t)})),t.l&&Ae({},(function(t,n){Le(e,n,t)}))}function xn(t,e,n){n=Math.min(t.i.length,n);var r=t.l?T(t.l.Na,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=e,0>n)e=Math.max(0,i[a].g-100),o=!1;else try{nn(c,t,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function Nn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;z||W(),H||(z(),H=!0),K.add(e,t),t.v=0}}function Dn(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=Kt(T(t.Fa,t),Fn(t,t.v)),t.v++,!0)}function Pn(t){null!=t.A&&(a.clearTimeout(t.A),t.A=null)}function Ln(t){t.g=new re(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=xe(t.qa);Le(e,"RID","rpc"),Le(e,"SID",t.K),Le(e,"AID",t.T),Le(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&Le(e,"TO",t.ja),Le(e,"TYPE","xmlhttp"),Rn(t,e),t.m&&t.o&&ln(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=Me(xe(e)),n.m=null,n.P=!0,ce(n,t)}function Mn(t){null!=t.C&&(a.clearTimeout(t.C),t.C=null)}function Un(t,e){var n=null;if(t.g==e){Mn(t),Pn(t),t.g=null;var r=2}else{if(!be(t.h,e))return;n=e.D,Te(t.h,e),r=1}if(0!=t.G)if(e.o)if(1==r){n=e.m?e.m.length:0,e=Date.now()-e.F;var i=t.B;r=Vt(),bt(r,new Ht(r,n)),An(t)}else Nn(t);else if(i=e.s,3==i||0==i&&0<e.X||!(1==r&&kn(t,e)||2==r&&Dn(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:jn(t,5);break;case 4:jn(t,10);break;case 3:jn(t,6);break;default:jn(t,2)}}function Fn(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function jn(t,e){if(t.j.info("Error code "+e),2==e){var n=T(t.fb,t),r=t.Xa;const e=!r;r=new Re(r||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Ne(r,"https"),Me(r),e?Ye(r.toString(),n):Ze(r.toString(),n)}else zt(2);t.G=0,t.l&&t.l.sa(e),Vn(t),Cn(t)}function Vn(t){if(t.G=0,t.ka=[],t.l){const e=Ie(t.h);0==e.length&&0==t.i.length||(A(t.ka,e),A(t.ka,t.i),t.h.i.length=0,C(t.i),t.i.length=0),t.l.ra()}}function $n(t,e,n){var r=n instanceof Re?xe(n):new Re(n);if(""!=r.g)e&&(r.g=e+"."+r.g),De(r,r.s);else{var i=a.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Re(null);r&&Ne(s,r),e&&(s.g=e),i&&De(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.ya,n&&e&&Le(r,n,e),Le(r,"VER",t.la),Rn(t,r),r}function Bn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ca&&!t.pa?new hn(new rn({eb:n})):new hn(t.pa),e.Ha(t.J),e}function qn(){}function zn(){}function Hn(t,e){_t.call(this),this.g=new Tn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!O(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!O(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Gn(this)}function Kn(t){Mt.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Wn(){Ut.call(this),this.status=1}function Gn(t){this.g=t}t=hn.prototype,t.Ha=function(t){this.J=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zt.g(),this.v=this.o?Dt(this.o):Dt(Zt),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(s){return void pn(this,s)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=a.FormData&&t instanceof a.FormData,!(0<=Array.prototype.indexOf.call(fn,e,void 0))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yn(this),this.u=!0,this.g.send(t),this.u=!1}catch(s){pn(this,s)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,bt(this,"complete"),bt(this,"abort"),vn(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vn(this,!0)),hn.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?gn(this):this.bb())},t.bb=function(){gn(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Rt(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},t=Tn.prototype,t.la=8,t.G=1,t.connect=function(t,e,n,r){zt(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=$n(this,null,this.W),An(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new re(this,this.j,t);let s=this.o;if(this.S&&(s?(s=L(s),U(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=xn(this,i,e),n=xe(this.I),Le(n,"RID",t),Le(n,"CVER",22),this.D&&Le(n,"X-HTTP-Session-Id",this.D),Rn(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(un(s)))+"&"+e:this.m&&ln(n,this.m,s)),Ee(this.h,i),this.Ua&&Le(n,"TYPE","init"),this.P?(Le(n,"$req",e),Le(n,"SID","null"),i.T=!0,ae(i,n,null)):ae(i,n,e),this.G=2}}else 3==this.G&&(t?On(this,t):0==this.i.length||we(this.h)||On(this))},t.Fa=function(){if(this.u=null,Ln(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Kt(T(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,zt(10),Sn(this),Ln(this))},t.Za=function(){null!=this.C&&(this.C=null,Sn(this),Dn(this),zt(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),zt(2)):(this.j.info("Failed to ping google.com"),zt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},t=qn.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},zn.prototype.g=function(t,e){return new Hn(t,e)},S(Hn,_t),Hn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Hn.prototype.close=function(){In(this.g)},Hn.prototype.o=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.u&&(n={},n.__data__=Ot(t),t=n);e.i.push(new ve(e.Ya++,t)),3==e.G&&An(e)},Hn.prototype.N=function(){this.g.l=null,delete this.j,In(this.g),delete this.g,Hn.aa.N.call(this)},S(Kn,Mt),S(Wn,Ut),S(Gn,qn),Gn.prototype.ua=function(){bt(this.g,"a")},Gn.prototype.ta=function(t){bt(this.g,new Kn(t))},Gn.prototype.sa=function(t){bt(this.g,new Wn)},Gn.prototype.ra=function(){bt(this.g,"b")},zn.prototype.createWebChannel=zn.prototype.g,Hn.prototype.send=Hn.prototype.o,Hn.prototype.open=Hn.prototype.m,Hn.prototype.close=Hn.prototype.close,y=_.createWebChannelTransport=function(){return new zn},v=_.getStatEventTarget=function(){return Vt()},g=_.Event=Ft,m=_.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},te.NO_ERROR=0,te.TIMEOUT=8,te.HTTP_ERROR=6,p=_.ErrorCode=te,ee.COMPLETE="complete",f=_.EventType=ee,Pt.EventType=Lt,Lt.OPEN="a",Lt.CLOSE="b",Lt.ERROR="c",Lt.MESSAGE="d",_t.prototype.listen=_t.prototype.K,d=_.WebChannel=Pt,_.FetchXmlHttpFactory=rn,hn.prototype.listenOnce=hn.prototype.L,hn.prototype.getLastError=hn.prototype.Ka,hn.prototype.getLastErrorCode=hn.prototype.Ba,hn.prototype.getStatus=hn.prototype.Z,hn.prototype.getResponseJson=hn.prototype.Oa,hn.prototype.getResponseText=hn.prototype.oa,hn.prototype.send=hn.prototype.ea,hn.prototype.setWithCredentials=hn.prototype.Ha,h=_.XhrIo=hn}).apply("undefined"!==typeof w?w:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const b="@firebase/firestore",E="4.7.10";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}T.UNAUTHENTICATED=new T(null),T.GOOGLE_CREDENTIALS=new T("google-credentials-uid"),T.FIRST_PARTY=new T("first-party-uid"),T.MOCK_USER=new T("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let I="11.5.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=new a.Vy("@firebase/firestore");function C(){return S.logLevel}function A(t,...e){if(S.logLevel<=a.$b.DEBUG){const n=e.map(R);S.debug(`Firestore (${I}): ${t}`,...n)}}function k(t,...e){if(S.logLevel<=a.$b.ERROR){const n=e.map(R);S.error(`Firestore (${I}): ${t}`,...n)}}function O(t,...e){if(S.logLevel<=a.$b.WARN){const n=e.map(R);S.warn(`Firestore (${I}): ${t}`,...n)}}function R(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t="Unexpected state"){const e=`FIRESTORE (${I}) INTERNAL ASSERTION FAILED: `+t;throw k(e),new Error(e)}function N(t,e){t||x()}function D(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends c.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class F{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(T.UNAUTHENTICATED)))}shutdown(){}}class j{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class V{constructor(t){this.t=t,this.currentUser=T.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){N(void 0===this.o);let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new M;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new M,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new M)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(N("string"==typeof e.accessToken),new U(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return N(null===t||"string"==typeof t),new T(t)}}class ${constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=T.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class B{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new $(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(T.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class q{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class z{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,(0,s.xZ)(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){N(void 0===this.o);const n=t=>{null!=t.error&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,A("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.V)return Promise.resolve(new q(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(N("string"==typeof t.token),this.R=t.token,new q(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(){return new TextEncoder}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=H(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%62))}return n}}function G(t,e){return t<e?-1:t>e?1:0}function Q(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return G(r,i);{const s=K(),o=X(s.encode(J(t,n)),s.encode(J(e,n)));return 0!==o?o:G(r,i)}}n+=r>65535?2:1}return G(t.length,e.length)}function J(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function X(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return G(t[n],e[n]);return G(t.length,e.length)}function Y(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z=-62135596800,tt=1e6;class et{static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*tt);return new et(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Z)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/tt}_compareTo(t){return this.seconds===t.seconds?G(this.nanoseconds,t.nanoseconds):G(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Z;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{static fromTimestamp(t){return new nt(t)}static min(){return new nt(new et(0,0))}static max(){return new nt(new et(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="__name__";class it{constructor(t,e,n){void 0===e?e=0:e>t.length&&x(),void 0===n?n=t.length-e:n>t.length-e&&x(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===it.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof it?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=it.compareSegments(t.get(r),e.get(r));if(0!==n)return n}return G(t.length,e.length)}static compareSegments(t,e){const n=it.isNumericId(t),r=it.isNumericId(e);return n&&!r?-1:!n&&r?1:n&&r?it.extractNumericId(t).compare(it.extractNumericId(e)):Q(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return r.fromString(t.substring(4,t.length-2))}}class st extends it{construct(t,e,n){return new st(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new L(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new st(e)}static emptyPath(){return new st([])}}const ot=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends it{construct(t,e,n){return new at(t,e,n)}static isValidIdentifier(t){return ot.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===rt}static keyField(){return new at([rt])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new L(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new L(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new L(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new L(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new at(e)}static emptyPath(){return new at([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.path=t}static fromPath(t){return new ct(st.fromString(t))}static fromName(t){return new ct(st.fromString(t).popFirst(5))}static empty(){return new ct(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===st.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return st.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ct(new st(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=-1;class lt{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}lt.UNKNOWN_ID=-1;function ht(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=nt.fromTimestamp(1e9===r?new et(n+1,0):new et(n,r));return new ft(i,ct.empty(),e)}function dt(t){return new ft(t.readTime,t.key,ut)}class ft{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ft(nt.min(),ct.empty(),ut)}static max(){return new ft(nt.max(),ct.empty(),ut)}}function pt(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=ct.comparator(t.documentKey,e.documentKey),0!==n?n:G(t.largestBatchId,e.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const mt="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gt{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(t){if(t.code!==P.FAILED_PRECONDITION||t.message!==mt)throw t;A("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new yt(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof yt?e:yt.resolve(e)}catch(t){return yt.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):yt.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):yt.reject(e)}static resolve(t){return new yt(((e,n)=>{e(t)}))}static reject(t){return new yt(((e,n)=>{n(t)}))}static waitFor(t){return new yt(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=yt.resolve(!1);for(const n of t)e=e.next((t=>t?yt.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new yt(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new yt(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _t(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.oe(t),this._e=t=>e.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}bt.ae=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=-1;function Tt(t){return null==t}function It(t){return 0===t&&1/t==-1/0}function St(t){return"number"==typeof t&&Number.isInteger(t)&&!It(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="";function At(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ot(e)),e=kt(t.get(n),e);return Ot(e)}function kt(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case Ct:n+="";break;default:n+=e}}return n}function Ot(t){return t+Ct+""}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rt="remoteDocuments",xt="owner",Nt="mutationQueues",Dt="mutations";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="documentMutations",Lt="remoteDocumentsV14",Mt="remoteDocumentGlobal",Ut="targets",Ft="targetDocuments",jt="targetGlobal",Vt="collectionParents",$t="clientMetadata",Bt="bundles",qt="namedQueries",zt="indexConfiguration",Ht="indexState",Kt="indexEntries",Wt="documentOverlays",Gt="globals",Qt=[Nt,Dt,Pt,Rt,Ut,xt,jt,Ft,$t,Mt,Vt,Bt,qt],Jt=[Nt,Dt,Pt,Lt,Ut,xt,jt,Ft,$t,Mt,Vt,Bt,qt,Wt],Xt=Jt,Yt=[...Xt,zt,Ht,Kt];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zt(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function te(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ee(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t,e){this.comparator=t,this.root=e||ie.EMPTY}insert(t,e){return new ne(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ie.BLACK,null,null))}remove(t){return new ne(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ie.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new re(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new re(this.root,t,this.comparator,!1)}getReverseIterator(){return new re(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new re(this.root,t,this.comparator,!0)}}class re{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ie{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:ie.RED,this.left=null!=r?r:ie.EMPTY,this.right=null!=i?i:ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new ie(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ie.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return ie.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x();if(this.right.isRed())throw x();const t=this.left.check();if(t!==this.right.check())throw x();return t+(this.isRed()?0:1)}}ie.EMPTY=null,ie.RED=!0,ie.BLACK=!1,ie.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ie(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class se{constructor(t){this.comparator=t,this.data=new ne(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new oe(this.data.getIterator())}getIteratorFrom(t){return new oe(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof se))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new se(this.comparator);return e.data=t,e}}class oe{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ae{constructor(t){this.fields=t,t.sort(at.comparator)}static empty(){return new ae([])}unionWith(t){let e=new se(at.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new ae(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Y(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new ce("Invalid base64 string: "+t):t}}(t);return new ue(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ue(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return G(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ue.EMPTY_BYTE_STRING=new ue("");const le=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function he(t){if(N(!!t),"string"==typeof t){let e=0;const n=le.exec(t);if(N(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:de(t.seconds),nanos:de(t.nanos)}}function de(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function fe(t){return"string"==typeof t?ue.fromBase64String(t):ue.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="server_timestamp",me="__type__",ge="__previous_value__",ve="__local_write_time__";function ye(t){var e,n;return(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{})[me])||void 0===n?void 0:n.stringValue)===pe}function we(t){const e=t.mapValue.fields[ge];return ye(e)?we(e):e}function _e(t){const e=he(t.mapValue.fields[ve].timestampValue);return new et(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t,e,n,r,i,s,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}const Ee="(default)";class Te{constructor(t,e){this.projectId=t,this.database=e||Ee}static empty(){return new Te("","")}get isDefaultDatabase(){return this.database===Ee}isEqual(t){return t instanceof Te&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="__type__",Se="__max__",Ce={mapValue:{fields:{__type__:{stringValue:Se}}}},Ae="__vector__",ke="value";function Oe(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ye(t)?4:Ke(t)?9007199254740991:ze(t)?10:11:x()}function Re(t,e){if(t===e)return!0;const n=Oe(t);if(n!==Oe(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _e(t).isEqual(_e(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=he(t.timestampValue),r=he(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return fe(t.bytesValue).isEqual(fe(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return de(t.geoPointValue.latitude)===de(e.geoPointValue.latitude)&&de(t.geoPointValue.longitude)===de(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return de(t.integerValue)===de(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=de(t.doubleValue),r=de(e.doubleValue);return n===r?It(n)===It(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Y(t.arrayValue.values||[],e.arrayValue.values||[],Re);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Zt(n)!==Zt(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Re(n[i],r[i])))return!1;return!0}(t,e);default:return x()}}function xe(t,e){return void 0!==(t.values||[]).find((t=>Re(t,e)))}function Ne(t,e){if(t===e)return 0;const n=Oe(t),r=Oe(e);if(n!==r)return G(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return G(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=de(t.integerValue||t.doubleValue),r=de(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return De(t.timestampValue,e.timestampValue);case 4:return De(_e(t),_e(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(t,e){const n=fe(t),r=fe(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=G(n[i],r[i]);if(0!==t)return t}return G(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=G(de(t.latitude),de(e.latitude));return 0!==n?n:G(de(t.longitude),de(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Pe(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,r,i,s;const o=t.fields||{},a=e.fields||{},c=null===(n=o[ke])||void 0===n?void 0:n.arrayValue,u=null===(r=a[ke])||void 0===r?void 0:r.arrayValue,l=G((null===(i=null==c?void 0:c.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==l?l:Pe(c,u)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===Ce.mapValue&&e===Ce.mapValue)return 0;if(t===Ce.mapValue)return 1;if(e===Ce.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=Q(r[o],s[o]);if(0!==t)return t;const e=Ne(n[r[o]],i[s[o]]);if(0!==e)return e}return G(r.length,s.length)}(t.mapValue,e.mapValue);default:throw x()}}function De(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return G(t,e);const n=he(t),r=he(e),i=G(n.seconds,r.seconds);return 0!==i?i:G(n.nanos,r.nanos)}function Pe(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Ne(n[i],r[i]);if(t)return t}return G(n.length,r.length)}function Le(t){return Me(t)}function Me(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=he(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return fe(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return ct.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Me(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Me(t.fields[i])}`;return n+"}"}(t.mapValue):x()}function Ue(t){switch(Oe(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=we(t);return e?16+Ue(e):16;case 5:return 2*t.stringValue.length;case 6:return fe(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(t){return(t.values||[]).reduce(((t,e)=>t+Ue(e)),0)}(t.arrayValue);case 10:case 11:return function(t){let e=0;return te(t.fields,((t,n)=>{e+=t.length+Ue(n)})),e}(t.mapValue);default:throw x()}}function Fe(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function je(t){return!!t&&"integerValue"in t}function Ve(t){return!!t&&"arrayValue"in t}function $e(t){return!!t&&"nullValue"in t}function Be(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qe(t){return!!t&&"mapValue"in t}function ze(t){var e,n;return(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{})[Ie])||void 0===n?void 0:n.stringValue)===Ae}function He(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return te(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=He(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=He(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ke(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Se}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We{constructor(t){this.value=t}static empty(){return new We({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!qe(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=He(e)}setAll(t){let e=at.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=He(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());qe(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Re(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];qe(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){te(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new We(He(this.value))}}function Ge(t){const e=[];return te(t.fields,((t,n)=>{const r=new at([t]);if(qe(n)){const t=Ge(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new ae(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Qe{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new Qe(t,0,nt.min(),nt.min(),nt.min(),We.empty(),0)}static newFoundDocument(t,e,n,r){return new Qe(t,1,e,nt.min(),n,r,0)}static newNoDocument(t,e){return new Qe(t,2,e,nt.min(),nt.min(),We.empty(),0)}static newUnknownDocument(t,e){return new Qe(t,3,e,nt.min(),nt.min(),We.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(nt.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=We.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=We.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=nt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Qe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t,e){this.position=t,this.inclusive=e}}function Xe(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?ct.comparator(ct.fromName(o.referenceValue),n.key):Ne(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ye(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Re(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(t,e="asc"){this.field=t,this.dir=e}}function tn(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{}class nn extends en{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new hn(t,e,n):"array-contains"===e?new mn(t,n):"in"===e?new gn(t,n):"not-in"===e?new vn(t,n):"array-contains-any"===e?new yn(t,n):new nn(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new dn(t,n):new fn(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Ne(e,this.value)):null!==e&&Oe(this.value)===Oe(e)&&this.matchesComparison(Ne(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rn extends en{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new rn(t,e)}matches(t){return sn(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function sn(t){return"and"===t.op}function on(t){return an(t)&&sn(t)}function an(t){for(const e of t.filters)if(e instanceof rn)return!1;return!0}function cn(t){if(t instanceof nn)return t.field.canonicalString()+t.op.toString()+Le(t.value);if(on(t))return t.filters.map((t=>cn(t))).join(",");{const e=t.filters.map((t=>cn(t))).join(",");return`${t.op}(${e})`}}function un(t,e){return t instanceof nn?function(t,e){return e instanceof nn&&t.op===e.op&&t.field.isEqual(e.field)&&Re(t.value,e.value)}(t,e):t instanceof rn?function(t,e){return e instanceof rn&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&un(n,e.filters[r])),!0)}(t,e):void x()}function ln(t){return t instanceof nn?function(t){return`${t.field.canonicalString()} ${t.op} ${Le(t.value)}`}(t):t instanceof rn?function(t){return t.op.toString()+" {"+t.getFilters().map(ln).join(" ,")+"}"}(t):"Filter"}class hn extends nn{constructor(t,e,n){super(t,e,n),this.key=ct.fromName(n.referenceValue)}matches(t){const e=ct.comparator(t.key,this.key);return this.matchesComparison(e)}}class dn extends nn{constructor(t,e){super(t,"in",e),this.keys=pn("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class fn extends nn{constructor(t,e){super(t,"not-in",e),this.keys=pn("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function pn(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ct.fromName(t.referenceValue)))}class mn extends nn{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ve(e)&&xe(e.arrayValue,this.value)}}class gn extends nn{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&xe(this.value.arrayValue,e)}}class vn extends nn{constructor(t,e){super(t,"not-in",e)}matches(t){if(xe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!xe(this.value.arrayValue,e)}}class yn extends nn{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ve(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>xe(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.le=null}}function _n(t,e=null,n=[],r=[],i=null,s=null,o=null){return new wn(t,e,n,r,i,s,o)}function bn(t){const e=D(t);if(null===e.le){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>cn(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Tt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Le(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Le(t))).join(",")),e.le=t}return e.le}function En(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!tn(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!un(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ye(t.startAt,e.startAt)&&Ye(t.endAt,e.endAt)}function Tn(t){return ct.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class In{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Sn(t,e,n,r,i,s,o,a){return new In(t,e,n,r,i,s,o,a)}function Cn(t){return new In(t)}function An(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function kn(t){return null!==t.collectionGroup}function On(t){const e=D(t);if(null===e.he){e.he=[];const t=new Set;for(const i of e.explicitOrderBy)e.he.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new se(at.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);r.forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.he.push(new Ze(r,n))})),t.has(at.keyField().canonicalString())||e.he.push(new Ze(at.keyField(),n))}return e.he}function Rn(t){const e=D(t);return e.Pe||(e.Pe=xn(e,On(t))),e.Pe}function xn(t,e){if("F"===t.limitType)return _n(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new Ze(t.field,e)}));const n=t.endAt?new Je(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Je(t.startAt.position,t.startAt.inclusive):null;return _n(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Nn(t,e){const n=t.filters.concat([e]);return new In(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Dn(t,e,n){return new In(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pn(t,e){return En(Rn(t),Rn(e))&&t.limitType===e.limitType}function Ln(t){return`${bn(Rn(t))}|lt:${t.limitType}`}function Mn(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>ln(t))).join(", ")}]`),Tt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Le(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Le(t))).join(",")),`Target(${e})`}(Rn(t))}; limitType=${t.limitType})`}function Un(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ct.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of On(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Xe(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,On(t),e))&&!(t.endAt&&!function(t,e,n){const r=Xe(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,On(t),e))}(t,e)}function Fn(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jn(t){return(e,n)=>{let r=!1;for(const i of On(t)){const t=Vn(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Vn(t,e,n){const r=t.field.isKeyField()?ct.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Ne(r,i):x()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return x()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){te(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return ee(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new ne(ct.comparator);function qn(){return Bn}const zn=new ne(ct.comparator);function Hn(...t){let e=zn;for(const n of t)e=e.insert(n.key,n);return e}function Kn(t){let e=zn;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Wn(){return Qn()}function Gn(){return Qn()}function Qn(){return new $n((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Jn=new ne(ct.comparator),Xn=new se(ct.comparator);function Yn(...t){let e=Xn;for(const n of t)e=e.add(n);return e}const Zn=new se(G);function tr(){return Zn}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:It(e)?"-0":e}}function nr(t){return{integerValue:""+t}}function rr(t,e){return St(e)?nr(e):er(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this._=void 0}}function sr(t,e,n){return t instanceof cr?function(t,e){const n={fields:{[me]:{stringValue:pe},[ve]:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&ye(e)&&(e=we(e)),e&&(n.fields[ge]=e),{mapValue:n}}(n,e):t instanceof ur?lr(t,e):t instanceof hr?dr(t,e):function(t,e){const n=ar(t,e),r=pr(n)+pr(t.Ie);return je(n)&&je(t.Ie)?nr(r):er(t.serializer,r)}(t,e)}function or(t,e,n){return t instanceof ur?lr(t,e):t instanceof hr?dr(t,e):n}function ar(t,e){return t instanceof fr?function(t){return je(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class cr extends ir{}class ur extends ir{constructor(t){super(),this.elements=t}}function lr(t,e){const n=mr(e);for(const r of t.elements)n.some((t=>Re(t,r)))||n.push(r);return{arrayValue:{values:n}}}class hr extends ir{constructor(t){super(),this.elements=t}}function dr(t,e){let n=mr(e);for(const r of t.elements)n=n.filter((t=>!Re(t,r)));return{arrayValue:{values:n}}}class fr extends ir{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function pr(t){return de(t.integerValue||t.doubleValue)}function mr(t){return Ve(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,e){this.field=t,this.transform=e}}function vr(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof ur&&e instanceof ur||t instanceof hr&&e instanceof hr?Y(t.elements,e.elements,Re):t instanceof fr&&e instanceof fr?Re(t.Ie,e.Ie):t instanceof cr&&e instanceof cr}(t.transform,e.transform)}class yr{constructor(t,e){this.version=t,this.transformResults=e}}class wr{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new wr}static exists(t){return new wr(void 0,t)}static updateTime(t){return new wr(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function _r(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class br{}function Er(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Nr(t.key,wr.none()):new Ar(t.key,t.data,wr.none());{const n=t.data,r=We.empty();let i=new se(at.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new kr(t.key,r,new ae(i.toArray()),wr.none())}}function Tr(t,e,n){t instanceof Ar?function(t,e,n){const r=t.value.clone(),i=Rr(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof kr?function(t,e,n){if(!_r(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Rr(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Or(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Ir(t,e,n,r){return t instanceof Ar?function(t,e,n,r){if(!_r(t.precondition,e))return n;const i=t.value.clone(),s=xr(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof kr?function(t,e,n,r){if(!_r(t.precondition,e))return n;const i=xr(t.fieldTransforms,r,e),s=e.data;return s.setAll(Or(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return _r(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Sr(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=ar(r.transform,t||null);null!=i&&(null===n&&(n=We.empty()),n.set(r.field,i))}return n||null}function Cr(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Y(t,e,((t,e)=>vr(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ar extends br{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class kr extends br{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Or(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Rr(t,e,n){const r=new Map;N(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,or(o,a,n[i]))}return r}function xr(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,sr(t,s,e))}return r}class Nr extends br{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Dr extends br{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Tr(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ir(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ir(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Gn();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=Er(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(nt.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Yn())}isEqual(t){return this.batchId===t.batchId&&Y(this.mutations,t.mutations,((t,e)=>Cr(t,e)))&&Y(this.baseMutations,t.baseMutations,((t,e)=>Cr(t,e)))}}class Lr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){N(t.mutations.length===n.length);let r=function(){return Jn}();const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Lr(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ur{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fr,jr;function Vr(t){switch(t){case P.OK:return x();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return x()}}function $r(t){if(void 0===t)return k("GRPC error has no .code"),P.UNKNOWN;switch(t){case Fr.OK:return P.OK;case Fr.CANCELLED:return P.CANCELLED;case Fr.UNKNOWN:return P.UNKNOWN;case Fr.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Fr.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Fr.INTERNAL:return P.INTERNAL;case Fr.UNAVAILABLE:return P.UNAVAILABLE;case Fr.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Fr.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Fr.NOT_FOUND:return P.NOT_FOUND;case Fr.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Fr.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Fr.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Fr.ABORTED:return P.ABORTED;case Fr.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Fr.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Fr.DATA_LOSS:return P.DATA_LOSS;default:return x()}}(jr=Fr||(Fr={}))[jr.OK=0]="OK",jr[jr.CANCELLED=1]="CANCELLED",jr[jr.UNKNOWN=2]="UNKNOWN",jr[jr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",jr[jr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",jr[jr.NOT_FOUND=5]="NOT_FOUND",jr[jr.ALREADY_EXISTS=6]="ALREADY_EXISTS",jr[jr.PERMISSION_DENIED=7]="PERMISSION_DENIED",jr[jr.UNAUTHENTICATED=16]="UNAUTHENTICATED",jr[jr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",jr[jr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",jr[jr.ABORTED=10]="ABORTED",jr[jr.OUT_OF_RANGE=11]="OUT_OF_RANGE",jr[jr.UNIMPLEMENTED=12]="UNIMPLEMENTED",jr[jr.INTERNAL=13]="INTERNAL",jr[jr.UNAVAILABLE=14]="UNAVAILABLE",jr[jr.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Br=null;
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new r([4294967295,4294967295],0);function zr(t){const e=K().encode(t),n=new i;return n.update(e),new Uint8Array(n.digest())}function Hr(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new r([n,i],0),new r([s,o],0)]}class Kr{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Wr(`Invalid padding: ${e}`);if(n<0)throw new Wr(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Wr(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Wr(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=r.fromNumber(this.Ee)}Ae(t,e,n){let i=t.add(e.multiply(r.fromNumber(n)));return 1===i.compare(qr)&&(i=new r([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Ee)return!1;const e=zr(t),[n,r]=Hr(e);for(let i=0;i<this.hashCount;i++){const t=this.Ae(n,r,i);if(!this.Re(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new Kr(i,r,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.Ee)return;const e=zr(t),[n,r]=Hr(e);for(let i=0;i<this.hashCount;i++){const t=this.Ae(n,r,i);this.Ve(t)}}Ve(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Wr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,Qr.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Gr(nt.min(),r,new ne(G),qn(),Yn())}}class Qr{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Qr(n,e,Yn(),Yn(),Yn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t,e,n,r){this.me=t,this.removedTargetIds=e,this.key=n,this.fe=r}}class Xr{constructor(t,e){this.targetId=t,this.ge=e}}class Yr{constructor(t,e,n=ue.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Zr{constructor(){this.pe=0,this.ye=ni(),this.we=ue.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return 0!==this.pe}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=Yn(),e=Yn(),n=Yn();return this.ye.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:x()}})),new Qr(this.we,this.Se,t,e,n)}Me(){this.be=!1,this.ye=ni()}xe(t,e){this.be=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,N(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class ti{constructor(t){this.ke=t,this.qe=new Map,this.Qe=qn(),this.$e=ei(),this.Ue=ei(),this.Ke=new ne(G)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,(e=>{const n=this.He(e);switch(t.state){case 0:this.Je(e)&&n.Ce(t.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(t.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(e);break;case 3:this.Je(e)&&(n.Le(),n.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),n.Ce(t.resumeToken));break;default:x()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach(((t,n)=>{this.Je(n)&&e(n)}))}Ze(t){const e=t.targetId,n=t.ge.count,r=this.Xe(e);if(r){const i=r.target;if(Tn(i))if(0===n){const t=new ct(i.path);this.ze(e,t,Qe.newNoDocument(t,nt.min()))}else N(1===n);else{const r=this.et(e);if(r!==n){const n=this.tt(t),i=n?this.nt(n,t,r):1;if(0!==i){this.Ye(e);const t=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,t)}null==Br||Br.rt(function(t,e,n,r,i){var s,o,a,c,u,l;const h={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},d=e.unchangedNames;return d&&(h.bloomFilter={applied:0===i,hashCount:null!==(s=null==d?void 0:d.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(c=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(l=null===(u=null==d?void 0:d.bits)||void 0===u?void 0:u.padding)&&void 0!==l?l:0,mightContain:t=>{var e;return null!==(e=null==r?void 0:r.mightContain(t))&&void 0!==e&&e}}),h}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,t.ge,this.ke.it(),n,i))}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=e;let s,o;try{s=fe(n).toUint8Array()}catch(t){if(t instanceof ce)return O("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new Kr(s,r,i)}catch(t){return O(t instanceof Wr?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.Ee?null:o}nt(t,e,n){return e.ge.count===n-this.st(t,e.targetId)?0:2}st(t,e){const n=this.ke.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.ke.it(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.mightContain(s)||(this.ze(e,n,null),r++)})),r}ot(t){const e=new Map;this.qe.forEach(((n,r)=>{const i=this.Xe(r);if(i){if(n.current&&Tn(i.target)){const e=new ct(i.target.path);this._t(e).has(r)||this.ut(r,e)||this.ze(r,e,Qe.newNoDocument(e,t))}n.ve&&(e.set(r,n.Fe()),n.Me())}}));let n=Yn();this.Ue.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Xe(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.Qe.forEach(((e,n)=>n.setReadTime(t)));const r=new Gr(t,e,this.Ke,this.Qe,n);return this.Qe=qn(),this.$e=ei(),this.Ue=ei(),this.Ke=new ne(G),r}Ge(t,e){if(!this.Je(t))return;const n=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,n),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}ze(t,e,n){if(!this.Je(t))return;const r=this.He(t);this.ut(t,e)?r.xe(e,1):r.Oe(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),this.Ue=this.Ue.insert(e,this.ct(e).add(t)),n&&(this.Qe=this.Qe.insert(e,n))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new Zr,this.qe.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new se(G),this.Ue=this.Ue.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new se(G),this.$e=this.$e.insert(t,e)),e}Je(t){const e=null!==this.Xe(t);return e||A("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new Zr),this.ke.getRemoteKeysForTarget(t).forEach((e=>{this.ze(t,e,null)}))}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function ei(){return new ne(ct.comparator)}function ni(){return new ne(ct.comparator)}const ri=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),ii=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),si=(()=>{const t={and:"AND",or:"OR"};return t})();class oi{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ai(t,e){return t.useProto3Json||Tt(e)?e:{value:e}}function ci(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ui(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function li(t,e){return ci(t,e.toTimestamp())}function hi(t){return N(!!t),nt.fromTimestamp(function(t){const e=he(t);return new et(e.seconds,e.nanos)}(t))}function di(t,e){return fi(t,e).canonicalString()}function fi(t,e){const n=function(t){return new st(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function pi(t){const e=st.fromString(t);return N(Ui(e)),e}function mi(t,e){return di(t.databaseId,e.path)}function gi(t,e){const n=pi(e);if(n.get(1)!==t.databaseId.projectId)throw new L(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ct(_i(n))}function vi(t,e){return di(t.databaseId,e)}function yi(t){const e=pi(t);return 4===e.length?st.emptyPath():_i(e)}function wi(t){return new st(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _i(t){return N(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function bi(t,e,n){return{name:mi(t,e),fields:n.value.mapValue.fields}}function Ei(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:x()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(N(void 0===e||"string"==typeof e),ue.fromBase64String(e||"")):(N(void 0===e||e instanceof Buffer||e instanceof Uint8Array),ue.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?P.UNKNOWN:$r(t.code);return new L(e,t.message||"")}(o);n=new Yr(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=gi(t,r.document.name),s=hi(r.document.updateTime),o=r.document.createTime?hi(r.document.createTime):nt.min(),a=new We({mapValue:{fields:r.document.fields}}),c=Qe.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Jr(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=gi(t,r.document),s=r.readTime?hi(r.readTime):nt.min(),o=Qe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Jr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=gi(t,r.document),s=r.removedTargetIds||[];n=new Jr([],s,i,null)}else{if(!("filter"in e))return x();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new Ur(r,i),o=t.targetId;n=new Xr(o,s)}}return n}function Ti(t,e){let n;if(e instanceof Ar)n={update:bi(t,e.key,e.value)};else if(e instanceof Nr)n={delete:mi(t,e.key)};else if(e instanceof kr)n={update:bi(t,e.key,e.data),updateMask:Mi(e.fieldMask)};else{if(!(e instanceof Dr))return x();n={verify:mi(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof cr)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ur)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof hr)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof fr)return{fieldPath:e.field.canonicalString(),increment:n.Ie};throw x()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:li(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:x()}(t,e.precondition)),n}function Ii(t,e){return t&&t.length>0?(N(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?hi(t.updateTime):hi(e);return n.isEqual(nt.min())&&(n=hi(e)),new yr(n,t.transformResults||[])}(t,e)))):[]}function Si(t,e){return{documents:[vi(t,e.path)]}}function Ci(t,e){const n={structuredQuery:{}},r=e.path;let i;null!==e.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=vi(t,i);const s=function(t){if(0!==t.length)return Li(rn.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Di(t.field),direction:Ri(t.dir)}}(t)))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ai(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{ht:n,parent:i}}function Ai(t){let e=yi(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){N(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Oi(t);return e instanceof rn&&on(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new Ze(Pi(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Tt(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Je(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Je(n,e)}(n.endAt)),Sn(e,i,o,s,a,"F",c,u)}function ki(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function Oi(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Pi(t.unaryFilter.field);return nn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Pi(t.unaryFilter.field);return nn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Pi(t.unaryFilter.field);return nn.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Pi(t.unaryFilter.field);return nn.create(i,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(t):void 0!==t.fieldFilter?function(t){return nn.create(Pi(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return rn.create(t.compositeFilter.filters.map((t=>Oi(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return x()}}(t.compositeFilter.op))}(t):x()}function Ri(t){return ri[t]}function xi(t){return ii[t]}function Ni(t){return si[t]}function Di(t){return{fieldPath:t.canonicalString()}}function Pi(t){return at.fromServerFormat(t.fieldPath)}function Li(t){return t instanceof nn?function(t){if("=="===t.op){if(Be(t.value))return{unaryFilter:{field:Di(t.field),op:"IS_NAN"}};if($e(t.value))return{unaryFilter:{field:Di(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Be(t.value))return{unaryFilter:{field:Di(t.field),op:"IS_NOT_NAN"}};if($e(t.value))return{unaryFilter:{field:Di(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Di(t.field),op:xi(t.op),value:t.value}}}(t):t instanceof rn?function(t){const e=t.getFilters().map((t=>Li(t)));return 1===e.length?e[0]:{compositeFilter:{op:Ni(t.op),filters:e}}}(t):x()}function Mi(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ui(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t,e,n,r,i=nt.min(),s=nt.min(),o=ue.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Fi(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Fi(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t){this.Tt=t}}function Vi(t){const e=Ai({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Dn(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(){}At(t,e){this.Rt(t,e),e.Vt()}Rt(t,e){if("nullValue"in t)this.ft(e,5);else if("booleanValue"in t)this.ft(e,10),e.gt(t.booleanValue?1:0);else if("integerValue"in t)this.ft(e,15),e.gt(de(t.integerValue));else if("doubleValue"in t){const n=de(t.doubleValue);isNaN(n)?this.ft(e,13):(this.ft(e,15),It(n)?e.gt(0):e.gt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.ft(e,20),"string"==typeof n&&(n=he(n)),e.yt(`${n.seconds||""}`),e.gt(n.nanos||0)}else if("stringValue"in t)this.wt(t.stringValue,e),this.St(e);else if("bytesValue"in t)this.ft(e,30),e.bt(fe(t.bytesValue)),this.St(e);else if("referenceValue"in t)this.Dt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ft(e,45),e.gt(n.latitude||0),e.gt(n.longitude||0)}else"mapValue"in t?Ke(t)?this.ft(e,Number.MAX_SAFE_INTEGER):ze(t)?this.vt(t.mapValue,e):(this.Ct(t.mapValue,e),this.St(e)):"arrayValue"in t?(this.Ft(t.arrayValue,e),this.St(e)):x()}wt(t,e){this.ft(e,25),this.Mt(t,e)}Mt(t,e){e.yt(t)}Ct(t,e){const n=t.fields||{};this.ft(e,55);for(const r of Object.keys(n))this.wt(r,e),this.Rt(n[r],e)}vt(t,e){var n,r;const i=t.fields||{};this.ft(e,53);const s=ke,o=(null===(r=null===(n=i[s].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.ft(e,15),e.gt(de(o)),this.wt(s,e),this.Rt(i[s],e)}Ft(t,e){const n=t.values||[];this.ft(e,50);for(const r of n)this.Rt(r,e)}Dt(t,e){this.ft(e,37),ct.fromName(t).path.forEach((t=>{this.ft(e,60),this.Mt(t,e)}))}ft(t,e){t.gt(e)}St(t){t.gt(2)}}$i.xt=new $i;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bi{constructor(){this.Tn=new qi}addToCollectionParentIndex(t,e){return this.Tn.add(e),yt.resolve()}getCollectionParents(t,e){return yt.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return yt.resolve()}deleteFieldIndex(t,e){return yt.resolve()}deleteAllFieldIndexes(t){return yt.resolve()}createTargetIndexes(t,e){return yt.resolve()}getDocumentsMatchingTarget(t,e){return yt.resolve(null)}getIndexType(t,e){return yt.resolve(0)}getFieldIndexes(t,e){return yt.resolve([])}getNextCollectionGroupToUpdate(t){return yt.resolve(null)}getMinOffset(t,e){return yt.resolve(ft.min())}getMinOffsetFromCollectionGroup(t,e){return yt.resolve(ft.min())}updateCollectionGroup(t,e,n){return yt.resolve()}updateIndexEntries(t,e){return yt.resolve()}}class qi{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new se(st.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new se(st.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zi={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Hi=41943040;class Ki{static withCacheSize(t){return new Ki(t,Ki.DEFAULT_COLLECTION_PERCENTILE,Ki.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ki.DEFAULT_COLLECTION_PERCENTILE=10,Ki.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ki.DEFAULT=new Ki(Hi,Ki.DEFAULT_COLLECTION_PERCENTILE,Ki.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ki.DISABLED=new Ki(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wi{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new Wi(0)}static Kn(){return new Wi(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gi="LruGarbageCollector",Qi=1048576;function Ji([t,e],[n,r]){const i=G(t,n);return 0===i?G(e,r):i}class Xi{constructor(t){this.Hn=t,this.buffer=new se(Ji),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();Ji(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Yi{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Xn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return null!==this.Xn}er(t){A(Gi,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){_t(t)?A(Gi,"Ignoring IndexedDB error during garbage collection: ",t):await vt(t)}await this.er(3e5)}))}}class Zi{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next((t=>Math.floor(e/100*t)))}nthSequenceNumber(t,e){if(0===e)return yt.resolve(bt.ae);const n=new Xi(e);return this.tr.forEachTarget(t,(t=>n.Zn(t.sequenceNumber))).next((()=>this.tr.rr(t,(t=>n.Zn(t))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.tr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(A("LruGarbageCollector","Garbage collection skipped; disabled"),yt.resolve(zi)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(A("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zi):this.ir(t,e)))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let n,r,i,s,o,c,u;const l=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((e=>(e>this.params.maximumSequenceNumbersToCollect?(A("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,s=Date.now(),this.nthSequenceNumber(t,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(t,n,e)))).next((e=>(i=e,c=Date.now(),this.removeOrphanedDocuments(t,n)))).next((t=>(u=Date.now(),C()<=a.$b.DEBUG&&A("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(c-o)+"ms\n"+`\tRemoved ${t} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),yt.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:t}))))}}function ts(t,e){return new Zi(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class es{constructor(){this.changes=new $n((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Qe.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?yt.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ns{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Ir(n.mutation,t,ae.empty(),et.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Yn()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Yn()){const r=Wn();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Hn();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Wn();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Yn())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=qn();const s=Qn(),o=function(){return Qn()}();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof kr)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Ir(o.mutation,e,o.mutation.getFieldMask(),et.now())):s.set(e.key,ae.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new ns(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Qn();let r=new ne(((t,e)=>t-e)),i=Yn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||ae.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||Yn()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Gn();c.forEach((t=>{if(!i.has(t)){const r=Er(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return yt.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return function(t){return ct.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):kn(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):yt.resolve(Wn());let o=ut,a=i;return s.next((e=>yt.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?yt.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Yn()))).next((t=>({batchId:o,changes:Kn(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ct(e)).next((t=>{let e=Hn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const i=e.collectionGroup;let s=Hn();return this.indexManager.getCollectionParents(t,i).next((o=>yt.forEach(o,(o=>{const a=function(t,e){return new In(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(i));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,r)))).next((t=>{i.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,Qe.newInvalidDocument(r)))}));let n=Hn();return t.forEach(((t,r)=>{const s=i.get(t);void 0!==s&&Ir(s.mutation,r,ae.empty(),et.now()),Un(e,r)&&(n=n.insert(t,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return yt.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:hi(t.createTime)}}(e)),yt.resolve()}getNamedQuery(t,e){return yt.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(t){return{name:t.name,query:Vi(t.bundledQuery),readTime:hi(t.readTime)}}(e)),yt.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.overlays=new ne(ct.comparator),this.Rr=new Map}getOverlay(t,e){return yt.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Wn();return yt.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.Et(t,e,r)})),yt.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Rr.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Rr.delete(n)),yt.resolve()}getOverlaysForCollection(t,e,n){const r=Wn(),i=e.length+1,s=new ct(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return yt.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new ne(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Wn(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Wn(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return yt.resolve(o)}Et(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Rr.get(r.largestBatchId).delete(n.key);this.Rr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Mr(e,n));let i=this.Rr.get(e);void 0===i&&(i=Yn(),this.Rr.set(e,i)),this.Rr.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.sessionToken=ue.EMPTY_BYTE_STRING}getSessionToken(t){return yt.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,yt.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.Vr=new se(cs.mr),this.gr=new se(cs.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const n=new cs(t,e);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.wr(new cs(t,e))}Sr(t,e){t.forEach((t=>this.removeReference(t,e)))}br(t){const e=new ct(new st([])),n=new cs(e,t),r=new cs(e,t+1),i=[];return this.gr.forEachInRange([n,r],(t=>{this.wr(t),i.push(t.key)})),i}Dr(){this.Vr.forEach((t=>this.wr(t)))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new ct(new st([])),n=new cs(e,t),r=new cs(e,t+1);let i=Yn();return this.gr.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new cs(t,0),n=this.Vr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class cs{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return ct.comparator(t.key,e.key)||G(t.Cr,e.Cr)}static pr(t,e){return G(t.Cr,e.Cr)||ct.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new se(cs.mr)}checkEmpty(t){return yt.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Pr(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.Mr=this.Mr.add(new cs(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return yt.resolve(s)}lookupMutationBatch(t,e){return yt.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Nr(n),i=r<0?0:r;return yt.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return yt.resolve(0===this.mutationQueue.length?Et:this.Fr-1)}getAllMutationBatches(t){return yt.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new cs(e,0),r=new cs(e,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([n,r],(t=>{const e=this.Or(t.Cr);i.push(e)})),yt.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new se(G);return e.forEach((t=>{const e=new cs(t,0),r=new cs(t,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([e,r],(t=>{n=n.add(t.Cr)}))})),yt.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;ct.isDocumentKey(i)||(i=i.child(""));const s=new cs(new ct(i),0);let o=new se(G);return this.Mr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.Cr)),!0)}),s),yt.resolve(this.Br(o))}Br(t){const e=[];return t.forEach((t=>{const n=this.Or(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){N(0===this.Lr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.Mr;return yt.forEach(e.mutations,(r=>{const i=new cs(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.Mr=n}))}qn(t){}containsKey(t,e){const n=new cs(e,0),r=this.Mr.firstAfterOrEqual(n);return yt.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,yt.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t){this.kr=t,this.docs=function(){return new ne(ct.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.kr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return yt.resolve(n?n.document.mutableCopy():Qe.newInvalidDocument(e))}getEntries(t,e){let n=qn();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Qe.newInvalidDocument(t))})),yt.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=qn();const s=e.path,o=new ct(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||pt(dt(o),n)<=0||(r.has(o.key)||Un(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return yt.resolve(i)}getAllFromCollectionGroup(t,e,n,r){x()}qr(t,e){return yt.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new hs(this)}getSize(t){return yt.resolve(this.size)}}class hs extends es{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.Ir.addEntry(t,r)):this.Ir.removeEntry(n)})),yt.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(t){this.persistence=t,this.Qr=new $n((t=>bn(t)),En),this.lastRemoteSnapshotVersion=nt.min(),this.highestTargetId=0,this.$r=0,this.Ur=new as,this.targetCount=0,this.Kr=Wi.Un()}forEachTarget(t,e){return this.Qr.forEach(((t,n)=>e(n))),yt.resolve()}getLastRemoteSnapshotVersion(t){return yt.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return yt.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),yt.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.$r&&(this.$r=e),yt.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Kr=new Wi(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,yt.resolve()}updateTargetData(t,e){return this.zn(e),yt.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Ur.br(e.targetId),this.targetCount-=1,yt.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Qr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Qr.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),yt.waitFor(i).next((()=>r))}getTargetCount(t){return yt.resolve(this.targetCount)}getTargetData(t,e){const n=this.Qr.get(e)||null;return yt.resolve(n)}addMatchingKeys(t,e,n){return this.Ur.yr(e,n),yt.resolve()}removeMatchingKeys(t,e,n){this.Ur.Sr(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),yt.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ur.br(e),yt.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ur.vr(e);return yt.resolve(n)}containsKey(t,e){return yt.resolve(this.Ur.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new bt(0),this.zr=!1,this.zr=!0,this.jr=new os,this.referenceDelegate=t(this),this.Hr=new ds(this),this.indexManager=new Bi,this.remoteDocumentCache=function(t){return new ls(t)}((t=>this.referenceDelegate.Jr(t))),this.serializer=new ji(e),this.Yr=new is(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ss,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Wr[t.toKey()];return n||(n=new us(e,this.referenceDelegate),this.Wr[t.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,n){A("MemoryPersistence","Starting transaction:",t);const r=new ps(this.Gr.next());return this.referenceDelegate.Zr(),n(r).next((t=>this.referenceDelegate.Xr(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}ei(t,e){return yt.or(Object.values(this.Wr).map((n=>()=>n.containsKey(t,e))))}}class ps extends gt{constructor(t){super(),this.currentSequenceNumber=t}}class ms{constructor(t){this.persistence=t,this.ti=new as,this.ni=null}static ri(t){return new ms(t)}get ii(){if(this.ni)return this.ni;throw x()}addReference(t,e,n){return this.ti.addReference(n,e),this.ii.delete(n.toString()),yt.resolve()}removeReference(t,e,n){return this.ti.removeReference(n,e),this.ii.add(n.toString()),yt.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),yt.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach((t=>this.ii.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.ii.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return yt.forEach(this.ii,(n=>{const r=ct.fromPath(n);return this.si(t,r).next((t=>{t||e.removeEntry(r,nt.min())}))})).next((()=>(this.ni=null,e.apply(t))))}updateLimboDocument(t,e){return this.si(t,e).next((t=>{t?this.ii.delete(e.toString()):this.ii.add(e.toString())}))}Jr(t){return 0}si(t,e){return yt.or([()=>yt.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class gs{constructor(t,e){this.persistence=t,this.oi=new $n((t=>At(t.path)),((t,e)=>t.isEqual(e))),this.garbageCollector=ts(this,e)}static ri(t,e){return new gs(t,e)}Zr(){}Xr(t){return yt.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next((t=>e.next((e=>t+e))))}sr(t){let e=0;return this.rr(t,(t=>{e++})).next((()=>e))}rr(t,e){return yt.forEach(this.oi,((n,r)=>this.ar(t,n,r).next((t=>t?yt.resolve():e(r)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.qr(t,(r=>this.ar(t,r,e).next((t=>{t||(n++,i.removeEntry(r,nt.min()))})))).next((()=>i.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),yt.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),yt.resolve()}removeReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),yt.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),yt.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Ue(t.data.value)),e}ar(t,e,n){return yt.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const t=this.oi.get(e);return yt.resolve(void 0!==t&&t>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vs{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Hi=n,this.Ji=r}static Yi(t,e){let n=Yn(),r=Yn();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new vs(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return(0,c.nr)()?8:wt((0,c.ZQ)())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,n,r){const i={result:null};return this.rs(t,e).next((t=>{i.result=t})).next((()=>{if(!i.result)return this.ss(t,e,r,n).next((t=>{i.result=t}))})).next((()=>{if(i.result)return;const n=new ys;return this._s(t,e,n).next((r=>{if(i.result=r,this.Xi)return this.us(t,e,n,r.size)}))})).next((()=>i.result))}us(t,e,n,r){return n.documentReadCount<this.es?(C()<=a.$b.DEBUG&&A("QueryEngine","SDK will not create cache indexes for query:",Mn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),yt.resolve()):(C()<=a.$b.DEBUG&&A("QueryEngine","Query:",Mn(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ts*r?(C()<=a.$b.DEBUG&&A("QueryEngine","The SDK decides to create cache indexes for query:",Mn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Rn(e))):yt.resolve())}rs(t,e){if(An(e))return yt.resolve(null);let n=Rn(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Dn(e,null,"F"),n=Rn(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=Yn(...r);return this.ns.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.cs(e,r);return this.ls(e,s,i,n.readTime)?this.rs(t,Dn(e,null,"F")):this.hs(t,s,e,n)}))))})))))}ss(t,e,n,r){return An(e)||r.isEqual(nt.min())?yt.resolve(null):this.ns.getDocuments(t,n).next((i=>{const s=this.cs(e,i);return this.ls(e,s,n,r)?yt.resolve(null):(C()<=a.$b.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Mn(e)),this.hs(t,s,e,ht(r,ut)).next((t=>t)))}))}cs(t,e){let n=new se(jn(t));return e.forEach(((e,r)=>{Un(t,r)&&(n=n.add(r))})),n}ls(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}_s(t,e,n){return C()<=a.$b.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",Mn(e)),this.ns.getDocumentsMatchingQuery(t,e,ft.min(),n)}hs(t,e,n,r){return this.ns.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="LocalStore",bs=3e8;class Es{constructor(t,e,n,r){this.persistence=t,this.Ps=e,this.serializer=r,this.Ts=new ne(G),this.Is=new $n((t=>bn(t)),En),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(n)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new rs(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ts)))}}function Ts(t,e,n,r){return new Es(t,e,n,r)}async function Is(t,e){const n=D(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.As(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=Yn();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Rs:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function Ss(t,e){const n=D(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=yt.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);N(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Yn();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function Cs(t){const e=D(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Hr.getLastRemoteSnapshotVersion(t)))}function As(t,e){const n=D(t),r=e.snapshotVersion;let i=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.ds.newChangeBuffer({trackRemovals:!0});i=n.Ts;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Hr.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Hr.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(ue.EMPTY_BYTE_STRING,nt.min()).withLastLimboFreeSnapshotVersion(nt.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){if(0===t.resumeToken.approximateByteSize())return!0;const r=e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds();if(r>=bs)return!0;const i=n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size;return i>0}(c,u,s)&&o.push(n.Hr.updateTargetData(t,u))}));let a=qn(),c=Yn();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(ks(t,s,e.documentUpdates).next((t=>{a=t.Vs,c=t.fs}))),!r.isEqual(nt.min())){const e=n.Hr.getLastRemoteSnapshotVersion(t).next((e=>n.Hr.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return yt.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ts=i,t)))}function ks(t,e,n){let r=Yn(),i=Yn();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=qn();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(nt.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):A(_s,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Vs:r,fs:i}}))}function Os(t,e){const n=D(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=Et),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Rs(t,e){const n=D(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Hr.getTargetData(t,e).next((i=>i?(r=i,yt.resolve(r)):n.Hr.allocateTargetId(t).next((i=>(r=new Fi(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Hr.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Ts.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(t.targetId,t),n.Is.set(e,t.targetId)),t}))}async function xs(t,e,n){const r=D(t),i=r.Ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!_t(t))throw t;A(_s,`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ts=r.Ts.remove(e),r.Is.delete(i.target)}function Ns(t,e,n){const r=D(t);let i=nt.min(),s=Yn();return r.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const r=D(t),i=r.Is.get(n);return void 0!==i?yt.resolve(r.Ts.get(i)):r.Hr.getTargetData(e,n)}(r,t,Rn(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Ps.getDocumentsMatchingQuery(t,e,n?i:nt.min(),n?s:Yn()))).next((t=>(Ds(r,Fn(e),t),{documents:t,gs:s})))))}function Ds(t,e,n){let r=t.Es.get(e)||nt.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Es.set(e,r)}class Ps{constructor(){this.activeTargetIds=tr()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ls{constructor(){this.ho=new Ps,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,n){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new Ps,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{To(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="ConnectivityMonitor";class Fs{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){A(Us,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){A(Us,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let js=null;function Vs(){return null===js?js=function(){return 268435456+Math.round(2147483648*Math.random())}():js++,"0x"+js.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const $s="RestConnection",Bs={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class qs{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${n}/databases/${r}`,this.wo=this.databaseId.database===Ee?`project_id=${n}`:`project_id=${n}&database_id=${r}`}So(t,e,n,r,i){const s=Vs(),o=this.bo(t,e.toUriEncodedString());A($s,`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(a,r,i),this.vo(t,o,a,n).then((e=>(A($s,`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw O($s,`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}Co(t,e,n,r,i,s){return this.So(t,e,n,r,i)}Do(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+I}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}bo(t,e){const n=Bs[t];return`${this.po}/v1/${e}:${n}`}terminate(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs="WebChannelConnection";class Ks extends qs{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,n,r){const i=Vs();return new Promise(((s,o)=>{const a=new h;a.setWithCredentials(!0),a.listenOnce(f.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case p.NO_ERROR:const e=a.getResponseJson();A(Hs,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case p.TIMEOUT:A(Hs,`RPC '${t}' ${i} timed out`),o(new L(P.DEADLINE_EXCEEDED,"Request time out"));break;case p.HTTP_ERROR:const n=a.getStatus();if(A(Hs,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(e)>=0?e:P.UNKNOWN}(e.status);o(new L(t,e.message))}else o(new L(P.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new L(P.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{A(Hs,`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(r);A(Hs,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)}))}Wo(t,e,n){const r=Vs(),i=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=y(),o=v(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");A(Hs,`Creating RPC '${t}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,f=!1;const p=new zs({Fo:e=>{f?A(Hs,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(A(Hs,`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),A(Hs,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},Mo:()=>l.close()}),w=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return w(l,d.EventType.OPEN,(()=>{f||(A(Hs,`RPC '${t}' stream ${r} transport opened.`),p.Qo())})),w(l,d.EventType.CLOSE,(()=>{f||(f=!0,A(Hs,`RPC '${t}' stream ${r} transport closed`),p.Uo())})),w(l,d.EventType.ERROR,(e=>{f||(f=!0,O(Hs,`RPC '${t}' stream ${r} transport errored:`,e),p.Uo(new L(P.UNAVAILABLE,"The operation could not be completed")))})),w(l,d.EventType.MESSAGE,(e=>{var n;if(!f){const i=e.data[0];N(!!i);const s=i,o=(null==s?void 0:s.error)||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){A(Hs,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=Fr[t];if(void 0!==e)return $r(e)}(e),i=o.message;void 0===n&&(n=P.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),f=!0,p.Uo(new L(n,i)),l.close()}else A(Hs,`RPC '${t}' stream ${r} received:`,i),p.Ko(i)}})),w(o,g.STAT_EVENT,(e=>{e.stat===m.PROXY?A(Hs,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===m.NOPROXY&&A(Hs,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{p.$o()}),0),p}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(t){return new oi(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Ti=t,this.timerId=e,this.Go=n,this.zo=r,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),r=Math.max(0,e-n);r>0&&A("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,r,(()=>(this.Yo=Date.now(),t()))),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){null!==this.Jo&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){null!==this.Jo&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="PersistentStream";class Xs{constructor(t,e,n,r,i,s,o,a){this.Ti=t,this.n_=n,this.r_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Qs(t,e)}u_(){return 1===this.state||5===this.state||this.c_()}c_(){return 2===this.state||3===this.state}start(){this.__=0,4!==this.state?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&null===this.s_&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,(()=>this.T_())))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,4!==t?this.a_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(k(e.toString()),k("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===P.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.i_===e&&this.V_(t,n)}),(e=>{t((()=>{const t=new L(P.UNKNOWN,"Fetching auth token failed: "+e.message);return this.m_(t)}))}))}V_(t,e){const n=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo((()=>{n((()=>this.listener.xo()))})),this.stream.No((()=>{n((()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,(()=>(this.c_()&&(this.state=3),Promise.resolve()))),this.listener.No())))})),this.stream.Lo((t=>{n((()=>this.m_(t)))})),this.stream.onMessage((t=>{n((()=>1==++this.__?this.g_(t):this.onNext(t)))}))}l_(){this.state=5,this.a_.Xo((async()=>{this.state=0,this.start()}))}m_(t){return A(Js,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget((()=>this.i_===t?e():(A(Js,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ys extends Xs{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=Ei(this.serializer,t),n=function(t){if(!("targetChange"in t))return nt.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?nt.min():e.readTime?hi(e.readTime):nt.min()}(t);return this.listener.p_(e,n)}y_(t){const e={};e.database=wi(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=Tn(r)?{documents:Si(t,r)}:{query:Ci(t,r).ht},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=ui(t,e.resumeToken);const r=ai(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(nt.min())>0){n.readTime=ci(t,e.snapshotVersion.toTimestamp());const r=ai(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=ki(this.serializer,t);n&&(e.labels=n),this.I_(e)}w_(t){const e={};e.database=wi(this.serializer),e.removeTarget=t,this.I_(e)}}class Zs extends Xs{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return N(!!t.streamToken),this.lastStreamToken=t.streamToken,N(!t.writeResults||0===t.writeResults.length),this.listener.D_()}onNext(t){N(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=Ii(t.writeResults,t.commitTime),n=hi(t.commitTime);return this.listener.v_(n,e)}C_(){const t={};t.database=wi(this.serializer),this.I_(t)}b_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Ti(this.serializer,t)))};this.I_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{}class eo extends to{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.F_=!1}M_(){if(this.F_)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,n,r){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.So(t,fi(e,n),r,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new L(P.UNKNOWN,t.toString())}))}Co(t,e,n,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Co(t,fi(e,n),r,s,o,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new L(P.UNKNOWN,t.toString())}))}terminate(){this.F_=!0,this.connection.terminate()}}class no{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){0===this.x_&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve()))))}q_(t){"Online"===this.state?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,"Online"===t&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(k(e),this.N_=!1):A("OnlineStateTracker",e)}Q_(){null!==this.O_&&(this.O_.cancel(),this.O_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro="RemoteStore";class io{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To((t=>{n.enqueueAndForget((async()=>{po(this)&&(A(ro,"Restarting streams for network reachability change."),await async function(t){const e=D(t);e.W_.add(4),await oo(e),e.j_.set("Unknown"),e.W_.delete(4),await so(e)}(this))}))})),this.j_=new no(n,r)}}async function so(t){if(po(t))for(const e of t.G_)await e(!0)}async function oo(t){for(const e of t.G_)await e(!1)}function ao(t,e){const n=D(t);n.K_.has(e.targetId)||(n.K_.set(e.targetId,e),fo(n)?ho(n):Do(n).c_()&&uo(n,e))}function co(t,e){const n=D(t),r=Do(n);n.K_.delete(e),r.c_()&&lo(n,e),0===n.K_.size&&(r.c_()?r.P_():po(n)&&n.j_.set("Unknown"))}function uo(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(nt.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Do(t).y_(e)}function lo(t,e){t.H_.Ne(e),Do(t).w_(e)}function ho(t){t.H_=new ti({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.K_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),Do(t).start(),t.j_.B_()}function fo(t){return po(t)&&!Do(t).u_()&&t.K_.size>0}function po(t){return 0===D(t).W_.size}function mo(t){t.H_=void 0}async function go(t){t.j_.set("Online")}async function vo(t){t.K_.forEach(((e,n)=>{uo(t,e)}))}async function yo(t,e){mo(t),fo(t)?(t.j_.q_(e),ho(t)):t.j_.set("Unknown")}async function wo(t,e,n){if(t.j_.set("Online"),e instanceof Yr&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.K_.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.K_.delete(r),t.H_.removeTarget(r))}(t,e)}catch(n){A(ro,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await _o(t,n)}else if(e instanceof Jr?t.H_.We(e):e instanceof Xr?t.H_.Ze(e):t.H_.je(e),!n.isEqual(nt.min()))try{const e=await Cs(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.H_.ot(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.K_.get(r);i&&t.K_.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.K_.get(e);if(!r)return;t.K_.set(e,r.withResumeToken(ue.EMPTY_BYTE_STRING,r.snapshotVersion)),lo(t,e);const i=new Fi(r.target,e,n,r.sequenceNumber);uo(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){A(ro,"Failed to raise snapshot:",e),await _o(t,e)}}async function _o(t,e,n){if(!_t(e))throw e;t.W_.add(1),await oo(t),t.j_.set("Offline"),n||(n=()=>Cs(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{A(ro,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await so(t)}))}function bo(t,e){return e().catch((n=>_o(t,n,e)))}async function Eo(t){const e=D(t),n=Po(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:Et;for(;To(e);)try{const t=await Os(e.localStore,r);if(null===t){0===e.U_.length&&n.P_();break}r=t.batchId,Io(e,t)}catch(t){await _o(e,t)}So(e)&&Co(e)}function To(t){return po(t)&&t.U_.length<10}function Io(t,e){t.U_.push(e);const n=Po(t);n.c_()&&n.S_&&n.b_(e.mutations)}function So(t){return po(t)&&!Po(t).u_()&&t.U_.length>0}function Co(t){Po(t).start()}async function Ao(t){Po(t).C_()}async function ko(t){const e=Po(t);for(const n of t.U_)e.b_(n.mutations)}async function Oo(t,e,n){const r=t.U_.shift(),i=Lr.from(r,e,n);await bo(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Eo(t)}async function Ro(t,e){e&&Po(t).S_&&await async function(t,e){if(function(t){return Vr(t)&&t!==P.ABORTED}(e.code)){const n=t.U_.shift();Po(t).h_(),await bo(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Eo(t)}}(t,e),So(t)&&Co(t)}async function xo(t,e){const n=D(t);n.asyncQueue.verifyOperationInProgress(),A(ro,"RemoteStore received new credentials");const r=po(n);n.W_.add(3),await oo(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await so(n)}async function No(t,e){const n=D(t);e?(n.W_.delete(2),await so(n)):e||(n.W_.add(2),await oo(n),n.j_.set("Unknown"))}function Do(t){return t.J_||(t.J_=function(t,e,n){const r=D(t);return r.M_(),new Ys(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{xo:go.bind(null,t),No:vo.bind(null,t),Lo:yo.bind(null,t),p_:wo.bind(null,t)}),t.G_.push((async e=>{e?(t.J_.h_(),fo(t)?ho(t):t.j_.set("Unknown")):(await t.J_.stop(),mo(t))}))),t.J_}function Po(t){return t.Y_||(t.Y_=function(t,e,n){const r=D(t);return r.M_(),new Zs(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:Ao.bind(null,t),Lo:Ro.bind(null,t),D_:ko.bind(null,t),v_:Oo.bind(null,t)}),t.G_.push((async e=>{e?(t.Y_.h_(),await Eo(t)):(await t.Y_.stop(),t.U_.length>0&&(A(ro,`Stopping write stream with ${t.U_.length} pending writes`),t.U_=[]))}))),t.Y_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Lo{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new M,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Lo(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new L(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mo(t,e){if(k("AsyncQueue",`${e}: ${t}`),_t(t))return new L(P.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{static emptySet(t){return new Uo(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||ct.comparator(e.key,n.key):(t,e)=>ct.comparator(t.key,e.key),this.keyedMap=Hn(),this.sortedSet=new ne(this.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Uo))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Uo;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.Z_=new ne(ct.comparator)}track(t){const e=t.doc.key,n=this.Z_.get(e);n?0!==t.type&&3===n.type?this.Z_=this.Z_.insert(e,t):3===t.type&&1!==n.type?this.Z_=this.Z_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Z_=this.Z_.remove(e):1===t.type&&2===n.type?this.Z_=this.Z_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):x():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class jo{constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new jo(t,e,Uo.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Pn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some((t=>t.ra()))}}class $o{constructor(){this.queries=Bo(),this.onlineState="Unknown",this.ia=new Set}terminate(){!function(t,e){const n=D(t),r=n.queries;n.queries=Bo(),r.forEach(((t,n)=>{for(const r of n.ta)r.onError(e)}))}(this,new L(P.ABORTED,"Firestore shutting down"))}}function Bo(){return new $n((t=>Ln(t)),Pn)}async function qo(t,e){const n=D(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.na()&&e.ra()&&(r=2):(s=new Vo,r=e.ra()?0:1);try{switch(r){case 0:s.ea=await n.onListen(i,!0);break;case 1:s.ea=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(t){const n=Mo(t,`Initialization of query '${Mn(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.ta.push(e),e.sa(n.onlineState),s.ea&&e.oa(s.ea)&&Wo(n)}async function zo(t,e){const n=D(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const t=s.ta.indexOf(e);t>=0&&(s.ta.splice(t,1),0===s.ta.length?i=e.ra()?0:1:!s.na()&&e.ra()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ho(t,e){const n=D(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.ta)t.oa(i)&&(r=!0);e.ea=i}}r&&Wo(n)}function Ko(t,e,n){const r=D(t),i=r.queries.get(e);if(i)for(const s of i.ta)s.onError(n);r.queries.delete(e)}function Wo(t){t.ia.forEach((t=>{t.next()}))}var Go,Qo;(Qo=Go||(Go={}))._a="default",Qo.Cache="cache";class Jo{constructor(t,e,n){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new jo(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache)return!0;if(!this.ra())return!0;const n="Offline"!==e;return(!this.options.Ta||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Pa(t){t=jo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==Go.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xo{constructor(t){this.key=t}}class Yo{constructor(t){this.key=t}}class Zo{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Yn(),this.mutatedKeys=Yn(),this.ya=jn(t),this.wa=new Uo(this.ya)}get Sa(){return this.fa}ba(t,e){const n=e?e.Da:new Fo,r=e?e.wa:this.wa;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=Un(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.va(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.ya(l,a)>0||c&&this.ya(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{wa:s,Da:n,ls:o,mutatedKeys:i}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const i=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const s=t.Da.X_();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.ya(t.doc,e.doc))),this.Ca(n),r=null!=r&&r;const o=e&&!r?this.Fa():[],a=0===this.pa.size&&this.current&&!r?1:0,c=a!==this.ga;return this.ga=a,0!==s.length||c?{snapshot:new jo(this.query,t.wa,i,s,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:o}:{Ma:o}}sa(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Fo,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach((t=>this.fa=this.fa.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.fa=this.fa.delete(t))),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=Yn(),this.wa.forEach((t=>{this.xa(t.key)&&(this.pa=this.pa.add(t.key))}));const e=[];return t.forEach((t=>{this.pa.has(t)||e.push(new Yo(t))})),this.pa.forEach((n=>{t.has(n)||e.push(new Xo(n))})),e}Oa(t){this.fa=t.gs,this.pa=Yn();const e=this.ba(t.documents);return this.applyChanges(e,!0)}Na(){return jo.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,0===this.ga,this.hasCachedResults)}}const ta="SyncEngine";class ea{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class na{constructor(t){this.key=t,this.Ba=!1}}class ra{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.La={},this.ka=new $n((t=>Ln(t)),Pn),this.qa=new Map,this.Qa=new Set,this.$a=new ne(ct.comparator),this.Ua=new Map,this.Ka=new as,this.Wa={},this.Ga=new Map,this.za=Wi.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return!0===this.ja}}async function ia(t,e,n=!0){const r=Ca(t);let i;const s=r.ka.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=await oa(r,e,n,!0),i}async function sa(t,e){const n=Ca(t);await oa(n,e,!0,!1)}async function oa(t,e,n,r){const i=await Rs(t.localStore,Rn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await aa(t,e,s,"current"===o,i.resumeToken)),t.isPrimaryClient&&n&&ao(t.remoteStore,i),a}async function aa(t,e,n,r,i){t.Ha=(e,n,r)=>async function(t,e,n,r){let i=e.view.ba(n);i.ls&&(i=await Ns(t.localStore,e.query,!1).then((({documents:t})=>e.view.ba(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=r&&null!=r.targetMismatches.get(e.targetId),a=e.view.applyChanges(i,t.isPrimaryClient,s,o);return _a(t,e.targetId,a.Ma),a.snapshot}(t,e,n,r);const s=await Ns(t.localStore,e,!0),o=new Zo(e,s.gs),a=o.ba(s.documents),c=Qr.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);_a(t,n,u.Ma);const l=new ea(e,n,o);return t.ka.set(e,l),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),u.snapshot}async function ca(t,e,n){const r=D(t),i=r.ka.get(e),s=r.qa.get(i.targetId);if(s.length>1)return r.qa.set(i.targetId,s.filter((t=>!Pn(t,e)))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await xs(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&co(r.remoteStore,i.targetId),ya(r,i.targetId)})).catch(vt)):(ya(r,i.targetId),await xs(r.localStore,i.targetId,!0))}async function ua(t,e){const n=D(t),r=n.ka.get(e),i=n.qa.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),co(n.remoteStore,r.targetId))}async function la(t,e,n){const r=Aa(t);try{const t=await function(t,e){const n=D(t),r=et.now(),i=e.reduce(((t,e)=>t.add(e.key)),Yn());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=qn(),c=Yn();return n.ds.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=Sr(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new kr(t.key,e,Ge(e.value.mapValue),wr.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Kn(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Wa[t.currentUser.toKey()];r||(r=new ne(G)),r=r.insert(e,n),t.Wa[t.currentUser.toKey()]=r}(r,t.batchId,n),await Ta(r,t.changes),await Eo(r.remoteStore)}catch(t){const e=Mo(t,"Failed to persist write");n.reject(e)}}async function ha(t,e){const n=D(t);try{const t=await As(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Ua.get(e);r&&(N(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Ba=!0:t.modifiedDocuments.size>0?N(r.Ba):t.removedDocuments.size>0&&(N(r.Ba),r.Ba=!1))})),await Ta(n,t,e)}catch(t){await vt(t)}}function da(t,e,n){const r=D(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ka.forEach(((n,r)=>{const i=r.view.sa(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=D(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.ta)i.sa(e)&&(r=!0)})),r&&Wo(n)}(r.eventManager,e),t.length&&r.La.p_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fa(t,e,n){const r=D(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ua.get(e),s=i&&i.key;if(s){let t=new ne(ct.comparator);t=t.insert(s,Qe.newNoDocument(s,nt.min()));const n=Yn().add(s),i=new Gr(nt.min(),new Map,new ne(G),t,n);await ha(r,i),r.$a=r.$a.remove(s),r.Ua.delete(e),Ea(r)}else await xs(r.localStore,e,!1).then((()=>ya(r,e,n))).catch(vt)}async function pa(t,e){const n=D(t),r=e.batch.batchId;try{const t=await Ss(n.localStore,e);va(n,r,null),ga(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ta(n,t)}catch(t){await vt(t)}}async function ma(t,e,n){const r=D(t);try{const t=await function(t,e){const n=D(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(N(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);va(r,e,n),ga(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ta(r,t)}catch(n){await vt(n)}}function ga(t,e){(t.Ga.get(e)||[]).forEach((t=>{t.resolve()})),t.Ga.delete(e)}function va(t,e,n){const r=D(t);let i=r.Wa[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Wa[r.currentUser.toKey()]=i}}function ya(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ka.br(e).forEach((e=>{t.Ka.containsKey(e)||wa(t,e)}))}function wa(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);null!==n&&(co(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ua.delete(n),Ea(t))}function _a(t,e,n){for(const r of n)r instanceof Xo?(t.Ka.addReference(r.key,e),ba(t,r)):r instanceof Yo?(A(ta,"Document no longer in limbo: "+r.key),t.Ka.removeReference(r.key,e),t.Ka.containsKey(r.key)||wa(t,r.key)):x()}function ba(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(A(ta,"New document in limbo: "+n),t.Qa.add(r),Ea(t))}function Ea(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new ct(st.fromString(e)),r=t.za.next();t.Ua.set(r,new na(n)),t.$a=t.$a.insert(n,r),ao(t.remoteStore,new Fi(Rn(Cn(n.path)),r,"TargetPurposeLimboResolution",bt.ae))}}async function Ta(t,e,n){const r=D(t),i=[],s=[],o=[];r.ka.isEmpty()||(r.ka.forEach(((t,a)=>{o.push(r.Ha(a,e,n).then((t=>{var e;if((t||n)&&r.isPrimaryClient){const i=t?!t.fromCache:null===(e=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===e?void 0:e.current;r.sharedClientState.updateQueryState(a.targetId,i?"current":"not-current")}if(t){i.push(t);const e=vs.Yi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.La.p_(i),await async function(t,e){const n=D(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>yt.forEach(e,(e=>yt.forEach(e.Hi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>yt.forEach(e.Ji,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!_t(t))throw t;A(_s,"Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Ts.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ts=n.Ts.insert(t,i)}}}(r.localStore,s))}async function Ia(t,e){const n=D(t);if(!n.currentUser.isEqual(e)){A(ta,"User change. New user:",e.toKey());const t=await Is(n.localStore,e);n.currentUser=e,function(t,e){t.Ga.forEach((t=>{t.forEach((t=>{t.reject(new L(P.CANCELLED,e))}))})),t.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Ta(n,t.Rs)}}function Sa(t,e){const n=D(t),r=n.Ua.get(e);if(r&&r.Ba)return Yn().add(r.key);{let t=Yn();const r=n.qa.get(e);if(!r)return t;for(const e of r){const r=n.ka.get(e);t=t.unionWith(r.view.Sa)}return t}}function Ca(t){const e=D(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ha.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sa.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fa.bind(null,e),e.La.p_=Ho.bind(null,e.eventManager),e.La.Ja=Ko.bind(null,e.eventManager),e}function Aa(t){const e=D(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pa.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ma.bind(null,e),e}class ka{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Gs(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return Ts(this.persistence,new ws,t.initialUser,this.serializer)}Xa(t){return new fs(ms.ri,this.serializer)}Za(t){return new Ls}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ka.provider={build:()=>new ka};class Oa extends ka{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){N(this.persistence.referenceDelegate instanceof gs);const n=this.persistence.referenceDelegate.garbageCollector;return new Yi(n,t.asyncQueue,e)}Xa(t){const e=void 0!==this.cacheSizeBytes?Ki.withCacheSize(this.cacheSizeBytes):Ki.DEFAULT;return new fs((t=>gs.ri(t,e)),this.serializer)}}class Ra{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>da(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ia.bind(null,this.syncEngine),await No(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new $o}()}createDatastore(t){const e=Gs(t.databaseInfo.databaseId),n=function(t){return new Ks(t)}(t.databaseInfo);return function(t,e,n,r){return new eo(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new io(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,(t=>da(this.syncEngine,t,0)),function(){return Fs.D()?new Fs:new Ms}())}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new ra(t,e,n,r,i,s);return o&&(a.ja=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=D(t);A(ro,"RemoteStore shutting down."),e.W_.add(5),await oo(e),e.z_.shutdown(),e.j_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(e=this.eventManager)||void 0===e||e.terminate()}}Ra.provider={build:()=>new Ra};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xa{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):k("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Na="FirestoreClient";class Da{constructor(t,e,n,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=T.UNAUTHENTICATED,this.clientId=W.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async t=>{A(Na,"Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(A(Na,"Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new M;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Mo(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Pa(t,e){t.asyncQueue.verifyOperationInProgress(),A(Na,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Is(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function La(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ma(t);A(Na,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>xo(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>xo(e.remoteStore,n))),t._onlineComponents=e}async function Ma(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){A(Na,"Using user provided OfflineComponentProvider");try{await Pa(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===P.FAILED_PRECONDITION||t.code===P.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;O("Error using user provided cache. Falling back to memory cache: "+n),await Pa(t,new ka)}}else A(Na,"Using default OfflineComponentProvider"),await Pa(t,new Oa(void 0));return t._offlineComponents}async function Ua(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(A(Na,"Using user provided OnlineComponentProvider"),await La(t,t._uninitializedComponentsProvider._online)):(A(Na,"Using default OnlineComponentProvider"),await La(t,new Ra))),t._onlineComponents}function Fa(t){return Ua(t).then((t=>t.syncEngine))}async function ja(t){const e=await Ua(t),n=e.eventManager;return n.onListen=ia.bind(null,e.syncEngine),n.onUnlisten=ca.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=sa.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ua.bind(null,e.syncEngine),n}function Va(t,e,n={}){const r=new M;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new xa({next:a=>{s.su(),e.enqueueAndForget((()=>zo(t,o)));const c=a.docs.has(n);!c&&a.fromCache?i.reject(new L(P.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&a.fromCache&&r&&"server"===r.source?i.reject(new L(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:t=>i.reject(t)}),o=new Jo(Cn(n.path),s,{includeMetadataChanges:!0,Ta:!0});return qo(t,o)}(await ja(t),t.asyncQueue,e,n,r))),r.promise}function $a(t,e,n={}){const r=new M;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new xa({next:n=>{s.su(),e.enqueueAndForget((()=>zo(t,o))),n.fromCache&&"server"===r.source?i.reject(new L(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Jo(n,s,{includeMetadataChanges:!0,Ta:!0});return qo(t,o)}(await ja(t),t.asyncQueue,e,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ba(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const qa=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t,e,n){if(!n)throw new L(P.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ha(t,e,n,r){if(!0===e&&!0===r)throw new L(P.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ka(t){if(!ct.isDocumentKey(t))throw new L(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wa(t){if(ct.isDocumentKey(t))throw new L(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ga(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":x()}function Qa(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ga(t);throw new L(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ja="firestore.googleapis.com",Xa=!0;class Ya{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new L(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ja,this.ssl=Xa}else this.host=t.host,this.ssl=null!==(e=t.ssl)&&void 0!==e?e:Xa;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=Hi;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<Qi)throw new L(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ha("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ba(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Za{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ya({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new L(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ya(t),this._emulatorOptions=t.emulatorOptions||{},void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new F;switch(t.type){case"firstParty":return new B(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new L(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=qa.get(t);e&&(A("ComponentProvider","Removing Datastore"),qa.delete(t),e.terminate())}(this),Promise.resolve()}}function tc(t,e,n,r={}){var i;const s=(t=Qa(t,Za))._getSettings(),o=Object.assign(Object.assign({},s),{emulatorOptions:t._getEmulatorOptions()}),a=`${e}:${n}`;s.host!==Ja&&s.host!==a&&O("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},s),{host:a,ssl:!1,emulatorOptions:r});if(!(0,c.bD)(u,o)&&(t._setSettings(u),r.mockUserToken)){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=T.MOCK_USER;else{e=(0,c.Fy)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new L(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new T(s)}t._authCredentials=new j(new U(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ec(this.firestore,t,this._query)}}class nc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new nc(this.firestore,t,this._key)}}class rc extends ec{constructor(t,e,n){super(t,e,Cn(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new nc(this.firestore,null,new ct(t))}withConverter(t){return new rc(this.firestore,t,this._path)}}function ic(t,e,...n){if(t=(0,c.Ku)(t),za("collection","path",e),t instanceof Za){const r=st.fromString(e,...n);return Wa(r),new rc(t,null,r)}{if(!(t instanceof nc||t instanceof rc))throw new L(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(st.fromString(e,...n));return Wa(r),new rc(t.firestore,null,r)}}function sc(t,e,...n){if(t=(0,c.Ku)(t),1===arguments.length&&(e=W.newId()),za("doc","path",e),t instanceof Za){const r=st.fromString(e,...n);return Ka(r),new nc(t,null,new ct(r))}{if(!(t instanceof nc||t instanceof rc))throw new L(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(st.fromString(e,...n));return Ka(r),new nc(t.firestore,t instanceof rc?t.converter:null,new ct(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oc="AsyncQueue";class ac{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Qs(this,"async_queue_retry"),this.Su=()=>{const t=Ws();t&&A(oc,"Visibility state changed to "+t.visibilityState),this.a_.t_()},this.bu=t;const e=Ws();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=Ws();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise((()=>{}));const e=new M;return this.vu((()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Vu.push(t),this.Cu())))}async Cu(){if(0!==this.Vu.length){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!_t(t))throw t;A(oc,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo((()=>this.Cu()))}}vu(t){const e=this.bu.then((()=>(this.pu=!0,t().catch((t=>{this.gu=t,this.pu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw k("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.pu=!1,t))))));return this.bu=e,e}enqueueAfterDelay(t,e,n){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const r=Lo.createAndSchedule(this,t,e,n,(t=>this.Fu(t)));return this.fu.push(r),r}Du(){this.gu&&x()}verifyOperationInProgress(){}async Mu(){let t;do{t=this.bu,await t}while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then((()=>{this.fu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.fu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Mu()}))}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class cc extends Za{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new ac,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ac(t),this._firestoreClient=void 0,await t}}}function uc(t,e){const n="object"==typeof t?t:(0,s.Sx)(),r="string"==typeof t?t:e||Ee,i=(0,s.j6)(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const t=(0,c.yU)("firestore");t&&tc(i,...t)}return i}function lc(t){if(t._terminated)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||hc(t),t._firestoreClient}function hc(t){var e,n,r;const i=t._freezeSettings(),s=function(t,e,n,r){return new be(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Ba(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Da(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(t){const e=null==t?void 0:t._online.build();return{_offline:null==t?void 0:t._offline.build(e),_online:e}}(t._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new dc(ue.fromBase64String(t))}catch(t){throw new L(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new dc(ue.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new L(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pc{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new L(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new L(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return G(this._lat,t._lat)||G(this._long,t._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(t){this._values=(t||[]).map((t=>t))}toArray(){return this._values.map((t=>t))}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=/^__.*__$/;class yc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new kr(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ar(t,this.data,e,this.fieldTransforms)}}class wc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new kr(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function _c(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class bc{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new bc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ku({path:n,Qu:!1});return r.$u(t),r}Uu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ku({path:n,Qu:!1});return r.Bu(),r}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Vc(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(0===t.length)throw this.Wu("Document fields must not be empty");if(_c(this.Lu)&&vc.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class Ec{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Gs(t)}ju(t,e,n,r=!1){return new bc({Lu:t,methodName:e,zu:n,path:at.emptyPath(),Qu:!1,Gu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Tc(t){const e=t._freezeSettings(),n=Gs(t._databaseId);return new Ec(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ic(t,e,n,r,i,s={}){const o=t.ju(s.merge||s.mergeFields?2:0,e,n,i);Mc("Data must be an object, but it was:",o,r);const a=Pc(r,o);let c,u;if(s.merge)c=new ae(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Uc(e,r,n);if(!o.contains(i))throw new L(P.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);$c(t,i)||t.push(i)}c=new ae(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new yc(new We(a),c,u)}class Sc extends pc{_toFieldTransform(t){if(2!==t.Lu)throw 1===t.Lu?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Sc}}function Cc(t,e,n){return new bc({Lu:3,zu:e.settings.zu,methodName:t._methodName,Qu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ac extends pc{_toFieldTransform(t){return new gr(t.path,new cr)}isEqual(t){return t instanceof Ac}}class kc extends pc{constructor(t,e){super(t),this.Hu=e}_toFieldTransform(t){const e=Cc(this,t,!0),n=this.Hu.map((t=>Dc(t,e))),r=new ur(n);return new gr(t.path,r)}isEqual(t){return t instanceof kc&&(0,c.bD)(this.Hu,t.Hu)}}class Oc extends pc{constructor(t,e){super(t),this.Hu=e}_toFieldTransform(t){const e=Cc(this,t,!0),n=this.Hu.map((t=>Dc(t,e))),r=new hr(n);return new gr(t.path,r)}isEqual(t){return t instanceof Oc&&(0,c.bD)(this.Hu,t.Hu)}}function Rc(t,e,n,r){const i=t.ju(1,e,n);Mc("Data must be an object, but it was:",i,r);const s=[],o=We.empty();te(r,((t,r)=>{const a=jc(e,t,n);r=(0,c.Ku)(r);const u=i.Uu(a);if(r instanceof Sc)s.push(a);else{const t=Dc(r,u);null!=t&&(s.push(a),o.set(a,t))}}));const a=new ae(s);return new wc(o,a,i.fieldTransforms)}function xc(t,e,n,r,i,s){const o=t.ju(1,e,n),a=[Uc(e,r,n)],u=[i];if(s.length%2!=0)throw new L(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<s.length;c+=2)a.push(Uc(e,s[c])),u.push(s[c+1]);const l=[],h=We.empty();for(let f=a.length-1;f>=0;--f)if(!$c(l,a[f])){const t=a[f];let e=u[f];e=(0,c.Ku)(e);const n=o.Uu(t);if(e instanceof Sc)l.push(t);else{const r=Dc(e,n);null!=r&&(l.push(t),h.set(t,r))}}const d=new ae(l);return new wc(h,d,o.fieldTransforms)}function Nc(t,e,n,r=!1){return Dc(n,t.ju(r?4:3,e))}function Dc(t,e){if(Lc(t=(0,c.Ku)(t)))return Mc("Unsupported field value:",e,t),Pc(t,e);if(t instanceof pc)return function(t,e){if(!_c(e.Lu))throw e.Wu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Wu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&4!==e.Lu)throw e.Wu("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Dc(i,e.Ku(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,c.Ku)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return rr(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=et.fromDate(t);return{timestampValue:ci(e.serializer,n)}}if(t instanceof et){const n=new et(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ci(e.serializer,n)}}if(t instanceof mc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof dc)return{bytesValue:ui(e.serializer,t._byteString)};if(t instanceof nc){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Wu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:di(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof gc)return function(t,e){const n={fields:{[Ie]:{stringValue:Ae},[ke]:{arrayValue:{values:t.toArray().map((t=>{if("number"!=typeof t)throw e.Wu("VectorValues must only contain numeric values.");return er(e.serializer,t)}))}}}};return{mapValue:n}}(t,e);throw e.Wu(`Unsupported field value: ${Ga(t)}`)}(t,e)}function Pc(t,e){const n={};return ee(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):te(t,((t,r)=>{const i=Dc(r,e.qu(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Lc(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof et||t instanceof mc||t instanceof dc||t instanceof nc||t instanceof pc||t instanceof gc)}function Mc(t,e,n){if(!Lc(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Ga(n);throw"an object"===r?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function Uc(t,e,n){if((e=(0,c.Ku)(e))instanceof fc)return e._internalPath;if("string"==typeof e)return jc(t,e);throw Vc("Field path arguments must be of type string or ",t,!1,void 0,n)}const Fc=new RegExp("[~\\*/\\[\\]]");function jc(t,e,n){if(e.search(Fc)>=0)throw Vc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fc(...e.split("."))._internalPath}catch(r){throw Vc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new L(P.INVALID_ARGUMENT,a+t+c)}function $c(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new nc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new qc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(zc("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class qc extends Bc{data(){return super.data()}}function zc(t,e){return"string"==typeof e?jc(t,e):e instanceof fc?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new L(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kc{}class Wc extends Kc{}function Gc(t,e,...n){let r=[];e instanceof Kc&&r.push(e),r=r.concat(n),function(t){const e=t.filter((t=>t instanceof Xc)).length,n=t.filter((t=>t instanceof Qc)).length;if(e>1||e>0&&n>0)throw new L(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)t=i._apply(t);return t}class Qc extends Wc{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Qc(t,e,n)}_apply(t){const e=this._parse(t);return tu(t._query,e),new ec(t.firestore,t.converter,Nn(t._query,e))}_parse(t){const e=Tc(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new L(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Zc(o,s);const e=[];for(const n of o)e.push(Yc(r,t,n));a={arrayValue:{values:e}}}else a=Yc(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Zc(o,s),a=Nc(n,e,o,"in"===s||"not-in"===s);const c=nn.create(i,s,a);return c}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}function Jc(t,e,n){const r=e,i=zc("where",t);return Qc._create(i,r,n)}class Xc extends Kc{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Xc(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:rn.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const i of r)tu(n,i),n=Nn(n,i)}(t._query,e),new ec(t.firestore,t.converter,Nn(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function Yc(t,e,n){if("string"==typeof(n=(0,c.Ku)(n))){if(""===n)throw new L(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kn(e)&&-1!==n.indexOf("/"))throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(st.fromString(n));if(!ct.isDocumentKey(r))throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fe(t,new ct(r))}if(n instanceof nc)return Fe(t,n._key);throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ga(n)}.`)}function Zc(t,e){if(!Array.isArray(t)||0===t.length)throw new L(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function tu(t,e){const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new L(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class eu{convertValue(t,e="none"){switch(Oe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return de(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(fe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw x()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return te(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertVectorValue(t){var e,n,r;const i=null===(r=null===(n=null===(e=t.fields)||void 0===e?void 0:e[ke].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((t=>de(t.doubleValue)));return new gc(i)}convertGeoPoint(t){return new mc(de(t.latitude),de(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=we(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(_e(t));default:return null}}convertTimestamp(t){const e=he(t);return new et(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=st.fromString(t);N(Ui(n));const r=new Te(n.get(1),n.get(3)),i=new ct(n.popFirst(5));return r.isEqual(e)||k(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ru{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class iu extends Bc{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new su(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(zc("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class su extends iu{data(t={}){return super.data(t)}}class ou{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new ru(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new su(this._firestore,this._userDataWriter,n.key,n,new ru(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new L(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new su(t._firestore,t._userDataWriter,n.doc.key,n.doc,new ru(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new su(t._firestore,t._userDataWriter,e.doc.key,e.doc,new ru(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:au(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function au(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cu(t){t=Qa(t,nc);const e=Qa(t.firestore,cc);return Va(lc(e),t._key).then((n=>gu(e,t,n)))}class uu extends eu{constructor(t){super(),this.firestore=t}convertBytes(t){return new dc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new nc(this.firestore,null,e)}}function lu(t){t=Qa(t,ec);const e=Qa(t.firestore,cc),n=lc(e),r=new uu(e);return Hc(t._query),$a(n,t._query).then((n=>new ou(e,r,t,n)))}function hu(t,e,n){t=Qa(t,nc);const r=Qa(t.firestore,cc),i=nu(t.converter,e,n);return mu(r,[Ic(Tc(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,wr.none())])}function du(t,e,n,...r){t=Qa(t,nc);const i=Qa(t.firestore,cc),s=Tc(i);let o;return o="string"==typeof(e=(0,c.Ku)(e))||e instanceof fc?xc(s,"updateDoc",t._key,e,n,r):Rc(s,"updateDoc",t._key,e),mu(i,[o.toMutation(t._key,wr.exists(!0))])}function fu(t){return mu(Qa(t.firestore,cc),[new Nr(t._key,wr.none())])}function pu(t,e){const n=Qa(t.firestore,cc),r=sc(t),i=nu(t.converter,e);return mu(n,[Ic(Tc(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,wr.exists(!1))]).then((()=>r))}function mu(t,e){return function(t,e){const n=new M;return t.asyncQueue.enqueueAndForget((async()=>la(await Fa(t),e,n))),n.promise}(lc(t),e)}function gu(t,e,n){const r=n.docs.get(e._key),i=new uu(t);return new iu(t,i,e._key,r,new ru(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(){return new Ac("serverTimestamp")}function yu(...t){return new kc("arrayUnion",t)}function wu(...t){return new Oc("arrayRemove",t)}new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){I=t}(s.MF),(0,s.om)(new o.uA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new cc(new V(t.getProvider("auth-internal")),new z(i,t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new L(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Te(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,s.KO)(b,E,t),(0,s.KO)(b,E,"esm2017")}()},1072:function(t,e,n){var r=n(1828),i=n(8727);t.exports=Object.keys||function(t){return r(t,i)}},1108:function(t,e,n){var r=n(6955);t.exports=function(t){var e=r(t);return"BigInt64Array"===e||"BigUint64Array"===e}},1148:function(t,e,n){var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{every:function(t){o(this),s(t);var e=a(this),n=0;return!i(e,(function(e,r){if(!t(e,n++))return r()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},1181:function(t,e,n){var r,i,s,o=n(8622),a=n(4576),c=n(34),u=n(6699),l=n(9297),h=n(7629),d=n(6119),f=n(421),p="Object already initialized",m=a.TypeError,g=a.WeakMap,v=function(t){return s(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw new m("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var w=h.state||(h.state=new g);w.get=w.get,w.has=w.has,w.set=w.set,r=function(t,e){if(w.has(t))throw new m(p);return e.facade=t,w.set(t,e),e},i=function(t){return w.get(t)||{}},s=function(t){return w.has(t)}}else{var _=d("state");f[_]=!0,r=function(t,e){if(l(t,_))throw new m(p);return e.facade=t,u(t,_,e),e},i=function(t){return l(t,_)?t[_]:{}},s=function(t){return l(t,_)}}t.exports={set:r,get:i,has:s,enforce:v,getterFor:y}},1291:function(t,e,n){var r=n(741);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},1548:function(t,e,n){var r=n(4576),i=n(9039),s=n(9519),o=n(4215),a=r.structuredClone;t.exports=!!a&&!i((function(){if("DENO"===o&&s>92||"NODE"===o&&s>94||"BROWSER"===o&&s>97)return!1;var t=new ArrayBuffer(8),e=a(t,{transfer:[t]});return 0!==t.byteLength||8!==e.byteLength}))},1625:function(t,e,n){var r=n(9504);t.exports=r({}.isPrototypeOf)},1640:function(t,e,n){n.d(e,{h1:function(){return u},uA:function(){return i}});n(8111),n(2489),n(1701),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(8506);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.cY;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},1656:function(t,e,n){function r(t,e,n,r,i,s,o,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}n.d(e,{A:function(){return r}})},1698:function(t,e,n){var r=n(6518),i=n(4204),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("union")},{union:i})},1701:function(t,e,n){var r=n(6518),i=n(713),s=n(6395);r({target:"Iterator",proto:!0,real:!0,forced:s},{map:i})},1708:function(t,e,n){n.d(e,{Wp:function(){return r.Wp}});var r=n(3863),i="firebase",s="11.5.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(i,s,"app")},1767:function(t){t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},1806:function(t,e,n){var r=n(6518),i=n(8551),s=n(2652),o=n(1767),a=[].push;r({target:"Iterator",proto:!0,real:!0},{toArray:function(){var t=[];return s(o(i(this)),a,{that:t,IS_RECORD:!0}),t}})},1828:function(t,e,n){var r=n(9504),i=n(9297),s=n(5397),o=n(9617).indexOf,a=n(421),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},2106:function(t,e,n){var r=n(283),i=n(4913);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},2140:function(t,e,n){var r=n(8227),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},2195:function(t,e,n){var r=n(9504),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},2211:function(t,e,n){var r=n(9039);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},2360:function(t,e,n){var r,i=n(8551),s=n(6801),o=n(8727),a=n(421),c=n(397),u=n(4055),l=n(6119),h=">",d="<",f="prototype",p="script",m=l("IE_PROTO"),g=function(){},v=function(t){return d+p+h+t+d+"/"+p+h},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},w=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},_=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}_="undefined"!=typeof document?document.domain&&r?y(r):w():y(r);var t=o.length;while(t--)delete _[f][o[t]];return _()};a[m]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(g[f]=i(t),n=new g,g[f]=null,n[m]=t):n=_(),void 0===e?n:s.f(n,e)}},2475:function(t,e,n){var r=n(6518),i=n(8527),s=n(4916),o=!s("isSupersetOf",(function(t){return!t}));r({target:"Set",proto:!0,real:!0,forced:o},{isSupersetOf:i})},2489:function(t,e,n){var r=n(6518),i=n(9565),s=n(9306),o=n(8551),a=n(1767),c=n(9462),u=n(6319),l=n(6395),h=c((function(){var t,e,n,r=this.iterator,s=this.predicate,a=this.next;while(1){if(t=o(i(a,r)),e=this.done=!!t.done,e)return;if(n=t.value,u(r,s,[n,this.counter++],!0))return n}}));r({target:"Iterator",proto:!0,real:!0,forced:l},{filter:function(t){return o(this),s(t),new h(a(this),{predicate:t})}})},2529:function(t){t.exports=function(t,e){return{value:t,done:e}}},2603:function(t,e,n){var r=n(655);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},2652:function(t,e,n){var r=n(6080),i=n(9565),s=n(8551),o=n(6823),a=n(4209),c=n(6198),u=n(1625),l=n(81),h=n(851),d=n(9539),f=TypeError,p=function(t,e){this.stopped=t,this.result=e},m=p.prototype;t.exports=function(t,e,n){var g,v,y,w,_,b,E,T=n&&n.that,I=!(!n||!n.AS_ENTRIES),S=!(!n||!n.IS_RECORD),C=!(!n||!n.IS_ITERATOR),A=!(!n||!n.INTERRUPTED),k=r(e,T),O=function(t){return g&&d(g,"normal",t),new p(!0,t)},R=function(t){return I?(s(t),A?k(t[0],t[1],O):k(t[0],t[1])):A?k(t,O):k(t)};if(S)g=t.iterator;else if(C)g=t;else{if(v=h(t),!v)throw new f(o(t)+" is not iterable");if(a(v)){for(y=0,w=c(t);w>y;y++)if(_=R(t[y]),_&&u(m,_))return _;return new p(!1)}g=l(t,v)}b=S?t.next:g.next;while(!(E=i(b,g)).done){try{_=R(E.value)}catch(x){d(g,"throw",x)}if("object"==typeof _&&_&&u(m,_))return _}return new p(!1)}},2777:function(t,e,n){var r=n(9565),i=n(34),s=n(757),o=n(5966),a=n(4270),c=n(8227),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,c=o(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||s(n))return n;throw new u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},2787:function(t,e,n){var r=n(9297),i=n(4901),s=n(8981),o=n(6119),a=n(2211),c=o("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=s(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},2796:function(t,e,n){var r=n(9039),i=n(4901),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n===l||n!==u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},2812:function(t){var e=TypeError;t.exports=function(t,n){if(t<n)throw new e("Not enough arguments");return t}},2839:function(t,e,n){var r=n(4576),i=r.navigator,s=i&&i.userAgent;t.exports=s?String(s):""},2967:function(t,e,n){var r=n(6706),i=n(34),s=n(7750),o=n(3506);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(a){}return function(n,r){return s(n),o(r),i(n)?(e?t(n,r):n.__proto__=r,n):n}}():void 0)},3167:function(t,e,n){var r=n(4901),i=n(34),s=n(2967);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},3238:function(t,e,n){var r=n(4576),i=n(7811),s=n(7394),o=r.DataView;t.exports=function(t){if(!i||0!==s(t))return!1;try{return new o(t),!1}catch(e){return!0}}},3392:function(t,e,n){var r=n(9504),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},3440:function(t,e,n){var r=n(7080),i=n(4402),s=n(9286),o=n(5170),a=n(3789),c=n(8469),u=n(507),l=i.has,h=i.remove;t.exports=function(t){var e=r(this),n=a(t),i=s(e);return o(e)<=n.size?c(e,(function(t){n.includes(t)&&h(i,t)})):u(n.getIterator(),(function(t){l(e,t)&&h(i,t)})),i}},3506:function(t,e,n){var r=n(3925),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw new s("Can't set "+i(t)+" as a prototype")}},3579:function(t,e,n){var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{some:function(t){o(this),s(t);var e=a(this),n=0;return i(e,(function(e,r){if(t(e,n++))return r()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},3650:function(t,e,n){var r=n(7080),i=n(4402),s=n(9286),o=n(3789),a=n(507),c=i.add,u=i.has,l=i.remove;t.exports=function(t){var e=r(this),n=o(t).getIterator(),i=s(e);return a(n,(function(t){u(e,t)?l(i,t):c(i,t)})),i}},3660:function(t,e,n){n.d(e,{sk:function(){return Ie},xI:function(){return Wr},hg:function(){return Ue},df:function(){return Un},CI:function(){return Fe}});n(4114),n(8111),n(2489),n(116),n(7588),n(1701),n(8237),n(3579),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(4603),n(7566),n(8721);var r=n(3863),i=n(8506),s=n(9951);function o(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(1640);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new i.FA("auth","Firebase",c()),h=new s.Vy("@firebase/auth");function d(t,...e){h.logLevel<=s.$b.WARN&&h.warn(`Auth (${r.MF}): ${t}`,...e)}function f(t,...e){h.logLevel<=s.$b.ERROR&&h.error(`Auth (${r.MF}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t,...e){throw w(t,...e)}function m(t,...e){return w(t,...e)}function g(t,e,n){const r=Object.assign(Object.assign({},u()),{[e]:n}),s=new i.FA("auth","Firebase",r);return s.create(e,{appName:t.name})}function v(t){return g(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&p(t,"argument-error"),g(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function w(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function _(t,e,...n){if(!t)throw w(e,...n)}function b(t){const e="INTERNAL ASSERTION FAILED: "+t;throw f(e),new Error(e)}function E(t,e){t||b(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function I(){return"http:"===S()||"https:"===S()}function S(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||(0,i.sr)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t,e){this.shortDelay=t,this.longDelay=e,E(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e){E(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},N=new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function P(t,e,n,r,s={}){return L(t,s,(async()=>{let s={},o={};r&&("GET"===e?o=r:s={body:JSON.stringify(r)});const a=(0,i.Am)(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},s);return(0,i.c1)()||(u.referrerPolicy="no-referrer"),R.fetch()(U(t,t.config.apiHost,n,a),u)}))}async function L(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},x),e);try{const e=new j(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw V(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw V(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw V(t,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(t,a,o);p(t,a)}}catch(s){if(s instanceof i.g)throw s;p(t,"network-request-failed",{message:String(s)})}}async function M(t,e,n,r,i={}){const s=await P(t,e,n,r,i);return"mfaPendingCredential"in s&&p(t,"multi-factor-auth-required",{_serverResponse:s}),s}function U(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?O(t.config,i):`${t.config.apiScheme}://${i}`}function F(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class j{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(m(this.auth,"network-request-failed"))),N.get())}))}}function V(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=m(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t){return void 0!==t&&void 0!==t.enterprise}class B{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return F(e.enforcementState);return null}isProviderEnabled(t){return"ENFORCE"===this.getProviderEnforcementState(t)||"AUDIT"===this.getProviderEnforcementState(t)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(t,e){return P(t,"GET","/v2/recaptchaConfig",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(t,e){return P(t,"POST","/v1/accounts:delete",e)}async function H(t,e){return P(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(t,e=!1){const n=(0,i.Ku)(t),r=await n.getIdToken(e),s=Q(r);_(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:K(G(s.auth_time)),issuedAtTime:K(G(s.iat)),expirationTime:K(G(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function G(t){return 1e3*Number(t)}function Q(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return f("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,i.u)(n);return t?JSON.parse(t):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function J(t){const e=Q(t);return _(e,"internal-error"),_("undefined"!==typeof e.exp,"internal-error"),_("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof i.g&&Y(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Y({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=K(this.lastLoginAt),this.creationTime=K(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(t){var e;const n=t.auth,r=await t.getIdToken(),i=await X(t,H(n,{idToken:r}));_(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?it(s.providerUserInfo):[],a=rt(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new tt(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function nt(t){const e=(0,i.Ku)(t);await et(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function it(t){return t.map((t=>{var{providerId:e}=t,n=o(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(t,e){const n=await L(t,{},(async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=U(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ot(t,e){return P(t,"POST","/v2/accounts:revokeToken",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){_(t.idToken,"internal-error"),_("undefined"!==typeof t.idToken,"internal-error"),_("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):J(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){_(0!==t.length,"internal-error");const e=J(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return e||!this.accessToken||this.isExpired?(_(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await st(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new at;return n&&(_("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(_("string"===typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(_("number"===typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new at,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e){_("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class ut{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new tt(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await X(this,this.stsTokenManager.getToken(this.auth,t));return _(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return W(this,t)}reload(){return nt(this)}_assign(t){this!==t&&(_(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ut(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await et(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r.xZ)(this.auth.app))return Promise.reject(v(this.auth));const t=await this.getIdToken();return await X(this,z(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,v=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:T}=e;_(y&&T,t,"internal-error");const I=at.fromJSON(this.name,T);_("string"===typeof y,t,"internal-error"),ct(l,t.name),ct(h,t.name),_("boolean"===typeof w,t,"internal-error"),_("boolean"===typeof b,t,"internal-error"),ct(d,t.name),ct(f,t.name),ct(p,t.name),ct(m,t.name),ct(g,t.name),ct(v,t.name);const S=new ut({uid:y,auth:t,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:v});return E&&Array.isArray(E)&&(S.providerData=E.map((t=>Object.assign({},t)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(t,e,n=!1){const r=new at;r.updateFromServerResponse(e);const i=new ut({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await et(i),i}static async _fromGetAccountInfoResponse(t,e,n){const r=e.users[0];_(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?it(r.providerUserInfo):[],s=!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length),o=new at;o.updateFromIdToken(n);const a=new ut({uid:r.localId,auth:t,stsTokenManager:o,isAnonymous:s}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new tt(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length)};return Object.assign(a,c),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new Map;function ht(t){E(t instanceof Function,"Expected a class definition");let e=lt.get(t);return e?(E(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lt.set(t,e),e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}dt.type="NONE";const ft=dt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t,e,n){return`firebase:${t}:${e}:${n}`}class mt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pt(this.userKey,r.apiKey,i),this.fullPersistenceKey=pt("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ut._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new mt(ht(ft),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||ht(ft);const s=pt(n,t.config.apiKey,t.name);let o=null;for(const u of e)try{const e=await u._get(s);if(e){const n=ut._fromJSON(t,e);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(c){}}))),new mt(i,t,n)):new mt(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_t(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Et(e))return"Blackberry";if(Tt(e))return"Webos";if(yt(e))return"Safari";if((e.includes("chrome/")||wt(e))&&!e.includes("edge/"))return"Chrome";if(bt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function vt(t=(0,i.ZQ)()){return/firefox\//i.test(t)}function yt(t=(0,i.ZQ)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wt(t=(0,i.ZQ)()){return/crios\//i.test(t)}function _t(t=(0,i.ZQ)()){return/iemobile/i.test(t)}function bt(t=(0,i.ZQ)()){return/android/i.test(t)}function Et(t=(0,i.ZQ)()){return/blackberry/i.test(t)}function Tt(t=(0,i.ZQ)()){return/webos/i.test(t)}function It(t=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function St(t=(0,i.ZQ)()){var e;return It(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Ct(){return(0,i.lT)()&&10===document.documentMode}function At(t=(0,i.ZQ)()){return It(t)||bt(t)||Tt(t)||Et(t)||/windows phone/i.test(t)||_t(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,e=[]){let n;switch(t){case"Browser":n=gt((0,i.ZQ)());break;case"Worker":n=`${gt((0,i.ZQ)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.MF}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{const r=t(e);n(r)}catch(i){r(i)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(t,e={}){return P(t,"GET","/v2/passwordPolicy",D(t,e))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=6;class Nt{constructor(t){var e,n,r,i;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(e=s.minPasswordLength)&&void 0!==e?e:xt,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=t.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=t.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=null===(e=a.meetsMinPasswordLength)||void 0===e||e),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(t,e){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(e.meetsMinPasswordLength=t.length>=n),r&&(e.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,e){let n;this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);for(let r=0;r<t.length;r++)n=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(e,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,e,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t,e,n,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lt(this),this.idTokenSubscription=new Lt(this),this.beforeStateQueue=new Ot(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=ht(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await mt.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUserFromIdToken(t){try{const e=await H(this,{idToken:t}),n=await ut._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(n)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if((0,r.xZ)(this.app)){const t=this.app.settings.authIdToken;return t?new Promise((e=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(t).then(e,e)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,r=null===i||void 0===i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==r||!(null===o||void 0===o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await et(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if((0,r.xZ)(this.app))return Promise.reject(v(this));const e=t?(0,i.Ku)(t):null;return e&&_(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&_(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(0,r.xZ)(this.app)?Promise.reject(v(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return(0,r.xZ)(this.app)?Promise.reject(v(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(ht(t))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Rt(this),e=new Nt(t);null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new i.FA("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}authStateReady(){return new Promise(((t,e)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged((()=>{n(),t()}),e)}}))}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};null!=this.tenantId&&(n.tenantId=this.tenantId),await ot(this,n)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&ht(t)||this._popupRedirectResolver;_(e,this,"argument-error"),this.redirectPersistenceManager=await mt.create(this,[ht(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(_(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"===typeof e){const i=t.addObserver(e,n,r);return()=>{s=!0,i()}}{const n=t.addObserver(e);return()=>{s=!0,n()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=kt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if((0,r.xZ)(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null===e||void 0===e?void 0:e.error)&&d(`Error while retrieving App Check token: ${e.error}`),null===e||void 0===e?void 0:e.token}}function Pt(t){return(0,i.Ku)(t)}class Lt{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,i.tD)((t=>this.observer=t))}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ut(t){Mt=t}function Ft(t){return Mt.loadJS(t)}function jt(){return Mt.recaptchaEnterpriseScript}function Vt(){return Mt.gapiScript}function $t(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(){this.enterprise=new qt}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class qt{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const zt="recaptcha-enterprise",Ht="NO_RECAPTCHA";class Kt{constructor(t){this.type=zt,this.auth=Pt(t)}async verify(t="verify",e=!1){async function n(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{q(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new B(r);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))}function r(e,n,r){const i=window.grecaptcha;$(i)?i.enterprise.ready((()=>{i.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n(Ht)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){const t=new Bt;return t.execute("siteKey",{action:"verify"})}return new Promise(((t,i)=>{n(this.auth).then((n=>{if(!e&&$(window.grecaptcha))r(n,t,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let e=jt();0!==e.length&&(e+=n),Ft(e).then((()=>{r(n,t,i)})).catch((t=>{i(t)}))}})).catch((t=>{i(t)}))}))}}async function Wt(t,e,n,r=!1,i=!1){const s=new Kt(t);let o;if(i)o=Ht;else try{o=await s.verify(n)}catch(c){o=await s.verify(n,!0)}const a=Object.assign({},e);if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in a){const t=a.phoneEnrollmentInfo.phoneNumber,e=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:t,recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const t=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Gt(t,e,n,r,i){var s,o;if("EMAIL_PASSWORD_PROVIDER"===i){if(null===(s=t._getRecaptchaConfig())||void 0===s?void 0:s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Wt(t,e,n,"getOobCode"===n);return r(t,i)}return r(t,e).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await Wt(t,e,n,"getOobCode"===n);return r(t,i)}return Promise.reject(i)}))}if("PHONE_PROVIDER"===i){if(null===(o=t._getRecaptchaConfig())||void 0===o?void 0:o.isProviderEnabled("PHONE_PROVIDER")){const i=await Wt(t,e,n);return r(t,i).catch((async i=>{var s;if("AUDIT"===(null===(s=t._getRecaptchaConfig())||void 0===s?void 0:s.getProviderEnforcementState("PHONE_PROVIDER"))&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const i=await Wt(t,e,n,!1,!0);return r(t,i)}return Promise.reject(i)}))}{const i=await Wt(t,e,n,!1,!0);return r(t,i)}}return Promise.reject(i+" provider is not supported.")}async function Qt(t){const e=Pt(t),n=await q(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new B(n);if(null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()){const t=new Kt(e);t.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,e){const n=(0,r.j6)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),r=n.getOptions();if((0,i.bD)(r,null!==e&&void 0!==e?e:{}))return t;p(t,"already-initialized")}const s=n.initialize({options:e});return s}function Xt(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ht);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}function Yt(t,e,n){const r=Pt(t);_(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(null===n||void 0===n?void 0:n.disableWarnings),o=Zt(e),{host:a,port:c}=te(e),u=null===c?"":`:${c}`,l={url:`${o}//${a}${u}/`},h=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator)return _(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void _((0,i.bD)(l,r.config.emulator)&&(0,i.bD)(h,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=l,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,s||ne()}function Zt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function te(t){const e=Zt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:ee(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:ee(e)}}}function ee(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ne(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return b("not implemented")}_getIdTokenResponse(t){return b("not implemented")}_linkToIdToken(t,e){return b("not implemented")}_getReauthenticationResolver(t){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(t,e){return P(t,"POST","/v1/accounts:signUp",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function se(t,e){return M(t,"POST","/v1/accounts:signInWithPassword",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function oe(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",D(t,e))}async function ae(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce extends re{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new ce(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new ce(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gt(t,e,"signInWithPassword",se,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return oe(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const n={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gt(t,n,"signUpPassword",ie,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return ae(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ue(t,e){return M(t,"POST","/v1/accounts:signInWithIdp",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le="http://localhost";class he extends re{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new he(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=o(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new he(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){const e=this.buildRequest();return ue(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,ue(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,ue(t,e)}buildRequest(){const t={requestUri:le,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,i.Am)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function de(t,e){return P(t,"POST","/v1/accounts:sendVerificationCode",D(t,e))}async function fe(t,e){return M(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,e))}async function pe(t,e){const n=await M(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,e));if(n.temporaryProof)throw V(t,"account-exists-with-different-credential",n);return n}const me={["USER_NOT_FOUND"]:"user-not-found"};async function ge(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return M(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,n),me)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve extends re{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new ve({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new ve({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return fe(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return pe(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return ge(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new ve({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function we(t){const e=(0,i.I9)((0,i.hp)(t))["link"],n=e?(0,i.I9)((0,i.hp)(e))["deep_link_id"]:null,r=(0,i.I9)((0,i.hp)(t))["deep_link_id"],s=r?(0,i.I9)((0,i.hp)(r))["link"]:null;return s||r||n||e||t}class _e{constructor(t){var e,n,r,s,o,a;const c=(0,i.I9)((0,i.hp)(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ye(null!==(r=c["mode"])&&void 0!==r?r:null);_(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=we(t);try{return new _e(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class be{constructor(){this.providerId=be.PROVIDER_ID}static credential(t,e){return ce._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=_e.parseLink(e);return _(n,"argument-error"),ce._fromEmailAndCode(t,n.code,n.tenantId)}}be.PROVIDER_ID="password",be.EMAIL_PASSWORD_SIGN_IN_METHOD="password",be.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ee{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends Ee{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ie extends Te{constructor(){super("facebook.com")}static credential(t){return he._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ie.credentialFromTaggedObject(t)}static credentialFromError(t){return Ie.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ie.credential(t.oauthAccessToken)}catch(e){return null}}}Ie.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ie.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se extends Te{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return he._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Se.credentialFromTaggedObject(t)}static credentialFromError(t){return Se.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Se.credential(e,n)}catch(r){return null}}}Se.GOOGLE_SIGN_IN_METHOD="google.com",Se.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ce extends Te{constructor(){super("github.com")}static credential(t){return he._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ce.credentialFromTaggedObject(t)}static credentialFromError(t){return Ce.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ce.credential(t.oauthAccessToken)}catch(e){return null}}}Ce.GITHUB_SIGN_IN_METHOD="github.com",Ce.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ae extends Te{constructor(){super("twitter.com")}static credential(t,e){return he._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Ae.credentialFromTaggedObject(t)}static credentialFromError(t){return Ae.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Ae.credential(e,n)}catch(r){return null}}}Ae.TWITTER_SIGN_IN_METHOD="twitter.com",Ae.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ke{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await ut._fromIdTokenResponse(t,n,r),s=Oe(n),o=new ke({user:i,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Oe(n);return new ke({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function Oe(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re extends i.g{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Re.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new Re(t,e,n,r)}}function xe(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Re._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(t,e,n=!1){const r=await X(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ke._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function De(t,e,n=!1){const{auth:i}=t;if((0,r.xZ)(i.app))return Promise.reject(v(i));const s="reauthenticate";try{const r=await X(t,xe(i,s,e,t),n);_(r.idToken,i,"internal-error");const o=Q(r.idToken);_(o,i,"internal-error");const{sub:a}=o;return _(t.uid===a,i,"user-mismatch"),ke._forOperation(t,s,r)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&p(i,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(t,e,n=!1){if((0,r.xZ)(t.app))return Promise.reject(v(t));const i="signIn",s=await xe(t,i,e),o=await ke._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(o.user),o}function Le(t,e,n,r){return(0,i.Ku)(t).onIdTokenChanged(e,n,r)}function Me(t,e,n){return(0,i.Ku)(t).beforeAuthStateChanged(e,n)}function Ue(t,e,n,r){return(0,i.Ku)(t).onAuthStateChanged(e,n,r)}function Fe(t){return(0,i.Ku)(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function je(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",D(t,e))}function Ve(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",D(t,e))}function $e(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",D(t,e))}function Be(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",D(t,e))}new WeakMap;const qe="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(qe,"1"),this.storage.removeItem(qe),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=1e3,Ke=10;class We extends ze{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=At(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;e?this.detachListener():this.stopPolling();const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);Ct()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,Ke):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),He)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}We.type="LOCAL";const Ge=We;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends ze{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Qe.type="SESSION";const Je=Qe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Ye(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await Xe(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ze(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye.receivers=[];class tn{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Ze("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return window}function nn(t){en().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return"undefined"!==typeof en()["WorkerGlobalScope"]&&"function"===typeof en()["importScripts"]}async function sn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function on(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function an(){return rn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="firebaseLocalStorageDb",un=1,ln="firebaseLocalStorage",hn="fbase_key";class dn{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function fn(t,e){return t.transaction([ln],e?"readwrite":"readonly").objectStore(ln)}function pn(){const t=indexedDB.deleteDatabase(cn);return new dn(t).toPromise()}function mn(){const t=indexedDB.open(cn,un);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(ln,{keyPath:hn})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(ln)?e(n):(n.close(),await pn(),e(await mn()))}))}))}async function gn(t,e,n){const r=fn(t,!0).put({[hn]:e,value:n});return new dn(r).toPromise()}async function vn(t,e){const n=fn(t,!1).get(e),r=await new dn(n).toPromise();return void 0===r?null:r.value}function yn(t,e){const n=fn(t,!0).delete(e);return new dn(n).toPromise()}const wn=800,_n=3;class bn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await mn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>_n)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ye._getInstance(an()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await sn(),!this.activeServiceWorker)return;this.sender=new tn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&on()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await mn();return await gn(t,qe,"1"),await yn(t,qe),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>gn(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>vn(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>yn(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=fn(t,!1).getAll();return new dn(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;if(0!==t.length)for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),wn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}bn.type="LOCAL";const En=bn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:start",D(t,e))}function In(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",D(t,e))}function Sn(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t("rcb"),new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cn="recaptcha";async function An(t,e,n){var r;if(!t._getRecaptchaConfig())try{await Qt(t)}catch(i){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(i="string"===typeof e?{phoneNumber:e}:e,"session"in i){const e=i.session;if("phoneNumber"in i){_("enroll"===e.type,t,"internal-error");const r={idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},s=async(t,e)=>{if(e.phoneEnrollmentInfo.captchaResponse===Ht){_((null===n||void 0===n?void 0:n.type)===Cn,t,"argument-error");const r=await kn(t,e,n);return je(t,r)}return je(t,e)},o=Gt(t,r,"mfaSmsEnrollment",s,"PHONE_PROVIDER"),a=await o.catch((t=>Promise.reject(t)));return a.phoneSessionInfo.sessionInfo}{_("signin"===e.type,t,"internal-error");const s=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;_(s,t,"missing-multi-factor-info");const o={mfaPendingCredential:e.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},a=async(t,e)=>{if(e.phoneSignInInfo.captchaResponse===Ht){_((null===n||void 0===n?void 0:n.type)===Cn,t,"argument-error");const r=await kn(t,e,n);return Tn(t,r)}return Tn(t,e)},c=Gt(t,o,"mfaSmsSignIn",a,"PHONE_PROVIDER"),u=await c.catch((t=>Promise.reject(t)));return u.phoneResponseInfo.sessionInfo}}{const e={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"},r=async(t,e)=>{if(e.captchaResponse===Ht){_((null===n||void 0===n?void 0:n.type)===Cn,t,"argument-error");const r=await kn(t,e,n);return de(t,r)}return de(t,e)},s=Gt(t,e,"sendVerificationCode",r,"PHONE_PROVIDER"),o=await s.catch((t=>Promise.reject(t)));return o.sessionInfo}}finally{null===n||void 0===n||n._reset()}}async function kn(t,e,n){_(n.type===Cn,t,"argument-error");const r=await n.verify();_("string"===typeof r,t,"argument-error");const i=Object.assign({},e);if("phoneEnrollmentInfo"in i){const t=i.phoneEnrollmentInfo.phoneNumber,e=i.phoneEnrollmentInfo.captchaResponse,n=i.phoneEnrollmentInfo.clientType,s=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:t,recaptchaToken:r,captchaResponse:e,clientType:n,recaptchaVersion:s}}),i}if("phoneSignInInfo"in i){const t=i.phoneSignInInfo.captchaResponse,e=i.phoneSignInInfo.clientType,n=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:t,clientType:e,recaptchaVersion:n}}),i}return Object.assign(i,{recaptchaToken:r}),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t){this.providerId=On.PROVIDER_ID,this.auth=Pt(t)}verifyPhoneNumber(t,e){return An(this.auth,t,(0,i.Ku)(e))}static credential(t,e){return ve._fromVerification(t,e)}static credentialFromResult(t){const e=t;return On.credentialFromTaggedObject(e)}static credentialFromError(t){return On.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?ve._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rn(t,e){return e?ht(e):(_(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On.PROVIDER_ID="phone",On.PHONE_SIGN_IN_METHOD="phone";class xn extends re{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ue(t,this._buildIdpRequest())}_linkToIdToken(t,e){return ue(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return ue(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Nn(t){return Pe(t.auth,new xn(t),t.bypassAuthState)}function Dn(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),De(n,new xn(t),t.bypassAuthState)}async function Pn(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),Ne(n,new xn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Nn;case"linkViaPopup":case"linkViaRedirect":return Pn;case"reauthViaPopup":case"reauthViaRedirect":return Dn;default:p(this.auth,"internal-error")}}resolve(t){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new k(2e3,1e4);async function Un(t,e,n){if((0,r.xZ)(t.app))return Promise.reject(m(t,"operation-not-supported-in-this-environment"));const i=Pt(t);y(t,e,Ee);const s=Rn(i,n),o=new Fn(i,"signInViaPopup",e,s);return o.executeNotNull()}class Fn extends Ln{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Fn.currentPopupAction&&Fn.currentPopupAction.cancel(),Fn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return _(t,this.auth,"internal-error"),t}async onExecution(){E(1===this.filter.length,"Popup operations only handle one event");const t=Ze();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,Mn.get())};t()}}Fn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const jn="pendingRedirect",Vn=new Map;class $n extends Ln{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Vn.get(this.auth._key());if(!t){try{const e=await Bn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Vn.set(this.auth._key(),t)}return this.bypassAuthState||Vn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Bn(t,e){const n=Hn(e),r=zn(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function qn(t,e){Vn.set(t._key(),e)}function zn(t){return ht(t._redirectPersistence)}function Hn(t){return pt(jn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kn(t,e,n=!1){if((0,r.xZ)(t.app))return Promise.reject(v(t));const i=Pt(t),s=Rn(i,e),o=new $n(i,s,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wn=6e5;class Gn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Xn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Jn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(m(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Wn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qn(t))}saveEventToCache(t){this.cachedEventUids.add(Qn(t)),this.lastProcessedEventTime=Date.now()}}function Qn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Jn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Xn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yn(t,e={}){return P(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tr=/^https?/;async function er(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Yn(t);for(const r of e)try{if(nr(r))return}catch(n){}p(t,"unauthorized-domain")}function nr(t){const e=T(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!tr.test(n))return!1;if(Zn.test(t))return r===t;const i=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new k(3e4,6e4);function ir(){const t=en().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function sr(t){return new Promise(((e,n)=>{var r,i,s;function o(){ir(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ir(),n(m(t,"network-request-failed"))},timeout:rr.get()})}if(null===(i=null===(r=en().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=en().gapi)||void 0===s?void 0:s.load)){const e=$t("iframefcb");return en()[e]=()=>{gapi.load?o():n(m(t,"network-request-failed"))},Ft(`${Vt()}?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw or=null,t}))}let or=null;function ar(t){return or=or||sr(t),or}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=new k(5e3,15e3),ur="__/auth/iframe",lr="emulator/auth/iframe",hr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fr(t){const e=t.config;_(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?O(e,lr):`https://${t.config.authDomain}/${ur}`,s={apiKey:e.apiKey,appName:t.name,v:r.MF},o=dr.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.Am)(s).slice(1)}`}async function pr(t){const e=await ar(t),n=en().gapi;return _(n,t,"internal-error"),e.open({where:document.body,url:fr(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hr,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=m(t,"network-request-failed"),s=en().setTimeout((()=>{r(i)}),cr.get());function o(){en().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gr=500,vr=600,yr="_blank",wr="http://localhost";class _r{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function br(t,e,n,r=gr,s=vr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},mr),{width:r.toString(),height:s.toString(),top:o,left:a}),l=(0,i.ZQ)().toLowerCase();n&&(c=wt(l)?yr:n),vt(l)&&(e=e||wr,u.scrollbars="yes");const h=Object.entries(u).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(St(l)&&"_self"!==c)return Er(e||"",c),new _r(null);const d=window.open(e||"",c,h);_(d,t,"popup-blocked");try{d.focus()}catch(f){}return new _r(d)}function Er(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="__/auth/handler",Ir="emulator/auth/handler",Sr=encodeURIComponent("fac");async function Cr(t,e,n,s,o,a){_(t.config.authDomain,t,"auth-domain-config-required"),_(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:r.MF,eventId:o};if(e instanceof Ee){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,i.Im)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof Te){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await t._getAppCheckToken(),h=l?`#${Sr}=${encodeURIComponent(l)}`:"";return`${Ar(t)}?${(0,i.Am)(u).slice(1)}${h}`}function Ar({config:t}){return t.emulator?O(t,Ir):`https://${t.authDomain}/${Tr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="webStorageSupport";class Or{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Je,this._completeRedirectFn=Kn,this._overrideRedirectResult=qn}async _openPopup(t,e,n,r){var i;E(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await Cr(t,e,n,T(),r);return br(t,s,Ze())}async _openRedirect(t,e,n,r){await this._originValidation(t);const i=await Cr(t,e,n,T(),r);return nn(i),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(E(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await pr(t),n=new Gn(t);return e.register("authEvent",(e=>{_(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(kr,{type:kr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[kr];void 0!==i&&e(!!i),p(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=er(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return At()||yt()||It()}}const Rr=Or;class xr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return b("unexpected MultiFactorSessionType")}}}class Nr extends xr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Nr(t)}_finalizeEnroll(t,e,n){return Ve(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return In(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Dr{constructor(){}static assertion(t){return Nr._fromCredential(t)}}Dr.FACTOR_ID="phone";class Pr{static assertionForEnrollment(t,e){return Lr._fromSecret(t,e)}static assertionForSignIn(t,e){return Lr._fromEnrollmentId(t,e)}static async generateSecret(t){var e;const n=t;_("undefined"!==typeof(null===(e=n.user)||void 0===e?void 0:e.auth),"internal-error");const r=await $e(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Mr._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}Pr.FACTOR_ID="totp";class Lr extends xr{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new Lr(e,void 0,t)}static _fromEnrollmentId(t,e){return new Lr(e,t)}async _finalizeEnroll(t,e,n){return _("undefined"!==typeof this.secret,t,"argument-error"),Be(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){_(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return Sn(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Mr{constructor(t,e,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(t,e){return new Mr(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var n;let r=!1;return(Ur(t)||Ur(e))&&(r=!0),r&&(Ur(t)&&(t=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Ur(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Ur(t){return"undefined"===typeof t||0===(null===t||void 0===t?void 0:t.length)}var Fr="@firebase/auth",jr="1.9.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Br(t){(0,r.om)(new a.uA("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;_(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kt(t)},u=new Dt(r,i,s,c);return Xt(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),(0,r.om)(new a.uA("auth-internal",(t=>{const e=Pt(t.getProvider("auth").getImmediate());return(t=>new Vr(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)(Fr,jr,$r(t)),(0,r.KO)(Fr,jr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=300,zr=(0,i.XA)("authIdTokenMaxAge")||qr;let Hr=null;const Kr=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zr)return;const i=null===n||void 0===n?void 0:n.token;Hr!==i&&(Hr=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Wr(t=(0,r.Sx)()){const e=(0,r.j6)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Jt(t,{popupRedirectResolver:Rr,persistence:[En,Ge,Je]}),s=(0,i.XA)("authTokenSyncURL");if(s&&"boolean"===typeof isSecureContext&&isSecureContext){const t=new URL(s,location.origin);if(location.origin===t.origin){const e=Kr(t.toString());Me(n,e,(()=>e(n.currentUser))),Le(n,(t=>e(t)))}}const o=(0,i.Tj)("auth");return o&&Yt(n,`http://${o}`),n}function Gr(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}Ut({loadJS(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=m("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",Gr().appendChild(r)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Br("Browser")},3706:function(t,e,n){var r=n(9504),i=n(4901),s=n(7629),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},3717:function(t,e){e.f=Object.getOwnPropertySymbols},3724:function(t,e,n){var r=n(9039);t.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},3789:function(t,e,n){var r=n(9306),i=n(8551),s=n(9565),o=n(1291),a=n(1767),c="Invalid size",u=RangeError,l=TypeError,h=Math.max,d=function(t,e){this.set=t,this.size=h(e,0),this.has=r(t.has),this.keys=r(t.keys)};d.prototype={getIterator:function(){return a(i(s(this.keys,this.set)))},includes:function(t){return s(this.has,this.set,t)}},t.exports=function(t){i(t);var e=+t.size;if(e!==e)throw new l(c);var n=o(e);if(n<0)throw new u(c);return new d(t,n)}},3838:function(t,e,n){var r=n(7080),i=n(5170),s=n(8469),o=n(3789);t.exports=function(t){var e=r(this),n=o(t);return!(i(e)>n.size)&&!1!==s(e,(function(t){if(!n.includes(t))return!1}),!0)}},3853:function(t,e,n){var r=n(6518),i=n(4449),s=n(4916),o=!s("isDisjointFrom",(function(t){return!t}));r({target:"Set",proto:!0,real:!0,forced:o},{isDisjointFrom:i})},3863:function(t,e,n){n.d(e,{MF:function(){return wt},j6:function(){return pt},xZ:function(){return mt},om:function(){return ft},Sx:function(){return bt},Wp:function(){return _t},KO:function(){return Et}});n(4114),n(8111),n(2489),n(1701),n(3579);var r=n(1640),i=n(9951),s=n(8506);n(4979);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(E(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),m.set(e,t),e}function v(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));d.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){y=t(y)}function _(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return f.set(r,e.sort?e.sort():[e]),E(r)}}function b(t){return"function"===typeof t?_(t):(t instanceof IDBTransaction&&v(t),o(t,u())?new Proxy(t,y):t)}function E(t){if(t instanceof IDBRequest)return g(t);if(p.has(t))return p.get(t);const e=b(t);return e!==t&&(p.set(t,e),m.set(e,t)),e}const T=t=>m.get(t);function I(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],A=new Map;function k(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(A.get(e))return A.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return A.set(e,s),s}w((t=>({...t,get:(e,n,r)=>k(e,n)||t.get(e,n,r),has:(e,n)=>!!k(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(R(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function R(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const x="@firebase/app",N="0.11.3",D=new i.Vy("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",F="@firebase/app-check",j="@firebase/auth",V="@firebase/auth-compat",$="@firebase/database",B="@firebase/data-connect",q="@firebase/database-compat",z="@firebase/functions",H="@firebase/functions-compat",K="@firebase/installations",W="@firebase/installations-compat",G="@firebase/messaging",Q="@firebase/messaging-compat",J="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",Z="@firebase/remote-config-compat",tt="@firebase/storage",et="@firebase/storage-compat",nt="@firebase/firestore",rt="@firebase/vertexai",it="@firebase/firestore-compat",st="firebase",ot="11.5.0",at="[DEFAULT]",ct={[x]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[F]:"fire-app-check",[U]:"fire-app-check-compat",[j]:"fire-auth",[V]:"fire-auth-compat",[$]:"fire-rtdb",[B]:"fire-data-connect",[q]:"fire-rtdb-compat",[z]:"fire-fn",[H]:"fire-fn-compat",[K]:"fire-iid",[W]:"fire-iid-compat",[G]:"fire-fcm",[Q]:"fire-fcm-compat",[J]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[Z]:"fire-rc-compat",[tt]:"fire-gcs",[et]:"fire-gcs-compat",[nt]:"fire-fst",[it]:"fire-fst-compat",[rt]:"fire-vertex","fire-js":"fire-js",[st]:"fire-js-all"},ut=new Map,lt=new Map,ht=new Map;function dt(t,e){try{t.container.addComponent(e)}catch(n){D.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ft(t){const e=t.name;if(ht.has(e))return D.debug(`There were multiple attempts to register component ${e}.`),!1;ht.set(e,t);for(const n of ut.values())dt(n,t);for(const n of lt.values())dt(n,t);return!0}function pt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mt(t){return null!==t&&void 0!==t&&void 0!==t.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gt={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},vt=new s.FA("app","Firebase",gt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wt=ot;function _t(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:at,automaticDataCollectionEnabled:!1},e),o=i.name;if("string"!==typeof o||!o)throw vt.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw vt.create("no-options");const a=ut.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw vt.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const r of ht.values())c.addComponent(r);const u=new yt(n,i,c);return ut.set(o,u),u}function bt(t=at){const e=ut.get(t);if(!e&&t===at&&(0,s.T9)())return _t();if(!e)throw vt.create("no-app",{appName:t});return e}function Et(t,e,n){var i;let s=null!==(i=ct[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void D.warn(t.join(" "))}ft(new r.uA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tt="firebase-heartbeat-database",It=1,St="firebase-heartbeat-store";let Ct=null;function At(){return Ct||(Ct=I(Tt,It,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(St)}catch(n){console.warn(n)}}}}).catch((t=>{throw vt.create("idb-open",{originalErrorMessage:t.message})}))),Ct}async function kt(t){try{const e=await At(),n=e.transaction(St),r=await n.objectStore(St).get(Rt(t));return await n.done,r}catch(e){if(e instanceof s.g)D.warn(e.message);else{const t=vt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});D.warn(t.message)}}}async function Ot(t,e){try{const n=await At(),r=n.transaction(St,"readwrite"),i=r.objectStore(St);await i.put(e,Rt(t)),await r.done}catch(n){if(n instanceof s.g)D.warn(n.message);else{const t=vt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});D.warn(t.message)}}}function Rt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=1024,Nt=30;class Dt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Mt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;try{const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=Pt();if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some((t=>t.date===i)))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>Nt){const t=Ft(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(t,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){D.warn(n)}}async getHeartbeatsHeader(){var t;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=Pt(),{heartbeatsToSend:n,unsentEntries:r}=Lt(this._heartbeatsCache.heartbeats),i=(0,s.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return D.warn(e),""}}}function Pt(){const t=new Date;return t.toISOString().substring(0,10)}function Lt(t,e=xt){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Ut(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ut(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Mt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await kt(this.app);return(null===t||void 0===t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ot(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ot(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Ut(t){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:t})).length}function Ft(t){if(0===t.length)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t){ft(new r.uA("platform-logger",(t=>new O(t)),"PRIVATE")),ft(new r.uA("heartbeat",(t=>new Dt(t)),"PRIVATE")),Et(x,N,t),Et(x,N,"esm2017"),Et("fire-js","")}jt("")},3925:function(t,e,n){var r=n(34);t.exports=function(t){return r(t)||null===t}},4055:function(t,e,n){var r=n(4576),i=n(34),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},4114:function(t,e,n){var r=n(6518),i=n(8981),s=n(6198),o=n(4527),a=n(6837),c=n(9039),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=i(this),n=s(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return o(e,n),n}})},4117:function(t){t.exports=function(t){return null===t||void 0===t}},4204:function(t,e,n){var r=n(7080),i=n(4402).add,s=n(9286),o=n(3789),a=n(507);t.exports=function(t){var e=r(this),n=o(t).getIterator(),c=s(e);return a(n,(function(t){i(c,t)})),c}},4209:function(t,e,n){var r=n(8227),i=n(6269),s=r("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[s]===t)}},4215:function(t,e,n){var r=n(4576),i=n(2839),s=n(2195),o=function(t){return i.slice(0,t.length)===t};t.exports=function(){return o("Bun/")?"BUN":o("Cloudflare-Workers")?"CLOUDFLARE":o("Deno/")?"DENO":o("Node.js/")?"NODE":r.Bun&&"string"==typeof Bun.version?"BUN":r.Deno&&"object"==typeof Deno.version?"DENO":"process"===s(r.process)?"NODE":r.window&&r.document?"BROWSER":"REST"}()},4270:function(t,e,n){var r=n(9565),i=n(4901),s=n(34),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!s(a=r(n,t)))return a;if(i(n=t.valueOf)&&!s(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!s(a=r(n,t)))return a;throw new o("Can't convert object to primitive value")}},4373:function(t,e,n){n.d(e,{A:function(){return mn}});var r={};n.r(r),n.d(r,{hasBrowserEnv:function(){return Pt},hasStandardBrowserEnv:function(){return Mt},hasStandardBrowserWebWorkerEnv:function(){return Ut},navigator:function(){return Lt},origin:function(){return Ft}});n(4114),n(6573),n(8100),n(7936),n(8111),n(7588),n(7467),n(4732),n(9577),n(9848);function i(t,e){return function(){return t.apply(e,arguments)}}const{toString:s}=Object.prototype,{getPrototypeOf:o}=Object,a=(t=>e=>{const n=s.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),c=t=>(t=t.toLowerCase(),e=>a(e)===t),u=t=>e=>typeof e===t,{isArray:l}=Array,h=u("undefined");function d(t){return null!==t&&!h(t)&&null!==t.constructor&&!h(t.constructor)&&g(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const f=c("ArrayBuffer");function p(t){let e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&f(t.buffer),e}const m=u("string"),g=u("function"),v=u("number"),y=t=>null!==t&&"object"===typeof t,w=t=>!0===t||!1===t,_=t=>{if("object"!==a(t))return!1;const e=o(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},b=c("Date"),E=c("File"),T=c("Blob"),I=c("FileList"),S=t=>y(t)&&g(t.pipe),C=t=>{let e;return t&&("function"===typeof FormData&&t instanceof FormData||g(t.append)&&("formdata"===(e=a(t))||"object"===e&&g(t.toString)&&"[object FormData]"===t.toString()))},A=c("URLSearchParams"),[k,O,R,x]=["ReadableStream","Request","Response","Headers"].map(c),N=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function D(t,e,{allOwnKeys:n=!1}={}){if(null===t||"undefined"===typeof t)return;let r,i;if("object"!==typeof t&&(t=[t]),l(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),s=i.length;let o;for(r=0;r<s;r++)o=i[r],e.call(null,t[o],o,t)}}function P(t,e){e=e.toLowerCase();const n=Object.keys(t);let r,i=n.length;while(i-- >0)if(r=n[i],e===r.toLowerCase())return r;return null}const L=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global)(),M=t=>!h(t)&&t!==L;function U(){const{caseless:t}=M(this)&&this||{},e={},n=(n,r)=>{const i=t&&P(e,r)||r;_(e[i])&&_(n)?e[i]=U(e[i],n):_(n)?e[i]=U({},n):l(n)?e[i]=n.slice():e[i]=n};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&D(arguments[r],n);return e}const F=(t,e,n,{allOwnKeys:r}={})=>(D(e,((e,r)=>{n&&g(e)?t[r]=i(e,n):t[r]=e}),{allOwnKeys:r}),t),j=t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),V=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},$=(t,e,n,r)=>{let i,s,a;const c={};if(e=e||{},null==t)return e;do{i=Object.getOwnPropertyNames(t),s=i.length;while(s-- >0)a=i[s],r&&!r(a,t,e)||c[a]||(e[a]=t[a],c[a]=!0);t=!1!==n&&o(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},B=(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return-1!==r&&r===n},q=t=>{if(!t)return null;if(l(t))return t;let e=t.length;if(!v(e))return null;const n=new Array(e);while(e-- >0)n[e]=t[e];return n},z=(t=>e=>t&&e instanceof t)("undefined"!==typeof Uint8Array&&o(Uint8Array)),H=(t,e)=>{const n=t&&t[Symbol.iterator],r=n.call(t);let i;while((i=r.next())&&!i.done){const n=i.value;e.call(t,n[0],n[1])}},K=(t,e)=>{let n;const r=[];while(null!==(n=t.exec(e)))r.push(n);return r},W=c("HTMLFormElement"),G=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),Q=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),J=c("RegExp"),X=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};D(n,((n,i)=>{let s;!1!==(s=e(n,i,t))&&(r[i]=s||n)})),Object.defineProperties(t,r)},Y=t=>{X(t,((e,n)=>{if(g(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=t[n];g(r)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},Z=(t,e)=>{const n={},r=t=>{t.forEach((t=>{n[t]=!0}))};return l(t)?r(t):r(String(t).split(e)),n},tt=()=>{},et=(t,e)=>null!=t&&Number.isFinite(t=+t)?t:e;function nt(t){return!!(t&&g(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])}const rt=t=>{const e=new Array(10),n=(t,r)=>{if(y(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[r]=t;const i=l(t)?[]:{};return D(t,((t,e)=>{const s=n(t,r+1);!h(s)&&(i[e]=s)})),e[r]=void 0,i}}return t};return n(t,0)},it=c("AsyncFunction"),st=t=>t&&(y(t)||g(t))&&g(t.then)&&g(t.catch),ot=((t,e)=>t?setImmediate:e?((t,e)=>(L.addEventListener("message",(({source:n,data:r})=>{n===L&&r===t&&e.length&&e.shift()()}),!1),n=>{e.push(n),L.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))("function"===typeof setImmediate,g(L.postMessage)),at="undefined"!==typeof queueMicrotask?queueMicrotask.bind(L):"undefined"!==typeof process&&process.nextTick||ot;var ct={isArray:l,isArrayBuffer:f,isBuffer:d,isFormData:C,isArrayBufferView:p,isString:m,isNumber:v,isBoolean:w,isObject:y,isPlainObject:_,isReadableStream:k,isRequest:O,isResponse:R,isHeaders:x,isUndefined:h,isDate:b,isFile:E,isBlob:T,isRegExp:J,isFunction:g,isStream:S,isURLSearchParams:A,isTypedArray:z,isFileList:I,forEach:D,merge:U,extend:F,trim:N,stripBOM:j,inherits:V,toFlatObject:$,kindOf:a,kindOfTest:c,endsWith:B,toArray:q,forEachEntry:H,matchAll:K,isHTMLForm:W,hasOwnProperty:Q,hasOwnProp:Q,reduceDescriptors:X,freezeMethods:Y,toObjectSet:Z,toCamelCase:G,noop:tt,toFiniteNumber:et,findKey:P,global:L,isContextDefined:M,isSpecCompliantForm:nt,toJSONObject:rt,isAsyncFn:it,isThenable:st,setImmediate:ot,asap:at};n(1701),n(3579),n(1806);function ut(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}ct.inherits(ut,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ct.toJSONObject(this.config),code:this.code,status:this.status}}});const lt=ut.prototype,ht={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{ht[t]={value:t}})),Object.defineProperties(ut,ht),Object.defineProperty(lt,"isAxiosError",{value:!0}),ut.from=(t,e,n,r,i,s)=>{const o=Object.create(lt);return ct.toFlatObject(t,o,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),ut.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};var dt=ut,ft=null;function pt(t){return ct.isPlainObject(t)||ct.isArray(t)}function mt(t){return ct.endsWith(t,"[]")?t.slice(0,-2):t}function gt(t,e,n){return t?t.concat(e).map((function(t,e){return t=mt(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}function vt(t){return ct.isArray(t)&&!t.some(pt)}const yt=ct.toFlatObject(ct,{},null,(function(t){return/^is[A-Z]/.test(t)}));function wt(t,e,n){if(!ct.isObject(t))throw new TypeError("target must be an object");e=e||new(ft||FormData),n=ct.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!ct.isUndefined(e[t])}));const r=n.metaTokens,i=n.visitor||l,s=n.dots,o=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,c=a&&ct.isSpecCompliantForm(e);if(!ct.isFunction(i))throw new TypeError("visitor must be a function");function u(t){if(null===t)return"";if(ct.isDate(t))return t.toISOString();if(!c&&ct.isBlob(t))throw new dt("Blob is not supported. Use a Buffer instead.");return ct.isArrayBuffer(t)||ct.isTypedArray(t)?c&&"function"===typeof Blob?new Blob([t]):Buffer.from(t):t}function l(t,n,i){let a=t;if(t&&!i&&"object"===typeof t)if(ct.endsWith(n,"{}"))n=r?n:n.slice(0,-2),t=JSON.stringify(t);else if(ct.isArray(t)&&vt(t)||(ct.isFileList(t)||ct.endsWith(n,"[]"))&&(a=ct.toArray(t)))return n=mt(n),a.forEach((function(t,r){!ct.isUndefined(t)&&null!==t&&e.append(!0===o?gt([n],r,s):null===o?n:n+"[]",u(t))})),!1;return!!pt(t)||(e.append(gt(i,n,s),u(t)),!1)}const h=[],d=Object.assign(yt,{defaultVisitor:l,convertValue:u,isVisitable:pt});function f(t,n){if(!ct.isUndefined(t)){if(-1!==h.indexOf(t))throw Error("Circular reference detected in "+n.join("."));h.push(t),ct.forEach(t,(function(t,r){const s=!(ct.isUndefined(t)||null===t)&&i.call(e,t,ct.isString(r)?r.trim():r,n,d);!0===s&&f(t,n?n.concat(r):[r])})),h.pop()}}if(!ct.isObject(t))throw new TypeError("data must be an object");return f(t),e}var _t=wt;function bt(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function Et(t,e){this._pairs=[],t&&_t(t,this,e)}const Tt=Et.prototype;Tt.append=function(t,e){this._pairs.push([t,e])},Tt.toString=function(t){const e=t?function(e){return t.call(this,e,bt)}:bt;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var It=Et;function St(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ct(t,e,n){if(!e)return t;const r=n&&n.encode||St;ct.isFunction(n)&&(n={serialize:n});const i=n&&n.serialize;let s;if(s=i?i(e,n):ct.isURLSearchParams(e)?e.toString():new It(e,n).toString(r),s){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}class At{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){ct.forEach(this.handlers,(function(e){null!==e&&t(e)}))}}var kt=At,Ot={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Rt=(n(4603),n(7566),n(8721),"undefined"!==typeof URLSearchParams?URLSearchParams:It),xt="undefined"!==typeof FormData?FormData:null,Nt="undefined"!==typeof Blob?Blob:null,Dt={isBrowser:!0,classes:{URLSearchParams:Rt,FormData:xt,Blob:Nt},protocols:["http","https","file","blob","url","data"]};const Pt="undefined"!==typeof window&&"undefined"!==typeof document,Lt="object"===typeof navigator&&navigator||void 0,Mt=Pt&&(!Lt||["ReactNative","NativeScript","NS"].indexOf(Lt.product)<0),Ut=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)(),Ft=Pt&&window.location.href||"http://localhost";var jt={...r,...Dt};function Vt(t,e){return _t(t,new jt.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,r){return jt.isNode&&ct.isBuffer(t)?(this.append(e,t.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}function $t(t){return ct.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}function Bt(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function qt(t){function e(t,n,r,i){let s=t[i++];if("__proto__"===s)return!0;const o=Number.isFinite(+s),a=i>=t.length;if(s=!s&&ct.isArray(r)?r.length:s,a)return ct.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!o;r[s]&&ct.isObject(r[s])||(r[s]=[]);const c=e(t,n,r[s],i);return c&&ct.isArray(r[s])&&(r[s]=Bt(r[s])),!o}if(ct.isFormData(t)&&ct.isFunction(t.entries)){const n={};return ct.forEachEntry(t,((t,r)=>{e($t(t),r,n,0)})),n}return null}var zt=qt;function Ht(t,e,n){if(ct.isString(t))try{return(e||JSON.parse)(t),ct.trim(t)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(t)}const Kt={transitional:Ot,adapter:["xhr","http","fetch"],transformRequest:[function(t,e){const n=e.getContentType()||"",r=n.indexOf("application/json")>-1,i=ct.isObject(t);i&&ct.isHTMLForm(t)&&(t=new FormData(t));const s=ct.isFormData(t);if(s)return r?JSON.stringify(zt(t)):t;if(ct.isArrayBuffer(t)||ct.isBuffer(t)||ct.isStream(t)||ct.isFile(t)||ct.isBlob(t)||ct.isReadableStream(t))return t;if(ct.isArrayBufferView(t))return t.buffer;if(ct.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let o;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Vt(t,this.formSerializer).toString();if((o=ct.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return _t(o?{"files[]":t}:t,e&&new e,this.formSerializer)}}return i||r?(e.setContentType("application/json",!1),Ht(t)):t}],transformResponse:[function(t){const e=this.transitional||Kt.transitional,n=e&&e.forcedJSONParsing,r="json"===this.responseType;if(ct.isResponse(t)||ct.isReadableStream(t))return t;if(t&&ct.isString(t)&&(n&&!this.responseType||r)){const n=e&&e.silentJSONParsing,s=!n&&r;try{return JSON.parse(t)}catch(i){if(s){if("SyntaxError"===i.name)throw dt.from(i,dt.ERR_BAD_RESPONSE,this,null,this.response);throw i}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:jt.classes.FormData,Blob:jt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ct.forEach(["delete","get","head","post","put","patch"],(t=>{Kt.headers[t]={}}));var Wt=Kt;const Gt=ct.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Qt=t=>{const e={};let n,r,i;return t&&t.split("\n").forEach((function(t){i=t.indexOf(":"),n=t.substring(0,i).trim().toLowerCase(),r=t.substring(i+1).trim(),!n||e[n]&&Gt[n]||("set-cookie"===n?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)})),e};const Jt=Symbol("internals");function Xt(t){return t&&String(t).trim().toLowerCase()}function Yt(t){return!1===t||null==t?t:ct.isArray(t)?t.map(Yt):String(t)}function Zt(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(t))e[r[1]]=r[2];return e}const te=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function ee(t,e,n,r,i){return ct.isFunction(r)?r.call(this,e,n):(i&&(e=n),ct.isString(e)?ct.isString(r)?-1!==e.indexOf(r):ct.isRegExp(r)?r.test(e):void 0:void 0)}function ne(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}function re(t,e){const n=ct.toCamelCase(" "+e);["get","set","has"].forEach((r=>{Object.defineProperty(t,r+n,{value:function(t,n,i){return this[r].call(this,e,t,n,i)},configurable:!0})}))}class ie{constructor(t){t&&this.set(t)}set(t,e,n){const r=this;function i(t,e,n){const i=Xt(e);if(!i)throw new Error("header name must be a non-empty string");const s=ct.findKey(r,i);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||e]=Yt(t))}const s=(t,e)=>ct.forEach(t,((t,n)=>i(t,n,e)));if(ct.isPlainObject(t)||t instanceof this.constructor)s(t,e);else if(ct.isString(t)&&(t=t.trim())&&!te(t))s(Qt(t),e);else if(ct.isHeaders(t))for(const[o,a]of t.entries())i(a,o,n);else null!=t&&i(e,t,n);return this}get(t,e){if(t=Xt(t),t){const n=ct.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return Zt(t);if(ct.isFunction(e))return e.call(this,t,n);if(ct.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=Xt(t),t){const n=ct.findKey(this,t);return!(!n||void 0===this[n]||e&&!ee(this,this[n],n,e))}return!1}delete(t,e){const n=this;let r=!1;function i(t){if(t=Xt(t),t){const i=ct.findKey(n,t);!i||e&&!ee(n,n[i],i,e)||(delete n[i],r=!0)}}return ct.isArray(t)?t.forEach(i):i(t),r}clear(t){const e=Object.keys(this);let n=e.length,r=!1;while(n--){const i=e[n];t&&!ee(this,this[i],i,t,!0)||(delete this[i],r=!0)}return r}normalize(t){const e=this,n={};return ct.forEach(this,((r,i)=>{const s=ct.findKey(n,i);if(s)return e[s]=Yt(r),void delete e[i];const o=t?ne(i):String(i).trim();o!==i&&delete e[i],e[o]=Yt(r),n[o]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return ct.forEach(this,((n,r)=>{null!=n&&!1!==n&&(e[r]=t&&ct.isArray(n)?n.join(", "):n)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=this[Jt]=this[Jt]={accessors:{}},n=e.accessors,r=this.prototype;function i(t){const e=Xt(t);n[e]||(re(r,t),n[e]=!0)}return ct.isArray(t)?t.forEach(i):i(t),this}}ie.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),ct.reduceDescriptors(ie.prototype,(({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(t){this[n]=t}}})),ct.freezeMethods(ie);var se=ie;function oe(t,e){const n=this||Wt,r=e||n,i=se.from(r.headers);let s=r.data;return ct.forEach(t,(function(t){s=t.call(n,s,i.normalize(),e?e.status:void 0)})),i.normalize(),s}function ae(t){return!(!t||!t.__CANCEL__)}function ce(t,e,n){dt.call(this,null==t?"canceled":t,dt.ERR_CANCELED,e,n),this.name="CanceledError"}ct.inherits(ce,dt,{__CANCEL__:!0});var ue=ce;function le(t,e,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(new dt("Request failed with status code "+n.status,[dt.ERR_BAD_REQUEST,dt.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}function he(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function de(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i,s=0,o=0;return e=void 0!==e?e:1e3,function(a){const c=Date.now(),u=r[o];i||(i=c),n[s]=a,r[s]=c;let l=o,h=0;while(l!==s)h+=n[l++],l%=t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),c-i<e)return;const d=u&&c-u;return d?Math.round(1e3*h/d):void 0}}var fe=de;function pe(t,e){let n,r,i=0,s=1e3/e;const o=(e,s=Date.now())=>{i=s,n=null,r&&(clearTimeout(r),r=null),t.apply(null,e)},a=(...t)=>{const e=Date.now(),a=e-i;a>=s?o(t,e):(n=t,r||(r=setTimeout((()=>{r=null,o(n)}),s-a)))},c=()=>n&&o(n);return[a,c]}var me=pe;const ge=(t,e,n=3)=>{let r=0;const i=fe(50,250);return me((n=>{const s=n.loaded,o=n.lengthComputable?n.total:void 0,a=s-r,c=i(a),u=s<=o;r=s;const l={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&u?(o-s)/c:void 0,event:n,lengthComputable:null!=o,[e?"download":"upload"]:!0};t(l)}),n)},ve=(t,e)=>{const n=null!=t;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},ye=t=>(...e)=>ct.asap((()=>t(...e)));n(2489),n(4979);var we=jt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,jt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(jt.origin),jt.navigator&&/(msie|trident)/i.test(jt.navigator.userAgent)):()=>!0,_e=jt.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];ct.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),ct.isString(r)&&o.push("path="+r),ct.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function be(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Ee(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Te(t,e,n){let r=!be(e);return t&&(r||0==n)?Ee(t,e):e}const Ie=t=>t instanceof se?{...t}:t;function Se(t,e){e=e||{};const n={};function r(t,e,n,r){return ct.isPlainObject(t)&&ct.isPlainObject(e)?ct.merge.call({caseless:r},t,e):ct.isPlainObject(e)?ct.merge({},e):ct.isArray(e)?e.slice():e}function i(t,e,n,i){return ct.isUndefined(e)?ct.isUndefined(t)?void 0:r(void 0,t,n,i):r(t,e,n,i)}function s(t,e){if(!ct.isUndefined(e))return r(void 0,e)}function o(t,e){return ct.isUndefined(e)?ct.isUndefined(t)?void 0:r(void 0,t):r(void 0,e)}function a(n,i,s){return s in e?r(n,i):s in t?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(t,e,n)=>i(Ie(t),Ie(e),n,!0)};return ct.forEach(Object.keys(Object.assign({},t,e)),(function(r){const s=c[r]||i,o=s(t[r],e[r],r);ct.isUndefined(o)&&s!==a||(n[r]=o)})),n}var Ce=t=>{const e=Se({},t);let n,{data:r,withXSRFToken:i,xsrfHeaderName:s,xsrfCookieName:o,headers:a,auth:c}=e;if(e.headers=a=se.from(a),e.url=Ct(Te(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),ct.isFormData(r))if(jt.hasStandardBrowserEnv||jt.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(!1!==(n=a.getContentType())){const[t,...e]=n?n.split(";").map((t=>t.trim())).filter(Boolean):[];a.setContentType([t||"multipart/form-data",...e].join("; "))}if(jt.hasStandardBrowserEnv&&(i&&ct.isFunction(i)&&(i=i(e)),i||!1!==i&&we(e.url))){const t=s&&o&&_e.read(o);t&&a.set(s,t)}return e};const Ae="undefined"!==typeof XMLHttpRequest;var ke=Ae&&function(t){return new Promise((function(e,n){const r=Ce(t);let i=r.data;const s=se.from(r.headers).normalize();let o,a,c,u,l,{responseType:h,onUploadProgress:d,onDownloadProgress:f}=r;function p(){u&&u(),l&&l(),r.cancelToken&&r.cancelToken.unsubscribe(o),r.signal&&r.signal.removeEventListener("abort",o)}let m=new XMLHttpRequest;function g(){if(!m)return;const r=se.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),i=h&&"text"!==h&&"json"!==h?m.response:m.responseText,s={data:i,status:m.status,statusText:m.statusText,headers:r,config:t,request:m};le((function(t){e(t),p()}),(function(t){n(t),p()}),s),m=null}m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout,"onloadend"in m?m.onloadend=g:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(g)},m.onabort=function(){m&&(n(new dt("Request aborted",dt.ECONNABORTED,t,m)),m=null)},m.onerror=function(){n(new dt("Network Error",dt.ERR_NETWORK,t,m)),m=null},m.ontimeout=function(){let e=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const i=r.transitional||Ot;r.timeoutErrorMessage&&(e=r.timeoutErrorMessage),n(new dt(e,i.clarifyTimeoutError?dt.ETIMEDOUT:dt.ECONNABORTED,t,m)),m=null},void 0===i&&s.setContentType(null),"setRequestHeader"in m&&ct.forEach(s.toJSON(),(function(t,e){m.setRequestHeader(e,t)})),ct.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),h&&"json"!==h&&(m.responseType=r.responseType),f&&([c,l]=ge(f,!0),m.addEventListener("progress",c)),d&&m.upload&&([a,u]=ge(d),m.upload.addEventListener("progress",a),m.upload.addEventListener("loadend",u)),(r.cancelToken||r.signal)&&(o=e=>{m&&(n(!e||e.type?new ue(null,t,m):e),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(o),r.signal&&(r.signal.aborted?o():r.signal.addEventListener("abort",o)));const v=he(r.url);v&&-1===jt.protocols.indexOf(v)?n(new dt("Unsupported protocol "+v+":",dt.ERR_BAD_REQUEST,t)):m.send(i||null)}))};const Oe=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let n,r=new AbortController;const i=function(t){if(!n){n=!0,o();const e=t instanceof Error?t:this.reason;r.abort(e instanceof dt?e:new ue(e instanceof Error?e.message:e))}};let s=e&&setTimeout((()=>{s=null,i(new dt(`timeout ${e} of ms exceeded`,dt.ETIMEDOUT))}),e);const o=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach((t=>{t.unsubscribe?t.unsubscribe(i):t.removeEventListener("abort",i)})),t=null)};t.forEach((t=>t.addEventListener("abort",i)));const{signal:a}=r;return a.unsubscribe=()=>ct.asap(o),a}};var Re=Oe;const xe=function*(t,e){let n=t.byteLength;if(!e||n<e)return void(yield t);let r,i=0;while(i<n)r=i+e,yield t.slice(i,r),i=r},Ne=async function*(t,e){for await(const n of De(t))yield*xe(n,e)},De=async function*(t){if(t[Symbol.asyncIterator])return void(yield*t);const e=t.getReader();try{for(;;){const{done:t,value:n}=await e.read();if(t)break;yield n}}finally{await e.cancel()}},Pe=(t,e,n,r)=>{const i=Ne(t,e);let s,o=0,a=t=>{s||(s=!0,r&&r(t))};return new ReadableStream({async pull(t){try{const{done:e,value:r}=await i.next();if(e)return a(),void t.close();let s=r.byteLength;if(n){let t=o+=s;n(t)}t.enqueue(new Uint8Array(r))}catch(e){throw a(e),e}},cancel(t){return a(t),i.return()}},{highWaterMark:2})},Le="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,Me=Le&&"function"===typeof ReadableStream,Ue=Le&&("function"===typeof TextEncoder?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),Fe=(t,...e)=>{try{return!!t(...e)}catch(n){return!1}},je=Me&&Fe((()=>{let t=!1;const e=new Request(jt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e})),Ve=65536,$e=Me&&Fe((()=>ct.isReadableStream(new Response("").body))),Be={stream:$e&&(t=>t.body)};Le&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!Be[e]&&(Be[e]=ct.isFunction(t[e])?t=>t[e]():(t,n)=>{throw new dt(`Response type '${e}' is not supported`,dt.ERR_NOT_SUPPORT,n)})}))})(new Response);const qe=async t=>{if(null==t)return 0;if(ct.isBlob(t))return t.size;if(ct.isSpecCompliantForm(t)){const e=new Request(jt.origin,{method:"POST",body:t});return(await e.arrayBuffer()).byteLength}return ct.isArrayBufferView(t)||ct.isArrayBuffer(t)?t.byteLength:(ct.isURLSearchParams(t)&&(t+=""),ct.isString(t)?(await Ue(t)).byteLength:void 0)},ze=async(t,e)=>{const n=ct.toFiniteNumber(t.getContentLength());return null==n?qe(e):n};var He=Le&&(async t=>{let{url:e,method:n,data:r,signal:i,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:c,responseType:u,headers:l,withCredentials:h="same-origin",fetchOptions:d}=Ce(t);u=u?(u+"").toLowerCase():"text";let f,p=Re([i,s&&s.toAbortSignal()],o);const m=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let g;try{if(c&&je&&"get"!==n&&"head"!==n&&0!==(g=await ze(l,r))){let t,n=new Request(e,{method:"POST",body:r,duplex:"half"});if(ct.isFormData(r)&&(t=n.headers.get("content-type"))&&l.setContentType(t),n.body){const[t,e]=ve(g,ge(ye(c)));r=Pe(n.body,Ve,t,e)}}ct.isString(h)||(h=h?"include":"omit");const i="credentials"in Request.prototype;f=new Request(e,{...d,signal:p,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",credentials:i?h:void 0});let s=await fetch(f);const o=$e&&("stream"===u||"response"===u);if($e&&(a||o&&m)){const t={};["status","statusText","headers"].forEach((e=>{t[e]=s[e]}));const e=ct.toFiniteNumber(s.headers.get("content-length")),[n,r]=a&&ve(e,ge(ye(a),!0))||[];s=new Response(Pe(s.body,Ve,n,(()=>{r&&r(),m&&m()})),t)}u=u||"text";let v=await Be[ct.findKey(Be,u)||"text"](s,t);return!o&&m&&m(),await new Promise(((e,n)=>{le(e,n,{data:v,headers:se.from(s.headers),status:s.status,statusText:s.statusText,config:t,request:f})}))}catch(v){if(m&&m(),v&&"TypeError"===v.name&&/fetch/i.test(v.message))throw Object.assign(new dt("Network Error",dt.ERR_NETWORK,t,f),{cause:v.cause||v});throw dt.from(v,v&&v.code,t,f)}});const Ke={http:ft,xhr:ke,fetch:He};ct.forEach(Ke,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(n){}Object.defineProperty(t,"adapterName",{value:e})}}));const We=t=>`- ${t}`,Ge=t=>ct.isFunction(t)||null===t||!1===t;var Qe={getAdapter:t=>{t=ct.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){let e;if(n=t[s],r=n,!Ge(n)&&(r=Ke[(e=String(n)).toLowerCase()],void 0===r))throw new dt(`Unknown adapter '${e}'`);if(r)break;i[e||"#"+s]=r}if(!r){const t=Object.entries(i).map((([t,e])=>`adapter ${t} `+(!1===e?"is not supported by the environment":"is not available in the build")));let n=e?t.length>1?"since :\n"+t.map(We).join("\n"):" "+We(t[0]):"as no adapter specified";throw new dt("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r},adapters:Ke};function Je(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ue(null,t)}function Xe(t){Je(t),t.headers=se.from(t.headers),t.data=oe.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);const e=Qe.getAdapter(t.adapter||Wt.adapter);return e(t).then((function(e){return Je(t),e.data=oe.call(t,t.transformResponse,e),e.headers=se.from(e.headers),e}),(function(e){return ae(e)||(Je(t),e&&e.response&&(e.response.data=oe.call(t,t.transformResponse,e.response),e.response.headers=se.from(e.response.headers))),Promise.reject(e)}))}const Ye="1.8.4",Ze={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{Ze[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const tn={};function en(t,e,n){if("object"!==typeof t)throw new dt("options must be an object",dt.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;while(i-- >0){const s=r[i],o=e[s];if(o){const e=t[s],n=void 0===e||o(e,s,t);if(!0!==n)throw new dt("option "+s+" must be "+n,dt.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new dt("Unknown option "+s,dt.ERR_BAD_OPTION)}}Ze.transitional=function(t,e,n){function r(t,e){return"[Axios v"+Ye+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,i,s)=>{if(!1===t)throw new dt(r(i," has been removed"+(e?" in "+e:"")),dt.ERR_DEPRECATED);return e&&!tn[i]&&(tn[i]=!0,console.warn(r(i," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,i,s)}},Ze.spelling=function(t){return(e,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};var nn={assertOptions:en,validators:Ze};const rn=nn.validators;class sn{constructor(t){this.defaults=t,this.interceptors={request:new kt,response:new kt}}async request(t,e){try{return await this._request(t,e)}catch(n){if(n instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=new Error;const e=t.stack?t.stack.replace(/^.+\n/,""):"";try{n.stack?e&&!String(n.stack).endsWith(e.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+e):n.stack=e}catch(r){}}throw n}}_request(t,e){"string"===typeof t?(e=e||{},e.url=t):e=t||{},e=Se(this.defaults,e);const{transitional:n,paramsSerializer:r,headers:i}=e;void 0!==n&&nn.assertOptions(n,{silentJSONParsing:rn.transitional(rn.boolean),forcedJSONParsing:rn.transitional(rn.boolean),clarifyTimeoutError:rn.transitional(rn.boolean)},!1),null!=r&&(ct.isFunction(r)?e.paramsSerializer={serialize:r}:nn.assertOptions(r,{encode:rn.function,serialize:rn.function},!0)),void 0!==e.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?e.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:e.allowAbsoluteUrls=!0),nn.assertOptions(e,{baseUrl:rn.spelling("baseURL"),withXsrfToken:rn.spelling("withXSRFToken")},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase();let s=i&&ct.merge(i.common,i[e.method]);i&&ct.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete i[t]})),e.headers=se.concat(s,i);const o=[];let a=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,o.unshift(t.fulfilled,t.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)}));let l,h=0;if(!a){const t=[Xe.bind(this),void 0];t.unshift.apply(t,o),t.push.apply(t,c),l=t.length,u=Promise.resolve(e);while(h<l)u=u.then(t[h++],t[h++]);return u}l=o.length;let d=e;h=0;while(h<l){const t=o[h++],e=o[h++];try{d=t(d)}catch(f){e.call(this,f);break}}try{u=Xe.call(this,d)}catch(f){return Promise.reject(f)}h=0,l=c.length;while(h<l)u=u.then(c[h++],c[h++]);return u}getUri(t){t=Se(this.defaults,t);const e=Te(t.baseURL,t.url,t.allowAbsoluteUrls);return Ct(e,t.params,t.paramsSerializer)}}ct.forEach(["delete","get","head","options"],(function(t){sn.prototype[t]=function(e,n){return this.request(Se(n||{},{method:t,url:e,data:(n||{}).data}))}})),ct.forEach(["post","put","patch"],(function(t){function e(e){return function(n,r,i){return this.request(Se(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}sn.prototype[t]=e(),sn.prototype[t+"Form"]=e(!0)}));var on=sn;class an{constructor(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;while(e-- >0)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const r=new Promise((t=>{n.subscribe(t),e=t})).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t((function(t,r,i){n.reason||(n.reason=new ue(t,r,i),e(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}toAbortSignal(){const t=new AbortController,e=e=>{t.abort(e)};return this.subscribe(e),t.signal.unsubscribe=()=>this.unsubscribe(e),t.signal}static source(){let t;const e=new an((function(e){t=e}));return{token:e,cancel:t}}}var cn=an;function un(t){return function(e){return t.apply(null,e)}}function ln(t){return ct.isObject(t)&&!0===t.isAxiosError}const hn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(hn).forEach((([t,e])=>{hn[e]=t}));var dn=hn;function fn(t){const e=new on(t),n=i(on.prototype.request,e);return ct.extend(n,on.prototype,e,{allOwnKeys:!0}),ct.extend(n,e,null,{allOwnKeys:!0}),n.create=function(e){return fn(Se(t,e))},n}const pn=fn(Wt);pn.Axios=on,pn.CanceledError=ue,pn.CancelToken=cn,pn.isCancel=ae,pn.VERSION=Ye,pn.toFormData=_t,pn.AxiosError=dt,pn.Cancel=pn.CanceledError,pn.all=function(t){return Promise.all(t)},pn.spread=un,pn.isAxiosError=ln,pn.mergeConfig=Se,pn.AxiosHeaders=se,pn.formToJSON=t=>zt(ct.isHTMLForm(t)?new FormData(t):t),pn.getAdapter=Qe.getAdapter,pn.HttpStatusCode=dn,pn.default=pn;var mn=pn},4376:function(t,e,n){var r=n(2195);t.exports=Array.isArray||function(t){return"Array"===r(t)}},4402:function(t,e,n){var r=n(9504),i=Set.prototype;t.exports={Set:Set,add:r(i.add),has:r(i.has),remove:r(i["delete"]),proto:i}},4449:function(t,e,n){var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(8469),c=n(507),u=n(9539);t.exports=function(t){var e=r(this),n=o(t);if(s(e)<=n.size)return!1!==a(e,(function(t){if(n.includes(t))return!1}),!0);var l=n.getIterator();return!1!==c(l,(function(t){if(i(e,t))return u(l,"normal",!1)}))}},4483:function(t,e,n){var r,i,s,o,a=n(4576),c=n(9429),u=n(1548),l=a.structuredClone,h=a.ArrayBuffer,d=a.MessageChannel,f=!1;if(u)f=function(t){l(t,{transfer:[t]})};else if(h)try{d||(r=c("worker_threads"),r&&(d=r.MessageChannel)),d&&(i=new d,s=new h(2),o=function(t){i.port1.postMessage(null,[t])},2===s.byteLength&&(o(s),0===s.byteLength&&(f=o)))}catch(p){}t.exports=f},4495:function(t,e,n){var r=n(9519),i=n(9039),s=n(4576),o=s.String;t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol("symbol detection");return!o(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},4527:function(t,e,n){var r=n(3724),i=n(4376),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!o(t,"length").writable)throw new s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},4576:function(t,e,n){var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},4603:function(t,e,n){var r=n(6840),i=n(9504),s=n(655),o=n(2812),a=URLSearchParams,c=a.prototype,u=i(c.append),l=i(c["delete"]),h=i(c.forEach),d=i([].push),f=new a("a=1&a=2&b=3");f["delete"]("a",1),f["delete"]("b",void 0),f+""!=="a=2"&&r(c,"delete",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return l(this,t);var r=[];h(this,(function(t,e){d(r,{key:e,value:t})})),o(e,1);var i,a=s(t),c=s(n),f=0,p=0,m=!1,g=r.length;while(f<g)i=r[f++],m||i.key===a?(m=!0,l(this,i.key)):p++;while(p<g)i=r[p++],i.key===a&&i.value===c||u(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},4644:function(t,e,n){var r,i,s,o=n(7811),a=n(3724),c=n(4576),u=n(4901),l=n(34),h=n(9297),d=n(6955),f=n(6823),p=n(6699),m=n(6840),g=n(2106),v=n(1625),y=n(2787),w=n(2967),_=n(8227),b=n(3392),E=n(1181),T=E.enforce,I=E.get,S=c.Int8Array,C=S&&S.prototype,A=c.Uint8ClampedArray,k=A&&A.prototype,O=S&&y(S),R=C&&y(C),x=Object.prototype,N=c.TypeError,D=_("toStringTag"),P=b("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=o&&!!w&&"Opera"!==d(c.opera),U=!1,F={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},j={BigInt64Array:8,BigUint64Array:8},V=function(t){if(!l(t))return!1;var e=d(t);return"DataView"===e||h(F,e)||h(j,e)},$=function(t){var e=y(t);if(l(e)){var n=I(e);return n&&h(n,L)?n[L]:$(e)}},B=function(t){if(!l(t))return!1;var e=d(t);return h(F,e)||h(j,e)},q=function(t){if(B(t))return t;throw new N("Target is not a typed array")},z=function(t){if(u(t)&&(!w||v(O,t)))return t;throw new N(f(t)+" is not a typed array constructor")},H=function(t,e,n,r){if(a){if(n)for(var i in F){var s=c[i];if(s&&h(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(u){}}}R[t]&&!n||m(R,t,n?e:M&&C[t]||e,r)}},K=function(t,e,n){var r,i;if(a){if(w){if(n)for(r in F)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(s){}if(O[t]&&!n)return;try{return m(O,t,n?e:M&&O[t]||e)}catch(s){}}for(r in F)i=c[r],!i||i[t]&&!n||m(i,t,e)}};for(r in F)i=c[r],s=i&&i.prototype,s?T(s)[L]=i:M=!1;for(r in j)i=c[r],s=i&&i.prototype,s&&(T(s)[L]=i);if((!M||!u(O)||O===Function.prototype)&&(O=function(){throw new N("Incorrect invocation")},M))for(r in F)c[r]&&w(c[r],O);if((!M||!R||R===x)&&(R=O.prototype,M))for(r in F)c[r]&&w(c[r].prototype,R);if(M&&y(k)!==R&&w(k,R),a&&!h(R,D))for(r in U=!0,g(R,D,{configurable:!0,get:function(){return l(this)?this[P]:void 0}}),F)c[r]&&p(c[r],P,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:U&&P,aTypedArray:q,aTypedArrayConstructor:z,exportTypedArrayMethod:H,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:$,isView:V,isTypedArray:B,TypedArray:O,TypedArrayPrototype:R}},4659:function(t,e,n){var r=n(3724),i=n(4913),s=n(6980);t.exports=function(t,e,n){r?i.f(t,e,s(0,n)):t[e]=n}},4732:function(t,e,n){var r=n(4644),i=n(9504),s=n(9306),o=n(5370),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);u("toSorted",(function(t){void 0!==t&&s(t);var e=a(this),n=o(c(e),e);return l(n,t)}))},4901:function(t){var e="object"==typeof document&&document.all;t.exports="undefined"==typeof e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},4913:function(t,e,n){var r=n(3724),i=n(5917),s=n(8686),o=n(8551),a=n(6969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";e.f=r?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&f in n&&!n[f]){var r=l(t,e);r&&r[f]&&(t[e]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(o(t),e=a(e),o(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},4916:function(t,e,n){var r=n(7751),i=function(t){return{size:t,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}},s=function(t){return{size:t,has:function(){return!0},keys:function(){throw new Error("e")}}};t.exports=function(t,e){var n=r("Set");try{(new n)[t](i(0));try{return(new n)[t](i(-1)),!1}catch(a){if(!e)return!0;try{return(new n)[t](s(-1/0)),!1}catch(c){var o=new n;return o.add(1),o.add(2),e(o[t](s(1/0)))}}}catch(c){return!1}}},4979:function(t,e,n){var r=n(6518),i=n(4576),s=n(7751),o=n(6980),a=n(4913).f,c=n(9297),u=n(679),l=n(3167),h=n(2603),d=n(5002),f=n(8574),p=n(3724),m=n(6395),g="DOMException",v=s("Error"),y=s(g),w=function(){u(this,_);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new y(e,n),i=new v(e);return i.name=g,a(r,"stack",o(1,f(i.stack,1))),l(r,this,w),r},_=w.prototype=y.prototype,b="stack"in new v(g),E="stack"in new y(1,2),T=y&&p&&Object.getOwnPropertyDescriptor(i,g),I=!!T&&!(T.writable&&T.configurable),S=b&&!I&&!E;r({global:!0,constructor:!0,forced:m||S},{DOMException:S?w:y});var C=s(g),A=C.prototype;if(A.constructor!==C)for(var k in m||a(A,"constructor",o(1,C)),d)if(c(d,k)){var O=d[k],R=O.s;c(C,R)||a(C,R,o(6,O.c))}},5002:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},5024:function(t,e,n){var r=n(6518),i=n(3650),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("symmetricDifference")},{symmetricDifference:i})},5031:function(t,e,n){var r=n(7751),i=n(9504),s=n(8480),o=n(3717),a=n(8551),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},5169:function(t,e,n){var r=n(3238),i=TypeError;t.exports=function(t){if(r(t))throw new i("ArrayBuffer is detached");return t}},5170:function(t,e,n){var r=n(6706),i=n(4402);t.exports=r(i.proto,"size","get")||function(t){return t.size}},5370:function(t,e,n){var r=n(6198);t.exports=function(t,e,n){var i=0,s=arguments.length>2?n:r(e),o=new t(s);while(s>i)o[i]=e[i++];return o}},5397:function(t,e,n){var r=n(7055),i=n(7750);t.exports=function(t){return r(i(t))}},5610:function(t,e,n){var r=n(1291),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},5636:function(t,e,n){var r=n(4576),i=n(9504),s=n(6706),o=n(7696),a=n(5169),c=n(7394),u=n(4483),l=n(1548),h=r.structuredClone,d=r.ArrayBuffer,f=r.DataView,p=Math.min,m=d.prototype,g=f.prototype,v=i(m.slice),y=s(m,"resizable","get"),w=s(m,"maxByteLength","get"),_=i(g.getInt8),b=i(g.setInt8);t.exports=(l||u)&&function(t,e,n){var r,i=c(t),s=void 0===e?i:o(e),m=!y||!y(t);if(a(t),l&&(t=h(t,{transfer:[t]}),i===s&&(n||m)))return t;if(i>=s&&(!n||m))r=v(t,0,s);else{var g=n&&!m&&w?{maxByteLength:w(t)}:void 0;r=new d(s,g);for(var E=new f(t),T=new f(r),I=p(s,i),S=0;S<I;S++)b(T,S,_(E,S))}return l||u(t),r}},5745:function(t,e,n){var r=n(7629);t.exports=function(t,e){return r[t]||(r[t]=e||{})}},5854:function(t,e,n){var r=n(2777),i=TypeError;t.exports=function(t){var e=r(t,"number");if("number"==typeof e)throw new i("Can't convert number to bigint");return BigInt(e)}},5876:function(t,e,n){var r=n(6518),i=n(3838),s=n(4916),o=!s("isSubsetOf",(function(t){return t}));r({target:"Set",proto:!0,real:!0,forced:o},{isSubsetOf:i})},5917:function(t,e,n){var r=n(3724),i=n(9039),s=n(4055);t.exports=!r&&!i((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},5966:function(t,e,n){var r=n(9306),i=n(4117);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},6080:function(t,e,n){var r=n(7476),i=n(9306),s=n(616),o=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:s?o(t,e):function(){return t.apply(e,arguments)}}},6119:function(t,e,n){var r=n(5745),i=n(3392),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},6178:function(t,e,n){n.d(e,{Ay:function(){return Ee}});n(4114),n(8111),n(1148),n(2489),n(7588),n(1701),n(3579);function r(t,e){for(var n in e)t[n]=e[n];return t}var i=/[!'()*]/g,s=function(t){return"%"+t.charCodeAt(0).toString(16)},o=/%2C/g,a=function(t){return encodeURIComponent(t).replace(i,s).replace(o,",")};function c(t){try{return decodeURIComponent(t)}catch(e){0}return t}function u(t,e,n){void 0===e&&(e={});var r,i=n||h;try{r=i(t||"")}catch(a){r={}}for(var s in e){var o=e[s];r[s]=Array.isArray(o)?o.map(l):l(o)}return r}var l=function(t){return null==t||"object"===typeof t?t:String(t)};function h(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===e[r]?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]})),e):e}function d(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return a(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(a(e)):r.push(a(e)+"="+a(t)))})),r.join("&")}return a(e)+"="+a(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var f=/\/?$/;function p(t,e,n,r){var i=r&&r.options.stringifyQuery,s=e.query||{};try{s=m(s)}catch(a){}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:s,params:e.params||{},fullPath:y(e,i),matched:t?v(t):[]};return n&&(o.redirectedFrom=y(n,i)),Object.freeze(o)}function m(t){if(Array.isArray(t))return t.map(m);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=m(t[n]);return e}return t}var g=p(null,{path:"/"});function v(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function y(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var i=t.hash;void 0===i&&(i="");var s=e||d;return(n||"/")+s(r)+i}function w(t,e,n){return e===g?t===e:!!e&&(t.path&&e.path?t.path.replace(f,"")===e.path.replace(f,"")&&(n||t.hash===e.hash&&_(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&_(t.query,e.query)&&_(t.params,e.params))))}function _(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every((function(n,i){var s=t[n],o=r[i];if(o!==n)return!1;var a=e[n];return null==s||null==a?s===a:"object"===typeof s&&"object"===typeof a?_(s,a):String(s)===String(a)}))}function b(t,e){return 0===t.path.replace(f,"/").indexOf(e.path.replace(f,"/"))&&(!e.hash||t.hash===e.hash)&&E(t.query,e.query)}function E(t,e){for(var n in e)if(!(n in t))return!1;return!0}function T(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var i=n.instances[r],s=n.enteredCbs[r];if(i&&s){delete n.enteredCbs[r];for(var o=0;o<s.length;o++)i._isBeingDestroyed||s[o](i)}}}}var I={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,i=e.children,s=e.parent,o=e.data;o.routerView=!0;var a=s.$createElement,c=n.name,u=s.$route,l=s._routerViewCache||(s._routerViewCache={}),h=0,d=!1;while(s&&s._routerRoot!==s){var f=s.$vnode?s.$vnode.data:{};f.routerView&&h++,f.keepAlive&&s._directInactive&&s._inactive&&(d=!0),s=s.$parent}if(o.routerViewDepth=h,d){var p=l[c],m=p&&p.component;return m?(p.configProps&&S(m,o,p.route,p.configProps),a(m,o,i)):a()}var g=u.matched[h],v=g&&g.components[c];if(!g||!v)return l[c]=null,a();l[c]={component:v},o.registerRouteInstance=function(t,e){var n=g.instances[c];(e&&n!==t||!e&&n===t)&&(g.instances[c]=e)},(o.hook||(o.hook={})).prepatch=function(t,e){g.instances[c]=e.componentInstance},o.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==g.instances[c]&&(g.instances[c]=t.componentInstance),T(u)};var y=g.props&&g.props[c];return y&&(r(l[c],{route:u,configProps:y}),S(v,o,u,y)),a(v,o,i)}};function S(t,e,n,i){var s=e.props=C(n,i);if(s){s=e.props=r({},s);var o=e.attrs=e.attrs||{};for(var a in s)t.props&&a in t.props||(o[a]=s[a],delete s[a])}}function C(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function A(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var s=t.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function k(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}function O(t){return t.replace(/\/(?:\s*\/)+/g,"/")}var R=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},x=J,N=U,D=F,P=$,L=Q,M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function U(t,e){var n,r=[],i=0,s=0,o="",a=e&&e.delimiter||"/";while(null!=(n=M.exec(t))){var c=n[0],u=n[1],l=n.index;if(o+=t.slice(s,l),s=l+c.length,u)o+=u[1];else{var h=t[s],d=n[2],f=n[3],p=n[4],m=n[5],g=n[6],v=n[7];o&&(r.push(o),o="");var y=null!=d&&null!=h&&h!==d,w="+"===g||"*"===g,_="?"===g||"*"===g,b=n[2]||a,E=p||m;r.push({name:f||i++,prefix:d||"",delimiter:b,optional:_,repeat:w,partial:y,asterisk:!!v,pattern:E?q(E):v?".*":"[^"+B(b)+"]+?"})}}return s<t.length&&(o+=t.substr(s)),o&&r.push(o),r}function F(t,e){return $(U(t,e),e)}function j(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function V(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function $(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",H(e)));return function(e,r){for(var i="",s=e||{},o=r||{},a=o.pretty?j:encodeURIComponent,c=0;c<t.length;c++){var u=t[c];if("string"!==typeof u){var l,h=s[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(R(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=a(h[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?V(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function B(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function q(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function z(t,e){return t.keys=e,t}function H(t){return t&&t.sensitive?"":"i"}function K(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return z(t,e)}function W(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(J(t[i],e,n).source);var s=new RegExp("(?:"+r.join("|")+")",H(n));return z(s,e)}function G(t,e,n){return Q(U(t,n),e,n)}function Q(t,e,n){R(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,s="",o=0;o<t.length;o++){var a=t[o];if("string"===typeof a)s+=B(a);else{var c=B(a.prefix),u="(?:"+a.pattern+")";e.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",s+=u}}var l=B(n.delimiter||"/"),h=s.slice(-l.length)===l;return r||(s=(h?s.slice(0,-l.length):s)+"(?:"+l+"(?=$))?"),s+=i?"$":r&&h?"":"(?="+l+"|$)",z(new RegExp("^"+s,H(n)),e)}function J(t,e,n){return R(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?K(t,e):R(t)?W(t,e,n):G(t,e,n)}x.parse=N,x.compile=D,x.tokensToFunction=P,x.tokensToRegExp=L;var X=Object.create(null);function Y(t,e,n){e=e||{};try{var r=X[t]||(X[t]=x.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(i){return""}finally{delete e[0]}}function Z(t,e,n,i){var s="string"===typeof t?{path:t}:t;if(s._normalized)return s;if(s.name){s=r({},t);var o=s.params;return o&&"object"===typeof o&&(s.params=r({},o)),s}if(!s.path&&s.params&&e){s=r({},s),s._normalized=!0;var a=r(r({},e.params),s.params);if(e.name)s.name=e.name,s.params=a;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;s.path=Y(c,a,"path "+e.path)}else 0;return s}var l=k(s.path||""),h=e&&e.path||"/",d=l.path?A(l.path,h,n||s.append):h,f=u(l.query,s.query,i&&i.options.parseQuery),p=s.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var tt,et=[String,Object],nt=[String,Array],rt=function(){},it={name:"RouterLink",props:{to:{type:et,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:nt,default:"click"}},render:function(t){var e=this,n=this.$router,i=this.$route,s=n.resolve(this.to,i,this.append),o=s.location,a=s.route,c=s.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==l?"router-link-active":l,f=null==h?"router-link-exact-active":h,m=null==this.activeClass?d:this.activeClass,g=null==this.exactActiveClass?f:this.exactActiveClass,v=a.redirectedFrom?p(null,Z(a.redirectedFrom),null,n):a;u[g]=w(i,v,this.exactPath),u[m]=this.exact||this.exactPath?u[g]:b(i,v);var y=u[g]?this.ariaCurrentValue:null,_=function(t){st(t)&&(e.replace?n.replace(o,rt):n.push(o,rt))},E={click:st};Array.isArray(this.event)?this.event.forEach((function(t){E[t]=_})):E[this.event]=_;var T={class:u},I=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:_,isActive:u[m],isExactActive:u[g]});if(I){if(1===I.length)return I[0];if(I.length>1||!I.length)return 0===I.length?t():t("span",{},I)}if("a"===this.tag)T.on=E,T.attrs={href:c,"aria-current":y};else{var S=ot(this.$slots.default);if(S){S.isStatic=!1;var C=S.data=r({},S.data);for(var A in C.on=C.on||{},C.on){var k=C.on[A];A in E&&(C.on[A]=Array.isArray(k)?k:[k])}for(var O in E)O in C.on?C.on[O].push(E[O]):C.on[O]=_;var R=S.data.attrs=r({},S.data.attrs);R.href=c,R["aria-current"]=y}else T.on=E}return t(this.tag,T,this.$slots.default)}};function st(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ot(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=ot(e.children)))return e}}function at(t){if(!at.installed||tt!==t){at.installed=!0,tt=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",I),t.component("RouterLink",it);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ct="undefined"!==typeof window;function ut(t,e,n,r,i){var s=e||[],o=n||Object.create(null),a=r||Object.create(null);t.forEach((function(t){lt(s,o,a,t,i)}));for(var c=0,u=s.length;c<u;c++)"*"===s[c]&&(s.push(s.splice(c,1)[0]),u--,c--);return{pathList:s,pathMap:o,nameMap:a}}function lt(t,e,n,r,i,s){var o=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=dt(o,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:ht(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:s,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=s?O(s+"/"+r.path):void 0;lt(t,e,n,r,l,i)})),e[l.path]||(t.push(l.path),e[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:r.children};lt(t,e,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function ht(t,e){var n=x(t,[],e);return n}function dt(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:O(e.path+"/"+t)}function ft(t,e){var n=ut(t),r=n.pathList,i=n.pathMap,s=n.nameMap;function o(t){ut(t,r,i,s)}function a(t,e){var n="object"!==typeof t?s[t]:void 0;ut([e||t],r,i,s,n),n&&n.alias.length&&ut(n.alias.map((function(t){return{path:t,children:[e]}})),r,i,s,n)}function c(){return r.map((function(t){return i[t]}))}function u(t,n,o){var a=Z(t,n,!1,e),c=a.name;if(c){var u=s[c];if(!u)return d(null,a);var l=u.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=Y(u.path,a.params,'named route "'+c+'"'),d(u,a,o)}if(a.path){a.params={};for(var f=0;f<r.length;f++){var p=r[f],m=i[p];if(pt(m.regex,a.path,a.params))return d(m,a,o)}}return d(null,a)}function l(t,n){var r=t.redirect,i="function"===typeof r?r(p(t,n,null,e)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return d(null,n);var o=i,a=o.name,c=o.path,l=n.query,h=n.hash,f=n.params;if(l=o.hasOwnProperty("query")?o.query:l,h=o.hasOwnProperty("hash")?o.hash:h,f=o.hasOwnProperty("params")?o.params:f,a){s[a];return u({_normalized:!0,name:a,query:l,hash:h,params:f},void 0,n)}if(c){var m=mt(c,t),g=Y(m,f,'redirect route with path "'+m+'"');return u({_normalized:!0,path:g,query:l,hash:h},void 0,n)}return d(null,n)}function h(t,e,n){var r=Y(n,e.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var s=i.matched,o=s[s.length-1];return e.params=i.params,d(o,e)}return d(null,e)}function d(t,n,r){return t&&t.redirect?l(t,r||n):t&&t.matchAs?h(t,n,t.matchAs):p(t,n,r,e)}return{match:u,addRoute:a,getRoutes:c,addRoutes:o}}function pt(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var i=1,s=r.length;i<s;++i){var o=t.keys[i-1];o&&(n[o.name||"pathMatch"]="string"===typeof r[i]?c(r[i]):r[i])}return!0}function mt(t,e){return A(t,e.parent?e.parent.path:"/",!0)}var gt=ct&&window.performance&&window.performance.now?window.performance:Date;function vt(){return gt.now().toFixed(3)}var yt=vt();function wt(){return yt}function _t(t){return yt=t}var bt=Object.create(null);function Et(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=r({},window.history.state);return n.key=wt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",St),function(){window.removeEventListener("popstate",St)}}function Tt(t,e,n,r){if(t.app){var i=t.options.scrollBehavior;i&&t.app.$nextTick((function(){var s=Ct(),o=i.call(t,e,n,r?s:null);o&&("function"===typeof o.then?o.then((function(t){Dt(t,s)})).catch((function(t){0})):Dt(o,s))}))}}function It(){var t=wt();t&&(bt[t]={x:window.pageXOffset,y:window.pageYOffset})}function St(t){It(),t.state&&t.state.key&&_t(t.state.key)}function Ct(){var t=wt();if(t)return bt[t]}function At(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:i.left-r.left-e.x,y:i.top-r.top-e.y}}function kt(t){return xt(t.x)||xt(t.y)}function Ot(t){return{x:xt(t.x)?t.x:window.pageXOffset,y:xt(t.y)?t.y:window.pageYOffset}}function Rt(t){return{x:xt(t.x)?t.x:0,y:xt(t.y)?t.y:0}}function xt(t){return"number"===typeof t}var Nt=/^#\d/;function Dt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=Nt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var i=t.offset&&"object"===typeof t.offset?t.offset:{};i=Rt(i),e=At(r,i)}else kt(t)&&(e=Ot(t))}else n&&kt(t)&&(e=Ot(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Pt=ct&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Lt(t,e){It();var n=window.history;try{if(e){var i=r({},n.state);i.key=wt(),n.replaceState(i,"",t)}else n.pushState({key:_t(vt())},"",t)}catch(s){window.location[e?"replace":"assign"](t)}}function Mt(t){Lt(t,!0)}var Ut={redirected:2,aborted:4,cancelled:8,duplicated:16};function Ft(t,e){return Bt(t,e,Ut.redirected,'Redirected when going from "'+t.fullPath+'" to "'+zt(e)+'" via a navigation guard.')}function jt(t,e){var n=Bt(t,e,Ut.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Vt(t,e){return Bt(t,e,Ut.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function $t(t,e){return Bt(t,e,Ut.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Bt(t,e,n,r){var i=new Error(r);return i._isRouter=!0,i.from=t,i.to=e,i.type=n,i}var qt=["params","query","hash"];function zt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return qt.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function Ht(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Kt(t,e){return Ht(t)&&t._isRouter&&(null==e||t.type===e)}function Wt(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],(function(){r(i+1)})):r(i+1)};r(0)}function Gt(t){return function(e,n,r){var i=!1,s=0,o=null;Qt(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){i=!0,s++;var c,u=Zt((function(e){Yt(e)&&(e=e.default),t.resolved="function"===typeof e?e:tt.extend(e),n.components[a]=e,s--,s<=0&&r()})),l=Zt((function(t){var e="Failed to resolve async component "+a+": "+t;o||(o=Ht(t)?t:new Error(e),r(o))}));try{c=t(u,l)}catch(d){l(d)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Qt(t,e){return Jt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Jt(t){return Array.prototype.concat.apply([],t)}var Xt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Yt(t){return t.__esModule||Xt&&"Module"===t[Symbol.toStringTag]}function Zt(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var te=function(t,e){this.router=t,this.base=ee(e),this.current=g,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ee(t){if(!t)if(ct){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ne(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function re(t,e,n,r){var i=Qt(t,(function(t,r,i,s){var o=ie(t,e);if(o)return Array.isArray(o)?o.map((function(t){return n(t,r,i,s)})):n(o,r,i,s)}));return Jt(r?i.reverse():i)}function ie(t,e){return"function"!==typeof t&&(t=tt.extend(t)),t.options[e]}function se(t){return re(t,"beforeRouteLeave",ae,!0)}function oe(t){return re(t,"beforeRouteUpdate",ae)}function ae(t,e){if(e)return function(){return t.apply(e,arguments)}}function ce(t){return re(t,"beforeRouteEnter",(function(t,e,n,r){return ue(t,n,r)}))}function ue(t,e,n){return function(r,i,s){return t(r,i,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),s(t)}))}}te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,n){var r,i=this;try{r=this.router.match(t,this.current)}catch(o){throw this.errorCbs.forEach((function(t){t(o)})),o}var s=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),e&&e(r),i.ensureURL(),i.router.afterHooks.forEach((function(t){t&&t(r,s)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(t){t(r)})))}),(function(t){n&&n(t),t&&!i.ready&&(Kt(t,Ut.redirected)&&s===g||(i.ready=!0,i.readyErrorCbs.forEach((function(e){e(t)}))))}))},te.prototype.confirmTransition=function(t,e,n){var r=this,i=this.current;this.pending=t;var s=function(t){!Kt(t)&&Ht(t)&&(r.errorCbs.length?r.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},o=t.matched.length-1,a=i.matched.length-1;if(w(t,i)&&o===a&&t.matched[o]===i.matched[a])return this.ensureURL(),t.hash&&Tt(this.router,i,t,!1),s(jt(i,t));var c=ne(this.current.matched,t.matched),u=c.updated,l=c.deactivated,h=c.activated,d=[].concat(se(l),this.router.beforeHooks,oe(u),h.map((function(t){return t.beforeEnter})),Gt(h)),f=function(e,n){if(r.pending!==t)return s(Vt(i,t));try{e(t,i,(function(e){!1===e?(r.ensureURL(!0),s($t(i,t))):Ht(e)?(r.ensureURL(!0),s(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(s(Ft(i,t)),"object"===typeof e&&e.replace?r.replace(e):r.push(e)):n(e)}))}catch(o){s(o)}};Wt(d,f,(function(){var n=ce(h),o=n.concat(r.router.resolveHooks);Wt(o,f,(function(){if(r.pending!==t)return s(Vt(i,t));r.pending=null,e(t),r.router.app&&r.router.app.$nextTick((function(){T(t)}))}))}))},te.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},te.prototype.setupListeners=function(){},te.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=g,this.pending=null};var le=function(t){function e(e,n){t.call(this,e,n),this._startLocation=he(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Pt&&n;r&&this.listeners.push(Et());var i=function(){var n=t.current,i=he(t.base);t.current===g&&i===t._startLocation||t.transitionTo(i,(function(t){r&&Tt(e,t,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){Lt(O(r.base+t.fullPath)),Tt(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){Mt(O(r.base+t.fullPath)),Tt(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(he(this.base)!==this.current.fullPath){var e=O(this.base+this.current.fullPath);t?Lt(e):Mt(e)}},e.prototype.getCurrentLocation=function(){return he(this.base)},e}(te);function he(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(O(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var de=function(t){function e(e,n,r){t.call(this,e,n),r&&fe(this.base)||pe()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Pt&&n;r&&this.listeners.push(Et());var i=function(){var e=t.current;pe()&&t.transitionTo(me(),(function(n){r&&Tt(t.router,n,e,!0),Pt||ye(n.fullPath)}))},s=Pt?"popstate":"hashchange";window.addEventListener(s,i),this.listeners.push((function(){window.removeEventListener(s,i)}))}},e.prototype.push=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){ve(t.fullPath),Tt(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){ye(t.fullPath),Tt(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;me()!==e&&(t?ve(e):ye(e))},e.prototype.getCurrentLocation=function(){return me()},e}(te);function fe(t){var e=he(t);if(!/^\/#/.test(e))return window.location.replace(O(t+"/#"+e)),!0}function pe(){var t=me();return"/"===t.charAt(0)||(ye("/"+t),!1)}function me(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function ge(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function ve(t){Pt?Lt(ge(t)):window.location.hash=t}function ye(t){Pt?Mt(ge(t)):window.location.replace(ge(t))}var we=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach((function(e){e&&e(r,t)}))}),(function(t){Kt(t,Ut.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),_e=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=ft(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Pt&&!1!==t.fallback,this.fallback&&(e="hash"),ct||(e="abstract"),this.mode=e,e){case"history":this.history=new le(this,t.base);break;case"hash":this.history=new de(this,t.base,this.fallback);break;case"abstract":this.history=new we(this,t.base);break;default:0}},be={currentRoute:{configurable:!0}};_e.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},be.currentRoute.get=function(){return this.history&&this.history.current},_e.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof le||n instanceof de){var r=function(t){var r=n.current,i=e.options.scrollBehavior,s=Pt&&i;s&&"fullPath"in t&&Tt(e,t,r,!1)},i=function(t){n.setupListeners(),r(t)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},_e.prototype.beforeEach=function(t){return Te(this.beforeHooks,t)},_e.prototype.beforeResolve=function(t){return Te(this.resolveHooks,t)},_e.prototype.afterEach=function(t){return Te(this.afterHooks,t)},_e.prototype.onReady=function(t,e){this.history.onReady(t,e)},_e.prototype.onError=function(t){this.history.onError(t)},_e.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.push(t,e,n)}));this.history.push(t,e,n)},_e.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.replace(t,e,n)}));this.history.replace(t,e,n)},_e.prototype.go=function(t){this.history.go(t)},_e.prototype.back=function(){this.go(-1)},_e.prototype.forward=function(){this.go(1)},_e.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},_e.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=Z(t,e,n,this),i=this.match(r,e),s=i.redirectedFrom||i.fullPath,o=this.history.base,a=Ie(o,s,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},_e.prototype.getRoutes=function(){return this.matcher.getRoutes()},_e.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},_e.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(_e.prototype,be);var Ee=_e;function Te(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Ie(t,e,n){var r="hash"===n?"#"+e:e;return t?O(t+"/"+r):r}_e.install=at,_e.version="3.6.5",_e.isNavigationFailure=Kt,_e.NavigationFailureType=Ut,_e.START_LOCATION=g,ct&&window.Vue&&window.Vue.use(_e)},6193:function(t,e,n){var r=n(4215);t.exports="NODE"===r},6198:function(t,e,n){var r=n(8014);t.exports=function(t){return r(t.length)}},6269:function(t){t.exports={}},6279:function(t,e,n){var r=n(6840);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},6319:function(t,e,n){var r=n(8551),i=n(9539);t.exports=function(t,e,n,s){try{return s?e(r(n)[0],n[1]):e(n)}catch(o){i(t,"throw",o)}}},6368:function(t,e,n){var r=n(6518),i=n(4576),s=n(9225).clear;r({global:!0,bind:!0,enumerable:!0,forced:i.clearImmediate!==s},{clearImmediate:s})},6395:function(t){t.exports=!1},6518:function(t,e,n){var r=n(4576),i=n(7347).f,s=n(6699),o=n(6840),a=n(9433),c=n(7740),u=n(2796);t.exports=function(t,e){var n,l,h,d,f,p,m=t.target,g=t.global,v=t.stat;if(l=g?r:v?r[m]||a(m,{}):r[m]&&r[m].prototype,l)for(h in e){if(f=e[h],t.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(v?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,t)}}},6573:function(t,e,n){var r=n(3724),i=n(2106),s=n(3238),o=ArrayBuffer.prototype;r&&!("detached"in o)&&i(o,"detached",{configurable:!0,get:function(){return s(this)}})},6699:function(t,e,n){var r=n(3724),i=n(4913),s=n(6980);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},6706:function(t,e,n){var r=n(9504),i=n(9306);t.exports=function(t,e,n){try{return r(i(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(s){}}},6801:function(t,e,n){var r=n(3724),i=n(8686),s=n(4913),o=n(8551),a=n(5397),c=n(1072);e.f=r&&!i?Object.defineProperties:function(t,e){o(t);var n,r=a(e),i=c(e),u=i.length,l=0;while(u>l)s.f(t,n=i[l++],r[n]);return t}},6823:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},6837:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},6840:function(t,e,n){var r=n(4901),i=n(4913),s=n(283),o=n(9433);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&s(n,u,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},6848:function(t,e,n){n.d(e,{Ay:function(){return Yr}});n(4114),n(8111),n(1148),n(2489),n(7588),n(1701),n(8237),n(3579),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(9848);var r=Object.freeze({}),i=Array.isArray;function s(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function a(t){return!0===t}function c(t){return!1===t}function u(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return"function"===typeof t}function h(t){return null!==t&&"object"===typeof t}var d=Object.prototype.toString;function f(t){return"[object Object]"===d.call(t)}function p(t){return"[object RegExp]"===d.call(t)}function m(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function g(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function v(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===d?JSON.stringify(t,y,2):String(t)}function y(t,e){return e&&e.__v_isRef?e.value:e}function w(t){var e=parseFloat(t);return isNaN(e)?t:e}function _(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}_("slot,component",!0);var b=_("key,ref,slot,slot-scope,is");function E(t,e){var n=t.length;if(n){if(e===t[n-1])return void(t.length=n-1);var r=t.indexOf(e);if(r>-1)return t.splice(r,1)}}var T=Object.prototype.hasOwnProperty;function I(t,e){return T.call(t,e)}function S(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var C=/-(\w)/g,A=S((function(t){return t.replace(C,(function(t,e){return e?e.toUpperCase():""}))})),k=S((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),O=/\B([A-Z])/g,R=S((function(t){return t.replace(O,"-$1").toLowerCase()}));function x(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function N(t,e){return t.bind(e)}var D=Function.prototype.bind?N:x;function P(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function L(t,e){for(var n in e)t[n]=e[n];return t}function M(t){for(var e={},n=0;n<t.length;n++)t[n]&&L(e,t[n]);return e}function U(t,e,n){}var F=function(t,e,n){return!1},j=function(t){return t};function V(t,e){if(t===e)return!0;var n=h(t),r=h(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),s=Array.isArray(e);if(i&&s)return t.length===e.length&&t.every((function(t,n){return V(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||s)return!1;var o=Object.keys(t),a=Object.keys(e);return o.length===a.length&&o.every((function(n){return V(t[n],e[n])}))}catch(c){return!1}}function $(t,e){for(var n=0;n<t.length;n++)if(V(t[n],e))return n;return-1}function B(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function q(t,e){return t===e?0===t&&1/t!==1/e:t===t||e===e}var z="data-server-rendered",H=["component","directive","filter"],K=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],W={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:F,isReservedAttr:F,isUnknownElement:F,getTagNamespace:U,parsePlatformTagName:j,mustUseProp:F,async:!0,_lifecycleHooks:K},G=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function Q(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function J(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var X=new RegExp("[^".concat(G.source,".$_\\d]"));function Y(t){if(!X.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var Z="__proto__"in{},tt="undefined"!==typeof window,et=tt&&window.navigator.userAgent.toLowerCase(),nt=et&&/msie|trident/.test(et),rt=et&&et.indexOf("msie 9.0")>0,it=et&&et.indexOf("edge/")>0;et&&et.indexOf("android");var st=et&&/iphone|ipad|ipod|ios/.test(et);et&&/chrome\/\d+/.test(et),et&&/phantomjs/.test(et);var ot,at=et&&et.match(/firefox\/(\d+)/),ct={}.watch,ut=!1;if(tt)try{var lt={};Object.defineProperty(lt,"passive",{get:function(){ut=!0}}),window.addEventListener("test-passive",null,lt)}catch(Zo){}var ht=function(){return void 0===ot&&(ot=!tt&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),ot},dt=tt&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ft(t){return"function"===typeof t&&/native code/.test(t.toString())}var pt,mt="undefined"!==typeof Symbol&&ft(Symbol)&&"undefined"!==typeof Reflect&&ft(Reflect.ownKeys);pt="undefined"!==typeof Set&&ft(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var gt=null;function vt(t){void 0===t&&(t=null),t||gt&&gt._scope.off(),gt=t,t&&t._scope.on()}var yt=function(){function t(t,e,n,r,i,s,o,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(t.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),t}(),wt=function(t){void 0===t&&(t="");var e=new yt;return e.text=t,e.isComment=!0,e};function _t(t){return new yt(void 0,void 0,void 0,String(t))}function bt(t){var e=new yt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}"function"===typeof SuppressedError&&SuppressedError;var Et=0,Tt=[],It=function(){for(var t=0;t<Tt.length;t++){var e=Tt[t];e.subs=e.subs.filter((function(t){return t})),e._pending=!1}Tt.length=0},St=function(){function t(){this._pending=!1,this.id=Et++,this.subs=[]}return t.prototype.addSub=function(t){this.subs.push(t)},t.prototype.removeSub=function(t){this.subs[this.subs.indexOf(t)]=null,this._pending||(this._pending=!0,Tt.push(this))},t.prototype.depend=function(e){t.target&&t.target.addDep(this)},t.prototype.notify=function(t){var e=this.subs.filter((function(t){return t}));for(var n=0,r=e.length;n<r;n++){var i=e[n];0,i.update()}},t}();St.target=null;var Ct=[];function At(t){Ct.push(t),St.target=t}function kt(){Ct.pop(),St.target=Ct[Ct.length-1]}var Ot=Array.prototype,Rt=Object.create(Ot),xt=["push","pop","shift","unshift","splice","sort","reverse"];xt.forEach((function(t){var e=Ot[t];J(Rt,t,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i,s=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&o.observeArray(i),o.dep.notify(),s}))}));var Nt=Object.getOwnPropertyNames(Rt),Dt={},Pt=!0;function Lt(t){Pt=t}var Mt={notify:U,depend:U,addSub:U,removeSub:U},Ut=function(){function t(t,e,n){if(void 0===e&&(e=!1),void 0===n&&(n=!1),this.value=t,this.shallow=e,this.mock=n,this.dep=n?Mt:new St,this.vmCount=0,J(t,"__ob__",this),i(t)){if(!n)if(Z)t.__proto__=Rt;else for(var r=0,s=Nt.length;r<s;r++){var o=Nt[r];J(t,o,Rt[o])}e||this.observeArray(t)}else{var a=Object.keys(t);for(r=0;r<a.length;r++){o=a[r];jt(t,o,Dt,void 0,e,n)}}}return t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Ft(t[e],!1,this.mock)},t}();function Ft(t,e,n){return t&&I(t,"__ob__")&&t.__ob__ instanceof Ut?t.__ob__:!Pt||!n&&ht()||!i(t)&&!f(t)||!Object.isExtensible(t)||t.__v_skip||Kt(t)||t instanceof yt?void 0:new Ut(t,e,n)}function jt(t,e,n,r,s,o,a){void 0===a&&(a=!1);var c=new St,u=Object.getOwnPropertyDescriptor(t,e);if(!u||!1!==u.configurable){var l=u&&u.get,h=u&&u.set;l&&!h||n!==Dt&&2!==arguments.length||(n=t[e]);var d=s?n&&n.__ob__:Ft(n,!1,o);return Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=l?l.call(t):n;return St.target&&(c.depend(),d&&(d.dep.depend(),i(e)&&Bt(e))),Kt(e)&&!s?e.value:e},set:function(e){var r=l?l.call(t):n;if(q(r,e)){if(h)h.call(t,e);else{if(l)return;if(!s&&Kt(r)&&!Kt(e))return void(r.value=e);n=e}d=s?e&&e.__ob__:Ft(e,!1,o),c.notify()}}}),c}}function Vt(t,e,n){if(!Ht(t)){var r=t.__ob__;return i(t)&&m(e)?(t.length=Math.max(t.length,e),t.splice(e,1,n),r&&!r.shallow&&r.mock&&Ft(n,!1,!0),n):e in t&&!(e in Object.prototype)?(t[e]=n,n):t._isVue||r&&r.vmCount?n:r?(jt(r.value,e,n,void 0,r.shallow,r.mock),r.dep.notify(),n):(t[e]=n,n)}}function $t(t,e){if(i(t)&&m(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||Ht(t)||I(t,e)&&(delete t[e],n&&n.dep.notify())}}function Bt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),i(e)&&Bt(e)}function qt(t){return zt(t,!0),J(t,"__v_isShallow",!0),t}function zt(t,e){if(!Ht(t)){Ft(t,e,ht());0}}function Ht(t){return!(!t||!t.__v_isReadonly)}function Kt(t){return!(!t||!0!==t.__v_isRef)}function Wt(t,e,n){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];if(Kt(t))return t.value;var r=t&&t.__ob__;return r&&r.dep.depend(),t},set:function(t){var r=e[n];Kt(r)&&!Kt(t)?r.value=t:e[n]=t}})}var Gt="watcher";"".concat(Gt," callback"),"".concat(Gt," getter"),"".concat(Gt," cleanup");var Qt;var Jt=function(){function t(t){void 0===t&&(t=!1),this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Qt,!t&&Qt&&(this.index=(Qt.scopes||(Qt.scopes=[])).push(this)-1)}return t.prototype.run=function(t){if(this.active){var e=Qt;try{return Qt=this,t()}finally{Qt=e}}else 0},t.prototype.on=function(){Qt=this},t.prototype.off=function(){Qt=this.parent},t.prototype.stop=function(t){if(this.active){var e=void 0,n=void 0;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].teardown();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},t}();function Xt(t,e){void 0===e&&(e=Qt),e&&e.active&&e.effects.push(t)}function Yt(){return Qt}function Zt(t){var e=t._provided,n=t.$parent&&t.$parent._provided;return n===e?t._provided=Object.create(n):e}var te=S((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function ee(t,e){function n(){var t=n.fns;if(!i(t))return Xe(t,null,arguments,e,"v-on handler");for(var r=t.slice(),s=0;s<r.length;s++)Xe(r[s],null,arguments,e,"v-on handler")}return n.fns=t,n}function ne(t,e,n,r,i,o){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=te(c),s(u)||(s(l)?(s(u.fns)&&(u=t[c]=ee(u,o)),a(h.once)&&(u=t[c]=i(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)s(t[c])&&(h=te(c),r(h.name,e[c],h.capture))}function re(t,e,n){var r;t instanceof yt&&(t=t.data.hook||(t.data.hook={}));var i=t[e];function c(){n.apply(this,arguments),E(r.fns,c)}s(i)?r=ee([c]):o(i.fns)&&a(i.merged)?(r=i,r.fns.push(c)):r=ee([i,c]),r.merged=!0,t[e]=r}function ie(t,e,n){var r=e.options.props;if(!s(r)){var i={},a=t.attrs,c=t.props;if(o(a)||o(c))for(var u in r){var l=R(u);se(i,c,u,l,!0)||se(i,a,u,l,!1)}return i}}function se(t,e,n,r,i){if(o(e)){if(I(e,n))return t[n]=e[n],i||delete e[n],!0;if(I(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function oe(t){for(var e=0;e<t.length;e++)if(i(t[e]))return Array.prototype.concat.apply([],t);return t}function ae(t){return u(t)?[_t(t)]:i(t)?ue(t):void 0}function ce(t){return o(t)&&o(t.text)&&c(t.isComment)}function ue(t,e){var n,r,c,l,h=[];for(n=0;n<t.length;n++)r=t[n],s(r)||"boolean"===typeof r||(c=h.length-1,l=h[c],i(r)?r.length>0&&(r=ue(r,"".concat(e||"","_").concat(n)),ce(r[0])&&ce(l)&&(h[c]=_t(l.text+r[0].text),r.shift()),h.push.apply(h,r)):u(r)?ce(l)?h[c]=_t(l.text+r):""!==r&&h.push(_t(r)):ce(r)&&ce(l)?h[c]=_t(l.text+r.text):(a(t._isVList)&&o(r.tag)&&s(r.key)&&o(e)&&(r.key="__vlist".concat(e,"_").concat(n,"__")),h.push(r)));return h}function le(t,e){var n,r,s,a,c=null;if(i(t)||"string"===typeof t)for(c=new Array(t.length),n=0,r=t.length;n<r;n++)c[n]=e(t[n],n);else if("number"===typeof t)for(c=new Array(t),n=0;n<t;n++)c[n]=e(n+1,n);else if(h(t))if(mt&&t[Symbol.iterator]){c=[];var u=t[Symbol.iterator](),l=u.next();while(!l.done)c.push(e(l.value,c.length)),l=u.next()}else for(s=Object.keys(t),c=new Array(s.length),n=0,r=s.length;n<r;n++)a=s[n],c[n]=e(t[a],a,n);return o(c)||(c=[]),c._isVList=!0,c}function he(t,e,n,r){var i,s=this.$scopedSlots[t];s?(n=n||{},r&&(n=L(L({},r),n)),i=s(n)||(l(e)?e():e)):i=this.$slots[t]||(l(e)?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},i):i}function de(t){return Sr(this.$options,"filters",t,!0)||j}function fe(t,e){return i(t)?-1===t.indexOf(e):t!==e}function pe(t,e,n,r,i){var s=W.keyCodes[e]||n;return i&&r&&!W.keyCodes[e]?fe(i,r):s?fe(s,t):r?R(r)!==e:void 0===t}function me(t,e,n,r,s){if(n)if(h(n)){i(n)&&(n=M(n));var o=void 0,a=function(i){if("class"===i||"style"===i||b(i))o=t;else{var a=t.attrs&&t.attrs.type;o=r||W.mustUseProp(e,a,i)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=A(i),u=R(i);if(!(c in o)&&!(u in o)&&(o[i]=n[i],s)){var l=t.on||(t.on={});l["update:".concat(i)]=function(t){n[i]=t}}};for(var c in n)a(c)}else;return t}function ge(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,this._c,this),ye(r,"__static__".concat(t),!1)),r}function ve(t,e,n){return ye(t,"__once__".concat(e).concat(n?"_".concat(n):""),!0),t}function ye(t,e,n){if(i(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&we(t[r],"".concat(e,"_").concat(r),n);else we(t,e,n)}function we(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function _e(t,e){if(e)if(f(e)){var n=t.on=t.on?L({},t.on):{};for(var r in e){var i=n[r],s=e[r];n[r]=i?[].concat(i,s):s}}else;return t}function be(t,e,n,r){e=e||{$stable:!n};for(var s=0;s<t.length;s++){var o=t[s];i(o)?be(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return r&&(e.$key=r),e}function Ee(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Te(t,e){return"string"===typeof t?e+t:t}function Ie(t){t._o=ve,t._n=w,t._s=v,t._l=le,t._t=he,t._q=V,t._i=$,t._m=ge,t._f=de,t._k=pe,t._b=me,t._v=_t,t._e=wt,t._u=be,t._g=_e,t._d=Ee,t._p=Te}function Se(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var s=t[r],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==e&&s.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var u in n)n[u].every(Ce)&&delete n[u];return n}function Ce(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Ae(t){return t.isComment&&t.asyncFactory}function ke(t,e,n,i){var s,o=Object.keys(n).length>0,a=e?!!e.$stable:!o,c=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(a&&i&&i!==r&&c===i.$key&&!o&&!i.$hasNormal)return i;for(var u in s={},e)e[u]&&"$"!==u[0]&&(s[u]=Oe(t,n,u,e[u]))}else s={};for(var l in n)l in s||(s[l]=Re(n,l));return e&&Object.isExtensible(e)&&(e._normalized=s),J(s,"$stable",a),J(s,"$key",c),J(s,"$hasNormal",o),s}function Oe(t,e,n,r){var s=function(){var e=gt;vt(t);var n=arguments.length?r.apply(null,arguments):r({});n=n&&"object"===typeof n&&!i(n)?[n]:ae(n);var s=n&&n[0];return vt(e),n&&(!s||1===n.length&&s.isComment&&!Ae(s))?void 0:n};return r.proxy&&Object.defineProperty(e,n,{get:s,enumerable:!0,configurable:!0}),s}function Re(t,e){return function(){return t[e]}}function xe(t){var e=t.$options,n=e.setup;if(n){var r=t._setupContext=Ne(t);vt(t),At();var i=Xe(n,null,[t._props||qt({}),r],t,"setup");if(kt(),vt(),l(i))e.render=i;else if(h(i))if(t._setupState=i,i.__sfc){var s=t._setupProxy={};for(var o in i)"__sfc"!==o&&Wt(s,i,o)}else for(var o in i)Q(o)||Wt(t,i,o);else 0}}function Ne(t){return{get attrs(){if(!t._attrsProxy){var e=t._attrsProxy={};J(e,"_v_attr_proxy",!0),De(e,t.$attrs,r,t,"$attrs")}return t._attrsProxy},get listeners(){if(!t._listenersProxy){var e=t._listenersProxy={};De(e,t.$listeners,r,t,"$listeners")}return t._listenersProxy},get slots(){return Le(t)},emit:D(t.$emit,t),expose:function(e){e&&Object.keys(e).forEach((function(n){return Wt(t,e,n)}))}}}function De(t,e,n,r,i){var s=!1;for(var o in e)o in t?e[o]!==n[o]&&(s=!0):(s=!0,Pe(t,o,r,i));for(var o in t)o in e||(s=!0,delete t[o]);return s}function Pe(t,e,n,r){Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){return n[r][e]}})}function Le(t){return t._slotsProxy||Me(t._slotsProxy={},t.$scopedSlots),t._slotsProxy}function Me(t,e){for(var n in e)t[n]=e[n];for(var n in t)n in e||delete t[n]}function Ue(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,i=n&&n.context;t.$slots=Se(e._renderChildren,i),t.$scopedSlots=n?ke(t.$parent,n.data.scopedSlots,t.$slots):r,t._c=function(e,n,r,i){return Ke(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return Ke(t,e,n,r,i,!0)};var s=n&&n.data;jt(t,"$attrs",s&&s.attrs||r,null,!0),jt(t,"$listeners",e._parentListeners||r,null,!0)}var Fe=null;function je(t){Ie(t.prototype),t.prototype.$nextTick=function(t){return ln(t,this)},t.prototype._render=function(){var t=this,e=t.$options,n=e.render,r=e._parentVnode;r&&t._isMounted&&(t.$scopedSlots=ke(t.$parent,r.data.scopedSlots,t.$slots,t.$scopedSlots),t._slotsProxy&&Me(t._slotsProxy,t.$scopedSlots)),t.$vnode=r;var s,o=gt,a=Fe;try{vt(t),Fe=t,s=n.call(t._renderProxy,t.$createElement)}catch(Zo){Je(Zo,t,"render"),s=t._vnode}finally{Fe=a,vt(o)}return i(s)&&1===s.length&&(s=s[0]),s instanceof yt||(s=wt()),s.parent=r,s}}function Ve(t,e){return(t.__esModule||mt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),h(t)?e.extend(t):t}function $e(t,e,n,r,i){var s=wt();return s.asyncFactory=t,s.asyncMeta={data:e,context:n,children:r,tag:i},s}function Be(t,e){if(a(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=Fe;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),a(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var r=t.owners=[n],i=!0,c=null,u=null;n.$on("hook:destroyed",(function(){return E(r,n)}));var l=function(t){for(var e=0,n=r.length;e<n;e++)r[e].$forceUpdate();t&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},d=B((function(n){t.resolved=Ve(n,e),i?r.length=0:l(!0)})),f=B((function(e){o(t.errorComp)&&(t.error=!0,l(!0))})),p=t(d,f);return h(p)&&(g(p)?s(t.resolved)&&p.then(d,f):g(p.component)&&(p.component.then(d,f),o(p.error)&&(t.errorComp=Ve(p.error,e)),o(p.loading)&&(t.loadingComp=Ve(p.loading,e),0===p.delay?t.loading=!0:c=setTimeout((function(){c=null,s(t.resolved)&&s(t.error)&&(t.loading=!0,l(!1))}),p.delay||200)),o(p.timeout)&&(u=setTimeout((function(){u=null,s(t.resolved)&&f(null)}),p.timeout)))),i=!1,t.loading?t.loadingComp:t.resolved}}function qe(t){if(i(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||Ae(n)))return n}}var ze=1,He=2;function Ke(t,e,n,r,s,o){return(i(n)||u(n))&&(s=r,r=n,n=void 0),a(o)&&(s=He),We(t,e,n,r,s)}function We(t,e,n,r,s){if(o(n)&&o(n.__ob__))return wt();if(o(n)&&o(n.is)&&(e=n.is),!e)return wt();var a,c;if(i(r)&&l(r[0])&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),s===He?r=ae(r):s===ze&&(r=oe(r)),"string"===typeof e){var u=void 0;c=t.$vnode&&t.$vnode.ns||W.getTagNamespace(e),a=W.isReservedTag(e)?new yt(W.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(u=Sr(t.$options,"components",e))?new yt(e,n,r,void 0,void 0,t):cr(u,n,t,r,e)}else a=cr(e,n,t,r);return i(a)?a:o(a)?(o(c)&&Ge(a,c),o(n)&&Qe(n),a):wt()}function Ge(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var r=0,i=t.children.length;r<i;r++){var c=t.children[r];o(c.tag)&&(s(c.ns)||a(n)&&"svg"!==c.tag)&&Ge(c,e,n)}}function Qe(t){h(t.style)&&mn(t.style),h(t.class)&&mn(t.class)}function Je(t,e,n){At();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var s=0;s<i.length;s++)try{var o=!1===i[s].call(r,t,e,n);if(o)return}catch(Zo){Ye(Zo,r,"errorCaptured hook")}}}Ye(t,e,n)}finally{kt()}}function Xe(t,e,n,r,i){var s;try{s=n?t.apply(e,n):t.call(e),s&&!s._isVue&&g(s)&&!s._handled&&(s.catch((function(t){return Je(t,r,i+" (Promise/async)")})),s._handled=!0)}catch(Zo){Je(Zo,r,i)}return s}function Ye(t,e,n){if(W.errorHandler)try{return W.errorHandler.call(null,t,e,n)}catch(Zo){Zo!==t&&Ze(Zo,null,"config.errorHandler")}Ze(t,e,n)}function Ze(t,e,n){if(!tt||"undefined"===typeof console)throw t;console.error(t)}var tn,en=!1,nn=[],rn=!1;function sn(){rn=!1;var t=nn.slice(0);nn.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ft(Promise)){var on=Promise.resolve();tn=function(){on.then(sn),st&&setTimeout(U)},en=!0}else if(nt||"undefined"===typeof MutationObserver||!ft(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())tn="undefined"!==typeof setImmediate&&ft(setImmediate)?function(){setImmediate(sn)}:function(){setTimeout(sn,0)};else{var an=1,cn=new MutationObserver(sn),un=document.createTextNode(String(an));cn.observe(un,{characterData:!0}),tn=function(){an=(an+1)%2,un.data=String(an)},en=!0}function ln(t,e){var n;if(nn.push((function(){if(t)try{t.call(e)}catch(Zo){Je(Zo,e,"nextTick")}else n&&n(e)})),rn||(rn=!0,tn()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}function hn(t){return function(e,n){if(void 0===n&&(n=gt),n)return dn(n,t,e)}}function dn(t,e,n){var r=t.$options;r[e]=vr(r[e],n)}hn("beforeMount"),hn("mounted"),hn("beforeUpdate"),hn("updated"),hn("beforeDestroy"),hn("destroyed"),hn("activated"),hn("deactivated"),hn("serverPrefetch"),hn("renderTracked"),hn("renderTriggered"),hn("errorCaptured");var fn="2.7.16";var pn=new pt;function mn(t){return gn(t,pn),pn.clear(),t}function gn(t,e){var n,r,s=i(t);if(!(!s&&!h(t)||t.__v_skip||Object.isFrozen(t)||t instanceof yt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(s){n=t.length;while(n--)gn(t[n],e)}else if(Kt(t))gn(t.value,e);else{r=Object.keys(t),n=r.length;while(n--)gn(t[r[n]],e)}}}var vn,yn=0,wn=function(){function t(t,e,n,r,i){Xt(this,Qt&&!Qt._vm?Qt:t?t._scope:void 0),(this.vm=t)&&i&&(t._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++yn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new pt,this.newDepIds=new pt,this.expression="",l(e)?this.getter=e:(this.getter=Y(e),this.getter||(this.getter=U)),this.value=this.lazy?void 0:this.get()}return t.prototype.get=function(){var t;At(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Zo){if(!this.user)throw Zo;Je(Zo,e,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&mn(t),kt(),this.cleanupDeps()}return t},t.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},t.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},t.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Xn(this)},t.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||h(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'.concat(this.expression,'"');Xe(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},t.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},t.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},t.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&E(this.vm._scope.effects,this),this.active){var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},t}();function _n(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&In(t,e)}function bn(t,e){vn.$on(t,e)}function En(t,e){vn.$off(t,e)}function Tn(t,e){var n=vn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function In(t,e,n){vn=t,ne(e,n||{},bn,En,Tn,t),vn=void 0}function Sn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(i(t))for(var s=0,o=t.length;s<o;s++)r.$on(t[s],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(i(t)){for(var r=0,s=t.length;r<s;r++)n.$off(t[r],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var c=a.length;while(c--)if(o=a[c],o===e||o.fn===e){a.splice(c,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?P(n):n;for(var r=P(arguments,1),i='event handler for "'.concat(t,'"'),s=0,o=n.length;s<o;s++)Xe(n[s],e,r,e,i)}return e}}var Cn=null;function An(t){var e=Cn;return Cn=t,function(){Cn=e}}function kn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._provided=n?n._provided:Object.create(null),t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function On(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,s=An(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),s(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n);var o=n;while(o&&o.$vnode&&o.$parent&&o.$vnode===o.$parent._vnode)o.$parent.$el=o.$el,o=o.$parent},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Ln(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||E(e.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Ln(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Rn(t,e,n){var r;t.$el=e,t.$options.render||(t.$options.render=wt),Ln(t,"beforeMount"),r=function(){t._update(t._render(),n)};var i={before:function(){t._isMounted&&!t._isDestroyed&&Ln(t,"beforeUpdate")}};new wn(t,r,U,i,!0),n=!1;var s=t._preWatchers;if(s)for(var o=0;o<s.length;o++)s[o].run();return null==t.$vnode&&(t._isMounted=!0,Ln(t,"mounted")),t}function xn(t,e,n,i,s){var o=i.data.scopedSlots,a=t.$scopedSlots,c=!!(o&&!o.$stable||a!==r&&!a.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),u=!!(s||t.$options._renderChildren||c),l=t.$vnode;t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=s;var h=i.data.attrs||r;t._attrsProxy&&De(t._attrsProxy,h,l.data&&l.data.attrs||r,t,"$attrs")&&(u=!0),t.$attrs=h,n=n||r;var d=t.$options._parentListeners;if(t._listenersProxy&&De(t._listenersProxy,n,d||r,t,"$listeners"),t.$listeners=t.$options._parentListeners=n,In(t,n,d),e&&t.$options.props){Lt(!1);for(var f=t._props,p=t.$options._propKeys||[],m=0;m<p.length;m++){var g=p[m],v=t.$options.props;f[g]=Cr(g,v,e,t)}Lt(!0),t.$options.propsData=e}u&&(t.$slots=Se(s,i.context),t.$forceUpdate())}function Nn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Dn(t,e){if(e){if(t._directInactive=!1,Nn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);Ln(t,"activated")}}function Pn(t,e){if((!e||(t._directInactive=!0,!Nn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Pn(t.$children[n]);Ln(t,"deactivated")}}function Ln(t,e,n,r){void 0===r&&(r=!0),At();var i=gt,s=Yt();r&&vt(t);var o=t.$options[e],a="".concat(e," hook");if(o)for(var c=0,u=o.length;c<u;c++)Xe(o[c],t,n||null,t,a);t._hasHookEvent&&t.$emit("hook:"+e),r&&(vt(i),s&&s.on()),kt()}var Mn=[],Un=[],Fn={},jn=!1,Vn=!1,$n=0;function Bn(){$n=Mn.length=Un.length=0,Fn={},jn=Vn=!1}var qn=0,zn=Date.now;if(tt&&!nt){var Hn=window.performance;Hn&&"function"===typeof Hn.now&&zn()>document.createEvent("Event").timeStamp&&(zn=function(){return Hn.now()})}var Kn=function(t,e){if(t.post){if(!e.post)return 1}else if(e.post)return-1;return t.id-e.id};function Wn(){var t,e;for(qn=zn(),Vn=!0,Mn.sort(Kn),$n=0;$n<Mn.length;$n++)t=Mn[$n],t.before&&t.before(),e=t.id,Fn[e]=null,t.run();var n=Un.slice(),r=Mn.slice();Bn(),Jn(n),Gn(r),It(),dt&&W.devtools&&dt.emit("flush")}function Gn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&Ln(r,"updated")}}function Qn(t){t._inactive=!1,Un.push(t)}function Jn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Dn(t[e],!0)}function Xn(t){var e=t.id;if(null==Fn[e]&&(t!==St.target||!t.noRecurse)){if(Fn[e]=!0,Vn){var n=Mn.length-1;while(n>$n&&Mn[n].id>t.id)n--;Mn.splice(n+1,0,t)}else Mn.push(t);jn||(jn=!0,ln(Wn))}}function Yn(t){var e=t.$options.provide;if(e){var n=l(e)?e.call(t):e;if(!h(n))return;for(var r=Zt(t),i=mt?Reflect.ownKeys(n):Object.keys(n),s=0;s<i.length;s++){var o=i[s];Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(n,o))}}}function Zn(t){var e=tr(t.$options.inject,t);e&&(Lt(!1),Object.keys(e).forEach((function(n){jt(t,n,e[n])})),Lt(!0))}function tr(t,e){if(t){for(var n=Object.create(null),r=mt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var s=r[i];if("__ob__"!==s){var o=t[s].from;if(o in e._provided)n[s]=e._provided[o];else if("default"in t[s]){var a=t[s].default;n[s]=l(a)?a.call(e):a}else 0}}return n}}function er(t,e,n,s,o){var c,u=this,l=o.options;I(s,"_uid")?(c=Object.create(s),c._original=s):(c=s,s=s._original);var h=a(l._compiled),d=!h;this.data=t,this.props=e,this.children=n,this.parent=s,this.listeners=t.on||r,this.injections=tr(l.inject,s),this.slots=function(){return u.$slots||ke(s,t.scopedSlots,u.$slots=Se(n,s)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return ke(s,t.scopedSlots,this.slots())}}),h&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=ke(s,t.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,e,n,r){var o=Ke(c,t,e,n,r,d);return o&&!i(o)&&(o.fnScopeId=l._scopeId,o.fnContext=s),o}:this._c=function(t,e,n,r){return Ke(c,t,e,n,r,d)}}function nr(t,e,n,s,a){var c=t.options,u={},l=c.props;if(o(l))for(var h in l)u[h]=Cr(h,l,e||r);else o(n.attrs)&&ir(u,n.attrs),o(n.props)&&ir(u,n.props);var d=new er(n,u,a,s,t),f=c.render.call(null,d._c,d);if(f instanceof yt)return rr(f,n,d.parent,c,d);if(i(f)){for(var p=ae(f)||[],m=new Array(p.length),g=0;g<p.length;g++)m[g]=rr(p[g],n,d.parent,c,d);return m}}function rr(t,e,n,r,i){var s=bt(t);return s.fnContext=n,s.fnOptions=r,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function ir(t,e){for(var n in e)t[A(n)]=e[n]}function sr(t){return t.name||t.__name||t._componentTag}Ie(er.prototype);var or={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;or.prepatch(n,n)}else{var r=t.componentInstance=ur(t,Cn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;xn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Ln(n,"mounted")),t.data.keepAlive&&(e._isMounted?Qn(n):Dn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Pn(e,!0):e.$destroy())}},ar=Object.keys(or);function cr(t,e,n,r,i){if(!s(t)){var c=n.$options._base;if(h(t)&&(t=c.extend(t)),"function"===typeof t){var u;if(s(t.cid)&&(u=t,t=Be(u,c),void 0===t))return $e(u,e,n,r,i);e=e||{},Jr(t),o(e.model)&&dr(t.options,e);var l=ie(e,t,i);if(a(t.options.functional))return nr(t,l,e,n,r);var d=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}lr(e);var p=sr(t.options)||i,m=new yt("vue-component-".concat(t.cid).concat(p?"-".concat(p):""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:d,tag:i,children:r},u);return m}}}function ur(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function lr(t){for(var e=t.hook||(t.hook={}),n=0;n<ar.length;n++){var r=ar[n],i=e[r],s=or[r];i===s||i&&i._merged||(e[r]=i?hr(s,i):s)}}function hr(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function dr(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var s=e.on||(e.on={}),a=s[r],c=e.model.callback;o(a)?(i(a)?-1===a.indexOf(c):a!==c)&&(s[r]=[c].concat(a)):s[r]=c}var fr=U,pr=W.optionMergeStrategies;function mr(t,e,n){if(void 0===n&&(n=!0),!e)return t;for(var r,i,s,o=mt?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)r=o[a],"__ob__"!==r&&(i=t[r],s=e[r],n&&I(t,r)?i!==s&&f(i)&&f(s)&&mr(i,s):Vt(t,r,s));return t}function gr(t,e,n){return n?function(){var r=l(e)?e.call(n,n):e,i=l(t)?t.call(n,n):t;return r?mr(r,i):i}:e?t?function(){return mr(l(e)?e.call(this,this):e,l(t)?t.call(this,this):t)}:e:t}function vr(t,e){var n=e?t?t.concat(e):i(e)?e:[e]:t;return n?yr(n):n}function yr(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function wr(t,e,n,r){var i=Object.create(t||null);return e?L(i,e):i}pr.data=function(t,e,n){return n?gr(t,e,n):e&&"function"!==typeof e?t:gr(t,e)},K.forEach((function(t){pr[t]=vr})),H.forEach((function(t){pr[t+"s"]=wr})),pr.watch=function(t,e,n,r){if(t===ct&&(t=void 0),e===ct&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var s={};for(var o in L(s,t),e){var a=s[o],c=e[o];a&&!i(a)&&(a=[a]),s[o]=a?a.concat(c):i(c)?c:[c]}return s},pr.props=pr.methods=pr.inject=pr.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return L(i,t),e&&L(i,e),i},pr.provide=function(t,e){return t?function(){var n=Object.create(null);return mr(n,l(t)?t.call(this):t),e&&mr(n,l(e)?e.call(this):e,!1),n}:e};var _r=function(t,e){return void 0===e?t:e};function br(t,e){var n=t.props;if(n){var r,s,o,a={};if(i(n)){r=n.length;while(r--)s=n[r],"string"===typeof s&&(o=A(s),a[o]={type:null})}else if(f(n))for(var c in n)s=n[c],o=A(c),a[o]=f(s)?s:{type:s};else 0;t.props=a}}function Er(t,e){var n=t.inject;if(n){var r=t.inject={};if(i(n))for(var s=0;s<n.length;s++)r[n[s]]={from:n[s]};else if(f(n))for(var o in n){var a=n[o];r[o]=f(a)?L({from:o},a):{from:a}}else 0}}function Tr(t){var e=t.directives;if(e)for(var n in e){var r=e[n];l(r)&&(e[n]={bind:r,update:r})}}function Ir(t,e,n){if(l(e)&&(e=e.options),br(e,n),Er(e,n),Tr(e),!e._base&&(e.extends&&(t=Ir(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Ir(t,e.mixins[r],n);var s,o={};for(s in t)a(s);for(s in e)I(t,s)||a(s);function a(r){var i=pr[r]||_r;o[r]=i(t[r],e[r],n,r)}return o}function Sr(t,e,n,r){if("string"===typeof n){var i=t[e];if(I(i,n))return i[n];var s=A(n);if(I(i,s))return i[s];var o=k(s);if(I(i,o))return i[o];var a=i[n]||i[s]||i[o];return a}}function Cr(t,e,n,r){var i=e[t],s=!I(n,t),o=n[t],a=xr(Boolean,i.type);if(a>-1)if(s&&!I(i,"default"))o=!1;else if(""===o||o===R(t)){var c=xr(String,i.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=Ar(r,i,t);var u=Pt;Lt(!0),Ft(o),Lt(u)}return o}function Ar(t,e,n){if(I(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:l(r)&&"Function"!==Or(e.type)?r.call(t):r}}var kr=/^\s*function (\w+)/;function Or(t){var e=t&&t.toString().match(kr);return e?e[1]:""}function Rr(t,e){return Or(t)===Or(e)}function xr(t,e){if(!i(e))return Rr(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Rr(e[n],t))return n;return-1}var Nr={enumerable:!0,configurable:!0,get:U,set:U};function Dr(t,e,n){Nr.get=function(){return this[e][n]},Nr.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Nr)}function Pr(t){var e=t.$options;if(e.props&&Lr(t,e.props),xe(t),e.methods&&qr(t,e.methods),e.data)Mr(t);else{var n=Ft(t._data={});n&&n.vmCount++}e.computed&&jr(t,e.computed),e.watch&&e.watch!==ct&&zr(t,e.watch)}function Lr(t,e){var n=t.$options.propsData||{},r=t._props=qt({}),i=t.$options._propKeys=[],s=!t.$parent;s||Lt(!1);var o=function(s){i.push(s);var o=Cr(s,e,n,t);jt(r,s,o,void 0,!0),s in t||Dr(t,"_props",s)};for(var a in e)o(a);Lt(!0)}function Mr(t){var e=t.$options.data;e=t._data=l(e)?Ur(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var s=n[i];0,r&&I(r,s)||Q(s)||Dr(t,"_data",s)}var o=Ft(e);o&&o.vmCount++}function Ur(t,e){At();try{return t.call(e,e)}catch(Zo){return Je(Zo,e,"data()"),{}}finally{kt()}}var Fr={lazy:!0};function jr(t,e){var n=t._computedWatchers=Object.create(null),r=ht();for(var i in e){var s=e[i],o=l(s)?s:s.get;0,r||(n[i]=new wn(t,o||U,U,Fr)),i in t||Vr(t,i,s)}}function Vr(t,e,n){var r=!ht();l(n)?(Nr.get=r?$r(e):Br(n),Nr.set=U):(Nr.get=n.get?r&&!1!==n.cache?$r(e):Br(n.get):U,Nr.set=n.set||U),Object.defineProperty(t,e,Nr)}function $r(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),St.target&&e.depend(),e.value}}function Br(t){return function(){return t.call(this,this)}}function qr(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?U:D(e[n],t)}function zr(t,e){for(var n in e){var r=e[n];if(i(r))for(var s=0;s<r.length;s++)Hr(t,n,r[s]);else Hr(t,n,r)}}function Hr(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function Kr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Vt,t.prototype.$delete=$t,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return Hr(r,t,e,n);n=n||{},n.user=!0;var i=new wn(r,t,e,n);if(n.immediate){var s='callback for immediate watcher "'.concat(i.expression,'"');At(),Xe(e,r,[i.value],r,s),kt()}return function(){i.teardown()}}}var Wr=0;function Gr(t){t.prototype._init=function(t){var e=this;e._uid=Wr++,e._isVue=!0,e.__v_skip=!0,e._scope=new Jt(!0),e._scope.parent=void 0,e._scope._vm=!0,t&&t._isComponent?Qr(e,t):e.$options=Ir(Jr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,kn(e),_n(e),Ue(e),Ln(e,"beforeCreate",void 0,!1),Zn(e),Pr(e),Yn(e),Ln(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Qr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Jr(t){var e=t.options;if(t.super){var n=Jr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Xr(t);i&&L(t.extendOptions,i),e=t.options=Ir(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Xr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Yr(t){this._init(t)}function Zr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=P(arguments,1);return n.unshift(this),l(t.install)?t.install.apply(t,n):l(t)&&t.apply(null,n),e.push(t),this}}function ti(t){t.mixin=function(t){return this.options=Ir(this.options,t),this}}function ei(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var s=sr(t)||sr(n.options);var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Ir(n.options,t),o["super"]=n,o.options.props&&ni(o),o.options.computed&&ri(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,H.forEach((function(t){o[t]=n[t]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=L({},o.options),i[r]=o,o}}function ni(t){var e=t.options.props;for(var n in e)Dr(t.prototype,"_props",n)}function ri(t){var e=t.options.computed;for(var n in e)Vr(t.prototype,n,e[n])}function ii(t){H.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&l(n)&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function si(t){return t&&(sr(t.Ctor.options)||t.tag)}function oi(t,e){return i(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function ai(t,e){var n=t.cache,r=t.keys,i=t._vnode,s=t.$vnode;for(var o in n){var a=n[o];if(a){var c=a.name;c&&!e(c)&&ci(n,o,r,i)}}s.componentOptions.children=void 0}function ci(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,E(n,e)}Gr(Yr),Kr(Yr),Sn(Yr),On(Yr),je(Yr);var ui=[String,RegExp,Array],li={name:"keep-alive",abstract:!0,props:{include:ui,exclude:ui,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var s=r.tag,o=r.componentInstance,a=r.componentOptions;e[i]={name:si(a),tag:s,componentInstance:o},n.push(i),this.max&&n.length>parseInt(this.max)&&ci(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)ci(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){ai(t,(function(t){return oi(e,t)}))})),this.$watch("exclude",(function(e){ai(t,(function(t){return!oi(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=qe(t),n=e&&e.componentOptions;if(n){var r=si(n),i=this,s=i.include,o=i.exclude;if(s&&(!r||!oi(s,r))||o&&r&&oi(o,r))return e;var a=this,c=a.cache,u=a.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,E(u,l),u.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},hi={KeepAlive:li};function di(t){var e={get:function(){return W}};Object.defineProperty(t,"config",e),t.util={warn:fr,extend:L,mergeOptions:Ir,defineReactive:jt},t.set=Vt,t.delete=$t,t.nextTick=ln,t.observable=function(t){return Ft(t),t},t.options=Object.create(null),H.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,L(t.options.components,hi),Zr(t),ti(t),ei(t),ii(t)}di(Yr),Object.defineProperty(Yr.prototype,"$isServer",{get:ht}),Object.defineProperty(Yr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Yr,"FunctionalRenderContext",{value:er}),Yr.version=fn;var fi=_("style,class"),pi=_("input,textarea,option,select,progress"),mi=function(t,e,n){return"value"===n&&pi(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},gi=_("contenteditable,draggable,spellcheck"),vi=_("events,caret,typing,plaintext-only"),yi=function(t,e){return Ti(e)||"false"===e?"false":"contenteditable"===t&&vi(e)?e:"true"},wi=_("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),_i="http://www.w3.org/1999/xlink",bi=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Ei=function(t){return bi(t)?t.slice(6,t.length):""},Ti=function(t){return null==t||!1===t};function Ii(t){var e=t.data,n=t,r=t;while(o(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Si(r.data,e));while(o(n=n.parent))n&&n.data&&(e=Si(e,n.data));return Ci(e.staticClass,e.class)}function Si(t,e){return{staticClass:Ai(t.staticClass,e.staticClass),class:o(t.class)?[t.class,e.class]:e.class}}function Ci(t,e){return o(t)||o(e)?Ai(t,ki(e)):""}function Ai(t,e){return t?e?t+" "+e:t:e||""}function ki(t){return Array.isArray(t)?Oi(t):h(t)?Ri(t):"string"===typeof t?t:""}function Oi(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=ki(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Ri(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var xi={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Ni=_("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Di=_("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Pi=function(t){return Ni(t)||Di(t)};function Li(t){return Di(t)?"svg":"math"===t?"math":void 0}var Mi=Object.create(null);function Ui(t){if(!tt)return!0;if(Pi(t))return!1;if(t=t.toLowerCase(),null!=Mi[t])return Mi[t];var e=document.createElement(t);return t.indexOf("-")>-1?Mi[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Mi[t]=/HTMLUnknownElement/.test(e.toString())}var Fi=_("text,number,password,search,email,tel,url");function ji(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function Vi(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function $i(t,e){return document.createElementNS(xi[t],e)}function Bi(t){return document.createTextNode(t)}function qi(t){return document.createComment(t)}function zi(t,e,n){t.insertBefore(e,n)}function Hi(t,e){t.removeChild(e)}function Ki(t,e){t.appendChild(e)}function Wi(t){return t.parentNode}function Gi(t){return t.nextSibling}function Qi(t){return t.tagName}function Ji(t,e){t.textContent=e}function Xi(t,e){t.setAttribute(e,"")}var Yi=Object.freeze({__proto__:null,createElement:Vi,createElementNS:$i,createTextNode:Bi,createComment:qi,insertBefore:zi,removeChild:Hi,appendChild:Ki,parentNode:Wi,nextSibling:Gi,tagName:Qi,setTextContent:Ji,setStyleScope:Xi}),Zi={create:function(t,e){ts(e)},update:function(t,e){t.data.ref!==e.data.ref&&(ts(t,!0),ts(e))},destroy:function(t){ts(t,!0)}};function ts(t,e){var n=t.data.ref;if(o(n)){var r=t.context,s=t.componentInstance||t.elm,a=e?null:s,c=e?void 0:s;if(l(n))Xe(n,r,[a],r,"template ref function");else{var u=t.data.refInFor,h="string"===typeof n||"number"===typeof n,d=Kt(n),f=r.$refs;if(h||d)if(u){var p=h?f[n]:n.value;e?i(p)&&E(p,s):i(p)?p.includes(s)||p.push(s):h?(f[n]=[s],es(r,n,f[n])):n.value=[s]}else if(h){if(e&&f[n]!==s)return;f[n]=c,es(r,n,a)}else if(d){if(e&&n.value!==s)return;n.value=a}else 0}}}function es(t,e,n){var r=t._setupState;r&&I(r,e)&&(Kt(r[e])?r[e].value=n:r[e]=n)}var ns=new yt("",{},[]),rs=["create","activate","update","remove","destroy"];function is(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&o(t.data)===o(e.data)&&ss(t,e)||a(t.isAsyncPlaceholder)&&s(e.asyncFactory.error))}function ss(t,e){if("input"!==t.tag)return!0;var n,r=o(n=t.data)&&o(n=n.attrs)&&n.type,i=o(n=e.data)&&o(n=n.attrs)&&n.type;return r===i||Fi(r)&&Fi(i)}function os(t,e,n){var r,i,s={};for(r=e;r<=n;++r)i=t[r].key,o(i)&&(s[i]=r);return s}function as(t){var e,n,r={},c=t.modules,l=t.nodeOps;for(e=0;e<rs.length;++e)for(r[rs[e]]=[],n=0;n<c.length;++n)o(c[n][rs[e]])&&r[rs[e]].push(c[n][rs[e]]);function h(t){return new yt(l.tagName(t).toLowerCase(),{},[],void 0,t)}function d(t,e){function n(){0===--n.listeners&&f(t)}return n.listeners=e,n}function f(t){var e=l.parentNode(t);o(e)&&l.removeChild(e,t)}function p(t,e,n,r,i,s,c){if(o(t.elm)&&o(s)&&(t=s[c]=bt(t)),t.isRootInsert=!i,!m(t,e,n,r)){var u=t.data,h=t.children,d=t.tag;o(d)?(t.elm=t.ns?l.createElementNS(t.ns,d):l.createElement(d,t),T(t),w(t,h,e),o(u)&&E(t,e),y(n,t.elm,r)):a(t.isComment)?(t.elm=l.createComment(t.text),y(n,t.elm,r)):(t.elm=l.createTextNode(t.text),y(n,t.elm,r))}}function m(t,e,n,r){var i=t.data;if(o(i)){var s=o(t.componentInstance)&&i.keepAlive;if(o(i=i.hook)&&o(i=i.init)&&i(t,!1),o(t.componentInstance))return g(t,e),y(n,t.elm,r),a(s)&&v(t,e,n,r),!0}}function g(t,e){o(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,b(t)?(E(t,e),T(t)):(ts(t),e.push(t))}function v(t,e,n,i){var s,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,o(s=a.data)&&o(s=s.transition)){for(s=0;s<r.activate.length;++s)r.activate[s](ns,a);e.push(a);break}y(n,t.elm,i)}function y(t,e,n){o(t)&&(o(n)?l.parentNode(n)===t&&l.insertBefore(t,e,n):l.appendChild(t,e))}function w(t,e,n){if(i(e)){0;for(var r=0;r<e.length;++r)p(e[r],n,t.elm,null,!0,e,r)}else u(t.text)&&l.appendChild(t.elm,l.createTextNode(String(t.text)))}function b(t){while(t.componentInstance)t=t.componentInstance._vnode;return o(t.tag)}function E(t,n){for(var i=0;i<r.create.length;++i)r.create[i](ns,t);e=t.data.hook,o(e)&&(o(e.create)&&e.create(ns,t),o(e.insert)&&n.push(t))}function T(t){var e;if(o(e=t.fnScopeId))l.setStyleScope(t.elm,e);else{var n=t;while(n)o(e=n.context)&&o(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e),n=n.parent}o(e=Cn)&&e!==t.context&&e!==t.fnContext&&o(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e)}function I(t,e,n,r,i,s){for(;r<=i;++r)p(n[r],s,t,e,!1,n,r)}function S(t){var e,n,i=t.data;if(o(i))for(o(e=i.hook)&&o(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(o(e=t.children))for(n=0;n<t.children.length;++n)S(t.children[n])}function C(t,e,n){for(;e<=n;++e){var r=t[e];o(r)&&(o(r.tag)?(A(r),S(r)):f(r.elm))}}function A(t,e){if(o(e)||o(t.data)){var n,i=r.remove.length+1;for(o(e)?e.listeners+=i:e=d(t.elm,i),o(n=t.componentInstance)&&o(n=n._vnode)&&o(n.data)&&A(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);o(n=t.data.hook)&&o(n=n.remove)?n(t,e):e()}else f(t.elm)}function k(t,e,n,r,i){var a,c,u,h,d=0,f=0,m=e.length-1,g=e[0],v=e[m],y=n.length-1,w=n[0],_=n[y],b=!i;while(d<=m&&f<=y)s(g)?g=e[++d]:s(v)?v=e[--m]:is(g,w)?(R(g,w,r,n,f),g=e[++d],w=n[++f]):is(v,_)?(R(v,_,r,n,y),v=e[--m],_=n[--y]):is(g,_)?(R(g,_,r,n,y),b&&l.insertBefore(t,g.elm,l.nextSibling(v.elm)),g=e[++d],_=n[--y]):is(v,w)?(R(v,w,r,n,f),b&&l.insertBefore(t,v.elm,g.elm),v=e[--m],w=n[++f]):(s(a)&&(a=os(e,d,m)),c=o(w.key)?a[w.key]:O(w,e,d,m),s(c)?p(w,r,t,g.elm,!1,n,f):(u=e[c],is(u,w)?(R(u,w,r,n,f),e[c]=void 0,b&&l.insertBefore(t,u.elm,g.elm)):p(w,r,t,g.elm,!1,n,f)),w=n[++f]);d>m?(h=s(n[y+1])?null:n[y+1].elm,I(t,h,n,f,y,r)):f>y&&C(e,d,m)}function O(t,e,n,r){for(var i=n;i<r;i++){var s=e[i];if(o(s)&&is(t,s))return i}}function R(t,e,n,i,c,u){if(t!==e){o(e.elm)&&o(i)&&(e=i[c]=bt(e));var h=e.elm=t.elm;if(a(t.isAsyncPlaceholder))o(e.asyncFactory.resolved)?D(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,f=e.data;o(f)&&o(d=f.hook)&&o(d=d.prepatch)&&d(t,e);var p=t.children,m=e.children;if(o(f)&&b(e)){for(d=0;d<r.update.length;++d)r.update[d](t,e);o(d=f.hook)&&o(d=d.update)&&d(t,e)}s(e.text)?o(p)&&o(m)?p!==m&&k(h,p,m,n,u):o(m)?(o(t.text)&&l.setTextContent(h,""),I(h,null,m,0,m.length-1,n)):o(p)?C(p,0,p.length-1):o(t.text)&&l.setTextContent(h,""):t.text!==e.text&&l.setTextContent(h,e.text),o(f)&&o(d=f.hook)&&o(d=d.postpatch)&&d(t,e)}}}function x(t,e,n){if(a(n)&&o(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var N=_("attrs,class,staticClass,staticStyle,key");function D(t,e,n,r){var i,s=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,a(e.isComment)&&o(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(o(c)&&(o(i=c.hook)&&o(i=i.init)&&i(e,!0),o(i=e.componentInstance)))return g(e,n),!0;if(o(s)){if(o(u))if(t.hasChildNodes())if(o(i=c)&&o(i=i.domProps)&&o(i=i.innerHTML)){if(i!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,d=0;d<u.length;d++){if(!h||!D(h,u[d],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else w(e,u,n);if(o(c)){var f=!1;for(var p in c)if(!N(p)){f=!0,E(e,n);break}!f&&c["class"]&&mn(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,i){if(!s(e)){var c=!1,u=[];if(s(t))c=!0,p(e,u);else{var d=o(t.nodeType);if(!d&&is(t,e))R(t,e,u,null,null,i);else{if(d){if(1===t.nodeType&&t.hasAttribute(z)&&(t.removeAttribute(z),n=!0),a(n)&&D(t,e,u))return x(e,u,!0),t;t=h(t)}var f=t.elm,m=l.parentNode(f);if(p(e,u,f._leaveCb?null:m,l.nextSibling(f)),o(e.parent)){var g=e.parent,v=b(e);while(g){for(var y=0;y<r.destroy.length;++y)r.destroy[y](g);if(g.elm=e.elm,v){for(var w=0;w<r.create.length;++w)r.create[w](ns,g);var _=g.data.hook.insert;if(_.merged)for(var E=_.fns.slice(1),T=0;T<E.length;T++)E[T]()}else ts(g);g=g.parent}}o(m)?C([t],0,0):o(t.tag)&&S(t)}}return x(e,u,c),e.elm}o(t)&&S(t)}}var cs={create:us,update:us,destroy:function(t){us(t,ns)}};function us(t,e){(t.data.directives||e.data.directives)&&ls(t,e)}function ls(t,e){var n,r,i,s=t===ns,o=e===ns,a=ds(t.data.directives,t.context),c=ds(e.data.directives,e.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,ps(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(ps(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)ps(u[n],"inserted",e,t)};s?re(e,"insert",h):h()}if(l.length&&re(e,"postpatch",(function(){for(var n=0;n<l.length;n++)ps(l[n],"componentUpdated",e,t)})),!s)for(n in a)c[n]||ps(a[n],"unbind",t,t,o)}var hs=Object.create(null);function ds(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++){if(r=t[n],r.modifiers||(r.modifiers=hs),i[fs(r)]=r,e._setupState&&e._setupState.__sfc){var s=r.def||Sr(e,"_setupState","v-"+r.name);r.def="function"===typeof s?{bind:s,update:s}:s}r.def=r.def||Sr(e.$options,"directives",r.name,!0)}return i}function fs(t){return t.rawName||"".concat(t.name,".").concat(Object.keys(t.modifiers||{}).join("."))}function ps(t,e,n,r,i){var s=t.def&&t.def[e];if(s)try{s(n.elm,t,n,r,i)}catch(Zo){Je(Zo,n.context,"directive ".concat(t.name," ").concat(e," hook"))}}var ms=[Zi,cs];function gs(t,e){var n=e.componentOptions;if((!o(n)||!1!==n.Ctor.options.inheritAttrs)&&(!s(t.data.attrs)||!s(e.data.attrs))){var r,i,c,u=e.elm,l=t.data.attrs||{},h=e.data.attrs||{};for(r in(o(h.__ob__)||a(h._v_attr_proxy))&&(h=e.data.attrs=L({},h)),h)i=h[r],c=l[r],c!==i&&vs(u,r,i,e.data.pre);for(r in(nt||it)&&h.value!==l.value&&vs(u,"value",h.value),l)s(h[r])&&(bi(r)?u.removeAttributeNS(_i,Ei(r)):gi(r)||u.removeAttribute(r))}}function vs(t,e,n,r){r||t.tagName.indexOf("-")>-1?ys(t,e,n):wi(e)?Ti(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):gi(e)?t.setAttribute(e,yi(e,n)):bi(e)?Ti(n)?t.removeAttributeNS(_i,Ei(e)):t.setAttributeNS(_i,e,n):ys(t,e,n)}function ys(t,e,n){if(Ti(n))t.removeAttribute(e);else{if(nt&&!rt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var ws={create:gs,update:gs};function _s(t,e){var n=e.elm,r=e.data,i=t.data;if(!(s(r.staticClass)&&s(r.class)&&(s(i)||s(i.staticClass)&&s(i.class)))){var a=Ii(e),c=n._transitionClasses;o(c)&&(a=Ai(a,ki(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var bs,Es={create:_s,update:_s},Ts="__r",Is="__c";function Ss(t){if(o(t[Ts])){var e=nt?"change":"input";t[e]=[].concat(t[Ts],t[e]||[]),delete t[Ts]}o(t[Is])&&(t.change=[].concat(t[Is],t.change||[]),delete t[Is])}function Cs(t,e,n){var r=bs;return function i(){var s=e.apply(null,arguments);null!==s&&Os(t,i,n,r)}}var As=en&&!(at&&Number(at[1])<=53);function ks(t,e,n,r){if(As){var i=qn,s=e;e=s._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return s.apply(this,arguments)}}bs.addEventListener(t,e,ut?{capture:n,passive:r}:n)}function Os(t,e,n,r){(r||bs).removeEventListener(t,e._wrapper||e,n)}function Rs(t,e){if(!s(t.data.on)||!s(e.data.on)){var n=e.data.on||{},r=t.data.on||{};bs=e.elm||t.elm,Ss(n),ne(n,r,ks,Os,Cs,e.context),bs=void 0}}var xs,Ns={create:Rs,update:Rs,destroy:function(t){return Rs(t,ns)}};function Ds(t,e){if(!s(t.data.domProps)||!s(e.data.domProps)){var n,r,i=e.elm,c=t.data.domProps||{},u=e.data.domProps||{};for(n in(o(u.__ob__)||a(u._v_attr_proxy))&&(u=e.data.domProps=L({},u)),c)n in u||(i[n]="");for(n in u){if(r=u[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),r===c[n])continue;1===i.childNodes.length&&i.removeChild(i.childNodes[0])}if("value"===n&&"PROGRESS"!==i.tagName){i._value=r;var l=s(r)?"":String(r);Ps(i,l)&&(i.value=l)}else if("innerHTML"===n&&Di(i.tagName)&&s(i.innerHTML)){xs=xs||document.createElement("div"),xs.innerHTML="<svg>".concat(r,"</svg>");var h=xs.firstChild;while(i.firstChild)i.removeChild(i.firstChild);while(h.firstChild)i.appendChild(h.firstChild)}else if(r!==c[n])try{i[n]=r}catch(Zo){}}}}function Ps(t,e){return!t.composing&&("OPTION"===t.tagName||Ls(t,e)||Ms(t,e))}function Ls(t,e){var n=!0;try{n=document.activeElement!==t}catch(Zo){}return n&&t.value!==e}function Ms(t,e){var n=t.value,r=t._vModifiers;if(o(r)){if(r.number)return w(n)!==w(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var Us={create:Ds,update:Ds},Fs=S((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function js(t){var e=Vs(t.style);return t.staticStyle?L(t.staticStyle,e):e}function Vs(t){return Array.isArray(t)?M(t):"string"===typeof t?Fs(t):t}function $s(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=js(i.data))&&L(r,n)}(n=js(t.data))&&L(r,n);var s=t;while(s=s.parent)s.data&&(n=js(s.data))&&L(r,n);return r}var Bs,qs=/^--/,zs=/\s*!important$/,Hs=function(t,e,n){if(qs.test(e))t.style.setProperty(e,n);else if(zs.test(n))t.style.setProperty(R(e),n.replace(zs,""),"important");else{var r=Ws(e);if(Array.isArray(n))for(var i=0,s=n.length;i<s;i++)t.style[r]=n[i];else t.style[r]=n}},Ks=["Webkit","Moz","ms"],Ws=S((function(t){if(Bs=Bs||document.createElement("div").style,t=A(t),"filter"!==t&&t in Bs)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<Ks.length;n++){var r=Ks[n]+e;if(r in Bs)return r}}));function Gs(t,e){var n=e.data,r=t.data;if(!(s(n.staticStyle)&&s(n.style)&&s(r.staticStyle)&&s(r.style))){var i,a,c=e.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},h=u||l,d=Vs(e.data.style)||{};e.data.normalizedStyle=o(d.__ob__)?L({},d):d;var f=$s(e,!0);for(a in h)s(f[a])&&Hs(c,a,"");for(a in f)i=f[a],Hs(c,a,null==i?"":i)}}var Qs={create:Gs,update:Gs},Js=/\s+/;function Xs(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Js).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" ".concat(t.getAttribute("class")||""," ");n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Ys(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Js).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" ".concat(t.getAttribute("class")||""," "),r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Zs(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&L(e,to(t.name||"v")),L(e,t),e}return"string"===typeof t?to(t):void 0}}var to=S((function(t){return{enterClass:"".concat(t,"-enter"),enterToClass:"".concat(t,"-enter-to"),enterActiveClass:"".concat(t,"-enter-active"),leaveClass:"".concat(t,"-leave"),leaveToClass:"".concat(t,"-leave-to"),leaveActiveClass:"".concat(t,"-leave-active")}})),eo=tt&&!rt,no="transition",ro="animation",io="transition",so="transitionend",oo="animation",ao="animationend";eo&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(io="WebkitTransition",so="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(oo="WebkitAnimation",ao="webkitAnimationEnd"));var co=tt?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function uo(t){co((function(){co(t)}))}function lo(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Xs(t,e))}function ho(t,e){t._transitionClasses&&E(t._transitionClasses,e),Ys(t,e)}function fo(t,e,n){var r=mo(t,e),i=r.type,s=r.timeout,o=r.propCount;if(!i)return n();var a=i===no?so:ao,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=o&&u()};setTimeout((function(){c<o&&u()}),s+1),t.addEventListener(a,l)}var po=/\b(transform|all)(,|$)/;function mo(t,e){var n,r=window.getComputedStyle(t),i=(r[io+"Delay"]||"").split(", "),s=(r[io+"Duration"]||"").split(", "),o=go(i,s),a=(r[oo+"Delay"]||"").split(", "),c=(r[oo+"Duration"]||"").split(", "),u=go(a,c),l=0,h=0;e===no?o>0&&(n=no,l=o,h=s.length):e===ro?u>0&&(n=ro,l=u,h=c.length):(l=Math.max(o,u),n=l>0?o>u?no:ro:null,h=n?n===no?s.length:c.length:0);var d=n===no&&po.test(r[io+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function go(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return vo(e)+vo(t[n])})))}function vo(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function yo(t,e){var n=t.elm;o(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Zs(t.data.transition);if(!s(r)&&!o(n._enterCb)&&1===n.nodeType){var i=r.css,a=r.type,c=r.enterClass,u=r.enterToClass,d=r.enterActiveClass,f=r.appearClass,p=r.appearToClass,m=r.appearActiveClass,g=r.beforeEnter,v=r.enter,y=r.afterEnter,_=r.enterCancelled,b=r.beforeAppear,E=r.appear,T=r.afterAppear,I=r.appearCancelled,S=r.duration,C=Cn,A=Cn.$vnode;while(A&&A.parent)C=A.context,A=A.parent;var k=!C._isMounted||!t.isRootInsert;if(!k||E||""===E){var O=k&&f?f:c,R=k&&m?m:d,x=k&&p?p:u,N=k&&b||g,D=k&&l(E)?E:v,P=k&&T||y,L=k&&I||_,M=w(h(S)?S.enter:S);0;var U=!1!==i&&!rt,F=bo(D),j=n._enterCb=B((function(){U&&(ho(n,x),ho(n,R)),j.cancelled?(U&&ho(n,O),L&&L(n)):P&&P(n),n._enterCb=null}));t.data.show||re(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),D&&D(n,j)})),N&&N(n),U&&(lo(n,O),lo(n,R),uo((function(){ho(n,O),j.cancelled||(lo(n,x),F||(_o(M)?setTimeout(j,M):fo(n,a,j)))}))),t.data.show&&(e&&e(),D&&D(n,j)),U||F||j()}}}function wo(t,e){var n=t.elm;o(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Zs(t.data.transition);if(s(r)||1!==n.nodeType)return e();if(!o(n._leaveCb)){var i=r.css,a=r.type,c=r.leaveClass,u=r.leaveToClass,l=r.leaveActiveClass,d=r.beforeLeave,f=r.leave,p=r.afterLeave,m=r.leaveCancelled,g=r.delayLeave,v=r.duration,y=!1!==i&&!rt,_=bo(f),b=w(h(v)?v.leave:v);0;var E=n._leaveCb=B((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),y&&(ho(n,u),ho(n,l)),E.cancelled?(y&&ho(n,c),m&&m(n)):(e(),p&&p(n)),n._leaveCb=null}));g?g(T):T()}function T(){E.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),y&&(lo(n,c),lo(n,l),uo((function(){ho(n,c),E.cancelled||(lo(n,u),_||(_o(b)?setTimeout(E,b):fo(n,a,E)))}))),f&&f(n,E),y||_||E())}}function _o(t){return"number"===typeof t&&!isNaN(t)}function bo(t){if(s(t))return!1;var e=t.fns;return o(e)?bo(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Eo(t,e){!0!==e.data.show&&yo(e)}var To=tt?{create:Eo,activate:Eo,remove:function(t,e){!0!==t.data.show?wo(t,e):e()}}:{},Io=[ws,Es,Ns,Us,Qs,To],So=Io.concat(ms),Co=as({nodeOps:Yi,modules:So});rt&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&Po(t,"input")}));var Ao={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?re(n,"postpatch",(function(){Ao.componentUpdated(t,e,n)})):ko(t,e,n.context),t._vOptions=[].map.call(t.options,xo)):("textarea"===n.tag||Fi(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",No),t.addEventListener("compositionend",Do),t.addEventListener("change",Do),rt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){ko(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,xo);if(i.some((function(t,e){return!V(t,r[e])}))){var s=t.multiple?e.value.some((function(t){return Ro(t,i)})):e.value!==e.oldValue&&Ro(e.value,i);s&&Po(t,"change")}}}};function ko(t,e,n){Oo(t,e,n),(nt||it)&&setTimeout((function(){Oo(t,e,n)}),0)}function Oo(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var s,o,a=0,c=t.options.length;a<c;a++)if(o=t.options[a],i)s=$(r,xo(o))>-1,o.selected!==s&&(o.selected=s);else if(V(xo(o),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function Ro(t,e){return e.every((function(e){return!V(e,t)}))}function xo(t){return"_value"in t?t._value:t.value}function No(t){t.target.composing=!0}function Do(t){t.target.composing&&(t.target.composing=!1,Po(t.target,"input"))}function Po(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Lo(t){return!t.componentInstance||t.data&&t.data.transition?t:Lo(t.componentInstance._vnode)}var Mo={bind:function(t,e,n){var r=e.value;n=Lo(n);var i=n.data&&n.data.transition,s=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,yo(n,(function(){t.style.display=s}))):t.style.display=r?s:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=Lo(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,r?yo(n,(function(){t.style.display=t.__vOriginalDisplay})):wo(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},Uo={model:Ao,show:Mo},Fo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function jo(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?jo(qe(e.children)):t}function Vo(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var r in i)e[A(r)]=i[r];return e}function $o(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function Bo(t){while(t=t.parent)if(t.data.transition)return!0}function qo(t,e){return e.key===t.key&&e.tag===t.tag}var zo=function(t){return t.tag||Ae(t)},Ho=function(t){return"show"===t.name},Ko={name:"transition",props:Fo,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(zo),n.length)){0;var r=this.mode;0;var i=n[0];if(Bo(this.$vnode))return i;var s=jo(i);if(!s)return i;if(this._leaving)return $o(t,i);var o="__transition-".concat(this._uid,"-");s.key=null==s.key?s.isComment?o+"comment":o+s.tag:u(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var a=(s.data||(s.data={})).transition=Vo(this),c=this._vnode,l=jo(c);if(s.data.directives&&s.data.directives.some(Ho)&&(s.data.show=!0),l&&l.data&&!qo(s,l)&&!Ae(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=L({},a);if("out-in"===r)return this._leaving=!0,re(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),$o(t,i);if("in-out"===r){if(Ae(s))return c;var d,f=function(){d()};re(a,"afterEnter",f),re(a,"enterCancelled",f),re(h,"delayLeave",(function(t){d=t}))}}return i}}},Wo=L({tag:String,moveClass:String},Fo);delete Wo.mode;var Go={props:Wo,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=An(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],s=this.children=[],o=Vo(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(r){var u=[],l=[];for(a=0;a<r.length;a++){c=r[a];c.data.transition=o,c.data.pos=c.elm.getBoundingClientRect(),n[c.key]?u.push(c):l.push(c)}this.kept=t(e,null,u),this.removed=l}return t(e,null,s)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(Qo),t.forEach(Jo),t.forEach(Xo),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;lo(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(so,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(so,t),n._moveCb=null,ho(n,e))})}})))},methods:{hasMove:function(t,e){if(!eo)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Ys(n,t)})),Xs(n,e),n.style.display="none",this.$el.appendChild(n);var r=mo(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function Qo(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Jo(t){t.data.newPos=t.elm.getBoundingClientRect()}function Xo(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var s=t.elm.style;s.transform=s.WebkitTransform="translate(".concat(r,"px,").concat(i,"px)"),s.transitionDuration="0s"}}var Yo={Transition:Ko,TransitionGroup:Go};Yr.config.mustUseProp=mi,Yr.config.isReservedTag=Pi,Yr.config.isReservedAttr=fi,Yr.config.getTagNamespace=Li,Yr.config.isUnknownElement=Ui,L(Yr.options.directives,Uo),L(Yr.options.components,Yo),Yr.prototype.__patch__=tt?Co:U,Yr.prototype.$mount=function(t,e){return t=t&&tt?ji(t):void 0,Rn(this,t,e)},tt&&setTimeout((function(){W.devtools&&dt&&dt.emit("init",Yr)}),0)},6955:function(t,e,n){var r=n(2140),i=n(4901),s=n(2195),o=n(8227),a=o("toStringTag"),c=Object,u="Arguments"===s(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?s(e):"Object"===(r=s(e))&&i(e.callee)?"Arguments":r}},6969:function(t,e,n){var r=n(2777),i=n(757);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},6980:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},7040:function(t,e,n){var r=n(4495);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},7055:function(t,e,n){var r=n(9504),i=n(9039),s=n(2195),o=Object,a=r("".split);t.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"===s(t)?a(t,""):o(t)}:o},7080:function(t,e,n){var r=n(4402).has;t.exports=function(t){return r(t),t}},7347:function(t,e,n){var r=n(3724),i=n(9565),s=n(8773),o=n(6980),a=n(5397),c=n(6969),u=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},7394:function(t,e,n){var r=n(4576),i=n(6706),s=n(2195),o=r.ArrayBuffer,a=r.TypeError;t.exports=o&&i(o.prototype,"byteLength","get")||function(t){if("ArrayBuffer"!==s(t))throw new a("ArrayBuffer expected");return t.byteLength}},7467:function(t,e,n){var r=n(7628),i=n(4644),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},7476:function(t,e,n){var r=n(2195),i=n(9504);t.exports=function(t){if("Function"===r(t))return i(t)}},7566:function(t,e,n){var r=n(6840),i=n(9504),s=n(655),o=n(2812),a=URLSearchParams,c=a.prototype,u=i(c.getAll),l=i(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(c,"has",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return l(this,t);var r=u(this,t);o(e,1);var i=s(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},7588:function(t,e,n){var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{forEach:function(t){o(this),s(t);var e=a(this),n=0;i(e,(function(e){t(e,n++)}),{IS_RECORD:!0})}})},7628:function(t,e,n){var r=n(6198);t.exports=function(t,e){for(var n=r(t),i=new e(n),s=0;s<n;s++)i[s]=t[n-s-1];return i}},7629:function(t,e,n){var r=n(6395),i=n(4576),s=n(9433),o="__core-js_shared__",a=t.exports=i[o]||s(o,{});(a.versions||(a.versions=[])).push({version:"3.41.0",mode:r?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",source:"https://github.com/zloirock/core-js"})},7642:function(t,e,n){var r=n(6518),i=n(3440),s=n(4916),o=!s("difference",(function(t){return 0===t.size}));r({target:"Set",proto:!0,real:!0,forced:o},{difference:i})},7657:function(t,e,n){var r,i,s,o=n(9039),a=n(4901),c=n(34),u=n(2360),l=n(2787),h=n(6840),d=n(8227),f=n(6395),p=d("iterator"),m=!1;[].keys&&(s=[].keys(),"next"in s?(i=l(l(s)),i!==Object.prototype&&(r=i)):m=!0);var g=!c(r)||o((function(){var t={};return r[p].call(t)!==t}));g?r={}:f&&(r=u(r)),a(r[p])||h(r,p,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:m}},7680:function(t,e,n){var r=n(9504);t.exports=r([].slice)},7696:function(t,e,n){var r=n(1291),i=n(8014),s=RangeError;t.exports=function(t){if(void 0===t)return 0;var e=r(t),n=i(e);if(e!==n)throw new s("Wrong length or index");return n}},7740:function(t,e,n){var r=n(9297),i=n(5031),s=n(7347),o=n(4913);t.exports=function(t,e,n){for(var a=i(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},7750:function(t,e,n){var r=n(4117),i=TypeError;t.exports=function(t){if(r(t))throw new i("Can't call method on "+t);return t}},7751:function(t,e,n){var r=n(4576),i=n(4901),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},7811:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7936:function(t,e,n){var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return i(this,arguments.length?arguments[0]:void 0,!1)}})},8004:function(t,e,n){var r=n(6518),i=n(9039),s=n(8750),o=n(4916),a=!o("intersection",(function(t){return 2===t.size&&t.has(1)&&t.has(2)}))||i((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));r({target:"Set",proto:!0,real:!0,forced:a},{intersection:s})},8014:function(t,e,n){var r=n(1291),i=Math.min;t.exports=function(t){var e=r(t);return e>0?i(e,9007199254740991):0}},8100:function(t,e,n){var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transfer:function(){return i(this,arguments.length?arguments[0]:void 0,!0)}})},8111:function(t,e,n){var r=n(6518),i=n(4576),s=n(679),o=n(8551),a=n(4901),c=n(2787),u=n(2106),l=n(4659),h=n(9039),d=n(9297),f=n(8227),p=n(7657).IteratorPrototype,m=n(3724),g=n(6395),v="constructor",y="Iterator",w=f("toStringTag"),_=TypeError,b=i[y],E=g||!a(b)||b.prototype!==p||!h((function(){b({})})),T=function(){if(s(this,p),c(this)===p)throw new _("Abstract class Iterator not directly constructable")},I=function(t,e){m?u(p,t,{configurable:!0,get:function(){return e},set:function(e){if(o(this),this===p)throw new _("You can't redefine this property");d(this,t)?this[t]=e:l(this,t,e)}}):p[t]=e};d(p,w)||I(w,y),!E&&d(p,v)&&p[v]!==Object||I(v,T),T.prototype=p,r({global:!0,constructor:!0,forced:E},{Iterator:T})},8227:function(t,e,n){var r=n(4576),i=n(5745),s=n(9297),o=n(3392),a=n(4495),c=n(7040),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;t.exports=function(t){return s(l,t)||(l[t]=a&&s(u,t)?u[t]:h("Symbol."+t)),l[t]}},8237:function(t,e,n){var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767),c=TypeError;r({target:"Iterator",proto:!0,real:!0},{reduce:function(t){o(this),s(t);var e=a(this),n=arguments.length<2,r=n?void 0:arguments[1],u=0;if(i(e,(function(e){n?(n=!1,r=e):r=t(r,e,u),u++}),{IS_RECORD:!0}),n)throw new c("Reduce of empty iterator with no initial value");return r}})},8469:function(t,e,n){var r=n(9504),i=n(507),s=n(4402),o=s.Set,a=s.proto,c=r(a.forEach),u=r(a.keys),l=u(new o).next;t.exports=function(t,e,n){return n?i({iterator:u(t),next:l},e):c(t,e)}},8480:function(t,e,n){var r=n(1828),i=n(8727),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},8506:function(t,e,n){n.d(e,{cY:function(){return _},FA:function(){return P},g:function(){return D},u:function(){return l},Uj:function(){return u},Fy:function(){return b},tD:function(){return q},bD:function(){return F},hp:function(){return B},T9:function(){return y},Tj:function(){return g},yU:function(){return v},XA:function(){return w},Ku:function(){return W},ZQ:function(){return E},sr:function(){return C},c1:function(){return S},Im:function(){return U},lT:function(){return k},zW:function(){return R},jZ:function(){return T},lV:function(){return A},nr:function(){return O},Am:function(){return V},I9:function(){return $},eX:function(){return x}});n(4114),n(8111),n(7588),n(4979);const r=()=>{},i=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},s=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const c=i<t.length,u=c?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==u||null==h)throw new a;const d=e<<2|o>>4;if(r.push(d),64!==u){const t=o<<4&240|u>>2;if(r.push(t),64!==h){const t=u<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c=function(t){const e=i(t);return o.encodeByteArray(e,!0)},u=function(t){return c(t).replace(/\./g,"")},l=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=()=>h().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},p=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&l(t[1]);return e&&JSON.parse(e)},m=()=>{try{return r()||d()||f()||p()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},g=t=>{var e,n;return null===(n=null===(e=m())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},v=t=>{const e=g(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},y=()=>{var t;return null===(t=m())||void 0===t?void 0:t.config},w=t=>{var e;return null===(e=m())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[u(JSON.stringify(n)),u(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function T(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(E())}function I(){var t;const e=null===(t=m())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function S(){return"undefined"!==typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function C(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function A(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function k(){const t=E();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function O(){return!I()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function R(){try{return"object"===typeof indexedDB}catch(t){return!1}}function x(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const N="FirebaseError";class D extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=N,Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,P.prototype.create)}}class P{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?L(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new D(r,o,n);return a}}function L(t,e){return t.replace(M,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const M=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function F(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(j(n)&&j(s)){if(!F(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function j(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function B(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t,e){const n=new z(t,e);return n.subscribe.bind(n)}class z{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=H(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=K),void 0===r.error&&(r.error=K),void 0===r.complete&&(r.complete=K);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function H(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function K(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(t){return t&&t._delegate?t._delegate:t}},8527:function(t,e,n){var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(507),c=n(9539);t.exports=function(t){var e=r(this),n=o(t);if(s(e)<n.size)return!1;var u=n.getIterator();return!1!==a(u,(function(t){if(!i(e,t))return c(u,"normal",!1)}))}},8551:function(t,e,n){var r=n(34),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw new s(i(t)+" is not an object")}},8574:function(t,e,n){var r=n(9504),i=Error,s=r("".replace),o=function(t){return String(new i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=s(t,a,"");return t}},8622:function(t,e,n){var r=n(4576),i=n(4901),s=r.WeakMap;t.exports=i(s)&&/native code/.test(String(s))},8686:function(t,e,n){var r=n(3724),i=n(9039);t.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8721:function(t,e,n){var r=n(3724),i=n(9504),s=n(2106),o=URLSearchParams.prototype,a=i(o.forEach);r&&!("size"in o)&&s(o,"size",{get:function(){var t=0;return a(this,(function(){t++})),t},configurable:!0,enumerable:!0})},8727:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},8745:function(t,e,n){var r=n(616),i=Function.prototype,s=i.apply,o=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},8750:function(t,e,n){var r=n(7080),i=n(4402),s=n(5170),o=n(3789),a=n(8469),c=n(507),u=i.Set,l=i.add,h=i.has;t.exports=function(t){var e=r(this),n=o(t),i=new u;return s(e)>n.size?c(n.getIterator(),(function(t){h(e,t)&&l(i,t)})):a(e,(function(t){n.includes(t)&&l(i,t)})),i}},8773:function(t,e){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},8981:function(t,e,n){var r=n(7750),i=Object;t.exports=function(t){return i(r(t))}},9039:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},9225:function(t,e,n){var r,i,s,o,a=n(4576),c=n(8745),u=n(6080),l=n(4901),h=n(9297),d=n(9039),f=n(397),p=n(7680),m=n(4055),g=n(2812),v=n(9544),y=n(6193),w=a.setImmediate,_=a.clearImmediate,b=a.process,E=a.Dispatch,T=a.Function,I=a.MessageChannel,S=a.String,C=0,A={},k="onreadystatechange";d((function(){r=a.location}));var O=function(t){if(h(A,t)){var e=A[t];delete A[t],e()}},R=function(t){return function(){O(t)}},x=function(t){O(t.data)},N=function(t){a.postMessage(S(t),r.protocol+"//"+r.host)};w&&_||(w=function(t){g(arguments.length,1);var e=l(t)?t:T(t),n=p(arguments,1);return A[++C]=function(){c(e,void 0,n)},i(C),C},_=function(t){delete A[t]},y?i=function(t){b.nextTick(R(t))}:E&&E.now?i=function(t){E.now(R(t))}:I&&!v?(s=new I,o=s.port2,s.port1.onmessage=x,i=u(o.postMessage,o)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(N)?(i=N,a.addEventListener("message",x,!1)):i=k in m("script")?function(t){f.appendChild(m("script"))[k]=function(){f.removeChild(this),O(t)}}:function(t){setTimeout(R(t),0)}),t.exports={set:w,clear:_}},9286:function(t,e,n){var r=n(4402),i=n(8469),s=r.Set,o=r.add;t.exports=function(t){var e=new s;return i(t,(function(t){o(e,t)})),e}},9297:function(t,e,n){var r=n(9504),i=n(8981),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},9306:function(t,e,n){var r=n(4901),i=n(6823),s=TypeError;t.exports=function(t){if(r(t))return t;throw new s(i(t)+" is not a function")}},9309:function(t,e,n){var r=n(6518),i=n(4576),s=n(9225).set,o=n(9472),a=i.setImmediate?o(s,!1):s;r({global:!0,bind:!0,enumerable:!0,forced:i.setImmediate!==a},{setImmediate:a})},9429:function(t,e,n){var r=n(4576),i=n(6193);t.exports=function(t){if(i){try{return r.process.getBuiltinModule(t)}catch(e){}try{return Function('return require("'+t+'")')()}catch(e){}}}},9433:function(t,e,n){var r=n(4576),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9462:function(t,e,n){var r=n(9565),i=n(2360),s=n(6699),o=n(6279),a=n(8227),c=n(1181),u=n(5966),l=n(7657).IteratorPrototype,h=n(2529),d=n(9539),f=a("toStringTag"),p="IteratorHelper",m="WrapForValidIterator",g=c.set,v=function(t){var e=c.getterFor(t?m:p);return o(i(l),{next:function(){var n=e(this);if(t)return n.nextHandler();if(n.done)return h(void 0,!0);try{var r=n.nextHandler();return n.returnHandlerResult?r:h(r,n.done)}catch(i){throw n.done=!0,i}},return:function(){var n=e(this),i=n.iterator;if(n.done=!0,t){var s=u(i,"return");return s?r(s,i):h(void 0,!0)}if(n.inner)try{d(n.inner.iterator,"normal")}catch(o){return d(i,"throw",o)}return i&&d(i,"normal"),h(void 0,!0)}})},y=v(!0),w=v(!1);s(w,f,"Iterator Helper"),t.exports=function(t,e,n){var r=function(r,i){i?(i.iterator=r.iterator,i.next=r.next):i=r,i.type=e?m:p,i.returnHandlerResult=!!n,i.nextHandler=t,i.counter=0,i.done=!1,g(this,i)};return r.prototype=e?y:w,r}},9472:function(t,e,n){var r=n(4576),i=n(8745),s=n(4901),o=n(4215),a=n(2839),c=n(7680),u=n(2812),l=r.Function,h=/MSIE .\./.test(a)||"BUN"===o&&function(){var t=r.Bun.version.split(".");return t.length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2])}();t.exports=function(t,e){var n=e?2:1;return h?function(r,o){var a=u(arguments.length,1)>n,h=s(r)?r:l(r),d=a?c(arguments,n):[],f=a?function(){i(h,this,d)}:h;return e?t(f,o):t(f)}:t}},9504:function(t,e,n){var r=n(616),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);t.exports=r?o:function(t){return function(){return s.apply(t,arguments)}}},9519:function(t,e,n){var r,i,s=n(4576),o=n(2839),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},9539:function(t,e,n){var r=n(9565),i=n(8551),s=n(5966);t.exports=function(t,e,n){var o,a;i(t);try{if(o=s(t,"return"),!o){if("throw"===e)throw n;return n}o=r(o,t)}catch(c){a=!0,o=c}if("throw"===e)throw n;if(a)throw o;return i(o),n}},9544:function(t,e,n){var r=n(2839);t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},9565:function(t,e,n){var r=n(616),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},9577:function(t,e,n){var r=n(9928),i=n(4644),s=n(1108),o=n(1291),a=n(5854),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}();l("with",{with:function(t,e){var n=c(this),i=o(t),l=s(n)?a(e):+e;return r(n,u(n),i,l)}}["with"],!h)},9617:function(t,e,n){var r=n(5397),i=n(5610),s=n(6198),o=function(t){return function(e,n,o){var a=r(e),c=s(a);if(0===c)return!t&&-1;var u,l=i(o,c);if(t&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},9848:function(t,e,n){n(6368),n(9309)},9928:function(t,e,n){var r=n(6198),i=n(1291),s=RangeError;t.exports=function(t,e,n,o){var a=r(t),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw new s("Incorrect index");for(var l=new e(a),h=0;h<a;h++)l[h]=h===u?o:t[h];return l}},9951:function(t,e,n){n.d(e,{$b:function(){return i},Vy:function(){return u}});n(4114),n(8111),n(2489),n(1701);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}}}]);
//# sourceMappingURL=chunk-vendors.5f8f4754.js.map