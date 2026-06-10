(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var e_={exports:{}},au={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny=Symbol.for("react.transitional.element"),iy=Symbol.for("react.fragment");function n_(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:ny,type:e,key:i,ref:t!==void 0?t:null,props:n}}au.Fragment=iy;au.jsx=n_;au.jsxs=n_;e_.exports=au;var B=e_.exports,i_={exports:{}},Pt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hh=Symbol.for("react.transitional.element"),ay=Symbol.for("react.portal"),sy=Symbol.for("react.fragment"),ry=Symbol.for("react.strict_mode"),oy=Symbol.for("react.profiler"),ly=Symbol.for("react.consumer"),cy=Symbol.for("react.context"),uy=Symbol.for("react.forward_ref"),fy=Symbol.for("react.suspense"),dy=Symbol.for("react.memo"),a_=Symbol.for("react.lazy"),hy=Symbol.for("react.activity"),gm=Symbol.iterator;function py(e){return e===null||typeof e!="object"?null:(e=gm&&e[gm]||e["@@iterator"],typeof e=="function"?e:null)}var s_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r_=Object.assign,o_={};function Ur(e,t,n){this.props=e,this.context=t,this.refs=o_,this.updater=n||s_}Ur.prototype.isReactComponent={};Ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function l_(){}l_.prototype=Ur.prototype;function Vh(e,t,n){this.props=e,this.context=t,this.refs=o_,this.updater=n||s_}var kh=Vh.prototype=new l_;kh.constructor=Vh;r_(kh,Ur.prototype);kh.isPureReactComponent=!0;var _m=Array.isArray;function Kf(){}var Ae={H:null,A:null,T:null,S:null},c_=Object.prototype.hasOwnProperty;function Xh(e,t,n){var i=n.ref;return{$$typeof:Hh,type:e,key:t,ref:i!==void 0?i:null,props:n}}function my(e,t){return Xh(e.type,t,e.props)}function Wh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hh}function gy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vm=/\/+/g;function Du(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gy(""+e.key):t.toString(36)}function _y(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Kf,Kf):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function qs(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Hh:case ay:r=!0;break;case a_:return r=e._init,qs(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+Du(e,0):i,_m(a)?(n="",r!=null&&(n=r.replace(vm,"$&/")+"/"),qs(a,t,n,"",function(c){return c})):a!=null&&(Wh(a)&&(a=my(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(vm,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(_m(e))for(var l=0;l<e.length;l++)i=e[l],s=o+Du(i,l),r+=qs(i,t,n,s,a);else if(l=py(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+Du(i,l++),r+=qs(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return qs(_y(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function ll(e,t,n){if(e==null)return e;var i=[],a=0;return qs(e,i,"","",function(s){return t.call(n,s,a++)}),i}function vy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xm=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},xy={map:ll,forEach:function(e,t,n){ll(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ll(e,function(){t++}),t},toArray:function(e){return ll(e,function(t){return t})||[]},only:function(e){if(!Wh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Pt.Activity=hy;Pt.Children=xy;Pt.Component=Ur;Pt.Fragment=sy;Pt.Profiler=oy;Pt.PureComponent=Vh;Pt.StrictMode=ry;Pt.Suspense=fy;Pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ae;Pt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ae.H.useMemoCache(e)}};Pt.cache=function(e){return function(){return e.apply(null,arguments)}};Pt.cacheSignal=function(){return null};Pt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=r_({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!c_.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return Xh(e.type,a,i)};Pt.createContext=function(e){return e={$$typeof:cy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:ly,_context:e},e};Pt.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)c_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Xh(e,s,a)};Pt.createRef=function(){return{current:null}};Pt.forwardRef=function(e){return{$$typeof:uy,render:e}};Pt.isValidElement=Wh;Pt.lazy=function(e){return{$$typeof:a_,_payload:{_status:-1,_result:e},_init:vy}};Pt.memo=function(e,t){return{$$typeof:dy,type:e,compare:t===void 0?null:t}};Pt.startTransition=function(e){var t=Ae.T,n={};Ae.T=n;try{var i=e(),a=Ae.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Kf,xm)}catch(s){xm(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ae.T=t}};Pt.unstable_useCacheRefresh=function(){return Ae.H.useCacheRefresh()};Pt.use=function(e){return Ae.H.use(e)};Pt.useActionState=function(e,t,n){return Ae.H.useActionState(e,t,n)};Pt.useCallback=function(e,t){return Ae.H.useCallback(e,t)};Pt.useContext=function(e){return Ae.H.useContext(e)};Pt.useDebugValue=function(){};Pt.useDeferredValue=function(e,t){return Ae.H.useDeferredValue(e,t)};Pt.useEffect=function(e,t){return Ae.H.useEffect(e,t)};Pt.useEffectEvent=function(e){return Ae.H.useEffectEvent(e)};Pt.useId=function(){return Ae.H.useId()};Pt.useImperativeHandle=function(e,t,n){return Ae.H.useImperativeHandle(e,t,n)};Pt.useInsertionEffect=function(e,t){return Ae.H.useInsertionEffect(e,t)};Pt.useLayoutEffect=function(e,t){return Ae.H.useLayoutEffect(e,t)};Pt.useMemo=function(e,t){return Ae.H.useMemo(e,t)};Pt.useOptimistic=function(e,t){return Ae.H.useOptimistic(e,t)};Pt.useReducer=function(e,t,n){return Ae.H.useReducer(e,t,n)};Pt.useRef=function(e){return Ae.H.useRef(e)};Pt.useState=function(e){return Ae.H.useState(e)};Pt.useSyncExternalStore=function(e,t,n){return Ae.H.useSyncExternalStore(e,t,n)};Pt.useTransition=function(){return Ae.H.useTransition()};Pt.version="19.2.7";i_.exports=Pt;var dt=i_.exports,u_={exports:{}},su={},f_={exports:{}},d_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(U,O){var q=U.length;U.push(O);t:for(;0<q;){var $=q-1>>>1,it=U[$];if(0<a(it,O))U[$]=O,U[q]=it,q=$;else break t}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var O=U[0],q=U.pop();if(q!==O){U[0]=q;t:for(var $=0,it=U.length,vt=it>>>1;$<vt;){var Mt=2*($+1)-1,Vt=U[Mt],kt=Mt+1,wt=U[kt];if(0>a(Vt,q))kt<it&&0>a(wt,Vt)?(U[$]=wt,U[kt]=q,$=kt):(U[$]=Vt,U[Mt]=q,$=Mt);else if(kt<it&&0>a(wt,q))U[$]=wt,U[kt]=q,$=kt;else break t}}return O}function a(U,O){var q=U.sortIndex-O.sortIndex;return q!==0?q:U.id-O.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var l=[],c=[],h=1,d=null,u=3,p=!1,v=!1,M=!1,g=!1,f=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function y(U){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=U)i(c),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(c)}}function C(U){if(M=!1,y(U),!v)if(n(l)!==null)v=!0,b||(b=!0,F());else{var O=n(c);O!==null&&P(C,O.startTime-U)}}var b=!1,R=-1,x=5,A=-1;function w(){return g?!0:!(e.unstable_now()-A<x)}function D(){if(g=!1,b){var U=e.unstable_now();A=U;var O=!0;try{t:{v=!1,M&&(M=!1,m(R),R=-1),p=!0;var q=u;try{e:{for(y(U),d=n(l);d!==null&&!(d.expirationTime>U&&w());){var $=d.callback;if(typeof $=="function"){d.callback=null,u=d.priorityLevel;var it=$(d.expirationTime<=U);if(U=e.unstable_now(),typeof it=="function"){d.callback=it,y(U),O=!0;break e}d===n(l)&&i(l),y(U)}else i(l);d=n(l)}if(d!==null)O=!0;else{var vt=n(c);vt!==null&&P(C,vt.startTime-U),O=!1}}break t}finally{d=null,u=q,p=!1}O=void 0}}finally{O?F():b=!1}}}var F;if(typeof _=="function")F=function(){_(D)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,j=Z.port2;Z.port1.onmessage=D,F=function(){j.postMessage(null)}}else F=function(){f(D,0)};function P(U,O){R=f(function(){U(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_next=function(U){switch(u){case 1:case 2:case 3:var O=3;break;default:O=u}var q=u;u=O;try{return U()}finally{u=q}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(U,O){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var q=u;u=U;try{return O()}finally{u=q}},e.unstable_scheduleCallback=function(U,O,q){var $=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?$+q:$):q=$,U){case 1:var it=-1;break;case 2:it=250;break;case 5:it=1073741823;break;case 4:it=1e4;break;default:it=5e3}return it=q+it,U={id:h++,callback:O,priorityLevel:U,startTime:q,expirationTime:it,sortIndex:-1},q>$?(U.sortIndex=q,t(c,U),n(l)===null&&U===n(c)&&(M?(m(R),R=-1):M=!0,P(C,q-$))):(U.sortIndex=it,t(l,U),v||p||(v=!0,b||(b=!0,F()))),U},e.unstable_shouldYield=w,e.unstable_wrapCallback=function(U){var O=u;return function(){var q=u;u=O;try{return U.apply(this,arguments)}finally{u=q}}}})(d_);f_.exports=d_;var Sy=f_.exports,h_={exports:{}},_n={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yy=dt;function p_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function fa(){}var mn={d:{f:fa,r:function(){throw Error(p_(522))},D:fa,C:fa,L:fa,m:fa,X:fa,S:fa,M:fa},p:0,findDOMNode:null},My=Symbol.for("react.portal");function Ey(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:My,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var fo=yy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ru(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}_n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=mn;_n.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(p_(299));return Ey(e,t,null,n)};_n.flushSync=function(e){var t=fo.T,n=mn.p;try{if(fo.T=null,mn.p=2,e)return e()}finally{fo.T=t,mn.p=n,mn.d.f()}};_n.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,mn.d.C(e,t))};_n.prefetchDNS=function(e){typeof e=="string"&&mn.d.D(e)};_n.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=ru(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?mn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&mn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};_n.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=ru(t.as,t.crossOrigin);mn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&mn.d.M(e)};_n.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=ru(n,t.crossOrigin);mn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};_n.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=ru(t.as,t.crossOrigin);mn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else mn.d.m(e)};_n.requestFormReset=function(e){mn.d.r(e)};_n.unstable_batchedUpdates=function(e,t){return e(t)};_n.useFormState=function(e,t,n){return fo.H.useFormState(e,t,n)};_n.useFormStatus=function(){return fo.H.useHostTransitionStatus()};_n.version="19.2.7";function m_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m_)}catch(e){console.error(e)}}m_(),h_.exports=_n;var by=h_.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je=Sy,g_=dt,Ty=by;function tt(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function __(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function v_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x_(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sm(e){if(Xo(e)!==e)throw Error(tt(188))}function Ay(e){var t=e.alternate;if(!t){if(t=Xo(e),t===null)throw Error(tt(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return Sm(a),e;if(s===i)return Sm(a),t;s=s.sibling}throw Error(tt(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(tt(189))}}if(n.alternate!==i)throw Error(tt(190))}if(n.tag!==3)throw Error(tt(188));return n.stateNode.current===n?e:t}function S_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S_(e),t!==null)return t;e=e.sibling}return null}var Re=Object.assign,Ry=Symbol.for("react.element"),cl=Symbol.for("react.transitional.element"),io=Symbol.for("react.portal"),Zs=Symbol.for("react.fragment"),y_=Symbol.for("react.strict_mode"),Qf=Symbol.for("react.profiler"),M_=Symbol.for("react.consumer"),Wi=Symbol.for("react.context"),qh=Symbol.for("react.forward_ref"),Jf=Symbol.for("react.suspense"),$f=Symbol.for("react.suspense_list"),Yh=Symbol.for("react.memo"),va=Symbol.for("react.lazy"),td=Symbol.for("react.activity"),Cy=Symbol.for("react.memo_cache_sentinel"),ym=Symbol.iterator;function Hr(e){return e===null||typeof e!="object"?null:(e=ym&&e[ym]||e["@@iterator"],typeof e=="function"?e:null)}var wy=Symbol.for("react.client.reference");function ed(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===wy?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zs:return"Fragment";case Qf:return"Profiler";case y_:return"StrictMode";case Jf:return"Suspense";case $f:return"SuspenseList";case td:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case io:return"Portal";case Wi:return e.displayName||"Context";case M_:return(e._context.displayName||"Context")+".Consumer";case qh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yh:return t=e.displayName||null,t!==null?t:ed(e.type)||"Memo";case va:t=e._payload,e=e._init;try{return ed(e(t))}catch{}}return null}var ao=Array.isArray,Ut=g_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=Ty.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ls={pending:!1,data:null,method:null,action:null},nd=[],Ks=-1;function wi(e){return{current:e}}function tn(e){0>Ks||(e.current=nd[Ks],nd[Ks]=null,Ks--)}function Ee(e,t){Ks++,nd[Ks]=e.current,e.current=t}var Mi=wi(null),Ro=wi(null),Ua=wi(null),Sc=wi(null);function yc(e,t){switch(Ee(Ua,t),Ee(Ro,e),Ee(Mi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Rg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Rg(t),e=Vx(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tn(Mi),Ee(Mi,e)}function gr(){tn(Mi),tn(Ro),tn(Ua)}function id(e){e.memoizedState!==null&&Ee(Sc,e);var t=Mi.current,n=Vx(t,e.type);t!==n&&(Ee(Ro,e),Ee(Mi,n))}function Mc(e){Ro.current===e&&(tn(Mi),tn(Ro)),Sc.current===e&&(tn(Sc),Fo._currentValue=ls)}var Uu,Mm;function $a(e){if(Uu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Uu=t&&t[1]||"",Mm=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Uu+e+Mm}var Nu=!1;function Lu(e,t){if(!e||Nu)return"";Nu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var u=p}Reflect.construct(e,[],d)}else{try{d.call()}catch(p){u=p}e.call(d.prototype)}}else{try{throw Error()}catch(p){u=p}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&u&&typeof p.stack=="string")return[p.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=a);break}}}finally{Nu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?$a(n):""}function Dy(e,t){switch(e.tag){case 26:case 27:case 5:return $a(e.type);case 16:return $a("Lazy");case 13:return e.child!==t&&t!==null?$a("Suspense Fallback"):$a("Suspense");case 19:return $a("SuspenseList");case 0:case 15:return Lu(e.type,!1);case 11:return Lu(e.type.render,!1);case 1:return Lu(e.type,!0);case 31:return $a("Activity");default:return""}}function Em(e){try{var t="",n=null;do t+=Dy(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var ad=Object.prototype.hasOwnProperty,jh=je.unstable_scheduleCallback,Ou=je.unstable_cancelCallback,Uy=je.unstable_shouldYield,Ny=je.unstable_requestPaint,Pn=je.unstable_now,Ly=je.unstable_getCurrentPriorityLevel,E_=je.unstable_ImmediatePriority,b_=je.unstable_UserBlockingPriority,Ec=je.unstable_NormalPriority,Oy=je.unstable_LowPriority,T_=je.unstable_IdlePriority,Py=je.log,Iy=je.unstable_setDisableYieldValue,Wo=null,In=null;function Ta(e){if(typeof Py=="function"&&Iy(e),In&&typeof In.setStrictMode=="function")try{In.setStrictMode(Wo,e)}catch{}}var Bn=Math.clz32?Math.clz32:zy,By=Math.log,Fy=Math.LN2;function zy(e){return e>>>=0,e===0?32:31-(By(e)/Fy|0)|0}var ul=256,fl=262144,dl=4194304;function ts(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ou(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=ts(i):(r&=o,r!==0?a=ts(r):n||(n=o&~e,n!==0&&(a=ts(n))))):(o=i&~s,o!==0?a=ts(o):r!==0?a=ts(r):n||(n=i&~e,n!==0&&(a=ts(n)))),a===0?0:t!==0&&t!==a&&!(t&s)&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function qo(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Gy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function A_(){var e=dl;return dl<<=1,!(dl&62914560)&&(dl=4194304),e}function Pu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Hy(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-Bn(n),d=1<<h;o[h]=0,l[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var p=u[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&R_(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function R_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Bn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function C_(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Bn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function w_(e,t){var n=t&-t;return n=n&42?1:Zh(n),n&(e.suspendedLanes|t)?0:n}function Zh(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Kh(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function D_(){var e=ae.p;return e!==0?e:(e=window.event,e===void 0?32:$x(e.type))}function bm(e,t){var n=ae.p;try{return ae.p=e,t()}finally{ae.p=n}}var Wa=Math.random().toString(36).slice(2),an="__reactFiber$"+Wa,An="__reactProps$"+Wa,Nr="__reactContainer$"+Wa,sd="__reactEvents$"+Wa,Vy="__reactListeners$"+Wa,ky="__reactHandles$"+Wa,Tm="__reactResources$"+Wa,jo="__reactMarker$"+Wa;function Qh(e){delete e[an],delete e[An],delete e[sd],delete e[Vy],delete e[ky]}function Qs(e){var t=e[an];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nr]||n[an]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ng(e);e!==null;){if(n=e[an])return n;e=Ng(e)}return t}e=n,n=e.parentNode}return null}function Lr(e){if(e=e[an]||e[Nr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function so(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(tt(33))}function or(e){var t=e[Tm];return t||(t=e[Tm]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function $e(e){e[jo]=!0}var U_=new Set,N_={};function ys(e,t){_r(e,t),_r(e+"Capture",t)}function _r(e,t){for(N_[e]=t,e=0;e<t.length;e++)U_.add(t[e])}var Xy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Am={},Rm={};function Wy(e){return ad.call(Rm,e)?!0:ad.call(Am,e)?!1:Xy.test(e)?Rm[e]=!0:(Am[e]=!0,!1)}function Jl(e,t,n){if(Wy(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function hl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ni(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function qn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function L_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qy(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rd(e){if(!e._valueTracker){var t=L_(e)?"checked":"value";e._valueTracker=qy(e,t,""+e[t])}}function O_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=L_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function bc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Yy=/[\n"\\]/g;function Kn(e){return e.replace(Yy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function od(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qn(t)):e.value!==""+qn(t)&&(e.value=""+qn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?ld(e,r,qn(t)):n!=null?ld(e,r,qn(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+qn(o):e.removeAttribute("name")}function P_(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){rd(e);return}n=n!=null?""+qn(n):"",t=t!=null?""+qn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),rd(e)}function ld(e,t,n){t==="number"&&bc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function lr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+qn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function I_(e,t,n){if(t!=null&&(t=""+qn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+qn(n):""}function B_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(tt(92));if(ao(i)){if(1<i.length)throw Error(tt(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=qn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),rd(e)}function vr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cm(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||jy.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function F_(e,t,n){if(t!=null&&typeof t!="object")throw Error(tt(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&Cm(e,a,i)}else for(var s in t)t.hasOwnProperty(s)&&Cm(e,s,t[s])}function Jh(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ky=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $l(e){return Ky.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qi(){}var cd=null;function $h(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Js=null,cr=null;function wm(e){var t=Lr(e);if(t&&(e=t.stateNode)){var n=e[An]||null;t:switch(e=t.stateNode,t.type){case"input":if(od(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Kn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[An]||null;if(!a)throw Error(tt(90));od(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&O_(i)}break t;case"textarea":I_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&lr(e,!!n.multiple,t,!1)}}}var Iu=!1;function z_(e,t,n){if(Iu)return e(t,n);Iu=!0;try{var i=e(t);return i}finally{if(Iu=!1,(Js!==null||cr!==null)&&(xu(),Js&&(t=Js,e=cr,cr=Js=null,wm(t),e)))for(t=0;t<e.length;t++)wm(e[t])}}function Co(e,t){var n=e.stateNode;if(n===null)return null;var i=n[An]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(tt(231,t,typeof n));return n}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ud=!1;if(ta)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){ud=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{ud=!1}var Aa=null,tp=null,tc=null;function G_(){if(tc)return tc;var e,t=tp,n=t.length,i,a="value"in Aa?Aa.value:Aa.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return tc=a.slice(e,1<i?1-i:void 0)}function ec(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pl(){return!0}function Dm(){return!1}function Rn(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pl:Dm,this.isPropagationStopped=Dm,this}return Re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),t}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lu=Rn(Ms),Zo=Re({},Ms,{view:0,detail:0}),Qy=Rn(Zo),Bu,Fu,kr,cu=Re({},Zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ep,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(Bu=e.screenX-kr.screenX,Fu=e.screenY-kr.screenY):Fu=Bu=0,kr=e),Bu)},movementY:function(e){return"movementY"in e?e.movementY:Fu}}),Um=Rn(cu),Jy=Re({},cu,{dataTransfer:0}),$y=Rn(Jy),tM=Re({},Zo,{relatedTarget:0}),zu=Rn(tM),eM=Re({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),nM=Rn(eM),iM=Re({},Ms,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),aM=Rn(iM),sM=Re({},Ms,{data:0}),Nm=Rn(sM),rM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cM(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lM[e])?!!t[e]:!1}function ep(){return cM}var uM=Re({},Zo,{key:function(e){if(e.key){var t=rM[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ec(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?oM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ep,charCode:function(e){return e.type==="keypress"?ec(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ec(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fM=Rn(uM),dM=Re({},cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lm=Rn(dM),hM=Re({},Zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ep}),pM=Rn(hM),mM=Re({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),gM=Rn(mM),_M=Re({},cu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vM=Rn(_M),xM=Re({},Ms,{newState:0,oldState:0}),SM=Rn(xM),yM=[9,13,27,32],np=ta&&"CompositionEvent"in window,ho=null;ta&&"documentMode"in document&&(ho=document.documentMode);var MM=ta&&"TextEvent"in window&&!ho,H_=ta&&(!np||ho&&8<ho&&11>=ho),Om=" ",Pm=!1;function V_(e,t){switch(e){case"keyup":return yM.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function k_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $s=!1;function EM(e,t){switch(e){case"compositionend":return k_(t);case"keypress":return t.which!==32?null:(Pm=!0,Om);case"textInput":return e=t.data,e===Om&&Pm?null:e;default:return null}}function bM(e,t){if($s)return e==="compositionend"||!np&&V_(e,t)?(e=G_(),tc=tp=Aa=null,$s=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return H_&&t.locale!=="ko"?null:t.data;default:return null}}var TM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Im(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!TM[e.type]:t==="textarea"}function X_(e,t,n,i){Js?cr?cr.push(i):cr=[i]:Js=i,t=Vc(t,"onChange"),0<t.length&&(n=new lu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var po=null,wo=null;function AM(e){zx(e,0)}function uu(e){var t=so(e);if(O_(t))return e}function Bm(e,t){if(e==="change")return t}var W_=!1;if(ta){var Gu;if(ta){var Hu="oninput"in document;if(!Hu){var Fm=document.createElement("div");Fm.setAttribute("oninput","return;"),Hu=typeof Fm.oninput=="function"}Gu=Hu}else Gu=!1;W_=Gu&&(!document.documentMode||9<document.documentMode)}function zm(){po&&(po.detachEvent("onpropertychange",q_),wo=po=null)}function q_(e){if(e.propertyName==="value"&&uu(wo)){var t=[];X_(t,wo,e,$h(e)),z_(AM,t)}}function RM(e,t,n){e==="focusin"?(zm(),po=t,wo=n,po.attachEvent("onpropertychange",q_)):e==="focusout"&&zm()}function CM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return uu(wo)}function wM(e,t){if(e==="click")return uu(t)}function DM(e,t){if(e==="input"||e==="change")return uu(t)}function UM(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zn=typeof Object.is=="function"?Object.is:UM;function Do(e,t){if(zn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!ad.call(t,a)||!zn(e[a],t[a]))return!1}return!0}function Gm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hm(e,t){var n=Gm(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Gm(n)}}function Y_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Y_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function j_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=bc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bc(e.document)}return t}function ip(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var NM=ta&&"documentMode"in document&&11>=document.documentMode,tr=null,fd=null,mo=null,dd=!1;function Vm(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dd||tr==null||tr!==bc(i)||(i=tr,"selectionStart"in i&&ip(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),mo&&Do(mo,i)||(mo=i,i=Vc(fd,"onSelect"),0<i.length&&(t=new lu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=tr)))}function ja(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var er={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},Vu={},Z_={};ta&&(Z_=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function Es(e){if(Vu[e])return Vu[e];if(!er[e])return e;var t=er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Z_)return Vu[e]=t[n];return e}var K_=Es("animationend"),Q_=Es("animationiteration"),J_=Es("animationstart"),LM=Es("transitionrun"),OM=Es("transitionstart"),PM=Es("transitioncancel"),$_=Es("transitionend"),tv=new Map,hd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hd.push("scrollEnd");function ui(e,t){tv.set(e,t),ys(t,[e])}var Tc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Xn=[],nr=0,ap=0;function fu(){for(var e=nr,t=ap=nr=0;t<e;){var n=Xn[t];Xn[t++]=null;var i=Xn[t];Xn[t++]=null;var a=Xn[t];Xn[t++]=null;var s=Xn[t];if(Xn[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&ev(n,a,s)}}function du(e,t,n,i){Xn[nr++]=e,Xn[nr++]=t,Xn[nr++]=n,Xn[nr++]=i,ap|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function sp(e,t,n,i){return du(e,t,n,i),Ac(e)}function bs(e,t){return du(e,null,null,t),Ac(e)}function ev(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-Bn(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function Ac(e){if(50<bo)throw bo=0,Od=null,Error(tt(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ir={};function IM(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(e,t,n,i){return new IM(e,t,n,i)}function rp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zi(e,t){var n=e.alternate;return n===null?(n=Ln(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function nv(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function nc(e,t,n,i,a,s){var r=0;if(i=e,typeof e=="function")rp(e)&&(r=1);else if(typeof e=="string")r=HE(e,n,Mi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case td:return e=Ln(31,n,t,a),e.elementType=td,e.lanes=s,e;case Zs:return cs(n.children,a,s,t);case y_:r=8,a|=24;break;case Qf:return e=Ln(12,n,t,a|2),e.elementType=Qf,e.lanes=s,e;case Jf:return e=Ln(13,n,t,a),e.elementType=Jf,e.lanes=s,e;case $f:return e=Ln(19,n,t,a),e.elementType=$f,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wi:r=10;break t;case M_:r=9;break t;case qh:r=11;break t;case Yh:r=14;break t;case va:r=16,i=null;break t}r=29,n=Error(tt(130,e===null?"null":typeof e,"")),i=null}return t=Ln(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function cs(e,t,n,i){return e=Ln(7,e,i,t),e.lanes=n,e}function ku(e,t,n){return e=Ln(6,e,null,t),e.lanes=n,e}function iv(e){var t=Ln(18,null,null,0);return t.stateNode=e,t}function Xu(e,t,n){return t=Ln(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var km=new WeakMap;function Qn(e,t){if(typeof e=="object"&&e!==null){var n=km.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Em(t)},km.set(e,t),t)}return{value:e,source:t,stack:Em(t)}}var ar=[],sr=0,Rc=null,Uo=0,Yn=[],jn=0,Ga=null,_i=1,vi="";function Vi(e,t){ar[sr++]=Uo,ar[sr++]=Rc,Rc=e,Uo=t}function av(e,t,n){Yn[jn++]=_i,Yn[jn++]=vi,Yn[jn++]=Ga,Ga=e;var i=_i;e=vi;var a=32-Bn(i)-1;i&=~(1<<a),n+=1;var s=32-Bn(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,_i=1<<32-Bn(t)+a|n<<a|i,vi=s+e}else _i=1<<s|n<<a|i,vi=e}function op(e){e.return!==null&&(Vi(e,1),av(e,1,0))}function lp(e){for(;e===Rc;)Rc=ar[--sr],ar[sr]=null,Uo=ar[--sr],ar[sr]=null;for(;e===Ga;)Ga=Yn[--jn],Yn[jn]=null,vi=Yn[--jn],Yn[jn]=null,_i=Yn[--jn],Yn[jn]=null}function sv(e,t){Yn[jn++]=_i,Yn[jn++]=vi,Yn[jn++]=Ga,_i=t.id,vi=t.overflow,Ga=e}var sn=null,Te=null,Jt=!1,Na=null,Jn=!1,pd=Error(tt(519));function Ha(e){var t=Error(tt(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw No(Qn(t,e)),pd}function Xm(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[an]=e,t[An]=i,n){case"dialog":Yt("cancel",t),Yt("close",t);break;case"iframe":case"object":case"embed":Yt("load",t);break;case"video":case"audio":for(n=0;n<Io.length;n++)Yt(Io[n],t);break;case"source":Yt("error",t);break;case"img":case"image":case"link":Yt("error",t),Yt("load",t);break;case"details":Yt("toggle",t);break;case"input":Yt("invalid",t),P_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Yt("invalid",t);break;case"textarea":Yt("invalid",t),B_(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Hx(t.textContent,n)?(i.popover!=null&&(Yt("beforetoggle",t),Yt("toggle",t)),i.onScroll!=null&&Yt("scroll",t),i.onScrollEnd!=null&&Yt("scrollend",t),i.onClick!=null&&(t.onclick=qi),t=!0):t=!1,t||Ha(e,!0)}function Wm(e){for(sn=e.return;sn;)switch(sn.tag){case 5:case 31:case 13:Jn=!1;return;case 27:case 3:Jn=!0;return;default:sn=sn.return}}function Ds(e){if(e!==sn)return!1;if(!Jt)return Wm(e),Jt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||zd(e.type,e.memoizedProps)),n=!n),n&&Te&&Ha(e),Wm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(317));Te=Ug(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(317));Te=Ug(e)}else t===27?(t=Te,qa(e.type)?(e=kd,kd=null,Te=e):Te=t):Te=sn?ei(e.stateNode.nextSibling):null;return!0}function hs(){Te=sn=null,Jt=!1}function Wu(){var e=Na;return e!==null&&(Mn===null?Mn=e:Mn.push.apply(Mn,e),Na=null),e}function No(e){Na===null?Na=[e]:Na.push(e)}var md=wi(null),Ts=null,Yi=null;function Sa(e,t,n){Ee(md,t._currentValue),t._currentValue=n}function Ki(e){e._currentValue=md.current,tn(md)}function gd(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function _d(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),gd(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(tt(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),gd(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Or(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(tt(387));if(r=r.memoizedProps,r!==null){var o=a.type;zn(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===Sc.current){if(r=a.alternate,r===null)throw Error(tt(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Fo):e=[Fo])}a=a.return}e!==null&&_d(t,e,n,i),t.flags|=262144}function Cc(e){for(e=e.firstContext;e!==null;){if(!zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ps(e){Ts=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rn(e){return rv(Ts,e)}function ml(e,t){return Ts===null&&ps(e),rv(e,t)}function rv(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yi===null){if(e===null)throw Error(tt(308));Yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yi=Yi.next=t;return n}var BM=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},FM=je.unstable_scheduleCallback,zM=je.unstable_NormalPriority,Xe={$$typeof:Wi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cp(){return{controller:new BM,data:new Map,refCount:0}}function Ko(e){e.refCount--,e.refCount===0&&FM(zM,function(){e.controller.abort()})}var go=null,vd=0,xr=0,ur=null;function GM(e,t){if(go===null){var n=go=[];vd=0,xr=Op(),ur={status:"pending",value:void 0,then:function(i){n.push(i)}}}return vd++,t.then(qm,qm),t}function qm(){if(--vd===0&&go!==null){ur!==null&&(ur.status="fulfilled");var e=go;go=null,xr=0,ur=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function HM(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Ym=Ut.S;Ut.S=function(e,t){Sx=Pn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&GM(e,t),Ym!==null&&Ym(e,t)};var us=wi(null);function up(){var e=us.current;return e!==null?e:ye.pooledCache}function ic(e,t){t===null?Ee(us,us.current):Ee(us,t.pool)}function ov(){var e=up();return e===null?null:{parent:Xe._currentValue,pool:e}}var Pr=Error(tt(460)),fp=Error(tt(474)),hu=Error(tt(542)),wc={then:function(){}};function jm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function lv(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(qi,qi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Km(e),e;default:if(typeof t.status=="string")t.then(qi,qi);else{if(e=ye,e!==null&&100<e.shellSuspendCounter)throw Error(tt(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Km(e),e}throw fs=t,Pr}}function es(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(fs=n,Pr):n}}var fs=null;function Zm(){if(fs===null)throw Error(tt(459));var e=fs;return fs=null,e}function Km(e){if(e===Pr||e===hu)throw Error(tt(483))}var fr=null,Lo=0;function gl(e){var t=Lo;return Lo+=1,fr===null&&(fr=[]),lv(fr,e,t)}function Xr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function _l(e,t){throw t.$$typeof===Ry?Error(tt(525)):(e=Object.prototype.toString.call(t),Error(tt(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function cv(e){function t(f,m){if(e){var _=f.deletions;_===null?(f.deletions=[m],f.flags|=16):_.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function i(f){for(var m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function a(f,m){return f=Zi(f,m),f.index=0,f.sibling=null,f}function s(f,m,_){return f.index=_,e?(_=f.alternate,_!==null?(_=_.index,_<m?(f.flags|=67108866,m):_):(f.flags|=67108866,m)):(f.flags|=1048576,m)}function r(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,m,_,y){return m===null||m.tag!==6?(m=ku(_,f.mode,y),m.return=f,m):(m=a(m,_),m.return=f,m)}function l(f,m,_,y){var C=_.type;return C===Zs?h(f,m,_.props.children,y,_.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===va&&es(C)===m.type)?(m=a(m,_.props),Xr(m,_),m.return=f,m):(m=nc(_.type,_.key,_.props,null,f.mode,y),Xr(m,_),m.return=f,m)}function c(f,m,_,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=Xu(_,f.mode,y),m.return=f,m):(m=a(m,_.children||[]),m.return=f,m)}function h(f,m,_,y,C){return m===null||m.tag!==7?(m=cs(_,f.mode,y,C),m.return=f,m):(m=a(m,_),m.return=f,m)}function d(f,m,_){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=ku(""+m,f.mode,_),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case cl:return _=nc(m.type,m.key,m.props,null,f.mode,_),Xr(_,m),_.return=f,_;case io:return m=Xu(m,f.mode,_),m.return=f,m;case va:return m=es(m),d(f,m,_)}if(ao(m)||Hr(m))return m=cs(m,f.mode,_,null),m.return=f,m;if(typeof m.then=="function")return d(f,gl(m),_);if(m.$$typeof===Wi)return d(f,ml(f,m),_);_l(f,m)}return null}function u(f,m,_,y){var C=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return C!==null?null:o(f,m,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case cl:return _.key===C?l(f,m,_,y):null;case io:return _.key===C?c(f,m,_,y):null;case va:return _=es(_),u(f,m,_,y)}if(ao(_)||Hr(_))return C!==null?null:h(f,m,_,y,null);if(typeof _.then=="function")return u(f,m,gl(_),y);if(_.$$typeof===Wi)return u(f,m,ml(f,_),y);_l(f,_)}return null}function p(f,m,_,y,C){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return f=f.get(_)||null,o(m,f,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case cl:return f=f.get(y.key===null?_:y.key)||null,l(m,f,y,C);case io:return f=f.get(y.key===null?_:y.key)||null,c(m,f,y,C);case va:return y=es(y),p(f,m,_,y,C)}if(ao(y)||Hr(y))return f=f.get(_)||null,h(m,f,y,C,null);if(typeof y.then=="function")return p(f,m,_,gl(y),C);if(y.$$typeof===Wi)return p(f,m,_,ml(m,y),C);_l(m,y)}return null}function v(f,m,_,y){for(var C=null,b=null,R=m,x=m=0,A=null;R!==null&&x<_.length;x++){R.index>x?(A=R,R=null):A=R.sibling;var w=u(f,R,_[x],y);if(w===null){R===null&&(R=A);break}e&&R&&w.alternate===null&&t(f,R),m=s(w,m,x),b===null?C=w:b.sibling=w,b=w,R=A}if(x===_.length)return n(f,R),Jt&&Vi(f,x),C;if(R===null){for(;x<_.length;x++)R=d(f,_[x],y),R!==null&&(m=s(R,m,x),b===null?C=R:b.sibling=R,b=R);return Jt&&Vi(f,x),C}for(R=i(R);x<_.length;x++)A=p(R,f,x,_[x],y),A!==null&&(e&&A.alternate!==null&&R.delete(A.key===null?x:A.key),m=s(A,m,x),b===null?C=A:b.sibling=A,b=A);return e&&R.forEach(function(D){return t(f,D)}),Jt&&Vi(f,x),C}function M(f,m,_,y){if(_==null)throw Error(tt(151));for(var C=null,b=null,R=m,x=m=0,A=null,w=_.next();R!==null&&!w.done;x++,w=_.next()){R.index>x?(A=R,R=null):A=R.sibling;var D=u(f,R,w.value,y);if(D===null){R===null&&(R=A);break}e&&R&&D.alternate===null&&t(f,R),m=s(D,m,x),b===null?C=D:b.sibling=D,b=D,R=A}if(w.done)return n(f,R),Jt&&Vi(f,x),C;if(R===null){for(;!w.done;x++,w=_.next())w=d(f,w.value,y),w!==null&&(m=s(w,m,x),b===null?C=w:b.sibling=w,b=w);return Jt&&Vi(f,x),C}for(R=i(R);!w.done;x++,w=_.next())w=p(R,f,x,w.value,y),w!==null&&(e&&w.alternate!==null&&R.delete(w.key===null?x:w.key),m=s(w,m,x),b===null?C=w:b.sibling=w,b=w);return e&&R.forEach(function(F){return t(f,F)}),Jt&&Vi(f,x),C}function g(f,m,_,y){if(typeof _=="object"&&_!==null&&_.type===Zs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case cl:t:{for(var C=_.key;m!==null;){if(m.key===C){if(C=_.type,C===Zs){if(m.tag===7){n(f,m.sibling),y=a(m,_.props.children),y.return=f,f=y;break t}}else if(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===va&&es(C)===m.type){n(f,m.sibling),y=a(m,_.props),Xr(y,_),y.return=f,f=y;break t}n(f,m);break}else t(f,m);m=m.sibling}_.type===Zs?(y=cs(_.props.children,f.mode,y,_.key),y.return=f,f=y):(y=nc(_.type,_.key,_.props,null,f.mode,y),Xr(y,_),y.return=f,f=y)}return r(f);case io:t:{for(C=_.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(f,m.sibling),y=a(m,_.children||[]),y.return=f,f=y;break t}else{n(f,m);break}else t(f,m);m=m.sibling}y=Xu(_,f.mode,y),y.return=f,f=y}return r(f);case va:return _=es(_),g(f,m,_,y)}if(ao(_))return v(f,m,_,y);if(Hr(_)){if(C=Hr(_),typeof C!="function")throw Error(tt(150));return _=C.call(_),M(f,m,_,y)}if(typeof _.then=="function")return g(f,m,gl(_),y);if(_.$$typeof===Wi)return g(f,m,ml(f,_),y);_l(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,m!==null&&m.tag===6?(n(f,m.sibling),y=a(m,_),y.return=f,f=y):(n(f,m),y=ku(_,f.mode,y),y.return=f,f=y),r(f)):n(f,m)}return function(f,m,_,y){try{Lo=0;var C=g(f,m,_,y);return fr=null,C}catch(R){if(R===Pr||R===hu)throw R;var b=Ln(29,R,null,f.mode);return b.lanes=y,b.return=f,b}finally{}}}var ms=cv(!0),uv=cv(!1),xa=!1;function dp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function La(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Oa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,ie&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Ac(e),ev(e,null,n),t}return du(e,i,t,n),Ac(e)}function _o(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,C_(e,n)}}function qu(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Sd=!1;function vo(){if(Sd){var e=ur;if(e!==null)throw e}}function xo(e,t,n,i){Sd=!1;var a=e.updateQueue;xa=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var d=a.baseState;r=0,h=c=l=null,o=s;do{var u=o.lane&-536870913,p=u!==o.lane;if(p?(Zt&u)===u:(i&u)===u){u!==0&&u===xr&&(Sd=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,M=o;u=t;var g=n;switch(M.tag){case 1:if(v=M.payload,typeof v=="function"){d=v.call(g,d,u);break t}d=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=M.payload,u=typeof v=="function"?v.call(g,d,u):v,u==null)break t;d=Re({},d,u);break t;case 2:xa=!0}}u=o.callback,u!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[u]:p.push(u))}else p={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,r|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);h===null&&(l=d),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=h,s===null&&(a.shared.lanes=0),ka|=r,e.lanes=r,e.memoizedState=d}}function fv(e,t){if(typeof e!="function")throw Error(tt(191,e));e.call(t)}function dv(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)fv(n[e],t)}var Sr=wi(null),Dc=wi(0);function Qm(e,t){e=aa,Ee(Dc,e),Ee(Sr,t),aa=e|t.baseLanes}function yd(){Ee(Dc,aa),Ee(Sr,Sr.current)}function hp(){aa=Dc.current,tn(Sr),tn(Dc)}var Gn=wi(null),ti=null;function ya(e){var t=e.alternate;Ee(Fe,Fe.current&1),Ee(Gn,e),ti===null&&(t===null||Sr.current!==null||t.memoizedState!==null)&&(ti=e)}function Md(e){Ee(Fe,Fe.current),Ee(Gn,e),ti===null&&(ti=e)}function hv(e){e.tag===22?(Ee(Fe,Fe.current),Ee(Gn,e),ti===null&&(ti=e)):Ma()}function Ma(){Ee(Fe,Fe.current),Ee(Gn,Gn.current)}function Nn(e){tn(Gn),ti===e&&(ti=null),tn(Fe)}var Fe=wi(0);function Uc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Hd(n)||Vd(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ea=0,Ft=null,_e=null,Ve=null,Nc=!1,dr=!1,gs=!1,Lc=0,Oo=0,hr=null,VM=0;function Ne(){throw Error(tt(321))}function pp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zn(e[n],t[n]))return!1;return!0}function mp(e,t,n,i,a,s){return ea=s,Ft=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ut.H=e===null||e.memoizedState===null?Xv:Ap,gs=!1,s=n(i,a),gs=!1,dr&&(s=mv(t,n,i,a)),pv(e),s}function pv(e){Ut.H=Po;var t=_e!==null&&_e.next!==null;if(ea=0,Ve=_e=Ft=null,Nc=!1,Oo=0,hr=null,t)throw Error(tt(300));e===null||We||(e=e.dependencies,e!==null&&Cc(e)&&(We=!0))}function mv(e,t,n,i){Ft=e;var a=0;do{if(dr&&(hr=null),Oo=0,dr=!1,25<=a)throw Error(tt(301));if(a+=1,Ve=_e=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Ut.H=Wv,s=t(n,i)}while(dr);return s}function kM(){var e=Ut.H,t=e.useState()[0];return t=typeof t.then=="function"?Qo(t):t,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(Ft.flags|=1024),t}function gp(){var e=Lc!==0;return Lc=0,e}function _p(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function vp(e){if(Nc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Nc=!1}ea=0,Ve=_e=Ft=null,dr=!1,Oo=Lc=0,hr=null}function pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Ft.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Ge(){if(_e===null){var e=Ft.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=Ve===null?Ft.memoizedState:Ve.next;if(t!==null)Ve=t,_e=e;else{if(e===null)throw Ft.alternate===null?Error(tt(467)):Error(tt(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Ve===null?Ft.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function pu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qo(e){var t=Oo;return Oo+=1,hr===null&&(hr=[]),e=lv(hr,e,t),t=Ft,(Ve===null?t.memoizedState:Ve.next)===null&&(t=t.alternate,Ut.H=t===null||t.memoizedState===null?Xv:Ap),e}function mu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qo(e);if(e.$$typeof===Wi)return rn(e)}throw Error(tt(438,String(e)))}function xp(e){var t=null,n=Ft.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Ft.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=pu(),Ft.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Cy;return t.index++,n}function na(e,t){return typeof t=="function"?t(e):t}function ac(e){var t=Ge();return Sp(t,_e,e)}function Sp(e,t,n){var i=e.queue;if(i===null)throw Error(tt(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(Zt&d)===d:(ea&d)===d){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===xr&&(h=!0);else if((ea&u)===u){c=c.next,u===xr&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=s):l=l.next=d,Ft.lanes|=u,ka|=u;d=c.action,gs&&n(s,d),s=c.hasEagerState?c.eagerState:n(s,d)}else u={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=s):l=l.next=u,Ft.lanes|=d,ka|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!zn(s,e.memoizedState)&&(We=!0,h&&(n=ur,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Yu(e){var t=Ge(),n=t.queue;if(n===null)throw Error(tt(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);zn(s,t.memoizedState)||(We=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function gv(e,t,n){var i=Ft,a=Ge(),s=Jt;if(s){if(n===void 0)throw Error(tt(407));n=n()}else n=t();var r=!zn((_e||a).memoizedState,n);if(r&&(a.memoizedState=n,We=!0),a=a.queue,yp(xv.bind(null,i,a,e),[e]),a.getSnapshot!==t||r||Ve!==null&&Ve.memoizedState.tag&1){if(i.flags|=2048,yr(9,{destroy:void 0},vv.bind(null,i,a,n,t),null),ye===null)throw Error(tt(349));s||ea&127||_v(i,t,n)}return n}function _v(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ft.updateQueue,t===null?(t=pu(),Ft.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vv(e,t,n,i){t.value=n,t.getSnapshot=i,Sv(t)&&yv(e)}function xv(e,t,n){return n(function(){Sv(t)&&yv(e)})}function Sv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zn(e,n)}catch{return!0}}function yv(e){var t=bs(e,2);t!==null&&En(t,e,2)}function Ed(e){var t=pn();if(typeof e=="function"){var n=e;if(e=n(),gs){Ta(!0);try{n()}finally{Ta(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},t}function Mv(e,t,n,i){return e.baseState=n,Sp(e,_e,typeof i=="function"?i:na)}function XM(e,t,n,i,a){if(_u(e))throw Error(tt(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Ut.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,Ev(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Ev(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=Ut.T,r={};Ut.T=r;try{var o=n(a,i),l=Ut.S;l!==null&&l(r,o),Jm(e,t,o)}catch(c){bd(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Ut.T=s}}else try{s=n(a,i),Jm(e,t,s)}catch(c){bd(e,t,c)}}function Jm(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){$m(e,t,i)},function(i){return bd(e,t,i)}):$m(e,t,n)}function $m(e,t,n){t.status="fulfilled",t.value=n,bv(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ev(e,n)))}function bd(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,bv(t),t=t.next;while(t!==i)}e.action=null}function bv(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Tv(e,t){return t}function tg(e,t){if(Jt){var n=ye.formState;if(n!==null){t:{var i=Ft;if(Jt){if(Te){e:{for(var a=Te,s=Jn;a.nodeType!==8;){if(!s){a=null;break e}if(a=ei(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Te=ei(a.nextSibling),i=a.data==="F!";break t}}Ha(i)}i=!1}i&&(t=n[0])}}return n=pn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tv,lastRenderedState:t},n.queue=i,n=Hv.bind(null,Ft,i),i.dispatch=n,i=Ed(!1),s=Tp.bind(null,Ft,!1,i.queue),i=pn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=XM.bind(null,Ft,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function eg(e){var t=Ge();return Av(t,_e,e)}function Av(e,t,n){if(t=Sp(e,t,Tv)[0],e=ac(na)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Qo(t)}catch(r){throw r===Pr?hu:r}else i=t;t=Ge();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(Ft.flags|=2048,yr(9,{destroy:void 0},WM.bind(null,a,n),null)),[i,s,e]}function WM(e,t){e.action=t}function ng(e){var t=Ge(),n=_e;if(n!==null)return Av(t,n,e);Ge(),t=t.memoizedState,n=Ge();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function yr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Ft.updateQueue,t===null&&(t=pu(),Ft.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Rv(){return Ge().memoizedState}function sc(e,t,n,i){var a=pn();Ft.flags|=e,a.memoizedState=yr(1|t,{destroy:void 0},n,i===void 0?null:i)}function gu(e,t,n,i){var a=Ge();i=i===void 0?null:i;var s=a.memoizedState.inst;_e!==null&&i!==null&&pp(i,_e.memoizedState.deps)?a.memoizedState=yr(t,s,n,i):(Ft.flags|=e,a.memoizedState=yr(1|t,s,n,i))}function ig(e,t){sc(8390656,8,e,t)}function yp(e,t){gu(2048,8,e,t)}function qM(e){Ft.flags|=4;var t=Ft.updateQueue;if(t===null)t=pu(),Ft.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Cv(e){var t=Ge().memoizedState;return qM({ref:t,nextImpl:e}),function(){if(ie&2)throw Error(tt(440));return t.impl.apply(void 0,arguments)}}function wv(e,t){return gu(4,2,e,t)}function Dv(e,t){return gu(4,4,e,t)}function Uv(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nv(e,t,n){n=n!=null?n.concat([e]):null,gu(4,4,Uv.bind(null,t,e),n)}function Mp(){}function Lv(e,t){var n=Ge();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&pp(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Ov(e,t){var n=Ge();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&pp(t,i[1]))return i[0];if(i=e(),gs){Ta(!0);try{e()}finally{Ta(!1)}}return n.memoizedState=[i,t],i}function Ep(e,t,n){return n===void 0||ea&1073741824&&!(Zt&261930)?e.memoizedState=t:(e.memoizedState=n,e=Mx(),Ft.lanes|=e,ka|=e,n)}function Pv(e,t,n,i){return zn(n,t)?n:Sr.current!==null?(e=Ep(e,n,i),zn(e,t)||(We=!0),e):!(ea&42)||ea&1073741824&&!(Zt&261930)?(We=!0,e.memoizedState=n):(e=Mx(),Ft.lanes|=e,ka|=e,t)}function Iv(e,t,n,i,a){var s=ae.p;ae.p=s!==0&&8>s?s:8;var r=Ut.T,o={};Ut.T=o,Tp(e,!1,t,n);try{var l=a(),c=Ut.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=HM(l,i);So(e,t,h,Fn(e))}else So(e,t,i,Fn(e))}catch(d){So(e,t,{then:function(){},status:"rejected",reason:d},Fn())}finally{ae.p=s,r!==null&&o.types!==null&&(r.types=o.types),Ut.T=r}}function YM(){}function Td(e,t,n,i){if(e.tag!==5)throw Error(tt(476));var a=Bv(e).queue;Iv(e,a,t,ls,n===null?YM:function(){return Fv(e),n(i)})}function Bv(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ls,baseState:ls,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:ls},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Fv(e){var t=Bv(e);t.next===null&&(t=e.alternate.memoizedState),So(e,t.next.queue,{},Fn())}function bp(){return rn(Fo)}function zv(){return Ge().memoizedState}function Gv(){return Ge().memoizedState}function jM(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Fn();e=La(n);var i=Oa(t,e,n);i!==null&&(En(i,t,n),_o(i,t,n)),t={cache:cp()},e.payload=t;return}t=t.return}}function ZM(e,t,n){var i=Fn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},_u(e)?Vv(t,n):(n=sp(e,t,n,i),n!==null&&(En(n,e,i),kv(n,t,i)))}function Hv(e,t,n){var i=Fn();So(e,t,n,i)}function So(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(_u(e))Vv(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,zn(o,r))return du(e,t,a,0),ye===null&&fu(),!1}catch{}finally{}if(n=sp(e,t,a,i),n!==null)return En(n,e,i),kv(n,t,i),!0}return!1}function Tp(e,t,n,i){if(i={lane:2,revertLane:Op(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},_u(e)){if(t)throw Error(tt(479))}else t=sp(e,n,i,2),t!==null&&En(t,e,2)}function _u(e){var t=e.alternate;return e===Ft||t!==null&&t===Ft}function Vv(e,t){dr=Nc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kv(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,C_(e,n)}}var Po={readContext:rn,use:mu,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne};Po.useEffectEvent=Ne;var Xv={readContext:rn,use:mu,useCallback:function(e,t){return pn().memoizedState=[e,t===void 0?null:t],e},useContext:rn,useEffect:ig,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,sc(4194308,4,Uv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return sc(4194308,4,e,t)},useInsertionEffect:function(e,t){sc(4,2,e,t)},useMemo:function(e,t){var n=pn();t=t===void 0?null:t;var i=e();if(gs){Ta(!0);try{e()}finally{Ta(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=pn();if(n!==void 0){var a=n(t);if(gs){Ta(!0);try{n(t)}finally{Ta(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=ZM.bind(null,Ft,e),[i.memoizedState,e]},useRef:function(e){var t=pn();return e={current:e},t.memoizedState=e},useState:function(e){e=Ed(e);var t=e.queue,n=Hv.bind(null,Ft,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Mp,useDeferredValue:function(e,t){var n=pn();return Ep(n,e,t)},useTransition:function(){var e=Ed(!1);return e=Iv.bind(null,Ft,e.queue,!0,!1),pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Ft,a=pn();if(Jt){if(n===void 0)throw Error(tt(407));n=n()}else{if(n=t(),ye===null)throw Error(tt(349));Zt&127||_v(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,ig(xv.bind(null,i,s,e),[e]),i.flags|=2048,yr(9,{destroy:void 0},vv.bind(null,i,s,n,t),null),n},useId:function(){var e=pn(),t=ye.identifierPrefix;if(Jt){var n=vi,i=_i;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Lc++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=VM++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:bp,useFormState:tg,useActionState:tg,useOptimistic:function(e){var t=pn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Tp.bind(null,Ft,!0,n),n.dispatch=t,[e,t]},useMemoCache:xp,useCacheRefresh:function(){return pn().memoizedState=jM.bind(null,Ft)},useEffectEvent:function(e){var t=pn(),n={impl:e};return t.memoizedState=n,function(){if(ie&2)throw Error(tt(440));return n.impl.apply(void 0,arguments)}}},Ap={readContext:rn,use:mu,useCallback:Lv,useContext:rn,useEffect:yp,useImperativeHandle:Nv,useInsertionEffect:wv,useLayoutEffect:Dv,useMemo:Ov,useReducer:ac,useRef:Rv,useState:function(){return ac(na)},useDebugValue:Mp,useDeferredValue:function(e,t){var n=Ge();return Pv(n,_e.memoizedState,e,t)},useTransition:function(){var e=ac(na)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Qo(e),t]},useSyncExternalStore:gv,useId:zv,useHostTransitionStatus:bp,useFormState:eg,useActionState:eg,useOptimistic:function(e,t){var n=Ge();return Mv(n,_e,e,t)},useMemoCache:xp,useCacheRefresh:Gv};Ap.useEffectEvent=Cv;var Wv={readContext:rn,use:mu,useCallback:Lv,useContext:rn,useEffect:yp,useImperativeHandle:Nv,useInsertionEffect:wv,useLayoutEffect:Dv,useMemo:Ov,useReducer:Yu,useRef:Rv,useState:function(){return Yu(na)},useDebugValue:Mp,useDeferredValue:function(e,t){var n=Ge();return _e===null?Ep(n,e,t):Pv(n,_e.memoizedState,e,t)},useTransition:function(){var e=Yu(na)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Qo(e),t]},useSyncExternalStore:gv,useId:zv,useHostTransitionStatus:bp,useFormState:ng,useActionState:ng,useOptimistic:function(e,t){var n=Ge();return _e!==null?Mv(n,_e,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:xp,useCacheRefresh:Gv};Wv.useEffectEvent=Cv;function ju(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ad={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Fn(),a=La(i);a.payload=t,n!=null&&(a.callback=n),t=Oa(e,a,i),t!==null&&(En(t,e,i),_o(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Fn(),a=La(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Oa(e,a,i),t!==null&&(En(t,e,i),_o(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fn(),i=La(n);i.tag=2,t!=null&&(i.callback=t),t=Oa(e,i,n),t!==null&&(En(t,e,n),_o(t,e,n))}};function ag(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!Do(n,i)||!Do(a,s):!0}function sg(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Ad.enqueueReplaceState(t,t.state,null)}function _s(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Re({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function qv(e){Tc(e)}function Yv(e){console.error(e)}function jv(e){Tc(e)}function Oc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function rg(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Rd(e,t,n){return n=La(n),n.tag=3,n.payload={element:null},n.callback=function(){Oc(e,t)},n}function Zv(e){return e=La(e),e.tag=3,e}function Kv(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){rg(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){rg(t,n,i),typeof a!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function KM(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Or(t,n,a,!0),n=Gn.current,n!==null){switch(n.tag){case 31:case 13:return ti===null?zc():n.alternate===null&&Le===0&&(Le=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===wc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),rf(e,i,a)),!1;case 22:return n.flags|=65536,i===wc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),rf(e,i,a)),!1}throw Error(tt(435,n.tag))}return rf(e,i,a),zc(),!1}if(Jt)return t=Gn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==pd&&(e=Error(tt(422),{cause:i}),No(Qn(e,n)))):(i!==pd&&(t=Error(tt(423),{cause:i}),No(Qn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Qn(i,n),a=Rd(e.stateNode,i,a),qu(e,a),Le!==4&&(Le=2)),!1;var s=Error(tt(520),{cause:i});if(s=Qn(s,n),Eo===null?Eo=[s]:Eo.push(s),Le!==4&&(Le=2),t===null)return!0;i=Qn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Rd(n.stateNode,i,e),qu(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Pa===null||!Pa.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Zv(a),Kv(a,e,n,i),qu(n,a),!1}n=n.return}while(n!==null);return!1}var Rp=Error(tt(461)),We=!1;function nn(e,t,n,i){t.child=e===null?uv(t,null,n,i):ms(t,e.child,n,i)}function og(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return ps(t),i=mp(e,t,n,r,s,a),o=gp(),e!==null&&!We?(_p(e,t,a),ia(e,t,a)):(Jt&&o&&op(t),t.flags|=1,nn(e,t,i,a),t.child)}function lg(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!rp(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,Qv(e,t,s,i,a)):(e=nc(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Cp(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:Do,n(r,i)&&e.ref===t.ref)return ia(e,t,a)}return t.flags|=1,e=Zi(s,i),e.ref=t.ref,e.return=t,t.child=e}function Qv(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(Do(s,i)&&e.ref===t.ref)if(We=!1,t.pendingProps=i=s,Cp(e,a))e.flags&131072&&(We=!0);else return t.lanes=e.lanes,ia(e,t,a)}return Cd(e,t,n,i,a)}function Jv(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return cg(e,t,s,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ic(t,s!==null?s.cachePool:null),s!==null?Qm(t,s):yd(),hv(t);else return i=t.lanes=536870912,cg(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(ic(t,s.cachePool),Qm(t,s),Ma(),t.memoizedState=null):(e!==null&&ic(t,null),yd(),Ma());return nn(e,t,a,n),t.child}function ro(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cg(e,t,n,i,a){var s=up();return s=s===null?null:{parent:Xe._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&ic(t,null),yd(),hv(t),e!==null&&Or(e,t,i,!0),t.childLanes=a,null}function rc(e,t){return t=Pc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ug(e,t,n){return ms(t,e.child,null,n),e=rc(t,t.pendingProps),e.flags|=2,Nn(t),t.memoizedState=null,e}function QM(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Jt){if(i.mode==="hidden")return e=rc(t,i),t.lanes=536870912,ro(null,e);if(Md(t),(e=Te)?(e=Xx(e,Jn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ga!==null?{id:_i,overflow:vi}:null,retryLane:536870912,hydrationErrors:null},n=iv(e),n.return=t,t.child=n,sn=t,Te=null)):e=null,e===null)throw Ha(t);return t.lanes=536870912,null}return rc(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(Md(t),a)if(t.flags&256)t.flags&=-257,t=ug(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(tt(558));else if(We||Or(e,t,n,!1),a=(n&e.childLanes)!==0,We||a){if(i=ye,i!==null&&(r=w_(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,bs(e,r),En(i,e,r),Rp;zc(),t=ug(e,t,n)}else e=s.treeContext,Te=ei(r.nextSibling),sn=t,Jt=!0,Na=null,Jn=!1,e!==null&&sv(t,e),t=rc(t,i),t.flags|=4096;return t}return e=Zi(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function oc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(tt(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Cd(e,t,n,i,a){return ps(t),n=mp(e,t,n,i,void 0,a),i=gp(),e!==null&&!We?(_p(e,t,a),ia(e,t,a)):(Jt&&i&&op(t),t.flags|=1,nn(e,t,n,a),t.child)}function fg(e,t,n,i,a,s){return ps(t),t.updateQueue=null,n=mv(t,i,n,a),pv(e),i=gp(),e!==null&&!We?(_p(e,t,s),ia(e,t,s)):(Jt&&i&&op(t),t.flags|=1,nn(e,t,n,s),t.child)}function dg(e,t,n,i,a){if(ps(t),t.stateNode===null){var s=ir,r=n.contextType;typeof r=="object"&&r!==null&&(s=rn(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ad,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},dp(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?rn(r):ir,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(ju(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Ad.enqueueReplaceState(s,s.state,null),xo(t,i,s,a),vo(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=_s(n,o);s.props=l;var c=s.context,h=n.contextType;r=ir,typeof h=="object"&&h!==null&&(r=rn(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&sg(t,s,i,r),xa=!1;var u=t.memoizedState;s.state=u,xo(t,i,s,a),vo(),c=t.memoizedState,o||u!==c||xa?(typeof d=="function"&&(ju(t,n,d,i),c=t.memoizedState),(l=xa||ag(t,n,l,i,u,c,r))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,xd(e,t),r=t.memoizedProps,h=_s(n,r),s.props=h,d=t.pendingProps,u=s.context,c=n.contextType,l=ir,typeof c=="object"&&c!==null&&(l=rn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==d||u!==l)&&sg(t,s,i,l),xa=!1,u=t.memoizedState,s.state=u,xo(t,i,s,a),vo();var p=t.memoizedState;r!==d||u!==p||xa||e!==null&&e.dependencies!==null&&Cc(e.dependencies)?(typeof o=="function"&&(ju(t,n,o,i),p=t.memoizedState),(h=xa||ag(t,n,h,i,u,p,l)||e!==null&&e.dependencies!==null&&Cc(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,p,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,p,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),s.props=i,s.state=p,s.context=l,i=h):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,oc(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=ms(t,e.child,null,a),t.child=ms(t,null,n,a)):nn(e,t,n,a),t.memoizedState=s.state,e=t.child):e=ia(e,t,a),e}function hg(e,t,n,i){return hs(),t.flags|=256,nn(e,t,n,i),t.child}var Zu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ku(e){return{baseLanes:e,cachePool:ov()}}function Qu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=On),e}function $v(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Fe.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Jt){if(a?ya(t):Ma(),(e=Te)?(e=Xx(e,Jn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ga!==null?{id:_i,overflow:vi}:null,retryLane:536870912,hydrationErrors:null},n=iv(e),n.return=t,t.child=n,sn=t,Te=null)):e=null,e===null)throw Ha(t);return Vd(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(Ma(),a=t.mode,o=Pc({mode:"hidden",children:o},a),i=cs(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Ku(n),i.childLanes=Qu(e,r,n),t.memoizedState=Zu,ro(null,i)):(ya(t),wd(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)t.flags&256?(ya(t),t.flags&=-257,t=Ju(e,t,n)):t.memoizedState!==null?(Ma(),t.child=e.child,t.flags|=128,t=null):(Ma(),o=i.fallback,a=t.mode,i=Pc({mode:"visible",children:i.children},a),o=cs(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,ms(t,e.child,null,n),i=t.child,i.memoizedState=Ku(n),i.childLanes=Qu(e,r,n),t.memoizedState=Zu,t=ro(null,i));else if(ya(t),Vd(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(tt(419)),i.stack="",i.digest=r,No({value:i,source:null,stack:null}),t=Ju(e,t,n)}else if(We||Or(e,t,n,!1),r=(n&e.childLanes)!==0,We||r){if(r=ye,r!==null&&(i=w_(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,bs(e,i),En(r,e,i),Rp;Hd(o)||zc(),t=Ju(e,t,n)}else Hd(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Te=ei(o.nextSibling),sn=t,Jt=!0,Na=null,Jn=!1,e!==null&&sv(t,e),t=wd(t,i.children),t.flags|=4096);return t}return a?(Ma(),o=i.fallback,a=t.mode,l=e.child,c=l.sibling,i=Zi(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=Zi(c,o):(o=cs(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,ro(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Ku(n):(a=o.cachePool,a!==null?(l=Xe._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=ov(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=Qu(e,r,n),t.memoizedState=Zu,ro(e.child,i)):(ya(t),n=e.child,e=n.sibling,n=Zi(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function wd(e,t){return t=Pc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Pc(e,t){return e=Ln(22,e,null,t),e.lanes=0,e}function Ju(e,t,n){return ms(t,e.child,null,n),e=wd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pg(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),gd(e.return,t,n)}function $u(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function tx(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Fe.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Ee(Fe,r),nn(e,t,i,n),i=Jt?Uo:0,!o&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pg(e,n,t);else if(e.tag===19)pg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Uc(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),$u(t,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Uc(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}$u(t,!0,n,null,s,i);break;case"together":$u(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ia(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ka|=t.lanes,!(n&t.childLanes))if(e!==null){if(Or(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(tt(153));if(t.child!==null){for(e=t.child,n=Zi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cp(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Cc(e)))}function JM(e,t,n){switch(t.tag){case 3:yc(t,t.stateNode.containerInfo),Sa(t,Xe,e.memoizedState.cache),hs();break;case 27:case 5:id(t);break;case 4:yc(t,t.stateNode.containerInfo);break;case 10:Sa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Md(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(ya(t),t.flags|=128,null):n&t.child.childLanes?$v(e,t,n):(ya(t),e=ia(e,t,n),e!==null?e.sibling:null);ya(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Or(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return tx(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ee(Fe,Fe.current),i)break;return null;case 22:return t.lanes=0,Jv(e,t,n,t.pendingProps);case 24:Sa(t,Xe,e.memoizedState.cache)}return ia(e,t,n)}function ex(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)We=!0;else{if(!Cp(e,n)&&!(t.flags&128))return We=!1,JM(e,t,n);We=!!(e.flags&131072)}else We=!1,Jt&&t.flags&1048576&&av(t,Uo,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=es(t.elementType),t.type=e,typeof e=="function")rp(e)?(i=_s(e,i),t.tag=1,t=dg(null,t,e,i,n)):(t.tag=0,t=Cd(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===qh){t.tag=11,t=og(null,t,e,i,n);break t}else if(a===Yh){t.tag=14,t=lg(null,t,e,i,n);break t}}throw t=ed(e)||e,Error(tt(306,t,""))}}return t;case 0:return Cd(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=_s(i,t.pendingProps),dg(e,t,i,a,n);case 3:t:{if(yc(t,t.stateNode.containerInfo),e===null)throw Error(tt(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,xd(e,t),xo(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Sa(t,Xe,i),i!==s.cache&&_d(t,[Xe],n,!0),vo(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=hg(e,t,i,n);break t}else if(i!==a){a=Qn(Error(tt(424)),t),No(a),t=hg(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Te=ei(e.firstChild),sn=t,Jt=!0,Na=null,Jn=!0,n=uv(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(hs(),i===a){t=ia(e,t,n);break t}nn(e,t,i,n)}t=t.child}return t;case 26:return oc(e,t),e===null?(n=Og(t.type,null,t.pendingProps,null))?t.memoizedState=n:Jt||(n=t.type,e=t.pendingProps,i=kc(Ua.current).createElement(n),i[an]=t,i[An]=e,ln(i,n,e),$e(i),t.stateNode=i):t.memoizedState=Og(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return id(t),e===null&&Jt&&(i=t.stateNode=Wx(t.type,t.pendingProps,Ua.current),sn=t,Jn=!0,a=Te,qa(t.type)?(kd=a,Te=ei(i.firstChild)):Te=a),nn(e,t,t.pendingProps.children,n),oc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Jt&&((a=i=Te)&&(i=CE(i,t.type,t.pendingProps,Jn),i!==null?(t.stateNode=i,sn=t,Te=ei(i.firstChild),Jn=!1,a=!0):a=!1),a||Ha(t)),id(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,zd(a,s)?i=null:r!==null&&zd(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=mp(e,t,kM,null,null,n),Fo._currentValue=a),oc(e,t),nn(e,t,i,n),t.child;case 6:return e===null&&Jt&&((e=n=Te)&&(n=wE(n,t.pendingProps,Jn),n!==null?(t.stateNode=n,sn=t,Te=null,e=!0):e=!1),e||Ha(t)),null;case 13:return $v(e,t,n);case 4:return yc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ms(t,null,i,n):nn(e,t,i,n),t.child;case 11:return og(e,t,t.type,t.pendingProps,n);case 7:return nn(e,t,t.pendingProps,n),t.child;case 8:return nn(e,t,t.pendingProps.children,n),t.child;case 12:return nn(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Sa(t,t.type,i.value),nn(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,ps(t),a=rn(a),i=i(a),t.flags|=1,nn(e,t,i,n),t.child;case 14:return lg(e,t,t.type,t.pendingProps,n);case 15:return Qv(e,t,t.type,t.pendingProps,n);case 19:return tx(e,t,n);case 31:return QM(e,t,n);case 22:return Jv(e,t,n,t.pendingProps);case 24:return ps(t),i=rn(Xe),e===null?(a=up(),a===null&&(a=ye,s=cp(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},dp(t),Sa(t,Xe,a)):(e.lanes&n&&(xd(e,t),xo(t,null,null,n),vo()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Sa(t,Xe,i)):(i=s.cache,Sa(t,Xe,i),i!==a.cache&&_d(t,[Xe],n,!0))),nn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(tt(156,t.tag))}function Li(e){e.flags|=4}function tf(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(Tx())e.flags|=8192;else throw fs=wc,fp}else e.flags&=-16777217}function mg(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!jx(t))if(Tx())e.flags|=8192;else throw fs=wc,fp}function vl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?A_():536870912,e.lanes|=t,Mr|=t)}function Wr(e,t){if(!Jt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function $M(e,t,n){var i=t.pendingProps;switch(lp(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return be(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ki(Xe),gr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ds(t)?Li(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Wu())),be(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(Li(t),s!==null?(be(t),mg(t,s)):(be(t),tf(t,a,null,i,n))):s?s!==e.memoizedState?(Li(t),be(t),mg(t,s)):(be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Li(t),be(t),tf(t,a,e,i,n)),null;case 27:if(Mc(t),n=Ua.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Li(t);else{if(!i){if(t.stateNode===null)throw Error(tt(166));return be(t),null}e=Mi.current,Ds(t)?Xm(t):(e=Wx(a,i,n),t.stateNode=e,Li(t))}return be(t),null;case 5:if(Mc(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Li(t);else{if(!i){if(t.stateNode===null)throw Error(tt(166));return be(t),null}if(s=Mi.current,Ds(t))Xm(t);else{var r=kc(Ua.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[an]=t,s[An]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(ln(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Li(t)}}return be(t),tf(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Li(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(tt(166));if(e=Ua.current,Ds(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=sn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[an]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Hx(e.nodeValue,n)),e||Ha(t,!0)}else e=kc(e).createTextNode(i),e[an]=t,t.stateNode=e}return be(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ds(t),n!==null){if(e===null){if(!i)throw Error(tt(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(557));e[an]=t}else hs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),e=!1}else n=Wu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Nn(t),t):(Nn(t),null);if(t.flags&128)throw Error(tt(558))}return be(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ds(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(tt(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(tt(317));a[an]=t}else hs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),a=!1}else a=Wu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Nn(t),t):(Nn(t),null)}return Nn(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),vl(t,t.updateQueue),be(t),null);case 4:return gr(),e===null&&Pp(t.stateNode.containerInfo),be(t),null;case 10:return Ki(t.type),be(t),null;case 19:if(tn(Fe),i=t.memoizedState,i===null)return be(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)Wr(i,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Uc(e),s!==null){for(t.flags|=128,Wr(i,!1),e=s.updateQueue,t.updateQueue=e,vl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)nv(n,e),n=n.sibling;return Ee(Fe,Fe.current&1|2),Jt&&Vi(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Pn()>Bc&&(t.flags|=128,a=!0,Wr(i,!1),t.lanes=4194304)}else{if(!a)if(e=Uc(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,vl(t,e),Wr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Jt)return be(t),null}else 2*Pn()-i.renderingStartTime>Bc&&n!==536870912&&(t.flags|=128,a=!0,Wr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Pn(),e.sibling=null,n=Fe.current,Ee(Fe,a?n&1|2:n&1),Jt&&Vi(t,i.treeForkCount),e):(be(t),null);case 22:case 23:return Nn(t),hp(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),n=t.updateQueue,n!==null&&vl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&tn(us),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ki(Xe),be(t),null;case 25:return null;case 30:return null}throw Error(tt(156,t.tag))}function tE(e,t){switch(lp(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ki(Xe),gr(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Mc(t),null;case 31:if(t.memoizedState!==null){if(Nn(t),t.alternate===null)throw Error(tt(340));hs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Nn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(tt(340));hs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return tn(Fe),null;case 4:return gr(),null;case 10:return Ki(t.type),null;case 22:case 23:return Nn(t),hp(),e!==null&&tn(us),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ki(Xe),null;case 25:return null;default:return null}}function nx(e,t){switch(lp(t),t.tag){case 3:Ki(Xe),gr();break;case 26:case 27:case 5:Mc(t);break;case 4:gr();break;case 31:t.memoizedState!==null&&Nn(t);break;case 13:Nn(t);break;case 19:tn(Fe);break;case 10:Ki(t.type);break;case 22:case 23:Nn(t),hp(),e!==null&&tn(us);break;case 24:Ki(Xe)}}function Jo(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){fe(t,t.return,o)}}function Va(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(h){fe(a,l,h)}}}i=i.next}while(i!==s)}}catch(h){fe(t,t.return,h)}}function ix(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{dv(t,n)}catch(i){fe(e,e.return,i)}}}function ax(e,t,n){n.props=_s(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){fe(e,t,i)}}function yo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){fe(e,t,a)}}function xi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){fe(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){fe(e,t,a)}else n.current=null}function sx(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){fe(e,e.return,a)}}function ef(e,t,n){try{var i=e.stateNode;ME(i,e.type,n,t),i[An]=t}catch(a){fe(e,e.return,a)}}function rx(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&qa(e.type)||e.tag===4}function nf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||rx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Dd(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qi));else if(i!==4&&(i===27&&qa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Dd(e,t,n),e=e.sibling;e!==null;)Dd(e,t,n),e=e.sibling}function Ic(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&qa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ic(e,t,n),e=e.sibling;e!==null;)Ic(e,t,n),e=e.sibling}function ox(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);ln(t,i,n),t[an]=e,t[An]=n}catch(s){fe(e,e.return,s)}}var ki=!1,ke=!1,af=!1,gg=typeof WeakSet=="function"?WeakSet:Set,Je=null;function eE(e,t){if(e=e.containerInfo,Bd=Yc,e=j_(e),ip(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,h=0,d=e,u=null;e:for(;;){for(var p;d!==n||a!==0&&d.nodeType!==3||(o=r+a),d!==s||i!==0&&d.nodeType!==3||(l=r+i),d.nodeType===3&&(r+=d.nodeValue.length),(p=d.firstChild)!==null;)u=d,d=p;for(;;){if(d===e)break e;if(u===n&&++c===a&&(o=r),u===s&&++h===i&&(l=r),(p=d.nextSibling)!==null)break;d=u,u=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fd={focusedElem:e,selectionRange:n},Yc=!1,Je=t;Je!==null;)if(t=Je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Je=e;else for(;Je!==null;){switch(t=Je,s=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,n=t,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var v=_s(n.type,a);e=i.getSnapshotBeforeUpdate(v,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(M){fe(n,n.return,M)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Gd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Gd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(tt(163))}if(e=t.sibling,e!==null){e.return=t.return,Je=e;break}Je=t.return}}function lx(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Pi(e,n),i&4&&Jo(5,n);break;case 1:if(Pi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){fe(n,n.return,r)}else{var a=_s(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){fe(n,n.return,r)}}i&64&&ix(n),i&512&&yo(n,n.return);break;case 3:if(Pi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{dv(e,t)}catch(r){fe(n,n.return,r)}}break;case 27:t===null&&i&4&&ox(n);case 26:case 5:Pi(e,n),t===null&&i&4&&sx(n),i&512&&yo(n,n.return);break;case 12:Pi(e,n);break;case 31:Pi(e,n),i&4&&fx(e,n);break;case 13:Pi(e,n),i&4&&dx(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=uE.bind(null,n),DE(e,n))));break;case 22:if(i=n.memoizedState!==null||ki,!i){t=t!==null&&t.memoizedState!==null||ke,a=ki;var s=ke;ki=i,(ke=t)&&!s?Hi(e,n,(n.subtreeFlags&8772)!==0):Pi(e,n),ki=a,ke=s}break;case 30:break;default:Pi(e,n)}}function cx(e){var t=e.alternate;t!==null&&(e.alternate=null,cx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Qh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ce=null,yn=!1;function Oi(e,t,n){for(n=n.child;n!==null;)ux(e,t,n),n=n.sibling}function ux(e,t,n){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount(Wo,n)}catch{}switch(n.tag){case 26:ke||xi(n,t),Oi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ke||xi(n,t);var i=Ce,a=yn;qa(n.type)&&(Ce=n.stateNode,yn=!1),Oi(e,t,n),To(n.stateNode),Ce=i,yn=a;break;case 5:ke||xi(n,t);case 6:if(i=Ce,a=yn,Ce=null,Oi(e,t,n),Ce=i,yn=a,Ce!==null)if(yn)try{(Ce.nodeType===9?Ce.body:Ce.nodeName==="HTML"?Ce.ownerDocument.body:Ce).removeChild(n.stateNode)}catch(s){fe(n,t,s)}else try{Ce.removeChild(n.stateNode)}catch(s){fe(n,t,s)}break;case 18:Ce!==null&&(yn?(e=Ce,wg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ar(e)):wg(Ce,n.stateNode));break;case 4:i=Ce,a=yn,Ce=n.stateNode.containerInfo,yn=!0,Oi(e,t,n),Ce=i,yn=a;break;case 0:case 11:case 14:case 15:Va(2,n,t),ke||Va(4,n,t),Oi(e,t,n);break;case 1:ke||(xi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&ax(n,t,i)),Oi(e,t,n);break;case 21:Oi(e,t,n);break;case 22:ke=(i=ke)||n.memoizedState!==null,Oi(e,t,n),ke=i;break;default:Oi(e,t,n)}}function fx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ar(e)}catch(n){fe(t,t.return,n)}}}function dx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ar(e)}catch(n){fe(t,t.return,n)}}function nE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new gg),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new gg),t;default:throw Error(tt(435,e.tag))}}function xl(e,t){var n=nE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=fE.bind(null,e,i);i.then(a,a)}})}function vn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(qa(o.type)){Ce=o.stateNode,yn=!1;break t}break;case 5:Ce=o.stateNode,yn=!1;break t;case 3:case 4:Ce=o.stateNode.containerInfo,yn=!0;break t}o=o.return}if(Ce===null)throw Error(tt(160));ux(s,r,a),Ce=null,yn=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)hx(t,e),t=t.sibling}var oi=null;function hx(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vn(t,e),xn(e),i&4&&(Va(3,e,e.return),Jo(3,e),Va(5,e,e.return));break;case 1:vn(t,e),xn(e),i&512&&(ke||n===null||xi(n,n.return)),i&64&&ki&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=oi;if(vn(t,e),xn(e),i&512&&(ke||n===null||xi(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[jo]||s[an]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),ln(s,i,n),s[an]=e,$e(s),i=s;break t;case"link":var r=Ig("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}s=a.createElement(i),ln(s,i,n),a.head.appendChild(s);break;case"meta":if(r=Ig("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}s=a.createElement(i),ln(s,i,n),a.head.appendChild(s);break;default:throw Error(tt(468,i))}s[an]=e,$e(s),i=s}e.stateNode=i}else Bg(a,e.type,e.stateNode);else e.stateNode=Pg(a,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?Bg(a,e.type,e.stateNode):Pg(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&ef(e,e.memoizedProps,n.memoizedProps)}break;case 27:vn(t,e),xn(e),i&512&&(ke||n===null||xi(n,n.return)),n!==null&&i&4&&ef(e,e.memoizedProps,n.memoizedProps);break;case 5:if(vn(t,e),xn(e),i&512&&(ke||n===null||xi(n,n.return)),e.flags&32){a=e.stateNode;try{vr(a,"")}catch(v){fe(e,e.return,v)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,ef(e,a,n!==null?n.memoizedProps:a)),i&1024&&(af=!0);break;case 6:if(vn(t,e),xn(e),i&4){if(e.stateNode===null)throw Error(tt(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(v){fe(e,e.return,v)}}break;case 3:if(uc=null,a=oi,oi=Xc(t.containerInfo),vn(t,e),oi=a,xn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ar(t.containerInfo)}catch(v){fe(e,e.return,v)}af&&(af=!1,px(e));break;case 4:i=oi,oi=Xc(e.stateNode.containerInfo),vn(t,e),xn(e),oi=i;break;case 12:vn(t,e),xn(e);break;case 31:vn(t,e),xn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,xl(e,i)));break;case 13:vn(t,e),xn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(vu=Pn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,xl(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=ki,h=ke;if(ki=c||a,ke=h||l,vn(t,e),ke=h,ki=c,xn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||ki||ke||ns(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,u=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(v){fe(l,l.return,v)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(v){fe(l,l.return,v)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;a?Dg(p,!0):Dg(l.stateNode,!1)}catch(v){fe(l,l.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,xl(e,n))));break;case 19:vn(t,e),xn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,xl(e,i)));break;case 30:break;case 21:break;default:vn(t,e),xn(e)}}function xn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(rx(i)){n=i;break}i=i.return}if(n==null)throw Error(tt(160));switch(n.tag){case 27:var a=n.stateNode,s=nf(e);Ic(e,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(vr(r,""),n.flags&=-33);var o=nf(e);Ic(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=nf(e);Dd(e,c,l);break;default:throw Error(tt(161))}}catch(h){fe(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function px(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;px(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Pi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)lx(e,t.alternate,t),t=t.sibling}function ns(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Va(4,t,t.return),ns(t);break;case 1:xi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&ax(t,t.return,n),ns(t);break;case 27:To(t.stateNode);case 26:case 5:xi(t,t.return),ns(t);break;case 22:t.memoizedState===null&&ns(t);break;case 30:ns(t);break;default:ns(t)}e=e.sibling}}function Hi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:Hi(a,s,n),Jo(4,s);break;case 1:if(Hi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){fe(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)fv(l[a],o)}catch(c){fe(i,i.return,c)}}n&&r&64&&ix(s),yo(s,s.return);break;case 27:ox(s);case 26:case 5:Hi(a,s,n),n&&i===null&&r&4&&sx(s),yo(s,s.return);break;case 12:Hi(a,s,n);break;case 31:Hi(a,s,n),n&&r&4&&fx(a,s);break;case 13:Hi(a,s,n),n&&r&4&&dx(a,s);break;case 22:s.memoizedState===null&&Hi(a,s,n),yo(s,s.return);break;case 30:break;default:Hi(a,s,n)}t=t.sibling}}function wp(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ko(n))}function Dp(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ko(e))}function ii(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)mx(e,t,n,i),t=t.sibling}function mx(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ii(e,t,n,i),a&2048&&Jo(9,t);break;case 1:ii(e,t,n,i);break;case 3:ii(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ko(e)));break;case 12:if(a&2048){ii(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){fe(t,t.return,l)}}else ii(e,t,n,i);break;case 31:ii(e,t,n,i);break;case 13:ii(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?ii(e,t,n,i):Mo(e,t):s._visibility&2?ii(e,t,n,i):(s._visibility|=2,Ys(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&wp(r,t);break;case 24:ii(e,t,n,i),a&2048&&Dp(t.alternate,t);break;default:ii(e,t,n,i)}}function Ys(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Ys(s,r,o,l,a),Jo(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?Ys(s,r,o,l,a):Mo(s,r):(h._visibility|=2,Ys(s,r,o,l,a)),a&&c&2048&&wp(r.alternate,r);break;case 24:Ys(s,r,o,l,a),a&&c&2048&&Dp(r.alternate,r);break;default:Ys(s,r,o,l,a)}t=t.sibling}}function Mo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:Mo(n,i),a&2048&&wp(i.alternate,i);break;case 24:Mo(n,i),a&2048&&Dp(i.alternate,i);break;default:Mo(n,i)}t=t.sibling}}var oo=8192;function Us(e,t,n){if(e.subtreeFlags&oo)for(e=e.child;e!==null;)gx(e,t,n),e=e.sibling}function gx(e,t,n){switch(e.tag){case 26:Us(e,t,n),e.flags&oo&&e.memoizedState!==null&&VE(n,oi,e.memoizedState,e.memoizedProps);break;case 5:Us(e,t,n);break;case 3:case 4:var i=oi;oi=Xc(e.stateNode.containerInfo),Us(e,t,n),oi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=oo,oo=16777216,Us(e,t,n),oo=i):Us(e,t,n));break;default:Us(e,t,n)}}function _x(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function qr(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Je=i,xx(i,e)}_x(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)vx(e),e=e.sibling}function vx(e){switch(e.tag){case 0:case 11:case 15:qr(e),e.flags&2048&&Va(9,e,e.return);break;case 3:qr(e);break;case 12:qr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,lc(e)):qr(e);break;default:qr(e)}}function lc(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Je=i,xx(i,e)}_x(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Va(8,t,t.return),lc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,lc(t));break;default:lc(t)}e=e.sibling}}function xx(e,t){for(;Je!==null;){var n=Je;switch(n.tag){case 0:case 11:case 15:Va(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ko(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Je=i;else t:for(n=e;Je!==null;){i=Je;var a=i.sibling,s=i.return;if(cx(i),i===n){Je=null;break t}if(a!==null){a.return=s,Je=a;break t}Je=s}}}var iE={getCacheForType:function(e){var t=rn(Xe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return rn(Xe).controller.signal}},aE=typeof WeakMap=="function"?WeakMap:Map,ie=0,ye=null,jt=null,Zt=0,ue=0,Un=null,Ra=!1,Ir=!1,Up=!1,aa=0,Le=0,ka=0,ds=0,Np=0,On=0,Mr=0,Eo=null,Mn=null,Ud=!1,vu=0,Sx=0,Bc=1/0,Fc=null,Pa=null,Ye=0,Ia=null,Er=null,Qi=0,Nd=0,Ld=null,yx=null,bo=0,Od=null;function Fn(){return ie&2&&Zt!==0?Zt&-Zt:Ut.T!==null?Op():D_()}function Mx(){if(On===0)if(!(Zt&536870912)||Jt){var e=fl;fl<<=1,!(fl&3932160)&&(fl=262144),On=e}else On=536870912;return e=Gn.current,e!==null&&(e.flags|=32),On}function En(e,t,n){(e===ye&&(ue===2||ue===9)||e.cancelPendingCommit!==null)&&(br(e,0),Ca(e,Zt,On,!1)),Yo(e,n),(!(ie&2)||e!==ye)&&(e===ye&&(!(ie&2)&&(ds|=n),Le===4&&Ca(e,Zt,On,!1)),Di(e))}function Ex(e,t,n){if(ie&6)throw Error(tt(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||qo(e,t),a=i?oE(e,t):sf(e,t,!0),s=i;do{if(a===0){Ir&&!i&&Ca(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!sE(n)){a=sf(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=Eo;var l=o.current.memoizedState.isDehydrated;if(l&&(br(o,r).flags|=256),r=sf(o,r,!1),r!==2){if(Up&&!l){o.errorRecoveryDisabledLanes|=s,ds|=s,a=4;break t}s=Mn,Mn=a,s!==null&&(Mn===null?Mn=s:Mn.push.apply(Mn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){br(e,0),Ca(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error(tt(345));case 4:if((t&4194048)!==t)break;case 6:Ca(i,t,On,!Ra);break t;case 2:Mn=null;break;case 3:case 5:break;default:throw Error(tt(329))}if((t&62914560)===t&&(a=vu+300-Pn(),10<a)){if(Ca(i,t,On,!Ra),ou(i,0,!0)!==0)break t;Qi=t,i.timeoutHandle=kx(_g.bind(null,i,n,Mn,Fc,Ud,t,On,ds,Mr,Ra,s,"Throttled",-0,0),a);break t}_g(i,n,Mn,Fc,Ud,t,On,ds,Mr,Ra,s,null,-0,0)}}break}while(!0);Di(e)}function _g(e,t,n,i,a,s,r,o,l,c,h,d,u,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},gx(t,s,d);var v=(s&62914560)===s?vu-Pn():(s&4194048)===s?Sx-Pn():0;if(v=kE(d,v),v!==null){Qi=s,e.cancelPendingCommit=v(xg.bind(null,e,t,s,n,i,a,r,o,l,h,d,null,u,p)),Ca(e,s,r,!c);return}}xg(e,t,s,n,i,a,r,o,l)}function sE(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!zn(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ca(e,t,n,i){t&=~Np,t&=~ds,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-Bn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&R_(e,n,t)}function xu(){return ie&6?!0:($o(0),!1)}function Lp(){if(jt!==null){if(ue===0)var e=jt.return;else e=jt,Yi=Ts=null,vp(e),fr=null,Lo=0,e=jt;for(;e!==null;)nx(e.alternate,e),e=e.return;jt=null}}function br(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,TE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Qi=0,Lp(),ye=e,jt=n=Zi(e.current,null),Zt=t,ue=0,Un=null,Ra=!1,Ir=qo(e,t),Up=!1,Mr=On=Np=ds=ka=Le=0,Mn=Eo=null,Ud=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Bn(i),s=1<<a;t|=e[a],i&=~s}return aa=t,fu(),n}function bx(e,t){Ft=null,Ut.H=Po,t===Pr||t===hu?(t=Zm(),ue=3):t===fp?(t=Zm(),ue=4):ue=t===Rp?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Un=t,jt===null&&(Le=1,Oc(e,Qn(t,e.current)))}function Tx(){var e=Gn.current;return e===null?!0:(Zt&4194048)===Zt?ti===null:(Zt&62914560)===Zt||Zt&536870912?e===ti:!1}function Ax(){var e=Ut.H;return Ut.H=Po,e===null?Po:e}function Rx(){var e=Ut.A;return Ut.A=iE,e}function zc(){Le=4,Ra||(Zt&4194048)!==Zt&&Gn.current!==null||(Ir=!0),!(ka&134217727)&&!(ds&134217727)||ye===null||Ca(ye,Zt,On,!1)}function sf(e,t,n){var i=ie;ie|=2;var a=Ax(),s=Rx();(ye!==e||Zt!==t)&&(Fc=null,br(e,t)),t=!1;var r=Le;t:do try{if(ue!==0&&jt!==null){var o=jt,l=Un;switch(ue){case 8:Lp(),r=6;break t;case 3:case 2:case 9:case 6:Gn.current===null&&(t=!0);var c=ue;if(ue=0,Un=null,rr(e,o,l,c),n&&Ir){r=0;break t}break;default:c=ue,ue=0,Un=null,rr(e,o,l,c)}}rE(),r=Le;break}catch(h){bx(e,h)}while(!0);return t&&e.shellSuspendCounter++,Yi=Ts=null,ie=i,Ut.H=a,Ut.A=s,jt===null&&(ye=null,Zt=0,fu()),r}function rE(){for(;jt!==null;)Cx(jt)}function oE(e,t){var n=ie;ie|=2;var i=Ax(),a=Rx();ye!==e||Zt!==t?(Fc=null,Bc=Pn()+500,br(e,t)):Ir=qo(e,t);t:do try{if(ue!==0&&jt!==null){t=jt;var s=Un;e:switch(ue){case 1:ue=0,Un=null,rr(e,t,s,1);break;case 2:case 9:if(jm(s)){ue=0,Un=null,vg(t);break}t=function(){ue!==2&&ue!==9||ye!==e||(ue=7),Di(e)},s.then(t,t);break t;case 3:ue=7;break t;case 4:ue=5;break t;case 7:jm(s)?(ue=0,Un=null,vg(t)):(ue=0,Un=null,rr(e,t,s,7));break;case 5:var r=null;switch(jt.tag){case 26:r=jt.memoizedState;case 5:case 27:var o=jt;if(r?jx(r):o.stateNode.complete){ue=0,Un=null;var l=o.sibling;if(l!==null)jt=l;else{var c=o.return;c!==null?(jt=c,Su(c)):jt=null}break e}}ue=0,Un=null,rr(e,t,s,5);break;case 6:ue=0,Un=null,rr(e,t,s,6);break;case 8:Lp(),Le=6;break t;default:throw Error(tt(462))}}lE();break}catch(h){bx(e,h)}while(!0);return Yi=Ts=null,Ut.H=i,Ut.A=a,ie=n,jt!==null?0:(ye=null,Zt=0,fu(),Le)}function lE(){for(;jt!==null&&!Uy();)Cx(jt)}function Cx(e){var t=ex(e.alternate,e,aa);e.memoizedProps=e.pendingProps,t===null?Su(e):jt=t}function vg(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=fg(n,t,t.pendingProps,t.type,void 0,Zt);break;case 11:t=fg(n,t,t.pendingProps,t.type.render,t.ref,Zt);break;case 5:vp(t);default:nx(n,t),t=jt=nv(t,aa),t=ex(n,t,aa)}e.memoizedProps=e.pendingProps,t===null?Su(e):jt=t}function rr(e,t,n,i){Yi=Ts=null,vp(t),fr=null,Lo=0;var a=t.return;try{if(KM(e,a,t,n,Zt)){Le=1,Oc(e,Qn(n,e.current)),jt=null;return}}catch(s){if(a!==null)throw jt=a,s;Le=1,Oc(e,Qn(n,e.current)),jt=null;return}t.flags&32768?(Jt||i===1?e=!0:Ir||Zt&536870912?e=!1:(Ra=e=!0,(i===2||i===9||i===3||i===6)&&(i=Gn.current,i!==null&&i.tag===13&&(i.flags|=16384))),wx(t,e)):Su(t)}function Su(e){var t=e;do{if(t.flags&32768){wx(t,Ra);return}e=t.return;var n=$M(t.alternate,t,aa);if(n!==null){jt=n;return}if(t=t.sibling,t!==null){jt=t;return}jt=t=e}while(t!==null);Le===0&&(Le=5)}function wx(e,t){do{var n=tE(e.alternate,e);if(n!==null){n.flags&=32767,jt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){jt=e;return}jt=e=n}while(e!==null);Le=6,jt=null}function xg(e,t,n,i,a,s,r,o,l){e.cancelPendingCommit=null;do yu();while(Ye!==0);if(ie&6)throw Error(tt(327));if(t!==null){if(t===e.current)throw Error(tt(177));if(s=t.lanes|t.childLanes,s|=ap,Hy(e,n,s,r,o,l),e===ye&&(jt=ye=null,Zt=0),Er=t,Ia=e,Qi=n,Nd=s,Ld=a,yx=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,dE(Ec,function(){return Ox(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Ut.T,Ut.T=null,a=ae.p,ae.p=2,r=ie,ie|=4;try{eE(e,t,n)}finally{ie=r,ae.p=a,Ut.T=i}}Ye=1,Dx(),Ux(),Nx()}}function Dx(){if(Ye===1){Ye=0;var e=Ia,t=Er,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Ut.T,Ut.T=null;var i=ae.p;ae.p=2;var a=ie;ie|=4;try{hx(t,e);var s=Fd,r=j_(e.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&Y_(o.ownerDocument.documentElement,o)){if(l!==null&&ip(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var d=o.ownerDocument||document,u=d&&d.defaultView||window;if(u.getSelection){var p=u.getSelection(),v=o.textContent.length,M=Math.min(l.start,v),g=l.end===void 0?M:Math.min(l.end,v);!p.extend&&M>g&&(r=g,g=M,M=r);var f=Hm(o,M),m=Hm(o,g);if(f&&m&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==m.node||p.focusOffset!==m.offset)){var _=d.createRange();_.setStart(f.node,f.offset),p.removeAllRanges(),M>g?(p.addRange(_),p.extend(m.node,m.offset)):(_.setEnd(m.node,m.offset),p.addRange(_))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var y=d[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Yc=!!Bd,Fd=Bd=null}finally{ie=a,ae.p=i,Ut.T=n}}e.current=t,Ye=2}}function Ux(){if(Ye===2){Ye=0;var e=Ia,t=Er,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Ut.T,Ut.T=null;var i=ae.p;ae.p=2;var a=ie;ie|=4;try{lx(e,t.alternate,t)}finally{ie=a,ae.p=i,Ut.T=n}}Ye=3}}function Nx(){if(Ye===4||Ye===3){Ye=0,Ny();var e=Ia,t=Er,n=Qi,i=yx;t.subtreeFlags&10256||t.flags&10256?Ye=5:(Ye=0,Er=Ia=null,Lx(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Pa=null),Kh(n),t=t.stateNode,In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot(Wo,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Ut.T,a=ae.p,ae.p=2,Ut.T=null;try{for(var s=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{Ut.T=t,ae.p=a}}Qi&3&&yu(),Di(e),a=e.pendingLanes,n&261930&&a&42?e===Od?bo++:(bo=0,Od=e):bo=0,$o(0)}}function Lx(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ko(t)))}function yu(){return Dx(),Ux(),Nx(),Ox()}function Ox(){if(Ye!==5)return!1;var e=Ia,t=Nd;Nd=0;var n=Kh(Qi),i=Ut.T,a=ae.p;try{ae.p=32>n?32:n,Ut.T=null,n=Ld,Ld=null;var s=Ia,r=Qi;if(Ye=0,Er=Ia=null,Qi=0,ie&6)throw Error(tt(331));var o=ie;if(ie|=4,vx(s.current),mx(s,s.current,r,n),ie=o,$o(0,!1),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot(Wo,s)}catch{}return!0}finally{ae.p=a,Ut.T=i,Lx(e,t)}}function Sg(e,t,n){t=Qn(n,t),t=Rd(e.stateNode,t,2),e=Oa(e,t,2),e!==null&&(Yo(e,2),Di(e))}function fe(e,t,n){if(e.tag===3)Sg(e,e,n);else for(;t!==null;){if(t.tag===3){Sg(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pa===null||!Pa.has(i))){e=Qn(n,e),n=Zv(2),i=Oa(t,n,2),i!==null&&(Kv(n,i,t,e),Yo(i,2),Di(i));break}}t=t.return}}function rf(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new aE;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Up=!0,a.add(n),e=cE.bind(null,e,t,n),t.then(e,e))}function cE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ye===e&&(Zt&n)===n&&(Le===4||Le===3&&(Zt&62914560)===Zt&&300>Pn()-vu?!(ie&2)&&br(e,0):Np|=n,Mr===Zt&&(Mr=0)),Di(e)}function Px(e,t){t===0&&(t=A_()),e=bs(e,t),e!==null&&(Yo(e,t),Di(e))}function uE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Px(e,n)}function fE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(tt(314))}i!==null&&i.delete(t),Px(e,n)}function dE(e,t){return jh(e,t)}var Gc=null,js=null,Pd=!1,Hc=!1,of=!1,wa=0;function Di(e){e!==js&&e.next===null&&(js===null?Gc=js=e:js=js.next=e),Hc=!0,Pd||(Pd=!0,pE())}function $o(e,t){if(!of&&Hc){of=!0;do for(var n=!1,i=Gc;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Bn(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,yg(i,s))}else s=Zt,s=ou(i,i===ye?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||qo(i,s)||(n=!0,yg(i,s));i=i.next}while(n);of=!1}}function hE(){Ix()}function Ix(){Hc=Pd=!1;var e=0;wa!==0&&bE()&&(e=wa);for(var t=Pn(),n=null,i=Gc;i!==null;){var a=i.next,s=Bx(i,t);s===0?(i.next=null,n===null?Gc=a:n.next=a,a===null&&(js=n)):(n=i,(e!==0||s&3)&&(Hc=!0)),i=a}Ye!==0&&Ye!==5||$o(e),wa!==0&&(wa=0)}function Bx(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-Bn(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=Gy(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=ye,n=Zt,n=ou(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ue===2||ue===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ou(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||qo(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Ou(i),Kh(n)){case 2:case 8:n=b_;break;case 32:n=Ec;break;case 268435456:n=T_;break;default:n=Ec}return i=Fx.bind(null,e),n=jh(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Ou(i),e.callbackPriority=2,e.callbackNode=null,2}function Fx(e,t){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(yu()&&e.callbackNode!==n)return null;var i=Zt;return i=ou(e,e===ye?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Ex(e,i,t),Bx(e,Pn()),e.callbackNode!=null&&e.callbackNode===n?Fx.bind(null,e):null)}function yg(e,t){if(yu())return null;Ex(e,t,!0)}function pE(){AE(function(){ie&6?jh(E_,hE):Ix()})}function Op(){if(wa===0){var e=xr;e===0&&(e=ul,ul<<=1,!(ul&261888)&&(ul=256)),wa=e}return wa}function Mg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$l(""+e)}function Eg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function mE(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=Mg((a[An]||null).action),r=i.submitter;r&&(t=(t=r[An]||null)?Mg(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new lu("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(wa!==0){var l=r?Eg(a,r):new FormData(a);Td(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?Eg(a,r):new FormData(a),Td(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var lf=0;lf<hd.length;lf++){var cf=hd[lf],gE=cf.toLowerCase(),_E=cf[0].toUpperCase()+cf.slice(1);ui(gE,"on"+_E)}ui(K_,"onAnimationEnd");ui(Q_,"onAnimationIteration");ui(J_,"onAnimationStart");ui("dblclick","onDoubleClick");ui("focusin","onFocus");ui("focusout","onBlur");ui(LM,"onTransitionRun");ui(OM,"onTransitionStart");ui(PM,"onTransitionCancel");ui($_,"onTransitionEnd");_r("onMouseEnter",["mouseout","mouseover"]);_r("onMouseLeave",["mouseout","mouseover"]);_r("onPointerEnter",["pointerout","pointerover"]);_r("onPointerLeave",["pointerout","pointerover"]);ys("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ys("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ys("onBeforeInput",["compositionend","keypress","textInput","paste"]);ys("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ys("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ys("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function zx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(h){Tc(h)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(h){Tc(h)}a.currentTarget=null,s=l}}}}function Yt(e,t){var n=t[sd];n===void 0&&(n=t[sd]=new Set);var i=e+"__bubble";n.has(i)||(Gx(t,e,2,!1),n.add(i))}function uf(e,t,n){var i=0;t&&(i|=4),Gx(n,e,i,t)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function Pp(e){if(!e[Sl]){e[Sl]=!0,U_.forEach(function(n){n!=="selectionchange"&&(vE.has(n)||uf(n,!1,e),uf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sl]||(t[Sl]=!0,uf("selectionchange",!1,t))}}function Gx(e,t,n,i){switch($x(t)){case 2:var a=qE;break;case 8:a=YE;break;default:a=zp}n=a.bind(null,t,n,e),a=void 0,!ud||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function ff(e,t,n,i,a){var s=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=Qs(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}z_(function(){var c=s,h=$h(n),d=[];t:{var u=tv.get(e);if(u!==void 0){var p=lu,v=e;switch(e){case"keypress":if(ec(n)===0)break t;case"keydown":case"keyup":p=fM;break;case"focusin":v="focus",p=zu;break;case"focusout":v="blur",p=zu;break;case"beforeblur":case"afterblur":p=zu;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=$y;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=pM;break;case K_:case Q_:case J_:p=nM;break;case $_:p=gM;break;case"scroll":case"scrollend":p=Qy;break;case"wheel":p=vM;break;case"copy":case"cut":case"paste":p=aM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Lm;break;case"toggle":case"beforetoggle":p=SM}var M=(t&4)!==0,g=!M&&(e==="scroll"||e==="scrollend"),f=M?u!==null?u+"Capture":null:u;M=[];for(var m=c,_;m!==null;){var y=m;if(_=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||_===null||f===null||(y=Co(m,f),y!=null&&M.push(Bo(m,y,_))),g)break;m=m.return}0<M.length&&(u=new p(u,v,null,n,h),d.push({event:u,listeners:M}))}}if(!(t&7)){t:{if(u=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",u&&n!==cd&&(v=n.relatedTarget||n.fromElement)&&(Qs(v)||v[Nr]))break t;if((p||u)&&(u=h.window===h?h:(u=h.ownerDocument)?u.defaultView||u.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Qs(v):null,v!==null&&(g=Xo(v),M=v.tag,v!==g||M!==5&&M!==27&&M!==6)&&(v=null)):(p=null,v=c),p!==v)){if(M=Um,y="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(M=Lm,y="onPointerLeave",f="onPointerEnter",m="pointer"),g=p==null?u:so(p),_=v==null?u:so(v),u=new M(y,m+"leave",p,n,h),u.target=g,u.relatedTarget=_,y=null,Qs(h)===c&&(M=new M(f,m+"enter",v,n,h),M.target=_,M.relatedTarget=g,y=M),g=y,p&&v)e:{for(M=xE,f=p,m=v,_=0,y=f;y;y=M(y))_++;y=0;for(var C=m;C;C=M(C))y++;for(;0<_-y;)f=M(f),_--;for(;0<y-_;)m=M(m),y--;for(;_--;){if(f===m||m!==null&&f===m.alternate){M=f;break e}f=M(f),m=M(m)}M=null}else M=null;p!==null&&bg(d,u,p,M,!1),v!==null&&g!==null&&bg(d,g,v,M,!0)}}t:{if(u=c?so(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var b=Bm;else if(Im(u))if(W_)b=DM;else{b=CM;var R=RM}else p=u.nodeName,!p||p.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Jh(c.elementType)&&(b=Bm):b=wM;if(b&&(b=b(e,c))){X_(d,b,n,h);break t}R&&R(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&ld(u,"number",u.value)}switch(R=c?so(c):window,e){case"focusin":(Im(R)||R.contentEditable==="true")&&(tr=R,fd=c,mo=null);break;case"focusout":mo=fd=tr=null;break;case"mousedown":dd=!0;break;case"contextmenu":case"mouseup":case"dragend":dd=!1,Vm(d,n,h);break;case"selectionchange":if(NM)break;case"keydown":case"keyup":Vm(d,n,h)}var x;if(np)t:{switch(e){case"compositionstart":var A="onCompositionStart";break t;case"compositionend":A="onCompositionEnd";break t;case"compositionupdate":A="onCompositionUpdate";break t}A=void 0}else $s?V_(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(H_&&n.locale!=="ko"&&($s||A!=="onCompositionStart"?A==="onCompositionEnd"&&$s&&(x=G_()):(Aa=h,tp="value"in Aa?Aa.value:Aa.textContent,$s=!0)),R=Vc(c,A),0<R.length&&(A=new Nm(A,e,null,n,h),d.push({event:A,listeners:R}),x?A.data=x:(x=k_(n),x!==null&&(A.data=x)))),(x=MM?EM(e,n):bM(e,n))&&(A=Vc(c,"onBeforeInput"),0<A.length&&(R=new Nm("onBeforeInput","beforeinput",null,n,h),d.push({event:R,listeners:A}),R.data=x)),mE(d,e,c,n,h)}zx(d,t)})}function Bo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vc(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=Co(e,n),a!=null&&i.unshift(Bo(e,a,s)),a=Co(e,t),a!=null&&i.push(Bo(e,a,s))),e.tag===3)return i;e=e.return}return[]}function xE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bg(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=Co(n,s),c!=null&&r.unshift(Bo(n,c,l))):a||(c=Co(n,s),c!=null&&r.push(Bo(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var SE=/\r\n?/g,yE=/\u0000|\uFFFD/g;function Tg(e){return(typeof e=="string"?e:""+e).replace(SE,`
`).replace(yE,"")}function Hx(e,t){return t=Tg(t),Tg(e)===t}function ge(e,t,n,i,a,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||vr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&vr(e,""+i);break;case"className":hl(e,"class",i);break;case"tabIndex":hl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":hl(e,n,i);break;case"style":F_(e,i,s);break;case"data":if(t!=="object"){hl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=$l(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&ge(e,t,"name",a.name,a,null),ge(e,t,"formEncType",a.formEncType,a,null),ge(e,t,"formMethod",a.formMethod,a,null),ge(e,t,"formTarget",a.formTarget,a,null)):(ge(e,t,"encType",a.encType,a,null),ge(e,t,"method",a.method,a,null),ge(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=$l(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=qi);break;case"onScroll":i!=null&&Yt("scroll",e);break;case"onScrollEnd":i!=null&&Yt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(tt(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(tt(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=$l(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Yt("beforetoggle",e),Yt("toggle",e),Jl(e,"popover",i);break;case"xlinkActuate":Ni(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ni(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ni(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ni(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ni(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ni(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ni(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ni(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ni(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Jl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Zy.get(n)||n,Jl(e,n,i))}}function Id(e,t,n,i,a,s){switch(n){case"style":F_(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(tt(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(tt(60));e.innerHTML=n}}break;case"children":typeof i=="string"?vr(e,i):(typeof i=="number"||typeof i=="bigint")&&vr(e,""+i);break;case"onScroll":i!=null&&Yt("scroll",e);break;case"onScrollEnd":i!=null&&Yt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!N_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),s=e[An]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Jl(e,n,i)}}}function ln(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Yt("error",e),Yt("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:ge(e,t,s,r,n,null)}}a&&ge(e,t,"srcSet",n.srcSet,n,null),i&&ge(e,t,"src",n.src,n,null);return;case"input":Yt("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":s=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(tt(137,t));break;default:ge(e,t,i,h,n,null)}}P_(e,s,o,l,c,r,a,!1);return;case"select":Yt("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:ge(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?lr(e,!!i,t,!1):n!=null&&lr(e,!!i,n,!0);return;case"textarea":Yt("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(tt(91));break;default:ge(e,t,r,o,n,null)}B_(e,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ge(e,t,l,i,n,null)}return;case"dialog":Yt("beforetoggle",e),Yt("toggle",e),Yt("cancel",e),Yt("close",e);break;case"iframe":case"object":Yt("load",e);break;case"video":case"audio":for(i=0;i<Io.length;i++)Yt(Io[i],e);break;case"image":Yt("error",e),Yt("load",e);break;case"details":Yt("toggle",e);break;case"embed":case"source":case"link":Yt("error",e),Yt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:ge(e,t,c,i,n,null)}return;default:if(Jh(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&Id(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ge(e,t,o,i,n,null))}function ME(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||ge(e,t,p,null,i,d)}}for(var u in i){var p=i[u];if(d=n[u],i.hasOwnProperty(u)&&(p!=null||d!=null))switch(u){case"type":s=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":h=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(tt(137,t));break;default:p!==d&&ge(e,t,u,p,i,d)}}od(e,r,o,l,c,h,s,a);return;case"select":p=r=o=u=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(s)||ge(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":u=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&ge(e,t,a,s,i,l)}t=o,n=r,i=p,u!=null?lr(e,!!n,u,!1):!!i!=!!n&&(t!=null?lr(e,!!n,t,!0):lr(e,!!n,n?[]:"",!1));return;case"textarea":p=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ge(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":u=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(tt(91));break;default:a!==s&&ge(e,t,r,a,i,s)}I_(e,u,p);return;case"option":for(var v in n)if(u=n[v],n.hasOwnProperty(v)&&u!=null&&!i.hasOwnProperty(v))switch(v){case"selected":e.selected=!1;break;default:ge(e,t,v,null,i,u)}for(l in i)if(u=i[l],p=n[l],i.hasOwnProperty(l)&&u!==p&&(u!=null||p!=null))switch(l){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ge(e,t,l,u,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)u=n[M],n.hasOwnProperty(M)&&u!=null&&!i.hasOwnProperty(M)&&ge(e,t,M,null,i,u);for(c in i)if(u=i[c],p=n[c],i.hasOwnProperty(c)&&u!==p&&(u!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(tt(137,t));break;default:ge(e,t,c,u,i,p)}return;default:if(Jh(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&Id(e,t,g,void 0,i,u);for(h in i)u=i[h],p=n[h],!i.hasOwnProperty(h)||u===p||u===void 0&&p===void 0||Id(e,t,h,u,i,p);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&ge(e,t,f,null,i,u);for(d in i)u=i[d],p=n[d],!i.hasOwnProperty(d)||u===p||u==null&&p==null||ge(e,t,d,u,i,p)}function Ag(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function EE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&Ag(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,d=l.initiatorType;h&&Ag(d)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Bd=null,Fd=null;function kc(e){return e.nodeType===9?e:e.ownerDocument}function Rg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vx(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function zd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var df=null;function bE(){var e=window.event;return e&&e.type==="popstate"?e===df?!1:(df=e,!0):(df=null,!1)}var kx=typeof setTimeout=="function"?setTimeout:void 0,TE=typeof clearTimeout=="function"?clearTimeout:void 0,Cg=typeof Promise=="function"?Promise:void 0,AE=typeof queueMicrotask=="function"?queueMicrotask:typeof Cg<"u"?function(e){return Cg.resolve(null).then(e).catch(RE)}:kx;function RE(e){setTimeout(function(){throw e})}function qa(e){return e==="head"}function wg(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Ar(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")To(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,To(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[jo]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&To(e.ownerDocument.body);n=a}while(n);Ar(t)}function Dg(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Gd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Gd(n),Qh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function CE(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[jo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=ei(e.nextSibling),e===null)break}return null}function wE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ei(e.nextSibling),e===null))return null;return e}function Xx(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ei(e.nextSibling),e===null))return null;return e}function Hd(e){return e.data==="$?"||e.data==="$~"}function Vd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function DE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ei(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var kd=null;function Ug(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ei(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Ng(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Wx(e,t,n){switch(t=kc(n),e){case"html":if(e=t.documentElement,!e)throw Error(tt(452));return e;case"head":if(e=t.head,!e)throw Error(tt(453));return e;case"body":if(e=t.body,!e)throw Error(tt(454));return e;default:throw Error(tt(451))}}function To(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Qh(e)}var ni=new Map,Lg=new Set;function Xc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var oa=ae.d;ae.d={f:UE,r:NE,D:LE,C:OE,L:PE,m:IE,X:FE,S:BE,M:zE};function UE(){var e=oa.f(),t=xu();return e||t}function NE(e){var t=Lr(e);t!==null&&t.tag===5&&t.type==="form"?Fv(t):oa.r(e)}var Br=typeof document>"u"?null:document;function qx(e,t,n){var i=Br;if(i&&typeof t=="string"&&t){var a=Kn(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Lg.has(a)||(Lg.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),ln(t,"link",e),$e(t),i.head.appendChild(t)))}}function LE(e){oa.D(e),qx("dns-prefetch",e,null)}function OE(e,t){oa.C(e,t),qx("preconnect",e,t)}function PE(e,t,n){oa.L(e,t,n);var i=Br;if(i&&e&&t){var a='link[rel="preload"][as="'+Kn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Kn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Kn(n.imageSizes)+'"]')):a+='[href="'+Kn(e)+'"]';var s=a;switch(t){case"style":s=Tr(e);break;case"script":s=Fr(e)}ni.has(s)||(e=Re({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ni.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(tl(s))||t==="script"&&i.querySelector(el(s))||(t=i.createElement("link"),ln(t,"link",e),$e(t),i.head.appendChild(t)))}}function IE(e,t){oa.m(e,t);var n=Br;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Kn(i)+'"][href="'+Kn(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Fr(e)}if(!ni.has(s)&&(e=Re({rel:"modulepreload",href:e},t),ni.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(el(s)))return}i=n.createElement("link"),ln(i,"link",e),$e(i),n.head.appendChild(i)}}}function BE(e,t,n){oa.S(e,t,n);var i=Br;if(i&&e){var a=or(i).hoistableStyles,s=Tr(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(tl(s)))o.loading=5;else{e=Re({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ni.get(s))&&Ip(e,n);var l=r=i.createElement("link");$e(l),ln(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,cc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function FE(e,t){oa.X(e,t);var n=Br;if(n&&e){var i=or(n).hoistableScripts,a=Fr(e),s=i.get(a);s||(s=n.querySelector(el(a)),s||(e=Re({src:e,async:!0},t),(t=ni.get(a))&&Bp(e,t),s=n.createElement("script"),$e(s),ln(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function zE(e,t){oa.M(e,t);var n=Br;if(n&&e){var i=or(n).hoistableScripts,a=Fr(e),s=i.get(a);s||(s=n.querySelector(el(a)),s||(e=Re({src:e,async:!0,type:"module"},t),(t=ni.get(a))&&Bp(e,t),s=n.createElement("script"),$e(s),ln(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function Og(e,t,n,i){var a=(a=Ua.current)?Xc(a):null;if(!a)throw Error(tt(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Tr(n.href),n=or(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Tr(n.href);var s=or(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(tl(e)))&&!s._p&&(r.instance=s,r.state.loading=5),ni.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ni.set(e,n),s||GE(a,e,n,r.state))),t&&i===null)throw Error(tt(528,""));return r}if(t&&i!==null)throw Error(tt(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Fr(n),n=or(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(tt(444,e))}}function Tr(e){return'href="'+Kn(e)+'"'}function tl(e){return'link[rel="stylesheet"]['+e+"]"}function Yx(e){return Re({},e,{"data-precedence":e.precedence,precedence:null})}function GE(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ln(t,"link",n),$e(t),e.head.appendChild(t))}function Fr(e){return'[src="'+Kn(e)+'"]'}function el(e){return"script[async]"+e}function Pg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Kn(n.href)+'"]');if(i)return t.instance=i,$e(i),i;var a=Re({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),$e(i),ln(i,"style",a),cc(i,n.precedence,e),t.instance=i;case"stylesheet":a=Tr(n.href);var s=e.querySelector(tl(a));if(s)return t.state.loading|=4,t.instance=s,$e(s),s;i=Yx(n),(a=ni.get(a))&&Ip(i,a),s=(e.ownerDocument||e).createElement("link"),$e(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),ln(s,"link",i),t.state.loading|=4,cc(s,n.precedence,e),t.instance=s;case"script":return s=Fr(n.src),(a=e.querySelector(el(s)))?(t.instance=a,$e(a),a):(i=n,(a=ni.get(s))&&(i=Re({},n),Bp(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),$e(a),ln(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(tt(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,cc(i,n.precedence,e));return t.instance}function cc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ip(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Bp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var uc=null;function Ig(e,t,n){if(uc===null){var i=new Map,a=uc=new Map;a.set(n,i)}else a=uc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[jo]||s[an]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function Bg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function HE(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function jx(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function VE(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=Tr(i.href),s=t.querySelector(tl(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Wc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,$e(s);return}s=t.ownerDocument||t,i=Yx(i),(a=ni.get(a))&&Ip(i,a),s=s.createElement("link"),$e(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),ln(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Wc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var hf=0;function kE(e,t){return e.stylesheets&&e.count===0&&fc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&fc(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&hf===0&&(hf=62500*EE());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fc(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>hf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Wc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var qc=null;function fc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,qc=new Map,t.forEach(XE,e),qc=null,Wc.call(e))}function XE(e,t){if(!(t.state.loading&4)){var n=qc.get(e);if(n)var i=n.get(null);else{n=new Map,qc.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=Wc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Fo={$$typeof:Wi,Provider:null,Consumer:null,_currentValue:ls,_currentValue2:ls,_threadCount:0};function WE(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pu(0),this.hiddenUpdates=Pu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Zx(e,t,n,i,a,s,r,o,l,c,h,d){return e=new WE(e,t,n,r,l,c,h,d,o),t=1,s===!0&&(t|=24),s=Ln(3,null,null,t),e.current=s,s.stateNode=e,t=cp(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},dp(s),e}function Kx(e){return e?(e=ir,e):ir}function Qx(e,t,n,i,a,s){a=Kx(a),i.context===null?i.context=a:i.pendingContext=a,i=La(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Oa(e,i,t),n!==null&&(En(n,e,t),_o(n,e,t))}function Fg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fp(e,t){Fg(e,t),(e=e.alternate)&&Fg(e,t)}function Jx(e){if(e.tag===13||e.tag===31){var t=bs(e,67108864);t!==null&&En(t,e,67108864),Fp(e,67108864)}}function zg(e){if(e.tag===13||e.tag===31){var t=Fn();t=Zh(t);var n=bs(e,t);n!==null&&En(n,e,t),Fp(e,t)}}var Yc=!0;function qE(e,t,n,i){var a=Ut.T;Ut.T=null;var s=ae.p;try{ae.p=2,zp(e,t,n,i)}finally{ae.p=s,Ut.T=a}}function YE(e,t,n,i){var a=Ut.T;Ut.T=null;var s=ae.p;try{ae.p=8,zp(e,t,n,i)}finally{ae.p=s,Ut.T=a}}function zp(e,t,n,i){if(Yc){var a=Xd(i);if(a===null)ff(e,t,i,jc,n),Gg(e,i);else if(ZE(a,e,t,n,i))i.stopPropagation();else if(Gg(e,i),t&4&&-1<jE.indexOf(e)){for(;a!==null;){var s=Lr(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=ts(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Bn(r);o.entanglements[1]|=l,r&=~l}Di(s),!(ie&6)&&(Bc=Pn()+500,$o(0))}}break;case 31:case 13:o=bs(s,2),o!==null&&En(o,s,2),xu(),Fp(s,2)}if(s=Xd(i),s===null&&ff(e,t,i,jc,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else ff(e,t,i,null,n)}}function Xd(e){return e=$h(e),Gp(e)}var jc=null;function Gp(e){if(jc=null,e=Qs(e),e!==null){var t=Xo(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=v_(t),e!==null)return e;e=null}else if(n===31){if(e=x_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return jc=e,null}function $x(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ly()){case E_:return 2;case b_:return 8;case Ec:case Oy:return 32;case T_:return 268435456;default:return 32}default:return 32}}var Wd=!1,Ba=null,Fa=null,za=null,zo=new Map,Go=new Map,Ea=[],jE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gg(e,t){switch(e){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":Fa=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":zo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(t.pointerId)}}function Yr(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Lr(t),t!==null&&Jx(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function ZE(e,t,n,i,a){switch(t){case"focusin":return Ba=Yr(Ba,e,t,n,i,a),!0;case"dragenter":return Fa=Yr(Fa,e,t,n,i,a),!0;case"mouseover":return za=Yr(za,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return zo.set(s,Yr(zo.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,Go.set(s,Yr(Go.get(s)||null,e,t,n,i,a)),!0}return!1}function tS(e){var t=Qs(e.target);if(t!==null){var n=Xo(t);if(n!==null){if(t=n.tag,t===13){if(t=v_(n),t!==null){e.blockedOn=t,bm(e.priority,function(){zg(n)});return}}else if(t===31){if(t=x_(n),t!==null){e.blockedOn=t,bm(e.priority,function(){zg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function dc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xd(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);cd=i,n.target.dispatchEvent(i),cd=null}else return t=Lr(n),t!==null&&Jx(t),e.blockedOn=n,!1;t.shift()}return!0}function Hg(e,t,n){dc(e)&&n.delete(t)}function KE(){Wd=!1,Ba!==null&&dc(Ba)&&(Ba=null),Fa!==null&&dc(Fa)&&(Fa=null),za!==null&&dc(za)&&(za=null),zo.forEach(Hg),Go.forEach(Hg)}function yl(e,t){e.blockedOn===t&&(e.blockedOn=null,Wd||(Wd=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,KE)))}var Ml=null;function Vg(e){Ml!==e&&(Ml=e,je.unstable_scheduleCallback(je.unstable_NormalPriority,function(){Ml===e&&(Ml=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Gp(i||n)===null)continue;break}var s=Lr(n);s!==null&&(e.splice(t,3),t-=3,Td(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Ar(e){function t(l){return yl(l,e)}Ba!==null&&yl(Ba,e),Fa!==null&&yl(Fa,e),za!==null&&yl(za,e),zo.forEach(t),Go.forEach(t);for(var n=0;n<Ea.length;n++){var i=Ea[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ea.length&&(n=Ea[0],n.blockedOn===null);)tS(n),n.blockedOn===null&&Ea.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[An]||null;if(typeof s=="function")r||Vg(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[An]||null)o=r.formAction;else if(Gp(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Vg(n)}}}function eS(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Hp(e){this._internalRoot=e}Mu.prototype.render=Hp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(tt(409));var n=t.current,i=Fn();Qx(n,i,e,t,null,null)};Mu.prototype.unmount=Hp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qx(e.current,2,null,e,null,null),xu(),t[Nr]=null}};function Mu(e){this._internalRoot=e}Mu.prototype.unstable_scheduleHydration=function(e){if(e){var t=D_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ea.length&&t!==0&&t<Ea[n].priority;n++);Ea.splice(n,0,e),n===0&&tS(e)}};var kg=g_.version;if(kg!=="19.2.7")throw Error(tt(527,kg,"19.2.7"));ae.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(tt(188)):(e=Object.keys(e).join(","),Error(tt(268,e)));return e=Ay(t),e=e!==null?S_(e):null,e=e===null?null:e.stateNode,e};var QE={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:Ut,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{Wo=El.inject(QE),In=El}catch{}}su.createRoot=function(e,t){if(!__(e))throw Error(tt(299));var n=!1,i="",a=qv,s=Yv,r=jv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Zx(e,1,!1,null,null,n,i,null,a,s,r,eS),e[Nr]=t.current,Pp(e),new Hp(t)};su.hydrateRoot=function(e,t,n){if(!__(e))throw Error(tt(299));var i=!1,a="",s=qv,r=Yv,o=jv,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=Zx(e,1,!0,t,n??null,i,a,l,s,r,o,eS),t.context=Kx(null),n=t.current,i=Fn(),i=Zh(i),a=La(i),a.callback=null,Oa(n,a,i),n=i,t.current.lanes=n,Yo(t,n),Di(t),e[Nr]=t.current,Pp(e),new Mu(t)};su.version="19.2.7";function nS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nS)}catch(e){console.error(e)}}nS(),u_.exports=su;var JE=u_.exports;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vp="184",$E=0,Xg=1,tb=2,hc=1,eb=2,lo=3,Xa=0,bn=1,Xi=2,Ji=0,pr=1,Wg=2,qg=3,Yg=4,nb=5,as=100,ib=101,ab=102,sb=103,rb=104,ob=200,lb=201,cb=202,ub=203,qd=204,Yd=205,fb=206,db=207,hb=208,pb=209,mb=210,gb=211,_b=212,vb=213,xb=214,jd=0,Zd=1,Kd=2,Rr=3,Qd=4,Jd=5,$d=6,th=7,iS=0,Sb=1,yb=2,Ei=0,aS=1,sS=2,rS=3,oS=4,lS=5,cS=6,uS=7,fS=300,vs=301,Cr=302,pf=303,mf=304,Eu=306,eh=1e3,ji=1001,nh=1002,on=1003,Mb=1004,bl=1005,dn=1006,gf=1007,rs=1008,$n=1009,dS=1010,hS=1011,Ho=1012,kp=1013,Ai=1014,Si=1015,sa=1016,Xp=1017,Wp=1018,Vo=1020,pS=35902,mS=35899,gS=1021,_S=1022,ci=1023,ra=1026,os=1027,vS=1028,qp=1029,xs=1030,Yp=1031,jp=1033,pc=33776,mc=33777,gc=33778,_c=33779,ih=35840,ah=35841,sh=35842,rh=35843,oh=36196,lh=37492,ch=37496,uh=37488,fh=37489,Zc=37490,dh=37491,hh=37808,ph=37809,mh=37810,gh=37811,_h=37812,vh=37813,xh=37814,Sh=37815,yh=37816,Mh=37817,Eh=37818,bh=37819,Th=37820,Ah=37821,Rh=36492,Ch=36494,wh=36495,Dh=36283,Uh=36284,Kc=36285,Nh=36286,Eb=3200,jg=0,bb=1,ba="",Wn="srgb",Qc="srgb-linear",Jc="linear",ce="srgb",Ns=7680,Zg=519,Tb=512,Ab=513,Rb=514,Zp=515,Cb=516,wb=517,Kp=518,Db=519,Kg=35044,Qg="300 es",yi=2e3,$c=2001;function Ub(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function tu(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Nb(){const e=tu("canvas");return e.style.display="block",e}const Jg={};function $g(...e){const t="THREE."+e.shift();console.log(t,...e)}function xS(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Dt(...e){e=xS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function te(...e){e=xS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Lh(...e){const t=e.join(" ");t in Jg||(Jg[t]=!0,Dt(...e))}function Lb(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Ob={[jd]:Zd,[Kd]:$d,[Qd]:th,[Rr]:Jd,[Zd]:jd,[$d]:Kd,[th]:Qd,[Jd]:Rr};class As{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_f=Math.PI/180,Oh=180/Math.PI;function nl(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[e&255]+un[e>>8&255]+un[e>>16&255]+un[e>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[n&63|128]+un[n>>8&255]+"-"+un[n>>16&255]+un[n>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function Qt(e,t,n){return Math.max(t,Math.min(n,e))}function Pb(e,t){return(e%t+t)%t}function vf(e,t,n){return(1-n)*e+n*t}function jr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Sn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const im=class im{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};im.prototype.isVector2=!0;let se=im;class zr{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],h=i[a+2],d=i[a+3],u=s[r+0],p=s[r+1],v=s[r+2],M=s[r+3];if(d!==M||l!==u||c!==p||h!==v){let g=l*u+c*p+h*v+d*M;g<0&&(u=-u,p=-p,v=-v,M=-M,g=-g);let f=1-o;if(g<.9995){const m=Math.acos(g),_=Math.sin(m);f=Math.sin(f*m)/_,o=Math.sin(o*m)/_,l=l*f+u*o,c=c*f+p*o,h=h*f+v*o,d=d*f+M*o}else{l=l*f+u*o,c=c*f+p*o,h=h*f+v*o,d=d*f+M*o;const m=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=m,c*=m,h*=m,d*=m}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],h=i[a+3],d=s[r],u=s[r+1],p=s[r+2],v=s[r+3];return t[n]=o*v+h*d+l*p-c*u,t[n+1]=l*v+h*u+c*d-o*p,t[n+2]=c*v+h*p+o*u-l*d,t[n+3]=h*v-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(a/2),d=o(s/2),u=l(i/2),p=l(a/2),v=l(s/2);switch(r){case"XYZ":this._x=u*h*d+c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d-u*p*v;break;case"YXZ":this._x=u*h*d+c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d+u*p*v;break;case"ZXY":this._x=u*h*d-c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d-u*p*v;break;case"ZYX":this._x=u*h*d-c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d+u*p*v;break;case"YZX":this._x=u*h*d+c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d-u*p*v;break;case"XZY":this._x=u*h*d-c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d+u*p*v;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(r-a)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(r-a)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+a*c-s*l,this._y=a*h+r*l+s*o-i*c,this._z=s*h+r*c+i*l-a*o,this._w=r*h-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const am=class am{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(t0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(t0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),h=2*(o*n-s*a),d=2*(s*i-r*n);return this.x=n+l*c+r*d-o*h,this.y=i+l*h+o*c-s*d,this.z=a+l*d+s*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this.z=Qt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this.z=Qt(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return xf.copy(this).projectOnVector(t),this.sub(xf)}reflect(t){return this.sub(xf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};am.prototype.isVector3=!0;let z=am;const xf=new z,t0=new zr,sm=class sm{constructor(t,n,i,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],v=i[8],M=a[0],g=a[3],f=a[6],m=a[1],_=a[4],y=a[7],C=a[2],b=a[5],R=a[8];return s[0]=r*M+o*m+l*C,s[3]=r*g+o*_+l*b,s[6]=r*f+o*y+l*R,s[1]=c*M+h*m+d*C,s[4]=c*g+h*_+d*b,s[7]=c*f+h*y+d*R,s[2]=u*M+p*m+v*C,s[5]=u*g+p*_+v*b,s[8]=u*f+p*y+v*R,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*s*h+i*o*l+a*s*c-a*r*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,u=o*l-h*s,p=c*s-r*l,v=n*d+i*u+a*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return t[0]=d*M,t[1]=(a*c-h*i)*M,t[2]=(o*i-a*r)*M,t[3]=u*M,t[4]=(h*n-a*l)*M,t[5]=(a*s-o*n)*M,t[6]=p*M,t[7]=(i*l-c*n)*M,t[8]=(r*n-i*s)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Sf.makeScale(t,n)),this}rotate(t){return this.premultiply(Sf.makeRotation(-t)),this}translate(t,n){return this.premultiply(Sf.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};sm.prototype.isMatrix3=!0;let Ot=sm;const Sf=new Ot,e0=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),n0=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ib(){const e={enabled:!0,workingColorSpace:Qc,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===ce&&(a.r=$i(a.r),a.g=$i(a.g),a.b=$i(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ce&&(a.r=mr(a.r),a.g=mr(a.g),a.b=mr(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ba?Jc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Lh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Lh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Qc]:{primaries:t,whitePoint:i,transfer:Jc,toXYZ:e0,fromXYZ:n0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:t,whitePoint:i,transfer:ce,toXYZ:e0,fromXYZ:n0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),e}const Kt=Ib();function $i(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function mr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Ls;class Bb{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ls===void 0&&(Ls=tu("canvas")),Ls.width=t.width,Ls.height=t.height;const a=Ls.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=Ls}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=tu("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=$i(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($i(n[i]/255)*255):n[i]=$i(n[i]);return{data:n,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fb=0;class Qp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=nl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(yf(a[r].image)):s.push(yf(a[r]))}else s=yf(a);i.url=s}return n||(t.images[this.uuid]=i),i}}function yf(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Bb.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}let zb=0;const Mf=new z;class gn extends As{constructor(t=gn.DEFAULT_IMAGE,n=gn.DEFAULT_MAPPING,i=ji,a=ji,s=dn,r=rs,o=ci,l=$n,c=gn.DEFAULT_ANISOTROPY,h=ba){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zb++}),this.uuid=nl(),this.name="",this.source=new Qp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Mf).x}get height(){return this.source.getSize(Mf).y}get depth(){return this.source.getSize(Mf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){Dt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Dt(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case eh:t.x=t.x-Math.floor(t.x);break;case ji:t.x=t.x<0?0:1;break;case nh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case eh:t.y=t.y-Math.floor(t.y);break;case ji:t.y=t.y<0?0:1;break;case nh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=fS;gn.DEFAULT_ANISOTROPY=1;const rm=class rm{constructor(t=0,n=0,i=0,a=1){this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],v=l[9],M=l[2],g=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(p+1)/2,C=(f+1)/2,b=(h+u)/4,R=(d+M)/4,x=(v+g)/4;return _>y&&_>C?_<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(_),a=b/i,s=R/i):y>C?y<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(y),i=b/a,s=x/a):C<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(C),i=R/s,a=x/s),this.set(i,a,s,n),this}let m=Math.sqrt((g-v)*(g-v)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(d-M)/m,this.z=(u-h)/m,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this.z=Qt(this.z,t.z,n.z),this.w=Qt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this.z=Qt(this.z,t,n),this.w=Qt(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rm.prototype.isVector4=!0;let ze=rm;class Gb extends As{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new ze(0,0,t,n),this.scissorTest=!1,this.viewport=new ze(0,0,t,n),this.textures=[];const a={width:t,height:n,depth:i.depth},s=new gn(a),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new Qp(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends Gb{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class SS extends gn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=on,this.minFilter=on,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hb extends gn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=on,this.minFilter=on,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const iu=class iu{constructor(t,n,i,a,s,r,o,l,c,h,d,u,p,v,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,h,d,u,p,v,M,g)}set(t,n,i,a,s,r,o,l,c,h,d,u,p,v,M,g){const f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=v,f[11]=M,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new iu().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,i=t.elements,a=1/Os.setFromMatrixColumn(t,0).length(),s=1/Os.setFromMatrixColumn(t,1).length(),r=1/Os.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=r*h,p=r*d,v=o*h,M=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=v+p*c,n[10]=r*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,v=c*h,M=c*d;n[0]=u+M*o,n[4]=v*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*h,n[9]=-o,n[2]=p*o-v,n[6]=M+u*o,n[10]=r*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,v=c*h,M=c*d;n[0]=u-M*o,n[4]=-r*d,n[8]=v+p*o,n[1]=p+v*o,n[5]=r*h,n[9]=M-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){const u=r*h,p=r*d,v=o*h,M=o*d;n[0]=l*h,n[4]=v*c-p,n[8]=u*c+M,n[1]=l*d,n[5]=M*c+u,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){const u=r*l,p=r*c,v=o*l,M=o*c;n[0]=l*h,n[4]=M-u*d,n[8]=v*d+p,n[1]=d,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+v,n[10]=u-M*d}else if(t.order==="XZY"){const u=r*l,p=r*c,v=o*l,M=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=u*d+M,n[5]=r*h,n[9]=p*d-v,n[2]=v*d-p,n[6]=o*h,n[10]=M*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vb,t,kb)}lookAt(t,n,i){const a=this.elements;return wn.subVectors(t,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),da.crossVectors(i,wn),da.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),da.crossVectors(i,wn)),da.normalize(),Tl.crossVectors(wn,da),a[0]=da.x,a[4]=Tl.x,a[8]=wn.x,a[1]=da.y,a[5]=Tl.y,a[9]=wn.y,a[2]=da.z,a[6]=Tl.z,a[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],v=i[2],M=i[6],g=i[10],f=i[14],m=i[3],_=i[7],y=i[11],C=i[15],b=a[0],R=a[4],x=a[8],A=a[12],w=a[1],D=a[5],F=a[9],Z=a[13],j=a[2],P=a[6],U=a[10],O=a[14],q=a[3],$=a[7],it=a[11],vt=a[15];return s[0]=r*b+o*w+l*j+c*q,s[4]=r*R+o*D+l*P+c*$,s[8]=r*x+o*F+l*U+c*it,s[12]=r*A+o*Z+l*O+c*vt,s[1]=h*b+d*w+u*j+p*q,s[5]=h*R+d*D+u*P+p*$,s[9]=h*x+d*F+u*U+p*it,s[13]=h*A+d*Z+u*O+p*vt,s[2]=v*b+M*w+g*j+f*q,s[6]=v*R+M*D+g*P+f*$,s[10]=v*x+M*F+g*U+f*it,s[14]=v*A+M*Z+g*O+f*vt,s[3]=m*b+_*w+y*j+C*q,s[7]=m*R+_*D+y*P+C*$,s[11]=m*x+_*F+y*U+C*it,s[15]=m*A+_*Z+y*O+C*vt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],v=t[3],M=t[7],g=t[11],f=t[15],m=l*p-c*u,_=o*p-c*d,y=o*u-l*d,C=r*p-c*h,b=r*u-l*h,R=r*d-o*h;return n*(M*m-g*_+f*y)-i*(v*m-g*C+f*b)+a*(v*_-M*C+f*R)-s*(v*y-M*b+g*R)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],v=t[12],M=t[13],g=t[14],f=t[15],m=n*o-i*r,_=n*l-a*r,y=n*c-s*r,C=i*l-a*o,b=i*c-s*o,R=a*c-s*l,x=h*M-d*v,A=h*g-u*v,w=h*f-p*v,D=d*g-u*M,F=d*f-p*M,Z=u*f-p*g,j=m*Z-_*F+y*D+C*w-b*A+R*x;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/j;return t[0]=(o*Z-l*F+c*D)*P,t[1]=(a*F-i*Z-s*D)*P,t[2]=(M*R-g*b+f*C)*P,t[3]=(u*b-d*R-p*C)*P,t[4]=(l*w-r*Z-c*A)*P,t[5]=(n*Z-a*w+s*A)*P,t[6]=(g*y-v*R-f*_)*P,t[7]=(h*R-u*y+p*_)*P,t[8]=(r*F-o*w+c*x)*P,t[9]=(i*w-n*F-s*x)*P,t[10]=(v*b-M*y+f*m)*P,t[11]=(d*y-h*b-p*m)*P,t[12]=(o*A-r*D-l*x)*P,t[13]=(n*D-i*A+a*x)*P,t[14]=(M*_-v*C-g*m)*P,t[15]=(h*C-d*_+u*m)*P,this}scale(t){const n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,h=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+i,h*l-a*r,0,c*l-a*o,h*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,h=r+r,d=o+o,u=s*c,p=s*h,v=s*d,M=r*h,g=r*d,f=o*d,m=l*c,_=l*h,y=l*d,C=i.x,b=i.y,R=i.z;return a[0]=(1-(M+f))*C,a[1]=(p+y)*C,a[2]=(v-_)*C,a[3]=0,a[4]=(p-y)*b,a[5]=(1-(u+f))*b,a[6]=(g+m)*b,a[7]=0,a[8]=(v+_)*R,a[9]=(g-m)*R,a[10]=(1-(u+M))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let r=Os.set(a[0],a[1],a[2]).length();const o=Os.set(a[4],a[5],a[6]).length(),l=Os.set(a[8],a[9],a[10]).length();s<0&&(r=-r),ai.copy(this);const c=1/r,h=1/o,d=1/l;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=h,ai.elements[5]*=h,ai.elements[6]*=h,ai.elements[8]*=d,ai.elements[9]*=d,ai.elements[10]*=d,n.setFromRotationMatrix(ai),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,a,s,r,o=yi,l=!1){const c=this.elements,h=2*s/(n-t),d=2*s/(i-a),u=(n+t)/(n-t),p=(i+a)/(i-a);let v,M;if(l)v=s/(r-s),M=r*s/(r-s);else if(o===yi)v=-(r+s)/(r-s),M=-2*r*s/(r-s);else if(o===$c)v=-r/(r-s),M=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=yi,l=!1){const c=this.elements,h=2/(n-t),d=2/(i-a),u=-(n+t)/(n-t),p=-(i+a)/(i-a);let v,M;if(l)v=1/(r-s),M=r/(r-s);else if(o===yi)v=-2/(r-s),M=-(r+s)/(r-s);else if(o===$c)v=-1/(r-s),M=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};iu.prototype.isMatrix4=!0;let qe=iu;const Os=new z,ai=new qe,Vb=new z(0,0,0),kb=new z(1,1,1),da=new z,Tl=new z,wn=new z,i0=new qe,a0=new zr;class Ss{constructor(t=0,n=0,i=0,a=Ss.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],h=a[9],d=a[2],u=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Qt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return i0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(i0,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return a0.setFromEuler(this),this.setFromQuaternion(a0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ss.DEFAULT_ORDER="XYZ";class yS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xb=0;const s0=new z,Ps=new zr,Ii=new qe,Al=new z,Zr=new z,Wb=new z,qb=new zr,r0=new z(1,0,0),o0=new z(0,1,0),l0=new z(0,0,1),c0={type:"added"},Yb={type:"removed"},Is={type:"childadded",child:null},Ef={type:"childremoved",child:null};class Tn extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xb++}),this.uuid=nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const t=new z,n=new Ss,i=new zr,a=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ot}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ps.setFromAxisAngle(t,n),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,n){return Ps.setFromAxisAngle(t,n),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis(r0,t)}rotateY(t){return this.rotateOnAxis(o0,t)}rotateZ(t){return this.rotateOnAxis(l0,t)}translateOnAxis(t,n){return s0.copy(t).applyQuaternion(this.quaternion),this.position.add(s0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(r0,t)}translateY(t){return this.translateOnAxis(o0,t)}translateZ(t){return this.translateOnAxis(l0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Al.copy(t):Al.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Zr,Al,this.up):Ii.lookAt(Al,Zr,this.up),this.quaternion.setFromRotationMatrix(Ii),a&&(Ii.extractRotation(a.matrixWorld),Ps.setFromRotationMatrix(Ii),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(c0),Is.child=t,this.dispatchEvent(Is),Is.child=null):te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Yb),Ef.child=t,this.dispatchEvent(Ef),Ef.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(c0),Is.child=t,this.dispatchEvent(Is),Is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,t,Wb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,qb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,i=t.y,a=t.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),p=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=a,i;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}Tn.DEFAULT_UP=new z(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Rl extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jb={type:"move"};class bf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const M of t.hand.values()){const g=n.getJointPose(M,i),f=this._getHandJoint(c,M);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&u>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jb)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Rl;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const MS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ha={h:0,s:0,l:0},Cl={h:0,s:0,l:0};function Tf(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class de{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=Kt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Kt.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=Kt.workingColorSpace){if(t=Pb(t,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=Tf(r,s,t+1/3),this.g=Tf(r,s,t),this.b=Tf(r,s,t-1/3)}return Kt.colorSpaceToWorking(this,a),this}setStyle(t,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Dt("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Wn){const i=MS[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}copyLinearToSRGB(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Wn){return Kt.workingToColorSpace(fn.copy(this),t),Math.round(Qt(fn.r*255,0,255))*65536+Math.round(Qt(fn.g*255,0,255))*256+Math.round(Qt(fn.b*255,0,255))}getHexString(t=Wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Kt.workingColorSpace){Kt.workingToColorSpace(fn.copy(this),n);const i=fn.r,a=fn.g,s=fn.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case i:l=(a-s)/d+(a<s?6:0);break;case a:l=(s-i)/d+2;break;case s:l=(i-a)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=Kt.workingColorSpace){return Kt.workingToColorSpace(fn.copy(this),n),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=Wn){Kt.workingToColorSpace(fn.copy(this),t);const n=fn.r,i=fn.g,a=fn.b;return t!==Wn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(ha),this.setHSL(ha.h+t,ha.s+n,ha.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ha),t.getHSL(Cl);const i=vf(ha.h,Cl.h,n),a=vf(ha.s,Cl.s,n),s=vf(ha.l,Cl.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new de;de.NAMES=MS;class Zb extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ss,this.environmentIntensity=1,this.environmentRotation=new Ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const si=new z,Bi=new z,Af=new z,Fi=new z,Bs=new z,Fs=new z,u0=new z,Rf=new z,Cf=new z,wf=new z,Df=new ze,Uf=new ze,Nf=new ze;class li{constructor(t=new z,n=new z,i=new z){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),si.subVectors(t,n),a.cross(si);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){si.subVectors(a,n),Bi.subVectors(i,n),Af.subVectors(t,n);const r=si.dot(si),o=si.dot(Bi),l=si.dot(Af),c=Bi.dot(Bi),h=Bi.dot(Af),d=r*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,v=(r*h-o*l)*u;return s.set(1-p-v,v,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(r,Fi.y),l.addScaledVector(o,Fi.z),l)}static getInterpolatedAttribute(t,n,i,a,s,r){return Df.setScalar(0),Uf.setScalar(0),Nf.setScalar(0),Df.fromBufferAttribute(t,n),Uf.fromBufferAttribute(t,i),Nf.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(Df,s.x),r.addScaledVector(Uf,s.y),r.addScaledVector(Nf,s.z),r}static isFrontFacing(t,n,i,a){return si.subVectors(i,n),Bi.subVectors(t,n),si.cross(Bi).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),si.cross(Bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return li.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return li.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,s=this.c;let r,o;Bs.subVectors(a,i),Fs.subVectors(s,i),Rf.subVectors(t,i);const l=Bs.dot(Rf),c=Fs.dot(Rf);if(l<=0&&c<=0)return n.copy(i);Cf.subVectors(t,a);const h=Bs.dot(Cf),d=Fs.dot(Cf);if(h>=0&&d<=h)return n.copy(a);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(Bs,r);wf.subVectors(t,s);const p=Bs.dot(wf),v=Fs.dot(wf);if(v>=0&&p<=v)return n.copy(s);const M=p*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Fs,o);const g=h*v-p*d;if(g<=0&&d-h>=0&&p-v>=0)return u0.subVectors(s,a),o=(d-h)/(d-h+(p-v)),n.copy(a).addScaledVector(u0,o);const f=1/(g+M+u);return r=M*f,o=u*f,n.copy(i).addScaledVector(Bs,r).addScaledVector(Fs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class il{constructor(t=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(ri.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(ri.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=ri.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ri):ri.fromBufferAttribute(s,r),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wl.copy(i.boundingBox)),wl.applyMatrix4(t.matrixWorld),this.union(wl)}const a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Kr),Dl.subVectors(this.max,Kr),zs.subVectors(t.a,Kr),Gs.subVectors(t.b,Kr),Hs.subVectors(t.c,Kr),pa.subVectors(Gs,zs),ma.subVectors(Hs,Gs),Za.subVectors(zs,Hs);let n=[0,-pa.z,pa.y,0,-ma.z,ma.y,0,-Za.z,Za.y,pa.z,0,-pa.x,ma.z,0,-ma.x,Za.z,0,-Za.x,-pa.y,pa.x,0,-ma.y,ma.x,0,-Za.y,Za.x,0];return!Lf(n,zs,Gs,Hs,Dl)||(n=[1,0,0,0,1,0,0,0,1],!Lf(n,zs,Gs,Hs,Dl))?!1:(Ul.crossVectors(pa,ma),n=[Ul.x,Ul.y,Ul.z],Lf(n,zs,Gs,Hs,Dl))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const zi=[new z,new z,new z,new z,new z,new z,new z,new z],ri=new z,wl=new il,zs=new z,Gs=new z,Hs=new z,pa=new z,ma=new z,Za=new z,Kr=new z,Dl=new z,Ul=new z,Ka=new z;function Lf(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){Ka.fromArray(e,s);const o=a.x*Math.abs(Ka.x)+a.y*Math.abs(Ka.y)+a.z*Math.abs(Ka.z),l=t.dot(Ka),c=n.dot(Ka),h=i.dot(Ka);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const He=new z,Nl=new se;let Kb=0;class Ti extends As{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kb++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Kg,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Nl.fromBufferAttribute(this,n),Nl.applyMatrix3(t),this.setXY(n,Nl.x,Nl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyMatrix3(t),this.setXYZ(n,He.x,He.y,He.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyMatrix4(t),this.setXYZ(n,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyNormalMatrix(t),this.setXYZ(n,He.x,He.y,He.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.transformDirection(t),this.setXYZ(n,He.x,He.y,He.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=jr(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Sn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=jr(n,this.array)),n}setX(t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=jr(n,this.array)),n}setY(t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=jr(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=jr(n,this.array)),n}setW(t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),a=Sn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),a=Sn(a,this.array),s=Sn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kg&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class ES extends Ti{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class bS extends Ti{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class en extends Ti{constructor(t,n,i){super(new Float32Array(t),n,i)}}const Qb=new il,Qr=new z,Of=new z;class bu{constructor(t=new z,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):Qb.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qr.subVectors(t,this.center);const n=Qr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Qr,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Of.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qr.copy(t.center).add(Of)),this.expandByPoint(Qr.copy(t.center).sub(Of))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Jb=0;const kn=new qe,Pf=new Tn,Vs=new z,Dn=new il,Jr=new il,Qe=new z;class Hn extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jb++}),this.uuid=nl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ub(t)?bS:ES)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ot().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,n,i){return kn.makeTranslation(t,n,i),this.applyMatrix4(kn),this}scale(t,n,i){return kn.makeScale(t,n,i),this.applyMatrix4(kn),this}lookAt(t){return Pf.lookAt(t),Pf.updateMatrix(),this.applyMatrix4(Pf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=t.length;a<s;a++){const r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new en(i,3))}else{const i=Math.min(t.length,n.count);for(let a=0;a<i;a++){const s=t[a];n.setXYZ(a,s.x,s.y,s.z||0)}t.length>n.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];Jr.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(Dn.min,Jr.min),Dn.expandByPoint(Qe),Qe.addVectors(Dn.max,Jr.max),Dn.expandByPoint(Qe)):(Dn.expandByPoint(Jr.min),Dn.expandByPoint(Jr.max))}Dn.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)Qe.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(Qe));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Qe.fromBufferAttribute(o,c),l&&(Vs.fromBufferAttribute(t,c),Qe.add(Vs)),a=Math.max(a,i.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new z,l[x]=new z;const c=new z,h=new z,d=new z,u=new se,p=new se,v=new se,M=new z,g=new z;function f(x,A,w){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,A),d.fromBufferAttribute(i,w),u.fromBufferAttribute(s,x),p.fromBufferAttribute(s,A),v.fromBufferAttribute(s,w),h.sub(c),d.sub(c),p.sub(u),v.sub(u);const D=1/(p.x*v.y-v.x*p.y);isFinite(D)&&(M.copy(h).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(D),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(D),o[x].add(M),o[A].add(M),o[w].add(M),l[x].add(g),l[A].add(g),l[w].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let x=0,A=m.length;x<A;++x){const w=m[x],D=w.start,F=w.count;for(let Z=D,j=D+F;Z<j;Z+=3)f(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}const _=new z,y=new z,C=new z,b=new z;function R(x){C.fromBufferAttribute(a,x),b.copy(C);const A=o[x];_.copy(A),_.sub(C.multiplyScalar(C.dot(A))).normalize(),y.crossVectors(b,A);const D=y.dot(l[x])<0?-1:1;r.setXYZW(x,_.x,_.y,_.z,D)}for(let x=0,A=m.length;x<A;++x){const w=m[x],D=w.start,F=w.count;for(let Z=D,j=D+F;Z<j;Z+=3)R(t.getX(Z+0)),R(t.getX(Z+1)),R(t.getX(Z+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ti(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const a=new z,s=new z,r=new z,o=new z,l=new z,c=new z,h=new z,d=new z;if(t)for(let u=0,p=t.count;u<p;u+=3){const v=t.getX(u+0),M=t.getX(u+1),g=t.getX(u+2);a.fromBufferAttribute(n,v),s.fromBufferAttribute(n,M),r.fromBufferAttribute(n,g),h.subVectors(r,s),d.subVectors(a,s),h.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)a.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),h.subVectors(r,s),d.subVectors(a,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Qe.fromBufferAttribute(t,n),Qe.normalize(),t.setXYZ(n,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,v=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*h;for(let f=0;f<h;f++)u[v++]=c[p++]}return new Ti(u,h,d)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Hn,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(a[l]=h,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const c in a){const h=a[c];this.setAttribute(c,h.clone(n))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let $b=0;class al extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$b++}),this.uuid=nl(),this.name="",this.type="Material",this.blending=pr,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qd,this.blendDst=Yd,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){Dt(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Dt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(i.blending=this.blending),this.side!==Xa&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qd&&(i.blendSrc=this.blendSrc),this.blendDst!==Yd&&(i.blendDst=this.blendDst),this.blendEquation!==as&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Gi=new z,If=new z,Ll=new z,ga=new z,Bf=new z,Ol=new z,Ff=new z;class TS{constructor(t=new z,n=new z(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Gi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Gi.copy(this.origin).addScaledVector(this.direction,n),Gi.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){If.copy(t).add(n).multiplyScalar(.5),Ll.copy(n).sub(t).normalize(),ga.copy(this.origin).sub(If);const s=t.distanceTo(n)*.5,r=-this.direction.dot(Ll),o=ga.dot(this.direction),l=-ga.dot(Ll),c=ga.lengthSq(),h=Math.abs(1-r*r);let d,u,p,v;if(h>0)if(d=r*l-o,u=r*o-l,v=s*h,d>=0)if(u>=-v)if(u<=v){const M=1/h;d*=M,u*=M,p=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-v?(d=Math.max(0,-(-r*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=v?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(r*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=r>0?-s:s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(If).addScaledVector(Ll,u),p}intersectSphere(t,n){Gi.subVectors(t.center,this.origin);const i=Gi.dot(this.direction),a=Gi.dot(Gi)-i*i,s=t.radius*t.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,a=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,a=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,Gi)!==null}intersectTriangle(t,n,i,a,s){Bf.subVectors(n,t),Ol.subVectors(i,t),Ff.crossVectors(Bf,Ol);let r=this.direction.dot(Ff),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ga.subVectors(this.origin,t);const l=o*this.direction.dot(Ol.crossVectors(ga,Ol));if(l<0)return null;const c=o*this.direction.dot(Bf.cross(ga));if(c<0||l+c>r)return null;const h=-o*ga.dot(Ff);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jp extends al{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.combine=iS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const f0=new qe,Qa=new TS,Pl=new bu,d0=new z,Il=new z,Bl=new z,Fl=new z,zf=new z,zl=new z,h0=new z,Gl=new z;class Ri extends Tn{constructor(t=new Hn,n=new Jp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(s&&o){zl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(zf.fromBufferAttribute(d,t),r?zl.addScaledVector(zf,h):zl.addScaledVector(zf.sub(n),h))}n.add(zl)}return n}raycast(t,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pl.copy(i.boundingSphere),Pl.applyMatrix4(s),Qa.copy(t.ray).recast(t.near),!(Pl.containsPoint(Qa.origin)===!1&&(Qa.intersectSphere(Pl,d0)===null||Qa.origin.distanceToSquared(d0)>(t.far-t.near)**2))&&(f0.copy(s).invert(),Qa.copy(t.ray).applyMatrix4(f0),!(i.boundingBox!==null&&Qa.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Qa)))}_computeIntersections(t,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,M=u.length;v<M;v++){const g=u[v],f=r[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=m,C=_;y<C;y+=3){const b=o.getX(y),R=o.getX(y+1),x=o.getX(y+2);a=Hl(this,f,t,i,c,h,d,b,R,x),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const v=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let g=v,f=M;g<f;g+=3){const m=o.getX(g),_=o.getX(g+1),y=o.getX(g+2);a=Hl(this,r,t,i,c,h,d,m,_,y),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,M=u.length;v<M;v++){const g=u[v],f=r[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=m,C=_;y<C;y+=3){const b=y,R=y+1,x=y+2;a=Hl(this,f,t,i,c,h,d,b,R,x),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const v=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=v,f=M;g<f;g+=3){const m=g,_=g+1,y=g+2;a=Hl(this,r,t,i,c,h,d,m,_,y),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function tT(e,t,n,i,a,s,r,o){let l;if(t.side===bn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===Xa,o),l===null)return null;Gl.copy(o),Gl.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(Gl);return c<n.near||c>n.far?null:{distance:c,point:Gl.clone(),object:e}}function Hl(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,Il),e.getVertexPosition(l,Bl),e.getVertexPosition(c,Fl);const h=tT(e,t,n,i,Il,Bl,Fl,h0);if(h){const d=new z;li.getBarycoord(h0,Il,Bl,Fl,d),a&&(h.uv=li.getInterpolatedAttribute(a,o,l,c,d,new se)),s&&(h.uv1=li.getInterpolatedAttribute(s,o,l,c,d,new se)),r&&(h.normal=li.getInterpolatedAttribute(r,o,l,c,d,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new z,materialIndex:0};li.getNormal(Il,Bl,Fl,u.normal),h.face=u,h.barycoord=d}return h}class eT extends gn{constructor(t=null,n=1,i=1,a,s,r,o,l,c=on,h=on,d,u){super(null,r,o,l,c,h,a,s,d,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gf=new z,nT=new z,iT=new Ot;class is{constructor(t=new z(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=Gf.subVectors(i,n).cross(nT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){const a=t.delta(Gf),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(a,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||iT.getNormalMatrix(t),a=this.coplanarPoint(Gf).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ja=new bu,aT=new se(.5,.5),Vl=new z;class AS{constructor(t=new is,n=new is,i=new is,a=new is,s=new is,r=new is){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=yi,i=!1){const a=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],p=s[7],v=s[8],M=s[9],g=s[10],f=s[11],m=s[12],_=s[13],y=s[14],C=s[15];if(a[0].setComponents(c-r,p-h,f-v,C-m).normalize(),a[1].setComponents(c+r,p+h,f+v,C+m).normalize(),a[2].setComponents(c+o,p+d,f+M,C+_).normalize(),a[3].setComponents(c-o,p-d,f-M,C-_).normalize(),i)a[4].setComponents(l,u,g,y).normalize(),a[5].setComponents(c-l,p-u,f-g,C-y).normalize();else if(a[4].setComponents(c-l,p-u,f-g,C-y).normalize(),n===yi)a[5].setComponents(c+l,p+u,f+g,C+y).normalize();else if(n===$c)a[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ja.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ja)}intersectsSprite(t){Ja.center.set(0,0,0);const n=aT.distanceTo(t.center);return Ja.radius=.7071067811865476+n,Ja.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ja)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Vl.x=a.normal.x>0?t.max.x:t.min.x,Vl.y=a.normal.y>0?t.max.y:t.min.y,Vl.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Vl)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class RS extends al{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const eu=new z,nu=new z,p0=new qe,$r=new TS,kl=new bu,Hf=new z,m0=new z;class sT extends Tn{constructor(t=new Hn,n=new RS){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let a=1,s=n.count;a<s;a++)eu.fromBufferAttribute(n,a-1),nu.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=eu.distanceTo(nu);t.setAttribute("lineDistance",new en(i,1))}else Dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kl.copy(i.boundingSphere),kl.applyMatrix4(a),kl.radius+=s,t.ray.intersectsSphere(kl)===!1)return;p0.copy(a).invert(),$r.copy(t.ray).applyMatrix4(p0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const p=Math.max(0,r.start),v=Math.min(h.count,r.start+r.count);for(let M=p,g=v-1;M<g;M+=c){const f=h.getX(M),m=h.getX(M+1),_=Xl(this,t,$r,l,f,m,M);_&&n.push(_)}if(this.isLineLoop){const M=h.getX(v-1),g=h.getX(p),f=Xl(this,t,$r,l,M,g,v-1);f&&n.push(f)}}else{const p=Math.max(0,r.start),v=Math.min(u.count,r.start+r.count);for(let M=p,g=v-1;M<g;M+=c){const f=Xl(this,t,$r,l,M,M+1,M);f&&n.push(f)}if(this.isLineLoop){const M=Xl(this,t,$r,l,v-1,p,v-1);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Xl(e,t,n,i,a,s,r){const o=e.geometry.attributes.position;if(eu.fromBufferAttribute(o,a),nu.fromBufferAttribute(o,s),n.distanceSqToSegment(eu,nu,Hf,m0)>i)return;Hf.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(Hf);if(!(c<t.near||c>t.far))return{distance:c,point:m0.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}const g0=new z,_0=new z;class rT extends sT{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[];for(let a=0,s=n.count;a<s;a+=2)g0.fromBufferAttribute(n,a),_0.fromBufferAttribute(n,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+g0.distanceTo(_0);t.setAttribute("lineDistance",new en(i,1))}else Dt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class CS extends gn{constructor(t=[],n=vs,i,a,s,r,o,l,c,h){super(t,n,i,a,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wr extends gn{constructor(t,n,i=Ai,a,s,r,o=on,l=on,c,h=ra,d=1){if(h!==ra&&h!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:n,depth:d};super(u,a,s,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class oT extends wr{constructor(t,n=Ai,i=vs,a,s,r=on,o=on,l,c=ra){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,n,i,a,s,r,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class wS extends gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class sl extends Hn{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,p=0;v("z","y","x",-1,-1,i,n,t,r,s,0),v("z","y","x",1,-1,i,n,-t,r,s,1),v("x","z","y",1,1,t,i,n,a,r,2),v("x","z","y",1,-1,t,i,-n,a,r,3),v("x","y","z",1,-1,t,n,i,a,s,4),v("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(h,3)),this.setAttribute("uv",new en(d,2));function v(M,g,f,m,_,y,C,b,R,x,A){const w=y/R,D=C/x,F=y/2,Z=C/2,j=b/2,P=R+1,U=x+1;let O=0,q=0;const $=new z;for(let it=0;it<U;it++){const vt=it*D-Z;for(let Mt=0;Mt<P;Mt++){const Vt=Mt*w-F;$[M]=Vt*m,$[g]=vt*_,$[f]=j,c.push($.x,$.y,$.z),$[M]=0,$[g]=0,$[f]=b>0?1:-1,h.push($.x,$.y,$.z),d.push(Mt/R),d.push(1-it/x),O+=1}}for(let it=0;it<x;it++)for(let vt=0;vt<R;vt++){const Mt=u+vt+P*it,Vt=u+vt+P*(it+1),kt=u+(vt+1)+P*(it+1),wt=u+(vt+1)+P*it;l.push(Mt,Vt,wt),l.push(Vt,kt,wt),q+=6}o.addGroup(p,q,A),p+=q,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class $p extends Hn{constructor(t=[],n=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:a};const s=[],r=[];o(a),c(i),h(),this.setAttribute("position",new en(s,3)),this.setAttribute("normal",new en(s.slice(),3)),this.setAttribute("uv",new en(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const _=new z,y=new z,C=new z;for(let b=0;b<n.length;b+=3)p(n[b+0],_),p(n[b+1],y),p(n[b+2],C),l(_,y,C,m)}function l(m,_,y,C){const b=C+1,R=[];for(let x=0;x<=b;x++){R[x]=[];const A=m.clone().lerp(y,x/b),w=_.clone().lerp(y,x/b),D=b-x;for(let F=0;F<=D;F++)F===0&&x===b?R[x][F]=A:R[x][F]=A.clone().lerp(w,F/D)}for(let x=0;x<b;x++)for(let A=0;A<2*(b-x)-1;A++){const w=Math.floor(A/2);A%2===0?(u(R[x][w+1]),u(R[x+1][w]),u(R[x][w])):(u(R[x][w+1]),u(R[x+1][w+1]),u(R[x+1][w]))}}function c(m){const _=new z;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(m),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function h(){const m=new z;for(let _=0;_<s.length;_+=3){m.x=s[_+0],m.y=s[_+1],m.z=s[_+2];const y=g(m)/2/Math.PI+.5,C=f(m)/Math.PI+.5;r.push(y,1-C)}v(),d()}function d(){for(let m=0;m<r.length;m+=6){const _=r[m+0],y=r[m+2],C=r[m+4],b=Math.max(_,y,C),R=Math.min(_,y,C);b>.9&&R<.1&&(_<.2&&(r[m+0]+=1),y<.2&&(r[m+2]+=1),C<.2&&(r[m+4]+=1))}}function u(m){s.push(m.x,m.y,m.z)}function p(m,_){const y=m*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function v(){const m=new z,_=new z,y=new z,C=new z,b=new se,R=new se,x=new se;for(let A=0,w=0;A<s.length;A+=9,w+=6){m.set(s[A+0],s[A+1],s[A+2]),_.set(s[A+3],s[A+4],s[A+5]),y.set(s[A+6],s[A+7],s[A+8]),b.set(r[w+0],r[w+1]),R.set(r[w+2],r[w+3]),x.set(r[w+4],r[w+5]),C.copy(m).add(_).add(y).divideScalar(3);const D=g(C);M(b,w+0,m,D),M(R,w+2,_,D),M(x,w+4,y,D)}}function M(m,_,y,C){C<0&&m.x===1&&(r[_]=m.x-1),y.x===0&&y.z===0&&(r[_]=C/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function f(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $p(t.vertices,t.indices,t.radius,t.detail)}}class tm extends $p{constructor(t=1,n=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,s,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new tm(t.radius,t.detail)}}class Tu extends Hn{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,h=l+1,d=t/o,u=n/l,p=[],v=[],M=[],g=[];for(let f=0;f<h;f++){const m=f*u-r;for(let _=0;_<c;_++){const y=_*d-s;v.push(y,-m,0),M.push(0,0,1),g.push(_/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const _=m+c*f,y=m+c*(f+1),C=m+1+c*(f+1),b=m+1+c*f;p.push(_,y,b),p.push(y,C,b)}this.setIndex(p),this.setAttribute("position",new en(v,3)),this.setAttribute("normal",new en(M,3)),this.setAttribute("uv",new en(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tu(t.width,t.height,t.widthSegments,t.heightSegments)}}class em extends Hn{constructor(t=1,n=.4,i=12,a=48,s=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:a,arc:s,thetaStart:r,thetaLength:o},i=Math.floor(i),a=Math.floor(a);const l=[],c=[],h=[],d=[],u=new z,p=new z,v=new z;for(let M=0;M<=i;M++){const g=r+M/i*o;for(let f=0;f<=a;f++){const m=f/a*s;p.x=(t+n*Math.cos(g))*Math.cos(m),p.y=(t+n*Math.cos(g))*Math.sin(m),p.z=n*Math.sin(g),c.push(p.x,p.y,p.z),u.x=t*Math.cos(m),u.y=t*Math.sin(m),v.subVectors(p,u).normalize(),h.push(v.x,v.y,v.z),d.push(f/a),d.push(M/i)}}for(let M=1;M<=i;M++)for(let g=1;g<=a;g++){const f=(a+1)*M+g-1,m=(a+1)*(M-1)+g-1,_=(a+1)*(M-1)+g,y=(a+1)*M+g;l.push(f,m,y),l.push(m,_,y)}this.setIndex(l),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(h,3)),this.setAttribute("uv",new en(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new em(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class lT extends Hn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const n=[],i=new Set,a=new z,s=new z;if(t.index!==null){const r=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],u=d.start,p=d.count;for(let v=u,M=u+p;v<M;v+=3)for(let g=0;g<3;g++){const f=o.getX(v+g),m=o.getX(v+(g+1)%3);a.fromBufferAttribute(r,f),s.fromBufferAttribute(r,m),v0(a,s,i)===!0&&(n.push(a.x,a.y,a.z),n.push(s.x,s.y,s.z))}}}else{const r=t.attributes.position;for(let o=0,l=r.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,d=3*o+(c+1)%3;a.fromBufferAttribute(r,h),s.fromBufferAttribute(r,d),v0(a,s,i)===!0&&(n.push(a.x,a.y,a.z),n.push(s.x,s.y,s.z))}}this.setAttribute("position",new en(n,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function v0(e,t,n){const i=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,a=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return n.has(i)===!0||n.has(a)===!0?!1:(n.add(i),n.add(a),!0)}function Dr(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];if(x0(a))a.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone();else if(Array.isArray(a))if(x0(a[0])){const s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();t[n][i]=s}else t[n][i]=a.slice();else t[n][i]=a}}return t}function hn(e){const t={};for(let n=0;n<e.length;n++){const i=Dr(e[n]);for(const a in i)t[a]=i[a]}return t}function x0(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function cT(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function DS(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const uT={clone:Dr,merge:hn};var fT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends al{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fT,this.fragmentShader=dT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Dr(t.uniforms),this.uniformsGroups=cT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class hT extends Ci{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pT extends al{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mT extends al{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Wl=new z,ql=new zr,pi=new z;class US extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Wl,ql,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,ql,pi.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(Wl,ql,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,ql,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _a=new z,S0=new se,y0=new se;class Zn extends US{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Oh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_f*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oh*2*Math.atan(Math.tan(_f*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){_a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_a.x,_a.y).multiplyScalar(-t/_a.z),_a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_a.x,_a.y).multiplyScalar(-t/_a.z)}getViewSize(t,n){return this.getViewBounds(t,S0,y0),n.subVectors(y0,S0)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(_f*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class NS extends US{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ks=-90,Xs=1;class gT extends Tn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Zn(ks,Xs,t,n);a.layers=this.layers,this.add(a);const s=new Zn(ks,Xs,t,n);s.layers=this.layers,this.add(s);const r=new Zn(ks,Xs,t,n);r.layers=this.layers,this.add(r);const o=new Zn(ks,Xs,t,n);o.layers=this.layers,this.add(o);const l=new Zn(ks,Xs,t,n);l.layers=this.layers,this.add(l);const c=new Zn(ks,Xs,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const c of n)this.remove(c);if(t===yi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$c)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,s),t.setRenderTarget(i,1,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(d,u,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class _T extends Zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const om=class om{constructor(t,n,i,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,a){const s=this.elements;return s[0]=t,s[2]=n,s[1]=i,s[3]=a,this}};om.prototype.isMatrix2=!0;let M0=om;function E0(e,t,n,i){const a=vT(i);switch(n){case gS:return e*t;case vS:return e*t/a.components*a.byteLength;case qp:return e*t/a.components*a.byteLength;case xs:return e*t*2/a.components*a.byteLength;case Yp:return e*t*2/a.components*a.byteLength;case _S:return e*t*3/a.components*a.byteLength;case ci:return e*t*4/a.components*a.byteLength;case jp:return e*t*4/a.components*a.byteLength;case pc:case mc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case gc:case _c:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ah:case rh:return Math.max(e,16)*Math.max(t,8)/4;case ih:case sh:return Math.max(e,8)*Math.max(t,8)/2;case oh:case lh:case uh:case fh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ch:case Zc:case dh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case hh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ph:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case mh:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case gh:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case _h:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case vh:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case xh:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Sh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case yh:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Mh:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Eh:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case bh:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Th:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ah:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Rh:case Ch:case wh:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Dh:case Uh:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Kc:case Nh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function vT(e){switch(e){case $n:case dS:return{byteLength:1,components:1};case Ho:case hS:case sa:return{byteLength:2,components:1};case Xp:case Wp:return{byteLength:2,components:4};case Ai:case kp:case Si:return{byteLength:4,components:1};case pS:case mS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vp}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function LS(){let e=null,t=!1,n=null,i=null;function a(s,r){n(s,r),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function xT(e){const t=new WeakMap;function n(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<d.length;p++){const v=d[u],M=d[p];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++u,d[u]=M)}d.length=u+1;for(let p=0,v=d.length;p<v;p++){const M=d[p];e.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var ST=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yT=`#ifdef USE_ALPHAHASH
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
#endif`,MT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ET=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AT=`#ifdef USE_AOMAP
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
#endif`,RT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CT=`#ifdef USE_BATCHING
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
#endif`,wT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,UT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LT=`#ifdef USE_IRIDESCENCE
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
#endif`,OT=`#ifdef USE_BUMPMAP
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
#endif`,PT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,GT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,HT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,VT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,kT=`#define PI 3.141592653589793
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
} // validated`,XT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,WT=`vec3 transformedNormal = objectNormal;
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
#endif`,qT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KT="gl_FragColor = linearToOutputTexel( gl_FragColor );",QT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JT=`#ifdef USE_ENVMAP
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
#endif`,$T=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,t1=`#ifdef USE_ENVMAP
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
#endif`,e1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n1=`#ifdef USE_ENVMAP
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
#endif`,i1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,s1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o1=`#ifdef USE_GRADIENTMAP
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
}`,l1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,d1=`#ifdef USE_ENVMAP
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
#endif`,h1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_1=`PhysicalMaterial material;
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
#endif`,v1=`uniform sampler2D dfgLUT;
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
}`,x1=`
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
#endif`,S1=`#if defined( RE_IndirectDiffuse )
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
#endif`,y1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,E1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,R1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,C1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,D1=`#if defined( USE_POINTS_UV )
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
#endif`,U1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I1=`#ifdef USE_MORPHTARGETS
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
#endif`,B1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,z1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,G1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,k1=`#ifdef USE_NORMALMAP
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
#endif`,X1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,W1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,q1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,K1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sA=`float getShadowMask() {
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
}`,rA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oA=`#ifdef USE_SKINNING
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
#endif`,lA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cA=`#ifdef USE_SKINNING
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
#endif`,uA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pA=`#ifdef USE_TRANSMISSION
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
#endif`,mA=`#ifdef USE_TRANSMISSION
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
#endif`,gA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yA=`uniform sampler2D t2D;
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
}`,MA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AA=`#include <common>
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
}`,RA=`#if DEPTH_PACKING == 3200
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
}`,CA=`#define DISTANCE
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
}`,wA=`#define DISTANCE
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
}`,DA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NA=`uniform float scale;
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
}`,LA=`uniform vec3 diffuse;
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
}`,OA=`#include <common>
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
}`,PA=`uniform vec3 diffuse;
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
}`,IA=`#define LAMBERT
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
}`,BA=`#define LAMBERT
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
}`,FA=`#define MATCAP
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
}`,zA=`#define MATCAP
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
}`,GA=`#define NORMAL
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
}`,HA=`#define NORMAL
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
}`,VA=`#define PHONG
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
}`,kA=`#define PHONG
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
}`,XA=`#define STANDARD
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
}`,WA=`#define STANDARD
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
}`,qA=`#define TOON
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
}`,YA=`#define TOON
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
}`,jA=`uniform float size;
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
}`,ZA=`uniform vec3 diffuse;
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
}`,KA=`#include <common>
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
}`,QA=`uniform vec3 color;
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
}`,JA=`uniform float rotation;
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
}`,$A=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:ST,alphahash_pars_fragment:yT,alphamap_fragment:MT,alphamap_pars_fragment:ET,alphatest_fragment:bT,alphatest_pars_fragment:TT,aomap_fragment:AT,aomap_pars_fragment:RT,batching_pars_vertex:CT,batching_vertex:wT,begin_vertex:DT,beginnormal_vertex:UT,bsdfs:NT,iridescence_fragment:LT,bumpmap_pars_fragment:OT,clipping_planes_fragment:PT,clipping_planes_pars_fragment:IT,clipping_planes_pars_vertex:BT,clipping_planes_vertex:FT,color_fragment:zT,color_pars_fragment:GT,color_pars_vertex:HT,color_vertex:VT,common:kT,cube_uv_reflection_fragment:XT,defaultnormal_vertex:WT,displacementmap_pars_vertex:qT,displacementmap_vertex:YT,emissivemap_fragment:jT,emissivemap_pars_fragment:ZT,colorspace_fragment:KT,colorspace_pars_fragment:QT,envmap_fragment:JT,envmap_common_pars_fragment:$T,envmap_pars_fragment:t1,envmap_pars_vertex:e1,envmap_physical_pars_fragment:d1,envmap_vertex:n1,fog_vertex:i1,fog_pars_vertex:a1,fog_fragment:s1,fog_pars_fragment:r1,gradientmap_pars_fragment:o1,lightmap_pars_fragment:l1,lights_lambert_fragment:c1,lights_lambert_pars_fragment:u1,lights_pars_begin:f1,lights_toon_fragment:h1,lights_toon_pars_fragment:p1,lights_phong_fragment:m1,lights_phong_pars_fragment:g1,lights_physical_fragment:_1,lights_physical_pars_fragment:v1,lights_fragment_begin:x1,lights_fragment_maps:S1,lights_fragment_end:y1,lightprobes_pars_fragment:M1,logdepthbuf_fragment:E1,logdepthbuf_pars_fragment:b1,logdepthbuf_pars_vertex:T1,logdepthbuf_vertex:A1,map_fragment:R1,map_pars_fragment:C1,map_particle_fragment:w1,map_particle_pars_fragment:D1,metalnessmap_fragment:U1,metalnessmap_pars_fragment:N1,morphinstance_vertex:L1,morphcolor_vertex:O1,morphnormal_vertex:P1,morphtarget_pars_vertex:I1,morphtarget_vertex:B1,normal_fragment_begin:F1,normal_fragment_maps:z1,normal_pars_fragment:G1,normal_pars_vertex:H1,normal_vertex:V1,normalmap_pars_fragment:k1,clearcoat_normal_fragment_begin:X1,clearcoat_normal_fragment_maps:W1,clearcoat_pars_fragment:q1,iridescence_pars_fragment:Y1,opaque_fragment:j1,packing:Z1,premultiplied_alpha_fragment:K1,project_vertex:Q1,dithering_fragment:J1,dithering_pars_fragment:$1,roughnessmap_fragment:tA,roughnessmap_pars_fragment:eA,shadowmap_pars_fragment:nA,shadowmap_pars_vertex:iA,shadowmap_vertex:aA,shadowmask_pars_fragment:sA,skinbase_vertex:rA,skinning_pars_vertex:oA,skinning_vertex:lA,skinnormal_vertex:cA,specularmap_fragment:uA,specularmap_pars_fragment:fA,tonemapping_fragment:dA,tonemapping_pars_fragment:hA,transmission_fragment:pA,transmission_pars_fragment:mA,uv_pars_fragment:gA,uv_pars_vertex:_A,uv_vertex:vA,worldpos_vertex:xA,background_vert:SA,background_frag:yA,backgroundCube_vert:MA,backgroundCube_frag:EA,cube_vert:bA,cube_frag:TA,depth_vert:AA,depth_frag:RA,distance_vert:CA,distance_frag:wA,equirect_vert:DA,equirect_frag:UA,linedashed_vert:NA,linedashed_frag:LA,meshbasic_vert:OA,meshbasic_frag:PA,meshlambert_vert:IA,meshlambert_frag:BA,meshmatcap_vert:FA,meshmatcap_frag:zA,meshnormal_vert:GA,meshnormal_frag:HA,meshphong_vert:VA,meshphong_frag:kA,meshphysical_vert:XA,meshphysical_frag:WA,meshtoon_vert:qA,meshtoon_frag:YA,points_vert:jA,points_frag:ZA,shadow_vert:KA,shadow_frag:QA,sprite_vert:JA,sprite_frag:$A},mt={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},gi={basic:{uniforms:hn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:hn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:hn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:hn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:hn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new de(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:hn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:hn([mt.points,mt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:hn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:hn([mt.common,mt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:hn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:hn([mt.sprite,mt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:hn([mt.common,mt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:hn([mt.lights,mt.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};gi.physical={uniforms:hn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Yl={r:0,b:0,g:0},tR=new qe,OS=new Ot;OS.set(-1,0,0,0,1,0,0,0,1);function eR(e,t,n,i,a,s){const r=new de(0);let o=a===!0?0:1,l,c,h=null,d=0,u=null;function p(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){const y=m.backgroundBlurriness>0;_=t.get(_,y)}return _}function v(m){let _=!1;const y=p(m);y===null?g(r,o):y&&y.isColor&&(g(y,1),_=!0);const C=e.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(e.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(m,_){const y=p(_);y&&(y.isCubeTexture||y.mapping===Eu)?(c===void 0&&(c=new Ri(new sl(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:Dr(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tR.makeRotationFromEuler(_.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(OS),c.material.toneMapped=Kt.getTransfer(y.colorSpace)!==ce,(h!==y||d!==y.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ri(new Tu(2,2),new Ci({name:"BackgroundMaterial",uniforms:Dr(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(y.colorSpace)!==ce,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,_){m.getRGB(Yl,DS(e)),n.buffers.color.setClear(Yl.r,Yl.g,Yl.b,_,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,_=1){r.set(m),o=_,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:v,addToRenderList:M,dispose:f}}function nR(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=u(null);let s=a,r=!1;function o(D,F,Z,j,P){let U=!1;const O=d(D,j,Z,F);s!==O&&(s=O,c(s.object)),U=p(D,j,Z,P),U&&v(D,j,Z,P),P!==null&&t.update(P,e.ELEMENT_ARRAY_BUFFER),(U||r)&&(r=!1,y(D,F,Z,j),P!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return e.createVertexArray()}function c(D){return e.bindVertexArray(D)}function h(D){return e.deleteVertexArray(D)}function d(D,F,Z,j){const P=j.wireframe===!0;let U=i[F.id];U===void 0&&(U={},i[F.id]=U);const O=D.isInstancedMesh===!0?D.id:0;let q=U[O];q===void 0&&(q={},U[O]=q);let $=q[Z.id];$===void 0&&($={},q[Z.id]=$);let it=$[P];return it===void 0&&(it=u(l()),$[P]=it),it}function u(D){const F=[],Z=[],j=[];for(let P=0;P<n;P++)F[P]=0,Z[P]=0,j[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Z,attributeDivisors:j,object:D,attributes:{},index:null}}function p(D,F,Z,j){const P=s.attributes,U=F.attributes;let O=0;const q=Z.getAttributes();for(const $ in q)if(q[$].location>=0){const vt=P[$];let Mt=U[$];if(Mt===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(Mt=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(Mt=D.instanceColor)),vt===void 0||vt.attribute!==Mt||Mt&&vt.data!==Mt.data)return!0;O++}return s.attributesNum!==O||s.index!==j}function v(D,F,Z,j){const P={},U=F.attributes;let O=0;const q=Z.getAttributes();for(const $ in q)if(q[$].location>=0){let vt=U[$];vt===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(vt=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(vt=D.instanceColor));const Mt={};Mt.attribute=vt,vt&&vt.data&&(Mt.data=vt.data),P[$]=Mt,O++}s.attributes=P,s.attributesNum=O,s.index=j}function M(){const D=s.newAttributes;for(let F=0,Z=D.length;F<Z;F++)D[F]=0}function g(D){f(D,0)}function f(D,F){const Z=s.newAttributes,j=s.enabledAttributes,P=s.attributeDivisors;Z[D]=1,j[D]===0&&(e.enableVertexAttribArray(D),j[D]=1),P[D]!==F&&(e.vertexAttribDivisor(D,F),P[D]=F)}function m(){const D=s.newAttributes,F=s.enabledAttributes;for(let Z=0,j=F.length;Z<j;Z++)F[Z]!==D[Z]&&(e.disableVertexAttribArray(Z),F[Z]=0)}function _(D,F,Z,j,P,U,O){O===!0?e.vertexAttribIPointer(D,F,Z,P,U):e.vertexAttribPointer(D,F,Z,j,P,U)}function y(D,F,Z,j){M();const P=j.attributes,U=Z.getAttributes(),O=F.defaultAttributeValues;for(const q in U){const $=U[q];if($.location>=0){let it=P[q];if(it===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(it=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(it=D.instanceColor)),it!==void 0){const vt=it.normalized,Mt=it.itemSize,Vt=t.get(it);if(Vt===void 0)continue;const kt=Vt.buffer,wt=Vt.type,K=Vt.bytesPerElement,ht=wt===e.INT||wt===e.UNSIGNED_INT||it.gpuType===kp;if(it.isInterleavedBufferAttribute){const ct=it.data,Rt=ct.stride,Nt=it.offset;if(ct.isInstancedInterleavedBuffer){for(let Ct=0;Ct<$.locationSize;Ct++)f($.location+Ct,ct.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ct=0;Ct<$.locationSize;Ct++)g($.location+Ct);e.bindBuffer(e.ARRAY_BUFFER,kt);for(let Ct=0;Ct<$.locationSize;Ct++)_($.location+Ct,Mt/$.locationSize,wt,vt,Rt*K,(Nt+Mt/$.locationSize*Ct)*K,ht)}else{if(it.isInstancedBufferAttribute){for(let ct=0;ct<$.locationSize;ct++)f($.location+ct,it.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ct=0;ct<$.locationSize;ct++)g($.location+ct);e.bindBuffer(e.ARRAY_BUFFER,kt);for(let ct=0;ct<$.locationSize;ct++)_($.location+ct,Mt/$.locationSize,wt,vt,Mt*K,Mt/$.locationSize*ct*K,ht)}}else if(O!==void 0){const vt=O[q];if(vt!==void 0)switch(vt.length){case 2:e.vertexAttrib2fv($.location,vt);break;case 3:e.vertexAttrib3fv($.location,vt);break;case 4:e.vertexAttrib4fv($.location,vt);break;default:e.vertexAttrib1fv($.location,vt)}}}}m()}function C(){A();for(const D in i){const F=i[D];for(const Z in F){const j=F[Z];for(const P in j){const U=j[P];for(const O in U)h(U[O].object),delete U[O];delete j[P]}}delete i[D]}}function b(D){if(i[D.id]===void 0)return;const F=i[D.id];for(const Z in F){const j=F[Z];for(const P in j){const U=j[P];for(const O in U)h(U[O].object),delete U[O];delete j[P]}}delete i[D.id]}function R(D){for(const F in i){const Z=i[F];for(const j in Z){const P=Z[j];if(P[D.id]===void 0)continue;const U=P[D.id];for(const O in U)h(U[O].object),delete U[O];delete P[D.id]}}}function x(D){for(const F in i){const Z=i[F],j=D.isInstancedMesh===!0?D.id:0,P=Z[j];if(P!==void 0){for(const U in P){const O=P[U];for(const q in O)h(O[q].object),delete O[q];delete P[U]}delete Z[j],Object.keys(Z).length===0&&delete i[F]}}}function A(){w(),r=!0,s!==a&&(s=a,c(s.object))}function w(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:A,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:g,disableUnusedAttributes:m}}function iR(e,t,n){let i;function a(l){i=l}function s(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,h){h!==0&&(e.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];n.update(u,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function aR(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(R){return!(R!==ci&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const x=R===sa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==$n&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Si&&!x)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(Dt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),C=e.getParameter(e.MAX_SAMPLES),b=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:y,maxSamples:C,samples:b}}function sR(e){const t=this;let n=null,i=0,a=!1,s=!1;const r=new is,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||a;return a=u,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,p){const v=d.clippingPlanes,M=d.clipIntersection,g=d.clipShadows,f=e.get(d);if(!a||v===null||v.length===0||s&&!g)s?h(null):c();else{const m=s?0:i,_=m*4;let y=f.clippingState||null;l.value=y,y=h(v,u,_,p);for(let C=0;C!==_;++C)y[C]=n[C];f.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,p,v){const M=d!==null?d.length:0;let g=null;if(M!==0){if(g=l.value,v!==!0||g===null){const f=p+M*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let _=0,y=p;_!==M;++_,y+=4)r.copy(d[_]).applyMatrix4(m,o),r.normal.toArray(g,y),g[y+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}const Da=4,b0=[.125,.215,.35,.446,.526,.582],ss=20,rR=256,to=new NS,T0=new de;let Vf=null,kf=0,Xf=0,Wf=!1;const oR=new z;class A0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,a=100,s={}){const{size:r=256,position:o=oR}=s;Vf=this._renderer.getRenderTarget(),kf=this._renderer.getActiveCubeFace(),Xf=this._renderer.getActiveMipmapLevel(),Wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=w0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Vf,kf,Xf),this._renderer.xr.enabled=Wf,t.scissorTest=!1,Ws(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===vs||t.mapping===Cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vf=this._renderer.getRenderTarget(),kf=this._renderer.getActiveCubeFace(),Xf=this._renderer.getActiveMipmapLevel(),Wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:sa,format:ci,colorSpace:Qc,depthBuffer:!1},a=R0(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=R0(t,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lR(s)),this._blurMaterial=uR(s,t,n),this._ggxMaterial=cR(s,t,n)}return a}_compileMaterial(t){const n=new Ri(new Hn,t);this._renderer.compile(n,to)}_sceneToCubeUV(t,n,i,a,s){const l=new Zn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(T0),d.toneMapping=Ei,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(a),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ri(new sl,new Jp({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let f=!1;const m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,f=!0):(g.color.copy(T0),f=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[_],s.y,s.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[_]));const C=this._cubeSize;Ws(a,y*C,_>2?C:0,C,C),d.setRenderTarget(a),f&&d.render(M,l),d.render(t,l)}d.toneMapping=p,d.autoClear=u,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===vs||t.mapping===Cr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=w0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C0());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Ws(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,to)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(t,s-1,s);n.autoClear=i}_applyGGXFilter(t,n,i){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,p=d*u,{_lodMax:v}=this,M=this._sizeLods[i],g=3*M*(i>v-Da?i-v+Da:0),f=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=v-n,Ws(s,g,f,3*M,2*M),a.setRenderTarget(s),a.render(o,to),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Ws(t,g,f,3*M,2*M),a.setRenderTarget(t),a.render(o,to)}_blur(t,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,a,"latitudinal",s),this._halfBlur(r,t,i,i,a,"longitudinal",s)}_halfBlur(t,n,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&te("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[a];d.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ss-1),M=s/v,g=isFinite(s)?1+Math.floor(h*M):ss;g>ss&&Dt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ss}`);const f=[];let m=0;for(let R=0;R<ss;++R){const x=R/M,A=Math.exp(-x*x/2);f.push(A),R===0?m+=A:R<g&&(m+=2*A)}for(let R=0;R<f.length;R++)f[R]=f[R]/m;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=v,u.mipInt.value=_-i;const y=this._sizeLods[a],C=3*y*(a>_-Da?a-_+Da:0),b=4*(this._cubeSize-y);Ws(n,C,b,3*y,2*y),l.setRenderTarget(n),l.render(d,to)}}function lR(e){const t=[],n=[],i=[];let a=e;const s=e-Da+1+b0.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let l=1/o;r>e-Da?l=b0[r-e+Da-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,v=6,M=3,g=2,f=1,m=new Float32Array(M*v*p),_=new Float32Array(g*v*p),y=new Float32Array(f*v*p);for(let b=0;b<p;b++){const R=b%3*2/3-1,x=b>2?0:-1,A=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];m.set(A,M*v*b),_.set(u,g*v*b);const w=[b,b,b,b,b,b];y.set(w,f*v*b)}const C=new Hn;C.setAttribute("position",new Ti(m,M)),C.setAttribute("uv",new Ti(_,g)),C.setAttribute("faceIndex",new Ti(y,f)),i.push(new Ri(C,null)),a>Da&&a--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function R0(e,t,n){const i=new bi(e,t,n);return i.texture.mapping=Eu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ws(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function cR(e,t,n){return new Ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Au(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function uR(e,t,n){const i=new Float32Array(ss),a=new z(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Au(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function C0(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Au(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function w0(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Au(){return`

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
	`}class PS extends bi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new CS(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new sl(5,5,5),s=new Ci({name:"CubemapFromEquirect",uniforms:Dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:Ji});s.uniforms.tEquirect.value=n;const r=new Ri(a,s),o=n.minFilter;return n.minFilter===rs&&(n.minFilter=dn),new gT(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}}function fR(e){let t=new WeakMap,n=new WeakMap,i=null;function a(u,p=!1){return u==null?null:p?r(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===pf||p===mf)if(t.has(u)){const v=t.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const M=new PS(v.height);return M.fromEquirectangularTexture(e,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const p=u.mapping,v=p===pf||p===mf,M=p===vs||p===Cr;if(v||M){let g=n.get(u);const f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new A0(e)),g=v?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const m=u.image;return v&&m&&m.height>0||M&&m&&l(m)?(i===null&&(i=new A0(e)),g=v?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,p){return p===pf?u.mapping=vs:p===mf&&(u.mapping=Cr),u}function l(u){let p=0;const v=6;for(let M=0;M<v;M++)u[M]!==void 0&&p++;return p===v}function c(u){const p=u.target;p.removeEventListener("dispose",c);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function d(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:d}}function dR(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Lh("WebGLRenderer: "+i+" extension not supported."),a}}}function hR(e,t,n,i){const a={},s=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",r),delete a[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(d,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,n.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)t.update(u[p],e.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,v=d.attributes.position;let M=0;if(v===void 0)return;if(p!==null){const m=p.array;M=p.version;for(let _=0,y=m.length;_<y;_+=3){const C=m[_+0],b=m[_+1],R=m[_+2];u.push(C,b,b,R,R,C)}}else{const m=v.array;M=v.version;for(let _=0,y=m.length/3-1;_<y;_+=3){const C=_+0,b=_+1,R=_+2;u.push(C,b,b,R,R,C)}}const g=new(v.count>=65535?bS:ES)(u,1);g.version=M;const f=s.get(d);f&&t.remove(f),s.set(d,g)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function pR(e,t,n){let i;function a(d){i=d}let s,r;function o(d){s=d.type,r=d.bytesPerElement}function l(d,u){e.drawElements(i,u,s,d*r),n.update(u,i,1)}function c(d,u,p){p!==0&&(e.drawElementsInstanced(i,u,s,d*r,p),n.update(u,i,p))}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,p);let M=0;for(let g=0;g<p;g++)M+=u[g];n.update(M,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function mR(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:te("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function gR(e,t,n){const i=new WeakMap,a=new ze;function s(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let A=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],m=o.morphAttributes.color||[];let _=0;p===!0&&(_=1),v===!0&&(_=2),M===!0&&(_=3);let y=o.attributes.position.count*_,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const b=new Float32Array(y*C*4*d),R=new SS(b,y,C,d);R.type=Si,R.needsUpdate=!0;const x=_*4;for(let w=0;w<d;w++){const D=g[w],F=f[w],Z=m[w],j=y*C*4*w;for(let P=0;P<D.count;P++){const U=P*x;p===!0&&(a.fromBufferAttribute(D,P),b[j+U+0]=a.x,b[j+U+1]=a.y,b[j+U+2]=a.z,b[j+U+3]=0),v===!0&&(a.fromBufferAttribute(F,P),b[j+U+4]=a.x,b[j+U+5]=a.y,b[j+U+6]=a.z,b[j+U+7]=0),M===!0&&(a.fromBufferAttribute(Z,P),b[j+U+8]=a.x,b[j+U+9]=a.y,b[j+U+10]=a.z,b[j+U+11]=Z.itemSize===4?a.w:1)}}u={count:d,texture:R,size:new se(y,C)},i.set(o,u),o.addEventListener("dispose",A)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];const v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function _R(e,t,n,i,a){let s=new WeakMap;function r(c){const h=a.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}const vR={[aS]:"LINEAR_TONE_MAPPING",[sS]:"REINHARD_TONE_MAPPING",[rS]:"CINEON_TONE_MAPPING",[oS]:"ACES_FILMIC_TONE_MAPPING",[cS]:"AGX_TONE_MAPPING",[uS]:"NEUTRAL_TONE_MAPPING",[lS]:"CUSTOM_TONE_MAPPING"};function xR(e,t,n,i,a){const s=new bi(t,n,{type:e,depthBuffer:i,stencilBuffer:a,depthTexture:i?new wr(t,n):void 0}),r=new bi(t,n,{type:sa,depthBuffer:!1,stencilBuffer:!1}),o=new Hn;o.setAttribute("position",new en([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new en([0,2,0,0,2,0],2));const l=new hT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ri(o,l),h=new NS(-1,1,1,-1,0,1);let d=null,u=null,p=!1,v,M=null,g=[],f=!1;this.setSize=function(m,_){s.setSize(m,_),r.setSize(m,_);for(let y=0;y<g.length;y++){const C=g[y];C.setSize&&C.setSize(m,_)}},this.setEffects=function(m){g=m,f=g.length>0&&g[0].isRenderPass===!0;const _=s.width,y=s.height;for(let C=0;C<g.length;C++){const b=g[C];b.setSize&&b.setSize(_,y)}},this.begin=function(m,_){if(p||m.toneMapping===Ei&&g.length===0)return!1;if(M=_,_!==null){const y=_.width,C=_.height;(s.width!==y||s.height!==C)&&this.setSize(y,C)}return f===!1&&m.setRenderTarget(s),v=m.toneMapping,m.toneMapping=Ei,!0},this.hasRenderPass=function(){return f},this.end=function(m,_){m.toneMapping=v,p=!0;let y=s,C=r;for(let b=0;b<g.length;b++){const R=g[b];if(R.enabled!==!1&&(R.render(m,C,y,_),R.needsSwap!==!1)){const x=y;y=C,C=x}}if(d!==m.outputColorSpace||u!==m.toneMapping){d=m.outputColorSpace,u=m.toneMapping,l.defines={},Kt.getTransfer(d)===ce&&(l.defines.SRGB_TRANSFER="");const b=vR[u];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,m.setRenderTarget(M),m.render(c,h),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),r.dispose(),o.dispose(),l.dispose()}}const IS=new gn,Ph=new wr(1,1),BS=new SS,FS=new Hb,zS=new CS,D0=[],U0=[],N0=new Float32Array(16),L0=new Float32Array(9),O0=new Float32Array(4);function Gr(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let s=D0[a];if(s===void 0&&(s=new Float32Array(a),D0[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function Ze(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ke(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Ru(e,t){let n=U0[t];n===void 0&&(n=new Int32Array(t),U0[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function SR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function yR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2fv(this.addr,t),Ke(n,t)}}function MR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ze(n,t))return;e.uniform3fv(this.addr,t),Ke(n,t)}}function ER(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4fv(this.addr,t),Ke(n,t)}}function bR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ke(n,t)}else{if(Ze(n,i))return;O0.set(i),e.uniformMatrix2fv(this.addr,!1,O0),Ke(n,i)}}function TR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ke(n,t)}else{if(Ze(n,i))return;L0.set(i),e.uniformMatrix3fv(this.addr,!1,L0),Ke(n,i)}}function AR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ke(n,t)}else{if(Ze(n,i))return;N0.set(i),e.uniformMatrix4fv(this.addr,!1,N0),Ke(n,i)}}function RR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function CR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2iv(this.addr,t),Ke(n,t)}}function wR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ze(n,t))return;e.uniform3iv(this.addr,t),Ke(n,t)}}function DR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4iv(this.addr,t),Ke(n,t)}}function UR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function NR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2uiv(this.addr,t),Ke(n,t)}}function LR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ze(n,t))return;e.uniform3uiv(this.addr,t),Ke(n,t)}}function OR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4uiv(this.addr,t),Ke(n,t)}}function PR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(Ph.compareFunction=n.isReversedDepthBuffer()?Kp:Zp,s=Ph):s=IS,n.setTexture2D(t||s,a)}function IR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||FS,a)}function BR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||zS,a)}function FR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||BS,a)}function zR(e){switch(e){case 5126:return SR;case 35664:return yR;case 35665:return MR;case 35666:return ER;case 35674:return bR;case 35675:return TR;case 35676:return AR;case 5124:case 35670:return RR;case 35667:case 35671:return CR;case 35668:case 35672:return wR;case 35669:case 35673:return DR;case 5125:return UR;case 36294:return NR;case 36295:return LR;case 36296:return OR;case 35678:case 36198:case 36298:case 36306:case 35682:return PR;case 35679:case 36299:case 36307:return IR;case 35680:case 36300:case 36308:case 36293:return BR;case 36289:case 36303:case 36311:case 36292:return FR}}function GR(e,t){e.uniform1fv(this.addr,t)}function HR(e,t){const n=Gr(t,this.size,2);e.uniform2fv(this.addr,n)}function VR(e,t){const n=Gr(t,this.size,3);e.uniform3fv(this.addr,n)}function kR(e,t){const n=Gr(t,this.size,4);e.uniform4fv(this.addr,n)}function XR(e,t){const n=Gr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function WR(e,t){const n=Gr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function qR(e,t){const n=Gr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function YR(e,t){e.uniform1iv(this.addr,t)}function jR(e,t){e.uniform2iv(this.addr,t)}function ZR(e,t){e.uniform3iv(this.addr,t)}function KR(e,t){e.uniform4iv(this.addr,t)}function QR(e,t){e.uniform1uiv(this.addr,t)}function JR(e,t){e.uniform2uiv(this.addr,t)}function $R(e,t){e.uniform3uiv(this.addr,t)}function t3(e,t){e.uniform4uiv(this.addr,t)}function e3(e,t,n){const i=this.cache,a=t.length,s=Ru(n,a);Ze(i,s)||(e.uniform1iv(this.addr,s),Ke(i,s));let r;this.type===e.SAMPLER_2D_SHADOW?r=Ph:r=IS;for(let o=0;o!==a;++o)n.setTexture2D(t[o]||r,s[o])}function n3(e,t,n){const i=this.cache,a=t.length,s=Ru(n,a);Ze(i,s)||(e.uniform1iv(this.addr,s),Ke(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||FS,s[r])}function i3(e,t,n){const i=this.cache,a=t.length,s=Ru(n,a);Ze(i,s)||(e.uniform1iv(this.addr,s),Ke(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||zS,s[r])}function a3(e,t,n){const i=this.cache,a=t.length,s=Ru(n,a);Ze(i,s)||(e.uniform1iv(this.addr,s),Ke(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||BS,s[r])}function s3(e){switch(e){case 5126:return GR;case 35664:return HR;case 35665:return VR;case 35666:return kR;case 35674:return XR;case 35675:return WR;case 35676:return qR;case 5124:case 35670:return YR;case 35667:case 35671:return jR;case 35668:case 35672:return ZR;case 35669:case 35673:return KR;case 5125:return QR;case 36294:return JR;case 36295:return $R;case 36296:return t3;case 35678:case 36198:case 36298:case 36306:case 35682:return e3;case 35679:case 36299:case 36307:return n3;case 35680:case 36300:case 36308:case 36293:return i3;case 36289:case 36303:case 36311:case 36292:return a3}}class r3{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=zR(n.type)}}class o3{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=s3(n.type)}}class l3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(t,n[o.id],i)}}}const qf=/(\w+)(\])?(\[|\.)?/g;function P0(e,t){e.seq.push(t),e.map[t.id]=t}function c3(e,t,n){const i=e.name,a=i.length;for(qf.lastIndex=0;;){const s=qf.exec(i),r=qf.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){P0(n,c===void 0?new r3(o,e,t):new o3(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new l3(o),P0(n,d)),n=d}}}class vc{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);c3(o,l,this)}const a=[],s=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(t,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,s=t.length;a!==s;++a){const r=t[a];r.id in n&&i.push(r)}return i}}function I0(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const u3=37297;let f3=0;function d3(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}const B0=new Ot;function h3(e){Kt._getMatrix(B0,Kt.workingColorSpace,e);const t=`mat3( ${B0.elements.map(n=>n.toFixed(4))} )`;switch(Kt.getTransfer(e)){case Jc:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function F0(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+d3(e.getShaderSource(t),o)}else return s}function p3(e,t){const n=h3(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const m3={[aS]:"Linear",[sS]:"Reinhard",[rS]:"Cineon",[oS]:"ACESFilmic",[cS]:"AgX",[uS]:"Neutral",[lS]:"Custom"};function g3(e,t){const n=m3[t];return n===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const jl=new z;function _3(){Kt.getLuminanceCoefficients(jl);const e=jl.x.toFixed(4),t=jl.y.toFixed(4),n=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v3(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function x3(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function S3(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=e.getActiveAttrib(t,a),r=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function co(e){return e!==""}function z0(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function G0(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const y3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ih(e){return e.replace(y3,E3)}const M3=new Map;function E3(e,t){let n=Ht[t];if(n===void 0){const i=M3.get(t);if(i!==void 0)n=Ht[i],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ih(n)}const b3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function H0(e){return e.replace(b3,T3)}function T3(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function V0(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}const A3={[hc]:"SHADOWMAP_TYPE_PCF",[lo]:"SHADOWMAP_TYPE_VSM"};function R3(e){return A3[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const C3={[vs]:"ENVMAP_TYPE_CUBE",[Cr]:"ENVMAP_TYPE_CUBE",[Eu]:"ENVMAP_TYPE_CUBE_UV"};function w3(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":C3[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const D3={[Cr]:"ENVMAP_MODE_REFRACTION"};function U3(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":D3[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const N3={[iS]:"ENVMAP_BLENDING_MULTIPLY",[Sb]:"ENVMAP_BLENDING_MIX",[yb]:"ENVMAP_BLENDING_ADD"};function L3(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":N3[e.combine]||"ENVMAP_BLENDING_NONE"}function O3(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function P3(e,t,n,i){const a=e.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=R3(n),c=w3(n),h=U3(n),d=L3(n),u=O3(n),p=v3(n),v=x3(s),M=a.createProgram();let g,f,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(co).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(co).join(`
`),f.length>0&&(f+=`
`)):(g=[V0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),f=[V0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ei?"#define TONE_MAPPING":"",n.toneMapping!==Ei?Ht.tonemapping_pars_fragment:"",n.toneMapping!==Ei?g3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,p3("linearToOutputTexel",n.outputColorSpace),_3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(co).join(`
`)),r=Ih(r),r=z0(r,n),r=G0(r,n),o=Ih(o),o=z0(o,n),o=G0(o,n),r=H0(r),o=H0(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===Qg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Qg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=m+g+r,y=m+f+o,C=I0(a,a.VERTEX_SHADER,_),b=I0(a,a.FRAGMENT_SHADER,y);a.attachShader(M,C),a.attachShader(M,b),n.index0AttributeName!==void 0?a.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function R(D){if(e.debug.checkShaderErrors){const F=a.getProgramInfoLog(M)||"",Z=a.getShaderInfoLog(C)||"",j=a.getShaderInfoLog(b)||"",P=F.trim(),U=Z.trim(),O=j.trim();let q=!0,$=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(q=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,M,C,b);else{const it=F0(a,C,"vertex"),vt=F0(a,b,"fragment");te("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+P+`
`+it+`
`+vt)}else P!==""?Dt("WebGLProgram: Program Info Log:",P):(U===""||O==="")&&($=!1);$&&(D.diagnostics={runnable:q,programLog:P,vertexShader:{log:U,prefix:g},fragmentShader:{log:O,prefix:f}})}a.deleteShader(C),a.deleteShader(b),x=new vc(a,M),A=S3(a,M)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=a.getProgramParameter(M,u3)),w},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=f3++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=C,this.fragmentShader=b,this}let I3=0;class B3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new F3(t),n.set(t,i)),i}}class F3{constructor(t){this.id=I3++,this.code=t,this.usedTimes=0}}function z3(e){return e===xs||e===Zc||e===Kc}function G3(e,t,n,i,a,s){const r=new yS,o=new B3,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,A,w,D,F,Z){const j=D.fog,P=F.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,q=t.get(x.envMap||U,O),$=q&&q.mapping===Eu?q.image.height:null,it=p[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Dt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const vt=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Mt=vt!==void 0?vt.length:0;let Vt=0;P.morphAttributes.position!==void 0&&(Vt=1),P.morphAttributes.normal!==void 0&&(Vt=2),P.morphAttributes.color!==void 0&&(Vt=3);let kt,wt,K,ht;if(it){const It=gi[it];kt=It.vertexShader,wt=It.fragmentShader}else kt=x.vertexShader,wt=x.fragmentShader,o.update(x),K=o.getVertexShaderID(x),ht=o.getFragmentShaderID(x);const ct=e.getRenderTarget(),Rt=e.state.buffers.depth.getReversed(),Nt=F.isInstancedMesh===!0,Ct=F.isBatchedMesh===!0,ee=!!x.map,Xt=!!x.matcap,re=!!q,he=!!x.aoMap,Gt=!!x.lightMap,Oe=!!x.bumpMap,ve=!!x.normalMap,we=!!x.displacementMap,L=!!x.emissiveMap,De=!!x.metalnessMap,Wt=!!x.roughnessMap,le=x.anisotropy>0,ft=x.clearcoat>0,oe=x.dispersion>0,T=x.iridescence>0,S=x.sheen>0,G=x.transmission>0,J=le&&!!x.anisotropyMap,et=ft&&!!x.clearcoatMap,rt=ft&&!!x.clearcoatNormalMap,V=ft&&!!x.clearcoatRoughnessMap,H=T&&!!x.iridescenceMap,Y=T&&!!x.iridescenceThicknessMap,st=S&&!!x.sheenColorMap,pt=S&&!!x.sheenRoughnessMap,ot=!!x.specularMap,at=!!x.specularColorMap,Lt=!!x.specularIntensityMap,zt=G&&!!x.transmissionMap,ne=G&&!!x.thicknessMap,N=!!x.gradientMap,lt=!!x.alphaMap,Q=x.alphaTest>0,xt=!!x.alphaHash,ut=!!x.extensions;let nt=Ei;x.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(nt=e.toneMapping);const bt={shaderID:it,shaderType:x.type,shaderName:x.name,vertexShader:kt,fragmentShader:wt,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:ht,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Ct,batchingColor:Ct&&F._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&F.instanceColor!==null,instancingMorph:Nt&&F.morphTexture!==null,outputColorSpace:ct===null?e.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Kt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ee,matcap:Xt,envMap:re,envMapMode:re&&q.mapping,envMapCubeUVHeight:$,aoMap:he,lightMap:Gt,bumpMap:Oe,normalMap:ve,displacementMap:we,emissiveMap:L,normalMapObjectSpace:ve&&x.normalMapType===bb,normalMapTangentSpace:ve&&x.normalMapType===jg,packedNormalMap:ve&&x.normalMapType===jg&&z3(x.normalMap.format),metalnessMap:De,roughnessMap:Wt,anisotropy:le,anisotropyMap:J,clearcoat:ft,clearcoatMap:et,clearcoatNormalMap:rt,clearcoatRoughnessMap:V,dispersion:oe,iridescence:T,iridescenceMap:H,iridescenceThicknessMap:Y,sheen:S,sheenColorMap:st,sheenRoughnessMap:pt,specularMap:ot,specularColorMap:at,specularIntensityMap:Lt,transmission:G,transmissionMap:zt,thicknessMap:ne,gradientMap:N,opaque:x.transparent===!1&&x.blending===pr&&x.alphaToCoverage===!1,alphaMap:lt,alphaTest:Q,alphaHash:xt,combine:x.combine,mapUv:ee&&v(x.map.channel),aoMapUv:he&&v(x.aoMap.channel),lightMapUv:Gt&&v(x.lightMap.channel),bumpMapUv:Oe&&v(x.bumpMap.channel),normalMapUv:ve&&v(x.normalMap.channel),displacementMapUv:we&&v(x.displacementMap.channel),emissiveMapUv:L&&v(x.emissiveMap.channel),metalnessMapUv:De&&v(x.metalnessMap.channel),roughnessMapUv:Wt&&v(x.roughnessMap.channel),anisotropyMapUv:J&&v(x.anisotropyMap.channel),clearcoatMapUv:et&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:H&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:st&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:pt&&v(x.sheenRoughnessMap.channel),specularMapUv:ot&&v(x.specularMap.channel),specularColorMapUv:at&&v(x.specularColorMap.channel),specularIntensityMapUv:Lt&&v(x.specularIntensityMap.channel),transmissionMapUv:zt&&v(x.transmissionMap.channel),thicknessMapUv:ne&&v(x.thicknessMap.channel),alphaMapUv:lt&&v(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ve||le),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!P.attributes.uv&&(ee||lt),fog:!!j,useFog:x.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&ve===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Rt,skinning:F.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Vt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&w.length>0,shadowMapType:e.shadowMap.type,toneMapping:nt,decodeVideoTexture:ee&&x.map.isVideoTexture===!0&&Kt.getTransfer(x.map.colorSpace)===ce,decodeVideoTextureEmissive:L&&x.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(x.emissiveMap.colorSpace)===ce,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Xi,flipSided:x.side===bn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ut&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&x.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function g(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const w in x.defines)A.push(w),A.push(x.defines[w]);return x.isRawShaderMaterial===!1&&(f(A,x),m(A,x),A.push(e.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function f(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function m(x,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),x.push(r.mask)}function _(x){const A=p[x.type];let w;if(A){const D=gi[A];w=uT.clone(D.uniforms)}else w=x.uniforms;return w}function y(x,A){let w=h.get(A);return w!==void 0?++w.usedTimes:(w=new P3(e,A,x,a),c.push(w),h.set(A,w)),w}function C(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:_,acquireProgram:y,releaseProgram:C,releaseShaderCache:b,programs:c,dispose:R}}function H3(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function V3(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function k0(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function X0(){const e=[];let t=0;const n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,v,M,g,f){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:p,material:v,materialVariant:r(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:f},e[t]=m):(m.id=u.id,m.object=u,m.geometry=p,m.material=v,m.materialVariant=r(u),m.groupOrder=M,m.renderOrder=u.renderOrder,m.z=g,m.group=f),t++,m}function l(u,p,v,M,g,f){const m=o(u,p,v,M,g,f);v.transmission>0?i.push(m):v.transparent===!0?a.push(m):n.push(m)}function c(u,p,v,M,g,f){const m=o(u,p,v,M,g,f);v.transmission>0?i.unshift(m):v.transparent===!0?a.unshift(m):n.unshift(m)}function h(u,p){n.length>1&&n.sort(u||V3),i.length>1&&i.sort(p||k0),a.length>1&&a.sort(p||k0)}function d(){for(let u=t,p=e.length;u<p;u++){const v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:l,unshift:c,finish:d,sort:h}}function k3(){let e=new WeakMap;function t(i,a){const s=e.get(i);let r;return s===void 0?(r=new X0,e.set(i,[r])):a>=s.length?(r=new X0,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function X3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new z,color:new de};break;case"SpotLight":n={position:new z,direction:new z,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new de,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new de,groundColor:new de};break;case"RectAreaLight":n={color:new de,position:new z,halfWidth:new z,halfHeight:new z};break}return e[t.id]=n,n}}}function W3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let q3=0;function Y3(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function j3(e){const t=new X3,n=W3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const a=new z,s=new qe,r=new qe;function o(c){let h=0,d=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,v=0,M=0,g=0,f=0,m=0,_=0,y=0,C=0,b=0,R=0;c.sort(Y3);for(let A=0,w=c.length;A<w;A++){const D=c[A],F=D.color,Z=D.intensity,j=D.distance;let P=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===xs?P=D.shadow.map.texture:P=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=F.r*Z,d+=F.g*Z,u+=F.b*Z;else if(D.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(D.sh.coefficients[U],Z);R++}else if(D.isDirectionalLight){const U=t.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const O=D.shadow,q=n.get(D);q.shadowIntensity=O.intensity,q.shadowBias=O.bias,q.shadowNormalBias=O.normalBias,q.shadowRadius=O.radius,q.shadowMapSize=O.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=P,i.directionalShadowMatrix[p]=D.shadow.matrix,m++}i.directional[p]=U,p++}else if(D.isSpotLight){const U=t.get(D);U.position.setFromMatrixPosition(D.matrixWorld),U.color.copy(F).multiplyScalar(Z),U.distance=j,U.coneCos=Math.cos(D.angle),U.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),U.decay=D.decay,i.spot[M]=U;const O=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,O.updateMatrices(D),D.castShadow&&b++),i.spotLightMatrix[M]=O.matrix,D.castShadow){const q=n.get(D);q.shadowIntensity=O.intensity,q.shadowBias=O.bias,q.shadowNormalBias=O.normalBias,q.shadowRadius=O.radius,q.shadowMapSize=O.mapSize,i.spotShadow[M]=q,i.spotShadowMap[M]=P,y++}M++}else if(D.isRectAreaLight){const U=t.get(D);U.color.copy(F).multiplyScalar(Z),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=U,g++}else if(D.isPointLight){const U=t.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),U.distance=D.distance,U.decay=D.decay,D.castShadow){const O=D.shadow,q=n.get(D);q.shadowIntensity=O.intensity,q.shadowBias=O.bias,q.shadowNormalBias=O.normalBias,q.shadowRadius=O.radius,q.shadowMapSize=O.mapSize,q.shadowCameraNear=O.camera.near,q.shadowCameraFar=O.camera.far,i.pointShadow[v]=q,i.pointShadowMap[v]=P,i.pointShadowMatrix[v]=D.shadow.matrix,_++}i.point[v]=U,v++}else if(D.isHemisphereLight){const U=t.get(D);U.skyColor.copy(D.color).multiplyScalar(Z),U.groundColor.copy(D.groundColor).multiplyScalar(Z),i.hemi[f]=U,f++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const x=i.hash;(x.directionalLength!==p||x.pointLength!==v||x.spotLength!==M||x.rectAreaLength!==g||x.hemiLength!==f||x.numDirectionalShadows!==m||x.numPointShadows!==_||x.numSpotShadows!==y||x.numSpotMaps!==C||x.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=g,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=R,x.directionalLength=p,x.pointLength=v,x.spotLength=M,x.rectAreaLength=g,x.hemiLength=f,x.numDirectionalShadows=m,x.numPointShadows=_,x.numSpotShadows=y,x.numSpotMaps=C,x.numLightProbes=R,i.version=q3++)}function l(c,h){let d=0,u=0,p=0,v=0,M=0;const g=h.matrixWorldInverse;for(let f=0,m=c.length;f<m;f++){const _=c[f];if(_.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(g),d++}else if(_.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),r.identity(),s.copy(_.matrixWorld),s.premultiply(g),r.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),v++}else if(_.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){const y=i.hemi[M];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),M++}}}return{setup:o,setupView:l,state:i}}function W0(e){const t=new j3(e),n=[],i=[],a=[];function s(u){d.camera=u,n.length=0,i.length=0,a.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){t.setup(n)}function h(u){t.setupView(n,u)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function Z3(e){let t=new WeakMap;function n(a,s=0){const r=t.get(a);let o;return r===void 0?(o=new W0(e),t.set(a,[o])):s>=r.length?(o=new W0(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const K3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q3=`uniform sampler2D shadow_pass;
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
}`,J3=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],$3=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],q0=new qe,eo=new z,Yf=new z;function tC(e,t,n){let i=new AS;const a=new se,s=new se,r=new ze,o=new pT,l=new mT,c={},h=n.maxTextureSize,d={[Xa]:bn,[bn]:Xa,[Xi]:Xi},u=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:K3,fragmentShader:Q3}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new Hn;v.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ri(v,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hc;let f=this.type;this.render=function(b,R,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===eb&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=hc);const A=e.getRenderTarget(),w=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),F=e.state;F.setBlending(Ji),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const Z=f!==this.type;Z&&R.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(P=>P.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,P=b.length;j<P;j++){const U=b[j],O=U.shadow;if(O===void 0){Dt("WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);const q=O.getFrameExtents();a.multiply(q),s.copy(O.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/q.x),a.x=s.x*q.x,O.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/q.y),a.y=s.y*q.y,O.mapSize.y=s.y));const $=e.state.buffers.depth.getReversed();if(O.camera._reversedDepth=$,O.map===null||Z===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===lo){if(U.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new bi(a.x,a.y,{format:xs,type:sa,minFilter:dn,magFilter:dn,generateMipmaps:!1}),O.map.texture.name=U.name+".shadowMap",O.map.depthTexture=new wr(a.x,a.y,Si),O.map.depthTexture.name=U.name+".shadowMapDepth",O.map.depthTexture.format=ra,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=on,O.map.depthTexture.magFilter=on}else U.isPointLight?(O.map=new PS(a.x),O.map.depthTexture=new oT(a.x,Ai)):(O.map=new bi(a.x,a.y),O.map.depthTexture=new wr(a.x,a.y,Ai)),O.map.depthTexture.name=U.name+".shadowMap",O.map.depthTexture.format=ra,this.type===hc?(O.map.depthTexture.compareFunction=$?Kp:Zp,O.map.depthTexture.minFilter=dn,O.map.depthTexture.magFilter=dn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=on,O.map.depthTexture.magFilter=on);O.camera.updateProjectionMatrix()}const it=O.map.isWebGLCubeRenderTarget?6:1;for(let vt=0;vt<it;vt++){if(O.map.isWebGLCubeRenderTarget)e.setRenderTarget(O.map,vt),e.clear();else{vt===0&&(e.setRenderTarget(O.map),e.clear());const Mt=O.getViewport(vt);r.set(s.x*Mt.x,s.y*Mt.y,s.x*Mt.z,s.y*Mt.w),F.viewport(r)}if(U.isPointLight){const Mt=O.camera,Vt=O.matrix,kt=U.distance||Mt.far;kt!==Mt.far&&(Mt.far=kt,Mt.updateProjectionMatrix()),eo.setFromMatrixPosition(U.matrixWorld),Mt.position.copy(eo),Yf.copy(Mt.position),Yf.add(J3[vt]),Mt.up.copy($3[vt]),Mt.lookAt(Yf),Mt.updateMatrixWorld(),Vt.makeTranslation(-eo.x,-eo.y,-eo.z),q0.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),O._frustum.setFromProjectionMatrix(q0,Mt.coordinateSystem,Mt.reversedDepth)}else O.updateMatrices(U);i=O.getFrustum(),y(R,x,O.camera,U,this.type)}O.isPointLightShadow!==!0&&this.type===lo&&m(O,x),O.needsUpdate=!1}f=this.type,g.needsUpdate=!1,e.setRenderTarget(A,w,D)};function m(b,R){const x=t.update(M);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new bi(a.x,a.y,{format:xs,type:sa})),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,e.setRenderTarget(b.mapPass),e.clear(),e.renderBufferDirect(R,null,x,u,M,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,e.setRenderTarget(b.map),e.clear(),e.renderBufferDirect(R,null,x,p,M,null)}function _(b,R,x,A){let w=null;const D=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)w=D;else if(w=x.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=w.uuid,Z=R.uuid;let j=c[F];j===void 0&&(j={},c[F]=j);let P=j[Z];P===void 0&&(P=w.clone(),j[Z]=P,R.addEventListener("dispose",C)),w=P}if(w.visible=R.visible,w.wireframe=R.wireframe,A===lo?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:d[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,x.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const F=e.properties.get(w);F.light=x}return w}function y(b,R,x,A,w){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===lo)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const Z=t.update(b),j=b.material;if(Array.isArray(j)){const P=Z.groups;for(let U=0,O=P.length;U<O;U++){const q=P[U],$=j[q.materialIndex];if($&&$.visible){const it=_(b,$,A,w);b.onBeforeShadow(e,b,R,x,Z,it,q),e.renderBufferDirect(x,null,Z,it,b,q),b.onAfterShadow(e,b,R,x,Z,it,q)}}}else if(j.visible){const P=_(b,j,A,w);b.onBeforeShadow(e,b,R,x,Z,P,null),e.renderBufferDirect(x,null,Z,P,b,null),b.onAfterShadow(e,b,R,x,Z,P,null)}}const F=b.children;for(let Z=0,j=F.length;Z<j;Z++)y(F[Z],R,x,A,w)}function C(b){b.target.removeEventListener("dispose",C);for(const x in c){const A=c[x],w=b.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}function eC(e,t){function n(){let N=!1;const lt=new ze;let Q=null;const xt=new ze(0,0,0,0);return{setMask:function(ut){Q!==ut&&!N&&(e.colorMask(ut,ut,ut,ut),Q=ut)},setLocked:function(ut){N=ut},setClear:function(ut,nt,bt,It,Pe){Pe===!0&&(ut*=It,nt*=It,bt*=It),lt.set(ut,nt,bt,It),xt.equals(lt)===!1&&(e.clearColor(ut,nt,bt,It),xt.copy(lt))},reset:function(){N=!1,Q=null,xt.set(-1,0,0,0)}}}function i(){let N=!1,lt=!1,Q=null,xt=null,ut=null;return{setReversed:function(nt){if(lt!==nt){const bt=t.get("EXT_clip_control");nt?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),lt=nt;const It=ut;ut=null,this.setClear(It)}},getReversed:function(){return lt},setTest:function(nt){nt?ct(e.DEPTH_TEST):Rt(e.DEPTH_TEST)},setMask:function(nt){Q!==nt&&!N&&(e.depthMask(nt),Q=nt)},setFunc:function(nt){if(lt&&(nt=Ob[nt]),xt!==nt){switch(nt){case jd:e.depthFunc(e.NEVER);break;case Zd:e.depthFunc(e.ALWAYS);break;case Kd:e.depthFunc(e.LESS);break;case Rr:e.depthFunc(e.LEQUAL);break;case Qd:e.depthFunc(e.EQUAL);break;case Jd:e.depthFunc(e.GEQUAL);break;case $d:e.depthFunc(e.GREATER);break;case th:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}xt=nt}},setLocked:function(nt){N=nt},setClear:function(nt){ut!==nt&&(ut=nt,lt&&(nt=1-nt),e.clearDepth(nt))},reset:function(){N=!1,Q=null,xt=null,ut=null,lt=!1}}}function a(){let N=!1,lt=null,Q=null,xt=null,ut=null,nt=null,bt=null,It=null,Pe=null;return{setTest:function(pe){N||(pe?ct(e.STENCIL_TEST):Rt(e.STENCIL_TEST))},setMask:function(pe){lt!==pe&&!N&&(e.stencilMask(pe),lt=pe)},setFunc:function(pe,Ui,di){(Q!==pe||xt!==Ui||ut!==di)&&(e.stencilFunc(pe,Ui,di),Q=pe,xt=Ui,ut=di)},setOp:function(pe,Ui,di){(nt!==pe||bt!==Ui||It!==di)&&(e.stencilOp(pe,Ui,di),nt=pe,bt=Ui,It=di)},setLocked:function(pe){N=pe},setClear:function(pe){Pe!==pe&&(e.clearStencil(pe),Pe=pe)},reset:function(){N=!1,lt=null,Q=null,xt=null,ut=null,nt=null,bt=null,It=null,Pe=null}}}const s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap;let h={},d={},u={},p=new WeakMap,v=[],M=null,g=!1,f=null,m=null,_=null,y=null,C=null,b=null,R=null,x=new de(0,0,0),A=0,w=!1,D=null,F=null,Z=null,j=null,P=null;const U=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,q=0;const $=e.getParameter(e.VERSION);$.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec($)[1]),O=q>=1):$.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),O=q>=2);let it=null,vt={};const Mt=e.getParameter(e.SCISSOR_BOX),Vt=e.getParameter(e.VIEWPORT),kt=new ze().fromArray(Mt),wt=new ze().fromArray(Vt);function K(N,lt,Q,xt){const ut=new Uint8Array(4),nt=e.createTexture();e.bindTexture(N,nt),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let bt=0;bt<Q;bt++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(lt,0,e.RGBA,1,1,xt,0,e.RGBA,e.UNSIGNED_BYTE,ut):e.texImage2D(lt+bt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ut);return nt}const ht={};ht[e.TEXTURE_2D]=K(e.TEXTURE_2D,e.TEXTURE_2D,1),ht[e.TEXTURE_CUBE_MAP]=K(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[e.TEXTURE_2D_ARRAY]=K(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ht[e.TEXTURE_3D]=K(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ct(e.DEPTH_TEST),r.setFunc(Rr),Oe(!1),ve(Xg),ct(e.CULL_FACE),he(Ji);function ct(N){h[N]!==!0&&(e.enable(N),h[N]=!0)}function Rt(N){h[N]!==!1&&(e.disable(N),h[N]=!1)}function Nt(N,lt){return u[N]!==lt?(e.bindFramebuffer(N,lt),u[N]=lt,N===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=lt),N===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=lt),!0):!1}function Ct(N,lt){let Q=v,xt=!1;if(N){Q=p.get(lt),Q===void 0&&(Q=[],p.set(lt,Q));const ut=N.textures;if(Q.length!==ut.length||Q[0]!==e.COLOR_ATTACHMENT0){for(let nt=0,bt=ut.length;nt<bt;nt++)Q[nt]=e.COLOR_ATTACHMENT0+nt;Q.length=ut.length,xt=!0}}else Q[0]!==e.BACK&&(Q[0]=e.BACK,xt=!0);xt&&e.drawBuffers(Q)}function ee(N){return M!==N?(e.useProgram(N),M=N,!0):!1}const Xt={[as]:e.FUNC_ADD,[ib]:e.FUNC_SUBTRACT,[ab]:e.FUNC_REVERSE_SUBTRACT};Xt[sb]=e.MIN,Xt[rb]=e.MAX;const re={[ob]:e.ZERO,[lb]:e.ONE,[cb]:e.SRC_COLOR,[qd]:e.SRC_ALPHA,[mb]:e.SRC_ALPHA_SATURATE,[hb]:e.DST_COLOR,[fb]:e.DST_ALPHA,[ub]:e.ONE_MINUS_SRC_COLOR,[Yd]:e.ONE_MINUS_SRC_ALPHA,[pb]:e.ONE_MINUS_DST_COLOR,[db]:e.ONE_MINUS_DST_ALPHA,[gb]:e.CONSTANT_COLOR,[_b]:e.ONE_MINUS_CONSTANT_COLOR,[vb]:e.CONSTANT_ALPHA,[xb]:e.ONE_MINUS_CONSTANT_ALPHA};function he(N,lt,Q,xt,ut,nt,bt,It,Pe,pe){if(N===Ji){g===!0&&(Rt(e.BLEND),g=!1);return}if(g===!1&&(ct(e.BLEND),g=!0),N!==nb){if(N!==f||pe!==w){if((m!==as||C!==as)&&(e.blendEquation(e.FUNC_ADD),m=as,C=as),pe)switch(N){case pr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Wg:e.blendFunc(e.ONE,e.ONE);break;case qg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Yg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:te("WebGLState: Invalid blending: ",N);break}else switch(N){case pr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Wg:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case qg:te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yg:te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:te("WebGLState: Invalid blending: ",N);break}_=null,y=null,b=null,R=null,x.set(0,0,0),A=0,f=N,w=pe}return}ut=ut||lt,nt=nt||Q,bt=bt||xt,(lt!==m||ut!==C)&&(e.blendEquationSeparate(Xt[lt],Xt[ut]),m=lt,C=ut),(Q!==_||xt!==y||nt!==b||bt!==R)&&(e.blendFuncSeparate(re[Q],re[xt],re[nt],re[bt]),_=Q,y=xt,b=nt,R=bt),(It.equals(x)===!1||Pe!==A)&&(e.blendColor(It.r,It.g,It.b,Pe),x.copy(It),A=Pe),f=N,w=!1}function Gt(N,lt){N.side===Xi?Rt(e.CULL_FACE):ct(e.CULL_FACE);let Q=N.side===bn;lt&&(Q=!Q),Oe(Q),N.blending===pr&&N.transparent===!1?he(Ji):he(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);const xt=N.stencilWrite;o.setTest(xt),xt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),L(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ct(e.SAMPLE_ALPHA_TO_COVERAGE):Rt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(N){D!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),D=N)}function ve(N){N!==$E?(ct(e.CULL_FACE),N!==F&&(N===Xg?e.cullFace(e.BACK):N===tb?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Rt(e.CULL_FACE),F=N}function we(N){N!==Z&&(O&&e.lineWidth(N),Z=N)}function L(N,lt,Q){N?(ct(e.POLYGON_OFFSET_FILL),(j!==lt||P!==Q)&&(j=lt,P=Q,r.getReversed()&&(lt=-lt),e.polygonOffset(lt,Q))):Rt(e.POLYGON_OFFSET_FILL)}function De(N){N?ct(e.SCISSOR_TEST):Rt(e.SCISSOR_TEST)}function Wt(N){N===void 0&&(N=e.TEXTURE0+U-1),it!==N&&(e.activeTexture(N),it=N)}function le(N,lt,Q){Q===void 0&&(it===null?Q=e.TEXTURE0+U-1:Q=it);let xt=vt[Q];xt===void 0&&(xt={type:void 0,texture:void 0},vt[Q]=xt),(xt.type!==N||xt.texture!==lt)&&(it!==Q&&(e.activeTexture(Q),it=Q),e.bindTexture(N,lt||ht[N]),xt.type=N,xt.texture=lt)}function ft(){const N=vt[it];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function oe(){try{e.compressedTexImage2D(...arguments)}catch(N){te("WebGLState:",N)}}function T(){try{e.compressedTexImage3D(...arguments)}catch(N){te("WebGLState:",N)}}function S(){try{e.texSubImage2D(...arguments)}catch(N){te("WebGLState:",N)}}function G(){try{e.texSubImage3D(...arguments)}catch(N){te("WebGLState:",N)}}function J(){try{e.compressedTexSubImage2D(...arguments)}catch(N){te("WebGLState:",N)}}function et(){try{e.compressedTexSubImage3D(...arguments)}catch(N){te("WebGLState:",N)}}function rt(){try{e.texStorage2D(...arguments)}catch(N){te("WebGLState:",N)}}function V(){try{e.texStorage3D(...arguments)}catch(N){te("WebGLState:",N)}}function H(){try{e.texImage2D(...arguments)}catch(N){te("WebGLState:",N)}}function Y(){try{e.texImage3D(...arguments)}catch(N){te("WebGLState:",N)}}function st(N){return d[N]!==void 0?d[N]:e.getParameter(N)}function pt(N,lt){d[N]!==lt&&(e.pixelStorei(N,lt),d[N]=lt)}function ot(N){kt.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),kt.copy(N))}function at(N){wt.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),wt.copy(N))}function Lt(N,lt){let Q=c.get(lt);Q===void 0&&(Q=new WeakMap,c.set(lt,Q));let xt=Q.get(N);xt===void 0&&(xt=e.getUniformBlockIndex(lt,N.name),Q.set(N,xt))}function zt(N,lt){const xt=c.get(lt).get(N);l.get(lt)!==xt&&(e.uniformBlockBinding(lt,xt,N.__bindingPointIndex),l.set(lt,xt))}function ne(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},it=null,vt={},u={},p=new WeakMap,v=[],M=null,g=!1,f=null,m=null,_=null,y=null,C=null,b=null,R=null,x=new de(0,0,0),A=0,w=!1,D=null,F=null,Z=null,j=null,P=null,kt.set(0,0,e.canvas.width,e.canvas.height),wt.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ct,disable:Rt,bindFramebuffer:Nt,drawBuffers:Ct,useProgram:ee,setBlending:he,setMaterial:Gt,setFlipSided:Oe,setCullFace:ve,setLineWidth:we,setPolygonOffset:L,setScissorTest:De,activeTexture:Wt,bindTexture:le,unbindTexture:ft,compressedTexImage2D:oe,compressedTexImage3D:T,texImage2D:H,texImage3D:Y,pixelStorei:pt,getParameter:st,updateUBOMapping:Lt,uniformBlockBinding:zt,texStorage2D:rt,texStorage3D:V,texSubImage2D:S,texSubImage3D:G,compressedTexSubImage2D:J,compressedTexSubImage3D:et,scissor:ot,viewport:at,reset:ne}}function nC(e,t,n,i,a,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap,d=new Set;let u;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(T,S){return v?new OffscreenCanvas(T,S):tu("canvas")}function g(T,S,G){let J=1;const et=oe(T);if((et.width>G||et.height>G)&&(J=G/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const rt=Math.floor(J*et.width),V=Math.floor(J*et.height);u===void 0&&(u=M(rt,V));const H=S?M(rt,V):u;return H.width=rt,H.height=V,H.getContext("2d").drawImage(T,0,0,rt,V),Dt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+rt+"x"+V+")."),H}else return"data"in T&&Dt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),T;return T}function f(T){return T.generateMipmaps}function m(T){e.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(T,S,G,J,et,rt=!1){if(T!==null){if(e[T]!==void 0)return e[T];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let V;J&&(V=t.get("EXT_texture_norm16"),V||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let H=S;if(S===e.RED&&(G===e.FLOAT&&(H=e.R32F),G===e.HALF_FLOAT&&(H=e.R16F),G===e.UNSIGNED_BYTE&&(H=e.R8),G===e.UNSIGNED_SHORT&&V&&(H=V.R16_EXT),G===e.SHORT&&V&&(H=V.R16_SNORM_EXT)),S===e.RED_INTEGER&&(G===e.UNSIGNED_BYTE&&(H=e.R8UI),G===e.UNSIGNED_SHORT&&(H=e.R16UI),G===e.UNSIGNED_INT&&(H=e.R32UI),G===e.BYTE&&(H=e.R8I),G===e.SHORT&&(H=e.R16I),G===e.INT&&(H=e.R32I)),S===e.RG&&(G===e.FLOAT&&(H=e.RG32F),G===e.HALF_FLOAT&&(H=e.RG16F),G===e.UNSIGNED_BYTE&&(H=e.RG8),G===e.UNSIGNED_SHORT&&V&&(H=V.RG16_EXT),G===e.SHORT&&V&&(H=V.RG16_SNORM_EXT)),S===e.RG_INTEGER&&(G===e.UNSIGNED_BYTE&&(H=e.RG8UI),G===e.UNSIGNED_SHORT&&(H=e.RG16UI),G===e.UNSIGNED_INT&&(H=e.RG32UI),G===e.BYTE&&(H=e.RG8I),G===e.SHORT&&(H=e.RG16I),G===e.INT&&(H=e.RG32I)),S===e.RGB_INTEGER&&(G===e.UNSIGNED_BYTE&&(H=e.RGB8UI),G===e.UNSIGNED_SHORT&&(H=e.RGB16UI),G===e.UNSIGNED_INT&&(H=e.RGB32UI),G===e.BYTE&&(H=e.RGB8I),G===e.SHORT&&(H=e.RGB16I),G===e.INT&&(H=e.RGB32I)),S===e.RGBA_INTEGER&&(G===e.UNSIGNED_BYTE&&(H=e.RGBA8UI),G===e.UNSIGNED_SHORT&&(H=e.RGBA16UI),G===e.UNSIGNED_INT&&(H=e.RGBA32UI),G===e.BYTE&&(H=e.RGBA8I),G===e.SHORT&&(H=e.RGBA16I),G===e.INT&&(H=e.RGBA32I)),S===e.RGB&&(G===e.UNSIGNED_SHORT&&V&&(H=V.RGB16_EXT),G===e.SHORT&&V&&(H=V.RGB16_SNORM_EXT),G===e.UNSIGNED_INT_5_9_9_9_REV&&(H=e.RGB9_E5),G===e.UNSIGNED_INT_10F_11F_11F_REV&&(H=e.R11F_G11F_B10F)),S===e.RGBA){const Y=rt?Jc:Kt.getTransfer(et);G===e.FLOAT&&(H=e.RGBA32F),G===e.HALF_FLOAT&&(H=e.RGBA16F),G===e.UNSIGNED_BYTE&&(H=Y===ce?e.SRGB8_ALPHA8:e.RGBA8),G===e.UNSIGNED_SHORT&&V&&(H=V.RGBA16_EXT),G===e.SHORT&&V&&(H=V.RGBA16_SNORM_EXT),G===e.UNSIGNED_SHORT_4_4_4_4&&(H=e.RGBA4),G===e.UNSIGNED_SHORT_5_5_5_1&&(H=e.RGB5_A1)}return(H===e.R16F||H===e.R32F||H===e.RG16F||H===e.RG32F||H===e.RGBA16F||H===e.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function C(T,S){let G;return T?S===null||S===Ai||S===Vo?G=e.DEPTH24_STENCIL8:S===Si?G=e.DEPTH32F_STENCIL8:S===Ho&&(G=e.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ai||S===Vo?G=e.DEPTH_COMPONENT24:S===Si?G=e.DEPTH_COMPONENT32F:S===Ho&&(G=e.DEPTH_COMPONENT16),G}function b(T,S){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==on&&T.minFilter!==dn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function R(T){const S=T.target;S.removeEventListener("dispose",R),A(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&d.delete(S)}function x(T){const S=T.target;S.removeEventListener("dispose",x),D(S)}function A(T){const S=i.get(T);if(S.__webglInit===void 0)return;const G=T.source,J=p.get(G);if(J){const et=J[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&w(T),Object.keys(J).length===0&&p.delete(G)}i.remove(T)}function w(T){const S=i.get(T);e.deleteTexture(S.__webglTexture);const G=T.source,J=p.get(G);delete J[S.__cacheKey],r.memory.textures--}function D(T){const S=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let et=0;et<S.__webglFramebuffer[J].length;et++)e.deleteFramebuffer(S.__webglFramebuffer[J][et]);else e.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)e.deleteFramebuffer(S.__webglFramebuffer[J]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=T.textures;for(let J=0,et=G.length;J<et;J++){const rt=i.get(G[J]);rt.__webglTexture&&(e.deleteTexture(rt.__webglTexture),r.memory.textures--),i.remove(G[J])}i.remove(T)}let F=0;function Z(){F=0}function j(){return F}function P(T){F=T}function U(){const T=F;return T>=a.maxTextures&&Dt("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+a.maxTextures),F+=1,T}function O(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function q(T,S){const G=i.get(T);if(T.isVideoTexture&&le(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&G.__version!==T.version){const J=T.image;if(J===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(G,T,S);return}}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,G.__webglTexture,e.TEXTURE0+S)}function $(T,S){const G=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){Rt(G,T,S);return}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,G.__webglTexture,e.TEXTURE0+S)}function it(T,S){const G=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){Rt(G,T,S);return}n.bindTexture(e.TEXTURE_3D,G.__webglTexture,e.TEXTURE0+S)}function vt(T,S){const G=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&G.__version!==T.version){Nt(G,T,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture,e.TEXTURE0+S)}const Mt={[eh]:e.REPEAT,[ji]:e.CLAMP_TO_EDGE,[nh]:e.MIRRORED_REPEAT},Vt={[on]:e.NEAREST,[Mb]:e.NEAREST_MIPMAP_NEAREST,[bl]:e.NEAREST_MIPMAP_LINEAR,[dn]:e.LINEAR,[gf]:e.LINEAR_MIPMAP_NEAREST,[rs]:e.LINEAR_MIPMAP_LINEAR},kt={[Tb]:e.NEVER,[Db]:e.ALWAYS,[Ab]:e.LESS,[Zp]:e.LEQUAL,[Rb]:e.EQUAL,[Kp]:e.GEQUAL,[Cb]:e.GREATER,[wb]:e.NOTEQUAL};function wt(T,S){if(S.type===Si&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===dn||S.magFilter===gf||S.magFilter===bl||S.magFilter===rs||S.minFilter===dn||S.minFilter===gf||S.minFilter===bl||S.minFilter===rs)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,Mt[S.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,Mt[S.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,Mt[S.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,Vt[S.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,Vt[S.minFilter]),S.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,kt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===on||S.minFilter!==bl&&S.minFilter!==rs||S.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function K(T,S){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",R));const J=S.source;let et=p.get(J);et===void 0&&(et={},p.set(J,et));const rt=O(S);if(rt!==T.__cacheKey){et[rt]===void 0&&(et[rt]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,G=!0),et[rt].usedTimes++;const V=et[T.__cacheKey];V!==void 0&&(et[T.__cacheKey].usedTimes--,V.usedTimes===0&&w(S)),T.__cacheKey=rt,T.__webglTexture=et[rt].texture}return G}function ht(T,S,G){return Math.floor(Math.floor(T/G)/S)}function ct(T,S,G,J){const rt=T.updateRanges;if(rt.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,G,J,S.data);else{rt.sort((pt,ot)=>pt.start-ot.start);let V=0;for(let pt=1;pt<rt.length;pt++){const ot=rt[V],at=rt[pt],Lt=ot.start+ot.count,zt=ht(at.start,S.width,4),ne=ht(ot.start,S.width,4);at.start<=Lt+1&&zt===ne&&ht(at.start+at.count-1,S.width,4)===zt?ot.count=Math.max(ot.count,at.start+at.count-ot.start):(++V,rt[V]=at)}rt.length=V+1;const H=n.getParameter(e.UNPACK_ROW_LENGTH),Y=n.getParameter(e.UNPACK_SKIP_PIXELS),st=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let pt=0,ot=rt.length;pt<ot;pt++){const at=rt[pt],Lt=Math.floor(at.start/4),zt=Math.ceil(at.count/4),ne=Lt%S.width,N=Math.floor(Lt/S.width),lt=zt,Q=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(e.UNPACK_SKIP_ROWS,N),n.texSubImage2D(e.TEXTURE_2D,0,ne,N,lt,Q,G,J,S.data)}T.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,H),n.pixelStorei(e.UNPACK_SKIP_PIXELS,Y),n.pixelStorei(e.UNPACK_SKIP_ROWS,st)}}function Rt(T,S,G){let J=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=e.TEXTURE_3D);const et=K(T,S),rt=S.source;n.bindTexture(J,T.__webglTexture,e.TEXTURE0+G);const V=i.get(rt);if(rt.version!==V.__version||et===!0){if(n.activeTexture(e.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const Q=Kt.getPrimaries(Kt.workingColorSpace),xt=S.colorSpace===ba?null:Kt.getPrimaries(S.colorSpace),ut=S.colorSpace===ba||Q===xt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut)}n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment);let Y=g(S.image,!1,a.maxTextureSize);Y=ft(S,Y);const st=s.convert(S.format,S.colorSpace),pt=s.convert(S.type);let ot=y(S.internalFormat,st,pt,S.normalized,S.colorSpace,S.isVideoTexture);wt(J,S);let at;const Lt=S.mipmaps,zt=S.isVideoTexture!==!0,ne=V.__version===void 0||et===!0,N=rt.dataReady,lt=b(S,Y);if(S.isDepthTexture)ot=C(S.format===os,S.type),ne&&(zt?n.texStorage2D(e.TEXTURE_2D,1,ot,Y.width,Y.height):n.texImage2D(e.TEXTURE_2D,0,ot,Y.width,Y.height,0,st,pt,null));else if(S.isDataTexture)if(Lt.length>0){zt&&ne&&n.texStorage2D(e.TEXTURE_2D,lt,ot,Lt[0].width,Lt[0].height);for(let Q=0,xt=Lt.length;Q<xt;Q++)at=Lt[Q],zt?N&&n.texSubImage2D(e.TEXTURE_2D,Q,0,0,at.width,at.height,st,pt,at.data):n.texImage2D(e.TEXTURE_2D,Q,ot,at.width,at.height,0,st,pt,at.data);S.generateMipmaps=!1}else zt?(ne&&n.texStorage2D(e.TEXTURE_2D,lt,ot,Y.width,Y.height),N&&ct(S,Y,st,pt)):n.texImage2D(e.TEXTURE_2D,0,ot,Y.width,Y.height,0,st,pt,Y.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){zt&&ne&&n.texStorage3D(e.TEXTURE_2D_ARRAY,lt,ot,Lt[0].width,Lt[0].height,Y.depth);for(let Q=0,xt=Lt.length;Q<xt;Q++)if(at=Lt[Q],S.format!==ci)if(st!==null)if(zt){if(N)if(S.layerUpdates.size>0){const ut=E0(at.width,at.height,S.format,S.type);for(const nt of S.layerUpdates){const bt=at.data.subarray(nt*ut/at.data.BYTES_PER_ELEMENT,(nt+1)*ut/at.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,nt,at.width,at.height,1,st,bt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,at.width,at.height,Y.depth,st,at.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Q,ot,at.width,at.height,Y.depth,0,at.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?N&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,at.width,at.height,Y.depth,st,pt,at.data):n.texImage3D(e.TEXTURE_2D_ARRAY,Q,ot,at.width,at.height,Y.depth,0,st,pt,at.data)}else{zt&&ne&&n.texStorage2D(e.TEXTURE_2D,lt,ot,Lt[0].width,Lt[0].height);for(let Q=0,xt=Lt.length;Q<xt;Q++)at=Lt[Q],S.format!==ci?st!==null?zt?N&&n.compressedTexSubImage2D(e.TEXTURE_2D,Q,0,0,at.width,at.height,st,at.data):n.compressedTexImage2D(e.TEXTURE_2D,Q,ot,at.width,at.height,0,at.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?N&&n.texSubImage2D(e.TEXTURE_2D,Q,0,0,at.width,at.height,st,pt,at.data):n.texImage2D(e.TEXTURE_2D,Q,ot,at.width,at.height,0,st,pt,at.data)}else if(S.isDataArrayTexture)if(zt){if(ne&&n.texStorage3D(e.TEXTURE_2D_ARRAY,lt,ot,Y.width,Y.height,Y.depth),N)if(S.layerUpdates.size>0){const Q=E0(Y.width,Y.height,S.format,S.type);for(const xt of S.layerUpdates){const ut=Y.data.subarray(xt*Q/Y.data.BYTES_PER_ELEMENT,(xt+1)*Q/Y.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,xt,Y.width,Y.height,1,st,pt,ut)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,st,pt,Y.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ot,Y.width,Y.height,Y.depth,0,st,pt,Y.data);else if(S.isData3DTexture)zt?(ne&&n.texStorage3D(e.TEXTURE_3D,lt,ot,Y.width,Y.height,Y.depth),N&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,st,pt,Y.data)):n.texImage3D(e.TEXTURE_3D,0,ot,Y.width,Y.height,Y.depth,0,st,pt,Y.data);else if(S.isFramebufferTexture){if(ne)if(zt)n.texStorage2D(e.TEXTURE_2D,lt,ot,Y.width,Y.height);else{let Q=Y.width,xt=Y.height;for(let ut=0;ut<lt;ut++)n.texImage2D(e.TEXTURE_2D,ut,ot,Q,xt,0,st,pt,null),Q>>=1,xt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in e){const Q=e.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),Y.parentNode!==Q){Q.appendChild(Y),d.add(S),Q.onpaint=It=>{const Pe=It.changedElements;for(const pe of d)Pe.includes(pe.image)&&(pe.needsUpdate=!0)},Q.requestPaint();return}const xt=0,ut=e.RGBA,nt=e.RGBA,bt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,xt,ut,nt,bt,Y),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Lt.length>0){if(zt&&ne){const Q=oe(Lt[0]);n.texStorage2D(e.TEXTURE_2D,lt,ot,Q.width,Q.height)}for(let Q=0,xt=Lt.length;Q<xt;Q++)at=Lt[Q],zt?N&&n.texSubImage2D(e.TEXTURE_2D,Q,0,0,st,pt,at):n.texImage2D(e.TEXTURE_2D,Q,ot,st,pt,at);S.generateMipmaps=!1}else if(zt){if(ne){const Q=oe(Y);n.texStorage2D(e.TEXTURE_2D,lt,ot,Q.width,Q.height)}N&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,st,pt,Y)}else n.texImage2D(e.TEXTURE_2D,0,ot,st,pt,Y);f(S)&&m(J),V.__version=rt.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Nt(T,S,G){if(S.image.length!==6)return;const J=K(T,S),et=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+G);const rt=i.get(et);if(et.version!==rt.__version||J===!0){n.activeTexture(e.TEXTURE0+G);const V=Kt.getPrimaries(Kt.workingColorSpace),H=S.colorSpace===ba?null:Kt.getPrimaries(S.colorSpace),Y=S.colorSpace===ba||V===H?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);const st=S.isCompressedTexture||S.image[0].isCompressedTexture,pt=S.image[0]&&S.image[0].isDataTexture,ot=[];for(let nt=0;nt<6;nt++)!st&&!pt?ot[nt]=g(S.image[nt],!0,a.maxCubemapSize):ot[nt]=pt?S.image[nt].image:S.image[nt],ot[nt]=ft(S,ot[nt]);const at=ot[0],Lt=s.convert(S.format,S.colorSpace),zt=s.convert(S.type),ne=y(S.internalFormat,Lt,zt,S.normalized,S.colorSpace),N=S.isVideoTexture!==!0,lt=rt.__version===void 0||J===!0,Q=et.dataReady;let xt=b(S,at);wt(e.TEXTURE_CUBE_MAP,S);let ut;if(st){N&&lt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,xt,ne,at.width,at.height);for(let nt=0;nt<6;nt++){ut=ot[nt].mipmaps;for(let bt=0;bt<ut.length;bt++){const It=ut[bt];S.format!==ci?Lt!==null?N?Q&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt,0,0,It.width,It.height,Lt,It.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt,ne,It.width,It.height,0,It.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt,0,0,It.width,It.height,Lt,zt,It.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt,ne,It.width,It.height,0,Lt,zt,It.data)}}}else{if(ut=S.mipmaps,N&&lt){ut.length>0&&xt++;const nt=oe(ot[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,xt,ne,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(pt){N?Q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ot[nt].width,ot[nt].height,Lt,zt,ot[nt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ne,ot[nt].width,ot[nt].height,0,Lt,zt,ot[nt].data);for(let bt=0;bt<ut.length;bt++){const Pe=ut[bt].image[nt].image;N?Q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt+1,0,0,Pe.width,Pe.height,Lt,zt,Pe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt+1,ne,Pe.width,Pe.height,0,Lt,zt,Pe.data)}}else{N?Q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Lt,zt,ot[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ne,Lt,zt,ot[nt]);for(let bt=0;bt<ut.length;bt++){const It=ut[bt];N?Q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt+1,0,0,Lt,zt,It.image[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,bt+1,ne,Lt,zt,It.image[nt])}}}f(S)&&m(e.TEXTURE_CUBE_MAP),rt.__version=et.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Ct(T,S,G,J,et,rt){const V=s.convert(G.format,G.colorSpace),H=s.convert(G.type),Y=y(G.internalFormat,V,H,G.normalized,G.colorSpace),st=i.get(S),pt=i.get(G);if(pt.__renderTarget=S,!st.__hasExternalTextures){const ot=Math.max(1,S.width>>rt),at=Math.max(1,S.height>>rt);et===e.TEXTURE_3D||et===e.TEXTURE_2D_ARRAY?n.texImage3D(et,rt,Y,ot,at,S.depth,0,V,H,null):n.texImage2D(et,rt,Y,ot,at,0,V,H,null)}n.bindFramebuffer(e.FRAMEBUFFER,T),Wt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,et,pt.__webglTexture,0,De(S)):(et===e.TEXTURE_2D||et>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,J,et,pt.__webglTexture,rt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ee(T,S,G){if(e.bindRenderbuffer(e.RENDERBUFFER,T),S.depthBuffer){const J=S.depthTexture,et=J&&J.isDepthTexture?J.type:null,rt=C(S.stencilBuffer,et),V=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Wt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,De(S),rt,S.width,S.height):G?e.renderbufferStorageMultisample(e.RENDERBUFFER,De(S),rt,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,rt,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,V,e.RENDERBUFFER,T)}else{const J=S.textures;for(let et=0;et<J.length;et++){const rt=J[et],V=s.convert(rt.format,rt.colorSpace),H=s.convert(rt.type),Y=y(rt.internalFormat,V,H,rt.normalized,rt.colorSpace);Wt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,De(S),Y,S.width,S.height):G?e.renderbufferStorageMultisample(e.RENDERBUFFER,De(S),Y,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,Y,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Xt(T,S,G){const J=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=i.get(S.depthTexture);if(et.__renderTarget=S,(!et.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J){if(et.__webglInit===void 0&&(et.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),et.__webglTexture===void 0){et.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,et.__webglTexture),wt(e.TEXTURE_CUBE_MAP,S.depthTexture);const st=s.convert(S.depthTexture.format),pt=s.convert(S.depthTexture.type);let ot;S.depthTexture.format===ra?ot=e.DEPTH_COMPONENT24:S.depthTexture.format===os&&(ot=e.DEPTH24_STENCIL8);for(let at=0;at<6;at++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ot,S.width,S.height,0,st,pt,null)}}else q(S.depthTexture,0);const rt=et.__webglTexture,V=De(S),H=J?e.TEXTURE_CUBE_MAP_POSITIVE_X+G:e.TEXTURE_2D,Y=S.depthTexture.format===os?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(S.depthTexture.format===ra)Wt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,H,rt,0,V):e.framebufferTexture2D(e.FRAMEBUFFER,Y,H,rt,0);else if(S.depthTexture.format===os)Wt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,H,rt,0,V):e.framebufferTexture2D(e.FRAMEBUFFER,Y,H,rt,0);else throw new Error("Unknown depthTexture format")}function re(T){const S=i.get(T),G=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const J=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=J}if(T.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let J=0;J<6;J++)Xt(S.__webglFramebuffer[J],T,J);else{const J=T.texture.mipmaps;J&&J.length>0?Xt(S.__webglFramebuffer[0],T,0):Xt(S.__webglFramebuffer,T,0)}else if(G){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=e.createRenderbuffer(),ee(S.__webglDepthbuffer[J],T,!1);else{const et=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=S.__webglDepthbuffer[J];e.bindRenderbuffer(e.RENDERBUFFER,rt),e.framebufferRenderbuffer(e.FRAMEBUFFER,et,e.RENDERBUFFER,rt)}}else{const J=T.texture.mipmaps;if(J&&J.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),ee(S.__webglDepthbuffer,T,!1);else{const et=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,rt),e.framebufferRenderbuffer(e.FRAMEBUFFER,et,e.RENDERBUFFER,rt)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function he(T,S,G){const J=i.get(T);S!==void 0&&Ct(J.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),G!==void 0&&re(T)}function Gt(T){const S=T.texture,G=i.get(T),J=i.get(S);T.addEventListener("dispose",x);const et=T.textures,rt=T.isWebGLCubeRenderTarget===!0,V=et.length>1;if(V||(J.__webglTexture===void 0&&(J.__webglTexture=e.createTexture()),J.__version=S.version,r.memory.textures++),rt){G.__webglFramebuffer=[];for(let H=0;H<6;H++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[H]=[];for(let Y=0;Y<S.mipmaps.length;Y++)G.__webglFramebuffer[H][Y]=e.createFramebuffer()}else G.__webglFramebuffer[H]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let H=0;H<S.mipmaps.length;H++)G.__webglFramebuffer[H]=e.createFramebuffer()}else G.__webglFramebuffer=e.createFramebuffer();if(V)for(let H=0,Y=et.length;H<Y;H++){const st=i.get(et[H]);st.__webglTexture===void 0&&(st.__webglTexture=e.createTexture(),r.memory.textures++)}if(T.samples>0&&Wt(T)===!1){G.__webglMultisampledFramebuffer=e.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let H=0;H<et.length;H++){const Y=et[H];G.__webglColorRenderbuffer[H]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,G.__webglColorRenderbuffer[H]);const st=s.convert(Y.format,Y.colorSpace),pt=s.convert(Y.type),ot=y(Y.internalFormat,st,pt,Y.normalized,Y.colorSpace,T.isXRRenderTarget===!0),at=De(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,at,ot,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+H,e.RENDERBUFFER,G.__webglColorRenderbuffer[H])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=e.createRenderbuffer(),ee(G.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(rt){n.bindTexture(e.TEXTURE_CUBE_MAP,J.__webglTexture),wt(e.TEXTURE_CUBE_MAP,S);for(let H=0;H<6;H++)if(S.mipmaps&&S.mipmaps.length>0)for(let Y=0;Y<S.mipmaps.length;Y++)Ct(G.__webglFramebuffer[H][Y],T,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+H,Y);else Ct(G.__webglFramebuffer[H],T,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);f(S)&&m(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(V){for(let H=0,Y=et.length;H<Y;H++){const st=et[H],pt=i.get(st);let ot=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ot=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ot,pt.__webglTexture),wt(ot,st),Ct(G.__webglFramebuffer,T,st,e.COLOR_ATTACHMENT0+H,ot,0),f(st)&&m(ot)}n.unbindTexture()}else{let H=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(H=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(H,J.__webglTexture),wt(H,S),S.mipmaps&&S.mipmaps.length>0)for(let Y=0;Y<S.mipmaps.length;Y++)Ct(G.__webglFramebuffer[Y],T,S,e.COLOR_ATTACHMENT0,H,Y);else Ct(G.__webglFramebuffer,T,S,e.COLOR_ATTACHMENT0,H,0);f(S)&&m(H),n.unbindTexture()}T.depthBuffer&&re(T)}function Oe(T){const S=T.textures;for(let G=0,J=S.length;G<J;G++){const et=S[G];if(f(et)){const rt=_(T),V=i.get(et).__webglTexture;n.bindTexture(rt,V),m(rt),n.unbindTexture()}}}const ve=[],we=[];function L(T){if(T.samples>0){if(Wt(T)===!1){const S=T.textures,G=T.width,J=T.height;let et=e.COLOR_BUFFER_BIT;const rt=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,V=i.get(T),H=S.length>1;if(H)for(let st=0;st<S.length;st++)n.bindFramebuffer(e.FRAMEBUFFER,V.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+st,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,V.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+st,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,V.__webglMultisampledFramebuffer);const Y=T.texture.mipmaps;Y&&Y.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,V.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,V.__webglFramebuffer);for(let st=0;st<S.length;st++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(et|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(et|=e.STENCIL_BUFFER_BIT)),H){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,V.__webglColorRenderbuffer[st]);const pt=i.get(S[st]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,pt,0)}e.blitFramebuffer(0,0,G,J,0,0,G,J,et,e.NEAREST),l===!0&&(ve.length=0,we.length=0,ve.push(e.COLOR_ATTACHMENT0+st),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ve.push(rt),we.push(rt),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,we)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ve))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),H)for(let st=0;st<S.length;st++){n.bindFramebuffer(e.FRAMEBUFFER,V.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+st,e.RENDERBUFFER,V.__webglColorRenderbuffer[st]);const pt=i.get(S[st]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,V.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+st,e.TEXTURE_2D,pt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,V.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const S=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function De(T){return Math.min(a.maxSamples,T.samples)}function Wt(T){const S=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function le(T){const S=r.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function ft(T,S){const G=T.colorSpace,J=T.format,et=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==Qc&&G!==ba&&(Kt.getTransfer(G)===ce?(J!==ci||et!==$n)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):te("WebGLTextures: Unsupported texture color space:",G)),S}function oe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=Z,this.getTextureUnits=j,this.setTextureUnits=P,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=it,this.setTextureCube=vt,this.rebindTextures=he,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function iC(e,t){function n(i,a=ba){let s;const r=Kt.getTransfer(a);if(i===$n)return e.UNSIGNED_BYTE;if(i===Xp)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Wp)return e.UNSIGNED_SHORT_5_5_5_1;if(i===pS)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===mS)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===dS)return e.BYTE;if(i===hS)return e.SHORT;if(i===Ho)return e.UNSIGNED_SHORT;if(i===kp)return e.INT;if(i===Ai)return e.UNSIGNED_INT;if(i===Si)return e.FLOAT;if(i===sa)return e.HALF_FLOAT;if(i===gS)return e.ALPHA;if(i===_S)return e.RGB;if(i===ci)return e.RGBA;if(i===ra)return e.DEPTH_COMPONENT;if(i===os)return e.DEPTH_STENCIL;if(i===vS)return e.RED;if(i===qp)return e.RED_INTEGER;if(i===xs)return e.RG;if(i===Yp)return e.RG_INTEGER;if(i===jp)return e.RGBA_INTEGER;if(i===pc||i===mc||i===gc||i===_c)if(r===ce)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_c)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ih||i===ah||i===sh||i===rh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ih)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ah)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oh||i===lh||i===ch||i===uh||i===fh||i===Zc||i===dh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===oh||i===lh)return r===ce?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ch)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===uh)return s.COMPRESSED_R11_EAC;if(i===fh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Zc)return s.COMPRESSED_RG11_EAC;if(i===dh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===hh||i===ph||i===mh||i===gh||i===_h||i===vh||i===xh||i===Sh||i===yh||i===Mh||i===Eh||i===bh||i===Th||i===Ah)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===hh)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ph)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mh)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gh)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_h)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vh)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xh)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sh)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yh)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mh)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Eh)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bh)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Th)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ah)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rh||i===Ch||i===wh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Rh)return r===ce?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ch)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dh||i===Uh||i===Kc||i===Nh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Dh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Uh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const aC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sC=`
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

}`;class rC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new wS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Ci({vertexShader:aC,fragmentShader:sC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ri(new Tu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oC extends As{constructor(t,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,v=null;const M=typeof XRWebGLBinding<"u",g=new rC,f={},m=n.getContextAttributes();let _=null,y=null;const C=[],b=[],R=new se;let x=null;const A=new Zn;A.viewport=new ze;const w=new Zn;w.viewport=new ze;const D=[A,w],F=new _T;let Z=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ht=C[K];return ht===void 0&&(ht=new bf,C[K]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(K){let ht=C[K];return ht===void 0&&(ht=new bf,C[K]=ht),ht.getGripSpace()},this.getHand=function(K){let ht=C[K];return ht===void 0&&(ht=new bf,C[K]=ht),ht.getHandSpace()};function P(K){const ht=b.indexOf(K.inputSource);if(ht===-1)return;const ct=C[ht];ct!==void 0&&(ct.update(K.inputSource,K.frame,c||r),ct.dispatchEvent({type:K.type,data:K.inputSource}))}function U(){a.removeEventListener("select",P),a.removeEventListener("selectstart",P),a.removeEventListener("selectend",P),a.removeEventListener("squeeze",P),a.removeEventListener("squeezestart",P),a.removeEventListener("squeezeend",P),a.removeEventListener("end",U),a.removeEventListener("inputsourceschange",O);for(let K=0;K<C.length;K++){const ht=b[K];ht!==null&&(b[K]=null,C[K].disconnect(ht))}Z=null,j=null,g.reset();for(const K in f)delete f[K];t.setRenderTarget(_),p=null,u=null,d=null,a=null,y=null,wt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(a,n)),d},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(_=t.getRenderTarget(),a.addEventListener("select",P),a.addEventListener("selectstart",P),a.addEventListener("selectend",P),a.addEventListener("squeeze",P),a.addEventListener("squeezestart",P),a.addEventListener("squeezeend",P),a.addEventListener("end",U),a.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,Rt=null,Nt=null;m.depth&&(Nt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ct=m.stencil?os:ra,Rt=m.stencil?Vo:Ai);const Ct={colorFormat:n.RGBA8,depthFormat:Nt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Ct),a.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new bi(u.textureWidth,u.textureHeight,{format:ci,type:$n,depthTexture:new wr(u.textureWidth,u.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ct={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,n,ct),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new bi(p.framebufferWidth,p.framebufferHeight,{format:ci,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),wt.setContext(a),wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(K){for(let ht=0;ht<K.removed.length;ht++){const ct=K.removed[ht],Rt=b.indexOf(ct);Rt>=0&&(b[Rt]=null,C[Rt].disconnect(ct))}for(let ht=0;ht<K.added.length;ht++){const ct=K.added[ht];let Rt=b.indexOf(ct);if(Rt===-1){for(let Ct=0;Ct<C.length;Ct++)if(Ct>=b.length){b.push(ct),Rt=Ct;break}else if(b[Ct]===null){b[Ct]=ct,Rt=Ct;break}if(Rt===-1)break}const Nt=C[Rt];Nt&&Nt.connect(ct)}}const q=new z,$=new z;function it(K,ht,ct){q.setFromMatrixPosition(ht.matrixWorld),$.setFromMatrixPosition(ct.matrixWorld);const Rt=q.distanceTo($),Nt=ht.projectionMatrix.elements,Ct=ct.projectionMatrix.elements,ee=Nt[14]/(Nt[10]-1),Xt=Nt[14]/(Nt[10]+1),re=(Nt[9]+1)/Nt[5],he=(Nt[9]-1)/Nt[5],Gt=(Nt[8]-1)/Nt[0],Oe=(Ct[8]+1)/Ct[0],ve=ee*Gt,we=ee*Oe,L=Rt/(-Gt+Oe),De=L*-Gt;if(ht.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(De),K.translateZ(L),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Nt[10]===-1)K.projectionMatrix.copy(ht.projectionMatrix),K.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Wt=ee+L,le=Xt+L,ft=ve-De,oe=we+(Rt-De),T=re*Xt/le*Wt,S=he*Xt/le*Wt;K.projectionMatrix.makePerspective(ft,oe,T,S,Wt,le),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function vt(K,ht){ht===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ht.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;let ht=K.near,ct=K.far;g.texture!==null&&(g.depthNear>0&&(ht=g.depthNear),g.depthFar>0&&(ct=g.depthFar)),F.near=w.near=A.near=ht,F.far=w.far=A.far=ct,(Z!==F.near||j!==F.far)&&(a.updateRenderState({depthNear:F.near,depthFar:F.far}),Z=F.near,j=F.far),F.layers.mask=K.layers.mask|6,A.layers.mask=F.layers.mask&-5,w.layers.mask=F.layers.mask&-3;const Rt=K.parent,Nt=F.cameras;vt(F,Rt);for(let Ct=0;Ct<Nt.length;Ct++)vt(Nt[Ct],Rt);Nt.length===2?it(F,A,w):F.projectionMatrix.copy(A.projectionMatrix),Mt(K,F,Rt)};function Mt(K,ht,ct){ct===null?K.matrix.copy(ht.matrixWorld):(K.matrix.copy(ct.matrixWorld),K.matrix.invert(),K.matrix.multiply(ht.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ht.projectionMatrix),K.projectionMatrixInverse.copy(ht.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Oh*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(K){return f[K]};let Vt=null;function kt(K,ht){if(h=ht.getViewerPose(c||r),v=ht,h!==null){const ct=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Rt=!1;ct.length!==F.cameras.length&&(F.cameras.length=0,Rt=!0);for(let Xt=0;Xt<ct.length;Xt++){const re=ct[Xt];let he=null;if(p!==null)he=p.getViewport(re);else{const Oe=d.getViewSubImage(u,re);he=Oe.viewport,Xt===0&&(t.setRenderTargetTextures(y,Oe.colorTexture,Oe.depthStencilTexture),t.setRenderTarget(y))}let Gt=D[Xt];Gt===void 0&&(Gt=new Zn,Gt.layers.enable(Xt),Gt.viewport=new ze,D[Xt]=Gt),Gt.matrix.fromArray(re.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(re.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(he.x,he.y,he.width,he.height),Xt===0&&(F.matrix.copy(Gt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Rt===!0&&F.cameras.push(Gt)}const Nt=a.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&M){d=i.getBinding();const Xt=d.getDepthInformation(ct[0]);Xt&&Xt.isValid&&Xt.texture&&g.init(Xt,a.renderState)}if(Nt&&Nt.includes("camera-access")&&M){t.state.unbindTexture(),d=i.getBinding();for(let Xt=0;Xt<ct.length;Xt++){const re=ct[Xt].camera;if(re){let he=f[re];he||(he=new wS,f[re]=he);const Gt=d.getCameraImage(re);he.sourceTexture=Gt}}}}for(let ct=0;ct<C.length;ct++){const Rt=b[ct],Nt=C[ct];Rt!==null&&Nt!==void 0&&Nt.update(Rt,ht,c||r)}Vt&&Vt(K,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),v=null}const wt=new LS;wt.setAnimationLoop(kt),this.setAnimationLoop=function(K){Vt=K},this.dispose=function(){}}}const lC=new qe,GS=new Ot;GS.set(-1,0,0,0,1,0,0,0,1);function cC(e,t){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,DS(e)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function a(g,f,m,_,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),d(g,f)):f.isMeshPhongMaterial?(s(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),u(g,f),f.isMeshPhysicalMaterial&&p(g,f,y)):f.isMeshMatcapMaterial?(s(g,f),v(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),M(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(r(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,m,_):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===bn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===bn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const m=t.get(f),_=m.envMap,y=m.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(lC.makeRotationFromEuler(y)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(GS),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function r(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,_){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=_*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,m){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===bn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function M(g,f){const m=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function uC(e,t,n,i){let a={},s={},r=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const y=_.program;i.uniformBlockBinding(m,y)}function c(m,_){let y=a[m.id];y===void 0&&(v(m),y=h(m),a[m.id]=y,m.addEventListener("dispose",g));const C=_.program;i.updateUBOMapping(m,C);const b=t.render.frame;s[m.id]!==b&&(u(m),s[m.id]=b)}function h(m){const _=d();m.__bindingPointIndex=_;const y=e.createBuffer(),C=m.__size,b=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,C,b),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,y),y}function d(){for(let m=0;m<o;m++)if(r.indexOf(m)===-1)return r.push(m),m;return te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){const _=a[m.id],y=m.uniforms,C=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let b=0,R=y.length;b<R;b++){const x=Array.isArray(y[b])?y[b]:[y[b]];for(let A=0,w=x.length;A<w;A++){const D=x[A];if(p(D,b,A,C)===!0){const F=D.__offset,Z=Array.isArray(D.value)?D.value:[D.value];let j=0;for(let P=0;P<Z.length;P++){const U=Z[P],O=M(U);typeof U=="number"||typeof U=="boolean"?(D.__data[0]=U,e.bufferSubData(e.UNIFORM_BUFFER,F+j,D.__data)):U.isMatrix3?(D.__data[0]=U.elements[0],D.__data[1]=U.elements[1],D.__data[2]=U.elements[2],D.__data[3]=0,D.__data[4]=U.elements[3],D.__data[5]=U.elements[4],D.__data[6]=U.elements[5],D.__data[7]=0,D.__data[8]=U.elements[6],D.__data[9]=U.elements[7],D.__data[10]=U.elements[8],D.__data[11]=0):ArrayBuffer.isView(U)?D.__data.set(new U.constructor(U.buffer,U.byteOffset,D.__data.length)):(U.toArray(D.__data,j),j+=O.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,F,D.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(m,_,y,C){const b=m.value,R=_+"_"+y;if(C[R]===void 0)return typeof b=="number"||typeof b=="boolean"?C[R]=b:ArrayBuffer.isView(b)?C[R]=b.slice():C[R]=b.clone(),!0;{const x=C[R];if(typeof b=="number"||typeof b=="boolean"){if(x!==b)return C[R]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(x.equals(b)===!1)return x.copy(b),!0}}return!1}function v(m){const _=m.uniforms;let y=0;const C=16;for(let R=0,x=_.length;R<x;R++){const A=Array.isArray(_[R])?_[R]:[_[R]];for(let w=0,D=A.length;w<D;w++){const F=A[w],Z=Array.isArray(F.value)?F.value:[F.value];for(let j=0,P=Z.length;j<P;j++){const U=Z[j],O=M(U),q=y%C,$=q%O.boundary,it=q+$;y+=$,it!==0&&C-it<O.storage&&(y+=C-it),F.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=O.storage}}}const b=y%C;return b>0&&(y+=C-b),m.__size=y,m.__cache={},this}function M(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(_.boundary=16,_.storage=m.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",m),_}function g(m){const _=m.target;_.removeEventListener("dispose",g);const y=r.indexOf(_.__bindingPointIndex);r.splice(y,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete s[_.id]}function f(){for(const m in a)e.deleteBuffer(a[m]);r=[],a={},s={}}return{bind:l,update:c,dispose:f}}const fC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mi=null;function dC(){return mi===null&&(mi=new eT(fC,16,16,xs,sa),mi.name="DFG_LUT",mi.minFilter=dn,mi.magFilter=dn,mi.wrapS=ji,mi.wrapT=ji,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}class hC{constructor(t={}){const{canvas:n=Nb(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=$n}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=r;const M=p,g=new Set([jp,Yp,qp]),f=new Set([$n,Ai,Ho,Vo,Xp,Wp]),m=new Uint32Array(4),_=new Int32Array(4),y=new z;let C=null,b=null;const R=[],x=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let D=!1,F=null;this._outputColorSpace=Wn;let Z=0,j=0,P=null,U=-1,O=null;const q=new ze,$=new ze;let it=null;const vt=new de(0);let Mt=0,Vt=n.width,kt=n.height,wt=1,K=null,ht=null;const ct=new ze(0,0,Vt,kt),Rt=new ze(0,0,Vt,kt);let Nt=!1;const Ct=new AS;let ee=!1,Xt=!1;const re=new qe,he=new z,Gt=new ze,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function we(){return P===null?wt:1}let L=i;function De(E,I){return n.getContext(E,I)}try{const E={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vp}`),n.addEventListener("webglcontextlost",nt,!1),n.addEventListener("webglcontextrestored",bt,!1),n.addEventListener("webglcontextcreationerror",It,!1),L===null){const I="webgl2";if(L=De(I,E),L===null)throw De(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw te("WebGLRenderer: "+E.message),E}let Wt,le,ft,oe,T,S,G,J,et,rt,V,H,Y,st,pt,ot,at,Lt,zt,ne,N,lt,Q;function xt(){Wt=new dR(L),Wt.init(),N=new iC(L,Wt),le=new aR(L,Wt,t,N),ft=new eC(L,Wt),le.reversedDepthBuffer&&u&&ft.buffers.depth.setReversed(!0),oe=new mR(L),T=new H3,S=new nC(L,Wt,ft,T,le,N,oe),G=new fR(w),J=new xT(L),lt=new nR(L,J),et=new hR(L,J,oe,lt),rt=new _R(L,et,J,lt,oe),Lt=new gR(L,le,S),pt=new sR(T),V=new G3(w,G,Wt,le,lt,pt),H=new cC(w,T),Y=new k3,st=new Z3(Wt),at=new eR(w,G,ft,rt,v,l),ot=new tC(w,rt,le),Q=new uC(L,oe,le,ft),zt=new iR(L,Wt,oe),ne=new pR(L,Wt,oe),oe.programs=V.programs,w.capabilities=le,w.extensions=Wt,w.properties=T,w.renderLists=Y,w.shadowMap=ot,w.state=ft,w.info=oe}xt(),M!==$n&&(A=new xR(M,n.width,n.height,a,s));const ut=new oC(w,L);this.xr=ut,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Wt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Wt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return wt},this.setPixelRatio=function(E){E!==void 0&&(wt=E,this.setSize(Vt,kt,!1))},this.getSize=function(E){return E.set(Vt,kt)},this.setSize=function(E,I,W=!0){if(ut.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}Vt=E,kt=I,n.width=Math.floor(E*wt),n.height=Math.floor(I*wt),W===!0&&(n.style.width=E+"px",n.style.height=I+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(Vt*wt,kt*wt).floor()},this.setDrawingBufferSize=function(E,I,W){Vt=E,kt=I,wt=W,n.width=Math.floor(E*W),n.height=Math.floor(I*W),this.setViewport(0,0,E,I)},this.setEffects=function(E){if(M===$n){te("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let I=0;I<E.length;I++)if(E[I].isOutputPass===!0){Dt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(q)},this.getViewport=function(E){return E.copy(ct)},this.setViewport=function(E,I,W,k){E.isVector4?ct.set(E.x,E.y,E.z,E.w):ct.set(E,I,W,k),ft.viewport(q.copy(ct).multiplyScalar(wt).round())},this.getScissor=function(E){return E.copy(Rt)},this.setScissor=function(E,I,W,k){E.isVector4?Rt.set(E.x,E.y,E.z,E.w):Rt.set(E,I,W,k),ft.scissor($.copy(Rt).multiplyScalar(wt).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(E){ft.setScissorTest(Nt=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){ht=E},this.getClearColor=function(E){return E.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(E=!0,I=!0,W=!0){let k=0;if(E){let X=!1;if(P!==null){const _t=P.texture.format;X=g.has(_t)}if(X){const _t=P.texture.type,yt=f.has(_t),gt=at.getClearColor(),Et=at.getClearAlpha(),Tt=gt.r,Bt=gt.g,qt=gt.b;yt?(m[0]=Tt,m[1]=Bt,m[2]=qt,m[3]=Et,L.clearBufferuiv(L.COLOR,0,m)):(_[0]=Tt,_[1]=Bt,_[2]=qt,_[3]=Et,L.clearBufferiv(L.COLOR,0,_))}else k|=L.COLOR_BUFFER_BIT}I&&(k|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){n.removeEventListener("webglcontextlost",nt,!1),n.removeEventListener("webglcontextrestored",bt,!1),n.removeEventListener("webglcontextcreationerror",It,!1),at.dispose(),Y.dispose(),st.dispose(),T.dispose(),G.dispose(),rt.dispose(),lt.dispose(),Q.dispose(),V.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",lm),ut.removeEventListener("sessionend",cm),Ya.stop()};function nt(E){E.preventDefault(),$g("WebGLRenderer: Context Lost."),D=!0}function bt(){$g("WebGLRenderer: Context Restored."),D=!1;const E=oe.autoReset,I=ot.enabled,W=ot.autoUpdate,k=ot.needsUpdate,X=ot.type;xt(),oe.autoReset=E,ot.enabled=I,ot.autoUpdate=W,ot.needsUpdate=k,ot.type=X}function It(E){te("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Pe(E){const I=E.target;I.removeEventListener("dispose",Pe),pe(I)}function pe(E){Ui(E),T.remove(E)}function Ui(E){const I=T.get(E).programs;I!==void 0&&(I.forEach(function(W){V.releaseProgram(W)}),E.isShaderMaterial&&V.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,W,k,X,_t){I===null&&(I=Oe);const yt=X.isMesh&&X.matrixWorld.determinant()<0,gt=KS(E,I,W,k,X);ft.setMaterial(k,yt);let Et=W.index,Tt=1;if(k.wireframe===!0){if(Et=et.getWireframeAttribute(W),Et===void 0)return;Tt=2}const Bt=W.drawRange,qt=W.attributes.position;let At=Bt.start*Tt,me=(Bt.start+Bt.count)*Tt;_t!==null&&(At=Math.max(At,_t.start*Tt),me=Math.min(me,(_t.start+_t.count)*Tt)),Et!==null?(At=Math.max(At,0),me=Math.min(me,Et.count)):qt!=null&&(At=Math.max(At,0),me=Math.min(me,qt.count));const Ie=me-At;if(Ie<0||Ie===1/0)return;lt.setup(X,k,gt,W,Et);let Ue,xe=zt;if(Et!==null&&(Ue=J.get(Et),xe=ne,xe.setIndex(Ue)),X.isMesh)k.wireframe===!0?(ft.setLineWidth(k.wireframeLinewidth*we()),xe.setMode(L.LINES)):xe.setMode(L.TRIANGLES);else if(X.isLine){let cn=k.linewidth;cn===void 0&&(cn=1),ft.setLineWidth(cn*we()),X.isLineSegments?xe.setMode(L.LINES):X.isLineLoop?xe.setMode(L.LINE_LOOP):xe.setMode(L.LINE_STRIP)}else X.isPoints?xe.setMode(L.POINTS):X.isSprite&&xe.setMode(L.TRIANGLES);if(X.isBatchedMesh)if(Wt.get("WEBGL_multi_draw"))xe.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const cn=X._multiDrawStarts,St=X._multiDrawCounts,Cn=X._multiDrawCount,$t=Et?J.get(Et).bytesPerElement:1,Vn=T.get(k).currentProgram.getUniforms();for(let hi=0;hi<Cn;hi++)Vn.setValue(L,"_gl_DrawID",hi),xe.render(cn[hi]/$t,St[hi])}else if(X.isInstancedMesh)xe.renderInstances(At,Ie,X.count);else if(W.isInstancedBufferGeometry){const cn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,St=Math.min(W.instanceCount,cn);xe.renderInstances(At,Ie,St)}else xe.render(At,Ie)};function di(E,I,W){E.transparent===!0&&E.side===Xi&&E.forceSinglePass===!1?(E.side=bn,E.needsUpdate=!0,ol(E,I,W),E.side=Xa,E.needsUpdate=!0,ol(E,I,W),E.side=Xi):ol(E,I,W)}this.compile=function(E,I,W=null){W===null&&(W=E),b=st.get(W),b.init(I),x.push(b),W.traverseVisible(function(X){X.isLight&&X.layers.test(I.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),E!==W&&E.traverseVisible(function(X){X.isLight&&X.layers.test(I.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),b.setupLights();const k=new Set;return E.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const _t=X.material;if(_t)if(Array.isArray(_t))for(let yt=0;yt<_t.length;yt++){const gt=_t[yt];di(gt,W,X),k.add(gt)}else di(_t,W,X),k.add(_t)}),b=x.pop(),k},this.compileAsync=function(E,I,W=null){const k=this.compile(E,I,W);return new Promise(X=>{function _t(){if(k.forEach(function(yt){T.get(yt).currentProgram.isReady()&&k.delete(yt)}),k.size===0){X(E);return}setTimeout(_t,10)}Wt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Cu=null;function jS(E){Cu&&Cu(E)}function lm(){Ya.stop()}function cm(){Ya.start()}const Ya=new LS;Ya.setAnimationLoop(jS),typeof self<"u"&&Ya.setContext(self),this.setAnimationLoop=function(E){Cu=E,ut.setAnimationLoop(E),E===null?Ya.stop():Ya.start()},ut.addEventListener("sessionstart",lm),ut.addEventListener("sessionend",cm),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(E,I);const W=ut.enabled===!0&&ut.isPresenting===!0,k=A!==null&&(P===null||W)&&A.begin(w,P);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(I),I=ut.getCamera()),E.isScene===!0&&E.onBeforeRender(w,E,I,P),b=st.get(E,x.length),b.init(I),b.state.textureUnits=S.getTextureUnits(),x.push(b),re.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ct.setFromProjectionMatrix(re,yi,I.reversedDepth),Xt=this.localClippingEnabled,ee=pt.init(this.clippingPlanes,Xt),C=Y.get(E,R.length),C.init(),R.push(C),ut.enabled===!0&&ut.isPresenting===!0){const yt=w.xr.getDepthSensingMesh();yt!==null&&wu(yt,I,-1/0,w.sortObjects)}wu(E,I,0,w.sortObjects),C.finish(),w.sortObjects===!0&&C.sort(K,ht),ve=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,ve&&at.addToRenderList(C,E),this.info.render.frame++,ee===!0&&pt.beginShadows();const X=b.state.shadowsArray;if(ot.render(X,E,I),ee===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&A.hasRenderPass())===!1){const yt=C.opaque,gt=C.transmissive;if(b.setupLights(),I.isArrayCamera){const Et=I.cameras;if(gt.length>0)for(let Tt=0,Bt=Et.length;Tt<Bt;Tt++){const qt=Et[Tt];fm(yt,gt,E,qt)}ve&&at.render(E);for(let Tt=0,Bt=Et.length;Tt<Bt;Tt++){const qt=Et[Tt];um(C,E,qt,qt.viewport)}}else gt.length>0&&fm(yt,gt,E,I),ve&&at.render(E),um(C,E,I)}P!==null&&j===0&&(S.updateMultisampleRenderTarget(P),S.updateRenderTargetMipmap(P)),k&&A.end(w),E.isScene===!0&&E.onAfterRender(w,E,I),lt.resetDefaultState(),U=-1,O=null,x.pop(),x.length>0?(b=x[x.length-1],S.setTextureUnits(b.state.textureUnits),ee===!0&&pt.setGlobalState(w.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?C=R[R.length-1]:C=null,F!==null&&F.renderEnd()};function wu(E,I,W,k){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLightProbeGrid)b.pushLightProbeGrid(E);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ct.intersectsSprite(E)){k&&Gt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(re);const yt=rt.update(E),gt=E.material;gt.visible&&C.push(E,yt,gt,W,Gt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ct.intersectsObject(E))){const yt=rt.update(E),gt=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Gt.copy(E.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Gt.copy(yt.boundingSphere.center)),Gt.applyMatrix4(E.matrixWorld).applyMatrix4(re)),Array.isArray(gt)){const Et=yt.groups;for(let Tt=0,Bt=Et.length;Tt<Bt;Tt++){const qt=Et[Tt],At=gt[qt.materialIndex];At&&At.visible&&C.push(E,yt,At,W,Gt.z,qt)}}else gt.visible&&C.push(E,yt,gt,W,Gt.z,null)}}const _t=E.children;for(let yt=0,gt=_t.length;yt<gt;yt++)wu(_t[yt],I,W,k)}function um(E,I,W,k){const{opaque:X,transmissive:_t,transparent:yt}=E;b.setupLightsView(W),ee===!0&&pt.setGlobalState(w.clippingPlanes,W),k&&ft.viewport(q.copy(k)),X.length>0&&rl(X,I,W),_t.length>0&&rl(_t,I,W),yt.length>0&&rl(yt,I,W),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function fm(E,I,W,k){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[k.id]===void 0){const At=Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[k.id]=new bi(1,1,{generateMipmaps:!0,type:At?sa:$n,minFilter:rs,samples:Math.max(4,le.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace})}const _t=b.state.transmissionRenderTarget[k.id],yt=k.viewport||q;_t.setSize(yt.z*w.transmissionResolutionScale,yt.w*w.transmissionResolutionScale);const gt=w.getRenderTarget(),Et=w.getActiveCubeFace(),Tt=w.getActiveMipmapLevel();w.setRenderTarget(_t),w.getClearColor(vt),Mt=w.getClearAlpha(),Mt<1&&w.setClearColor(16777215,.5),w.clear(),ve&&at.render(W);const Bt=w.toneMapping;w.toneMapping=Ei;const qt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),b.setupLightsView(k),ee===!0&&pt.setGlobalState(w.clippingPlanes,k),rl(E,W,k),S.updateMultisampleRenderTarget(_t),S.updateRenderTargetMipmap(_t),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let me=0,Ie=I.length;me<Ie;me++){const Ue=I[me],{object:xe,geometry:cn,material:St,group:Cn}=Ue;if(St.side===Xi&&xe.layers.test(k.layers)){const $t=St.side;St.side=bn,St.needsUpdate=!0,dm(xe,W,k,cn,St,Cn),St.side=$t,St.needsUpdate=!0,At=!0}}At===!0&&(S.updateMultisampleRenderTarget(_t),S.updateRenderTargetMipmap(_t))}w.setRenderTarget(gt,Et,Tt),w.setClearColor(vt,Mt),qt!==void 0&&(k.viewport=qt),w.toneMapping=Bt}function rl(E,I,W){const k=I.isScene===!0?I.overrideMaterial:null;for(let X=0,_t=E.length;X<_t;X++){const yt=E[X],{object:gt,geometry:Et,group:Tt}=yt;let Bt=yt.material;Bt.allowOverride===!0&&k!==null&&(Bt=k),gt.layers.test(W.layers)&&dm(gt,I,W,Et,Bt,Tt)}}function dm(E,I,W,k,X,_t){E.onBeforeRender(w,I,W,k,X,_t),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(w,I,W,k,E,_t),X.transparent===!0&&X.side===Xi&&X.forceSinglePass===!1?(X.side=bn,X.needsUpdate=!0,w.renderBufferDirect(W,I,k,X,E,_t),X.side=Xa,X.needsUpdate=!0,w.renderBufferDirect(W,I,k,X,E,_t),X.side=Xi):w.renderBufferDirect(W,I,k,X,E,_t),E.onAfterRender(w,I,W,k,X,_t)}function ol(E,I,W){I.isScene!==!0&&(I=Oe);const k=T.get(E),X=b.state.lights,_t=b.state.shadowsArray,yt=X.state.version,gt=V.getParameters(E,X.state,_t,I,W,b.state.lightProbeGridArray),Et=V.getProgramCacheKey(gt);let Tt=k.programs;k.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?I.environment:null,k.fog=I.fog;const Bt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;k.envMap=G.get(E.envMap||k.environment,Bt),k.envMapRotation=k.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Tt===void 0&&(E.addEventListener("dispose",Pe),Tt=new Map,k.programs=Tt);let qt=Tt.get(Et);if(qt!==void 0){if(k.currentProgram===qt&&k.lightsStateVersion===yt)return pm(E,gt),qt}else gt.uniforms=V.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,W,gt),E.onBeforeCompile(gt,w),qt=V.acquireProgram(gt,Et),Tt.set(Et,qt),k.uniforms=gt.uniforms;const At=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(At.clippingPlanes=pt.uniform),pm(E,gt),k.needsLights=JS(E),k.lightsStateVersion=yt,k.needsLights&&(At.ambientLightColor.value=X.state.ambient,At.lightProbe.value=X.state.probe,At.directionalLights.value=X.state.directional,At.directionalLightShadows.value=X.state.directionalShadow,At.spotLights.value=X.state.spot,At.spotLightShadows.value=X.state.spotShadow,At.rectAreaLights.value=X.state.rectArea,At.ltc_1.value=X.state.rectAreaLTC1,At.ltc_2.value=X.state.rectAreaLTC2,At.pointLights.value=X.state.point,At.pointLightShadows.value=X.state.pointShadow,At.hemisphereLights.value=X.state.hemi,At.directionalShadowMatrix.value=X.state.directionalShadowMatrix,At.spotLightMatrix.value=X.state.spotLightMatrix,At.spotLightMap.value=X.state.spotLightMap,At.pointShadowMatrix.value=X.state.pointShadowMatrix),k.lightProbeGrid=b.state.lightProbeGridArray.length>0,k.currentProgram=qt,k.uniformsList=null,qt}function hm(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=vc.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function pm(E,I){const W=T.get(E);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function ZS(E,I){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(I.matrixWorld);for(let W=0,k=E.length;W<k;W++){const X=E[W];if(X.texture!==null&&X.boundingBox.containsPoint(y))return X}return null}function KS(E,I,W,k,X){I.isScene!==!0&&(I=Oe),S.resetTextureUnits();const _t=I.fog,yt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?I.environment:null,gt=P===null?w.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Kt.workingColorSpace,Et=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Tt=G.get(k.envMap||yt,Et),Bt=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,qt=!!W.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),At=!!W.morphAttributes.position,me=!!W.morphAttributes.normal,Ie=!!W.morphAttributes.color;let Ue=Ei;k.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ue=w.toneMapping);const xe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,cn=xe!==void 0?xe.length:0,St=T.get(k),Cn=b.state.lights;if(ee===!0&&(Xt===!0||E!==O)){const Me=E===O&&k.id===U;pt.setState(k,E,Me)}let $t=!1;k.version===St.__version?(St.needsLights&&St.lightsStateVersion!==Cn.state.version||St.outputColorSpace!==gt||X.isBatchedMesh&&St.batching===!1||!X.isBatchedMesh&&St.batching===!0||X.isBatchedMesh&&St.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&St.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&St.instancing===!1||!X.isInstancedMesh&&St.instancing===!0||X.isSkinnedMesh&&St.skinning===!1||!X.isSkinnedMesh&&St.skinning===!0||X.isInstancedMesh&&St.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&St.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&St.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&St.instancingMorph===!1&&X.morphTexture!==null||St.envMap!==Tt||k.fog===!0&&St.fog!==_t||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==pt.numPlanes||St.numIntersection!==pt.numIntersection)||St.vertexAlphas!==Bt||St.vertexTangents!==qt||St.morphTargets!==At||St.morphNormals!==me||St.morphColors!==Ie||St.toneMapping!==Ue||St.morphTargetsCount!==cn||!!St.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&($t=!0):($t=!0,St.__version=k.version);let Vn=St.currentProgram;$t===!0&&(Vn=ol(k,I,X),F&&k.isNodeMaterial&&F.onUpdateProgram(k,Vn,St));let hi=!1,la=!1,Cs=!1;const Se=Vn.getUniforms(),Be=St.uniforms;if(ft.useProgram(Vn.program)&&(hi=!0,la=!0,Cs=!0),k.id!==U&&(U=k.id,la=!0),St.needsLights){const Me=ZS(b.state.lightProbeGridArray,X);St.lightProbeGrid!==Me&&(St.lightProbeGrid=Me,la=!0)}if(hi||O!==E){ft.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Se.setValue(L,"projectionMatrix",E.projectionMatrix),Se.setValue(L,"viewMatrix",E.matrixWorldInverse);const ua=Se.map.cameraPosition;ua!==void 0&&ua.setValue(L,he.setFromMatrixPosition(E.matrixWorld)),le.logarithmicDepthBuffer&&Se.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Se.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),O!==E&&(O=E,la=!0,Cs=!0)}if(St.needsLights&&(Cn.state.directionalShadowMap.length>0&&Se.setValue(L,"directionalShadowMap",Cn.state.directionalShadowMap,S),Cn.state.spotShadowMap.length>0&&Se.setValue(L,"spotShadowMap",Cn.state.spotShadowMap,S),Cn.state.pointShadowMap.length>0&&Se.setValue(L,"pointShadowMap",Cn.state.pointShadowMap,S)),X.isSkinnedMesh){Se.setOptional(L,X,"bindMatrix"),Se.setOptional(L,X,"bindMatrixInverse");const Me=X.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),Se.setValue(L,"boneTexture",Me.boneTexture,S))}X.isBatchedMesh&&(Se.setOptional(L,X,"batchingTexture"),Se.setValue(L,"batchingTexture",X._matricesTexture,S),Se.setOptional(L,X,"batchingIdTexture"),Se.setValue(L,"batchingIdTexture",X._indirectTexture,S),Se.setOptional(L,X,"batchingColorTexture"),X._colorsTexture!==null&&Se.setValue(L,"batchingColorTexture",X._colorsTexture,S));const ca=W.morphAttributes;if((ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0)&&Lt.update(X,W,Vn),(la||St.receiveShadow!==X.receiveShadow)&&(St.receiveShadow=X.receiveShadow,Se.setValue(L,"receiveShadow",X.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&I.environment!==null&&(Be.envMapIntensity.value=I.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=dC()),la){if(Se.setValue(L,"toneMappingExposure",w.toneMappingExposure),St.needsLights&&QS(Be,Cs),_t&&k.fog===!0&&H.refreshFogUniforms(Be,_t),H.refreshMaterialUniforms(Be,k,wt,kt,b.state.transmissionRenderTarget[E.id]),St.needsLights&&St.lightProbeGrid){const Me=St.lightProbeGrid;Be.probesSH.value=Me.texture,Be.probesMin.value.copy(Me.boundingBox.min),Be.probesMax.value.copy(Me.boundingBox.max),Be.probesResolution.value.copy(Me.resolution)}vc.upload(L,hm(St),Be,S)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(vc.upload(L,hm(St),Be,S),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Se.setValue(L,"center",X.center),Se.setValue(L,"modelViewMatrix",X.modelViewMatrix),Se.setValue(L,"normalMatrix",X.normalMatrix),Se.setValue(L,"modelMatrix",X.matrixWorld),k.uniformsGroups!==void 0){const Me=k.uniformsGroups;for(let ua=0,ws=Me.length;ua<ws;ua++){const mm=Me[ua];Q.update(mm,Vn),Q.bind(mm,Vn)}}return Vn}function QS(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function JS(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,I,W){const k=T.get(E);k.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),T.get(E.texture).__webglTexture=I,T.get(E.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:W,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,I){const W=T.get(E);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0};const $S=L.createFramebuffer();this.setRenderTarget=function(E,I=0,W=0){P=E,Z=I,j=W;let k=null,X=!1,_t=!1;if(E){const gt=T.get(E);if(gt.__useDefaultFramebuffer!==void 0){ft.bindFramebuffer(L.FRAMEBUFFER,gt.__webglFramebuffer),q.copy(E.viewport),$.copy(E.scissor),it=E.scissorTest,ft.viewport(q),ft.scissor($),ft.setScissorTest(it),U=-1;return}else if(gt.__webglFramebuffer===void 0)S.setupRenderTarget(E);else if(gt.__hasExternalTextures)S.rebindTextures(E,T.get(E.texture).__webglTexture,T.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Bt=E.depthTexture;if(gt.__boundDepthTexture!==Bt){if(Bt!==null&&T.has(Bt)&&(E.width!==Bt.image.width||E.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(E)}}const Et=E.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(_t=!0);const Tt=T.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Tt[I])?k=Tt[I][W]:k=Tt[I],X=!0):E.samples>0&&S.useMultisampledRTT(E)===!1?k=T.get(E).__webglMultisampledFramebuffer:Array.isArray(Tt)?k=Tt[W]:k=Tt,q.copy(E.viewport),$.copy(E.scissor),it=E.scissorTest}else q.copy(ct).multiplyScalar(wt).floor(),$.copy(Rt).multiplyScalar(wt).floor(),it=Nt;if(W!==0&&(k=$S),ft.bindFramebuffer(L.FRAMEBUFFER,k)&&ft.drawBuffers(E,k),ft.viewport(q),ft.scissor($),ft.setScissorTest(it),X){const gt=T.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,gt.__webglTexture,W)}else if(_t){const gt=I;for(let Et=0;Et<E.textures.length;Et++){const Tt=T.get(E.textures[Et]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Et,Tt.__webglTexture,W,gt)}}else if(E!==null&&W!==0){const gt=T.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,gt.__webglTexture,W)}U=-1},this.readRenderTargetPixels=function(E,I,W,k,X,_t,yt,gt=0){if(!(E&&E.isWebGLRenderTarget)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=T.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(Et=Et[yt]),Et){ft.bindFramebuffer(L.FRAMEBUFFER,Et);try{const Tt=E.textures[gt],Bt=Tt.format,qt=Tt.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+gt),!le.textureFormatReadable(Bt)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(qt)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-k&&W>=0&&W<=E.height-X&&L.readPixels(I,W,k,X,N.convert(Bt),N.convert(qt),_t)}finally{const Tt=P!==null?T.get(P).__webglFramebuffer:null;ft.bindFramebuffer(L.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(E,I,W,k,X,_t,yt,gt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=T.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(Et=Et[yt]),Et)if(I>=0&&I<=E.width-k&&W>=0&&W<=E.height-X){ft.bindFramebuffer(L.FRAMEBUFFER,Et);const Tt=E.textures[gt],Bt=Tt.format,qt=Tt.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+gt),!le.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const At=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,At),L.bufferData(L.PIXEL_PACK_BUFFER,_t.byteLength,L.STREAM_READ),L.readPixels(I,W,k,X,N.convert(Bt),N.convert(qt),0);const me=P!==null?T.get(P).__webglFramebuffer:null;ft.bindFramebuffer(L.FRAMEBUFFER,me);const Ie=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Lb(L,Ie,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,At),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,_t),L.deleteBuffer(At),L.deleteSync(Ie),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,I=null,W=0){const k=Math.pow(2,-W),X=Math.floor(E.image.width*k),_t=Math.floor(E.image.height*k),yt=I!==null?I.x:0,gt=I!==null?I.y:0;S.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,yt,gt,X,_t),ft.unbindTexture()};const ty=L.createFramebuffer(),ey=L.createFramebuffer();this.copyTextureToTexture=function(E,I,W=null,k=null,X=0,_t=0){let yt,gt,Et,Tt,Bt,qt,At,me,Ie;const Ue=E.isCompressedTexture?E.mipmaps[_t]:E.image;if(W!==null)yt=W.max.x-W.min.x,gt=W.max.y-W.min.y,Et=W.isBox3?W.max.z-W.min.z:1,Tt=W.min.x,Bt=W.min.y,qt=W.isBox3?W.min.z:0;else{const Be=Math.pow(2,-X);yt=Math.floor(Ue.width*Be),gt=Math.floor(Ue.height*Be),E.isDataArrayTexture?Et=Ue.depth:E.isData3DTexture?Et=Math.floor(Ue.depth*Be):Et=1,Tt=0,Bt=0,qt=0}k!==null?(At=k.x,me=k.y,Ie=k.z):(At=0,me=0,Ie=0);const xe=N.convert(I.format),cn=N.convert(I.type);let St;I.isData3DTexture?(S.setTexture3D(I,0),St=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(S.setTexture2DArray(I,0),St=L.TEXTURE_2D_ARRAY):(S.setTexture2D(I,0),St=L.TEXTURE_2D),ft.activeTexture(L.TEXTURE0),ft.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),ft.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),ft.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const Cn=ft.getParameter(L.UNPACK_ROW_LENGTH),$t=ft.getParameter(L.UNPACK_IMAGE_HEIGHT),Vn=ft.getParameter(L.UNPACK_SKIP_PIXELS),hi=ft.getParameter(L.UNPACK_SKIP_ROWS),la=ft.getParameter(L.UNPACK_SKIP_IMAGES);ft.pixelStorei(L.UNPACK_ROW_LENGTH,Ue.width),ft.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ue.height),ft.pixelStorei(L.UNPACK_SKIP_PIXELS,Tt),ft.pixelStorei(L.UNPACK_SKIP_ROWS,Bt),ft.pixelStorei(L.UNPACK_SKIP_IMAGES,qt);const Cs=E.isDataArrayTexture||E.isData3DTexture,Se=I.isDataArrayTexture||I.isData3DTexture;if(E.isDepthTexture){const Be=T.get(E),ca=T.get(I),Me=T.get(Be.__renderTarget),ua=T.get(ca.__renderTarget);ft.bindFramebuffer(L.READ_FRAMEBUFFER,Me.__webglFramebuffer),ft.bindFramebuffer(L.DRAW_FRAMEBUFFER,ua.__webglFramebuffer);for(let ws=0;ws<Et;ws++)Cs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,T.get(E).__webglTexture,X,qt+ws),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,T.get(I).__webglTexture,_t,Ie+ws)),L.blitFramebuffer(Tt,Bt,yt,gt,At,me,yt,gt,L.DEPTH_BUFFER_BIT,L.NEAREST);ft.bindFramebuffer(L.READ_FRAMEBUFFER,null),ft.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(X!==0||E.isRenderTargetTexture||T.has(E)){const Be=T.get(E),ca=T.get(I);ft.bindFramebuffer(L.READ_FRAMEBUFFER,ty),ft.bindFramebuffer(L.DRAW_FRAMEBUFFER,ey);for(let Me=0;Me<Et;Me++)Cs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Be.__webglTexture,X,qt+Me):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Be.__webglTexture,X),Se?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ca.__webglTexture,_t,Ie+Me):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ca.__webglTexture,_t),X!==0?L.blitFramebuffer(Tt,Bt,yt,gt,At,me,yt,gt,L.COLOR_BUFFER_BIT,L.NEAREST):Se?L.copyTexSubImage3D(St,_t,At,me,Ie+Me,Tt,Bt,yt,gt):L.copyTexSubImage2D(St,_t,At,me,Tt,Bt,yt,gt);ft.bindFramebuffer(L.READ_FRAMEBUFFER,null),ft.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Se?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(St,_t,At,me,Ie,yt,gt,Et,xe,cn,Ue.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(St,_t,At,me,Ie,yt,gt,Et,xe,Ue.data):L.texSubImage3D(St,_t,At,me,Ie,yt,gt,Et,xe,cn,Ue):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,_t,At,me,yt,gt,xe,cn,Ue.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,_t,At,me,Ue.width,Ue.height,xe,Ue.data):L.texSubImage2D(L.TEXTURE_2D,_t,At,me,yt,gt,xe,cn,Ue);ft.pixelStorei(L.UNPACK_ROW_LENGTH,Cn),ft.pixelStorei(L.UNPACK_IMAGE_HEIGHT,$t),ft.pixelStorei(L.UNPACK_SKIP_PIXELS,Vn),ft.pixelStorei(L.UNPACK_SKIP_ROWS,hi),ft.pixelStorei(L.UNPACK_SKIP_IMAGES,la),_t===0&&I.generateMipmaps&&L.generateMipmap(St),ft.unbindTexture()},this.initRenderTarget=function(E){T.get(E).__webglFramebuffer===void 0&&S.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),ft.unbindTexture()},this.resetState=function(){Z=0,j=0,P=null,ft.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Kt._getUnpackColorSpace()}}function HS(){const e=dt.useRef(null);return dt.useEffect(()=>{const t=e.current;if(!t)return;const n=new Zb,i=new Zn(45,window.innerWidth/window.innerHeight,.1,100);i.position.z=4.2;const a=new hC({alpha:!0,antialias:!0});a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setSize(window.innerWidth,window.innerHeight),a.setClearColor(0,0),t.appendChild(a.domElement);const s=new tm(.95,1),r=new rT(new lT(s),new RS({color:16722474,transparent:!0,opacity:.55}));n.add(r);const o=[];for(let d=0;d<3;d++){const u=new Ri(new em(1.35+d*.28,.012,8,96),new Jp({color:16722474,transparent:!0,opacity:.22-d*.05}));u.rotation.x=Math.PI/2+d*.18,u.rotation.y=d*.4,n.add(u),o.push(u)}let l=0;const c=()=>{r.rotation.x+=.0032,r.rotation.y+=.0048,o.forEach((d,u)=>{d.rotation.z+=.0018+u*6e-4}),a.render(n,i),l=requestAnimationFrame(c)};c();const h=()=>{const d=window.innerWidth,u=window.innerHeight;i.aspect=d/u,i.updateProjectionMatrix(),a.setSize(d,u)};return window.addEventListener("resize",h),()=>{cancelAnimationFrame(l),window.removeEventListener("resize",h),s.dispose(),r.geometry.dispose(),r.material.dispose(),o.forEach(d=>{d.geometry.dispose(),d.material.dispose()}),a.dispose(),t.removeChild(a.domElement)}},[]),B.jsx("div",{ref:e,className:"jerv-canvas","aria-hidden":"true"})}function pC(e){const t=new Worker(new URL("/GROVEE-STDIO/assets/sd.worker-BwefFosn.js",import.meta.url),{type:"module"});return t.addEventListener("message",n=>{e.onMessage(n.data)}),t}function no(e,t){e.postMessage(t)}const Y0=["What will you create today?","Describe your vision.","Turn words into images.","What scene do you imagine?","Let's bring your idea to life.","Create something unique.","Paint with prompts."],j0=[{id:"giant-moon-ocean",icon:"🌕",label:"Giant moon",prompt:"A giant moon above the ocean"},{id:"lighthouse-sunset",icon:"🗼",label:"Lighthouse sunset",prompt:"A lonely lighthouse at sunset"},{id:"castle-floating-island",icon:"🏰",label:"Floating island castle",prompt:"A castle on a floating island"},{id:"giant-whale-sky",icon:"🐋",label:"Sky whale",prompt:"A giant whale in the sky"},{id:"train-snowy-mountains",icon:"🚂",label:"Snowy mountain train",prompt:"A train crossing snowy mountains"},{id:"glowing-city-night",icon:"🌃",label:"Glowing city",prompt:"A glowing city at night"},{id:"spaceship-earth",icon:"🚀",label:"Spaceship over Earth",prompt:"A spaceship above Earth"},{id:"dragon-castle",icon:"🐉",label:"Dragon over castle",prompt:"A dragon flying over a castle"},{id:"futuristic-city-sunrise",icon:"🌅",label:"Futuristic sunrise",prompt:"A futuristic city at sunrise"},{id:"jungle-waterfall",icon:"💧",label:"Jungle waterfall",prompt:"A waterfall in a hidden jungle"},{id:"giant-tree-clouds",icon:"🌳",label:"Tree in clouds",prompt:"A giant tree in the clouds"},{id:"storm-ship",icon:"⛵",label:"Storm ship",prompt:"A sailing ship in a storm"},{id:"forest-portal",icon:"🌀",label:"Forest portal",prompt:"A mysterious portal in the forest"},{id:"desert-robot",icon:"🤖",label:"Desert robot",prompt:"A robot walking in the desert"},{id:"neon-street-rain",icon:"🌆",label:"Neon after rain",prompt:"A neon street after rain"},{id:"cliff-house",icon:"🏠",label:"Cliff house",prompt:"A house on a mountain cliff"},{id:"crystal-cave",icon:"💎",label:"Crystal cave",prompt:"A crystal cave underground"},{id:"giant-planet-sky",icon:"🪐",label:"Giant planet",prompt:"A giant planet in the sky"},{id:"peaceful-lake-dawn",icon:"🏞️",label:"Lake at dawn",prompt:"A peaceful lake at dawn"},{id:"flying-island-clouds",icon:"☁️",label:"Flying island",prompt:"A flying island above the clouds"}],mC=11e3,VS=90,gC=520,_C=620;function vC(e=3){return gC+VS*Math.max(0,e-1)}function xC(e=3){return _C+VS*Math.max(0,e-1)}function Bh(e=3,t=[]){const n=new Set(t);let i=j0.filter(r=>!n.has(r.id));i.length<e&&(i=[...j0]);const a=[],s=[...i];for(;a.length<e&&s.length>0;){const r=Math.floor(Math.random()*s.length);a.push(s[r]),s.splice(r,1)}return a}function SC(e=Y0){const t=e.length?e:Y0;return{headline:t[Math.floor(Math.random()*t.length)],suggestions:Bh(3)}}const yC=!0,MC="sd15",Rs={sd15:{hfId:"ehristoforu/stable-diffusion-v1-5-tiny",estimatedBytes:2064947141,label:"Stable Diffusion 1.5",shortLabel:"SD 1.5",resolution:"512×512"}};function EC(e){return Rs.sd15.estimatedBytes}function bC(e,t){return e==="start"||e==="loading"&&t===0}function TC(e,t){return e==="loading"&&t.length>0}const ko="blurry, low quality, distorted, deformed, ugly, bad anatomy, extra limbs, watermark, text, logo, cartoon, sketch, flat colors",AC={photoreal:"photorealistic, professional photography, natural lighting, high detail, sharp focus, realistic textures",portrait:"cinematic portrait, soft studio lighting, shallow depth of field, natural skin texture, expressive eyes",product:"commercial product photography, studio lighting, clean background, accurate shadows, crisp details",landscape:"landscape photography, golden hour light, atmospheric depth, vivid natural colors, wide composition",anime:"anime illustration, clean line art, vibrant colors, detailed background, studio ghibli inspired"},RC={photoreal:"cartoon, illustration, painting, 3d render, plastic skin, oversaturated",portrait:"bad face, asymmetrical eyes, crossed eyes, extra teeth, plastic skin, deformed hands",product:"cluttered background, wrong shadows, floating object, messy composition",landscape:"flat lighting, dull colors, horizon tilt, oversharpened",anime:"3d render, realistic photo, western cartoon, photorealistic"},CC="photorealistic, high detail, sharp focus, professional quality, natural lighting";function wC(e){return e.trim().split(/\s+/).filter(Boolean).length<8||e.trim().length<40}function DC(e,t,n="photoreal"){const i=e.trim();if(!i)return{prompt:"",negativePrompt:""};const a=[i];n!=="none"?a.push(AC[n]):wC(i)&&a.push(CC);const s=[];return t.trim()&&s.push(t.trim()),n!=="none"&&s.push(RC[n]),{prompt:a.join(", "),negativePrompt:s.join(", ")}}function UC(e,t,n){return DC(e,n,t.style)}const NC=/[\u0590-\u05FF]/;function LC(e){return NC.test(e)}async function Z0(e){const t=e.trim();if(!t||!LC(t))return t;try{const n=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(t)}`,i=await fetch(n);return i.ok&&((await i.json())[0]??[]).map(r=>(r==null?void 0:r[0])??"").join("").trim()||t}catch{return t}}async function OC(e,t){const[n,i]=await Promise.all([Z0(e),Z0(t)]);return{positive:n,negative:i}}const K0="A stunning princess from Kabul in red and white traditional clothing, blue eyes, brown hair, soft natural lighting, photorealistic portrait, high detail, sharp focus",Zl={numInferenceSteps:20,guidanceScale:7.5,height:512,width:512},Ao={guidanceScale:Zl.guidanceScale,numInferenceSteps:Zl.numInferenceSteps,height:Zl.height,width:Zl.width,style:"photoreal"},uo="janusgrove-settings-",Fh="janusgrove-negative-prompt",PC=[`${uo}sd15`,`${uo}sana`,`${uo}flux`,`${uo}janus`];function kS(e){return`${uo}${e}`}function Kl(e,t,n){return Math.min(n,Math.max(t,e))}function IC(){if(typeof localStorage>"u")return ko;for(const e of PC)try{const t=localStorage.getItem(e);if(!t)continue;const n=JSON.parse(t);if(typeof n.negativePrompt=="string")return n.negativePrompt}catch{}return ko}function BC(){if(typeof localStorage>"u")return ko;try{const e=localStorage.getItem(Fh);if(e!==null)return e;const t=IC();return localStorage.setItem(Fh,t),t}catch{return ko}}function FC(e){typeof localStorage>"u"||localStorage.setItem(Fh,e)}function XS(e){const t=Ao;if(!e)return{...t};const n=Kl(Math.round(Number(e.height??t.height)),256,768),i=Kl(Math.round(Number(e.width??t.width)),256,768);return{guidanceScale:Kl(Number(e.guidanceScale??t.guidanceScale),1,20),numInferenceSteps:Kl(Math.round(Number(e.numInferenceSteps??t.numInferenceSteps)),5,50),height:n-n%64,width:i-i%64,style:e.style??t.style}}function jf(e){if(typeof localStorage>"u")return{...Ao};try{const t=localStorage.getItem(kS(e));return t?XS(JSON.parse(t)):{...Ao}}catch{return{...Ao}}}function zC(e,t){typeof localStorage>"u"||localStorage.setItem(kS(e),JSON.stringify(XS(t)))}function GC(e){return{numInferenceSteps:e.numInferenceSteps,guidanceScale:e.guidanceScale,height:e.height,width:e.width}}function HC(e){return`CFG ${e.guidanceScale.toFixed(1)} · ${e.numInferenceSteps} steps`}const nm="GROVEE STDIO",VC="grovee-stdio",WS="grovee-stdio-locale",kC={he:{app:{tagline:"SD 1.5 // מנוע דפדפן",mark:"GE"},intro:{typewriter:["מערכת מוכנה להפעלה...","טוען מנוע יצירת תמונות...","אני ממתין להוראותיך.","SD 1.5 · WebGPU · ללא התקנה"],webgpuWarn:"WebGPU לא זוהה — WASM עלול להיות איטי.",modelMeta:"512×512 · WebGPU · נשמר ב-cache אחרי טעינה ראשונה",initialize:"אתחול מודל",standby:"> המתנה",firstLoadNote:"הכל רץ בדפדפן — ללא התקנה. טעינה ראשונה בלבד (~2GB ל-cache). ביקור חוזר: שניות."},topBar:{browserStudio:"סטודיו דפדפן",webgpuOn:"WebGPU",webgpuOff:"WASM",langHe:"עב",langEn:"EN"},studio:{memoryOk:"זיכרון",model:"מודל",enterPrompt:"הזן תיאור",promptPlaceholder:"תיאור תמונה…",generate:"יצירה",stop:"עצור",settings:"הגדרות",generating:"מייצר…",scale:"גודל",sdUnavailable:"SD לא זמין",quickPrompts:"הצעות מהירות",headlines:["מה תיצור היום?","תאר את החזון שלך.","הפוך מילים לתמונות.","איזה סצנה אתה מדמיין?","בוא נהפוך רעיון למציאות.","צור משהו ייחודי.","צייר עם מילים."]},settings:{title:"Stable Diffusion 1.5",subtitle:"הגדרות יצירה",close:"סגור הגדרות",modelId:"מזהה מודל",device:"מכשיר",resolution:"רזולוציה",cfg:"Guidance scale (CFG)",steps:"שלבי הסקה",stepsHint:"5–50 שלבים (מתוך לוח זמנים SD 1.5)",negativeNote:"SD 1.5 משתמש ב-negative_prompt נפרד.",stylePreset:"סגנון",negativePrompt:"פרומפט שלילי",negativeHint:"משותף לכל היצירות. נקה לביטול מותאם. סגנון עשוי להוסיף מונחים אלא אם נבחר None.",negativePlaceholder:"מונחים שליליים אופציונליים…",clearNegative:"נקה שלילי",resetNegative:"איפוס לברירת מחדל",resetAll:"איפוס הכל לברירת מחדל",styles:{photoreal:"פוטו",none:"ללא",portrait:"דיוקן",landscape:"נוף",product:"מוצר",anime:"אנימה"}},gallery:{title:"גלריית פלט",save:"שמור",copy:"העתק",rerun:"שוב",del:"מחק",ariaLabel:"תמונות שנוצרו"},generating:{title:"מעבד",steps:"שלבים"},status:{readyToLoad:"מוכן לטעינת SD 1.5",preparingDownload:"מכין הורדה…",modelReady:"SD 1.5 מוכן — הסטודיו פתוח",generating:"מייצר…",imageReady:"התמונה מוכנה",stopped:"היצירה הופסקה",notLoaded:"SD 1.5 עדיין לא נטען",compiling:"SD 1.5: קומפילציה ב-WebGPU (2–5 דק׳)…",downloading:"SD 1.5: מוריד"},errors:{sdUnavailable:"SD 1.5 דורש WebGPU או WASM. השתמש ב-Chrome/Edge 113+ עם WebGPU."}},en:{app:{tagline:"SD 1.5 // BROWSER ENGINE",mark:"GE"},intro:{typewriter:["System ready for initialization...","Loading image generation engine...","Awaiting your instructions.","SD 1.5 · WebGPU · browser only"],webgpuWarn:"WebGPU not detected — WASM fallback may be slower.",modelMeta:"512×512 · WebGPU · cached after first load",initialize:"INITIALIZE MODEL",standby:"> STANDBY",firstLoadNote:"Runs in browser — no install. First load only (~2GB to cache). Return visits: seconds."},topBar:{browserStudio:"BROWSER STUDIO",webgpuOn:"WebGPU",webgpuOff:"WASM",langHe:"עב",langEn:"EN"},studio:{memoryOk:"MEMORY",model:"MODEL",enterPrompt:"ENTER PROMPT",promptPlaceholder:"Describe your image…",generate:"Generate",stop:"STOP",settings:"Settings",generating:"GENERATING…",scale:"SCALE",sdUnavailable:"SD UNAVAILABLE",quickPrompts:"QUICK PROMPTS",headlines:["What will you create today?","Describe your vision.","Turn words into images.","What scene do you imagine?","Let's bring your idea to life.","Create something unique.","Paint with prompts."]},settings:{title:"Stable Diffusion 1.5",subtitle:"Generation settings",close:"Close settings",modelId:"Model ID",device:"Device",resolution:"Resolution",cfg:"Guidance scale (CFG)",steps:"Inference steps",stepsHint:"5–50 steps (subsampled from SD 1.5 schedule)",negativeNote:"SD 1.5 uses native negative_prompt (separate channel).",stylePreset:"Style preset",negativePrompt:"Negative prompt",negativeHint:"Shared preset for all generations. Clear to disable custom terms. Style may still add terms unless set to None.",negativePlaceholder:"Optional custom negative terms…",clearNegative:"Clear negative",resetNegative:"Reset to recommended defaults",resetAll:"Reset all to recommended defaults",styles:{photoreal:"Photoreal",none:"None",portrait:"Portrait",landscape:"Landscape",product:"Product",anime:"Anime"}},gallery:{title:"OUTPUT BUFFER",save:"SAVE",copy:"COPY",rerun:"RE-RUN",del:"DEL",ariaLabel:"Generated images"},generating:{title:"RENDERING",steps:"steps"},status:{readyToLoad:"Ready to load SD 1.5",preparingDownload:"Preparing download…",modelReady:"SD 1.5 ready — studio open",generating:"Generating…",imageReady:"Image ready",stopped:"Generation stopped",notLoaded:"SD 1.5 is not loaded yet",compiling:"SD 1.5: compiling on WebGPU (2–5 min)…",downloading:"SD 1.5: downloading"},errors:{sdUnavailable:"SD 1.5 requires WebGPU or WASM. Use Chrome/Edge 113+ with WebGPU enabled."}}};function XC(){try{const e=localStorage.getItem(WS);if(e==="he"||e==="en")return e}catch{}return"he"}function WC(e){try{localStorage.setItem(WS,e)}catch{}}function qC(e){return e==="he"?"rtl":"ltr"}const qS=dt.createContext(null);function YC({children:e}){const[t,n]=dt.useState(()=>XC()),i=dt.useCallback(r=>{n(r),WC(r)},[]),a=dt.useCallback(()=>{i(t==="he"?"en":"he")},[t,i]),s=dt.useMemo(()=>({locale:t,dir:qC(t),t:kC[t],setLocale:i,toggleLocale:a}),[t,i,a]);return B.jsx(qS.Provider,{value:s,children:e})}function fi(){const e=dt.useContext(qS);if(!e)throw new Error("useLocale must be used within LocaleProvider");return e}function jC(e=3200){const{t}=fi(),n=t.intro.typewriter,[i,a]=dt.useState(0),[s,r]=dt.useState(""),[o,l]=dt.useState(!1);return dt.useEffect(()=>{a(0),r(""),l(!1)},[n]),dt.useEffect(()=>{const c=n[i%n.length]??"",h=s===c,d=o&&s==="";let u=o?28:42;h&&!o&&(u=e),d&&(u=400);const p=window.setTimeout(()=>{if(h&&!o){l(!0);return}if(d){l(!1),a(v=>(v+1)%n.length);return}r(o?c.slice(0,Math.max(0,s.length-1)):c.slice(0,s.length+1))},u);return()=>window.clearTimeout(p)},[s,o,i,n,e]),s}function zh(e){if(!Number.isFinite(e)||e<=0)return"0 B";const t=["B","KB","MB","GB"];let n=e,i=0;for(;n>=1024&&i<t.length-1;)n/=1024,i+=1;return`${n<10&&i>0?n.toFixed(1):Math.round(n)} ${t[i]}`}function ZC(e){return!Number.isFinite(e)||e<512?"—":`${zh(e)}/s`}const Gh=54,Zf=2*Math.PI*Gh;function KC({percent:e,size:t=140,label:n,indeterminate:i=!1}){const a=Math.min(100,Math.max(0,e)),s=Zf*(1-a/100);return B.jsxs("div",{className:`hal-ring${i?" hal-ring--indeterminate":""}`,style:{width:t,height:t},"data-testid":"download-ring","aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":100,role:"progressbar",children:[B.jsxs("svg",{viewBox:"0 0 120 120","aria-hidden":"true",children:[B.jsx("circle",{className:"hal-ring__track",cx:"60",cy:"60",r:Gh}),B.jsx("circle",{className:"hal-ring__fill",cx:"60",cy:"60",r:Gh,strokeDasharray:Zf,strokeDashoffset:i?Zf*.72:s})]}),B.jsxs("div",{className:"hal-ring__center",dir:"ltr",children:[B.jsx("span",{className:"hal-ring__pct",children:i?"…":`${Math.round(a)}%`}),n?B.jsx("span",{className:"hal-ring__label",children:n}):null]})]})}function QC({webgpu:e}){const{locale:t,t:n,setLocale:i,dir:a}=fi();return B.jsxs("header",{className:"intro-topbar","data-testid":"intro-topbar",dir:a,children:[B.jsxs("div",{className:"intro-topbar__brand",children:[B.jsx("span",{className:"intro-topbar__mark","aria-hidden":"true",children:n.app.mark}),B.jsx("span",{className:"intro-topbar__name",dir:"ltr",children:nm})]}),B.jsxs("div",{className:"intro-topbar__badges",dir:"ltr",children:[B.jsxs("span",{className:`intro-topbar__pill ${e?"intro-topbar__pill--ok":""}`,children:[B.jsx("span",{className:"intro-topbar__pill-dot","aria-hidden":"true"}),e?n.topBar.webgpuOn:n.topBar.webgpuOff]}),B.jsx("span",{className:"intro-topbar__pill intro-topbar__pill--accent",children:n.topBar.browserStudio}),B.jsx("span",{className:"intro-topbar__pill intro-topbar__pill--dim",children:"SD 1.5"})]}),B.jsxs("div",{className:"intro-topbar__lang",role:"group","aria-label":"Language",children:[B.jsx("button",{type:"button",className:`intro-topbar__lang-btn ${t==="he"?"active":""}`,onClick:()=>i("he"),"aria-pressed":t==="he",children:n.topBar.langHe}),B.jsx("button",{type:"button",className:`intro-topbar__lang-btn ${t==="en"?"active":""}`,onClick:()=>i("en"),"aria-pressed":t==="en",children:n.topBar.langEn})]})]})}const JC=["https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/a3a3965e4fabd0cf744c37df37f79ccddc4e825648d42e2b737fe627a5e97c68.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/47c3c15382e94ea71f08c76fe4ead909a7c399df8ab9b93a3560114454c6e1de.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/7807b28d6bb324e27095c8ee7ed3e51157f4201dcd31709839c84011430cc078.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/5e33ff4597345c34fa96b63f4871e73b146a880943608ca1757158f3d1a5c71a.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/0ba4f4f5f0351bbc11e69d627b47471b37844c0e0b50debdae67b9d8c7ebc640.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/f36919370a6e4ffb31c5a9e184f360f912fba8d7e6ed03daade9e40cb566223b.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/bb2ab3a3410ce91a5425ab2c8b4cbd56335894c07537ee5258e61db0b354fd9d.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/58c9db2329620a7045503ededebbd3aca6552d68992516af93be48147cd26bf6.png"],YS=10,$C=5;function t2(){const e=[],t=[];return JC.forEach((n,i)=>{i%2===0?e.push(n):t.push(n)}),{left:e,right:t}}function e2(e){return e*YS}function Q0({side:e,urls:t,phaseOffsetSec:n}){const i=e2(t.length);return B.jsx("div",{className:`loading-holo-gallery__side loading-holo-gallery__side--${e}`,"aria-hidden":"true",children:B.jsx("div",{className:"loading-holo-gallery__slot",children:t.map((a,s)=>{const r=n+s*YS;return B.jsxs("div",{className:"loading-holo-gallery__frame",style:{animationDuration:`${i}s`,animationDelay:`${r}s`,"--holo-delay":`${r}s`,"--holo-duration":`${i}s`},children:[B.jsx("img",{className:"loading-holo-gallery__img",src:a,alt:"",loading:"eager",decoding:"async"}),B.jsx("span",{className:"loading-holo-gallery__glow"})]},a)})})})}function n2(){const{left:e,right:t}=t2();return B.jsxs("div",{className:"loading-holo-gallery","data-testid":"loading-holo-gallery",children:[B.jsx(Q0,{side:"left",urls:e,phaseOffsetSec:0}),B.jsx(Q0,{side:"right",urls:t,phaseOffsetSec:$C})]})}function i2({phase:e,modelProgress:t,aggregateProgress:n,aggregateLoaded:i,aggregateTotal:a,downloadSpeed:s,status:r,webgpu:o,onLoad:l}){const{t:c,dir:h}=fi(),d=Rs.sd15,u=t.sd15,p=a>0?a:d.estimatedBytes,v=Math.min(100,Math.max(0,Math.round(n))),M=i>0,g=e==="loading"&&!M,f=(u==null?void 0:u.compiling)===!0,m=jC(),[_,y]=dt.useState([c.intro.standby]),C=dt.useRef("");dt.useEffect(()=>{y([c.intro.standby]),C.current=""},[c.intro.standby]);const b=dt.useMemo(()=>f?`> COMPILE: ${(u==null?void 0:u.currentFile)||"UNet"}…`:u!=null&&u.currentFile?`> FETCH: ${u.currentFile}`:r?`> ${r.toUpperCase()}`:c.intro.standby,[f,u==null?void 0:u.currentFile,r,c.intro.standby]);return dt.useEffect(()=>{e!=="loading"||b===C.current||(C.current=b,y(R=>[...R,b].slice(-6)))},[e,b]),B.jsxs("div",{className:"intro-screen hal-landing","data-testid":"intro-screen","data-phase":e,"aria-busy":e==="loading",dir:h,children:[B.jsx(HS,{}),B.jsx(n2,{}),B.jsx("div",{className:"scanlines","aria-hidden":"true"}),B.jsx(QC,{webgpu:o}),B.jsxs("div",{className:"hal-landing__content",children:[B.jsxs("header",{className:"hal-landing__header",children:[B.jsx("p",{className:"hal-landing__eyebrow",dir:"ltr",children:c.app.tagline}),B.jsx("h1",{className:"hal-landing__title",dir:"ltr",children:nm}),B.jsxs("p",{className:"hal-landing__typewriter","aria-live":"polite",children:[m,B.jsx("span",{className:"hal-cursor","aria-hidden":"true",children:"▌"})]})]}),B.jsx("p",{className:"hal-landing__note",children:c.intro.firstLoadNote}),o?null:B.jsx("p",{className:"hal-warn",role:"alert",children:c.intro.webgpuWarn}),e==="start"?B.jsxs("div",{className:"hal-landing__start",children:[B.jsxs("div",{className:"hal-model-chip","data-testid":"model-sd15",dir:"ltr",children:[B.jsx("span",{className:"hal-model-chip__name",children:d.label}),B.jsx("span",{className:"hal-model-chip__meta",children:c.intro.modelMeta})]}),B.jsxs("button",{type:"button",className:"btn-hal","data-testid":"load-model",onClick:l,children:[B.jsx("span",{className:"btn-hal__shine","aria-hidden":"true"}),c.intro.initialize]})]}):B.jsxs("div",{className:"hal-download","data-testid":"download-progress",children:[B.jsx(KC,{percent:u!=null&&u.done?100:v,indeterminate:g||f,label:f?"COMPILE":d.shortLabel}),B.jsxs("div",{className:"hal-console",dir:"ltr","data-testid":"download-bytes",children:[_.map((R,x)=>B.jsx("div",{className:"hal-console__line",children:R},`${R}-${x}`)),B.jsxs("div",{className:"hal-console__line hal-console__line--meta",children:[zh(i)," / ",zh(p)," · ",ZC(s)]})]}),B.jsxs("div",{className:"compact-progress-row hal-download__bar","data-testid":"download-progress-sd15",children:[B.jsx("span",{className:"compact-progress-label",children:d.shortLabel}),B.jsx("div",{className:"compact-progress-track",children:B.jsx("div",{className:`compact-progress-fill${f?" compact-progress-fill--compile":""}`,style:{width:u!=null&&u.done?"100%":`${v}%`}})}),B.jsx("span",{className:"compact-progress-pct",children:u!=null&&u.done?"✓":f?"…":`${v}%`})]})]})]})]})}function a2(){const{locale:e,t,setLocale:n}=fi();return B.jsxs("div",{className:"lang-toggle",role:"group","aria-label":"Language",children:[B.jsx("button",{type:"button",className:`lang-toggle__btn ${e==="he"?"active":""}`,onClick:()=>n("he"),"aria-pressed":e==="he",children:t.topBar.langHe}),B.jsx("button",{type:"button",className:`lang-toggle__btn ${e==="en"?"active":""}`,onClick:()=>n("en"),"aria-pressed":e==="en",children:t.topBar.langEn})]})}function s2({prompt:e,sdSettings:t,deviceLabel:n,status:i,isGenerating:a,isModelLoaded:s,settingsOpen:r,onPromptChange:o,onOpenSettings:l,onGenerate:c,onStop:h}){const{t:d,dir:u}=fi(),p=e.trim().length>0&&!a&&s&&yC,v=Rs.sd15,M=HC(t),g=`${t.width}×${t.height}`,f=a?d.studio.generating:i;return B.jsxs("div",{className:"workspace-header","data-testid":"composer-bar",dir:u,children:[B.jsxs("header",{className:"hal-studio-bar",children:[B.jsxs("div",{className:"hal-studio-bar__status",dir:"ltr",children:[B.jsx("span",{className:"hal-pulse-dot","aria-hidden":"true"}),B.jsx("span",{className:"hal-studio-bar__label",children:nm})]}),B.jsxs("div",{className:"hal-studio-bar__meta",dir:"ltr",children:[B.jsxs("span",{className:"hal-meta-chip",children:[d.studio.memoryOk," ",B.jsx("strong",{children:"OK"})]}),B.jsxs("span",{className:"hal-meta-chip",children:[d.studio.model," ",B.jsx("strong",{children:v.shortLabel})]}),B.jsx("span",{className:"hal-meta-chip hal-meta-chip--dim",children:n||"READY"}),B.jsx(a2,{})]}),B.jsx("p",{className:"hal-studio-bar__tagline",dir:"ltr",children:d.app.tagline})]}),B.jsxs("section",{className:"input-terminal",children:[B.jsx("label",{className:"input-terminal__label",htmlFor:"prompt-input",children:d.studio.enterPrompt}),B.jsxs("div",{className:"input-terminal__row",children:[B.jsx("input",{id:"prompt-input",className:"input-terminal__field",type:"text",dir:"auto",placeholder:d.studio.promptPlaceholder,"aria-label":d.studio.enterPrompt,value:e,onChange:m=>o(m.target.value),onKeyDown:m=>{m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),p&&c())},disabled:a}),B.jsxs("div",{className:"input-terminal__actions",children:[B.jsx("button",{type:"button",className:`input-terminal__gear ${r?"active":""}`,"data-testid":"settings-btn","aria-label":d.studio.settings,title:d.studio.settings,onClick:l,disabled:a,children:"⚙"}),a?B.jsx("button",{type:"button",className:"btn-hal btn-hal--small btn-hal--stop",onClick:h,children:d.studio.stop}):B.jsxs("button",{type:"button",className:"btn-hal btn-hal--small btn-hal--play","data-testid":"generate-btn",disabled:!p,onClick:c,"aria-label":d.studio.generate,children:[B.jsx("span",{className:"btn-hal__shine","aria-hidden":"true"}),"▶"]})]})]}),B.jsxs("div",{className:"input-terminal__meta",dir:"ltr",children:[B.jsx("span",{children:M}),B.jsxs("span",{children:[d.studio.scale," ",g]}),B.jsx("span",{className:"input-terminal__status",children:f}),null]})]})]})}const r2=["photoreal","none","portrait","landscape","product","anime"];function J0({label:e,value:t,min:n,max:i,step:a,onChange:s,hint:r}){return B.jsxs("label",{className:"settings-field",children:[B.jsxs("div",{className:"settings-field-head",children:[B.jsx("span",{children:e}),B.jsx("span",{className:"settings-field-value",dir:"ltr",children:a<1?t.toFixed(2):t})]}),B.jsx("input",{type:"range",dir:"ltr",min:n,max:i,step:a,value:t,onChange:o=>s(Number(o.target.value))}),r?B.jsx("span",{className:"settings-field-hint",children:r}):null]})}function o2({open:e,deviceLabel:t,globalNegativePrompt:n,sdSettings:i,onClose:a,onGlobalNegativeChange:s,onSdChange:r}){const{t:o,dir:l}=fi();if(!e)return null;const c=Rs.sd15;return B.jsx("div",{className:"settings-overlay",role:"presentation",onClick:a,children:B.jsxs("aside",{className:"settings-panel",dir:l,role:"dialog","aria-labelledby":"settings-title","aria-modal":"true",onClick:h=>h.stopPropagation(),"data-testid":"settings-panel",children:[B.jsxs("header",{className:"settings-header",children:[B.jsxs("div",{children:[B.jsx("h2",{id:"settings-title",children:o.settings.title}),B.jsx("p",{className:"settings-subtitle",children:o.settings.subtitle})]}),B.jsx("button",{type:"button",className:"settings-close",onClick:a,"aria-label":o.settings.close,children:"×"})]}),B.jsxs("div",{className:"settings-readonly",dir:"ltr",children:[B.jsxs("div",{children:[B.jsx("span",{className:"settings-readonly-label",children:o.settings.modelId}),B.jsx("span",{children:c.hfId})]}),B.jsxs("div",{children:[B.jsx("span",{className:"settings-readonly-label",children:o.settings.device}),B.jsx("span",{children:t||"—"})]}),B.jsxs("div",{children:[B.jsx("span",{className:"settings-readonly-label",children:o.settings.resolution}),B.jsx("span",{children:c.resolution})]})]}),B.jsxs(B.Fragment,{children:[B.jsxs("div",{className:"settings-body",children:[B.jsx(J0,{label:o.settings.cfg,value:i.guidanceScale,min:1,max:20,step:.5,onChange:h=>r(d=>({...d,guidanceScale:h}))}),B.jsx(J0,{label:o.settings.steps,value:i.numInferenceSteps,min:5,max:50,step:1,onChange:h=>r(d=>({...d,numInferenceSteps:Math.round(h)})),hint:o.settings.stepsHint}),B.jsx("p",{className:"settings-note",children:o.settings.negativeNote})]}),B.jsxs("div",{className:"settings-shared",children:[B.jsx("div",{className:"style-chips",role:"group","aria-label":o.settings.stylePreset,children:r2.map(h=>B.jsx("button",{type:"button",className:`style-chip ${i.style===h?"active":""}`,onClick:()=>r(d=>({...d,style:h})),children:o.settings.styles[h]},h))}),B.jsxs("label",{className:"settings-field",children:[B.jsx("span",{children:o.settings.negativePrompt}),B.jsx("p",{className:"settings-field-hint",children:o.settings.negativeHint}),B.jsx("textarea",{className:"negative-textarea",dir:"auto",rows:4,placeholder:o.settings.negativePlaceholder,value:n,onChange:h=>s(h.target.value)})]}),B.jsxs("div",{className:"settings-negative-actions",children:[B.jsx("button",{type:"button",className:"text-btn",onClick:()=>s(""),children:o.settings.clearNegative}),B.jsx("button",{type:"button",className:"text-btn",onClick:()=>s(ko),children:o.settings.resetNegative})]})]}),B.jsx("footer",{className:"settings-footer",children:B.jsx("button",{type:"button",className:"text-btn",onClick:()=>r({...Ao}),children:o.settings.resetAll})})]})]})})}const Ql=3;function l2({headline:e,initialSuggestions:t,onPick:n}){const{t:i,dir:a}=fi(),[s,r]=dt.useState(()=>t??Bh(Ql)),[o,l]=dt.useState("idle"),c=dt.useRef(s),h=dt.useRef(o),d=dt.useRef(null);c.current=s,h.current=o;const u=dt.useCallback(()=>{if(h.current!=="idle")return;const p=c.current;l("exit"),window.setTimeout(()=>{r(Bh(Ql,p.map(v=>v.id))),l("enter"),window.setTimeout(()=>{l("idle")},xC(Ql))},vC(Ql))},[]);return dt.useEffect(()=>{const p=()=>{d.current=window.setTimeout(()=>{u(),p()},mC)};return p(),()=>{d.current!==null&&window.clearTimeout(d.current)}},[u]),B.jsxs("div",{className:"hal-studio-landing",dir:a,children:[B.jsx("h1",{className:"hal-studio-landing__headline",children:e}),B.jsx("p",{className:"hal-studio-landing__hint",children:i.studio.quickPrompts}),B.jsx("div",{className:"hal-studio-landing__chips","data-phase":o,"aria-live":"polite","aria-atomic":"true",children:s.map(p=>B.jsxs("button",{type:"button",className:"btn-hal btn-hal--chip hal-chip",onClick:()=>n(p.prompt),title:p.prompt,disabled:o!=="idle",children:[B.jsx("span",{className:"btn-hal__shine","aria-hidden":"true"}),B.jsx("span",{className:"hal-chip-icon","aria-hidden":"true",children:p.icon}),B.jsx("span",{className:"hal-chip-label",dir:"ltr",children:p.label})]},p.id))})]})}function c2({item:e,onRegenerate:t,onDelete:n}){const{t:i}=fi(),a=Rs.sd15,s=()=>{const o=document.createElement("a");o.href=e.imageUrl,o.download=`${VC}-${e.id}.png`,o.click()},r=async()=>{await navigator.clipboard.writeText(e.prompt)};return B.jsxs("article",{className:"img-card",children:[B.jsxs("div",{className:"img-card__media",children:[B.jsx("img",{src:e.imageUrl,alt:e.prompt,loading:"lazy","data-testid":"gallery-image"}),B.jsx("span",{className:"img-card__badge",dir:"ltr",children:a.shortLabel})]}),B.jsxs("div",{className:"img-card__meta",children:[B.jsx("p",{className:"img-card__prompt",dir:"auto",title:e.prompt,children:e.prompt}),B.jsxs("p",{className:"img-card__stats",dir:"ltr",children:[e.width,"×",e.height," · ",(e.durationMs/1e3).toFixed(1),"s"]}),B.jsxs("div",{className:"img-card__actions",children:[B.jsx("button",{type:"button",className:"hal-card-btn",onClick:s,children:i.gallery.save}),B.jsx("button",{type:"button",className:"hal-card-btn",onClick:()=>void r(),children:i.gallery.copy}),B.jsx("button",{type:"button",className:"hal-card-btn",onClick:()=>t(e.prompt),children:i.gallery.rerun}),B.jsx("button",{type:"button",className:"hal-card-btn hal-card-btn--danger",onClick:()=>n(e.id),children:i.gallery.del})]})]})]})}function u2({items:e,onRegenerate:t,onDelete:n}){const{t:i,dir:a}=fi();return e.length?B.jsxs("section",{className:"hal-gallery","aria-label":i.gallery.ariaLabel,dir:a,children:[B.jsx("h2",{className:"hal-gallery__title",children:i.gallery.title}),B.jsx("div",{className:"hal-gallery__grid",children:e.map(s=>B.jsx(c2,{item:s,onRegenerate:t,onDelete:n},s.id))})]}):null}function f2({progress:e,tokenCount:t,tokenTotal:n,label:i="tokens"}){const{t:a,dir:s}=fi(),r=Math.round(e*100),o=i==="steps"?a.generating.steps:i;return B.jsxs("div",{className:"hal-generating","aria-live":"polite","aria-busy":"true",dir:s,children:[B.jsxs("p",{className:"hal-generating__title",children:[a.generating.title,B.jsx("span",{className:"hal-generating__dots",children:"····"})]}),B.jsx("div",{className:"hal-generating__bar",children:B.jsx("div",{className:"hal-generating__fill",style:{width:`${r}%`}})}),B.jsxs("p",{className:"hal-generating__meta",dir:"ltr",children:[n>0?`${t} / ${n} ${o} · `:"",r,"%"]})]})}function d2(e){typeof window>"u"||(window.__janusQa=e)}const $0=typeof window<"u"&&new URLSearchParams(window.location.search).has("qa"),h2=typeof window<"u"&&new URLSearchParams(window.location.search).get("autogen")==="1",t_=typeof window<"u"?new URLSearchParams(window.location.search).get("prompt")??K0:K0;function xc(){return{progress:0,loaded:0,total:Rs.sd15.estimatedBytes,downloadSpeed:0,currentFile:"",status:"Waiting…",done:!1,compiling:!1}}function p2(e,t){e(n=>{const i={...n,sd15:{...n.sd15??xc(),progress:100,done:!0,compiling:!1,status:"Ready"}};return t(i),i})}function m2(){const{t:e,dir:t}=fi(),n=dt.useRef(e);n.current=e;const i=dt.useRef(null),a=dt.useRef(0),s=dt.useRef(""),r=dt.useRef("start"),o=dt.useRef(!1),l=dt.useRef(jf("sd15")),c=dt.useRef({lastLoaded:0,lastTime:0,samples:[]}),h=dt.useRef(!1),[d,u]=dt.useState("start");r.current=d;const[p,v]=dt.useState(!1);h.current=p;const[M,g]=dt.useState(!0),[f,m]=dt.useState(""),[_,y]=dt.useState(0),[C,b]=dt.useState(0),[R,x]=dt.useState(0),[A,w]=dt.useState(0),[D,F]=dt.useState({}),[Z,j]=dt.useState(""),[P,U]=dt.useState(null),[O,q]=dt.useState(""),[$,it]=dt.useState(()=>BC()),vt=dt.useRef($),[Mt,Vt]=dt.useState(()=>jf("sd15")),[kt,wt]=dt.useState(!1);vt.current=$,l.current=Mt;const[K,ht]=dt.useState(!1),[ct,Rt]=dt.useState(0),[Nt,Ct]=dt.useState({count:0,total:0}),[ee,Xt]=dt.useState([]),[re,he]=dt.useState(!1),Gt=dt.useMemo(()=>SC(e.studio.headlines),[e.studio.headlines]),Oe=d==="ready"&&ee.length===0&&!K,ve=bC(d,p?1:0),we=dt.useCallback(V=>{const H=V.sd15;H&&(b(H.loaded),x(H.total||Rs.sd15.estimatedBytes),y(Math.min(100,Math.max(0,H.progress))))},[]),L=dt.useCallback(()=>{r.current!=="ready"&&(u("ready"),j(n.current.status.modelReady))},[]),De=dt.useCallback(V=>{p2(F,we),v(!0),h.current=!0,m(V),L()},[L,we]),Wt=dt.useCallback(V=>{F(H=>{const Y={...H,sd15:{...H.sd15??xc(),status:`Unavailable — ${V}`,done:!1,compiling:!1}};return we(Y),Y}),U(V)},[we]),le=dt.useCallback(V=>{switch(V.type){case"webgpu_check":g(V.webgpu);break;case"download_progress":{const H=V.status==="compile";F(Y=>{const st=Y.sd15??xc(),pt={...Y,sd15:{...st,loaded:V.loaded,total:V.total,progress:V.total>0?V.loaded/V.total*100:V.progress<=1?V.progress*100:V.progress,currentFile:V.file,compiling:H,status:H?`Compiling ${V.file||"UNet"}…`:V.file?`Downloading ${V.file}…`:st.status}};return we(pt),pt}),(V.file||H)&&j(H?n.current.status.compiling:`${n.current.status.downloading} ${V.file}…`);break}case"status":j(V.text);break;case"loaded":De(V.device);break;case"gen_progress":if(!o.current)break;Rt(V.progress),Ct({count:V.count,total:V.total});break;case"image_ready":{if(!o.current)break;const H=URL.createObjectURL(V.blob),Y={id:crypto.randomUUID(),prompt:s.current,negativePrompt:vt.current,imageUrl:H,width:V.width,height:V.height,durationMs:performance.now()-a.current,createdAt:Date.now(),modelId:"sd15"};Xt(st=>[Y,...st]),o.current=!1,ht(!1),Rt(0),j(n.current.status.imageReady);break}case"aborted":o.current&&(o.current=!1,ht(!1),Rt(0),j(n.current.status.stopped));break;case"error":o.current&&(o.current=!1,ht(!1)),r.current==="loading"&&!h.current?Wt(V.error):U(`SD 1.5: ${V.error}`);break}},[Wt,De,we]),ft=dt.useRef(le);ft.current=le;const oe=dt.useCallback(()=>{if(i.current)return i.current;const V=pC({onMessage:H=>ft.current(H)});return i.current=V,no(V,{type:"check_webgpu"}),V},[]);dt.useEffect(()=>{const V=oe();return no(V,{type:"check_webgpu"}),()=>{var H;(H=i.current)==null||H.terminate(),i.current=null}},[oe]),dt.useEffect(()=>{d==="start"&&!p&&!K&&j(e.status.readyToLoad)},[e.status.readyToLoad,d,p,K]);const T=dt.useCallback(()=>{U(null),u("loading"),v(!1),h.current=!1,y(0),b(0),x(EC()),w(0),c.current={lastLoaded:0,lastTime:0,samples:[]};const V={sd15:xc()};F(V),we(V),j(n.current.status.preparingDownload),oe(),no(i.current,{type:"load"})},[oe,we]);dt.useEffect(()=>{if(d!=="loading"&&d!=="ready"||C<=0)return;const V=performance.now(),H=c.current;if(H.lastTime>0&&C>H.lastLoaded){const Y=(V-H.lastTime)/1e3;if(Y>=.4){const st=(C-H.lastLoaded)/Y,pt=[...H.samples,st].slice(-6);w(pt.reduce((ot,at)=>ot+at,0)/pt.length),c.current={lastLoaded:C,lastTime:V,samples:pt};return}}H.lastTime===0&&(c.current={...H,lastLoaded:C,lastTime:V})},[C,d]);const S=dt.useCallback(V=>{if(!V.trim()||!h.current){h.current||U(n.current.status.notLoaded);return}s.current=V,U(null),o.current=!0,ht(!0),Rt(0),Ct({count:0,total:0}),a.current=performance.now(),j(n.current.status.generating);const H=l.current,Y=vt.current;(async()=>{const{positive:st,negative:pt}=await OC(V,Y);if(!o.current)return;const{prompt:ot,negativePrompt:at}=UC(st,H,pt);no(oe(),{type:"generate_image",prompt:ot,negativePrompt:at,generation:GC(H)})})()},[oe]),G=dt.useCallback(V=>{vt.current=V,it(V),FC(V)},[]),J=dt.useCallback(V=>{Vt(H=>{const Y=typeof V=="function"?V(H):V;zC("sd15",Y);const st=jf("sd15");return l.current=st,st})},[]);dt.useEffect(()=>{var V,H;d2({phase:d,webgpu:M,deviceLabel:f,loadedBytes:C,totalBytes:R,progress:_,status:Z,isGenerating:K,galleryCount:ee.length,lastImageWidth:((V=ee[0])==null?void 0:V.width)??0,lastImageHeight:((H=ee[0])==null?void 0:H.height)??0,error:P})},[d,M,f,C,R,_,Z,K,ee,P]),dt.useEffect(()=>{TC(d,p?[MC]:[])&&L()},[d,p,L]),dt.useEffect(()=>{if(ve){he(!1);return}const V=requestAnimationFrame(()=>he(!0));return()=>cancelAnimationFrame(V)},[ve]),dt.useEffect(()=>{if(!$0||d!=="start")return;const V=window.setTimeout(()=>T(),400);return()=>window.clearTimeout(V)},[d,T]),dt.useEffect(()=>{if(!$0||!h2||d!=="ready"||K||ee.length>0)return;q(t_);const V=window.setTimeout(()=>S(t_),300);return()=>window.clearTimeout(V)},[d,K,ee.length,S]);const et=()=>{no(oe(),{type:"abort"})},rt=V=>{Xt(H=>{const Y=H.find(st=>st.id===V);return Y&&URL.revokeObjectURL(Y.imageUrl),H.filter(st=>st.id!==V)})};return ve?B.jsxs("main",{className:"app hal-app","data-testid":"app-root","data-phase":d,dir:t,children:[B.jsx(i2,{phase:d==="loading"?"loading":"start",modelProgress:D,aggregateProgress:_,aggregateLoaded:C,aggregateTotal:R,downloadSpeed:A,status:Z,webgpu:M,onLoad:T}),P?B.jsx("div",{className:"error-banner",role:"alert",children:P}):null]}):B.jsxs("main",{className:`app app--studio workspace hal-app${re?" workspace--visible":""}`,"data-testid":"app-studio","data-phase":"ready",dir:t,children:[B.jsx(HS,{}),B.jsx("div",{className:"scanlines","aria-hidden":"true"}),B.jsx(s2,{prompt:O,sdSettings:Mt,deviceLabel:f,status:Z,isGenerating:K,isModelLoaded:p,settingsOpen:kt,onPromptChange:q,onOpenSettings:()=>wt(V=>!V),onGenerate:()=>S(O),onStop:et}),B.jsxs("div",{className:"studio-body",children:[K?B.jsx(f2,{progress:ct,tokenCount:Nt.count,tokenTotal:Nt.total,label:"steps"}):null,Oe?B.jsx(l2,{headline:Gt.headline,initialSuggestions:Gt.suggestions,onPick:V=>q(V)}):null,B.jsx(u2,{items:ee,onRegenerate:V=>{q(V),S(V)},onDelete:rt})]}),B.jsx(o2,{open:kt,deviceLabel:f,globalNegativePrompt:$,sdSettings:Mt,onClose:()=>wt(!1),onGlobalNegativeChange:G,onSdChange:J}),P?B.jsxs("div",{className:"error-banner error-banner--studio",role:"alert",children:[P,B.jsx("button",{type:"button",onClick:()=>U(null),children:"×"})]}):null]})}JE.createRoot(document.getElementById("root")).render(B.jsx(dt.StrictMode,{children:B.jsx(YC,{children:B.jsx(m2,{})})}));
