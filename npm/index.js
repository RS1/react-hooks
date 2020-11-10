import{useState as e,useRef as n,useEffect as t,useCallback as r}from"react";import o from"ua-parser-js";function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,o=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(e,n)||l(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,n){if(e){if("string"==typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,n):void 0}}function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var d,v=function(){try{return"ontouchstart"in window||void 0!==window.DocumentTouch&&document instanceof window.DocumentTouch||window.matchMedia("(hover: none)").matches}catch(e){return!1}},p={OS:c({},(d=o()).os),browser:c({},d.browser),agent:d.ua},h=function(){return a(e(c({isTouch:v()},p)),1)[0]},m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function y(e,n,t){return e(t={path:n,exports:{},require:function(e,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&t.path)}},t.exports),t.exports}var g=function(e){return e&&e.Math==Math&&e},b=g("object"==typeof globalThis&&globalThis)||g("object"==typeof window&&window)||g("object"==typeof self&&self)||g("object"==typeof m&&m)||function(){return this}()||Function("return this")(),w=function(e){try{return!!e()}catch(e){return!0}},E=!w((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),j={}.propertyIsEnumerable,S=Object.getOwnPropertyDescriptor,O={f:S&&!j.call({1:2},1)?function(e){var n=S(this,e);return!!n&&n.enumerable}:j},T=function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}},x={}.toString,P=function(e){return x.call(e).slice(8,-1)},L="".split,k=w((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==P(e)?L.call(e,""):Object(e)}:Object,F=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},A=function(e){return k(F(e))},M=function(e){return"object"==typeof e?null!==e:"function"==typeof e},I=function(e,n){if(!M(e))return e;var t,r;if(n&&"function"==typeof(t=e.toString)&&!M(r=t.call(e)))return r;if("function"==typeof(t=e.valueOf)&&!M(r=t.call(e)))return r;if(!n&&"function"==typeof(t=e.toString)&&!M(r=t.call(e)))return r;throw TypeError("Can't convert object to primitive value")},q={}.hasOwnProperty,C=function(e,n){return q.call(e,n)},R=b.document,D=M(R)&&M(R.createElement),z=function(e){return D?R.createElement(e):{}},_=!E&&!w((function(){return 7!=Object.defineProperty(z("div"),"a",{get:function(){return 7}}).a})),N=Object.getOwnPropertyDescriptor,B={f:E?N:function(e,n){if(e=A(e),n=I(n,!0),_)try{return N(e,n)}catch(e){}if(C(e,n))return T(!O.f.call(e,n),e[n])}},U=function(e){if(!M(e))throw TypeError(String(e)+" is not an object");return e},W=Object.defineProperty,Y={f:E?W:function(e,n,t){if(U(e),n=I(n,!0),U(t),_)try{return W(e,n,t)}catch(e){}if("get"in t||"set"in t)throw TypeError("Accessors not supported");return"value"in t&&(e[n]=t.value),e}},G=E?function(e,n,t){return Y.f(e,n,T(1,t))}:function(e,n,t){return e[n]=t,e},K=function(e,n){try{G(b,e,n)}catch(t){b[e]=n}return n},V=b["__core-js_shared__"]||K("__core-js_shared__",{}),X=Function.toString;"function"!=typeof V.inspectSource&&(V.inspectSource=function(e){return X.call(e)});var H,$,J,Q,Z=V.inspectSource,ee=b.WeakMap,ne="function"==typeof ee&&/native code/.test(Z(ee)),te=y((function(e){(e.exports=function(e,n){return V[e]||(V[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.7.0",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),re=0,oe=Math.random(),ie=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++re+oe).toString(36)},ue=te("keys"),ce={},ae=b.WeakMap;if(ne){var fe=V.state||(V.state=new ae),le=fe.get,se=fe.has,de=fe.set;H=function(e,n){return n.facade=e,de.call(fe,e,n),n},$=function(e){return le.call(fe,e)||{}},J=function(e){return se.call(fe,e)}}else{var ve=ue[Q="state"]||(ue[Q]=ie(Q));ce[ve]=!0,H=function(e,n){return n.facade=e,G(e,ve,n),n},$=function(e){return C(e,ve)?e[ve]:{}},J=function(e){return C(e,ve)}}var pe={set:H,get:$,has:J,enforce:function(e){return J(e)?$(e):H(e,{})},getterFor:function(e){return function(n){var t;if(!M(n)||(t=$(n)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return t}}},he=y((function(e){var n=pe.get,t=pe.enforce,r=String(String).split("String");(e.exports=function(e,n,o,i){var u,c=!!i&&!!i.unsafe,a=!!i&&!!i.enumerable,f=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof n||C(o,"name")||G(o,"name",n),(u=t(o)).source||(u.source=r.join("string"==typeof n?n:""))),e!==b?(c?!f&&e[n]&&(a=!0):delete e[n],a?e[n]=o:G(e,n,o)):a?e[n]=o:K(n,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&n(this).source||Z(this)}))})),me=b,ye=function(e){return"function"==typeof e?e:void 0},ge=function(e,n){return arguments.length<2?ye(me[e])||ye(b[e]):me[e]&&me[e][n]||b[e]&&b[e][n]},be=Math.ceil,we=Math.floor,Ee=function(e){return isNaN(e=+e)?0:(e>0?we:be)(e)},je=Math.min,Se=function(e){return e>0?je(Ee(e),9007199254740991):0},Oe=Math.max,Te=Math.min,xe=function(e){return function(n,t,r){var o,i=A(n),u=Se(i.length),c=function(e,n){var t=Ee(e);return t<0?Oe(t+n,0):Te(t,n)}(r,u);if(e&&t!=t){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((e||c in i)&&i[c]===t)return e||c||0;return!e&&-1}},Pe={includes:xe(!0),indexOf:xe(!1)}.indexOf,Le=function(e,n){var t,r=A(e),o=0,i=[];for(t in r)!C(ce,t)&&C(r,t)&&i.push(t);for(;n.length>o;)C(r,t=n[o++])&&(~Pe(i,t)||i.push(t));return i},ke=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Fe=ke.concat("length","prototype"),Ae={f:Object.getOwnPropertyNames||function(e){return Le(e,Fe)}},Me={f:Object.getOwnPropertySymbols},Ie=ge("Reflect","ownKeys")||function(e){var n=Ae.f(U(e)),t=Me.f;return t?n.concat(t(e)):n},qe=function(e,n){for(var t=Ie(n),r=Y.f,o=B.f,i=0;i<t.length;i++){var u=t[i];C(e,u)||r(e,u,o(n,u))}},Ce=/#|\.prototype\./,Re=function(e,n){var t=ze[De(e)];return t==Ne||t!=_e&&("function"==typeof n?w(n):!!n)},De=Re.normalize=function(e){return String(e).replace(Ce,".").toLowerCase()},ze=Re.data={},_e=Re.NATIVE="N",Ne=Re.POLYFILL="P",Be=Re,Ue=B.f,We=function(e,n){var t,r,o,i,u,c=e.target,a=e.global,f=e.stat;if(t=a?b:f?b[c]||K(c,{}):(b[c]||{}).prototype)for(r in n){if(i=n[r],o=e.noTargetGet?(u=Ue(t,r))&&u.value:t[r],!Be(a?r:c+(f?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;qe(i,o)}(e.sham||o&&o.sham)&&G(i,"sham",!0),he(t,r,i,e)}},Ye=ge("navigator","userAgent")||"",Ge=[].slice,Ke=function(e){return function(n,t){var r=arguments.length>2,o=r?Ge.call(arguments,2):void 0;return e(r?function(){("function"==typeof n?n:Function(n)).apply(this,o)}:n,t)}};We({global:!0,bind:!0,forced:/MSIE .\./.test(Ye)},{setTimeout:Ke(b.setTimeout),setInterval:Ke(b.setInterval)});var Ve=function(){},Xe=function(o,i){var u=i.callback,c=void 0===u?Ve:u,f=i.wait,l=void 0===f?5:f,s=i.condition,d=void 0===s||s,v=i.initial,p=void 0!==v&&v,h=n(),m=n(null==d||d),y=a(e(null!=p&&p),2),g=y[0],b=y[1];t((function(){m.current=null==d||d,!m.current&&h.current&&clearTimeout(h.current)}),[d]);var w=r((function(){return!0===m.current&&b(!0)}),[m.current]),E=r((function(){h.current&&clearTimeout(h.current),h.current=setTimeout(w,1e3*(null!=l?l:5)),b(!1)}),[h.current,l,w]);return t((function(){(null!=c?c:Ve)(g)}),[g]),t((function(){var e=null!=o?o:window;if(null==e?void 0:e.addEventListener)return e.addEventListener("mousemove",E),function(){return e.removeEventListener("mousemove",E)}}),[o]),[g,E]},He=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=e({current:n,updated:!0,manual:t}),i=a(o,2),u=i[0],f=i[1],l=r((function(){f((function(e){return c(c({},e),{},{updated:!0})}))}),[]),s=r((function(e){f((function(n){return c(c({},n),{},{current:n.updated||!n.manual?e:n.current,updated:!1})}))}),[]);return[u.current,s,l]},$e=function(e){return Object(F(e))},Je=Object.keys||function(e){return Le(e,ke)};We({target:"Object",stat:!0,forced:w((function(){Je(1)}))},{keys:function(e){return Je($e(e))}});var Qe=!!Object.getOwnPropertySymbols&&!w((function(){return!String(Symbol())})),Ze=Qe&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,en=te("wks"),nn=b.Symbol,tn=Ze?nn:nn&&nn.withoutSetter||ie,rn=function(e){return C(en,e)||(Qe&&C(nn,e)?en[e]=nn[e]:en[e]=tn("Symbol."+e)),en[e]},on={};on[rn("toStringTag")]="z";var un="[object z]"===String(on),cn=rn("toStringTag"),an="Arguments"==P(function(){return arguments}()),fn=un?P:function(e){var n,t,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(t=function(e,n){try{return e[n]}catch(e){}}(n=Object(e),cn))?t:an?P(n):"Object"==(r=P(n))&&"function"==typeof n.callee?"Arguments":r},ln=un?{}.toString:function(){return"[object "+fn(this)+"]"};un||he(Object.prototype,"toString",ln,{unsafe:!0});var sn=b.Promise,dn=Y.f,vn=rn("toStringTag"),pn=rn("species"),hn=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e},mn={},yn=rn("iterator"),gn=Array.prototype,bn=function(e,n,t){if(hn(e),void 0===n)return e;switch(t){case 0:return function(){return e.call(n)};case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,o){return e.call(n,t,r,o)}}return function(){return e.apply(n,arguments)}},wn=rn("iterator"),En=function(e){var n=e.return;if(void 0!==n)return U(n.call(e)).value},jn=function(e,n){this.stopped=e,this.result=n},Sn=function(e,n,t){var r,o,i,u,c,a,f,l,s=t&&t.that,d=!(!t||!t.AS_ENTRIES),v=!(!t||!t.IS_ITERATOR),p=!(!t||!t.INTERRUPTED),h=bn(n,s,1+d+p),m=function(e){return r&&En(r),new jn(!0,e)},y=function(e){return d?(U(e),p?h(e[0],e[1],m):h(e[0],e[1])):p?h(e,m):h(e)};if(v)r=e;else{if("function"!=typeof(o=function(e){if(null!=e)return e[wn]||e["@@iterator"]||mn[fn(e)]}(e)))throw TypeError("Target is not iterable");if(void 0!==(l=o)&&(mn.Array===l||gn[yn]===l)){for(i=0,u=Se(e.length);u>i;i++)if((c=y(e[i]))&&c instanceof jn)return c;return new jn(!1)}r=o.call(e)}for(a=r.next;!(f=a.call(r)).done;){try{c=y(f.value)}catch(e){throw En(r),e}if("object"==typeof c&&c&&c instanceof jn)return c}return new jn(!1)},On=rn("iterator"),Tn=!1;try{var xn=0,Pn={next:function(){return{done:!!xn++}},return:function(){Tn=!0}};Pn[On]=function(){return this},Array.from(Pn,(function(){throw 2}))}catch(e){}var Ln,kn,Fn,An=rn("species"),Mn=ge("document","documentElement"),In=/(iphone|ipod|ipad).*applewebkit/i.test(Ye),qn="process"==P(b.process),Cn=b.location,Rn=b.setImmediate,Dn=b.clearImmediate,zn=b.process,_n=b.MessageChannel,Nn=b.Dispatch,Bn=0,Un={},Wn=function(e){if(Un.hasOwnProperty(e)){var n=Un[e];delete Un[e],n()}},Yn=function(e){return function(){Wn(e)}},Gn=function(e){Wn(e.data)},Kn=function(e){b.postMessage(e+"",Cn.protocol+"//"+Cn.host)};Rn&&Dn||(Rn=function(e){for(var n=[],t=1;arguments.length>t;)n.push(arguments[t++]);return Un[++Bn]=function(){("function"==typeof e?e:Function(e)).apply(void 0,n)},Ln(Bn),Bn},Dn=function(e){delete Un[e]},qn?Ln=function(e){zn.nextTick(Yn(e))}:Nn&&Nn.now?Ln=function(e){Nn.now(Yn(e))}:_n&&!In?(Fn=(kn=new _n).port2,kn.port1.onmessage=Gn,Ln=bn(Fn.postMessage,Fn,1)):b.addEventListener&&"function"==typeof postMessage&&!b.importScripts&&Cn&&"file:"!==Cn.protocol&&!w(Kn)?(Ln=Kn,b.addEventListener("message",Gn,!1)):Ln="onreadystatechange"in z("script")?function(e){Mn.appendChild(z("script")).onreadystatechange=function(){Mn.removeChild(this),Wn(e)}}:function(e){setTimeout(Yn(e),0)});var Vn,Xn,Hn,$n,Jn,Qn,Zn,et,nt={set:Rn,clear:Dn},tt=B.f,rt=nt.set,ot=b.MutationObserver||b.WebKitMutationObserver,it=b.document,ut=b.process,ct=b.Promise,at=tt(b,"queueMicrotask"),ft=at&&at.value;ft||(Vn=function(){var e,n;for(qn&&(e=ut.domain)&&e.exit();Xn;){n=Xn.fn,Xn=Xn.next;try{n()}catch(e){throw Xn?$n():Hn=void 0,e}}Hn=void 0,e&&e.enter()},!In&&!qn&&ot&&it?(Jn=!0,Qn=it.createTextNode(""),new ot(Vn).observe(Qn,{characterData:!0}),$n=function(){Qn.data=Jn=!Jn}):ct&&ct.resolve?(Zn=ct.resolve(void 0),et=Zn.then,$n=function(){et.call(Zn,Vn)}):$n=qn?function(){ut.nextTick(Vn)}:function(){rt.call(b,Vn)});var lt,st,dt=ft||function(e){var n={fn:e,next:void 0};Hn&&(Hn.next=n),Xn||(Xn=n,$n()),Hn=n},vt=function(e){var n,t;this.promise=new e((function(e,r){if(void 0!==n||void 0!==t)throw TypeError("Bad Promise constructor");n=e,t=r})),this.resolve=hn(n),this.reject=hn(t)},pt={f:function(e){return new vt(e)}},ht=function(e,n){if(U(e),M(n)&&n.constructor===e)return n;var t=pt.f(e);return(0,t.resolve)(n),t.promise},mt=function(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}},yt=b.process,gt=yt&&yt.versions,bt=gt&&gt.v8;bt?st=(lt=bt.split("."))[0]+lt[1]:Ye&&(!(lt=Ye.match(/Edge\/(\d+)/))||lt[1]>=74)&&(lt=Ye.match(/Chrome\/(\d+)/))&&(st=lt[1]);var wt,Et,jt,St,Ot,Tt,xt,Pt=st&&+st,Lt=nt.set,kt=rn("species"),Ft="Promise",At=pe.get,Mt=pe.set,It=pe.getterFor(Ft),qt=sn,Ct=b.TypeError,Rt=b.document,Dt=b.process,zt=ge("fetch"),_t=pt.f,Nt=_t,Bt=!!(Rt&&Rt.createEvent&&b.dispatchEvent),Ut="function"==typeof PromiseRejectionEvent,Wt=Be(Ft,(function(){if(!(Z(qt)!==String(qt))){if(66===Pt)return!0;if(!qn&&!Ut)return!0}if(Pt>=51&&/native code/.test(qt))return!1;var e=qt.resolve(1),n=function(e){e((function(){}),(function(){}))};return(e.constructor={})[kt]=n,!(e.then((function(){}))instanceof n)})),Yt=Wt||!function(e,n){if(!n&&!Tn)return!1;var t=!1;try{var r={};r[On]=function(){return{next:function(){return{done:t=!0}}}},e(r)}catch(e){}return t}((function(e){qt.all(e).catch((function(){}))})),Gt=function(e){var n;return!(!M(e)||"function"!=typeof(n=e.then))&&n},Kt=function(e,n){if(!e.notified){e.notified=!0;var t=e.reactions;dt((function(){for(var r=e.value,o=1==e.state,i=0;t.length>i;){var u,c,a,f=t[i++],l=o?f.ok:f.fail,s=f.resolve,d=f.reject,v=f.domain;try{l?(o||(2===e.rejection&&$t(e),e.rejection=1),!0===l?u=r:(v&&v.enter(),u=l(r),v&&(v.exit(),a=!0)),u===f.promise?d(Ct("Promise-chain cycle")):(c=Gt(u))?c.call(u,s,d):s(u)):d(r)}catch(e){v&&!a&&v.exit(),d(e)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&Xt(e)}))}},Vt=function(e,n,t){var r,o;Bt?((r=Rt.createEvent("Event")).promise=n,r.reason=t,r.initEvent(e,!1,!0),b.dispatchEvent(r)):r={promise:n,reason:t},!Ut&&(o=b["on"+e])?o(r):"unhandledrejection"===e&&function(e,n){var t=b.console;t&&t.error&&(1===arguments.length?t.error(e):t.error(e,n))}("Unhandled promise rejection",t)},Xt=function(e){Lt.call(b,(function(){var n,t=e.facade,r=e.value;if(Ht(e)&&(n=mt((function(){qn?Dt.emit("unhandledRejection",r,t):Vt("unhandledrejection",t,r)})),e.rejection=qn||Ht(e)?2:1,n.error))throw n.value}))},Ht=function(e){return 1!==e.rejection&&!e.parent},$t=function(e){Lt.call(b,(function(){var n=e.facade;qn?Dt.emit("rejectionHandled",n):Vt("rejectionhandled",n,e.value)}))},Jt=function(e,n,t){return function(r){e(n,r,t)}},Qt=function(e,n,t){e.done||(e.done=!0,t&&(e=t),e.value=n,e.state=2,Kt(e,!0))},Zt=function(e,n,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===n)throw Ct("Promise can't be resolved itself");var r=Gt(n);r?dt((function(){var t={done:!1};try{r.call(n,Jt(Zt,t,e),Jt(Qt,t,e))}catch(n){Qt(t,n,e)}})):(e.value=n,e.state=1,Kt(e,!1))}catch(n){Qt({done:!1},n,e)}}};Wt&&(qt=function(e){!function(e,n,t){if(!(e instanceof n))throw TypeError("Incorrect "+(t?t+" ":"")+"invocation")}(this,qt,Ft),hn(e),wt.call(this);var n=At(this);try{e(Jt(Zt,n),Jt(Qt,n))}catch(e){Qt(n,e)}},(wt=function(e){Mt(this,{type:Ft,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=function(e,n,t){for(var r in n)he(e,r,n[r],t);return e}(qt.prototype,{then:function(e,n){var t,r,o,i=It(this),u=_t((t=qt,void 0===(o=U(this).constructor)||null==(r=U(o)[An])?t:hn(r)));return u.ok="function"!=typeof e||e,u.fail="function"==typeof n&&n,u.domain=qn?Dt.domain:void 0,i.parent=!0,i.reactions.push(u),0!=i.state&&Kt(i,!1),u.promise},catch:function(e){return this.then(void 0,e)}}),Et=function(){var e=new wt,n=At(e);this.promise=e,this.resolve=Jt(Zt,n),this.reject=Jt(Qt,n)},pt.f=_t=function(e){return e===qt||e===jt?new Et(e):Nt(e)},"function"==typeof sn&&(St=sn.prototype.then,he(sn.prototype,"then",(function(e,n){var t=this;return new qt((function(e,n){St.call(t,e,n)})).then(e,n)}),{unsafe:!0}),"function"==typeof zt&&We({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return ht(qt,zt.apply(b,arguments))}}))),We({global:!0,wrap:!0,forced:Wt},{Promise:qt}),Tt=Ft,xt=!1,(Ot=qt)&&!C(Ot=xt?Ot:Ot.prototype,vn)&&dn(Ot,vn,{configurable:!0,value:Tt}),function(e){var n=ge(e),t=Y.f;E&&n&&!n[pn]&&t(n,pn,{configurable:!0,get:function(){return this}})}(Ft),jt=ge(Ft),We({target:Ft,stat:!0,forced:Wt},{reject:function(e){var n=_t(this);return n.reject.call(void 0,e),n.promise}}),We({target:Ft,stat:!0,forced:Wt},{resolve:function(e){return ht(this,e)}}),We({target:Ft,stat:!0,forced:Yt},{all:function(e){var n=this,t=_t(n),r=t.resolve,o=t.reject,i=mt((function(){var t=hn(n.resolve),i=[],u=0,c=1;Sn(e,(function(e){var a=u++,f=!1;i.push(void 0),c++,t.call(n,e).then((function(e){f||(f=!0,i[a]=e,--c||r(i))}),o)})),--c||r(i)}));return i.error&&o(i.value),t.promise},race:function(e){var n=this,t=_t(n),r=t.reject,o=mt((function(){var o=hn(n.resolve);Sn(e,(function(e){o.call(n,e).then(t.resolve,r)}))}));return o.error&&r(o.value),t.promise}});var er,nr=function(){for(var e,n,t=[{exit:"exitFullscreen",request:"requestFullscreen",element:"fullscreenElement",enabled:"fullscreenEnabled",onchange:"onfullscreenchange",onerror:"onfullscreenerror"},{exit:"webkitExitFullscreen",request:"webkitRequestFullscreen",element:"webkitFullscreenElement",enabled:"webkitFullscreenEnabled",onchange:"webkitfullscreenchange",onerror:"webkitfullscreenerror"},{exit:"webkitCancelFullScreen",request:"webkitRequestFullScreen",element:"webkitCurrentFullScreenElement",enabled:"webkitCancelFullScreen",onchange:"webkitfullscreenchange",onerror:"webkitfullscreenerror"},{exit:"mozCancelFullScreen",request:"mozRequestFullScreen",element:"mozFullScreenElement",enabled:"mozFullScreenEnabled",onchange:"mozfullscreenchange",onerror:"mozfullscreenerror"},{exit:"msExitFullscreen",request:"msRequestFullscreen",element:"msFullscreenElement",enabled:"msFullscreenEnabled",onchange:"MSFullscreenChange",onerror:"MSFullscreenError"}],r=null!==(e=null===(n=window)||void 0===n?void 0:n.document)&&void 0!==e?e:{},o=0;o<t.length;o++){var i=Object.keys(t[o])[0];if(t[o][i]in r)return c({},t[o])}return!1}(),tr=function(e){for(var n=["webkitEnterFullscreen","enterFullscreen"],t=null!=e?e:{},r=0;r<n.length;r++)if(n[r]in t)return{request:n[r]};return!1},rr=function(o){var i=o.onChange,u=void 0===i?function(){}:i,c=o.onError,f=void 0===c?function(){}:c,l=Boolean(nr)&&Boolean(window.document[nr.enabled]),s=a(e(!1),2),d=s[0],v=s[1],p=function(){return nr&&v(null!==window.document[nr.element])},h=n((function(){p(),u()})),m=n((function(){p(),f()}));t((function(){if(nr)return window.document.addEventListener(nr.onchange,h.current),window.document.addEventListener(nr.onerror,m.current),function(){window.document.removeEventListener(nr.onchange,h.current),window.document.removeEventListener(nr.onerror,m.current)}}),[]);var y=r((function(e,n){var t,r,o,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],u=(null!==(t=null==e?void 0:e.current)&&void 0!==t?t:e)||(null===(r=window)||void 0===r||null===(o=r.document)||void 0===o?void 0:o.documentElement);if(!u)return!1;if(!l){var c,a,f=null!==(c=null==n?void 0:n.current)&&void 0!==c?c:n,s=/(iPhone|iPad|iPod)/.test((null===(a=navigator)||void 0===a?void 0:a.platform)||"");return!(!Boolean(f)||"VIDEO"!==f.tagName||!0!==s)&&function(e,n){var t=tr(e);return!!t&&(!!n||void e[t.request]())}(f,i)}if(i)return!0;var d=u[nr.request]();return d instanceof Promise&&d.then(h.current).catch(m.current),d}),[]),g=r((function(){if(!l)return!1;var e=window.document[nr.exit]();return e instanceof Promise&&e.then(h.current).catch(m.current),e}),[]);return{request:y,exit:g,toggle:function(e,n){return d?g():y(e,n)},isActive:d,isSupported:function(e,n){return y(e,n,!0)}}},or=Array.isArray||function(e){return"Array"==P(e)},ir=function(e,n,t){var r=I(n);r in e?Y.f(e,r,T(0,t)):e[r]=t},ur=rn("species"),cr=function(e,n){var t;return or(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!or(t.prototype)?M(t)&&null===(t=t[ur])&&(t=void 0):t=void 0),new(void 0===t?Array:t)(0===n?0:n)},ar=rn("species"),fr=rn("isConcatSpreadable"),lr=Pt>=51||!w((function(){var e=[];return e[fr]=!1,e.concat()[0]!==e})),sr=(er="concat",Pt>=51||!w((function(){var e=[];return(e.constructor={})[ar]=function(){return{foo:1}},1!==e[er](Boolean).foo}))),dr=function(e){if(!M(e))return!1;var n=e[fr];return void 0!==n?!!n:or(e)};We({target:"Array",proto:!0,forced:!lr||!sr},{concat:function(e){var n,t,r,o,i,u=$e(this),c=cr(u,0),a=0;for(n=-1,r=arguments.length;n<r;n++)if(dr(i=-1===n?u:arguments[n])){if(a+(o=Se(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(t=0;t<o;t++,a++)t in i&&ir(c,a,i[t])}else{if(a>=9007199254740991)throw TypeError("Maximum allowed index exceeded");ir(c,a++,i)}return c.length=a,c}});var vr=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],u=r((function(n){return e&&o?o(n,e):{}}),[e].concat(f(i)));t((function(){if(n&&e&&e.addEventListener)return e.addEventListener(n,u),function(){e.removeEventListener(n,u)}}),[e,n,u])},pr=function(e){var n=a(He(null,!1),2),t=n[0],r=n[1];return vr(window,"keydown",(function(n){return n.keyCode===e&&t.click()}),[t,e]),r},hr=function(){var r=n(),o=a(e({}),2),i=o[0],u=o[1],c=function(){var e,n;return u(null!==(e=null==r||null===(n=r.current)||void 0===n?void 0:n.getBoundingClientRect())&&void 0!==e?e:{})};return t((function(){return c(),window.addEventListener("resize",c),function(){return window.removeEventListener("resize",c)}}),[]),[i,r]},mr=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=r((function(e){return n?n(e):{}}),[e].concat(f(o)));t((function(){if(e&&i)return i(e)}),[e,i])},yr=function(e,n,t){return Math.min(Math.max(e,n),t)},gr=function(e){switch(e){case"BTT":return["Y","Top","bottom","height",!1];case"TTB":return["Y","Top","top","height",!0];case"RTL":return["X","Left","right","width",!1];case"LTR":default:return["X","Left","left","width",!0]}},br=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"LTR",i=He(n,!1),u=a(i,2),c=u[0],f=u[1],l=e(!1),s=a(l,2),d=s[0],v=s[1],p=e(t),h=a(p,2),m=h[0],y=h[1],g=r((function(e){var n;if(e&&c){var t=c.getBoundingClientRect(),r=a(gr(o),5),i=r[0],u=r[1],f=r[2],l=r[3],s=r[4],d=t[f],v=t[l];y(yr(0,(s?1:-1)*(null!==(n=e["page".concat(i)]-d+window["page".concat(i,"Offset")])&&void 0!==n?n:(document.documentElement||document.body.parentNode||document.body)["scroll".concat(u)]),v)/v)}}),[c,o]),b=r((function(e){v(!0),g(e)}),[c]),w=r((function(e){v(!1)}),[]);return mr(c,(function(){return c.addEventListener("mousedown",b),c.addEventListener("touchstart",b),d&&(c.addEventListener("mousemove",g),c.addEventListener("touchmove",g),c.addEventListener("mouseup",w),c.addEventListener("touchend",w)),function(){c.removeEventListener("mousedown",b),c.removeEventListener("touchstart",b),d&&(c.removeEventListener("mousemove",g),c.removeEventListener("touchmove",g),c.removeEventListener("mouseup",w),c.removeEventListener("touchend",w))}}),[d,b,g,w]),[m,f]};export{h as useAgentParser,Xe as useAutoIdle,He as useDynamicRef,rr as useFullScreen,pr as useKeyLinkedRef,vr as useListener,hr as useRectRef,mr as useRefEffect,br as useSliderRef};
