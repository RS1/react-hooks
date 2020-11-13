import{useState as e,useRef as n,useEffect as t,useCallback as r,useMemo as o}from"react";import i from"ua-parser-js";function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,o=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(e,n)||s(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,n){if(e){if("string"==typeof e)return d(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(e,n):void 0}}function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var v,p=function(){try{return"ontouchstart"in window||void 0!==window.DocumentTouch&&document instanceof window.DocumentTouch||window.matchMedia("(hover: none)").matches}catch(e){return!1}},h={OS:a({},(v=i()).os),browser:a({},v.browser),agent:v.ua},m=function(){return f(e(a({isTouch:p()},h)),1)[0]},y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function g(e,n,t){return e(t={path:n,exports:{},require:function(e,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&t.path)}},t.exports),t.exports}var w=function(e){return e&&e.Math==Math&&e},b=w("object"==typeof globalThis&&globalThis)||w("object"==typeof window&&window)||w("object"==typeof self&&self)||w("object"==typeof y&&y)||function(){return this}()||Function("return this")(),E=function(e){try{return!!e()}catch(e){return!0}},j=!E((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),O={}.propertyIsEnumerable,S=Object.getOwnPropertyDescriptor,T={f:S&&!O.call({1:2},1)?function(e){var n=S(this,e);return!!n&&n.enumerable}:O},x=function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}},P={}.toString,L=function(e){return P.call(e).slice(8,-1)},A="".split,k=E((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==L(e)?A.call(e,""):Object(e)}:Object,F=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},C=function(e){return k(F(e))},M=function(e){return"object"==typeof e?null!==e:"function"==typeof e},I=function(e,n){if(!M(e))return e;var t,r;if(n&&"function"==typeof(t=e.toString)&&!M(r=t.call(e)))return r;if("function"==typeof(t=e.valueOf)&&!M(r=t.call(e)))return r;if(!n&&"function"==typeof(t=e.toString)&&!M(r=t.call(e)))return r;throw TypeError("Can't convert object to primitive value")},R={}.hasOwnProperty,q=function(e,n){return R.call(e,n)},z=b.document,D=M(z)&&M(z.createElement),N=function(e){return D?z.createElement(e):{}},_=!j&&!E((function(){return 7!=Object.defineProperty(N("div"),"a",{get:function(){return 7}}).a})),B=Object.getOwnPropertyDescriptor,U={f:j?B:function(e,n){if(e=C(e),n=I(n,!0),_)try{return B(e,n)}catch(e){}if(q(e,n))return x(!T.f.call(e,n),e[n])}},W=function(e){if(!M(e))throw TypeError(String(e)+" is not an object");return e},X=Object.defineProperty,Y={f:j?X:function(e,n,t){if(W(e),n=I(n,!0),W(t),_)try{return X(e,n,t)}catch(e){}if("get"in t||"set"in t)throw TypeError("Accessors not supported");return"value"in t&&(e[n]=t.value),e}},G=j?function(e,n,t){return Y.f(e,n,x(1,t))}:function(e,n,t){return e[n]=t,e},K=function(e,n){try{G(b,e,n)}catch(t){b[e]=n}return n},V=b["__core-js_shared__"]||K("__core-js_shared__",{}),H=Function.toString;"function"!=typeof V.inspectSource&&(V.inspectSource=function(e){return H.call(e)});var $,J,Q,Z=V.inspectSource,ee=b.WeakMap,ne="function"==typeof ee&&/native code/.test(Z(ee)),te=g((function(e){(e.exports=function(e,n){return V[e]||(V[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.7.0",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),re=0,oe=Math.random(),ie=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++re+oe).toString(36)},ue=te("keys"),ce=function(e){return ue[e]||(ue[e]=ie(e))},ae={},fe=b.WeakMap;if(ne){var le=V.state||(V.state=new fe),se=le.get,de=le.has,ve=le.set;$=function(e,n){return n.facade=e,ve.call(le,e,n),n},J=function(e){return se.call(le,e)||{}},Q=function(e){return de.call(le,e)}}else{var pe=ce("state");ae[pe]=!0,$=function(e,n){return n.facade=e,G(e,pe,n),n},J=function(e){return q(e,pe)?e[pe]:{}},Q=function(e){return q(e,pe)}}var he={set:$,get:J,has:Q,enforce:function(e){return Q(e)?J(e):$(e,{})},getterFor:function(e){return function(n){var t;if(!M(n)||(t=J(n)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return t}}},me=g((function(e){var n=he.get,t=he.enforce,r=String(String).split("String");(e.exports=function(e,n,o,i){var u,c=!!i&&!!i.unsafe,a=!!i&&!!i.enumerable,f=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof n||q(o,"name")||G(o,"name",n),(u=t(o)).source||(u.source=r.join("string"==typeof n?n:""))),e!==b?(c?!f&&e[n]&&(a=!0):delete e[n],a?e[n]=o:G(e,n,o)):a?e[n]=o:K(n,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&n(this).source||Z(this)}))})),ye=b,ge=function(e){return"function"==typeof e?e:void 0},we=function(e,n){return arguments.length<2?ge(ye[e])||ge(b[e]):ye[e]&&ye[e][n]||b[e]&&b[e][n]},be=Math.ceil,Ee=Math.floor,je=function(e){return isNaN(e=+e)?0:(e>0?Ee:be)(e)},Oe=Math.min,Se=function(e){return e>0?Oe(je(e),9007199254740991):0},Te=Math.max,xe=Math.min,Pe=function(e){return function(n,t,r){var o,i=C(n),u=Se(i.length),c=function(e,n){var t=je(e);return t<0?Te(t+n,0):xe(t,n)}(r,u);if(e&&t!=t){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((e||c in i)&&i[c]===t)return e||c||0;return!e&&-1}},Le={includes:Pe(!0),indexOf:Pe(!1)},Ae=Le.indexOf,ke=function(e,n){var t,r=C(e),o=0,i=[];for(t in r)!q(ae,t)&&q(r,t)&&i.push(t);for(;n.length>o;)q(r,t=n[o++])&&(~Ae(i,t)||i.push(t));return i},Fe=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ce=Fe.concat("length","prototype"),Me={f:Object.getOwnPropertyNames||function(e){return ke(e,Ce)}},Ie={f:Object.getOwnPropertySymbols},Re=we("Reflect","ownKeys")||function(e){var n=Me.f(W(e)),t=Ie.f;return t?n.concat(t(e)):n},qe=function(e,n){for(var t=Re(n),r=Y.f,o=U.f,i=0;i<t.length;i++){var u=t[i];q(e,u)||r(e,u,o(n,u))}},ze=/#|\.prototype\./,De=function(e,n){var t=_e[Ne(e)];return t==Ue||t!=Be&&("function"==typeof n?E(n):!!n)},Ne=De.normalize=function(e){return String(e).replace(ze,".").toLowerCase()},_e=De.data={},Be=De.NATIVE="N",Ue=De.POLYFILL="P",We=De,Xe=U.f,Ye=function(e,n){var t,r,o,i,u,c=e.target,a=e.global,f=e.stat;if(t=a?b:f?b[c]||K(c,{}):(b[c]||{}).prototype)for(r in n){if(i=n[r],o=e.noTargetGet?(u=Xe(t,r))&&u.value:t[r],!We(a?r:c+(f?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;qe(i,o)}(e.sham||o&&o.sham)&&G(i,"sham",!0),me(t,r,i,e)}},Ge=we("navigator","userAgent")||"",Ke=[].slice,Ve=function(e){return function(n,t){var r=arguments.length>2,o=r?Ke.call(arguments,2):void 0;return e(r?function(){("function"==typeof n?n:Function(n)).apply(this,o)}:n,t)}};Ye({global:!0,bind:!0,forced:/MSIE .\./.test(Ge)},{setTimeout:Ve(b.setTimeout),setInterval:Ve(b.setInterval)});var He=function(){},$e=function(o){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=i.callback,c=void 0===u?He:u,a=i.wait,l=void 0===a?5:a,s=i.condition,d=void 0===s||s,v=i.initial,p=void 0!==v&&v,h=n(),m=n(null==d||d),y=e(null!=p&&p),g=f(y,2),w=g[0],b=g[1];t((function(){m.current=null==d||d,!m.current&&h.current&&clearTimeout(h.current)}),[d]);var E=r((function(){return!0===m.current&&b(!0)}),[m.current]),j=r((function(){h.current&&clearTimeout(h.current),h.current=setTimeout(E,1e3*(null!=l?l:5)),b(!1)}),[h.current,l,E]);return t((function(){(null!=c?c:He)(w)}),[w]),t((function(){var e=null!=o?o:window;if(null==e?void 0:e.addEventListener)return e.addEventListener("mousemove",j),function(){return e.removeEventListener("mousemove",j)}}),[o]),[w,j]},Je=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=e({current:n,updated:!0,manual:t}),i=f(o,2),u=i[0],c=i[1],l=r((function(){c((function(e){return a(a({},e),{},{updated:!0})}))}),[]),s=r((function(e){c((function(n){return a(a({},n),{},{current:n.updated||!n.manual?e:n.current,updated:!1})}))}),[]);return[u.current,s,l]},Qe=function(e){return Object(F(e))},Ze=Object.keys||function(e){return ke(e,Fe)};Ye({target:"Object",stat:!0,forced:E((function(){Ze(1)}))},{keys:function(e){return Ze(Qe(e))}});var en=!!Object.getOwnPropertySymbols&&!E((function(){return!String(Symbol())})),nn=en&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,tn=te("wks"),rn=b.Symbol,on=nn?rn:rn&&rn.withoutSetter||ie,un=function(e){return q(tn,e)||(en&&q(rn,e)?tn[e]=rn[e]:tn[e]=on("Symbol."+e)),tn[e]},cn={};cn[un("toStringTag")]="z";var an="[object z]"===String(cn),fn=un("toStringTag"),ln="Arguments"==L(function(){return arguments}()),sn=an?L:function(e){var n,t,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(t=function(e,n){try{return e[n]}catch(e){}}(n=Object(e),fn))?t:ln?L(n):"Object"==(r=L(n))&&"function"==typeof n.callee?"Arguments":r},dn=an?{}.toString:function(){return"[object "+sn(this)+"]"};an||me(Object.prototype,"toString",dn,{unsafe:!0});var vn=b.Promise,pn=Y.f,hn=un("toStringTag"),mn=un("species"),yn=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e},gn={},wn=un("iterator"),bn=Array.prototype,En=function(e,n,t){if(yn(e),void 0===n)return e;switch(t){case 0:return function(){return e.call(n)};case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,o){return e.call(n,t,r,o)}}return function(){return e.apply(n,arguments)}},jn=un("iterator"),On=function(e){var n=e.return;if(void 0!==n)return W(n.call(e)).value},Sn=function(e,n){this.stopped=e,this.result=n},Tn=function(e,n,t){var r,o,i,u,c,a,f,l,s=t&&t.that,d=!(!t||!t.AS_ENTRIES),v=!(!t||!t.IS_ITERATOR),p=!(!t||!t.INTERRUPTED),h=En(n,s,1+d+p),m=function(e){return r&&On(r),new Sn(!0,e)},y=function(e){return d?(W(e),p?h(e[0],e[1],m):h(e[0],e[1])):p?h(e,m):h(e)};if(v)r=e;else{if("function"!=typeof(o=function(e){if(null!=e)return e[jn]||e["@@iterator"]||gn[sn(e)]}(e)))throw TypeError("Target is not iterable");if(void 0!==(l=o)&&(gn.Array===l||bn[wn]===l)){for(i=0,u=Se(e.length);u>i;i++)if((c=y(e[i]))&&c instanceof Sn)return c;return new Sn(!1)}r=o.call(e)}for(a=r.next;!(f=a.call(r)).done;){try{c=y(f.value)}catch(e){throw On(r),e}if("object"==typeof c&&c&&c instanceof Sn)return c}return new Sn(!1)},xn=un("iterator"),Pn=!1;try{var Ln=0,An={next:function(){return{done:!!Ln++}},return:function(){Pn=!0}};An[xn]=function(){return this},Array.from(An,(function(){throw 2}))}catch(e){}var kn,Fn,Cn,Mn=un("species"),In=we("document","documentElement"),Rn=/(iphone|ipod|ipad).*applewebkit/i.test(Ge),qn="process"==L(b.process),zn=b.location,Dn=b.setImmediate,Nn=b.clearImmediate,_n=b.process,Bn=b.MessageChannel,Un=b.Dispatch,Wn=0,Xn={},Yn=function(e){if(Xn.hasOwnProperty(e)){var n=Xn[e];delete Xn[e],n()}},Gn=function(e){return function(){Yn(e)}},Kn=function(e){Yn(e.data)},Vn=function(e){b.postMessage(e+"",zn.protocol+"//"+zn.host)};Dn&&Nn||(Dn=function(e){for(var n=[],t=1;arguments.length>t;)n.push(arguments[t++]);return Xn[++Wn]=function(){("function"==typeof e?e:Function(e)).apply(void 0,n)},kn(Wn),Wn},Nn=function(e){delete Xn[e]},qn?kn=function(e){_n.nextTick(Gn(e))}:Un&&Un.now?kn=function(e){Un.now(Gn(e))}:Bn&&!Rn?(Cn=(Fn=new Bn).port2,Fn.port1.onmessage=Kn,kn=En(Cn.postMessage,Cn,1)):b.addEventListener&&"function"==typeof postMessage&&!b.importScripts&&zn&&"file:"!==zn.protocol&&!E(Vn)?(kn=Vn,b.addEventListener("message",Kn,!1)):kn="onreadystatechange"in N("script")?function(e){In.appendChild(N("script")).onreadystatechange=function(){In.removeChild(this),Yn(e)}}:function(e){setTimeout(Gn(e),0)});var Hn,$n,Jn,Qn,Zn,et,nt,tt,rt={set:Dn,clear:Nn},ot=U.f,it=rt.set,ut=b.MutationObserver||b.WebKitMutationObserver,ct=b.document,at=b.process,ft=b.Promise,lt=ot(b,"queueMicrotask"),st=lt&&lt.value;st||(Hn=function(){var e,n;for(qn&&(e=at.domain)&&e.exit();$n;){n=$n.fn,$n=$n.next;try{n()}catch(e){throw $n?Qn():Jn=void 0,e}}Jn=void 0,e&&e.enter()},!Rn&&!qn&&ut&&ct?(Zn=!0,et=ct.createTextNode(""),new ut(Hn).observe(et,{characterData:!0}),Qn=function(){et.data=Zn=!Zn}):ft&&ft.resolve?(nt=ft.resolve(void 0),tt=nt.then,Qn=function(){tt.call(nt,Hn)}):Qn=qn?function(){at.nextTick(Hn)}:function(){it.call(b,Hn)});var dt,vt,pt=st||function(e){var n={fn:e,next:void 0};Jn&&(Jn.next=n),$n||($n=n,Qn()),Jn=n},ht=function(e){var n,t;this.promise=new e((function(e,r){if(void 0!==n||void 0!==t)throw TypeError("Bad Promise constructor");n=e,t=r})),this.resolve=yn(n),this.reject=yn(t)},mt={f:function(e){return new ht(e)}},yt=function(e,n){if(W(e),M(n)&&n.constructor===e)return n;var t=mt.f(e);return(0,t.resolve)(n),t.promise},gt=function(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}},wt=b.process,bt=wt&&wt.versions,Et=bt&&bt.v8;Et?vt=(dt=Et.split("."))[0]+dt[1]:Ge&&(!(dt=Ge.match(/Edge\/(\d+)/))||dt[1]>=74)&&(dt=Ge.match(/Chrome\/(\d+)/))&&(vt=dt[1]);var jt,Ot,St,Tt,xt,Pt,Lt,At=vt&&+vt,kt=rt.set,Ft=un("species"),Ct="Promise",Mt=he.get,It=he.set,Rt=he.getterFor(Ct),qt=vn,zt=b.TypeError,Dt=b.document,Nt=b.process,_t=we("fetch"),Bt=mt.f,Ut=Bt,Wt=!!(Dt&&Dt.createEvent&&b.dispatchEvent),Xt="function"==typeof PromiseRejectionEvent,Yt=We(Ct,(function(){if(!(Z(qt)!==String(qt))){if(66===At)return!0;if(!qn&&!Xt)return!0}if(At>=51&&/native code/.test(qt))return!1;var e=qt.resolve(1),n=function(e){e((function(){}),(function(){}))};return(e.constructor={})[Ft]=n,!(e.then((function(){}))instanceof n)})),Gt=Yt||!function(e,n){if(!n&&!Pn)return!1;var t=!1;try{var r={};r[xn]=function(){return{next:function(){return{done:t=!0}}}},e(r)}catch(e){}return t}((function(e){qt.all(e).catch((function(){}))})),Kt=function(e){var n;return!(!M(e)||"function"!=typeof(n=e.then))&&n},Vt=function(e,n){if(!e.notified){e.notified=!0;var t=e.reactions;pt((function(){for(var r=e.value,o=1==e.state,i=0;t.length>i;){var u,c,a,f=t[i++],l=o?f.ok:f.fail,s=f.resolve,d=f.reject,v=f.domain;try{l?(o||(2===e.rejection&&Qt(e),e.rejection=1),!0===l?u=r:(v&&v.enter(),u=l(r),v&&(v.exit(),a=!0)),u===f.promise?d(zt("Promise-chain cycle")):(c=Kt(u))?c.call(u,s,d):s(u)):d(r)}catch(e){v&&!a&&v.exit(),d(e)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&$t(e)}))}},Ht=function(e,n,t){var r,o;Wt?((r=Dt.createEvent("Event")).promise=n,r.reason=t,r.initEvent(e,!1,!0),b.dispatchEvent(r)):r={promise:n,reason:t},!Xt&&(o=b["on"+e])?o(r):"unhandledrejection"===e&&function(e,n){var t=b.console;t&&t.error&&(1===arguments.length?t.error(e):t.error(e,n))}("Unhandled promise rejection",t)},$t=function(e){kt.call(b,(function(){var n,t=e.facade,r=e.value;if(Jt(e)&&(n=gt((function(){qn?Nt.emit("unhandledRejection",r,t):Ht("unhandledrejection",t,r)})),e.rejection=qn||Jt(e)?2:1,n.error))throw n.value}))},Jt=function(e){return 1!==e.rejection&&!e.parent},Qt=function(e){kt.call(b,(function(){var n=e.facade;qn?Nt.emit("rejectionHandled",n):Ht("rejectionhandled",n,e.value)}))},Zt=function(e,n,t){return function(r){e(n,r,t)}},er=function(e,n,t){e.done||(e.done=!0,t&&(e=t),e.value=n,e.state=2,Vt(e,!0))},nr=function(e,n,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===n)throw zt("Promise can't be resolved itself");var r=Kt(n);r?pt((function(){var t={done:!1};try{r.call(n,Zt(nr,t,e),Zt(er,t,e))}catch(n){er(t,n,e)}})):(e.value=n,e.state=1,Vt(e,!1))}catch(n){er({done:!1},n,e)}}};Yt&&(qt=function(e){!function(e,n,t){if(!(e instanceof n))throw TypeError("Incorrect "+(t?t+" ":"")+"invocation")}(this,qt,Ct),yn(e),jt.call(this);var n=Mt(this);try{e(Zt(nr,n),Zt(er,n))}catch(e){er(n,e)}},(jt=function(e){It(this,{type:Ct,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=function(e,n,t){for(var r in n)me(e,r,n[r],t);return e}(qt.prototype,{then:function(e,n){var t,r,o,i=Rt(this),u=Bt((t=qt,void 0===(o=W(this).constructor)||null==(r=W(o)[Mn])?t:yn(r)));return u.ok="function"!=typeof e||e,u.fail="function"==typeof n&&n,u.domain=qn?Nt.domain:void 0,i.parent=!0,i.reactions.push(u),0!=i.state&&Vt(i,!1),u.promise},catch:function(e){return this.then(void 0,e)}}),Ot=function(){var e=new jt,n=Mt(e);this.promise=e,this.resolve=Zt(nr,n),this.reject=Zt(er,n)},mt.f=Bt=function(e){return e===qt||e===St?new Ot(e):Ut(e)},"function"==typeof vn&&(Tt=vn.prototype.then,me(vn.prototype,"then",(function(e,n){var t=this;return new qt((function(e,n){Tt.call(t,e,n)})).then(e,n)}),{unsafe:!0}),"function"==typeof _t&&Ye({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return yt(qt,_t.apply(b,arguments))}}))),Ye({global:!0,wrap:!0,forced:Yt},{Promise:qt}),Pt=Ct,Lt=!1,(xt=qt)&&!q(xt=Lt?xt:xt.prototype,hn)&&pn(xt,hn,{configurable:!0,value:Pt}),function(e){var n=we(e),t=Y.f;j&&n&&!n[mn]&&t(n,mn,{configurable:!0,get:function(){return this}})}(Ct),St=we(Ct),Ye({target:Ct,stat:!0,forced:Yt},{reject:function(e){var n=Bt(this);return n.reject.call(void 0,e),n.promise}}),Ye({target:Ct,stat:!0,forced:Yt},{resolve:function(e){return yt(this,e)}}),Ye({target:Ct,stat:!0,forced:Gt},{all:function(e){var n=this,t=Bt(n),r=t.resolve,o=t.reject,i=gt((function(){var t=yn(n.resolve),i=[],u=0,c=1;Tn(e,(function(e){var a=u++,f=!1;i.push(void 0),c++,t.call(n,e).then((function(e){f||(f=!0,i[a]=e,--c||r(i))}),o)})),--c||r(i)}));return i.error&&o(i.value),t.promise},race:function(e){var n=this,t=Bt(n),r=t.reject,o=gt((function(){var o=yn(n.resolve);Tn(e,(function(e){o.call(n,e).then(t.resolve,r)}))}));return o.error&&r(o.value),t.promise}});var tr,rr=function(){for(var e,n,t=[{exit:"exitFullscreen",request:"requestFullscreen",element:"fullscreenElement",enabled:"fullscreenEnabled",onchange:"onfullscreenchange",onerror:"onfullscreenerror"},{exit:"webkitExitFullscreen",request:"webkitRequestFullscreen",element:"webkitFullscreenElement",enabled:"webkitFullscreenEnabled",onchange:"webkitfullscreenchange",onerror:"webkitfullscreenerror"},{exit:"webkitCancelFullScreen",request:"webkitRequestFullScreen",element:"webkitCurrentFullScreenElement",enabled:"webkitCancelFullScreen",onchange:"webkitfullscreenchange",onerror:"webkitfullscreenerror"},{exit:"mozCancelFullScreen",request:"mozRequestFullScreen",element:"mozFullScreenElement",enabled:"mozFullScreenEnabled",onchange:"mozfullscreenchange",onerror:"mozfullscreenerror"},{exit:"msExitFullscreen",request:"msRequestFullscreen",element:"msFullscreenElement",enabled:"msFullscreenEnabled",onchange:"MSFullscreenChange",onerror:"MSFullscreenError"}],r=null!==(e=null===(n=window)||void 0===n?void 0:n.document)&&void 0!==e?e:{},o=0;o<t.length;o++){var i=Object.keys(t[o])[0];if(t[o][i]in r)return a({},t[o])}return!1}(),or=function(e){for(var n=["webkitEnterFullscreen","enterFullscreen"],t=null!=e?e:{},r=0;r<n.length;r++)if(n[r]in t)return{request:n[r]};return!1},ir=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=o.onChange,u=void 0===i?function(){}:i,c=o.onError,a=void 0===c?function(){}:c,l=Boolean(rr)&&Boolean(window.document[rr.enabled]),s=e(!1),d=f(s,2),v=d[0],p=d[1],h=function(){return(null==rr?void 0:rr.element)&&p(null!==window.document[rr.element])},m=n((function(){h(),u()})),y=n((function(){h(),a()}));t((function(){h()}),(null==rr?void 0:rr.element)?[window.document[rr.element]]:[]),t((function(){if(rr)return window.document.addEventListener(rr.onchange,m.current),window.document.addEventListener(rr.onerror,y.current),function(){window.document.removeEventListener(rr.onchange,m.current),window.document.removeEventListener(rr.onerror,y.current)}}),[]);var g=r((function(e,n){var t,r,o,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],u=(null!==(t=null==e?void 0:e.current)&&void 0!==t?t:e)||(null===(r=window)||void 0===r||null===(o=r.document)||void 0===o?void 0:o.documentElement);if(!u)return!1;if(!l){var c,a,f=null!==(c=null==n?void 0:n.current)&&void 0!==c?c:n,s=/(iPhone|iPad|iPod)/.test((null===(a=navigator)||void 0===a?void 0:a.platform)||"");return!(!Boolean(f)||"VIDEO"!==f.tagName||!0!==s)&&function(e,n){var t=or(e);return!!t&&(!!n||void e[t.request]())}(f,i)}if(i)return!0;var d=u[rr.request]();return d instanceof Promise&&d.then(m.current).catch(y.current),d}),[]),w=r((function(){if(!l)return!1;var e=window.document[rr.exit]();return e instanceof Promise&&e.then(m.current).catch(y.current),e}),[]);return{request:g,exit:w,toggle:function(e,n){return v?w():g(e,n)},isActive:v,isSupported:function(e,n){return g(e,n,!0)}}},ur=Array.isArray||function(e){return"Array"==L(e)},cr=function(e,n,t){var r=I(n);r in e?Y.f(e,r,x(0,t)):e[r]=t},ar=un("species"),fr=function(e,n){var t;return ur(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!ur(t.prototype)?M(t)&&null===(t=t[ar])&&(t=void 0):t=void 0),new(void 0===t?Array:t)(0===n?0:n)},lr=un("species"),sr=un("isConcatSpreadable"),dr=At>=51||!E((function(){var e=[];return e[sr]=!1,e.concat()[0]!==e})),vr=(tr="concat",At>=51||!E((function(){var e=[];return(e.constructor={})[lr]=function(){return{foo:1}},1!==e[tr](Boolean).foo}))),pr=function(e){if(!M(e))return!1;var n=e[sr];return void 0!==n?!!n:ur(e)};Ye({target:"Array",proto:!0,forced:!dr||!vr},{concat:function(e){var n,t,r,o,i,u=Qe(this),c=fr(u,0),a=0;for(n=-1,r=arguments.length;n<r;n++)if(pr(i=-1===n?u:arguments[n])){if(a+(o=Se(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(t=0;t<o;t++,a++)t in i&&cr(c,a,i[t])}else{if(a>=9007199254740991)throw TypeError("Maximum allowed index exceeded");cr(c,a++,i)}return c.length=a,c}});var hr,mr=j?Object.defineProperties:function(e,n){W(e);for(var t,r=Ze(n),o=r.length,i=0;o>i;)Y.f(e,t=r[i++],n[t]);return e},yr=ce("IE_PROTO"),gr=function(){},wr=function(e){return"<script>"+e+"<\/script>"},br=function(){try{hr=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,n;br=hr?function(e){e.write(wr("")),e.close();var n=e.parentWindow.Object;return e=null,n}(hr):((n=N("iframe")).style.display="none",In.appendChild(n),n.src=String("javascript:"),(e=n.contentWindow.document).open(),e.write(wr("document.F=Object")),e.close(),e.F);for(var t=Fe.length;t--;)delete br.prototype[Fe[t]];return br()};ae[yr]=!0;var Er=Object.create||function(e,n){var t;return null!==e?(gr.prototype=W(e),t=new gr,gr.prototype=null,t[yr]=e):t=br(),void 0===n?t:mr(t,n)},jr=un("unscopables"),Or=Array.prototype;null==Or[jr]&&Y.f(Or,jr,{configurable:!0,value:Er(null)});var Sr,Tr=Object.defineProperty,xr={},Pr=function(e){throw e},Lr=function(e,n){if(q(xr,e))return xr[e];n||(n={});var t=[][e],r=!!q(n,"ACCESSORS")&&n.ACCESSORS,o=q(n,0)?n[0]:Pr,i=q(n,1)?n[1]:void 0;return xr[e]=!!t&&!E((function(){if(r&&!j)return!0;var e={length:-1};r?Tr(e,1,{enumerable:!0,get:Pr}):e[1]=1,t.call(e,o,i)}))},Ar=Le.includes;Ye({target:"Array",proto:!0,forced:!Lr("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return Ar(this,e,arguments.length>1?arguments[1]:void 0)}}),Sr="includes",Or[jr][Sr]=!0;var kr=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];t((function(){if(e){var t=function(t){return t&&(o||!["INPUT","SELECT","BUTTON","TEXTAREA"].includes(t.target.nodeName))&&t.keyCode===e&&n()};return window.addEventListener("keydown",t),function(){return window.removeEventListener("keydown",t)}}}),[e].concat(l(r)))},Fr=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],u=r((function(n){return e&&o?o(n,e):{}}),[e].concat(l(i)));t((function(){if(n&&e&&e.addEventListener)return e.addEventListener(n,u),function(){e.removeEventListener(n,u)}}),[e,n,u])},Cr=function(e){var n=f(Je(null,!1),2),t=n[0],r=n[1];return Fr(window,"keydown",(function(n){return n.keyCode===e&&t.click()}),[t,e]),r};Ye({target:"Array",stat:!0},{isArray:ur});var Mr=function(e){return function(n,t,r,o){yn(t);var i=Qe(n),u=k(i),c=Se(i.length),a=e?c-1:0,f=e?-1:1;if(r<2)for(;;){if(a in u){o=u[a],a+=f;break}if(a+=f,e?a<0:c<=a)throw TypeError("Reduce of empty array with no initial value")}for(;e?a>=0:c>a;a+=f)a in u&&(o=t(o,u[a],a,i));return o}},Ir=function(e,n){var t=[][e];return!!t&&E((function(){t.call(null,n||function(){throw 1},1)}))},Rr={left:Mr(!1),right:Mr(!0)}.left,qr=Ir("reduce"),zr=Lr("reduce",{1:0});Ye({target:"Array",proto:!0,forced:!qr||!zr||!qn&&At>79&&At<83},{reduce:function(e){return Rr(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}});var Dr=[].push,Nr=function(e){var n=1==e,t=2==e,r=3==e,o=4==e,i=6==e,u=5==e||i;return function(c,a,f,l){for(var s,d,v=Qe(c),p=k(v),h=En(a,f,3),m=Se(p.length),y=0,g=l||fr,w=n?g(c,m):t?g(c,0):void 0;m>y;y++)if((u||y in p)&&(d=h(s=p[y],y,v),e))if(n)w[y]=d;else if(d)switch(e){case 3:return!0;case 5:return s;case 6:return y;case 2:Dr.call(w,s)}else if(o)return!1;return i?-1:r||o?o:w}},_r={forEach:Nr(0),map:Nr(1),filter:Nr(2),some:Nr(3),every:Nr(4),find:Nr(5),findIndex:Nr(6)}.some,Br=Ir("some"),Ur=Lr("some");Ye({target:"Array",proto:!0,forced:!Br||!Ur},{some:function(e){return _r(this,e,arguments.length>1?arguments[1]:void 0)}});var Wr=T.f,Xr=function(e){return function(n){for(var t,r=C(n),o=Ze(r),i=o.length,u=0,c=[];i>u;)t=o[u++],j&&!Wr.call(r,t)||c.push(e?[t,r[t]]:r[t]);return c}},Yr={entries:Xr(!0),values:Xr(!1)},Gr=Yr.entries;Ye({target:"Object",stat:!0},{entries:function(e){return Gr(e)}});var Kr=Yr.values;Ye({target:"Object",stat:!0},{values:function(e){return Kr(e)}});var Vr=function(e){return Object.entries(e).reduce((function(e,n,t,r){var o=f(n,2),i=o[0],c=o[1];return a(a({},e),{},u({},i,window.matchMedia("(min-width: ".concat(c,"px)").concat(t?" and (max-width: ".concat(0|--r[--t][1],"px)"):"")).matches))}),{})},Hr=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[1920,1024,768,414],r=o((function(){return a({},n)}),[n]),i=e(Vr(r)),u=f(i,2),c=u[0],s=u[1];t((function(){var e=function(){return s(Vr(r))};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[r]);var d=Object.values(c),v=!d.some((function(e){return e}));return Array.isArray(n)?[].concat(l(d),[v]):a(a({},c),{},{none:v})},$r=function(){var r=n(),o=f(e({}),2),i=o[0],u=o[1],c=function(){var e,n;return u(null!==(e=null==r||null===(n=r.current)||void 0===n?void 0:n.getBoundingClientRect())&&void 0!==e?e:{})};return t((function(){return c(),window.addEventListener("resize",c),function(){return window.removeEventListener("resize",c)}}),[]),[i,r]},Jr=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=r((function(e){return n?n(e):{}}),[e].concat(l(o)));t((function(){if(e&&i)return i(e)}),[e,i])},Qr=function(e,n,t){return Math.min(Math.max(e,n),t)},Zr=function(e){switch(e){case"BTT":return["Y","Top","bottom","height",!1];case"TTB":return["Y","Top","top","height",!0];case"RTL":return["X","Left","right","width",!1];case"LTR":default:return["X","Left","left","width",!0]}},eo=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"LTR",i=Je(n,!1),u=f(i,2),c=u[0],a=u[1],l=e(!1),s=f(l,2),d=s[0],v=s[1],p=e(t),h=f(p,2),m=h[0],y=h[1],g=r((function(e){var n;if(e&&c){var t=c.getBoundingClientRect(),r=f(Zr(o),5),i=r[0],u=r[1],a=r[2],l=r[3],s=r[4],d=t[a],v=t[l];y(Qr(0,(s?1:-1)*(null!==(n=e["page".concat(i)]-d+window["page".concat(i,"Offset")])&&void 0!==n?n:(document.documentElement||document.body.parentNode||document.body)["scroll".concat(u)]),v)/v)}}),[c,o]),w=r((function(e){v(!0),g(e)}),[c]),b=r((function(e){v(!1)}),[]);return Jr(c,(function(){return c.addEventListener("mousedown",w),c.addEventListener("touchstart",w),d&&(c.addEventListener("mousemove",g),c.addEventListener("touchmove",g),c.addEventListener("mouseup",b),c.addEventListener("touchend",b)),function(){c.removeEventListener("mousedown",w),c.removeEventListener("touchstart",w),d&&(c.removeEventListener("mousemove",g),c.removeEventListener("touchmove",g),c.removeEventListener("mouseup",b),c.removeEventListener("touchend",b))}}),[d,w,g,b]),[m,a]};export{m as useAgentParser,$e as useAutoIdle,Je as useDynamicRef,ir as useFullScreen,kr as useKeyAction,Cr as useKeyLinkedRef,Fr as useListener,Hr as useMediaQuery,$r as useRectRef,Jr as useRefEffect,eo as useSliderRef};
