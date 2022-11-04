// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,n=Object.prototype,e=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,o=n.__lookupGetter__,u=n.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,f){var c,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((s="value"in f)&&(o.call(r,t)||u.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=f.value,r.__proto__=c):r[t]=f.value),l="get"in f,p="set"in f,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(r,t,f.get),p&&a&&a.call(r,t,f.set),r};function c(r,t,n){f(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}function s(r,t,n){f(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(r){return r!=r}var p=Math.floor;function h(r){return p(r)===r}function y(r){return h(r/2)}function g(r){return y(r>0?r-1:r+1)}var v=Number.POSITIVE_INFINITY,b=Number,d=b.NEGATIVE_INFINITY;function m(r){return r===v||r===d}var w=Math.sqrt;function N(r){return Math.abs(r)}var A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function E(){return A&&"symbol"==typeof Symbol.toStringTag}var _=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;var k="function"==typeof Symbol?Symbol.toStringTag:"";var x=E()?function(r){var t,n,e,i,a;if(null==r)return _.call(r);n=r[k],a=k,t=null!=(i=r)&&U.call(i,a);try{r[k]=void 0}catch(t){return _.call(r)}return e=_.call(r),t?r[k]=n:delete r[k],e}:function(r){return _.call(r)},S="function"==typeof Uint32Array;var V="function"==typeof Uint32Array?Uint32Array:null;var I,T="function"==typeof Uint32Array?Uint32Array:void 0;I=function(){var r,t,n;if("function"!=typeof V)return!1;try{t=new V(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(S&&n instanceof Uint32Array||"[object Uint32Array]"===x(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?T:function(){throw new Error("not implemented")};var j=I,F="function"==typeof Float64Array;var M="function"==typeof Float64Array?Float64Array:null;var O,R="function"==typeof Float64Array?Float64Array:void 0;O=function(){var r,t,n;if("function"!=typeof M)return!1;try{t=new M([1,3.14,-3.14,NaN]),n=t,r=(F&&n instanceof Float64Array||"[object Float64Array]"===x(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?R:function(){throw new Error("not implemented")};var $=O,G="function"==typeof Uint8Array;var P="function"==typeof Uint8Array?Uint8Array:null;var H,W="function"==typeof Uint8Array?Uint8Array:void 0;H=function(){var r,t,n;if("function"!=typeof P)return!1;try{t=new P(t=[1,3.14,-3.14,256,257]),n=t,r=(G&&n instanceof Uint8Array||"[object Uint8Array]"===x(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?W:function(){throw new Error("not implemented")};var q=H,C="function"==typeof Uint16Array;var L="function"==typeof Uint16Array?Uint16Array:null;var Z,X="function"==typeof Uint16Array?Uint16Array:void 0;Z=function(){var r,t,n;if("function"!=typeof L)return!1;try{t=new L(t=[1,3.14,-3.14,65536,65537]),n=t,r=(C&&n instanceof Uint16Array||"[object Uint16Array]"===x(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?X:function(){throw new Error("not implemented")};var Y,z={uint16:Z,uint8:q};(Y=new z.uint16(1))[0]=4660;var B,D,J=52===new z.uint8(Y.buffer)[0];!0===J?(B=1,D=0):(B=0,D=1);var K={HIGH:B,LOW:D},Q=new $(1),rr=new j(Q.buffer),tr=K.HIGH,nr=K.LOW;function er(r,t){return Q[0]=t,r[0]=rr[tr],r[1]=rr[nr],r}function ir(r,t){return 1===arguments.length?er([0,0],r):er(r,t)}var ar=!0===J?0:1,or=new $(1),ur=new j(or.buffer);function fr(r,t){return or[0]=r,ur[ar]=t>>>0,or[0]}function cr(r){return 0|r}var sr,lr,pr=!0===J?1:0,hr=new $(1),yr=new j(hr.buffer);function gr(r){return hr[0]=r,yr[pr]}!0===J?(sr=1,lr=0):(sr=0,lr=1);var vr={HIGH:sr,LOW:lr},br=new $(1),dr=new j(br.buffer),mr=vr.HIGH,wr=vr.LOW;function Nr(r,t){return dr[mr]=r,dr[wr]=t,br[0]}var Ar=[0,0];function Er(r,t){var n,e;return ir(Ar,r),n=Ar[0],n&=2147483647,e=gr(t),Nr(n|=e&=2147483648,Ar[1])}var _r=!0===J?1:0,Ur=new $(1),kr=new j(Ur.buffer);function xr(r,t){return Ur[0]=r,kr[_r]=t>>>0,Ur[0]}var Sr=[1,1.5],Vr=[0,.5849624872207642],Ir=[0,1.350039202129749e-8];function Tr(r,t,n,e){return l(r)||m(r)?(t[e]=r,t[e+n]=0,t):0!==r&&N(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}s((function(r){return Tr(r,[0,0],1,0)}),"assign",Tr);var jr=[0,0],Fr=[0,0];function Mr(r,t){var n,e;return 0===t||0===r||l(r)||m(r)?r:(Tr(r,jr,1,0),t+=jr[1],t+=function(r){var t=gr(r);return(t=(2146435072&t)>>>20)-1023|0}(r=jr[0]),t<-1074?Er(0,r):t>1023?r<0?d:v:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,ir(Fr,r),n=Fr[0],n&=2148532223,e*Nr(n|=t+1023<<20,Fr[1])))}var Or=.6931471805599453;var Rr=1e300,$r=1e-300,Gr=[0,0],Pr=[0,0];function Hr(r,t){var n,e,i,a,o,u,f,c,s,p,y,b,A,E;if(l(r)||l(t))return NaN;if(ir(Gr,t),o=Gr[0],0===Gr[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return w(r);if(-.5===t)return 1/w(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(m(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:N(r)<1==(t===v)?0:v}(r,t)}if(ir(Gr,r),a=Gr[0],0===Gr[1]){if(0===a)return function(r,t){return t===d?v:t===v?0:t>0?g(t)?r:0:g(t)?Er(v,r):v}(r,t);if(1===r)return 1;if(-1===r&&g(t))return-1;if(m(r))return r===d?Hr(-0,-t):t<0?0:v}if(r<0&&!1===h(t))return(r-r)/(r-r);if(i=N(r),n=2147483647&a|0,e=2147483647&o|0,f=o>>>31|0,u=(u=a>>>31|0)&&g(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&gr(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===f?u*Rr*Rr:u*$r*$r;if(n>1072693248)return 0===f?u*Rr*Rr:u*$r*$r;y=function(r,t){var n,e,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=t-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=fr(e=(a=1.4426950216293335*i)+o,0))-a),r[0]=e,r[1]=n,r}(Pr,i)}else y=function(r,t,n){var e,i,a,o,u,f,c,s,l,p,h,y,g,v,b,d,m,w,N,A,E;return w=0,n<1048576&&(w-=53,n=gr(t*=9007199254740992)),w+=(n>>20)-1023|0,n=1072693248|(N=1048575&n|0),N<=235662?A=0:N<767610?A=1:(A=0,w+=1,n-=1048576),o=fr(i=(d=(t=xr(t,n))-(c=Sr[A]))*(m=1/(t+c)),0),e=524288+(n>>1|536870912),f=xr(0,e+=A<<18),b=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=fr(f=3+(a=o*o)+(b+=(u=m*(d-o*f-o*(t-(f-c))))*(o+i)),0),g=(h=-7.028461650952758e-9*(l=fr(l=(d=o*f)+(m=u*f+(b-(f-3-a))*i),0))+.9617966939259756*(m-(l-d))+Ir[A])-((y=fr(y=(p=.9617967009544373*l)+h+(s=Vr[A])+(v=w),0))-v-s-p),r[0]=y,r[1]=g,r}(Pr,i,n);if(p=(t-(c=fr(t,0)))*y[0]+t*y[1],s=c*y[0],ir(Gr,b=p+s),A=cr(Gr[0]),E=cr(Gr[1]),A>=1083179008){if(0!=(A-1083179008|E))return u*Rr*Rr;if(p+8008566259537294e-32>b-s)return u*Rr*Rr}else if((2147483647&A)>=1083231232){if(0!=(A-3230714880|E))return u*$r*$r;if(p<=b-s)return u*$r*$r}return b=function(r,t,n){var e,i,a,o,u,f,c,s,l,p,h;return p=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(e=((s=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-p>>>0,r<0&&(s=-s),t-=a=xr(0,e)),r=cr(r=gr(c=1-((c=(o=.6931471824645996*(a=fr(a=n+t,0)))+(u=(n-(a-t))*Or+-1.904654299957768e-9*a))*(i=c-(a=c*c)*(0===(h=a)?.16666666666666602:.16666666666666602+h*(h*(6613756321437934e-20+h*(4.1381367970572385e-8*h-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=u-(c-o))+c*f)-c))),(r+=s<<20>>>0)>>20<=0?Mr(c,s):xr(c,r)}(A,s,p),u*b}function Wr(r,t,n,e){var i,a;return l(r)||l(t)||l(n)||l(e)||t>e||e>n?NaN:r<=t?0:(i=(n-t)*(e-t),a=(n-t)*(n-e),r<=e?Hr(r-t,2)/i:r<n?1-Hr(n-r,2)/a:1)}function qr(r){return function(){return r}}function Cr(r,t,n){f(r,t,{configurable:!1,enumerable:!1,get:n})}function Lr(r){return"number"==typeof r}s(Wr,"factory",(function(r,t,n){var e,i;return l(r)||l(t)||l(n)?qr(NaN):r<=n&&n<=t?(e=(t-r)*(n-r),i=(t-r)*(t-n),function(a){if(l(a))return NaN;if(a<=r)return 0;if(a<=n)return Hr(a-r,2)/e;if(a<t)return 1-Hr(t-a,2)/i;return 1}):qr(NaN)}));var Zr=b.prototype.toString;var Xr=E();function Yr(r){return"object"==typeof r&&(r instanceof b||(Xr?function(r){try{return Zr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===x(r)))}function zr(r){return Lr(r)||Yr(r)}s(zr,"isPrimitive",Lr),s(zr,"isObject",Yr);var Br=.6931471803691238,Dr=1.9082149292705877e-10;function Jr(r){var t,n,e,i,a,o,u,f,c,s,p,h;return 0===r?d:l(r)||r<0?NaN:(a=0,(n=gr(r))<1048576&&(a-=54,n=gr(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-1023|0,a+=(f=(n&=1048575)+614244&1048576|0)>>20|0,u=(r=xr(r,n|1072693248^f))-1,(1048575&2+n)<3?0===u?0===a?0:a*Br+a*Dr:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*Br-(o-a*Dr-u)):(f=n-398458|0,c=440401-n|0,i=(p=(h=(s=u/(2+u))*s)*h)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=h*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+i,(f|=c)>0?(t=.5*u*u,0===a?u-(t-s*(t+o)):a*Br-(t-(s*(t+o)+a*Dr)-u)):0===a?u-s*(u-o):a*Br-(s*(u-o)-a*Dr-u))))}function Kr(r,t,n){return l(r)||l(t)||l(n)||!(r<=n&&n<=t)?NaN:.5+Jr(.5*(t-r))}function Qr(r,t,n){return l(r)||l(t)||l(n)||!(r<=n&&n<=t)?NaN:-.6}function rt(r,t,n){return l(r)||l(t)||l(n)||!(r<=n&&n<=t)?NaN:(r+t+n)/3}function tt(r,t,n){return l(r)||l(t)||l(n)||!(r<=n&&n<=t)?NaN:n>=(r+t)/2?r+w(.5*(t-r)*(n-r)):t-w(.5*(t-r)*(t-n))}function nt(r,t,n){return l(r)||l(t)||l(n)||!(r<=n&&n<=t)?NaN:n}function et(r,t,n){var e;return l(r)||l(t)||l(n)||!(r<=n&&n<=t)?NaN:(e=1.4142135623730951*(r+t-2*n)*(2*r-t-n)*(r-2*t+n),e/=5*Hr(r*r+t*t+n*n-r*t-r*n-t*n,1.5))}function it(r,t,n){return l(r)||l(t)||l(n)||!(r<=n&&n<=t)?NaN:w((r*r+t*t+n*n-r*t-r*n-t*n)/18)}function at(r,t,n){return l(r)||l(t)||l(n)||!(r<=n&&n<=t)?NaN:(r*r+t*t+n*n-r*t-r*n-t*n)/18}function ot(r,t,n,e){var i,a;return l(r)||l(t)||l(n)||l(e)||t>e||e>n?NaN:r<=t?d:(i=(n-t)*(e-t),a=(n-t)*(n-e),r<=e?2*Jr(r-t)-Jr(i):r<n?Jr(1-Hr(n-r,2)/a):0)}function ut(r,t,n,e){var i,a,o;return l(r)||l(t)||l(n)||l(e)||t>e||e>n?NaN:r<t?d:(i=Jr(n-t)+Jr(e-t),a=Jr(n-t),o=Jr(n-t)+Jr(n-e),r<e?Or+Jr(r-t)-i:r===e?Or-a:r<=n?Or+Jr(n-r)-o:d)}s(ot,"factory",(function(r,t,n){var e,i;return l(r)||l(t)||l(n)?qr(NaN):r<=n&&n<=t?(e=(t-r)*(n-r),i=(t-r)*(t-n),function(a){if(l(a))return NaN;if(a<=r)return d;if(a<=n)return 2*Jr(a-r)-Jr(e);if(a<t)return Jr(1-Hr(t-a,2)/i);return 0}):qr(NaN)})),s(ut,"factory",(function(r,t,n){var e,i,a;return l(r)||l(t)||l(n)||r>n||n>t?qr(NaN):(e=Jr(t-r)+Jr(n-r),i=Jr(t-r),a=Jr(t-r)+Jr(t-n),function(o){if(l(o))return NaN;if(o<r)return d;if(o<n)return Or+Jr(o-r)-e;if(o===n)return Or-i;if(o<=t)return Or+Jr(t-o)-a;return d})}));var ft=Math.ceil;function ct(r){return r<0?ft(r):p(r)}function st(r){var t;return l(r)||r===v?r:r===d?0:r>709.782712893384?v:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,n){var e,i,a,o;return Mr(1-(t-(e=r-t)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(t=ct(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function lt(r,t,n,e){var i,a,o,u;return l(r)||l(t)||l(n)||l(e)||t>e||e>n?NaN:0===r?1:(a=n-t,o=e-t,u=(i=n-e)*st(t*r)-a*st(e*r),u+=o*st(n*r),u*=2,u/=a*o*i*Hr(r,2))}function pt(r,t,n,e){return l(r)||l(t)||l(n)||l(e)||t>e||e>n?NaN:r<t?0:r<e?2*(r-t)/((n-t)*(e-t)):r===e?2/(n-t):r<=n?2*(n-r)/((n-t)*(n-e)):0}function ht(r,t,n,e){var i,a;return l(r)||l(t)||l(n)||l(e)||t>e||e>n||r<0||r>1?NaN:(a=(n-t)*(n-e),r<(i=(e-t)/(n-t))?t+w((n-t)*(e-t)*r):r>i?n-w(a*(1-r)):e)}function yt(r){return"number"==typeof r}function gt(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function vt(r,t,n){var e=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=n?r+gt(i):gt(i)+r,e&&(r="-"+r)),r}s(lt,"factory",(function(r,t,n){var e,i,a;return l(r)||l(t)||l(n)||r>n||n>t?qr(NaN):(e=t-n,i=t-r,a=n-r,function(o){var u;if(l(o))return NaN;if(0===o)return 1;return u=e*st(r*o)-i*st(n*o),u+=a*st(t*o),u*=2,u/=i*a*e*Hr(o,2)})})),s(pt,"factory",(function(r,t,n){var e,i,a;return l(r)||l(t)||l(n)||r>n||n>t?qr(NaN):(e=(t-r)*(n-r),i=t-r,a=(t-r)*(t-n),function(o){if(l(o))return NaN;if(o<r)return 0;if(o<n)return 2*(o-r)/e;if(o===n)return 2/i;if(o<=t)return 2*(t-o)/a;return 0})})),s(ht,"factory",(function(r,t,n){var e,i,a;return l(r)||l(t)||l(n)||r>n||n>t?qr(NaN):(e=(n-r)/(t-r),i=(t-r)*(n-r),a=(t-r)*(t-n),function(o){if(l(o)||o<0||o>1)return NaN;if(o<e)return r+w(i*o);if(o>e)return t-w(a*(1-o));return n})}));var bt=String.prototype.toLowerCase,dt=String.prototype.toUpperCase;function mt(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!isFinite(e)){if(!yt(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=vt(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=vt(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===dt.call(r.specifier)?dt.call(n):bt.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function wt(r){return"string"==typeof r}var Nt=Math.abs,At=String.prototype.toLowerCase,Et=String.prototype.toUpperCase,_t=String.prototype.replace,Ut=/e\+(\d)$/,kt=/e-(\d)$/,xt=/^(\d+)$/,St=/^(\d+)e/,Vt=/\.0$/,It=/\.0*e/,Tt=/(\..*[^0])0*e/;function jt(r){var t,n,e=parseFloat(r.arg);if(!isFinite(e)){if(!yt(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":Nt(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=_t.call(n,Tt,"$1e"),n=_t.call(n,It,"e"),n=_t.call(n,Vt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=_t.call(n,Ut,"e+0$1"),n=_t.call(n,kt,"e-0$1"),r.alternate&&(n=_t.call(n,xt,"$1."),n=_t.call(n,St,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=r.specifier===Et.call(r.specifier)?Et.call(n):At.call(n)}function Ft(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function Mt(r,t,n){var e=t-r.length;return e<0?r:r=n?r+Ft(e):Ft(e)+r}var Ot=String.fromCharCode,Rt=isNaN,$t=Array.isArray;function Gt(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function Pt(r){var t,n,e,i,a,o,u,f,c;if(!$t(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(wt(e=r[f]))o+=e;else{if(t=void 0!==e.precision,!(e=Gt(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),n=e.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,Rt(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,Rt(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=mt(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!Rt(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=Rt(a)?String(e.arg):Ot(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=jt(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=vt(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=Mt(e.arg,e.width,e.padRight)),o+=e.arg||"",u+=1}return o}var Ht=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Wt(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function qt(r){var t,n,e,i;for(n=[],i=0,e=Ht.exec(r);e;)(t=r.slice(i,Ht.lastIndex-e[0].length)).length&&n.push(t),n.push(Wt(e)),i=Ht.lastIndex,e=Ht.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function Ct(r){return"string"==typeof r}function Lt(r){var t,n,e;if(!Ct(r))throw new TypeError(Lt("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=qt(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return Pt.apply(null,n)}function Zt(){var r,t,n;if(!(this instanceof Zt))return 0===arguments.length?new Zt:new Zt(arguments[0],arguments[1],arguments[2]);if(arguments.length){if(t=arguments[1],n=arguments[2],!Lr(r=arguments[0])||l(r))throw new TypeError(Lt("invalid argument. Minimum support must be a number. Value: `%s`.",r));if(!Lr(t)||l(t))throw new TypeError(Lt("invalid argument. Maximum support must be a number. Value: `%s`.",t));if(!Lr(n)||l(n))throw new TypeError(Lt("invalid argument. Mode must be a number. Value: `%s`.",n));if(!(r<=n&&n<=t))throw new RangeError(Lt("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,t,n))}else r=0,t=1,n=.5;return f(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(e){if(!Lr(e)||l(e))throw new TypeError(Lt("invalid assignment. Must be a number. Value: `%s`.",e));if(e>t||e>n)throw new RangeError(Lt("invalid assignment. Must be less than or equal to both the maximum support and the mode. Value: `%f`.",e));r=e}}),f(this,"b",{configurable:!1,enumerable:!0,get:function(){return t},set:function(e){if(!Lr(e)||l(e))throw new TypeError(Lt("invalid assignment. Must be a number. Value: `%s`.",e));if(r>e||n>e)throw new RangeError(Lt("invalid assignment. Must be greater than or equal to both the minimum support and the mode. Value: `%f`.",e));t=e}}),f(this,"c",{configurable:!1,enumerable:!0,get:function(){return n},set:function(e){if(!Lr(e)||l(e))throw new TypeError(Lt("invalid assignment. Must be a number. Value: `%s`.",e));if(r>e||t<e)throw new RangeError(Lt("invalid assignment. Must be greater than or equal to the minimum support and less than or equal to the maximum support. Value: `%f`.",e));n=e}}),this}Cr(Zt.prototype,"entropy",(function(){return Kr(this.a,this.b,this.c)})),Cr(Zt.prototype,"kurtosis",(function(){return Qr(this.a,this.b,this.c)})),Cr(Zt.prototype,"mean",(function(){return rt(this.a,this.b,this.c)})),Cr(Zt.prototype,"median",(function(){return tt(this.a,this.b,this.c)})),Cr(Zt.prototype,"mode",(function(){return nt(this.a,this.b,this.c)})),Cr(Zt.prototype,"skewness",(function(){return et(this.a,this.b,this.c)})),Cr(Zt.prototype,"stdev",(function(){return it(this.a,this.b,this.c)})),Cr(Zt.prototype,"variance",(function(){return at(this.a,this.b,this.c)})),s(Zt.prototype,"cdf",(function(r){return Wr(r,this.a,this.b,this.c)})),s(Zt.prototype,"logcdf",(function(r){return ot(r,this.a,this.b,this.c)})),s(Zt.prototype,"logpdf",(function(r){return ut(r,this.a,this.b,this.c)})),s(Zt.prototype,"mgf",(function(r){return lt(r,this.a,this.b,this.c)})),s(Zt.prototype,"pdf",(function(r){return pt(r,this.a,this.b,this.c)})),s(Zt.prototype,"quantile",(function(r){return ht(r,this.a,this.b,this.c)}));var Xt={};c(Xt,"cdf",Wr),c(Xt,"Triangular",Zt),c(Xt,"entropy",Kr),c(Xt,"kurtosis",Qr),c(Xt,"logcdf",ot),c(Xt,"logpdf",ut),c(Xt,"mean",rt),c(Xt,"median",tt),c(Xt,"mgf",lt),c(Xt,"mode",nt),c(Xt,"pdf",pt),c(Xt,"quantile",ht),c(Xt,"skewness",et),c(Xt,"stdev",it),c(Xt,"variance",at);export{Zt as Triangular,Wr as cdf,Xt as default,Kr as entropy,Qr as kurtosis,ot as logcdf,ut as logpdf,rt as mean,tt as median,lt as mgf,nt as mode,pt as pdf,ht as quantile,et as skewness,it as stdev,at as variance};
//# sourceMappingURL=mod.js.map
