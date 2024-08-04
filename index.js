// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,u=n-r.length;return u<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(u):e(u)+r,i&&(r="-"+r)),r}var u=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function o(r){var n,e,o;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,o=parseInt(e,10),!isFinite(o)){if(!t(e))throw new Error("invalid integer. Value: "+e);o=0}return o<0&&("u"===r.specifier||10!==n)&&(o=4294967295+o+1),o<0?(e=(-o).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=o.toString(n),o||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):u.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,y=/^(\d+)e/,v=/\.0$/,d=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=l.call(e,b,"$1e"),e=l.call(e,d,"e"),e=l.call(e,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=l.call(e,p,"e+0$1"),e=l.call(e,h,"e-0$1"),r.alternate&&(e=l.call(e,g,"$1."),e=l.call(e,y,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):c.call(e)}function w(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}var N=String.fromCharCode,A=Array.isArray;function E(r){return r!=r}function _(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function x(r){var n,t,e,u,a,f,c,s,l,p,h,g,y;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(e=r[s]))f+=e;else{if(n=void 0!==e.precision,!(e=_(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),t=e.flags,l=0;l<t.length;l++)switch(u=t.charAt(l)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+u)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,E(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=o(e);break;case"s":e.maxWidth=n?e.precision:-1,e.arg=String(e.arg);break;case"c":if(!E(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(a)?String(e.arg):N(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(p=e.arg,h=e.width,g=e.padRight,y=void 0,(y=h-p.length)<0?p:p=g?p+w(y):w(y)+p)),f+=e.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function U(r){var n,t,e,i;for(t=[],i=0,e=S.exec(r);e;)(n=r.slice(i,S.lastIndex-e[0].length)).length&&t.push(n),t.push(T(e)),i=S.lastIndex,e=S.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function k(r){var n,t;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[U(r)],t=1;t<arguments.length;t++)n.push(arguments[t]);return x.apply(null,n)}var V=Object.prototype,I=V.toString,j=V.__defineGetter__,F=V.__defineSetter__,M=V.__lookupGetter__,O=V.__lookupSetter__,R=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,u,a;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(M.call(r,n)||O.call(r,n)?(e=r.__proto__,r.__proto__=V,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),u="get"in t,a="set"in t,i&&(u||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&j&&j.call(r,n,t.get),a&&F&&F.call(r,n,t.set),r};function $(r,n,t){R(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function G(r,n,t){R(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function P(r){return r!=r}var H=Math.floor;function W(r){return H(r)===r}function q(r){return W(r/2)}function C(r){return q(r>0?r-1:r+1)}var L=Number.POSITIVE_INFINITY,Z=Number,X=Z.NEGATIVE_INFINITY;function Y(r){return r===L||r===X}var z=Math.sqrt;function B(r){return Math.abs(r)}var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return D&&"symbol"==typeof Symbol.toStringTag}var K,Q=Object.prototype.toString,rr=Object.prototype.hasOwnProperty,nr="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof nr?nr.toStringTag:"",er=J()?function(r){var n,t,e,i,u;if(null==r)return Q.call(r);t=r[tr],u=tr,n=null!=(i=r)&&rr.call(i,u);try{r[tr]=void 0}catch(n){return Q.call(r)}return e=Q.call(r),n?r[tr]=t:delete r[tr],e}:function(r){return Q.call(r)},ir="function"==typeof Uint32Array,ur="function"==typeof Uint32Array?Uint32Array:null,ar="function"==typeof Uint32Array?Uint32Array:void 0;K=function(){var r,n,t;if("function"!=typeof ur)return!1;try{n=new ur(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(ir&&t instanceof Uint32Array||"[object Uint32Array]"===er(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or,fr=K,cr="function"==typeof Float64Array,sr="function"==typeof Float64Array?Float64Array:null,lr="function"==typeof Float64Array?Float64Array:void 0;or=function(){var r,n,t;if("function"!=typeof sr)return!1;try{n=new sr([1,3.14,-3.14,NaN]),t=n,r=(cr&&t instanceof Float64Array||"[object Float64Array]"===er(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr,hr=or,gr="function"==typeof Uint8Array,yr="function"==typeof Uint8Array?Uint8Array:null,vr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,n,t;if("function"!=typeof yr)return!1;try{n=new yr(n=[1,3.14,-3.14,256,257]),t=n,r=(gr&&t instanceof Uint8Array||"[object Uint8Array]"===er(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var dr,br=pr,mr="function"==typeof Uint16Array,wr="function"==typeof Uint16Array?Uint16Array:null,Nr="function"==typeof Uint16Array?Uint16Array:void 0;dr=function(){var r,n,t;if("function"!=typeof wr)return!1;try{n=new wr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(mr&&t instanceof Uint16Array||"[object Uint16Array]"===er(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Ar,Er={uint16:dr,uint8:br};(Ar=new Er.uint16(1))[0]=4660;var _r,xr,Sr=52===new Er.uint8(Ar.buffer)[0];!0===Sr?(_r=1,xr=0):(_r=0,xr=1);var Tr={HIGH:_r,LOW:xr},Ur=new hr(1),kr=new fr(Ur.buffer),Vr=Tr.HIGH,Ir=Tr.LOW;function jr(r,n,t,e){return Ur[0]=r,n[e]=kr[Vr],n[e+t]=kr[Ir],n}function Fr(r){return jr(r,[0,0],1,0)}G(Fr,"assign",jr);var Mr=!0===Sr?0:1,Or=new hr(1),Rr=new fr(Or.buffer);function $r(r,n){return Or[0]=r,Rr[Mr]=n>>>0,Or[0]}function Gr(r){return 0|r}var Pr,Hr,Wr=2147483647,qr=2147483648,Cr=!0===Sr?1:0,Lr=new hr(1),Zr=new fr(Lr.buffer);function Xr(r){return Lr[0]=r,Zr[Cr]}!0===Sr?(Pr=1,Hr=0):(Pr=0,Hr=1);var Yr={HIGH:Pr,LOW:Hr},zr=new hr(1),Br=new fr(zr.buffer),Dr=Yr.HIGH,Jr=Yr.LOW;function Kr(r,n){return Br[Dr]=r,Br[Jr]=n,zr[0]}var Qr=[0,0];function rn(r,n){var t,e;return Fr.assign(r,Qr,1,0),t=Qr[0],t&=Wr,e=Xr(n),Kr(t|=e&=qr,Qr[1])}var nn=1072693247,tn=1e300,en=1e-300,un=!0===Sr?1:0,an=new hr(1),on=new fr(an.buffer);function fn(r,n){return an[0]=r,on[un]=n>>>0,an[0]}var cn=1023,sn=1048575,ln=1048576,pn=1072693248,hn=536870912,gn=524288,yn=20,vn=9007199254740992,dn=.9617966939259756,bn=.9617967009544373,mn=-7.028461650952758e-9,wn=[1,1.5],Nn=[0,.5849624872207642],An=[0,1.350039202129749e-8],En=1.4426950408889634,_n=1.4426950216293335,xn=1.9259629911266175e-8,Sn=1023,Tn=-1023,Un=-1074,kn=22250738585072014e-324,Vn=4503599627370496;function In(r,n,t,e){return P(r)||Y(r)?(n[e]=r,n[e+t]=0,n):0!==r&&B(r)<kn?(n[e]=r*Vn,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}G((function(r){return In(r,[0,0],1,0)}),"assign",In);var jn=2146435072,Fn=2220446049250313e-31,Mn=2148532223,On=[0,0],Rn=[0,0];function $n(r,n){var t,e;return 0===n||0===r||P(r)||Y(r)?r:(In(r,On,1,0),r=On[0],n+=On[1],n+=function(r){var n=Xr(r);return(n=(n&jn)>>>20)-cn|0}(r),n<Un?rn(0,r):n>Sn?r<0?X:L:(n<=Tn?(n+=52,e=Fn):e=1,Fr.assign(r,Rn,1,0),t=Rn[0],t&=Mn,e*Kr(t|=n+cn<<20,Rn[1])))}var Gn=.6931471805599453,Pn=1048575,Hn=1048576,Wn=1071644672,qn=20,Cn=.6931471824645996,Ln=-1.904654299957768e-9,Zn=1072693247,Xn=1105199104,Yn=1139802112,zn=1083179008,Bn=1072693248,Dn=1083231232,Jn=3230714880,Kn=31,Qn=1e300,rt=1e-300,nt=8008566259537294e-32,tt=[0,0],et=[0,0];function it(r,n){var t,e,i,u,a,o,f,c,s,l,p,h,g,y;if(P(r)||P(n))return NaN;if(Fr.assign(n,tt,1,0),a=tt[0],0===tt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return z(r);if(-.5===n)return 1/z(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Y(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:B(r)<1==(n===L)?0:L}(r,n)}if(Fr.assign(r,tt,1,0),u=tt[0],0===tt[1]){if(0===u)return function(r,n){return n===X?L:n===L?0:n>0?C(n)?r:0:C(n)?rn(L,r):L}(r,n);if(1===r)return 1;if(-1===r&&C(n))return-1;if(Y(r))return r===X?it(-0,-n):n<0?0:L}if(r<0&&!1===W(n))return(r-r)/(r-r);if(i=B(r),t=u&Wr|0,e=a&Wr|0,f=a>>>Kn|0,o=(o=u>>>Kn|0)&&C(n)?-1:1,e>Xn){if(e>Yn)return function(r,n){return(Xr(r)&Wr)<=nn?n<0?tn*tn:en*en:n>0?tn*tn:en*en}(r,n);if(t<Zn)return 1===f?o*Qn*Qn:o*rt*rt;if(t>Bn)return 0===f?o*Qn*Qn:o*rt*rt;p=function(r,n){var t,e,i,u,a,o,f;return u=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(o=i*xn-u*En)-((e=$r(e=(a=_n*i)+o,0))-a),r[0]=e,r[1]=t,r}(et,i)}else p=function(r,n,t){var e,i,u,a,o,f,c,s,l,p,h,g,y,v,d,b,m,w,N,A,E;return w=0,t<ln&&(w-=53,t=Xr(n*=vn)),w+=(t>>yn)-cn|0,t=(N=t&sn|0)|pn|0,N<=235662?A=0:N<767610?A=1:(A=0,w+=1,t-=ln),a=$r(i=(b=(n=fn(n,t))-(c=wn[A]))*(m=1/(n+c)),0),e=(t>>1|hn)+gn,f=fn(0,e+=A<<18),d=(u=i*i)*u*(0===(E=u)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=$r(f=3+(u=a*a)+(d+=(o=m*(b-a*f-a*(n-(f-c))))*(a+i)),0),l=$r(l=(b=a*f)+(m=o*f+(d-(f-3-u))*i),0),p=bn*l,y=(h=mn*l+(m-(l-b))*dn+An[A])-((g=$r(g=p+h+(s=Nn[A])+(v=w),0))-v-s-p),r[0]=g,r[1]=y,r}(et,i,t);if(h=(l=(n-(c=$r(n,0)))*p[0]+n*p[1])+(s=c*p[0]),Fr.assign(h,tt,1,0),g=Gr(tt[0]),y=Gr(tt[1]),g>=zn){if(0!=(g-zn|y))return o*Qn*Qn;if(l+nt>h-s)return o*Qn*Qn}else if((g&Wr)>=Dn){if(0!=(g-Jn|y))return o*rt*rt;if(l<=h-s)return o*rt*rt}return h=function(r,n,t){var e,i,u,a,o,f,c,s,l,p;return l=((s=r&Wr|0)>>qn)-cn|0,c=0,s>Wn&&(i=fn(0,((c=r+(Hn>>l+1)>>>0)&~(Pn>>(l=((c&Wr)>>qn)-cn|0)))>>>0),c=(c&Pn|Hn)>>qn-l>>>0,r<0&&(c=-c),n-=i),r=Gr(r=Xr(f=1-((f=(u=(i=$r(i=t+n,0))*Cn)+(a=(t-(i-n))*Gn+i*Ln))*(e=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=a-(f-u))+f*o)-f))),(r+=c<<qn>>>0)>>qn<=0?$n(f,c):fn(f,r)}(g,s,l),o*h}function ut(r,n,t,e){var i,u;return P(r)||P(n)||P(t)||P(e)||n>e||e>t?NaN:r<=n?0:(i=(t-n)*(e-n),u=(t-n)*(t-e),r<=e?it(r-n,2)/i:r<t?1-it(t-r,2)/u:1)}function at(r){return function(){return r}}function ot(r,n,t){R(r,n,{configurable:!1,enumerable:!1,get:t})}function ft(r){return"number"==typeof r}G(ut,"factory",(function(r,n,t){var e,i;return P(r)||P(n)||P(t)?at(NaN):r<=t&&t<=n?(e=(n-r)*(t-r),i=(n-r)*(n-t),function(u){return P(u)?NaN:u<=r?0:u<=t?it(u-r,2)/e:u<n?1-it(n-u,2)/i:1}):at(NaN)}));var ct=Z.prototype.toString,st=J();function lt(r){return"object"==typeof r&&(r instanceof Z||(st?function(r){try{return ct.call(r),!0}catch(r){return!1}}(r):"[object Number]"===er(r)))}function pt(r){return ft(r)||lt(r)}G(pt,"isPrimitive",ft),G(pt,"isObject",lt);var ht=.6931471803691238,gt=1.9082149292705877e-10,yt=0x40000000000000,vt=.3333333333333333,dt=1048575,bt=2146435072,mt=1048576,wt=1072693248;function Nt(r){var n,t,e,i,u,a,o,f,c,s,l,p;return 0===r?X:P(r)||r<0?NaN:(u=0,(t=Xr(r))<mt&&(u-=54,t=Xr(r*=yt)),t>=bt?r+r:(u+=(t>>20)-cn|0,u+=(f=614244+(t&=dt)&1048576|0)>>20|0,o=(r=fn(r,t|f^wt))-1,(dt&2+t)<3?0===o?0===u?0:u*ht+u*gt:(a=o*o*(.5-vt*o),0===u?o-a:u*ht-(a-u*gt-o)):(f=t-398458|0,c=440401-t|0,i=(l=(p=(s=o/(2+o))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),a=e+i,(f|=c)>0?(n=.5*o*o,0===u?o-(n-s*(n+a)):u*ht-(n-(s*(n+a)+u*gt)-o)):0===u?o-s*(o-a):u*ht-(s*(o-a)-u*gt-o))))}function At(r,n,t){return P(r)||P(n)||P(t)||!(r<=t&&t<=n)?NaN:.5+Nt(.5*(n-r))}function Et(r,n,t){return P(r)||P(n)||P(t)||!(r<=t&&t<=n)?NaN:-.6}function _t(r,n,t){return P(r)||P(n)||P(t)||!(r<=t&&t<=n)?NaN:(r+n+t)/3}function xt(r,n,t){return P(r)||P(n)||P(t)||!(r<=t&&t<=n)?NaN:t>=(r+n)/2?r+z(.5*(n-r)*(t-r)):n-z(.5*(n-r)*(n-t))}function St(r,n,t){return P(r)||P(n)||P(t)||!(r<=t&&t<=n)?NaN:t}function Tt(r){return q(r>0?r-1:r+1)}var Ut=1072693247,kt=1e300,Vt=1e-300,It=1048575,jt=1048576,Ft=1072693248,Mt=536870912,Ot=524288,Rt=20,$t=9007199254740992,Gt=.9617966939259756,Pt=.9617967009544373,Ht=-7.028461650952758e-9,Wt=[1,1.5],qt=[0,.5849624872207642],Ct=[0,1.350039202129749e-8],Lt=1.4426950408889634,Zt=1.4426950216293335,Xt=1.9259629911266175e-8,Yt=1048576,zt=1071644672,Bt=20,Dt=.6931471824645996,Jt=-1.904654299957768e-9,Kt=1072693247,Qt=1105199104,re=1139802112,ne=1083179008,te=1072693248,ee=1083231232,ie=3230714880,ue=31,ae=1e300,oe=1e-300,fe=8008566259537294e-32,ce=[0,0],se=[0,0];function le(r,n){var t,e,i,u,a,o,f,c,s,l,p,h,g,y;if(P(r)||P(n))return NaN;if(Fr.assign(n,ce,1,0),a=ce[0],0===ce[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return z(r);if(-.5===n)return 1/z(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Y(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:B(r)<1==(n===L)?0:L}(r,n)}if(Fr.assign(r,ce,1,0),u=ce[0],0===ce[1]){if(0===u)return function(r,n){return n===X?L:n===L?0:n>0?Tt(n)?r:0:Tt(n)?rn(L,r):L}(r,n);if(1===r)return 1;if(-1===r&&Tt(n))return-1;if(Y(r))return r===X?le(-0,-n):n<0?0:L}if(r<0&&!1===W(n))return(r-r)/(r-r);if(i=B(r),t=u&Wr|0,e=a&Wr|0,f=a>>>ue|0,o=(o=u>>>ue|0)&&Tt(n)?-1:1,e>Qt){if(e>re)return function(r,n){return(Xr(r)&Wr)<=Ut?n<0?kt*kt:Vt*Vt:n>0?kt*kt:Vt*Vt}(r,n);if(t<Kt)return 1===f?o*ae*ae:o*oe*oe;if(t>te)return 0===f?o*ae*ae:o*oe*oe;p=function(r,n){var t,e,i,u,a,o,f;return u=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(o=i*Xt-u*Lt)-((e=$r(e=(a=Zt*i)+o,0))-a),r[0]=e,r[1]=t,r}(se,i)}else p=function(r,n,t){var e,i,u,a,o,f,c,s,l,p,h,g,y,v,d,b,m,w,N,A,E;return w=0,t<jt&&(w-=53,t=Xr(n*=$t)),w+=(t>>Rt)-cn|0,t=(N=t&It|0)|Ft|0,N<=235662?A=0:N<767610?A=1:(A=0,w+=1,t-=jt),a=$r(i=(b=(n=fn(n,t))-(c=Wt[A]))*(m=1/(n+c)),0),e=(t>>1|Mt)+Ot,f=fn(0,e+=A<<18),d=(u=i*i)*u*(0===(E=u)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=$r(f=3+(u=a*a)+(d+=(o=m*(b-a*f-a*(n-(f-c))))*(a+i)),0),l=$r(l=(b=a*f)+(m=o*f+(d-(f-3-u))*i),0),p=Pt*l,y=(h=Ht*l+(m-(l-b))*Gt+Ct[A])-((g=$r(g=p+h+(s=qt[A])+(v=w),0))-v-s-p),r[0]=g,r[1]=y,r}(se,i,t);if(h=(l=(n-(c=$r(n,0)))*p[0]+n*p[1])+(s=c*p[0]),Fr.assign(h,ce,1,0),g=Gr(ce[0]),y=Gr(ce[1]),g>=ne){if(0!=(g-ne|y))return o*ae*ae;if(l+fe>h-s)return o*ae*ae}else if((g&Wr)>=ee){if(0!=(g-ie|y))return o*oe*oe;if(l<=h-s)return o*oe*oe}return h=function(r,n,t){var e,i,u,a,o,f,c,s,l,p;return l=((s=r&Wr|0)>>Bt)-cn|0,c=0,s>zt&&(i=fn(0,((c=r+(Yt>>l+1)>>>0)&~(Pn>>(l=((c&Wr)>>Bt)-cn|0)))>>>0),c=(c&Pn|Yt)>>Bt-l>>>0,r<0&&(c=-c),n-=i),r=Gr(r=Xr(f=1-((f=(u=(i=$r(i=t+n,0))*Dt)+(a=(t-(i-n))*Gn+i*Jt))*(e=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=a-(f-u))+f*o)-f))),(r+=c<<Bt>>>0)>>Bt<=0?$n(f,c):fn(f,r)}(g,s,l),o*h}function pe(r,n,t){var e;return P(r)||P(n)||P(t)||!(r<=t&&t<=n)?NaN:(e=1.4142135623730951*(r+n-2*t)*(2*r-n-t)*(r-2*n+t),e/=5*le(r*r+n*n+t*t-r*n-r*t-n*t,1.5))}function he(r,n,t){return P(r)||P(n)||P(t)||!(r<=t&&t<=n)?NaN:z((r*r+n*n+t*t-r*n-r*t-n*t)/18)}function ge(r,n,t){return P(r)||P(n)||P(t)||!(r<=t&&t<=n)?NaN:(r*r+n*n+t*t-r*n-r*t-n*t)/18}function ye(r){return q(r>0?r-1:r+1)}var ve=1072693247,de=1e300,be=1e-300,me=1048575,we=1048576,Ne=1072693248,Ae=536870912,Ee=524288,_e=20,xe=9007199254740992,Se=.9617966939259756,Te=.9617967009544373,Ue=-7.028461650952758e-9,ke=[1,1.5],Ve=[0,.5849624872207642],Ie=[0,1.350039202129749e-8],je=1.4426950408889634,Fe=1.4426950216293335,Me=1.9259629911266175e-8,Oe=1048576,Re=1071644672,$e=20,Ge=.6931471824645996,Pe=-1.904654299957768e-9,He=1072693247,We=1105199104,qe=1139802112,Ce=1083179008,Le=1072693248,Ze=1083231232,Xe=3230714880,Ye=31,ze=1e300,Be=1e-300,De=8008566259537294e-32,Je=[0,0],Ke=[0,0];function Qe(r,n){var t,e,i,u,a,o,f,c,s,l,p,h,g,y;if(P(r)||P(n))return NaN;if(Fr.assign(n,Je,1,0),a=Je[0],0===Je[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return z(r);if(-.5===n)return 1/z(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Y(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:B(r)<1==(n===L)?0:L}(r,n)}if(Fr.assign(r,Je,1,0),u=Je[0],0===Je[1]){if(0===u)return function(r,n){return n===X?L:n===L?0:n>0?ye(n)?r:0:ye(n)?rn(L,r):L}(r,n);if(1===r)return 1;if(-1===r&&ye(n))return-1;if(Y(r))return r===X?Qe(-0,-n):n<0?0:L}if(r<0&&!1===W(n))return(r-r)/(r-r);if(i=B(r),t=u&Wr|0,e=a&Wr|0,f=a>>>Ye|0,o=(o=u>>>Ye|0)&&ye(n)?-1:1,e>We){if(e>qe)return function(r,n){return(Xr(r)&Wr)<=ve?n<0?de*de:be*be:n>0?de*de:be*be}(r,n);if(t<He)return 1===f?o*ze*ze:o*Be*Be;if(t>Le)return 0===f?o*ze*ze:o*Be*Be;p=function(r,n){var t,e,i,u,a,o,f;return u=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(o=i*Me-u*je)-((e=$r(e=(a=Fe*i)+o,0))-a),r[0]=e,r[1]=t,r}(Ke,i)}else p=function(r,n,t){var e,i,u,a,o,f,c,s,l,p,h,g,y,v,d,b,m,w,N,A,E;return w=0,t<we&&(w-=53,t=Xr(n*=xe)),w+=(t>>_e)-cn|0,t=(N=t&me|0)|Ne|0,N<=235662?A=0:N<767610?A=1:(A=0,w+=1,t-=we),a=$r(i=(b=(n=fn(n,t))-(c=ke[A]))*(m=1/(n+c)),0),e=(t>>1|Ae)+Ee,f=fn(0,e+=A<<18),d=(u=i*i)*u*(0===(E=u)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=$r(f=3+(u=a*a)+(d+=(o=m*(b-a*f-a*(n-(f-c))))*(a+i)),0),l=$r(l=(b=a*f)+(m=o*f+(d-(f-3-u))*i),0),p=Te*l,y=(h=Ue*l+(m-(l-b))*Se+Ie[A])-((g=$r(g=p+h+(s=Ve[A])+(v=w),0))-v-s-p),r[0]=g,r[1]=y,r}(Ke,i,t);if(h=(l=(n-(c=$r(n,0)))*p[0]+n*p[1])+(s=c*p[0]),Fr.assign(h,Je,1,0),g=Gr(Je[0]),y=Gr(Je[1]),g>=Ce){if(0!=(g-Ce|y))return o*ze*ze;if(l+De>h-s)return o*ze*ze}else if((g&Wr)>=Ze){if(0!=(g-Xe|y))return o*Be*Be;if(l<=h-s)return o*Be*Be}return h=function(r,n,t){var e,i,u,a,o,f,c,s,l,p;return l=((s=r&Wr|0)>>$e)-cn|0,c=0,s>Re&&(i=fn(0,((c=r+(Oe>>l+1)>>>0)&~(Pn>>(l=((c&Wr)>>$e)-cn|0)))>>>0),c=(c&Pn|Oe)>>$e-l>>>0,r<0&&(c=-c),n-=i),r=Gr(r=Xr(f=1-((f=(u=(i=$r(i=t+n,0))*Ge)+(a=(t-(i-n))*Gn+i*Pe))*(e=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=a-(f-u))+f*o)-f))),(r+=c<<$e>>>0)>>$e<=0?$n(f,c):fn(f,r)}(g,s,l),o*h}function ri(r,n,t,e){var i,u;return P(r)||P(n)||P(t)||P(e)||n>e||e>t?NaN:r<=n?X:(i=(t-n)*(e-n),u=(t-n)*(t-e),r<=e?2*Nt(r-n)-Nt(i):r<t?Nt(1-Qe(t-r,2)/u):0)}function ni(r,n,t,e){var i,u,a;return P(r)||P(n)||P(t)||P(e)||n>e||e>t?NaN:r<n?X:(i=Nt(t-n)+Nt(e-n),u=Nt(t-n),a=Nt(t-n)+Nt(t-e),r<e?Gn+Nt(r-n)-i:r===e?Gn-u:r<=t?Gn+Nt(t-r)-a:X)}G(ri,"factory",(function(r,n,t){var e,i;return P(r)||P(n)||P(t)?at(NaN):r<=t&&t<=n?(e=(n-r)*(t-r),i=(n-r)*(n-t),function(u){return P(u)?NaN:u<=r?X:u<=t?2*Nt(u-r)-Nt(e):u<n?Nt(1-Qe(n-u,2)/i):0}):at(NaN)})),G(ni,"factory",(function(r,n,t){var e,i,u;return P(r)||P(n)||P(t)||r>t||t>n?at(NaN):(e=Nt(n-r)+Nt(t-r),i=Nt(n-r),u=Nt(n-r)+Nt(n-t),function(a){return P(a)?NaN:a<r?X:a<t?Gn+Nt(a-r)-e:a===t?Gn-i:a<=n?Gn+Nt(n-a)-u:X})}));var ti=Math.ceil;function ei(r){return r<0?ti(r):H(r)}var ii=.6931471803691238,ui=1.9082149292705877e-10,ai=1.4426950408889634,oi=709.782712893384,fi=-745.1332191019411,ci=1/(1<<28),si=-ci;function li(r){var n;return P(r)||r===L?r:r===X?0:r>oi?L:r<fi?0:r>si&&r<ci?1+r:function(r,n,t){var e,i,u,a;return $n(1-(n-(e=r-n)*(u=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-(n=ei(r<0?ai*r-.5:ai*r+.5))*ii,n*ui,n)}function pi(r){return q(r>0?r-1:r+1)}var hi=1072693247,gi=1e300,yi=1e-300,vi=1048575,di=1048576,bi=1072693248,mi=536870912,wi=524288,Ni=20,Ai=9007199254740992,Ei=.9617966939259756,_i=.9617967009544373,xi=-7.028461650952758e-9,Si=[1,1.5],Ti=[0,.5849624872207642],Ui=[0,1.350039202129749e-8],ki=1.4426950408889634,Vi=1.4426950216293335,Ii=1.9259629911266175e-8,ji=1048576,Fi=1071644672,Mi=20,Oi=.6931471824645996,Ri=-1.904654299957768e-9,$i=1072693247,Gi=1105199104,Pi=1139802112,Hi=1083179008,Wi=1072693248,qi=1083231232,Ci=3230714880,Li=31,Zi=1e300,Xi=1e-300,Yi=8008566259537294e-32,zi=[0,0],Bi=[0,0];function Di(r,n){var t,e,i,u,a,o,f,c,s,l,p,h,g,y;if(P(r)||P(n))return NaN;if(Fr.assign(n,zi,1,0),a=zi[0],0===zi[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return z(r);if(-.5===n)return 1/z(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Y(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:B(r)<1==(n===L)?0:L}(r,n)}if(Fr.assign(r,zi,1,0),u=zi[0],0===zi[1]){if(0===u)return function(r,n){return n===X?L:n===L?0:n>0?pi(n)?r:0:pi(n)?rn(L,r):L}(r,n);if(1===r)return 1;if(-1===r&&pi(n))return-1;if(Y(r))return r===X?Di(-0,-n):n<0?0:L}if(r<0&&!1===W(n))return(r-r)/(r-r);if(i=B(r),t=u&Wr|0,e=a&Wr|0,f=a>>>Li|0,o=(o=u>>>Li|0)&&pi(n)?-1:1,e>Gi){if(e>Pi)return function(r,n){return(Xr(r)&Wr)<=hi?n<0?gi*gi:yi*yi:n>0?gi*gi:yi*yi}(r,n);if(t<$i)return 1===f?o*Zi*Zi:o*Xi*Xi;if(t>Wi)return 0===f?o*Zi*Zi:o*Xi*Xi;p=function(r,n){var t,e,i,u,a,o,f;return u=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(o=i*Ii-u*ki)-((e=$r(e=(a=Vi*i)+o,0))-a),r[0]=e,r[1]=t,r}(Bi,i)}else p=function(r,n,t){var e,i,u,a,o,f,c,s,l,p,h,g,y,v,d,b,m,w,N,A,E;return w=0,t<di&&(w-=53,t=Xr(n*=Ai)),w+=(t>>Ni)-cn|0,t=(N=t&vi|0)|bi|0,N<=235662?A=0:N<767610?A=1:(A=0,w+=1,t-=di),a=$r(i=(b=(n=fn(n,t))-(c=Si[A]))*(m=1/(n+c)),0),e=(t>>1|mi)+wi,f=fn(0,e+=A<<18),d=(u=i*i)*u*(0===(E=u)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=$r(f=3+(u=a*a)+(d+=(o=m*(b-a*f-a*(n-(f-c))))*(a+i)),0),l=$r(l=(b=a*f)+(m=o*f+(d-(f-3-u))*i),0),p=_i*l,y=(h=xi*l+(m-(l-b))*Ei+Ui[A])-((g=$r(g=p+h+(s=Ti[A])+(v=w),0))-v-s-p),r[0]=g,r[1]=y,r}(Bi,i,t);if(h=(l=(n-(c=$r(n,0)))*p[0]+n*p[1])+(s=c*p[0]),Fr.assign(h,zi,1,0),g=Gr(zi[0]),y=Gr(zi[1]),g>=Hi){if(0!=(g-Hi|y))return o*Zi*Zi;if(l+Yi>h-s)return o*Zi*Zi}else if((g&Wr)>=qi){if(0!=(g-Ci|y))return o*Xi*Xi;if(l<=h-s)return o*Xi*Xi}return h=function(r,n,t){var e,i,u,a,o,f,c,s,l,p;return l=((s=r&Wr|0)>>Mi)-cn|0,c=0,s>Fi&&(i=fn(0,((c=r+(ji>>l+1)>>>0)&~(Pn>>(l=((c&Wr)>>Mi)-cn|0)))>>>0),c=(c&Pn|ji)>>Mi-l>>>0,r<0&&(c=-c),n-=i),r=Gr(r=Xr(f=1-((f=(u=(i=$r(i=t+n,0))*Oi)+(a=(t-(i-n))*Gn+i*Ri))*(e=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=a-(f-u))+f*o)-f))),(r+=c<<Mi>>>0)>>Mi<=0?$n(f,c):fn(f,r)}(g,s,l),o*h}function Ji(r,n,t,e){var i,u,a,o;return P(r)||P(n)||P(t)||P(e)||n>e||e>t?NaN:0===r?1:(u=t-n,a=e-n,o=(i=t-e)*li(n*r)-u*li(e*r),o+=a*li(t*r),o*=2,o/=u*a*i*Di(r,2))}function Ki(r,n,t,e){return P(r)||P(n)||P(t)||P(e)||n>e||e>t?NaN:r<n?0:r<e?2*(r-n)/((t-n)*(e-n)):r===e?2/(t-n):r<=t?2*(t-r)/((t-n)*(t-e)):0}function Qi(r,n,t,e){var i,u;return P(r)||P(n)||P(t)||P(e)||n>e||e>t||r<0||r>1?NaN:(u=(t-n)*(t-e),r<(i=(e-n)/(t-n))?n+z((t-n)*(e-n)*r):r>i?t-z(u*(1-r)):e)}function ru(){var r,n,t;if(!(this instanceof ru))return 0===arguments.length?new ru:new ru(arguments[0],arguments[1],arguments[2]);if(arguments.length){if(n=arguments[1],t=arguments[2],!ft(r=arguments[0])||P(r))throw new TypeError(k("invalid argument. Minimum support must be a number. Value: `%s`.",r));if(!ft(n)||P(n))throw new TypeError(k("invalid argument. Maximum support must be a number. Value: `%s`.",n));if(!ft(t)||P(t))throw new TypeError(k("invalid argument. Mode must be a number. Value: `%s`.",t));if(!(r<=t&&t<=n))throw new RangeError(k("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,n,t))}else r=0,n=1,t=.5;return R(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(e){if(!ft(e)||P(e))throw new TypeError(k("invalid assignment. Must be a number. Value: `%s`.",e));if(e>n||e>t)throw new RangeError(k("invalid assignment. Must be less than or equal to both the maximum support and the mode. Value: `%f`.",e));r=e}}),R(this,"b",{configurable:!1,enumerable:!0,get:function(){return n},set:function(e){if(!ft(e)||P(e))throw new TypeError(k("invalid assignment. Must be a number. Value: `%s`.",e));if(r>e||t>e)throw new RangeError(k("invalid assignment. Must be greater than or equal to both the minimum support and the mode. Value: `%f`.",e));n=e}}),R(this,"c",{configurable:!1,enumerable:!0,get:function(){return t},set:function(e){if(!ft(e)||P(e))throw new TypeError(k("invalid assignment. Must be a number. Value: `%s`.",e));if(r>e||n<e)throw new RangeError(k("invalid assignment. Must be greater than or equal to the minimum support and less than or equal to the maximum support. Value: `%f`.",e));t=e}}),this}G(Ji,"factory",(function(r,n,t){var e,i,u;return P(r)||P(n)||P(t)||r>t||t>n?at(NaN):(e=n-t,i=n-r,u=t-r,function(a){var o;return P(a)?NaN:0===a?1:(o=e*li(r*a)-i*li(t*a),o+=u*li(n*a),o*=2,o/=i*u*e*Di(a,2))})})),G(Ki,"factory",(function(r,n,t){var e,i,u;return P(r)||P(n)||P(t)||r>t||t>n?at(NaN):(e=(n-r)*(t-r),i=n-r,u=(n-r)*(n-t),function(a){return P(a)?NaN:a<r?0:a<t?2*(a-r)/e:a===t?2/i:a<=n?2*(n-a)/u:0})})),G(Qi,"factory",(function(r,n,t){var e,i,u;return P(r)||P(n)||P(t)||r>t||t>n?at(NaN):(e=(t-r)/(n-r),i=(n-r)*(t-r),u=(n-r)*(n-t),function(a){return P(a)||a<0||a>1?NaN:a<e?r+z(i*a):a>e?n-z(u*(1-a)):t})})),ot(ru.prototype,"entropy",(function(){return At(this.a,this.b,this.c)})),ot(ru.prototype,"kurtosis",(function(){return Et(this.a,this.b,this.c)})),ot(ru.prototype,"mean",(function(){return _t(this.a,this.b,this.c)})),ot(ru.prototype,"median",(function(){return xt(this.a,this.b,this.c)})),ot(ru.prototype,"mode",(function(){return St(this.a,this.b,this.c)})),ot(ru.prototype,"skewness",(function(){return pe(this.a,this.b,this.c)})),ot(ru.prototype,"stdev",(function(){return he(this.a,this.b,this.c)})),ot(ru.prototype,"variance",(function(){return ge(this.a,this.b,this.c)})),G(ru.prototype,"cdf",(function(r){return ut(r,this.a,this.b,this.c)})),G(ru.prototype,"logcdf",(function(r){return ri(r,this.a,this.b,this.c)})),G(ru.prototype,"logpdf",(function(r){return ni(r,this.a,this.b,this.c)})),G(ru.prototype,"mgf",(function(r){return Ji(r,this.a,this.b,this.c)})),G(ru.prototype,"pdf",(function(r){return Ki(r,this.a,this.b,this.c)})),G(ru.prototype,"quantile",(function(r){return Qi(r,this.a,this.b,this.c)}));var nu={};return $(nu,"cdf",ut),$(nu,"Triangular",ru),$(nu,"entropy",At),$(nu,"kurtosis",Et),$(nu,"logcdf",ri),$(nu,"logpdf",ni),$(nu,"mean",_t),$(nu,"median",xt),$(nu,"mgf",Ji),$(nu,"mode",St),$(nu,"pdf",Ki),$(nu,"quantile",Qi),$(nu,"skewness",pe),$(nu,"stdev",he),$(nu,"variance",ge),nu},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).triangular=n();
//# sourceMappingURL=index.js.map