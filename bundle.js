// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).triangular=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,e=Object.prototype,i=e.toString,u=e.__defineGetter__,a=e.__defineSetter__,o=e.__lookupGetter__,f=e.__lookupSetter__;var c=n,v=function(r,t,n){var c,v,l,s;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((v="value"in n)&&(o.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),l="get"in n,s="set"in n,v&&(l||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(r,t,n.get),s&&a&&a.call(r,t,n.set),r},l=t()?c:v,s=l;var y=function(r,t,n){s(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})},p=l;var b=function(r,t,n){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})};var h=function(r){return r!=r},m=Math.floor,N=m;var d=function(r){return N(r)===r},w=d;var g=function(r){return w(r/2)};var A=function(r){return g(r>0?r-1:r+1)},_=Number.POSITIVE_INFINITY,U=Number,j=U.NEGATIVE_INFINITY,E=_,T=j;var V=function(r){return r===E||r===T},I=Math.sqrt;var M=function(r){return Math.abs(r)};var O=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var S=function(){return O&&"symbol"==typeof Symbol.toStringTag},F=Object.prototype.toString,P=F;var H=function(r){return P.call(r)},q=Object.prototype.hasOwnProperty;var G=function(r,t){return null!=r&&q.call(r,t)},k="function"==typeof Symbol?Symbol.toStringTag:"",x=G,L=k,R=F;var W=H,Y=function(r){var t,n,e;if(null==r)return R.call(r);n=r[L],t=x(r,L);try{r[L]=void 0}catch(t){return R.call(r)}return e=R.call(r),t?r[L]=n:delete r[L],e},C=S()?Y:W,z=C,B="function"==typeof Uint32Array;var D="function"==typeof Uint32Array?Uint32Array:null,J=function(r){return B&&r instanceof Uint32Array||"[object Uint32Array]"===z(r)},K=D;var Q=function(){var r,t;if("function"!=typeof K)return!1;try{t=new K(t=[1,3.14,-3.14,4294967296,4294967297]),r=J(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var X="function"==typeof Uint32Array?Uint32Array:void 0,Z=function(){throw new Error("not implemented")},$=Q()?X:Z,rr=C,tr="function"==typeof Float64Array;var nr="function"==typeof Float64Array?Float64Array:null,er=function(r){return tr&&r instanceof Float64Array||"[object Float64Array]"===rr(r)},ir=nr;var ur=function(){var r,t;if("function"!=typeof ir)return!1;try{t=new ir([1,3.14,-3.14,NaN]),r=er(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var ar="function"==typeof Float64Array?Float64Array:void 0,or=function(){throw new Error("not implemented")},fr=ur()?ar:or,cr=C,vr="function"==typeof Uint8Array;var lr="function"==typeof Uint8Array?Uint8Array:null,sr=function(r){return vr&&r instanceof Uint8Array||"[object Uint8Array]"===cr(r)},yr=lr;var pr=function(){var r,t;if("function"!=typeof yr)return!1;try{t=new yr(t=[1,3.14,-3.14,256,257]),r=sr(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var br="function"==typeof Uint8Array?Uint8Array:void 0,hr=function(){throw new Error("not implemented")},mr=pr()?br:hr,Nr=C,dr="function"==typeof Uint16Array;var wr="function"==typeof Uint16Array?Uint16Array:null,gr=function(r){return dr&&r instanceof Uint16Array||"[object Uint16Array]"===Nr(r)},Ar=wr;var _r=function(){var r,t;if("function"!=typeof Ar)return!1;try{t=new Ar(t=[1,3.14,-3.14,65536,65537]),r=gr(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Ur,jr="function"==typeof Uint16Array?Uint16Array:void 0,Er=function(){throw new Error("not implemented")},Tr={uint16:_r()?jr:Er,uint8:mr};(Ur=new Tr.uint16(1))[0]=4660;var Vr,Ir,Mr=52===new Tr.uint8(Ur.buffer)[0];!0===Mr?(Vr=1,Ir=0):(Vr=0,Ir=1);var Or=$,Sr={HIGH:Vr,LOW:Ir},Fr=new fr(1),Pr=new Or(Fr.buffer),Hr=Sr.HIGH,qr=Sr.LOW;var Gr=function(r,t){return Fr[0]=t,r[0]=Pr[Hr],r[1]=Pr[qr],r};var kr=function(r,t){return 1===arguments.length?Gr([0,0],r):Gr(r,t)},xr=kr,Lr=$,Rr=!0===Mr?0:1,Wr=new fr(1),Yr=new Lr(Wr.buffer);var Cr=function(r,t){return Wr[0]=r,Yr[Rr]=t>>>0,Wr[0]},zr=Cr;var Br=function(r){return 0|r},Dr=$,Jr=!0===Mr?1:0,Kr=new fr(1),Qr=new Dr(Kr.buffer);var Xr,Zr,$r=function(r){return Kr[0]=r,Qr[Jr]};!0===Mr?(Xr=1,Zr=0):(Xr=0,Zr=1);var rt=$,tt={HIGH:Xr,LOW:Zr},nt=new fr(1),et=new rt(nt.buffer),it=tt.HIGH,ut=tt.LOW;var at=function(r,t){return et[it]=r,et[ut]=t,nt[0]},ot=at,ft=xr,ct=$r,vt=ot,lt=[0,0];var st=function(r,t){var n,e;return ft(lt,r),n=lt[0],n&=2147483647,e=ct(t),vt(n|=e&=2147483648,lt[1])},yt=A,pt=st,bt=j,ht=_;var mt=function(r,t){return t===bt?ht:t===ht?0:t>0?yt(t)?r:0:yt(t)?pt(ht,r):ht},Nt=$r;var dt=function(r,t){return(2147483647&Nt(r))<=1072693247?t<0?1/0:0:t>0?1/0:0},wt=M,gt=_;var At=function(r,t){return-1===r?(r-r)/(r-r):1===r?1:wt(r)<1==(t===gt)?0:gt},_t=$,Ut=!0===Mr?1:0,jt=new fr(1),Et=new _t(jt.buffer);var Tt=function(r,t){return jt[0]=r,Et[Ut]=t>>>0,jt[0]},Vt=Tt;var It=$r,Mt=zr,Ot=Vt,St=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Ft=1048576,Pt=[1,1.5],Ht=[0,.5849624872207642],qt=[0,1.350039202129749e-8];var Gt=zr,kt=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var xt=V,Lt=h,Rt=M;var Wt=function(r,t){return Lt(t)||xt(t)?(r[0]=t,r[1]=0,r):0!==t&&Rt(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var Yt=function(r,t){return 1===arguments.length?Wt([0,0],r):Wt(r,t)},Ct=$r;var zt=function(r){var t=Ct(r);return(t=(2146435072&t)>>>20)-1023|0},Bt=_,Dt=j,Jt=h,Kt=V,Qt=st,Xt=Yt,Zt=zt,$t=xr,rn=ot,tn=[0,0],nn=[0,0];var en=function(r,t){var n,e;return 0===t||0===r||Jt(r)||Kt(r)?r:(Xt(tn,r),t+=tn[1],(t+=Zt(r=tn[0]))<-1074?Qt(0,r):t>1023?r<0?Dt:Bt:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,$t(nn,r),n=nn[0],n&=2148532223,e*rn(n|=t+1023<<20,nn[1])))},un=en,an=.6931471805599453;var on=$r,fn=Vt,cn=zr,vn=Br,ln=un,sn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},yn=2147483647,pn=1048575,bn=1048576;var hn=h,mn=A,Nn=V,dn=d,wn=I,gn=M,An=xr,_n=zr,Un=Br,jn=j,En=_,Tn=mt,Vn=dt,In=At,Mn=function(r,t,n){var e,i,u,a,o,f,c,v,l,s,y,p,b,h,m,N,d,w,g,A;return w=0,n<Ft&&(w-=53,n=It(t*=9007199254740992)),w+=(n>>20)-1023|0,n=1072693248|(g=1048575&n|0),g<=235662?A=0:g<767610?A=1:(A=0,w+=1,n-=Ft),e=524288+(n>>1|536870912),o=(d=1/((t=Ot(t,n))+(c=Pt[A])))*((N=t-c)-(a=Mt(i=N*d,0))*(f=Ot(0,e+=A<<18))-a*(t-(f-c))),m=(u=i*i)*u*St(u),f=Mt(f=3+(u=a*a)+(m+=o*(a+i)),0),b=(y=-7.028461650952758e-9*(l=Mt(l=(N=a*f)+(d=o*f+(m-(f-3-u))*i),0))+.9617966939259756*(d-(l-N))+qt[A])-((p=Mt(p=(s=.9617967009544373*l)+y+(v=Ht[A])+(h=w),0))-h-v-s),r[0]=p,r[1]=b,r},On=function(r,t){var n,e,i,u,a;return n=(a=1.9259629911266175e-8*(i=t-1)-1.4426950408889634*(i*i*kt(i)))-((e=Gt(e=(u=1.4426950216293335*i)+a,0))-u),r[0]=e,r[1]=n,r},Sn=function(r,t,n){var e,i,u,a,o,f,c,v,l;return l=((v=r&yn|0)>>20)-1023|0,c=0,v>1071644672&&(i=fn(0,((c=r+(bn>>l+1)>>>0)&~(pn>>(l=((c&yn)>>20)-1023|0)))>>>0),c=(c&pn|bn)>>20-l>>>0,r<0&&(c=-c),t-=i),o=(a=.6931471805599453*(n-((i=cn(i=n+t,0))-t))+-1.904654299957768e-9*i)-((f=(u=.6931471824645996*i)+a)-u),e=f-(i=f*f)*sn(i),r=on(f=1-(f*e/(e-2)-(o+f*o)-f)),r=vn(r),f=(r+=c<<20>>>0)>>20<=0?ln(f,c):fn(f,r)},Fn=2147483647,Pn=1083179008,Hn=1e300,qn=1e-300,Gn=[0,0],kn=[0,0];var xn=function r(t,n){var e,i,u,a,o,f,c,v,l,s,y,p,b,h;if(hn(t)||hn(n))return NaN;if(An(Gn,n),o=Gn[0],0===Gn[1]){if(0===n)return 1;if(1===n)return t;if(-1===n)return 1/t;if(.5===n)return wn(t);if(-.5===n)return 1/wn(t);if(2===n)return t*t;if(3===n)return t*t*t;if(4===n)return(t*=t)*t;if(Nn(n))return In(t,n)}if(An(Gn,t),a=Gn[0],0===Gn[1]){if(0===a)return Tn(t,n);if(1===t)return 1;if(-1===t&&mn(n))return-1;if(Nn(t))return t===jn?r(-0,-n):n<0?0:En}if(t<0&&!1===dn(n))return(t-t)/(t-t);if(u=gn(t),e=a&Fn|0,i=o&Fn|0,c=o>>>31|0,f=(f=a>>>31|0)&&mn(n)?-1:1,i>1105199104){if(i>1139802112)return Vn(t,n);if(e<1072693247)return 1===c?f*Hn*Hn:f*qn*qn;if(e>1072693248)return 0===c?f*Hn*Hn:f*qn*qn;y=On(kn,u)}else y=Mn(kn,u,e);if(s=(n-(v=_n(n,0)))*y[0]+n*y[1],l=v*y[0],An(Gn,p=s+l),b=Un(Gn[0]),h=Un(Gn[1]),b>=Pn){if(0!=(b-Pn|h))return f*Hn*Hn;if(s+8008566259537294e-32>p-l)return f*Hn*Hn}else if((b&Fn)>=1083231232){if(0!=(b-3230714880|h))return f*qn*qn;if(s<=p-l)return f*qn*qn}return f*(p=Sn(b,l,s))},Ln=xn,Rn=h,Wn=Ln;var Yn=function(r){return function(){return r}},Cn=Yn,zn=h,Bn=Ln;var Dn=function(r,t,n,e){var i,u;return Rn(r)||Rn(t)||Rn(n)||Rn(e)||t>e||e>n?NaN:r<=t?0:(i=(n-t)*(e-t),u=(n-t)*(n-e),r<=e?Wn(r-t,2)/i:r<n?1-Wn(n-r,2)/u:1)};b(Dn,"factory",(function(r,t,n){var e,i;return zn(r)||zn(t)||zn(n)?Cn(NaN):r<=n&&n<=t?(e=(t-r)*(n-r),i=(t-r)*(t-n),function(u){if(zn(u))return NaN;if(u<=r)return 0;if(u<=n)return Bn(u-r,2)/e;if(u<t)return 1-Bn(t-u,2)/i;return 1}):Cn(NaN)}));var Jn=Dn,Kn=l;var Qn=function(r,t,n){Kn(r,t,{configurable:!1,enumerable:!1,get:n})};var Xn=function(r){return"number"==typeof r},Zn=U.prototype.toString;var $n=C,re=U,te=function(r){try{return Zn.call(r),!0}catch(r){return!1}},ne=S();var ee=function(r){return"object"==typeof r&&(r instanceof re||(ne?te(r):"[object Number]"===$n(r)))},ie=Xn,ue=ee;var ae=b,oe=function(r){return ie(r)||ue(r)},fe=ee;ae(oe,"isPrimitive",Xn),ae(oe,"isObject",fe);var ce=oe;var ve=$r,le=Vt,se=h,ye=j,pe=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},be=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},he=.6931471803691238,me=1.9082149292705877e-10,Ne=1048575;var de=function(r){var t,n,e,i,u,a,o,f,c,v,l;return 0===r?ye:se(r)||r<0?NaN:(i=0,(n=ve(r))<1048576&&(i-=54,n=ve(r*=0x40000000000000)),n>=2146435072?r+r:(i+=(n>>20)-1023|0,i+=(o=(n&=Ne)+614244&1048576|0)>>20|0,a=(r=le(r,n|1072693248^o))-1,(Ne&2+n)<3?0===a?0===i?0:i*he+i*me:(u=a*a*(.5-.3333333333333333*a),0===i?a-u:i*he-(u-i*me-a)):(o=n-398458|0,f=440401-n|0,e=(v=(l=(c=a/(2+a))*c)*l)*pe(v),u=l*be(v)+e,(o|=f)>0?(t=.5*a*a,0===i?a-(t-c*(t+u)):i*he-(t-(c*(t+u)+i*me)-a)):0===i?a-c*(a-u):i*he-(c*(a-u)-i*me-a))))},we=h,ge=de;var Ae=function(r,t,n){return we(r)||we(t)||we(n)||!(r<=n&&n<=t)?NaN:.5+ge(.5*(t-r))},_e=h;var Ue=function(r,t,n){return _e(r)||_e(t)||_e(n)||!(r<=n&&n<=t)?NaN:-.6},je=h;var Ee=function(r,t,n){return je(r)||je(t)||je(n)||!(r<=n&&n<=t)?NaN:(r+t+n)/3},Te=h,Ve=I;var Ie=function(r,t,n){return Te(r)||Te(t)||Te(n)||!(r<=n&&n<=t)?NaN:n>=(r+t)/2?r+Ve(.5*(t-r)*(n-r)):t-Ve(.5*(t-r)*(t-n))},Me=h;var Oe=function(r,t,n){return Me(r)||Me(t)||Me(n)||!(r<=n&&n<=t)?NaN:n},Se=h,Fe=Ln;var Pe=function(r,t,n){var e;return Se(r)||Se(t)||Se(n)||!(r<=n&&n<=t)?NaN:(e=1.4142135623730951*(r+t-2*n)*(2*r-t-n)*(r-2*t+n),e/=5*Fe(r*r+t*t+n*n-r*t-r*n-t*n,1.5))},He=h,qe=I;var Ge=function(r,t,n){return He(r)||He(t)||He(n)||!(r<=n&&n<=t)?NaN:qe((r*r+t*t+n*n-r*t-r*n-t*n)/18)},ke=h;var xe=function(r,t,n){return ke(r)||ke(t)||ke(n)||!(r<=n&&n<=t)?NaN:(r*r+t*t+n*n-r*t-r*n-t*n)/18},Le=h,Re=Ln,We=de,Ye=j;var Ce=Yn,ze=h,Be=Ln,De=de,Je=j;var Ke=function(r,t,n,e){var i,u;return Le(r)||Le(t)||Le(n)||Le(e)||t>e||e>n?NaN:r<=t?Ye:(i=(n-t)*(e-t),u=(n-t)*(n-e),r<=e?2*We(r-t)-We(i):r<n?We(1-Re(n-r,2)/u):0)};b(Ke,"factory",(function(r,t,n){var e,i;return ze(r)||ze(t)||ze(n)?Ce(NaN):r<=n&&n<=t?(e=(t-r)*(n-r),i=(t-r)*(t-n),function(u){if(ze(u))return NaN;if(u<=r)return Je;if(u<=n)return 2*De(u-r)-De(e);if(u<t)return De(1-Be(t-u,2)/i);return 0}):Ce(NaN)}));var Qe=Ke,Xe=h,Ze=de,$e=j,ri=an;var ti=Yn,ni=h,ei=de,ii=j,ui=an;var ai=function(r,t,n,e){var i,u,a;return Xe(r)||Xe(t)||Xe(n)||Xe(e)||t>e||e>n?NaN:r<t?$e:(i=Ze(n-t)+Ze(e-t),u=Ze(n-t),a=Ze(n-t)+Ze(n-e),r<e?ri+Ze(r-t)-i:r===e?ri-u:r<=n?ri+Ze(n-r)-a:$e)};b(ai,"factory",(function(r,t,n){var e,i,u;return ni(r)||ni(t)||ni(n)||r>n||n>t?ti(NaN):(e=ei(t-r)+ei(n-r),i=ei(t-r),u=ei(t-r)+ei(t-n),function(a){if(ni(a))return NaN;if(a<r)return ii;if(a<n)return ui+ei(a-r)-e;if(a===n)return ui-i;if(a<=t)return ui+ei(t-a)-u;return ii})}));var oi=ai,fi=Math.ceil,ci=m,vi=fi;var li=un,si=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var yi=h,pi=function(r){return r<0?vi(r):ci(r)},bi=j,hi=_,mi=function(r,t,n){var e,i,u;return u=(e=r-t)-(i=e*e)*si(i),li(1-(t-e*u/(2-u)-r),n)},Ni=1.4426950408889634,di=1/(1<<28);var wi=function(r){var t;return yi(r)||r===hi?r:r===bi?0:r>709.782712893384?hi:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<di?1+r:(t=pi(r<0?Ni*r-.5:Ni*r+.5),mi(r-.6931471803691238*t,1.9082149292705877e-10*t,t))},gi=h,Ai=wi,_i=Ln;var Ui=Yn,ji=h,Ei=wi,Ti=Ln;var Vi=function(r,t,n,e){var i,u,a,o;return gi(r)||gi(t)||gi(n)||gi(e)||t>e||e>n?NaN:0===r?1:(u=n-t,a=e-t,o=(i=n-e)*Ai(t*r)-u*Ai(e*r),o+=a*Ai(n*r),o*=2,o/=u*a*i*_i(r,2))};b(Vi,"factory",(function(r,t,n){var e,i,u;return ji(r)||ji(t)||ji(n)||r>n||n>t?Ui(NaN):(e=t-n,i=t-r,u=n-r,function(a){var o;if(ji(a))return NaN;if(0===a)return 1;return o=e*Ei(r*a)-i*Ei(n*a),o+=u*Ei(t*a),o*=2,o/=i*u*e*Ti(a,2)})}));var Ii=Vi,Mi=h;var Oi=Yn,Si=h;var Fi=function(r,t,n,e){return Mi(r)||Mi(t)||Mi(n)||Mi(e)||t>e||e>n?NaN:r<t?0:r<e?2*(r-t)/((n-t)*(e-t)):r===e?2/(n-t):r<=n?2*(n-r)/((n-t)*(n-e)):0};b(Fi,"factory",(function(r,t,n){var e,i,u;return Si(r)||Si(t)||Si(n)||r>n||n>t?Oi(NaN):(e=(t-r)*(n-r),i=t-r,u=(t-r)*(t-n),function(a){if(Si(a))return NaN;if(a<r)return 0;if(a<n)return 2*(a-r)/e;if(a===n)return 2/i;if(a<=t)return 2*(t-a)/u;return 0})}));var Pi=Fi,Hi=h,qi=I;var Gi=Yn,ki=h,xi=I;var Li=function(r,t,n,e){var i,u;return Hi(r)||Hi(t)||Hi(n)||Hi(e)||t>e||e>n||r<0||r>1?NaN:(u=(n-t)*(n-e),r<(i=(e-t)/(n-t))?t+qi((n-t)*(e-t)*r):r>i?n-qi(u*(1-r)):e)};b(Li,"factory",(function(r,t,n){var e,i,u;return ki(r)||ki(t)||ki(n)||r>n||n>t?Gi(NaN):(e=(n-r)/(t-r),i=(t-r)*(n-r),u=(t-r)*(t-n),function(a){if(ki(a)||a<0||a>1)return NaN;if(a<e)return r+xi(i*a);if(a>e)return t-xi(u*(1-a));return n})}));var Ri=Li,Wi=l,Yi=b,Ci=Qn,zi=ce.isPrimitive,Bi=h,Di=Ae,Ji=Ue,Ki=Ee,Qi=Ie,Xi=Oe,Zi=Pe,$i=Ge,ru=xe,tu=Jn,nu=Qe,eu=oi,iu=Ii,uu=Pi,au=Ri;function ou(){var r,t,n;if(!(this instanceof ou))return 0===arguments.length?new ou:new ou(arguments[0],arguments[1],arguments[2]);if(arguments.length){if(t=arguments[1],n=arguments[2],!zi(r=arguments[0])||Bi(r))throw new TypeError("invalid argument. Minimum support `a` must be a number primitive. Value: `"+r+"`");if(!zi(t)||Bi(t))throw new TypeError("invalid argument. Maximum support `b` must be a number primitive. Value: `"+t+"`");if(!zi(n)||Bi(n))throw new TypeError("invalid argument. Mode `c` must be a number primitive. Value: `"+n+"`");if(!(r<=n&&n<=t))throw new RangeError("invalid arguments. Parameters must satisfy `a <= c <= b`. Value: `"+r+","+t+","+n+"`")}else r=0,t=1,n=.5;return Wi(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(e){if(!zi(e)||Bi(e))throw new TypeError("invalid value. Must be a number primitive. Value: `"+e+"`");if(e>t||e>n)throw new RangeError("invalid value. Must be smaller than or equal to `b` and `c`. Value: `"+e+"`");r=e}}),Wi(this,"b",{configurable:!1,enumerable:!0,get:function(){return t},set:function(e){if(!zi(e)||Bi(e))throw new TypeError("invalid value. Must be a number primitive. Value: `"+e+"`");if(r>e||n>e)throw new RangeError("invalid value. Must be greater than or equal to `a` and `c`. Value: `"+e+"`");t=e}}),Wi(this,"c",{configurable:!1,enumerable:!0,get:function(){return n},set:function(e){if(!zi(e)||Bi(e))throw new TypeError("invalid value. Must be a number primitive. Value: `"+e+"`");if(r>e||t<e)throw new RangeError("invalid value. Must be greater than or equal to `a` and smaller than or equal to `b`. Value: `"+e+"`");n=e}}),this}Ci(ou.prototype,"entropy",(function(){return Di(this.a,this.b,this.c)})),Ci(ou.prototype,"kurtosis",(function(){return Ji(this.a,this.b,this.c)})),Ci(ou.prototype,"mean",(function(){return Ki(this.a,this.b,this.c)})),Ci(ou.prototype,"median",(function(){return Qi(this.a,this.b,this.c)})),Ci(ou.prototype,"mode",(function(){return Xi(this.a,this.b,this.c)})),Ci(ou.prototype,"skewness",(function(){return Zi(this.a,this.b,this.c)})),Ci(ou.prototype,"stdev",(function(){return $i(this.a,this.b,this.c)})),Ci(ou.prototype,"variance",(function(){return ru(this.a,this.b,this.c)})),Yi(ou.prototype,"cdf",(function(r){return tu(r,this.a,this.b,this.c)})),Yi(ou.prototype,"logcdf",(function(r){return nu(r,this.a,this.b,this.c)})),Yi(ou.prototype,"logpdf",(function(r){return eu(r,this.a,this.b,this.c)})),Yi(ou.prototype,"mgf",(function(r){return iu(r,this.a,this.b,this.c)})),Yi(ou.prototype,"pdf",(function(r){return uu(r,this.a,this.b,this.c)})),Yi(ou.prototype,"quantile",(function(r){return au(r,this.a,this.b,this.c)}));var fu=ou,cu=y,vu={};return cu(vu,"cdf",Jn),cu(vu,"Triangular",fu),cu(vu,"entropy",Ae),cu(vu,"kurtosis",Ue),cu(vu,"logcdf",Qe),cu(vu,"logpdf",oi),cu(vu,"mean",Ee),cu(vu,"median",Ie),cu(vu,"mgf",Ii),cu(vu,"mode",Oe),cu(vu,"pdf",Pi),cu(vu,"quantile",Ri),cu(vu,"skewness",Pe),cu(vu,"stdev",Ge),cu(vu,"variance",xe),vu}));
//# sourceMappingURL=bundle.js.map
