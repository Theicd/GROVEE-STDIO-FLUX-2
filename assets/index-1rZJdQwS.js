(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var r_={exports:{}},ru={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy=Symbol.for("react.transitional.element"),ly=Symbol.for("react.fragment");function o_(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:oy,type:e,key:i,ref:t!==void 0?t:null,props:n}}ru.Fragment=ly;ru.jsx=o_;ru.jsxs=o_;r_.exports=ru;var F=r_.exports,l_={exports:{}},Bt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kh=Symbol.for("react.transitional.element"),cy=Symbol.for("react.portal"),uy=Symbol.for("react.fragment"),fy=Symbol.for("react.strict_mode"),dy=Symbol.for("react.profiler"),hy=Symbol.for("react.consumer"),py=Symbol.for("react.context"),my=Symbol.for("react.forward_ref"),gy=Symbol.for("react.suspense"),_y=Symbol.for("react.memo"),c_=Symbol.for("react.lazy"),vy=Symbol.for("react.activity"),Sm=Symbol.iterator;function xy(e){return e===null||typeof e!="object"?null:(e=Sm&&e[Sm]||e["@@iterator"],typeof e=="function"?e:null)}var u_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f_=Object.assign,d_={};function Nr(e,t,n){this.props=e,this.context=t,this.refs=d_,this.updater=n||u_}Nr.prototype.isReactComponent={};Nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function h_(){}h_.prototype=Nr.prototype;function Xh(e,t,n){this.props=e,this.context=t,this.refs=d_,this.updater=n||u_}var Wh=Xh.prototype=new h_;Wh.constructor=Xh;f_(Wh,Nr.prototype);Wh.isPureReactComponent=!0;var ym=Array.isArray;function Jf(){}var Re={H:null,A:null,T:null,S:null},p_=Object.prototype.hasOwnProperty;function qh(e,t,n){var i=n.ref;return{$$typeof:kh,type:e,key:t,ref:i!==void 0?i:null,props:n}}function Sy(e,t){return qh(e.type,t,e.props)}function Yh(e){return typeof e=="object"&&e!==null&&e.$$typeof===kh}function yy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Mm=/\/+/g;function Nu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?yy(""+e.key):t.toString(36)}function My(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Jf,Jf):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Ys(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case kh:case cy:r=!0;break;case c_:return r=e._init,Ys(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+Nu(e,0):i,ym(a)?(n="",r!=null&&(n=r.replace(Mm,"$&/")+"/"),Ys(a,t,n,"",function(c){return c})):a!=null&&(Yh(a)&&(a=Sy(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(Mm,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(ym(e))for(var l=0;l<e.length;l++)i=e[l],s=o+Nu(i,l),r+=Ys(i,t,n,s,a);else if(l=xy(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+Nu(i,l++),r+=Ys(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return Ys(My(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function cl(e,t,n){if(e==null)return e;var i=[],a=0;return Ys(e,i,"","",function(s){return t.call(n,s,a++)}),i}function Ey(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Em=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},by={map:cl,forEach:function(e,t,n){cl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return cl(e,function(){t++}),t},toArray:function(e){return cl(e,function(t){return t})||[]},only:function(e){if(!Yh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Bt.Activity=vy;Bt.Children=by;Bt.Component=Nr;Bt.Fragment=uy;Bt.Profiler=dy;Bt.PureComponent=Xh;Bt.StrictMode=fy;Bt.Suspense=gy;Bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Re;Bt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Re.H.useMemoCache(e)}};Bt.cache=function(e){return function(){return e.apply(null,arguments)}};Bt.cacheSignal=function(){return null};Bt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=f_({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!p_.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return qh(e.type,a,i)};Bt.createContext=function(e){return e={$$typeof:py,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:hy,_context:e},e};Bt.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)p_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return qh(e,s,a)};Bt.createRef=function(){return{current:null}};Bt.forwardRef=function(e){return{$$typeof:my,render:e}};Bt.isValidElement=Yh;Bt.lazy=function(e){return{$$typeof:c_,_payload:{_status:-1,_result:e},_init:Ey}};Bt.memo=function(e,t){return{$$typeof:_y,type:e,compare:t===void 0?null:t}};Bt.startTransition=function(e){var t=Re.T,n={};Re.T=n;try{var i=e(),a=Re.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Jf,Em)}catch(s){Em(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),Re.T=t}};Bt.unstable_useCacheRefresh=function(){return Re.H.useCacheRefresh()};Bt.use=function(e){return Re.H.use(e)};Bt.useActionState=function(e,t,n){return Re.H.useActionState(e,t,n)};Bt.useCallback=function(e,t){return Re.H.useCallback(e,t)};Bt.useContext=function(e){return Re.H.useContext(e)};Bt.useDebugValue=function(){};Bt.useDeferredValue=function(e,t){return Re.H.useDeferredValue(e,t)};Bt.useEffect=function(e,t){return Re.H.useEffect(e,t)};Bt.useEffectEvent=function(e){return Re.H.useEffectEvent(e)};Bt.useId=function(){return Re.H.useId()};Bt.useImperativeHandle=function(e,t,n){return Re.H.useImperativeHandle(e,t,n)};Bt.useInsertionEffect=function(e,t){return Re.H.useInsertionEffect(e,t)};Bt.useLayoutEffect=function(e,t){return Re.H.useLayoutEffect(e,t)};Bt.useMemo=function(e,t){return Re.H.useMemo(e,t)};Bt.useOptimistic=function(e,t){return Re.H.useOptimistic(e,t)};Bt.useReducer=function(e,t,n){return Re.H.useReducer(e,t,n)};Bt.useRef=function(e){return Re.H.useRef(e)};Bt.useState=function(e){return Re.H.useState(e)};Bt.useSyncExternalStore=function(e,t,n){return Re.H.useSyncExternalStore(e,t,n)};Bt.useTransition=function(){return Re.H.useTransition()};Bt.version="19.2.7";l_.exports=Bt;var ht=l_.exports,m_={exports:{}},ou={},g_={exports:{}},__={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(U,P){var W=U.length;U.push(P);t:for(;0<W;){var Q=W-1>>>1,at=U[Q];if(0<a(at,P))U[Q]=P,U[W]=at,W=Q;else break t}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var P=U[0],W=U.pop();if(W!==P){U[0]=W;t:for(var Q=0,at=U.length,xt=at>>>1;Q<xt;){var yt=2*(Q+1)-1,Gt=U[yt],qt=yt+1,wt=U[qt];if(0>a(Gt,W))qt<at&&0>a(wt,Gt)?(U[Q]=wt,U[qt]=W,Q=qt):(U[Q]=Gt,U[yt]=W,Q=yt);else if(qt<at&&0>a(wt,W))U[Q]=wt,U[qt]=W,Q=qt;else break t}}return P}function a(U,P){var W=U.sortIndex-P.sortIndex;return W!==0?W:U.id-P.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var l=[],c=[],d=1,h=null,u=3,p=!1,_=!1,M=!1,g=!1,f=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;function y(U){for(var P=n(c);P!==null;){if(P.callback===null)i(c);else if(P.startTime<=U)i(c),P.sortIndex=P.expirationTime,t(l,P);else break;P=n(c)}}function C(U){if(M=!1,y(U),!_)if(n(l)!==null)_=!0,b||(b=!0,G());else{var P=n(c);P!==null&&I(C,P.startTime-U)}}var b=!1,R=-1,x=5,A=-1;function w(){return g?!0:!(e.unstable_now()-A<x)}function D(){if(g=!1,b){var U=e.unstable_now();A=U;var P=!0;try{t:{_=!1,M&&(M=!1,m(R),R=-1),p=!0;var W=u;try{e:{for(y(U),h=n(l);h!==null&&!(h.expirationTime>U&&w());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,u=h.priorityLevel;var at=Q(h.expirationTime<=U);if(U=e.unstable_now(),typeof at=="function"){h.callback=at,y(U),P=!0;break e}h===n(l)&&i(l),y(U)}else i(l);h=n(l)}if(h!==null)P=!0;else{var xt=n(c);xt!==null&&I(C,xt.startTime-U),P=!1}}break t}finally{h=null,u=W,p=!1}P=void 0}}finally{P?G():b=!1}}}var G;if(typeof v=="function")G=function(){v(D)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,j=Y.port2;Y.port1.onmessage=D,G=function(){j.postMessage(null)}}else G=function(){f(D,0)};function I(U,P){R=f(function(){U(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_next=function(U){switch(u){case 1:case 2:case 3:var P=3;break;default:P=u}var W=u;u=P;try{return U()}finally{u=W}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(U,P){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var W=u;u=U;try{return P()}finally{u=W}},e.unstable_scheduleCallback=function(U,P,W){var Q=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?Q+W:Q):W=Q,U){case 1:var at=-1;break;case 2:at=250;break;case 5:at=1073741823;break;case 4:at=1e4;break;default:at=5e3}return at=W+at,U={id:d++,callback:P,priorityLevel:U,startTime:W,expirationTime:at,sortIndex:-1},W>Q?(U.sortIndex=W,t(c,U),n(l)===null&&U===n(c)&&(M?(m(R),R=-1):M=!0,I(C,W-Q))):(U.sortIndex=at,t(l,U),_||p||(_=!0,b||(b=!0,G()))),U},e.unstable_shouldYield=w,e.unstable_wrapCallback=function(U){var P=u;return function(){var W=u;u=P;try{return U.apply(this,arguments)}finally{u=W}}}})(__);g_.exports=__;var Ty=g_.exports,v_={exports:{}},_n={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay=ht;function x_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function fa(){}var mn={d:{f:fa,r:function(){throw Error(x_(522))},D:fa,C:fa,L:fa,m:fa,X:fa,S:fa,M:fa},p:0,findDOMNode:null},Ry=Symbol.for("react.portal");function Cy(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ry,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var ho=Ay.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function lu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}_n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=mn;_n.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(x_(299));return Cy(e,t,null,n)};_n.flushSync=function(e){var t=ho.T,n=mn.p;try{if(ho.T=null,mn.p=2,e)return e()}finally{ho.T=t,mn.p=n,mn.d.f()}};_n.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,mn.d.C(e,t))};_n.prefetchDNS=function(e){typeof e=="string"&&mn.d.D(e)};_n.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=lu(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?mn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&mn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};_n.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=lu(t.as,t.crossOrigin);mn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&mn.d.M(e)};_n.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=lu(n,t.crossOrigin);mn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};_n.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=lu(t.as,t.crossOrigin);mn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else mn.d.m(e)};_n.requestFormReset=function(e){mn.d.r(e)};_n.unstable_batchedUpdates=function(e,t){return e(t)};_n.useFormState=function(e,t,n){return ho.H.useFormState(e,t,n)};_n.useFormStatus=function(){return ho.H.useHostTransitionStatus()};_n.version="19.2.7";function S_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S_)}catch(e){console.error(e)}}S_(),v_.exports=_n;var wy=v_.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ye=Ty,y_=ht,Dy=wy;function J(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function M_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function E_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b_(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bm(e){if(Wo(e)!==e)throw Error(J(188))}function Uy(e){var t=e.alternate;if(!t){if(t=Wo(e),t===null)throw Error(J(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return bm(a),e;if(s===i)return bm(a),t;s=s.sibling}throw Error(J(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?e:t}function T_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=T_(e),t!==null)return t;e=e.sibling}return null}var Ce=Object.assign,Ny=Symbol.for("react.element"),ul=Symbol.for("react.transitional.element"),ao=Symbol.for("react.portal"),Ks=Symbol.for("react.fragment"),A_=Symbol.for("react.strict_mode"),$f=Symbol.for("react.profiler"),R_=Symbol.for("react.consumer"),Wi=Symbol.for("react.context"),jh=Symbol.for("react.forward_ref"),td=Symbol.for("react.suspense"),ed=Symbol.for("react.suspense_list"),Zh=Symbol.for("react.memo"),va=Symbol.for("react.lazy"),nd=Symbol.for("react.activity"),Ly=Symbol.for("react.memo_cache_sentinel"),Tm=Symbol.iterator;function Vr(e){return e===null||typeof e!="object"?null:(e=Tm&&e[Tm]||e["@@iterator"],typeof e=="function"?e:null)}var Oy=Symbol.for("react.client.reference");function id(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Oy?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ks:return"Fragment";case $f:return"Profiler";case A_:return"StrictMode";case td:return"Suspense";case ed:return"SuspenseList";case nd:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ao:return"Portal";case Wi:return e.displayName||"Context";case R_:return(e._context.displayName||"Context")+".Consumer";case jh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zh:return t=e.displayName||null,t!==null?t:id(e.type)||"Memo";case va:t=e._payload,e=e._init;try{return id(e(t))}catch{}}return null}var so=Array.isArray,Lt=y_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=Dy.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,cs={pending:!1,data:null,method:null,action:null},ad=[],Qs=-1;function wi(e){return{current:e}}function $e(e){0>Qs||(e.current=ad[Qs],ad[Qs]=null,Qs--)}function Ee(e,t){Qs++,ad[Qs]=e.current,e.current=t}var Mi=wi(null),Co=wi(null),Ua=wi(null),yc=wi(null);function Mc(e,t){switch(Ee(Ua,t),Ee(Co,e),Ee(Mi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ug(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ug(t),e=Yx(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$e(Mi),Ee(Mi,e)}function _r(){$e(Mi),$e(Co),$e(Ua)}function sd(e){e.memoizedState!==null&&Ee(yc,e);var t=Mi.current,n=Yx(t,e.type);t!==n&&(Ee(Co,e),Ee(Mi,n))}function Ec(e){Co.current===e&&($e(Mi),$e(Co)),yc.current===e&&($e(yc),zo._currentValue=cs)}var Lu,Am;function ts(e){if(Lu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Lu=t&&t[1]||"",Am=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Lu+e+Am}var Ou=!1;function Pu(e,t){if(!e||Ou)return"";Ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(p){var u=p}Reflect.construct(e,[],h)}else{try{h.call()}catch(p){u=p}e.call(h.prototype)}}else{try{throw Error()}catch(p){u=p}(h=e())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(p){if(p&&u&&typeof p.stack=="string")return[p.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var d=`
`+l[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=a);break}}}finally{Ou=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ts(n):""}function Py(e,t){switch(e.tag){case 26:case 27:case 5:return ts(e.type);case 16:return ts("Lazy");case 13:return e.child!==t&&t!==null?ts("Suspense Fallback"):ts("Suspense");case 19:return ts("SuspenseList");case 0:case 15:return Pu(e.type,!1);case 11:return Pu(e.type.render,!1);case 1:return Pu(e.type,!0);case 31:return ts("Activity");default:return""}}function Rm(e){try{var t="",n=null;do t+=Py(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var rd=Object.prototype.hasOwnProperty,Kh=Ye.unstable_scheduleCallback,Iu=Ye.unstable_cancelCallback,Iy=Ye.unstable_shouldYield,By=Ye.unstable_requestPaint,Pn=Ye.unstable_now,Fy=Ye.unstable_getCurrentPriorityLevel,C_=Ye.unstable_ImmediatePriority,w_=Ye.unstable_UserBlockingPriority,bc=Ye.unstable_NormalPriority,zy=Ye.unstable_LowPriority,D_=Ye.unstable_IdlePriority,Hy=Ye.log,Gy=Ye.unstable_setDisableYieldValue,qo=null,In=null;function Ta(e){if(typeof Hy=="function"&&Gy(e),In&&typeof In.setStrictMode=="function")try{In.setStrictMode(qo,e)}catch{}}var Bn=Math.clz32?Math.clz32:Xy,Vy=Math.log,ky=Math.LN2;function Xy(e){return e>>>=0,e===0?32:31-(Vy(e)/ky|0)|0}var fl=256,dl=262144,hl=4194304;function es(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function cu(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=es(i):(r&=o,r!==0?a=es(r):n||(n=o&~e,n!==0&&(a=es(n))))):(o=i&~s,o!==0?a=es(o):r!==0?a=es(r):n||(n=i&~e,n!==0&&(a=es(n)))),a===0?0:t!==0&&t!==a&&!(t&s)&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function Yo(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Wy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function U_(){var e=hl;return hl<<=1,!(hl&62914560)&&(hl=4194304),e}function Bu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function jo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function qy(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var d=31-Bn(n),h=1<<d;o[d]=0,l[d]=-1;var u=c[d];if(u!==null)for(c[d]=null,d=0;d<u.length;d++){var p=u[d];p!==null&&(p.lane&=-536870913)}n&=~h}i!==0&&N_(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function N_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Bn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function L_(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Bn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function O_(e,t){var n=t&-t;return n=n&42?1:Qh(n),n&(e.suspendedLanes|t)?0:n}function Qh(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Jh(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function P_(){var e=ae.p;return e!==0?e:(e=window.event,e===void 0?32:aS(e.type))}function Cm(e,t){var n=ae.p;try{return ae.p=e,t()}finally{ae.p=n}}var qa=Math.random().toString(36).slice(2),nn="__reactFiber$"+qa,An="__reactProps$"+qa,Lr="__reactContainer$"+qa,od="__reactEvents$"+qa,Yy="__reactListeners$"+qa,jy="__reactHandles$"+qa,wm="__reactResources$"+qa,Zo="__reactMarker$"+qa;function $h(e){delete e[nn],delete e[An],delete e[od],delete e[Yy],delete e[jy]}function Js(e){var t=e[nn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lr]||n[nn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ig(e);e!==null;){if(n=e[nn])return n;e=Ig(e)}return t}e=n,n=e.parentNode}return null}function Or(e){if(e=e[nn]||e[Lr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ro(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(J(33))}function lr(e){var t=e[wm];return t||(t=e[wm]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[Zo]=!0}var I_=new Set,B_={};function Ms(e,t){vr(e,t),vr(e+"Capture",t)}function vr(e,t){for(B_[e]=t,e=0;e<t.length;e++)I_.add(t[e])}var Zy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dm={},Um={};function Ky(e){return rd.call(Um,e)?!0:rd.call(Dm,e)?!1:Zy.test(e)?Um[e]=!0:(Dm[e]=!0,!1)}function $l(e,t,n){if(Ky(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function pl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ni(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function qn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function F_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qy(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ld(e){if(!e._valueTracker){var t=F_(e)?"checked":"value";e._valueTracker=Qy(e,t,""+e[t])}}function z_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=F_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Tc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Jy=/[\n"\\]/g;function Kn(e){return e.replace(Jy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function cd(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qn(t)):e.value!==""+qn(t)&&(e.value=""+qn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?ud(e,r,qn(t)):n!=null?ud(e,r,qn(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+qn(o):e.removeAttribute("name")}function H_(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){ld(e);return}n=n!=null?""+qn(n):"",t=t!=null?""+qn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),ld(e)}function ud(e,t,n){t==="number"&&Tc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function cr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+qn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function G_(e,t,n){if(t!=null&&(t=""+qn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+qn(n):""}function V_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(J(92));if(so(i)){if(1<i.length)throw Error(J(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=qn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),ld(e)}function xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $y=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nm(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||$y.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function k_(e,t,n){if(t!=null&&typeof t!="object")throw Error(J(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&Nm(e,a,i)}else for(var s in t)t.hasOwnProperty(s)&&Nm(e,s,t[s])}function tp(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),eM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tc(e){return eM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qi(){}var fd=null;function ep(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $s=null,ur=null;function Lm(e){var t=Or(e);if(t&&(e=t.stateNode)){var n=e[An]||null;t:switch(e=t.stateNode,t.type){case"input":if(cd(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Kn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[An]||null;if(!a)throw Error(J(90));cd(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&z_(i)}break t;case"textarea":G_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&cr(e,!!n.multiple,t,!1)}}}var Fu=!1;function X_(e,t,n){if(Fu)return e(t,n);Fu=!0;try{var i=e(t);return i}finally{if(Fu=!1,($s!==null||ur!==null)&&(yu(),$s&&(t=$s,e=ur,ur=$s=null,Lm(t),e)))for(t=0;t<e.length;t++)Lm(e[t])}}function wo(e,t){var n=e.stateNode;if(n===null)return null;var i=n[An]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(J(231,t,typeof n));return n}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dd=!1;if(ta)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){dd=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{dd=!1}var Aa=null,np=null,ec=null;function W_(){if(ec)return ec;var e,t=np,n=t.length,i,a="value"in Aa?Aa.value:Aa.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return ec=a.slice(e,1<i?1-i:void 0)}function nc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ml(){return!0}function Om(){return!1}function Rn(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ml:Om,this.isPropagationStopped=Om,this}return Ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),t}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uu=Rn(Es),Ko=Ce({},Es,{view:0,detail:0}),nM=Rn(Ko),zu,Hu,Xr,fu=Ce({},Ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ip,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(zu=e.screenX-Xr.screenX,Hu=e.screenY-Xr.screenY):Hu=zu=0,Xr=e),zu)},movementY:function(e){return"movementY"in e?e.movementY:Hu}}),Pm=Rn(fu),iM=Ce({},fu,{dataTransfer:0}),aM=Rn(iM),sM=Ce({},Ko,{relatedTarget:0}),Gu=Rn(sM),rM=Ce({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),oM=Rn(rM),lM=Ce({},Es,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cM=Rn(lM),uM=Ce({},Es,{data:0}),Im=Rn(uM),fM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pM(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hM[e])?!!t[e]:!1}function ip(){return pM}var mM=Ce({},Ko,{key:function(e){if(e.key){var t=fM[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=nc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ip,charCode:function(e){return e.type==="keypress"?nc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gM=Rn(mM),_M=Ce({},fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bm=Rn(_M),vM=Ce({},Ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ip}),xM=Rn(vM),SM=Ce({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),yM=Rn(SM),MM=Ce({},fu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),EM=Rn(MM),bM=Ce({},Es,{newState:0,oldState:0}),TM=Rn(bM),AM=[9,13,27,32],ap=ta&&"CompositionEvent"in window,po=null;ta&&"documentMode"in document&&(po=document.documentMode);var RM=ta&&"TextEvent"in window&&!po,q_=ta&&(!ap||po&&8<po&&11>=po),Fm=" ",zm=!1;function Y_(e,t){switch(e){case"keyup":return AM.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function j_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tr=!1;function CM(e,t){switch(e){case"compositionend":return j_(t);case"keypress":return t.which!==32?null:(zm=!0,Fm);case"textInput":return e=t.data,e===Fm&&zm?null:e;default:return null}}function wM(e,t){if(tr)return e==="compositionend"||!ap&&Y_(e,t)?(e=W_(),ec=np=Aa=null,tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return q_&&t.locale!=="ko"?null:t.data;default:return null}}var DM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!DM[e.type]:t==="textarea"}function Z_(e,t,n,i){$s?ur?ur.push(i):ur=[i]:$s=i,t=kc(t,"onChange"),0<t.length&&(n=new uu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var mo=null,Do=null;function UM(e){Xx(e,0)}function du(e){var t=ro(e);if(z_(t))return e}function Gm(e,t){if(e==="change")return t}var K_=!1;if(ta){var Vu;if(ta){var ku="oninput"in document;if(!ku){var Vm=document.createElement("div");Vm.setAttribute("oninput","return;"),ku=typeof Vm.oninput=="function"}Vu=ku}else Vu=!1;K_=Vu&&(!document.documentMode||9<document.documentMode)}function km(){mo&&(mo.detachEvent("onpropertychange",Q_),Do=mo=null)}function Q_(e){if(e.propertyName==="value"&&du(Do)){var t=[];Z_(t,Do,e,ep(e)),X_(UM,t)}}function NM(e,t,n){e==="focusin"?(km(),mo=t,Do=n,mo.attachEvent("onpropertychange",Q_)):e==="focusout"&&km()}function LM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return du(Do)}function OM(e,t){if(e==="click")return du(t)}function PM(e,t){if(e==="input"||e==="change")return du(t)}function IM(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zn=typeof Object.is=="function"?Object.is:IM;function Uo(e,t){if(zn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!rd.call(t,a)||!zn(e[a],t[a]))return!1}return!0}function Xm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wm(e,t){var n=Xm(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Xm(n)}}function J_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?J_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Tc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Tc(e.document)}return t}function sp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var BM=ta&&"documentMode"in document&&11>=document.documentMode,er=null,hd=null,go=null,pd=!1;function qm(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pd||er==null||er!==Tc(i)||(i=er,"selectionStart"in i&&sp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),go&&Uo(go,i)||(go=i,i=kc(hd,"onSelect"),0<i.length&&(t=new uu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=er)))}function Za(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var nr={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionrun:Za("Transition","TransitionRun"),transitionstart:Za("Transition","TransitionStart"),transitioncancel:Za("Transition","TransitionCancel"),transitionend:Za("Transition","TransitionEnd")},Xu={},tv={};ta&&(tv=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function bs(e){if(Xu[e])return Xu[e];if(!nr[e])return e;var t=nr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tv)return Xu[e]=t[n];return e}var ev=bs("animationend"),nv=bs("animationiteration"),iv=bs("animationstart"),FM=bs("transitionrun"),zM=bs("transitionstart"),HM=bs("transitioncancel"),av=bs("transitionend"),sv=new Map,md="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");md.push("scrollEnd");function ui(e,t){sv.set(e,t),Ms(t,[e])}var Ac=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Xn=[],ir=0,rp=0;function hu(){for(var e=ir,t=rp=ir=0;t<e;){var n=Xn[t];Xn[t++]=null;var i=Xn[t];Xn[t++]=null;var a=Xn[t];Xn[t++]=null;var s=Xn[t];if(Xn[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&rv(n,a,s)}}function pu(e,t,n,i){Xn[ir++]=e,Xn[ir++]=t,Xn[ir++]=n,Xn[ir++]=i,rp|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function op(e,t,n,i){return pu(e,t,n,i),Rc(e)}function Ts(e,t){return pu(e,null,null,t),Rc(e)}function rv(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-Bn(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function Rc(e){if(50<To)throw To=0,Id=null,Error(J(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ar={};function GM(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(e,t,n,i){return new GM(e,t,n,i)}function lp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zi(e,t){var n=e.alternate;return n===null?(n=Ln(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ov(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ic(e,t,n,i,a,s){var r=0;if(i=e,typeof e=="function")lp(e)&&(r=1);else if(typeof e=="string")r=qE(e,n,Mi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case nd:return e=Ln(31,n,t,a),e.elementType=nd,e.lanes=s,e;case Ks:return us(n.children,a,s,t);case A_:r=8,a|=24;break;case $f:return e=Ln(12,n,t,a|2),e.elementType=$f,e.lanes=s,e;case td:return e=Ln(13,n,t,a),e.elementType=td,e.lanes=s,e;case ed:return e=Ln(19,n,t,a),e.elementType=ed,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wi:r=10;break t;case R_:r=9;break t;case jh:r=11;break t;case Zh:r=14;break t;case va:r=16,i=null;break t}r=29,n=Error(J(130,e===null?"null":typeof e,"")),i=null}return t=Ln(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function us(e,t,n,i){return e=Ln(7,e,i,t),e.lanes=n,e}function Wu(e,t,n){return e=Ln(6,e,null,t),e.lanes=n,e}function lv(e){var t=Ln(18,null,null,0);return t.stateNode=e,t}function qu(e,t,n){return t=Ln(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ym=new WeakMap;function Qn(e,t){if(typeof e=="object"&&e!==null){var n=Ym.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Rm(t)},Ym.set(e,t),t)}return{value:e,source:t,stack:Rm(t)}}var sr=[],rr=0,Cc=null,No=0,Yn=[],jn=0,Ha=null,_i=1,vi="";function Vi(e,t){sr[rr++]=No,sr[rr++]=Cc,Cc=e,No=t}function cv(e,t,n){Yn[jn++]=_i,Yn[jn++]=vi,Yn[jn++]=Ha,Ha=e;var i=_i;e=vi;var a=32-Bn(i)-1;i&=~(1<<a),n+=1;var s=32-Bn(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,_i=1<<32-Bn(t)+a|n<<a|i,vi=s+e}else _i=1<<s|n<<a|i,vi=e}function cp(e){e.return!==null&&(Vi(e,1),cv(e,1,0))}function up(e){for(;e===Cc;)Cc=sr[--rr],sr[rr]=null,No=sr[--rr],sr[rr]=null;for(;e===Ha;)Ha=Yn[--jn],Yn[jn]=null,vi=Yn[--jn],Yn[jn]=null,_i=Yn[--jn],Yn[jn]=null}function uv(e,t){Yn[jn++]=_i,Yn[jn++]=vi,Yn[jn++]=Ha,_i=t.id,vi=t.overflow,Ha=e}var an=null,Ae=null,Jt=!1,Na=null,Jn=!1,gd=Error(J(519));function Ga(e){var t=Error(J(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Lo(Qn(t,e)),gd}function jm(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[nn]=e,t[An]=i,n){case"dialog":Yt("cancel",t),Yt("close",t);break;case"iframe":case"object":case"embed":Yt("load",t);break;case"video":case"audio":for(n=0;n<Bo.length;n++)Yt(Bo[n],t);break;case"source":Yt("error",t);break;case"img":case"image":case"link":Yt("error",t),Yt("load",t);break;case"details":Yt("toggle",t);break;case"input":Yt("invalid",t),H_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Yt("invalid",t);break;case"textarea":Yt("invalid",t),V_(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||qx(t.textContent,n)?(i.popover!=null&&(Yt("beforetoggle",t),Yt("toggle",t)),i.onScroll!=null&&Yt("scroll",t),i.onScrollEnd!=null&&Yt("scrollend",t),i.onClick!=null&&(t.onclick=qi),t=!0):t=!1,t||Ga(e,!0)}function Zm(e){for(an=e.return;an;)switch(an.tag){case 5:case 31:case 13:Jn=!1;return;case 27:case 3:Jn=!0;return;default:an=an.return}}function Us(e){if(e!==an)return!1;if(!Jt)return Zm(e),Jt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Gd(e.type,e.memoizedProps)),n=!n),n&&Ae&&Ga(e),Zm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));Ae=Pg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));Ae=Pg(e)}else t===27?(t=Ae,Ya(e.type)?(e=Wd,Wd=null,Ae=e):Ae=t):Ae=an?ei(e.stateNode.nextSibling):null;return!0}function ps(){Ae=an=null,Jt=!1}function Yu(){var e=Na;return e!==null&&(Mn===null?Mn=e:Mn.push.apply(Mn,e),Na=null),e}function Lo(e){Na===null?Na=[e]:Na.push(e)}var _d=wi(null),As=null,Yi=null;function Sa(e,t,n){Ee(_d,t._currentValue),t._currentValue=n}function Ki(e){e._currentValue=_d.current,$e(_d)}function vd(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function xd(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),vd(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(J(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),vd(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Pr(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(J(387));if(r=r.memoizedProps,r!==null){var o=a.type;zn(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===yc.current){if(r=a.alternate,r===null)throw Error(J(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(zo):e=[zo])}a=a.return}e!==null&&xd(t,e,n,i),t.flags|=262144}function wc(e){for(e=e.firstContext;e!==null;){if(!zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ms(e){As=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function sn(e){return fv(As,e)}function gl(e,t){return As===null&&ms(e),fv(e,t)}function fv(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yi===null){if(e===null)throw Error(J(308));Yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yi=Yi.next=t;return n}var VM=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},kM=Ye.unstable_scheduleCallback,XM=Ye.unstable_NormalPriority,ke={$$typeof:Wi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fp(){return{controller:new VM,data:new Map,refCount:0}}function Qo(e){e.refCount--,e.refCount===0&&kM(XM,function(){e.controller.abort()})}var _o=null,Sd=0,Sr=0,fr=null;function WM(e,t){if(_o===null){var n=_o=[];Sd=0,Sr=Ip(),fr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Sd++,t.then(Km,Km),t}function Km(){if(--Sd===0&&_o!==null){fr!==null&&(fr.status="fulfilled");var e=_o;_o=null,Sr=0,fr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function qM(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Qm=Lt.S;Lt.S=function(e,t){Tx=Pn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&WM(e,t),Qm!==null&&Qm(e,t)};var fs=wi(null);function dp(){var e=fs.current;return e!==null?e:xe.pooledCache}function ac(e,t){t===null?Ee(fs,fs.current):Ee(fs,t.pool)}function dv(){var e=dp();return e===null?null:{parent:ke._currentValue,pool:e}}var Ir=Error(J(460)),hp=Error(J(474)),mu=Error(J(542)),Dc={then:function(){}};function Jm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hv(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(qi,qi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,tg(e),e;default:if(typeof t.status=="string")t.then(qi,qi);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(J(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,tg(e),e}throw ds=t,Ir}}function ns(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ds=n,Ir):n}}var ds=null;function $m(){if(ds===null)throw Error(J(459));var e=ds;return ds=null,e}function tg(e){if(e===Ir||e===mu)throw Error(J(483))}var dr=null,Oo=0;function _l(e){var t=Oo;return Oo+=1,dr===null&&(dr=[]),hv(dr,e,t)}function Wr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function vl(e,t){throw t.$$typeof===Ny?Error(J(525)):(e=Object.prototype.toString.call(t),Error(J(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function pv(e){function t(f,m){if(e){var v=f.deletions;v===null?(f.deletions=[m],f.flags|=16):v.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function i(f){for(var m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function a(f,m){return f=Zi(f,m),f.index=0,f.sibling=null,f}function s(f,m,v){return f.index=v,e?(v=f.alternate,v!==null?(v=v.index,v<m?(f.flags|=67108866,m):v):(f.flags|=67108866,m)):(f.flags|=1048576,m)}function r(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,m,v,y){return m===null||m.tag!==6?(m=Wu(v,f.mode,y),m.return=f,m):(m=a(m,v),m.return=f,m)}function l(f,m,v,y){var C=v.type;return C===Ks?d(f,m,v.props.children,y,v.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===va&&ns(C)===m.type)?(m=a(m,v.props),Wr(m,v),m.return=f,m):(m=ic(v.type,v.key,v.props,null,f.mode,y),Wr(m,v),m.return=f,m)}function c(f,m,v,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=qu(v,f.mode,y),m.return=f,m):(m=a(m,v.children||[]),m.return=f,m)}function d(f,m,v,y,C){return m===null||m.tag!==7?(m=us(v,f.mode,y,C),m.return=f,m):(m=a(m,v),m.return=f,m)}function h(f,m,v){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Wu(""+m,f.mode,v),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ul:return v=ic(m.type,m.key,m.props,null,f.mode,v),Wr(v,m),v.return=f,v;case ao:return m=qu(m,f.mode,v),m.return=f,m;case va:return m=ns(m),h(f,m,v)}if(so(m)||Vr(m))return m=us(m,f.mode,v,null),m.return=f,m;if(typeof m.then=="function")return h(f,_l(m),v);if(m.$$typeof===Wi)return h(f,gl(f,m),v);vl(f,m)}return null}function u(f,m,v,y){var C=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return C!==null?null:o(f,m,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ul:return v.key===C?l(f,m,v,y):null;case ao:return v.key===C?c(f,m,v,y):null;case va:return v=ns(v),u(f,m,v,y)}if(so(v)||Vr(v))return C!==null?null:d(f,m,v,y,null);if(typeof v.then=="function")return u(f,m,_l(v),y);if(v.$$typeof===Wi)return u(f,m,gl(f,v),y);vl(f,v)}return null}function p(f,m,v,y,C){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return f=f.get(v)||null,o(m,f,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ul:return f=f.get(y.key===null?v:y.key)||null,l(m,f,y,C);case ao:return f=f.get(y.key===null?v:y.key)||null,c(m,f,y,C);case va:return y=ns(y),p(f,m,v,y,C)}if(so(y)||Vr(y))return f=f.get(v)||null,d(m,f,y,C,null);if(typeof y.then=="function")return p(f,m,v,_l(y),C);if(y.$$typeof===Wi)return p(f,m,v,gl(m,y),C);vl(m,y)}return null}function _(f,m,v,y){for(var C=null,b=null,R=m,x=m=0,A=null;R!==null&&x<v.length;x++){R.index>x?(A=R,R=null):A=R.sibling;var w=u(f,R,v[x],y);if(w===null){R===null&&(R=A);break}e&&R&&w.alternate===null&&t(f,R),m=s(w,m,x),b===null?C=w:b.sibling=w,b=w,R=A}if(x===v.length)return n(f,R),Jt&&Vi(f,x),C;if(R===null){for(;x<v.length;x++)R=h(f,v[x],y),R!==null&&(m=s(R,m,x),b===null?C=R:b.sibling=R,b=R);return Jt&&Vi(f,x),C}for(R=i(R);x<v.length;x++)A=p(R,f,x,v[x],y),A!==null&&(e&&A.alternate!==null&&R.delete(A.key===null?x:A.key),m=s(A,m,x),b===null?C=A:b.sibling=A,b=A);return e&&R.forEach(function(D){return t(f,D)}),Jt&&Vi(f,x),C}function M(f,m,v,y){if(v==null)throw Error(J(151));for(var C=null,b=null,R=m,x=m=0,A=null,w=v.next();R!==null&&!w.done;x++,w=v.next()){R.index>x?(A=R,R=null):A=R.sibling;var D=u(f,R,w.value,y);if(D===null){R===null&&(R=A);break}e&&R&&D.alternate===null&&t(f,R),m=s(D,m,x),b===null?C=D:b.sibling=D,b=D,R=A}if(w.done)return n(f,R),Jt&&Vi(f,x),C;if(R===null){for(;!w.done;x++,w=v.next())w=h(f,w.value,y),w!==null&&(m=s(w,m,x),b===null?C=w:b.sibling=w,b=w);return Jt&&Vi(f,x),C}for(R=i(R);!w.done;x++,w=v.next())w=p(R,f,x,w.value,y),w!==null&&(e&&w.alternate!==null&&R.delete(w.key===null?x:w.key),m=s(w,m,x),b===null?C=w:b.sibling=w,b=w);return e&&R.forEach(function(G){return t(f,G)}),Jt&&Vi(f,x),C}function g(f,m,v,y){if(typeof v=="object"&&v!==null&&v.type===Ks&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ul:t:{for(var C=v.key;m!==null;){if(m.key===C){if(C=v.type,C===Ks){if(m.tag===7){n(f,m.sibling),y=a(m,v.props.children),y.return=f,f=y;break t}}else if(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===va&&ns(C)===m.type){n(f,m.sibling),y=a(m,v.props),Wr(y,v),y.return=f,f=y;break t}n(f,m);break}else t(f,m);m=m.sibling}v.type===Ks?(y=us(v.props.children,f.mode,y,v.key),y.return=f,f=y):(y=ic(v.type,v.key,v.props,null,f.mode,y),Wr(y,v),y.return=f,f=y)}return r(f);case ao:t:{for(C=v.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(f,m.sibling),y=a(m,v.children||[]),y.return=f,f=y;break t}else{n(f,m);break}else t(f,m);m=m.sibling}y=qu(v,f.mode,y),y.return=f,f=y}return r(f);case va:return v=ns(v),g(f,m,v,y)}if(so(v))return _(f,m,v,y);if(Vr(v)){if(C=Vr(v),typeof C!="function")throw Error(J(150));return v=C.call(v),M(f,m,v,y)}if(typeof v.then=="function")return g(f,m,_l(v),y);if(v.$$typeof===Wi)return g(f,m,gl(f,v),y);vl(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,m!==null&&m.tag===6?(n(f,m.sibling),y=a(m,v),y.return=f,f=y):(n(f,m),y=Wu(v,f.mode,y),y.return=f,f=y),r(f)):n(f,m)}return function(f,m,v,y){try{Oo=0;var C=g(f,m,v,y);return dr=null,C}catch(R){if(R===Ir||R===mu)throw R;var b=Ln(29,R,null,f.mode);return b.lanes=y,b.return=f,b}finally{}}}var gs=pv(!0),mv=pv(!1),xa=!1;function pp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function La(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Oa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,ie&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Rc(e),rv(e,null,n),t}return pu(e,i,t,n),Rc(e)}function vo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,L_(e,n)}}function ju(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Md=!1;function xo(){if(Md){var e=fr;if(e!==null)throw e}}function So(e,t,n,i){Md=!1;var a=e.updateQueue;xa=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==r&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=a.baseState;r=0,d=c=l=null,o=s;do{var u=o.lane&-536870913,p=u!==o.lane;if(p?(Zt&u)===u:(i&u)===u){u!==0&&u===Sr&&(Md=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=e,M=o;u=t;var g=n;switch(M.tag){case 1:if(_=M.payload,typeof _=="function"){h=_.call(g,h,u);break t}h=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=M.payload,u=typeof _=="function"?_.call(g,h,u):_,u==null)break t;h=Ce({},h,u);break t;case 2:xa=!0}}u=o.callback,u!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[u]:p.push(u))}else p={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,r|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);d===null&&(l=h),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=d,s===null&&(a.shared.lanes=0),ka|=r,e.lanes=r,e.memoizedState=h}}function gv(e,t){if(typeof e!="function")throw Error(J(191,e));e.call(t)}function _v(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)gv(n[e],t)}var yr=wi(null),Uc=wi(0);function eg(e,t){e=aa,Ee(Uc,e),Ee(yr,t),aa=e|t.baseLanes}function Ed(){Ee(Uc,aa),Ee(yr,yr.current)}function mp(){aa=Uc.current,$e(yr),$e(Uc)}var Hn=wi(null),ti=null;function ya(e){var t=e.alternate;Ee(Be,Be.current&1),Ee(Hn,e),ti===null&&(t===null||yr.current!==null||t.memoizedState!==null)&&(ti=e)}function bd(e){Ee(Be,Be.current),Ee(Hn,e),ti===null&&(ti=e)}function vv(e){e.tag===22?(Ee(Be,Be.current),Ee(Hn,e),ti===null&&(ti=e)):Ma()}function Ma(){Ee(Be,Be.current),Ee(Hn,Hn.current)}function Nn(e){$e(Hn),ti===e&&(ti=null),$e(Be)}var Be=wi(0);function Nc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||kd(n)||Xd(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ea=0,Ht=null,ge=null,Ge=null,Lc=!1,hr=!1,_s=!1,Oc=0,Po=0,pr=null,YM=0;function Ne(){throw Error(J(321))}function gp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zn(e[n],t[n]))return!1;return!0}function _p(e,t,n,i,a,s){return ea=s,Ht=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lt.H=e===null||e.memoizedState===null?Zv:Cp,_s=!1,s=n(i,a),_s=!1,hr&&(s=Sv(t,n,i,a)),xv(e),s}function xv(e){Lt.H=Io;var t=ge!==null&&ge.next!==null;if(ea=0,Ge=ge=Ht=null,Lc=!1,Po=0,pr=null,t)throw Error(J(300));e===null||Xe||(e=e.dependencies,e!==null&&wc(e)&&(Xe=!0))}function Sv(e,t,n,i){Ht=e;var a=0;do{if(hr&&(pr=null),Po=0,hr=!1,25<=a)throw Error(J(301));if(a+=1,Ge=ge=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Lt.H=Kv,s=t(n,i)}while(hr);return s}function jM(){var e=Lt.H,t=e.useState()[0];return t=typeof t.then=="function"?Jo(t):t,e=e.useState()[0],(ge!==null?ge.memoizedState:null)!==e&&(Ht.flags|=1024),t}function vp(){var e=Oc!==0;return Oc=0,e}function xp(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Sp(e){if(Lc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Lc=!1}ea=0,Ge=ge=Ht=null,hr=!1,Po=Oc=0,pr=null}function pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Ht.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function ze(){if(ge===null){var e=Ht.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=Ge===null?Ht.memoizedState:Ge.next;if(t!==null)Ge=t,ge=e;else{if(e===null)throw Ht.alternate===null?Error(J(467)):Error(J(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},Ge===null?Ht.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function gu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jo(e){var t=Po;return Po+=1,pr===null&&(pr=[]),e=hv(pr,e,t),t=Ht,(Ge===null?t.memoizedState:Ge.next)===null&&(t=t.alternate,Lt.H=t===null||t.memoizedState===null?Zv:Cp),e}function _u(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Jo(e);if(e.$$typeof===Wi)return sn(e)}throw Error(J(438,String(e)))}function yp(e){var t=null,n=Ht.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Ht.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=gu(),Ht.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Ly;return t.index++,n}function na(e,t){return typeof t=="function"?t(e):t}function sc(e){var t=ze();return Mp(t,ge,e)}function Mp(e,t,n){var i=e.queue;if(i===null)throw Error(J(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,d=!1;do{var h=c.lane&-536870913;if(h!==c.lane?(Zt&h)===h:(ea&h)===h){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),h===Sr&&(d=!0);else if((ea&u)===u){c=c.next,u===Sr&&(d=!0);continue}else h={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=s):l=l.next=h,Ht.lanes|=u,ka|=u;h=c.action,_s&&n(s,h),s=c.hasEagerState?c.eagerState:n(s,h)}else u={lane:h,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=s):l=l.next=u,Ht.lanes|=h,ka|=h;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!zn(s,e.memoizedState)&&(Xe=!0,d&&(n=fr,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Zu(e){var t=ze(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);zn(s,t.memoizedState)||(Xe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function yv(e,t,n){var i=Ht,a=ze(),s=Jt;if(s){if(n===void 0)throw Error(J(407));n=n()}else n=t();var r=!zn((ge||a).memoizedState,n);if(r&&(a.memoizedState=n,Xe=!0),a=a.queue,Ep(bv.bind(null,i,a,e),[e]),a.getSnapshot!==t||r||Ge!==null&&Ge.memoizedState.tag&1){if(i.flags|=2048,Mr(9,{destroy:void 0},Ev.bind(null,i,a,n,t),null),xe===null)throw Error(J(349));s||ea&127||Mv(i,t,n)}return n}function Mv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ht.updateQueue,t===null?(t=gu(),Ht.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ev(e,t,n,i){t.value=n,t.getSnapshot=i,Tv(t)&&Av(e)}function bv(e,t,n){return n(function(){Tv(t)&&Av(e)})}function Tv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zn(e,n)}catch{return!0}}function Av(e){var t=Ts(e,2);t!==null&&En(t,e,2)}function Td(e){var t=pn();if(typeof e=="function"){var n=e;if(e=n(),_s){Ta(!0);try{n()}finally{Ta(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},t}function Rv(e,t,n,i){return e.baseState=n,Mp(e,ge,typeof i=="function"?i:na)}function ZM(e,t,n,i,a){if(xu(e))throw Error(J(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Lt.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,Cv(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Cv(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=Lt.T,r={};Lt.T=r;try{var o=n(a,i),l=Lt.S;l!==null&&l(r,o),ng(e,t,o)}catch(c){Ad(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Lt.T=s}}else try{s=n(a,i),ng(e,t,s)}catch(c){Ad(e,t,c)}}function ng(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){ig(e,t,i)},function(i){return Ad(e,t,i)}):ig(e,t,n)}function ig(e,t,n){t.status="fulfilled",t.value=n,wv(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Cv(e,n)))}function Ad(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,wv(t),t=t.next;while(t!==i)}e.action=null}function wv(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Dv(e,t){return t}function ag(e,t){if(Jt){var n=xe.formState;if(n!==null){t:{var i=Ht;if(Jt){if(Ae){e:{for(var a=Ae,s=Jn;a.nodeType!==8;){if(!s){a=null;break e}if(a=ei(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Ae=ei(a.nextSibling),i=a.data==="F!";break t}}Ga(i)}i=!1}i&&(t=n[0])}}return n=pn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dv,lastRenderedState:t},n.queue=i,n=qv.bind(null,Ht,i),i.dispatch=n,i=Td(!1),s=Rp.bind(null,Ht,!1,i.queue),i=pn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=ZM.bind(null,Ht,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function sg(e){var t=ze();return Uv(t,ge,e)}function Uv(e,t,n){if(t=Mp(e,t,Dv)[0],e=sc(na)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Jo(t)}catch(r){throw r===Ir?mu:r}else i=t;t=ze();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(Ht.flags|=2048,Mr(9,{destroy:void 0},KM.bind(null,a,n),null)),[i,s,e]}function KM(e,t){e.action=t}function rg(e){var t=ze(),n=ge;if(n!==null)return Uv(t,n,e);ze(),t=t.memoizedState,n=ze();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Mr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Ht.updateQueue,t===null&&(t=gu(),Ht.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Nv(){return ze().memoizedState}function rc(e,t,n,i){var a=pn();Ht.flags|=e,a.memoizedState=Mr(1|t,{destroy:void 0},n,i===void 0?null:i)}function vu(e,t,n,i){var a=ze();i=i===void 0?null:i;var s=a.memoizedState.inst;ge!==null&&i!==null&&gp(i,ge.memoizedState.deps)?a.memoizedState=Mr(t,s,n,i):(Ht.flags|=e,a.memoizedState=Mr(1|t,s,n,i))}function og(e,t){rc(8390656,8,e,t)}function Ep(e,t){vu(2048,8,e,t)}function QM(e){Ht.flags|=4;var t=Ht.updateQueue;if(t===null)t=gu(),Ht.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Lv(e){var t=ze().memoizedState;return QM({ref:t,nextImpl:e}),function(){if(ie&2)throw Error(J(440));return t.impl.apply(void 0,arguments)}}function Ov(e,t){return vu(4,2,e,t)}function Pv(e,t){return vu(4,4,e,t)}function Iv(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bv(e,t,n){n=n!=null?n.concat([e]):null,vu(4,4,Iv.bind(null,t,e),n)}function bp(){}function Fv(e,t){var n=ze();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&gp(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function zv(e,t){var n=ze();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&gp(t,i[1]))return i[0];if(i=e(),_s){Ta(!0);try{e()}finally{Ta(!1)}}return n.memoizedState=[i,t],i}function Tp(e,t,n){return n===void 0||ea&1073741824&&!(Zt&261930)?e.memoizedState=t:(e.memoizedState=n,e=Rx(),Ht.lanes|=e,ka|=e,n)}function Hv(e,t,n,i){return zn(n,t)?n:yr.current!==null?(e=Tp(e,n,i),zn(e,t)||(Xe=!0),e):!(ea&42)||ea&1073741824&&!(Zt&261930)?(Xe=!0,e.memoizedState=n):(e=Rx(),Ht.lanes|=e,ka|=e,t)}function Gv(e,t,n,i,a){var s=ae.p;ae.p=s!==0&&8>s?s:8;var r=Lt.T,o={};Lt.T=o,Rp(e,!1,t,n);try{var l=a(),c=Lt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=qM(l,i);yo(e,t,d,Fn(e))}else yo(e,t,i,Fn(e))}catch(h){yo(e,t,{then:function(){},status:"rejected",reason:h},Fn())}finally{ae.p=s,r!==null&&o.types!==null&&(r.types=o.types),Lt.T=r}}function JM(){}function Rd(e,t,n,i){if(e.tag!==5)throw Error(J(476));var a=Vv(e).queue;Gv(e,a,t,cs,n===null?JM:function(){return kv(e),n(i)})}function Vv(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:cs,baseState:cs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:cs},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function kv(e){var t=Vv(e);t.next===null&&(t=e.alternate.memoizedState),yo(e,t.next.queue,{},Fn())}function Ap(){return sn(zo)}function Xv(){return ze().memoizedState}function Wv(){return ze().memoizedState}function $M(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Fn();e=La(n);var i=Oa(t,e,n);i!==null&&(En(i,t,n),vo(i,t,n)),t={cache:fp()},e.payload=t;return}t=t.return}}function tE(e,t,n){var i=Fn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},xu(e)?Yv(t,n):(n=op(e,t,n,i),n!==null&&(En(n,e,i),jv(n,t,i)))}function qv(e,t,n){var i=Fn();yo(e,t,n,i)}function yo(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(xu(e))Yv(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,zn(o,r))return pu(e,t,a,0),xe===null&&hu(),!1}catch{}finally{}if(n=op(e,t,a,i),n!==null)return En(n,e,i),jv(n,t,i),!0}return!1}function Rp(e,t,n,i){if(i={lane:2,revertLane:Ip(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},xu(e)){if(t)throw Error(J(479))}else t=op(e,n,i,2),t!==null&&En(t,e,2)}function xu(e){var t=e.alternate;return e===Ht||t!==null&&t===Ht}function Yv(e,t){hr=Lc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jv(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,L_(e,n)}}var Io={readContext:sn,use:_u,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne};Io.useEffectEvent=Ne;var Zv={readContext:sn,use:_u,useCallback:function(e,t){return pn().memoizedState=[e,t===void 0?null:t],e},useContext:sn,useEffect:og,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,rc(4194308,4,Iv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return rc(4194308,4,e,t)},useInsertionEffect:function(e,t){rc(4,2,e,t)},useMemo:function(e,t){var n=pn();t=t===void 0?null:t;var i=e();if(_s){Ta(!0);try{e()}finally{Ta(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=pn();if(n!==void 0){var a=n(t);if(_s){Ta(!0);try{n(t)}finally{Ta(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=tE.bind(null,Ht,e),[i.memoizedState,e]},useRef:function(e){var t=pn();return e={current:e},t.memoizedState=e},useState:function(e){e=Td(e);var t=e.queue,n=qv.bind(null,Ht,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bp,useDeferredValue:function(e,t){var n=pn();return Tp(n,e,t)},useTransition:function(){var e=Td(!1);return e=Gv.bind(null,Ht,e.queue,!0,!1),pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Ht,a=pn();if(Jt){if(n===void 0)throw Error(J(407));n=n()}else{if(n=t(),xe===null)throw Error(J(349));Zt&127||Mv(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,og(bv.bind(null,i,s,e),[e]),i.flags|=2048,Mr(9,{destroy:void 0},Ev.bind(null,i,s,n,t),null),n},useId:function(){var e=pn(),t=xe.identifierPrefix;if(Jt){var n=vi,i=_i;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Oc++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=YM++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ap,useFormState:ag,useActionState:ag,useOptimistic:function(e){var t=pn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rp.bind(null,Ht,!0,n),n.dispatch=t,[e,t]},useMemoCache:yp,useCacheRefresh:function(){return pn().memoizedState=$M.bind(null,Ht)},useEffectEvent:function(e){var t=pn(),n={impl:e};return t.memoizedState=n,function(){if(ie&2)throw Error(J(440));return n.impl.apply(void 0,arguments)}}},Cp={readContext:sn,use:_u,useCallback:Fv,useContext:sn,useEffect:Ep,useImperativeHandle:Bv,useInsertionEffect:Ov,useLayoutEffect:Pv,useMemo:zv,useReducer:sc,useRef:Nv,useState:function(){return sc(na)},useDebugValue:bp,useDeferredValue:function(e,t){var n=ze();return Hv(n,ge.memoizedState,e,t)},useTransition:function(){var e=sc(na)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:Jo(e),t]},useSyncExternalStore:yv,useId:Xv,useHostTransitionStatus:Ap,useFormState:sg,useActionState:sg,useOptimistic:function(e,t){var n=ze();return Rv(n,ge,e,t)},useMemoCache:yp,useCacheRefresh:Wv};Cp.useEffectEvent=Lv;var Kv={readContext:sn,use:_u,useCallback:Fv,useContext:sn,useEffect:Ep,useImperativeHandle:Bv,useInsertionEffect:Ov,useLayoutEffect:Pv,useMemo:zv,useReducer:Zu,useRef:Nv,useState:function(){return Zu(na)},useDebugValue:bp,useDeferredValue:function(e,t){var n=ze();return ge===null?Tp(n,e,t):Hv(n,ge.memoizedState,e,t)},useTransition:function(){var e=Zu(na)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:Jo(e),t]},useSyncExternalStore:yv,useId:Xv,useHostTransitionStatus:Ap,useFormState:rg,useActionState:rg,useOptimistic:function(e,t){var n=ze();return ge!==null?Rv(n,ge,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:yp,useCacheRefresh:Wv};Kv.useEffectEvent=Lv;function Ku(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cd={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Fn(),a=La(i);a.payload=t,n!=null&&(a.callback=n),t=Oa(e,a,i),t!==null&&(En(t,e,i),vo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Fn(),a=La(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Oa(e,a,i),t!==null&&(En(t,e,i),vo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fn(),i=La(n);i.tag=2,t!=null&&(i.callback=t),t=Oa(e,i,n),t!==null&&(En(t,e,n),vo(t,e,n))}};function lg(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!Uo(n,i)||!Uo(a,s):!0}function cg(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Cd.enqueueReplaceState(t,t.state,null)}function vs(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ce({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function Qv(e){Ac(e)}function Jv(e){console.error(e)}function $v(e){Ac(e)}function Pc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function ug(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function wd(e,t,n){return n=La(n),n.tag=3,n.payload={element:null},n.callback=function(){Pc(e,t)},n}function tx(e){return e=La(e),e.tag=3,e}function ex(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){ug(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){ug(t,n,i),typeof a!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function eE(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Pr(t,n,a,!0),n=Hn.current,n!==null){switch(n.tag){case 31:case 13:return ti===null?Hc():n.alternate===null&&Le===0&&(Le=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Dc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),lf(e,i,a)),!1;case 22:return n.flags|=65536,i===Dc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),lf(e,i,a)),!1}throw Error(J(435,n.tag))}return lf(e,i,a),Hc(),!1}if(Jt)return t=Hn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==gd&&(e=Error(J(422),{cause:i}),Lo(Qn(e,n)))):(i!==gd&&(t=Error(J(423),{cause:i}),Lo(Qn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Qn(i,n),a=wd(e.stateNode,i,a),ju(e,a),Le!==4&&(Le=2)),!1;var s=Error(J(520),{cause:i});if(s=Qn(s,n),bo===null?bo=[s]:bo.push(s),Le!==4&&(Le=2),t===null)return!0;i=Qn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=wd(n.stateNode,i,e),ju(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Pa===null||!Pa.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=tx(a),ex(a,e,n,i),ju(n,a),!1}n=n.return}while(n!==null);return!1}var wp=Error(J(461)),Xe=!1;function en(e,t,n,i){t.child=e===null?mv(t,null,n,i):gs(t,e.child,n,i)}function fg(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return ms(t),i=_p(e,t,n,r,s,a),o=vp(),e!==null&&!Xe?(xp(e,t,a),ia(e,t,a)):(Jt&&o&&cp(t),t.flags|=1,en(e,t,i,a),t.child)}function dg(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!lp(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,nx(e,t,s,i,a)):(e=ic(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Dp(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:Uo,n(r,i)&&e.ref===t.ref)return ia(e,t,a)}return t.flags|=1,e=Zi(s,i),e.ref=t.ref,e.return=t,t.child=e}function nx(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(Uo(s,i)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=i=s,Dp(e,a))e.flags&131072&&(Xe=!0);else return t.lanes=e.lanes,ia(e,t,a)}return Dd(e,t,n,i,a)}function ix(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return hg(e,t,s,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ac(t,s!==null?s.cachePool:null),s!==null?eg(t,s):Ed(),vv(t);else return i=t.lanes=536870912,hg(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(ac(t,s.cachePool),eg(t,s),Ma(),t.memoizedState=null):(e!==null&&ac(t,null),Ed(),Ma());return en(e,t,a,n),t.child}function oo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function hg(e,t,n,i,a){var s=dp();return s=s===null?null:{parent:ke._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&ac(t,null),Ed(),vv(t),e!==null&&Pr(e,t,i,!0),t.childLanes=a,null}function oc(e,t){return t=Ic({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pg(e,t,n){return gs(t,e.child,null,n),e=oc(t,t.pendingProps),e.flags|=2,Nn(t),t.memoizedState=null,e}function nE(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Jt){if(i.mode==="hidden")return e=oc(t,i),t.lanes=536870912,oo(null,e);if(bd(t),(e=Ae)?(e=Zx(e,Jn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:_i,overflow:vi}:null,retryLane:536870912,hydrationErrors:null},n=lv(e),n.return=t,t.child=n,an=t,Ae=null)):e=null,e===null)throw Ga(t);return t.lanes=536870912,null}return oc(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(bd(t),a)if(t.flags&256)t.flags&=-257,t=pg(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(J(558));else if(Xe||Pr(e,t,n,!1),a=(n&e.childLanes)!==0,Xe||a){if(i=xe,i!==null&&(r=O_(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,Ts(e,r),En(i,e,r),wp;Hc(),t=pg(e,t,n)}else e=s.treeContext,Ae=ei(r.nextSibling),an=t,Jt=!0,Na=null,Jn=!1,e!==null&&uv(t,e),t=oc(t,i),t.flags|=4096;return t}return e=Zi(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function lc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(J(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Dd(e,t,n,i,a){return ms(t),n=_p(e,t,n,i,void 0,a),i=vp(),e!==null&&!Xe?(xp(e,t,a),ia(e,t,a)):(Jt&&i&&cp(t),t.flags|=1,en(e,t,n,a),t.child)}function mg(e,t,n,i,a,s){return ms(t),t.updateQueue=null,n=Sv(t,i,n,a),xv(e),i=vp(),e!==null&&!Xe?(xp(e,t,s),ia(e,t,s)):(Jt&&i&&cp(t),t.flags|=1,en(e,t,n,s),t.child)}function gg(e,t,n,i,a){if(ms(t),t.stateNode===null){var s=ar,r=n.contextType;typeof r=="object"&&r!==null&&(s=sn(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Cd,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},pp(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?sn(r):ar,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Ku(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Cd.enqueueReplaceState(s,s.state,null),So(t,i,s,a),xo(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=vs(n,o);s.props=l;var c=s.context,d=n.contextType;r=ar,typeof d=="object"&&d!==null&&(r=sn(d));var h=n.getDerivedStateFromProps;d=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&cg(t,s,i,r),xa=!1;var u=t.memoizedState;s.state=u,So(t,i,s,a),xo(),c=t.memoizedState,o||u!==c||xa?(typeof h=="function"&&(Ku(t,n,h,i),c=t.memoizedState),(l=xa||lg(t,n,l,i,u,c,r))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,yd(e,t),r=t.memoizedProps,d=vs(n,r),s.props=d,h=t.pendingProps,u=s.context,c=n.contextType,l=ar,typeof c=="object"&&c!==null&&(l=sn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==h||u!==l)&&cg(t,s,i,l),xa=!1,u=t.memoizedState,s.state=u,So(t,i,s,a),xo();var p=t.memoizedState;r!==h||u!==p||xa||e!==null&&e.dependencies!==null&&wc(e.dependencies)?(typeof o=="function"&&(Ku(t,n,o,i),p=t.memoizedState),(d=xa||lg(t,n,d,i,u,p,l)||e!==null&&e.dependencies!==null&&wc(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,p,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,p,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),s.props=i,s.state=p,s.context=l,i=d):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,lc(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=gs(t,e.child,null,a),t.child=gs(t,null,n,a)):en(e,t,n,a),t.memoizedState=s.state,e=t.child):e=ia(e,t,a),e}function _g(e,t,n,i){return ps(),t.flags|=256,en(e,t,n,i),t.child}var Qu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ju(e){return{baseLanes:e,cachePool:dv()}}function $u(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=On),e}function ax(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Jt){if(a?ya(t):Ma(),(e=Ae)?(e=Zx(e,Jn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:_i,overflow:vi}:null,retryLane:536870912,hydrationErrors:null},n=lv(e),n.return=t,t.child=n,an=t,Ae=null)):e=null,e===null)throw Ga(t);return Xd(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(Ma(),a=t.mode,o=Ic({mode:"hidden",children:o},a),i=us(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Ju(n),i.childLanes=$u(e,r,n),t.memoizedState=Qu,oo(null,i)):(ya(t),Ud(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)t.flags&256?(ya(t),t.flags&=-257,t=tf(e,t,n)):t.memoizedState!==null?(Ma(),t.child=e.child,t.flags|=128,t=null):(Ma(),o=i.fallback,a=t.mode,i=Ic({mode:"visible",children:i.children},a),o=us(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,gs(t,e.child,null,n),i=t.child,i.memoizedState=Ju(n),i.childLanes=$u(e,r,n),t.memoizedState=Qu,t=oo(null,i));else if(ya(t),Xd(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(J(419)),i.stack="",i.digest=r,Lo({value:i,source:null,stack:null}),t=tf(e,t,n)}else if(Xe||Pr(e,t,n,!1),r=(n&e.childLanes)!==0,Xe||r){if(r=xe,r!==null&&(i=O_(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Ts(e,i),En(r,e,i),wp;kd(o)||Hc(),t=tf(e,t,n)}else kd(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ae=ei(o.nextSibling),an=t,Jt=!0,Na=null,Jn=!1,e!==null&&uv(t,e),t=Ud(t,i.children),t.flags|=4096);return t}return a?(Ma(),o=i.fallback,a=t.mode,l=e.child,c=l.sibling,i=Zi(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=Zi(c,o):(o=us(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,oo(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Ju(n):(a=o.cachePool,a!==null?(l=ke._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=dv(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=$u(e,r,n),t.memoizedState=Qu,oo(e.child,i)):(ya(t),n=e.child,e=n.sibling,n=Zi(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Ud(e,t){return t=Ic({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ic(e,t){return e=Ln(22,e,null,t),e.lanes=0,e}function tf(e,t,n){return gs(t,e.child,null,n),e=Ud(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vg(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),vd(e.return,t,n)}function ef(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function sx(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Be.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Ee(Be,r),en(e,t,i,n),i=Jt?No:0,!o&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vg(e,n,t);else if(e.tag===19)vg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Nc(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),ef(t,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Nc(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ef(t,!0,n,null,s,i);break;case"together":ef(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ia(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ka|=t.lanes,!(n&t.childLanes))if(e!==null){if(Pr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(J(153));if(t.child!==null){for(e=t.child,n=Zi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dp(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&wc(e)))}function iE(e,t,n){switch(t.tag){case 3:Mc(t,t.stateNode.containerInfo),Sa(t,ke,e.memoizedState.cache),ps();break;case 27:case 5:sd(t);break;case 4:Mc(t,t.stateNode.containerInfo);break;case 10:Sa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,bd(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(ya(t),t.flags|=128,null):n&t.child.childLanes?ax(e,t,n):(ya(t),e=ia(e,t,n),e!==null?e.sibling:null);ya(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Pr(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return sx(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ee(Be,Be.current),i)break;return null;case 22:return t.lanes=0,ix(e,t,n,t.pendingProps);case 24:Sa(t,ke,e.memoizedState.cache)}return ia(e,t,n)}function rx(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!Dp(e,n)&&!(t.flags&128))return Xe=!1,iE(e,t,n);Xe=!!(e.flags&131072)}else Xe=!1,Jt&&t.flags&1048576&&cv(t,No,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=ns(t.elementType),t.type=e,typeof e=="function")lp(e)?(i=vs(e,i),t.tag=1,t=gg(null,t,e,i,n)):(t.tag=0,t=Dd(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===jh){t.tag=11,t=fg(null,t,e,i,n);break t}else if(a===Zh){t.tag=14,t=dg(null,t,e,i,n);break t}}throw t=id(e)||e,Error(J(306,t,""))}}return t;case 0:return Dd(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=vs(i,t.pendingProps),gg(e,t,i,a,n);case 3:t:{if(Mc(t,t.stateNode.containerInfo),e===null)throw Error(J(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,yd(e,t),So(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Sa(t,ke,i),i!==s.cache&&xd(t,[ke],n,!0),xo(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=_g(e,t,i,n);break t}else if(i!==a){a=Qn(Error(J(424)),t),Lo(a),t=_g(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ae=ei(e.firstChild),an=t,Jt=!0,Na=null,Jn=!0,n=mv(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ps(),i===a){t=ia(e,t,n);break t}en(e,t,i,n)}t=t.child}return t;case 26:return lc(e,t),e===null?(n=Fg(t.type,null,t.pendingProps,null))?t.memoizedState=n:Jt||(n=t.type,e=t.pendingProps,i=Xc(Ua.current).createElement(n),i[nn]=t,i[An]=e,on(i,n,e),Je(i),t.stateNode=i):t.memoizedState=Fg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return sd(t),e===null&&Jt&&(i=t.stateNode=Kx(t.type,t.pendingProps,Ua.current),an=t,Jn=!0,a=Ae,Ya(t.type)?(Wd=a,Ae=ei(i.firstChild)):Ae=a),en(e,t,t.pendingProps.children,n),lc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Jt&&((a=i=Ae)&&(i=LE(i,t.type,t.pendingProps,Jn),i!==null?(t.stateNode=i,an=t,Ae=ei(i.firstChild),Jn=!1,a=!0):a=!1),a||Ga(t)),sd(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,Gd(a,s)?i=null:r!==null&&Gd(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=_p(e,t,jM,null,null,n),zo._currentValue=a),lc(e,t),en(e,t,i,n),t.child;case 6:return e===null&&Jt&&((e=n=Ae)&&(n=OE(n,t.pendingProps,Jn),n!==null?(t.stateNode=n,an=t,Ae=null,e=!0):e=!1),e||Ga(t)),null;case 13:return ax(e,t,n);case 4:return Mc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=gs(t,null,i,n):en(e,t,i,n),t.child;case 11:return fg(e,t,t.type,t.pendingProps,n);case 7:return en(e,t,t.pendingProps,n),t.child;case 8:return en(e,t,t.pendingProps.children,n),t.child;case 12:return en(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Sa(t,t.type,i.value),en(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,ms(t),a=sn(a),i=i(a),t.flags|=1,en(e,t,i,n),t.child;case 14:return dg(e,t,t.type,t.pendingProps,n);case 15:return nx(e,t,t.type,t.pendingProps,n);case 19:return sx(e,t,n);case 31:return nE(e,t,n);case 22:return ix(e,t,n,t.pendingProps);case 24:return ms(t),i=sn(ke),e===null?(a=dp(),a===null&&(a=xe,s=fp(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},pp(t),Sa(t,ke,a)):(e.lanes&n&&(yd(e,t),So(t,null,null,n),xo()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Sa(t,ke,i)):(i=s.cache,Sa(t,ke,i),i!==a.cache&&xd(t,[ke],n,!0))),en(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(J(156,t.tag))}function Li(e){e.flags|=4}function nf(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(Dx())e.flags|=8192;else throw ds=Dc,hp}else e.flags&=-16777217}function xg(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!$x(t))if(Dx())e.flags|=8192;else throw ds=Dc,hp}function xl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?U_():536870912,e.lanes|=t,Er|=t)}function qr(e,t){if(!Jt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function aE(e,t,n){var i=t.pendingProps;switch(up(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ki(ke),_r(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Us(t)?Li(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Yu())),Te(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(Li(t),s!==null?(Te(t),xg(t,s)):(Te(t),nf(t,a,null,i,n))):s?s!==e.memoizedState?(Li(t),Te(t),xg(t,s)):(Te(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Li(t),Te(t),nf(t,a,e,i,n)),null;case 27:if(Ec(t),n=Ua.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Li(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return Te(t),null}e=Mi.current,Us(t)?jm(t):(e=Kx(a,i,n),t.stateNode=e,Li(t))}return Te(t),null;case 5:if(Ec(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Li(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return Te(t),null}if(s=Mi.current,Us(t))jm(t);else{var r=Xc(Ua.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[nn]=t,s[An]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(on(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Li(t)}}return Te(t),nf(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Li(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(J(166));if(e=Ua.current,Us(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=an,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[nn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||qx(e.nodeValue,n)),e||Ga(t,!0)}else e=Xc(e).createTextNode(i),e[nn]=t,t.stateNode=e}return Te(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Us(t),n!==null){if(e===null){if(!i)throw Error(J(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(557));e[nn]=t}else ps(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),e=!1}else n=Yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Nn(t),t):(Nn(t),null);if(t.flags&128)throw Error(J(558))}return Te(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Us(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(J(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(J(317));a[nn]=t}else ps(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),a=!1}else a=Yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Nn(t),t):(Nn(t),null)}return Nn(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),xl(t,t.updateQueue),Te(t),null);case 4:return _r(),e===null&&Bp(t.stateNode.containerInfo),Te(t),null;case 10:return Ki(t.type),Te(t),null;case 19:if($e(Be),i=t.memoizedState,i===null)return Te(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)qr(i,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Nc(e),s!==null){for(t.flags|=128,qr(i,!1),e=s.updateQueue,t.updateQueue=e,xl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ov(n,e),n=n.sibling;return Ee(Be,Be.current&1|2),Jt&&Vi(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Pn()>Fc&&(t.flags|=128,a=!0,qr(i,!1),t.lanes=4194304)}else{if(!a)if(e=Nc(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,xl(t,e),qr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Jt)return Te(t),null}else 2*Pn()-i.renderingStartTime>Fc&&n!==536870912&&(t.flags|=128,a=!0,qr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Pn(),e.sibling=null,n=Be.current,Ee(Be,a?n&1|2:n&1),Jt&&Vi(t,i.treeForkCount),e):(Te(t),null);case 22:case 23:return Nn(t),mp(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),n=t.updateQueue,n!==null&&xl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&$e(fs),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ki(ke),Te(t),null;case 25:return null;case 30:return null}throw Error(J(156,t.tag))}function sE(e,t){switch(up(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ki(ke),_r(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ec(t),null;case 31:if(t.memoizedState!==null){if(Nn(t),t.alternate===null)throw Error(J(340));ps()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Nn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(J(340));ps()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $e(Be),null;case 4:return _r(),null;case 10:return Ki(t.type),null;case 22:case 23:return Nn(t),mp(),e!==null&&$e(fs),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ki(ke),null;case 25:return null;default:return null}}function ox(e,t){switch(up(t),t.tag){case 3:Ki(ke),_r();break;case 26:case 27:case 5:Ec(t);break;case 4:_r();break;case 31:t.memoizedState!==null&&Nn(t);break;case 13:Nn(t);break;case 19:$e(Be);break;case 10:Ki(t.type);break;case 22:case 23:Nn(t),mp(),e!==null&&$e(fs);break;case 24:Ki(ke)}}function $o(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){ue(t,t.return,o)}}function Va(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(d){ue(a,l,d)}}}i=i.next}while(i!==s)}}catch(d){ue(t,t.return,d)}}function lx(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{_v(t,n)}catch(i){ue(e,e.return,i)}}}function cx(e,t,n){n.props=vs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ue(e,t,i)}}function Mo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){ue(e,t,a)}}function xi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){ue(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ue(e,t,a)}else n.current=null}function ux(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){ue(e,e.return,a)}}function af(e,t,n){try{var i=e.stateNode;RE(i,e.type,n,t),i[An]=t}catch(a){ue(e,e.return,a)}}function fx(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function sf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||fx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nd(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qi));else if(i!==4&&(i===27&&Ya(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Nd(e,t,n),e=e.sibling;e!==null;)Nd(e,t,n),e=e.sibling}function Bc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Ya(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Bc(e,t,n),e=e.sibling;e!==null;)Bc(e,t,n),e=e.sibling}function dx(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);on(t,i,n),t[nn]=e,t[An]=n}catch(s){ue(e,e.return,s)}}var ki=!1,Ve=!1,rf=!1,Sg=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function rE(e,t){if(e=e.containerInfo,zd=jc,e=$_(e),sp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,d=0,h=e,u=null;e:for(;;){for(var p;h!==n||a!==0&&h.nodeType!==3||(o=r+a),h!==s||i!==0&&h.nodeType!==3||(l=r+i),h.nodeType===3&&(r+=h.nodeValue.length),(p=h.firstChild)!==null;)u=h,h=p;for(;;){if(h===e)break e;if(u===n&&++c===a&&(o=r),u===s&&++d===i&&(l=r),(p=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hd={focusedElem:e,selectionRange:n},jc=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,s=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,n=t,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var _=vs(n.type,a);e=i.getSnapshotBeforeUpdate(_,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(M){ue(n,n.return,M)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Vd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(J(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function hx(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Pi(e,n),i&4&&$o(5,n);break;case 1:if(Pi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ue(n,n.return,r)}else{var a=vs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ue(n,n.return,r)}}i&64&&lx(n),i&512&&Mo(n,n.return);break;case 3:if(Pi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{_v(e,t)}catch(r){ue(n,n.return,r)}}break;case 27:t===null&&i&4&&dx(n);case 26:case 5:Pi(e,n),t===null&&i&4&&ux(n),i&512&&Mo(n,n.return);break;case 12:Pi(e,n);break;case 31:Pi(e,n),i&4&&gx(e,n);break;case 13:Pi(e,n),i&4&&_x(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=mE.bind(null,n),PE(e,n))));break;case 22:if(i=n.memoizedState!==null||ki,!i){t=t!==null&&t.memoizedState!==null||Ve,a=ki;var s=Ve;ki=i,(Ve=t)&&!s?Gi(e,n,(n.subtreeFlags&8772)!==0):Pi(e,n),ki=a,Ve=s}break;case 30:break;default:Pi(e,n)}}function px(e){var t=e.alternate;t!==null&&(e.alternate=null,px(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&$h(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var we=null,yn=!1;function Oi(e,t,n){for(n=n.child;n!==null;)mx(e,t,n),n=n.sibling}function mx(e,t,n){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount(qo,n)}catch{}switch(n.tag){case 26:Ve||xi(n,t),Oi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ve||xi(n,t);var i=we,a=yn;Ya(n.type)&&(we=n.stateNode,yn=!1),Oi(e,t,n),Ao(n.stateNode),we=i,yn=a;break;case 5:Ve||xi(n,t);case 6:if(i=we,a=yn,we=null,Oi(e,t,n),we=i,yn=a,we!==null)if(yn)try{(we.nodeType===9?we.body:we.nodeName==="HTML"?we.ownerDocument.body:we).removeChild(n.stateNode)}catch(s){ue(n,t,s)}else try{we.removeChild(n.stateNode)}catch(s){ue(n,t,s)}break;case 18:we!==null&&(yn?(e=we,Lg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Rr(e)):Lg(we,n.stateNode));break;case 4:i=we,a=yn,we=n.stateNode.containerInfo,yn=!0,Oi(e,t,n),we=i,yn=a;break;case 0:case 11:case 14:case 15:Va(2,n,t),Ve||Va(4,n,t),Oi(e,t,n);break;case 1:Ve||(xi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&cx(n,t,i)),Oi(e,t,n);break;case 21:Oi(e,t,n);break;case 22:Ve=(i=Ve)||n.memoizedState!==null,Oi(e,t,n),Ve=i;break;default:Oi(e,t,n)}}function gx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Rr(e)}catch(n){ue(t,t.return,n)}}}function _x(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Rr(e)}catch(n){ue(t,t.return,n)}}function oE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Sg),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Sg),t;default:throw Error(J(435,e.tag))}}function Sl(e,t){var n=oE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=gE.bind(null,e,i);i.then(a,a)}})}function vn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(Ya(o.type)){we=o.stateNode,yn=!1;break t}break;case 5:we=o.stateNode,yn=!1;break t;case 3:case 4:we=o.stateNode.containerInfo,yn=!0;break t}o=o.return}if(we===null)throw Error(J(160));mx(s,r,a),we=null,yn=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vx(t,e),t=t.sibling}var oi=null;function vx(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vn(t,e),xn(e),i&4&&(Va(3,e,e.return),$o(3,e),Va(5,e,e.return));break;case 1:vn(t,e),xn(e),i&512&&(Ve||n===null||xi(n,n.return)),i&64&&ki&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=oi;if(vn(t,e),xn(e),i&512&&(Ve||n===null||xi(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[Zo]||s[nn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),on(s,i,n),s[nn]=e,Je(s),i=s;break t;case"link":var r=Hg("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}s=a.createElement(i),on(s,i,n),a.head.appendChild(s);break;case"meta":if(r=Hg("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}s=a.createElement(i),on(s,i,n),a.head.appendChild(s);break;default:throw Error(J(468,i))}s[nn]=e,Je(s),i=s}e.stateNode=i}else Gg(a,e.type,e.stateNode);else e.stateNode=zg(a,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?Gg(a,e.type,e.stateNode):zg(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&af(e,e.memoizedProps,n.memoizedProps)}break;case 27:vn(t,e),xn(e),i&512&&(Ve||n===null||xi(n,n.return)),n!==null&&i&4&&af(e,e.memoizedProps,n.memoizedProps);break;case 5:if(vn(t,e),xn(e),i&512&&(Ve||n===null||xi(n,n.return)),e.flags&32){a=e.stateNode;try{xr(a,"")}catch(_){ue(e,e.return,_)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,af(e,a,n!==null?n.memoizedProps:a)),i&1024&&(rf=!0);break;case 6:if(vn(t,e),xn(e),i&4){if(e.stateNode===null)throw Error(J(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(_){ue(e,e.return,_)}}break;case 3:if(fc=null,a=oi,oi=Wc(t.containerInfo),vn(t,e),oi=a,xn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Rr(t.containerInfo)}catch(_){ue(e,e.return,_)}rf&&(rf=!1,xx(e));break;case 4:i=oi,oi=Wc(e.stateNode.containerInfo),vn(t,e),xn(e),oi=i;break;case 12:vn(t,e),xn(e);break;case 31:vn(t,e),xn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Sl(e,i)));break;case 13:vn(t,e),xn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Su=Pn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Sl(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=ki,d=Ve;if(ki=c||a,Ve=d||l,vn(t,e),Ve=d,ki=c,xn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||ki||Ve||is(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var h=l.memoizedProps.style,u=h!=null&&h.hasOwnProperty("display")?h.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(_){ue(l,l.return,_)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(_){ue(l,l.return,_)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;a?Og(p,!0):Og(l.stateNode,!1)}catch(_){ue(l,l.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Sl(e,n))));break;case 19:vn(t,e),xn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Sl(e,i)));break;case 30:break;case 21:break;default:vn(t,e),xn(e)}}function xn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(fx(i)){n=i;break}i=i.return}if(n==null)throw Error(J(160));switch(n.tag){case 27:var a=n.stateNode,s=sf(e);Bc(e,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(xr(r,""),n.flags&=-33);var o=sf(e);Bc(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=sf(e);Nd(e,c,l);break;default:throw Error(J(161))}}catch(d){ue(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xx(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Pi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)hx(e,t.alternate,t),t=t.sibling}function is(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Va(4,t,t.return),is(t);break;case 1:xi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&cx(t,t.return,n),is(t);break;case 27:Ao(t.stateNode);case 26:case 5:xi(t,t.return),is(t);break;case 22:t.memoizedState===null&&is(t);break;case 30:is(t);break;default:is(t)}e=e.sibling}}function Gi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:Gi(a,s,n),$o(4,s);break;case 1:if(Gi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){ue(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)gv(l[a],o)}catch(c){ue(i,i.return,c)}}n&&r&64&&lx(s),Mo(s,s.return);break;case 27:dx(s);case 26:case 5:Gi(a,s,n),n&&i===null&&r&4&&ux(s),Mo(s,s.return);break;case 12:Gi(a,s,n);break;case 31:Gi(a,s,n),n&&r&4&&gx(a,s);break;case 13:Gi(a,s,n),n&&r&4&&_x(a,s);break;case 22:s.memoizedState===null&&Gi(a,s,n),Mo(s,s.return);break;case 30:break;default:Gi(a,s,n)}t=t.sibling}}function Up(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Qo(n))}function Np(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qo(e))}function ii(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sx(e,t,n,i),t=t.sibling}function Sx(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ii(e,t,n,i),a&2048&&$o(9,t);break;case 1:ii(e,t,n,i);break;case 3:ii(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qo(e)));break;case 12:if(a&2048){ii(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ue(t,t.return,l)}}else ii(e,t,n,i);break;case 31:ii(e,t,n,i);break;case 13:ii(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?ii(e,t,n,i):Eo(e,t):s._visibility&2?ii(e,t,n,i):(s._visibility|=2,js(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&Up(r,t);break;case 24:ii(e,t,n,i),a&2048&&Np(t.alternate,t);break;default:ii(e,t,n,i)}}function js(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:js(s,r,o,l,a),$o(8,r);break;case 23:break;case 22:var d=r.stateNode;r.memoizedState!==null?d._visibility&2?js(s,r,o,l,a):Eo(s,r):(d._visibility|=2,js(s,r,o,l,a)),a&&c&2048&&Up(r.alternate,r);break;case 24:js(s,r,o,l,a),a&&c&2048&&Np(r.alternate,r);break;default:js(s,r,o,l,a)}t=t.sibling}}function Eo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:Eo(n,i),a&2048&&Up(i.alternate,i);break;case 24:Eo(n,i),a&2048&&Np(i.alternate,i);break;default:Eo(n,i)}t=t.sibling}}var lo=8192;function Ns(e,t,n){if(e.subtreeFlags&lo)for(e=e.child;e!==null;)yx(e,t,n),e=e.sibling}function yx(e,t,n){switch(e.tag){case 26:Ns(e,t,n),e.flags&lo&&e.memoizedState!==null&&YE(n,oi,e.memoizedState,e.memoizedProps);break;case 5:Ns(e,t,n);break;case 3:case 4:var i=oi;oi=Wc(e.stateNode.containerInfo),Ns(e,t,n),oi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=lo,lo=16777216,Ns(e,t,n),lo=i):Ns(e,t,n));break;default:Ns(e,t,n)}}function Mx(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Yr(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,bx(i,e)}Mx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ex(e),e=e.sibling}function Ex(e){switch(e.tag){case 0:case 11:case 15:Yr(e),e.flags&2048&&Va(9,e,e.return);break;case 3:Yr(e);break;case 12:Yr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,cc(e)):Yr(e);break;default:Yr(e)}}function cc(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,bx(i,e)}Mx(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Va(8,t,t.return),cc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,cc(t));break;default:cc(t)}e=e.sibling}}function bx(e,t){for(;Qe!==null;){var n=Qe;switch(n.tag){case 0:case 11:case 15:Va(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Qo(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Qe=i;else t:for(n=e;Qe!==null;){i=Qe;var a=i.sibling,s=i.return;if(px(i),i===n){Qe=null;break t}if(a!==null){a.return=s,Qe=a;break t}Qe=s}}}var lE={getCacheForType:function(e){var t=sn(ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return sn(ke).controller.signal}},cE=typeof WeakMap=="function"?WeakMap:Map,ie=0,xe=null,jt=null,Zt=0,ce=0,Un=null,Ra=!1,Br=!1,Lp=!1,aa=0,Le=0,ka=0,hs=0,Op=0,On=0,Er=0,bo=null,Mn=null,Ld=!1,Su=0,Tx=0,Fc=1/0,zc=null,Pa=null,qe=0,Ia=null,br=null,Qi=0,Od=0,Pd=null,Ax=null,To=0,Id=null;function Fn(){return ie&2&&Zt!==0?Zt&-Zt:Lt.T!==null?Ip():P_()}function Rx(){if(On===0)if(!(Zt&536870912)||Jt){var e=dl;dl<<=1,!(dl&3932160)&&(dl=262144),On=e}else On=536870912;return e=Hn.current,e!==null&&(e.flags|=32),On}function En(e,t,n){(e===xe&&(ce===2||ce===9)||e.cancelPendingCommit!==null)&&(Tr(e,0),Ca(e,Zt,On,!1)),jo(e,n),(!(ie&2)||e!==xe)&&(e===xe&&(!(ie&2)&&(hs|=n),Le===4&&Ca(e,Zt,On,!1)),Di(e))}function Cx(e,t,n){if(ie&6)throw Error(J(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Yo(e,t),a=i?dE(e,t):of(e,t,!0),s=i;do{if(a===0){Br&&!i&&Ca(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!uE(n)){a=of(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=bo;var l=o.current.memoizedState.isDehydrated;if(l&&(Tr(o,r).flags|=256),r=of(o,r,!1),r!==2){if(Lp&&!l){o.errorRecoveryDisabledLanes|=s,hs|=s,a=4;break t}s=Mn,Mn=a,s!==null&&(Mn===null?Mn=s:Mn.push.apply(Mn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){Tr(e,0),Ca(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error(J(345));case 4:if((t&4194048)!==t)break;case 6:Ca(i,t,On,!Ra);break t;case 2:Mn=null;break;case 3:case 5:break;default:throw Error(J(329))}if((t&62914560)===t&&(a=Su+300-Pn(),10<a)){if(Ca(i,t,On,!Ra),cu(i,0,!0)!==0)break t;Qi=t,i.timeoutHandle=jx(yg.bind(null,i,n,Mn,zc,Ld,t,On,hs,Er,Ra,s,"Throttled",-0,0),a);break t}yg(i,n,Mn,zc,Ld,t,On,hs,Er,Ra,s,null,-0,0)}}break}while(!0);Di(e)}function yg(e,t,n,i,a,s,r,o,l,c,d,h,u,p){if(e.timeoutHandle=-1,h=t.subtreeFlags,h&8192||(h&16785408)===16785408){h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},yx(t,s,h);var _=(s&62914560)===s?Su-Pn():(s&4194048)===s?Tx-Pn():0;if(_=jE(h,_),_!==null){Qi=s,e.cancelPendingCommit=_(Eg.bind(null,e,t,s,n,i,a,r,o,l,d,h,null,u,p)),Ca(e,s,r,!c);return}}Eg(e,t,s,n,i,a,r,o,l)}function uE(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!zn(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ca(e,t,n,i){t&=~Op,t&=~hs,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-Bn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&N_(e,n,t)}function yu(){return ie&6?!0:(tl(0),!1)}function Pp(){if(jt!==null){if(ce===0)var e=jt.return;else e=jt,Yi=As=null,Sp(e),dr=null,Oo=0,e=jt;for(;e!==null;)ox(e.alternate,e),e=e.return;jt=null}}function Tr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,DE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Qi=0,Pp(),xe=e,jt=n=Zi(e.current,null),Zt=t,ce=0,Un=null,Ra=!1,Br=Yo(e,t),Lp=!1,Er=On=Op=hs=ka=Le=0,Mn=bo=null,Ld=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Bn(i),s=1<<a;t|=e[a],i&=~s}return aa=t,hu(),n}function wx(e,t){Ht=null,Lt.H=Io,t===Ir||t===mu?(t=$m(),ce=3):t===hp?(t=$m(),ce=4):ce=t===wp?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Un=t,jt===null&&(Le=1,Pc(e,Qn(t,e.current)))}function Dx(){var e=Hn.current;return e===null?!0:(Zt&4194048)===Zt?ti===null:(Zt&62914560)===Zt||Zt&536870912?e===ti:!1}function Ux(){var e=Lt.H;return Lt.H=Io,e===null?Io:e}function Nx(){var e=Lt.A;return Lt.A=lE,e}function Hc(){Le=4,Ra||(Zt&4194048)!==Zt&&Hn.current!==null||(Br=!0),!(ka&134217727)&&!(hs&134217727)||xe===null||Ca(xe,Zt,On,!1)}function of(e,t,n){var i=ie;ie|=2;var a=Ux(),s=Nx();(xe!==e||Zt!==t)&&(zc=null,Tr(e,t)),t=!1;var r=Le;t:do try{if(ce!==0&&jt!==null){var o=jt,l=Un;switch(ce){case 8:Pp(),r=6;break t;case 3:case 2:case 9:case 6:Hn.current===null&&(t=!0);var c=ce;if(ce=0,Un=null,or(e,o,l,c),n&&Br){r=0;break t}break;default:c=ce,ce=0,Un=null,or(e,o,l,c)}}fE(),r=Le;break}catch(d){wx(e,d)}while(!0);return t&&e.shellSuspendCounter++,Yi=As=null,ie=i,Lt.H=a,Lt.A=s,jt===null&&(xe=null,Zt=0,hu()),r}function fE(){for(;jt!==null;)Lx(jt)}function dE(e,t){var n=ie;ie|=2;var i=Ux(),a=Nx();xe!==e||Zt!==t?(zc=null,Fc=Pn()+500,Tr(e,t)):Br=Yo(e,t);t:do try{if(ce!==0&&jt!==null){t=jt;var s=Un;e:switch(ce){case 1:ce=0,Un=null,or(e,t,s,1);break;case 2:case 9:if(Jm(s)){ce=0,Un=null,Mg(t);break}t=function(){ce!==2&&ce!==9||xe!==e||(ce=7),Di(e)},s.then(t,t);break t;case 3:ce=7;break t;case 4:ce=5;break t;case 7:Jm(s)?(ce=0,Un=null,Mg(t)):(ce=0,Un=null,or(e,t,s,7));break;case 5:var r=null;switch(jt.tag){case 26:r=jt.memoizedState;case 5:case 27:var o=jt;if(r?$x(r):o.stateNode.complete){ce=0,Un=null;var l=o.sibling;if(l!==null)jt=l;else{var c=o.return;c!==null?(jt=c,Mu(c)):jt=null}break e}}ce=0,Un=null,or(e,t,s,5);break;case 6:ce=0,Un=null,or(e,t,s,6);break;case 8:Pp(),Le=6;break t;default:throw Error(J(462))}}hE();break}catch(d){wx(e,d)}while(!0);return Yi=As=null,Lt.H=i,Lt.A=a,ie=n,jt!==null?0:(xe=null,Zt=0,hu(),Le)}function hE(){for(;jt!==null&&!Iy();)Lx(jt)}function Lx(e){var t=rx(e.alternate,e,aa);e.memoizedProps=e.pendingProps,t===null?Mu(e):jt=t}function Mg(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=mg(n,t,t.pendingProps,t.type,void 0,Zt);break;case 11:t=mg(n,t,t.pendingProps,t.type.render,t.ref,Zt);break;case 5:Sp(t);default:ox(n,t),t=jt=ov(t,aa),t=rx(n,t,aa)}e.memoizedProps=e.pendingProps,t===null?Mu(e):jt=t}function or(e,t,n,i){Yi=As=null,Sp(t),dr=null,Oo=0;var a=t.return;try{if(eE(e,a,t,n,Zt)){Le=1,Pc(e,Qn(n,e.current)),jt=null;return}}catch(s){if(a!==null)throw jt=a,s;Le=1,Pc(e,Qn(n,e.current)),jt=null;return}t.flags&32768?(Jt||i===1?e=!0:Br||Zt&536870912?e=!1:(Ra=e=!0,(i===2||i===9||i===3||i===6)&&(i=Hn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Ox(t,e)):Mu(t)}function Mu(e){var t=e;do{if(t.flags&32768){Ox(t,Ra);return}e=t.return;var n=aE(t.alternate,t,aa);if(n!==null){jt=n;return}if(t=t.sibling,t!==null){jt=t;return}jt=t=e}while(t!==null);Le===0&&(Le=5)}function Ox(e,t){do{var n=sE(e.alternate,e);if(n!==null){n.flags&=32767,jt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){jt=e;return}jt=e=n}while(e!==null);Le=6,jt=null}function Eg(e,t,n,i,a,s,r,o,l){e.cancelPendingCommit=null;do Eu();while(qe!==0);if(ie&6)throw Error(J(327));if(t!==null){if(t===e.current)throw Error(J(177));if(s=t.lanes|t.childLanes,s|=rp,qy(e,n,s,r,o,l),e===xe&&(jt=xe=null,Zt=0),br=t,Ia=e,Qi=n,Od=s,Pd=a,Ax=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,_E(bc,function(){return zx(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Lt.T,Lt.T=null,a=ae.p,ae.p=2,r=ie,ie|=4;try{rE(e,t,n)}finally{ie=r,ae.p=a,Lt.T=i}}qe=1,Px(),Ix(),Bx()}}function Px(){if(qe===1){qe=0;var e=Ia,t=br,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Lt.T,Lt.T=null;var i=ae.p;ae.p=2;var a=ie;ie|=4;try{vx(t,e);var s=Hd,r=$_(e.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&J_(o.ownerDocument.documentElement,o)){if(l!==null&&sp(o)){var c=l.start,d=l.end;if(d===void 0&&(d=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(d,o.value.length);else{var h=o.ownerDocument||document,u=h&&h.defaultView||window;if(u.getSelection){var p=u.getSelection(),_=o.textContent.length,M=Math.min(l.start,_),g=l.end===void 0?M:Math.min(l.end,_);!p.extend&&M>g&&(r=g,g=M,M=r);var f=Wm(o,M),m=Wm(o,g);if(f&&m&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==m.node||p.focusOffset!==m.offset)){var v=h.createRange();v.setStart(f.node,f.offset),p.removeAllRanges(),M>g?(p.addRange(v),p.extend(m.node,m.offset)):(v.setEnd(m.node,m.offset),p.addRange(v))}}}}for(h=[],p=o;p=p.parentNode;)p.nodeType===1&&h.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<h.length;o++){var y=h[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}jc=!!zd,Hd=zd=null}finally{ie=a,ae.p=i,Lt.T=n}}e.current=t,qe=2}}function Ix(){if(qe===2){qe=0;var e=Ia,t=br,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Lt.T,Lt.T=null;var i=ae.p;ae.p=2;var a=ie;ie|=4;try{hx(e,t.alternate,t)}finally{ie=a,ae.p=i,Lt.T=n}}qe=3}}function Bx(){if(qe===4||qe===3){qe=0,By();var e=Ia,t=br,n=Qi,i=Ax;t.subtreeFlags&10256||t.flags&10256?qe=5:(qe=0,br=Ia=null,Fx(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Pa=null),Jh(n),t=t.stateNode,In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot(qo,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Lt.T,a=ae.p,ae.p=2,Lt.T=null;try{for(var s=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{Lt.T=t,ae.p=a}}Qi&3&&Eu(),Di(e),a=e.pendingLanes,n&261930&&a&42?e===Id?To++:(To=0,Id=e):To=0,tl(0)}}function Fx(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Qo(t)))}function Eu(){return Px(),Ix(),Bx(),zx()}function zx(){if(qe!==5)return!1;var e=Ia,t=Od;Od=0;var n=Jh(Qi),i=Lt.T,a=ae.p;try{ae.p=32>n?32:n,Lt.T=null,n=Pd,Pd=null;var s=Ia,r=Qi;if(qe=0,br=Ia=null,Qi=0,ie&6)throw Error(J(331));var o=ie;if(ie|=4,Ex(s.current),Sx(s,s.current,r,n),ie=o,tl(0,!1),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot(qo,s)}catch{}return!0}finally{ae.p=a,Lt.T=i,Fx(e,t)}}function bg(e,t,n){t=Qn(n,t),t=wd(e.stateNode,t,2),e=Oa(e,t,2),e!==null&&(jo(e,2),Di(e))}function ue(e,t,n){if(e.tag===3)bg(e,e,n);else for(;t!==null;){if(t.tag===3){bg(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pa===null||!Pa.has(i))){e=Qn(n,e),n=tx(2),i=Oa(t,n,2),i!==null&&(ex(n,i,t,e),jo(i,2),Di(i));break}}t=t.return}}function lf(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new cE;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Lp=!0,a.add(n),e=pE.bind(null,e,t,n),t.then(e,e))}function pE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,xe===e&&(Zt&n)===n&&(Le===4||Le===3&&(Zt&62914560)===Zt&&300>Pn()-Su?!(ie&2)&&Tr(e,0):Op|=n,Er===Zt&&(Er=0)),Di(e)}function Hx(e,t){t===0&&(t=U_()),e=Ts(e,t),e!==null&&(jo(e,t),Di(e))}function mE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hx(e,n)}function gE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(J(314))}i!==null&&i.delete(t),Hx(e,n)}function _E(e,t){return Kh(e,t)}var Gc=null,Zs=null,Bd=!1,Vc=!1,cf=!1,wa=0;function Di(e){e!==Zs&&e.next===null&&(Zs===null?Gc=Zs=e:Zs=Zs.next=e),Vc=!0,Bd||(Bd=!0,xE())}function tl(e,t){if(!cf&&Vc){cf=!0;do for(var n=!1,i=Gc;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Bn(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,Tg(i,s))}else s=Zt,s=cu(i,i===xe?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||Yo(i,s)||(n=!0,Tg(i,s));i=i.next}while(n);cf=!1}}function vE(){Gx()}function Gx(){Vc=Bd=!1;var e=0;wa!==0&&wE()&&(e=wa);for(var t=Pn(),n=null,i=Gc;i!==null;){var a=i.next,s=Vx(i,t);s===0?(i.next=null,n===null?Gc=a:n.next=a,a===null&&(Zs=n)):(n=i,(e!==0||s&3)&&(Vc=!0)),i=a}qe!==0&&qe!==5||tl(e),wa!==0&&(wa=0)}function Vx(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-Bn(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=Wy(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=xe,n=Zt,n=cu(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ce===2||ce===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Iu(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Yo(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Iu(i),Jh(n)){case 2:case 8:n=w_;break;case 32:n=bc;break;case 268435456:n=D_;break;default:n=bc}return i=kx.bind(null,e),n=Kh(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Iu(i),e.callbackPriority=2,e.callbackNode=null,2}function kx(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Eu()&&e.callbackNode!==n)return null;var i=Zt;return i=cu(e,e===xe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Cx(e,i,t),Vx(e,Pn()),e.callbackNode!=null&&e.callbackNode===n?kx.bind(null,e):null)}function Tg(e,t){if(Eu())return null;Cx(e,t,!0)}function xE(){UE(function(){ie&6?Kh(C_,vE):Gx()})}function Ip(){if(wa===0){var e=Sr;e===0&&(e=fl,fl<<=1,!(fl&261888)&&(fl=256)),wa=e}return wa}function Ag(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:tc(""+e)}function Rg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function SE(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=Ag((a[An]||null).action),r=i.submitter;r&&(t=(t=r[An]||null)?Ag(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new uu("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(wa!==0){var l=r?Rg(a,r):new FormData(a);Rd(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?Rg(a,r):new FormData(a),Rd(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var uf=0;uf<md.length;uf++){var ff=md[uf],yE=ff.toLowerCase(),ME=ff[0].toUpperCase()+ff.slice(1);ui(yE,"on"+ME)}ui(ev,"onAnimationEnd");ui(nv,"onAnimationIteration");ui(iv,"onAnimationStart");ui("dblclick","onDoubleClick");ui("focusin","onFocus");ui("focusout","onBlur");ui(FM,"onTransitionRun");ui(zM,"onTransitionStart");ui(HM,"onTransitionCancel");ui(av,"onTransitionEnd");vr("onMouseEnter",["mouseout","mouseover"]);vr("onMouseLeave",["mouseout","mouseover"]);vr("onPointerEnter",["pointerout","pointerover"]);vr("onPointerLeave",["pointerout","pointerover"]);Ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bo));function Xx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(d){Ac(d)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(d){Ac(d)}a.currentTarget=null,s=l}}}}function Yt(e,t){var n=t[od];n===void 0&&(n=t[od]=new Set);var i=e+"__bubble";n.has(i)||(Wx(t,e,2,!1),n.add(i))}function df(e,t,n){var i=0;t&&(i|=4),Wx(n,e,i,t)}var yl="_reactListening"+Math.random().toString(36).slice(2);function Bp(e){if(!e[yl]){e[yl]=!0,I_.forEach(function(n){n!=="selectionchange"&&(EE.has(n)||df(n,!1,e),df(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yl]||(t[yl]=!0,df("selectionchange",!1,t))}}function Wx(e,t,n,i){switch(aS(t)){case 2:var a=QE;break;case 8:a=JE;break;default:a=Gp}n=a.bind(null,t,n,e),a=void 0,!dd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function hf(e,t,n,i,a){var s=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=Js(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}X_(function(){var c=s,d=ep(n),h=[];t:{var u=sv.get(e);if(u!==void 0){var p=uu,_=e;switch(e){case"keypress":if(nc(n)===0)break t;case"keydown":case"keyup":p=gM;break;case"focusin":_="focus",p=Gu;break;case"focusout":_="blur",p=Gu;break;case"beforeblur":case"afterblur":p=Gu;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Pm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=aM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=xM;break;case ev:case nv:case iv:p=oM;break;case av:p=yM;break;case"scroll":case"scrollend":p=nM;break;case"wheel":p=EM;break;case"copy":case"cut":case"paste":p=cM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Bm;break;case"toggle":case"beforetoggle":p=TM}var M=(t&4)!==0,g=!M&&(e==="scroll"||e==="scrollend"),f=M?u!==null?u+"Capture":null:u;M=[];for(var m=c,v;m!==null;){var y=m;if(v=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||v===null||f===null||(y=wo(m,f),y!=null&&M.push(Fo(m,y,v))),g)break;m=m.return}0<M.length&&(u=new p(u,_,null,n,d),h.push({event:u,listeners:M}))}}if(!(t&7)){t:{if(u=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",u&&n!==fd&&(_=n.relatedTarget||n.fromElement)&&(Js(_)||_[Lr]))break t;if((p||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Js(_):null,_!==null&&(g=Wo(_),M=_.tag,_!==g||M!==5&&M!==27&&M!==6)&&(_=null)):(p=null,_=c),p!==_)){if(M=Pm,y="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(M=Bm,y="onPointerLeave",f="onPointerEnter",m="pointer"),g=p==null?u:ro(p),v=_==null?u:ro(_),u=new M(y,m+"leave",p,n,d),u.target=g,u.relatedTarget=v,y=null,Js(d)===c&&(M=new M(f,m+"enter",_,n,d),M.target=v,M.relatedTarget=g,y=M),g=y,p&&_)e:{for(M=bE,f=p,m=_,v=0,y=f;y;y=M(y))v++;y=0;for(var C=m;C;C=M(C))y++;for(;0<v-y;)f=M(f),v--;for(;0<y-v;)m=M(m),y--;for(;v--;){if(f===m||m!==null&&f===m.alternate){M=f;break e}f=M(f),m=M(m)}M=null}else M=null;p!==null&&Cg(h,u,p,M,!1),_!==null&&g!==null&&Cg(h,g,_,M,!0)}}t:{if(u=c?ro(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var b=Gm;else if(Hm(u))if(K_)b=PM;else{b=LM;var R=NM}else p=u.nodeName,!p||p.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&tp(c.elementType)&&(b=Gm):b=OM;if(b&&(b=b(e,c))){Z_(h,b,n,d);break t}R&&R(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&ud(u,"number",u.value)}switch(R=c?ro(c):window,e){case"focusin":(Hm(R)||R.contentEditable==="true")&&(er=R,hd=c,go=null);break;case"focusout":go=hd=er=null;break;case"mousedown":pd=!0;break;case"contextmenu":case"mouseup":case"dragend":pd=!1,qm(h,n,d);break;case"selectionchange":if(BM)break;case"keydown":case"keyup":qm(h,n,d)}var x;if(ap)t:{switch(e){case"compositionstart":var A="onCompositionStart";break t;case"compositionend":A="onCompositionEnd";break t;case"compositionupdate":A="onCompositionUpdate";break t}A=void 0}else tr?Y_(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(q_&&n.locale!=="ko"&&(tr||A!=="onCompositionStart"?A==="onCompositionEnd"&&tr&&(x=W_()):(Aa=d,np="value"in Aa?Aa.value:Aa.textContent,tr=!0)),R=kc(c,A),0<R.length&&(A=new Im(A,e,null,n,d),h.push({event:A,listeners:R}),x?A.data=x:(x=j_(n),x!==null&&(A.data=x)))),(x=RM?CM(e,n):wM(e,n))&&(A=kc(c,"onBeforeInput"),0<A.length&&(R=new Im("onBeforeInput","beforeinput",null,n,d),h.push({event:R,listeners:A}),R.data=x)),SE(h,e,c,n,d)}Xx(h,t)})}function Fo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function kc(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=wo(e,n),a!=null&&i.unshift(Fo(e,a,s)),a=wo(e,t),a!=null&&i.push(Fo(e,a,s))),e.tag===3)return i;e=e.return}return[]}function bE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Cg(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=wo(n,s),c!=null&&r.unshift(Fo(n,c,l))):a||(c=wo(n,s),c!=null&&r.push(Fo(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var TE=/\r\n?/g,AE=/\u0000|\uFFFD/g;function wg(e){return(typeof e=="string"?e:""+e).replace(TE,`
`).replace(AE,"")}function qx(e,t){return t=wg(t),wg(e)===t}function me(e,t,n,i,a,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||xr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&xr(e,""+i);break;case"className":pl(e,"class",i);break;case"tabIndex":pl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":pl(e,n,i);break;case"style":k_(e,i,s);break;case"data":if(t!=="object"){pl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=tc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&me(e,t,"name",a.name,a,null),me(e,t,"formEncType",a.formEncType,a,null),me(e,t,"formMethod",a.formMethod,a,null),me(e,t,"formTarget",a.formTarget,a,null)):(me(e,t,"encType",a.encType,a,null),me(e,t,"method",a.method,a,null),me(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=tc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=qi);break;case"onScroll":i!=null&&Yt("scroll",e);break;case"onScrollEnd":i!=null&&Yt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(J(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=tc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Yt("beforetoggle",e),Yt("toggle",e),$l(e,"popover",i);break;case"xlinkActuate":Ni(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ni(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ni(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ni(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ni(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ni(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ni(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ni(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ni(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":$l(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=tM.get(n)||n,$l(e,n,i))}}function Fd(e,t,n,i,a,s){switch(n){case"style":k_(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(J(60));e.innerHTML=n}}break;case"children":typeof i=="string"?xr(e,i):(typeof i=="number"||typeof i=="bigint")&&xr(e,""+i);break;case"onScroll":i!=null&&Yt("scroll",e);break;case"onScrollEnd":i!=null&&Yt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!B_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),s=e[An]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):$l(e,n,i)}}}function on(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Yt("error",e),Yt("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:me(e,t,s,r,n,null)}}a&&me(e,t,"srcSet",n.srcSet,n,null),i&&me(e,t,"src",n.src,n,null);return;case"input":Yt("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":a=d;break;case"type":r=d;break;case"checked":l=d;break;case"defaultChecked":c=d;break;case"value":s=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(J(137,t));break;default:me(e,t,i,d,n,null)}}H_(e,s,o,l,c,r,a,!1);return;case"select":Yt("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:me(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?cr(e,!!i,t,!1):n!=null&&cr(e,!!i,n,!0);return;case"textarea":Yt("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(J(91));break;default:me(e,t,r,o,n,null)}V_(e,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:me(e,t,l,i,n,null)}return;case"dialog":Yt("beforetoggle",e),Yt("toggle",e),Yt("cancel",e),Yt("close",e);break;case"iframe":case"object":Yt("load",e);break;case"video":case"audio":for(i=0;i<Bo.length;i++)Yt(Bo[i],e);break;case"image":Yt("error",e),Yt("load",e);break;case"details":Yt("toggle",e);break;case"embed":case"source":case"link":Yt("error",e),Yt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:me(e,t,c,i,n,null)}return;default:if(tp(t)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&Fd(e,t,d,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&me(e,t,o,i,n,null))}function RE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,d=null;for(p in n){var h=n[p];if(n.hasOwnProperty(p)&&h!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=h;default:i.hasOwnProperty(p)||me(e,t,p,null,i,h)}}for(var u in i){var p=i[u];if(h=n[u],i.hasOwnProperty(u)&&(p!=null||h!=null))switch(u){case"type":s=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":d=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(J(137,t));break;default:p!==h&&me(e,t,u,p,i,h)}}cd(e,r,o,l,c,d,s,a);return;case"select":p=r=o=u=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(s)||me(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":u=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&me(e,t,a,s,i,l)}t=o,n=r,i=p,u!=null?cr(e,!!n,u,!1):!!i!=!!n&&(t!=null?cr(e,!!n,t,!0):cr(e,!!n,n?[]:"",!1));return;case"textarea":p=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:me(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":u=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(J(91));break;default:a!==s&&me(e,t,r,a,i,s)}G_(e,u,p);return;case"option":for(var _ in n)if(u=n[_],n.hasOwnProperty(_)&&u!=null&&!i.hasOwnProperty(_))switch(_){case"selected":e.selected=!1;break;default:me(e,t,_,null,i,u)}for(l in i)if(u=i[l],p=n[l],i.hasOwnProperty(l)&&u!==p&&(u!=null||p!=null))switch(l){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:me(e,t,l,u,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)u=n[M],n.hasOwnProperty(M)&&u!=null&&!i.hasOwnProperty(M)&&me(e,t,M,null,i,u);for(c in i)if(u=i[c],p=n[c],i.hasOwnProperty(c)&&u!==p&&(u!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(J(137,t));break;default:me(e,t,c,u,i,p)}return;default:if(tp(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&Fd(e,t,g,void 0,i,u);for(d in i)u=i[d],p=n[d],!i.hasOwnProperty(d)||u===p||u===void 0&&p===void 0||Fd(e,t,d,u,i,p);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&me(e,t,f,null,i,u);for(h in i)u=i[h],p=n[h],!i.hasOwnProperty(h)||u===p||u==null&&p==null||me(e,t,h,u,i,p)}function Dg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function CE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&Dg(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var d=l.transferSize,h=l.initiatorType;d&&Dg(h)&&(l=l.responseEnd,r+=d*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zd=null,Hd=null;function Xc(e){return e.nodeType===9?e:e.ownerDocument}function Ug(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Yx(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Gd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pf=null;function wE(){var e=window.event;return e&&e.type==="popstate"?e===pf?!1:(pf=e,!0):(pf=null,!1)}var jx=typeof setTimeout=="function"?setTimeout:void 0,DE=typeof clearTimeout=="function"?clearTimeout:void 0,Ng=typeof Promise=="function"?Promise:void 0,UE=typeof queueMicrotask=="function"?queueMicrotask:typeof Ng<"u"?function(e){return Ng.resolve(null).then(e).catch(NE)}:jx;function NE(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function Lg(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Rr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Ao(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ao(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[Zo]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&Ao(e.ownerDocument.body);n=a}while(n);Rr(t)}function Og(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Vd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Vd(n),$h(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function LE(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Zo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=ei(e.nextSibling),e===null)break}return null}function OE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ei(e.nextSibling),e===null))return null;return e}function Zx(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ei(e.nextSibling),e===null))return null;return e}function kd(e){return e.data==="$?"||e.data==="$~"}function Xd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function PE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ei(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Wd=null;function Pg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ei(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Ig(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Kx(e,t,n){switch(t=Xc(n),e){case"html":if(e=t.documentElement,!e)throw Error(J(452));return e;case"head":if(e=t.head,!e)throw Error(J(453));return e;case"body":if(e=t.body,!e)throw Error(J(454));return e;default:throw Error(J(451))}}function Ao(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$h(e)}var ni=new Map,Bg=new Set;function Wc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var oa=ae.d;ae.d={f:IE,r:BE,D:FE,C:zE,L:HE,m:GE,X:kE,S:VE,M:XE};function IE(){var e=oa.f(),t=yu();return e||t}function BE(e){var t=Or(e);t!==null&&t.tag===5&&t.type==="form"?kv(t):oa.r(e)}var Fr=typeof document>"u"?null:document;function Qx(e,t,n){var i=Fr;if(i&&typeof t=="string"&&t){var a=Kn(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Bg.has(a)||(Bg.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),on(t,"link",e),Je(t),i.head.appendChild(t)))}}function FE(e){oa.D(e),Qx("dns-prefetch",e,null)}function zE(e,t){oa.C(e,t),Qx("preconnect",e,t)}function HE(e,t,n){oa.L(e,t,n);var i=Fr;if(i&&e&&t){var a='link[rel="preload"][as="'+Kn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Kn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Kn(n.imageSizes)+'"]')):a+='[href="'+Kn(e)+'"]';var s=a;switch(t){case"style":s=Ar(e);break;case"script":s=zr(e)}ni.has(s)||(e=Ce({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ni.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(el(s))||t==="script"&&i.querySelector(nl(s))||(t=i.createElement("link"),on(t,"link",e),Je(t),i.head.appendChild(t)))}}function GE(e,t){oa.m(e,t);var n=Fr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Kn(i)+'"][href="'+Kn(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=zr(e)}if(!ni.has(s)&&(e=Ce({rel:"modulepreload",href:e},t),ni.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(nl(s)))return}i=n.createElement("link"),on(i,"link",e),Je(i),n.head.appendChild(i)}}}function VE(e,t,n){oa.S(e,t,n);var i=Fr;if(i&&e){var a=lr(i).hoistableStyles,s=Ar(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(el(s)))o.loading=5;else{e=Ce({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ni.get(s))&&Fp(e,n);var l=r=i.createElement("link");Je(l),on(l,"link",e),l._p=new Promise(function(c,d){l.onload=c,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,uc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function kE(e,t){oa.X(e,t);var n=Fr;if(n&&e){var i=lr(n).hoistableScripts,a=zr(e),s=i.get(a);s||(s=n.querySelector(nl(a)),s||(e=Ce({src:e,async:!0},t),(t=ni.get(a))&&zp(e,t),s=n.createElement("script"),Je(s),on(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function XE(e,t){oa.M(e,t);var n=Fr;if(n&&e){var i=lr(n).hoistableScripts,a=zr(e),s=i.get(a);s||(s=n.querySelector(nl(a)),s||(e=Ce({src:e,async:!0,type:"module"},t),(t=ni.get(a))&&zp(e,t),s=n.createElement("script"),Je(s),on(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function Fg(e,t,n,i){var a=(a=Ua.current)?Wc(a):null;if(!a)throw Error(J(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ar(n.href),n=lr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ar(n.href);var s=lr(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(el(e)))&&!s._p&&(r.instance=s,r.state.loading=5),ni.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ni.set(e,n),s||WE(a,e,n,r.state))),t&&i===null)throw Error(J(528,""));return r}if(t&&i!==null)throw Error(J(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=zr(n),n=lr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(J(444,e))}}function Ar(e){return'href="'+Kn(e)+'"'}function el(e){return'link[rel="stylesheet"]['+e+"]"}function Jx(e){return Ce({},e,{"data-precedence":e.precedence,precedence:null})}function WE(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),on(t,"link",n),Je(t),e.head.appendChild(t))}function zr(e){return'[src="'+Kn(e)+'"]'}function nl(e){return"script[async]"+e}function zg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Kn(n.href)+'"]');if(i)return t.instance=i,Je(i),i;var a=Ce({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Je(i),on(i,"style",a),uc(i,n.precedence,e),t.instance=i;case"stylesheet":a=Ar(n.href);var s=e.querySelector(el(a));if(s)return t.state.loading|=4,t.instance=s,Je(s),s;i=Jx(n),(a=ni.get(a))&&Fp(i,a),s=(e.ownerDocument||e).createElement("link"),Je(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),on(s,"link",i),t.state.loading|=4,uc(s,n.precedence,e),t.instance=s;case"script":return s=zr(n.src),(a=e.querySelector(nl(s)))?(t.instance=a,Je(a),a):(i=n,(a=ni.get(s))&&(i=Ce({},n),zp(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),Je(a),on(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(J(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,uc(i,n.precedence,e));return t.instance}function uc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Fp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function zp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var fc=null;function Hg(e,t,n){if(fc===null){var i=new Map,a=fc=new Map;a.set(n,i)}else a=fc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[Zo]||s[nn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function Gg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function qE(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $x(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function YE(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=Ar(i.href),s=t.querySelector(el(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=qc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,Je(s);return}s=t.ownerDocument||t,i=Jx(i),(a=ni.get(a))&&Fp(i,a),s=s.createElement("link"),Je(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),on(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=qc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var mf=0;function jE(e,t){return e.stylesheets&&e.count===0&&dc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&dc(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&mf===0&&(mf=62500*CE());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&dc(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>mf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function qc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)dc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yc=null;function dc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yc=new Map,t.forEach(ZE,e),Yc=null,qc.call(e))}function ZE(e,t){if(!(t.state.loading&4)){var n=Yc.get(e);if(n)var i=n.get(null);else{n=new Map,Yc.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=qc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var zo={$$typeof:Wi,Provider:null,Consumer:null,_currentValue:cs,_currentValue2:cs,_threadCount:0};function KE(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Bu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bu(0),this.hiddenUpdates=Bu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function tS(e,t,n,i,a,s,r,o,l,c,d,h){return e=new KE(e,t,n,r,l,c,d,h,o),t=1,s===!0&&(t|=24),s=Ln(3,null,null,t),e.current=s,s.stateNode=e,t=fp(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},pp(s),e}function eS(e){return e?(e=ar,e):ar}function nS(e,t,n,i,a,s){a=eS(a),i.context===null?i.context=a:i.pendingContext=a,i=La(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Oa(e,i,t),n!==null&&(En(n,e,t),vo(n,e,t))}function Vg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hp(e,t){Vg(e,t),(e=e.alternate)&&Vg(e,t)}function iS(e){if(e.tag===13||e.tag===31){var t=Ts(e,67108864);t!==null&&En(t,e,67108864),Hp(e,67108864)}}function kg(e){if(e.tag===13||e.tag===31){var t=Fn();t=Qh(t);var n=Ts(e,t);n!==null&&En(n,e,t),Hp(e,t)}}var jc=!0;function QE(e,t,n,i){var a=Lt.T;Lt.T=null;var s=ae.p;try{ae.p=2,Gp(e,t,n,i)}finally{ae.p=s,Lt.T=a}}function JE(e,t,n,i){var a=Lt.T;Lt.T=null;var s=ae.p;try{ae.p=8,Gp(e,t,n,i)}finally{ae.p=s,Lt.T=a}}function Gp(e,t,n,i){if(jc){var a=qd(i);if(a===null)hf(e,t,i,Zc,n),Xg(e,i);else if(tb(a,e,t,n,i))i.stopPropagation();else if(Xg(e,i),t&4&&-1<$E.indexOf(e)){for(;a!==null;){var s=Or(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=es(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Bn(r);o.entanglements[1]|=l,r&=~l}Di(s),!(ie&6)&&(Fc=Pn()+500,tl(0))}}break;case 31:case 13:o=Ts(s,2),o!==null&&En(o,s,2),yu(),Hp(s,2)}if(s=qd(i),s===null&&hf(e,t,i,Zc,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else hf(e,t,i,null,n)}}function qd(e){return e=ep(e),Vp(e)}var Zc=null;function Vp(e){if(Zc=null,e=Js(e),e!==null){var t=Wo(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=E_(t),e!==null)return e;e=null}else if(n===31){if(e=b_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Zc=e,null}function aS(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fy()){case C_:return 2;case w_:return 8;case bc:case zy:return 32;case D_:return 268435456;default:return 32}default:return 32}}var Yd=!1,Ba=null,Fa=null,za=null,Ho=new Map,Go=new Map,Ea=[],$E="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xg(e,t){switch(e){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":Fa=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":Ho.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(t.pointerId)}}function jr(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Or(t),t!==null&&iS(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function tb(e,t,n,i,a){switch(t){case"focusin":return Ba=jr(Ba,e,t,n,i,a),!0;case"dragenter":return Fa=jr(Fa,e,t,n,i,a),!0;case"mouseover":return za=jr(za,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return Ho.set(s,jr(Ho.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,Go.set(s,jr(Go.get(s)||null,e,t,n,i,a)),!0}return!1}function sS(e){var t=Js(e.target);if(t!==null){var n=Wo(t);if(n!==null){if(t=n.tag,t===13){if(t=E_(n),t!==null){e.blockedOn=t,Cm(e.priority,function(){kg(n)});return}}else if(t===31){if(t=b_(n),t!==null){e.blockedOn=t,Cm(e.priority,function(){kg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=qd(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);fd=i,n.target.dispatchEvent(i),fd=null}else return t=Or(n),t!==null&&iS(t),e.blockedOn=n,!1;t.shift()}return!0}function Wg(e,t,n){hc(e)&&n.delete(t)}function eb(){Yd=!1,Ba!==null&&hc(Ba)&&(Ba=null),Fa!==null&&hc(Fa)&&(Fa=null),za!==null&&hc(za)&&(za=null),Ho.forEach(Wg),Go.forEach(Wg)}function Ml(e,t){e.blockedOn===t&&(e.blockedOn=null,Yd||(Yd=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,eb)))}var El=null;function qg(e){El!==e&&(El=e,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,function(){El===e&&(El=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Vp(i||n)===null)continue;break}var s=Or(n);s!==null&&(e.splice(t,3),t-=3,Rd(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Rr(e){function t(l){return Ml(l,e)}Ba!==null&&Ml(Ba,e),Fa!==null&&Ml(Fa,e),za!==null&&Ml(za,e),Ho.forEach(t),Go.forEach(t);for(var n=0;n<Ea.length;n++){var i=Ea[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ea.length&&(n=Ea[0],n.blockedOn===null);)sS(n),n.blockedOn===null&&Ea.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[An]||null;if(typeof s=="function")r||qg(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[An]||null)o=r.formAction;else if(Vp(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),qg(n)}}}function rS(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function kp(e){this._internalRoot=e}bu.prototype.render=kp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(J(409));var n=t.current,i=Fn();nS(n,i,e,t,null,null)};bu.prototype.unmount=kp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nS(e.current,2,null,e,null,null),yu(),t[Lr]=null}};function bu(e){this._internalRoot=e}bu.prototype.unstable_scheduleHydration=function(e){if(e){var t=P_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ea.length&&t!==0&&t<Ea[n].priority;n++);Ea.splice(n,0,e),n===0&&sS(e)}};var Yg=y_.version;if(Yg!=="19.2.7")throw Error(J(527,Yg,"19.2.7"));ae.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(J(188)):(e=Object.keys(e).join(","),Error(J(268,e)));return e=Uy(t),e=e!==null?T_(e):null,e=e===null?null:e.stateNode,e};var nb={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:Lt,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{qo=bl.inject(nb),In=bl}catch{}}ou.createRoot=function(e,t){if(!M_(e))throw Error(J(299));var n=!1,i="",a=Qv,s=Jv,r=$v;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=tS(e,1,!1,null,null,n,i,null,a,s,r,rS),e[Lr]=t.current,Bp(e),new kp(t)};ou.hydrateRoot=function(e,t,n){if(!M_(e))throw Error(J(299));var i=!1,a="",s=Qv,r=Jv,o=$v,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=tS(e,1,!0,t,n??null,i,a,l,s,r,o,rS),t.context=eS(null),n=t.current,i=Fn(),i=Qh(i),a=La(i),a.callback=null,Oa(n,a,i),n=i,t.current.lanes=n,jo(t,n),Di(t),e[Lr]=t.current,Bp(e),new bu(t)};ou.version="19.2.7";function oS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oS)}catch(e){console.error(e)}}oS(),m_.exports=ou;var ib=m_.exports;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xp="184",ab=0,jg=1,sb=2,pc=1,rb=2,co=3,Xa=0,bn=1,Xi=2,Ji=0,mr=1,Zg=2,Kg=3,Qg=4,ob=5,ss=100,lb=101,cb=102,ub=103,fb=104,db=200,hb=201,pb=202,mb=203,jd=204,Zd=205,gb=206,_b=207,vb=208,xb=209,Sb=210,yb=211,Mb=212,Eb=213,bb=214,Kd=0,Qd=1,Jd=2,Cr=3,$d=4,th=5,eh=6,nh=7,lS=0,Tb=1,Ab=2,Ei=0,cS=1,uS=2,fS=3,dS=4,hS=5,pS=6,mS=7,gS=300,xs=301,wr=302,gf=303,_f=304,Tu=306,ih=1e3,ji=1001,ah=1002,rn=1003,Rb=1004,Tl=1005,fn=1006,vf=1007,os=1008,$n=1009,_S=1010,vS=1011,Vo=1012,Wp=1013,Ai=1014,Si=1015,sa=1016,qp=1017,Yp=1018,ko=1020,xS=35902,SS=35899,yS=1021,MS=1022,ci=1023,ra=1026,ls=1027,ES=1028,jp=1029,Ss=1030,Zp=1031,Kp=1033,mc=33776,gc=33777,_c=33778,vc=33779,sh=35840,rh=35841,oh=35842,lh=35843,ch=36196,uh=37492,fh=37496,dh=37488,hh=37489,Kc=37490,ph=37491,mh=37808,gh=37809,_h=37810,vh=37811,xh=37812,Sh=37813,yh=37814,Mh=37815,Eh=37816,bh=37817,Th=37818,Ah=37819,Rh=37820,Ch=37821,wh=36492,Dh=36494,Uh=36495,Nh=36283,Lh=36284,Qc=36285,Oh=36286,Cb=3200,Jg=0,wb=1,ba="",Wn="srgb",Jc="srgb-linear",$c="linear",le="srgb",Ls=7680,$g=519,Db=512,Ub=513,Nb=514,Qp=515,Lb=516,Ob=517,Jp=518,Pb=519,t0=35044,e0="300 es",yi=2e3,tu=2001;function Ib(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function eu(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Bb(){const e=eu("canvas");return e.style.display="block",e}const n0={};function i0(...e){const t="THREE."+e.shift();console.log(t,...e)}function bS(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Dt(...e){e=bS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function ee(...e){e=bS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ph(...e){const t=e.join(" ");t in n0||(n0[t]=!0,Dt(...e))}function Fb(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const zb={[Kd]:Qd,[Jd]:eh,[$d]:nh,[Cr]:th,[Qd]:Kd,[eh]:Jd,[nh]:$d,[th]:Cr};class Rs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xf=Math.PI/180,Ih=180/Math.PI;function il(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[e&255]+cn[e>>8&255]+cn[e>>16&255]+cn[e>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[n&63|128]+cn[n>>8&255]+"-"+cn[n>>16&255]+cn[n>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function Qt(e,t,n){return Math.max(t,Math.min(n,e))}function Hb(e,t){return(e%t+t)%t}function Sf(e,t,n){return(1-n)*e+n*t}function Zr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Sn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const om=class om{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};om.prototype.isVector2=!0;let se=om;class Hr{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],d=i[a+2],h=i[a+3],u=s[r+0],p=s[r+1],_=s[r+2],M=s[r+3];if(h!==M||l!==u||c!==p||d!==_){let g=l*u+c*p+d*_+h*M;g<0&&(u=-u,p=-p,_=-_,M=-M,g=-g);let f=1-o;if(g<.9995){const m=Math.acos(g),v=Math.sin(m);f=Math.sin(f*m)/v,o=Math.sin(o*m)/v,l=l*f+u*o,c=c*f+p*o,d=d*f+_*o,h=h*f+M*o}else{l=l*f+u*o,c=c*f+p*o,d=d*f+_*o,h=h*f+M*o;const m=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=m,c*=m,d*=m,h*=m}}t[n]=l,t[n+1]=c,t[n+2]=d,t[n+3]=h}static multiplyQuaternionsFlat(t,n,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],h=s[r],u=s[r+1],p=s[r+2],_=s[r+3];return t[n]=o*_+d*h+l*p-c*u,t[n+1]=l*_+d*u+c*h-o*p,t[n+2]=c*_+d*p+o*u-l*h,t[n+3]=d*_-o*h-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),h=o(s/2),u=l(i/2),p=l(a/2),_=l(s/2);switch(r){case"XYZ":this._x=u*d*h+c*p*_,this._y=c*p*h-u*d*_,this._z=c*d*_+u*p*h,this._w=c*d*h-u*p*_;break;case"YXZ":this._x=u*d*h+c*p*_,this._y=c*p*h-u*d*_,this._z=c*d*_-u*p*h,this._w=c*d*h+u*p*_;break;case"ZXY":this._x=u*d*h-c*p*_,this._y=c*p*h+u*d*_,this._z=c*d*_+u*p*h,this._w=c*d*h-u*p*_;break;case"ZYX":this._x=u*d*h-c*p*_,this._y=c*p*h+u*d*_,this._z=c*d*_-u*p*h,this._w=c*d*h+u*p*_;break;case"YZX":this._x=u*d*h+c*p*_,this._y=c*p*h+u*d*_,this._z=c*d*_-u*p*h,this._w=c*d*h-u*p*_;break;case"XZY":this._x=u*d*h-c*p*_,this._y=c*p*h-u*d*_,this._z=c*d*_+u*p*h,this._w=c*d*h+u*p*_;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],u=i+o+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(r-a)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(r-a)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+r*o+a*c-s*l,this._y=a*d+r*l+s*o-i*c,this._z=s*d+r*c+i*l-a*o,this._w=r*d-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const lm=class lm{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(a0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(a0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),d=2*(o*n-s*a),h=2*(s*i-r*n);return this.x=n+l*c+r*h-o*d,this.y=i+l*d+o*c-s*h,this.z=a+l*h+s*d-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this.z=Qt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this.z=Qt(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return yf.copy(this).projectOnVector(t),this.sub(yf)}reflect(t){return this.sub(yf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lm.prototype.isVector3=!0;let z=lm;const yf=new z,a0=new Hr,cm=class cm{constructor(t,n,i,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){const d=this.elements;return d[0]=t,d[1]=a,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],p=i[5],_=i[8],M=a[0],g=a[3],f=a[6],m=a[1],v=a[4],y=a[7],C=a[2],b=a[5],R=a[8];return s[0]=r*M+o*m+l*C,s[3]=r*g+o*v+l*b,s[6]=r*f+o*y+l*R,s[1]=c*M+d*m+h*C,s[4]=c*g+d*v+h*b,s[7]=c*f+d*y+h*R,s[2]=u*M+p*m+_*C,s[5]=u*g+p*v+_*b,s[8]=u*f+p*y+_*R,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return n*r*d-n*o*c-i*s*d+i*o*l+a*s*c-a*r*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=d*r-o*c,u=o*l-d*s,p=c*s-r*l,_=n*h+i*u+a*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return t[0]=h*M,t[1]=(a*c-d*i)*M,t[2]=(o*i-a*r)*M,t[3]=u*M,t[4]=(d*n-a*l)*M,t[5]=(a*s-o*n)*M,t[6]=p*M,t[7]=(i*l-c*n)*M,t[8]=(r*n-i*s)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Mf.makeScale(t,n)),this}rotate(t){return this.premultiply(Mf.makeRotation(-t)),this}translate(t,n){return this.premultiply(Mf.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};cm.prototype.isMatrix3=!0;let It=cm;const Mf=new It,s0=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),r0=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gb(){const e={enabled:!0,workingColorSpace:Jc,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===le&&(a.r=$i(a.r),a.g=$i(a.g),a.b=$i(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===le&&(a.r=gr(a.r),a.g=gr(a.g),a.b=gr(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ba?$c:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Ph("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Ph("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Jc]:{primaries:t,whitePoint:i,transfer:$c,toXYZ:s0,fromXYZ:r0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:t,whitePoint:i,transfer:le,toXYZ:s0,fromXYZ:r0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),e}const Kt=Gb();function $i(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function gr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Os;class Vb{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Os===void 0&&(Os=eu("canvas")),Os.width=t.width,Os.height=t.height;const a=Os.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=Os}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=eu("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=$i(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($i(n[i]/255)*255):n[i]=$i(n[i]);return{data:n,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kb=0;class $p{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kb++}),this.uuid=il(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(Ef(a[r].image)):s.push(Ef(a[r]))}else s=Ef(a);i.url=s}return n||(t.images[this.uuid]=i),i}}function Ef(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Vb.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}let Xb=0;const bf=new z;class gn extends Rs{constructor(t=gn.DEFAULT_IMAGE,n=gn.DEFAULT_MAPPING,i=ji,a=ji,s=fn,r=os,o=ci,l=$n,c=gn.DEFAULT_ANISOTROPY,d=ba){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xb++}),this.uuid=il(),this.name="",this.source=new $p(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bf).x}get height(){return this.source.getSize(bf).y}get depth(){return this.source.getSize(bf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){Dt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Dt(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ih:t.x=t.x-Math.floor(t.x);break;case ji:t.x=t.x<0?0:1;break;case ah:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ih:t.y=t.y-Math.floor(t.y);break;case ji:t.y=t.y<0?0:1;break;case ah:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=gS;gn.DEFAULT_ANISOTROPY=1;const um=class um{constructor(t=0,n=0,i=0,a=1){this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s;const l=t.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],_=l[9],M=l[2],g=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+M)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,y=(p+1)/2,C=(f+1)/2,b=(d+u)/4,R=(h+M)/4,x=(_+g)/4;return v>y&&v>C?v<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(v),a=b/i,s=R/i):y>C?y<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(y),i=b/a,s=x/a):C<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(C),i=R/s,a=x/s),this.set(i,a,s,n),this}let m=Math.sqrt((g-_)*(g-_)+(h-M)*(h-M)+(u-d)*(u-d));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(h-M)/m,this.z=(u-d)/m,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this.z=Qt(this.z,t.z,n.z),this.w=Qt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this.z=Qt(this.z,t,n),this.w=Qt(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};um.prototype.isVector4=!0;let Fe=um;class Wb extends Rs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Fe(0,0,t,n),this.scissorTest=!1,this.viewport=new Fe(0,0,t,n),this.textures=[];const a={width:t,height:n,depth:i.depth},s=new gn(a),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new $p(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends Wb{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class TS extends gn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=rn,this.minFilter=rn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qb extends gn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=rn,this.minFilter=rn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const su=class su{constructor(t,n,i,a,s,r,o,l,c,d,h,u,p,_,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,d,h,u,p,_,M,g)}set(t,n,i,a,s,r,o,l,c,d,h,u,p,_,M,g){const f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=_,f[11]=M,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new su().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,i=t.elements,a=1/Ps.setFromMatrixColumn(t,0).length(),s=1/Ps.setFromMatrixColumn(t,1).length(),r=1/Ps.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const u=r*d,p=r*h,_=o*d,M=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=p+_*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=_+p*c,n[10]=r*l}else if(t.order==="YXZ"){const u=l*d,p=l*h,_=c*d,M=c*h;n[0]=u+M*o,n[4]=_*o-p,n[8]=r*c,n[1]=r*h,n[5]=r*d,n[9]=-o,n[2]=p*o-_,n[6]=M+u*o,n[10]=r*l}else if(t.order==="ZXY"){const u=l*d,p=l*h,_=c*d,M=c*h;n[0]=u-M*o,n[4]=-r*h,n[8]=_+p*o,n[1]=p+_*o,n[5]=r*d,n[9]=M-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){const u=r*d,p=r*h,_=o*d,M=o*h;n[0]=l*d,n[4]=_*c-p,n[8]=u*c+M,n[1]=l*h,n[5]=M*c+u,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){const u=r*l,p=r*c,_=o*l,M=o*c;n[0]=l*d,n[4]=M-u*h,n[8]=_*h+p,n[1]=h,n[5]=r*d,n[9]=-o*d,n[2]=-c*d,n[6]=p*h+_,n[10]=u-M*h}else if(t.order==="XZY"){const u=r*l,p=r*c,_=o*l,M=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=u*h+M,n[5]=r*d,n[9]=p*h-_,n[2]=_*h-p,n[6]=o*d,n[10]=M*h+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yb,t,jb)}lookAt(t,n,i){const a=this.elements;return wn.subVectors(t,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),da.crossVectors(i,wn),da.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),da.crossVectors(i,wn)),da.normalize(),Al.crossVectors(wn,da),a[0]=da.x,a[4]=Al.x,a[8]=wn.x,a[1]=da.y,a[5]=Al.y,a[9]=wn.y,a[2]=da.z,a[6]=Al.z,a[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],p=i[13],_=i[2],M=i[6],g=i[10],f=i[14],m=i[3],v=i[7],y=i[11],C=i[15],b=a[0],R=a[4],x=a[8],A=a[12],w=a[1],D=a[5],G=a[9],Y=a[13],j=a[2],I=a[6],U=a[10],P=a[14],W=a[3],Q=a[7],at=a[11],xt=a[15];return s[0]=r*b+o*w+l*j+c*W,s[4]=r*R+o*D+l*I+c*Q,s[8]=r*x+o*G+l*U+c*at,s[12]=r*A+o*Y+l*P+c*xt,s[1]=d*b+h*w+u*j+p*W,s[5]=d*R+h*D+u*I+p*Q,s[9]=d*x+h*G+u*U+p*at,s[13]=d*A+h*Y+u*P+p*xt,s[2]=_*b+M*w+g*j+f*W,s[6]=_*R+M*D+g*I+f*Q,s[10]=_*x+M*G+g*U+f*at,s[14]=_*A+M*Y+g*P+f*xt,s[3]=m*b+v*w+y*j+C*W,s[7]=m*R+v*D+y*I+C*Q,s[11]=m*x+v*G+y*U+C*at,s[15]=m*A+v*Y+y*P+C*xt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],d=t[2],h=t[6],u=t[10],p=t[14],_=t[3],M=t[7],g=t[11],f=t[15],m=l*p-c*u,v=o*p-c*h,y=o*u-l*h,C=r*p-c*d,b=r*u-l*d,R=r*h-o*d;return n*(M*m-g*v+f*y)-i*(_*m-g*C+f*b)+a*(_*v-M*C+f*R)-s*(_*y-M*b+g*R)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=t[9],u=t[10],p=t[11],_=t[12],M=t[13],g=t[14],f=t[15],m=n*o-i*r,v=n*l-a*r,y=n*c-s*r,C=i*l-a*o,b=i*c-s*o,R=a*c-s*l,x=d*M-h*_,A=d*g-u*_,w=d*f-p*_,D=h*g-u*M,G=h*f-p*M,Y=u*f-p*g,j=m*Y-v*G+y*D+C*w-b*A+R*x;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/j;return t[0]=(o*Y-l*G+c*D)*I,t[1]=(a*G-i*Y-s*D)*I,t[2]=(M*R-g*b+f*C)*I,t[3]=(u*b-h*R-p*C)*I,t[4]=(l*w-r*Y-c*A)*I,t[5]=(n*Y-a*w+s*A)*I,t[6]=(g*y-_*R-f*v)*I,t[7]=(d*R-u*y+p*v)*I,t[8]=(r*G-o*w+c*x)*I,t[9]=(i*w-n*G-s*x)*I,t[10]=(_*b-M*y+f*m)*I,t[11]=(h*y-d*b-p*m)*I,t[12]=(o*A-r*D-l*x)*I,t[13]=(n*D-i*A+a*x)*I,t[14]=(M*v-_*C-g*m)*I,t[15]=(d*C-h*v+u*m)*I,this}scale(t){const n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,d=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*r,0,c*l-a*o,d*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,d=r+r,h=o+o,u=s*c,p=s*d,_=s*h,M=r*d,g=r*h,f=o*h,m=l*c,v=l*d,y=l*h,C=i.x,b=i.y,R=i.z;return a[0]=(1-(M+f))*C,a[1]=(p+y)*C,a[2]=(_-v)*C,a[3]=0,a[4]=(p-y)*b,a[5]=(1-(u+f))*b,a[6]=(g+m)*b,a[7]=0,a[8]=(_+v)*R,a[9]=(g-m)*R,a[10]=(1-(u+M))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let r=Ps.set(a[0],a[1],a[2]).length();const o=Ps.set(a[4],a[5],a[6]).length(),l=Ps.set(a[8],a[9],a[10]).length();s<0&&(r=-r),ai.copy(this);const c=1/r,d=1/o,h=1/l;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=d,ai.elements[5]*=d,ai.elements[6]*=d,ai.elements[8]*=h,ai.elements[9]*=h,ai.elements[10]*=h,n.setFromRotationMatrix(ai),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,a,s,r,o=yi,l=!1){const c=this.elements,d=2*s/(n-t),h=2*s/(i-a),u=(n+t)/(n-t),p=(i+a)/(i-a);let _,M;if(l)_=s/(r-s),M=r*s/(r-s);else if(o===yi)_=-(r+s)/(r-s),M=-2*r*s/(r-s);else if(o===tu)_=-r/(r-s),M=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=yi,l=!1){const c=this.elements,d=2/(n-t),h=2/(i-a),u=-(n+t)/(n-t),p=-(i+a)/(i-a);let _,M;if(l)_=1/(r-s),M=r/(r-s);else if(o===yi)_=-2/(r-s),M=-(r+s)/(r-s);else if(o===tu)_=-1/(r-s),M=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};su.prototype.isMatrix4=!0;let We=su;const Ps=new z,ai=new We,Yb=new z(0,0,0),jb=new z(1,1,1),da=new z,Al=new z,wn=new z,o0=new We,l0=new Hr;class ys{constructor(t=0,n=0,i=0,a=ys.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],d=a[9],h=a[2],u=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Qt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return o0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(o0,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return l0.setFromEuler(this),this.setFromQuaternion(l0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ys.DEFAULT_ORDER="XYZ";class AS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zb=0;const c0=new z,Is=new Hr,Ii=new We,Rl=new z,Kr=new z,Kb=new z,Qb=new Hr,u0=new z(1,0,0),f0=new z(0,1,0),d0=new z(0,0,1),h0={type:"added"},Jb={type:"removed"},Bs={type:"childadded",child:null},Tf={type:"childremoved",child:null};class Tn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zb++}),this.uuid=il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const t=new z,n=new ys,i=new Hr,a=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new We},normalMatrix:{value:new It}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new AS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Is.setFromAxisAngle(t,n),this.quaternion.multiply(Is),this}rotateOnWorldAxis(t,n){return Is.setFromAxisAngle(t,n),this.quaternion.premultiply(Is),this}rotateX(t){return this.rotateOnAxis(u0,t)}rotateY(t){return this.rotateOnAxis(f0,t)}rotateZ(t){return this.rotateOnAxis(d0,t)}translateOnAxis(t,n){return c0.copy(t).applyQuaternion(this.quaternion),this.position.add(c0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(u0,t)}translateY(t){return this.translateOnAxis(f0,t)}translateZ(t){return this.translateOnAxis(d0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Rl.copy(t):Rl.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Kr,Rl,this.up):Ii.lookAt(Rl,Kr,this.up),this.quaternion.setFromRotationMatrix(Ii),a&&(Ii.extractRotation(a.matrixWorld),Is.setFromRotationMatrix(Ii),this.quaternion.premultiply(Is.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(h0),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Jb),Tf.child=t,this.dispatchEvent(Tf),Tf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(h0),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,t,Kb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,Qb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,i=t.y,a=t.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),d=r(t.images),h=r(t.shapes),u=r(t.skeletons),p=r(t.animations),_=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=a,i;function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}Tn.DEFAULT_UP=new z(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Cl extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $b={type:"move"};class Af{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const M of t.hand.values()){const g=n.getJointPose(M,i),f=this._getHandJoint(c,M);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($b)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Cl;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const RS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ha={h:0,s:0,l:0},wl={h:0,s:0,l:0};function Rf(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class fe{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=Kt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Kt.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=Kt.workingColorSpace){if(t=Hb(t,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=Rf(r,s,t+1/3),this.g=Rf(r,s,t),this.b=Rf(r,s,t-1/3)}return Kt.colorSpaceToWorking(this,a),this}setStyle(t,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Dt("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Wn){const i=RS[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}copyLinearToSRGB(t){return this.r=gr(t.r),this.g=gr(t.g),this.b=gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Wn){return Kt.workingToColorSpace(un.copy(this),t),Math.round(Qt(un.r*255,0,255))*65536+Math.round(Qt(un.g*255,0,255))*256+Math.round(Qt(un.b*255,0,255))}getHexString(t=Wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Kt.workingColorSpace){Kt.workingToColorSpace(un.copy(this),n);const i=un.r,a=un.g,s=un.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const d=(o+r)/2;if(o===r)l=0,c=0;else{const h=r-o;switch(c=d<=.5?h/(r+o):h/(2-r-o),r){case i:l=(a-s)/h+(a<s?6:0);break;case a:l=(s-i)/h+2;break;case s:l=(i-a)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,n=Kt.workingColorSpace){return Kt.workingToColorSpace(un.copy(this),n),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=Wn){Kt.workingToColorSpace(un.copy(this),t);const n=un.r,i=un.g,a=un.b;return t!==Wn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(ha),this.setHSL(ha.h+t,ha.s+n,ha.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ha),t.getHSL(wl);const i=Sf(ha.h,wl.h,n),a=Sf(ha.s,wl.s,n),s=Sf(ha.l,wl.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new fe;fe.NAMES=RS;class tT extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ys,this.environmentIntensity=1,this.environmentRotation=new ys,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const si=new z,Bi=new z,Cf=new z,Fi=new z,Fs=new z,zs=new z,p0=new z,wf=new z,Df=new z,Uf=new z,Nf=new Fe,Lf=new Fe,Of=new Fe;class li{constructor(t=new z,n=new z,i=new z){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),si.subVectors(t,n),a.cross(si);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){si.subVectors(a,n),Bi.subVectors(i,n),Cf.subVectors(t,n);const r=si.dot(si),o=si.dot(Bi),l=si.dot(Cf),c=Bi.dot(Bi),d=Bi.dot(Cf),h=r*c-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,p=(c*l-o*d)*u,_=(r*d-o*l)*u;return s.set(1-p-_,_,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(r,Fi.y),l.addScaledVector(o,Fi.z),l)}static getInterpolatedAttribute(t,n,i,a,s,r){return Nf.setScalar(0),Lf.setScalar(0),Of.setScalar(0),Nf.fromBufferAttribute(t,n),Lf.fromBufferAttribute(t,i),Of.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(Nf,s.x),r.addScaledVector(Lf,s.y),r.addScaledVector(Of,s.z),r}static isFrontFacing(t,n,i,a){return si.subVectors(i,n),Bi.subVectors(t,n),si.cross(Bi).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),si.cross(Bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return li.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return li.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,s=this.c;let r,o;Fs.subVectors(a,i),zs.subVectors(s,i),wf.subVectors(t,i);const l=Fs.dot(wf),c=zs.dot(wf);if(l<=0&&c<=0)return n.copy(i);Df.subVectors(t,a);const d=Fs.dot(Df),h=zs.dot(Df);if(d>=0&&h<=d)return n.copy(a);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return r=l/(l-d),n.copy(i).addScaledVector(Fs,r);Uf.subVectors(t,s);const p=Fs.dot(Uf),_=zs.dot(Uf);if(_>=0&&p<=_)return n.copy(s);const M=p*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(zs,o);const g=d*_-p*h;if(g<=0&&h-d>=0&&p-_>=0)return p0.subVectors(s,a),o=(h-d)/(h-d+(p-_)),n.copy(a).addScaledVector(p0,o);const f=1/(g+M+u);return r=M*f,o=u*f,n.copy(i).addScaledVector(Fs,r).addScaledVector(zs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class al{constructor(t=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(ri.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(ri.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=ri.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ri):ri.fromBufferAttribute(s,r),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Dl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dl.copy(i.boundingBox)),Dl.applyMatrix4(t.matrixWorld),this.union(Dl)}const a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qr),Ul.subVectors(this.max,Qr),Hs.subVectors(t.a,Qr),Gs.subVectors(t.b,Qr),Vs.subVectors(t.c,Qr),pa.subVectors(Gs,Hs),ma.subVectors(Vs,Gs),Ka.subVectors(Hs,Vs);let n=[0,-pa.z,pa.y,0,-ma.z,ma.y,0,-Ka.z,Ka.y,pa.z,0,-pa.x,ma.z,0,-ma.x,Ka.z,0,-Ka.x,-pa.y,pa.x,0,-ma.y,ma.x,0,-Ka.y,Ka.x,0];return!Pf(n,Hs,Gs,Vs,Ul)||(n=[1,0,0,0,1,0,0,0,1],!Pf(n,Hs,Gs,Vs,Ul))?!1:(Nl.crossVectors(pa,ma),n=[Nl.x,Nl.y,Nl.z],Pf(n,Hs,Gs,Vs,Ul))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const zi=[new z,new z,new z,new z,new z,new z,new z,new z],ri=new z,Dl=new al,Hs=new z,Gs=new z,Vs=new z,pa=new z,ma=new z,Ka=new z,Qr=new z,Ul=new z,Nl=new z,Qa=new z;function Pf(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){Qa.fromArray(e,s);const o=a.x*Math.abs(Qa.x)+a.y*Math.abs(Qa.y)+a.z*Math.abs(Qa.z),l=t.dot(Qa),c=n.dot(Qa),d=i.dot(Qa);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const He=new z,Ll=new se;let eT=0;class Ti extends Rs{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=t0,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ll.fromBufferAttribute(this,n),Ll.applyMatrix3(t),this.setXY(n,Ll.x,Ll.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyMatrix3(t),this.setXYZ(n,He.x,He.y,He.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyMatrix4(t),this.setXYZ(n,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyNormalMatrix(t),this.setXYZ(n,He.x,He.y,He.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.transformDirection(t),this.setXYZ(n,He.x,He.y,He.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Zr(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Sn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Zr(n,this.array)),n}setX(t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Zr(n,this.array)),n}setY(t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Zr(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Zr(n,this.array)),n}setW(t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),a=Sn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),a=Sn(a,this.array),s=Sn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==t0&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class CS extends Ti{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class wS extends Ti{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class tn extends Ti{constructor(t,n,i){super(new Float32Array(t),n,i)}}const nT=new al,Jr=new z,If=new z;class Au{constructor(t=new z,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):nT.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jr.subVectors(t,this.center);const n=Jr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Jr,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(If.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jr.copy(t.center).add(If)),this.expandByPoint(Jr.copy(t.center).sub(If))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let iT=0;const kn=new We,Bf=new Tn,ks=new z,Dn=new al,$r=new al,Ke=new z;class Gn extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iT++}),this.uuid=il(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ib(t)?wS:CS)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new It().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,n,i){return kn.makeTranslation(t,n,i),this.applyMatrix4(kn),this}scale(t,n,i){return kn.makeScale(t,n,i),this.applyMatrix4(kn),this}lookAt(t){return Bf.lookAt(t),Bf.updateMatrix(),this.applyMatrix4(Bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=t.length;a<s;a++){const r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new tn(i,3))}else{const i=Math.min(t.length,n.count);for(let a=0;a<i;a++){const s=t[a];n.setXYZ(a,s.x,s.y,s.z||0)}t.length>n.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new al);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Au);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];$r.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(Dn.min,$r.min),Dn.expandByPoint(Ke),Ke.addVectors(Dn.max,$r.max),Dn.expandByPoint(Ke)):(Dn.expandByPoint($r.min),Dn.expandByPoint($r.max))}Dn.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)Ke.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(Ke));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ke.fromBufferAttribute(o,c),l&&(ks.fromBufferAttribute(t,c),Ke.add(ks)),a=Math.max(a,i.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new z,l[x]=new z;const c=new z,d=new z,h=new z,u=new se,p=new se,_=new se,M=new z,g=new z;function f(x,A,w){c.fromBufferAttribute(i,x),d.fromBufferAttribute(i,A),h.fromBufferAttribute(i,w),u.fromBufferAttribute(s,x),p.fromBufferAttribute(s,A),_.fromBufferAttribute(s,w),d.sub(c),h.sub(c),p.sub(u),_.sub(u);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(M.copy(d).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(D),g.copy(h).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(D),o[x].add(M),o[A].add(M),o[w].add(M),l[x].add(g),l[A].add(g),l[w].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let x=0,A=m.length;x<A;++x){const w=m[x],D=w.start,G=w.count;for(let Y=D,j=D+G;Y<j;Y+=3)f(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const v=new z,y=new z,C=new z,b=new z;function R(x){C.fromBufferAttribute(a,x),b.copy(C);const A=o[x];v.copy(A),v.sub(C.multiplyScalar(C.dot(A))).normalize(),y.crossVectors(b,A);const D=y.dot(l[x])<0?-1:1;r.setXYZW(x,v.x,v.y,v.z,D)}for(let x=0,A=m.length;x<A;++x){const w=m[x],D=w.start,G=w.count;for(let Y=D,j=D+G;Y<j;Y+=3)R(t.getX(Y+0)),R(t.getX(Y+1)),R(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ti(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const a=new z,s=new z,r=new z,o=new z,l=new z,c=new z,d=new z,h=new z;if(t)for(let u=0,p=t.count;u<p;u+=3){const _=t.getX(u+0),M=t.getX(u+1),g=t.getX(u+2);a.fromBufferAttribute(n,_),s.fromBufferAttribute(n,M),r.fromBufferAttribute(n,g),d.subVectors(r,s),h.subVectors(a,s),d.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)a.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),d.subVectors(r,s),h.subVectors(a,s),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ke.fromBufferAttribute(t,n),Ke.normalize(),t.setXYZ(n,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let p=0,_=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*d;for(let f=0;f<d;f++)u[_++]=c[p++]}return new Ti(u,d,h)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gn,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=t(u,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(t.data))}d.length>0&&(a[l]=d,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(n))}const s=t.morphAttributes;for(const c in s){const d=[],h=s[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,d=r.length;c<d;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let aT=0;class sl extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aT++}),this.uuid=il(),this.name="",this.type="Material",this.blending=mr,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jd,this.blendDst=Zd,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$g,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){Dt(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Dt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(i.blending=this.blending),this.side!==Xa&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jd&&(i.blendSrc=this.blendSrc),this.blendDst!==Zd&&(i.blendDst=this.blendDst),this.blendEquation!==ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$g&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Hi=new z,Ff=new z,Ol=new z,ga=new z,zf=new z,Pl=new z,Hf=new z;class DS{constructor(t=new z,n=new z(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Hi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,n),Hi.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){Ff.copy(t).add(n).multiplyScalar(.5),Ol.copy(n).sub(t).normalize(),ga.copy(this.origin).sub(Ff);const s=t.distanceTo(n)*.5,r=-this.direction.dot(Ol),o=ga.dot(this.direction),l=-ga.dot(Ol),c=ga.lengthSq(),d=Math.abs(1-r*r);let h,u,p,_;if(d>0)if(h=r*l-o,u=r*o-l,_=s*d,h>=0)if(u>=-_)if(u<=_){const M=1/d;h*=M,u*=M,p=h*(h+r*u+2*o)+u*(r*h+u+2*l)+c}else u=s,h=Math.max(0,-(r*u+o)),p=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(r*u+o)),p=-h*h+u*(u+2*l)+c;else u<=-_?(h=Math.max(0,-(-r*s+o)),u=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c):u<=_?(h=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(h=Math.max(0,-(r*s+o)),u=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c);else u=r>0?-s:s,h=Math.max(0,-(r*u+o)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(Ff).addScaledVector(Ol,u),p}intersectSphere(t,n){Hi.subVectors(t.center,this.origin);const i=Hi.dot(this.direction),a=Hi.dot(Hi)-i*i,s=t.radius*t.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,a=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,a=(t.min.x-u.x)*c),d>=0?(s=(t.min.y-u.y)*d,r=(t.max.y-u.y)*d):(s=(t.max.y-u.y)*d,r=(t.min.y-u.y)*d),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),h>=0?(o=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(o=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,n,i,a,s){zf.subVectors(n,t),Pl.subVectors(i,t),Hf.crossVectors(zf,Pl);let r=this.direction.dot(Hf),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ga.subVectors(this.origin,t);const l=o*this.direction.dot(Pl.crossVectors(ga,Pl));if(l<0)return null;const c=o*this.direction.dot(zf.cross(ga));if(c<0||l+c>r)return null;const d=-o*ga.dot(Hf);return d<0?null:this.at(d/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tm extends sl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ys,this.combine=lS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const m0=new We,Ja=new DS,Il=new Au,g0=new z,Bl=new z,Fl=new z,zl=new z,Gf=new z,Hl=new z,_0=new z,Gl=new z;class Ri extends Tn{constructor(t=new Gn,n=new tm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(s&&o){Hl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(Gf.fromBufferAttribute(h,t),r?Hl.addScaledVector(Gf,d):Hl.addScaledVector(Gf.sub(n),d))}n.add(Hl)}return n}raycast(t,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Il.copy(i.boundingSphere),Il.applyMatrix4(s),Ja.copy(t.ray).recast(t.near),!(Il.containsPoint(Ja.origin)===!1&&(Ja.intersectSphere(Il,g0)===null||Ja.origin.distanceToSquared(g0)>(t.far-t.near)**2))&&(m0.copy(s).invert(),Ja.copy(t.ray).applyMatrix4(m0),!(i.boundingBox!==null&&Ja.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ja)))}_computeIntersections(t,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,M=u.length;_<M;_++){const g=u[_],f=r[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=m,C=v;y<C;y+=3){const b=o.getX(y),R=o.getX(y+1),x=o.getX(y+2);a=Vl(this,f,t,i,c,d,h,b,R,x),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const _=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let g=_,f=M;g<f;g+=3){const m=o.getX(g),v=o.getX(g+1),y=o.getX(g+2);a=Vl(this,r,t,i,c,d,h,m,v,y),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,M=u.length;_<M;_++){const g=u[_],f=r[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=m,C=v;y<C;y+=3){const b=y,R=y+1,x=y+2;a=Vl(this,f,t,i,c,d,h,b,R,x),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const _=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=_,f=M;g<f;g+=3){const m=g,v=g+1,y=g+2;a=Vl(this,r,t,i,c,d,h,m,v,y),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function sT(e,t,n,i,a,s,r,o){let l;if(t.side===bn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===Xa,o),l===null)return null;Gl.copy(o),Gl.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(Gl);return c<n.near||c>n.far?null:{distance:c,point:Gl.clone(),object:e}}function Vl(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,Bl),e.getVertexPosition(l,Fl),e.getVertexPosition(c,zl);const d=sT(e,t,n,i,Bl,Fl,zl,_0);if(d){const h=new z;li.getBarycoord(_0,Bl,Fl,zl,h),a&&(d.uv=li.getInterpolatedAttribute(a,o,l,c,h,new se)),s&&(d.uv1=li.getInterpolatedAttribute(s,o,l,c,h,new se)),r&&(d.normal=li.getInterpolatedAttribute(r,o,l,c,h,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new z,materialIndex:0};li.getNormal(Bl,Fl,zl,u.normal),d.face=u,d.barycoord=h}return d}class rT extends gn{constructor(t=null,n=1,i=1,a,s,r,o,l,c=rn,d=rn,h,u){super(null,r,o,l,c,d,a,s,h,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vf=new z,oT=new z,lT=new It;class as{constructor(t=new z(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=Vf.subVectors(i,n).cross(oT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){const a=t.delta(Vf),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(a,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||lT.getNormalMatrix(t),a=this.coplanarPoint(Vf).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $a=new Au,cT=new se(.5,.5),kl=new z;class US{constructor(t=new as,n=new as,i=new as,a=new as,s=new as,r=new as){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=yi,i=!1){const a=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],c=s[3],d=s[4],h=s[5],u=s[6],p=s[7],_=s[8],M=s[9],g=s[10],f=s[11],m=s[12],v=s[13],y=s[14],C=s[15];if(a[0].setComponents(c-r,p-d,f-_,C-m).normalize(),a[1].setComponents(c+r,p+d,f+_,C+m).normalize(),a[2].setComponents(c+o,p+h,f+M,C+v).normalize(),a[3].setComponents(c-o,p-h,f-M,C-v).normalize(),i)a[4].setComponents(l,u,g,y).normalize(),a[5].setComponents(c-l,p-u,f-g,C-y).normalize();else if(a[4].setComponents(c-l,p-u,f-g,C-y).normalize(),n===yi)a[5].setComponents(c+l,p+u,f+g,C+y).normalize();else if(n===tu)a[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$a.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($a)}intersectsSprite(t){$a.center.set(0,0,0);const n=cT.distanceTo(t.center);return $a.radius=.7071067811865476+n,$a.applyMatrix4(t.matrixWorld),this.intersectsSphere($a)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(kl.x=a.normal.x>0?t.max.x:t.min.x,kl.y=a.normal.y>0?t.max.y:t.min.y,kl.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(kl)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class NS extends sl{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const nu=new z,iu=new z,v0=new We,to=new DS,Xl=new Au,kf=new z,x0=new z;class uT extends Tn{constructor(t=new Gn,n=new NS){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let a=1,s=n.count;a<s;a++)nu.fromBufferAttribute(n,a-1),iu.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=nu.distanceTo(iu);t.setAttribute("lineDistance",new tn(i,1))}else Dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xl.copy(i.boundingSphere),Xl.applyMatrix4(a),Xl.radius+=s,t.ray.intersectsSphere(Xl)===!1)return;v0.copy(a).invert(),to.copy(t.ray).applyMatrix4(v0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const p=Math.max(0,r.start),_=Math.min(d.count,r.start+r.count);for(let M=p,g=_-1;M<g;M+=c){const f=d.getX(M),m=d.getX(M+1),v=Wl(this,t,to,l,f,m,M);v&&n.push(v)}if(this.isLineLoop){const M=d.getX(_-1),g=d.getX(p),f=Wl(this,t,to,l,M,g,_-1);f&&n.push(f)}}else{const p=Math.max(0,r.start),_=Math.min(u.count,r.start+r.count);for(let M=p,g=_-1;M<g;M+=c){const f=Wl(this,t,to,l,M,M+1,M);f&&n.push(f)}if(this.isLineLoop){const M=Wl(this,t,to,l,_-1,p,_-1);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wl(e,t,n,i,a,s,r){const o=e.geometry.attributes.position;if(nu.fromBufferAttribute(o,a),iu.fromBufferAttribute(o,s),n.distanceSqToSegment(nu,iu,kf,x0)>i)return;kf.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(kf);if(!(c<t.near||c>t.far))return{distance:c,point:x0.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}const S0=new z,y0=new z;class fT extends uT{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[];for(let a=0,s=n.count;a<s;a+=2)S0.fromBufferAttribute(n,a),y0.fromBufferAttribute(n,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+S0.distanceTo(y0);t.setAttribute("lineDistance",new tn(i,1))}else Dt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class LS extends gn{constructor(t=[],n=xs,i,a,s,r,o,l,c,d){super(t,n,i,a,s,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dr extends gn{constructor(t,n,i=Ai,a,s,r,o=rn,l=rn,c,d=ra,h=1){if(d!==ra&&d!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:n,depth:h};super(u,a,s,r,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $p(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class dT extends Dr{constructor(t,n=Ai,i=xs,a,s,r=rn,o=rn,l,c=ra){const d={width:t,height:t,depth:1},h=[d,d,d,d,d,d];super(t,t,n,i,a,s,r,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class OS extends gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class rl extends Gn{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],d=[],h=[];let u=0,p=0;_("z","y","x",-1,-1,i,n,t,r,s,0),_("z","y","x",1,-1,i,n,-t,r,s,1),_("x","z","y",1,1,t,i,n,a,r,2),_("x","z","y",1,-1,t,i,-n,a,r,3),_("x","y","z",1,-1,t,n,i,a,s,4),_("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(d,3)),this.setAttribute("uv",new tn(h,2));function _(M,g,f,m,v,y,C,b,R,x,A){const w=y/R,D=C/x,G=y/2,Y=C/2,j=b/2,I=R+1,U=x+1;let P=0,W=0;const Q=new z;for(let at=0;at<U;at++){const xt=at*D-Y;for(let yt=0;yt<I;yt++){const Gt=yt*w-G;Q[M]=Gt*m,Q[g]=xt*v,Q[f]=j,c.push(Q.x,Q.y,Q.z),Q[M]=0,Q[g]=0,Q[f]=b>0?1:-1,d.push(Q.x,Q.y,Q.z),h.push(yt/R),h.push(1-at/x),P+=1}}for(let at=0;at<x;at++)for(let xt=0;xt<R;xt++){const yt=u+xt+I*at,Gt=u+xt+I*(at+1),qt=u+(xt+1)+I*(at+1),wt=u+(xt+1)+I*at;l.push(yt,Gt,wt),l.push(Gt,qt,wt),W+=6}o.addGroup(p,W,A),p+=W,u+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class em extends Gn{constructor(t=[],n=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:a};const s=[],r=[];o(a),c(i),d(),this.setAttribute("position",new tn(s,3)),this.setAttribute("normal",new tn(s.slice(),3)),this.setAttribute("uv",new tn(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const v=new z,y=new z,C=new z;for(let b=0;b<n.length;b+=3)p(n[b+0],v),p(n[b+1],y),p(n[b+2],C),l(v,y,C,m)}function l(m,v,y,C){const b=C+1,R=[];for(let x=0;x<=b;x++){R[x]=[];const A=m.clone().lerp(y,x/b),w=v.clone().lerp(y,x/b),D=b-x;for(let G=0;G<=D;G++)G===0&&x===b?R[x][G]=A:R[x][G]=A.clone().lerp(w,G/D)}for(let x=0;x<b;x++)for(let A=0;A<2*(b-x)-1;A++){const w=Math.floor(A/2);A%2===0?(u(R[x][w+1]),u(R[x+1][w]),u(R[x][w])):(u(R[x][w+1]),u(R[x+1][w+1]),u(R[x+1][w]))}}function c(m){const v=new z;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(m),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function d(){const m=new z;for(let v=0;v<s.length;v+=3){m.x=s[v+0],m.y=s[v+1],m.z=s[v+2];const y=g(m)/2/Math.PI+.5,C=f(m)/Math.PI+.5;r.push(y,1-C)}_(),h()}function h(){for(let m=0;m<r.length;m+=6){const v=r[m+0],y=r[m+2],C=r[m+4],b=Math.max(v,y,C),R=Math.min(v,y,C);b>.9&&R<.1&&(v<.2&&(r[m+0]+=1),y<.2&&(r[m+2]+=1),C<.2&&(r[m+4]+=1))}}function u(m){s.push(m.x,m.y,m.z)}function p(m,v){const y=m*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function _(){const m=new z,v=new z,y=new z,C=new z,b=new se,R=new se,x=new se;for(let A=0,w=0;A<s.length;A+=9,w+=6){m.set(s[A+0],s[A+1],s[A+2]),v.set(s[A+3],s[A+4],s[A+5]),y.set(s[A+6],s[A+7],s[A+8]),b.set(r[w+0],r[w+1]),R.set(r[w+2],r[w+3]),x.set(r[w+4],r[w+5]),C.copy(m).add(v).add(y).divideScalar(3);const D=g(C);M(b,w+0,m,D),M(R,w+2,v,D),M(x,w+4,y,D)}}function M(m,v,y,C){C<0&&m.x===1&&(r[v]=m.x-1),y.x===0&&y.z===0&&(r[v]=C/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function f(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new em(t.vertices,t.indices,t.radius,t.detail)}}class nm extends em{constructor(t=1,n=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,s,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new nm(t.radius,t.detail)}}class Ru extends Gn{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,h=t/o,u=n/l,p=[],_=[],M=[],g=[];for(let f=0;f<d;f++){const m=f*u-r;for(let v=0;v<c;v++){const y=v*h-s;_.push(y,-m,0),M.push(0,0,1),g.push(v/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const v=m+c*f,y=m+c*(f+1),C=m+1+c*(f+1),b=m+1+c*f;p.push(v,y,b),p.push(y,C,b)}this.setIndex(p),this.setAttribute("position",new tn(_,3)),this.setAttribute("normal",new tn(M,3)),this.setAttribute("uv",new tn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ru(t.width,t.height,t.widthSegments,t.heightSegments)}}class im extends Gn{constructor(t=1,n=.4,i=12,a=48,s=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:a,arc:s,thetaStart:r,thetaLength:o},i=Math.floor(i),a=Math.floor(a);const l=[],c=[],d=[],h=[],u=new z,p=new z,_=new z;for(let M=0;M<=i;M++){const g=r+M/i*o;for(let f=0;f<=a;f++){const m=f/a*s;p.x=(t+n*Math.cos(g))*Math.cos(m),p.y=(t+n*Math.cos(g))*Math.sin(m),p.z=n*Math.sin(g),c.push(p.x,p.y,p.z),u.x=t*Math.cos(m),u.y=t*Math.sin(m),_.subVectors(p,u).normalize(),d.push(_.x,_.y,_.z),h.push(f/a),h.push(M/i)}}for(let M=1;M<=i;M++)for(let g=1;g<=a;g++){const f=(a+1)*M+g-1,m=(a+1)*(M-1)+g-1,v=(a+1)*(M-1)+g,y=(a+1)*M+g;l.push(f,m,y),l.push(m,v,y)}this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(d,3)),this.setAttribute("uv",new tn(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new im(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class hT extends Gn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const n=[],i=new Set,a=new z,s=new z;if(t.index!==null){const r=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,d=l.length;c<d;++c){const h=l[c],u=h.start,p=h.count;for(let _=u,M=u+p;_<M;_+=3)for(let g=0;g<3;g++){const f=o.getX(_+g),m=o.getX(_+(g+1)%3);a.fromBufferAttribute(r,f),s.fromBufferAttribute(r,m),M0(a,s,i)===!0&&(n.push(a.x,a.y,a.z),n.push(s.x,s.y,s.z))}}}else{const r=t.attributes.position;for(let o=0,l=r.count/3;o<l;o++)for(let c=0;c<3;c++){const d=3*o+c,h=3*o+(c+1)%3;a.fromBufferAttribute(r,d),s.fromBufferAttribute(r,h),M0(a,s,i)===!0&&(n.push(a.x,a.y,a.z),n.push(s.x,s.y,s.z))}}this.setAttribute("position",new tn(n,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function M0(e,t,n){const i=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,a=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return n.has(i)===!0||n.has(a)===!0?!1:(n.add(i),n.add(a),!0)}function Ur(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];if(E0(a))a.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone();else if(Array.isArray(a))if(E0(a[0])){const s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();t[n][i]=s}else t[n][i]=a.slice();else t[n][i]=a}}return t}function hn(e){const t={};for(let n=0;n<e.length;n++){const i=Ur(e[n]);for(const a in i)t[a]=i[a]}return t}function E0(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function pT(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function PS(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const mT={clone:Ur,merge:hn};var gT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_T=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends sl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gT,this.fragmentShader=_T,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ur(t.uniforms),this.uniformsGroups=pT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class vT extends Ci{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xT extends sl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ST extends sl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ql=new z,Yl=new Hr,pi=new z;class IS extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ql,Yl,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ql,Yl,pi.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(ql,Yl,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ql,Yl,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _a=new z,b0=new se,T0=new se;class Zn extends IS{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Ih*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ih*2*Math.atan(Math.tan(xf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){_a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_a.x,_a.y).multiplyScalar(-t/_a.z),_a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_a.x,_a.y).multiplyScalar(-t/_a.z)}getViewSize(t,n){return this.getViewBounds(t,b0,T0),n.subVectors(T0,b0)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(xf*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class BS extends IS{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Xs=-90,Ws=1;class yT extends Tn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Zn(Xs,Ws,t,n);a.layers=this.layers,this.add(a);const s=new Zn(Xs,Ws,t,n);s.layers=this.layers,this.add(s);const r=new Zn(Xs,Ws,t,n);r.layers=this.layers,this.add(r);const o=new Zn(Xs,Ws,t,n);o.layers=this.layers,this.add(o);const l=new Zn(Xs,Ws,t,n);l.layers=this.layers,this.add(l);const c=new Zn(Xs,Ws,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const c of n)this.remove(c);if(t===yi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===tu)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,d]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,s),t.setRenderTarget(i,1,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),t.setRenderTarget(h,u,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class MT extends Zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const fm=class fm{constructor(t,n,i,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,a){const s=this.elements;return s[0]=t,s[2]=n,s[1]=i,s[3]=a,this}};fm.prototype.isMatrix2=!0;let A0=fm;function R0(e,t,n,i){const a=ET(i);switch(n){case yS:return e*t;case ES:return e*t/a.components*a.byteLength;case jp:return e*t/a.components*a.byteLength;case Ss:return e*t*2/a.components*a.byteLength;case Zp:return e*t*2/a.components*a.byteLength;case MS:return e*t*3/a.components*a.byteLength;case ci:return e*t*4/a.components*a.byteLength;case Kp:return e*t*4/a.components*a.byteLength;case mc:case gc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case _c:case vc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case rh:case lh:return Math.max(e,16)*Math.max(t,8)/4;case sh:case oh:return Math.max(e,8)*Math.max(t,8)/2;case ch:case uh:case dh:case hh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case fh:case Kc:case ph:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case mh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case gh:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case _h:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case vh:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case xh:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Sh:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case yh:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Mh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Eh:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case bh:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Th:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ah:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Rh:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ch:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case wh:case Dh:case Uh:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Nh:case Lh:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Qc:case Oh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ET(e){switch(e){case $n:case _S:return{byteLength:1,components:1};case Vo:case vS:case sa:return{byteLength:2,components:1};case qp:case Yp:return{byteLength:2,components:4};case Ai:case Wp:case Si:return{byteLength:4,components:1};case xS:case SS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xp}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function FS(){let e=null,t=!1,n=null,i=null;function a(s,r){n(s,r),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function bT(e){const t=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(e.bindBuffer(c,o),h.length===0)e.bufferSubData(c,0,d);else{h.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<h.length;p++){const _=h[u],M=h[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++u,h[u]=M)}h.length=u+1;for(let p=0,_=h.length;p<_;p++){const M=h[p];e.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var TT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AT=`#ifdef USE_ALPHAHASH
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
#endif`,RT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UT=`#ifdef USE_AOMAP
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
#endif`,NT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LT=`#ifdef USE_BATCHING
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
#endif`,OT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,FT=`#ifdef USE_IRIDESCENCE
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
#endif`,zT=`#ifdef USE_BUMPMAP
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
#endif`,HT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,WT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,YT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jT=`#define PI 3.141592653589793
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
} // validated`,ZT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,KT=`vec3 transformedNormal = objectNormal;
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
#endif`,QT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$T=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e1="gl_FragColor = linearToOutputTexel( gl_FragColor );",n1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i1=`#ifdef USE_ENVMAP
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
#endif`,a1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,s1=`#ifdef USE_ENVMAP
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
#endif`,r1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o1=`#ifdef USE_ENVMAP
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
#endif`,l1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d1=`#ifdef USE_GRADIENTMAP
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
}`,h1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_1=`#ifdef USE_ENVMAP
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
#endif`,v1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M1=`PhysicalMaterial material;
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
#endif`,E1=`uniform sampler2D dfgLUT;
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
}`,b1=`
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
#endif`,T1=`#if defined( RE_IndirectDiffuse )
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
#endif`,A1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,C1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,P1=`#if defined( USE_POINTS_UV )
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
#endif`,I1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,H1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G1=`#ifdef USE_MORPHTARGETS
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
#endif`,V1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,X1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,j1=`#ifdef USE_NORMALMAP
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
#endif`,Z1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,K1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uA=`float getShadowMask() {
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
}`,fA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dA=`#ifdef USE_SKINNING
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
#endif`,hA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pA=`#ifdef USE_SKINNING
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
#endif`,mA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_A=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xA=`#ifdef USE_TRANSMISSION
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
#endif`,SA=`#ifdef USE_TRANSMISSION
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
#endif`,yA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AA=`uniform sampler2D t2D;
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
}`,RA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UA=`#include <common>
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
}`,NA=`#if DEPTH_PACKING == 3200
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
}`,LA=`#define DISTANCE
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
}`,OA=`#define DISTANCE
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
}`,PA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BA=`uniform float scale;
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
}`,FA=`uniform vec3 diffuse;
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
}`,zA=`#include <common>
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
}`,HA=`uniform vec3 diffuse;
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
}`,GA=`#define LAMBERT
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
}`,VA=`#define LAMBERT
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
}`,kA=`#define MATCAP
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
}`,XA=`#define MATCAP
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
}`,WA=`#define NORMAL
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
}`,qA=`#define NORMAL
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
}`,YA=`#define PHONG
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
}`,jA=`#define PHONG
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
}`,ZA=`#define STANDARD
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
}`,KA=`#define STANDARD
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
}`,QA=`#define TOON
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
}`,JA=`#define TOON
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
}`,$A=`uniform float size;
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
}`,tR=`uniform vec3 diffuse;
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
}`,eR=`#include <common>
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
}`,nR=`uniform vec3 color;
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
}`,iR=`uniform float rotation;
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
}`,aR=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:TT,alphahash_pars_fragment:AT,alphamap_fragment:RT,alphamap_pars_fragment:CT,alphatest_fragment:wT,alphatest_pars_fragment:DT,aomap_fragment:UT,aomap_pars_fragment:NT,batching_pars_vertex:LT,batching_vertex:OT,begin_vertex:PT,beginnormal_vertex:IT,bsdfs:BT,iridescence_fragment:FT,bumpmap_pars_fragment:zT,clipping_planes_fragment:HT,clipping_planes_pars_fragment:GT,clipping_planes_pars_vertex:VT,clipping_planes_vertex:kT,color_fragment:XT,color_pars_fragment:WT,color_pars_vertex:qT,color_vertex:YT,common:jT,cube_uv_reflection_fragment:ZT,defaultnormal_vertex:KT,displacementmap_pars_vertex:QT,displacementmap_vertex:JT,emissivemap_fragment:$T,emissivemap_pars_fragment:t1,colorspace_fragment:e1,colorspace_pars_fragment:n1,envmap_fragment:i1,envmap_common_pars_fragment:a1,envmap_pars_fragment:s1,envmap_pars_vertex:r1,envmap_physical_pars_fragment:_1,envmap_vertex:o1,fog_vertex:l1,fog_pars_vertex:c1,fog_fragment:u1,fog_pars_fragment:f1,gradientmap_pars_fragment:d1,lightmap_pars_fragment:h1,lights_lambert_fragment:p1,lights_lambert_pars_fragment:m1,lights_pars_begin:g1,lights_toon_fragment:v1,lights_toon_pars_fragment:x1,lights_phong_fragment:S1,lights_phong_pars_fragment:y1,lights_physical_fragment:M1,lights_physical_pars_fragment:E1,lights_fragment_begin:b1,lights_fragment_maps:T1,lights_fragment_end:A1,lightprobes_pars_fragment:R1,logdepthbuf_fragment:C1,logdepthbuf_pars_fragment:w1,logdepthbuf_pars_vertex:D1,logdepthbuf_vertex:U1,map_fragment:N1,map_pars_fragment:L1,map_particle_fragment:O1,map_particle_pars_fragment:P1,metalnessmap_fragment:I1,metalnessmap_pars_fragment:B1,morphinstance_vertex:F1,morphcolor_vertex:z1,morphnormal_vertex:H1,morphtarget_pars_vertex:G1,morphtarget_vertex:V1,normal_fragment_begin:k1,normal_fragment_maps:X1,normal_pars_fragment:W1,normal_pars_vertex:q1,normal_vertex:Y1,normalmap_pars_fragment:j1,clearcoat_normal_fragment_begin:Z1,clearcoat_normal_fragment_maps:K1,clearcoat_pars_fragment:Q1,iridescence_pars_fragment:J1,opaque_fragment:$1,packing:tA,premultiplied_alpha_fragment:eA,project_vertex:nA,dithering_fragment:iA,dithering_pars_fragment:aA,roughnessmap_fragment:sA,roughnessmap_pars_fragment:rA,shadowmap_pars_fragment:oA,shadowmap_pars_vertex:lA,shadowmap_vertex:cA,shadowmask_pars_fragment:uA,skinbase_vertex:fA,skinning_pars_vertex:dA,skinning_vertex:hA,skinnormal_vertex:pA,specularmap_fragment:mA,specularmap_pars_fragment:gA,tonemapping_fragment:_A,tonemapping_pars_fragment:vA,transmission_fragment:xA,transmission_pars_fragment:SA,uv_pars_fragment:yA,uv_pars_vertex:MA,uv_vertex:EA,worldpos_vertex:bA,background_vert:TA,background_frag:AA,backgroundCube_vert:RA,backgroundCube_frag:CA,cube_vert:wA,cube_frag:DA,depth_vert:UA,depth_frag:NA,distance_vert:LA,distance_frag:OA,equirect_vert:PA,equirect_frag:IA,linedashed_vert:BA,linedashed_frag:FA,meshbasic_vert:zA,meshbasic_frag:HA,meshlambert_vert:GA,meshlambert_frag:VA,meshmatcap_vert:kA,meshmatcap_frag:XA,meshnormal_vert:WA,meshnormal_frag:qA,meshphong_vert:YA,meshphong_frag:jA,meshphysical_vert:ZA,meshphysical_frag:KA,meshtoon_vert:QA,meshtoon_frag:JA,points_vert:$A,points_frag:tR,shadow_vert:eR,shadow_frag:nR,sprite_vert:iR,sprite_frag:aR},mt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},gi={basic:{uniforms:hn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:hn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:hn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:hn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:hn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new fe(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:hn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:hn([mt.points,mt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:hn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:hn([mt.common,mt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:hn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:hn([mt.sprite,mt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:hn([mt.common,mt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:hn([mt.lights,mt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};gi.physical={uniforms:hn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const jl={r:0,b:0,g:0},sR=new We,zS=new It;zS.set(-1,0,0,0,1,0,0,0,1);function rR(e,t,n,i,a,s){const r=new fe(0);let o=a===!0?0:1,l,c,d=null,h=0,u=null;function p(m){let v=m.isScene===!0?m.background:null;if(v&&v.isTexture){const y=m.backgroundBlurriness>0;v=t.get(v,y)}return v}function _(m){let v=!1;const y=p(m);y===null?g(r,o):y&&y.isColor&&(g(y,1),v=!0);const C=e.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(e.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(m,v){const y=p(v);y&&(y.isCubeTexture||y.mapping===Tu)?(c===void 0&&(c=new Ri(new rl(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:Ur(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sR.makeRotationFromEuler(v.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(zS),c.material.toneMapped=Kt.getTransfer(y.colorSpace)!==le,(d!==y||h!==y.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ri(new Ru(2,2),new Ci({name:"BackgroundMaterial",uniforms:Ur(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(y.colorSpace)!==le,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,d=y,h=y.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,v){m.getRGB(jl,PS(e)),n.buffers.color.setClear(jl.r,jl.g,jl.b,v,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,v=1){r.set(m),o=v,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:_,addToRenderList:M,dispose:f}}function oR(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=u(null);let s=a,r=!1;function o(D,G,Y,j,I){let U=!1;const P=h(D,j,Y,G);s!==P&&(s=P,c(s.object)),U=p(D,j,Y,I),U&&_(D,j,Y,I),I!==null&&t.update(I,e.ELEMENT_ARRAY_BUFFER),(U||r)&&(r=!1,y(D,G,Y,j),I!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return e.createVertexArray()}function c(D){return e.bindVertexArray(D)}function d(D){return e.deleteVertexArray(D)}function h(D,G,Y,j){const I=j.wireframe===!0;let U=i[G.id];U===void 0&&(U={},i[G.id]=U);const P=D.isInstancedMesh===!0?D.id:0;let W=U[P];W===void 0&&(W={},U[P]=W);let Q=W[Y.id];Q===void 0&&(Q={},W[Y.id]=Q);let at=Q[I];return at===void 0&&(at=u(l()),Q[I]=at),at}function u(D){const G=[],Y=[],j=[];for(let I=0;I<n;I++)G[I]=0,Y[I]=0,j[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:j,object:D,attributes:{},index:null}}function p(D,G,Y,j){const I=s.attributes,U=G.attributes;let P=0;const W=Y.getAttributes();for(const Q in W)if(W[Q].location>=0){const xt=I[Q];let yt=U[Q];if(yt===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(yt=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(yt=D.instanceColor)),xt===void 0||xt.attribute!==yt||yt&&xt.data!==yt.data)return!0;P++}return s.attributesNum!==P||s.index!==j}function _(D,G,Y,j){const I={},U=G.attributes;let P=0;const W=Y.getAttributes();for(const Q in W)if(W[Q].location>=0){let xt=U[Q];xt===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(xt=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(xt=D.instanceColor));const yt={};yt.attribute=xt,xt&&xt.data&&(yt.data=xt.data),I[Q]=yt,P++}s.attributes=I,s.attributesNum=P,s.index=j}function M(){const D=s.newAttributes;for(let G=0,Y=D.length;G<Y;G++)D[G]=0}function g(D){f(D,0)}function f(D,G){const Y=s.newAttributes,j=s.enabledAttributes,I=s.attributeDivisors;Y[D]=1,j[D]===0&&(e.enableVertexAttribArray(D),j[D]=1),I[D]!==G&&(e.vertexAttribDivisor(D,G),I[D]=G)}function m(){const D=s.newAttributes,G=s.enabledAttributes;for(let Y=0,j=G.length;Y<j;Y++)G[Y]!==D[Y]&&(e.disableVertexAttribArray(Y),G[Y]=0)}function v(D,G,Y,j,I,U,P){P===!0?e.vertexAttribIPointer(D,G,Y,I,U):e.vertexAttribPointer(D,G,Y,j,I,U)}function y(D,G,Y,j){M();const I=j.attributes,U=Y.getAttributes(),P=G.defaultAttributeValues;for(const W in U){const Q=U[W];if(Q.location>=0){let at=I[W];if(at===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(at=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(at=D.instanceColor)),at!==void 0){const xt=at.normalized,yt=at.itemSize,Gt=t.get(at);if(Gt===void 0)continue;const qt=Gt.buffer,wt=Gt.type,$=Gt.bytesPerElement,ft=wt===e.INT||wt===e.UNSIGNED_INT||at.gpuType===Wp;if(at.isInterleavedBufferAttribute){const rt=at.data,Rt=rt.stride,Ut=at.offset;if(rt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<Q.locationSize;Ct++)f(Q.location+Ct,rt.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ct=0;Ct<Q.locationSize;Ct++)g(Q.location+Ct);e.bindBuffer(e.ARRAY_BUFFER,qt);for(let Ct=0;Ct<Q.locationSize;Ct++)v(Q.location+Ct,yt/Q.locationSize,wt,xt,Rt*$,(Ut+yt/Q.locationSize*Ct)*$,ft)}else{if(at.isInstancedBufferAttribute){for(let rt=0;rt<Q.locationSize;rt++)f(Q.location+rt,at.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let rt=0;rt<Q.locationSize;rt++)g(Q.location+rt);e.bindBuffer(e.ARRAY_BUFFER,qt);for(let rt=0;rt<Q.locationSize;rt++)v(Q.location+rt,yt/Q.locationSize,wt,xt,yt*$,yt/Q.locationSize*rt*$,ft)}}else if(P!==void 0){const xt=P[W];if(xt!==void 0)switch(xt.length){case 2:e.vertexAttrib2fv(Q.location,xt);break;case 3:e.vertexAttrib3fv(Q.location,xt);break;case 4:e.vertexAttrib4fv(Q.location,xt);break;default:e.vertexAttrib1fv(Q.location,xt)}}}}m()}function C(){A();for(const D in i){const G=i[D];for(const Y in G){const j=G[Y];for(const I in j){const U=j[I];for(const P in U)d(U[P].object),delete U[P];delete j[I]}}delete i[D]}}function b(D){if(i[D.id]===void 0)return;const G=i[D.id];for(const Y in G){const j=G[Y];for(const I in j){const U=j[I];for(const P in U)d(U[P].object),delete U[P];delete j[I]}}delete i[D.id]}function R(D){for(const G in i){const Y=i[G];for(const j in Y){const I=Y[j];if(I[D.id]===void 0)continue;const U=I[D.id];for(const P in U)d(U[P].object),delete U[P];delete I[D.id]}}}function x(D){for(const G in i){const Y=i[G],j=D.isInstancedMesh===!0?D.id:0,I=Y[j];if(I!==void 0){for(const U in I){const P=I[U];for(const W in P)d(P[W].object),delete P[W];delete I[U]}delete Y[j],Object.keys(Y).length===0&&delete i[G]}}}function A(){w(),r=!0,s!==a&&(s=a,c(s.object))}function w(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:A,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:g,disableUnusedAttributes:m}}function lR(e,t,n){let i;function a(l){i=l}function s(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,d){d!==0&&(e.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function o(l,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let p=0;p<d;p++)u+=c[p];n.update(u,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function cR(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(R){return!(R!==ci&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const x=R===sa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==$n&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Si&&!x)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(Dt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),v=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),C=e.getParameter(e.MAX_SAMPLES),b=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:y,maxSamples:C,samples:b}}function uR(e){const t=this;let n=null,i=0,a=!1,s=!1;const r=new as,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||i!==0||a;return a=u,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){n=d(h,u,0)},this.setState=function(h,u,p){const _=h.clippingPlanes,M=h.clipIntersection,g=h.clipShadows,f=e.get(h);if(!a||_===null||_.length===0||s&&!g)s?d(null):c();else{const m=s?0:i,v=m*4;let y=f.clippingState||null;l.value=y,y=d(_,u,v,p);for(let C=0;C!==v;++C)y[C]=n[C];f.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(h,u,p,_){const M=h!==null?h.length:0;let g=null;if(M!==0){if(g=l.value,_!==!0||g===null){const f=p+M*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let v=0,y=p;v!==M;++v,y+=4)r.copy(h[v]).applyMatrix4(m,o),r.normal.toArray(g,y),g[y+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}const Da=4,C0=[.125,.215,.35,.446,.526,.582],rs=20,fR=256,eo=new BS,w0=new fe;let Xf=null,Wf=0,qf=0,Yf=!1;const dR=new z;class D0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,a=100,s={}){const{size:r=256,position:o=dR}=s;Xf=this._renderer.getRenderTarget(),Wf=this._renderer.getActiveCubeFace(),qf=this._renderer.getActiveMipmapLevel(),Yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=L0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=N0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Xf,Wf,qf),this._renderer.xr.enabled=Yf,t.scissorTest=!1,qs(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===xs||t.mapping===wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xf=this._renderer.getRenderTarget(),Wf=this._renderer.getActiveCubeFace(),qf=this._renderer.getActiveMipmapLevel(),Yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:sa,format:ci,colorSpace:Jc,depthBuffer:!1},a=U0(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=U0(t,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hR(s)),this._blurMaterial=mR(s,t,n),this._ggxMaterial=pR(s,t,n)}return a}_compileMaterial(t){const n=new Ri(new Gn,t);this._renderer.compile(n,eo)}_sceneToCubeUV(t,n,i,a,s){const l=new Zn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(w0),h.toneMapping=Ei,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(a),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ri(new rl,new tm({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let f=!1;const m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,f=!0):(g.color.copy(w0),f=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[v],s.y,s.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[v]));const C=this._cubeSize;qs(a,y*C,v>2?C:0,C,C),h.setRenderTarget(a),f&&h.render(M,l),h.render(t,l)}h.toneMapping=p,h.autoClear=u,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===xs||t.mapping===wr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=L0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=N0());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;qs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,eo)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(t,s-1,s);n.autoClear=i}_applyGGXFilter(t,n,i){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=0+c*1.25,p=h*u,{_lodMax:_}=this,M=this._sizeLods[i],g=3*M*(i>_-Da?i-_+Da:0),f=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=_-n,qs(s,g,f,3*M,2*M),a.setRenderTarget(s),a.render(o,eo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,qs(t,g,f,3*M,2*M),a.setRenderTarget(t),a.render(o,eo)}_blur(t,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,a,"latitudinal",s),this._halfBlur(r,t,i,i,a,"longitudinal",s)}_halfBlur(t,n,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&ee("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[a];h.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*rs-1),M=s/_,g=isFinite(s)?1+Math.floor(d*M):rs;g>rs&&Dt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${rs}`);const f=[];let m=0;for(let R=0;R<rs;++R){const x=R/M,A=Math.exp(-x*x/2);f.push(A),R===0?m+=A:R<g&&(m+=2*A)}for(let R=0;R<f.length;R++)f[R]=f[R]/m;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=_,u.mipInt.value=v-i;const y=this._sizeLods[a],C=3*y*(a>v-Da?a-v+Da:0),b=4*(this._cubeSize-y);qs(n,C,b,3*y,2*y),l.setRenderTarget(n),l.render(h,eo)}}function hR(e){const t=[],n=[],i=[];let a=e;const s=e-Da+1+C0.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let l=1/o;r>e-Da?l=C0[r-e+Da-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,_=6,M=3,g=2,f=1,m=new Float32Array(M*_*p),v=new Float32Array(g*_*p),y=new Float32Array(f*_*p);for(let b=0;b<p;b++){const R=b%3*2/3-1,x=b>2?0:-1,A=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];m.set(A,M*_*b),v.set(u,g*_*b);const w=[b,b,b,b,b,b];y.set(w,f*_*b)}const C=new Gn;C.setAttribute("position",new Ti(m,M)),C.setAttribute("uv",new Ti(v,g)),C.setAttribute("faceIndex",new Ti(y,f)),i.push(new Ri(C,null)),a>Da&&a--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function U0(e,t,n){const i=new bi(e,t,n);return i.texture.mapping=Tu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qs(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function pR(e,t,n){return new Ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function mR(e,t,n){const i=new Float32Array(rs),a=new z(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function N0(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function L0(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Cu(){return`

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
	`}class HS extends bi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new LS(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new rl(5,5,5),s=new Ci({name:"CubemapFromEquirect",uniforms:Ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:Ji});s.uniforms.tEquirect.value=n;const r=new Ri(a,s),o=n.minFilter;return n.minFilter===os&&(n.minFilter=fn),new yT(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}}function gR(e){let t=new WeakMap,n=new WeakMap,i=null;function a(u,p=!1){return u==null?null:p?r(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===gf||p===_f)if(t.has(u)){const _=t.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const M=new HS(_.height);return M.fromEquirectangularTexture(e,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const p=u.mapping,_=p===gf||p===_f,M=p===xs||p===wr;if(_||M){let g=n.get(u);const f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new D0(e)),g=_?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const m=u.image;return _&&m&&m.height>0||M&&m&&l(m)?(i===null&&(i=new D0(e)),g=_?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function o(u,p){return p===gf?u.mapping=xs:p===_f&&(u.mapping=wr),u}function l(u){let p=0;const _=6;for(let M=0;M<_;M++)u[M]!==void 0&&p++;return p===_}function c(u){const p=u.target;p.removeEventListener("dispose",c);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function d(u){const p=u.target;p.removeEventListener("dispose",d);const _=n.get(p);_!==void 0&&(n.delete(p),_.dispose())}function h(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:h}}function _R(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Ph("WebGLRenderer: "+i+" extension not supported."),a}}}function vR(e,t,n,i){const a={},s=new WeakMap;function r(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",r),delete a[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(h,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,n.memory.geometries++),u}function l(h){const u=h.attributes;for(const p in u)t.update(u[p],e.ARRAY_BUFFER)}function c(h){const u=[],p=h.index,_=h.attributes.position;let M=0;if(_===void 0)return;if(p!==null){const m=p.array;M=p.version;for(let v=0,y=m.length;v<y;v+=3){const C=m[v+0],b=m[v+1],R=m[v+2];u.push(C,b,b,R,R,C)}}else{const m=_.array;M=_.version;for(let v=0,y=m.length/3-1;v<y;v+=3){const C=v+0,b=v+1,R=v+2;u.push(C,b,b,R,R,C)}}const g=new(_.count>=65535?wS:CS)(u,1);g.version=M;const f=s.get(h);f&&t.remove(f),s.set(h,g)}function d(h){const u=s.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function xR(e,t,n){let i;function a(h){i=h}let s,r;function o(h){s=h.type,r=h.bytesPerElement}function l(h,u){e.drawElements(i,u,s,h*r),n.update(u,i,1)}function c(h,u,p){p!==0&&(e.drawElementsInstanced(i,u,s,h*r,p),n.update(u,i,p))}function d(h,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,h,0,p);let M=0;for(let g=0;g<p;g++)M+=u[g];n.update(M,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function SR(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:ee("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function yR(e,t,n){const i=new WeakMap,a=new Fe;function s(r,o,l){const c=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==h){let A=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],m=o.morphAttributes.color||[];let v=0;p===!0&&(v=1),_===!0&&(v=2),M===!0&&(v=3);let y=o.attributes.position.count*v,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const b=new Float32Array(y*C*4*h),R=new TS(b,y,C,h);R.type=Si,R.needsUpdate=!0;const x=v*4;for(let w=0;w<h;w++){const D=g[w],G=f[w],Y=m[w],j=y*C*4*w;for(let I=0;I<D.count;I++){const U=I*x;p===!0&&(a.fromBufferAttribute(D,I),b[j+U+0]=a.x,b[j+U+1]=a.y,b[j+U+2]=a.z,b[j+U+3]=0),_===!0&&(a.fromBufferAttribute(G,I),b[j+U+4]=a.x,b[j+U+5]=a.y,b[j+U+6]=a.z,b[j+U+7]=0),M===!0&&(a.fromBufferAttribute(Y,I),b[j+U+8]=a.x,b[j+U+9]=a.y,b[j+U+10]=a.z,b[j+U+11]=Y.itemSize===4?a.w:1)}}u={count:h,texture:R,size:new se(y,C)},i.set(o,u),o.addEventListener("dispose",A)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function MR(e,t,n,i,a){let s=new WeakMap;function r(c){const d=a.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==d&&(t.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return u}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:r,dispose:o}}const ER={[cS]:"LINEAR_TONE_MAPPING",[uS]:"REINHARD_TONE_MAPPING",[fS]:"CINEON_TONE_MAPPING",[dS]:"ACES_FILMIC_TONE_MAPPING",[pS]:"AGX_TONE_MAPPING",[mS]:"NEUTRAL_TONE_MAPPING",[hS]:"CUSTOM_TONE_MAPPING"};function bR(e,t,n,i,a){const s=new bi(t,n,{type:e,depthBuffer:i,stencilBuffer:a,depthTexture:i?new Dr(t,n):void 0}),r=new bi(t,n,{type:sa,depthBuffer:!1,stencilBuffer:!1}),o=new Gn;o.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new tn([0,2,0,0,2,0],2));const l=new vT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ri(o,l),d=new BS(-1,1,1,-1,0,1);let h=null,u=null,p=!1,_,M=null,g=[],f=!1;this.setSize=function(m,v){s.setSize(m,v),r.setSize(m,v);for(let y=0;y<g.length;y++){const C=g[y];C.setSize&&C.setSize(m,v)}},this.setEffects=function(m){g=m,f=g.length>0&&g[0].isRenderPass===!0;const v=s.width,y=s.height;for(let C=0;C<g.length;C++){const b=g[C];b.setSize&&b.setSize(v,y)}},this.begin=function(m,v){if(p||m.toneMapping===Ei&&g.length===0)return!1;if(M=v,v!==null){const y=v.width,C=v.height;(s.width!==y||s.height!==C)&&this.setSize(y,C)}return f===!1&&m.setRenderTarget(s),_=m.toneMapping,m.toneMapping=Ei,!0},this.hasRenderPass=function(){return f},this.end=function(m,v){m.toneMapping=_,p=!0;let y=s,C=r;for(let b=0;b<g.length;b++){const R=g[b];if(R.enabled!==!1&&(R.render(m,C,y,v),R.needsSwap!==!1)){const x=y;y=C,C=x}}if(h!==m.outputColorSpace||u!==m.toneMapping){h=m.outputColorSpace,u=m.toneMapping,l.defines={},Kt.getTransfer(h)===le&&(l.defines.SRGB_TRANSFER="");const b=ER[u];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,m.setRenderTarget(M),m.render(c,d),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),r.dispose(),o.dispose(),l.dispose()}}const GS=new gn,Bh=new Dr(1,1),VS=new TS,kS=new qb,XS=new LS,O0=[],P0=[],I0=new Float32Array(16),B0=new Float32Array(9),F0=new Float32Array(4);function Gr(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let s=O0[a];if(s===void 0&&(s=new Float32Array(a),O0[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function je(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ze(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function wu(e,t){let n=P0[t];n===void 0&&(n=new Int32Array(t),P0[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function TR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function AR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2fv(this.addr,t),Ze(n,t)}}function RR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(je(n,t))return;e.uniform3fv(this.addr,t),Ze(n,t)}}function CR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4fv(this.addr,t),Ze(n,t)}}function wR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ze(n,t)}else{if(je(n,i))return;F0.set(i),e.uniformMatrix2fv(this.addr,!1,F0),Ze(n,i)}}function DR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ze(n,t)}else{if(je(n,i))return;B0.set(i),e.uniformMatrix3fv(this.addr,!1,B0),Ze(n,i)}}function UR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ze(n,t)}else{if(je(n,i))return;I0.set(i),e.uniformMatrix4fv(this.addr,!1,I0),Ze(n,i)}}function NR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function LR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2iv(this.addr,t),Ze(n,t)}}function OR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3iv(this.addr,t),Ze(n,t)}}function PR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4iv(this.addr,t),Ze(n,t)}}function IR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function BR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2uiv(this.addr,t),Ze(n,t)}}function FR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3uiv(this.addr,t),Ze(n,t)}}function zR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4uiv(this.addr,t),Ze(n,t)}}function HR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(Bh.compareFunction=n.isReversedDepthBuffer()?Jp:Qp,s=Bh):s=GS,n.setTexture2D(t||s,a)}function GR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||kS,a)}function VR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||XS,a)}function kR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||VS,a)}function XR(e){switch(e){case 5126:return TR;case 35664:return AR;case 35665:return RR;case 35666:return CR;case 35674:return wR;case 35675:return DR;case 35676:return UR;case 5124:case 35670:return NR;case 35667:case 35671:return LR;case 35668:case 35672:return OR;case 35669:case 35673:return PR;case 5125:return IR;case 36294:return BR;case 36295:return FR;case 36296:return zR;case 35678:case 36198:case 36298:case 36306:case 35682:return HR;case 35679:case 36299:case 36307:return GR;case 35680:case 36300:case 36308:case 36293:return VR;case 36289:case 36303:case 36311:case 36292:return kR}}function WR(e,t){e.uniform1fv(this.addr,t)}function qR(e,t){const n=Gr(t,this.size,2);e.uniform2fv(this.addr,n)}function YR(e,t){const n=Gr(t,this.size,3);e.uniform3fv(this.addr,n)}function jR(e,t){const n=Gr(t,this.size,4);e.uniform4fv(this.addr,n)}function ZR(e,t){const n=Gr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function KR(e,t){const n=Gr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function QR(e,t){const n=Gr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function JR(e,t){e.uniform1iv(this.addr,t)}function $R(e,t){e.uniform2iv(this.addr,t)}function t3(e,t){e.uniform3iv(this.addr,t)}function e3(e,t){e.uniform4iv(this.addr,t)}function n3(e,t){e.uniform1uiv(this.addr,t)}function i3(e,t){e.uniform2uiv(this.addr,t)}function a3(e,t){e.uniform3uiv(this.addr,t)}function s3(e,t){e.uniform4uiv(this.addr,t)}function r3(e,t,n){const i=this.cache,a=t.length,s=wu(n,a);je(i,s)||(e.uniform1iv(this.addr,s),Ze(i,s));let r;this.type===e.SAMPLER_2D_SHADOW?r=Bh:r=GS;for(let o=0;o!==a;++o)n.setTexture2D(t[o]||r,s[o])}function o3(e,t,n){const i=this.cache,a=t.length,s=wu(n,a);je(i,s)||(e.uniform1iv(this.addr,s),Ze(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||kS,s[r])}function l3(e,t,n){const i=this.cache,a=t.length,s=wu(n,a);je(i,s)||(e.uniform1iv(this.addr,s),Ze(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||XS,s[r])}function c3(e,t,n){const i=this.cache,a=t.length,s=wu(n,a);je(i,s)||(e.uniform1iv(this.addr,s),Ze(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||VS,s[r])}function u3(e){switch(e){case 5126:return WR;case 35664:return qR;case 35665:return YR;case 35666:return jR;case 35674:return ZR;case 35675:return KR;case 35676:return QR;case 5124:case 35670:return JR;case 35667:case 35671:return $R;case 35668:case 35672:return t3;case 35669:case 35673:return e3;case 5125:return n3;case 36294:return i3;case 36295:return a3;case 36296:return s3;case 35678:case 36198:case 36298:case 36306:case 35682:return r3;case 35679:case 36299:case 36307:return o3;case 35680:case 36300:case 36308:case 36293:return l3;case 36289:case 36303:case 36311:case 36292:return c3}}class f3{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=XR(n.type)}}class d3{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=u3(n.type)}}class h3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(t,n[o.id],i)}}}const jf=/(\w+)(\])?(\[|\.)?/g;function z0(e,t){e.seq.push(t),e.map[t.id]=t}function p3(e,t,n){const i=e.name,a=i.length;for(jf.lastIndex=0;;){const s=jf.exec(i),r=jf.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){z0(n,c===void 0?new f3(o,e,t):new d3(o,e,t));break}else{let h=n.map[o];h===void 0&&(h=new h3(o),z0(n,h)),n=h}}}class xc{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);p3(o,l,this)}const a=[],s=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(t,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,s=t.length;a!==s;++a){const r=t[a];r.id in n&&i.push(r)}return i}}function H0(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const m3=37297;let g3=0;function _3(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}const G0=new It;function v3(e){Kt._getMatrix(G0,Kt.workingColorSpace,e);const t=`mat3( ${G0.elements.map(n=>n.toFixed(4))} )`;switch(Kt.getTransfer(e)){case $c:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function V0(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+_3(e.getShaderSource(t),o)}else return s}function x3(e,t){const n=v3(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const S3={[cS]:"Linear",[uS]:"Reinhard",[fS]:"Cineon",[dS]:"ACESFilmic",[pS]:"AgX",[mS]:"Neutral",[hS]:"Custom"};function y3(e,t){const n=S3[t];return n===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Zl=new z;function M3(){Kt.getLuminanceCoefficients(Zl);const e=Zl.x.toFixed(4),t=Zl.y.toFixed(4),n=Zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E3(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(uo).join(`
`)}function b3(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function T3(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=e.getActiveAttrib(t,a),r=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function uo(e){return e!==""}function k0(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function X0(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const A3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(e){return e.replace(A3,C3)}const R3=new Map;function C3(e,t){let n=kt[t];if(n===void 0){const i=R3.get(t);if(i!==void 0)n=kt[i],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Fh(n)}const w3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function W0(e){return e.replace(w3,D3)}function D3(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function q0(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}const U3={[pc]:"SHADOWMAP_TYPE_PCF",[co]:"SHADOWMAP_TYPE_VSM"};function N3(e){return U3[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const L3={[xs]:"ENVMAP_TYPE_CUBE",[wr]:"ENVMAP_TYPE_CUBE",[Tu]:"ENVMAP_TYPE_CUBE_UV"};function O3(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":L3[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const P3={[wr]:"ENVMAP_MODE_REFRACTION"};function I3(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":P3[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const B3={[lS]:"ENVMAP_BLENDING_MULTIPLY",[Tb]:"ENVMAP_BLENDING_MIX",[Ab]:"ENVMAP_BLENDING_ADD"};function F3(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":B3[e.combine]||"ENVMAP_BLENDING_NONE"}function z3(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function H3(e,t,n,i){const a=e.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=N3(n),c=O3(n),d=I3(n),h=F3(n),u=z3(n),p=E3(n),_=b3(s),M=a.createProgram();let g,f,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(uo).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(uo).join(`
`),f.length>0&&(f+=`
`)):(g=[q0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uo).join(`
`),f=[q0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ei?"#define TONE_MAPPING":"",n.toneMapping!==Ei?kt.tonemapping_pars_fragment:"",n.toneMapping!==Ei?y3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,x3("linearToOutputTexel",n.outputColorSpace),M3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(uo).join(`
`)),r=Fh(r),r=k0(r,n),r=X0(r,n),o=Fh(o),o=k0(o,n),o=X0(o,n),r=W0(r),o=W0(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===e0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===e0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=m+g+r,y=m+f+o,C=H0(a,a.VERTEX_SHADER,v),b=H0(a,a.FRAGMENT_SHADER,y);a.attachShader(M,C),a.attachShader(M,b),n.index0AttributeName!==void 0?a.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function R(D){if(e.debug.checkShaderErrors){const G=a.getProgramInfoLog(M)||"",Y=a.getShaderInfoLog(C)||"",j=a.getShaderInfoLog(b)||"",I=G.trim(),U=Y.trim(),P=j.trim();let W=!0,Q=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(W=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,M,C,b);else{const at=V0(a,C,"vertex"),xt=V0(a,b,"fragment");ee("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+at+`
`+xt)}else I!==""?Dt("WebGLProgram: Program Info Log:",I):(U===""||P==="")&&(Q=!1);Q&&(D.diagnostics={runnable:W,programLog:I,vertexShader:{log:U,prefix:g},fragmentShader:{log:P,prefix:f}})}a.deleteShader(C),a.deleteShader(b),x=new xc(a,M),A=T3(a,M)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=a.getProgramParameter(M,m3)),w},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=g3++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=C,this.fragmentShader=b,this}let G3=0;class V3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new k3(t),n.set(t,i)),i}}class k3{constructor(t){this.id=G3++,this.code=t,this.usedTimes=0}}function X3(e){return e===Ss||e===Kc||e===Qc}function W3(e,t,n,i,a,s){const r=new AS,o=new V3,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,A,w,D,G,Y){const j=D.fog,I=G.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,P=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=t.get(x.envMap||U,P),Q=W&&W.mapping===Tu?W.image.height:null,at=p[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Dt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const xt=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,yt=xt!==void 0?xt.length:0;let Gt=0;I.morphAttributes.position!==void 0&&(Gt=1),I.morphAttributes.normal!==void 0&&(Gt=2),I.morphAttributes.color!==void 0&&(Gt=3);let qt,wt,$,ft;if(at){const Ft=gi[at];qt=Ft.vertexShader,wt=Ft.fragmentShader}else qt=x.vertexShader,wt=x.fragmentShader,o.update(x),$=o.getVertexShaderID(x),ft=o.getFragmentShaderID(x);const rt=e.getRenderTarget(),Rt=e.state.buffers.depth.getReversed(),Ut=G.isInstancedMesh===!0,Ct=G.isBatchedMesh===!0,Se=!!x.map,Ot=!!x.matcap,$t=!!W,re=!!x.aoMap,Xt=!!x.lightMap,De=!!x.bumpMap,ye=!!x.normalMap,dn=!!x.displacementMap,O=!!x.emissiveMap,de=!!x.metalnessMap,Vt=!!x.roughnessMap,oe=x.anisotropy>0,pt=x.clearcoat>0,be=x.dispersion>0,T=x.iridescence>0,S=x.sheen>0,H=x.transmission>0,Z=oe&&!!x.anisotropyMap,et=pt&&!!x.clearcoatMap,ot=pt&&!!x.clearcoatNormalMap,ut=pt&&!!x.clearcoatRoughnessMap,q=T&&!!x.iridescenceMap,N=T&&!!x.iridescenceThicknessMap,tt=S&&!!x.sheenColorMap,lt=S&&!!x.sheenRoughnessMap,it=!!x.specularMap,st=!!x.specularColorMap,Nt=!!x.specularIntensityMap,Pt=H&&!!x.transmissionMap,ne=H&&!!x.thicknessMap,L=!!x.gradientMap,ct=!!x.alphaMap,K=x.alphaTest>0,vt=!!x.alphaHash,dt=!!x.extensions;let nt=Ei;x.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(nt=e.toneMapping);const bt={shaderID:at,shaderType:x.type,shaderName:x.name,vertexShader:qt,fragmentShader:wt,defines:x.defines,customVertexShaderID:$,customFragmentShaderID:ft,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Ct,batchingColor:Ct&&G._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&G.instanceColor!==null,instancingMorph:Ut&&G.morphTexture!==null,outputColorSpace:rt===null?e.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Kt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Se,matcap:Ot,envMap:$t,envMapMode:$t&&W.mapping,envMapCubeUVHeight:Q,aoMap:re,lightMap:Xt,bumpMap:De,normalMap:ye,displacementMap:dn,emissiveMap:O,normalMapObjectSpace:ye&&x.normalMapType===wb,normalMapTangentSpace:ye&&x.normalMapType===Jg,packedNormalMap:ye&&x.normalMapType===Jg&&X3(x.normalMap.format),metalnessMap:de,roughnessMap:Vt,anisotropy:oe,anisotropyMap:Z,clearcoat:pt,clearcoatMap:et,clearcoatNormalMap:ot,clearcoatRoughnessMap:ut,dispersion:be,iridescence:T,iridescenceMap:q,iridescenceThicknessMap:N,sheen:S,sheenColorMap:tt,sheenRoughnessMap:lt,specularMap:it,specularColorMap:st,specularIntensityMap:Nt,transmission:H,transmissionMap:Pt,thicknessMap:ne,gradientMap:L,opaque:x.transparent===!1&&x.blending===mr&&x.alphaToCoverage===!1,alphaMap:ct,alphaTest:K,alphaHash:vt,combine:x.combine,mapUv:Se&&_(x.map.channel),aoMapUv:re&&_(x.aoMap.channel),lightMapUv:Xt&&_(x.lightMap.channel),bumpMapUv:De&&_(x.bumpMap.channel),normalMapUv:ye&&_(x.normalMap.channel),displacementMapUv:dn&&_(x.displacementMap.channel),emissiveMapUv:O&&_(x.emissiveMap.channel),metalnessMapUv:de&&_(x.metalnessMap.channel),roughnessMapUv:Vt&&_(x.roughnessMap.channel),anisotropyMapUv:Z&&_(x.anisotropyMap.channel),clearcoatMapUv:et&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ot&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:N&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:lt&&_(x.sheenRoughnessMap.channel),specularMapUv:it&&_(x.specularMap.channel),specularColorMapUv:st&&_(x.specularColorMap.channel),specularIntensityMapUv:Nt&&_(x.specularIntensityMap.channel),transmissionMapUv:Pt&&_(x.transmissionMap.channel),thicknessMapUv:ne&&_(x.thicknessMap.channel),alphaMapUv:ct&&_(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ye||oe),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!I.attributes.uv&&(Se||ct),fog:!!j,useFog:x.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&ye===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Rt,skinning:G.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Gt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&w.length>0,shadowMapType:e.shadowMap.type,toneMapping:nt,decodeVideoTexture:Se&&x.map.isVideoTexture===!0&&Kt.getTransfer(x.map.colorSpace)===le,decodeVideoTextureEmissive:O&&x.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(x.emissiveMap.colorSpace)===le,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Xi,flipSided:x.side===bn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:dt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&x.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function g(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const w in x.defines)A.push(w),A.push(x.defines[w]);return x.isRawShaderMaterial===!1&&(f(A,x),m(A,x),A.push(e.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function f(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function m(x,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),x.push(r.mask)}function v(x){const A=p[x.type];let w;if(A){const D=gi[A];w=mT.clone(D.uniforms)}else w=x.uniforms;return w}function y(x,A){let w=d.get(A);return w!==void 0?++w.usedTimes:(w=new H3(e,A,x,a),c.push(w),d.set(A,w)),w}function C(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:v,acquireProgram:y,releaseProgram:C,releaseShaderCache:b,programs:c,dispose:R}}function q3(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function Y3(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Y0(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function j0(){const e=[];let t=0;const n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,_,M,g,f){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:p,material:_,materialVariant:r(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:f},e[t]=m):(m.id=u.id,m.object=u,m.geometry=p,m.material=_,m.materialVariant=r(u),m.groupOrder=M,m.renderOrder=u.renderOrder,m.z=g,m.group=f),t++,m}function l(u,p,_,M,g,f){const m=o(u,p,_,M,g,f);_.transmission>0?i.push(m):_.transparent===!0?a.push(m):n.push(m)}function c(u,p,_,M,g,f){const m=o(u,p,_,M,g,f);_.transmission>0?i.unshift(m):_.transparent===!0?a.unshift(m):n.unshift(m)}function d(u,p){n.length>1&&n.sort(u||Y3),i.length>1&&i.sort(p||Y0),a.length>1&&a.sort(p||Y0)}function h(){for(let u=t,p=e.length;u<p;u++){const _=e[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:l,unshift:c,finish:h,sort:d}}function j3(){let e=new WeakMap;function t(i,a){const s=e.get(i);let r;return s===void 0?(r=new j0,e.set(i,[r])):a>=s.length?(r=new j0,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function Z3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new z,color:new fe};break;case"SpotLight":n={position:new z,direction:new z,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new fe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":n={color:new fe,position:new z,halfWidth:new z,halfHeight:new z};break}return e[t.id]=n,n}}}function K3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let Q3=0;function J3(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function $3(e){const t=new Z3,n=K3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const a=new z,s=new We,r=new We;function o(c){let d=0,h=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,_=0,M=0,g=0,f=0,m=0,v=0,y=0,C=0,b=0,R=0;c.sort(J3);for(let A=0,w=c.length;A<w;A++){const D=c[A],G=D.color,Y=D.intensity,j=D.distance;let I=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ss?I=D.shadow.map.texture:I=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)d+=G.r*Y,h+=G.g*Y,u+=G.b*Y;else if(D.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(D.sh.coefficients[U],Y);R++}else if(D.isDirectionalLight){const U=t.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const P=D.shadow,W=n.get(D);W.shadowIntensity=P.intensity,W.shadowBias=P.bias,W.shadowNormalBias=P.normalBias,W.shadowRadius=P.radius,W.shadowMapSize=P.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=I,i.directionalShadowMatrix[p]=D.shadow.matrix,m++}i.directional[p]=U,p++}else if(D.isSpotLight){const U=t.get(D);U.position.setFromMatrixPosition(D.matrixWorld),U.color.copy(G).multiplyScalar(Y),U.distance=j,U.coneCos=Math.cos(D.angle),U.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),U.decay=D.decay,i.spot[M]=U;const P=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,P.updateMatrices(D),D.castShadow&&b++),i.spotLightMatrix[M]=P.matrix,D.castShadow){const W=n.get(D);W.shadowIntensity=P.intensity,W.shadowBias=P.bias,W.shadowNormalBias=P.normalBias,W.shadowRadius=P.radius,W.shadowMapSize=P.mapSize,i.spotShadow[M]=W,i.spotShadowMap[M]=I,y++}M++}else if(D.isRectAreaLight){const U=t.get(D);U.color.copy(G).multiplyScalar(Y),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=U,g++}else if(D.isPointLight){const U=t.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),U.distance=D.distance,U.decay=D.decay,D.castShadow){const P=D.shadow,W=n.get(D);W.shadowIntensity=P.intensity,W.shadowBias=P.bias,W.shadowNormalBias=P.normalBias,W.shadowRadius=P.radius,W.shadowMapSize=P.mapSize,W.shadowCameraNear=P.camera.near,W.shadowCameraFar=P.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=I,i.pointShadowMatrix[_]=D.shadow.matrix,v++}i.point[_]=U,_++}else if(D.isHemisphereLight){const U=t.get(D);U.skyColor.copy(D.color).multiplyScalar(Y),U.groundColor.copy(D.groundColor).multiplyScalar(Y),i.hemi[f]=U,f++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;const x=i.hash;(x.directionalLength!==p||x.pointLength!==_||x.spotLength!==M||x.rectAreaLength!==g||x.hemiLength!==f||x.numDirectionalShadows!==m||x.numPointShadows!==v||x.numSpotShadows!==y||x.numSpotMaps!==C||x.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=g,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=R,x.directionalLength=p,x.pointLength=_,x.spotLength=M,x.rectAreaLength=g,x.hemiLength=f,x.numDirectionalShadows=m,x.numPointShadows=v,x.numSpotShadows=y,x.numSpotMaps=C,x.numLightProbes=R,i.version=Q3++)}function l(c,d){let h=0,u=0,p=0,_=0,M=0;const g=d.matrixWorldInverse;for(let f=0,m=c.length;f<m;f++){const v=c[f];if(v.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(g),h++}else if(v.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),r.identity(),s.copy(v.matrixWorld),s.premultiply(g),r.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),_++}else if(v.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),u++}else if(v.isHemisphereLight){const y=i.hemi[M];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),M++}}}return{setup:o,setupView:l,state:i}}function Z0(e){const t=new $3(e),n=[],i=[],a=[];function s(u){h.camera=u,n.length=0,i.length=0,a.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){t.setup(n)}function d(u){t.setupView(n,u)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function tC(e){let t=new WeakMap;function n(a,s=0){const r=t.get(a);let o;return r===void 0?(o=new Z0(e),t.set(a,[o])):s>=r.length?(o=new Z0(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const eC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nC=`uniform sampler2D shadow_pass;
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
}`,iC=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],aC=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],K0=new We,no=new z,Zf=new z;function sC(e,t,n){let i=new US;const a=new se,s=new se,r=new Fe,o=new xT,l=new ST,c={},d=n.maxTextureSize,h={[Xa]:bn,[bn]:Xa,[Xi]:Xi},u=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:eC,fragmentShader:nC}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const _=new Gn;_.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ri(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc;let f=this.type;this.render=function(b,R,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===rb&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=pc);const A=e.getRenderTarget(),w=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),G=e.state;G.setBlending(Ji),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const Y=f!==this.type;Y&&R.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(I=>I.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,I=b.length;j<I;j++){const U=b[j],P=U.shadow;if(P===void 0){Dt("WebGLShadowMap:",U,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;a.copy(P.mapSize);const W=P.getFrameExtents();a.multiply(W),s.copy(P.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(s.x=Math.floor(d/W.x),a.x=s.x*W.x,P.mapSize.x=s.x),a.y>d&&(s.y=Math.floor(d/W.y),a.y=s.y*W.y,P.mapSize.y=s.y));const Q=e.state.buffers.depth.getReversed();if(P.camera._reversedDepth=Q,P.map===null||Y===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===co){if(U.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new bi(a.x,a.y,{format:Ss,type:sa,minFilter:fn,magFilter:fn,generateMipmaps:!1}),P.map.texture.name=U.name+".shadowMap",P.map.depthTexture=new Dr(a.x,a.y,Si),P.map.depthTexture.name=U.name+".shadowMapDepth",P.map.depthTexture.format=ra,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=rn,P.map.depthTexture.magFilter=rn}else U.isPointLight?(P.map=new HS(a.x),P.map.depthTexture=new dT(a.x,Ai)):(P.map=new bi(a.x,a.y),P.map.depthTexture=new Dr(a.x,a.y,Ai)),P.map.depthTexture.name=U.name+".shadowMap",P.map.depthTexture.format=ra,this.type===pc?(P.map.depthTexture.compareFunction=Q?Jp:Qp,P.map.depthTexture.minFilter=fn,P.map.depthTexture.magFilter=fn):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=rn,P.map.depthTexture.magFilter=rn);P.camera.updateProjectionMatrix()}const at=P.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<at;xt++){if(P.map.isWebGLCubeRenderTarget)e.setRenderTarget(P.map,xt),e.clear();else{xt===0&&(e.setRenderTarget(P.map),e.clear());const yt=P.getViewport(xt);r.set(s.x*yt.x,s.y*yt.y,s.x*yt.z,s.y*yt.w),G.viewport(r)}if(U.isPointLight){const yt=P.camera,Gt=P.matrix,qt=U.distance||yt.far;qt!==yt.far&&(yt.far=qt,yt.updateProjectionMatrix()),no.setFromMatrixPosition(U.matrixWorld),yt.position.copy(no),Zf.copy(yt.position),Zf.add(iC[xt]),yt.up.copy(aC[xt]),yt.lookAt(Zf),yt.updateMatrixWorld(),Gt.makeTranslation(-no.x,-no.y,-no.z),K0.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),P._frustum.setFromProjectionMatrix(K0,yt.coordinateSystem,yt.reversedDepth)}else P.updateMatrices(U);i=P.getFrustum(),y(R,x,P.camera,U,this.type)}P.isPointLightShadow!==!0&&this.type===co&&m(P,x),P.needsUpdate=!1}f=this.type,g.needsUpdate=!1,e.setRenderTarget(A,w,D)};function m(b,R){const x=t.update(M);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new bi(a.x,a.y,{format:Ss,type:sa})),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,e.setRenderTarget(b.mapPass),e.clear(),e.renderBufferDirect(R,null,x,u,M,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,e.setRenderTarget(b.map),e.clear(),e.renderBufferDirect(R,null,x,p,M,null)}function v(b,R,x,A){let w=null;const D=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)w=D;else if(w=x.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const G=w.uuid,Y=R.uuid;let j=c[G];j===void 0&&(j={},c[G]=j);let I=j[Y];I===void 0&&(I=w.clone(),j[Y]=I,R.addEventListener("dispose",C)),w=I}if(w.visible=R.visible,w.wireframe=R.wireframe,A===co?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:h[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,x.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const G=e.properties.get(w);G.light=x}return w}function y(b,R,x,A,w){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===co)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const Y=t.update(b),j=b.material;if(Array.isArray(j)){const I=Y.groups;for(let U=0,P=I.length;U<P;U++){const W=I[U],Q=j[W.materialIndex];if(Q&&Q.visible){const at=v(b,Q,A,w);b.onBeforeShadow(e,b,R,x,Y,at,W),e.renderBufferDirect(x,null,Y,at,b,W),b.onAfterShadow(e,b,R,x,Y,at,W)}}}else if(j.visible){const I=v(b,j,A,w);b.onBeforeShadow(e,b,R,x,Y,I,null),e.renderBufferDirect(x,null,Y,I,b,null),b.onAfterShadow(e,b,R,x,Y,I,null)}}const G=b.children;for(let Y=0,j=G.length;Y<j;Y++)y(G[Y],R,x,A,w)}function C(b){b.target.removeEventListener("dispose",C);for(const x in c){const A=c[x],w=b.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}function rC(e,t){function n(){let L=!1;const ct=new Fe;let K=null;const vt=new Fe(0,0,0,0);return{setMask:function(dt){K!==dt&&!L&&(e.colorMask(dt,dt,dt,dt),K=dt)},setLocked:function(dt){L=dt},setClear:function(dt,nt,bt,Ft,Oe){Oe===!0&&(dt*=Ft,nt*=Ft,bt*=Ft),ct.set(dt,nt,bt,Ft),vt.equals(ct)===!1&&(e.clearColor(dt,nt,bt,Ft),vt.copy(ct))},reset:function(){L=!1,K=null,vt.set(-1,0,0,0)}}}function i(){let L=!1,ct=!1,K=null,vt=null,dt=null;return{setReversed:function(nt){if(ct!==nt){const bt=t.get("EXT_clip_control");nt?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),ct=nt;const Ft=dt;dt=null,this.setClear(Ft)}},getReversed:function(){return ct},setTest:function(nt){nt?rt(e.DEPTH_TEST):Rt(e.DEPTH_TEST)},setMask:function(nt){K!==nt&&!L&&(e.depthMask(nt),K=nt)},setFunc:function(nt){if(ct&&(nt=zb[nt]),vt!==nt){switch(nt){case Kd:e.depthFunc(e.NEVER);break;case Qd:e.depthFunc(e.ALWAYS);break;case Jd:e.depthFunc(e.LESS);break;case Cr:e.depthFunc(e.LEQUAL);break;case $d:e.depthFunc(e.EQUAL);break;case th:e.depthFunc(e.GEQUAL);break;case eh:e.depthFunc(e.GREATER);break;case nh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}vt=nt}},setLocked:function(nt){L=nt},setClear:function(nt){dt!==nt&&(dt=nt,ct&&(nt=1-nt),e.clearDepth(nt))},reset:function(){L=!1,K=null,vt=null,dt=null,ct=!1}}}function a(){let L=!1,ct=null,K=null,vt=null,dt=null,nt=null,bt=null,Ft=null,Oe=null;return{setTest:function(he){L||(he?rt(e.STENCIL_TEST):Rt(e.STENCIL_TEST))},setMask:function(he){ct!==he&&!L&&(e.stencilMask(he),ct=he)},setFunc:function(he,Ui,di){(K!==he||vt!==Ui||dt!==di)&&(e.stencilFunc(he,Ui,di),K=he,vt=Ui,dt=di)},setOp:function(he,Ui,di){(nt!==he||bt!==Ui||Ft!==di)&&(e.stencilOp(he,Ui,di),nt=he,bt=Ui,Ft=di)},setLocked:function(he){L=he},setClear:function(he){Oe!==he&&(e.clearStencil(he),Oe=he)},reset:function(){L=!1,ct=null,K=null,vt=null,dt=null,nt=null,bt=null,Ft=null,Oe=null}}}const s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap;let d={},h={},u={},p=new WeakMap,_=[],M=null,g=!1,f=null,m=null,v=null,y=null,C=null,b=null,R=null,x=new fe(0,0,0),A=0,w=!1,D=null,G=null,Y=null,j=null,I=null;const U=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,W=0;const Q=e.getParameter(e.VERSION);Q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Q)[1]),P=W>=1):Q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),P=W>=2);let at=null,xt={};const yt=e.getParameter(e.SCISSOR_BOX),Gt=e.getParameter(e.VIEWPORT),qt=new Fe().fromArray(yt),wt=new Fe().fromArray(Gt);function $(L,ct,K,vt){const dt=new Uint8Array(4),nt=e.createTexture();e.bindTexture(L,nt),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let bt=0;bt<K;bt++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(ct,0,e.RGBA,1,1,vt,0,e.RGBA,e.UNSIGNED_BYTE,dt):e.texImage2D(ct+bt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,dt);return nt}const ft={};ft[e.TEXTURE_2D]=$(e.TEXTURE_2D,e.TEXTURE_2D,1),ft[e.TEXTURE_CUBE_MAP]=$(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[e.TEXTURE_2D_ARRAY]=$(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ft[e.TEXTURE_3D]=$(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),rt(e.DEPTH_TEST),r.setFunc(Cr),De(!1),ye(jg),rt(e.CULL_FACE),re(Ji);function rt(L){d[L]!==!0&&(e.enable(L),d[L]=!0)}function Rt(L){d[L]!==!1&&(e.disable(L),d[L]=!1)}function Ut(L,ct){return u[L]!==ct?(e.bindFramebuffer(L,ct),u[L]=ct,L===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=ct),L===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=ct),!0):!1}function Ct(L,ct){let K=_,vt=!1;if(L){K=p.get(ct),K===void 0&&(K=[],p.set(ct,K));const dt=L.textures;if(K.length!==dt.length||K[0]!==e.COLOR_ATTACHMENT0){for(let nt=0,bt=dt.length;nt<bt;nt++)K[nt]=e.COLOR_ATTACHMENT0+nt;K.length=dt.length,vt=!0}}else K[0]!==e.BACK&&(K[0]=e.BACK,vt=!0);vt&&e.drawBuffers(K)}function Se(L){return M!==L?(e.useProgram(L),M=L,!0):!1}const Ot={[ss]:e.FUNC_ADD,[lb]:e.FUNC_SUBTRACT,[cb]:e.FUNC_REVERSE_SUBTRACT};Ot[ub]=e.MIN,Ot[fb]=e.MAX;const $t={[db]:e.ZERO,[hb]:e.ONE,[pb]:e.SRC_COLOR,[jd]:e.SRC_ALPHA,[Sb]:e.SRC_ALPHA_SATURATE,[vb]:e.DST_COLOR,[gb]:e.DST_ALPHA,[mb]:e.ONE_MINUS_SRC_COLOR,[Zd]:e.ONE_MINUS_SRC_ALPHA,[xb]:e.ONE_MINUS_DST_COLOR,[_b]:e.ONE_MINUS_DST_ALPHA,[yb]:e.CONSTANT_COLOR,[Mb]:e.ONE_MINUS_CONSTANT_COLOR,[Eb]:e.CONSTANT_ALPHA,[bb]:e.ONE_MINUS_CONSTANT_ALPHA};function re(L,ct,K,vt,dt,nt,bt,Ft,Oe,he){if(L===Ji){g===!0&&(Rt(e.BLEND),g=!1);return}if(g===!1&&(rt(e.BLEND),g=!0),L!==ob){if(L!==f||he!==w){if((m!==ss||C!==ss)&&(e.blendEquation(e.FUNC_ADD),m=ss,C=ss),he)switch(L){case mr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Zg:e.blendFunc(e.ONE,e.ONE);break;case Kg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Qg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ee("WebGLState: Invalid blending: ",L);break}else switch(L){case mr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Zg:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Kg:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qg:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",L);break}v=null,y=null,b=null,R=null,x.set(0,0,0),A=0,f=L,w=he}return}dt=dt||ct,nt=nt||K,bt=bt||vt,(ct!==m||dt!==C)&&(e.blendEquationSeparate(Ot[ct],Ot[dt]),m=ct,C=dt),(K!==v||vt!==y||nt!==b||bt!==R)&&(e.blendFuncSeparate($t[K],$t[vt],$t[nt],$t[bt]),v=K,y=vt,b=nt,R=bt),(Ft.equals(x)===!1||Oe!==A)&&(e.blendColor(Ft.r,Ft.g,Ft.b,Oe),x.copy(Ft),A=Oe),f=L,w=!1}function Xt(L,ct){L.side===Xi?Rt(e.CULL_FACE):rt(e.CULL_FACE);let K=L.side===bn;ct&&(K=!K),De(K),L.blending===mr&&L.transparent===!1?re(Ji):re(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const vt=L.stencilWrite;o.setTest(vt),vt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),O(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?rt(e.SAMPLE_ALPHA_TO_COVERAGE):Rt(e.SAMPLE_ALPHA_TO_COVERAGE)}function De(L){D!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),D=L)}function ye(L){L!==ab?(rt(e.CULL_FACE),L!==G&&(L===jg?e.cullFace(e.BACK):L===sb?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Rt(e.CULL_FACE),G=L}function dn(L){L!==Y&&(P&&e.lineWidth(L),Y=L)}function O(L,ct,K){L?(rt(e.POLYGON_OFFSET_FILL),(j!==ct||I!==K)&&(j=ct,I=K,r.getReversed()&&(ct=-ct),e.polygonOffset(ct,K))):Rt(e.POLYGON_OFFSET_FILL)}function de(L){L?rt(e.SCISSOR_TEST):Rt(e.SCISSOR_TEST)}function Vt(L){L===void 0&&(L=e.TEXTURE0+U-1),at!==L&&(e.activeTexture(L),at=L)}function oe(L,ct,K){K===void 0&&(at===null?K=e.TEXTURE0+U-1:K=at);let vt=xt[K];vt===void 0&&(vt={type:void 0,texture:void 0},xt[K]=vt),(vt.type!==L||vt.texture!==ct)&&(at!==K&&(e.activeTexture(K),at=K),e.bindTexture(L,ct||ft[L]),vt.type=L,vt.texture=ct)}function pt(){const L=xt[at];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function be(){try{e.compressedTexImage2D(...arguments)}catch(L){ee("WebGLState:",L)}}function T(){try{e.compressedTexImage3D(...arguments)}catch(L){ee("WebGLState:",L)}}function S(){try{e.texSubImage2D(...arguments)}catch(L){ee("WebGLState:",L)}}function H(){try{e.texSubImage3D(...arguments)}catch(L){ee("WebGLState:",L)}}function Z(){try{e.compressedTexSubImage2D(...arguments)}catch(L){ee("WebGLState:",L)}}function et(){try{e.compressedTexSubImage3D(...arguments)}catch(L){ee("WebGLState:",L)}}function ot(){try{e.texStorage2D(...arguments)}catch(L){ee("WebGLState:",L)}}function ut(){try{e.texStorage3D(...arguments)}catch(L){ee("WebGLState:",L)}}function q(){try{e.texImage2D(...arguments)}catch(L){ee("WebGLState:",L)}}function N(){try{e.texImage3D(...arguments)}catch(L){ee("WebGLState:",L)}}function tt(L){return h[L]!==void 0?h[L]:e.getParameter(L)}function lt(L,ct){h[L]!==ct&&(e.pixelStorei(L,ct),h[L]=ct)}function it(L){qt.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),qt.copy(L))}function st(L){wt.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),wt.copy(L))}function Nt(L,ct){let K=c.get(ct);K===void 0&&(K=new WeakMap,c.set(ct,K));let vt=K.get(L);vt===void 0&&(vt=e.getUniformBlockIndex(ct,L.name),K.set(L,vt))}function Pt(L,ct){const vt=c.get(ct).get(L);l.get(ct)!==vt&&(e.uniformBlockBinding(ct,vt,L.__bindingPointIndex),l.set(ct,vt))}function ne(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),d={},h={},at=null,xt={},u={},p=new WeakMap,_=[],M=null,g=!1,f=null,m=null,v=null,y=null,C=null,b=null,R=null,x=new fe(0,0,0),A=0,w=!1,D=null,G=null,Y=null,j=null,I=null,qt.set(0,0,e.canvas.width,e.canvas.height),wt.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:rt,disable:Rt,bindFramebuffer:Ut,drawBuffers:Ct,useProgram:Se,setBlending:re,setMaterial:Xt,setFlipSided:De,setCullFace:ye,setLineWidth:dn,setPolygonOffset:O,setScissorTest:de,activeTexture:Vt,bindTexture:oe,unbindTexture:pt,compressedTexImage2D:be,compressedTexImage3D:T,texImage2D:q,texImage3D:N,pixelStorei:lt,getParameter:tt,updateUBOMapping:Nt,uniformBlockBinding:Pt,texStorage2D:ot,texStorage3D:ut,texSubImage2D:S,texSubImage3D:H,compressedTexSubImage2D:Z,compressedTexSubImage3D:et,scissor:it,viewport:st,reset:ne}}function oC(e,t,n,i,a,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,d=new WeakMap,h=new Set;let u;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(T,S){return _?new OffscreenCanvas(T,S):eu("canvas")}function g(T,S,H){let Z=1;const et=be(T);if((et.width>H||et.height>H)&&(Z=H/Math.max(et.width,et.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ot=Math.floor(Z*et.width),ut=Math.floor(Z*et.height);u===void 0&&(u=M(ot,ut));const q=S?M(ot,ut):u;return q.width=ot,q.height=ut,q.getContext("2d").drawImage(T,0,0,ot,ut),Dt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+ot+"x"+ut+")."),q}else return"data"in T&&Dt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),T;return T}function f(T){return T.generateMipmaps}function m(T){e.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(T,S,H,Z,et,ot=!1){if(T!==null){if(e[T]!==void 0)return e[T];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ut;Z&&(ut=t.get("EXT_texture_norm16"),ut||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=S;if(S===e.RED&&(H===e.FLOAT&&(q=e.R32F),H===e.HALF_FLOAT&&(q=e.R16F),H===e.UNSIGNED_BYTE&&(q=e.R8),H===e.UNSIGNED_SHORT&&ut&&(q=ut.R16_EXT),H===e.SHORT&&ut&&(q=ut.R16_SNORM_EXT)),S===e.RED_INTEGER&&(H===e.UNSIGNED_BYTE&&(q=e.R8UI),H===e.UNSIGNED_SHORT&&(q=e.R16UI),H===e.UNSIGNED_INT&&(q=e.R32UI),H===e.BYTE&&(q=e.R8I),H===e.SHORT&&(q=e.R16I),H===e.INT&&(q=e.R32I)),S===e.RG&&(H===e.FLOAT&&(q=e.RG32F),H===e.HALF_FLOAT&&(q=e.RG16F),H===e.UNSIGNED_BYTE&&(q=e.RG8),H===e.UNSIGNED_SHORT&&ut&&(q=ut.RG16_EXT),H===e.SHORT&&ut&&(q=ut.RG16_SNORM_EXT)),S===e.RG_INTEGER&&(H===e.UNSIGNED_BYTE&&(q=e.RG8UI),H===e.UNSIGNED_SHORT&&(q=e.RG16UI),H===e.UNSIGNED_INT&&(q=e.RG32UI),H===e.BYTE&&(q=e.RG8I),H===e.SHORT&&(q=e.RG16I),H===e.INT&&(q=e.RG32I)),S===e.RGB_INTEGER&&(H===e.UNSIGNED_BYTE&&(q=e.RGB8UI),H===e.UNSIGNED_SHORT&&(q=e.RGB16UI),H===e.UNSIGNED_INT&&(q=e.RGB32UI),H===e.BYTE&&(q=e.RGB8I),H===e.SHORT&&(q=e.RGB16I),H===e.INT&&(q=e.RGB32I)),S===e.RGBA_INTEGER&&(H===e.UNSIGNED_BYTE&&(q=e.RGBA8UI),H===e.UNSIGNED_SHORT&&(q=e.RGBA16UI),H===e.UNSIGNED_INT&&(q=e.RGBA32UI),H===e.BYTE&&(q=e.RGBA8I),H===e.SHORT&&(q=e.RGBA16I),H===e.INT&&(q=e.RGBA32I)),S===e.RGB&&(H===e.UNSIGNED_SHORT&&ut&&(q=ut.RGB16_EXT),H===e.SHORT&&ut&&(q=ut.RGB16_SNORM_EXT),H===e.UNSIGNED_INT_5_9_9_9_REV&&(q=e.RGB9_E5),H===e.UNSIGNED_INT_10F_11F_11F_REV&&(q=e.R11F_G11F_B10F)),S===e.RGBA){const N=ot?$c:Kt.getTransfer(et);H===e.FLOAT&&(q=e.RGBA32F),H===e.HALF_FLOAT&&(q=e.RGBA16F),H===e.UNSIGNED_BYTE&&(q=N===le?e.SRGB8_ALPHA8:e.RGBA8),H===e.UNSIGNED_SHORT&&ut&&(q=ut.RGBA16_EXT),H===e.SHORT&&ut&&(q=ut.RGBA16_SNORM_EXT),H===e.UNSIGNED_SHORT_4_4_4_4&&(q=e.RGBA4),H===e.UNSIGNED_SHORT_5_5_5_1&&(q=e.RGB5_A1)}return(q===e.R16F||q===e.R32F||q===e.RG16F||q===e.RG32F||q===e.RGBA16F||q===e.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function C(T,S){let H;return T?S===null||S===Ai||S===ko?H=e.DEPTH24_STENCIL8:S===Si?H=e.DEPTH32F_STENCIL8:S===Vo&&(H=e.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ai||S===ko?H=e.DEPTH_COMPONENT24:S===Si?H=e.DEPTH_COMPONENT32F:S===Vo&&(H=e.DEPTH_COMPONENT16),H}function b(T,S){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==rn&&T.minFilter!==fn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function R(T){const S=T.target;S.removeEventListener("dispose",R),A(S),S.isVideoTexture&&d.delete(S),S.isHTMLTexture&&h.delete(S)}function x(T){const S=T.target;S.removeEventListener("dispose",x),D(S)}function A(T){const S=i.get(T);if(S.__webglInit===void 0)return;const H=T.source,Z=p.get(H);if(Z){const et=Z[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&w(T),Object.keys(Z).length===0&&p.delete(H)}i.remove(T)}function w(T){const S=i.get(T);e.deleteTexture(S.__webglTexture);const H=T.source,Z=p.get(H);delete Z[S.__cacheKey],r.memory.textures--}function D(T){const S=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let et=0;et<S.__webglFramebuffer[Z].length;et++)e.deleteFramebuffer(S.__webglFramebuffer[Z][et]);else e.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)e.deleteFramebuffer(S.__webglFramebuffer[Z]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=T.textures;for(let Z=0,et=H.length;Z<et;Z++){const ot=i.get(H[Z]);ot.__webglTexture&&(e.deleteTexture(ot.__webglTexture),r.memory.textures--),i.remove(H[Z])}i.remove(T)}let G=0;function Y(){G=0}function j(){return G}function I(T){G=T}function U(){const T=G;return T>=a.maxTextures&&Dt("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+a.maxTextures),G+=1,T}function P(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function W(T,S){const H=i.get(T);if(T.isVideoTexture&&oe(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&H.__version!==T.version){const Z=T.image;if(Z===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(H,T,S);return}}else T.isExternalTexture&&(H.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,H.__webglTexture,e.TEXTURE0+S)}function Q(T,S){const H=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){Rt(H,T,S);return}else T.isExternalTexture&&(H.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,H.__webglTexture,e.TEXTURE0+S)}function at(T,S){const H=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){Rt(H,T,S);return}n.bindTexture(e.TEXTURE_3D,H.__webglTexture,e.TEXTURE0+S)}function xt(T,S){const H=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&H.__version!==T.version){Ut(H,T,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture,e.TEXTURE0+S)}const yt={[ih]:e.REPEAT,[ji]:e.CLAMP_TO_EDGE,[ah]:e.MIRRORED_REPEAT},Gt={[rn]:e.NEAREST,[Rb]:e.NEAREST_MIPMAP_NEAREST,[Tl]:e.NEAREST_MIPMAP_LINEAR,[fn]:e.LINEAR,[vf]:e.LINEAR_MIPMAP_NEAREST,[os]:e.LINEAR_MIPMAP_LINEAR},qt={[Db]:e.NEVER,[Pb]:e.ALWAYS,[Ub]:e.LESS,[Qp]:e.LEQUAL,[Nb]:e.EQUAL,[Jp]:e.GEQUAL,[Lb]:e.GREATER,[Ob]:e.NOTEQUAL};function wt(T,S){if(S.type===Si&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===fn||S.magFilter===vf||S.magFilter===Tl||S.magFilter===os||S.minFilter===fn||S.minFilter===vf||S.minFilter===Tl||S.minFilter===os)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,yt[S.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,yt[S.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,yt[S.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,Gt[S.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,Gt[S.minFilter]),S.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,qt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===rn||S.minFilter!==Tl&&S.minFilter!==os||S.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function $(T,S){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",R));const Z=S.source;let et=p.get(Z);et===void 0&&(et={},p.set(Z,et));const ot=P(S);if(ot!==T.__cacheKey){et[ot]===void 0&&(et[ot]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,H=!0),et[ot].usedTimes++;const ut=et[T.__cacheKey];ut!==void 0&&(et[T.__cacheKey].usedTimes--,ut.usedTimes===0&&w(S)),T.__cacheKey=ot,T.__webglTexture=et[ot].texture}return H}function ft(T,S,H){return Math.floor(Math.floor(T/H)/S)}function rt(T,S,H,Z){const ot=T.updateRanges;if(ot.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,H,Z,S.data);else{ot.sort((lt,it)=>lt.start-it.start);let ut=0;for(let lt=1;lt<ot.length;lt++){const it=ot[ut],st=ot[lt],Nt=it.start+it.count,Pt=ft(st.start,S.width,4),ne=ft(it.start,S.width,4);st.start<=Nt+1&&Pt===ne&&ft(st.start+st.count-1,S.width,4)===Pt?it.count=Math.max(it.count,st.start+st.count-it.start):(++ut,ot[ut]=st)}ot.length=ut+1;const q=n.getParameter(e.UNPACK_ROW_LENGTH),N=n.getParameter(e.UNPACK_SKIP_PIXELS),tt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let lt=0,it=ot.length;lt<it;lt++){const st=ot[lt],Nt=Math.floor(st.start/4),Pt=Math.ceil(st.count/4),ne=Nt%S.width,L=Math.floor(Nt/S.width),ct=Pt,K=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(e.UNPACK_SKIP_ROWS,L),n.texSubImage2D(e.TEXTURE_2D,0,ne,L,ct,K,H,Z,S.data)}T.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,q),n.pixelStorei(e.UNPACK_SKIP_PIXELS,N),n.pixelStorei(e.UNPACK_SKIP_ROWS,tt)}}function Rt(T,S,H){let Z=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=e.TEXTURE_3D);const et=$(T,S),ot=S.source;n.bindTexture(Z,T.__webglTexture,e.TEXTURE0+H);const ut=i.get(ot);if(ot.version!==ut.__version||et===!0){if(n.activeTexture(e.TEXTURE0+H),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const K=Kt.getPrimaries(Kt.workingColorSpace),vt=S.colorSpace===ba?null:Kt.getPrimaries(S.colorSpace),dt=S.colorSpace===ba||K===vt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt)}n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment);let N=g(S.image,!1,a.maxTextureSize);N=pt(S,N);const tt=s.convert(S.format,S.colorSpace),lt=s.convert(S.type);let it=y(S.internalFormat,tt,lt,S.normalized,S.colorSpace,S.isVideoTexture);wt(Z,S);let st;const Nt=S.mipmaps,Pt=S.isVideoTexture!==!0,ne=ut.__version===void 0||et===!0,L=ot.dataReady,ct=b(S,N);if(S.isDepthTexture)it=C(S.format===ls,S.type),ne&&(Pt?n.texStorage2D(e.TEXTURE_2D,1,it,N.width,N.height):n.texImage2D(e.TEXTURE_2D,0,it,N.width,N.height,0,tt,lt,null));else if(S.isDataTexture)if(Nt.length>0){Pt&&ne&&n.texStorage2D(e.TEXTURE_2D,ct,it,Nt[0].width,Nt[0].height);for(let K=0,vt=Nt.length;K<vt;K++)st=Nt[K],Pt?L&&n.texSubImage2D(e.TEXTURE_2D,K,0,0,st.width,st.height,tt,lt,st.data):n.texImage2D(e.TEXTURE_2D,K,it,st.width,st.height,0,tt,lt,st.data);S.generateMipmaps=!1}else Pt?(ne&&n.texStorage2D(e.TEXTURE_2D,ct,it,N.width,N.height),L&&rt(S,N,tt,lt)):n.texImage2D(e.TEXTURE_2D,0,it,N.width,N.height,0,tt,lt,N.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Pt&&ne&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ct,it,Nt[0].width,Nt[0].height,N.depth);for(let K=0,vt=Nt.length;K<vt;K++)if(st=Nt[K],S.format!==ci)if(tt!==null)if(Pt){if(L)if(S.layerUpdates.size>0){const dt=R0(st.width,st.height,S.format,S.type);for(const nt of S.layerUpdates){const bt=st.data.subarray(nt*dt/st.data.BYTES_PER_ELEMENT,(nt+1)*dt/st.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,nt,st.width,st.height,1,tt,bt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,0,st.width,st.height,N.depth,tt,st.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,K,it,st.width,st.height,N.depth,0,st.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?L&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,0,st.width,st.height,N.depth,tt,lt,st.data):n.texImage3D(e.TEXTURE_2D_ARRAY,K,it,st.width,st.height,N.depth,0,tt,lt,st.data)}else{Pt&&ne&&n.texStorage2D(e.TEXTURE_2D,ct,it,Nt[0].width,Nt[0].height);for(let K=0,vt=Nt.length;K<vt;K++)st=Nt[K],S.format!==ci?tt!==null?Pt?L&&n.compressedTexSubImage2D(e.TEXTURE_2D,K,0,0,st.width,st.height,tt,st.data):n.compressedTexImage2D(e.TEXTURE_2D,K,it,st.width,st.height,0,st.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?L&&n.texSubImage2D(e.TEXTURE_2D,K,0,0,st.width,st.height,tt,lt,st.data):n.texImage2D(e.TEXTURE_2D,K,it,st.width,st.height,0,tt,lt,st.data)}else if(S.isDataArrayTexture)if(Pt){if(ne&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ct,it,N.width,N.height,N.depth),L)if(S.layerUpdates.size>0){const K=R0(N.width,N.height,S.format,S.type);for(const vt of S.layerUpdates){const dt=N.data.subarray(vt*K/N.data.BYTES_PER_ELEMENT,(vt+1)*K/N.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,vt,N.width,N.height,1,tt,lt,dt)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,N.width,N.height,N.depth,tt,lt,N.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,it,N.width,N.height,N.depth,0,tt,lt,N.data);else if(S.isData3DTexture)Pt?(ne&&n.texStorage3D(e.TEXTURE_3D,ct,it,N.width,N.height,N.depth),L&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,N.width,N.height,N.depth,tt,lt,N.data)):n.texImage3D(e.TEXTURE_3D,0,it,N.width,N.height,N.depth,0,tt,lt,N.data);else if(S.isFramebufferTexture){if(ne)if(Pt)n.texStorage2D(e.TEXTURE_2D,ct,it,N.width,N.height);else{let K=N.width,vt=N.height;for(let dt=0;dt<ct;dt++)n.texImage2D(e.TEXTURE_2D,dt,it,K,vt,0,tt,lt,null),K>>=1,vt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in e){const K=e.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),N.parentNode!==K){K.appendChild(N),h.add(S),K.onpaint=Ft=>{const Oe=Ft.changedElements;for(const he of h)Oe.includes(he.image)&&(he.needsUpdate=!0)},K.requestPaint();return}const vt=0,dt=e.RGBA,nt=e.RGBA,bt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,vt,dt,nt,bt,N),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(Pt&&ne){const K=be(Nt[0]);n.texStorage2D(e.TEXTURE_2D,ct,it,K.width,K.height)}for(let K=0,vt=Nt.length;K<vt;K++)st=Nt[K],Pt?L&&n.texSubImage2D(e.TEXTURE_2D,K,0,0,tt,lt,st):n.texImage2D(e.TEXTURE_2D,K,it,tt,lt,st);S.generateMipmaps=!1}else if(Pt){if(ne){const K=be(N);n.texStorage2D(e.TEXTURE_2D,ct,it,K.width,K.height)}L&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,tt,lt,N)}else n.texImage2D(e.TEXTURE_2D,0,it,tt,lt,N);f(S)&&m(Z),ut.__version=ot.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Ut(T,S,H){if(S.image.length!==6)return;const Z=$(T,S),et=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+H);const ot=i.get(et);if(et.version!==ot.__version||Z===!0){n.activeTexture(e.TEXTURE0+H);const ut=Kt.getPrimaries(Kt.workingColorSpace),q=S.colorSpace===ba?null:Kt.getPrimaries(S.colorSpace),N=S.colorSpace===ba||ut===q?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,N);const tt=S.isCompressedTexture||S.image[0].isCompressedTexture,lt=S.image[0]&&S.image[0].isDataTexture,it=[];for(let nt=0;nt<6;nt++)!tt&&!lt?it[nt]=g(S.image[nt],!0,a.maxCubemapSize):it[nt]=lt?S.image[nt].image:S.image[nt],it[nt]=pt(S,it[nt]);const st=it[0],Nt=s.convert(S.format,S.colorSpace),Pt=s.convert(S.type),ne=y(S.internalFormat,Nt,Pt,S.normalized,S.colorSpace),L=S.isVideoTexture!==!0,ct=ot.__version===void 0||Z===!0,K=et.dataReady;let vt=b(S,st);wt(e.TEXTURE_CUBE_MAP,S);let dt;if(tt){L&&ct&&n.texStorage2D(e.TEXTURE_CUBE_MAP,vt,ne,st.width,st.height);for(let nt=0;nt<6;nt++){dt=it[nt].mipmaps;for(let bt=0;bt<dt.length;bt++){const Ft=dt[bt];S.format!==ci?Nt!==null?L?K&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt,0,0,Ft.width,Ft.height,Nt,Ft.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt,ne,Ft.width,Ft.height,0,Ft.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt,0,0,Ft.width,Ft.height,Nt,Pt,Ft.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt,ne,Ft.width,Ft.height,0,Nt,Pt,Ft.data)}}}else{if(dt=S.mipmaps,L&&ct){dt.length>0&&vt++;const nt=be(it[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,vt,ne,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(lt){L?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,it[nt].width,it[nt].height,Nt,Pt,it[nt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ne,it[nt].width,it[nt].height,0,Nt,Pt,it[nt].data);for(let bt=0;bt<dt.length;bt++){const Oe=dt[bt].image[nt].image;L?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt+1,0,0,Oe.width,Oe.height,Nt,Pt,Oe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt+1,ne,Oe.width,Oe.height,0,Nt,Pt,Oe.data)}}else{L?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Nt,Pt,it[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ne,Nt,Pt,it[nt]);for(let bt=0;bt<dt.length;bt++){const Ft=dt[bt];L?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt+1,0,0,Nt,Pt,Ft.image[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt+1,ne,Nt,Pt,Ft.image[nt])}}}f(S)&&m(e.TEXTURE_CUBE_MAP),ot.__version=et.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Ct(T,S,H,Z,et,ot){const ut=s.convert(H.format,H.colorSpace),q=s.convert(H.type),N=y(H.internalFormat,ut,q,H.normalized,H.colorSpace),tt=i.get(S),lt=i.get(H);if(lt.__renderTarget=S,!tt.__hasExternalTextures){const it=Math.max(1,S.width>>ot),st=Math.max(1,S.height>>ot);et===e.TEXTURE_3D||et===e.TEXTURE_2D_ARRAY?n.texImage3D(et,ot,N,it,st,S.depth,0,ut,q,null):n.texImage2D(et,ot,N,it,st,0,ut,q,null)}n.bindFramebuffer(e.FRAMEBUFFER,T),Vt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Z,et,lt.__webglTexture,0,de(S)):(et===e.TEXTURE_2D||et>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Z,et,lt.__webglTexture,ot),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Se(T,S,H){if(e.bindRenderbuffer(e.RENDERBUFFER,T),S.depthBuffer){const Z=S.depthTexture,et=Z&&Z.isDepthTexture?Z.type:null,ot=C(S.stencilBuffer,et),ut=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Vt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,de(S),ot,S.width,S.height):H?e.renderbufferStorageMultisample(e.RENDERBUFFER,de(S),ot,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,ot,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ut,e.RENDERBUFFER,T)}else{const Z=S.textures;for(let et=0;et<Z.length;et++){const ot=Z[et],ut=s.convert(ot.format,ot.colorSpace),q=s.convert(ot.type),N=y(ot.internalFormat,ut,q,ot.normalized,ot.colorSpace);Vt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,de(S),N,S.width,S.height):H?e.renderbufferStorageMultisample(e.RENDERBUFFER,de(S),N,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,N,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ot(T,S,H){const Z=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=i.get(S.depthTexture);if(et.__renderTarget=S,(!et.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z){if(et.__webglInit===void 0&&(et.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),et.__webglTexture===void 0){et.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,et.__webglTexture),wt(e.TEXTURE_CUBE_MAP,S.depthTexture);const tt=s.convert(S.depthTexture.format),lt=s.convert(S.depthTexture.type);let it;S.depthTexture.format===ra?it=e.DEPTH_COMPONENT24:S.depthTexture.format===ls&&(it=e.DEPTH24_STENCIL8);for(let st=0;st<6;st++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,it,S.width,S.height,0,tt,lt,null)}}else W(S.depthTexture,0);const ot=et.__webglTexture,ut=de(S),q=Z?e.TEXTURE_CUBE_MAP_POSITIVE_X+H:e.TEXTURE_2D,N=S.depthTexture.format===ls?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(S.depthTexture.format===ra)Vt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,N,q,ot,0,ut):e.framebufferTexture2D(e.FRAMEBUFFER,N,q,ot,0);else if(S.depthTexture.format===ls)Vt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,N,q,ot,0,ut):e.framebufferTexture2D(e.FRAMEBUFFER,N,q,ot,0);else throw new Error("Unknown depthTexture format")}function $t(T){const S=i.get(T),H=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",et)};Z.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=Z}if(T.depthTexture&&!S.__autoAllocateDepthBuffer)if(H)for(let Z=0;Z<6;Z++)Ot(S.__webglFramebuffer[Z],T,Z);else{const Z=T.texture.mipmaps;Z&&Z.length>0?Ot(S.__webglFramebuffer[0],T,0):Ot(S.__webglFramebuffer,T,0)}else if(H){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=e.createRenderbuffer(),Se(S.__webglDepthbuffer[Z],T,!1);else{const et=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=S.__webglDepthbuffer[Z];e.bindRenderbuffer(e.RENDERBUFFER,ot),e.framebufferRenderbuffer(e.FRAMEBUFFER,et,e.RENDERBUFFER,ot)}}else{const Z=T.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),Se(S.__webglDepthbuffer,T,!1);else{const et=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ot),e.framebufferRenderbuffer(e.FRAMEBUFFER,et,e.RENDERBUFFER,ot)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function re(T,S,H){const Z=i.get(T);S!==void 0&&Ct(Z.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),H!==void 0&&$t(T)}function Xt(T){const S=T.texture,H=i.get(T),Z=i.get(S);T.addEventListener("dispose",x);const et=T.textures,ot=T.isWebGLCubeRenderTarget===!0,ut=et.length>1;if(ut||(Z.__webglTexture===void 0&&(Z.__webglTexture=e.createTexture()),Z.__version=S.version,r.memory.textures++),ot){H.__webglFramebuffer=[];for(let q=0;q<6;q++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[q]=[];for(let N=0;N<S.mipmaps.length;N++)H.__webglFramebuffer[q][N]=e.createFramebuffer()}else H.__webglFramebuffer[q]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let q=0;q<S.mipmaps.length;q++)H.__webglFramebuffer[q]=e.createFramebuffer()}else H.__webglFramebuffer=e.createFramebuffer();if(ut)for(let q=0,N=et.length;q<N;q++){const tt=i.get(et[q]);tt.__webglTexture===void 0&&(tt.__webglTexture=e.createTexture(),r.memory.textures++)}if(T.samples>0&&Vt(T)===!1){H.__webglMultisampledFramebuffer=e.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let q=0;q<et.length;q++){const N=et[q];H.__webglColorRenderbuffer[q]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,H.__webglColorRenderbuffer[q]);const tt=s.convert(N.format,N.colorSpace),lt=s.convert(N.type),it=y(N.internalFormat,tt,lt,N.normalized,N.colorSpace,T.isXRRenderTarget===!0),st=de(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,st,it,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+q,e.RENDERBUFFER,H.__webglColorRenderbuffer[q])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=e.createRenderbuffer(),Se(H.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ot){n.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),wt(e.TEXTURE_CUBE_MAP,S);for(let q=0;q<6;q++)if(S.mipmaps&&S.mipmaps.length>0)for(let N=0;N<S.mipmaps.length;N++)Ct(H.__webglFramebuffer[q][N],T,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+q,N);else Ct(H.__webglFramebuffer[q],T,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);f(S)&&m(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ut){for(let q=0,N=et.length;q<N;q++){const tt=et[q],lt=i.get(tt);let it=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(it=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(it,lt.__webglTexture),wt(it,tt),Ct(H.__webglFramebuffer,T,tt,e.COLOR_ATTACHMENT0+q,it,0),f(tt)&&m(it)}n.unbindTexture()}else{let q=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(q=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(q,Z.__webglTexture),wt(q,S),S.mipmaps&&S.mipmaps.length>0)for(let N=0;N<S.mipmaps.length;N++)Ct(H.__webglFramebuffer[N],T,S,e.COLOR_ATTACHMENT0,q,N);else Ct(H.__webglFramebuffer,T,S,e.COLOR_ATTACHMENT0,q,0);f(S)&&m(q),n.unbindTexture()}T.depthBuffer&&$t(T)}function De(T){const S=T.textures;for(let H=0,Z=S.length;H<Z;H++){const et=S[H];if(f(et)){const ot=v(T),ut=i.get(et).__webglTexture;n.bindTexture(ot,ut),m(ot),n.unbindTexture()}}}const ye=[],dn=[];function O(T){if(T.samples>0){if(Vt(T)===!1){const S=T.textures,H=T.width,Z=T.height;let et=e.COLOR_BUFFER_BIT;const ot=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ut=i.get(T),q=S.length>1;if(q)for(let tt=0;tt<S.length;tt++)n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+tt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+tt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);const N=T.texture.mipmaps;N&&N.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let tt=0;tt<S.length;tt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(et|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(et|=e.STENCIL_BUFFER_BIT)),q){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ut.__webglColorRenderbuffer[tt]);const lt=i.get(S[tt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,lt,0)}e.blitFramebuffer(0,0,H,Z,0,0,H,Z,et,e.NEAREST),l===!0&&(ye.length=0,dn.length=0,ye.push(e.COLOR_ATTACHMENT0+tt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ye.push(ot),dn.push(ot),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,dn)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ye))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),q)for(let tt=0;tt<S.length;tt++){n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+tt,e.RENDERBUFFER,ut.__webglColorRenderbuffer[tt]);const lt=i.get(S[tt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+tt,e.TEXTURE_2D,lt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const S=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function de(T){return Math.min(a.maxSamples,T.samples)}function Vt(T){const S=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function oe(T){const S=r.render.frame;d.get(T)!==S&&(d.set(T,S),T.update())}function pt(T,S){const H=T.colorSpace,Z=T.format,et=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||H!==Jc&&H!==ba&&(Kt.getTransfer(H)===le?(Z!==ci||et!==$n)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",H)),S}function be(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=Y,this.getTextureUnits=j,this.setTextureUnits=I,this.setTexture2D=W,this.setTexture2DArray=Q,this.setTexture3D=at,this.setTextureCube=xt,this.rebindTextures=re,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function lC(e,t){function n(i,a=ba){let s;const r=Kt.getTransfer(a);if(i===$n)return e.UNSIGNED_BYTE;if(i===qp)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Yp)return e.UNSIGNED_SHORT_5_5_5_1;if(i===xS)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===SS)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===_S)return e.BYTE;if(i===vS)return e.SHORT;if(i===Vo)return e.UNSIGNED_SHORT;if(i===Wp)return e.INT;if(i===Ai)return e.UNSIGNED_INT;if(i===Si)return e.FLOAT;if(i===sa)return e.HALF_FLOAT;if(i===yS)return e.ALPHA;if(i===MS)return e.RGB;if(i===ci)return e.RGBA;if(i===ra)return e.DEPTH_COMPONENT;if(i===ls)return e.DEPTH_STENCIL;if(i===ES)return e.RED;if(i===jp)return e.RED_INTEGER;if(i===Ss)return e.RG;if(i===Zp)return e.RG_INTEGER;if(i===Kp)return e.RGBA_INTEGER;if(i===mc||i===gc||i===_c||i===vc)if(r===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===mc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===mc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_c)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sh||i===rh||i===oh||i===lh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===sh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ch||i===uh||i===fh||i===dh||i===hh||i===Kc||i===ph)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ch||i===uh)return r===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===fh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===dh)return s.COMPRESSED_R11_EAC;if(i===hh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Kc)return s.COMPRESSED_RG11_EAC;if(i===ph)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===mh||i===gh||i===_h||i===vh||i===xh||i===Sh||i===yh||i===Mh||i===Eh||i===bh||i===Th||i===Ah||i===Rh||i===Ch)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===mh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_h)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Eh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Th)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ah)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ch)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wh||i===Dh||i===Uh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===wh)return r===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Nh||i===Lh||i===Qc||i===Oh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Nh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Lh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ko?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const cC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uC=`
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

}`;class fC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new OS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Ci({vertexShader:cC,fragmentShader:uC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ri(new Ru(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dC extends Rs{constructor(t,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,_=null;const M=typeof XRWebGLBinding<"u",g=new fC,f={},m=n.getContextAttributes();let v=null,y=null;const C=[],b=[],R=new se;let x=null;const A=new Zn;A.viewport=new Fe;const w=new Zn;w.viewport=new Fe;const D=[A,w],G=new MT;let Y=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ft=C[$];return ft===void 0&&(ft=new Af,C[$]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function($){let ft=C[$];return ft===void 0&&(ft=new Af,C[$]=ft),ft.getGripSpace()},this.getHand=function($){let ft=C[$];return ft===void 0&&(ft=new Af,C[$]=ft),ft.getHandSpace()};function I($){const ft=b.indexOf($.inputSource);if(ft===-1)return;const rt=C[ft];rt!==void 0&&(rt.update($.inputSource,$.frame,c||r),rt.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){a.removeEventListener("select",I),a.removeEventListener("selectstart",I),a.removeEventListener("selectend",I),a.removeEventListener("squeeze",I),a.removeEventListener("squeezestart",I),a.removeEventListener("squeezeend",I),a.removeEventListener("end",U),a.removeEventListener("inputsourceschange",P);for(let $=0;$<C.length;$++){const ft=b[$];ft!==null&&(b[$]=null,C[$].disconnect(ft))}Y=null,j=null,g.reset();for(const $ in f)delete f[$];t.setRenderTarget(v),p=null,u=null,h=null,a=null,y=null,wt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(a,n)),h},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function($){if(a=$,a!==null){if(v=t.getRenderTarget(),a.addEventListener("select",I),a.addEventListener("selectstart",I),a.addEventListener("selectend",I),a.addEventListener("squeeze",I),a.addEventListener("squeezestart",I),a.addEventListener("squeezeend",I),a.addEventListener("end",U),a.addEventListener("inputsourceschange",P),m.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,Rt=null,Ut=null;m.depth&&(Ut=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,rt=m.stencil?ls:ra,Rt=m.stencil?ko:Ai);const Ct={colorFormat:n.RGBA8,depthFormat:Ut,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(Ct),a.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new bi(u.textureWidth,u.textureHeight,{format:ci,type:$n,depthTexture:new Dr(u.textureWidth,u.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,n,rt),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new bi(p.framebufferWidth,p.framebufferHeight,{format:ci,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),wt.setContext(a),wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function P($){for(let ft=0;ft<$.removed.length;ft++){const rt=$.removed[ft],Rt=b.indexOf(rt);Rt>=0&&(b[Rt]=null,C[Rt].disconnect(rt))}for(let ft=0;ft<$.added.length;ft++){const rt=$.added[ft];let Rt=b.indexOf(rt);if(Rt===-1){for(let Ct=0;Ct<C.length;Ct++)if(Ct>=b.length){b.push(rt),Rt=Ct;break}else if(b[Ct]===null){b[Ct]=rt,Rt=Ct;break}if(Rt===-1)break}const Ut=C[Rt];Ut&&Ut.connect(rt)}}const W=new z,Q=new z;function at($,ft,rt){W.setFromMatrixPosition(ft.matrixWorld),Q.setFromMatrixPosition(rt.matrixWorld);const Rt=W.distanceTo(Q),Ut=ft.projectionMatrix.elements,Ct=rt.projectionMatrix.elements,Se=Ut[14]/(Ut[10]-1),Ot=Ut[14]/(Ut[10]+1),$t=(Ut[9]+1)/Ut[5],re=(Ut[9]-1)/Ut[5],Xt=(Ut[8]-1)/Ut[0],De=(Ct[8]+1)/Ct[0],ye=Se*Xt,dn=Se*De,O=Rt/(-Xt+De),de=O*-Xt;if(ft.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(de),$.translateZ(O),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ut[10]===-1)$.projectionMatrix.copy(ft.projectionMatrix),$.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Vt=Se+O,oe=Ot+O,pt=ye-de,be=dn+(Rt-de),T=$t*Ot/oe*Vt,S=re*Ot/oe*Vt;$.projectionMatrix.makePerspective(pt,be,T,S,Vt,oe),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function xt($,ft){ft===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ft.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(a===null)return;let ft=$.near,rt=$.far;g.texture!==null&&(g.depthNear>0&&(ft=g.depthNear),g.depthFar>0&&(rt=g.depthFar)),G.near=w.near=A.near=ft,G.far=w.far=A.far=rt,(Y!==G.near||j!==G.far)&&(a.updateRenderState({depthNear:G.near,depthFar:G.far}),Y=G.near,j=G.far),G.layers.mask=$.layers.mask|6,A.layers.mask=G.layers.mask&-5,w.layers.mask=G.layers.mask&-3;const Rt=$.parent,Ut=G.cameras;xt(G,Rt);for(let Ct=0;Ct<Ut.length;Ct++)xt(Ut[Ct],Rt);Ut.length===2?at(G,A,w):G.projectionMatrix.copy(A.projectionMatrix),yt($,G,Rt)};function yt($,ft,rt){rt===null?$.matrix.copy(ft.matrixWorld):($.matrix.copy(rt.matrixWorld),$.matrix.invert(),$.matrix.multiply(ft.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ft.projectionMatrix),$.projectionMatrixInverse.copy(ft.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ih*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(G)},this.getCameraTexture=function($){return f[$]};let Gt=null;function qt($,ft){if(d=ft.getViewerPose(c||r),_=ft,d!==null){const rt=d.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Rt=!1;rt.length!==G.cameras.length&&(G.cameras.length=0,Rt=!0);for(let Ot=0;Ot<rt.length;Ot++){const $t=rt[Ot];let re=null;if(p!==null)re=p.getViewport($t);else{const De=h.getViewSubImage(u,$t);re=De.viewport,Ot===0&&(t.setRenderTargetTextures(y,De.colorTexture,De.depthStencilTexture),t.setRenderTarget(y))}let Xt=D[Ot];Xt===void 0&&(Xt=new Zn,Xt.layers.enable(Ot),Xt.viewport=new Fe,D[Ot]=Xt),Xt.matrix.fromArray($t.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray($t.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(re.x,re.y,re.width,re.height),Ot===0&&(G.matrix.copy(Xt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Rt===!0&&G.cameras.push(Xt)}const Ut=a.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&M){h=i.getBinding();const Ot=h.getDepthInformation(rt[0]);Ot&&Ot.isValid&&Ot.texture&&g.init(Ot,a.renderState)}if(Ut&&Ut.includes("camera-access")&&M){t.state.unbindTexture(),h=i.getBinding();for(let Ot=0;Ot<rt.length;Ot++){const $t=rt[Ot].camera;if($t){let re=f[$t];re||(re=new OS,f[$t]=re);const Xt=h.getCameraImage($t);re.sourceTexture=Xt}}}}for(let rt=0;rt<C.length;rt++){const Rt=b[rt],Ut=C[rt];Rt!==null&&Ut!==void 0&&Ut.update(Rt,ft,c||r)}Gt&&Gt($,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),_=null}const wt=new FS;wt.setAnimationLoop(qt),this.setAnimationLoop=function($){Gt=$},this.dispose=function(){}}}const hC=new We,WS=new It;WS.set(-1,0,0,0,1,0,0,0,1);function pC(e,t){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,PS(e)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function a(g,f,m,v,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),h(g,f)):f.isMeshPhongMaterial?(s(g,f),d(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),u(g,f),f.isMeshPhysicalMaterial&&p(g,f,y)):f.isMeshMatcapMaterial?(s(g,f),_(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),M(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(r(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,m,v):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===bn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===bn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const m=t.get(f),v=m.envMap,y=m.envMapRotation;v&&(g.envMap.value=v,g.envMapRotation.value.setFromMatrix4(hC.makeRotationFromEuler(y)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(WS),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function r(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,v){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=v*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function d(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,m){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===bn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,f){f.matcap&&(g.matcap.value=f.matcap)}function M(g,f){const m=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function mC(e,t,n,i){let a={},s={},r=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,v){const y=v.program;i.uniformBlockBinding(m,y)}function c(m,v){let y=a[m.id];y===void 0&&(_(m),y=d(m),a[m.id]=y,m.addEventListener("dispose",g));const C=v.program;i.updateUBOMapping(m,C);const b=t.render.frame;s[m.id]!==b&&(u(m),s[m.id]=b)}function d(m){const v=h();m.__bindingPointIndex=v;const y=e.createBuffer(),C=m.__size,b=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,C,b),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,v,y),y}function h(){for(let m=0;m<o;m++)if(r.indexOf(m)===-1)return r.push(m),m;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){const v=a[m.id],y=m.uniforms,C=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,v);for(let b=0,R=y.length;b<R;b++){const x=Array.isArray(y[b])?y[b]:[y[b]];for(let A=0,w=x.length;A<w;A++){const D=x[A];if(p(D,b,A,C)===!0){const G=D.__offset,Y=Array.isArray(D.value)?D.value:[D.value];let j=0;for(let I=0;I<Y.length;I++){const U=Y[I],P=M(U);typeof U=="number"||typeof U=="boolean"?(D.__data[0]=U,e.bufferSubData(e.UNIFORM_BUFFER,G+j,D.__data)):U.isMatrix3?(D.__data[0]=U.elements[0],D.__data[1]=U.elements[1],D.__data[2]=U.elements[2],D.__data[3]=0,D.__data[4]=U.elements[3],D.__data[5]=U.elements[4],D.__data[6]=U.elements[5],D.__data[7]=0,D.__data[8]=U.elements[6],D.__data[9]=U.elements[7],D.__data[10]=U.elements[8],D.__data[11]=0):ArrayBuffer.isView(U)?D.__data.set(new U.constructor(U.buffer,U.byteOffset,D.__data.length)):(U.toArray(D.__data,j),j+=P.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,G,D.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(m,v,y,C){const b=m.value,R=v+"_"+y;if(C[R]===void 0)return typeof b=="number"||typeof b=="boolean"?C[R]=b:ArrayBuffer.isView(b)?C[R]=b.slice():C[R]=b.clone(),!0;{const x=C[R];if(typeof b=="number"||typeof b=="boolean"){if(x!==b)return C[R]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(x.equals(b)===!1)return x.copy(b),!0}}return!1}function _(m){const v=m.uniforms;let y=0;const C=16;for(let R=0,x=v.length;R<x;R++){const A=Array.isArray(v[R])?v[R]:[v[R]];for(let w=0,D=A.length;w<D;w++){const G=A[w],Y=Array.isArray(G.value)?G.value:[G.value];for(let j=0,I=Y.length;j<I;j++){const U=Y[j],P=M(U),W=y%C,Q=W%P.boundary,at=W+Q;y+=Q,at!==0&&C-at<P.storage&&(y+=C-at),G.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=P.storage}}}const b=y%C;return b>0&&(y+=C-b),m.__size=y,m.__cache={},this}function M(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(v.boundary=16,v.storage=m.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",m),v}function g(m){const v=m.target;v.removeEventListener("dispose",g);const y=r.indexOf(v.__bindingPointIndex);r.splice(y,1),e.deleteBuffer(a[v.id]),delete a[v.id],delete s[v.id]}function f(){for(const m in a)e.deleteBuffer(a[m]);r=[],a={},s={}}return{bind:l,update:c,dispose:f}}const gC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mi=null;function _C(){return mi===null&&(mi=new rT(gC,16,16,Ss,sa),mi.name="DFG_LUT",mi.minFilter=fn,mi.magFilter=fn,mi.wrapS=ji,mi.wrapT=ji,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}class vC{constructor(t={}){const{canvas:n=Bb(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:p=$n}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=r;const M=p,g=new Set([Kp,Zp,jp]),f=new Set([$n,Ai,Vo,ko,qp,Yp]),m=new Uint32Array(4),v=new Int32Array(4),y=new z;let C=null,b=null;const R=[],x=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let D=!1,G=null;this._outputColorSpace=Wn;let Y=0,j=0,I=null,U=-1,P=null;const W=new Fe,Q=new Fe;let at=null;const xt=new fe(0);let yt=0,Gt=n.width,qt=n.height,wt=1,$=null,ft=null;const rt=new Fe(0,0,Gt,qt),Rt=new Fe(0,0,Gt,qt);let Ut=!1;const Ct=new US;let Se=!1,Ot=!1;const $t=new We,re=new z,Xt=new Fe,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function dn(){return I===null?wt:1}let O=i;function de(E,B){return n.getContext(E,B)}try{const E={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Xp}`),n.addEventListener("webglcontextlost",nt,!1),n.addEventListener("webglcontextrestored",bt,!1),n.addEventListener("webglcontextcreationerror",Ft,!1),O===null){const B="webgl2";if(O=de(B,E),O===null)throw de(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw ee("WebGLRenderer: "+E.message),E}let Vt,oe,pt,be,T,S,H,Z,et,ot,ut,q,N,tt,lt,it,st,Nt,Pt,ne,L,ct,K;function vt(){Vt=new _R(O),Vt.init(),L=new lC(O,Vt),oe=new cR(O,Vt,t,L),pt=new rC(O,Vt),oe.reversedDepthBuffer&&u&&pt.buffers.depth.setReversed(!0),be=new SR(O),T=new q3,S=new oC(O,Vt,pt,T,oe,L,be),H=new gR(w),Z=new bT(O),ct=new oR(O,Z),et=new vR(O,Z,be,ct),ot=new MR(O,et,Z,ct,be),Nt=new yR(O,oe,S),lt=new uR(T),ut=new W3(w,H,Vt,oe,ct,lt),q=new pC(w,T),N=new j3,tt=new tC(Vt),st=new rR(w,H,pt,ot,_,l),it=new sC(w,ot,oe),K=new mC(O,be,oe,pt),Pt=new lR(O,Vt,be),ne=new xR(O,Vt,be),be.programs=ut.programs,w.capabilities=oe,w.extensions=Vt,w.properties=T,w.renderLists=N,w.shadowMap=it,w.state=pt,w.info=be}vt(),M!==$n&&(A=new bR(M,n.width,n.height,a,s));const dt=new dC(w,O);this.xr=dt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=Vt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Vt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return wt},this.setPixelRatio=function(E){E!==void 0&&(wt=E,this.setSize(Gt,qt,!1))},this.getSize=function(E){return E.set(Gt,qt)},this.setSize=function(E,B,X=!0){if(dt.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}Gt=E,qt=B,n.width=Math.floor(E*wt),n.height=Math.floor(B*wt),X===!0&&(n.style.width=E+"px",n.style.height=B+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(Gt*wt,qt*wt).floor()},this.setDrawingBufferSize=function(E,B,X){Gt=E,qt=B,wt=X,n.width=Math.floor(E*X),n.height=Math.floor(B*X),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(M===$n){ee("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){Dt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(W)},this.getViewport=function(E){return E.copy(rt)},this.setViewport=function(E,B,X,V){E.isVector4?rt.set(E.x,E.y,E.z,E.w):rt.set(E,B,X,V),pt.viewport(W.copy(rt).multiplyScalar(wt).round())},this.getScissor=function(E){return E.copy(Rt)},this.setScissor=function(E,B,X,V){E.isVector4?Rt.set(E.x,E.y,E.z,E.w):Rt.set(E,B,X,V),pt.scissor(Q.copy(Rt).multiplyScalar(wt).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(E){pt.setScissorTest(Ut=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){ft=E},this.getClearColor=function(E){return E.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,X=!0){let V=0;if(E){let k=!1;if(I!==null){const _t=I.texture.format;k=g.has(_t)}if(k){const _t=I.texture.type,Mt=f.has(_t),gt=st.getClearColor(),Et=st.getClearAlpha(),Tt=gt.r,zt=gt.g,Wt=gt.b;Mt?(m[0]=Tt,m[1]=zt,m[2]=Wt,m[3]=Et,O.clearBufferuiv(O.COLOR,0,m)):(v[0]=Tt,v[1]=zt,v[2]=Wt,v[3]=Et,O.clearBufferiv(O.COLOR,0,v))}else V|=O.COLOR_BUFFER_BIT}B&&(V|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),G=E},this.dispose=function(){n.removeEventListener("webglcontextlost",nt,!1),n.removeEventListener("webglcontextrestored",bt,!1),n.removeEventListener("webglcontextcreationerror",Ft,!1),st.dispose(),N.dispose(),tt.dispose(),T.dispose(),H.dispose(),ot.dispose(),ct.dispose(),K.dispose(),ut.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",dm),dt.removeEventListener("sessionend",hm),ja.stop()};function nt(E){E.preventDefault(),i0("WebGLRenderer: Context Lost."),D=!0}function bt(){i0("WebGLRenderer: Context Restored."),D=!1;const E=be.autoReset,B=it.enabled,X=it.autoUpdate,V=it.needsUpdate,k=it.type;vt(),be.autoReset=E,it.enabled=B,it.autoUpdate=X,it.needsUpdate=V,it.type=k}function Ft(E){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Oe(E){const B=E.target;B.removeEventListener("dispose",Oe),he(B)}function he(E){Ui(E),T.remove(E)}function Ui(E){const B=T.get(E).programs;B!==void 0&&(B.forEach(function(X){ut.releaseProgram(X)}),E.isShaderMaterial&&ut.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,X,V,k,_t){B===null&&(B=De);const Mt=k.isMesh&&k.matrixWorld.determinant()<0,gt=ey(E,B,X,V,k);pt.setMaterial(V,Mt);let Et=X.index,Tt=1;if(V.wireframe===!0){if(Et=et.getWireframeAttribute(X),Et===void 0)return;Tt=2}const zt=X.drawRange,Wt=X.attributes.position;let At=zt.start*Tt,pe=(zt.start+zt.count)*Tt;_t!==null&&(At=Math.max(At,_t.start*Tt),pe=Math.min(pe,(_t.start+_t.count)*Tt)),Et!==null?(At=Math.max(At,0),pe=Math.min(pe,Et.count)):Wt!=null&&(At=Math.max(At,0),pe=Math.min(pe,Wt.count));const Pe=pe-At;if(Pe<0||Pe===1/0)return;ct.setup(k,V,gt,X,Et);let Ue,_e=Pt;if(Et!==null&&(Ue=Z.get(Et),_e=ne,_e.setIndex(Ue)),k.isMesh)V.wireframe===!0?(pt.setLineWidth(V.wireframeLinewidth*dn()),_e.setMode(O.LINES)):_e.setMode(O.TRIANGLES);else if(k.isLine){let ln=V.linewidth;ln===void 0&&(ln=1),pt.setLineWidth(ln*dn()),k.isLineSegments?_e.setMode(O.LINES):k.isLineLoop?_e.setMode(O.LINE_LOOP):_e.setMode(O.LINE_STRIP)}else k.isPoints?_e.setMode(O.POINTS):k.isSprite&&_e.setMode(O.TRIANGLES);if(k.isBatchedMesh)if(Vt.get("WEBGL_multi_draw"))_e.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const ln=k._multiDrawStarts,St=k._multiDrawCounts,Cn=k._multiDrawCount,te=Et?Z.get(Et).bytesPerElement:1,Vn=T.get(V).currentProgram.getUniforms();for(let hi=0;hi<Cn;hi++)Vn.setValue(O,"_gl_DrawID",hi),_e.render(ln[hi]/te,St[hi])}else if(k.isInstancedMesh)_e.renderInstances(At,Pe,k.count);else if(X.isInstancedBufferGeometry){const ln=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,St=Math.min(X.instanceCount,ln);_e.renderInstances(At,Pe,St)}else _e.render(At,Pe)};function di(E,B,X){E.transparent===!0&&E.side===Xi&&E.forceSinglePass===!1?(E.side=bn,E.needsUpdate=!0,ll(E,B,X),E.side=Xa,E.needsUpdate=!0,ll(E,B,X),E.side=Xi):ll(E,B,X)}this.compile=function(E,B,X=null){X===null&&(X=E),b=tt.get(X),b.init(B),x.push(b),X.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),E!==X&&E.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),b.setupLights();const V=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const _t=k.material;if(_t)if(Array.isArray(_t))for(let Mt=0;Mt<_t.length;Mt++){const gt=_t[Mt];di(gt,X,k),V.add(gt)}else di(_t,X,k),V.add(_t)}),b=x.pop(),V},this.compileAsync=function(E,B,X=null){const V=this.compile(E,B,X);return new Promise(k=>{function _t(){if(V.forEach(function(Mt){T.get(Mt).currentProgram.isReady()&&V.delete(Mt)}),V.size===0){k(E);return}setTimeout(_t,10)}Vt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Du=null;function $S(E){Du&&Du(E)}function dm(){ja.stop()}function hm(){ja.start()}const ja=new FS;ja.setAnimationLoop($S),typeof self<"u"&&ja.setContext(self),this.setAnimationLoop=function(E){Du=E,dt.setAnimationLoop(E),E===null?ja.stop():ja.start()},dt.addEventListener("sessionstart",dm),dt.addEventListener("sessionend",hm),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;G!==null&&G.renderStart(E,B);const X=dt.enabled===!0&&dt.isPresenting===!0,V=A!==null&&(I===null||X)&&A.begin(w,I);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(B),B=dt.getCamera()),E.isScene===!0&&E.onBeforeRender(w,E,B,I),b=tt.get(E,x.length),b.init(B),b.state.textureUnits=S.getTextureUnits(),x.push(b),$t.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ct.setFromProjectionMatrix($t,yi,B.reversedDepth),Ot=this.localClippingEnabled,Se=lt.init(this.clippingPlanes,Ot),C=N.get(E,R.length),C.init(),R.push(C),dt.enabled===!0&&dt.isPresenting===!0){const Mt=w.xr.getDepthSensingMesh();Mt!==null&&Uu(Mt,B,-1/0,w.sortObjects)}Uu(E,B,0,w.sortObjects),C.finish(),w.sortObjects===!0&&C.sort($,ft),ye=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,ye&&st.addToRenderList(C,E),this.info.render.frame++,Se===!0&&lt.beginShadows();const k=b.state.shadowsArray;if(it.render(k,E,B),Se===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&A.hasRenderPass())===!1){const Mt=C.opaque,gt=C.transmissive;if(b.setupLights(),B.isArrayCamera){const Et=B.cameras;if(gt.length>0)for(let Tt=0,zt=Et.length;Tt<zt;Tt++){const Wt=Et[Tt];mm(Mt,gt,E,Wt)}ye&&st.render(E);for(let Tt=0,zt=Et.length;Tt<zt;Tt++){const Wt=Et[Tt];pm(C,E,Wt,Wt.viewport)}}else gt.length>0&&mm(Mt,gt,E,B),ye&&st.render(E),pm(C,E,B)}I!==null&&j===0&&(S.updateMultisampleRenderTarget(I),S.updateRenderTargetMipmap(I)),V&&A.end(w),E.isScene===!0&&E.onAfterRender(w,E,B),ct.resetDefaultState(),U=-1,P=null,x.pop(),x.length>0?(b=x[x.length-1],S.setTextureUnits(b.state.textureUnits),Se===!0&&lt.setGlobalState(w.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?C=R[R.length-1]:C=null,G!==null&&G.renderEnd()};function Uu(E,B,X,V){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLightProbeGrid)b.pushLightProbeGrid(E);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ct.intersectsSprite(E)){V&&Xt.setFromMatrixPosition(E.matrixWorld).applyMatrix4($t);const Mt=ot.update(E),gt=E.material;gt.visible&&C.push(E,Mt,gt,X,Xt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ct.intersectsObject(E))){const Mt=ot.update(E),gt=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Xt.copy(E.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Xt.copy(Mt.boundingSphere.center)),Xt.applyMatrix4(E.matrixWorld).applyMatrix4($t)),Array.isArray(gt)){const Et=Mt.groups;for(let Tt=0,zt=Et.length;Tt<zt;Tt++){const Wt=Et[Tt],At=gt[Wt.materialIndex];At&&At.visible&&C.push(E,Mt,At,X,Xt.z,Wt)}}else gt.visible&&C.push(E,Mt,gt,X,Xt.z,null)}}const _t=E.children;for(let Mt=0,gt=_t.length;Mt<gt;Mt++)Uu(_t[Mt],B,X,V)}function pm(E,B,X,V){const{opaque:k,transmissive:_t,transparent:Mt}=E;b.setupLightsView(X),Se===!0&&lt.setGlobalState(w.clippingPlanes,X),V&&pt.viewport(W.copy(V)),k.length>0&&ol(k,B,X),_t.length>0&&ol(_t,B,X),Mt.length>0&&ol(Mt,B,X),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function mm(E,B,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){const At=Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new bi(1,1,{generateMipmaps:!0,type:At?sa:$n,minFilter:os,samples:Math.max(4,oe.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace})}const _t=b.state.transmissionRenderTarget[V.id],Mt=V.viewport||W;_t.setSize(Mt.z*w.transmissionResolutionScale,Mt.w*w.transmissionResolutionScale);const gt=w.getRenderTarget(),Et=w.getActiveCubeFace(),Tt=w.getActiveMipmapLevel();w.setRenderTarget(_t),w.getClearColor(xt),yt=w.getClearAlpha(),yt<1&&w.setClearColor(16777215,.5),w.clear(),ye&&st.render(X);const zt=w.toneMapping;w.toneMapping=Ei;const Wt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),Se===!0&&lt.setGlobalState(w.clippingPlanes,V),ol(E,X,V),S.updateMultisampleRenderTarget(_t),S.updateRenderTargetMipmap(_t),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let pe=0,Pe=B.length;pe<Pe;pe++){const Ue=B[pe],{object:_e,geometry:ln,material:St,group:Cn}=Ue;if(St.side===Xi&&_e.layers.test(V.layers)){const te=St.side;St.side=bn,St.needsUpdate=!0,gm(_e,X,V,ln,St,Cn),St.side=te,St.needsUpdate=!0,At=!0}}At===!0&&(S.updateMultisampleRenderTarget(_t),S.updateRenderTargetMipmap(_t))}w.setRenderTarget(gt,Et,Tt),w.setClearColor(xt,yt),Wt!==void 0&&(V.viewport=Wt),w.toneMapping=zt}function ol(E,B,X){const V=B.isScene===!0?B.overrideMaterial:null;for(let k=0,_t=E.length;k<_t;k++){const Mt=E[k],{object:gt,geometry:Et,group:Tt}=Mt;let zt=Mt.material;zt.allowOverride===!0&&V!==null&&(zt=V),gt.layers.test(X.layers)&&gm(gt,B,X,Et,zt,Tt)}}function gm(E,B,X,V,k,_t){E.onBeforeRender(w,B,X,V,k,_t),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(w,B,X,V,E,_t),k.transparent===!0&&k.side===Xi&&k.forceSinglePass===!1?(k.side=bn,k.needsUpdate=!0,w.renderBufferDirect(X,B,V,k,E,_t),k.side=Xa,k.needsUpdate=!0,w.renderBufferDirect(X,B,V,k,E,_t),k.side=Xi):w.renderBufferDirect(X,B,V,k,E,_t),E.onAfterRender(w,B,X,V,k,_t)}function ll(E,B,X){B.isScene!==!0&&(B=De);const V=T.get(E),k=b.state.lights,_t=b.state.shadowsArray,Mt=k.state.version,gt=ut.getParameters(E,k.state,_t,B,X,b.state.lightProbeGridArray),Et=ut.getProgramCacheKey(gt);let Tt=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,V.fog=B.fog;const zt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=H.get(E.envMap||V.environment,zt),V.envMapRotation=V.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Tt===void 0&&(E.addEventListener("dispose",Oe),Tt=new Map,V.programs=Tt);let Wt=Tt.get(Et);if(Wt!==void 0){if(V.currentProgram===Wt&&V.lightsStateVersion===Mt)return vm(E,gt),Wt}else gt.uniforms=ut.getUniforms(E),G!==null&&E.isNodeMaterial&&G.build(E,X,gt),E.onBeforeCompile(gt,w),Wt=ut.acquireProgram(gt,Et),Tt.set(Et,Wt),V.uniforms=gt.uniforms;const At=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(At.clippingPlanes=lt.uniform),vm(E,gt),V.needsLights=iy(E),V.lightsStateVersion=Mt,V.needsLights&&(At.ambientLightColor.value=k.state.ambient,At.lightProbe.value=k.state.probe,At.directionalLights.value=k.state.directional,At.directionalLightShadows.value=k.state.directionalShadow,At.spotLights.value=k.state.spot,At.spotLightShadows.value=k.state.spotShadow,At.rectAreaLights.value=k.state.rectArea,At.ltc_1.value=k.state.rectAreaLTC1,At.ltc_2.value=k.state.rectAreaLTC2,At.pointLights.value=k.state.point,At.pointLightShadows.value=k.state.pointShadow,At.hemisphereLights.value=k.state.hemi,At.directionalShadowMatrix.value=k.state.directionalShadowMatrix,At.spotLightMatrix.value=k.state.spotLightMatrix,At.spotLightMap.value=k.state.spotLightMap,At.pointShadowMatrix.value=k.state.pointShadowMatrix),V.lightProbeGrid=b.state.lightProbeGridArray.length>0,V.currentProgram=Wt,V.uniformsList=null,Wt}function _m(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=xc.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function vm(E,B){const X=T.get(E);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function ty(E,B){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(B.matrixWorld);for(let X=0,V=E.length;X<V;X++){const k=E[X];if(k.texture!==null&&k.boundingBox.containsPoint(y))return k}return null}function ey(E,B,X,V,k){B.isScene!==!0&&(B=De),S.resetTextureUnits();const _t=B.fog,Mt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?B.environment:null,gt=I===null?w.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Kt.workingColorSpace,Et=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Tt=H.get(V.envMap||Mt,Et),zt=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Wt=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),At=!!X.morphAttributes.position,pe=!!X.morphAttributes.normal,Pe=!!X.morphAttributes.color;let Ue=Ei;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ue=w.toneMapping);const _e=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ln=_e!==void 0?_e.length:0,St=T.get(V),Cn=b.state.lights;if(Se===!0&&(Ot===!0||E!==P)){const Me=E===P&&V.id===U;lt.setState(V,E,Me)}let te=!1;V.version===St.__version?(St.needsLights&&St.lightsStateVersion!==Cn.state.version||St.outputColorSpace!==gt||k.isBatchedMesh&&St.batching===!1||!k.isBatchedMesh&&St.batching===!0||k.isBatchedMesh&&St.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&St.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&St.instancing===!1||!k.isInstancedMesh&&St.instancing===!0||k.isSkinnedMesh&&St.skinning===!1||!k.isSkinnedMesh&&St.skinning===!0||k.isInstancedMesh&&St.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&St.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&St.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&St.instancingMorph===!1&&k.morphTexture!==null||St.envMap!==Tt||V.fog===!0&&St.fog!==_t||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==lt.numPlanes||St.numIntersection!==lt.numIntersection)||St.vertexAlphas!==zt||St.vertexTangents!==Wt||St.morphTargets!==At||St.morphNormals!==pe||St.morphColors!==Pe||St.toneMapping!==Ue||St.morphTargetsCount!==ln||!!St.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(te=!0):(te=!0,St.__version=V.version);let Vn=St.currentProgram;te===!0&&(Vn=ll(V,B,k),G&&V.isNodeMaterial&&G.onUpdateProgram(V,Vn,St));let hi=!1,la=!1,ws=!1;const ve=Vn.getUniforms(),Ie=St.uniforms;if(pt.useProgram(Vn.program)&&(hi=!0,la=!0,ws=!0),V.id!==U&&(U=V.id,la=!0),St.needsLights){const Me=ty(b.state.lightProbeGridArray,k);St.lightProbeGrid!==Me&&(St.lightProbeGrid=Me,la=!0)}if(hi||P!==E){pt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ve.setValue(O,"projectionMatrix",E.projectionMatrix),ve.setValue(O,"viewMatrix",E.matrixWorldInverse);const ua=ve.map.cameraPosition;ua!==void 0&&ua.setValue(O,re.setFromMatrixPosition(E.matrixWorld)),oe.logarithmicDepthBuffer&&ve.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ve.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),P!==E&&(P=E,la=!0,ws=!0)}if(St.needsLights&&(Cn.state.directionalShadowMap.length>0&&ve.setValue(O,"directionalShadowMap",Cn.state.directionalShadowMap,S),Cn.state.spotShadowMap.length>0&&ve.setValue(O,"spotShadowMap",Cn.state.spotShadowMap,S),Cn.state.pointShadowMap.length>0&&ve.setValue(O,"pointShadowMap",Cn.state.pointShadowMap,S)),k.isSkinnedMesh){ve.setOptional(O,k,"bindMatrix"),ve.setOptional(O,k,"bindMatrixInverse");const Me=k.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),ve.setValue(O,"boneTexture",Me.boneTexture,S))}k.isBatchedMesh&&(ve.setOptional(O,k,"batchingTexture"),ve.setValue(O,"batchingTexture",k._matricesTexture,S),ve.setOptional(O,k,"batchingIdTexture"),ve.setValue(O,"batchingIdTexture",k._indirectTexture,S),ve.setOptional(O,k,"batchingColorTexture"),k._colorsTexture!==null&&ve.setValue(O,"batchingColorTexture",k._colorsTexture,S));const ca=X.morphAttributes;if((ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0)&&Nt.update(k,X,Vn),(la||St.receiveShadow!==k.receiveShadow)&&(St.receiveShadow=k.receiveShadow,ve.setValue(O,"receiveShadow",k.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&B.environment!==null&&(Ie.envMapIntensity.value=B.environmentIntensity),Ie.dfgLUT!==void 0&&(Ie.dfgLUT.value=_C()),la){if(ve.setValue(O,"toneMappingExposure",w.toneMappingExposure),St.needsLights&&ny(Ie,ws),_t&&V.fog===!0&&q.refreshFogUniforms(Ie,_t),q.refreshMaterialUniforms(Ie,V,wt,qt,b.state.transmissionRenderTarget[E.id]),St.needsLights&&St.lightProbeGrid){const Me=St.lightProbeGrid;Ie.probesSH.value=Me.texture,Ie.probesMin.value.copy(Me.boundingBox.min),Ie.probesMax.value.copy(Me.boundingBox.max),Ie.probesResolution.value.copy(Me.resolution)}xc.upload(O,_m(St),Ie,S)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(xc.upload(O,_m(St),Ie,S),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ve.setValue(O,"center",k.center),ve.setValue(O,"modelViewMatrix",k.modelViewMatrix),ve.setValue(O,"normalMatrix",k.normalMatrix),ve.setValue(O,"modelMatrix",k.matrixWorld),V.uniformsGroups!==void 0){const Me=V.uniformsGroups;for(let ua=0,Ds=Me.length;ua<Ds;ua++){const xm=Me[ua];K.update(xm,Vn),K.bind(xm,Vn)}}return Vn}function ny(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function iy(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,B,X){const V=T.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),T.get(E.texture).__webglTexture=B,T.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const X=T.get(E);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};const ay=O.createFramebuffer();this.setRenderTarget=function(E,B=0,X=0){I=E,Y=B,j=X;let V=null,k=!1,_t=!1;if(E){const gt=T.get(E);if(gt.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(O.FRAMEBUFFER,gt.__webglFramebuffer),W.copy(E.viewport),Q.copy(E.scissor),at=E.scissorTest,pt.viewport(W),pt.scissor(Q),pt.setScissorTest(at),U=-1;return}else if(gt.__webglFramebuffer===void 0)S.setupRenderTarget(E);else if(gt.__hasExternalTextures)S.rebindTextures(E,T.get(E.texture).__webglTexture,T.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const zt=E.depthTexture;if(gt.__boundDepthTexture!==zt){if(zt!==null&&T.has(zt)&&(E.width!==zt.image.width||E.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(E)}}const Et=E.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(_t=!0);const Tt=T.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Tt[B])?V=Tt[B][X]:V=Tt[B],k=!0):E.samples>0&&S.useMultisampledRTT(E)===!1?V=T.get(E).__webglMultisampledFramebuffer:Array.isArray(Tt)?V=Tt[X]:V=Tt,W.copy(E.viewport),Q.copy(E.scissor),at=E.scissorTest}else W.copy(rt).multiplyScalar(wt).floor(),Q.copy(Rt).multiplyScalar(wt).floor(),at=Ut;if(X!==0&&(V=ay),pt.bindFramebuffer(O.FRAMEBUFFER,V)&&pt.drawBuffers(E,V),pt.viewport(W),pt.scissor(Q),pt.setScissorTest(at),k){const gt=T.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,gt.__webglTexture,X)}else if(_t){const gt=B;for(let Et=0;Et<E.textures.length;Et++){const Tt=T.get(E.textures[Et]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Et,Tt.__webglTexture,X,gt)}}else if(E!==null&&X!==0){const gt=T.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,gt.__webglTexture,X)}U=-1},this.readRenderTargetPixels=function(E,B,X,V,k,_t,Mt,gt=0){if(!(E&&E.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=T.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(Et=Et[Mt]),Et){pt.bindFramebuffer(O.FRAMEBUFFER,Et);try{const Tt=E.textures[gt],zt=Tt.format,Wt=Tt.type;if(E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+gt),!oe.textureFormatReadable(zt)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(Wt)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-V&&X>=0&&X<=E.height-k&&O.readPixels(B,X,V,k,L.convert(zt),L.convert(Wt),_t)}finally{const Tt=I!==null?T.get(I).__webglFramebuffer:null;pt.bindFramebuffer(O.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(E,B,X,V,k,_t,Mt,gt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=T.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(Et=Et[Mt]),Et)if(B>=0&&B<=E.width-V&&X>=0&&X<=E.height-k){pt.bindFramebuffer(O.FRAMEBUFFER,Et);const Tt=E.textures[gt],zt=Tt.format,Wt=Tt.type;if(E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+gt),!oe.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const At=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,At),O.bufferData(O.PIXEL_PACK_BUFFER,_t.byteLength,O.STREAM_READ),O.readPixels(B,X,V,k,L.convert(zt),L.convert(Wt),0);const pe=I!==null?T.get(I).__webglFramebuffer:null;pt.bindFramebuffer(O.FRAMEBUFFER,pe);const Pe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Fb(O,Pe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,At),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,_t),O.deleteBuffer(At),O.deleteSync(Pe),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,X=0){const V=Math.pow(2,-X),k=Math.floor(E.image.width*V),_t=Math.floor(E.image.height*V),Mt=B!==null?B.x:0,gt=B!==null?B.y:0;S.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,Mt,gt,k,_t),pt.unbindTexture()};const sy=O.createFramebuffer(),ry=O.createFramebuffer();this.copyTextureToTexture=function(E,B,X=null,V=null,k=0,_t=0){let Mt,gt,Et,Tt,zt,Wt,At,pe,Pe;const Ue=E.isCompressedTexture?E.mipmaps[_t]:E.image;if(X!==null)Mt=X.max.x-X.min.x,gt=X.max.y-X.min.y,Et=X.isBox3?X.max.z-X.min.z:1,Tt=X.min.x,zt=X.min.y,Wt=X.isBox3?X.min.z:0;else{const Ie=Math.pow(2,-k);Mt=Math.floor(Ue.width*Ie),gt=Math.floor(Ue.height*Ie),E.isDataArrayTexture?Et=Ue.depth:E.isData3DTexture?Et=Math.floor(Ue.depth*Ie):Et=1,Tt=0,zt=0,Wt=0}V!==null?(At=V.x,pe=V.y,Pe=V.z):(At=0,pe=0,Pe=0);const _e=L.convert(B.format),ln=L.convert(B.type);let St;B.isData3DTexture?(S.setTexture3D(B,0),St=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(S.setTexture2DArray(B,0),St=O.TEXTURE_2D_ARRAY):(S.setTexture2D(B,0),St=O.TEXTURE_2D),pt.activeTexture(O.TEXTURE0),pt.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),pt.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),pt.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);const Cn=pt.getParameter(O.UNPACK_ROW_LENGTH),te=pt.getParameter(O.UNPACK_IMAGE_HEIGHT),Vn=pt.getParameter(O.UNPACK_SKIP_PIXELS),hi=pt.getParameter(O.UNPACK_SKIP_ROWS),la=pt.getParameter(O.UNPACK_SKIP_IMAGES);pt.pixelStorei(O.UNPACK_ROW_LENGTH,Ue.width),pt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ue.height),pt.pixelStorei(O.UNPACK_SKIP_PIXELS,Tt),pt.pixelStorei(O.UNPACK_SKIP_ROWS,zt),pt.pixelStorei(O.UNPACK_SKIP_IMAGES,Wt);const ws=E.isDataArrayTexture||E.isData3DTexture,ve=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const Ie=T.get(E),ca=T.get(B),Me=T.get(Ie.__renderTarget),ua=T.get(ca.__renderTarget);pt.bindFramebuffer(O.READ_FRAMEBUFFER,Me.__webglFramebuffer),pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,ua.__webglFramebuffer);for(let Ds=0;Ds<Et;Ds++)ws&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,T.get(E).__webglTexture,k,Wt+Ds),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,T.get(B).__webglTexture,_t,Pe+Ds)),O.blitFramebuffer(Tt,zt,Mt,gt,At,pe,Mt,gt,O.DEPTH_BUFFER_BIT,O.NEAREST);pt.bindFramebuffer(O.READ_FRAMEBUFFER,null),pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(k!==0||E.isRenderTargetTexture||T.has(E)){const Ie=T.get(E),ca=T.get(B);pt.bindFramebuffer(O.READ_FRAMEBUFFER,sy),pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,ry);for(let Me=0;Me<Et;Me++)ws?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ie.__webglTexture,k,Wt+Me):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ie.__webglTexture,k),ve?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ca.__webglTexture,_t,Pe+Me):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ca.__webglTexture,_t),k!==0?O.blitFramebuffer(Tt,zt,Mt,gt,At,pe,Mt,gt,O.COLOR_BUFFER_BIT,O.NEAREST):ve?O.copyTexSubImage3D(St,_t,At,pe,Pe+Me,Tt,zt,Mt,gt):O.copyTexSubImage2D(St,_t,At,pe,Tt,zt,Mt,gt);pt.bindFramebuffer(O.READ_FRAMEBUFFER,null),pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ve?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(St,_t,At,pe,Pe,Mt,gt,Et,_e,ln,Ue.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(St,_t,At,pe,Pe,Mt,gt,Et,_e,Ue.data):O.texSubImage3D(St,_t,At,pe,Pe,Mt,gt,Et,_e,ln,Ue):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,_t,At,pe,Mt,gt,_e,ln,Ue.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,_t,At,pe,Ue.width,Ue.height,_e,Ue.data):O.texSubImage2D(O.TEXTURE_2D,_t,At,pe,Mt,gt,_e,ln,Ue);pt.pixelStorei(O.UNPACK_ROW_LENGTH,Cn),pt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,te),pt.pixelStorei(O.UNPACK_SKIP_PIXELS,Vn),pt.pixelStorei(O.UNPACK_SKIP_ROWS,hi),pt.pixelStorei(O.UNPACK_SKIP_IMAGES,la),_t===0&&B.generateMipmaps&&O.generateMipmap(St),pt.unbindTexture()},this.initRenderTarget=function(E){T.get(E).__webglFramebuffer===void 0&&S.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),pt.unbindTexture()},this.resetState=function(){Y=0,j=0,I=null,pt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Kt._getUnpackColorSpace()}}function qS(){const e=ht.useRef(null);return ht.useEffect(()=>{const t=e.current;if(!t)return;const n=new tT,i=new Zn(45,window.innerWidth/window.innerHeight,.1,100);i.position.z=4.2;const a=new vC({alpha:!0,antialias:!0});a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setSize(window.innerWidth,window.innerHeight),a.setClearColor(0,0),t.appendChild(a.domElement);const s=new nm(.95,1),r=new fT(new hT(s),new NS({color:16722474,transparent:!0,opacity:.55}));n.add(r);const o=[];for(let h=0;h<3;h++){const u=new Ri(new im(1.35+h*.28,.012,8,96),new tm({color:16722474,transparent:!0,opacity:.22-h*.05}));u.rotation.x=Math.PI/2+h*.18,u.rotation.y=h*.4,n.add(u),o.push(u)}let l=0;const c=()=>{r.rotation.x+=.0032,r.rotation.y+=.0048,o.forEach((h,u)=>{h.rotation.z+=.0018+u*6e-4}),a.render(n,i),l=requestAnimationFrame(c)};c();const d=()=>{const h=window.innerWidth,u=window.innerHeight;i.aspect=h/u,i.updateProjectionMatrix(),a.setSize(h,u)};return window.addEventListener("resize",d),()=>{cancelAnimationFrame(l),window.removeEventListener("resize",d),s.dispose(),r.geometry.dispose(),r.material.dispose(),o.forEach(h=>{h.geometry.dispose(),h.material.dispose()}),a.dispose(),t.removeChild(a.domElement)}},[]),F.jsx("div",{ref:e,className:"jerv-canvas","aria-hidden":"true"})}function xC(e){const t=new Worker(new URL("/GROVEE-STDIO/assets/sd.worker-BwefFosn.js",import.meta.url),{type:"module"});return t.addEventListener("message",n=>{e.onMessage(n.data)}),t}function io(e,t){e.postMessage(t)}const Q0=["What will you create today?","Describe your vision.","Turn words into images.","What scene do you imagine?","Let's bring your idea to life.","Create something unique.","Paint with prompts."],am=[{id:"giant-moon-ocean",icon:"🌕",labelEn:"Giant moon",promptEn:"A giant moon above the ocean",labelHe:"ירח ענק",promptHe:"ירח ענק מעל האוקיינוס"},{id:"lighthouse-sunset",icon:"🗼",labelEn:"Lighthouse sunset",promptEn:"A lonely lighthouse at sunset",labelHe:"מגדלור בשקיעה",promptHe:"מגדלור בודד בשקיעה"},{id:"castle-floating-island",icon:"🏰",labelEn:"Floating island castle",promptEn:"A castle on a floating island",labelHe:"טירה על אי",promptHe:"טירה על אי מרחף"},{id:"giant-whale-sky",icon:"🐋",labelEn:"Sky whale",promptEn:"A giant whale in the sky",labelHe:"לוויתן בשמיים",promptHe:"לוויתן ענק בשמיים"},{id:"train-snowy-mountains",icon:"🚂",labelEn:"Snowy mountain train",promptEn:"A train crossing snowy mountains",labelHe:"רכבת בהרים",promptHe:"רכבת חוצה הרים מושלגים"},{id:"glowing-city-night",icon:"🌃",labelEn:"Glowing city",promptEn:"A glowing city at night",labelHe:"עיר זוהרת",promptHe:"עיר זוהרת בלילה"},{id:"spaceship-earth",icon:"🚀",labelEn:"Spaceship over Earth",promptEn:"A spaceship above Earth",labelHe:"חללית מעל כדור הארץ",promptHe:"חללית מעל כדור הארץ"},{id:"dragon-castle",icon:"🐉",labelEn:"Dragon over castle",promptEn:"A dragon flying over a castle",labelHe:"דרקון מעל טירה",promptHe:"דרקון עף מעל טירה"},{id:"futuristic-city-sunrise",icon:"🌅",labelEn:"Futuristic sunrise",promptEn:"A futuristic city at sunrise",labelHe:"עיר עתידנית",promptHe:"עיר עתידנית בזריחה"},{id:"jungle-waterfall",icon:"💧",labelEn:"Jungle waterfall",promptEn:"A waterfall in a hidden jungle",labelHe:"מפל בג'ונגל",promptHe:"מפל בג'ונגל נסתר"},{id:"giant-tree-clouds",icon:"🌳",labelEn:"Tree in clouds",promptEn:"A giant tree in the clouds",labelHe:"עץ בעננים",promptHe:"עץ ענק בעננים"},{id:"storm-ship",icon:"⛵",labelEn:"Storm ship",promptEn:"A sailing ship in a storm",labelHe:"ספינה בסערה",promptHe:"ספינת מפרש בסערה"},{id:"forest-portal",icon:"🌀",labelEn:"Forest portal",promptEn:"A mysterious portal in the forest",labelHe:"פורטל ביער",promptHe:"פורטל מסתורי ביער"},{id:"desert-robot",icon:"🤖",labelEn:"Desert robot",promptEn:"A robot walking in the desert",labelHe:"רובוט במדבר",promptHe:"רובוט הולך במדבר"},{id:"neon-street-rain",icon:"🌆",labelEn:"Neon after rain",promptEn:"A neon street after rain",labelHe:"רחוב ניאון",promptHe:"רחוב ניאון אחרי גשם"},{id:"cliff-house",icon:"🏠",labelEn:"Cliff house",promptEn:"A house on a mountain cliff",labelHe:"בית על צוק",promptHe:"בית על צוק הר"},{id:"crystal-cave",icon:"💎",labelEn:"Crystal cave",promptEn:"A crystal cave underground",labelHe:"מערת קריסטלים",promptHe:"מערת קריסטלים מתחת לאדמה"},{id:"giant-planet-sky",icon:"🪐",labelEn:"Giant planet",promptEn:"A giant planet in the sky",labelHe:"כוכב ענק",promptHe:"כוכב לכת ענק בשמיים"},{id:"peaceful-lake-dawn",icon:"🏞️",labelEn:"Lake at dawn",promptEn:"A peaceful lake at dawn",labelHe:"אגם בשחר",promptHe:"אגם שקט בשחר"},{id:"flying-island-clouds",icon:"☁️",labelEn:"Flying island",promptEn:"A flying island above the clouds",labelHe:"אי מעופף",promptHe:"אי מעופף מעל העננים"}];am.map(e=>sm(e,"en"));function sm(e,t){return t==="he"?{id:e.id,icon:e.icon,label:e.labelHe,prompt:e.promptHe}:{id:e.id,icon:e.icon,label:e.labelEn,prompt:e.promptEn}}function J0(e="en"){return am.map(t=>sm(t,e))}function SC(e,t){const n=am.find(i=>i.id===e);return n?sm(n,t):void 0}const yC=11e3,YS=90,MC=520,EC=620;function bC(e=3){return MC+YS*Math.max(0,e-1)}function TC(e=3){return EC+YS*Math.max(0,e-1)}function zh(e=3,t=[],n="en"){const i=new Set(t);let a=J0(n).filter(o=>!i.has(o.id));a.length<e&&(a=J0(n));const s=[],r=[...a];for(;s.length<e&&r.length>0;){const o=Math.floor(Math.random()*r.length);s.push(r[o]),r.splice(o,1)}return s}function AC(e=Q0,t="en"){const n=e.length?e:Q0;return{headline:n[Math.floor(Math.random()*n.length)],suggestions:zh(3,[],t)}}const RC=!0,CC="sd15",Cs={sd15:{hfId:"ehristoforu/stable-diffusion-v1-5-tiny",estimatedBytes:2064947141,label:"Stable Diffusion 1.5",shortLabel:"SD 1.5",resolution:"512×512"}};function wC(e){return Cs.sd15.estimatedBytes}function DC(e,t){return e==="start"||e==="loading"&&t===0}function UC(e,t){return e==="loading"&&t.length>0}const Xo="blurry, low quality, distorted, deformed, ugly, bad anatomy, extra limbs, watermark, text, logo, cartoon, sketch, flat colors",NC={photoreal:"photorealistic, professional photography, natural lighting, high detail, sharp focus, realistic textures",portrait:"cinematic portrait, soft studio lighting, shallow depth of field, natural skin texture, expressive eyes",product:"commercial product photography, studio lighting, clean background, accurate shadows, crisp details",landscape:"landscape photography, golden hour light, atmospheric depth, vivid natural colors, wide composition",anime:"anime illustration, clean line art, vibrant colors, detailed background, studio ghibli inspired"},LC={photoreal:"cartoon, illustration, painting, 3d render, plastic skin, oversaturated",portrait:"bad face, asymmetrical eyes, crossed eyes, extra teeth, plastic skin, deformed hands",product:"cluttered background, wrong shadows, floating object, messy composition",landscape:"flat lighting, dull colors, horizon tilt, oversharpened",anime:"3d render, realistic photo, western cartoon, photorealistic"},OC="photorealistic, high detail, sharp focus, professional quality, natural lighting";function PC(e){return e.trim().split(/\s+/).filter(Boolean).length<8||e.trim().length<40}function IC(e,t,n="photoreal"){const i=e.trim();if(!i)return{prompt:"",negativePrompt:""};const a=[i];n!=="none"?a.push(NC[n]):PC(i)&&a.push(OC);const s=[];return t.trim()&&s.push(t.trim()),n!=="none"&&s.push(LC[n]),{prompt:a.join(", "),negativePrompt:s.join(", ")}}function BC(e,t,n){return IC(e,n,t.style)}const FC=/[\u0590-\u05FF]/;function zC(e){return FC.test(e)}async function $0(e){const t=e.trim();if(!t||!zC(t))return t;try{const n=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(t)}`,i=await fetch(n);return i.ok&&((await i.json())[0]??[]).map(r=>(r==null?void 0:r[0])??"").join("").trim()||t}catch{return t}}async function HC(e,t){const[n,i]=await Promise.all([$0(e),$0(t)]);return{positive:n,negative:i}}const t_="A stunning princess from Kabul in red and white traditional clothing, blue eyes, brown hair, soft natural lighting, photorealistic portrait, high detail, sharp focus",Kl={numInferenceSteps:20,guidanceScale:7.5,height:512,width:512},Ro={guidanceScale:Kl.guidanceScale,numInferenceSteps:Kl.numInferenceSteps,height:Kl.height,width:Kl.width,style:"photoreal"},fo="janusgrove-settings-",Hh="janusgrove-negative-prompt",GC=[`${fo}sd15`,`${fo}sana`,`${fo}flux`,`${fo}janus`];function jS(e){return`${fo}${e}`}function Ql(e,t,n){return Math.min(n,Math.max(t,e))}function VC(){if(typeof localStorage>"u")return Xo;for(const e of GC)try{const t=localStorage.getItem(e);if(!t)continue;const n=JSON.parse(t);if(typeof n.negativePrompt=="string")return n.negativePrompt}catch{}return Xo}function kC(){if(typeof localStorage>"u")return Xo;try{const e=localStorage.getItem(Hh);if(e!==null)return e;const t=VC();return localStorage.setItem(Hh,t),t}catch{return Xo}}function XC(e){typeof localStorage>"u"||localStorage.setItem(Hh,e)}function ZS(e){const t=Ro;if(!e)return{...t};const n=Ql(Math.round(Number(e.height??t.height)),256,768),i=Ql(Math.round(Number(e.width??t.width)),256,768);return{guidanceScale:Ql(Number(e.guidanceScale??t.guidanceScale),1,20),numInferenceSteps:Ql(Math.round(Number(e.numInferenceSteps??t.numInferenceSteps)),5,50),height:n-n%64,width:i-i%64,style:e.style??t.style}}function Kf(e){if(typeof localStorage>"u")return{...Ro};try{const t=localStorage.getItem(jS(e));return t?ZS(JSON.parse(t)):{...Ro}}catch{return{...Ro}}}function WC(e,t){typeof localStorage>"u"||localStorage.setItem(jS(e),JSON.stringify(ZS(t)))}function qC(e){return{numInferenceSteps:e.numInferenceSteps,guidanceScale:e.guidanceScale,height:e.height,width:e.width}}function YC(e){return`CFG ${e.guidanceScale.toFixed(1)} · ${e.numInferenceSteps} steps`}const rm="GROVEE STDIO",jC="grovee-stdio",KS="grovee-stdio-locale",ZC={he:{app:{tagline:"SD 1.5 // מנוע דפדפן",mark:"GE"},intro:{typewriter:["מערכת מוכנה להפעלה...","טוען מנוע יצירת תמונות...","אני ממתין להוראותיך.","SD 1.5 · WebGPU · ללא התקנה"],webgpuWarn:"WebGPU לא זוהה — WASM עלול להיות איטי.",modelMeta:"512×512 · WebGPU · נשמר ב-cache אחרי טעינה ראשונה",initialize:"אתחול מודל",standby:"> המתנה",firstLoadNote:"הכל רץ בדפדפן — ללא התקנה. טעינה ראשונה בלבד (~2GB ל-cache). ביקור חוזר: שניות."},topBar:{browserStudio:"סטודיו דפדפן",webgpuOn:"WebGPU",webgpuOff:"WASM",langHe:"עב",langEn:"EN"},studio:{memoryOk:"זיכרון",model:"מודל",enterPrompt:"הזן תיאור",promptPlaceholder:"תיאור תמונה…",generate:"יצירה",stop:"עצור",settings:"הגדרות",generating:"מייצר…",scale:"גודל",sdUnavailable:"SD לא זמין",quickPrompts:"הצעות מהירות",headlines:["מה תיצור היום?","תאר את החזון שלך.","הפוך מילים לתמונות.","איזה סצנה אתה מדמיין?","בוא נהפוך רעיון למציאות.","צור משהו ייחודי.","צייר עם מילים."]},settings:{title:"Stable Diffusion 1.5",subtitle:"הגדרות יצירה",close:"סגור הגדרות",modelId:"מזהה מודל",device:"מכשיר",resolution:"רזולוציה",cfg:"Guidance scale (CFG)",steps:"שלבי הסקה",stepsHint:"5–50 שלבים (מתוך לוח זמנים SD 1.5)",negativeNote:"SD 1.5 משתמש ב-negative_prompt נפרד.",stylePreset:"סגנון",negativePrompt:"פרומפט שלילי",negativeHint:"משותף לכל היצירות. נקה לביטול מותאם. סגנון עשוי להוסיף מונחים אלא אם נבחר None.",negativePlaceholder:"מונחים שליליים אופציונליים…",clearNegative:"נקה שלילי",resetNegative:"איפוס לברירת מחדל",resetAll:"איפוס הכל לברירת מחדל",styles:{photoreal:"פוטו",none:"ללא",portrait:"דיוקן",landscape:"נוף",product:"מוצר",anime:"אנימה"}},gallery:{title:"גלריית פלט",save:"שמור",copy:"העתק",rerun:"שוב",del:"מחק",ariaLabel:"תמונות שנוצרו"},generating:{title:"מעבד",steps:"שלבים"},status:{readyToLoad:"מוכן לטעינת SD 1.5",preparingDownload:"מכין הורדה…",modelReady:"SD 1.5 מוכן — הסטודיו פתוח",generating:"מייצר…",imageReady:"התמונה מוכנה",stopped:"היצירה הופסקה",notLoaded:"SD 1.5 עדיין לא נטען",compiling:"SD 1.5: קומפילציה ב-WebGPU (2–5 דק׳)…",downloading:"SD 1.5: מוריד"},errors:{sdUnavailable:"SD 1.5 דורש WebGPU או WASM. השתמש ב-Chrome/Edge 113+ עם WebGPU."}},en:{app:{tagline:"SD 1.5 // BROWSER ENGINE",mark:"GE"},intro:{typewriter:["System ready for initialization...","Loading image generation engine...","Awaiting your instructions.","SD 1.5 · WebGPU · browser only"],webgpuWarn:"WebGPU not detected — WASM fallback may be slower.",modelMeta:"512×512 · WebGPU · cached after first load",initialize:"INITIALIZE MODEL",standby:"> STANDBY",firstLoadNote:"Runs in browser — no install. First load only (~2GB to cache). Return visits: seconds."},topBar:{browserStudio:"BROWSER STUDIO",webgpuOn:"WebGPU",webgpuOff:"WASM",langHe:"עב",langEn:"EN"},studio:{memoryOk:"MEMORY",model:"MODEL",enterPrompt:"ENTER PROMPT",promptPlaceholder:"Describe your image…",generate:"Generate",stop:"STOP",settings:"Settings",generating:"GENERATING…",scale:"SCALE",sdUnavailable:"SD UNAVAILABLE",quickPrompts:"QUICK PROMPTS",headlines:["What will you create today?","Describe your vision.","Turn words into images.","What scene do you imagine?","Let's bring your idea to life.","Create something unique.","Paint with prompts."]},settings:{title:"Stable Diffusion 1.5",subtitle:"Generation settings",close:"Close settings",modelId:"Model ID",device:"Device",resolution:"Resolution",cfg:"Guidance scale (CFG)",steps:"Inference steps",stepsHint:"5–50 steps (subsampled from SD 1.5 schedule)",negativeNote:"SD 1.5 uses native negative_prompt (separate channel).",stylePreset:"Style preset",negativePrompt:"Negative prompt",negativeHint:"Shared preset for all generations. Clear to disable custom terms. Style may still add terms unless set to None.",negativePlaceholder:"Optional custom negative terms…",clearNegative:"Clear negative",resetNegative:"Reset to recommended defaults",resetAll:"Reset all to recommended defaults",styles:{photoreal:"Photoreal",none:"None",portrait:"Portrait",landscape:"Landscape",product:"Product",anime:"Anime"}},gallery:{title:"OUTPUT BUFFER",save:"SAVE",copy:"COPY",rerun:"RE-RUN",del:"DEL",ariaLabel:"Generated images"},generating:{title:"RENDERING",steps:"steps"},status:{readyToLoad:"Ready to load SD 1.5",preparingDownload:"Preparing download…",modelReady:"SD 1.5 ready — studio open",generating:"Generating…",imageReady:"Image ready",stopped:"Generation stopped",notLoaded:"SD 1.5 is not loaded yet",compiling:"SD 1.5: compiling on WebGPU (2–5 min)…",downloading:"SD 1.5: downloading"},errors:{sdUnavailable:"SD 1.5 requires WebGPU or WASM. Use Chrome/Edge 113+ with WebGPU enabled."}}};function KC(){try{const e=localStorage.getItem(KS);if(e==="he"||e==="en")return e}catch{}return"he"}function QC(e){try{localStorage.setItem(KS,e)}catch{}}function JC(e){return e==="he"?"rtl":"ltr"}const QS=ht.createContext(null);function $C({children:e}){const[t,n]=ht.useState(()=>KC()),i=ht.useCallback(r=>{n(r),QC(r)},[]),a=ht.useCallback(()=>{i(t==="he"?"en":"he")},[t,i]),s=ht.useMemo(()=>({locale:t,dir:JC(t),t:ZC[t],setLocale:i,toggleLocale:a}),[t,i,a]);return F.jsx(QS.Provider,{value:s,children:e})}function fi(){const e=ht.useContext(QS);if(!e)throw new Error("useLocale must be used within LocaleProvider");return e}function t2(e=3200){const{t}=fi(),n=t.intro.typewriter,[i,a]=ht.useState(0),[s,r]=ht.useState(""),[o,l]=ht.useState(!1);return ht.useEffect(()=>{a(0),r(""),l(!1)},[n]),ht.useEffect(()=>{const c=n[i%n.length]??"",d=s===c,h=o&&s==="";let u=o?28:42;d&&!o&&(u=e),h&&(u=400);const p=window.setTimeout(()=>{if(d&&!o){l(!0);return}if(h){l(!1),a(_=>(_+1)%n.length);return}r(o?c.slice(0,Math.max(0,s.length-1)):c.slice(0,s.length+1))},u);return()=>window.clearTimeout(p)},[s,o,i,n,e]),s}function Gh(e){if(!Number.isFinite(e)||e<=0)return"0 B";const t=["B","KB","MB","GB"];let n=e,i=0;for(;n>=1024&&i<t.length-1;)n/=1024,i+=1;return`${n<10&&i>0?n.toFixed(1):Math.round(n)} ${t[i]}`}function e2(e){return!Number.isFinite(e)||e<512?"—":`${Gh(e)}/s`}const Vh=54,Qf=2*Math.PI*Vh;function n2({percent:e,size:t=140,label:n,indeterminate:i=!1}){const a=Math.min(100,Math.max(0,e)),s=Qf*(1-a/100);return F.jsxs("div",{className:`hal-ring${i?" hal-ring--indeterminate":""}`,style:{width:t,height:t},"data-testid":"download-ring","aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":100,role:"progressbar",children:[F.jsxs("svg",{viewBox:"0 0 120 120","aria-hidden":"true",children:[F.jsx("circle",{className:"hal-ring__track",cx:"60",cy:"60",r:Vh}),F.jsx("circle",{className:"hal-ring__fill",cx:"60",cy:"60",r:Vh,strokeDasharray:Qf,strokeDashoffset:i?Qf*.72:s})]}),F.jsxs("div",{className:"hal-ring__center",dir:"ltr",children:[F.jsx("span",{className:"hal-ring__pct",children:i?"…":`${Math.round(a)}%`}),n?F.jsx("span",{className:"hal-ring__label",children:n}):null]})]})}function i2({webgpu:e}){const{locale:t,t:n,setLocale:i,dir:a}=fi();return F.jsxs("header",{className:"intro-topbar","data-testid":"intro-topbar",dir:a,children:[F.jsxs("div",{className:"intro-topbar__brand",children:[F.jsx("span",{className:"intro-topbar__mark","aria-hidden":"true",children:n.app.mark}),F.jsx("span",{className:"intro-topbar__name",dir:"ltr",children:rm})]}),F.jsxs("div",{className:"intro-topbar__badges",dir:"ltr",children:[F.jsxs("span",{className:`intro-topbar__pill ${e?"intro-topbar__pill--ok":""}`,children:[F.jsx("span",{className:"intro-topbar__pill-dot","aria-hidden":"true"}),e?n.topBar.webgpuOn:n.topBar.webgpuOff]}),F.jsx("span",{className:"intro-topbar__pill intro-topbar__pill--accent",children:n.topBar.browserStudio}),F.jsx("span",{className:"intro-topbar__pill intro-topbar__pill--dim",children:"SD 1.5"})]}),F.jsxs("div",{className:"intro-topbar__lang",role:"group","aria-label":"Language",children:[F.jsx("button",{type:"button",className:`intro-topbar__lang-btn ${t==="he"?"active":""}`,onClick:()=>i("he"),"aria-pressed":t==="he",children:n.topBar.langHe}),F.jsx("button",{type:"button",className:`intro-topbar__lang-btn ${t==="en"?"active":""}`,onClick:()=>i("en"),"aria-pressed":t==="en",children:n.topBar.langEn})]})]})}const a2=["https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/a3a3965e4fabd0cf744c37df37f79ccddc4e825648d42e2b737fe627a5e97c68.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/47c3c15382e94ea71f08c76fe4ead909a7c399df8ab9b93a3560114454c6e1de.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/7807b28d6bb324e27095c8ee7ed3e51157f4201dcd31709839c84011430cc078.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/5e33ff4597345c34fa96b63f4871e73b146a880943608ca1757158f3d1a5c71a.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/0ba4f4f5f0351bbc11e69d627b47471b37844c0e0b50debdae67b9d8c7ebc640.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/f36919370a6e4ffb31c5a9e184f360f912fba8d7e6ed03daade9e40cb566223b.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/bb2ab3a3410ce91a5425ab2c8b4cbd56335894c07537ee5258e61db0b354fd9d.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/58c9db2329620a7045503ededebbd3aca6552d68992516af93be48147cd26bf6.png"],JS=10,s2=5;function r2(){const e=[],t=[];return a2.forEach((n,i)=>{i%2===0?e.push(n):t.push(n)}),{left:e,right:t}}function o2(e){return e*JS}function e_({side:e,urls:t,phaseOffsetSec:n}){const i=o2(t.length);return F.jsx("div",{className:`loading-holo-gallery__side loading-holo-gallery__side--${e}`,"aria-hidden":"true",children:F.jsx("div",{className:"loading-holo-gallery__slot",children:t.map((a,s)=>{const r=n+s*JS;return F.jsxs("div",{className:"loading-holo-gallery__frame",style:{animationDuration:`${i}s`,animationDelay:`${r}s`,"--holo-delay":`${r}s`,"--holo-duration":`${i}s`},children:[F.jsx("img",{className:"loading-holo-gallery__img",src:a,alt:"",loading:"eager",decoding:"async"}),F.jsx("span",{className:"loading-holo-gallery__glow"})]},a)})})})}function l2(){const{left:e,right:t}=r2();return F.jsxs("div",{className:"loading-holo-gallery","data-testid":"loading-holo-gallery",children:[F.jsx(e_,{side:"left",urls:e,phaseOffsetSec:0}),F.jsx(e_,{side:"right",urls:t,phaseOffsetSec:s2})]})}function c2({phase:e,modelProgress:t,aggregateProgress:n,aggregateLoaded:i,aggregateTotal:a,downloadSpeed:s,status:r,webgpu:o,onLoad:l}){const{t:c,dir:d}=fi(),h=Cs.sd15,u=t.sd15,p=a>0?a:h.estimatedBytes,_=Math.min(100,Math.max(0,Math.round(n))),M=i>0,g=e==="loading"&&!M,f=(u==null?void 0:u.compiling)===!0,m=t2(),[v,y]=ht.useState([c.intro.standby]),C=ht.useRef("");ht.useEffect(()=>{y([c.intro.standby]),C.current=""},[c.intro.standby]);const b=ht.useMemo(()=>f?`> COMPILE: ${(u==null?void 0:u.currentFile)||"UNet"}…`:u!=null&&u.currentFile?`> FETCH: ${u.currentFile}`:r?`> ${r.toUpperCase()}`:c.intro.standby,[f,u==null?void 0:u.currentFile,r,c.intro.standby]);return ht.useEffect(()=>{e!=="loading"||b===C.current||(C.current=b,y(R=>[...R,b].slice(-3)))},[e,b]),F.jsxs("div",{className:"intro-screen hal-landing","data-testid":"intro-screen","data-phase":e,"aria-busy":e==="loading",dir:d,children:[F.jsx(qS,{}),F.jsx(l2,{}),F.jsx("div",{className:"scanlines","aria-hidden":"true"}),F.jsx(i2,{webgpu:o}),F.jsxs("div",{className:"hal-landing__content",children:[F.jsxs("header",{className:"hal-landing__header",children:[F.jsx("p",{className:"hal-landing__eyebrow",dir:"ltr",children:c.app.tagline}),F.jsx("h1",{className:"hal-landing__title",dir:"ltr",children:rm}),F.jsxs("p",{className:"hal-landing__typewriter","aria-live":"polite",children:[m,F.jsx("span",{className:"hal-cursor","aria-hidden":"true",children:"▌"})]})]}),F.jsx("p",{className:"hal-landing__note",children:c.intro.firstLoadNote}),o?null:F.jsx("p",{className:"hal-warn",role:"alert",children:c.intro.webgpuWarn}),e==="start"?F.jsxs("div",{className:"hal-landing__start",children:[F.jsxs("div",{className:"hal-model-chip","data-testid":"model-sd15",dir:"ltr",children:[F.jsx("span",{className:"hal-model-chip__name",children:h.label}),F.jsx("span",{className:"hal-model-chip__meta",children:c.intro.modelMeta})]}),F.jsxs("button",{type:"button",className:"btn-hal","data-testid":"load-model",onClick:l,children:[F.jsx("span",{className:"btn-hal__shine","aria-hidden":"true"}),c.intro.initialize]})]}):F.jsxs("div",{className:"hal-download","data-testid":"download-progress",children:[F.jsx(n2,{percent:u!=null&&u.done?100:_,size:112,indeterminate:g||f,label:f?"COMPILE":h.shortLabel}),F.jsxs("div",{className:"hal-console",dir:"ltr","data-testid":"download-bytes",children:[v.map((R,x)=>F.jsx("div",{className:"hal-console__line",children:R},`${R}-${x}`)),F.jsxs("div",{className:"hal-console__line hal-console__line--meta",children:[Gh(i)," / ",Gh(p)," · ",e2(s)]})]}),F.jsxs("div",{className:"compact-progress-row hal-download__bar","data-testid":"download-progress-sd15",children:[F.jsx("span",{className:"compact-progress-label",children:h.shortLabel}),F.jsx("div",{className:"compact-progress-track",children:F.jsx("div",{className:`compact-progress-fill${f?" compact-progress-fill--compile":""}`,style:{width:u!=null&&u.done?"100%":`${_}%`}})}),F.jsx("span",{className:"compact-progress-pct",children:u!=null&&u.done?"✓":f?"…":`${_}%`})]})]})]})]})}function u2(){const{locale:e,t,setLocale:n}=fi();return F.jsxs("div",{className:"lang-toggle",role:"group","aria-label":"Language",children:[F.jsx("button",{type:"button",className:`lang-toggle__btn ${e==="he"?"active":""}`,onClick:()=>n("he"),"aria-pressed":e==="he",children:t.topBar.langHe}),F.jsx("button",{type:"button",className:`lang-toggle__btn ${e==="en"?"active":""}`,onClick:()=>n("en"),"aria-pressed":e==="en",children:t.topBar.langEn})]})}function f2({prompt:e,sdSettings:t,deviceLabel:n,status:i,isGenerating:a,isModelLoaded:s,settingsOpen:r,genProgress:o=0,genTokenCount:l=0,genTokenTotal:c=0,onPromptChange:d,onOpenSettings:h,onGenerate:u,onStop:p}){const{t:_,dir:M}=fi(),g=e.trim().length>0&&!a&&s&&RC,f=Cs.sd15,m=YC(t),v=`${t.width}×${t.height}`,y=Math.round(o*100);return F.jsxs("div",{className:"workspace-header","data-testid":"composer-bar",dir:M,children:[F.jsxs("header",{className:"hal-studio-bar",children:[F.jsxs("div",{className:"hal-studio-bar__status",dir:"ltr",children:[F.jsx("span",{className:"hal-pulse-dot","aria-hidden":"true"}),F.jsx("span",{className:"hal-studio-bar__label",children:rm})]}),F.jsxs("div",{className:"hal-studio-bar__meta",dir:"ltr",children:[F.jsxs("span",{className:"hal-meta-chip",children:[_.studio.memoryOk," ",F.jsx("strong",{children:"OK"})]}),F.jsxs("span",{className:"hal-meta-chip",children:[_.studio.model," ",F.jsx("strong",{children:f.shortLabel})]}),F.jsx("span",{className:"hal-meta-chip hal-meta-chip--dim",children:n||"READY"}),F.jsx(u2,{})]}),F.jsx("p",{className:"hal-studio-bar__tagline",dir:"ltr",children:_.app.tagline})]}),F.jsxs("section",{className:"input-terminal",children:[F.jsx("label",{className:"input-terminal__label",htmlFor:"prompt-input",children:_.studio.enterPrompt}),F.jsxs("div",{className:"input-terminal__row",children:[F.jsx("input",{id:"prompt-input",className:"input-terminal__field",type:"text",dir:"auto",placeholder:_.studio.promptPlaceholder,"aria-label":_.studio.enterPrompt,value:e,onChange:C=>d(C.target.value),onKeyDown:C=>{C.key==="Enter"&&!C.shiftKey&&(C.preventDefault(),g&&u())},disabled:a}),F.jsxs("div",{className:"input-terminal__actions",children:[F.jsx("button",{type:"button",className:`input-terminal__gear ${r?"active":""}`,"data-testid":"settings-btn","aria-label":_.studio.settings,title:_.studio.settings,onClick:h,disabled:a,children:"⚙"}),a?F.jsx("button",{type:"button",className:"btn-hal btn-hal--small btn-hal--stop",onClick:p,children:_.studio.stop}):F.jsxs("button",{type:"button",className:"btn-hal btn-hal--small btn-hal--play","data-testid":"generate-btn",disabled:!g,onClick:u,"aria-label":_.studio.generate,children:[F.jsx("span",{className:"btn-hal__shine","aria-hidden":"true"}),"▶"]})]})]}),F.jsxs("div",{className:"input-terminal__meta",dir:"ltr","aria-live":"polite",children:[F.jsx("span",{children:m}),F.jsxs("span",{children:[_.studio.scale," ",v]}),a?F.jsxs("span",{className:"input-terminal__progress","data-testid":"inline-gen-progress",children:[F.jsx("span",{className:"input-terminal__status",children:_.generating.title}),F.jsx("span",{className:"input-terminal__progress-bar","aria-hidden":"true",children:F.jsx("span",{className:"input-terminal__progress-fill",style:{width:`${y}%`}})}),F.jsxs("span",{className:"input-terminal__progress-pct",children:[y,"%"]}),c>0?F.jsxs("span",{className:"input-terminal__progress-steps",children:[l,"/",c," ",_.generating.steps]}):null]}):F.jsx("span",{className:"input-terminal__status",children:i}),null]})]})]})}const d2=["photoreal","none","portrait","landscape","product","anime"];function n_({label:e,value:t,min:n,max:i,step:a,onChange:s,hint:r}){return F.jsxs("label",{className:"settings-field",children:[F.jsxs("div",{className:"settings-field-head",children:[F.jsx("span",{children:e}),F.jsx("span",{className:"settings-field-value",dir:"ltr",children:a<1?t.toFixed(2):t})]}),F.jsx("input",{type:"range",dir:"ltr",min:n,max:i,step:a,value:t,onChange:o=>s(Number(o.target.value))}),r?F.jsx("span",{className:"settings-field-hint",children:r}):null]})}function h2({open:e,deviceLabel:t,globalNegativePrompt:n,sdSettings:i,onClose:a,onGlobalNegativeChange:s,onSdChange:r}){const{t:o,dir:l}=fi();if(!e)return null;const c=Cs.sd15;return F.jsx("div",{className:"settings-overlay",role:"presentation",onClick:a,children:F.jsxs("aside",{className:"settings-panel",dir:l,role:"dialog","aria-labelledby":"settings-title","aria-modal":"true",onClick:d=>d.stopPropagation(),"data-testid":"settings-panel",children:[F.jsxs("header",{className:"settings-header",children:[F.jsxs("div",{children:[F.jsx("h2",{id:"settings-title",children:o.settings.title}),F.jsx("p",{className:"settings-subtitle",children:o.settings.subtitle})]}),F.jsx("button",{type:"button",className:"settings-close",onClick:a,"aria-label":o.settings.close,children:"×"})]}),F.jsxs("div",{className:"settings-readonly",dir:"ltr",children:[F.jsxs("div",{children:[F.jsx("span",{className:"settings-readonly-label",children:o.settings.modelId}),F.jsx("span",{children:c.hfId})]}),F.jsxs("div",{children:[F.jsx("span",{className:"settings-readonly-label",children:o.settings.device}),F.jsx("span",{children:t||"—"})]}),F.jsxs("div",{children:[F.jsx("span",{className:"settings-readonly-label",children:o.settings.resolution}),F.jsx("span",{children:c.resolution})]})]}),F.jsxs(F.Fragment,{children:[F.jsxs("div",{className:"settings-body",children:[F.jsx(n_,{label:o.settings.cfg,value:i.guidanceScale,min:1,max:20,step:.5,onChange:d=>r(h=>({...h,guidanceScale:d}))}),F.jsx(n_,{label:o.settings.steps,value:i.numInferenceSteps,min:5,max:50,step:1,onChange:d=>r(h=>({...h,numInferenceSteps:Math.round(d)})),hint:o.settings.stepsHint}),F.jsx("p",{className:"settings-note",children:o.settings.negativeNote})]}),F.jsxs("div",{className:"settings-shared",children:[F.jsx("div",{className:"style-chips",role:"group","aria-label":o.settings.stylePreset,children:d2.map(d=>F.jsx("button",{type:"button",className:`style-chip ${i.style===d?"active":""}`,onClick:()=>r(h=>({...h,style:d})),children:o.settings.styles[d]},d))}),F.jsxs("label",{className:"settings-field",children:[F.jsx("span",{children:o.settings.negativePrompt}),F.jsx("p",{className:"settings-field-hint",children:o.settings.negativeHint}),F.jsx("textarea",{className:"negative-textarea",dir:"auto",rows:4,placeholder:o.settings.negativePlaceholder,value:n,onChange:d=>s(d.target.value)})]}),F.jsxs("div",{className:"settings-negative-actions",children:[F.jsx("button",{type:"button",className:"text-btn",onClick:()=>s(""),children:o.settings.clearNegative}),F.jsx("button",{type:"button",className:"text-btn",onClick:()=>s(Xo),children:o.settings.resetNegative})]})]}),F.jsx("footer",{className:"settings-footer",children:F.jsx("button",{type:"button",className:"text-btn",onClick:()=>r({...Ro}),children:o.settings.resetAll})})]})]})})}function p2({headline:e}){const{dir:t}=fi();return F.jsx("div",{className:"studio-empty-hero",dir:t,children:F.jsx("h1",{className:"studio-empty-hero__headline",children:e})})}const Jl=3;function m2(e,t){const[n,i]=ht.useState(()=>t??zh(Jl,[],e)),[a,s]=ht.useState("idle"),r=ht.useRef(n),o=ht.useRef(a),l=ht.useRef(null);r.current=n,o.current=a;const c=ht.useCallback(()=>{if(o.current!=="idle")return;const d=r.current;s("exit"),window.setTimeout(()=>{i(zh(Jl,d.map(h=>h.id),e)),s("enter"),window.setTimeout(()=>s("idle"),TC(Jl))},bC(Jl))},[e]);return ht.useEffect(()=>{i(d=>d.map(h=>SC(h.id,e)??h))},[e]),ht.useEffect(()=>{const d=()=>{l.current=window.setTimeout(()=>{c(),d()},yC)};return d(),()=>{l.current!==null&&window.clearTimeout(l.current)}},[c]),{suggestions:n,animPhase:a}}function g2({initialSuggestions:e,onPick:t,disabled:n=!1}){const{t:i,dir:a,locale:s}=fi(),{suggestions:r,animPhase:o}=m2(s,e);return F.jsxs("footer",{className:"studio-footer","data-testid":"studio-footer",dir:a,children:[F.jsx("p",{className:"studio-footer__hint",children:i.studio.quickPrompts}),F.jsx("div",{className:"studio-footer__chips hal-studio-landing__chips","data-phase":o,"aria-live":"polite","aria-atomic":"true",children:r.map(l=>F.jsxs("button",{type:"button",className:"btn-hal btn-hal--chip hal-chip",onClick:()=>t(l.prompt),title:l.prompt,disabled:n||o!=="idle",children:[F.jsx("span",{className:"btn-hal__shine","aria-hidden":"true"}),F.jsx("span",{className:"hal-chip-icon","aria-hidden":"true",children:l.icon}),F.jsx("span",{className:"hal-chip-label",dir:s==="he"?"rtl":"ltr",children:l.label})]},l.id))})]})}function _2({item:e,onRegenerate:t,onDelete:n}){const{t:i}=fi(),a=Cs.sd15,s=()=>{const o=document.createElement("a");o.href=e.imageUrl,o.download=`${jC}-${e.id}.png`,o.click()},r=async()=>{await navigator.clipboard.writeText(e.prompt)};return F.jsxs("article",{className:"img-card",children:[F.jsxs("div",{className:"img-card__media",children:[F.jsx("img",{src:e.imageUrl,alt:e.prompt,loading:"lazy","data-testid":"gallery-image"}),F.jsx("span",{className:"img-card__badge",dir:"ltr",children:a.shortLabel})]}),F.jsxs("div",{className:"img-card__meta",children:[F.jsx("p",{className:"img-card__prompt",dir:"auto",title:e.prompt,children:e.prompt}),F.jsxs("p",{className:"img-card__stats",dir:"ltr",children:[e.width,"×",e.height," · ",(e.durationMs/1e3).toFixed(1),"s"]}),F.jsxs("div",{className:"img-card__actions",children:[F.jsx("button",{type:"button",className:"hal-card-btn",onClick:s,children:i.gallery.save}),F.jsx("button",{type:"button",className:"hal-card-btn",onClick:()=>void r(),children:i.gallery.copy}),F.jsx("button",{type:"button",className:"hal-card-btn",onClick:()=>t(e.prompt),children:i.gallery.rerun}),F.jsx("button",{type:"button",className:"hal-card-btn hal-card-btn--danger",onClick:()=>n(e.id),children:i.gallery.del})]})]})]})}function v2({items:e,onRegenerate:t,onDelete:n}){const{t:i,dir:a}=fi();return e.length?F.jsxs("section",{className:"hal-gallery","aria-label":i.gallery.ariaLabel,dir:a,children:[F.jsx("h2",{className:"hal-gallery__title",children:i.gallery.title}),F.jsx("div",{className:"hal-gallery__grid",children:e.map(s=>F.jsx(_2,{item:s,onRegenerate:t,onDelete:n},s.id))})]}):null}const x2="janusgrove-gallery",au="items",S2=1,i_=48;function y2(){return new Promise((e,t)=>{const n=indexedDB.open(x2,S2);n.onerror=()=>t(n.error??new Error("IndexedDB open failed")),n.onupgradeneeded=()=>{const i=n.result;i.objectStoreNames.contains(au)||i.createObjectStore(au,{keyPath:"id"})},n.onsuccess=()=>e(n.result)})}function Wa(e,t){return y2().then(n=>new Promise((i,a)=>{const s=n.transaction(au,e),r=s.objectStore(au),o=t(r);o.onsuccess=()=>i(o.result),o.onerror=()=>a(o.error??new Error("IndexedDB request failed")),s.oncomplete=()=>n.close(),s.onerror=()=>a(s.error??new Error("IndexedDB transaction failed"))}))}async function M2(){return(await Wa("readonly",t=>t.getAll())).sort((t,n)=>n.createdAt-t.createdAt).map(t=>({id:t.id,prompt:t.prompt,negativePrompt:t.negativePrompt,imageUrl:URL.createObjectURL(t.blob),width:t.width,height:t.height,durationMs:t.durationMs,createdAt:t.createdAt,modelId:t.modelId}))}async function E2(e,t){const n={id:e.id,prompt:e.prompt,negativePrompt:e.negativePrompt,width:e.width,height:e.height,durationMs:e.durationMs,createdAt:e.createdAt,modelId:e.modelId,blob:t};try{await Wa("readwrite",i=>i.put(n))}catch(i){if(!R2(i))throw i;await T2(8),await Wa("readwrite",a=>a.put(n))}}async function b2(e){await Wa("readwrite",t=>t.delete(e))}async function T2(e){const n=[...await Wa("readonly",i=>i.getAll())].sort((i,a)=>i.createdAt-a.createdAt).slice(0,e);for(const i of n)await Wa("readwrite",a=>a.delete(i.id))}async function A2(){const e=await Wa("readonly",i=>i.getAll());if(e.length<=i_)return;const t=e.length-i_,n=[...e].sort((i,a)=>i.createdAt-a.createdAt).slice(0,t);for(const i of n)await Wa("readwrite",a=>a.delete(i.id))}function R2(e){return e instanceof DOMException?e.name==="QuotaExceededError"||e.code===22:!1}function C2(e){typeof window>"u"||(window.__janusQa=e)}const a_=typeof window<"u"&&new URLSearchParams(window.location.search).has("qa"),w2=typeof window<"u"&&new URLSearchParams(window.location.search).get("autogen")==="1",s_=typeof window<"u"?new URLSearchParams(window.location.search).get("prompt")??t_:t_;function Sc(){return{progress:0,loaded:0,total:Cs.sd15.estimatedBytes,downloadSpeed:0,currentFile:"",status:"Waiting…",done:!1,compiling:!1}}function D2(e,t){e(n=>{const i={...n,sd15:{...n.sd15??Sc(),progress:100,done:!0,compiling:!1,status:"Ready"}};return t(i),i})}function U2(){const{t:e,dir:t,locale:n}=fi(),i=ht.useRef(e);i.current=e;const a=ht.useRef(null),s=ht.useRef(0),r=ht.useRef(""),o=ht.useRef("start"),l=ht.useRef(!1),c=ht.useRef(Kf("sd15")),d=ht.useRef({lastLoaded:0,lastTime:0,samples:[]}),h=ht.useRef(!1),[u,p]=ht.useState("start");o.current=u;const[_,M]=ht.useState(!1);h.current=_;const[g,f]=ht.useState(!0),[m,v]=ht.useState(""),[y,C]=ht.useState(0),[b,R]=ht.useState(0),[x,A]=ht.useState(0),[w,D]=ht.useState(0),[G,Y]=ht.useState({}),[j,I]=ht.useState(""),[U,P]=ht.useState(null),[W,Q]=ht.useState(""),[at,xt]=ht.useState(()=>kC()),yt=ht.useRef(at),[Gt,qt]=ht.useState(()=>Kf("sd15")),[wt,$]=ht.useState(!1);yt.current=at,c.current=Gt;const[ft,rt]=ht.useState(!1),[Rt,Ut]=ht.useState(0),[Ct,Se]=ht.useState({count:0,total:0}),[Ot,$t]=ht.useState([]),re=ht.useRef(!1),[Xt,De]=ht.useState(!1),ye=ht.useMemo(()=>AC(e.studio.headlines,n),[e.studio.headlines,n]),dn=u==="ready"&&Ot.length===0&&!ft,O=DC(u,_?1:0),de=ht.useCallback(N=>{const tt=N.sd15;tt&&(R(tt.loaded),A(tt.total||Cs.sd15.estimatedBytes),C(Math.min(100,Math.max(0,tt.progress))))},[]),Vt=ht.useCallback(()=>{o.current!=="ready"&&(p("ready"),I(i.current.status.modelReady))},[]),oe=ht.useCallback(N=>{D2(Y,de),M(!0),h.current=!0,v(N),Vt()},[Vt,de]),pt=ht.useCallback(N=>{Y(tt=>{const lt={...tt,sd15:{...tt.sd15??Sc(),status:`Unavailable — ${N}`,done:!1,compiling:!1}};return de(lt),lt}),P(N)},[de]),be=ht.useCallback(N=>{switch(N.type){case"webgpu_check":f(N.webgpu);break;case"download_progress":{const tt=N.status==="compile";Y(lt=>{const it=lt.sd15??Sc(),st={...lt,sd15:{...it,loaded:N.loaded,total:N.total,progress:N.total>0?N.loaded/N.total*100:N.progress<=1?N.progress*100:N.progress,currentFile:N.file,compiling:tt,status:tt?`Compiling ${N.file||"UNet"}…`:N.file?`Downloading ${N.file}…`:it.status}};return de(st),st}),(N.file||tt)&&I(tt?i.current.status.compiling:`${i.current.status.downloading} ${N.file}…`);break}case"status":I(N.text);break;case"loaded":oe(N.device);break;case"gen_progress":if(!l.current)break;Ut(N.progress),Se({count:N.count,total:N.total});break;case"image_ready":{if(!l.current)break;const tt=URL.createObjectURL(N.blob),lt={id:crypto.randomUUID(),prompt:r.current,negativePrompt:yt.current,imageUrl:tt,width:N.width,height:N.height,durationMs:performance.now()-s.current,createdAt:Date.now(),modelId:"sd15"};$t(it=>[lt,...it]),E2(lt,N.blob).then(()=>A2()),l.current=!1,rt(!1),Ut(0),I(i.current.status.imageReady);break}case"aborted":l.current&&(l.current=!1,rt(!1),Ut(0),I(i.current.status.stopped));break;case"error":l.current&&(l.current=!1,rt(!1)),o.current==="loading"&&!h.current?pt(N.error):P(`SD 1.5: ${N.error}`);break}},[pt,oe,de]),T=ht.useRef(be);T.current=be;const S=ht.useCallback(()=>{if(a.current)return a.current;const N=xC({onMessage:tt=>T.current(tt)});return a.current=N,io(N,{type:"check_webgpu"}),N},[]);ht.useEffect(()=>{const N=S();return io(N,{type:"check_webgpu"}),()=>{var tt;(tt=a.current)==null||tt.terminate(),a.current=null}},[S]),ht.useEffect(()=>{u==="start"&&!_&&!ft&&I(e.status.readyToLoad)},[e.status.readyToLoad,u,_,ft]),ht.useEffect(()=>{re.current||(re.current=!0,M2().then(N=>{N.length&&$t(N)}).catch(()=>{re.current=!1}))},[]),ht.useEffect(()=>()=>{$t(N=>{for(const tt of N)URL.revokeObjectURL(tt.imageUrl);return N})},[]);const H=ht.useCallback(()=>{P(null),p("loading"),M(!1),h.current=!1,C(0),R(0),A(wC()),D(0),d.current={lastLoaded:0,lastTime:0,samples:[]};const N={sd15:Sc()};Y(N),de(N),I(i.current.status.preparingDownload),S(),io(a.current,{type:"load"})},[S,de]);ht.useEffect(()=>{if(u!=="loading"&&u!=="ready"||b<=0)return;const N=performance.now(),tt=d.current;if(tt.lastTime>0&&b>tt.lastLoaded){const lt=(N-tt.lastTime)/1e3;if(lt>=.4){const it=(b-tt.lastLoaded)/lt,st=[...tt.samples,it].slice(-6);D(st.reduce((Nt,Pt)=>Nt+Pt,0)/st.length),d.current={lastLoaded:b,lastTime:N,samples:st};return}}tt.lastTime===0&&(d.current={...tt,lastLoaded:b,lastTime:N})},[b,u]);const Z=ht.useCallback(N=>{if(!N.trim()||!h.current){h.current||P(i.current.status.notLoaded);return}r.current=N,Q(""),P(null),l.current=!0,rt(!0),Ut(0),Se({count:0,total:0}),s.current=performance.now(),I(i.current.status.generating);const tt=c.current,lt=yt.current;(async()=>{const{positive:it,negative:st}=await HC(N,lt);if(!l.current)return;const{prompt:Nt,negativePrompt:Pt}=BC(it,tt,st);io(S(),{type:"generate_image",prompt:Nt,negativePrompt:Pt,generation:qC(tt)})})()},[S]),et=ht.useCallback(N=>{yt.current=N,xt(N),XC(N)},[]),ot=ht.useCallback(N=>{qt(tt=>{const lt=typeof N=="function"?N(tt):N;WC("sd15",lt);const it=Kf("sd15");return c.current=it,it})},[]);ht.useEffect(()=>{var N,tt;C2({phase:u,webgpu:g,deviceLabel:m,loadedBytes:b,totalBytes:x,progress:y,status:j,isGenerating:ft,galleryCount:Ot.length,lastImageWidth:((N=Ot[0])==null?void 0:N.width)??0,lastImageHeight:((tt=Ot[0])==null?void 0:tt.height)??0,error:U})},[u,g,m,b,x,y,j,ft,Ot,U]),ht.useEffect(()=>{UC(u,_?[CC]:[])&&Vt()},[u,_,Vt]),ht.useEffect(()=>{if(O){De(!1);return}const N=requestAnimationFrame(()=>De(!0));return()=>cancelAnimationFrame(N)},[O]),ht.useEffect(()=>{if(!a_||u!=="start")return;const N=window.setTimeout(()=>H(),400);return()=>window.clearTimeout(N)},[u,H]),ht.useEffect(()=>{if(!a_||!w2||u!=="ready"||ft||Ot.length>0)return;Q(s_);const N=window.setTimeout(()=>Z(s_),300);return()=>window.clearTimeout(N)},[u,ft,Ot.length,Z]);const ut=()=>{io(S(),{type:"abort"})},q=N=>{b2(N),$t(tt=>{const lt=tt.find(it=>it.id===N);return lt&&URL.revokeObjectURL(lt.imageUrl),tt.filter(it=>it.id!==N)})};return O?F.jsxs("main",{className:"app hal-app","data-testid":"app-root","data-phase":u,dir:t,children:[F.jsx(c2,{phase:u==="loading"?"loading":"start",modelProgress:G,aggregateProgress:y,aggregateLoaded:b,aggregateTotal:x,downloadSpeed:w,status:j,webgpu:g,onLoad:H}),U?F.jsx("div",{className:"error-banner",role:"alert",children:U}):null]}):F.jsxs("main",{className:`app app--studio workspace hal-app${Xt?" workspace--visible":""}`,"data-testid":"app-studio","data-phase":"ready",dir:t,children:[F.jsx(qS,{}),F.jsx("div",{className:"scanlines","aria-hidden":"true"}),F.jsx(f2,{prompt:W,sdSettings:Gt,deviceLabel:m,status:j,isGenerating:ft,isModelLoaded:_,settingsOpen:wt,genProgress:Rt,genTokenCount:Ct.count,genTokenTotal:Ct.total,onPromptChange:Q,onOpenSettings:()=>$(N=>!N),onGenerate:()=>Z(W),onStop:ut}),F.jsxs("div",{className:"studio-body",children:[dn?F.jsx(p2,{headline:ye.headline}):null,F.jsx(v2,{items:Ot,onRegenerate:N=>{Q(N),Z(N)},onDelete:q})]}),F.jsx(g2,{initialSuggestions:ye.suggestions,onPick:N=>Q(N),disabled:ft}),F.jsx(h2,{open:wt,deviceLabel:m,globalNegativePrompt:at,sdSettings:Gt,onClose:()=>$(!1),onGlobalNegativeChange:et,onSdChange:ot}),U?F.jsxs("div",{className:"error-banner error-banner--studio",role:"alert",children:[U,F.jsx("button",{type:"button",onClick:()=>P(null),children:"×"})]}):null]})}ib.createRoot(document.getElementById("root")).render(F.jsx(ht.StrictMode,{children:F.jsx($C,{children:F.jsx(U2,{})})}));
