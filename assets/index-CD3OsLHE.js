(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var p0={exports:{}},cu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sy=Symbol.for("react.transitional.element"),yy=Symbol.for("react.fragment");function m0(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:Sy,type:e,key:i,ref:t!==void 0?t:null,props:n}}cu.Fragment=yy;cu.jsx=m0;cu.jsxs=m0;p0.exports=cu;var w=p0.exports,g0={exports:{}},Bt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yh=Symbol.for("react.transitional.element"),My=Symbol.for("react.portal"),Ey=Symbol.for("react.fragment"),by=Symbol.for("react.strict_mode"),Ty=Symbol.for("react.profiler"),Ay=Symbol.for("react.consumer"),Ry=Symbol.for("react.context"),Cy=Symbol.for("react.forward_ref"),wy=Symbol.for("react.suspense"),Dy=Symbol.for("react.memo"),_0=Symbol.for("react.lazy"),Ny=Symbol.for("react.activity"),Tm=Symbol.iterator;function Uy(e){return e===null||typeof e!="object"?null:(e=Tm&&e[Tm]||e["@@iterator"],typeof e=="function"?e:null)}var v0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x0=Object.assign,S0={};function Lr(e,t,n){this.props=e,this.context=t,this.refs=S0,this.updater=n||v0}Lr.prototype.isReactComponent={};Lr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Lr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function y0(){}y0.prototype=Lr.prototype;function Zh(e,t,n){this.props=e,this.context=t,this.refs=S0,this.updater=n||v0}var Kh=Zh.prototype=new y0;Kh.constructor=Zh;x0(Kh,Lr.prototype);Kh.isPureReactComponent=!0;var Am=Array.isArray;function id(){}var Re={H:null,A:null,T:null,S:null},M0=Object.prototype.hasOwnProperty;function Qh(e,t,n){var i=n.ref;return{$$typeof:Yh,type:e,key:t,ref:i!==void 0?i:null,props:n}}function Ly(e,t){return Qh(e.type,t,e.props)}function Jh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yh}function Oy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Rm=/\/+/g;function Pu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Oy(""+e.key):t.toString(36)}function Py(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(id,id):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function qs(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Yh:case My:r=!0;break;case _0:return r=e._init,qs(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+Pu(e,0):i,Am(a)?(n="",r!=null&&(n=r.replace(Rm,"$&/")+"/"),qs(a,t,n,"",function(c){return c})):a!=null&&(Jh(a)&&(a=Ly(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(Rm,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(Am(e))for(var l=0;l<e.length;l++)i=e[l],s=o+Pu(i,l),r+=qs(i,t,n,s,a);else if(l=Uy(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+Pu(i,l++),r+=qs(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return qs(Py(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function ul(e,t,n){if(e==null)return e;var i=[],a=0;return qs(e,i,"","",function(s){return t.call(n,s,a++)}),i}function Iy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Cm=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},By={map:ul,forEach:function(e,t,n){ul(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ul(e,function(){t++}),t},toArray:function(e){return ul(e,function(t){return t})||[]},only:function(e){if(!Jh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Bt.Activity=Ny;Bt.Children=By;Bt.Component=Lr;Bt.Fragment=Ey;Bt.Profiler=Ty;Bt.PureComponent=Zh;Bt.StrictMode=by;Bt.Suspense=wy;Bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Re;Bt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Re.H.useMemoCache(e)}};Bt.cache=function(e){return function(){return e.apply(null,arguments)}};Bt.cacheSignal=function(){return null};Bt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=x0({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!M0.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return Qh(e.type,a,i)};Bt.createContext=function(e){return e={$$typeof:Ry,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Ay,_context:e},e};Bt.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)M0.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Qh(e,s,a)};Bt.createRef=function(){return{current:null}};Bt.forwardRef=function(e){return{$$typeof:Cy,render:e}};Bt.isValidElement=Jh;Bt.lazy=function(e){return{$$typeof:_0,_payload:{_status:-1,_result:e},_init:Iy}};Bt.memo=function(e,t){return{$$typeof:Dy,type:e,compare:t===void 0?null:t}};Bt.startTransition=function(e){var t=Re.T,n={};Re.T=n;try{var i=e(),a=Re.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(id,Cm)}catch(s){Cm(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),Re.T=t}};Bt.unstable_useCacheRefresh=function(){return Re.H.useCacheRefresh()};Bt.use=function(e){return Re.H.use(e)};Bt.useActionState=function(e,t,n){return Re.H.useActionState(e,t,n)};Bt.useCallback=function(e,t){return Re.H.useCallback(e,t)};Bt.useContext=function(e){return Re.H.useContext(e)};Bt.useDebugValue=function(){};Bt.useDeferredValue=function(e,t){return Re.H.useDeferredValue(e,t)};Bt.useEffect=function(e,t){return Re.H.useEffect(e,t)};Bt.useEffectEvent=function(e){return Re.H.useEffectEvent(e)};Bt.useId=function(){return Re.H.useId()};Bt.useImperativeHandle=function(e,t,n){return Re.H.useImperativeHandle(e,t,n)};Bt.useInsertionEffect=function(e,t){return Re.H.useInsertionEffect(e,t)};Bt.useLayoutEffect=function(e,t){return Re.H.useLayoutEffect(e,t)};Bt.useMemo=function(e,t){return Re.H.useMemo(e,t)};Bt.useOptimistic=function(e,t){return Re.H.useOptimistic(e,t)};Bt.useReducer=function(e,t,n){return Re.H.useReducer(e,t,n)};Bt.useRef=function(e){return Re.H.useRef(e)};Bt.useState=function(e){return Re.H.useState(e)};Bt.useSyncExternalStore=function(e,t,n){return Re.H.useSyncExternalStore(e,t,n)};Bt.useTransition=function(){return Re.H.useTransition()};Bt.version="19.2.7";g0.exports=Bt;var st=g0.exports,E0={exports:{}},uu={},b0={exports:{}},T0={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(U,I){var W=U.length;U.push(I);t:for(;0<W;){var Q=W-1>>>1,at=U[Q];if(0<a(at,I))U[Q]=I,U[W]=at,W=Q;else break t}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var I=U[0],W=U.pop();if(W!==I){U[0]=W;t:for(var Q=0,at=U.length,xt=at>>>1;Q<xt;){var yt=2*(Q+1)-1,Gt=U[yt],jt=yt+1,wt=U[jt];if(0>a(Gt,W))jt<at&&0>a(wt,Gt)?(U[Q]=wt,U[jt]=W,Q=jt):(U[Q]=Gt,U[yt]=W,Q=yt);else if(jt<at&&0>a(wt,W))U[Q]=wt,U[jt]=W,Q=jt;else break t}}return I}function a(U,I){var W=U.sortIndex-I.sortIndex;return W!==0?W:U.id-I.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var l=[],c=[],d=1,h=null,u=3,p=!1,v=!1,M=!1,g=!1,f=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function x(U){for(var I=n(c);I!==null;){if(I.callback===null)i(c);else if(I.startTime<=U)i(c),I.sortIndex=I.expirationTime,t(l,I);else break;I=n(c)}}function C(U){if(M=!1,x(U),!v)if(n(l)!==null)v=!0,b||(b=!0,G());else{var I=n(c);I!==null&&B(C,I.startTime-U)}}var b=!1,R=-1,S=5,A=-1;function D(){return g?!0:!(e.unstable_now()-A<S)}function N(){if(g=!1,b){var U=e.unstable_now();A=U;var I=!0;try{t:{v=!1,M&&(M=!1,m(R),R=-1),p=!0;var W=u;try{e:{for(x(U),h=n(l);h!==null&&!(h.expirationTime>U&&D());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,u=h.priorityLevel;var at=Q(h.expirationTime<=U);if(U=e.unstable_now(),typeof at=="function"){h.callback=at,x(U),I=!0;break e}h===n(l)&&i(l),x(U)}else i(l);h=n(l)}if(h!==null)I=!0;else{var xt=n(c);xt!==null&&B(C,xt.startTime-U),I=!1}}break t}finally{h=null,u=W,p=!1}I=void 0}}finally{I?G():b=!1}}}var G;if(typeof _=="function")G=function(){_(N)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,Y=q.port2;q.port1.onmessage=N,G=function(){Y.postMessage(null)}}else G=function(){f(N,0)};function B(U,I){R=f(function(){U(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_next=function(U){switch(u){case 1:case 2:case 3:var I=3;break;default:I=u}var W=u;u=I;try{return U()}finally{u=W}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(U,I){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var W=u;u=U;try{return I()}finally{u=W}},e.unstable_scheduleCallback=function(U,I,W){var Q=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?Q+W:Q):W=Q,U){case 1:var at=-1;break;case 2:at=250;break;case 5:at=1073741823;break;case 4:at=1e4;break;default:at=5e3}return at=W+at,U={id:d++,callback:I,priorityLevel:U,startTime:W,expirationTime:at,sortIndex:-1},W>Q?(U.sortIndex=W,t(c,U),n(l)===null&&U===n(c)&&(M?(m(R),R=-1):M=!0,B(C,W-Q))):(U.sortIndex=at,t(l,U),v||p||(v=!0,b||(b=!0,G()))),U},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(U){var I=u;return function(){var W=u;u=I;try{return U.apply(this,arguments)}finally{u=W}}}})(T0);b0.exports=T0;var Fy=b0.exports,A0={exports:{}},_n={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zy=st;function R0(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function da(){}var mn={d:{f:da,r:function(){throw Error(R0(522))},D:da,C:da,L:da,m:da,X:da,S:da,M:da},p:0,findDOMNode:null},Hy=Symbol.for("react.portal");function Gy(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hy,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var po=zy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function fu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}_n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=mn;_n.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(R0(299));return Gy(e,t,null,n)};_n.flushSync=function(e){var t=po.T,n=mn.p;try{if(po.T=null,mn.p=2,e)return e()}finally{po.T=t,mn.p=n,mn.d.f()}};_n.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,mn.d.C(e,t))};_n.prefetchDNS=function(e){typeof e=="string"&&mn.d.D(e)};_n.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=fu(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?mn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&mn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};_n.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=fu(t.as,t.crossOrigin);mn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&mn.d.M(e)};_n.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=fu(n,t.crossOrigin);mn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};_n.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=fu(t.as,t.crossOrigin);mn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else mn.d.m(e)};_n.requestFormReset=function(e){mn.d.r(e)};_n.unstable_batchedUpdates=function(e,t){return e(t)};_n.useFormState=function(e,t,n){return po.H.useFormState(e,t,n)};_n.useFormStatus=function(){return po.H.useHostTransitionStatus()};_n.version="19.2.7";function C0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C0)}catch(e){console.error(e)}}C0(),A0.exports=_n;var w0=A0.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qe=Fy,D0=st,Vy=w0;function J(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function N0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function U0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function L0(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wm(e){if(jo(e)!==e)throw Error(J(188))}function ky(e){var t=e.alternate;if(!t){if(t=jo(e),t===null)throw Error(J(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return wm(a),e;if(s===i)return wm(a),t;s=s.sibling}throw Error(J(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?e:t}function O0(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=O0(e),t!==null)return t;e=e.sibling}return null}var Ce=Object.assign,Xy=Symbol.for("react.element"),fl=Symbol.for("react.transitional.element"),so=Symbol.for("react.portal"),Ks=Symbol.for("react.fragment"),P0=Symbol.for("react.strict_mode"),ad=Symbol.for("react.profiler"),I0=Symbol.for("react.consumer"),Wi=Symbol.for("react.context"),$h=Symbol.for("react.forward_ref"),sd=Symbol.for("react.suspense"),rd=Symbol.for("react.suspense_list"),tp=Symbol.for("react.memo"),xa=Symbol.for("react.lazy"),od=Symbol.for("react.activity"),Wy=Symbol.for("react.memo_cache_sentinel"),Dm=Symbol.iterator;function kr(e){return e===null||typeof e!="object"?null:(e=Dm&&e[Dm]||e["@@iterator"],typeof e=="function"?e:null)}var jy=Symbol.for("react.client.reference");function ld(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===jy?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ks:return"Fragment";case ad:return"Profiler";case P0:return"StrictMode";case sd:return"Suspense";case rd:return"SuspenseList";case od:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case so:return"Portal";case Wi:return e.displayName||"Context";case I0:return(e._context.displayName||"Context")+".Consumer";case $h:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tp:return t=e.displayName||null,t!==null?t:ld(e.type)||"Memo";case xa:t=e._payload,e=e._init;try{return ld(e(t))}catch{}}return null}var ro=Array.isArray,Lt=D0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=Vy.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,us={pending:!1,data:null,method:null,action:null},cd=[],Qs=-1;function wi(e){return{current:e}}function $e(e){0>Qs||(e.current=cd[Qs],cd[Qs]=null,Qs--)}function Ee(e,t){Qs++,cd[Qs]=e.current,e.current=t}var Mi=wi(null),wo=wi(null),Ua=wi(null),Mc=wi(null);function Ec(e,t){switch(Ee(Ua,t),Ee(wo,e),Ee(Mi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ig(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ig(t),e=nS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$e(Mi),Ee(Mi,e)}function _r(){$e(Mi),$e(wo),$e(Ua)}function ud(e){e.memoizedState!==null&&Ee(Mc,e);var t=Mi.current,n=nS(t,e.type);t!==n&&(Ee(wo,e),Ee(Mi,n))}function bc(e){wo.current===e&&($e(Mi),$e(wo)),Mc.current===e&&($e(Mc),Ho._currentValue=us)}var Iu,Nm;function es(e){if(Iu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Iu=t&&t[1]||"",Nm=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Iu+e+Nm}var Bu=!1;function Fu(e,t){if(!e||Bu)return"";Bu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(p){var u=p}Reflect.construct(e,[],h)}else{try{h.call()}catch(p){u=p}e.call(h.prototype)}}else{try{throw Error()}catch(p){u=p}(h=e())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(p){if(p&&u&&typeof p.stack=="string")return[p.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var d=`
`+l[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=a);break}}}finally{Bu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?es(n):""}function qy(e,t){switch(e.tag){case 26:case 27:case 5:return es(e.type);case 16:return es("Lazy");case 13:return e.child!==t&&t!==null?es("Suspense Fallback"):es("Suspense");case 19:return es("SuspenseList");case 0:case 15:return Fu(e.type,!1);case 11:return Fu(e.type.render,!1);case 1:return Fu(e.type,!0);case 31:return es("Activity");default:return""}}function Um(e){try{var t="",n=null;do t+=qy(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var fd=Object.prototype.hasOwnProperty,ep=qe.unstable_scheduleCallback,zu=qe.unstable_cancelCallback,Yy=qe.unstable_shouldYield,Zy=qe.unstable_requestPaint,In=qe.unstable_now,Ky=qe.unstable_getCurrentPriorityLevel,B0=qe.unstable_ImmediatePriority,F0=qe.unstable_UserBlockingPriority,Tc=qe.unstable_NormalPriority,Qy=qe.unstable_LowPriority,z0=qe.unstable_IdlePriority,Jy=qe.log,$y=qe.unstable_setDisableYieldValue,qo=null,Bn=null;function Aa(e){if(typeof Jy=="function"&&$y(e),Bn&&typeof Bn.setStrictMode=="function")try{Bn.setStrictMode(qo,e)}catch{}}var Fn=Math.clz32?Math.clz32:nM,tM=Math.log,eM=Math.LN2;function nM(e){return e>>>=0,e===0?32:31-(tM(e)/eM|0)|0}var dl=256,hl=262144,pl=4194304;function ns(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function du(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=ns(i):(r&=o,r!==0?a=ns(r):n||(n=o&~e,n!==0&&(a=ns(n))))):(o=i&~s,o!==0?a=ns(o):r!==0?a=ns(r):n||(n=i&~e,n!==0&&(a=ns(n)))),a===0?0:t!==0&&t!==a&&!(t&s)&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function Yo(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function iM(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function H0(){var e=pl;return pl<<=1,!(pl&62914560)&&(pl=4194304),e}function Hu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function aM(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var d=31-Fn(n),h=1<<d;o[d]=0,l[d]=-1;var u=c[d];if(u!==null)for(c[d]=null,d=0;d<u.length;d++){var p=u[d];p!==null&&(p.lane&=-536870913)}n&=~h}i!==0&&G0(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function G0(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Fn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function V0(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Fn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function k0(e,t){var n=t&-t;return n=n&42?1:np(n),n&(e.suspendedLanes|t)?0:n}function np(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ip(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function X0(){var e=se.p;return e!==0?e:(e=window.event,e===void 0?32:hS(e.type))}function Lm(e,t){var n=se.p;try{return se.p=e,t()}finally{se.p=n}}var qa=Math.random().toString(36).slice(2),nn="__reactFiber$"+qa,An="__reactProps$"+qa,Or="__reactContainer$"+qa,dd="__reactEvents$"+qa,sM="__reactListeners$"+qa,rM="__reactHandles$"+qa,Om="__reactResources$"+qa,Ko="__reactMarker$"+qa;function ap(e){delete e[nn],delete e[An],delete e[dd],delete e[sM],delete e[rM]}function Js(e){var t=e[nn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Or]||n[nn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gg(e);e!==null;){if(n=e[nn])return n;e=Gg(e)}return t}e=n,n=e.parentNode}return null}function Pr(e){if(e=e[nn]||e[Or]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function oo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(J(33))}function lr(e){var t=e[Om];return t||(t=e[Om]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[Ko]=!0}var W0=new Set,j0={};function Es(e,t){vr(e,t),vr(e+"Capture",t)}function vr(e,t){for(j0[e]=t,e=0;e<t.length;e++)W0.add(t[e])}var oM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Pm={},Im={};function lM(e){return fd.call(Im,e)?!0:fd.call(Pm,e)?!1:oM.test(e)?Im[e]=!0:(Pm[e]=!0,!1)}function tc(e,t,n){if(lM(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ml(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ui(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function qn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function q0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cM(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hd(e){if(!e._valueTracker){var t=q0(e)?"checked":"value";e._valueTracker=cM(e,t,""+e[t])}}function Y0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=q0(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Ac(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var uM=/[\n"\\]/g;function Qn(e){return e.replace(uM,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function pd(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qn(t)):e.value!==""+qn(t)&&(e.value=""+qn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?md(e,r,qn(t)):n!=null?md(e,r,qn(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+qn(o):e.removeAttribute("name")}function Z0(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){hd(e);return}n=n!=null?""+qn(n):"",t=t!=null?""+qn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),hd(e)}function md(e,t,n){t==="number"&&Ac(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function cr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+qn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function K0(e,t,n){if(t!=null&&(t=""+qn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+qn(n):""}function Q0(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(J(92));if(ro(i)){if(1<i.length)throw Error(J(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=qn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),hd(e)}function xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bm(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||fM.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function J0(e,t,n){if(t!=null&&typeof t!="object")throw Error(J(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&Bm(e,a,i)}else for(var s in t)t.hasOwnProperty(s)&&Bm(e,s,t[s])}function sp(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ec(e){return hM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var gd=null;function rp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $s=null,ur=null;function Fm(e){var t=Pr(e);if(t&&(e=t.stateNode)){var n=e[An]||null;t:switch(e=t.stateNode,t.type){case"input":if(pd(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Qn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[An]||null;if(!a)throw Error(J(90));pd(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Y0(i)}break t;case"textarea":K0(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&cr(e,!!n.multiple,t,!1)}}}var Gu=!1;function $0(e,t,n){if(Gu)return e(t,n);Gu=!0;try{var i=e(t);return i}finally{if(Gu=!1,($s!==null||ur!==null)&&(bu(),$s&&(t=$s,e=ur,ur=$s=null,Fm(t),e)))for(t=0;t<e.length;t++)Fm(e[t])}}function Do(e,t){var n=e.stateNode;if(n===null)return null;var i=n[An]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(J(231,t,typeof n));return n}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_d=!1;if(ta)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){_d=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{_d=!1}var Ra=null,op=null,nc=null;function tv(){if(nc)return nc;var e,t=op,n=t.length,i,a="value"in Ra?Ra.value:Ra.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return nc=a.slice(e,1<i?1-i:void 0)}function ic(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gl(){return!0}function zm(){return!1}function Rn(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?gl:zm,this.isPropagationStopped=zm,this}return Ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),t}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hu=Rn(bs),Qo=Ce({},bs,{view:0,detail:0}),pM=Rn(Qo),Vu,ku,Wr,pu=Ce({},Qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wr&&(Wr&&e.type==="mousemove"?(Vu=e.screenX-Wr.screenX,ku=e.screenY-Wr.screenY):ku=Vu=0,Wr=e),Vu)},movementY:function(e){return"movementY"in e?e.movementY:ku}}),Hm=Rn(pu),mM=Ce({},pu,{dataTransfer:0}),gM=Rn(mM),_M=Ce({},Qo,{relatedTarget:0}),Xu=Rn(_M),vM=Ce({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),xM=Rn(vM),SM=Ce({},bs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yM=Rn(SM),MM=Ce({},bs,{data:0}),Gm=Rn(MM),EM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AM(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=TM[e])?!!t[e]:!1}function lp(){return AM}var RM=Ce({},Qo,{key:function(e){if(e.key){var t=EM[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ic(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lp,charCode:function(e){return e.type==="keypress"?ic(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ic(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),CM=Rn(RM),wM=Ce({},pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vm=Rn(wM),DM=Ce({},Qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lp}),NM=Rn(DM),UM=Ce({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),LM=Rn(UM),OM=Ce({},pu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),PM=Rn(OM),IM=Ce({},bs,{newState:0,oldState:0}),BM=Rn(IM),FM=[9,13,27,32],cp=ta&&"CompositionEvent"in window,mo=null;ta&&"documentMode"in document&&(mo=document.documentMode);var zM=ta&&"TextEvent"in window&&!mo,ev=ta&&(!cp||mo&&8<mo&&11>=mo),km=" ",Xm=!1;function nv(e,t){switch(e){case"keyup":return FM.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tr=!1;function HM(e,t){switch(e){case"compositionend":return iv(t);case"keypress":return t.which!==32?null:(Xm=!0,km);case"textInput":return e=t.data,e===km&&Xm?null:e;default:return null}}function GM(e,t){if(tr)return e==="compositionend"||!cp&&nv(e,t)?(e=tv(),nc=op=Ra=null,tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ev&&t.locale!=="ko"?null:t.data;default:return null}}var VM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!VM[e.type]:t==="textarea"}function av(e,t,n,i){$s?ur?ur.push(i):ur=[i]:$s=i,t=Xc(t,"onChange"),0<t.length&&(n=new hu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var go=null,No=null;function kM(e){$x(e,0)}function mu(e){var t=oo(e);if(Y0(t))return e}function jm(e,t){if(e==="change")return t}var sv=!1;if(ta){var Wu;if(ta){var ju="oninput"in document;if(!ju){var qm=document.createElement("div");qm.setAttribute("oninput","return;"),ju=typeof qm.oninput=="function"}Wu=ju}else Wu=!1;sv=Wu&&(!document.documentMode||9<document.documentMode)}function Ym(){go&&(go.detachEvent("onpropertychange",rv),No=go=null)}function rv(e){if(e.propertyName==="value"&&mu(No)){var t=[];av(t,No,e,rp(e)),$0(kM,t)}}function XM(e,t,n){e==="focusin"?(Ym(),go=t,No=n,go.attachEvent("onpropertychange",rv)):e==="focusout"&&Ym()}function WM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mu(No)}function jM(e,t){if(e==="click")return mu(t)}function qM(e,t){if(e==="input"||e==="change")return mu(t)}function YM(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Hn=typeof Object.is=="function"?Object.is:YM;function Uo(e,t){if(Hn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!fd.call(t,a)||!Hn(e[a],t[a]))return!1}return!0}function Zm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Km(e,t){var n=Zm(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Zm(n)}}function ov(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ov(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lv(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ac(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ac(e.document)}return t}function up(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ZM=ta&&"documentMode"in document&&11>=document.documentMode,er=null,vd=null,_o=null,xd=!1;function Qm(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xd||er==null||er!==Ac(i)||(i=er,"selectionStart"in i&&up(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_o&&Uo(_o,i)||(_o=i,i=Xc(vd,"onSelect"),0<i.length&&(t=new hu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=er)))}function Ka(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var nr={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},qu={},cv={};ta&&(cv=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function Ts(e){if(qu[e])return qu[e];if(!nr[e])return e;var t=nr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cv)return qu[e]=t[n];return e}var uv=Ts("animationend"),fv=Ts("animationiteration"),dv=Ts("animationstart"),KM=Ts("transitionrun"),QM=Ts("transitionstart"),JM=Ts("transitioncancel"),hv=Ts("transitionend"),pv=new Map,Sd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sd.push("scrollEnd");function fi(e,t){pv.set(e,t),Es(t,[e])}var Rc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Wn=[],ir=0,fp=0;function gu(){for(var e=ir,t=fp=ir=0;t<e;){var n=Wn[t];Wn[t++]=null;var i=Wn[t];Wn[t++]=null;var a=Wn[t];Wn[t++]=null;var s=Wn[t];if(Wn[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&mv(n,a,s)}}function _u(e,t,n,i){Wn[ir++]=e,Wn[ir++]=t,Wn[ir++]=n,Wn[ir++]=i,fp|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function dp(e,t,n,i){return _u(e,t,n,i),Cc(e)}function As(e,t){return _u(e,null,null,t),Cc(e)}function mv(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-Fn(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function Cc(e){if(50<Ao)throw Ao=0,Gd=null,Error(J(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ar={};function $M(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(e,t,n,i){return new $M(e,t,n,i)}function hp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zi(e,t){var n=e.alternate;return n===null?(n=On(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function gv(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ac(e,t,n,i,a,s){var r=0;if(i=e,typeof e=="function")hp(e)&&(r=1);else if(typeof e=="string")r=ab(e,n,Mi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case od:return e=On(31,n,t,a),e.elementType=od,e.lanes=s,e;case Ks:return fs(n.children,a,s,t);case P0:r=8,a|=24;break;case ad:return e=On(12,n,t,a|2),e.elementType=ad,e.lanes=s,e;case sd:return e=On(13,n,t,a),e.elementType=sd,e.lanes=s,e;case rd:return e=On(19,n,t,a),e.elementType=rd,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wi:r=10;break t;case I0:r=9;break t;case $h:r=11;break t;case tp:r=14;break t;case xa:r=16,i=null;break t}r=29,n=Error(J(130,e===null?"null":typeof e,"")),i=null}return t=On(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function fs(e,t,n,i){return e=On(7,e,i,t),e.lanes=n,e}function Yu(e,t,n){return e=On(6,e,null,t),e.lanes=n,e}function _v(e){var t=On(18,null,null,0);return t.stateNode=e,t}function Zu(e,t,n){return t=On(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Jm=new WeakMap;function Jn(e,t){if(typeof e=="object"&&e!==null){var n=Jm.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Um(t)},Jm.set(e,t),t)}return{value:e,source:t,stack:Um(t)}}var sr=[],rr=0,wc=null,Lo=0,Yn=[],Zn=0,Ga=null,_i=1,vi="";function Vi(e,t){sr[rr++]=Lo,sr[rr++]=wc,wc=e,Lo=t}function vv(e,t,n){Yn[Zn++]=_i,Yn[Zn++]=vi,Yn[Zn++]=Ga,Ga=e;var i=_i;e=vi;var a=32-Fn(i)-1;i&=~(1<<a),n+=1;var s=32-Fn(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,_i=1<<32-Fn(t)+a|n<<a|i,vi=s+e}else _i=1<<s|n<<a|i,vi=e}function pp(e){e.return!==null&&(Vi(e,1),vv(e,1,0))}function mp(e){for(;e===wc;)wc=sr[--rr],sr[rr]=null,Lo=sr[--rr],sr[rr]=null;for(;e===Ga;)Ga=Yn[--Zn],Yn[Zn]=null,vi=Yn[--Zn],Yn[Zn]=null,_i=Yn[--Zn],Yn[Zn]=null}function xv(e,t){Yn[Zn++]=_i,Yn[Zn++]=vi,Yn[Zn++]=Ga,_i=t.id,vi=t.overflow,Ga=e}var an=null,Ae=null,$t=!1,La=null,$n=!1,yd=Error(J(519));function Va(e){var t=Error(J(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Oo(Jn(t,e)),yd}function $m(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[nn]=e,t[An]=i,n){case"dialog":qt("cancel",t),qt("close",t);break;case"iframe":case"object":case"embed":qt("load",t);break;case"video":case"audio":for(n=0;n<Fo.length;n++)qt(Fo[n],t);break;case"source":qt("error",t);break;case"img":case"image":case"link":qt("error",t),qt("load",t);break;case"details":qt("toggle",t);break;case"input":qt("invalid",t),Z0(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":qt("invalid",t);break;case"textarea":qt("invalid",t),Q0(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||eS(t.textContent,n)?(i.popover!=null&&(qt("beforetoggle",t),qt("toggle",t)),i.onScroll!=null&&qt("scroll",t),i.onScrollEnd!=null&&qt("scrollend",t),i.onClick!=null&&(t.onclick=ji),t=!0):t=!1,t||Va(e,!0)}function tg(e){for(an=e.return;an;)switch(an.tag){case 5:case 31:case 13:$n=!1;return;case 27:case 3:$n=!0;return;default:an=an.return}}function Ns(e){if(e!==an)return!1;if(!$t)return tg(e),$t=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||jd(e.type,e.memoizedProps)),n=!n),n&&Ae&&Va(e),tg(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));Ae=Hg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));Ae=Hg(e)}else t===27?(t=Ae,Ya(e.type)?(e=Kd,Kd=null,Ae=e):Ae=t):Ae=an?ni(e.stateNode.nextSibling):null;return!0}function ms(){Ae=an=null,$t=!1}function Ku(){var e=La;return e!==null&&(Mn===null?Mn=e:Mn.push.apply(Mn,e),La=null),e}function Oo(e){La===null?La=[e]:La.push(e)}var Md=wi(null),Rs=null,qi=null;function ya(e,t,n){Ee(Md,t._currentValue),t._currentValue=n}function Ki(e){e._currentValue=Md.current,$e(Md)}function Ed(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function bd(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ed(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(J(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),Ed(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Ir(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(J(387));if(r=r.memoizedProps,r!==null){var o=a.type;Hn(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===Mc.current){if(r=a.alternate,r===null)throw Error(J(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Ho):e=[Ho])}a=a.return}e!==null&&bd(t,e,n,i),t.flags|=262144}function Dc(e){for(e=e.firstContext;e!==null;){if(!Hn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gs(e){Rs=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function sn(e){return Sv(Rs,e)}function _l(e,t){return Rs===null&&gs(e),Sv(e,t)}function Sv(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},qi===null){if(e===null)throw Error(J(308));qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qi=qi.next=t;return n}var tE=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},eE=qe.unstable_scheduleCallback,nE=qe.unstable_NormalPriority,ke={$$typeof:Wi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gp(){return{controller:new tE,data:new Map,refCount:0}}function Jo(e){e.refCount--,e.refCount===0&&eE(nE,function(){e.controller.abort()})}var vo=null,Td=0,Sr=0,fr=null;function iE(e,t){if(vo===null){var n=vo=[];Td=0,Sr=Gp(),fr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Td++,t.then(eg,eg),t}function eg(){if(--Td===0&&vo!==null){fr!==null&&(fr.status="fulfilled");var e=vo;vo=null,Sr=0,fr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function aE(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var ng=Lt.S;Lt.S=function(e,t){Ox=In(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&iE(e,t),ng!==null&&ng(e,t)};var ds=wi(null);function _p(){var e=ds.current;return e!==null?e:xe.pooledCache}function sc(e,t){t===null?Ee(ds,ds.current):Ee(ds,t.pool)}function yv(){var e=_p();return e===null?null:{parent:ke._currentValue,pool:e}}var Br=Error(J(460)),vp=Error(J(474)),vu=Error(J(542)),Nc={then:function(){}};function ig(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Mv(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ji,ji),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,sg(e),e;default:if(typeof t.status=="string")t.then(ji,ji);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(J(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,sg(e),e}throw hs=t,Br}}function is(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(hs=n,Br):n}}var hs=null;function ag(){if(hs===null)throw Error(J(459));var e=hs;return hs=null,e}function sg(e){if(e===Br||e===vu)throw Error(J(483))}var dr=null,Po=0;function vl(e){var t=Po;return Po+=1,dr===null&&(dr=[]),Mv(dr,e,t)}function jr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function xl(e,t){throw t.$$typeof===Xy?Error(J(525)):(e=Object.prototype.toString.call(t),Error(J(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ev(e){function t(f,m){if(e){var _=f.deletions;_===null?(f.deletions=[m],f.flags|=16):_.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function i(f){for(var m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function a(f,m){return f=Zi(f,m),f.index=0,f.sibling=null,f}function s(f,m,_){return f.index=_,e?(_=f.alternate,_!==null?(_=_.index,_<m?(f.flags|=67108866,m):_):(f.flags|=67108866,m)):(f.flags|=1048576,m)}function r(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,m,_,x){return m===null||m.tag!==6?(m=Yu(_,f.mode,x),m.return=f,m):(m=a(m,_),m.return=f,m)}function l(f,m,_,x){var C=_.type;return C===Ks?d(f,m,_.props.children,x,_.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===xa&&is(C)===m.type)?(m=a(m,_.props),jr(m,_),m.return=f,m):(m=ac(_.type,_.key,_.props,null,f.mode,x),jr(m,_),m.return=f,m)}function c(f,m,_,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=Zu(_,f.mode,x),m.return=f,m):(m=a(m,_.children||[]),m.return=f,m)}function d(f,m,_,x,C){return m===null||m.tag!==7?(m=fs(_,f.mode,x,C),m.return=f,m):(m=a(m,_),m.return=f,m)}function h(f,m,_){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Yu(""+m,f.mode,_),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case fl:return _=ac(m.type,m.key,m.props,null,f.mode,_),jr(_,m),_.return=f,_;case so:return m=Zu(m,f.mode,_),m.return=f,m;case xa:return m=is(m),h(f,m,_)}if(ro(m)||kr(m))return m=fs(m,f.mode,_,null),m.return=f,m;if(typeof m.then=="function")return h(f,vl(m),_);if(m.$$typeof===Wi)return h(f,_l(f,m),_);xl(f,m)}return null}function u(f,m,_,x){var C=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return C!==null?null:o(f,m,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case fl:return _.key===C?l(f,m,_,x):null;case so:return _.key===C?c(f,m,_,x):null;case xa:return _=is(_),u(f,m,_,x)}if(ro(_)||kr(_))return C!==null?null:d(f,m,_,x,null);if(typeof _.then=="function")return u(f,m,vl(_),x);if(_.$$typeof===Wi)return u(f,m,_l(f,_),x);xl(f,_)}return null}function p(f,m,_,x,C){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return f=f.get(_)||null,o(m,f,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case fl:return f=f.get(x.key===null?_:x.key)||null,l(m,f,x,C);case so:return f=f.get(x.key===null?_:x.key)||null,c(m,f,x,C);case xa:return x=is(x),p(f,m,_,x,C)}if(ro(x)||kr(x))return f=f.get(_)||null,d(m,f,x,C,null);if(typeof x.then=="function")return p(f,m,_,vl(x),C);if(x.$$typeof===Wi)return p(f,m,_,_l(m,x),C);xl(m,x)}return null}function v(f,m,_,x){for(var C=null,b=null,R=m,S=m=0,A=null;R!==null&&S<_.length;S++){R.index>S?(A=R,R=null):A=R.sibling;var D=u(f,R,_[S],x);if(D===null){R===null&&(R=A);break}e&&R&&D.alternate===null&&t(f,R),m=s(D,m,S),b===null?C=D:b.sibling=D,b=D,R=A}if(S===_.length)return n(f,R),$t&&Vi(f,S),C;if(R===null){for(;S<_.length;S++)R=h(f,_[S],x),R!==null&&(m=s(R,m,S),b===null?C=R:b.sibling=R,b=R);return $t&&Vi(f,S),C}for(R=i(R);S<_.length;S++)A=p(R,f,S,_[S],x),A!==null&&(e&&A.alternate!==null&&R.delete(A.key===null?S:A.key),m=s(A,m,S),b===null?C=A:b.sibling=A,b=A);return e&&R.forEach(function(N){return t(f,N)}),$t&&Vi(f,S),C}function M(f,m,_,x){if(_==null)throw Error(J(151));for(var C=null,b=null,R=m,S=m=0,A=null,D=_.next();R!==null&&!D.done;S++,D=_.next()){R.index>S?(A=R,R=null):A=R.sibling;var N=u(f,R,D.value,x);if(N===null){R===null&&(R=A);break}e&&R&&N.alternate===null&&t(f,R),m=s(N,m,S),b===null?C=N:b.sibling=N,b=N,R=A}if(D.done)return n(f,R),$t&&Vi(f,S),C;if(R===null){for(;!D.done;S++,D=_.next())D=h(f,D.value,x),D!==null&&(m=s(D,m,S),b===null?C=D:b.sibling=D,b=D);return $t&&Vi(f,S),C}for(R=i(R);!D.done;S++,D=_.next())D=p(R,f,S,D.value,x),D!==null&&(e&&D.alternate!==null&&R.delete(D.key===null?S:D.key),m=s(D,m,S),b===null?C=D:b.sibling=D,b=D);return e&&R.forEach(function(G){return t(f,G)}),$t&&Vi(f,S),C}function g(f,m,_,x){if(typeof _=="object"&&_!==null&&_.type===Ks&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case fl:t:{for(var C=_.key;m!==null;){if(m.key===C){if(C=_.type,C===Ks){if(m.tag===7){n(f,m.sibling),x=a(m,_.props.children),x.return=f,f=x;break t}}else if(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===xa&&is(C)===m.type){n(f,m.sibling),x=a(m,_.props),jr(x,_),x.return=f,f=x;break t}n(f,m);break}else t(f,m);m=m.sibling}_.type===Ks?(x=fs(_.props.children,f.mode,x,_.key),x.return=f,f=x):(x=ac(_.type,_.key,_.props,null,f.mode,x),jr(x,_),x.return=f,f=x)}return r(f);case so:t:{for(C=_.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(f,m.sibling),x=a(m,_.children||[]),x.return=f,f=x;break t}else{n(f,m);break}else t(f,m);m=m.sibling}x=Zu(_,f.mode,x),x.return=f,f=x}return r(f);case xa:return _=is(_),g(f,m,_,x)}if(ro(_))return v(f,m,_,x);if(kr(_)){if(C=kr(_),typeof C!="function")throw Error(J(150));return _=C.call(_),M(f,m,_,x)}if(typeof _.then=="function")return g(f,m,vl(_),x);if(_.$$typeof===Wi)return g(f,m,_l(f,_),x);xl(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,m!==null&&m.tag===6?(n(f,m.sibling),x=a(m,_),x.return=f,f=x):(n(f,m),x=Yu(_,f.mode,x),x.return=f,f=x),r(f)):n(f,m)}return function(f,m,_,x){try{Po=0;var C=g(f,m,_,x);return dr=null,C}catch(R){if(R===Br||R===vu)throw R;var b=On(29,R,null,f.mode);return b.lanes=x,b.return=f,b}finally{}}}var _s=Ev(!0),bv=Ev(!1),Sa=!1;function xp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ad(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,ae&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Cc(e),mv(e,null,n),t}return _u(e,i,t,n),Cc(e)}function xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,V0(e,n)}}function Qu(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Rd=!1;function So(){if(Rd){var e=fr;if(e!==null)throw e}}function yo(e,t,n,i){Rd=!1;var a=e.updateQueue;Sa=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==r&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=a.baseState;r=0,d=c=l=null,o=s;do{var u=o.lane&-536870913,p=u!==o.lane;if(p?(Kt&u)===u:(i&u)===u){u!==0&&u===Sr&&(Rd=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,M=o;u=t;var g=n;switch(M.tag){case 1:if(v=M.payload,typeof v=="function"){h=v.call(g,h,u);break t}h=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=M.payload,u=typeof v=="function"?v.call(g,h,u):v,u==null)break t;h=Ce({},h,u);break t;case 2:Sa=!0}}u=o.callback,u!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[u]:p.push(u))}else p={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,r|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);d===null&&(l=h),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=d,s===null&&(a.shared.lanes=0),Xa|=r,e.lanes=r,e.memoizedState=h}}function Tv(e,t){if(typeof e!="function")throw Error(J(191,e));e.call(t)}function Av(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Tv(n[e],t)}var yr=wi(null),Uc=wi(0);function rg(e,t){e=aa,Ee(Uc,e),Ee(yr,t),aa=e|t.baseLanes}function Cd(){Ee(Uc,aa),Ee(yr,yr.current)}function Sp(){aa=Uc.current,$e(yr),$e(Uc)}var Gn=wi(null),ei=null;function Ma(e){var t=e.alternate;Ee(Be,Be.current&1),Ee(Gn,e),ei===null&&(t===null||yr.current!==null||t.memoizedState!==null)&&(ei=e)}function wd(e){Ee(Be,Be.current),Ee(Gn,e),ei===null&&(ei=e)}function Rv(e){e.tag===22?(Ee(Be,Be.current),Ee(Gn,e),ei===null&&(ei=e)):Ea()}function Ea(){Ee(Be,Be.current),Ee(Gn,Gn.current)}function Ln(e){$e(Gn),ei===e&&(ei=null),$e(Be)}var Be=wi(0);function Lc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Yd(n)||Zd(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ea=0,Ht=null,ge=null,Ge=null,Oc=!1,hr=!1,vs=!1,Pc=0,Io=0,pr=null,sE=0;function Ue(){throw Error(J(321))}function yp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Hn(e[n],t[n]))return!1;return!0}function Mp(e,t,n,i,a,s){return ea=s,Ht=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lt.H=e===null||e.memoizedState===null?ax:Lp,vs=!1,s=n(i,a),vs=!1,hr&&(s=wv(t,n,i,a)),Cv(e),s}function Cv(e){Lt.H=Bo;var t=ge!==null&&ge.next!==null;if(ea=0,Ge=ge=Ht=null,Oc=!1,Io=0,pr=null,t)throw Error(J(300));e===null||Xe||(e=e.dependencies,e!==null&&Dc(e)&&(Xe=!0))}function wv(e,t,n,i){Ht=e;var a=0;do{if(hr&&(pr=null),Io=0,hr=!1,25<=a)throw Error(J(301));if(a+=1,Ge=ge=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Lt.H=sx,s=t(n,i)}while(hr);return s}function rE(){var e=Lt.H,t=e.useState()[0];return t=typeof t.then=="function"?$o(t):t,e=e.useState()[0],(ge!==null?ge.memoizedState:null)!==e&&(Ht.flags|=1024),t}function Ep(){var e=Pc!==0;return Pc=0,e}function bp(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Tp(e){if(Oc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Oc=!1}ea=0,Ge=ge=Ht=null,hr=!1,Io=Pc=0,pr=null}function pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Ht.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function ze(){if(ge===null){var e=Ht.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=Ge===null?Ht.memoizedState:Ge.next;if(t!==null)Ge=t,ge=e;else{if(e===null)throw Ht.alternate===null?Error(J(467)):Error(J(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},Ge===null?Ht.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function xu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $o(e){var t=Io;return Io+=1,pr===null&&(pr=[]),e=Mv(pr,e,t),t=Ht,(Ge===null?t.memoizedState:Ge.next)===null&&(t=t.alternate,Lt.H=t===null||t.memoizedState===null?ax:Lp),e}function Su(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $o(e);if(e.$$typeof===Wi)return sn(e)}throw Error(J(438,String(e)))}function Ap(e){var t=null,n=Ht.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Ht.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=xu(),Ht.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Wy;return t.index++,n}function na(e,t){return typeof t=="function"?t(e):t}function rc(e){var t=ze();return Rp(t,ge,e)}function Rp(e,t,n){var i=e.queue;if(i===null)throw Error(J(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,d=!1;do{var h=c.lane&-536870913;if(h!==c.lane?(Kt&h)===h:(ea&h)===h){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),h===Sr&&(d=!0);else if((ea&u)===u){c=c.next,u===Sr&&(d=!0);continue}else h={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=s):l=l.next=h,Ht.lanes|=u,Xa|=u;h=c.action,vs&&n(s,h),s=c.hasEagerState?c.eagerState:n(s,h)}else u={lane:h,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=s):l=l.next=u,Ht.lanes|=h,Xa|=h;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!Hn(s,e.memoizedState)&&(Xe=!0,d&&(n=fr,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Ju(e){var t=ze(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);Hn(s,t.memoizedState)||(Xe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function Dv(e,t,n){var i=Ht,a=ze(),s=$t;if(s){if(n===void 0)throw Error(J(407));n=n()}else n=t();var r=!Hn((ge||a).memoizedState,n);if(r&&(a.memoizedState=n,Xe=!0),a=a.queue,Cp(Lv.bind(null,i,a,e),[e]),a.getSnapshot!==t||r||Ge!==null&&Ge.memoizedState.tag&1){if(i.flags|=2048,Mr(9,{destroy:void 0},Uv.bind(null,i,a,n,t),null),xe===null)throw Error(J(349));s||ea&127||Nv(i,t,n)}return n}function Nv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ht.updateQueue,t===null?(t=xu(),Ht.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uv(e,t,n,i){t.value=n,t.getSnapshot=i,Ov(t)&&Pv(e)}function Lv(e,t,n){return n(function(){Ov(t)&&Pv(e)})}function Ov(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Hn(e,n)}catch{return!0}}function Pv(e){var t=As(e,2);t!==null&&En(t,e,2)}function Dd(e){var t=pn();if(typeof e=="function"){var n=e;if(e=n(),vs){Aa(!0);try{n()}finally{Aa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},t}function Iv(e,t,n,i){return e.baseState=n,Rp(e,ge,typeof i=="function"?i:na)}function oE(e,t,n,i,a){if(Mu(e))throw Error(J(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Lt.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,Bv(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Bv(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=Lt.T,r={};Lt.T=r;try{var o=n(a,i),l=Lt.S;l!==null&&l(r,o),og(e,t,o)}catch(c){Nd(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Lt.T=s}}else try{s=n(a,i),og(e,t,s)}catch(c){Nd(e,t,c)}}function og(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){lg(e,t,i)},function(i){return Nd(e,t,i)}):lg(e,t,n)}function lg(e,t,n){t.status="fulfilled",t.value=n,Fv(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Bv(e,n)))}function Nd(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Fv(t),t=t.next;while(t!==i)}e.action=null}function Fv(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function zv(e,t){return t}function cg(e,t){if($t){var n=xe.formState;if(n!==null){t:{var i=Ht;if($t){if(Ae){e:{for(var a=Ae,s=$n;a.nodeType!==8;){if(!s){a=null;break e}if(a=ni(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Ae=ni(a.nextSibling),i=a.data==="F!";break t}}Va(i)}i=!1}i&&(t=n[0])}}return n=pn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zv,lastRenderedState:t},n.queue=i,n=ex.bind(null,Ht,i),i.dispatch=n,i=Dd(!1),s=Up.bind(null,Ht,!1,i.queue),i=pn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=oE.bind(null,Ht,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function ug(e){var t=ze();return Hv(t,ge,e)}function Hv(e,t,n){if(t=Rp(e,t,zv)[0],e=rc(na)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=$o(t)}catch(r){throw r===Br?vu:r}else i=t;t=ze();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(Ht.flags|=2048,Mr(9,{destroy:void 0},lE.bind(null,a,n),null)),[i,s,e]}function lE(e,t){e.action=t}function fg(e){var t=ze(),n=ge;if(n!==null)return Hv(t,n,e);ze(),t=t.memoizedState,n=ze();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Mr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Ht.updateQueue,t===null&&(t=xu(),Ht.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Gv(){return ze().memoizedState}function oc(e,t,n,i){var a=pn();Ht.flags|=e,a.memoizedState=Mr(1|t,{destroy:void 0},n,i===void 0?null:i)}function yu(e,t,n,i){var a=ze();i=i===void 0?null:i;var s=a.memoizedState.inst;ge!==null&&i!==null&&yp(i,ge.memoizedState.deps)?a.memoizedState=Mr(t,s,n,i):(Ht.flags|=e,a.memoizedState=Mr(1|t,s,n,i))}function dg(e,t){oc(8390656,8,e,t)}function Cp(e,t){yu(2048,8,e,t)}function cE(e){Ht.flags|=4;var t=Ht.updateQueue;if(t===null)t=xu(),Ht.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Vv(e){var t=ze().memoizedState;return cE({ref:t,nextImpl:e}),function(){if(ae&2)throw Error(J(440));return t.impl.apply(void 0,arguments)}}function kv(e,t){return yu(4,2,e,t)}function Xv(e,t){return yu(4,4,e,t)}function Wv(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jv(e,t,n){n=n!=null?n.concat([e]):null,yu(4,4,Wv.bind(null,t,e),n)}function wp(){}function qv(e,t){var n=ze();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&yp(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Yv(e,t){var n=ze();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&yp(t,i[1]))return i[0];if(i=e(),vs){Aa(!0);try{e()}finally{Aa(!1)}}return n.memoizedState=[i,t],i}function Dp(e,t,n){return n===void 0||ea&1073741824&&!(Kt&261930)?e.memoizedState=t:(e.memoizedState=n,e=Ix(),Ht.lanes|=e,Xa|=e,n)}function Zv(e,t,n,i){return Hn(n,t)?n:yr.current!==null?(e=Dp(e,n,i),Hn(e,t)||(Xe=!0),e):!(ea&42)||ea&1073741824&&!(Kt&261930)?(Xe=!0,e.memoizedState=n):(e=Ix(),Ht.lanes|=e,Xa|=e,t)}function Kv(e,t,n,i,a){var s=se.p;se.p=s!==0&&8>s?s:8;var r=Lt.T,o={};Lt.T=o,Up(e,!1,t,n);try{var l=a(),c=Lt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=aE(l,i);Mo(e,t,d,zn(e))}else Mo(e,t,i,zn(e))}catch(h){Mo(e,t,{then:function(){},status:"rejected",reason:h},zn())}finally{se.p=s,r!==null&&o.types!==null&&(r.types=o.types),Lt.T=r}}function uE(){}function Ud(e,t,n,i){if(e.tag!==5)throw Error(J(476));var a=Qv(e).queue;Kv(e,a,t,us,n===null?uE:function(){return Jv(e),n(i)})}function Qv(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:us,baseState:us,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:us},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Jv(e){var t=Qv(e);t.next===null&&(t=e.alternate.memoizedState),Mo(e,t.next.queue,{},zn())}function Np(){return sn(Ho)}function $v(){return ze().memoizedState}function tx(){return ze().memoizedState}function fE(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=zn();e=Oa(n);var i=Pa(t,e,n);i!==null&&(En(i,t,n),xo(i,t,n)),t={cache:gp()},e.payload=t;return}t=t.return}}function dE(e,t,n){var i=zn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Mu(e)?nx(t,n):(n=dp(e,t,n,i),n!==null&&(En(n,e,i),ix(n,t,i)))}function ex(e,t,n){var i=zn();Mo(e,t,n,i)}function Mo(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mu(e))nx(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,Hn(o,r))return _u(e,t,a,0),xe===null&&gu(),!1}catch{}finally{}if(n=dp(e,t,a,i),n!==null)return En(n,e,i),ix(n,t,i),!0}return!1}function Up(e,t,n,i){if(i={lane:2,revertLane:Gp(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Mu(e)){if(t)throw Error(J(479))}else t=dp(e,n,i,2),t!==null&&En(t,e,2)}function Mu(e){var t=e.alternate;return e===Ht||t!==null&&t===Ht}function nx(e,t){hr=Oc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ix(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,V0(e,n)}}var Bo={readContext:sn,use:Su,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue};Bo.useEffectEvent=Ue;var ax={readContext:sn,use:Su,useCallback:function(e,t){return pn().memoizedState=[e,t===void 0?null:t],e},useContext:sn,useEffect:dg,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,oc(4194308,4,Wv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return oc(4194308,4,e,t)},useInsertionEffect:function(e,t){oc(4,2,e,t)},useMemo:function(e,t){var n=pn();t=t===void 0?null:t;var i=e();if(vs){Aa(!0);try{e()}finally{Aa(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=pn();if(n!==void 0){var a=n(t);if(vs){Aa(!0);try{n(t)}finally{Aa(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=dE.bind(null,Ht,e),[i.memoizedState,e]},useRef:function(e){var t=pn();return e={current:e},t.memoizedState=e},useState:function(e){e=Dd(e);var t=e.queue,n=ex.bind(null,Ht,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:wp,useDeferredValue:function(e,t){var n=pn();return Dp(n,e,t)},useTransition:function(){var e=Dd(!1);return e=Kv.bind(null,Ht,e.queue,!0,!1),pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Ht,a=pn();if($t){if(n===void 0)throw Error(J(407));n=n()}else{if(n=t(),xe===null)throw Error(J(349));Kt&127||Nv(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,dg(Lv.bind(null,i,s,e),[e]),i.flags|=2048,Mr(9,{destroy:void 0},Uv.bind(null,i,s,n,t),null),n},useId:function(){var e=pn(),t=xe.identifierPrefix;if($t){var n=vi,i=_i;n=(i&~(1<<32-Fn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Pc++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=sE++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Np,useFormState:cg,useActionState:cg,useOptimistic:function(e){var t=pn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Up.bind(null,Ht,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ap,useCacheRefresh:function(){return pn().memoizedState=fE.bind(null,Ht)},useEffectEvent:function(e){var t=pn(),n={impl:e};return t.memoizedState=n,function(){if(ae&2)throw Error(J(440));return n.impl.apply(void 0,arguments)}}},Lp={readContext:sn,use:Su,useCallback:qv,useContext:sn,useEffect:Cp,useImperativeHandle:jv,useInsertionEffect:kv,useLayoutEffect:Xv,useMemo:Yv,useReducer:rc,useRef:Gv,useState:function(){return rc(na)},useDebugValue:wp,useDeferredValue:function(e,t){var n=ze();return Zv(n,ge.memoizedState,e,t)},useTransition:function(){var e=rc(na)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:$o(e),t]},useSyncExternalStore:Dv,useId:$v,useHostTransitionStatus:Np,useFormState:ug,useActionState:ug,useOptimistic:function(e,t){var n=ze();return Iv(n,ge,e,t)},useMemoCache:Ap,useCacheRefresh:tx};Lp.useEffectEvent=Vv;var sx={readContext:sn,use:Su,useCallback:qv,useContext:sn,useEffect:Cp,useImperativeHandle:jv,useInsertionEffect:kv,useLayoutEffect:Xv,useMemo:Yv,useReducer:Ju,useRef:Gv,useState:function(){return Ju(na)},useDebugValue:wp,useDeferredValue:function(e,t){var n=ze();return ge===null?Dp(n,e,t):Zv(n,ge.memoizedState,e,t)},useTransition:function(){var e=Ju(na)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:$o(e),t]},useSyncExternalStore:Dv,useId:$v,useHostTransitionStatus:Np,useFormState:fg,useActionState:fg,useOptimistic:function(e,t){var n=ze();return ge!==null?Iv(n,ge,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ap,useCacheRefresh:tx};sx.useEffectEvent=Vv;function $u(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ld={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=zn(),a=Oa(i);a.payload=t,n!=null&&(a.callback=n),t=Pa(e,a,i),t!==null&&(En(t,e,i),xo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=zn(),a=Oa(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Pa(e,a,i),t!==null&&(En(t,e,i),xo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=zn(),i=Oa(n);i.tag=2,t!=null&&(i.callback=t),t=Pa(e,i,n),t!==null&&(En(t,e,n),xo(t,e,n))}};function hg(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!Uo(n,i)||!Uo(a,s):!0}function pg(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Ld.enqueueReplaceState(t,t.state,null)}function xs(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ce({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function rx(e){Rc(e)}function ox(e){console.error(e)}function lx(e){Rc(e)}function Ic(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function mg(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Od(e,t,n){return n=Oa(n),n.tag=3,n.payload={element:null},n.callback=function(){Ic(e,t)},n}function cx(e){return e=Oa(e),e.tag=3,e}function ux(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){mg(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){mg(t,n,i),typeof a!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function hE(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ir(t,n,a,!0),n=Gn.current,n!==null){switch(n.tag){case 31:case 13:return ei===null?Gc():n.alternate===null&&Le===0&&(Le=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Nc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),ff(e,i,a)),!1;case 22:return n.flags|=65536,i===Nc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),ff(e,i,a)),!1}throw Error(J(435,n.tag))}return ff(e,i,a),Gc(),!1}if($t)return t=Gn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==yd&&(e=Error(J(422),{cause:i}),Oo(Jn(e,n)))):(i!==yd&&(t=Error(J(423),{cause:i}),Oo(Jn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Jn(i,n),a=Od(e.stateNode,i,a),Qu(e,a),Le!==4&&(Le=2)),!1;var s=Error(J(520),{cause:i});if(s=Jn(s,n),To===null?To=[s]:To.push(s),Le!==4&&(Le=2),t===null)return!0;i=Jn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Od(n.stateNode,i,e),Qu(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Ia===null||!Ia.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=cx(a),ux(a,e,n,i),Qu(n,a),!1}n=n.return}while(n!==null);return!1}var Op=Error(J(461)),Xe=!1;function en(e,t,n,i){t.child=e===null?bv(t,null,n,i):_s(t,e.child,n,i)}function gg(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return gs(t),i=Mp(e,t,n,r,s,a),o=Ep(),e!==null&&!Xe?(bp(e,t,a),ia(e,t,a)):($t&&o&&pp(t),t.flags|=1,en(e,t,i,a),t.child)}function _g(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!hp(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,fx(e,t,s,i,a)):(e=ac(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Pp(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:Uo,n(r,i)&&e.ref===t.ref)return ia(e,t,a)}return t.flags|=1,e=Zi(s,i),e.ref=t.ref,e.return=t,t.child=e}function fx(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(Uo(s,i)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=i=s,Pp(e,a))e.flags&131072&&(Xe=!0);else return t.lanes=e.lanes,ia(e,t,a)}return Pd(e,t,n,i,a)}function dx(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return vg(e,t,s,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&sc(t,s!==null?s.cachePool:null),s!==null?rg(t,s):Cd(),Rv(t);else return i=t.lanes=536870912,vg(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(sc(t,s.cachePool),rg(t,s),Ea(),t.memoizedState=null):(e!==null&&sc(t,null),Cd(),Ea());return en(e,t,a,n),t.child}function lo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function vg(e,t,n,i,a){var s=_p();return s=s===null?null:{parent:ke._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&sc(t,null),Cd(),Rv(t),e!==null&&Ir(e,t,i,!0),t.childLanes=a,null}function lc(e,t){return t=Bc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function xg(e,t,n){return _s(t,e.child,null,n),e=lc(t,t.pendingProps),e.flags|=2,Ln(t),t.memoizedState=null,e}function pE(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if($t){if(i.mode==="hidden")return e=lc(t,i),t.lanes=536870912,lo(null,e);if(wd(t),(e=Ae)?(e=aS(e,$n),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ga!==null?{id:_i,overflow:vi}:null,retryLane:536870912,hydrationErrors:null},n=_v(e),n.return=t,t.child=n,an=t,Ae=null)):e=null,e===null)throw Va(t);return t.lanes=536870912,null}return lc(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(wd(t),a)if(t.flags&256)t.flags&=-257,t=xg(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(J(558));else if(Xe||Ir(e,t,n,!1),a=(n&e.childLanes)!==0,Xe||a){if(i=xe,i!==null&&(r=k0(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,As(e,r),En(i,e,r),Op;Gc(),t=xg(e,t,n)}else e=s.treeContext,Ae=ni(r.nextSibling),an=t,$t=!0,La=null,$n=!1,e!==null&&xv(t,e),t=lc(t,i),t.flags|=4096;return t}return e=Zi(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function cc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(J(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Pd(e,t,n,i,a){return gs(t),n=Mp(e,t,n,i,void 0,a),i=Ep(),e!==null&&!Xe?(bp(e,t,a),ia(e,t,a)):($t&&i&&pp(t),t.flags|=1,en(e,t,n,a),t.child)}function Sg(e,t,n,i,a,s){return gs(t),t.updateQueue=null,n=wv(t,i,n,a),Cv(e),i=Ep(),e!==null&&!Xe?(bp(e,t,s),ia(e,t,s)):($t&&i&&pp(t),t.flags|=1,en(e,t,n,s),t.child)}function yg(e,t,n,i,a){if(gs(t),t.stateNode===null){var s=ar,r=n.contextType;typeof r=="object"&&r!==null&&(s=sn(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ld,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},xp(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?sn(r):ar,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&($u(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Ld.enqueueReplaceState(s,s.state,null),yo(t,i,s,a),So(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=xs(n,o);s.props=l;var c=s.context,d=n.contextType;r=ar,typeof d=="object"&&d!==null&&(r=sn(d));var h=n.getDerivedStateFromProps;d=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&pg(t,s,i,r),Sa=!1;var u=t.memoizedState;s.state=u,yo(t,i,s,a),So(),c=t.memoizedState,o||u!==c||Sa?(typeof h=="function"&&($u(t,n,h,i),c=t.memoizedState),(l=Sa||hg(t,n,l,i,u,c,r))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Ad(e,t),r=t.memoizedProps,d=xs(n,r),s.props=d,h=t.pendingProps,u=s.context,c=n.contextType,l=ar,typeof c=="object"&&c!==null&&(l=sn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==h||u!==l)&&pg(t,s,i,l),Sa=!1,u=t.memoizedState,s.state=u,yo(t,i,s,a),So();var p=t.memoizedState;r!==h||u!==p||Sa||e!==null&&e.dependencies!==null&&Dc(e.dependencies)?(typeof o=="function"&&($u(t,n,o,i),p=t.memoizedState),(d=Sa||hg(t,n,d,i,u,p,l)||e!==null&&e.dependencies!==null&&Dc(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,p,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,p,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),s.props=i,s.state=p,s.context=l,i=d):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,cc(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=_s(t,e.child,null,a),t.child=_s(t,null,n,a)):en(e,t,n,a),t.memoizedState=s.state,e=t.child):e=ia(e,t,a),e}function Mg(e,t,n,i){return ms(),t.flags|=256,en(e,t,n,i),t.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(e){return{baseLanes:e,cachePool:yv()}}function nf(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Pn),e}function hx(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if($t){if(a?Ma(t):Ea(),(e=Ae)?(e=aS(e,$n),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ga!==null?{id:_i,overflow:vi}:null,retryLane:536870912,hydrationErrors:null},n=_v(e),n.return=t,t.child=n,an=t,Ae=null)):e=null,e===null)throw Va(t);return Zd(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(Ea(),a=t.mode,o=Bc({mode:"hidden",children:o},a),i=fs(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=ef(n),i.childLanes=nf(e,r,n),t.memoizedState=tf,lo(null,i)):(Ma(t),Id(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)t.flags&256?(Ma(t),t.flags&=-257,t=af(e,t,n)):t.memoizedState!==null?(Ea(),t.child=e.child,t.flags|=128,t=null):(Ea(),o=i.fallback,a=t.mode,i=Bc({mode:"visible",children:i.children},a),o=fs(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,_s(t,e.child,null,n),i=t.child,i.memoizedState=ef(n),i.childLanes=nf(e,r,n),t.memoizedState=tf,t=lo(null,i));else if(Ma(t),Zd(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(J(419)),i.stack="",i.digest=r,Oo({value:i,source:null,stack:null}),t=af(e,t,n)}else if(Xe||Ir(e,t,n,!1),r=(n&e.childLanes)!==0,Xe||r){if(r=xe,r!==null&&(i=k0(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,As(e,i),En(r,e,i),Op;Yd(o)||Gc(),t=af(e,t,n)}else Yd(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ae=ni(o.nextSibling),an=t,$t=!0,La=null,$n=!1,e!==null&&xv(t,e),t=Id(t,i.children),t.flags|=4096);return t}return a?(Ea(),o=i.fallback,a=t.mode,l=e.child,c=l.sibling,i=Zi(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=Zi(c,o):(o=fs(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,lo(null,i),i=t.child,o=e.child.memoizedState,o===null?o=ef(n):(a=o.cachePool,a!==null?(l=ke._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=yv(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=nf(e,r,n),t.memoizedState=tf,lo(e.child,i)):(Ma(t),n=e.child,e=n.sibling,n=Zi(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Id(e,t){return t=Bc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Bc(e,t){return e=On(22,e,null,t),e.lanes=0,e}function af(e,t,n){return _s(t,e.child,null,n),e=Id(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Eg(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ed(e.return,t,n)}function sf(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function px(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Be.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Ee(Be,r),en(e,t,i,n),i=$t?Lo:0,!o&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Eg(e,n,t);else if(e.tag===19)Eg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Lc(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),sf(t,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Lc(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}sf(t,!0,n,null,s,i);break;case"together":sf(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ia(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xa|=t.lanes,!(n&t.childLanes))if(e!==null){if(Ir(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(J(153));if(t.child!==null){for(e=t.child,n=Zi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pp(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Dc(e)))}function mE(e,t,n){switch(t.tag){case 3:Ec(t,t.stateNode.containerInfo),ya(t,ke,e.memoizedState.cache),ms();break;case 27:case 5:ud(t);break;case 4:Ec(t,t.stateNode.containerInfo);break;case 10:ya(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,wd(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ma(t),t.flags|=128,null):n&t.child.childLanes?hx(e,t,n):(Ma(t),e=ia(e,t,n),e!==null?e.sibling:null);Ma(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Ir(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return px(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ee(Be,Be.current),i)break;return null;case 22:return t.lanes=0,dx(e,t,n,t.pendingProps);case 24:ya(t,ke,e.memoizedState.cache)}return ia(e,t,n)}function mx(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!Pp(e,n)&&!(t.flags&128))return Xe=!1,mE(e,t,n);Xe=!!(e.flags&131072)}else Xe=!1,$t&&t.flags&1048576&&vv(t,Lo,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=is(t.elementType),t.type=e,typeof e=="function")hp(e)?(i=xs(e,i),t.tag=1,t=yg(null,t,e,i,n)):(t.tag=0,t=Pd(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===$h){t.tag=11,t=gg(null,t,e,i,n);break t}else if(a===tp){t.tag=14,t=_g(null,t,e,i,n);break t}}throw t=ld(e)||e,Error(J(306,t,""))}}return t;case 0:return Pd(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=xs(i,t.pendingProps),yg(e,t,i,a,n);case 3:t:{if(Ec(t,t.stateNode.containerInfo),e===null)throw Error(J(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,Ad(e,t),yo(t,i,null,n);var r=t.memoizedState;if(i=r.cache,ya(t,ke,i),i!==s.cache&&bd(t,[ke],n,!0),So(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Mg(e,t,i,n);break t}else if(i!==a){a=Jn(Error(J(424)),t),Oo(a),t=Mg(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ae=ni(e.firstChild),an=t,$t=!0,La=null,$n=!0,n=bv(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ms(),i===a){t=ia(e,t,n);break t}en(e,t,i,n)}t=t.child}return t;case 26:return cc(e,t),e===null?(n=kg(t.type,null,t.pendingProps,null))?t.memoizedState=n:$t||(n=t.type,e=t.pendingProps,i=Wc(Ua.current).createElement(n),i[nn]=t,i[An]=e,on(i,n,e),Je(i),t.stateNode=i):t.memoizedState=kg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ud(t),e===null&&$t&&(i=t.stateNode=sS(t.type,t.pendingProps,Ua.current),an=t,$n=!0,a=Ae,Ya(t.type)?(Kd=a,Ae=ni(i.firstChild)):Ae=a),en(e,t,t.pendingProps.children,n),cc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&$t&&((a=i=Ae)&&(i=WE(i,t.type,t.pendingProps,$n),i!==null?(t.stateNode=i,an=t,Ae=ni(i.firstChild),$n=!1,a=!0):a=!1),a||Va(t)),ud(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,jd(a,s)?i=null:r!==null&&jd(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=Mp(e,t,rE,null,null,n),Ho._currentValue=a),cc(e,t),en(e,t,i,n),t.child;case 6:return e===null&&$t&&((e=n=Ae)&&(n=jE(n,t.pendingProps,$n),n!==null?(t.stateNode=n,an=t,Ae=null,e=!0):e=!1),e||Va(t)),null;case 13:return hx(e,t,n);case 4:return Ec(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=_s(t,null,i,n):en(e,t,i,n),t.child;case 11:return gg(e,t,t.type,t.pendingProps,n);case 7:return en(e,t,t.pendingProps,n),t.child;case 8:return en(e,t,t.pendingProps.children,n),t.child;case 12:return en(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ya(t,t.type,i.value),en(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,gs(t),a=sn(a),i=i(a),t.flags|=1,en(e,t,i,n),t.child;case 14:return _g(e,t,t.type,t.pendingProps,n);case 15:return fx(e,t,t.type,t.pendingProps,n);case 19:return px(e,t,n);case 31:return pE(e,t,n);case 22:return dx(e,t,n,t.pendingProps);case 24:return gs(t),i=sn(ke),e===null?(a=_p(),a===null&&(a=xe,s=gp(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},xp(t),ya(t,ke,a)):(e.lanes&n&&(Ad(e,t),yo(t,null,null,n),So()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ya(t,ke,i)):(i=s.cache,ya(t,ke,i),i!==a.cache&&bd(t,[ke],n,!0))),en(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(J(156,t.tag))}function Li(e){e.flags|=4}function rf(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(zx())e.flags|=8192;else throw hs=Nc,vp}else e.flags&=-16777217}function bg(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!lS(t))if(zx())e.flags|=8192;else throw hs=Nc,vp}function Sl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?H0():536870912,e.lanes|=t,Er|=t)}function qr(e,t){if(!$t)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function gE(e,t,n){var i=t.pendingProps;switch(mp(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ki(ke),_r(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ns(t)?Li(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ku())),Te(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(Li(t),s!==null?(Te(t),bg(t,s)):(Te(t),rf(t,a,null,i,n))):s?s!==e.memoizedState?(Li(t),Te(t),bg(t,s)):(Te(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Li(t),Te(t),rf(t,a,e,i,n)),null;case 27:if(bc(t),n=Ua.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Li(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return Te(t),null}e=Mi.current,Ns(t)?$m(t):(e=sS(a,i,n),t.stateNode=e,Li(t))}return Te(t),null;case 5:if(bc(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Li(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return Te(t),null}if(s=Mi.current,Ns(t))$m(t);else{var r=Wc(Ua.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[nn]=t,s[An]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(on(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Li(t)}}return Te(t),rf(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Li(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(J(166));if(e=Ua.current,Ns(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=an,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[nn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||eS(e.nodeValue,n)),e||Va(t,!0)}else e=Wc(e).createTextNode(i),e[nn]=t,t.stateNode=e}return Te(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ns(t),n!==null){if(e===null){if(!i)throw Error(J(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(557));e[nn]=t}else ms(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),e=!1}else n=Ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ln(t),t):(Ln(t),null);if(t.flags&128)throw Error(J(558))}return Te(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ns(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(J(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(J(317));a[nn]=t}else ms(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),a=!1}else a=Ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Ln(t),t):(Ln(t),null)}return Ln(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Sl(t,t.updateQueue),Te(t),null);case 4:return _r(),e===null&&Vp(t.stateNode.containerInfo),Te(t),null;case 10:return Ki(t.type),Te(t),null;case 19:if($e(Be),i=t.memoizedState,i===null)return Te(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)qr(i,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Lc(e),s!==null){for(t.flags|=128,qr(i,!1),e=s.updateQueue,t.updateQueue=e,Sl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)gv(n,e),n=n.sibling;return Ee(Be,Be.current&1|2),$t&&Vi(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&In()>zc&&(t.flags|=128,a=!0,qr(i,!1),t.lanes=4194304)}else{if(!a)if(e=Lc(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Sl(t,e),qr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!$t)return Te(t),null}else 2*In()-i.renderingStartTime>zc&&n!==536870912&&(t.flags|=128,a=!0,qr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=In(),e.sibling=null,n=Be.current,Ee(Be,a?n&1|2:n&1),$t&&Vi(t,i.treeForkCount),e):(Te(t),null);case 22:case 23:return Ln(t),Sp(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),n=t.updateQueue,n!==null&&Sl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&$e(ds),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ki(ke),Te(t),null;case 25:return null;case 30:return null}throw Error(J(156,t.tag))}function _E(e,t){switch(mp(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ki(ke),_r(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return bc(t),null;case 31:if(t.memoizedState!==null){if(Ln(t),t.alternate===null)throw Error(J(340));ms()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ln(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(J(340));ms()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $e(Be),null;case 4:return _r(),null;case 10:return Ki(t.type),null;case 22:case 23:return Ln(t),Sp(),e!==null&&$e(ds),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ki(ke),null;case 25:return null;default:return null}}function gx(e,t){switch(mp(t),t.tag){case 3:Ki(ke),_r();break;case 26:case 27:case 5:bc(t);break;case 4:_r();break;case 31:t.memoizedState!==null&&Ln(t);break;case 13:Ln(t);break;case 19:$e(Be);break;case 10:Ki(t.type);break;case 22:case 23:Ln(t),Sp(),e!==null&&$e(ds);break;case 24:Ki(ke)}}function tl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){fe(t,t.return,o)}}function ka(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(d){fe(a,l,d)}}}i=i.next}while(i!==s)}}catch(d){fe(t,t.return,d)}}function _x(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Av(t,n)}catch(i){fe(e,e.return,i)}}}function vx(e,t,n){n.props=xs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){fe(e,t,i)}}function Eo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){fe(e,t,a)}}function xi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){fe(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){fe(e,t,a)}else n.current=null}function xx(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){fe(e,e.return,a)}}function of(e,t,n){try{var i=e.stateNode;zE(i,e.type,n,t),i[An]=t}catch(a){fe(e,e.return,a)}}function Sx(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function lf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Sx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bd(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ji));else if(i!==4&&(i===27&&Ya(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Bd(e,t,n),e=e.sibling;e!==null;)Bd(e,t,n),e=e.sibling}function Fc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Ya(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Fc(e,t,n),e=e.sibling;e!==null;)Fc(e,t,n),e=e.sibling}function yx(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);on(t,i,n),t[nn]=e,t[An]=n}catch(s){fe(e,e.return,s)}}var ki=!1,Ve=!1,cf=!1,Tg=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function vE(e,t){if(e=e.containerInfo,Xd=Zc,e=lv(e),up(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,d=0,h=e,u=null;e:for(;;){for(var p;h!==n||a!==0&&h.nodeType!==3||(o=r+a),h!==s||i!==0&&h.nodeType!==3||(l=r+i),h.nodeType===3&&(r+=h.nodeValue.length),(p=h.firstChild)!==null;)u=h,h=p;for(;;){if(h===e)break e;if(u===n&&++c===a&&(o=r),u===s&&++d===i&&(l=r),(p=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wd={focusedElem:e,selectionRange:n},Zc=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,s=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,n=t,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var v=xs(n.type,a);e=i.getSnapshotBeforeUpdate(v,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(M){fe(n,n.return,M)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)qd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(J(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function Mx(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Pi(e,n),i&4&&tl(5,n);break;case 1:if(Pi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){fe(n,n.return,r)}else{var a=xs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){fe(n,n.return,r)}}i&64&&_x(n),i&512&&Eo(n,n.return);break;case 3:if(Pi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Av(e,t)}catch(r){fe(n,n.return,r)}}break;case 27:t===null&&i&4&&yx(n);case 26:case 5:Pi(e,n),t===null&&i&4&&xx(n),i&512&&Eo(n,n.return);break;case 12:Pi(e,n);break;case 31:Pi(e,n),i&4&&Tx(e,n);break;case 13:Pi(e,n),i&4&&Ax(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=RE.bind(null,n),qE(e,n))));break;case 22:if(i=n.memoizedState!==null||ki,!i){t=t!==null&&t.memoizedState!==null||Ve,a=ki;var s=Ve;ki=i,(Ve=t)&&!s?Gi(e,n,(n.subtreeFlags&8772)!==0):Pi(e,n),ki=a,Ve=s}break;case 30:break;default:Pi(e,n)}}function Ex(e){var t=e.alternate;t!==null&&(e.alternate=null,Ex(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ap(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var we=null,yn=!1;function Oi(e,t,n){for(n=n.child;n!==null;)bx(e,t,n),n=n.sibling}function bx(e,t,n){if(Bn&&typeof Bn.onCommitFiberUnmount=="function")try{Bn.onCommitFiberUnmount(qo,n)}catch{}switch(n.tag){case 26:Ve||xi(n,t),Oi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ve||xi(n,t);var i=we,a=yn;Ya(n.type)&&(we=n.stateNode,yn=!1),Oi(e,t,n),Ro(n.stateNode),we=i,yn=a;break;case 5:Ve||xi(n,t);case 6:if(i=we,a=yn,we=null,Oi(e,t,n),we=i,yn=a,we!==null)if(yn)try{(we.nodeType===9?we.body:we.nodeName==="HTML"?we.ownerDocument.body:we).removeChild(n.stateNode)}catch(s){fe(n,t,s)}else try{we.removeChild(n.stateNode)}catch(s){fe(n,t,s)}break;case 18:we!==null&&(yn?(e=we,Fg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Rr(e)):Fg(we,n.stateNode));break;case 4:i=we,a=yn,we=n.stateNode.containerInfo,yn=!0,Oi(e,t,n),we=i,yn=a;break;case 0:case 11:case 14:case 15:ka(2,n,t),Ve||ka(4,n,t),Oi(e,t,n);break;case 1:Ve||(xi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&vx(n,t,i)),Oi(e,t,n);break;case 21:Oi(e,t,n);break;case 22:Ve=(i=Ve)||n.memoizedState!==null,Oi(e,t,n),Ve=i;break;default:Oi(e,t,n)}}function Tx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Rr(e)}catch(n){fe(t,t.return,n)}}}function Ax(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Rr(e)}catch(n){fe(t,t.return,n)}}function xE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Tg),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Tg),t;default:throw Error(J(435,e.tag))}}function yl(e,t){var n=xE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=CE.bind(null,e,i);i.then(a,a)}})}function vn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(Ya(o.type)){we=o.stateNode,yn=!1;break t}break;case 5:we=o.stateNode,yn=!1;break t;case 3:case 4:we=o.stateNode.containerInfo,yn=!0;break t}o=o.return}if(we===null)throw Error(J(160));bx(s,r,a),we=null,yn=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Rx(t,e),t=t.sibling}var li=null;function Rx(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vn(t,e),xn(e),i&4&&(ka(3,e,e.return),tl(3,e),ka(5,e,e.return));break;case 1:vn(t,e),xn(e),i&512&&(Ve||n===null||xi(n,n.return)),i&64&&ki&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=li;if(vn(t,e),xn(e),i&512&&(Ve||n===null||xi(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[Ko]||s[nn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),on(s,i,n),s[nn]=e,Je(s),i=s;break t;case"link":var r=Wg("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}s=a.createElement(i),on(s,i,n),a.head.appendChild(s);break;case"meta":if(r=Wg("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}s=a.createElement(i),on(s,i,n),a.head.appendChild(s);break;default:throw Error(J(468,i))}s[nn]=e,Je(s),i=s}e.stateNode=i}else jg(a,e.type,e.stateNode);else e.stateNode=Xg(a,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?jg(a,e.type,e.stateNode):Xg(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&of(e,e.memoizedProps,n.memoizedProps)}break;case 27:vn(t,e),xn(e),i&512&&(Ve||n===null||xi(n,n.return)),n!==null&&i&4&&of(e,e.memoizedProps,n.memoizedProps);break;case 5:if(vn(t,e),xn(e),i&512&&(Ve||n===null||xi(n,n.return)),e.flags&32){a=e.stateNode;try{xr(a,"")}catch(v){fe(e,e.return,v)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,of(e,a,n!==null?n.memoizedProps:a)),i&1024&&(cf=!0);break;case 6:if(vn(t,e),xn(e),i&4){if(e.stateNode===null)throw Error(J(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(v){fe(e,e.return,v)}}break;case 3:if(dc=null,a=li,li=jc(t.containerInfo),vn(t,e),li=a,xn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Rr(t.containerInfo)}catch(v){fe(e,e.return,v)}cf&&(cf=!1,Cx(e));break;case 4:i=li,li=jc(e.stateNode.containerInfo),vn(t,e),xn(e),li=i;break;case 12:vn(t,e),xn(e);break;case 31:vn(t,e),xn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,yl(e,i)));break;case 13:vn(t,e),xn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Eu=In()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,yl(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=ki,d=Ve;if(ki=c||a,Ve=d||l,vn(t,e),Ve=d,ki=c,xn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||ki||Ve||as(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var h=l.memoizedProps.style,u=h!=null&&h.hasOwnProperty("display")?h.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(v){fe(l,l.return,v)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(v){fe(l,l.return,v)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;a?zg(p,!0):zg(l.stateNode,!1)}catch(v){fe(l,l.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,yl(e,n))));break;case 19:vn(t,e),xn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,yl(e,i)));break;case 30:break;case 21:break;default:vn(t,e),xn(e)}}function xn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Sx(i)){n=i;break}i=i.return}if(n==null)throw Error(J(160));switch(n.tag){case 27:var a=n.stateNode,s=lf(e);Fc(e,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(xr(r,""),n.flags&=-33);var o=lf(e);Fc(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=lf(e);Bd(e,c,l);break;default:throw Error(J(161))}}catch(d){fe(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Cx(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Pi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Mx(e,t.alternate,t),t=t.sibling}function as(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ka(4,t,t.return),as(t);break;case 1:xi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&vx(t,t.return,n),as(t);break;case 27:Ro(t.stateNode);case 26:case 5:xi(t,t.return),as(t);break;case 22:t.memoizedState===null&&as(t);break;case 30:as(t);break;default:as(t)}e=e.sibling}}function Gi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:Gi(a,s,n),tl(4,s);break;case 1:if(Gi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){fe(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)Tv(l[a],o)}catch(c){fe(i,i.return,c)}}n&&r&64&&_x(s),Eo(s,s.return);break;case 27:yx(s);case 26:case 5:Gi(a,s,n),n&&i===null&&r&4&&xx(s),Eo(s,s.return);break;case 12:Gi(a,s,n);break;case 31:Gi(a,s,n),n&&r&4&&Tx(a,s);break;case 13:Gi(a,s,n),n&&r&4&&Ax(a,s);break;case 22:s.memoizedState===null&&Gi(a,s,n),Eo(s,s.return);break;case 30:break;default:Gi(a,s,n)}t=t.sibling}}function Ip(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Jo(n))}function Bp(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jo(e))}function ai(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wx(e,t,n,i),t=t.sibling}function wx(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ai(e,t,n,i),a&2048&&tl(9,t);break;case 1:ai(e,t,n,i);break;case 3:ai(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jo(e)));break;case 12:if(a&2048){ai(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){fe(t,t.return,l)}}else ai(e,t,n,i);break;case 31:ai(e,t,n,i);break;case 13:ai(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?ai(e,t,n,i):bo(e,t):s._visibility&2?ai(e,t,n,i):(s._visibility|=2,Ys(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&Ip(r,t);break;case 24:ai(e,t,n,i),a&2048&&Bp(t.alternate,t);break;default:ai(e,t,n,i)}}function Ys(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Ys(s,r,o,l,a),tl(8,r);break;case 23:break;case 22:var d=r.stateNode;r.memoizedState!==null?d._visibility&2?Ys(s,r,o,l,a):bo(s,r):(d._visibility|=2,Ys(s,r,o,l,a)),a&&c&2048&&Ip(r.alternate,r);break;case 24:Ys(s,r,o,l,a),a&&c&2048&&Bp(r.alternate,r);break;default:Ys(s,r,o,l,a)}t=t.sibling}}function bo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:bo(n,i),a&2048&&Ip(i.alternate,i);break;case 24:bo(n,i),a&2048&&Bp(i.alternate,i);break;default:bo(n,i)}t=t.sibling}}var co=8192;function Us(e,t,n){if(e.subtreeFlags&co)for(e=e.child;e!==null;)Dx(e,t,n),e=e.sibling}function Dx(e,t,n){switch(e.tag){case 26:Us(e,t,n),e.flags&co&&e.memoizedState!==null&&sb(n,li,e.memoizedState,e.memoizedProps);break;case 5:Us(e,t,n);break;case 3:case 4:var i=li;li=jc(e.stateNode.containerInfo),Us(e,t,n),li=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=co,co=16777216,Us(e,t,n),co=i):Us(e,t,n));break;default:Us(e,t,n)}}function Nx(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Yr(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,Lx(i,e)}Nx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ux(e),e=e.sibling}function Ux(e){switch(e.tag){case 0:case 11:case 15:Yr(e),e.flags&2048&&ka(9,e,e.return);break;case 3:Yr(e);break;case 12:Yr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,uc(e)):Yr(e);break;default:Yr(e)}}function uc(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,Lx(i,e)}Nx(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ka(8,t,t.return),uc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,uc(t));break;default:uc(t)}e=e.sibling}}function Lx(e,t){for(;Qe!==null;){var n=Qe;switch(n.tag){case 0:case 11:case 15:ka(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Jo(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Qe=i;else t:for(n=e;Qe!==null;){i=Qe;var a=i.sibling,s=i.return;if(Ex(i),i===n){Qe=null;break t}if(a!==null){a.return=s,Qe=a;break t}Qe=s}}}var SE={getCacheForType:function(e){var t=sn(ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return sn(ke).controller.signal}},yE=typeof WeakMap=="function"?WeakMap:Map,ae=0,xe=null,Yt=null,Kt=0,ue=0,Un=null,Ca=!1,Fr=!1,Fp=!1,aa=0,Le=0,Xa=0,ps=0,zp=0,Pn=0,Er=0,To=null,Mn=null,Fd=!1,Eu=0,Ox=0,zc=1/0,Hc=null,Ia=null,je=0,Ba=null,br=null,Qi=0,zd=0,Hd=null,Px=null,Ao=0,Gd=null;function zn(){return ae&2&&Kt!==0?Kt&-Kt:Lt.T!==null?Gp():X0()}function Ix(){if(Pn===0)if(!(Kt&536870912)||$t){var e=hl;hl<<=1,!(hl&3932160)&&(hl=262144),Pn=e}else Pn=536870912;return e=Gn.current,e!==null&&(e.flags|=32),Pn}function En(e,t,n){(e===xe&&(ue===2||ue===9)||e.cancelPendingCommit!==null)&&(Tr(e,0),wa(e,Kt,Pn,!1)),Zo(e,n),(!(ae&2)||e!==xe)&&(e===xe&&(!(ae&2)&&(ps|=n),Le===4&&wa(e,Kt,Pn,!1)),Di(e))}function Bx(e,t,n){if(ae&6)throw Error(J(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Yo(e,t),a=i?bE(e,t):uf(e,t,!0),s=i;do{if(a===0){Fr&&!i&&wa(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!ME(n)){a=uf(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=To;var l=o.current.memoizedState.isDehydrated;if(l&&(Tr(o,r).flags|=256),r=uf(o,r,!1),r!==2){if(Fp&&!l){o.errorRecoveryDisabledLanes|=s,ps|=s,a=4;break t}s=Mn,Mn=a,s!==null&&(Mn===null?Mn=s:Mn.push.apply(Mn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){Tr(e,0),wa(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error(J(345));case 4:if((t&4194048)!==t)break;case 6:wa(i,t,Pn,!Ca);break t;case 2:Mn=null;break;case 3:case 5:break;default:throw Error(J(329))}if((t&62914560)===t&&(a=Eu+300-In(),10<a)){if(wa(i,t,Pn,!Ca),du(i,0,!0)!==0)break t;Qi=t,i.timeoutHandle=iS(Ag.bind(null,i,n,Mn,Hc,Fd,t,Pn,ps,Er,Ca,s,"Throttled",-0,0),a);break t}Ag(i,n,Mn,Hc,Fd,t,Pn,ps,Er,Ca,s,null,-0,0)}}break}while(!0);Di(e)}function Ag(e,t,n,i,a,s,r,o,l,c,d,h,u,p){if(e.timeoutHandle=-1,h=t.subtreeFlags,h&8192||(h&16785408)===16785408){h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},Dx(t,s,h);var v=(s&62914560)===s?Eu-In():(s&4194048)===s?Ox-In():0;if(v=rb(h,v),v!==null){Qi=s,e.cancelPendingCommit=v(Cg.bind(null,e,t,s,n,i,a,r,o,l,d,h,null,u,p)),wa(e,s,r,!c);return}}Cg(e,t,s,n,i,a,r,o,l)}function ME(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!Hn(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wa(e,t,n,i){t&=~zp,t&=~ps,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-Fn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&G0(e,n,t)}function bu(){return ae&6?!0:(el(0),!1)}function Hp(){if(Yt!==null){if(ue===0)var e=Yt.return;else e=Yt,qi=Rs=null,Tp(e),dr=null,Po=0,e=Yt;for(;e!==null;)gx(e.alternate,e),e=e.return;Yt=null}}function Tr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,VE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Qi=0,Hp(),xe=e,Yt=n=Zi(e.current,null),Kt=t,ue=0,Un=null,Ca=!1,Fr=Yo(e,t),Fp=!1,Er=Pn=zp=ps=Xa=Le=0,Mn=To=null,Fd=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Fn(i),s=1<<a;t|=e[a],i&=~s}return aa=t,gu(),n}function Fx(e,t){Ht=null,Lt.H=Bo,t===Br||t===vu?(t=ag(),ue=3):t===vp?(t=ag(),ue=4):ue=t===Op?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Un=t,Yt===null&&(Le=1,Ic(e,Jn(t,e.current)))}function zx(){var e=Gn.current;return e===null?!0:(Kt&4194048)===Kt?ei===null:(Kt&62914560)===Kt||Kt&536870912?e===ei:!1}function Hx(){var e=Lt.H;return Lt.H=Bo,e===null?Bo:e}function Gx(){var e=Lt.A;return Lt.A=SE,e}function Gc(){Le=4,Ca||(Kt&4194048)!==Kt&&Gn.current!==null||(Fr=!0),!(Xa&134217727)&&!(ps&134217727)||xe===null||wa(xe,Kt,Pn,!1)}function uf(e,t,n){var i=ae;ae|=2;var a=Hx(),s=Gx();(xe!==e||Kt!==t)&&(Hc=null,Tr(e,t)),t=!1;var r=Le;t:do try{if(ue!==0&&Yt!==null){var o=Yt,l=Un;switch(ue){case 8:Hp(),r=6;break t;case 3:case 2:case 9:case 6:Gn.current===null&&(t=!0);var c=ue;if(ue=0,Un=null,or(e,o,l,c),n&&Fr){r=0;break t}break;default:c=ue,ue=0,Un=null,or(e,o,l,c)}}EE(),r=Le;break}catch(d){Fx(e,d)}while(!0);return t&&e.shellSuspendCounter++,qi=Rs=null,ae=i,Lt.H=a,Lt.A=s,Yt===null&&(xe=null,Kt=0,gu()),r}function EE(){for(;Yt!==null;)Vx(Yt)}function bE(e,t){var n=ae;ae|=2;var i=Hx(),a=Gx();xe!==e||Kt!==t?(Hc=null,zc=In()+500,Tr(e,t)):Fr=Yo(e,t);t:do try{if(ue!==0&&Yt!==null){t=Yt;var s=Un;e:switch(ue){case 1:ue=0,Un=null,or(e,t,s,1);break;case 2:case 9:if(ig(s)){ue=0,Un=null,Rg(t);break}t=function(){ue!==2&&ue!==9||xe!==e||(ue=7),Di(e)},s.then(t,t);break t;case 3:ue=7;break t;case 4:ue=5;break t;case 7:ig(s)?(ue=0,Un=null,Rg(t)):(ue=0,Un=null,or(e,t,s,7));break;case 5:var r=null;switch(Yt.tag){case 26:r=Yt.memoizedState;case 5:case 27:var o=Yt;if(r?lS(r):o.stateNode.complete){ue=0,Un=null;var l=o.sibling;if(l!==null)Yt=l;else{var c=o.return;c!==null?(Yt=c,Tu(c)):Yt=null}break e}}ue=0,Un=null,or(e,t,s,5);break;case 6:ue=0,Un=null,or(e,t,s,6);break;case 8:Hp(),Le=6;break t;default:throw Error(J(462))}}TE();break}catch(d){Fx(e,d)}while(!0);return qi=Rs=null,Lt.H=i,Lt.A=a,ae=n,Yt!==null?0:(xe=null,Kt=0,gu(),Le)}function TE(){for(;Yt!==null&&!Yy();)Vx(Yt)}function Vx(e){var t=mx(e.alternate,e,aa);e.memoizedProps=e.pendingProps,t===null?Tu(e):Yt=t}function Rg(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Sg(n,t,t.pendingProps,t.type,void 0,Kt);break;case 11:t=Sg(n,t,t.pendingProps,t.type.render,t.ref,Kt);break;case 5:Tp(t);default:gx(n,t),t=Yt=gv(t,aa),t=mx(n,t,aa)}e.memoizedProps=e.pendingProps,t===null?Tu(e):Yt=t}function or(e,t,n,i){qi=Rs=null,Tp(t),dr=null,Po=0;var a=t.return;try{if(hE(e,a,t,n,Kt)){Le=1,Ic(e,Jn(n,e.current)),Yt=null;return}}catch(s){if(a!==null)throw Yt=a,s;Le=1,Ic(e,Jn(n,e.current)),Yt=null;return}t.flags&32768?($t||i===1?e=!0:Fr||Kt&536870912?e=!1:(Ca=e=!0,(i===2||i===9||i===3||i===6)&&(i=Gn.current,i!==null&&i.tag===13&&(i.flags|=16384))),kx(t,e)):Tu(t)}function Tu(e){var t=e;do{if(t.flags&32768){kx(t,Ca);return}e=t.return;var n=gE(t.alternate,t,aa);if(n!==null){Yt=n;return}if(t=t.sibling,t!==null){Yt=t;return}Yt=t=e}while(t!==null);Le===0&&(Le=5)}function kx(e,t){do{var n=_E(e.alternate,e);if(n!==null){n.flags&=32767,Yt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Yt=e;return}Yt=e=n}while(e!==null);Le=6,Yt=null}function Cg(e,t,n,i,a,s,r,o,l){e.cancelPendingCommit=null;do Au();while(je!==0);if(ae&6)throw Error(J(327));if(t!==null){if(t===e.current)throw Error(J(177));if(s=t.lanes|t.childLanes,s|=fp,aM(e,n,s,r,o,l),e===xe&&(Yt=xe=null,Kt=0),br=t,Ba=e,Qi=n,zd=s,Hd=a,Px=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,wE(Tc,function(){return Yx(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Lt.T,Lt.T=null,a=se.p,se.p=2,r=ae,ae|=4;try{vE(e,t,n)}finally{ae=r,se.p=a,Lt.T=i}}je=1,Xx(),Wx(),jx()}}function Xx(){if(je===1){je=0;var e=Ba,t=br,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Lt.T,Lt.T=null;var i=se.p;se.p=2;var a=ae;ae|=4;try{Rx(t,e);var s=Wd,r=lv(e.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&ov(o.ownerDocument.documentElement,o)){if(l!==null&&up(o)){var c=l.start,d=l.end;if(d===void 0&&(d=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(d,o.value.length);else{var h=o.ownerDocument||document,u=h&&h.defaultView||window;if(u.getSelection){var p=u.getSelection(),v=o.textContent.length,M=Math.min(l.start,v),g=l.end===void 0?M:Math.min(l.end,v);!p.extend&&M>g&&(r=g,g=M,M=r);var f=Km(o,M),m=Km(o,g);if(f&&m&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==m.node||p.focusOffset!==m.offset)){var _=h.createRange();_.setStart(f.node,f.offset),p.removeAllRanges(),M>g?(p.addRange(_),p.extend(m.node,m.offset)):(_.setEnd(m.node,m.offset),p.addRange(_))}}}}for(h=[],p=o;p=p.parentNode;)p.nodeType===1&&h.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<h.length;o++){var x=h[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Zc=!!Xd,Wd=Xd=null}finally{ae=a,se.p=i,Lt.T=n}}e.current=t,je=2}}function Wx(){if(je===2){je=0;var e=Ba,t=br,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Lt.T,Lt.T=null;var i=se.p;se.p=2;var a=ae;ae|=4;try{Mx(e,t.alternate,t)}finally{ae=a,se.p=i,Lt.T=n}}je=3}}function jx(){if(je===4||je===3){je=0,Zy();var e=Ba,t=br,n=Qi,i=Px;t.subtreeFlags&10256||t.flags&10256?je=5:(je=0,br=Ba=null,qx(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Ia=null),ip(n),t=t.stateNode,Bn&&typeof Bn.onCommitFiberRoot=="function")try{Bn.onCommitFiberRoot(qo,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Lt.T,a=se.p,se.p=2,Lt.T=null;try{for(var s=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{Lt.T=t,se.p=a}}Qi&3&&Au(),Di(e),a=e.pendingLanes,n&261930&&a&42?e===Gd?Ao++:(Ao=0,Gd=e):Ao=0,el(0)}}function qx(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Jo(t)))}function Au(){return Xx(),Wx(),jx(),Yx()}function Yx(){if(je!==5)return!1;var e=Ba,t=zd;zd=0;var n=ip(Qi),i=Lt.T,a=se.p;try{se.p=32>n?32:n,Lt.T=null,n=Hd,Hd=null;var s=Ba,r=Qi;if(je=0,br=Ba=null,Qi=0,ae&6)throw Error(J(331));var o=ae;if(ae|=4,Ux(s.current),wx(s,s.current,r,n),ae=o,el(0,!1),Bn&&typeof Bn.onPostCommitFiberRoot=="function")try{Bn.onPostCommitFiberRoot(qo,s)}catch{}return!0}finally{se.p=a,Lt.T=i,qx(e,t)}}function wg(e,t,n){t=Jn(n,t),t=Od(e.stateNode,t,2),e=Pa(e,t,2),e!==null&&(Zo(e,2),Di(e))}function fe(e,t,n){if(e.tag===3)wg(e,e,n);else for(;t!==null;){if(t.tag===3){wg(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ia===null||!Ia.has(i))){e=Jn(n,e),n=cx(2),i=Pa(t,n,2),i!==null&&(ux(n,i,t,e),Zo(i,2),Di(i));break}}t=t.return}}function ff(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new yE;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Fp=!0,a.add(n),e=AE.bind(null,e,t,n),t.then(e,e))}function AE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,xe===e&&(Kt&n)===n&&(Le===4||Le===3&&(Kt&62914560)===Kt&&300>In()-Eu?!(ae&2)&&Tr(e,0):zp|=n,Er===Kt&&(Er=0)),Di(e)}function Zx(e,t){t===0&&(t=H0()),e=As(e,t),e!==null&&(Zo(e,t),Di(e))}function RE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zx(e,n)}function CE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(J(314))}i!==null&&i.delete(t),Zx(e,n)}function wE(e,t){return ep(e,t)}var Vc=null,Zs=null,Vd=!1,kc=!1,df=!1,Da=0;function Di(e){e!==Zs&&e.next===null&&(Zs===null?Vc=Zs=e:Zs=Zs.next=e),kc=!0,Vd||(Vd=!0,NE())}function el(e,t){if(!df&&kc){df=!0;do for(var n=!1,i=Vc;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Fn(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,Dg(i,s))}else s=Kt,s=du(i,i===xe?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||Yo(i,s)||(n=!0,Dg(i,s));i=i.next}while(n);df=!1}}function DE(){Kx()}function Kx(){kc=Vd=!1;var e=0;Da!==0&&GE()&&(e=Da);for(var t=In(),n=null,i=Vc;i!==null;){var a=i.next,s=Qx(i,t);s===0?(i.next=null,n===null?Vc=a:n.next=a,a===null&&(Zs=n)):(n=i,(e!==0||s&3)&&(kc=!0)),i=a}je!==0&&je!==5||el(e),Da!==0&&(Da=0)}function Qx(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-Fn(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=iM(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=xe,n=Kt,n=du(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ue===2||ue===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&zu(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Yo(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&zu(i),ip(n)){case 2:case 8:n=F0;break;case 32:n=Tc;break;case 268435456:n=z0;break;default:n=Tc}return i=Jx.bind(null,e),n=ep(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&zu(i),e.callbackPriority=2,e.callbackNode=null,2}function Jx(e,t){if(je!==0&&je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Au()&&e.callbackNode!==n)return null;var i=Kt;return i=du(e,e===xe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Bx(e,i,t),Qx(e,In()),e.callbackNode!=null&&e.callbackNode===n?Jx.bind(null,e):null)}function Dg(e,t){if(Au())return null;Bx(e,t,!0)}function NE(){kE(function(){ae&6?ep(B0,DE):Kx()})}function Gp(){if(Da===0){var e=Sr;e===0&&(e=dl,dl<<=1,!(dl&261888)&&(dl=256)),Da=e}return Da}function Ng(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ec(""+e)}function Ug(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function UE(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=Ng((a[An]||null).action),r=i.submitter;r&&(t=(t=r[An]||null)?Ng(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new hu("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Da!==0){var l=r?Ug(a,r):new FormData(a);Ud(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?Ug(a,r):new FormData(a),Ud(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var hf=0;hf<Sd.length;hf++){var pf=Sd[hf],LE=pf.toLowerCase(),OE=pf[0].toUpperCase()+pf.slice(1);fi(LE,"on"+OE)}fi(uv,"onAnimationEnd");fi(fv,"onAnimationIteration");fi(dv,"onAnimationStart");fi("dblclick","onDoubleClick");fi("focusin","onFocus");fi("focusout","onBlur");fi(KM,"onTransitionRun");fi(QM,"onTransitionStart");fi(JM,"onTransitionCancel");fi(hv,"onTransitionEnd");vr("onMouseEnter",["mouseout","mouseover"]);vr("onMouseLeave",["mouseout","mouseover"]);vr("onPointerEnter",["pointerout","pointerover"]);vr("onPointerLeave",["pointerout","pointerover"]);Es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Es("onBeforeInput",["compositionend","keypress","textInput","paste"]);Es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fo));function $x(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(d){Rc(d)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(d){Rc(d)}a.currentTarget=null,s=l}}}}function qt(e,t){var n=t[dd];n===void 0&&(n=t[dd]=new Set);var i=e+"__bubble";n.has(i)||(tS(t,e,2,!1),n.add(i))}function mf(e,t,n){var i=0;t&&(i|=4),tS(n,e,i,t)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function Vp(e){if(!e[Ml]){e[Ml]=!0,W0.forEach(function(n){n!=="selectionchange"&&(PE.has(n)||mf(n,!1,e),mf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ml]||(t[Ml]=!0,mf("selectionchange",!1,t))}}function tS(e,t,n,i){switch(hS(t)){case 2:var a=cb;break;case 8:a=ub;break;default:a=jp}n=a.bind(null,t,n,e),a=void 0,!_d||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function gf(e,t,n,i,a){var s=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=Js(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}$0(function(){var c=s,d=rp(n),h=[];t:{var u=pv.get(e);if(u!==void 0){var p=hu,v=e;switch(e){case"keypress":if(ic(n)===0)break t;case"keydown":case"keyup":p=CM;break;case"focusin":v="focus",p=Xu;break;case"focusout":v="blur",p=Xu;break;case"beforeblur":case"afterblur":p=Xu;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=gM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=NM;break;case uv:case fv:case dv:p=xM;break;case hv:p=LM;break;case"scroll":case"scrollend":p=pM;break;case"wheel":p=PM;break;case"copy":case"cut":case"paste":p=yM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Vm;break;case"toggle":case"beforetoggle":p=BM}var M=(t&4)!==0,g=!M&&(e==="scroll"||e==="scrollend"),f=M?u!==null?u+"Capture":null:u;M=[];for(var m=c,_;m!==null;){var x=m;if(_=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||_===null||f===null||(x=Do(m,f),x!=null&&M.push(zo(m,x,_))),g)break;m=m.return}0<M.length&&(u=new p(u,v,null,n,d),h.push({event:u,listeners:M}))}}if(!(t&7)){t:{if(u=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",u&&n!==gd&&(v=n.relatedTarget||n.fromElement)&&(Js(v)||v[Or]))break t;if((p||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Js(v):null,v!==null&&(g=jo(v),M=v.tag,v!==g||M!==5&&M!==27&&M!==6)&&(v=null)):(p=null,v=c),p!==v)){if(M=Hm,x="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(M=Vm,x="onPointerLeave",f="onPointerEnter",m="pointer"),g=p==null?u:oo(p),_=v==null?u:oo(v),u=new M(x,m+"leave",p,n,d),u.target=g,u.relatedTarget=_,x=null,Js(d)===c&&(M=new M(f,m+"enter",v,n,d),M.target=_,M.relatedTarget=g,x=M),g=x,p&&v)e:{for(M=IE,f=p,m=v,_=0,x=f;x;x=M(x))_++;x=0;for(var C=m;C;C=M(C))x++;for(;0<_-x;)f=M(f),_--;for(;0<x-_;)m=M(m),x--;for(;_--;){if(f===m||m!==null&&f===m.alternate){M=f;break e}f=M(f),m=M(m)}M=null}else M=null;p!==null&&Lg(h,u,p,M,!1),v!==null&&g!==null&&Lg(h,g,v,M,!0)}}t:{if(u=c?oo(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var b=jm;else if(Wm(u))if(sv)b=qM;else{b=WM;var R=XM}else p=u.nodeName,!p||p.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&sp(c.elementType)&&(b=jm):b=jM;if(b&&(b=b(e,c))){av(h,b,n,d);break t}R&&R(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&md(u,"number",u.value)}switch(R=c?oo(c):window,e){case"focusin":(Wm(R)||R.contentEditable==="true")&&(er=R,vd=c,_o=null);break;case"focusout":_o=vd=er=null;break;case"mousedown":xd=!0;break;case"contextmenu":case"mouseup":case"dragend":xd=!1,Qm(h,n,d);break;case"selectionchange":if(ZM)break;case"keydown":case"keyup":Qm(h,n,d)}var S;if(cp)t:{switch(e){case"compositionstart":var A="onCompositionStart";break t;case"compositionend":A="onCompositionEnd";break t;case"compositionupdate":A="onCompositionUpdate";break t}A=void 0}else tr?nv(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(ev&&n.locale!=="ko"&&(tr||A!=="onCompositionStart"?A==="onCompositionEnd"&&tr&&(S=tv()):(Ra=d,op="value"in Ra?Ra.value:Ra.textContent,tr=!0)),R=Xc(c,A),0<R.length&&(A=new Gm(A,e,null,n,d),h.push({event:A,listeners:R}),S?A.data=S:(S=iv(n),S!==null&&(A.data=S)))),(S=zM?HM(e,n):GM(e,n))&&(A=Xc(c,"onBeforeInput"),0<A.length&&(R=new Gm("onBeforeInput","beforeinput",null,n,d),h.push({event:R,listeners:A}),R.data=S)),UE(h,e,c,n,d)}$x(h,t)})}function zo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xc(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=Do(e,n),a!=null&&i.unshift(zo(e,a,s)),a=Do(e,t),a!=null&&i.push(zo(e,a,s))),e.tag===3)return i;e=e.return}return[]}function IE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Lg(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=Do(n,s),c!=null&&r.unshift(zo(n,c,l))):a||(c=Do(n,s),c!=null&&r.push(zo(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var BE=/\r\n?/g,FE=/\u0000|\uFFFD/g;function Og(e){return(typeof e=="string"?e:""+e).replace(BE,`
`).replace(FE,"")}function eS(e,t){return t=Og(t),Og(e)===t}function me(e,t,n,i,a,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||xr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&xr(e,""+i);break;case"className":ml(e,"class",i);break;case"tabIndex":ml(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":ml(e,n,i);break;case"style":J0(e,i,s);break;case"data":if(t!=="object"){ml(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=ec(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&me(e,t,"name",a.name,a,null),me(e,t,"formEncType",a.formEncType,a,null),me(e,t,"formMethod",a.formMethod,a,null),me(e,t,"formTarget",a.formTarget,a,null)):(me(e,t,"encType",a.encType,a,null),me(e,t,"method",a.method,a,null),me(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=ec(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ji);break;case"onScroll":i!=null&&qt("scroll",e);break;case"onScrollEnd":i!=null&&qt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(J(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=ec(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":qt("beforetoggle",e),qt("toggle",e),tc(e,"popover",i);break;case"xlinkActuate":Ui(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ui(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ui(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ui(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ui(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ui(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ui(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ui(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ui(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":tc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=dM.get(n)||n,tc(e,n,i))}}function kd(e,t,n,i,a,s){switch(n){case"style":J0(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(J(60));e.innerHTML=n}}break;case"children":typeof i=="string"?xr(e,i):(typeof i=="number"||typeof i=="bigint")&&xr(e,""+i);break;case"onScroll":i!=null&&qt("scroll",e);break;case"onScrollEnd":i!=null&&qt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!j0.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),s=e[An]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):tc(e,n,i)}}}function on(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":qt("error",e),qt("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:me(e,t,s,r,n,null)}}a&&me(e,t,"srcSet",n.srcSet,n,null),i&&me(e,t,"src",n.src,n,null);return;case"input":qt("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":a=d;break;case"type":r=d;break;case"checked":l=d;break;case"defaultChecked":c=d;break;case"value":s=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(J(137,t));break;default:me(e,t,i,d,n,null)}}Z0(e,s,o,l,c,r,a,!1);return;case"select":qt("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:me(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?cr(e,!!i,t,!1):n!=null&&cr(e,!!i,n,!0);return;case"textarea":qt("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(J(91));break;default:me(e,t,r,o,n,null)}Q0(e,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:me(e,t,l,i,n,null)}return;case"dialog":qt("beforetoggle",e),qt("toggle",e),qt("cancel",e),qt("close",e);break;case"iframe":case"object":qt("load",e);break;case"video":case"audio":for(i=0;i<Fo.length;i++)qt(Fo[i],e);break;case"image":qt("error",e),qt("load",e);break;case"details":qt("toggle",e);break;case"embed":case"source":case"link":qt("error",e),qt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:me(e,t,c,i,n,null)}return;default:if(sp(t)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&kd(e,t,d,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&me(e,t,o,i,n,null))}function zE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,d=null;for(p in n){var h=n[p];if(n.hasOwnProperty(p)&&h!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=h;default:i.hasOwnProperty(p)||me(e,t,p,null,i,h)}}for(var u in i){var p=i[u];if(h=n[u],i.hasOwnProperty(u)&&(p!=null||h!=null))switch(u){case"type":s=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":d=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(J(137,t));break;default:p!==h&&me(e,t,u,p,i,h)}}pd(e,r,o,l,c,d,s,a);return;case"select":p=r=o=u=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(s)||me(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":u=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&me(e,t,a,s,i,l)}t=o,n=r,i=p,u!=null?cr(e,!!n,u,!1):!!i!=!!n&&(t!=null?cr(e,!!n,t,!0):cr(e,!!n,n?[]:"",!1));return;case"textarea":p=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:me(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":u=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(J(91));break;default:a!==s&&me(e,t,r,a,i,s)}K0(e,u,p);return;case"option":for(var v in n)if(u=n[v],n.hasOwnProperty(v)&&u!=null&&!i.hasOwnProperty(v))switch(v){case"selected":e.selected=!1;break;default:me(e,t,v,null,i,u)}for(l in i)if(u=i[l],p=n[l],i.hasOwnProperty(l)&&u!==p&&(u!=null||p!=null))switch(l){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:me(e,t,l,u,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)u=n[M],n.hasOwnProperty(M)&&u!=null&&!i.hasOwnProperty(M)&&me(e,t,M,null,i,u);for(c in i)if(u=i[c],p=n[c],i.hasOwnProperty(c)&&u!==p&&(u!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(J(137,t));break;default:me(e,t,c,u,i,p)}return;default:if(sp(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&kd(e,t,g,void 0,i,u);for(d in i)u=i[d],p=n[d],!i.hasOwnProperty(d)||u===p||u===void 0&&p===void 0||kd(e,t,d,u,i,p);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&me(e,t,f,null,i,u);for(h in i)u=i[h],p=n[h],!i.hasOwnProperty(h)||u===p||u==null&&p==null||me(e,t,h,u,i,p)}function Pg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function HE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&Pg(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var d=l.transferSize,h=l.initiatorType;d&&Pg(h)&&(l=l.responseEnd,r+=d*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Xd=null,Wd=null;function Wc(e){return e.nodeType===9?e:e.ownerDocument}function Ig(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function jd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _f=null;function GE(){var e=window.event;return e&&e.type==="popstate"?e===_f?!1:(_f=e,!0):(_f=null,!1)}var iS=typeof setTimeout=="function"?setTimeout:void 0,VE=typeof clearTimeout=="function"?clearTimeout:void 0,Bg=typeof Promise=="function"?Promise:void 0,kE=typeof queueMicrotask=="function"?queueMicrotask:typeof Bg<"u"?function(e){return Bg.resolve(null).then(e).catch(XE)}:iS;function XE(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function Fg(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Rr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Ro(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ro(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[Ko]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&Ro(e.ownerDocument.body);n=a}while(n);Rr(t)}function zg(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function qd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":qd(n),ap(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function WE(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Ko])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=ni(e.nextSibling),e===null)break}return null}function jE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ni(e.nextSibling),e===null))return null;return e}function aS(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ni(e.nextSibling),e===null))return null;return e}function Yd(e){return e.data==="$?"||e.data==="$~"}function Zd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function qE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ni(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Kd=null;function Hg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ni(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Gg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function sS(e,t,n){switch(t=Wc(n),e){case"html":if(e=t.documentElement,!e)throw Error(J(452));return e;case"head":if(e=t.head,!e)throw Error(J(453));return e;case"body":if(e=t.body,!e)throw Error(J(454));return e;default:throw Error(J(451))}}function Ro(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ap(e)}var ii=new Map,Vg=new Set;function jc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var oa=se.d;se.d={f:YE,r:ZE,D:KE,C:QE,L:JE,m:$E,X:eb,S:tb,M:nb};function YE(){var e=oa.f(),t=bu();return e||t}function ZE(e){var t=Pr(e);t!==null&&t.tag===5&&t.type==="form"?Jv(t):oa.r(e)}var zr=typeof document>"u"?null:document;function rS(e,t,n){var i=zr;if(i&&typeof t=="string"&&t){var a=Qn(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Vg.has(a)||(Vg.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),on(t,"link",e),Je(t),i.head.appendChild(t)))}}function KE(e){oa.D(e),rS("dns-prefetch",e,null)}function QE(e,t){oa.C(e,t),rS("preconnect",e,t)}function JE(e,t,n){oa.L(e,t,n);var i=zr;if(i&&e&&t){var a='link[rel="preload"][as="'+Qn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Qn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Qn(n.imageSizes)+'"]')):a+='[href="'+Qn(e)+'"]';var s=a;switch(t){case"style":s=Ar(e);break;case"script":s=Hr(e)}ii.has(s)||(e=Ce({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ii.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(nl(s))||t==="script"&&i.querySelector(il(s))||(t=i.createElement("link"),on(t,"link",e),Je(t),i.head.appendChild(t)))}}function $E(e,t){oa.m(e,t);var n=zr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Qn(i)+'"][href="'+Qn(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Hr(e)}if(!ii.has(s)&&(e=Ce({rel:"modulepreload",href:e},t),ii.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(il(s)))return}i=n.createElement("link"),on(i,"link",e),Je(i),n.head.appendChild(i)}}}function tb(e,t,n){oa.S(e,t,n);var i=zr;if(i&&e){var a=lr(i).hoistableStyles,s=Ar(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(nl(s)))o.loading=5;else{e=Ce({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ii.get(s))&&kp(e,n);var l=r=i.createElement("link");Je(l),on(l,"link",e),l._p=new Promise(function(c,d){l.onload=c,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,fc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function eb(e,t){oa.X(e,t);var n=zr;if(n&&e){var i=lr(n).hoistableScripts,a=Hr(e),s=i.get(a);s||(s=n.querySelector(il(a)),s||(e=Ce({src:e,async:!0},t),(t=ii.get(a))&&Xp(e,t),s=n.createElement("script"),Je(s),on(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function nb(e,t){oa.M(e,t);var n=zr;if(n&&e){var i=lr(n).hoistableScripts,a=Hr(e),s=i.get(a);s||(s=n.querySelector(il(a)),s||(e=Ce({src:e,async:!0,type:"module"},t),(t=ii.get(a))&&Xp(e,t),s=n.createElement("script"),Je(s),on(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function kg(e,t,n,i){var a=(a=Ua.current)?jc(a):null;if(!a)throw Error(J(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ar(n.href),n=lr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ar(n.href);var s=lr(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(nl(e)))&&!s._p&&(r.instance=s,r.state.loading=5),ii.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ii.set(e,n),s||ib(a,e,n,r.state))),t&&i===null)throw Error(J(528,""));return r}if(t&&i!==null)throw Error(J(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Hr(n),n=lr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(J(444,e))}}function Ar(e){return'href="'+Qn(e)+'"'}function nl(e){return'link[rel="stylesheet"]['+e+"]"}function oS(e){return Ce({},e,{"data-precedence":e.precedence,precedence:null})}function ib(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),on(t,"link",n),Je(t),e.head.appendChild(t))}function Hr(e){return'[src="'+Qn(e)+'"]'}function il(e){return"script[async]"+e}function Xg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Qn(n.href)+'"]');if(i)return t.instance=i,Je(i),i;var a=Ce({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Je(i),on(i,"style",a),fc(i,n.precedence,e),t.instance=i;case"stylesheet":a=Ar(n.href);var s=e.querySelector(nl(a));if(s)return t.state.loading|=4,t.instance=s,Je(s),s;i=oS(n),(a=ii.get(a))&&kp(i,a),s=(e.ownerDocument||e).createElement("link"),Je(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),on(s,"link",i),t.state.loading|=4,fc(s,n.precedence,e),t.instance=s;case"script":return s=Hr(n.src),(a=e.querySelector(il(s)))?(t.instance=a,Je(a),a):(i=n,(a=ii.get(s))&&(i=Ce({},n),Xp(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),Je(a),on(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(J(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,fc(i,n.precedence,e));return t.instance}function fc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function kp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Xp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var dc=null;function Wg(e,t,n){if(dc===null){var i=new Map,a=dc=new Map;a.set(n,i)}else a=dc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[Ko]||s[nn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function jg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ab(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function lS(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function sb(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=Ar(i.href),s=t.querySelector(nl(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=qc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,Je(s);return}s=t.ownerDocument||t,i=oS(i),(a=ii.get(a))&&kp(i,a),s=s.createElement("link"),Je(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),on(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=qc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var vf=0;function rb(e,t){return e.stylesheets&&e.count===0&&hc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&vf===0&&(vf=62500*HE());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>vf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function qc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yc=null;function hc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yc=new Map,t.forEach(ob,e),Yc=null,qc.call(e))}function ob(e,t){if(!(t.state.loading&4)){var n=Yc.get(e);if(n)var i=n.get(null);else{n=new Map,Yc.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=qc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Ho={$$typeof:Wi,Provider:null,Consumer:null,_currentValue:us,_currentValue2:us,_threadCount:0};function lb(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Hu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hu(0),this.hiddenUpdates=Hu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function cS(e,t,n,i,a,s,r,o,l,c,d,h){return e=new lb(e,t,n,r,l,c,d,h,o),t=1,s===!0&&(t|=24),s=On(3,null,null,t),e.current=s,s.stateNode=e,t=gp(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},xp(s),e}function uS(e){return e?(e=ar,e):ar}function fS(e,t,n,i,a,s){a=uS(a),i.context===null?i.context=a:i.pendingContext=a,i=Oa(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Pa(e,i,t),n!==null&&(En(n,e,t),xo(n,e,t))}function qg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Wp(e,t){qg(e,t),(e=e.alternate)&&qg(e,t)}function dS(e){if(e.tag===13||e.tag===31){var t=As(e,67108864);t!==null&&En(t,e,67108864),Wp(e,67108864)}}function Yg(e){if(e.tag===13||e.tag===31){var t=zn();t=np(t);var n=As(e,t);n!==null&&En(n,e,t),Wp(e,t)}}var Zc=!0;function cb(e,t,n,i){var a=Lt.T;Lt.T=null;var s=se.p;try{se.p=2,jp(e,t,n,i)}finally{se.p=s,Lt.T=a}}function ub(e,t,n,i){var a=Lt.T;Lt.T=null;var s=se.p;try{se.p=8,jp(e,t,n,i)}finally{se.p=s,Lt.T=a}}function jp(e,t,n,i){if(Zc){var a=Qd(i);if(a===null)gf(e,t,i,Kc,n),Zg(e,i);else if(db(a,e,t,n,i))i.stopPropagation();else if(Zg(e,i),t&4&&-1<fb.indexOf(e)){for(;a!==null;){var s=Pr(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=ns(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Fn(r);o.entanglements[1]|=l,r&=~l}Di(s),!(ae&6)&&(zc=In()+500,el(0))}}break;case 31:case 13:o=As(s,2),o!==null&&En(o,s,2),bu(),Wp(s,2)}if(s=Qd(i),s===null&&gf(e,t,i,Kc,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else gf(e,t,i,null,n)}}function Qd(e){return e=rp(e),qp(e)}var Kc=null;function qp(e){if(Kc=null,e=Js(e),e!==null){var t=jo(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=U0(t),e!==null)return e;e=null}else if(n===31){if(e=L0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Kc=e,null}function hS(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ky()){case B0:return 2;case F0:return 8;case Tc:case Qy:return 32;case z0:return 268435456;default:return 32}default:return 32}}var Jd=!1,Fa=null,za=null,Ha=null,Go=new Map,Vo=new Map,ba=[],fb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zg(e,t){switch(e){case"focusin":case"focusout":Fa=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ha=null;break;case"pointerover":case"pointerout":Go.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(t.pointerId)}}function Zr(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Pr(t),t!==null&&dS(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function db(e,t,n,i,a){switch(t){case"focusin":return Fa=Zr(Fa,e,t,n,i,a),!0;case"dragenter":return za=Zr(za,e,t,n,i,a),!0;case"mouseover":return Ha=Zr(Ha,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return Go.set(s,Zr(Go.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,Vo.set(s,Zr(Vo.get(s)||null,e,t,n,i,a)),!0}return!1}function pS(e){var t=Js(e.target);if(t!==null){var n=jo(t);if(n!==null){if(t=n.tag,t===13){if(t=U0(n),t!==null){e.blockedOn=t,Lm(e.priority,function(){Yg(n)});return}}else if(t===31){if(t=L0(n),t!==null){e.blockedOn=t,Lm(e.priority,function(){Yg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qd(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);gd=i,n.target.dispatchEvent(i),gd=null}else return t=Pr(n),t!==null&&dS(t),e.blockedOn=n,!1;t.shift()}return!0}function Kg(e,t,n){pc(e)&&n.delete(t)}function hb(){Jd=!1,Fa!==null&&pc(Fa)&&(Fa=null),za!==null&&pc(za)&&(za=null),Ha!==null&&pc(Ha)&&(Ha=null),Go.forEach(Kg),Vo.forEach(Kg)}function El(e,t){e.blockedOn===t&&(e.blockedOn=null,Jd||(Jd=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,hb)))}var bl=null;function Qg(e){bl!==e&&(bl=e,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,function(){bl===e&&(bl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(qp(i||n)===null)continue;break}var s=Pr(n);s!==null&&(e.splice(t,3),t-=3,Ud(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Rr(e){function t(l){return El(l,e)}Fa!==null&&El(Fa,e),za!==null&&El(za,e),Ha!==null&&El(Ha,e),Go.forEach(t),Vo.forEach(t);for(var n=0;n<ba.length;n++){var i=ba[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ba.length&&(n=ba[0],n.blockedOn===null);)pS(n),n.blockedOn===null&&ba.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[An]||null;if(typeof s=="function")r||Qg(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[An]||null)o=r.formAction;else if(qp(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Qg(n)}}}function mS(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Yp(e){this._internalRoot=e}Ru.prototype.render=Yp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(J(409));var n=t.current,i=zn();fS(n,i,e,t,null,null)};Ru.prototype.unmount=Yp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fS(e.current,2,null,e,null,null),bu(),t[Or]=null}};function Ru(e){this._internalRoot=e}Ru.prototype.unstable_scheduleHydration=function(e){if(e){var t=X0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ba.length&&t!==0&&t<ba[n].priority;n++);ba.splice(n,0,e),n===0&&pS(e)}};var Jg=D0.version;if(Jg!=="19.2.7")throw Error(J(527,Jg,"19.2.7"));se.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(J(188)):(e=Object.keys(e).join(","),Error(J(268,e)));return e=ky(t),e=e!==null?O0(e):null,e=e===null?null:e.stateNode,e};var pb={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:Lt,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{qo=Tl.inject(pb),Bn=Tl}catch{}}uu.createRoot=function(e,t){if(!N0(e))throw Error(J(299));var n=!1,i="",a=rx,s=ox,r=lx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=cS(e,1,!1,null,null,n,i,null,a,s,r,mS),e[Or]=t.current,Vp(e),new Yp(t)};uu.hydrateRoot=function(e,t,n){if(!N0(e))throw Error(J(299));var i=!1,a="",s=rx,r=ox,o=lx,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=cS(e,1,!0,t,n??null,i,a,l,s,r,o,mS),t.context=uS(null),n=t.current,i=zn(),i=np(i),a=Oa(i),a.callback=null,Pa(n,a,i),n=i,t.current.lanes=n,Zo(t,n),Di(t),e[Or]=t.current,Vp(e),new Ru(t)};uu.version="19.2.7";function gS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gS)}catch(e){console.error(e)}}gS(),E0.exports=uu;var mb=E0.exports;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zp="184",gb=0,$g=1,_b=2,mc=1,vb=2,uo=3,Wa=0,bn=1,Xi=2,Ji=0,mr=1,t_=2,e_=3,n_=4,xb=5,rs=100,Sb=101,yb=102,Mb=103,Eb=104,bb=200,Tb=201,Ab=202,Rb=203,$d=204,th=205,Cb=206,wb=207,Db=208,Nb=209,Ub=210,Lb=211,Ob=212,Pb=213,Ib=214,eh=0,nh=1,ih=2,Cr=3,ah=4,sh=5,rh=6,oh=7,_S=0,Bb=1,Fb=2,Ei=0,vS=1,xS=2,SS=3,yS=4,MS=5,ES=6,bS=7,TS=300,Ss=301,wr=302,xf=303,Sf=304,Cu=306,lh=1e3,Yi=1001,ch=1002,rn=1003,zb=1004,Al=1005,fn=1006,yf=1007,ls=1008,ti=1009,AS=1010,RS=1011,ko=1012,Kp=1013,Ai=1014,Si=1015,sa=1016,Qp=1017,Jp=1018,Xo=1020,CS=35902,wS=35899,DS=1021,NS=1022,ui=1023,ra=1026,cs=1027,US=1028,$p=1029,ys=1030,tm=1031,em=1033,gc=33776,_c=33777,vc=33778,xc=33779,uh=35840,fh=35841,dh=35842,hh=35843,ph=36196,mh=37492,gh=37496,_h=37488,vh=37489,Qc=37490,xh=37491,Sh=37808,yh=37809,Mh=37810,Eh=37811,bh=37812,Th=37813,Ah=37814,Rh=37815,Ch=37816,wh=37817,Dh=37818,Nh=37819,Uh=37820,Lh=37821,Oh=36492,Ph=36494,Ih=36495,Bh=36283,Fh=36284,Jc=36285,zh=36286,Hb=3200,i_=0,Gb=1,Ta="",jn="srgb",$c="srgb-linear",tu="linear",ce="srgb",Ls=7680,a_=519,Vb=512,kb=513,Xb=514,nm=515,Wb=516,jb=517,im=518,qb=519,s_=35044,r_="300 es",yi=2e3,eu=2001;function Yb(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function nu(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Zb(){const e=nu("canvas");return e.style.display="block",e}const o_={};function l_(...e){const t="THREE."+e.shift();console.log(t,...e)}function LS(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Dt(...e){e=LS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function ne(...e){e=LS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Hh(...e){const t=e.join(" ");t in o_||(o_[t]=!0,Dt(...e))}function Kb(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Qb={[eh]:nh,[ih]:rh,[ah]:oh,[Cr]:sh,[nh]:eh,[rh]:ih,[oh]:ah,[sh]:Cr};class Cs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mf=Math.PI/180,Gh=180/Math.PI;function al(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[e&255]+cn[e>>8&255]+cn[e>>16&255]+cn[e>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[n&63|128]+cn[n>>8&255]+"-"+cn[n>>16&255]+cn[n>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function Jt(e,t,n){return Math.max(t,Math.min(n,e))}function Jb(e,t){return(e%t+t)%t}function Ef(e,t,n){return(1-n)*e+n*t}function Kr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Sn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const dm=class dm{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Jt(this.x,t.x,n.x),this.y=Jt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Jt(this.x,t,n),this.y=Jt(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dm.prototype.isVector2=!0;let re=dm;class Gr{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],d=i[a+2],h=i[a+3],u=s[r+0],p=s[r+1],v=s[r+2],M=s[r+3];if(h!==M||l!==u||c!==p||d!==v){let g=l*u+c*p+d*v+h*M;g<0&&(u=-u,p=-p,v=-v,M=-M,g=-g);let f=1-o;if(g<.9995){const m=Math.acos(g),_=Math.sin(m);f=Math.sin(f*m)/_,o=Math.sin(o*m)/_,l=l*f+u*o,c=c*f+p*o,d=d*f+v*o,h=h*f+M*o}else{l=l*f+u*o,c=c*f+p*o,d=d*f+v*o,h=h*f+M*o;const m=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=m,c*=m,d*=m,h*=m}}t[n]=l,t[n+1]=c,t[n+2]=d,t[n+3]=h}static multiplyQuaternionsFlat(t,n,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],h=s[r],u=s[r+1],p=s[r+2],v=s[r+3];return t[n]=o*v+d*h+l*p-c*u,t[n+1]=l*v+d*u+c*h-o*p,t[n+2]=c*v+d*p+o*u-l*h,t[n+3]=d*v-o*h-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),h=o(s/2),u=l(i/2),p=l(a/2),v=l(s/2);switch(r){case"XYZ":this._x=u*d*h+c*p*v,this._y=c*p*h-u*d*v,this._z=c*d*v+u*p*h,this._w=c*d*h-u*p*v;break;case"YXZ":this._x=u*d*h+c*p*v,this._y=c*p*h-u*d*v,this._z=c*d*v-u*p*h,this._w=c*d*h+u*p*v;break;case"ZXY":this._x=u*d*h-c*p*v,this._y=c*p*h+u*d*v,this._z=c*d*v+u*p*h,this._w=c*d*h-u*p*v;break;case"ZYX":this._x=u*d*h-c*p*v,this._y=c*p*h+u*d*v,this._z=c*d*v-u*p*h,this._w=c*d*h+u*p*v;break;case"YZX":this._x=u*d*h+c*p*v,this._y=c*p*h+u*d*v,this._z=c*d*v-u*p*h,this._w=c*d*h-u*p*v;break;case"XZY":this._x=u*d*h-c*p*v,this._y=c*p*h-u*d*v,this._z=c*d*v+u*p*h,this._w=c*d*h+u*p*v;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],u=i+o+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(r-a)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(r-a)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+r*o+a*c-s*l,this._y=a*d+r*l+s*o-i*c,this._z=s*d+r*c+i*l-a*o,this._w=r*d-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hm=class hm{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(c_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(c_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),d=2*(o*n-s*a),h=2*(s*i-r*n);return this.x=n+l*c+r*h-o*d,this.y=i+l*d+o*c-s*h,this.z=a+l*h+s*d-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Jt(this.x,t.x,n.x),this.y=Jt(this.y,t.y,n.y),this.z=Jt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Jt(this.x,t,n),this.y=Jt(this.y,t,n),this.z=Jt(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return bf.copy(this).projectOnVector(t),this.sub(bf)}reflect(t){return this.sub(bf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hm.prototype.isVector3=!0;let z=hm;const bf=new z,c_=new Gr,pm=class pm{constructor(t,n,i,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){const d=this.elements;return d[0]=t,d[1]=a,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],p=i[5],v=i[8],M=a[0],g=a[3],f=a[6],m=a[1],_=a[4],x=a[7],C=a[2],b=a[5],R=a[8];return s[0]=r*M+o*m+l*C,s[3]=r*g+o*_+l*b,s[6]=r*f+o*x+l*R,s[1]=c*M+d*m+h*C,s[4]=c*g+d*_+h*b,s[7]=c*f+d*x+h*R,s[2]=u*M+p*m+v*C,s[5]=u*g+p*_+v*b,s[8]=u*f+p*x+v*R,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return n*r*d-n*o*c-i*s*d+i*o*l+a*s*c-a*r*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=d*r-o*c,u=o*l-d*s,p=c*s-r*l,v=n*h+i*u+a*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return t[0]=h*M,t[1]=(a*c-d*i)*M,t[2]=(o*i-a*r)*M,t[3]=u*M,t[4]=(d*n-a*l)*M,t[5]=(a*s-o*n)*M,t[6]=p*M,t[7]=(i*l-c*n)*M,t[8]=(r*n-i*s)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Tf.makeScale(t,n)),this}rotate(t){return this.premultiply(Tf.makeRotation(-t)),this}translate(t,n){return this.premultiply(Tf.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};pm.prototype.isMatrix3=!0;let It=pm;const Tf=new It,u_=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),f_=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $b(){const e={enabled:!0,workingColorSpace:$c,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===ce&&(a.r=$i(a.r),a.g=$i(a.g),a.b=$i(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ce&&(a.r=gr(a.r),a.g=gr(a.g),a.b=gr(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ta?tu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Hh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Hh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[$c]:{primaries:t,whitePoint:i,transfer:tu,toXYZ:u_,fromXYZ:f_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:t,whitePoint:i,transfer:ce,toXYZ:u_,fromXYZ:f_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),e}const Qt=$b();function $i(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function gr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Os;class tT{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Os===void 0&&(Os=nu("canvas")),Os.width=t.width,Os.height=t.height;const a=Os.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=Os}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=nu("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=$i(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($i(n[i]/255)*255):n[i]=$i(n[i]);return{data:n,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let eT=0;class am{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eT++}),this.uuid=al(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(Af(a[r].image)):s.push(Af(a[r]))}else s=Af(a);i.url=s}return n||(t.images[this.uuid]=i),i}}function Af(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?tT.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}let nT=0;const Rf=new z;class gn extends Cs{constructor(t=gn.DEFAULT_IMAGE,n=gn.DEFAULT_MAPPING,i=Yi,a=Yi,s=fn,r=ls,o=ui,l=ti,c=gn.DEFAULT_ANISOTROPY,d=Ta){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=al(),this.name="",this.source=new am(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Rf).x}get height(){return this.source.getSize(Rf).y}get depth(){return this.source.getSize(Rf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){Dt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Dt(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==TS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lh:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case ch:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lh:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case ch:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=TS;gn.DEFAULT_ANISOTROPY=1;const mm=class mm{constructor(t=0,n=0,i=0,a=1){this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s;const l=t.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],v=l[9],M=l[2],g=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-M)<.01&&Math.abs(v-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+M)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,x=(p+1)/2,C=(f+1)/2,b=(d+u)/4,R=(h+M)/4,S=(v+g)/4;return _>x&&_>C?_<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(_),a=b/i,s=R/i):x>C?x<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(x),i=b/a,s=S/a):C<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(C),i=R/s,a=S/s),this.set(i,a,s,n),this}let m=Math.sqrt((g-v)*(g-v)+(h-M)*(h-M)+(u-d)*(u-d));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(h-M)/m,this.z=(u-d)/m,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Jt(this.x,t.x,n.x),this.y=Jt(this.y,t.y,n.y),this.z=Jt(this.z,t.z,n.z),this.w=Jt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Jt(this.x,t,n),this.y=Jt(this.y,t,n),this.z=Jt(this.z,t,n),this.w=Jt(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mm.prototype.isVector4=!0;let Fe=mm;class iT extends Cs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Fe(0,0,t,n),this.scissorTest=!1,this.viewport=new Fe(0,0,t,n),this.textures=[];const a={width:t,height:n,depth:i.depth},s=new gn(a),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new am(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends iT{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class OS extends gn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=rn,this.minFilter=rn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class aT extends gn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=rn,this.minFilter=rn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lu=class lu{constructor(t,n,i,a,s,r,o,l,c,d,h,u,p,v,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,d,h,u,p,v,M,g)}set(t,n,i,a,s,r,o,l,c,d,h,u,p,v,M,g){const f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=v,f[11]=M,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lu().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,i=t.elements,a=1/Ps.setFromMatrixColumn(t,0).length(),s=1/Ps.setFromMatrixColumn(t,1).length(),r=1/Ps.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const u=r*d,p=r*h,v=o*d,M=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=p+v*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=v+p*c,n[10]=r*l}else if(t.order==="YXZ"){const u=l*d,p=l*h,v=c*d,M=c*h;n[0]=u+M*o,n[4]=v*o-p,n[8]=r*c,n[1]=r*h,n[5]=r*d,n[9]=-o,n[2]=p*o-v,n[6]=M+u*o,n[10]=r*l}else if(t.order==="ZXY"){const u=l*d,p=l*h,v=c*d,M=c*h;n[0]=u-M*o,n[4]=-r*h,n[8]=v+p*o,n[1]=p+v*o,n[5]=r*d,n[9]=M-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){const u=r*d,p=r*h,v=o*d,M=o*h;n[0]=l*d,n[4]=v*c-p,n[8]=u*c+M,n[1]=l*h,n[5]=M*c+u,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){const u=r*l,p=r*c,v=o*l,M=o*c;n[0]=l*d,n[4]=M-u*h,n[8]=v*h+p,n[1]=h,n[5]=r*d,n[9]=-o*d,n[2]=-c*d,n[6]=p*h+v,n[10]=u-M*h}else if(t.order==="XZY"){const u=r*l,p=r*c,v=o*l,M=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=u*h+M,n[5]=r*d,n[9]=p*h-v,n[2]=v*h-p,n[6]=o*d,n[10]=M*h+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sT,t,rT)}lookAt(t,n,i){const a=this.elements;return Dn.subVectors(t,n),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),ha.crossVectors(i,Dn),ha.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),ha.crossVectors(i,Dn)),ha.normalize(),Rl.crossVectors(Dn,ha),a[0]=ha.x,a[4]=Rl.x,a[8]=Dn.x,a[1]=ha.y,a[5]=Rl.y,a[9]=Dn.y,a[2]=ha.z,a[6]=Rl.z,a[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],p=i[13],v=i[2],M=i[6],g=i[10],f=i[14],m=i[3],_=i[7],x=i[11],C=i[15],b=a[0],R=a[4],S=a[8],A=a[12],D=a[1],N=a[5],G=a[9],q=a[13],Y=a[2],B=a[6],U=a[10],I=a[14],W=a[3],Q=a[7],at=a[11],xt=a[15];return s[0]=r*b+o*D+l*Y+c*W,s[4]=r*R+o*N+l*B+c*Q,s[8]=r*S+o*G+l*U+c*at,s[12]=r*A+o*q+l*I+c*xt,s[1]=d*b+h*D+u*Y+p*W,s[5]=d*R+h*N+u*B+p*Q,s[9]=d*S+h*G+u*U+p*at,s[13]=d*A+h*q+u*I+p*xt,s[2]=v*b+M*D+g*Y+f*W,s[6]=v*R+M*N+g*B+f*Q,s[10]=v*S+M*G+g*U+f*at,s[14]=v*A+M*q+g*I+f*xt,s[3]=m*b+_*D+x*Y+C*W,s[7]=m*R+_*N+x*B+C*Q,s[11]=m*S+_*G+x*U+C*at,s[15]=m*A+_*q+x*I+C*xt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],d=t[2],h=t[6],u=t[10],p=t[14],v=t[3],M=t[7],g=t[11],f=t[15],m=l*p-c*u,_=o*p-c*h,x=o*u-l*h,C=r*p-c*d,b=r*u-l*d,R=r*h-o*d;return n*(M*m-g*_+f*x)-i*(v*m-g*C+f*b)+a*(v*_-M*C+f*R)-s*(v*x-M*b+g*R)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=t[9],u=t[10],p=t[11],v=t[12],M=t[13],g=t[14],f=t[15],m=n*o-i*r,_=n*l-a*r,x=n*c-s*r,C=i*l-a*o,b=i*c-s*o,R=a*c-s*l,S=d*M-h*v,A=d*g-u*v,D=d*f-p*v,N=h*g-u*M,G=h*f-p*M,q=u*f-p*g,Y=m*q-_*G+x*N+C*D-b*A+R*S;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/Y;return t[0]=(o*q-l*G+c*N)*B,t[1]=(a*G-i*q-s*N)*B,t[2]=(M*R-g*b+f*C)*B,t[3]=(u*b-h*R-p*C)*B,t[4]=(l*D-r*q-c*A)*B,t[5]=(n*q-a*D+s*A)*B,t[6]=(g*x-v*R-f*_)*B,t[7]=(d*R-u*x+p*_)*B,t[8]=(r*G-o*D+c*S)*B,t[9]=(i*D-n*G-s*S)*B,t[10]=(v*b-M*x+f*m)*B,t[11]=(h*x-d*b-p*m)*B,t[12]=(o*A-r*N-l*S)*B,t[13]=(n*N-i*A+a*S)*B,t[14]=(M*_-v*C-g*m)*B,t[15]=(d*C-h*_+u*m)*B,this}scale(t){const n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,d=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*r,0,c*l-a*o,d*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,d=r+r,h=o+o,u=s*c,p=s*d,v=s*h,M=r*d,g=r*h,f=o*h,m=l*c,_=l*d,x=l*h,C=i.x,b=i.y,R=i.z;return a[0]=(1-(M+f))*C,a[1]=(p+x)*C,a[2]=(v-_)*C,a[3]=0,a[4]=(p-x)*b,a[5]=(1-(u+f))*b,a[6]=(g+m)*b,a[7]=0,a[8]=(v+_)*R,a[9]=(g-m)*R,a[10]=(1-(u+M))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let r=Ps.set(a[0],a[1],a[2]).length();const o=Ps.set(a[4],a[5],a[6]).length(),l=Ps.set(a[8],a[9],a[10]).length();s<0&&(r=-r),si.copy(this);const c=1/r,d=1/o,h=1/l;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=d,si.elements[5]*=d,si.elements[6]*=d,si.elements[8]*=h,si.elements[9]*=h,si.elements[10]*=h,n.setFromRotationMatrix(si),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,a,s,r,o=yi,l=!1){const c=this.elements,d=2*s/(n-t),h=2*s/(i-a),u=(n+t)/(n-t),p=(i+a)/(i-a);let v,M;if(l)v=s/(r-s),M=r*s/(r-s);else if(o===yi)v=-(r+s)/(r-s),M=-2*r*s/(r-s);else if(o===eu)v=-r/(r-s),M=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=yi,l=!1){const c=this.elements,d=2/(n-t),h=2/(i-a),u=-(n+t)/(n-t),p=-(i+a)/(i-a);let v,M;if(l)v=1/(r-s),M=r/(r-s);else if(o===yi)v=-2/(r-s),M=-(r+s)/(r-s);else if(o===eu)v=-1/(r-s),M=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};lu.prototype.isMatrix4=!0;let We=lu;const Ps=new z,si=new We,sT=new z(0,0,0),rT=new z(1,1,1),ha=new z,Rl=new z,Dn=new z,d_=new We,h_=new Gr;class Ms{constructor(t=0,n=0,i=0,a=Ms.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],d=a[9],h=a[2],u=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Jt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return d_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(d_,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return h_.setFromEuler(this),this.setFromQuaternion(h_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ms.DEFAULT_ORDER="XYZ";class PS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let oT=0;const p_=new z,Is=new Gr,Ii=new We,Cl=new z,Qr=new z,lT=new z,cT=new Gr,m_=new z(1,0,0),g_=new z(0,1,0),__=new z(0,0,1),v_={type:"added"},uT={type:"removed"},Bs={type:"childadded",child:null},Cf={type:"childremoved",child:null};class Tn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oT++}),this.uuid=al(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const t=new z,n=new Ms,i=new Gr,a=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new We},normalMatrix:{value:new It}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new PS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Is.setFromAxisAngle(t,n),this.quaternion.multiply(Is),this}rotateOnWorldAxis(t,n){return Is.setFromAxisAngle(t,n),this.quaternion.premultiply(Is),this}rotateX(t){return this.rotateOnAxis(m_,t)}rotateY(t){return this.rotateOnAxis(g_,t)}rotateZ(t){return this.rotateOnAxis(__,t)}translateOnAxis(t,n){return p_.copy(t).applyQuaternion(this.quaternion),this.position.add(p_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(m_,t)}translateY(t){return this.translateOnAxis(g_,t)}translateZ(t){return this.translateOnAxis(__,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Cl.copy(t):Cl.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Qr,Cl,this.up):Ii.lookAt(Cl,Qr,this.up),this.quaternion.setFromRotationMatrix(Ii),a&&(Ii.extractRotation(a.matrixWorld),Is.setFromRotationMatrix(Ii),this.quaternion.premultiply(Is.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(v_),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(uT),Cf.child=t,this.dispatchEvent(Cf),Cf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(v_),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,t,lT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,cT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,i=t.y,a=t.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),d=r(t.images),h=r(t.shapes),u=r(t.skeletons),p=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=a,i;function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}Tn.DEFAULT_UP=new z(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class wl extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fT={type:"move"};class wf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const M of t.hand.values()){const g=n.getJointPose(M,i),f=this._getHandJoint(c,M);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&u>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fT)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new wl;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const IS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pa={h:0,s:0,l:0},Dl={h:0,s:0,l:0};function Df(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class Zt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=jn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=Qt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Qt.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=Qt.workingColorSpace){if(t=Jb(t,1),n=Jt(n,0,1),i=Jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=Df(r,s,t+1/3),this.g=Df(r,s,t),this.b=Df(r,s,t-1/3)}return Qt.colorSpaceToWorking(this,a),this}setStyle(t,n=jn){function i(s){s!==void 0&&parseFloat(s)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Dt("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=jn){const i=IS[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}copyLinearToSRGB(t){return this.r=gr(t.r),this.g=gr(t.g),this.b=gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=jn){return Qt.workingToColorSpace(un.copy(this),t),Math.round(Jt(un.r*255,0,255))*65536+Math.round(Jt(un.g*255,0,255))*256+Math.round(Jt(un.b*255,0,255))}getHexString(t=jn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Qt.workingColorSpace){Qt.workingToColorSpace(un.copy(this),n);const i=un.r,a=un.g,s=un.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const d=(o+r)/2;if(o===r)l=0,c=0;else{const h=r-o;switch(c=d<=.5?h/(r+o):h/(2-r-o),r){case i:l=(a-s)/h+(a<s?6:0);break;case a:l=(s-i)/h+2;break;case s:l=(i-a)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,n=Qt.workingColorSpace){return Qt.workingToColorSpace(un.copy(this),n),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=jn){Qt.workingToColorSpace(un.copy(this),t);const n=un.r,i=un.g,a=un.b;return t!==jn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(pa),this.setHSL(pa.h+t,pa.s+n,pa.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(pa),t.getHSL(Dl);const i=Ef(pa.h,Dl.h,n),a=Ef(pa.s,Dl.s,n),s=Ef(pa.l,Dl.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new Zt;Zt.NAMES=IS;class dT extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ms,this.environmentIntensity=1,this.environmentRotation=new Ms,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ri=new z,Bi=new z,Nf=new z,Fi=new z,Fs=new z,zs=new z,x_=new z,Uf=new z,Lf=new z,Of=new z,Pf=new Fe,If=new Fe,Bf=new Fe;class ci{constructor(t=new z,n=new z,i=new z){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),ri.subVectors(t,n),a.cross(ri);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){ri.subVectors(a,n),Bi.subVectors(i,n),Nf.subVectors(t,n);const r=ri.dot(ri),o=ri.dot(Bi),l=ri.dot(Nf),c=Bi.dot(Bi),d=Bi.dot(Nf),h=r*c-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,p=(c*l-o*d)*u,v=(r*d-o*l)*u;return s.set(1-p-v,v,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(r,Fi.y),l.addScaledVector(o,Fi.z),l)}static getInterpolatedAttribute(t,n,i,a,s,r){return Pf.setScalar(0),If.setScalar(0),Bf.setScalar(0),Pf.fromBufferAttribute(t,n),If.fromBufferAttribute(t,i),Bf.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(Pf,s.x),r.addScaledVector(If,s.y),r.addScaledVector(Bf,s.z),r}static isFrontFacing(t,n,i,a){return ri.subVectors(i,n),Bi.subVectors(t,n),ri.cross(Bi).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ri.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ri.cross(Bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ci.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return ci.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,s=this.c;let r,o;Fs.subVectors(a,i),zs.subVectors(s,i),Uf.subVectors(t,i);const l=Fs.dot(Uf),c=zs.dot(Uf);if(l<=0&&c<=0)return n.copy(i);Lf.subVectors(t,a);const d=Fs.dot(Lf),h=zs.dot(Lf);if(d>=0&&h<=d)return n.copy(a);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return r=l/(l-d),n.copy(i).addScaledVector(Fs,r);Of.subVectors(t,s);const p=Fs.dot(Of),v=zs.dot(Of);if(v>=0&&p<=v)return n.copy(s);const M=p*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(zs,o);const g=d*v-p*h;if(g<=0&&h-d>=0&&p-v>=0)return x_.subVectors(s,a),o=(h-d)/(h-d+(p-v)),n.copy(a).addScaledVector(x_,o);const f=1/(g+M+u);return r=M*f,o=u*f,n.copy(i).addScaledVector(Fs,r).addScaledVector(zs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class sl{constructor(t=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(oi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(oi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=oi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,oi):oi.fromBufferAttribute(s,r),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nl.copy(i.boundingBox)),Nl.applyMatrix4(t.matrixWorld),this.union(Nl)}const a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Jr),Ul.subVectors(this.max,Jr),Hs.subVectors(t.a,Jr),Gs.subVectors(t.b,Jr),Vs.subVectors(t.c,Jr),ma.subVectors(Gs,Hs),ga.subVectors(Vs,Gs),Qa.subVectors(Hs,Vs);let n=[0,-ma.z,ma.y,0,-ga.z,ga.y,0,-Qa.z,Qa.y,ma.z,0,-ma.x,ga.z,0,-ga.x,Qa.z,0,-Qa.x,-ma.y,ma.x,0,-ga.y,ga.x,0,-Qa.y,Qa.x,0];return!Ff(n,Hs,Gs,Vs,Ul)||(n=[1,0,0,0,1,0,0,0,1],!Ff(n,Hs,Gs,Vs,Ul))?!1:(Ll.crossVectors(ma,ga),n=[Ll.x,Ll.y,Ll.z],Ff(n,Hs,Gs,Vs,Ul))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const zi=[new z,new z,new z,new z,new z,new z,new z,new z],oi=new z,Nl=new sl,Hs=new z,Gs=new z,Vs=new z,ma=new z,ga=new z,Qa=new z,Jr=new z,Ul=new z,Ll=new z,Ja=new z;function Ff(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){Ja.fromArray(e,s);const o=a.x*Math.abs(Ja.x)+a.y*Math.abs(Ja.y)+a.z*Math.abs(Ja.z),l=t.dot(Ja),c=n.dot(Ja),d=i.dot(Ja);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const He=new z,Ol=new re;let hT=0;class Ti extends Cs{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=s_,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ol.fromBufferAttribute(this,n),Ol.applyMatrix3(t),this.setXY(n,Ol.x,Ol.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyMatrix3(t),this.setXYZ(n,He.x,He.y,He.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyMatrix4(t),this.setXYZ(n,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyNormalMatrix(t),this.setXYZ(n,He.x,He.y,He.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.transformDirection(t),this.setXYZ(n,He.x,He.y,He.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Kr(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Sn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Kr(n,this.array)),n}setX(t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Kr(n,this.array)),n}setY(t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Kr(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Kr(n,this.array)),n}setW(t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),a=Sn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),a=Sn(a,this.array),s=Sn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==s_&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class BS extends Ti{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class FS extends Ti{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class tn extends Ti{constructor(t,n,i){super(new Float32Array(t),n,i)}}const pT=new sl,$r=new z,zf=new z;class wu{constructor(t=new z,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):pT.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$r.subVectors(t,this.center);const n=$r.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector($r,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($r.copy(t.center).add(zf)),this.expandByPoint($r.copy(t.center).sub(zf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let mT=0;const Xn=new We,Hf=new Tn,ks=new z,Nn=new sl,to=new sl,Ke=new z;class Vn extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mT++}),this.uuid=al(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yb(t)?FS:BS)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new It().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xn.makeRotationFromQuaternion(t),this.applyMatrix4(Xn),this}rotateX(t){return Xn.makeRotationX(t),this.applyMatrix4(Xn),this}rotateY(t){return Xn.makeRotationY(t),this.applyMatrix4(Xn),this}rotateZ(t){return Xn.makeRotationZ(t),this.applyMatrix4(Xn),this}translate(t,n,i){return Xn.makeTranslation(t,n,i),this.applyMatrix4(Xn),this}scale(t,n,i){return Xn.makeScale(t,n,i),this.applyMatrix4(Xn),this}lookAt(t){return Hf.lookAt(t),Hf.updateMatrix(),this.applyMatrix4(Hf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=t.length;a<s;a++){const r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new tn(i,3))}else{const i=Math.min(t.length,n.count);for(let a=0;a<i;a++){const s=t[a];n.setXYZ(a,s.x,s.y,s.z||0)}t.length>n.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];to.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(Nn.min,to.min),Nn.expandByPoint(Ke),Ke.addVectors(Nn.max,to.max),Nn.expandByPoint(Ke)):(Nn.expandByPoint(to.min),Nn.expandByPoint(to.max))}Nn.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)Ke.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(Ke));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ke.fromBufferAttribute(o,c),l&&(ks.fromBufferAttribute(t,c),Ke.add(ks)),a=Math.max(a,i.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new z,l[S]=new z;const c=new z,d=new z,h=new z,u=new re,p=new re,v=new re,M=new z,g=new z;function f(S,A,D){c.fromBufferAttribute(i,S),d.fromBufferAttribute(i,A),h.fromBufferAttribute(i,D),u.fromBufferAttribute(s,S),p.fromBufferAttribute(s,A),v.fromBufferAttribute(s,D),d.sub(c),h.sub(c),p.sub(u),v.sub(u);const N=1/(p.x*v.y-v.x*p.y);isFinite(N)&&(M.copy(d).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(N),g.copy(h).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(N),o[S].add(M),o[A].add(M),o[D].add(M),l[S].add(g),l[A].add(g),l[D].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let S=0,A=m.length;S<A;++S){const D=m[S],N=D.start,G=D.count;for(let q=N,Y=N+G;q<Y;q+=3)f(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const _=new z,x=new z,C=new z,b=new z;function R(S){C.fromBufferAttribute(a,S),b.copy(C);const A=o[S];_.copy(A),_.sub(C.multiplyScalar(C.dot(A))).normalize(),x.crossVectors(b,A);const N=x.dot(l[S])<0?-1:1;r.setXYZW(S,_.x,_.y,_.z,N)}for(let S=0,A=m.length;S<A;++S){const D=m[S],N=D.start,G=D.count;for(let q=N,Y=N+G;q<Y;q+=3)R(t.getX(q+0)),R(t.getX(q+1)),R(t.getX(q+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ti(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const a=new z,s=new z,r=new z,o=new z,l=new z,c=new z,d=new z,h=new z;if(t)for(let u=0,p=t.count;u<p;u+=3){const v=t.getX(u+0),M=t.getX(u+1),g=t.getX(u+2);a.fromBufferAttribute(n,v),s.fromBufferAttribute(n,M),r.fromBufferAttribute(n,g),d.subVectors(r,s),h.subVectors(a,s),d.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)a.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),d.subVectors(r,s),h.subVectors(a,s),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ke.fromBufferAttribute(t,n),Ke.normalize(),t.setXYZ(n,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let p=0,v=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*d;for(let f=0;f<d;f++)u[v++]=c[p++]}return new Ti(u,d,h)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vn,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=t(u,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(t.data))}d.length>0&&(a[l]=d,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(n))}const s=t.morphAttributes;for(const c in s){const d=[],h=s[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,d=r.length;c<d;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let gT=0;class rl extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=al(),this.name="",this.type="Material",this.blending=mr,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$d,this.blendDst=th,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=a_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){Dt(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Dt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(i.blending=this.blending),this.side!==Wa&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$d&&(i.blendSrc=this.blendSrc),this.blendDst!==th&&(i.blendDst=this.blendDst),this.blendEquation!==rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==a_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Hi=new z,Gf=new z,Pl=new z,_a=new z,Vf=new z,Il=new z,kf=new z;class zS{constructor(t=new z,n=new z(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Hi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,n),Hi.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){Gf.copy(t).add(n).multiplyScalar(.5),Pl.copy(n).sub(t).normalize(),_a.copy(this.origin).sub(Gf);const s=t.distanceTo(n)*.5,r=-this.direction.dot(Pl),o=_a.dot(this.direction),l=-_a.dot(Pl),c=_a.lengthSq(),d=Math.abs(1-r*r);let h,u,p,v;if(d>0)if(h=r*l-o,u=r*o-l,v=s*d,h>=0)if(u>=-v)if(u<=v){const M=1/d;h*=M,u*=M,p=h*(h+r*u+2*o)+u*(r*h+u+2*l)+c}else u=s,h=Math.max(0,-(r*u+o)),p=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(r*u+o)),p=-h*h+u*(u+2*l)+c;else u<=-v?(h=Math.max(0,-(-r*s+o)),u=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c):u<=v?(h=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(h=Math.max(0,-(r*s+o)),u=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c);else u=r>0?-s:s,h=Math.max(0,-(r*u+o)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(Gf).addScaledVector(Pl,u),p}intersectSphere(t,n){Hi.subVectors(t.center,this.origin);const i=Hi.dot(this.direction),a=Hi.dot(Hi)-i*i,s=t.radius*t.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,a=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,a=(t.min.x-u.x)*c),d>=0?(s=(t.min.y-u.y)*d,r=(t.max.y-u.y)*d):(s=(t.max.y-u.y)*d,r=(t.min.y-u.y)*d),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),h>=0?(o=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(o=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,n,i,a,s){Vf.subVectors(n,t),Il.subVectors(i,t),kf.crossVectors(Vf,Il);let r=this.direction.dot(kf),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;_a.subVectors(this.origin,t);const l=o*this.direction.dot(Il.crossVectors(_a,Il));if(l<0)return null;const c=o*this.direction.dot(Vf.cross(_a));if(c<0||l+c>r)return null;const d=-o*_a.dot(kf);return d<0?null:this.at(d/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sm extends rl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ms,this.combine=_S,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const S_=new We,$a=new zS,Bl=new wu,y_=new z,Fl=new z,zl=new z,Hl=new z,Xf=new z,Gl=new z,M_=new z,Vl=new z;class Ri extends Tn{constructor(t=new Vn,n=new sm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(s&&o){Gl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(Xf.fromBufferAttribute(h,t),r?Gl.addScaledVector(Xf,d):Gl.addScaledVector(Xf.sub(n),d))}n.add(Gl)}return n}raycast(t,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(s),$a.copy(t.ray).recast(t.near),!(Bl.containsPoint($a.origin)===!1&&($a.intersectSphere(Bl,y_)===null||$a.origin.distanceToSquared(y_)>(t.far-t.near)**2))&&(S_.copy(s).invert(),$a.copy(t.ray).applyMatrix4(S_),!(i.boundingBox!==null&&$a.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,$a)))}_computeIntersections(t,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,M=u.length;v<M;v++){const g=u[v],f=r[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let x=m,C=_;x<C;x+=3){const b=o.getX(x),R=o.getX(x+1),S=o.getX(x+2);a=kl(this,f,t,i,c,d,h,b,R,S),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const v=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let g=v,f=M;g<f;g+=3){const m=o.getX(g),_=o.getX(g+1),x=o.getX(g+2);a=kl(this,r,t,i,c,d,h,m,_,x),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,M=u.length;v<M;v++){const g=u[v],f=r[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=m,C=_;x<C;x+=3){const b=x,R=x+1,S=x+2;a=kl(this,f,t,i,c,d,h,b,R,S),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const v=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=v,f=M;g<f;g+=3){const m=g,_=g+1,x=g+2;a=kl(this,r,t,i,c,d,h,m,_,x),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function _T(e,t,n,i,a,s,r,o){let l;if(t.side===bn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===Wa,o),l===null)return null;Vl.copy(o),Vl.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(Vl);return c<n.near||c>n.far?null:{distance:c,point:Vl.clone(),object:e}}function kl(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,Fl),e.getVertexPosition(l,zl),e.getVertexPosition(c,Hl);const d=_T(e,t,n,i,Fl,zl,Hl,M_);if(d){const h=new z;ci.getBarycoord(M_,Fl,zl,Hl,h),a&&(d.uv=ci.getInterpolatedAttribute(a,o,l,c,h,new re)),s&&(d.uv1=ci.getInterpolatedAttribute(s,o,l,c,h,new re)),r&&(d.normal=ci.getInterpolatedAttribute(r,o,l,c,h,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new z,materialIndex:0};ci.getNormal(Fl,zl,Hl,u.normal),d.face=u,d.barycoord=h}return d}class vT extends gn{constructor(t=null,n=1,i=1,a,s,r,o,l,c=rn,d=rn,h,u){super(null,r,o,l,c,d,a,s,h,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wf=new z,xT=new z,ST=new It;class ss{constructor(t=new z(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=Wf.subVectors(i,n).cross(xT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){const a=t.delta(Wf),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(a,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||ST.getNormalMatrix(t),a=this.coplanarPoint(Wf).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new wu,yT=new re(.5,.5),Xl=new z;class HS{constructor(t=new ss,n=new ss,i=new ss,a=new ss,s=new ss,r=new ss){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=yi,i=!1){const a=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],c=s[3],d=s[4],h=s[5],u=s[6],p=s[7],v=s[8],M=s[9],g=s[10],f=s[11],m=s[12],_=s[13],x=s[14],C=s[15];if(a[0].setComponents(c-r,p-d,f-v,C-m).normalize(),a[1].setComponents(c+r,p+d,f+v,C+m).normalize(),a[2].setComponents(c+o,p+h,f+M,C+_).normalize(),a[3].setComponents(c-o,p-h,f-M,C-_).normalize(),i)a[4].setComponents(l,u,g,x).normalize(),a[5].setComponents(c-l,p-u,f-g,C-x).normalize();else if(a[4].setComponents(c-l,p-u,f-g,C-x).normalize(),n===yi)a[5].setComponents(c+l,p+u,f+g,C+x).normalize();else if(n===eu)a[5].setComponents(l,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){ts.center.set(0,0,0);const n=yT.distanceTo(t.center);return ts.radius=.7071067811865476+n,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Xl.x=a.normal.x>0?t.max.x:t.min.x,Xl.y=a.normal.y>0?t.max.y:t.min.y,Xl.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Xl)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class GS extends rl{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const iu=new z,au=new z,E_=new We,eo=new zS,Wl=new wu,jf=new z,b_=new z;class MT extends Tn{constructor(t=new Vn,n=new GS){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let a=1,s=n.count;a<s;a++)iu.fromBufferAttribute(n,a-1),au.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=iu.distanceTo(au);t.setAttribute("lineDistance",new tn(i,1))}else Dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wl.copy(i.boundingSphere),Wl.applyMatrix4(a),Wl.radius+=s,t.ray.intersectsSphere(Wl)===!1)return;E_.copy(a).invert(),eo.copy(t.ray).applyMatrix4(E_);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const p=Math.max(0,r.start),v=Math.min(d.count,r.start+r.count);for(let M=p,g=v-1;M<g;M+=c){const f=d.getX(M),m=d.getX(M+1),_=jl(this,t,eo,l,f,m,M);_&&n.push(_)}if(this.isLineLoop){const M=d.getX(v-1),g=d.getX(p),f=jl(this,t,eo,l,M,g,v-1);f&&n.push(f)}}else{const p=Math.max(0,r.start),v=Math.min(u.count,r.start+r.count);for(let M=p,g=v-1;M<g;M+=c){const f=jl(this,t,eo,l,M,M+1,M);f&&n.push(f)}if(this.isLineLoop){const M=jl(this,t,eo,l,v-1,p,v-1);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function jl(e,t,n,i,a,s,r){const o=e.geometry.attributes.position;if(iu.fromBufferAttribute(o,a),au.fromBufferAttribute(o,s),n.distanceSqToSegment(iu,au,jf,b_)>i)return;jf.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(jf);if(!(c<t.near||c>t.far))return{distance:c,point:b_.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}const T_=new z,A_=new z;class ET extends MT{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[];for(let a=0,s=n.count;a<s;a+=2)T_.fromBufferAttribute(n,a),A_.fromBufferAttribute(n,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+T_.distanceTo(A_);t.setAttribute("lineDistance",new tn(i,1))}else Dt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class VS extends gn{constructor(t=[],n=Ss,i,a,s,r,o,l,c,d){super(t,n,i,a,s,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dr extends gn{constructor(t,n,i=Ai,a,s,r,o=rn,l=rn,c,d=ra,h=1){if(d!==ra&&d!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:n,depth:h};super(u,a,s,r,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new am(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class bT extends Dr{constructor(t,n=Ai,i=Ss,a,s,r=rn,o=rn,l,c=ra){const d={width:t,height:t,depth:1},h=[d,d,d,d,d,d];super(t,t,n,i,a,s,r,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class kS extends gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ol extends Vn{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],d=[],h=[];let u=0,p=0;v("z","y","x",-1,-1,i,n,t,r,s,0),v("z","y","x",1,-1,i,n,-t,r,s,1),v("x","z","y",1,1,t,i,n,a,r,2),v("x","z","y",1,-1,t,i,-n,a,r,3),v("x","y","z",1,-1,t,n,i,a,s,4),v("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(d,3)),this.setAttribute("uv",new tn(h,2));function v(M,g,f,m,_,x,C,b,R,S,A){const D=x/R,N=C/S,G=x/2,q=C/2,Y=b/2,B=R+1,U=S+1;let I=0,W=0;const Q=new z;for(let at=0;at<U;at++){const xt=at*N-q;for(let yt=0;yt<B;yt++){const Gt=yt*D-G;Q[M]=Gt*m,Q[g]=xt*_,Q[f]=Y,c.push(Q.x,Q.y,Q.z),Q[M]=0,Q[g]=0,Q[f]=b>0?1:-1,d.push(Q.x,Q.y,Q.z),h.push(yt/R),h.push(1-at/S),I+=1}}for(let at=0;at<S;at++)for(let xt=0;xt<R;xt++){const yt=u+xt+B*at,Gt=u+xt+B*(at+1),jt=u+(xt+1)+B*(at+1),wt=u+(xt+1)+B*at;l.push(yt,Gt,wt),l.push(Gt,jt,wt),W+=6}o.addGroup(p,W,A),p+=W,u+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class rm extends Vn{constructor(t=[],n=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:a};const s=[],r=[];o(a),c(i),d(),this.setAttribute("position",new tn(s,3)),this.setAttribute("normal",new tn(s.slice(),3)),this.setAttribute("uv",new tn(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const _=new z,x=new z,C=new z;for(let b=0;b<n.length;b+=3)p(n[b+0],_),p(n[b+1],x),p(n[b+2],C),l(_,x,C,m)}function l(m,_,x,C){const b=C+1,R=[];for(let S=0;S<=b;S++){R[S]=[];const A=m.clone().lerp(x,S/b),D=_.clone().lerp(x,S/b),N=b-S;for(let G=0;G<=N;G++)G===0&&S===b?R[S][G]=A:R[S][G]=A.clone().lerp(D,G/N)}for(let S=0;S<b;S++)for(let A=0;A<2*(b-S)-1;A++){const D=Math.floor(A/2);A%2===0?(u(R[S][D+1]),u(R[S+1][D]),u(R[S][D])):(u(R[S][D+1]),u(R[S+1][D+1]),u(R[S+1][D]))}}function c(m){const _=new z;for(let x=0;x<s.length;x+=3)_.x=s[x+0],_.y=s[x+1],_.z=s[x+2],_.normalize().multiplyScalar(m),s[x+0]=_.x,s[x+1]=_.y,s[x+2]=_.z}function d(){const m=new z;for(let _=0;_<s.length;_+=3){m.x=s[_+0],m.y=s[_+1],m.z=s[_+2];const x=g(m)/2/Math.PI+.5,C=f(m)/Math.PI+.5;r.push(x,1-C)}v(),h()}function h(){for(let m=0;m<r.length;m+=6){const _=r[m+0],x=r[m+2],C=r[m+4],b=Math.max(_,x,C),R=Math.min(_,x,C);b>.9&&R<.1&&(_<.2&&(r[m+0]+=1),x<.2&&(r[m+2]+=1),C<.2&&(r[m+4]+=1))}}function u(m){s.push(m.x,m.y,m.z)}function p(m,_){const x=m*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function v(){const m=new z,_=new z,x=new z,C=new z,b=new re,R=new re,S=new re;for(let A=0,D=0;A<s.length;A+=9,D+=6){m.set(s[A+0],s[A+1],s[A+2]),_.set(s[A+3],s[A+4],s[A+5]),x.set(s[A+6],s[A+7],s[A+8]),b.set(r[D+0],r[D+1]),R.set(r[D+2],r[D+3]),S.set(r[D+4],r[D+5]),C.copy(m).add(_).add(x).divideScalar(3);const N=g(C);M(b,D+0,m,N),M(R,D+2,_,N),M(S,D+4,x,N)}}function M(m,_,x,C){C<0&&m.x===1&&(r[_]=m.x-1),x.x===0&&x.z===0&&(r[_]=C/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function f(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rm(t.vertices,t.indices,t.radius,t.detail)}}class om extends rm{constructor(t=1,n=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,s,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new om(t.radius,t.detail)}}class Du extends Vn{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,h=t/o,u=n/l,p=[],v=[],M=[],g=[];for(let f=0;f<d;f++){const m=f*u-r;for(let _=0;_<c;_++){const x=_*h-s;v.push(x,-m,0),M.push(0,0,1),g.push(_/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const _=m+c*f,x=m+c*(f+1),C=m+1+c*(f+1),b=m+1+c*f;p.push(_,x,b),p.push(x,C,b)}this.setIndex(p),this.setAttribute("position",new tn(v,3)),this.setAttribute("normal",new tn(M,3)),this.setAttribute("uv",new tn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Du(t.width,t.height,t.widthSegments,t.heightSegments)}}class lm extends Vn{constructor(t=1,n=.4,i=12,a=48,s=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:a,arc:s,thetaStart:r,thetaLength:o},i=Math.floor(i),a=Math.floor(a);const l=[],c=[],d=[],h=[],u=new z,p=new z,v=new z;for(let M=0;M<=i;M++){const g=r+M/i*o;for(let f=0;f<=a;f++){const m=f/a*s;p.x=(t+n*Math.cos(g))*Math.cos(m),p.y=(t+n*Math.cos(g))*Math.sin(m),p.z=n*Math.sin(g),c.push(p.x,p.y,p.z),u.x=t*Math.cos(m),u.y=t*Math.sin(m),v.subVectors(p,u).normalize(),d.push(v.x,v.y,v.z),h.push(f/a),h.push(M/i)}}for(let M=1;M<=i;M++)for(let g=1;g<=a;g++){const f=(a+1)*M+g-1,m=(a+1)*(M-1)+g-1,_=(a+1)*(M-1)+g,x=(a+1)*M+g;l.push(f,m,x),l.push(m,_,x)}this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(d,3)),this.setAttribute("uv",new tn(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lm(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class TT extends Vn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const n=[],i=new Set,a=new z,s=new z;if(t.index!==null){const r=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,d=l.length;c<d;++c){const h=l[c],u=h.start,p=h.count;for(let v=u,M=u+p;v<M;v+=3)for(let g=0;g<3;g++){const f=o.getX(v+g),m=o.getX(v+(g+1)%3);a.fromBufferAttribute(r,f),s.fromBufferAttribute(r,m),R_(a,s,i)===!0&&(n.push(a.x,a.y,a.z),n.push(s.x,s.y,s.z))}}}else{const r=t.attributes.position;for(let o=0,l=r.count/3;o<l;o++)for(let c=0;c<3;c++){const d=3*o+c,h=3*o+(c+1)%3;a.fromBufferAttribute(r,d),s.fromBufferAttribute(r,h),R_(a,s,i)===!0&&(n.push(a.x,a.y,a.z),n.push(s.x,s.y,s.z))}}this.setAttribute("position",new tn(n,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function R_(e,t,n){const i=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,a=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return n.has(i)===!0||n.has(a)===!0?!1:(n.add(i),n.add(a),!0)}function Nr(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];if(C_(a))a.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone();else if(Array.isArray(a))if(C_(a[0])){const s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();t[n][i]=s}else t[n][i]=a.slice();else t[n][i]=a}}return t}function hn(e){const t={};for(let n=0;n<e.length;n++){const i=Nr(e[n]);for(const a in i)t[a]=i[a]}return t}function C_(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function AT(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function XS(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const RT={clone:Nr,merge:hn};var CT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends rl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CT,this.fragmentShader=wT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Nr(t.uniforms),this.uniformsGroups=AT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class DT extends Ci{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class NT extends rl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class UT extends rl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ql=new z,Yl=new Gr,pi=new z;class WS extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ql,Yl,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ql,Yl,pi.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(ql,Yl,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ql,Yl,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const va=new z,w_=new re,D_=new re;class Kn extends WS{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Gh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Mf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gh*2*Math.atan(Math.tan(Mf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(va.x,va.y).multiplyScalar(-t/va.z),va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(va.x,va.y).multiplyScalar(-t/va.z)}getViewSize(t,n){return this.getViewBounds(t,w_,D_),n.subVectors(D_,w_)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Mf*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class jS extends WS{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Xs=-90,Ws=1;class LT extends Tn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Kn(Xs,Ws,t,n);a.layers=this.layers,this.add(a);const s=new Kn(Xs,Ws,t,n);s.layers=this.layers,this.add(s);const r=new Kn(Xs,Ws,t,n);r.layers=this.layers,this.add(r);const o=new Kn(Xs,Ws,t,n);o.layers=this.layers,this.add(o);const l=new Kn(Xs,Ws,t,n);l.layers=this.layers,this.add(l);const c=new Kn(Xs,Ws,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const c of n)this.remove(c);if(t===yi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===eu)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,d]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,s),t.setRenderTarget(i,1,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),t.setRenderTarget(h,u,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class OT extends Kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const gm=class gm{constructor(t,n,i,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,a){const s=this.elements;return s[0]=t,s[2]=n,s[1]=i,s[3]=a,this}};gm.prototype.isMatrix2=!0;let N_=gm;function U_(e,t,n,i){const a=PT(i);switch(n){case DS:return e*t;case US:return e*t/a.components*a.byteLength;case $p:return e*t/a.components*a.byteLength;case ys:return e*t*2/a.components*a.byteLength;case tm:return e*t*2/a.components*a.byteLength;case NS:return e*t*3/a.components*a.byteLength;case ui:return e*t*4/a.components*a.byteLength;case em:return e*t*4/a.components*a.byteLength;case gc:case _c:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case vc:case xc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fh:case hh:return Math.max(e,16)*Math.max(t,8)/4;case uh:case dh:return Math.max(e,8)*Math.max(t,8)/2;case ph:case mh:case _h:case vh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case gh:case Qc:case xh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Sh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case yh:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Mh:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Eh:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case bh:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Th:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ah:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Rh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ch:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case wh:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Dh:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Nh:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Uh:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Lh:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Oh:case Ph:case Ih:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Bh:case Fh:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Jc:case zh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function PT(e){switch(e){case ti:case AS:return{byteLength:1,components:1};case ko:case RS:case sa:return{byteLength:2,components:1};case Qp:case Jp:return{byteLength:2,components:4};case Ai:case Kp:case Si:return{byteLength:4,components:1};case CS:case wS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zp}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qS(){let e=null,t=!1,n=null,i=null;function a(s,r){n(s,r),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function IT(e){const t=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(e.bindBuffer(c,o),h.length===0)e.bufferSubData(c,0,d);else{h.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<h.length;p++){const v=h[u],M=h[p];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++u,h[u]=M)}h.length=u+1;for(let p=0,v=h.length;p<v;p++){const M=h[p];e.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var BT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,XT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,jT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,KT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,QT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,JT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$T=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,i1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,a1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,s1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,r1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,o1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,l1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,c1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h1="gl_FragColor = linearToOutputTexel( gl_FragColor );",p1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,g1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,v1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,S1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,T1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,w1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,D1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,P1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,I1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,B1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,F1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,H1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,q1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,hA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_A=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,SA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,MA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,EA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,TA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,RA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,NA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,UA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,LA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,IA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,XA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,WA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,qA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$A=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:BT,alphahash_pars_fragment:FT,alphamap_fragment:zT,alphamap_pars_fragment:HT,alphatest_fragment:GT,alphatest_pars_fragment:VT,aomap_fragment:kT,aomap_pars_fragment:XT,batching_pars_vertex:WT,batching_vertex:jT,begin_vertex:qT,beginnormal_vertex:YT,bsdfs:ZT,iridescence_fragment:KT,bumpmap_pars_fragment:QT,clipping_planes_fragment:JT,clipping_planes_pars_fragment:$T,clipping_planes_pars_vertex:t1,clipping_planes_vertex:e1,color_fragment:n1,color_pars_fragment:i1,color_pars_vertex:a1,color_vertex:s1,common:r1,cube_uv_reflection_fragment:o1,defaultnormal_vertex:l1,displacementmap_pars_vertex:c1,displacementmap_vertex:u1,emissivemap_fragment:f1,emissivemap_pars_fragment:d1,colorspace_fragment:h1,colorspace_pars_fragment:p1,envmap_fragment:m1,envmap_common_pars_fragment:g1,envmap_pars_fragment:_1,envmap_pars_vertex:v1,envmap_physical_pars_fragment:w1,envmap_vertex:x1,fog_vertex:S1,fog_pars_vertex:y1,fog_fragment:M1,fog_pars_fragment:E1,gradientmap_pars_fragment:b1,lightmap_pars_fragment:T1,lights_lambert_fragment:A1,lights_lambert_pars_fragment:R1,lights_pars_begin:C1,lights_toon_fragment:D1,lights_toon_pars_fragment:N1,lights_phong_fragment:U1,lights_phong_pars_fragment:L1,lights_physical_fragment:O1,lights_physical_pars_fragment:P1,lights_fragment_begin:I1,lights_fragment_maps:B1,lights_fragment_end:F1,lightprobes_pars_fragment:z1,logdepthbuf_fragment:H1,logdepthbuf_pars_fragment:G1,logdepthbuf_pars_vertex:V1,logdepthbuf_vertex:k1,map_fragment:X1,map_pars_fragment:W1,map_particle_fragment:j1,map_particle_pars_fragment:q1,metalnessmap_fragment:Y1,metalnessmap_pars_fragment:Z1,morphinstance_vertex:K1,morphcolor_vertex:Q1,morphnormal_vertex:J1,morphtarget_pars_vertex:$1,morphtarget_vertex:tA,normal_fragment_begin:eA,normal_fragment_maps:nA,normal_pars_fragment:iA,normal_pars_vertex:aA,normal_vertex:sA,normalmap_pars_fragment:rA,clearcoat_normal_fragment_begin:oA,clearcoat_normal_fragment_maps:lA,clearcoat_pars_fragment:cA,iridescence_pars_fragment:uA,opaque_fragment:fA,packing:dA,premultiplied_alpha_fragment:hA,project_vertex:pA,dithering_fragment:mA,dithering_pars_fragment:gA,roughnessmap_fragment:_A,roughnessmap_pars_fragment:vA,shadowmap_pars_fragment:xA,shadowmap_pars_vertex:SA,shadowmap_vertex:yA,shadowmask_pars_fragment:MA,skinbase_vertex:EA,skinning_pars_vertex:bA,skinning_vertex:TA,skinnormal_vertex:AA,specularmap_fragment:RA,specularmap_pars_fragment:CA,tonemapping_fragment:wA,tonemapping_pars_fragment:DA,transmission_fragment:NA,transmission_pars_fragment:UA,uv_pars_fragment:LA,uv_pars_vertex:OA,uv_vertex:PA,worldpos_vertex:IA,background_vert:BA,background_frag:FA,backgroundCube_vert:zA,backgroundCube_frag:HA,cube_vert:GA,cube_frag:VA,depth_vert:kA,depth_frag:XA,distance_vert:WA,distance_frag:jA,equirect_vert:qA,equirect_frag:YA,linedashed_vert:ZA,linedashed_frag:KA,meshbasic_vert:QA,meshbasic_frag:JA,meshlambert_vert:$A,meshlambert_frag:tR,meshmatcap_vert:eR,meshmatcap_frag:nR,meshnormal_vert:iR,meshnormal_frag:aR,meshphong_vert:sR,meshphong_frag:rR,meshphysical_vert:oR,meshphysical_frag:lR,meshtoon_vert:cR,meshtoon_frag:uR,points_vert:fR,points_frag:dR,shadow_vert:hR,shadow_frag:pR,sprite_vert:mR,sprite_frag:gR},mt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},gi={basic:{uniforms:hn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:hn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:hn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:hn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:hn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:hn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:hn([mt.points,mt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:hn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:hn([mt.common,mt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:hn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:hn([mt.sprite,mt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:hn([mt.common,mt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:hn([mt.lights,mt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};gi.physical={uniforms:hn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Zl={r:0,b:0,g:0},_R=new We,YS=new It;YS.set(-1,0,0,0,1,0,0,0,1);function vR(e,t,n,i,a,s){const r=new Zt(0);let o=a===!0?0:1,l,c,d=null,h=0,u=null;function p(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){const x=m.backgroundBlurriness>0;_=t.get(_,x)}return _}function v(m){let _=!1;const x=p(m);x===null?g(r,o):x&&x.isColor&&(g(x,1),_=!0);const C=e.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(e.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(m,_){const x=p(_);x&&(x.isCubeTexture||x.mapping===Cu)?(c===void 0&&(c=new Ri(new ol(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:Nr(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_R.makeRotationFromEuler(_.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(YS),c.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ce,(d!==x||h!==x.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ri(new Du(2,2),new Ci({name:"BackgroundMaterial",uniforms:Nr(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ce,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,d=x,h=x.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,_){m.getRGB(Zl,XS(e)),n.buffers.color.setClear(Zl.r,Zl.g,Zl.b,_,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,_=1){r.set(m),o=_,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:v,addToRenderList:M,dispose:f}}function xR(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=u(null);let s=a,r=!1;function o(N,G,q,Y,B){let U=!1;const I=h(N,Y,q,G);s!==I&&(s=I,c(s.object)),U=p(N,Y,q,B),U&&v(N,Y,q,B),B!==null&&t.update(B,e.ELEMENT_ARRAY_BUFFER),(U||r)&&(r=!1,x(N,G,q,Y),B!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return e.createVertexArray()}function c(N){return e.bindVertexArray(N)}function d(N){return e.deleteVertexArray(N)}function h(N,G,q,Y){const B=Y.wireframe===!0;let U=i[G.id];U===void 0&&(U={},i[G.id]=U);const I=N.isInstancedMesh===!0?N.id:0;let W=U[I];W===void 0&&(W={},U[I]=W);let Q=W[q.id];Q===void 0&&(Q={},W[q.id]=Q);let at=Q[B];return at===void 0&&(at=u(l()),Q[B]=at),at}function u(N){const G=[],q=[],Y=[];for(let B=0;B<n;B++)G[B]=0,q[B]=0,Y[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:q,attributeDivisors:Y,object:N,attributes:{},index:null}}function p(N,G,q,Y){const B=s.attributes,U=G.attributes;let I=0;const W=q.getAttributes();for(const Q in W)if(W[Q].location>=0){const xt=B[Q];let yt=U[Q];if(yt===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(yt=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(yt=N.instanceColor)),xt===void 0||xt.attribute!==yt||yt&&xt.data!==yt.data)return!0;I++}return s.attributesNum!==I||s.index!==Y}function v(N,G,q,Y){const B={},U=G.attributes;let I=0;const W=q.getAttributes();for(const Q in W)if(W[Q].location>=0){let xt=U[Q];xt===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(xt=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(xt=N.instanceColor));const yt={};yt.attribute=xt,xt&&xt.data&&(yt.data=xt.data),B[Q]=yt,I++}s.attributes=B,s.attributesNum=I,s.index=Y}function M(){const N=s.newAttributes;for(let G=0,q=N.length;G<q;G++)N[G]=0}function g(N){f(N,0)}function f(N,G){const q=s.newAttributes,Y=s.enabledAttributes,B=s.attributeDivisors;q[N]=1,Y[N]===0&&(e.enableVertexAttribArray(N),Y[N]=1),B[N]!==G&&(e.vertexAttribDivisor(N,G),B[N]=G)}function m(){const N=s.newAttributes,G=s.enabledAttributes;for(let q=0,Y=G.length;q<Y;q++)G[q]!==N[q]&&(e.disableVertexAttribArray(q),G[q]=0)}function _(N,G,q,Y,B,U,I){I===!0?e.vertexAttribIPointer(N,G,q,B,U):e.vertexAttribPointer(N,G,q,Y,B,U)}function x(N,G,q,Y){M();const B=Y.attributes,U=q.getAttributes(),I=G.defaultAttributeValues;for(const W in U){const Q=U[W];if(Q.location>=0){let at=B[W];if(at===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(at=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(at=N.instanceColor)),at!==void 0){const xt=at.normalized,yt=at.itemSize,Gt=t.get(at);if(Gt===void 0)continue;const jt=Gt.buffer,wt=Gt.type,$=Gt.bytesPerElement,dt=wt===e.INT||wt===e.UNSIGNED_INT||at.gpuType===Kp;if(at.isInterleavedBufferAttribute){const ot=at.data,Rt=ot.stride,Nt=at.offset;if(ot.isInstancedInterleavedBuffer){for(let Ct=0;Ct<Q.locationSize;Ct++)f(Q.location+Ct,ot.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ct=0;Ct<Q.locationSize;Ct++)g(Q.location+Ct);e.bindBuffer(e.ARRAY_BUFFER,jt);for(let Ct=0;Ct<Q.locationSize;Ct++)_(Q.location+Ct,yt/Q.locationSize,wt,xt,Rt*$,(Nt+yt/Q.locationSize*Ct)*$,dt)}else{if(at.isInstancedBufferAttribute){for(let ot=0;ot<Q.locationSize;ot++)f(Q.location+ot,at.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ot=0;ot<Q.locationSize;ot++)g(Q.location+ot);e.bindBuffer(e.ARRAY_BUFFER,jt);for(let ot=0;ot<Q.locationSize;ot++)_(Q.location+ot,yt/Q.locationSize,wt,xt,yt*$,yt/Q.locationSize*ot*$,dt)}}else if(I!==void 0){const xt=I[W];if(xt!==void 0)switch(xt.length){case 2:e.vertexAttrib2fv(Q.location,xt);break;case 3:e.vertexAttrib3fv(Q.location,xt);break;case 4:e.vertexAttrib4fv(Q.location,xt);break;default:e.vertexAttrib1fv(Q.location,xt)}}}}m()}function C(){A();for(const N in i){const G=i[N];for(const q in G){const Y=G[q];for(const B in Y){const U=Y[B];for(const I in U)d(U[I].object),delete U[I];delete Y[B]}}delete i[N]}}function b(N){if(i[N.id]===void 0)return;const G=i[N.id];for(const q in G){const Y=G[q];for(const B in Y){const U=Y[B];for(const I in U)d(U[I].object),delete U[I];delete Y[B]}}delete i[N.id]}function R(N){for(const G in i){const q=i[G];for(const Y in q){const B=q[Y];if(B[N.id]===void 0)continue;const U=B[N.id];for(const I in U)d(U[I].object),delete U[I];delete B[N.id]}}}function S(N){for(const G in i){const q=i[G],Y=N.isInstancedMesh===!0?N.id:0,B=q[Y];if(B!==void 0){for(const U in B){const I=B[U];for(const W in I)d(I[W].object),delete I[W];delete B[U]}delete q[Y],Object.keys(q).length===0&&delete i[G]}}}function A(){D(),r=!0,s!==a&&(s=a,c(s.object))}function D(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:A,resetDefaultState:D,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfObject:S,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:g,disableUnusedAttributes:m}}function SR(e,t,n){let i;function a(l){i=l}function s(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,d){d!==0&&(e.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function o(l,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let p=0;p<d;p++)u+=c[p];n.update(u,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function yR(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(R){return!(R!==ui&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const S=R===sa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ti&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Si&&!S)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(Dt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),C=e.getParameter(e.MAX_SAMPLES),b=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:x,maxSamples:C,samples:b}}function MR(e){const t=this;let n=null,i=0,a=!1,s=!1;const r=new ss,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||i!==0||a;return a=u,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){n=d(h,u,0)},this.setState=function(h,u,p){const v=h.clippingPlanes,M=h.clipIntersection,g=h.clipShadows,f=e.get(h);if(!a||v===null||v.length===0||s&&!g)s?d(null):c();else{const m=s?0:i,_=m*4;let x=f.clippingState||null;l.value=x,x=d(v,u,_,p);for(let C=0;C!==_;++C)x[C]=n[C];f.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(h,u,p,v){const M=h!==null?h.length:0;let g=null;if(M!==0){if(g=l.value,v!==!0||g===null){const f=p+M*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let _=0,x=p;_!==M;++_,x+=4)r.copy(h[_]).applyMatrix4(m,o),r.normal.toArray(g,x),g[x+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}const Na=4,L_=[.125,.215,.35,.446,.526,.582],os=20,ER=256,no=new jS,O_=new Zt;let qf=null,Yf=0,Zf=0,Kf=!1;const bR=new z;class P_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,a=100,s={}){const{size:r=256,position:o=bR}=s;qf=this._renderer.getRenderTarget(),Yf=this._renderer.getActiveCubeFace(),Zf=this._renderer.getActiveMipmapLevel(),Kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=F_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=B_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(qf,Yf,Zf),this._renderer.xr.enabled=Kf,t.scissorTest=!1,js(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ss||t.mapping===wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qf=this._renderer.getRenderTarget(),Yf=this._renderer.getActiveCubeFace(),Zf=this._renderer.getActiveMipmapLevel(),Kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:sa,format:ui,colorSpace:$c,depthBuffer:!1},a=I_(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=I_(t,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=TR(s)),this._blurMaterial=RR(s,t,n),this._ggxMaterial=AR(s,t,n)}return a}_compileMaterial(t){const n=new Ri(new Vn,t);this._renderer.compile(n,no)}_sceneToCubeUV(t,n,i,a,s){const l=new Kn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(O_),h.toneMapping=Ei,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(a),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ri(new ol,new sm({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let f=!1;const m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,f=!0):(g.color.copy(O_),f=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[_],s.y,s.z)):x===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[_]));const C=this._cubeSize;js(a,x*C,_>2?C:0,C,C),h.setRenderTarget(a),f&&h.render(M,l),h.render(t,l)}h.toneMapping=p,h.autoClear=u,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===Ss||t.mapping===wr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=F_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=B_());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;js(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,no)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(t,s-1,s);n.autoClear=i}_applyGGXFilter(t,n,i){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=0+c*1.25,p=h*u,{_lodMax:v}=this,M=this._sizeLods[i],g=3*M*(i>v-Na?i-v+Na:0),f=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=v-n,js(s,g,f,3*M,2*M),a.setRenderTarget(s),a.render(o,no),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,js(t,g,f,3*M,2*M),a.setRenderTarget(t),a.render(o,no)}_blur(t,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,a,"latitudinal",s),this._halfBlur(r,t,i,i,a,"longitudinal",s)}_halfBlur(t,n,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&ne("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[a];h.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*os-1),M=s/v,g=isFinite(s)?1+Math.floor(d*M):os;g>os&&Dt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${os}`);const f=[];let m=0;for(let R=0;R<os;++R){const S=R/M,A=Math.exp(-S*S/2);f.push(A),R===0?m+=A:R<g&&(m+=2*A)}for(let R=0;R<f.length;R++)f[R]=f[R]/m;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=v,u.mipInt.value=_-i;const x=this._sizeLods[a],C=3*x*(a>_-Na?a-_+Na:0),b=4*(this._cubeSize-x);js(n,C,b,3*x,2*x),l.setRenderTarget(n),l.render(h,no)}}function TR(e){const t=[],n=[],i=[];let a=e;const s=e-Na+1+L_.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let l=1/o;r>e-Na?l=L_[r-e+Na-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,v=6,M=3,g=2,f=1,m=new Float32Array(M*v*p),_=new Float32Array(g*v*p),x=new Float32Array(f*v*p);for(let b=0;b<p;b++){const R=b%3*2/3-1,S=b>2?0:-1,A=[R,S,0,R+2/3,S,0,R+2/3,S+1,0,R,S,0,R+2/3,S+1,0,R,S+1,0];m.set(A,M*v*b),_.set(u,g*v*b);const D=[b,b,b,b,b,b];x.set(D,f*v*b)}const C=new Vn;C.setAttribute("position",new Ti(m,M)),C.setAttribute("uv",new Ti(_,g)),C.setAttribute("faceIndex",new Ti(x,f)),i.push(new Ri(C,null)),a>Na&&a--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function I_(e,t,n){const i=new bi(e,t,n);return i.texture.mapping=Cu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function js(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function AR(e,t,n){return new Ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ER,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function RR(e,t,n){const i=new Float32Array(os),a=new z(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function B_(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function F_(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Nu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class ZS extends bi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new VS(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new ol(5,5,5),s=new Ci({name:"CubemapFromEquirect",uniforms:Nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:Ji});s.uniforms.tEquirect.value=n;const r=new Ri(a,s),o=n.minFilter;return n.minFilter===ls&&(n.minFilter=fn),new LT(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}}function CR(e){let t=new WeakMap,n=new WeakMap,i=null;function a(u,p=!1){return u==null?null:p?r(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===xf||p===Sf)if(t.has(u)){const v=t.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const M=new ZS(v.height);return M.fromEquirectangularTexture(e,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const p=u.mapping,v=p===xf||p===Sf,M=p===Ss||p===wr;if(v||M){let g=n.get(u);const f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new P_(e)),g=v?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const m=u.image;return v&&m&&m.height>0||M&&m&&l(m)?(i===null&&(i=new P_(e)),g=v?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function o(u,p){return p===xf?u.mapping=Ss:p===Sf&&(u.mapping=wr),u}function l(u){let p=0;const v=6;for(let M=0;M<v;M++)u[M]!==void 0&&p++;return p===v}function c(u){const p=u.target;p.removeEventListener("dispose",c);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function d(u){const p=u.target;p.removeEventListener("dispose",d);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function h(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:h}}function wR(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Hh("WebGLRenderer: "+i+" extension not supported."),a}}}function DR(e,t,n,i){const a={},s=new WeakMap;function r(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",r),delete a[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(h,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,n.memory.geometries++),u}function l(h){const u=h.attributes;for(const p in u)t.update(u[p],e.ARRAY_BUFFER)}function c(h){const u=[],p=h.index,v=h.attributes.position;let M=0;if(v===void 0)return;if(p!==null){const m=p.array;M=p.version;for(let _=0,x=m.length;_<x;_+=3){const C=m[_+0],b=m[_+1],R=m[_+2];u.push(C,b,b,R,R,C)}}else{const m=v.array;M=v.version;for(let _=0,x=m.length/3-1;_<x;_+=3){const C=_+0,b=_+1,R=_+2;u.push(C,b,b,R,R,C)}}const g=new(v.count>=65535?FS:BS)(u,1);g.version=M;const f=s.get(h);f&&t.remove(f),s.set(h,g)}function d(h){const u=s.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function NR(e,t,n){let i;function a(h){i=h}let s,r;function o(h){s=h.type,r=h.bytesPerElement}function l(h,u){e.drawElements(i,u,s,h*r),n.update(u,i,1)}function c(h,u,p){p!==0&&(e.drawElementsInstanced(i,u,s,h*r,p),n.update(u,i,p))}function d(h,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,h,0,p);let M=0;for(let g=0;g<p;g++)M+=u[g];n.update(M,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function UR(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:ne("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function LR(e,t,n){const i=new WeakMap,a=new Fe;function s(r,o,l){const c=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==h){let A=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],m=o.morphAttributes.color||[];let _=0;p===!0&&(_=1),v===!0&&(_=2),M===!0&&(_=3);let x=o.attributes.position.count*_,C=1;x>t.maxTextureSize&&(C=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const b=new Float32Array(x*C*4*h),R=new OS(b,x,C,h);R.type=Si,R.needsUpdate=!0;const S=_*4;for(let D=0;D<h;D++){const N=g[D],G=f[D],q=m[D],Y=x*C*4*D;for(let B=0;B<N.count;B++){const U=B*S;p===!0&&(a.fromBufferAttribute(N,B),b[Y+U+0]=a.x,b[Y+U+1]=a.y,b[Y+U+2]=a.z,b[Y+U+3]=0),v===!0&&(a.fromBufferAttribute(G,B),b[Y+U+4]=a.x,b[Y+U+5]=a.y,b[Y+U+6]=a.z,b[Y+U+7]=0),M===!0&&(a.fromBufferAttribute(q,B),b[Y+U+8]=a.x,b[Y+U+9]=a.y,b[Y+U+10]=a.z,b[Y+U+11]=q.itemSize===4?a.w:1)}}u={count:h,texture:R,size:new re(x,C)},i.set(o,u),o.addEventListener("dispose",A)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];const v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function OR(e,t,n,i,a){let s=new WeakMap;function r(c){const d=a.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==d&&(t.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return u}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:r,dispose:o}}const PR={[vS]:"LINEAR_TONE_MAPPING",[xS]:"REINHARD_TONE_MAPPING",[SS]:"CINEON_TONE_MAPPING",[yS]:"ACES_FILMIC_TONE_MAPPING",[ES]:"AGX_TONE_MAPPING",[bS]:"NEUTRAL_TONE_MAPPING",[MS]:"CUSTOM_TONE_MAPPING"};function IR(e,t,n,i,a){const s=new bi(t,n,{type:e,depthBuffer:i,stencilBuffer:a,depthTexture:i?new Dr(t,n):void 0}),r=new bi(t,n,{type:sa,depthBuffer:!1,stencilBuffer:!1}),o=new Vn;o.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new tn([0,2,0,0,2,0],2));const l=new DT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Ri(o,l),d=new jS(-1,1,1,-1,0,1);let h=null,u=null,p=!1,v,M=null,g=[],f=!1;this.setSize=function(m,_){s.setSize(m,_),r.setSize(m,_);for(let x=0;x<g.length;x++){const C=g[x];C.setSize&&C.setSize(m,_)}},this.setEffects=function(m){g=m,f=g.length>0&&g[0].isRenderPass===!0;const _=s.width,x=s.height;for(let C=0;C<g.length;C++){const b=g[C];b.setSize&&b.setSize(_,x)}},this.begin=function(m,_){if(p||m.toneMapping===Ei&&g.length===0)return!1;if(M=_,_!==null){const x=_.width,C=_.height;(s.width!==x||s.height!==C)&&this.setSize(x,C)}return f===!1&&m.setRenderTarget(s),v=m.toneMapping,m.toneMapping=Ei,!0},this.hasRenderPass=function(){return f},this.end=function(m,_){m.toneMapping=v,p=!0;let x=s,C=r;for(let b=0;b<g.length;b++){const R=g[b];if(R.enabled!==!1&&(R.render(m,C,x,_),R.needsSwap!==!1)){const S=x;x=C,C=S}}if(h!==m.outputColorSpace||u!==m.toneMapping){h=m.outputColorSpace,u=m.toneMapping,l.defines={},Qt.getTransfer(h)===ce&&(l.defines.SRGB_TRANSFER="");const b=PR[u];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,m.setRenderTarget(M),m.render(c,d),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),r.dispose(),o.dispose(),l.dispose()}}const KS=new gn,Vh=new Dr(1,1),QS=new OS,JS=new aT,$S=new VS,z_=[],H_=[],G_=new Float32Array(16),V_=new Float32Array(9),k_=new Float32Array(4);function Vr(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let s=z_[a];if(s===void 0&&(s=new Float32Array(a),z_[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function Ye(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ze(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Uu(e,t){let n=H_[t];n===void 0&&(n=new Int32Array(t),H_[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function BR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function FR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ye(n,t))return;e.uniform2fv(this.addr,t),Ze(n,t)}}function zR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ye(n,t))return;e.uniform3fv(this.addr,t),Ze(n,t)}}function HR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ye(n,t))return;e.uniform4fv(this.addr,t),Ze(n,t)}}function GR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ye(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ze(n,t)}else{if(Ye(n,i))return;k_.set(i),e.uniformMatrix2fv(this.addr,!1,k_),Ze(n,i)}}function VR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ye(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ze(n,t)}else{if(Ye(n,i))return;V_.set(i),e.uniformMatrix3fv(this.addr,!1,V_),Ze(n,i)}}function kR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ye(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ze(n,t)}else{if(Ye(n,i))return;G_.set(i),e.uniformMatrix4fv(this.addr,!1,G_),Ze(n,i)}}function XR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function WR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ye(n,t))return;e.uniform2iv(this.addr,t),Ze(n,t)}}function jR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ye(n,t))return;e.uniform3iv(this.addr,t),Ze(n,t)}}function qR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ye(n,t))return;e.uniform4iv(this.addr,t),Ze(n,t)}}function YR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ZR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ye(n,t))return;e.uniform2uiv(this.addr,t),Ze(n,t)}}function KR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ye(n,t))return;e.uniform3uiv(this.addr,t),Ze(n,t)}}function QR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ye(n,t))return;e.uniform4uiv(this.addr,t),Ze(n,t)}}function JR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(Vh.compareFunction=n.isReversedDepthBuffer()?im:nm,s=Vh):s=KS,n.setTexture2D(t||s,a)}function $R(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||JS,a)}function t3(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||$S,a)}function e3(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||QS,a)}function n3(e){switch(e){case 5126:return BR;case 35664:return FR;case 35665:return zR;case 35666:return HR;case 35674:return GR;case 35675:return VR;case 35676:return kR;case 5124:case 35670:return XR;case 35667:case 35671:return WR;case 35668:case 35672:return jR;case 35669:case 35673:return qR;case 5125:return YR;case 36294:return ZR;case 36295:return KR;case 36296:return QR;case 35678:case 36198:case 36298:case 36306:case 35682:return JR;case 35679:case 36299:case 36307:return $R;case 35680:case 36300:case 36308:case 36293:return t3;case 36289:case 36303:case 36311:case 36292:return e3}}function i3(e,t){e.uniform1fv(this.addr,t)}function a3(e,t){const n=Vr(t,this.size,2);e.uniform2fv(this.addr,n)}function s3(e,t){const n=Vr(t,this.size,3);e.uniform3fv(this.addr,n)}function r3(e,t){const n=Vr(t,this.size,4);e.uniform4fv(this.addr,n)}function o3(e,t){const n=Vr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function l3(e,t){const n=Vr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function c3(e,t){const n=Vr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function u3(e,t){e.uniform1iv(this.addr,t)}function f3(e,t){e.uniform2iv(this.addr,t)}function d3(e,t){e.uniform3iv(this.addr,t)}function h3(e,t){e.uniform4iv(this.addr,t)}function p3(e,t){e.uniform1uiv(this.addr,t)}function m3(e,t){e.uniform2uiv(this.addr,t)}function g3(e,t){e.uniform3uiv(this.addr,t)}function _3(e,t){e.uniform4uiv(this.addr,t)}function v3(e,t,n){const i=this.cache,a=t.length,s=Uu(n,a);Ye(i,s)||(e.uniform1iv(this.addr,s),Ze(i,s));let r;this.type===e.SAMPLER_2D_SHADOW?r=Vh:r=KS;for(let o=0;o!==a;++o)n.setTexture2D(t[o]||r,s[o])}function x3(e,t,n){const i=this.cache,a=t.length,s=Uu(n,a);Ye(i,s)||(e.uniform1iv(this.addr,s),Ze(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||JS,s[r])}function S3(e,t,n){const i=this.cache,a=t.length,s=Uu(n,a);Ye(i,s)||(e.uniform1iv(this.addr,s),Ze(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||$S,s[r])}function y3(e,t,n){const i=this.cache,a=t.length,s=Uu(n,a);Ye(i,s)||(e.uniform1iv(this.addr,s),Ze(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||QS,s[r])}function M3(e){switch(e){case 5126:return i3;case 35664:return a3;case 35665:return s3;case 35666:return r3;case 35674:return o3;case 35675:return l3;case 35676:return c3;case 5124:case 35670:return u3;case 35667:case 35671:return f3;case 35668:case 35672:return d3;case 35669:case 35673:return h3;case 5125:return p3;case 36294:return m3;case 36295:return g3;case 36296:return _3;case 35678:case 36198:case 36298:case 36306:case 35682:return v3;case 35679:case 36299:case 36307:return x3;case 35680:case 36300:case 36308:case 36293:return S3;case 36289:case 36303:case 36311:case 36292:return y3}}class E3{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=n3(n.type)}}class b3{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=M3(n.type)}}class T3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(t,n[o.id],i)}}}const Qf=/(\w+)(\])?(\[|\.)?/g;function X_(e,t){e.seq.push(t),e.map[t.id]=t}function A3(e,t,n){const i=e.name,a=i.length;for(Qf.lastIndex=0;;){const s=Qf.exec(i),r=Qf.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){X_(n,c===void 0?new E3(o,e,t):new b3(o,e,t));break}else{let h=n.map[o];h===void 0&&(h=new T3(o),X_(n,h)),n=h}}}class Sc{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);A3(o,l,this)}const a=[],s=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(t,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,s=t.length;a!==s;++a){const r=t[a];r.id in n&&i.push(r)}return i}}function W_(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const R3=37297;let C3=0;function w3(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}const j_=new It;function D3(e){Qt._getMatrix(j_,Qt.workingColorSpace,e);const t=`mat3( ${j_.elements.map(n=>n.toFixed(4))} )`;switch(Qt.getTransfer(e)){case tu:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function q_(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+w3(e.getShaderSource(t),o)}else return s}function N3(e,t){const n=D3(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const U3={[vS]:"Linear",[xS]:"Reinhard",[SS]:"Cineon",[yS]:"ACESFilmic",[ES]:"AgX",[bS]:"Neutral",[MS]:"Custom"};function L3(e,t){const n=U3[t];return n===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Kl=new z;function O3(){Qt.getLuminanceCoefficients(Kl);const e=Kl.x.toFixed(4),t=Kl.y.toFixed(4),n=Kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function P3(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function I3(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function B3(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=e.getActiveAttrib(t,a),r=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function fo(e){return e!==""}function Y_(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Z_(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const F3=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(e){return e.replace(F3,H3)}const z3=new Map;function H3(e,t){let n=kt[t];if(n===void 0){const i=z3.get(t);if(i!==void 0)n=kt[i],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return kh(n)}const G3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function K_(e){return e.replace(G3,V3)}function V3(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Q_(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const k3={[mc]:"SHADOWMAP_TYPE_PCF",[uo]:"SHADOWMAP_TYPE_VSM"};function X3(e){return k3[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const W3={[Ss]:"ENVMAP_TYPE_CUBE",[wr]:"ENVMAP_TYPE_CUBE",[Cu]:"ENVMAP_TYPE_CUBE_UV"};function j3(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":W3[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const q3={[wr]:"ENVMAP_MODE_REFRACTION"};function Y3(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":q3[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Z3={[_S]:"ENVMAP_BLENDING_MULTIPLY",[Bb]:"ENVMAP_BLENDING_MIX",[Fb]:"ENVMAP_BLENDING_ADD"};function K3(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Z3[e.combine]||"ENVMAP_BLENDING_NONE"}function Q3(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function J3(e,t,n,i){const a=e.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=X3(n),c=j3(n),d=Y3(n),h=K3(n),u=Q3(n),p=P3(n),v=I3(s),M=a.createProgram();let g,f,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(fo).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(fo).join(`
`),f.length>0&&(f+=`
`)):(g=[Q_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),f=[Q_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ei?"#define TONE_MAPPING":"",n.toneMapping!==Ei?kt.tonemapping_pars_fragment:"",n.toneMapping!==Ei?L3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,N3("linearToOutputTexel",n.outputColorSpace),O3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fo).join(`
`)),r=kh(r),r=Y_(r,n),r=Z_(r,n),o=kh(o),o=Y_(o,n),o=Z_(o,n),r=K_(r),o=K_(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===r_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===r_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=m+g+r,x=m+f+o,C=W_(a,a.VERTEX_SHADER,_),b=W_(a,a.FRAGMENT_SHADER,x);a.attachShader(M,C),a.attachShader(M,b),n.index0AttributeName!==void 0?a.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function R(N){if(e.debug.checkShaderErrors){const G=a.getProgramInfoLog(M)||"",q=a.getShaderInfoLog(C)||"",Y=a.getShaderInfoLog(b)||"",B=G.trim(),U=q.trim(),I=Y.trim();let W=!0,Q=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(W=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,M,C,b);else{const at=q_(a,C,"vertex"),xt=q_(a,b,"fragment");ne("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+B+`
`+at+`
`+xt)}else B!==""?Dt("WebGLProgram: Program Info Log:",B):(U===""||I==="")&&(Q=!1);Q&&(N.diagnostics={runnable:W,programLog:B,vertexShader:{log:U,prefix:g},fragmentShader:{log:I,prefix:f}})}a.deleteShader(C),a.deleteShader(b),S=new Sc(a,M),A=B3(a,M)}let S;this.getUniforms=function(){return S===void 0&&R(this),S};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=a.getProgramParameter(M,R3)),D},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=C3++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=C,this.fragmentShader=b,this}let $3=0;class tC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new eC(t),n.set(t,i)),i}}class eC{constructor(t){this.id=$3++,this.code=t,this.usedTimes=0}}function nC(e){return e===ys||e===Qc||e===Jc}function iC(e,t,n,i,a,s){const r=new PS,o=new tC,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function M(S,A,D,N,G,q){const Y=N.fog,B=G.geometry,U=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,I=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,W=t.get(S.envMap||U,I),Q=W&&W.mapping===Cu?W.image.height:null,at=p[S.type];S.precision!==null&&(u=i.getMaxPrecision(S.precision),u!==S.precision&&Dt("WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const xt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,yt=xt!==void 0?xt.length:0;let Gt=0;B.morphAttributes.position!==void 0&&(Gt=1),B.morphAttributes.normal!==void 0&&(Gt=2),B.morphAttributes.color!==void 0&&(Gt=3);let jt,wt,$,dt;if(at){const Ft=gi[at];jt=Ft.vertexShader,wt=Ft.fragmentShader}else jt=S.vertexShader,wt=S.fragmentShader,o.update(S),$=o.getVertexShaderID(S),dt=o.getFragmentShaderID(S);const ot=e.getRenderTarget(),Rt=e.state.buffers.depth.getReversed(),Nt=G.isInstancedMesh===!0,Ct=G.isBatchedMesh===!0,Se=!!S.map,Ot=!!S.matcap,te=!!W,oe=!!S.aoMap,Xt=!!S.lightMap,De=!!S.bumpMap,ye=!!S.normalMap,dn=!!S.displacementMap,P=!!S.emissiveMap,de=!!S.metalnessMap,Vt=!!S.roughnessMap,le=S.anisotropy>0,pt=S.clearcoat>0,be=S.dispersion>0,T=S.iridescence>0,y=S.sheen>0,H=S.transmission>0,Z=le&&!!S.anisotropyMap,et=pt&&!!S.clearcoatMap,lt=pt&&!!S.clearcoatNormalMap,ft=pt&&!!S.clearcoatRoughnessMap,j=T&&!!S.iridescenceMap,L=T&&!!S.iridescenceThicknessMap,tt=y&&!!S.sheenColorMap,ct=y&&!!S.sheenRoughnessMap,it=!!S.specularMap,rt=!!S.specularColorMap,Ut=!!S.specularIntensityMap,Pt=H&&!!S.transmissionMap,ie=H&&!!S.thicknessMap,O=!!S.gradientMap,ut=!!S.alphaMap,K=S.alphaTest>0,vt=!!S.alphaHash,ht=!!S.extensions;let nt=Ei;S.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(nt=e.toneMapping);const bt={shaderID:at,shaderType:S.type,shaderName:S.name,vertexShader:jt,fragmentShader:wt,defines:S.defines,customVertexShaderID:$,customFragmentShaderID:dt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:Ct,batchingColor:Ct&&G._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&G.instanceColor!==null,instancingMorph:Nt&&G.morphTexture!==null,outputColorSpace:ot===null?e.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Se,matcap:Ot,envMap:te,envMapMode:te&&W.mapping,envMapCubeUVHeight:Q,aoMap:oe,lightMap:Xt,bumpMap:De,normalMap:ye,displacementMap:dn,emissiveMap:P,normalMapObjectSpace:ye&&S.normalMapType===Gb,normalMapTangentSpace:ye&&S.normalMapType===i_,packedNormalMap:ye&&S.normalMapType===i_&&nC(S.normalMap.format),metalnessMap:de,roughnessMap:Vt,anisotropy:le,anisotropyMap:Z,clearcoat:pt,clearcoatMap:et,clearcoatNormalMap:lt,clearcoatRoughnessMap:ft,dispersion:be,iridescence:T,iridescenceMap:j,iridescenceThicknessMap:L,sheen:y,sheenColorMap:tt,sheenRoughnessMap:ct,specularMap:it,specularColorMap:rt,specularIntensityMap:Ut,transmission:H,transmissionMap:Pt,thicknessMap:ie,gradientMap:O,opaque:S.transparent===!1&&S.blending===mr&&S.alphaToCoverage===!1,alphaMap:ut,alphaTest:K,alphaHash:vt,combine:S.combine,mapUv:Se&&v(S.map.channel),aoMapUv:oe&&v(S.aoMap.channel),lightMapUv:Xt&&v(S.lightMap.channel),bumpMapUv:De&&v(S.bumpMap.channel),normalMapUv:ye&&v(S.normalMap.channel),displacementMapUv:dn&&v(S.displacementMap.channel),emissiveMapUv:P&&v(S.emissiveMap.channel),metalnessMapUv:de&&v(S.metalnessMap.channel),roughnessMapUv:Vt&&v(S.roughnessMap.channel),anisotropyMapUv:Z&&v(S.anisotropyMap.channel),clearcoatMapUv:et&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:lt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:L&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ct&&v(S.sheenRoughnessMap.channel),specularMapUv:it&&v(S.specularMap.channel),specularColorMapUv:rt&&v(S.specularColorMap.channel),specularIntensityMapUv:Ut&&v(S.specularIntensityMap.channel),transmissionMapUv:Pt&&v(S.transmissionMap.channel),thicknessMapUv:ie&&v(S.thicknessMap.channel),alphaMapUv:ut&&v(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ye||le),vertexNormals:!!B.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!B.attributes.uv&&(Se||ut),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||B.attributes.normal===void 0&&ye===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Rt,skinning:G.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Gt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:nt,decodeVideoTexture:Se&&S.map.isVideoTexture===!0&&Qt.getTransfer(S.map.colorSpace)===ce,decodeVideoTextureEmissive:P&&S.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(S.emissiveMap.colorSpace)===ce,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Xi,flipSided:S.side===bn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ht&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&S.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function g(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)A.push(D),A.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(f(A,S),m(A,S),A.push(e.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function f(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function m(S,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),S.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),S.push(r.mask)}function _(S){const A=p[S.type];let D;if(A){const N=gi[A];D=RT.clone(N.uniforms)}else D=S.uniforms;return D}function x(S,A){let D=d.get(A);return D!==void 0?++D.usedTimes:(D=new J3(e,A,S,a),c.push(D),d.set(A,D)),D}function C(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),d.delete(S.cacheKey),S.destroy()}}function b(S){o.remove(S)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:_,acquireProgram:x,releaseProgram:C,releaseShaderCache:b,programs:c,dispose:R}}function aC(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function sC(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function J_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function $_(){const e=[];let t=0;const n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,v,M,g,f){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:p,material:v,materialVariant:r(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:f},e[t]=m):(m.id=u.id,m.object=u,m.geometry=p,m.material=v,m.materialVariant=r(u),m.groupOrder=M,m.renderOrder=u.renderOrder,m.z=g,m.group=f),t++,m}function l(u,p,v,M,g,f){const m=o(u,p,v,M,g,f);v.transmission>0?i.push(m):v.transparent===!0?a.push(m):n.push(m)}function c(u,p,v,M,g,f){const m=o(u,p,v,M,g,f);v.transmission>0?i.unshift(m):v.transparent===!0?a.unshift(m):n.unshift(m)}function d(u,p){n.length>1&&n.sort(u||sC),i.length>1&&i.sort(p||J_),a.length>1&&a.sort(p||J_)}function h(){for(let u=t,p=e.length;u<p;u++){const v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:l,unshift:c,finish:h,sort:d}}function rC(){let e=new WeakMap;function t(i,a){const s=e.get(i);let r;return s===void 0?(r=new $_,e.set(i,[r])):a>=s.length?(r=new $_,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function oC(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new z,color:new Zt};break;case"SpotLight":n={position:new z,direction:new z,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":n={color:new Zt,position:new z,halfWidth:new z,halfHeight:new z};break}return e[t.id]=n,n}}}function lC(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let cC=0;function uC(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function fC(e){const t=new oC,n=lC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const a=new z,s=new We,r=new We;function o(c){let d=0,h=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,v=0,M=0,g=0,f=0,m=0,_=0,x=0,C=0,b=0,R=0;c.sort(uC);for(let A=0,D=c.length;A<D;A++){const N=c[A],G=N.color,q=N.intensity,Y=N.distance;let B=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ys?B=N.shadow.map.texture:B=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)d+=G.r*q,h+=G.g*q,u+=G.b*q;else if(N.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(N.sh.coefficients[U],q);R++}else if(N.isDirectionalLight){const U=t.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const I=N.shadow,W=n.get(N);W.shadowIntensity=I.intensity,W.shadowBias=I.bias,W.shadowNormalBias=I.normalBias,W.shadowRadius=I.radius,W.shadowMapSize=I.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=N.shadow.matrix,m++}i.directional[p]=U,p++}else if(N.isSpotLight){const U=t.get(N);U.position.setFromMatrixPosition(N.matrixWorld),U.color.copy(G).multiplyScalar(q),U.distance=Y,U.coneCos=Math.cos(N.angle),U.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),U.decay=N.decay,i.spot[M]=U;const I=N.shadow;if(N.map&&(i.spotLightMap[C]=N.map,C++,I.updateMatrices(N),N.castShadow&&b++),i.spotLightMatrix[M]=I.matrix,N.castShadow){const W=n.get(N);W.shadowIntensity=I.intensity,W.shadowBias=I.bias,W.shadowNormalBias=I.normalBias,W.shadowRadius=I.radius,W.shadowMapSize=I.mapSize,i.spotShadow[M]=W,i.spotShadowMap[M]=B,x++}M++}else if(N.isRectAreaLight){const U=t.get(N);U.color.copy(G).multiplyScalar(q),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),i.rectArea[g]=U,g++}else if(N.isPointLight){const U=t.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity),U.distance=N.distance,U.decay=N.decay,N.castShadow){const I=N.shadow,W=n.get(N);W.shadowIntensity=I.intensity,W.shadowBias=I.bias,W.shadowNormalBias=I.normalBias,W.shadowRadius=I.radius,W.shadowMapSize=I.mapSize,W.shadowCameraNear=I.camera.near,W.shadowCameraFar=I.camera.far,i.pointShadow[v]=W,i.pointShadowMap[v]=B,i.pointShadowMatrix[v]=N.shadow.matrix,_++}i.point[v]=U,v++}else if(N.isHemisphereLight){const U=t.get(N);U.skyColor.copy(N.color).multiplyScalar(q),U.groundColor.copy(N.groundColor).multiplyScalar(q),i.hemi[f]=U,f++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;const S=i.hash;(S.directionalLength!==p||S.pointLength!==v||S.spotLength!==M||S.rectAreaLength!==g||S.hemiLength!==f||S.numDirectionalShadows!==m||S.numPointShadows!==_||S.numSpotShadows!==x||S.numSpotMaps!==C||S.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=g,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=R,S.directionalLength=p,S.pointLength=v,S.spotLength=M,S.rectAreaLength=g,S.hemiLength=f,S.numDirectionalShadows=m,S.numPointShadows=_,S.numSpotShadows=x,S.numSpotMaps=C,S.numLightProbes=R,i.version=cC++)}function l(c,d){let h=0,u=0,p=0,v=0,M=0;const g=d.matrixWorldInverse;for(let f=0,m=c.length;f<m;f++){const _=c[f];if(_.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(g),h++}else if(_.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const x=i.rectArea[v];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),r.identity(),s.copy(_.matrixWorld),s.premultiply(g),r.extractRotation(s),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),v++}else if(_.isPointLight){const x=i.point[u];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){const x=i.hemi[M];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(g),M++}}}return{setup:o,setupView:l,state:i}}function t0(e){const t=new fC(e),n=[],i=[],a=[];function s(u){h.camera=u,n.length=0,i.length=0,a.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){t.setup(n)}function d(u){t.setupView(n,u)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function dC(e){let t=new WeakMap;function n(a,s=0){const r=t.get(a);let o;return r===void 0?(o=new t0(e),t.set(a,[o])):s>=r.length?(o=new t0(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const hC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,mC=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],gC=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],e0=new We,io=new z,Jf=new z;function _C(e,t,n){let i=new HS;const a=new re,s=new re,r=new Fe,o=new NT,l=new UT,c={},d=n.maxTextureSize,h={[Wa]:bn,[bn]:Wa,[Xi]:Xi},u=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:hC,fragmentShader:pC}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new Vn;v.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ri(v,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mc;let f=this.type;this.render=function(b,R,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===vb&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=mc);const A=e.getRenderTarget(),D=e.getActiveCubeFace(),N=e.getActiveMipmapLevel(),G=e.state;G.setBlending(Ji),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const q=f!==this.type;q&&R.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(B=>B.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,B=b.length;Y<B;Y++){const U=b[Y],I=U.shadow;if(I===void 0){Dt("WebGLShadowMap:",U,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;a.copy(I.mapSize);const W=I.getFrameExtents();a.multiply(W),s.copy(I.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(s.x=Math.floor(d/W.x),a.x=s.x*W.x,I.mapSize.x=s.x),a.y>d&&(s.y=Math.floor(d/W.y),a.y=s.y*W.y,I.mapSize.y=s.y));const Q=e.state.buffers.depth.getReversed();if(I.camera._reversedDepth=Q,I.map===null||q===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===uo){if(U.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new bi(a.x,a.y,{format:ys,type:sa,minFilter:fn,magFilter:fn,generateMipmaps:!1}),I.map.texture.name=U.name+".shadowMap",I.map.depthTexture=new Dr(a.x,a.y,Si),I.map.depthTexture.name=U.name+".shadowMapDepth",I.map.depthTexture.format=ra,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=rn,I.map.depthTexture.magFilter=rn}else U.isPointLight?(I.map=new ZS(a.x),I.map.depthTexture=new bT(a.x,Ai)):(I.map=new bi(a.x,a.y),I.map.depthTexture=new Dr(a.x,a.y,Ai)),I.map.depthTexture.name=U.name+".shadowMap",I.map.depthTexture.format=ra,this.type===mc?(I.map.depthTexture.compareFunction=Q?im:nm,I.map.depthTexture.minFilter=fn,I.map.depthTexture.magFilter=fn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=rn,I.map.depthTexture.magFilter=rn);I.camera.updateProjectionMatrix()}const at=I.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<at;xt++){if(I.map.isWebGLCubeRenderTarget)e.setRenderTarget(I.map,xt),e.clear();else{xt===0&&(e.setRenderTarget(I.map),e.clear());const yt=I.getViewport(xt);r.set(s.x*yt.x,s.y*yt.y,s.x*yt.z,s.y*yt.w),G.viewport(r)}if(U.isPointLight){const yt=I.camera,Gt=I.matrix,jt=U.distance||yt.far;jt!==yt.far&&(yt.far=jt,yt.updateProjectionMatrix()),io.setFromMatrixPosition(U.matrixWorld),yt.position.copy(io),Jf.copy(yt.position),Jf.add(mC[xt]),yt.up.copy(gC[xt]),yt.lookAt(Jf),yt.updateMatrixWorld(),Gt.makeTranslation(-io.x,-io.y,-io.z),e0.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),I._frustum.setFromProjectionMatrix(e0,yt.coordinateSystem,yt.reversedDepth)}else I.updateMatrices(U);i=I.getFrustum(),x(R,S,I.camera,U,this.type)}I.isPointLightShadow!==!0&&this.type===uo&&m(I,S),I.needsUpdate=!1}f=this.type,g.needsUpdate=!1,e.setRenderTarget(A,D,N)};function m(b,R){const S=t.update(M);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new bi(a.x,a.y,{format:ys,type:sa})),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,e.setRenderTarget(b.mapPass),e.clear(),e.renderBufferDirect(R,null,S,u,M,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,e.setRenderTarget(b.map),e.clear(),e.renderBufferDirect(R,null,S,p,M,null)}function _(b,R,S,A){let D=null;const N=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)D=N;else if(D=S.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const G=D.uuid,q=R.uuid;let Y=c[G];Y===void 0&&(Y={},c[G]=Y);let B=Y[q];B===void 0&&(B=D.clone(),Y[q]=B,R.addEventListener("dispose",C)),D=B}if(D.visible=R.visible,D.wireframe=R.wireframe,A===uo?D.side=R.shadowSide!==null?R.shadowSide:R.side:D.side=R.shadowSide!==null?R.shadowSide:h[R.side],D.alphaMap=R.alphaMap,D.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,D.map=R.map,D.clipShadows=R.clipShadows,D.clippingPlanes=R.clippingPlanes,D.clipIntersection=R.clipIntersection,D.displacementMap=R.displacementMap,D.displacementScale=R.displacementScale,D.displacementBias=R.displacementBias,D.wireframeLinewidth=R.wireframeLinewidth,D.linewidth=R.linewidth,S.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const G=e.properties.get(D);G.light=S}return D}function x(b,R,S,A,D){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===uo)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const q=t.update(b),Y=b.material;if(Array.isArray(Y)){const B=q.groups;for(let U=0,I=B.length;U<I;U++){const W=B[U],Q=Y[W.materialIndex];if(Q&&Q.visible){const at=_(b,Q,A,D);b.onBeforeShadow(e,b,R,S,q,at,W),e.renderBufferDirect(S,null,q,at,b,W),b.onAfterShadow(e,b,R,S,q,at,W)}}}else if(Y.visible){const B=_(b,Y,A,D);b.onBeforeShadow(e,b,R,S,q,B,null),e.renderBufferDirect(S,null,q,B,b,null),b.onAfterShadow(e,b,R,S,q,B,null)}}const G=b.children;for(let q=0,Y=G.length;q<Y;q++)x(G[q],R,S,A,D)}function C(b){b.target.removeEventListener("dispose",C);for(const S in c){const A=c[S],D=b.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}function vC(e,t){function n(){let O=!1;const ut=new Fe;let K=null;const vt=new Fe(0,0,0,0);return{setMask:function(ht){K!==ht&&!O&&(e.colorMask(ht,ht,ht,ht),K=ht)},setLocked:function(ht){O=ht},setClear:function(ht,nt,bt,Ft,Oe){Oe===!0&&(ht*=Ft,nt*=Ft,bt*=Ft),ut.set(ht,nt,bt,Ft),vt.equals(ut)===!1&&(e.clearColor(ht,nt,bt,Ft),vt.copy(ut))},reset:function(){O=!1,K=null,vt.set(-1,0,0,0)}}}function i(){let O=!1,ut=!1,K=null,vt=null,ht=null;return{setReversed:function(nt){if(ut!==nt){const bt=t.get("EXT_clip_control");nt?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),ut=nt;const Ft=ht;ht=null,this.setClear(Ft)}},getReversed:function(){return ut},setTest:function(nt){nt?ot(e.DEPTH_TEST):Rt(e.DEPTH_TEST)},setMask:function(nt){K!==nt&&!O&&(e.depthMask(nt),K=nt)},setFunc:function(nt){if(ut&&(nt=Qb[nt]),vt!==nt){switch(nt){case eh:e.depthFunc(e.NEVER);break;case nh:e.depthFunc(e.ALWAYS);break;case ih:e.depthFunc(e.LESS);break;case Cr:e.depthFunc(e.LEQUAL);break;case ah:e.depthFunc(e.EQUAL);break;case sh:e.depthFunc(e.GEQUAL);break;case rh:e.depthFunc(e.GREATER);break;case oh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}vt=nt}},setLocked:function(nt){O=nt},setClear:function(nt){ht!==nt&&(ht=nt,ut&&(nt=1-nt),e.clearDepth(nt))},reset:function(){O=!1,K=null,vt=null,ht=null,ut=!1}}}function a(){let O=!1,ut=null,K=null,vt=null,ht=null,nt=null,bt=null,Ft=null,Oe=null;return{setTest:function(he){O||(he?ot(e.STENCIL_TEST):Rt(e.STENCIL_TEST))},setMask:function(he){ut!==he&&!O&&(e.stencilMask(he),ut=he)},setFunc:function(he,Ni,di){(K!==he||vt!==Ni||ht!==di)&&(e.stencilFunc(he,Ni,di),K=he,vt=Ni,ht=di)},setOp:function(he,Ni,di){(nt!==he||bt!==Ni||Ft!==di)&&(e.stencilOp(he,Ni,di),nt=he,bt=Ni,Ft=di)},setLocked:function(he){O=he},setClear:function(he){Oe!==he&&(e.clearStencil(he),Oe=he)},reset:function(){O=!1,ut=null,K=null,vt=null,ht=null,nt=null,bt=null,Ft=null,Oe=null}}}const s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap;let d={},h={},u={},p=new WeakMap,v=[],M=null,g=!1,f=null,m=null,_=null,x=null,C=null,b=null,R=null,S=new Zt(0,0,0),A=0,D=!1,N=null,G=null,q=null,Y=null,B=null;const U=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,W=0;const Q=e.getParameter(e.VERSION);Q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Q)[1]),I=W>=1):Q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),I=W>=2);let at=null,xt={};const yt=e.getParameter(e.SCISSOR_BOX),Gt=e.getParameter(e.VIEWPORT),jt=new Fe().fromArray(yt),wt=new Fe().fromArray(Gt);function $(O,ut,K,vt){const ht=new Uint8Array(4),nt=e.createTexture();e.bindTexture(O,nt),e.texParameteri(O,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(O,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let bt=0;bt<K;bt++)O===e.TEXTURE_3D||O===e.TEXTURE_2D_ARRAY?e.texImage3D(ut,0,e.RGBA,1,1,vt,0,e.RGBA,e.UNSIGNED_BYTE,ht):e.texImage2D(ut+bt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ht);return nt}const dt={};dt[e.TEXTURE_2D]=$(e.TEXTURE_2D,e.TEXTURE_2D,1),dt[e.TEXTURE_CUBE_MAP]=$(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[e.TEXTURE_2D_ARRAY]=$(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),dt[e.TEXTURE_3D]=$(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ot(e.DEPTH_TEST),r.setFunc(Cr),De(!1),ye($g),ot(e.CULL_FACE),oe(Ji);function ot(O){d[O]!==!0&&(e.enable(O),d[O]=!0)}function Rt(O){d[O]!==!1&&(e.disable(O),d[O]=!1)}function Nt(O,ut){return u[O]!==ut?(e.bindFramebuffer(O,ut),u[O]=ut,O===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=ut),O===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=ut),!0):!1}function Ct(O,ut){let K=v,vt=!1;if(O){K=p.get(ut),K===void 0&&(K=[],p.set(ut,K));const ht=O.textures;if(K.length!==ht.length||K[0]!==e.COLOR_ATTACHMENT0){for(let nt=0,bt=ht.length;nt<bt;nt++)K[nt]=e.COLOR_ATTACHMENT0+nt;K.length=ht.length,vt=!0}}else K[0]!==e.BACK&&(K[0]=e.BACK,vt=!0);vt&&e.drawBuffers(K)}function Se(O){return M!==O?(e.useProgram(O),M=O,!0):!1}const Ot={[rs]:e.FUNC_ADD,[Sb]:e.FUNC_SUBTRACT,[yb]:e.FUNC_REVERSE_SUBTRACT};Ot[Mb]=e.MIN,Ot[Eb]=e.MAX;const te={[bb]:e.ZERO,[Tb]:e.ONE,[Ab]:e.SRC_COLOR,[$d]:e.SRC_ALPHA,[Ub]:e.SRC_ALPHA_SATURATE,[Db]:e.DST_COLOR,[Cb]:e.DST_ALPHA,[Rb]:e.ONE_MINUS_SRC_COLOR,[th]:e.ONE_MINUS_SRC_ALPHA,[Nb]:e.ONE_MINUS_DST_COLOR,[wb]:e.ONE_MINUS_DST_ALPHA,[Lb]:e.CONSTANT_COLOR,[Ob]:e.ONE_MINUS_CONSTANT_COLOR,[Pb]:e.CONSTANT_ALPHA,[Ib]:e.ONE_MINUS_CONSTANT_ALPHA};function oe(O,ut,K,vt,ht,nt,bt,Ft,Oe,he){if(O===Ji){g===!0&&(Rt(e.BLEND),g=!1);return}if(g===!1&&(ot(e.BLEND),g=!0),O!==xb){if(O!==f||he!==D){if((m!==rs||C!==rs)&&(e.blendEquation(e.FUNC_ADD),m=rs,C=rs),he)switch(O){case mr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case t_:e.blendFunc(e.ONE,e.ONE);break;case e_:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case n_:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ne("WebGLState: Invalid blending: ",O);break}else switch(O){case mr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case t_:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case e_:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case n_:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",O);break}_=null,x=null,b=null,R=null,S.set(0,0,0),A=0,f=O,D=he}return}ht=ht||ut,nt=nt||K,bt=bt||vt,(ut!==m||ht!==C)&&(e.blendEquationSeparate(Ot[ut],Ot[ht]),m=ut,C=ht),(K!==_||vt!==x||nt!==b||bt!==R)&&(e.blendFuncSeparate(te[K],te[vt],te[nt],te[bt]),_=K,x=vt,b=nt,R=bt),(Ft.equals(S)===!1||Oe!==A)&&(e.blendColor(Ft.r,Ft.g,Ft.b,Oe),S.copy(Ft),A=Oe),f=O,D=!1}function Xt(O,ut){O.side===Xi?Rt(e.CULL_FACE):ot(e.CULL_FACE);let K=O.side===bn;ut&&(K=!K),De(K),O.blending===mr&&O.transparent===!1?oe(Ji):oe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),s.setMask(O.colorWrite);const vt=O.stencilWrite;o.setTest(vt),vt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),P(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ot(e.SAMPLE_ALPHA_TO_COVERAGE):Rt(e.SAMPLE_ALPHA_TO_COVERAGE)}function De(O){N!==O&&(O?e.frontFace(e.CW):e.frontFace(e.CCW),N=O)}function ye(O){O!==gb?(ot(e.CULL_FACE),O!==G&&(O===$g?e.cullFace(e.BACK):O===_b?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Rt(e.CULL_FACE),G=O}function dn(O){O!==q&&(I&&e.lineWidth(O),q=O)}function P(O,ut,K){O?(ot(e.POLYGON_OFFSET_FILL),(Y!==ut||B!==K)&&(Y=ut,B=K,r.getReversed()&&(ut=-ut),e.polygonOffset(ut,K))):Rt(e.POLYGON_OFFSET_FILL)}function de(O){O?ot(e.SCISSOR_TEST):Rt(e.SCISSOR_TEST)}function Vt(O){O===void 0&&(O=e.TEXTURE0+U-1),at!==O&&(e.activeTexture(O),at=O)}function le(O,ut,K){K===void 0&&(at===null?K=e.TEXTURE0+U-1:K=at);let vt=xt[K];vt===void 0&&(vt={type:void 0,texture:void 0},xt[K]=vt),(vt.type!==O||vt.texture!==ut)&&(at!==K&&(e.activeTexture(K),at=K),e.bindTexture(O,ut||dt[O]),vt.type=O,vt.texture=ut)}function pt(){const O=xt[at];O!==void 0&&O.type!==void 0&&(e.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function be(){try{e.compressedTexImage2D(...arguments)}catch(O){ne("WebGLState:",O)}}function T(){try{e.compressedTexImage3D(...arguments)}catch(O){ne("WebGLState:",O)}}function y(){try{e.texSubImage2D(...arguments)}catch(O){ne("WebGLState:",O)}}function H(){try{e.texSubImage3D(...arguments)}catch(O){ne("WebGLState:",O)}}function Z(){try{e.compressedTexSubImage2D(...arguments)}catch(O){ne("WebGLState:",O)}}function et(){try{e.compressedTexSubImage3D(...arguments)}catch(O){ne("WebGLState:",O)}}function lt(){try{e.texStorage2D(...arguments)}catch(O){ne("WebGLState:",O)}}function ft(){try{e.texStorage3D(...arguments)}catch(O){ne("WebGLState:",O)}}function j(){try{e.texImage2D(...arguments)}catch(O){ne("WebGLState:",O)}}function L(){try{e.texImage3D(...arguments)}catch(O){ne("WebGLState:",O)}}function tt(O){return h[O]!==void 0?h[O]:e.getParameter(O)}function ct(O,ut){h[O]!==ut&&(e.pixelStorei(O,ut),h[O]=ut)}function it(O){jt.equals(O)===!1&&(e.scissor(O.x,O.y,O.z,O.w),jt.copy(O))}function rt(O){wt.equals(O)===!1&&(e.viewport(O.x,O.y,O.z,O.w),wt.copy(O))}function Ut(O,ut){let K=c.get(ut);K===void 0&&(K=new WeakMap,c.set(ut,K));let vt=K.get(O);vt===void 0&&(vt=e.getUniformBlockIndex(ut,O.name),K.set(O,vt))}function Pt(O,ut){const vt=c.get(ut).get(O);l.get(ut)!==vt&&(e.uniformBlockBinding(ut,vt,O.__bindingPointIndex),l.set(ut,vt))}function ie(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),d={},h={},at=null,xt={},u={},p=new WeakMap,v=[],M=null,g=!1,f=null,m=null,_=null,x=null,C=null,b=null,R=null,S=new Zt(0,0,0),A=0,D=!1,N=null,G=null,q=null,Y=null,B=null,jt.set(0,0,e.canvas.width,e.canvas.height),wt.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ot,disable:Rt,bindFramebuffer:Nt,drawBuffers:Ct,useProgram:Se,setBlending:oe,setMaterial:Xt,setFlipSided:De,setCullFace:ye,setLineWidth:dn,setPolygonOffset:P,setScissorTest:de,activeTexture:Vt,bindTexture:le,unbindTexture:pt,compressedTexImage2D:be,compressedTexImage3D:T,texImage2D:j,texImage3D:L,pixelStorei:ct,getParameter:tt,updateUBOMapping:Ut,uniformBlockBinding:Pt,texStorage2D:lt,texStorage3D:ft,texSubImage2D:y,texSubImage3D:H,compressedTexSubImage2D:Z,compressedTexSubImage3D:et,scissor:it,viewport:rt,reset:ie}}function xC(e,t,n,i,a,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,d=new WeakMap,h=new Set;let u;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(T,y){return v?new OffscreenCanvas(T,y):nu("canvas")}function g(T,y,H){let Z=1;const et=be(T);if((et.width>H||et.height>H)&&(Z=H/Math.max(et.width,et.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const lt=Math.floor(Z*et.width),ft=Math.floor(Z*et.height);u===void 0&&(u=M(lt,ft));const j=y?M(lt,ft):u;return j.width=lt,j.height=ft,j.getContext("2d").drawImage(T,0,0,lt,ft),Dt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+lt+"x"+ft+")."),j}else return"data"in T&&Dt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),T;return T}function f(T){return T.generateMipmaps}function m(T){e.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(T,y,H,Z,et,lt=!1){if(T!==null){if(e[T]!==void 0)return e[T];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ft;Z&&(ft=t.get("EXT_texture_norm16"),ft||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=y;if(y===e.RED&&(H===e.FLOAT&&(j=e.R32F),H===e.HALF_FLOAT&&(j=e.R16F),H===e.UNSIGNED_BYTE&&(j=e.R8),H===e.UNSIGNED_SHORT&&ft&&(j=ft.R16_EXT),H===e.SHORT&&ft&&(j=ft.R16_SNORM_EXT)),y===e.RED_INTEGER&&(H===e.UNSIGNED_BYTE&&(j=e.R8UI),H===e.UNSIGNED_SHORT&&(j=e.R16UI),H===e.UNSIGNED_INT&&(j=e.R32UI),H===e.BYTE&&(j=e.R8I),H===e.SHORT&&(j=e.R16I),H===e.INT&&(j=e.R32I)),y===e.RG&&(H===e.FLOAT&&(j=e.RG32F),H===e.HALF_FLOAT&&(j=e.RG16F),H===e.UNSIGNED_BYTE&&(j=e.RG8),H===e.UNSIGNED_SHORT&&ft&&(j=ft.RG16_EXT),H===e.SHORT&&ft&&(j=ft.RG16_SNORM_EXT)),y===e.RG_INTEGER&&(H===e.UNSIGNED_BYTE&&(j=e.RG8UI),H===e.UNSIGNED_SHORT&&(j=e.RG16UI),H===e.UNSIGNED_INT&&(j=e.RG32UI),H===e.BYTE&&(j=e.RG8I),H===e.SHORT&&(j=e.RG16I),H===e.INT&&(j=e.RG32I)),y===e.RGB_INTEGER&&(H===e.UNSIGNED_BYTE&&(j=e.RGB8UI),H===e.UNSIGNED_SHORT&&(j=e.RGB16UI),H===e.UNSIGNED_INT&&(j=e.RGB32UI),H===e.BYTE&&(j=e.RGB8I),H===e.SHORT&&(j=e.RGB16I),H===e.INT&&(j=e.RGB32I)),y===e.RGBA_INTEGER&&(H===e.UNSIGNED_BYTE&&(j=e.RGBA8UI),H===e.UNSIGNED_SHORT&&(j=e.RGBA16UI),H===e.UNSIGNED_INT&&(j=e.RGBA32UI),H===e.BYTE&&(j=e.RGBA8I),H===e.SHORT&&(j=e.RGBA16I),H===e.INT&&(j=e.RGBA32I)),y===e.RGB&&(H===e.UNSIGNED_SHORT&&ft&&(j=ft.RGB16_EXT),H===e.SHORT&&ft&&(j=ft.RGB16_SNORM_EXT),H===e.UNSIGNED_INT_5_9_9_9_REV&&(j=e.RGB9_E5),H===e.UNSIGNED_INT_10F_11F_11F_REV&&(j=e.R11F_G11F_B10F)),y===e.RGBA){const L=lt?tu:Qt.getTransfer(et);H===e.FLOAT&&(j=e.RGBA32F),H===e.HALF_FLOAT&&(j=e.RGBA16F),H===e.UNSIGNED_BYTE&&(j=L===ce?e.SRGB8_ALPHA8:e.RGBA8),H===e.UNSIGNED_SHORT&&ft&&(j=ft.RGBA16_EXT),H===e.SHORT&&ft&&(j=ft.RGBA16_SNORM_EXT),H===e.UNSIGNED_SHORT_4_4_4_4&&(j=e.RGBA4),H===e.UNSIGNED_SHORT_5_5_5_1&&(j=e.RGB5_A1)}return(j===e.R16F||j===e.R32F||j===e.RG16F||j===e.RG32F||j===e.RGBA16F||j===e.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function C(T,y){let H;return T?y===null||y===Ai||y===Xo?H=e.DEPTH24_STENCIL8:y===Si?H=e.DEPTH32F_STENCIL8:y===ko&&(H=e.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ai||y===Xo?H=e.DEPTH_COMPONENT24:y===Si?H=e.DEPTH_COMPONENT32F:y===ko&&(H=e.DEPTH_COMPONENT16),H}function b(T,y){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==rn&&T.minFilter!==fn?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function R(T){const y=T.target;y.removeEventListener("dispose",R),A(y),y.isVideoTexture&&d.delete(y),y.isHTMLTexture&&h.delete(y)}function S(T){const y=T.target;y.removeEventListener("dispose",S),N(y)}function A(T){const y=i.get(T);if(y.__webglInit===void 0)return;const H=T.source,Z=p.get(H);if(Z){const et=Z[y.__cacheKey];et.usedTimes--,et.usedTimes===0&&D(T),Object.keys(Z).length===0&&p.delete(H)}i.remove(T)}function D(T){const y=i.get(T);e.deleteTexture(y.__webglTexture);const H=T.source,Z=p.get(H);delete Z[y.__cacheKey],r.memory.textures--}function N(T){const y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let et=0;et<y.__webglFramebuffer[Z].length;et++)e.deleteFramebuffer(y.__webglFramebuffer[Z][et]);else e.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)e.deleteFramebuffer(y.__webglFramebuffer[Z]);else e.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&e.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&e.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&e.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const H=T.textures;for(let Z=0,et=H.length;Z<et;Z++){const lt=i.get(H[Z]);lt.__webglTexture&&(e.deleteTexture(lt.__webglTexture),r.memory.textures--),i.remove(H[Z])}i.remove(T)}let G=0;function q(){G=0}function Y(){return G}function B(T){G=T}function U(){const T=G;return T>=a.maxTextures&&Dt("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+a.maxTextures),G+=1,T}function I(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function W(T,y){const H=i.get(T);if(T.isVideoTexture&&le(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&H.__version!==T.version){const Z=T.image;if(Z===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(H,T,y);return}}else T.isExternalTexture&&(H.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,H.__webglTexture,e.TEXTURE0+y)}function Q(T,y){const H=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){Rt(H,T,y);return}else T.isExternalTexture&&(H.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,H.__webglTexture,e.TEXTURE0+y)}function at(T,y){const H=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){Rt(H,T,y);return}n.bindTexture(e.TEXTURE_3D,H.__webglTexture,e.TEXTURE0+y)}function xt(T,y){const H=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&H.__version!==T.version){Nt(H,T,y);return}n.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture,e.TEXTURE0+y)}const yt={[lh]:e.REPEAT,[Yi]:e.CLAMP_TO_EDGE,[ch]:e.MIRRORED_REPEAT},Gt={[rn]:e.NEAREST,[zb]:e.NEAREST_MIPMAP_NEAREST,[Al]:e.NEAREST_MIPMAP_LINEAR,[fn]:e.LINEAR,[yf]:e.LINEAR_MIPMAP_NEAREST,[ls]:e.LINEAR_MIPMAP_LINEAR},jt={[Vb]:e.NEVER,[qb]:e.ALWAYS,[kb]:e.LESS,[nm]:e.LEQUAL,[Xb]:e.EQUAL,[im]:e.GEQUAL,[Wb]:e.GREATER,[jb]:e.NOTEQUAL};function wt(T,y){if(y.type===Si&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===fn||y.magFilter===yf||y.magFilter===Al||y.magFilter===ls||y.minFilter===fn||y.minFilter===yf||y.minFilter===Al||y.minFilter===ls)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,yt[y.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,yt[y.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,yt[y.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,Gt[y.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,Gt[y.minFilter]),y.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,jt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===rn||y.minFilter!==Al&&y.minFilter!==ls||y.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function $(T,y){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",R));const Z=y.source;let et=p.get(Z);et===void 0&&(et={},p.set(Z,et));const lt=I(y);if(lt!==T.__cacheKey){et[lt]===void 0&&(et[lt]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,H=!0),et[lt].usedTimes++;const ft=et[T.__cacheKey];ft!==void 0&&(et[T.__cacheKey].usedTimes--,ft.usedTimes===0&&D(y)),T.__cacheKey=lt,T.__webglTexture=et[lt].texture}return H}function dt(T,y,H){return Math.floor(Math.floor(T/H)/y)}function ot(T,y,H,Z){const lt=T.updateRanges;if(lt.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,y.width,y.height,H,Z,y.data);else{lt.sort((ct,it)=>ct.start-it.start);let ft=0;for(let ct=1;ct<lt.length;ct++){const it=lt[ft],rt=lt[ct],Ut=it.start+it.count,Pt=dt(rt.start,y.width,4),ie=dt(it.start,y.width,4);rt.start<=Ut+1&&Pt===ie&&dt(rt.start+rt.count-1,y.width,4)===Pt?it.count=Math.max(it.count,rt.start+rt.count-it.start):(++ft,lt[ft]=rt)}lt.length=ft+1;const j=n.getParameter(e.UNPACK_ROW_LENGTH),L=n.getParameter(e.UNPACK_SKIP_PIXELS),tt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,y.width);for(let ct=0,it=lt.length;ct<it;ct++){const rt=lt[ct],Ut=Math.floor(rt.start/4),Pt=Math.ceil(rt.count/4),ie=Ut%y.width,O=Math.floor(Ut/y.width),ut=Pt,K=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(e.UNPACK_SKIP_ROWS,O),n.texSubImage2D(e.TEXTURE_2D,0,ie,O,ut,K,H,Z,y.data)}T.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,j),n.pixelStorei(e.UNPACK_SKIP_PIXELS,L),n.pixelStorei(e.UNPACK_SKIP_ROWS,tt)}}function Rt(T,y,H){let Z=e.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=e.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=e.TEXTURE_3D);const et=$(T,y),lt=y.source;n.bindTexture(Z,T.__webglTexture,e.TEXTURE0+H);const ft=i.get(lt);if(lt.version!==ft.__version||et===!0){if(n.activeTexture(e.TEXTURE0+H),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const K=Qt.getPrimaries(Qt.workingColorSpace),vt=y.colorSpace===Ta?null:Qt.getPrimaries(y.colorSpace),ht=y.colorSpace===Ta||K===vt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht)}n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment);let L=g(y.image,!1,a.maxTextureSize);L=pt(y,L);const tt=s.convert(y.format,y.colorSpace),ct=s.convert(y.type);let it=x(y.internalFormat,tt,ct,y.normalized,y.colorSpace,y.isVideoTexture);wt(Z,y);let rt;const Ut=y.mipmaps,Pt=y.isVideoTexture!==!0,ie=ft.__version===void 0||et===!0,O=lt.dataReady,ut=b(y,L);if(y.isDepthTexture)it=C(y.format===cs,y.type),ie&&(Pt?n.texStorage2D(e.TEXTURE_2D,1,it,L.width,L.height):n.texImage2D(e.TEXTURE_2D,0,it,L.width,L.height,0,tt,ct,null));else if(y.isDataTexture)if(Ut.length>0){Pt&&ie&&n.texStorage2D(e.TEXTURE_2D,ut,it,Ut[0].width,Ut[0].height);for(let K=0,vt=Ut.length;K<vt;K++)rt=Ut[K],Pt?O&&n.texSubImage2D(e.TEXTURE_2D,K,0,0,rt.width,rt.height,tt,ct,rt.data):n.texImage2D(e.TEXTURE_2D,K,it,rt.width,rt.height,0,tt,ct,rt.data);y.generateMipmaps=!1}else Pt?(ie&&n.texStorage2D(e.TEXTURE_2D,ut,it,L.width,L.height),O&&ot(y,L,tt,ct)):n.texImage2D(e.TEXTURE_2D,0,it,L.width,L.height,0,tt,ct,L.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Pt&&ie&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ut,it,Ut[0].width,Ut[0].height,L.depth);for(let K=0,vt=Ut.length;K<vt;K++)if(rt=Ut[K],y.format!==ui)if(tt!==null)if(Pt){if(O)if(y.layerUpdates.size>0){const ht=U_(rt.width,rt.height,y.format,y.type);for(const nt of y.layerUpdates){const bt=rt.data.subarray(nt*ht/rt.data.BYTES_PER_ELEMENT,(nt+1)*ht/rt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,nt,rt.width,rt.height,1,tt,bt)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,0,rt.width,rt.height,L.depth,tt,rt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,K,it,rt.width,rt.height,L.depth,0,rt.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?O&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,0,rt.width,rt.height,L.depth,tt,ct,rt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,K,it,rt.width,rt.height,L.depth,0,tt,ct,rt.data)}else{Pt&&ie&&n.texStorage2D(e.TEXTURE_2D,ut,it,Ut[0].width,Ut[0].height);for(let K=0,vt=Ut.length;K<vt;K++)rt=Ut[K],y.format!==ui?tt!==null?Pt?O&&n.compressedTexSubImage2D(e.TEXTURE_2D,K,0,0,rt.width,rt.height,tt,rt.data):n.compressedTexImage2D(e.TEXTURE_2D,K,it,rt.width,rt.height,0,rt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?O&&n.texSubImage2D(e.TEXTURE_2D,K,0,0,rt.width,rt.height,tt,ct,rt.data):n.texImage2D(e.TEXTURE_2D,K,it,rt.width,rt.height,0,tt,ct,rt.data)}else if(y.isDataArrayTexture)if(Pt){if(ie&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ut,it,L.width,L.height,L.depth),O)if(y.layerUpdates.size>0){const K=U_(L.width,L.height,y.format,y.type);for(const vt of y.layerUpdates){const ht=L.data.subarray(vt*K/L.data.BYTES_PER_ELEMENT,(vt+1)*K/L.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,vt,L.width,L.height,1,tt,ct,ht)}y.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,L.width,L.height,L.depth,tt,ct,L.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,it,L.width,L.height,L.depth,0,tt,ct,L.data);else if(y.isData3DTexture)Pt?(ie&&n.texStorage3D(e.TEXTURE_3D,ut,it,L.width,L.height,L.depth),O&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,L.width,L.height,L.depth,tt,ct,L.data)):n.texImage3D(e.TEXTURE_3D,0,it,L.width,L.height,L.depth,0,tt,ct,L.data);else if(y.isFramebufferTexture){if(ie)if(Pt)n.texStorage2D(e.TEXTURE_2D,ut,it,L.width,L.height);else{let K=L.width,vt=L.height;for(let ht=0;ht<ut;ht++)n.texImage2D(e.TEXTURE_2D,ht,it,K,vt,0,tt,ct,null),K>>=1,vt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in e){const K=e.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),L.parentNode!==K){K.appendChild(L),h.add(y),K.onpaint=Ft=>{const Oe=Ft.changedElements;for(const he of h)Oe.includes(he.image)&&(he.needsUpdate=!0)},K.requestPaint();return}const vt=0,ht=e.RGBA,nt=e.RGBA,bt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,vt,ht,nt,bt,L),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(Pt&&ie){const K=be(Ut[0]);n.texStorage2D(e.TEXTURE_2D,ut,it,K.width,K.height)}for(let K=0,vt=Ut.length;K<vt;K++)rt=Ut[K],Pt?O&&n.texSubImage2D(e.TEXTURE_2D,K,0,0,tt,ct,rt):n.texImage2D(e.TEXTURE_2D,K,it,tt,ct,rt);y.generateMipmaps=!1}else if(Pt){if(ie){const K=be(L);n.texStorage2D(e.TEXTURE_2D,ut,it,K.width,K.height)}O&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,tt,ct,L)}else n.texImage2D(e.TEXTURE_2D,0,it,tt,ct,L);f(y)&&m(Z),ft.__version=lt.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Nt(T,y,H){if(y.image.length!==6)return;const Z=$(T,y),et=y.source;n.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+H);const lt=i.get(et);if(et.version!==lt.__version||Z===!0){n.activeTexture(e.TEXTURE0+H);const ft=Qt.getPrimaries(Qt.workingColorSpace),j=y.colorSpace===Ta?null:Qt.getPrimaries(y.colorSpace),L=y.colorSpace===Ta||ft===j?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,L);const tt=y.isCompressedTexture||y.image[0].isCompressedTexture,ct=y.image[0]&&y.image[0].isDataTexture,it=[];for(let nt=0;nt<6;nt++)!tt&&!ct?it[nt]=g(y.image[nt],!0,a.maxCubemapSize):it[nt]=ct?y.image[nt].image:y.image[nt],it[nt]=pt(y,it[nt]);const rt=it[0],Ut=s.convert(y.format,y.colorSpace),Pt=s.convert(y.type),ie=x(y.internalFormat,Ut,Pt,y.normalized,y.colorSpace),O=y.isVideoTexture!==!0,ut=lt.__version===void 0||Z===!0,K=et.dataReady;let vt=b(y,rt);wt(e.TEXTURE_CUBE_MAP,y);let ht;if(tt){O&&ut&&n.texStorage2D(e.TEXTURE_CUBE_MAP,vt,ie,rt.width,rt.height);for(let nt=0;nt<6;nt++){ht=it[nt].mipmaps;for(let bt=0;bt<ht.length;bt++){const Ft=ht[bt];y.format!==ui?Ut!==null?O?K&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt,0,0,Ft.width,Ft.height,Ut,Ft.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt,ie,Ft.width,Ft.height,0,Ft.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt,0,0,Ft.width,Ft.height,Ut,Pt,Ft.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt,ie,Ft.width,Ft.height,0,Ut,Pt,Ft.data)}}}else{if(ht=y.mipmaps,O&&ut){ht.length>0&&vt++;const nt=be(it[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,vt,ie,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(ct){O?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,it[nt].width,it[nt].height,Ut,Pt,it[nt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ie,it[nt].width,it[nt].height,0,Ut,Pt,it[nt].data);for(let bt=0;bt<ht.length;bt++){const Oe=ht[bt].image[nt].image;O?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt+1,0,0,Oe.width,Oe.height,Ut,Pt,Oe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt+1,ie,Oe.width,Oe.height,0,Ut,Pt,Oe.data)}}else{O?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Ut,Pt,it[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ie,Ut,Pt,it[nt]);for(let bt=0;bt<ht.length;bt++){const Ft=ht[bt];O?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt+1,0,0,Ut,Pt,Ft.image[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt+1,ie,Ut,Pt,Ft.image[nt])}}}f(y)&&m(e.TEXTURE_CUBE_MAP),lt.__version=et.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Ct(T,y,H,Z,et,lt){const ft=s.convert(H.format,H.colorSpace),j=s.convert(H.type),L=x(H.internalFormat,ft,j,H.normalized,H.colorSpace),tt=i.get(y),ct=i.get(H);if(ct.__renderTarget=y,!tt.__hasExternalTextures){const it=Math.max(1,y.width>>lt),rt=Math.max(1,y.height>>lt);et===e.TEXTURE_3D||et===e.TEXTURE_2D_ARRAY?n.texImage3D(et,lt,L,it,rt,y.depth,0,ft,j,null):n.texImage2D(et,lt,L,it,rt,0,ft,j,null)}n.bindFramebuffer(e.FRAMEBUFFER,T),Vt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Z,et,ct.__webglTexture,0,de(y)):(et===e.TEXTURE_2D||et>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Z,et,ct.__webglTexture,lt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Se(T,y,H){if(e.bindRenderbuffer(e.RENDERBUFFER,T),y.depthBuffer){const Z=y.depthTexture,et=Z&&Z.isDepthTexture?Z.type:null,lt=C(y.stencilBuffer,et),ft=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Vt(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,de(y),lt,y.width,y.height):H?e.renderbufferStorageMultisample(e.RENDERBUFFER,de(y),lt,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,lt,y.width,y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ft,e.RENDERBUFFER,T)}else{const Z=y.textures;for(let et=0;et<Z.length;et++){const lt=Z[et],ft=s.convert(lt.format,lt.colorSpace),j=s.convert(lt.type),L=x(lt.internalFormat,ft,j,lt.normalized,lt.colorSpace);Vt(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,de(y),L,y.width,y.height):H?e.renderbufferStorageMultisample(e.RENDERBUFFER,de(y),L,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,L,y.width,y.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ot(T,y,H){const Z=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=i.get(y.depthTexture);if(et.__renderTarget=y,(!et.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z){if(et.__webglInit===void 0&&(et.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),et.__webglTexture===void 0){et.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,et.__webglTexture),wt(e.TEXTURE_CUBE_MAP,y.depthTexture);const tt=s.convert(y.depthTexture.format),ct=s.convert(y.depthTexture.type);let it;y.depthTexture.format===ra?it=e.DEPTH_COMPONENT24:y.depthTexture.format===cs&&(it=e.DEPTH24_STENCIL8);for(let rt=0;rt<6;rt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,it,y.width,y.height,0,tt,ct,null)}}else W(y.depthTexture,0);const lt=et.__webglTexture,ft=de(y),j=Z?e.TEXTURE_CUBE_MAP_POSITIVE_X+H:e.TEXTURE_2D,L=y.depthTexture.format===cs?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(y.depthTexture.format===ra)Vt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,L,j,lt,0,ft):e.framebufferTexture2D(e.FRAMEBUFFER,L,j,lt,0);else if(y.depthTexture.format===cs)Vt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,L,j,lt,0,ft):e.framebufferTexture2D(e.FRAMEBUFFER,L,j,lt,0);else throw new Error("Unknown depthTexture format")}function te(T){const y=i.get(T),H=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const et=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",et)};Z.addEventListener("dispose",et),y.__depthDisposeCallback=et}y.__boundDepthTexture=Z}if(T.depthTexture&&!y.__autoAllocateDepthBuffer)if(H)for(let Z=0;Z<6;Z++)Ot(y.__webglFramebuffer[Z],T,Z);else{const Z=T.texture.mipmaps;Z&&Z.length>0?Ot(y.__webglFramebuffer[0],T,0):Ot(y.__webglFramebuffer,T,0)}else if(H){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=e.createRenderbuffer(),Se(y.__webglDepthbuffer[Z],T,!1);else{const et=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,lt=y.__webglDepthbuffer[Z];e.bindRenderbuffer(e.RENDERBUFFER,lt),e.framebufferRenderbuffer(e.FRAMEBUFFER,et,e.RENDERBUFFER,lt)}}else{const Z=T.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=e.createRenderbuffer(),Se(y.__webglDepthbuffer,T,!1);else{const et=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,lt=y.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,lt),e.framebufferRenderbuffer(e.FRAMEBUFFER,et,e.RENDERBUFFER,lt)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function oe(T,y,H){const Z=i.get(T);y!==void 0&&Ct(Z.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),H!==void 0&&te(T)}function Xt(T){const y=T.texture,H=i.get(T),Z=i.get(y);T.addEventListener("dispose",S);const et=T.textures,lt=T.isWebGLCubeRenderTarget===!0,ft=et.length>1;if(ft||(Z.__webglTexture===void 0&&(Z.__webglTexture=e.createTexture()),Z.__version=y.version,r.memory.textures++),lt){H.__webglFramebuffer=[];for(let j=0;j<6;j++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[j]=[];for(let L=0;L<y.mipmaps.length;L++)H.__webglFramebuffer[j][L]=e.createFramebuffer()}else H.__webglFramebuffer[j]=e.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let j=0;j<y.mipmaps.length;j++)H.__webglFramebuffer[j]=e.createFramebuffer()}else H.__webglFramebuffer=e.createFramebuffer();if(ft)for(let j=0,L=et.length;j<L;j++){const tt=i.get(et[j]);tt.__webglTexture===void 0&&(tt.__webglTexture=e.createTexture(),r.memory.textures++)}if(T.samples>0&&Vt(T)===!1){H.__webglMultisampledFramebuffer=e.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let j=0;j<et.length;j++){const L=et[j];H.__webglColorRenderbuffer[j]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,H.__webglColorRenderbuffer[j]);const tt=s.convert(L.format,L.colorSpace),ct=s.convert(L.type),it=x(L.internalFormat,tt,ct,L.normalized,L.colorSpace,T.isXRRenderTarget===!0),rt=de(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,rt,it,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+j,e.RENDERBUFFER,H.__webglColorRenderbuffer[j])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=e.createRenderbuffer(),Se(H.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(lt){n.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),wt(e.TEXTURE_CUBE_MAP,y);for(let j=0;j<6;j++)if(y.mipmaps&&y.mipmaps.length>0)for(let L=0;L<y.mipmaps.length;L++)Ct(H.__webglFramebuffer[j][L],T,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+j,L);else Ct(H.__webglFramebuffer[j],T,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);f(y)&&m(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ft){for(let j=0,L=et.length;j<L;j++){const tt=et[j],ct=i.get(tt);let it=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(it=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(it,ct.__webglTexture),wt(it,tt),Ct(H.__webglFramebuffer,T,tt,e.COLOR_ATTACHMENT0+j,it,0),f(tt)&&m(it)}n.unbindTexture()}else{let j=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(j=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(j,Z.__webglTexture),wt(j,y),y.mipmaps&&y.mipmaps.length>0)for(let L=0;L<y.mipmaps.length;L++)Ct(H.__webglFramebuffer[L],T,y,e.COLOR_ATTACHMENT0,j,L);else Ct(H.__webglFramebuffer,T,y,e.COLOR_ATTACHMENT0,j,0);f(y)&&m(j),n.unbindTexture()}T.depthBuffer&&te(T)}function De(T){const y=T.textures;for(let H=0,Z=y.length;H<Z;H++){const et=y[H];if(f(et)){const lt=_(T),ft=i.get(et).__webglTexture;n.bindTexture(lt,ft),m(lt),n.unbindTexture()}}}const ye=[],dn=[];function P(T){if(T.samples>0){if(Vt(T)===!1){const y=T.textures,H=T.width,Z=T.height;let et=e.COLOR_BUFFER_BIT;const lt=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ft=i.get(T),j=y.length>1;if(j)for(let tt=0;tt<y.length;tt++)n.bindFramebuffer(e.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+tt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ft.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+tt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);const L=T.texture.mipmaps;L&&L.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let tt=0;tt<y.length;tt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(et|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(et|=e.STENCIL_BUFFER_BIT)),j){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ft.__webglColorRenderbuffer[tt]);const ct=i.get(y[tt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ct,0)}e.blitFramebuffer(0,0,H,Z,0,0,H,Z,et,e.NEAREST),l===!0&&(ye.length=0,dn.length=0,ye.push(e.COLOR_ATTACHMENT0+tt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ye.push(lt),dn.push(lt),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,dn)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ye))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),j)for(let tt=0;tt<y.length;tt++){n.bindFramebuffer(e.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+tt,e.RENDERBUFFER,ft.__webglColorRenderbuffer[tt]);const ct=i.get(y[tt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ft.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+tt,e.TEXTURE_2D,ct,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const y=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[y])}}}function de(T){return Math.min(a.maxSamples,T.samples)}function Vt(T){const y=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function le(T){const y=r.render.frame;d.get(T)!==y&&(d.set(T,y),T.update())}function pt(T,y){const H=T.colorSpace,Z=T.format,et=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||H!==$c&&H!==Ta&&(Qt.getTransfer(H)===ce?(Z!==ui||et!==ti)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",H)),y}function be(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=q,this.getTextureUnits=Y,this.setTextureUnits=B,this.setTexture2D=W,this.setTexture2DArray=Q,this.setTexture3D=at,this.setTextureCube=xt,this.rebindTextures=oe,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function SC(e,t){function n(i,a=Ta){let s;const r=Qt.getTransfer(a);if(i===ti)return e.UNSIGNED_BYTE;if(i===Qp)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Jp)return e.UNSIGNED_SHORT_5_5_5_1;if(i===CS)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===wS)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===AS)return e.BYTE;if(i===RS)return e.SHORT;if(i===ko)return e.UNSIGNED_SHORT;if(i===Kp)return e.INT;if(i===Ai)return e.UNSIGNED_INT;if(i===Si)return e.FLOAT;if(i===sa)return e.HALF_FLOAT;if(i===DS)return e.ALPHA;if(i===NS)return e.RGB;if(i===ui)return e.RGBA;if(i===ra)return e.DEPTH_COMPONENT;if(i===cs)return e.DEPTH_STENCIL;if(i===US)return e.RED;if(i===$p)return e.RED_INTEGER;if(i===ys)return e.RG;if(i===tm)return e.RG_INTEGER;if(i===em)return e.RGBA_INTEGER;if(i===gc||i===_c||i===vc||i===xc)if(r===ce)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===gc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===gc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_c)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===uh||i===fh||i===dh||i===hh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===uh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ph||i===mh||i===gh||i===_h||i===vh||i===Qc||i===xh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ph||i===mh)return r===ce?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===gh)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===_h)return s.COMPRESSED_R11_EAC;if(i===vh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Qc)return s.COMPRESSED_RG11_EAC;if(i===xh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Sh||i===yh||i===Mh||i===Eh||i===bh||i===Th||i===Ah||i===Rh||i===Ch||i===wh||i===Dh||i===Nh||i===Uh||i===Lh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Sh)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yh)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mh)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Eh)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bh)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Th)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ah)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rh)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ch)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wh)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dh)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nh)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uh)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lh)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Oh||i===Ph||i===Ih)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Oh)return r===ce?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ph)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ih)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bh||i===Fh||i===Jc||i===zh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Bh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const yC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class EC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new kS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Ci({vertexShader:yC,fragmentShader:MC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ri(new Du(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bC extends Cs{constructor(t,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,v=null;const M=typeof XRWebGLBinding<"u",g=new EC,f={},m=n.getContextAttributes();let _=null,x=null;const C=[],b=[],R=new re;let S=null;const A=new Kn;A.viewport=new Fe;const D=new Kn;D.viewport=new Fe;const N=[A,D],G=new OT;let q=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let dt=C[$];return dt===void 0&&(dt=new wf,C[$]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function($){let dt=C[$];return dt===void 0&&(dt=new wf,C[$]=dt),dt.getGripSpace()},this.getHand=function($){let dt=C[$];return dt===void 0&&(dt=new wf,C[$]=dt),dt.getHandSpace()};function B($){const dt=b.indexOf($.inputSource);if(dt===-1)return;const ot=C[dt];ot!==void 0&&(ot.update($.inputSource,$.frame,c||r),ot.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){a.removeEventListener("select",B),a.removeEventListener("selectstart",B),a.removeEventListener("selectend",B),a.removeEventListener("squeeze",B),a.removeEventListener("squeezestart",B),a.removeEventListener("squeezeend",B),a.removeEventListener("end",U),a.removeEventListener("inputsourceschange",I);for(let $=0;$<C.length;$++){const dt=b[$];dt!==null&&(b[$]=null,C[$].disconnect(dt))}q=null,Y=null,g.reset();for(const $ in f)delete f[$];t.setRenderTarget(_),p=null,u=null,h=null,a=null,x=null,wt.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(a,n)),h},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function($){if(a=$,a!==null){if(_=t.getRenderTarget(),a.addEventListener("select",B),a.addEventListener("selectstart",B),a.addEventListener("selectend",B),a.addEventListener("squeeze",B),a.addEventListener("squeezestart",B),a.addEventListener("squeezeend",B),a.addEventListener("end",U),a.addEventListener("inputsourceschange",I),m.xrCompatible!==!0&&await n.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,Rt=null,Nt=null;m.depth&&(Nt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ot=m.stencil?cs:ra,Rt=m.stencil?Xo:Ai);const Ct={colorFormat:n.RGBA8,depthFormat:Nt,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(Ct),a.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new bi(u.textureWidth,u.textureHeight,{format:ui,type:ti,depthTexture:new Dr(u.textureWidth,u.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,n,ot),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new bi(p.framebufferWidth,p.framebufferHeight,{format:ui,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),wt.setContext(a),wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function I($){for(let dt=0;dt<$.removed.length;dt++){const ot=$.removed[dt],Rt=b.indexOf(ot);Rt>=0&&(b[Rt]=null,C[Rt].disconnect(ot))}for(let dt=0;dt<$.added.length;dt++){const ot=$.added[dt];let Rt=b.indexOf(ot);if(Rt===-1){for(let Ct=0;Ct<C.length;Ct++)if(Ct>=b.length){b.push(ot),Rt=Ct;break}else if(b[Ct]===null){b[Ct]=ot,Rt=Ct;break}if(Rt===-1)break}const Nt=C[Rt];Nt&&Nt.connect(ot)}}const W=new z,Q=new z;function at($,dt,ot){W.setFromMatrixPosition(dt.matrixWorld),Q.setFromMatrixPosition(ot.matrixWorld);const Rt=W.distanceTo(Q),Nt=dt.projectionMatrix.elements,Ct=ot.projectionMatrix.elements,Se=Nt[14]/(Nt[10]-1),Ot=Nt[14]/(Nt[10]+1),te=(Nt[9]+1)/Nt[5],oe=(Nt[9]-1)/Nt[5],Xt=(Nt[8]-1)/Nt[0],De=(Ct[8]+1)/Ct[0],ye=Se*Xt,dn=Se*De,P=Rt/(-Xt+De),de=P*-Xt;if(dt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(de),$.translateZ(P),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Nt[10]===-1)$.projectionMatrix.copy(dt.projectionMatrix),$.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Vt=Se+P,le=Ot+P,pt=ye-de,be=dn+(Rt-de),T=te*Ot/le*Vt,y=oe*Ot/le*Vt;$.projectionMatrix.makePerspective(pt,be,T,y,Vt,le),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function xt($,dt){dt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(dt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(a===null)return;let dt=$.near,ot=$.far;g.texture!==null&&(g.depthNear>0&&(dt=g.depthNear),g.depthFar>0&&(ot=g.depthFar)),G.near=D.near=A.near=dt,G.far=D.far=A.far=ot,(q!==G.near||Y!==G.far)&&(a.updateRenderState({depthNear:G.near,depthFar:G.far}),q=G.near,Y=G.far),G.layers.mask=$.layers.mask|6,A.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;const Rt=$.parent,Nt=G.cameras;xt(G,Rt);for(let Ct=0;Ct<Nt.length;Ct++)xt(Nt[Ct],Rt);Nt.length===2?at(G,A,D):G.projectionMatrix.copy(A.projectionMatrix),yt($,G,Rt)};function yt($,dt,ot){ot===null?$.matrix.copy(dt.matrixWorld):($.matrix.copy(ot.matrixWorld),$.matrix.invert(),$.matrix.multiply(dt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(dt.projectionMatrix),$.projectionMatrixInverse.copy(dt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Gh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(G)},this.getCameraTexture=function($){return f[$]};let Gt=null;function jt($,dt){if(d=dt.getViewerPose(c||r),v=dt,d!==null){const ot=d.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let Rt=!1;ot.length!==G.cameras.length&&(G.cameras.length=0,Rt=!0);for(let Ot=0;Ot<ot.length;Ot++){const te=ot[Ot];let oe=null;if(p!==null)oe=p.getViewport(te);else{const De=h.getViewSubImage(u,te);oe=De.viewport,Ot===0&&(t.setRenderTargetTextures(x,De.colorTexture,De.depthStencilTexture),t.setRenderTarget(x))}let Xt=N[Ot];Xt===void 0&&(Xt=new Kn,Xt.layers.enable(Ot),Xt.viewport=new Fe,N[Ot]=Xt),Xt.matrix.fromArray(te.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(te.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(oe.x,oe.y,oe.width,oe.height),Ot===0&&(G.matrix.copy(Xt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Rt===!0&&G.cameras.push(Xt)}const Nt=a.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&M){h=i.getBinding();const Ot=h.getDepthInformation(ot[0]);Ot&&Ot.isValid&&Ot.texture&&g.init(Ot,a.renderState)}if(Nt&&Nt.includes("camera-access")&&M){t.state.unbindTexture(),h=i.getBinding();for(let Ot=0;Ot<ot.length;Ot++){const te=ot[Ot].camera;if(te){let oe=f[te];oe||(oe=new kS,f[te]=oe);const Xt=h.getCameraImage(te);oe.sourceTexture=Xt}}}}for(let ot=0;ot<C.length;ot++){const Rt=b[ot],Nt=C[ot];Rt!==null&&Nt!==void 0&&Nt.update(Rt,dt,c||r)}Gt&&Gt($,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),v=null}const wt=new qS;wt.setAnimationLoop(jt),this.setAnimationLoop=function($){Gt=$},this.dispose=function(){}}}const TC=new We,ty=new It;ty.set(-1,0,0,0,1,0,0,0,1);function AC(e,t){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,XS(e)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function a(g,f,m,_,x){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),h(g,f)):f.isMeshPhongMaterial?(s(g,f),d(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),u(g,f),f.isMeshPhysicalMaterial&&p(g,f,x)):f.isMeshMatcapMaterial?(s(g,f),v(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),M(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(r(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,m,_):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===bn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===bn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const m=t.get(f),_=m.envMap,x=m.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(TC.makeRotationFromEuler(x)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ty),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function r(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,_){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=_*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function d(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,m){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===bn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function M(g,f){const m=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function RC(e,t,n,i){let a={},s={},r=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const x=_.program;i.uniformBlockBinding(m,x)}function c(m,_){let x=a[m.id];x===void 0&&(v(m),x=d(m),a[m.id]=x,m.addEventListener("dispose",g));const C=_.program;i.updateUBOMapping(m,C);const b=t.render.frame;s[m.id]!==b&&(u(m),s[m.id]=b)}function d(m){const _=h();m.__bindingPointIndex=_;const x=e.createBuffer(),C=m.__size,b=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,C,b),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,x),x}function h(){for(let m=0;m<o;m++)if(r.indexOf(m)===-1)return r.push(m),m;return ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){const _=a[m.id],x=m.uniforms,C=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let b=0,R=x.length;b<R;b++){const S=Array.isArray(x[b])?x[b]:[x[b]];for(let A=0,D=S.length;A<D;A++){const N=S[A];if(p(N,b,A,C)===!0){const G=N.__offset,q=Array.isArray(N.value)?N.value:[N.value];let Y=0;for(let B=0;B<q.length;B++){const U=q[B],I=M(U);typeof U=="number"||typeof U=="boolean"?(N.__data[0]=U,e.bufferSubData(e.UNIFORM_BUFFER,G+Y,N.__data)):U.isMatrix3?(N.__data[0]=U.elements[0],N.__data[1]=U.elements[1],N.__data[2]=U.elements[2],N.__data[3]=0,N.__data[4]=U.elements[3],N.__data[5]=U.elements[4],N.__data[6]=U.elements[5],N.__data[7]=0,N.__data[8]=U.elements[6],N.__data[9]=U.elements[7],N.__data[10]=U.elements[8],N.__data[11]=0):ArrayBuffer.isView(U)?N.__data.set(new U.constructor(U.buffer,U.byteOffset,N.__data.length)):(U.toArray(N.__data,Y),Y+=I.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,G,N.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(m,_,x,C){const b=m.value,R=_+"_"+x;if(C[R]===void 0)return typeof b=="number"||typeof b=="boolean"?C[R]=b:ArrayBuffer.isView(b)?C[R]=b.slice():C[R]=b.clone(),!0;{const S=C[R];if(typeof b=="number"||typeof b=="boolean"){if(S!==b)return C[R]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(S.equals(b)===!1)return S.copy(b),!0}}return!1}function v(m){const _=m.uniforms;let x=0;const C=16;for(let R=0,S=_.length;R<S;R++){const A=Array.isArray(_[R])?_[R]:[_[R]];for(let D=0,N=A.length;D<N;D++){const G=A[D],q=Array.isArray(G.value)?G.value:[G.value];for(let Y=0,B=q.length;Y<B;Y++){const U=q[Y],I=M(U),W=x%C,Q=W%I.boundary,at=W+Q;x+=Q,at!==0&&C-at<I.storage&&(x+=C-at),G.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=I.storage}}}const b=x%C;return b>0&&(x+=C-b),m.__size=x,m.__cache={},this}function M(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(_.boundary=16,_.storage=m.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",m),_}function g(m){const _=m.target;_.removeEventListener("dispose",g);const x=r.indexOf(_.__bindingPointIndex);r.splice(x,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete s[_.id]}function f(){for(const m in a)e.deleteBuffer(a[m]);r=[],a={},s={}}return{bind:l,update:c,dispose:f}}const CC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mi=null;function wC(){return mi===null&&(mi=new vT(CC,16,16,ys,sa),mi.name="DFG_LUT",mi.minFilter=fn,mi.magFilter=fn,mi.wrapS=Yi,mi.wrapT=Yi,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}class DC{constructor(t={}){const{canvas:n=Zb(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:p=ti}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=r;const M=p,g=new Set([em,tm,$p]),f=new Set([ti,Ai,ko,Xo,Qp,Jp]),m=new Uint32Array(4),_=new Int32Array(4),x=new z;let C=null,b=null;const R=[],S=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let N=!1,G=null;this._outputColorSpace=jn;let q=0,Y=0,B=null,U=-1,I=null;const W=new Fe,Q=new Fe;let at=null;const xt=new Zt(0);let yt=0,Gt=n.width,jt=n.height,wt=1,$=null,dt=null;const ot=new Fe(0,0,Gt,jt),Rt=new Fe(0,0,Gt,jt);let Nt=!1;const Ct=new HS;let Se=!1,Ot=!1;const te=new We,oe=new z,Xt=new Fe,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function dn(){return B===null?wt:1}let P=i;function de(E,F){return n.getContext(E,F)}try{const E={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zp}`),n.addEventListener("webglcontextlost",nt,!1),n.addEventListener("webglcontextrestored",bt,!1),n.addEventListener("webglcontextcreationerror",Ft,!1),P===null){const F="webgl2";if(P=de(F,E),P===null)throw de(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw ne("WebGLRenderer: "+E.message),E}let Vt,le,pt,be,T,y,H,Z,et,lt,ft,j,L,tt,ct,it,rt,Ut,Pt,ie,O,ut,K;function vt(){Vt=new wR(P),Vt.init(),O=new SC(P,Vt),le=new yR(P,Vt,t,O),pt=new vC(P,Vt),le.reversedDepthBuffer&&u&&pt.buffers.depth.setReversed(!0),be=new UR(P),T=new aC,y=new xC(P,Vt,pt,T,le,O,be),H=new CR(D),Z=new IT(P),ut=new xR(P,Z),et=new DR(P,Z,be,ut),lt=new OR(P,et,Z,ut,be),Ut=new LR(P,le,y),ct=new MR(T),ft=new iC(D,H,Vt,le,ut,ct),j=new AC(D,T),L=new rC,tt=new dC(Vt),rt=new vR(D,H,pt,lt,v,l),it=new _C(D,lt,le),K=new RC(P,be,le,pt),Pt=new SR(P,Vt,be),ie=new NR(P,Vt,be),be.programs=ft.programs,D.capabilities=le,D.extensions=Vt,D.properties=T,D.renderLists=L,D.shadowMap=it,D.state=pt,D.info=be}vt(),M!==ti&&(A=new IR(M,n.width,n.height,a,s));const ht=new bC(D,P);this.xr=ht,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=Vt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Vt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return wt},this.setPixelRatio=function(E){E!==void 0&&(wt=E,this.setSize(Gt,jt,!1))},this.getSize=function(E){return E.set(Gt,jt)},this.setSize=function(E,F,X=!0){if(ht.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}Gt=E,jt=F,n.width=Math.floor(E*wt),n.height=Math.floor(F*wt),X===!0&&(n.style.width=E+"px",n.style.height=F+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Gt*wt,jt*wt).floor()},this.setDrawingBufferSize=function(E,F,X){Gt=E,jt=F,wt=X,n.width=Math.floor(E*X),n.height=Math.floor(F*X),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(M===ti){ne("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){Dt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(W)},this.getViewport=function(E){return E.copy(ot)},this.setViewport=function(E,F,X,V){E.isVector4?ot.set(E.x,E.y,E.z,E.w):ot.set(E,F,X,V),pt.viewport(W.copy(ot).multiplyScalar(wt).round())},this.getScissor=function(E){return E.copy(Rt)},this.setScissor=function(E,F,X,V){E.isVector4?Rt.set(E.x,E.y,E.z,E.w):Rt.set(E,F,X,V),pt.scissor(Q.copy(Rt).multiplyScalar(wt).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(E){pt.setScissorTest(Nt=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){dt=E},this.getClearColor=function(E){return E.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,X=!0){let V=0;if(E){let k=!1;if(B!==null){const _t=B.texture.format;k=g.has(_t)}if(k){const _t=B.texture.type,Mt=f.has(_t),gt=rt.getClearColor(),Et=rt.getClearAlpha(),Tt=gt.r,zt=gt.g,Wt=gt.b;Mt?(m[0]=Tt,m[1]=zt,m[2]=Wt,m[3]=Et,P.clearBufferuiv(P.COLOR,0,m)):(_[0]=Tt,_[1]=zt,_[2]=Wt,_[3]=Et,P.clearBufferiv(P.COLOR,0,_))}else V|=P.COLOR_BUFFER_BIT}F&&(V|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),G=E},this.dispose=function(){n.removeEventListener("webglcontextlost",nt,!1),n.removeEventListener("webglcontextrestored",bt,!1),n.removeEventListener("webglcontextcreationerror",Ft,!1),rt.dispose(),L.dispose(),tt.dispose(),T.dispose(),H.dispose(),lt.dispose(),ut.dispose(),K.dispose(),ft.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",_m),ht.removeEventListener("sessionend",vm),Za.stop()};function nt(E){E.preventDefault(),l_("WebGLRenderer: Context Lost."),N=!0}function bt(){l_("WebGLRenderer: Context Restored."),N=!1;const E=be.autoReset,F=it.enabled,X=it.autoUpdate,V=it.needsUpdate,k=it.type;vt(),be.autoReset=E,it.enabled=F,it.autoUpdate=X,it.needsUpdate=V,it.type=k}function Ft(E){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Oe(E){const F=E.target;F.removeEventListener("dispose",Oe),he(F)}function he(E){Ni(E),T.remove(E)}function Ni(E){const F=T.get(E).programs;F!==void 0&&(F.forEach(function(X){ft.releaseProgram(X)}),E.isShaderMaterial&&ft.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,X,V,k,_t){F===null&&(F=De);const Mt=k.isMesh&&k.matrixWorld.determinant()<0,gt=py(E,F,X,V,k);pt.setMaterial(V,Mt);let Et=X.index,Tt=1;if(V.wireframe===!0){if(Et=et.getWireframeAttribute(X),Et===void 0)return;Tt=2}const zt=X.drawRange,Wt=X.attributes.position;let At=zt.start*Tt,pe=(zt.start+zt.count)*Tt;_t!==null&&(At=Math.max(At,_t.start*Tt),pe=Math.min(pe,(_t.start+_t.count)*Tt)),Et!==null?(At=Math.max(At,0),pe=Math.min(pe,Et.count)):Wt!=null&&(At=Math.max(At,0),pe=Math.min(pe,Wt.count));const Pe=pe-At;if(Pe<0||Pe===1/0)return;ut.setup(k,V,gt,X,Et);let Ne,_e=Pt;if(Et!==null&&(Ne=Z.get(Et),_e=ie,_e.setIndex(Ne)),k.isMesh)V.wireframe===!0?(pt.setLineWidth(V.wireframeLinewidth*dn()),_e.setMode(P.LINES)):_e.setMode(P.TRIANGLES);else if(k.isLine){let ln=V.linewidth;ln===void 0&&(ln=1),pt.setLineWidth(ln*dn()),k.isLineSegments?_e.setMode(P.LINES):k.isLineLoop?_e.setMode(P.LINE_LOOP):_e.setMode(P.LINE_STRIP)}else k.isPoints?_e.setMode(P.POINTS):k.isSprite&&_e.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(Vt.get("WEBGL_multi_draw"))_e.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const ln=k._multiDrawStarts,St=k._multiDrawCounts,wn=k._multiDrawCount,ee=Et?Z.get(Et).bytesPerElement:1,kn=T.get(V).currentProgram.getUniforms();for(let hi=0;hi<wn;hi++)kn.setValue(P,"_gl_DrawID",hi),_e.render(ln[hi]/ee,St[hi])}else if(k.isInstancedMesh)_e.renderInstances(At,Pe,k.count);else if(X.isInstancedBufferGeometry){const ln=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,St=Math.min(X.instanceCount,ln);_e.renderInstances(At,Pe,St)}else _e.render(At,Pe)};function di(E,F,X){E.transparent===!0&&E.side===Xi&&E.forceSinglePass===!1?(E.side=bn,E.needsUpdate=!0,cl(E,F,X),E.side=Wa,E.needsUpdate=!0,cl(E,F,X),E.side=Xi):cl(E,F,X)}this.compile=function(E,F,X=null){X===null&&(X=E),b=tt.get(X),b.init(F),S.push(b),X.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),E!==X&&E.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),b.setupLights();const V=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const _t=k.material;if(_t)if(Array.isArray(_t))for(let Mt=0;Mt<_t.length;Mt++){const gt=_t[Mt];di(gt,X,k),V.add(gt)}else di(_t,X,k),V.add(_t)}),b=S.pop(),V},this.compileAsync=function(E,F,X=null){const V=this.compile(E,F,X);return new Promise(k=>{function _t(){if(V.forEach(function(Mt){T.get(Mt).currentProgram.isReady()&&V.delete(Mt)}),V.size===0){k(E);return}setTimeout(_t,10)}Vt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Lu=null;function dy(E){Lu&&Lu(E)}function _m(){Za.stop()}function vm(){Za.start()}const Za=new qS;Za.setAnimationLoop(dy),typeof self<"u"&&Za.setContext(self),this.setAnimationLoop=function(E){Lu=E,ht.setAnimationLoop(E),E===null?Za.stop():Za.start()},ht.addEventListener("sessionstart",_m),ht.addEventListener("sessionend",vm),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;G!==null&&G.renderStart(E,F);const X=ht.enabled===!0&&ht.isPresenting===!0,V=A!==null&&(B===null||X)&&A.begin(D,B);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(F),F=ht.getCamera()),E.isScene===!0&&E.onBeforeRender(D,E,F,B),b=tt.get(E,S.length),b.init(F),b.state.textureUnits=y.getTextureUnits(),S.push(b),te.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ct.setFromProjectionMatrix(te,yi,F.reversedDepth),Ot=this.localClippingEnabled,Se=ct.init(this.clippingPlanes,Ot),C=L.get(E,R.length),C.init(),R.push(C),ht.enabled===!0&&ht.isPresenting===!0){const Mt=D.xr.getDepthSensingMesh();Mt!==null&&Ou(Mt,F,-1/0,D.sortObjects)}Ou(E,F,0,D.sortObjects),C.finish(),D.sortObjects===!0&&C.sort($,dt),ye=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,ye&&rt.addToRenderList(C,E),this.info.render.frame++,Se===!0&&ct.beginShadows();const k=b.state.shadowsArray;if(it.render(k,E,F),Se===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&A.hasRenderPass())===!1){const Mt=C.opaque,gt=C.transmissive;if(b.setupLights(),F.isArrayCamera){const Et=F.cameras;if(gt.length>0)for(let Tt=0,zt=Et.length;Tt<zt;Tt++){const Wt=Et[Tt];Sm(Mt,gt,E,Wt)}ye&&rt.render(E);for(let Tt=0,zt=Et.length;Tt<zt;Tt++){const Wt=Et[Tt];xm(C,E,Wt,Wt.viewport)}}else gt.length>0&&Sm(Mt,gt,E,F),ye&&rt.render(E),xm(C,E,F)}B!==null&&Y===0&&(y.updateMultisampleRenderTarget(B),y.updateRenderTargetMipmap(B)),V&&A.end(D),E.isScene===!0&&E.onAfterRender(D,E,F),ut.resetDefaultState(),U=-1,I=null,S.pop(),S.length>0?(b=S[S.length-1],y.setTextureUnits(b.state.textureUnits),Se===!0&&ct.setGlobalState(D.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?C=R[R.length-1]:C=null,G!==null&&G.renderEnd()};function Ou(E,F,X,V){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLightProbeGrid)b.pushLightProbeGrid(E);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ct.intersectsSprite(E)){V&&Xt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(te);const Mt=lt.update(E),gt=E.material;gt.visible&&C.push(E,Mt,gt,X,Xt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ct.intersectsObject(E))){const Mt=lt.update(E),gt=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Xt.copy(E.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Xt.copy(Mt.boundingSphere.center)),Xt.applyMatrix4(E.matrixWorld).applyMatrix4(te)),Array.isArray(gt)){const Et=Mt.groups;for(let Tt=0,zt=Et.length;Tt<zt;Tt++){const Wt=Et[Tt],At=gt[Wt.materialIndex];At&&At.visible&&C.push(E,Mt,At,X,Xt.z,Wt)}}else gt.visible&&C.push(E,Mt,gt,X,Xt.z,null)}}const _t=E.children;for(let Mt=0,gt=_t.length;Mt<gt;Mt++)Ou(_t[Mt],F,X,V)}function xm(E,F,X,V){const{opaque:k,transmissive:_t,transparent:Mt}=E;b.setupLightsView(X),Se===!0&&ct.setGlobalState(D.clippingPlanes,X),V&&pt.viewport(W.copy(V)),k.length>0&&ll(k,F,X),_t.length>0&&ll(_t,F,X),Mt.length>0&&ll(Mt,F,X),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Sm(E,F,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){const At=Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new bi(1,1,{generateMipmaps:!0,type:At?sa:ti,minFilter:ls,samples:Math.max(4,le.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}const _t=b.state.transmissionRenderTarget[V.id],Mt=V.viewport||W;_t.setSize(Mt.z*D.transmissionResolutionScale,Mt.w*D.transmissionResolutionScale);const gt=D.getRenderTarget(),Et=D.getActiveCubeFace(),Tt=D.getActiveMipmapLevel();D.setRenderTarget(_t),D.getClearColor(xt),yt=D.getClearAlpha(),yt<1&&D.setClearColor(16777215,.5),D.clear(),ye&&rt.render(X);const zt=D.toneMapping;D.toneMapping=Ei;const Wt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),Se===!0&&ct.setGlobalState(D.clippingPlanes,V),ll(E,X,V),y.updateMultisampleRenderTarget(_t),y.updateRenderTargetMipmap(_t),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let pe=0,Pe=F.length;pe<Pe;pe++){const Ne=F[pe],{object:_e,geometry:ln,material:St,group:wn}=Ne;if(St.side===Xi&&_e.layers.test(V.layers)){const ee=St.side;St.side=bn,St.needsUpdate=!0,ym(_e,X,V,ln,St,wn),St.side=ee,St.needsUpdate=!0,At=!0}}At===!0&&(y.updateMultisampleRenderTarget(_t),y.updateRenderTargetMipmap(_t))}D.setRenderTarget(gt,Et,Tt),D.setClearColor(xt,yt),Wt!==void 0&&(V.viewport=Wt),D.toneMapping=zt}function ll(E,F,X){const V=F.isScene===!0?F.overrideMaterial:null;for(let k=0,_t=E.length;k<_t;k++){const Mt=E[k],{object:gt,geometry:Et,group:Tt}=Mt;let zt=Mt.material;zt.allowOverride===!0&&V!==null&&(zt=V),gt.layers.test(X.layers)&&ym(gt,F,X,Et,zt,Tt)}}function ym(E,F,X,V,k,_t){E.onBeforeRender(D,F,X,V,k,_t),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(D,F,X,V,E,_t),k.transparent===!0&&k.side===Xi&&k.forceSinglePass===!1?(k.side=bn,k.needsUpdate=!0,D.renderBufferDirect(X,F,V,k,E,_t),k.side=Wa,k.needsUpdate=!0,D.renderBufferDirect(X,F,V,k,E,_t),k.side=Xi):D.renderBufferDirect(X,F,V,k,E,_t),E.onAfterRender(D,F,X,V,k,_t)}function cl(E,F,X){F.isScene!==!0&&(F=De);const V=T.get(E),k=b.state.lights,_t=b.state.shadowsArray,Mt=k.state.version,gt=ft.getParameters(E,k.state,_t,F,X,b.state.lightProbeGridArray),Et=ft.getProgramCacheKey(gt);let Tt=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;const zt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=H.get(E.envMap||V.environment,zt),V.envMapRotation=V.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Tt===void 0&&(E.addEventListener("dispose",Oe),Tt=new Map,V.programs=Tt);let Wt=Tt.get(Et);if(Wt!==void 0){if(V.currentProgram===Wt&&V.lightsStateVersion===Mt)return Em(E,gt),Wt}else gt.uniforms=ft.getUniforms(E),G!==null&&E.isNodeMaterial&&G.build(E,X,gt),E.onBeforeCompile(gt,D),Wt=ft.acquireProgram(gt,Et),Tt.set(Et,Wt),V.uniforms=gt.uniforms;const At=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(At.clippingPlanes=ct.uniform),Em(E,gt),V.needsLights=gy(E),V.lightsStateVersion=Mt,V.needsLights&&(At.ambientLightColor.value=k.state.ambient,At.lightProbe.value=k.state.probe,At.directionalLights.value=k.state.directional,At.directionalLightShadows.value=k.state.directionalShadow,At.spotLights.value=k.state.spot,At.spotLightShadows.value=k.state.spotShadow,At.rectAreaLights.value=k.state.rectArea,At.ltc_1.value=k.state.rectAreaLTC1,At.ltc_2.value=k.state.rectAreaLTC2,At.pointLights.value=k.state.point,At.pointLightShadows.value=k.state.pointShadow,At.hemisphereLights.value=k.state.hemi,At.directionalShadowMatrix.value=k.state.directionalShadowMatrix,At.spotLightMatrix.value=k.state.spotLightMatrix,At.spotLightMap.value=k.state.spotLightMap,At.pointShadowMatrix.value=k.state.pointShadowMatrix),V.lightProbeGrid=b.state.lightProbeGridArray.length>0,V.currentProgram=Wt,V.uniformsList=null,Wt}function Mm(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Sc.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Em(E,F){const X=T.get(E);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function hy(E,F){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;x.setFromMatrixPosition(F.matrixWorld);for(let X=0,V=E.length;X<V;X++){const k=E[X];if(k.texture!==null&&k.boundingBox.containsPoint(x))return k}return null}function py(E,F,X,V,k){F.isScene!==!0&&(F=De),y.resetTextureUnits();const _t=F.fog,Mt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,gt=B===null?D.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Qt.workingColorSpace,Et=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Tt=H.get(V.envMap||Mt,Et),zt=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Wt=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),At=!!X.morphAttributes.position,pe=!!X.morphAttributes.normal,Pe=!!X.morphAttributes.color;let Ne=Ei;V.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ne=D.toneMapping);const _e=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ln=_e!==void 0?_e.length:0,St=T.get(V),wn=b.state.lights;if(Se===!0&&(Ot===!0||E!==I)){const Me=E===I&&V.id===U;ct.setState(V,E,Me)}let ee=!1;V.version===St.__version?(St.needsLights&&St.lightsStateVersion!==wn.state.version||St.outputColorSpace!==gt||k.isBatchedMesh&&St.batching===!1||!k.isBatchedMesh&&St.batching===!0||k.isBatchedMesh&&St.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&St.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&St.instancing===!1||!k.isInstancedMesh&&St.instancing===!0||k.isSkinnedMesh&&St.skinning===!1||!k.isSkinnedMesh&&St.skinning===!0||k.isInstancedMesh&&St.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&St.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&St.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&St.instancingMorph===!1&&k.morphTexture!==null||St.envMap!==Tt||V.fog===!0&&St.fog!==_t||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==ct.numPlanes||St.numIntersection!==ct.numIntersection)||St.vertexAlphas!==zt||St.vertexTangents!==Wt||St.morphTargets!==At||St.morphNormals!==pe||St.morphColors!==Pe||St.toneMapping!==Ne||St.morphTargetsCount!==ln||!!St.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ee=!0):(ee=!0,St.__version=V.version);let kn=St.currentProgram;ee===!0&&(kn=cl(V,F,k),G&&V.isNodeMaterial&&G.onUpdateProgram(V,kn,St));let hi=!1,ca=!1,ws=!1;const ve=kn.getUniforms(),Ie=St.uniforms;if(pt.useProgram(kn.program)&&(hi=!0,ca=!0,ws=!0),V.id!==U&&(U=V.id,ca=!0),St.needsLights){const Me=hy(b.state.lightProbeGridArray,k);St.lightProbeGrid!==Me&&(St.lightProbeGrid=Me,ca=!0)}if(hi||I!==E){pt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ve.setValue(P,"projectionMatrix",E.projectionMatrix),ve.setValue(P,"viewMatrix",E.matrixWorldInverse);const fa=ve.map.cameraPosition;fa!==void 0&&fa.setValue(P,oe.setFromMatrixPosition(E.matrixWorld)),le.logarithmicDepthBuffer&&ve.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ve.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),I!==E&&(I=E,ca=!0,ws=!0)}if(St.needsLights&&(wn.state.directionalShadowMap.length>0&&ve.setValue(P,"directionalShadowMap",wn.state.directionalShadowMap,y),wn.state.spotShadowMap.length>0&&ve.setValue(P,"spotShadowMap",wn.state.spotShadowMap,y),wn.state.pointShadowMap.length>0&&ve.setValue(P,"pointShadowMap",wn.state.pointShadowMap,y)),k.isSkinnedMesh){ve.setOptional(P,k,"bindMatrix"),ve.setOptional(P,k,"bindMatrixInverse");const Me=k.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),ve.setValue(P,"boneTexture",Me.boneTexture,y))}k.isBatchedMesh&&(ve.setOptional(P,k,"batchingTexture"),ve.setValue(P,"batchingTexture",k._matricesTexture,y),ve.setOptional(P,k,"batchingIdTexture"),ve.setValue(P,"batchingIdTexture",k._indirectTexture,y),ve.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&ve.setValue(P,"batchingColorTexture",k._colorsTexture,y));const ua=X.morphAttributes;if((ua.position!==void 0||ua.normal!==void 0||ua.color!==void 0)&&Ut.update(k,X,kn),(ca||St.receiveShadow!==k.receiveShadow)&&(St.receiveShadow=k.receiveShadow,ve.setValue(P,"receiveShadow",k.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(Ie.envMapIntensity.value=F.environmentIntensity),Ie.dfgLUT!==void 0&&(Ie.dfgLUT.value=wC()),ca){if(ve.setValue(P,"toneMappingExposure",D.toneMappingExposure),St.needsLights&&my(Ie,ws),_t&&V.fog===!0&&j.refreshFogUniforms(Ie,_t),j.refreshMaterialUniforms(Ie,V,wt,jt,b.state.transmissionRenderTarget[E.id]),St.needsLights&&St.lightProbeGrid){const Me=St.lightProbeGrid;Ie.probesSH.value=Me.texture,Ie.probesMin.value.copy(Me.boundingBox.min),Ie.probesMax.value.copy(Me.boundingBox.max),Ie.probesResolution.value.copy(Me.resolution)}Sc.upload(P,Mm(St),Ie,y)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Sc.upload(P,Mm(St),Ie,y),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ve.setValue(P,"center",k.center),ve.setValue(P,"modelViewMatrix",k.modelViewMatrix),ve.setValue(P,"normalMatrix",k.normalMatrix),ve.setValue(P,"modelMatrix",k.matrixWorld),V.uniformsGroups!==void 0){const Me=V.uniformsGroups;for(let fa=0,Ds=Me.length;fa<Ds;fa++){const bm=Me[fa];K.update(bm,kn),K.bind(bm,kn)}}return kn}function my(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function gy(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(E,F,X){const V=T.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),T.get(E.texture).__webglTexture=F,T.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const X=T.get(E);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0};const _y=P.createFramebuffer();this.setRenderTarget=function(E,F=0,X=0){B=E,q=F,Y=X;let V=null,k=!1,_t=!1;if(E){const gt=T.get(E);if(gt.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(P.FRAMEBUFFER,gt.__webglFramebuffer),W.copy(E.viewport),Q.copy(E.scissor),at=E.scissorTest,pt.viewport(W),pt.scissor(Q),pt.setScissorTest(at),U=-1;return}else if(gt.__webglFramebuffer===void 0)y.setupRenderTarget(E);else if(gt.__hasExternalTextures)y.rebindTextures(E,T.get(E.texture).__webglTexture,T.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const zt=E.depthTexture;if(gt.__boundDepthTexture!==zt){if(zt!==null&&T.has(zt)&&(E.width!==zt.image.width||E.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(E)}}const Et=E.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(_t=!0);const Tt=T.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Tt[F])?V=Tt[F][X]:V=Tt[F],k=!0):E.samples>0&&y.useMultisampledRTT(E)===!1?V=T.get(E).__webglMultisampledFramebuffer:Array.isArray(Tt)?V=Tt[X]:V=Tt,W.copy(E.viewport),Q.copy(E.scissor),at=E.scissorTest}else W.copy(ot).multiplyScalar(wt).floor(),Q.copy(Rt).multiplyScalar(wt).floor(),at=Nt;if(X!==0&&(V=_y),pt.bindFramebuffer(P.FRAMEBUFFER,V)&&pt.drawBuffers(E,V),pt.viewport(W),pt.scissor(Q),pt.setScissorTest(at),k){const gt=T.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,gt.__webglTexture,X)}else if(_t){const gt=F;for(let Et=0;Et<E.textures.length;Et++){const Tt=T.get(E.textures[Et]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Et,Tt.__webglTexture,X,gt)}}else if(E!==null&&X!==0){const gt=T.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,gt.__webglTexture,X)}U=-1},this.readRenderTargetPixels=function(E,F,X,V,k,_t,Mt,gt=0){if(!(E&&E.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=T.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(Et=Et[Mt]),Et){pt.bindFramebuffer(P.FRAMEBUFFER,Et);try{const Tt=E.textures[gt],zt=Tt.format,Wt=Tt.type;if(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+gt),!le.textureFormatReadable(zt)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(Wt)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-V&&X>=0&&X<=E.height-k&&P.readPixels(F,X,V,k,O.convert(zt),O.convert(Wt),_t)}finally{const Tt=B!==null?T.get(B).__webglFramebuffer:null;pt.bindFramebuffer(P.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(E,F,X,V,k,_t,Mt,gt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=T.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(Et=Et[Mt]),Et)if(F>=0&&F<=E.width-V&&X>=0&&X<=E.height-k){pt.bindFramebuffer(P.FRAMEBUFFER,Et);const Tt=E.textures[gt],zt=Tt.format,Wt=Tt.type;if(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+gt),!le.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const At=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,At),P.bufferData(P.PIXEL_PACK_BUFFER,_t.byteLength,P.STREAM_READ),P.readPixels(F,X,V,k,O.convert(zt),O.convert(Wt),0);const pe=B!==null?T.get(B).__webglFramebuffer:null;pt.bindFramebuffer(P.FRAMEBUFFER,pe);const Pe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Kb(P,Pe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,At),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,_t),P.deleteBuffer(At),P.deleteSync(Pe),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,X=0){const V=Math.pow(2,-X),k=Math.floor(E.image.width*V),_t=Math.floor(E.image.height*V),Mt=F!==null?F.x:0,gt=F!==null?F.y:0;y.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,Mt,gt,k,_t),pt.unbindTexture()};const vy=P.createFramebuffer(),xy=P.createFramebuffer();this.copyTextureToTexture=function(E,F,X=null,V=null,k=0,_t=0){let Mt,gt,Et,Tt,zt,Wt,At,pe,Pe;const Ne=E.isCompressedTexture?E.mipmaps[_t]:E.image;if(X!==null)Mt=X.max.x-X.min.x,gt=X.max.y-X.min.y,Et=X.isBox3?X.max.z-X.min.z:1,Tt=X.min.x,zt=X.min.y,Wt=X.isBox3?X.min.z:0;else{const Ie=Math.pow(2,-k);Mt=Math.floor(Ne.width*Ie),gt=Math.floor(Ne.height*Ie),E.isDataArrayTexture?Et=Ne.depth:E.isData3DTexture?Et=Math.floor(Ne.depth*Ie):Et=1,Tt=0,zt=0,Wt=0}V!==null?(At=V.x,pe=V.y,Pe=V.z):(At=0,pe=0,Pe=0);const _e=O.convert(F.format),ln=O.convert(F.type);let St;F.isData3DTexture?(y.setTexture3D(F,0),St=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(y.setTexture2DArray(F,0),St=P.TEXTURE_2D_ARRAY):(y.setTexture2D(F,0),St=P.TEXTURE_2D),pt.activeTexture(P.TEXTURE0),pt.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),pt.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),pt.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const wn=pt.getParameter(P.UNPACK_ROW_LENGTH),ee=pt.getParameter(P.UNPACK_IMAGE_HEIGHT),kn=pt.getParameter(P.UNPACK_SKIP_PIXELS),hi=pt.getParameter(P.UNPACK_SKIP_ROWS),ca=pt.getParameter(P.UNPACK_SKIP_IMAGES);pt.pixelStorei(P.UNPACK_ROW_LENGTH,Ne.width),pt.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ne.height),pt.pixelStorei(P.UNPACK_SKIP_PIXELS,Tt),pt.pixelStorei(P.UNPACK_SKIP_ROWS,zt),pt.pixelStorei(P.UNPACK_SKIP_IMAGES,Wt);const ws=E.isDataArrayTexture||E.isData3DTexture,ve=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const Ie=T.get(E),ua=T.get(F),Me=T.get(Ie.__renderTarget),fa=T.get(ua.__renderTarget);pt.bindFramebuffer(P.READ_FRAMEBUFFER,Me.__webglFramebuffer),pt.bindFramebuffer(P.DRAW_FRAMEBUFFER,fa.__webglFramebuffer);for(let Ds=0;Ds<Et;Ds++)ws&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,T.get(E).__webglTexture,k,Wt+Ds),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,T.get(F).__webglTexture,_t,Pe+Ds)),P.blitFramebuffer(Tt,zt,Mt,gt,At,pe,Mt,gt,P.DEPTH_BUFFER_BIT,P.NEAREST);pt.bindFramebuffer(P.READ_FRAMEBUFFER,null),pt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(k!==0||E.isRenderTargetTexture||T.has(E)){const Ie=T.get(E),ua=T.get(F);pt.bindFramebuffer(P.READ_FRAMEBUFFER,vy),pt.bindFramebuffer(P.DRAW_FRAMEBUFFER,xy);for(let Me=0;Me<Et;Me++)ws?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ie.__webglTexture,k,Wt+Me):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ie.__webglTexture,k),ve?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ua.__webglTexture,_t,Pe+Me):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ua.__webglTexture,_t),k!==0?P.blitFramebuffer(Tt,zt,Mt,gt,At,pe,Mt,gt,P.COLOR_BUFFER_BIT,P.NEAREST):ve?P.copyTexSubImage3D(St,_t,At,pe,Pe+Me,Tt,zt,Mt,gt):P.copyTexSubImage2D(St,_t,At,pe,Tt,zt,Mt,gt);pt.bindFramebuffer(P.READ_FRAMEBUFFER,null),pt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ve?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(St,_t,At,pe,Pe,Mt,gt,Et,_e,ln,Ne.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(St,_t,At,pe,Pe,Mt,gt,Et,_e,Ne.data):P.texSubImage3D(St,_t,At,pe,Pe,Mt,gt,Et,_e,ln,Ne):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,_t,At,pe,Mt,gt,_e,ln,Ne.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,_t,At,pe,Ne.width,Ne.height,_e,Ne.data):P.texSubImage2D(P.TEXTURE_2D,_t,At,pe,Mt,gt,_e,ln,Ne);pt.pixelStorei(P.UNPACK_ROW_LENGTH,wn),pt.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ee),pt.pixelStorei(P.UNPACK_SKIP_PIXELS,kn),pt.pixelStorei(P.UNPACK_SKIP_ROWS,hi),pt.pixelStorei(P.UNPACK_SKIP_IMAGES,ca),_t===0&&F.generateMipmaps&&P.generateMipmap(St),pt.unbindTexture()},this.initRenderTarget=function(E){T.get(E).__webglFramebuffer===void 0&&y.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?y.setTextureCube(E,0):E.isData3DTexture?y.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?y.setTexture2DArray(E,0):y.setTexture2D(E,0),pt.unbindTexture()},this.resetState=function(){q=0,Y=0,B=null,pt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Qt._getUnpackColorSpace()}}function ey(){const e=st.useRef(null);return st.useEffect(()=>{const t=e.current;if(!t)return;const n=new dT,i=new Kn(45,window.innerWidth/window.innerHeight,.1,100);i.position.z=4.2;const a=new DC({alpha:!0,antialias:!0});a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setSize(window.innerWidth,window.innerHeight),a.setClearColor(0,0),t.appendChild(a.domElement);const s=[new Zt(16722474),new Zt(16733491),new Zt(16742973),new Zt(58879),new Zt(3003583),new Zt(1096065),new Zt(3718648)],r=new om(.95,1),o=new ET(new TT(r),new GS({color:s[0],transparent:!0,opacity:.55}));n.add(o);const l=[];for(let M=0;M<3;M++){const g=new Ri(new lm(1.35+M*.28,.012,8,96),new sm({color:s[M%s.length],transparent:!0,opacity:.22-M*.05}));g.rotation.x=Math.PI/2+M*.18,g.rotation.y=M*.4,n.add(g),l.push(g)}let c=0,d=0;const h=o.material,u=new Zt,p=()=>{d+=.0035;const M=Math.floor(d)%s.length,g=(M+1)%s.length,f=d-Math.floor(d);u.copy(s[M]).lerp(s[g],f),h.color.copy(u),l.forEach((m,_)=>{m.rotation.z+=.0018+_*6e-4;const x=m.material,C=(M+_)%s.length,b=(C+1)%s.length;u.copy(s[C]).lerp(s[b],f),x.color.copy(u)}),o.rotation.x+=.0032,o.rotation.y+=.0048,a.render(n,i),c=requestAnimationFrame(p)};p();const v=()=>{const M=window.innerWidth,g=window.innerHeight;i.aspect=M/g,i.updateProjectionMatrix(),a.setSize(M,g)};return window.addEventListener("resize",v),()=>{cancelAnimationFrame(c),window.removeEventListener("resize",v),r.dispose(),o.geometry.dispose(),o.material.dispose(),l.forEach(M=>{M.geometry.dispose(),M.material.dispose()}),a.dispose(),t.removeChild(a.domElement)}},[]),w.jsx("div",{ref:e,className:"jerv-canvas","aria-hidden":"true"})}function NC(e){const t=new Worker(new URL("/GROVEE-STDIO/assets/sd.worker-BwefFosn.js",import.meta.url),{type:"module"});return t.addEventListener("message",n=>{e.onMessage(n.data)}),t}function ao(e,t){e.postMessage(t)}const n0=["What will you create today?","Describe your vision.","Turn words into images.","What scene do you imagine?","Let's bring your idea to life.","Create something unique.","Paint with prompts."],cm=[{id:"giant-moon-ocean",icon:"🌕",labelEn:"Giant moon",promptEn:"A giant moon above the ocean",labelHe:"ירח ענק",promptHe:"ירח ענק מעל האוקיינוס"},{id:"lighthouse-sunset",icon:"🗼",labelEn:"Lighthouse sunset",promptEn:"A lonely lighthouse at sunset",labelHe:"מגדלור בשקיעה",promptHe:"מגדלור בודד בשקיעה"},{id:"castle-floating-island",icon:"🏰",labelEn:"Floating island castle",promptEn:"A castle on a floating island",labelHe:"טירה על אי",promptHe:"טירה על אי מרחף"},{id:"giant-whale-sky",icon:"🐋",labelEn:"Sky whale",promptEn:"A giant whale in the sky",labelHe:"לוויתן בשמיים",promptHe:"לוויתן ענק בשמיים"},{id:"train-snowy-mountains",icon:"🚂",labelEn:"Snowy mountain train",promptEn:"A train crossing snowy mountains",labelHe:"רכבת בהרים",promptHe:"רכבת חוצה הרים מושלגים"},{id:"glowing-city-night",icon:"🌃",labelEn:"Glowing city",promptEn:"A glowing city at night",labelHe:"עיר זוהרת",promptHe:"עיר זוהרת בלילה"},{id:"spaceship-earth",icon:"🚀",labelEn:"Spaceship over Earth",promptEn:"A spaceship above Earth",labelHe:"חללית מעל כדור הארץ",promptHe:"חללית מעל כדור הארץ"},{id:"dragon-castle",icon:"🐉",labelEn:"Dragon over castle",promptEn:"A dragon flying over a castle",labelHe:"דרקון מעל טירה",promptHe:"דרקון עף מעל טירה"},{id:"futuristic-city-sunrise",icon:"🌅",labelEn:"Futuristic sunrise",promptEn:"A futuristic city at sunrise",labelHe:"עיר עתידנית",promptHe:"עיר עתידנית בזריחה"},{id:"jungle-waterfall",icon:"💧",labelEn:"Jungle waterfall",promptEn:"A waterfall in a hidden jungle",labelHe:"מפל בג'ונגל",promptHe:"מפל בג'ונגל נסתר"},{id:"giant-tree-clouds",icon:"🌳",labelEn:"Tree in clouds",promptEn:"A giant tree in the clouds",labelHe:"עץ בעננים",promptHe:"עץ ענק בעננים"},{id:"storm-ship",icon:"⛵",labelEn:"Storm ship",promptEn:"A sailing ship in a storm",labelHe:"ספינה בסערה",promptHe:"ספינת מפרש בסערה"},{id:"forest-portal",icon:"🌀",labelEn:"Forest portal",promptEn:"A mysterious portal in the forest",labelHe:"פורטל ביער",promptHe:"פורטל מסתורי ביער"},{id:"desert-robot",icon:"🤖",labelEn:"Desert robot",promptEn:"A robot walking in the desert",labelHe:"רובוט במדבר",promptHe:"רובוט הולך במדבר"},{id:"neon-street-rain",icon:"🌆",labelEn:"Neon after rain",promptEn:"A neon street after rain",labelHe:"רחוב ניאון",promptHe:"רחוב ניאון אחרי גשם"},{id:"cliff-house",icon:"🏠",labelEn:"Cliff house",promptEn:"A house on a mountain cliff",labelHe:"בית על צוק",promptHe:"בית על צוק הר"},{id:"crystal-cave",icon:"💎",labelEn:"Crystal cave",promptEn:"A crystal cave underground",labelHe:"מערת קריסטלים",promptHe:"מערת קריסטלים מתחת לאדמה"},{id:"giant-planet-sky",icon:"🪐",labelEn:"Giant planet",promptEn:"A giant planet in the sky",labelHe:"כוכב ענק",promptHe:"כוכב לכת ענק בשמיים"},{id:"peaceful-lake-dawn",icon:"🏞️",labelEn:"Lake at dawn",promptEn:"A peaceful lake at dawn",labelHe:"אגם בשחר",promptHe:"אגם שקט בשחר"},{id:"flying-island-clouds",icon:"☁️",labelEn:"Flying island",promptEn:"A flying island above the clouds",labelHe:"אי מעופף",promptHe:"אי מעופף מעל העננים"}];cm.map(e=>um(e,"en"));function um(e,t){return t==="he"?{id:e.id,icon:e.icon,label:e.labelHe,prompt:e.promptHe}:{id:e.id,icon:e.icon,label:e.labelEn,prompt:e.promptEn}}function i0(e="en"){return cm.map(t=>um(t,e))}function UC(e,t){const n=cm.find(i=>i.id===e);return n?um(n,t):void 0}const LC=11e3,ny=90,OC=520,PC=620;function IC(e=3){return OC+ny*Math.max(0,e-1)}function BC(e=3){return PC+ny*Math.max(0,e-1)}function Xh(e=3,t=[],n="en"){const i=new Set(t);let a=i0(n).filter(o=>!i.has(o.id));a.length<e&&(a=i0(n));const s=[],r=[...a];for(;s.length<e&&r.length>0;){const o=Math.floor(Math.random()*r.length);s.push(r[o]),r.splice(o,1)}return s}function FC(e=n0,t="en"){const n=e.length?e:n0;return{headline:n[Math.floor(Math.random()*n.length)],suggestions:Xh(3,[],t)}}const zC=!0,HC="sd15",la={sd15:{hfId:"ehristoforu/stable-diffusion-v1-5-tiny",estimatedBytes:2064947141,label:"Stable Diffusion 1.5",shortLabel:"SD 1.5",resolution:"512×512"}};function GC(e){return la.sd15.estimatedBytes}function VC(e,t){return e==="start"||e==="loading"&&t===0}function kC(e,t){return e==="loading"&&t.length>0}const Wo="blurry, low quality, distorted, deformed, ugly, bad anatomy, extra limbs, watermark, text, logo, cartoon, sketch, flat colors",XC={photoreal:"photorealistic, professional photography, natural lighting, high detail, sharp focus, realistic textures",portrait:"cinematic portrait, soft studio lighting, shallow depth of field, natural skin texture, expressive eyes",product:"commercial product photography, studio lighting, clean background, accurate shadows, crisp details",landscape:"landscape photography, golden hour light, atmospheric depth, vivid natural colors, wide composition",anime:"anime illustration, clean line art, vibrant colors, detailed background, studio ghibli inspired"},WC={photoreal:"cartoon, illustration, painting, 3d render, plastic skin, oversaturated",portrait:"bad face, asymmetrical eyes, crossed eyes, extra teeth, plastic skin, deformed hands",product:"cluttered background, wrong shadows, floating object, messy composition",landscape:"flat lighting, dull colors, horizon tilt, oversharpened",anime:"3d render, realistic photo, western cartoon, photorealistic"},jC="photorealistic, high detail, sharp focus, professional quality, natural lighting";function qC(e){return e.trim().split(/\s+/).filter(Boolean).length<8||e.trim().length<40}function YC(e,t,n="photoreal"){const i=e.trim();if(!i)return{prompt:"",negativePrompt:""};const a=[i];n!=="none"?a.push(XC[n]):qC(i)&&a.push(jC);const s=[];return t.trim()&&s.push(t.trim()),n!=="none"&&s.push(WC[n]),{prompt:a.join(", "),negativePrompt:s.join(", ")}}function ZC(e,t,n){return YC(e,n,t.style)}const KC=/[\u0590-\u05FF]/;function QC(e){return KC.test(e)}async function a0(e){const t=e.trim();if(!t||!QC(t))return t;try{const n=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(t)}`,i=await fetch(n);return i.ok&&((await i.json())[0]??[]).map(r=>(r==null?void 0:r[0])??"").join("").trim()||t}catch{return t}}async function JC(e,t){const[n,i]=await Promise.all([a0(e),a0(t)]);return{positive:n,negative:i}}const s0="A stunning princess from Kabul in red and white traditional clothing, blue eyes, brown hair, soft natural lighting, photorealistic portrait, high detail, sharp focus",Ql={numInferenceSteps:20,guidanceScale:7.5,height:512,width:512},Co={guidanceScale:Ql.guidanceScale,numInferenceSteps:Ql.numInferenceSteps,height:Ql.height,width:Ql.width,style:"photoreal"},ho="janusgrove-settings-",Wh="janusgrove-negative-prompt",$C=[`${ho}sd15`,`${ho}sana`,`${ho}flux`,`${ho}janus`];function iy(e){return`${ho}${e}`}function Jl(e,t,n){return Math.min(n,Math.max(t,e))}function t2(){if(typeof localStorage>"u")return Wo;for(const e of $C)try{const t=localStorage.getItem(e);if(!t)continue;const n=JSON.parse(t);if(typeof n.negativePrompt=="string")return n.negativePrompt}catch{}return Wo}function e2(){if(typeof localStorage>"u")return Wo;try{const e=localStorage.getItem(Wh);if(e!==null)return e;const t=t2();return localStorage.setItem(Wh,t),t}catch{return Wo}}function n2(e){typeof localStorage>"u"||localStorage.setItem(Wh,e)}function ay(e){const t=Co;if(!e)return{...t};const n=Jl(Math.round(Number(e.height??t.height)),256,768),i=Jl(Math.round(Number(e.width??t.width)),256,768);return{guidanceScale:Jl(Number(e.guidanceScale??t.guidanceScale),1,20),numInferenceSteps:Jl(Math.round(Number(e.numInferenceSteps??t.numInferenceSteps)),5,50),height:n-n%64,width:i-i%64,style:e.style??t.style}}function $f(e){if(typeof localStorage>"u")return{...Co};try{const t=localStorage.getItem(iy(e));return t?ay(JSON.parse(t)):{...Co}}catch{return{...Co}}}function i2(e,t){typeof localStorage>"u"||localStorage.setItem(iy(e),JSON.stringify(ay(t)))}function a2(e){return{numInferenceSteps:e.numInferenceSteps,guidanceScale:e.guidanceScale,height:e.height,width:e.width}}function s2(e){return`CFG ${e.guidanceScale.toFixed(1)} · ${e.numInferenceSteps} steps`}const Ur="GROVEE STDIO",fm="grovee-stdio",sy="grovee-stdio-locale",r2={he:{app:{tagline:"SD 1.5 // מנוע דפדפן",mark:"GE"},intro:{typewriter:["מערכת מוכנה להפעלה...","טוען מנוע יצירת תמונות...","אני ממתין להוראותיך.","SD 1.5 · WebGPU · ללא התקנה"],webgpuWarn:"WebGPU לא זוהה — WASM עלול להיות איטי.",modelMeta:"512×512 · WebGPU · נשמר ב-cache אחרי טעינה ראשונה",initialize:"אתחול מודל",initializeAlt:"לחצו עלי",standby:"> המתנה",firstLoadNote:"הכל רץ בדפדפן — ללא התקנה. טעינה ראשונה בלבד (~2GB ל-cache). ביקור חוזר: שניות."},topBar:{browserStudio:"סטודיו דפדפן",webgpuOn:"WebGPU",webgpuOff:"WASM",langHe:"עב",langEn:"EN"},studio:{memoryOk:"זיכרון",model:"מודל",enterPrompt:"הזן תיאור",promptPlaceholder:"תיאור תמונה…",generate:"יצירה",stop:"עצור",settings:"הגדרות",generating:"מייצר…",scale:"גודל",sdUnavailable:"SD לא זמין",quickPrompts:"הצעות מהירות",headlines:["מה תיצור היום?","תאר את החזון שלך.","הפוך מילים לתמונות.","איזה סצנה אתה מדמיין?","בוא נהפוך רעיון למציאות.","צור משהו ייחודי.","צייר עם מילים."]},settings:{title:"Stable Diffusion 1.5",subtitle:"הגדרות יצירה",close:"סגור הגדרות",modelId:"מזהה מודל",device:"מכשיר",resolution:"רזולוציה",cfg:"Guidance scale (CFG)",steps:"שלבי הסקה",stepsHint:"5–50 שלבים (מתוך לוח זמנים SD 1.5)",negativeNote:"SD 1.5 משתמש ב-negative_prompt נפרד.",stylePreset:"סגנון",negativePrompt:"פרומפט שלילי",negativeHint:"משותף לכל היצירות. נקה לביטול מותאם. סגנון עשוי להוסיף מונחים אלא אם נבחר None.",negativePlaceholder:"מונחים שליליים אופציונליים…",clearNegative:"נקה שלילי",resetNegative:"איפוס לברירת מחדל",resetAll:"איפוס הכל לברירת מחדל",styles:{photoreal:"פוטו",none:"ללא",portrait:"דיוקן",landscape:"נוף",product:"מוצר",anime:"אנימה"}},gallery:{title:"גלריית פלט",save:"שמור",copy:"העתק",rerun:"שוב",del:"מחק",ariaLabel:"תמונות שנוצרו",prev:"תמונות קודמות",next:"תמונות הבאות",openImage:"הצג תמונה בגדול",close:"סגור",lightboxTitle:"תצוגת תמונה",shareTitle:"שיתוף",shareNative:"שיתוף מערכת",shareCopyImage:"העתק תמונה"},generating:{title:"מעבד",steps:"שלבים"},status:{readyToLoad:"מוכן לטעינת SD 1.5",preparingDownload:"מכין הורדה…",modelReady:"SD 1.5 מוכן — הסטודיו פתוח",generating:"מייצר…",imageReady:"התמונה מוכנה",stopped:"היצירה הופסקה",notLoaded:"SD 1.5 עדיין לא נטען",compiling:"SD 1.5: קומפילציה ב-WebGPU (2–5 דק׳)…",downloading:"SD 1.5: מוריד"},errors:{sdUnavailable:"SD 1.5 דורש WebGPU או WASM. השתמש ב-Chrome/Edge 113+ עם WebGPU."}},en:{app:{tagline:"SD 1.5 // BROWSER ENGINE",mark:"GE"},intro:{typewriter:["System ready for initialization...","Loading image generation engine...","Awaiting your instructions.","SD 1.5 · WebGPU · browser only"],webgpuWarn:"WebGPU not detected — WASM fallback may be slower.",modelMeta:"512×512 · WebGPU · cached after first load",initialize:"INITIALIZE MODEL",initializeAlt:"PRESS ON ME",standby:"> STANDBY",firstLoadNote:"Runs in browser — no install. First load only (~2GB to cache). Return visits: seconds."},topBar:{browserStudio:"BROWSER STUDIO",webgpuOn:"WebGPU",webgpuOff:"WASM",langHe:"עב",langEn:"EN"},studio:{memoryOk:"MEMORY",model:"MODEL",enterPrompt:"ENTER PROMPT",promptPlaceholder:"Describe your image…",generate:"Generate",stop:"STOP",settings:"Settings",generating:"GENERATING…",scale:"SCALE",sdUnavailable:"SD UNAVAILABLE",quickPrompts:"QUICK PROMPTS",headlines:["What will you create today?","Describe your vision.","Turn words into images.","What scene do you imagine?","Let's bring your idea to life.","Create something unique.","Paint with prompts."]},settings:{title:"Stable Diffusion 1.5",subtitle:"Generation settings",close:"Close settings",modelId:"Model ID",device:"Device",resolution:"Resolution",cfg:"Guidance scale (CFG)",steps:"Inference steps",stepsHint:"5–50 steps (subsampled from SD 1.5 schedule)",negativeNote:"SD 1.5 uses native negative_prompt (separate channel).",stylePreset:"Style preset",negativePrompt:"Negative prompt",negativeHint:"Shared preset for all generations. Clear to disable custom terms. Style may still add terms unless set to None.",negativePlaceholder:"Optional custom negative terms…",clearNegative:"Clear negative",resetNegative:"Reset to recommended defaults",resetAll:"Reset all to recommended defaults",styles:{photoreal:"Photoreal",none:"None",portrait:"Portrait",landscape:"Landscape",product:"Product",anime:"Anime"}},gallery:{title:"OUTPUT BUFFER",save:"SAVE",copy:"COPY",rerun:"RE-RUN",del:"DEL",ariaLabel:"Generated images",prev:"Previous images",next:"Next images",openImage:"View full image",close:"Close",lightboxTitle:"Image preview",shareTitle:"Share",shareNative:"System share",shareCopyImage:"Copy image"},generating:{title:"RENDERING",steps:"steps"},status:{readyToLoad:"Ready to load SD 1.5",preparingDownload:"Preparing download…",modelReady:"SD 1.5 ready — studio open",generating:"Generating…",imageReady:"Image ready",stopped:"Generation stopped",notLoaded:"SD 1.5 is not loaded yet",compiling:"SD 1.5: compiling on WebGPU (2–5 min)…",downloading:"SD 1.5: downloading"},errors:{sdUnavailable:"SD 1.5 requires WebGPU or WASM. Use Chrome/Edge 113+ with WebGPU enabled."}}};function o2(){try{const e=localStorage.getItem(sy);if(e==="he"||e==="en")return e}catch{}return"he"}function l2(e){try{localStorage.setItem(sy,e)}catch{}}function c2(e){return e==="he"?"rtl":"ltr"}const ry=st.createContext(null);function u2({children:e}){const[t,n]=st.useState(()=>o2()),i=st.useCallback(r=>{n(r),l2(r)},[]),a=st.useCallback(()=>{i(t==="he"?"en":"he")},[t,i]),s=st.useMemo(()=>({locale:t,dir:c2(t),t:r2[t],setLocale:i,toggleLocale:a}),[t,i,a]);return w.jsx(ry.Provider,{value:s,children:e})}function Cn(){const e=st.useContext(ry);if(!e)throw new Error("useLocale must be used within LocaleProvider");return e}function f2(e=3200){const{t}=Cn(),n=t.intro.typewriter,[i,a]=st.useState(0),[s,r]=st.useState(""),[o,l]=st.useState(!1);return st.useEffect(()=>{a(0),r(""),l(!1)},[n]),st.useEffect(()=>{const c=n[i%n.length]??"",d=s===c,h=o&&s==="";let u=o?28:42;d&&!o&&(u=e),h&&(u=400);const p=window.setTimeout(()=>{if(d&&!o){l(!0);return}if(h){l(!1),a(v=>(v+1)%n.length);return}r(o?c.slice(0,Math.max(0,s.length-1)):c.slice(0,s.length+1))},u);return()=>window.clearTimeout(p)},[s,o,i,n,e]),s}function jh(e){if(!Number.isFinite(e)||e<=0)return"0 B";const t=["B","KB","MB","GB"];let n=e,i=0;for(;n>=1024&&i<t.length-1;)n/=1024,i+=1;return`${n<10&&i>0?n.toFixed(1):Math.round(n)} ${t[i]}`}function d2(e){return!Number.isFinite(e)||e<512?"—":`${jh(e)}/s`}const qh=54,td=2*Math.PI*qh;function h2({percent:e,size:t=140,label:n,indeterminate:i=!1}){const a=Math.min(100,Math.max(0,e)),s=td*(1-a/100);return w.jsxs("div",{className:`hal-ring${i?" hal-ring--indeterminate":""}`,style:{width:t,height:t},"data-testid":"download-ring","aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":100,role:"progressbar",children:[w.jsxs("svg",{viewBox:"0 0 120 120","aria-hidden":"true",children:[w.jsx("circle",{className:"hal-ring__track",cx:"60",cy:"60",r:qh}),w.jsx("circle",{className:"hal-ring__fill",cx:"60",cy:"60",r:qh,strokeDasharray:td,strokeDashoffset:i?td*.72:s})]}),w.jsxs("div",{className:"hal-ring__center",dir:"ltr",children:[w.jsx("span",{className:"hal-ring__pct",children:i?"…":`${Math.round(a)}%`}),n?w.jsx("span",{className:"hal-ring__label",children:n}):null]})]})}const r0="  ◆  ";function p2(){const{t:e,dir:t}=Cn(),i=`${la.sd15.label} · ${e.intro.modelMeta}`,s=`${[e.intro.firstLoadNote,i].join(r0)}${r0}`;return w.jsxs("footer",{className:"intro-marquee-footer","data-testid":"intro-marquee-footer",dir:t,"aria-label":`${e.intro.firstLoadNote}. ${i}`,children:[w.jsx("div",{className:"intro-marquee-footer__edge intro-marquee-footer__edge--start","aria-hidden":"true"}),w.jsx("div",{className:"intro-marquee-footer__viewport",children:w.jsxs("div",{className:`intro-marquee-footer__track${t==="rtl"?" intro-marquee-footer__track--rtl":""}`,children:[w.jsx("span",{className:"intro-marquee-footer__text","data-testid":"model-sd15",children:s}),w.jsx("span",{className:"intro-marquee-footer__text","aria-hidden":"true",children:s})]})}),w.jsx("div",{className:"intro-marquee-footer__edge intro-marquee-footer__edge--end","aria-hidden":"true"})]})}function oy({variant:e="compact"}){const{locale:t,t:n,setLocale:i}=Cn();return e==="premium"?w.jsxs("div",{className:"intro-topbar__lang","data-active":t,role:"group","aria-label":"Language",children:[w.jsx("span",{className:"intro-topbar__lang-thumb","aria-hidden":"true"}),w.jsx("button",{type:"button",className:`intro-topbar__lang-btn ${t==="he"?"active":""}`,onClick:()=>i("he"),"aria-pressed":t==="he",children:n.topBar.langHe}),w.jsx("button",{type:"button",className:`intro-topbar__lang-btn ${t==="en"?"active":""}`,onClick:()=>i("en"),"aria-pressed":t==="en",children:n.topBar.langEn})]}):w.jsxs("div",{className:"lang-toggle",role:"group","aria-label":"Language",children:[w.jsx("button",{type:"button",className:`lang-toggle__btn ${t==="he"?"active":""}`,onClick:()=>i("he"),"aria-pressed":t==="he",children:n.topBar.langHe}),w.jsx("button",{type:"button",className:`lang-toggle__btn ${t==="en"?"active":""}`,onClick:()=>i("en"),"aria-pressed":t==="en",children:n.topBar.langEn})]})}function m2({webgpu:e}){const{t,dir:n}=Cn();return w.jsxs("header",{className:"intro-topbar","data-testid":"intro-topbar",dir:n,children:[w.jsx("div",{className:"intro-topbar__zone intro-topbar__zone--brand",children:w.jsxs("div",{className:"intro-topbar__brand",children:[w.jsx("span",{className:"intro-topbar__mark","aria-hidden":"true",children:w.jsx("span",{className:"intro-topbar__mark-core",children:t.app.mark})}),w.jsx("span",{className:"intro-topbar__name",dir:"ltr",children:Ur})]})}),w.jsx("div",{className:"intro-topbar__zone intro-topbar__zone--hud",children:w.jsxs("div",{className:"intro-topbar__hud",dir:"ltr","aria-label":"System status",children:[w.jsx("span",{className:"intro-topbar__hud-cap intro-topbar__hud-cap--start","aria-hidden":"true"}),w.jsxs("div",{className:`intro-topbar__node ${e?"intro-topbar__node--live":""}`,children:[w.jsx("span",{className:"intro-topbar__node-dot","aria-hidden":"true"}),w.jsx("span",{className:"intro-topbar__node-label",children:e?t.topBar.webgpuOn:t.topBar.webgpuOff})]}),w.jsx("span",{className:"intro-topbar__hud-sep","aria-hidden":"true"}),w.jsx("div",{className:"intro-topbar__node intro-topbar__node--accent",children:w.jsx("span",{className:"intro-topbar__node-label",children:t.topBar.browserStudio})}),w.jsx("span",{className:"intro-topbar__hud-sep","aria-hidden":"true"}),w.jsx("div",{className:"intro-topbar__node intro-topbar__node--dim",children:w.jsx("span",{className:"intro-topbar__node-label",children:"SD 1.5"})}),w.jsx("span",{className:"intro-topbar__hud-cap intro-topbar__hud-cap--end","aria-hidden":"true"})]})}),w.jsx("div",{className:"intro-topbar__zone intro-topbar__zone--lang",children:w.jsx(oy,{variant:"premium"})})]})}const g2=["https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/a3a3965e4fabd0cf744c37df37f79ccddc4e825648d42e2b737fe627a5e97c68.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/47c3c15382e94ea71f08c76fe4ead909a7c399df8ab9b93a3560114454c6e1de.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/7807b28d6bb324e27095c8ee7ed3e51157f4201dcd31709839c84011430cc078.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/5e33ff4597345c34fa96b63f4871e73b146a880943608ca1757158f3d1a5c71a.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/0ba4f4f5f0351bbc11e69d627b47471b37844c0e0b50debdae67b9d8c7ebc640.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/f36919370a6e4ffb31c5a9e184f360f912fba8d7e6ed03daade9e40cb566223b.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/bb2ab3a3410ce91a5425ab2c8b4cbd56335894c07537ee5258e61db0b354fd9d.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/58c9db2329620a7045503ededebbd3aca6552d68992516af93be48147cd26bf6.png"],ly=10,_2=5;function v2(){const e=[],t=[];return g2.forEach((n,i)=>{i%2===0?e.push(n):t.push(n)}),{left:e,right:t}}function x2(e){return e*ly}function o0({side:e,urls:t,phaseOffsetSec:n}){const i=x2(t.length);return w.jsx("div",{className:`loading-holo-gallery__side loading-holo-gallery__side--${e}`,"aria-hidden":"true",children:w.jsx("div",{className:"loading-holo-gallery__slot",children:t.map((a,s)=>{const r=n+s*ly;return w.jsxs("div",{className:"loading-holo-gallery__frame",style:{animationDuration:`${i}s`,animationDelay:`${r}s`,"--holo-delay":`${r}s`,"--holo-duration":`${i}s`},children:[w.jsx("img",{className:"loading-holo-gallery__img",src:a,alt:"",loading:"eager",decoding:"async"}),w.jsx("span",{className:"loading-holo-gallery__glow"})]},a)})})})}function S2(){const{left:e,right:t}=v2();return w.jsxs("div",{className:"loading-holo-gallery","data-testid":"loading-holo-gallery",children:[w.jsx(o0,{side:"left",urls:e,phaseOffsetSec:0}),w.jsx(o0,{side:"right",urls:t,phaseOffsetSec:_2})]})}function y2({phase:e,modelProgress:t,aggregateProgress:n,aggregateLoaded:i,aggregateTotal:a,downloadSpeed:s,status:r,webgpu:o,onLoad:l}){const{t:c,dir:d}=Cn(),h=la.sd15,u=t.sd15,p=a>0?a:h.estimatedBytes,v=Math.min(100,Math.max(0,Math.round(n))),M=i>0,g=e==="loading"&&!M,f=(u==null?void 0:u.compiling)===!0,m=f2(),[_,x]=st.useState([c.intro.standby]),[C,b]=st.useState(!1),R=st.useRef("");st.useEffect(()=>{x([c.intro.standby]),R.current=""},[c.intro.standby]),st.useEffect(()=>{b(!1)},[c.intro.initialize,c.intro.initializeAlt]),st.useEffect(()=>{if(e!=="start")return;const A=window.setInterval(()=>{b(D=>!D)},2800);return()=>window.clearInterval(A)},[e]);const S=st.useMemo(()=>f?`> COMPILE: ${(u==null?void 0:u.currentFile)||"UNet"}…`:u!=null&&u.currentFile?`> FETCH: ${u.currentFile}`:r?`> ${r.toUpperCase()}`:c.intro.standby,[f,u==null?void 0:u.currentFile,r,c.intro.standby]);return st.useEffect(()=>{e!=="loading"||S===R.current||(R.current=S,x(A=>[...A,S].slice(-3)))},[e,S]),w.jsxs("div",{className:"intro-screen hal-landing","data-testid":"intro-screen","data-phase":e,"aria-busy":e==="loading",dir:d,children:[w.jsx(ey,{}),w.jsx(S2,{}),w.jsx("div",{className:"scanlines","aria-hidden":"true"}),w.jsx(m2,{webgpu:o}),w.jsxs("div",{className:"hal-landing__content",children:[w.jsxs("header",{className:"hal-landing__header",children:[w.jsx("p",{className:"hal-landing__eyebrow",dir:"ltr",children:c.app.tagline}),w.jsx("h1",{className:"hal-landing__title",dir:"ltr",children:Ur}),w.jsxs("p",{className:"hal-landing__typewriter","aria-live":"polite",children:[m,w.jsx("span",{className:"hal-cursor","aria-hidden":"true",children:"▌"})]})]}),o?null:w.jsx("p",{className:"hal-warn",role:"alert",children:c.intro.webgpuWarn}),e==="start"?w.jsx("div",{className:"hal-landing__start",children:w.jsxs("button",{type:"button",className:"btn-hal btn-hal--hero","data-testid":"load-model",onClick:l,"aria-label":`${c.intro.initialize} / ${c.intro.initializeAlt}`,children:[w.jsx("span",{className:"btn-hal__shine","aria-hidden":"true"}),w.jsxs("span",{className:"btn-hal__label","aria-live":"polite",children:[w.jsx("span",{className:`btn-hal__label-text${C?"":" is-visible"}`,children:c.intro.initialize}),w.jsx("span",{className:`btn-hal__label-text btn-hal__label-text--alt${C?" is-visible":""}`,children:c.intro.initializeAlt})]})]})}):w.jsxs("div",{className:"hal-download","data-testid":"download-progress",children:[w.jsx(h2,{percent:u!=null&&u.done?100:v,size:112,indeterminate:g||f,label:f?"COMPILE":h.shortLabel}),w.jsxs("div",{className:"hal-console",dir:"ltr","data-testid":"download-bytes",children:[_.map((A,D)=>w.jsx("div",{className:"hal-console__line",children:A},`${A}-${D}`)),w.jsxs("div",{className:"hal-console__line hal-console__line--meta",children:[jh(i)," / ",jh(p)," · ",d2(s)]})]}),w.jsxs("div",{className:"compact-progress-row hal-download__bar","data-testid":"download-progress-sd15",children:[w.jsx("span",{className:"compact-progress-label",children:h.shortLabel}),w.jsx("div",{className:"compact-progress-track",children:w.jsx("div",{className:`compact-progress-fill${f?" compact-progress-fill--compile":""}`,style:{width:u!=null&&u.done?"100%":`${v}%`}})}),w.jsx("span",{className:"compact-progress-pct",children:u!=null&&u.done?"✓":f?"…":`${v}%`})]})]})]}),w.jsx(p2,{})]})}function M2({deviceLabel:e}){const{t,dir:n}=Cn(),i=la.sd15,a=/webgpu/i.test(e);return w.jsxs("header",{className:"intro-topbar studio-topbar","data-testid":"studio-topbar",dir:n,children:[w.jsxs("div",{className:"studio-topbar__brand",dir:"ltr",children:[w.jsx("span",{className:"studio-topbar__mark","aria-hidden":"true",children:t.app.mark}),w.jsx("span",{className:"studio-topbar__name",children:Ur}),w.jsx("span",{className:"studio-topbar__sep","aria-hidden":"true",children:"//"}),w.jsx("span",{className:"studio-topbar__tagline",children:t.app.tagline})]}),w.jsxs("div",{className:"studio-topbar__stats",dir:"ltr","aria-label":"Studio status",children:[w.jsxs("span",{className:"studio-topbar__stat studio-topbar__stat--live",children:[w.jsx("span",{className:"studio-topbar__dot","aria-hidden":"true"}),t.studio.memoryOk," ",w.jsx("strong",{children:"OK"})]}),w.jsxs("span",{className:"studio-topbar__stat studio-topbar__stat--accent",children:[t.studio.model," ",w.jsx("strong",{children:i.shortLabel})]}),w.jsxs("span",{className:`studio-topbar__stat ${a?"studio-topbar__stat--live":"studio-topbar__stat--dim"}`,children:[a?w.jsx("span",{className:"studio-topbar__dot","aria-hidden":"true"}):null,e||"READY"]})]}),w.jsx(oy,{variant:"premium"})]})}function E2({prompt:e,sdSettings:t,deviceLabel:n,status:i,isGenerating:a,isModelLoaded:s,settingsOpen:r,genProgress:o=0,genTokenCount:l=0,genTokenTotal:c=0,onPromptChange:d,onOpenSettings:h,onGenerate:u,onStop:p}){const{t:v,dir:M}=Cn(),g=e.trim().length>0&&!a&&s&&zC,f=s2(t),m=`${t.width}×${t.height}`,_=Math.round(o*100);return w.jsxs("div",{className:"workspace-header","data-testid":"composer-bar",dir:M,children:[w.jsx(M2,{deviceLabel:n}),w.jsxs("section",{className:"input-terminal",children:[w.jsxs("div",{className:"input-terminal__row",children:[w.jsxs("div",{className:`input-terminal__field-wrap${e.length===0?" is-empty":""}`,children:[e.length===0?w.jsxs("span",{className:"input-terminal__hint","aria-hidden":"true",children:[v.studio.promptPlaceholder,w.jsx("span",{className:"input-terminal__hint-caret"})]}):null,w.jsx("input",{id:"prompt-input",className:"input-terminal__field",type:"text",dir:"auto","aria-label":v.studio.enterPrompt,value:e,onChange:x=>d(x.target.value),onKeyDown:x=>{x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),g&&u())},disabled:a})]}),w.jsxs("div",{className:"input-terminal__actions",children:[w.jsx("button",{type:"button",className:`input-terminal__gear ${r?"active":""}`,"data-testid":"settings-btn","aria-label":v.studio.settings,title:v.studio.settings,onClick:h,disabled:a,children:"⚙"}),a?w.jsx("button",{type:"button",className:"btn-hal btn-hal--small btn-hal--stop",onClick:p,children:v.studio.stop}):w.jsxs("button",{type:"button",className:"btn-hal btn-hal--small btn-hal--play","data-testid":"generate-btn",disabled:!g,onClick:u,"aria-label":v.studio.generate,children:[w.jsx("span",{className:"btn-hal__shine","aria-hidden":"true"}),"▶"]})]})]}),w.jsxs("div",{className:"input-terminal__rail",dir:"ltr","aria-live":"polite",children:[w.jsxs("div",{className:"input-terminal__rail-group input-terminal__rail-group--params",children:[w.jsx("span",{children:f}),w.jsx("span",{className:"input-terminal__rail-dot","aria-hidden":"true",children:"·"}),w.jsx("span",{children:m})]}),w.jsx("div",{className:`input-terminal__rail-group input-terminal__rail-group--runtime${a?" input-terminal__rail-group--active":""}`,"data-testid":a?"inline-gen-progress":void 0,children:a?w.jsxs(w.Fragment,{children:[w.jsx("span",{className:"input-terminal__status",children:v.generating.title}),w.jsx("span",{className:"input-terminal__progress-bar","aria-hidden":"true",children:w.jsx("span",{className:"input-terminal__progress-fill",style:{width:`${_}%`}})}),w.jsxs("span",{className:"input-terminal__progress-pct",children:[_,"%"]}),c>0?w.jsxs("span",{className:"input-terminal__progress-steps",children:[l,"/",c]}):null]}):w.jsx("span",{className:"input-terminal__status",children:i})}),null]})]})]})}const b2=["photoreal","none","portrait","landscape","product","anime"];function l0({label:e,value:t,min:n,max:i,step:a,onChange:s,hint:r}){return w.jsxs("label",{className:"settings-field",children:[w.jsxs("div",{className:"settings-field-head",children:[w.jsx("span",{children:e}),w.jsx("span",{className:"settings-field-value",dir:"ltr",children:a<1?t.toFixed(2):t})]}),w.jsx("input",{type:"range",dir:"ltr",min:n,max:i,step:a,value:t,onChange:o=>s(Number(o.target.value))}),r?w.jsx("span",{className:"settings-field-hint",children:r}):null]})}function T2({open:e,deviceLabel:t,globalNegativePrompt:n,sdSettings:i,onClose:a,onGlobalNegativeChange:s,onSdChange:r}){const{t:o,dir:l}=Cn();if(!e)return null;const c=la.sd15;return w.jsx("div",{className:"settings-overlay",role:"presentation",onClick:a,children:w.jsxs("aside",{className:"settings-panel",dir:l,role:"dialog","aria-labelledby":"settings-title","aria-modal":"true",onClick:d=>d.stopPropagation(),"data-testid":"settings-panel",children:[w.jsxs("header",{className:"settings-header",children:[w.jsxs("div",{children:[w.jsx("h2",{id:"settings-title",children:o.settings.title}),w.jsx("p",{className:"settings-subtitle",children:o.settings.subtitle})]}),w.jsx("button",{type:"button",className:"settings-close",onClick:a,"aria-label":o.settings.close,children:"×"})]}),w.jsxs("div",{className:"settings-readonly",dir:"ltr",children:[w.jsxs("div",{children:[w.jsx("span",{className:"settings-readonly-label",children:o.settings.modelId}),w.jsx("span",{children:c.hfId})]}),w.jsxs("div",{children:[w.jsx("span",{className:"settings-readonly-label",children:o.settings.device}),w.jsx("span",{children:t||"—"})]}),w.jsxs("div",{children:[w.jsx("span",{className:"settings-readonly-label",children:o.settings.resolution}),w.jsx("span",{children:c.resolution})]})]}),w.jsxs(w.Fragment,{children:[w.jsxs("div",{className:"settings-body",children:[w.jsx(l0,{label:o.settings.cfg,value:i.guidanceScale,min:1,max:20,step:.5,onChange:d=>r(h=>({...h,guidanceScale:d}))}),w.jsx(l0,{label:o.settings.steps,value:i.numInferenceSteps,min:5,max:50,step:1,onChange:d=>r(h=>({...h,numInferenceSteps:Math.round(d)})),hint:o.settings.stepsHint}),w.jsx("p",{className:"settings-note",children:o.settings.negativeNote})]}),w.jsxs("div",{className:"settings-shared",children:[w.jsx("div",{className:"style-chips",role:"group","aria-label":o.settings.stylePreset,children:b2.map(d=>w.jsx("button",{type:"button",className:`style-chip ${i.style===d?"active":""}`,onClick:()=>r(h=>({...h,style:d})),children:o.settings.styles[d]},d))}),w.jsxs("label",{className:"settings-field",children:[w.jsx("span",{children:o.settings.negativePrompt}),w.jsx("p",{className:"settings-field-hint",children:o.settings.negativeHint}),w.jsx("textarea",{className:"negative-textarea",dir:"auto",rows:4,placeholder:o.settings.negativePlaceholder,value:n,onChange:d=>s(d.target.value)})]}),w.jsxs("div",{className:"settings-negative-actions",children:[w.jsx("button",{type:"button",className:"text-btn",onClick:()=>s(""),children:o.settings.clearNegative}),w.jsx("button",{type:"button",className:"text-btn",onClick:()=>s(Wo),children:o.settings.resetNegative})]})]}),w.jsx("footer",{className:"settings-footer",children:w.jsx("button",{type:"button",className:"text-btn",onClick:()=>r({...Co}),children:o.settings.resetAll})})]})]})})}function A2({headline:e}){const{dir:t}=Cn();return w.jsx("div",{className:"studio-empty-hero",dir:t,children:w.jsx("h1",{className:"studio-empty-hero__headline",children:e})})}const $l=3;function R2(e,t){const[n,i]=st.useState(()=>t??Xh($l,[],e)),[a,s]=st.useState("idle"),r=st.useRef(n),o=st.useRef(a),l=st.useRef(null);r.current=n,o.current=a;const c=st.useCallback(()=>{if(o.current!=="idle")return;const d=r.current;s("exit"),window.setTimeout(()=>{i(Xh($l,d.map(h=>h.id),e)),s("enter"),window.setTimeout(()=>s("idle"),BC($l))},IC($l))},[e]);return st.useEffect(()=>{i(d=>d.map(h=>UC(h.id,e)??h))},[e]),st.useEffect(()=>{const d=()=>{l.current=window.setTimeout(()=>{c(),d()},LC)};return d(),()=>{l.current!==null&&window.clearTimeout(l.current)}},[c]),{suggestions:n,animPhase:a}}function C2({initialSuggestions:e,onPick:t,disabled:n=!1}){const{t:i,dir:a,locale:s}=Cn(),{suggestions:r,animPhase:o}=R2(s,e);return w.jsx("footer",{className:"studio-footer","data-testid":"studio-footer",dir:a,"aria-label":i.studio.quickPrompts,children:w.jsxs("div",{className:"studio-footer__board",children:[w.jsx("div",{className:"studio-footer__zones","data-phase":o,"aria-live":"polite","aria-atomic":"true",children:r.map((l,c)=>w.jsx("div",{className:"studio-footer__zone","data-slot":c+1,children:w.jsxs("button",{type:"button",className:"studio-footer__suggestion",onClick:()=>t(l.prompt),title:l.prompt,disabled:n||o!=="idle",children:[w.jsx("span",{className:"studio-footer__suggestion-icon","aria-hidden":"true",children:l.icon}),w.jsx("span",{className:"studio-footer__suggestion-label",dir:s==="he"?"rtl":"ltr",children:l.label})]})},l.id))}),w.jsx("span",{className:"studio-footer__tag",children:i.studio.quickPrompts})]})})}const su=3;function cy(e){return e<=0?0:Math.ceil(e/su)}function ed(e,t){const n=t*su;return e.slice(n,n+su)}function c0(e,t){const n=cy(t);return n===0?0:Math.max(0,Math.min(e,n-1))}const ru="https://theicd.github.io/GROVEE-STDIO/";async function uy(e){return(await fetch(e.imageUrl)).blob()}async function w2(e){const t=await uy(e),n=t.type||"image/png";return new File([t],`${fm}-${e.id}.png`,{type:n})}function fy(e){return`${e.prompt}

— ${Ur}
${ru}`}async function D2(e){if(!navigator.share)return!1;try{const t=await w2(e),n={title:Ur,text:e.prompt,files:[t]};return navigator.canShare&&!navigator.canShare(n)?(await navigator.share({title:Ur,text:fy(e),url:ru}),!0):(await navigator.share(n),!0)}catch(t){return t instanceof DOMException&&t.name==="AbortError"}}function N2(e,t){const n=fy(t),i=encodeURIComponent(n),a=encodeURIComponent(ru);switch(e){case"whatsapp":return`https://wa.me/?text=${i}`;case"telegram":return`https://t.me/share/url?url=${a}&text=${encodeURIComponent(t.prompt)}`;case"twitter":return`https://twitter.com/intent/tweet?text=${i}`;case"facebook":return`https://www.facebook.com/sharer/sharer.php?u=${a}&quote=${encodeURIComponent(t.prompt)}`;case"linkedin":return`https://www.linkedin.com/sharing/share-offsite/?url=${a}`;default:return ru}}async function U2(e){await navigator.clipboard.writeText(e.prompt)}async function L2(e){var t;try{const n=await uy(e);return(t=navigator.clipboard)!=null&&t.write?(await navigator.clipboard.write([new ClipboardItem({[n.type]:n})]),!0):!1}catch{return!1}}function nd(e){const t=document.createElement("a");t.href=e.imageUrl,t.download=`${fm}-${e.id}.png`,t.click()}const O2=["native","whatsapp","telegram","twitter","facebook","linkedin"],P2=["copyImage","copyPrompt","download"];function I2({item:e,onClose:t}){const{t:n}=Cn(),i=la.sd15;st.useEffect(()=>{const r=l=>{l.key==="Escape"&&t()};window.addEventListener("keydown",r);const o=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",r),document.body.style.overflow=o}},[t]);const a=r=>({native:n.gallery.shareNative,whatsapp:"WhatsApp",telegram:"Telegram",twitter:"X",facebook:"Facebook",linkedin:"LinkedIn",copyImage:n.gallery.shareCopyImage,copyPrompt:n.gallery.copy,download:n.gallery.save})[r],s=async r=>{if(r==="native"){await D2(e)||nd(e);return}if(r==="copyImage"){await L2(e)||nd(e);return}if(r==="copyPrompt"){await U2(e);return}if(r==="download"){nd(e);return}window.open(N2(r,e),"_blank","noopener,noreferrer,width=600,height=520")};return w0.createPortal(w.jsxs("div",{className:"gallery-lightbox",role:"dialog","aria-modal":"true","aria-label":n.gallery.lightboxTitle,children:[w.jsx("button",{type:"button",className:"gallery-lightbox__backdrop","aria-label":n.gallery.close,onClick:t}),w.jsx("article",{className:"gallery-lightbox__card",children:w.jsxs("div",{className:"gallery-lightbox__visual",style:{aspectRatio:`${e.width} / ${e.height}`,"--lb-ar":String(e.width/e.height)},children:[w.jsx("img",{className:"gallery-lightbox__image",src:e.imageUrl,alt:e.prompt,"data-testid":"gallery-lightbox-image"}),w.jsx("button",{type:"button",className:"gallery-lightbox__close",onClick:t,"aria-label":n.gallery.close,children:"×"}),w.jsxs("span",{className:"gallery-lightbox__meta",dir:"ltr",children:[i.shortLabel," · ",e.width,"×",e.height," · ",(e.durationMs/1e3).toFixed(1),"s"]}),w.jsxs("div",{className:"gallery-lightbox__toolbar",children:[w.jsx("p",{className:"gallery-lightbox__prompt",dir:"auto",children:e.prompt}),w.jsxs("nav",{className:"gallery-lightbox__actions","aria-label":n.gallery.shareTitle,children:[w.jsx("div",{className:"gallery-lightbox__row gallery-lightbox__row--social",children:O2.map((r,o)=>w.jsxs("span",{className:"gallery-lightbox__action-wrap",children:[o>0?w.jsx("span",{className:"gallery-lightbox__sep","aria-hidden":"true",children:"·"}):null,w.jsx("button",{type:"button",className:"gallery-lightbox__action",onClick:()=>void s(r),children:a(r)})]},r))}),w.jsx("div",{className:"gallery-lightbox__row gallery-lightbox__row--tools",children:P2.map((r,o)=>w.jsxs("span",{className:"gallery-lightbox__action-wrap",children:[o>0?w.jsx("span",{className:"gallery-lightbox__sep","aria-hidden":"true",children:"·"}):null,w.jsx("button",{type:"button",className:`gallery-lightbox__action${r==="download"?" gallery-lightbox__action--accent":""}`,onClick:()=>void s(r),children:a(r)})]},r))})]})]})]})})]}),document.body)}function B2({item:e,variant:t="grid",onOpen:n,onRegenerate:i,onDelete:a}){const{t:s}=Cn(),r=la.sd15,o=()=>{const h=document.createElement("a");h.href=e.imageUrl,h.download=`${fm}-${e.id}.png`,h.click()},l=async()=>{await navigator.clipboard.writeText(e.prompt)},c=t==="carousel",d=w.jsxs(w.Fragment,{children:[w.jsx("button",{type:"button",className:c?"img-card__toolbar-btn":"hal-card-btn",onClick:o,children:s.gallery.save}),c?null:w.jsxs(w.Fragment,{children:[w.jsx("button",{type:"button",className:"hal-card-btn",onClick:()=>void l(),children:s.gallery.copy}),w.jsx("button",{type:"button",className:"hal-card-btn",onClick:()=>i(e.prompt),children:s.gallery.rerun})]}),w.jsx("button",{type:"button",className:c?"img-card__toolbar-btn img-card__toolbar-btn--danger":"hal-card-btn hal-card-btn--danger",onClick:()=>a(e.id),children:s.gallery.del})]});return w.jsxs("article",{className:`img-card${c?" img-card--carousel":""}`,children:[w.jsxs("div",{className:"img-card__visual",children:[w.jsx("button",{type:"button",className:"img-card__open",onClick:n,"aria-label":s.gallery.openImage,disabled:!n,children:w.jsxs("div",{className:"img-card__media",children:[w.jsx("img",{src:e.imageUrl,alt:e.prompt,loading:"lazy","data-testid":"gallery-image"}),c?w.jsx("p",{className:"img-card__prompt img-card__prompt--overlay",dir:"auto",title:e.prompt,children:e.prompt}):null,w.jsx("span",{className:"img-card__badge",dir:"ltr",children:r.shortLabel}),w.jsxs("span",{className:"img-card__stats",dir:"ltr",children:[e.width,"×",e.height," · ",(e.durationMs/1e3).toFixed(1),"s"]})]})}),c?w.jsx("div",{className:"img-card__toolbar",onClick:h=>h.stopPropagation(),children:d}):null]}),c?null:w.jsxs("div",{className:"img-card__meta",children:[w.jsx("p",{className:"img-card__prompt",dir:"auto",title:e.prompt,children:e.prompt}),w.jsx("div",{className:"img-card__actions",children:d})]})]})}const F2=620;function u0({items:e,className:t,onOpen:n,onRegenerate:i,onDelete:a,ariaHidden:s}){const r=Math.max(0,su-e.length);return w.jsxs("div",{className:t,"aria-hidden":s,children:[e.map(o=>w.jsx(B2,{item:o,variant:"carousel",onOpen:()=>n(o),onRegenerate:i,onDelete:a},o.id)),r>0?Array.from({length:r},(o,l)=>w.jsx("div",{className:"hal-gallery__pad","aria-hidden":"true"},`pad-${l}`)):null]})}function z2({items:e,onRegenerate:t,onDelete:n}){const{t:i,dir:a}=Cn(),[s,r]=st.useState(0),[o,l]=st.useState(null),[c,d]=st.useState(null),h=st.useRef(null),u=cy(e.length),p=c0(s,e.length),v=ed(e,p),M=o?ed(e,o.from):[],g=o?ed(e,o.to):v,f=(o==null?void 0:o.to)??p,m=p>0&&!o,_=p<u-1&&!o,x=st.useCallback(()=>{h.current&&(clearTimeout(h.current),h.current=null)},[]),C=st.useCallback(b=>{if(o||b===p||b<0||b>=u)return;x();const R=b>p?"next":"prev";l({from:p,to:b,dir:R}),h.current=setTimeout(()=>{r(b),l(null),h.current=null},F2)},[x,u,p,o]);return st.useEffect(()=>{r(b=>c0(b,e.length))},[e.length]),st.useEffect(()=>()=>x(),[x]),st.useEffect(()=>{if(!c)return;e.find(R=>R.id===c.id)||d(null)},[e,c]),e.length?w.jsxs(w.Fragment,{children:[w.jsxs("section",{className:"hal-gallery","aria-label":i.gallery.ariaLabel,dir:a,children:[w.jsxs("div",{className:"hal-gallery__head",children:[w.jsx("h2",{className:"hal-gallery__title",children:i.gallery.title}),u>1?w.jsxs("span",{className:"hal-gallery__page",dir:"ltr",children:[f+1,"/",u]}):null]}),w.jsxs("div",{className:`hal-gallery__carousel${o?" is-sliding":""}`,children:[m?w.jsx("button",{type:"button",className:"hal-gallery__nav hal-gallery__nav--prev","aria-label":i.gallery.prev,onClick:()=>C(p-1),children:"‹"}):null,w.jsxs("div",{className:"hal-gallery__viewport",dir:a,children:[o?w.jsx(u0,{items:M,className:`hal-gallery__track hal-gallery__track--exit hal-gallery__track--${o.dir}`,onOpen:d,onRegenerate:t,onDelete:n,ariaHidden:!0}):null,w.jsx(u0,{items:g,className:`hal-gallery__track${o?` hal-gallery__track--enter hal-gallery__track--${o.dir}`:""}`,onOpen:d,onRegenerate:t,onDelete:n}),o?w.jsx("div",{className:"hal-gallery__sweep","aria-hidden":"true"}):null]}),_?w.jsx("button",{type:"button",className:"hal-gallery__nav hal-gallery__nav--next","aria-label":i.gallery.next,onClick:()=>C(p+1),children:"›"}):null]})]}),c?w.jsx(I2,{item:c,onClose:()=>d(null)}):null]}):null}const H2="janusgrove-gallery",ou="items",G2=1,f0=48;function V2(){return new Promise((e,t)=>{const n=indexedDB.open(H2,G2);n.onerror=()=>t(n.error??new Error("IndexedDB open failed")),n.onupgradeneeded=()=>{const i=n.result;i.objectStoreNames.contains(ou)||i.createObjectStore(ou,{keyPath:"id"})},n.onsuccess=()=>e(n.result)})}function ja(e,t){return V2().then(n=>new Promise((i,a)=>{const s=n.transaction(ou,e),r=s.objectStore(ou),o=t(r);o.onsuccess=()=>i(o.result),o.onerror=()=>a(o.error??new Error("IndexedDB request failed")),s.oncomplete=()=>n.close(),s.onerror=()=>a(s.error??new Error("IndexedDB transaction failed"))}))}async function k2(){return(await ja("readonly",t=>t.getAll())).sort((t,n)=>n.createdAt-t.createdAt).map(t=>({id:t.id,prompt:t.prompt,negativePrompt:t.negativePrompt,imageUrl:URL.createObjectURL(t.blob),width:t.width,height:t.height,durationMs:t.durationMs,createdAt:t.createdAt,modelId:t.modelId}))}async function X2(e,t){const n={id:e.id,prompt:e.prompt,negativePrompt:e.negativePrompt,width:e.width,height:e.height,durationMs:e.durationMs,createdAt:e.createdAt,modelId:e.modelId,blob:t};try{await ja("readwrite",i=>i.put(n))}catch(i){if(!Y2(i))throw i;await j2(8),await ja("readwrite",a=>a.put(n))}}async function W2(e){await ja("readwrite",t=>t.delete(e))}async function j2(e){const n=[...await ja("readonly",i=>i.getAll())].sort((i,a)=>i.createdAt-a.createdAt).slice(0,e);for(const i of n)await ja("readwrite",a=>a.delete(i.id))}async function q2(){const e=await ja("readonly",i=>i.getAll());if(e.length<=f0)return;const t=e.length-f0,n=[...e].sort((i,a)=>i.createdAt-a.createdAt).slice(0,t);for(const i of n)await ja("readwrite",a=>a.delete(i.id))}function Y2(e){return e instanceof DOMException?e.name==="QuotaExceededError"||e.code===22:!1}function Z2(e){typeof window>"u"||(window.__janusQa=e)}const d0=typeof window<"u"&&new URLSearchParams(window.location.search).has("qa"),K2=typeof window<"u"&&new URLSearchParams(window.location.search).get("autogen")==="1",h0=typeof window<"u"?new URLSearchParams(window.location.search).get("prompt")??s0:s0;function yc(){return{progress:0,loaded:0,total:la.sd15.estimatedBytes,downloadSpeed:0,currentFile:"",status:"Waiting…",done:!1,compiling:!1}}function Q2(e,t){e(n=>{const i={...n,sd15:{...n.sd15??yc(),progress:100,done:!0,compiling:!1,status:"Ready"}};return t(i),i})}function J2(){const{t:e,dir:t,locale:n}=Cn(),i=st.useRef(e);i.current=e;const a=st.useRef(null),s=st.useRef(0),r=st.useRef(""),o=st.useRef("start"),l=st.useRef(!1),c=st.useRef($f("sd15")),d=st.useRef({lastLoaded:0,lastTime:0,samples:[]}),h=st.useRef(!1),[u,p]=st.useState("start");o.current=u;const[v,M]=st.useState(!1);h.current=v;const[g,f]=st.useState(!0),[m,_]=st.useState(""),[x,C]=st.useState(0),[b,R]=st.useState(0),[S,A]=st.useState(0),[D,N]=st.useState(0),[G,q]=st.useState({}),[Y,B]=st.useState(""),[U,I]=st.useState(null),[W,Q]=st.useState(""),[at,xt]=st.useState(()=>e2()),yt=st.useRef(at),[Gt,jt]=st.useState(()=>$f("sd15")),[wt,$]=st.useState(!1);yt.current=at,c.current=Gt;const[dt,ot]=st.useState(!1),[Rt,Nt]=st.useState(0),[Ct,Se]=st.useState({count:0,total:0}),[Ot,te]=st.useState([]),oe=st.useRef(!1),[Xt,De]=st.useState(!1),ye=st.useMemo(()=>FC(e.studio.headlines,n),[e.studio.headlines,n]),dn=u==="ready"&&Ot.length===0&&!dt,P=VC(u,v?1:0),de=st.useCallback(L=>{const tt=L.sd15;tt&&(R(tt.loaded),A(tt.total||la.sd15.estimatedBytes),C(Math.min(100,Math.max(0,tt.progress))))},[]),Vt=st.useCallback(()=>{o.current!=="ready"&&(p("ready"),B(i.current.status.modelReady))},[]),le=st.useCallback(L=>{Q2(q,de),M(!0),h.current=!0,_(L),Vt()},[Vt,de]),pt=st.useCallback(L=>{q(tt=>{const ct={...tt,sd15:{...tt.sd15??yc(),status:`Unavailable — ${L}`,done:!1,compiling:!1}};return de(ct),ct}),I(L)},[de]),be=st.useCallback(L=>{switch(L.type){case"webgpu_check":f(L.webgpu);break;case"download_progress":{const tt=L.status==="compile";q(ct=>{const it=ct.sd15??yc(),rt={...ct,sd15:{...it,loaded:L.loaded,total:L.total,progress:L.total>0?L.loaded/L.total*100:L.progress<=1?L.progress*100:L.progress,currentFile:L.file,compiling:tt,status:tt?`Compiling ${L.file||"UNet"}…`:L.file?`Downloading ${L.file}…`:it.status}};return de(rt),rt}),(L.file||tt)&&B(tt?i.current.status.compiling:`${i.current.status.downloading} ${L.file}…`);break}case"status":B(L.text);break;case"loaded":le(L.device);break;case"gen_progress":if(!l.current)break;Nt(L.progress),Se({count:L.count,total:L.total});break;case"image_ready":{if(!l.current)break;const tt=URL.createObjectURL(L.blob),ct={id:crypto.randomUUID(),prompt:r.current,negativePrompt:yt.current,imageUrl:tt,width:L.width,height:L.height,durationMs:performance.now()-s.current,createdAt:Date.now(),modelId:"sd15"};te(it=>[ct,...it]),X2(ct,L.blob).then(()=>q2()),l.current=!1,ot(!1),Nt(0),B(i.current.status.imageReady);break}case"aborted":l.current&&(l.current=!1,ot(!1),Nt(0),B(i.current.status.stopped));break;case"error":l.current&&(l.current=!1,ot(!1)),o.current==="loading"&&!h.current?pt(L.error):I(`SD 1.5: ${L.error}`);break}},[pt,le,de]),T=st.useRef(be);T.current=be;const y=st.useCallback(()=>{if(a.current)return a.current;const L=NC({onMessage:tt=>T.current(tt)});return a.current=L,ao(L,{type:"check_webgpu"}),L},[]);st.useEffect(()=>{const L=y();return ao(L,{type:"check_webgpu"}),()=>{var tt;(tt=a.current)==null||tt.terminate(),a.current=null}},[y]),st.useEffect(()=>{u==="start"&&!v&&!dt&&B(e.status.readyToLoad)},[e.status.readyToLoad,u,v,dt]),st.useEffect(()=>{oe.current||(oe.current=!0,k2().then(L=>{L.length&&te(L)}).catch(()=>{oe.current=!1}))},[]),st.useEffect(()=>()=>{te(L=>{for(const tt of L)URL.revokeObjectURL(tt.imageUrl);return L})},[]);const H=st.useCallback(()=>{I(null),p("loading"),M(!1),h.current=!1,C(0),R(0),A(GC()),N(0),d.current={lastLoaded:0,lastTime:0,samples:[]};const L={sd15:yc()};q(L),de(L),B(i.current.status.preparingDownload),y(),ao(a.current,{type:"load"})},[y,de]);st.useEffect(()=>{if(u!=="loading"&&u!=="ready"||b<=0)return;const L=performance.now(),tt=d.current;if(tt.lastTime>0&&b>tt.lastLoaded){const ct=(L-tt.lastTime)/1e3;if(ct>=.4){const it=(b-tt.lastLoaded)/ct,rt=[...tt.samples,it].slice(-6);N(rt.reduce((Ut,Pt)=>Ut+Pt,0)/rt.length),d.current={lastLoaded:b,lastTime:L,samples:rt};return}}tt.lastTime===0&&(d.current={...tt,lastLoaded:b,lastTime:L})},[b,u]);const Z=st.useCallback(L=>{if(!L.trim()||!h.current){h.current||I(i.current.status.notLoaded);return}r.current=L,Q(""),I(null),l.current=!0,ot(!0),Nt(0),Se({count:0,total:0}),s.current=performance.now(),B(i.current.status.generating);const tt=c.current,ct=yt.current;(async()=>{const{positive:it,negative:rt}=await JC(L,ct);if(!l.current)return;const{prompt:Ut,negativePrompt:Pt}=ZC(it,tt,rt);ao(y(),{type:"generate_image",prompt:Ut,negativePrompt:Pt,generation:a2(tt)})})()},[y]),et=st.useCallback(L=>{yt.current=L,xt(L),n2(L)},[]),lt=st.useCallback(L=>{jt(tt=>{const ct=typeof L=="function"?L(tt):L;i2("sd15",ct);const it=$f("sd15");return c.current=it,it})},[]);st.useEffect(()=>{var L,tt;Z2({phase:u,webgpu:g,deviceLabel:m,loadedBytes:b,totalBytes:S,progress:x,status:Y,isGenerating:dt,galleryCount:Ot.length,lastImageWidth:((L=Ot[0])==null?void 0:L.width)??0,lastImageHeight:((tt=Ot[0])==null?void 0:tt.height)??0,error:U})},[u,g,m,b,S,x,Y,dt,Ot,U]),st.useEffect(()=>{kC(u,v?[HC]:[])&&Vt()},[u,v,Vt]),st.useEffect(()=>{if(P){De(!1);return}const L=requestAnimationFrame(()=>De(!0));return()=>cancelAnimationFrame(L)},[P]),st.useEffect(()=>{if(!d0||u!=="start")return;const L=window.setTimeout(()=>H(),400);return()=>window.clearTimeout(L)},[u,H]),st.useEffect(()=>{if(!d0||!K2||u!=="ready"||dt||Ot.length>0)return;Q(h0);const L=window.setTimeout(()=>Z(h0),300);return()=>window.clearTimeout(L)},[u,dt,Ot.length,Z]);const ft=()=>{ao(y(),{type:"abort"})},j=L=>{W2(L),te(tt=>{const ct=tt.find(it=>it.id===L);return ct&&URL.revokeObjectURL(ct.imageUrl),tt.filter(it=>it.id!==L)})};return P?w.jsxs("main",{className:"app hal-app","data-testid":"app-root","data-phase":u,dir:t,children:[w.jsx(y2,{phase:u==="loading"?"loading":"start",modelProgress:G,aggregateProgress:x,aggregateLoaded:b,aggregateTotal:S,downloadSpeed:D,status:Y,webgpu:g,onLoad:H}),U?w.jsx("div",{className:"error-banner",role:"alert",children:U}):null]}):w.jsxs("main",{className:`app app--studio workspace hal-app${Xt?" workspace--visible":""}`,"data-testid":"app-studio","data-phase":"ready",dir:t,children:[w.jsx(ey,{}),w.jsx("div",{className:"scanlines","aria-hidden":"true"}),w.jsx(E2,{prompt:W,sdSettings:Gt,deviceLabel:m,status:Y,isGenerating:dt,isModelLoaded:v,settingsOpen:wt,genProgress:Rt,genTokenCount:Ct.count,genTokenTotal:Ct.total,onPromptChange:Q,onOpenSettings:()=>$(L=>!L),onGenerate:()=>Z(W),onStop:ft}),w.jsxs("div",{className:"studio-body",children:[dn?w.jsx(A2,{headline:ye.headline}):null,w.jsx(z2,{items:Ot,onRegenerate:L=>{Q(L),Z(L)},onDelete:j})]}),w.jsx(C2,{initialSuggestions:ye.suggestions,onPick:L=>Q(L),disabled:dt}),w.jsx(T2,{open:wt,deviceLabel:m,globalNegativePrompt:at,sdSettings:Gt,onClose:()=>$(!1),onGlobalNegativeChange:et,onSdChange:lt}),U?w.jsxs("div",{className:"error-banner error-banner--studio",role:"alert",children:[U,w.jsx("button",{type:"button",onClick:()=>I(null),children:"×"})]}):null]})}mb.createRoot(document.getElementById("root")).render(w.jsx(st.StrictMode,{children:w.jsx(u2,{children:w.jsx(J2,{})})}));
