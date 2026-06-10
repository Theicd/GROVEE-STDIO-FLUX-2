(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var J0={exports:{}},iu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $S=Symbol.for("react.transitional.element"),tM=Symbol.for("react.fragment");function $0(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:$S,type:e,key:i,ref:t!==void 0?t:null,props:n}}iu.Fragment=tM;iu.jsx=$0;iu.jsxs=$0;J0.exports=iu;var V=J0.exports,t_={exports:{}},It={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gh=Symbol.for("react.transitional.element"),eM=Symbol.for("react.portal"),nM=Symbol.for("react.fragment"),iM=Symbol.for("react.strict_mode"),aM=Symbol.for("react.profiler"),sM=Symbol.for("react.consumer"),rM=Symbol.for("react.context"),oM=Symbol.for("react.forward_ref"),lM=Symbol.for("react.suspense"),cM=Symbol.for("react.memo"),e_=Symbol.for("react.lazy"),uM=Symbol.for("react.activity"),pm=Symbol.iterator;function fM(e){return e===null||typeof e!="object"?null:(e=pm&&e[pm]||e["@@iterator"],typeof e=="function"?e:null)}var n_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},i_=Object.assign,a_={};function Dr(e,t,n){this.props=e,this.context=t,this.refs=a_,this.updater=n||n_}Dr.prototype.isReactComponent={};Dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function s_(){}s_.prototype=Dr.prototype;function Hh(e,t,n){this.props=e,this.context=t,this.refs=a_,this.updater=n||n_}var Vh=Hh.prototype=new s_;Vh.constructor=Hh;i_(Vh,Dr.prototype);Vh.isPureReactComponent=!0;var mm=Array.isArray;function Zf(){}var Re={H:null,A:null,T:null,S:null},r_=Object.prototype.hasOwnProperty;function kh(e,t,n){var i=n.ref;return{$$typeof:Gh,type:e,key:t,ref:i!==void 0?i:null,props:n}}function dM(e,t){return kh(e.type,t,e.props)}function Xh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gh}function hM(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gm=/\/+/g;function wu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hM(""+e.key):t.toString(36)}function pM(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Zf,Zf):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Ws(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Gh:case eM:r=!0;break;case e_:return r=e._init,Ws(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+wu(e,0):i,mm(a)?(n="",r!=null&&(n=r.replace(gm,"$&/")+"/"),Ws(a,t,n,"",function(c){return c})):a!=null&&(Xh(a)&&(a=dM(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(gm,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(mm(e))for(var l=0;l<e.length;l++)i=e[l],s=o+wu(i,l),r+=Ws(i,t,n,s,a);else if(l=fM(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+wu(i,l++),r+=Ws(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return Ws(pM(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function ol(e,t,n){if(e==null)return e;var i=[],a=0;return Ws(e,i,"","",function(s){return t.call(n,s,a++)}),i}function mM(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _m=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},gM={map:ol,forEach:function(e,t,n){ol(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ol(e,function(){t++}),t},toArray:function(e){return ol(e,function(t){return t})||[]},only:function(e){if(!Xh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};It.Activity=uM;It.Children=gM;It.Component=Dr;It.Fragment=nM;It.Profiler=aM;It.PureComponent=Hh;It.StrictMode=iM;It.Suspense=lM;It.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Re;It.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Re.H.useMemoCache(e)}};It.cache=function(e){return function(){return e.apply(null,arguments)}};It.cacheSignal=function(){return null};It.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=i_({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!r_.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return kh(e.type,a,i)};It.createContext=function(e){return e={$$typeof:rM,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:sM,_context:e},e};It.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)r_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return kh(e,s,a)};It.createRef=function(){return{current:null}};It.forwardRef=function(e){return{$$typeof:oM,render:e}};It.isValidElement=Xh;It.lazy=function(e){return{$$typeof:e_,_payload:{_status:-1,_result:e},_init:mM}};It.memo=function(e,t){return{$$typeof:cM,type:e,compare:t===void 0?null:t}};It.startTransition=function(e){var t=Re.T,n={};Re.T=n;try{var i=e(),a=Re.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Zf,_m)}catch(s){_m(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),Re.T=t}};It.unstable_useCacheRefresh=function(){return Re.H.useCacheRefresh()};It.use=function(e){return Re.H.use(e)};It.useActionState=function(e,t,n){return Re.H.useActionState(e,t,n)};It.useCallback=function(e,t){return Re.H.useCallback(e,t)};It.useContext=function(e){return Re.H.useContext(e)};It.useDebugValue=function(){};It.useDeferredValue=function(e,t){return Re.H.useDeferredValue(e,t)};It.useEffect=function(e,t){return Re.H.useEffect(e,t)};It.useEffectEvent=function(e){return Re.H.useEffectEvent(e)};It.useId=function(){return Re.H.useId()};It.useImperativeHandle=function(e,t,n){return Re.H.useImperativeHandle(e,t,n)};It.useInsertionEffect=function(e,t){return Re.H.useInsertionEffect(e,t)};It.useLayoutEffect=function(e,t){return Re.H.useLayoutEffect(e,t)};It.useMemo=function(e,t){return Re.H.useMemo(e,t)};It.useOptimistic=function(e,t){return Re.H.useOptimistic(e,t)};It.useReducer=function(e,t,n){return Re.H.useReducer(e,t,n)};It.useRef=function(e){return Re.H.useRef(e)};It.useState=function(e){return Re.H.useState(e)};It.useSyncExternalStore=function(e,t,n){return Re.H.useSyncExternalStore(e,t,n)};It.useTransition=function(){return Re.H.useTransition()};It.version="19.2.7";t_.exports=It;var vt=t_.exports,o_={exports:{}},au={},l_={exports:{}},c_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(U,O){var q=U.length;U.push(O);t:for(;0<q;){var $=q-1>>>1,at=U[$];if(0<a(at,O))U[$]=O,U[q]=at,q=$;else break t}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var O=U[0],q=U.pop();if(q!==O){U[0]=q;t:for(var $=0,at=U.length,gt=at>>>1;$<gt;){var yt=2*($+1)-1,Lt=U[yt],Gt=yt+1,Dt=U[Gt];if(0>a(Lt,q))Gt<at&&0>a(Dt,Lt)?(U[$]=Dt,U[Gt]=q,$=Gt):(U[$]=Lt,U[yt]=q,$=yt);else if(Gt<at&&0>a(Dt,q))U[$]=Dt,U[Gt]=q,$=Gt;else break t}}return O}function a(U,O){var q=U.sortIndex-O.sortIndex;return q!==0?q:U.id-O.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var l=[],c=[],d=1,h=null,u=3,p=!1,v=!1,y=!1,g=!1,f=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function M(U){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=U)i(c),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(c)}}function C(U){if(y=!1,M(U),!v)if(n(l)!==null)v=!0,b||(b=!0,F());else{var O=n(c);O!==null&&I(C,O.startTime-U)}}var b=!1,R=-1,x=5,A=-1;function D(){return g?!0:!(e.unstable_now()-A<x)}function w(){if(g=!1,b){var U=e.unstable_now();A=U;var O=!0;try{t:{v=!1,y&&(y=!1,m(R),R=-1),p=!0;var q=u;try{e:{for(M(U),h=n(l);h!==null&&!(h.expirationTime>U&&D());){var $=h.callback;if(typeof $=="function"){h.callback=null,u=h.priorityLevel;var at=$(h.expirationTime<=U);if(U=e.unstable_now(),typeof at=="function"){h.callback=at,M(U),O=!0;break e}h===n(l)&&i(l),M(U)}else i(l);h=n(l)}if(h!==null)O=!0;else{var gt=n(c);gt!==null&&I(C,gt.startTime-U),O=!1}}break t}finally{h=null,u=q,p=!1}O=void 0}}finally{O?F():b=!1}}}var F;if(typeof _=="function")F=function(){_(w)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,j=Y.port2;Y.port1.onmessage=w,F=function(){j.postMessage(null)}}else F=function(){f(w,0)};function I(U,O){R=f(function(){U(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_next=function(U){switch(u){case 1:case 2:case 3:var O=3;break;default:O=u}var q=u;u=O;try{return U()}finally{u=q}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(U,O){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var q=u;u=U;try{return O()}finally{u=q}},e.unstable_scheduleCallback=function(U,O,q){var $=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?$+q:$):q=$,U){case 1:var at=-1;break;case 2:at=250;break;case 5:at=1073741823;break;case 4:at=1e4;break;default:at=5e3}return at=q+at,U={id:d++,callback:O,priorityLevel:U,startTime:q,expirationTime:at,sortIndex:-1},q>$?(U.sortIndex=q,t(c,U),n(l)===null&&U===n(c)&&(y?(m(R),R=-1):y=!0,I(C,q-$))):(U.sortIndex=at,t(l,U),v||p||(v=!0,b||(b=!0,F()))),U},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(U){var O=u;return function(){var q=u;u=O;try{return U.apply(this,arguments)}finally{u=q}}}})(c_);l_.exports=c_;var _M=l_.exports,u_={exports:{}},_n={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vM=vt;function f_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ua(){}var mn={d:{f:ua,r:function(){throw Error(f_(522))},D:ua,C:ua,L:ua,m:ua,X:ua,S:ua,M:ua},p:0,findDOMNode:null},xM=Symbol.for("react.portal");function SM(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xM,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var uo=vM.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function su(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}_n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=mn;_n.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(f_(299));return SM(e,t,null,n)};_n.flushSync=function(e){var t=uo.T,n=mn.p;try{if(uo.T=null,mn.p=2,e)return e()}finally{uo.T=t,mn.p=n,mn.d.f()}};_n.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,mn.d.C(e,t))};_n.prefetchDNS=function(e){typeof e=="string"&&mn.d.D(e)};_n.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=su(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?mn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&mn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};_n.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=su(t.as,t.crossOrigin);mn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&mn.d.M(e)};_n.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=su(n,t.crossOrigin);mn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};_n.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=su(t.as,t.crossOrigin);mn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else mn.d.m(e)};_n.requestFormReset=function(e){mn.d.r(e)};_n.unstable_batchedUpdates=function(e,t){return e(t)};_n.useFormState=function(e,t,n){return uo.H.useFormState(e,t,n)};_n.useFormStatus=function(){return uo.H.useHostTransitionStatus()};_n.version="19.2.7";function d_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d_)}catch(e){console.error(e)}}d_(),u_.exports=_n;var MM=u_.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ye=_M,h_=vt,yM=MM;function et(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ko(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g_(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vm(e){if(ko(e)!==e)throw Error(et(188))}function EM(e){var t=e.alternate;if(!t){if(t=ko(e),t===null)throw Error(et(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return vm(a),e;if(s===i)return vm(a),t;s=s.sibling}throw Error(et(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(et(189))}}if(n.alternate!==i)throw Error(et(190))}if(n.tag!==3)throw Error(et(188));return n.stateNode.current===n?e:t}function __(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=__(e),t!==null)return t;e=e.sibling}return null}var Ce=Object.assign,bM=Symbol.for("react.element"),ll=Symbol.for("react.transitional.element"),no=Symbol.for("react.portal"),js=Symbol.for("react.fragment"),v_=Symbol.for("react.strict_mode"),Kf=Symbol.for("react.profiler"),x_=Symbol.for("react.consumer"),Xi=Symbol.for("react.context"),Wh=Symbol.for("react.forward_ref"),Qf=Symbol.for("react.suspense"),Jf=Symbol.for("react.suspense_list"),qh=Symbol.for("react.memo"),_a=Symbol.for("react.lazy"),$f=Symbol.for("react.activity"),TM=Symbol.for("react.memo_cache_sentinel"),xm=Symbol.iterator;function Gr(e){return e===null||typeof e!="object"?null:(e=xm&&e[xm]||e["@@iterator"],typeof e=="function"?e:null)}var AM=Symbol.for("react.client.reference");function td(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===AM?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case js:return"Fragment";case Kf:return"Profiler";case v_:return"StrictMode";case Qf:return"Suspense";case Jf:return"SuspenseList";case $f:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case no:return"Portal";case Xi:return e.displayName||"Context";case x_:return(e._context.displayName||"Context")+".Consumer";case Wh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qh:return t=e.displayName||null,t!==null?t:td(e.type)||"Memo";case _a:t=e._payload,e=e._init;try{return td(e(t))}catch{}}return null}var io=Array.isArray,Ut=h_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=yM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ls={pending:!1,data:null,method:null,action:null},ed=[],Zs=-1;function Ci(e){return{current:e}}function $e(e){0>Zs||(e.current=ed[Zs],ed[Zs]=null,Zs--)}function be(e,t){Zs++,ed[Zs]=e.current,e.current=t}var Mi=Ci(null),Ao=Ci(null),Da=Ci(null),xc=Ci(null);function Sc(e,t){switch(be(Da,t),be(Ao,e),be(Mi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Tg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Tg(t),e=zx(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$e(Mi),be(Mi,e)}function mr(){$e(Mi),$e(Ao),$e(Da)}function nd(e){e.memoizedState!==null&&be(xc,e);var t=Mi.current,n=zx(t,e.type);t!==n&&(be(Ao,e),be(Mi,n))}function Mc(e){Ao.current===e&&($e(Mi),$e(Ao)),xc.current===e&&($e(xc),Bo._currentValue=ls)}var Du,Sm;function $a(e){if(Du===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Du=t&&t[1]||"",Sm=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Du+e+Sm}var Uu=!1;function Nu(e,t){if(!e||Uu)return"";Uu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(p){var u=p}Reflect.construct(e,[],h)}else{try{h.call()}catch(p){u=p}e.call(h.prototype)}}else{try{throw Error()}catch(p){u=p}(h=e())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(p){if(p&&u&&typeof p.stack=="string")return[p.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var d=`
`+l[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=a);break}}}finally{Uu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?$a(n):""}function RM(e,t){switch(e.tag){case 26:case 27:case 5:return $a(e.type);case 16:return $a("Lazy");case 13:return e.child!==t&&t!==null?$a("Suspense Fallback"):$a("Suspense");case 19:return $a("SuspenseList");case 0:case 15:return Nu(e.type,!1);case 11:return Nu(e.type.render,!1);case 1:return Nu(e.type,!0);case 31:return $a("Activity");default:return""}}function Mm(e){try{var t="",n=null;do t+=RM(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var id=Object.prototype.hasOwnProperty,Yh=Ye.unstable_scheduleCallback,Lu=Ye.unstable_cancelCallback,CM=Ye.unstable_shouldYield,wM=Ye.unstable_requestPaint,Pn=Ye.unstable_now,DM=Ye.unstable_getCurrentPriorityLevel,S_=Ye.unstable_ImmediatePriority,M_=Ye.unstable_UserBlockingPriority,yc=Ye.unstable_NormalPriority,UM=Ye.unstable_LowPriority,y_=Ye.unstable_IdlePriority,NM=Ye.log,LM=Ye.unstable_setDisableYieldValue,Xo=null,In=null;function ba(e){if(typeof NM=="function"&&LM(e),In&&typeof In.setStrictMode=="function")try{In.setStrictMode(Xo,e)}catch{}}var Bn=Math.clz32?Math.clz32:IM,OM=Math.log,PM=Math.LN2;function IM(e){return e>>>=0,e===0?32:31-(OM(e)/PM|0)|0}var cl=256,ul=262144,fl=4194304;function ts(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ru(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=ts(i):(r&=o,r!==0?a=ts(r):n||(n=o&~e,n!==0&&(a=ts(n))))):(o=i&~s,o!==0?a=ts(o):r!==0?a=ts(r):n||(n=i&~e,n!==0&&(a=ts(n)))),a===0?0:t!==0&&t!==a&&!(t&s)&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function Wo(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function BM(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function E_(){var e=fl;return fl<<=1,!(fl&62914560)&&(fl=4194304),e}function Ou(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function FM(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var d=31-Bn(n),h=1<<d;o[d]=0,l[d]=-1;var u=c[d];if(u!==null)for(c[d]=null,d=0;d<u.length;d++){var p=u[d];p!==null&&(p.lane&=-536870913)}n&=~h}i!==0&&b_(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function b_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Bn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function T_(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Bn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function A_(e,t){var n=t&-t;return n=n&42?1:jh(n),n&(e.suspendedLanes|t)?0:n}function jh(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Zh(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function R_(){var e=ae.p;return e!==0?e:(e=window.event,e===void 0?32:Kx(e.type))}function ym(e,t){var n=ae.p;try{return ae.p=e,t()}finally{ae.p=n}}var Wa=Math.random().toString(36).slice(2),nn="__reactFiber$"+Wa,An="__reactProps$"+Wa,Ur="__reactContainer$"+Wa,ad="__reactEvents$"+Wa,zM="__reactListeners$"+Wa,GM="__reactHandles$"+Wa,Em="__reactResources$"+Wa,Yo="__reactMarker$"+Wa;function Kh(e){delete e[nn],delete e[An],delete e[ad],delete e[zM],delete e[GM]}function Ks(e){var t=e[nn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ur]||n[nn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Dg(e);e!==null;){if(n=e[nn])return n;e=Dg(e)}return t}e=n,n=e.parentNode}return null}function Nr(e){if(e=e[nn]||e[Ur]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ao(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(et(33))}function rr(e){var t=e[Em];return t||(t=e[Em]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[Yo]=!0}var C_=new Set,w_={};function Ms(e,t){gr(e,t),gr(e+"Capture",t)}function gr(e,t){for(w_[e]=t,e=0;e<t.length;e++)C_.add(t[e])}var HM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),bm={},Tm={};function VM(e){return id.call(Tm,e)?!0:id.call(bm,e)?!1:HM.test(e)?Tm[e]=!0:(bm[e]=!0,!1)}function Ql(e,t,n){if(VM(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function dl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ui(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function qn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function D_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kM(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function sd(e){if(!e._valueTracker){var t=D_(e)?"checked":"value";e._valueTracker=kM(e,t,""+e[t])}}function U_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=D_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Ec(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var XM=/[\n"\\]/g;function Kn(e){return e.replace(XM,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function rd(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qn(t)):e.value!==""+qn(t)&&(e.value=""+qn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?od(e,r,qn(t)):n!=null?od(e,r,qn(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+qn(o):e.removeAttribute("name")}function N_(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){sd(e);return}n=n!=null?""+qn(n):"",t=t!=null?""+qn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),sd(e)}function od(e,t,n){t==="number"&&Ec(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function or(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+qn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function L_(e,t,n){if(t!=null&&(t=""+qn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+qn(n):""}function O_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(et(92));if(io(i)){if(1<i.length)throw Error(et(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=qn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),sd(e)}function _r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var WM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Am(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||WM.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function P_(e,t,n){if(t!=null&&typeof t!="object")throw Error(et(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&Am(e,a,i)}else for(var s in t)t.hasOwnProperty(s)&&Am(e,s,t[s])}function Qh(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),YM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jl(e){return YM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wi(){}var ld=null;function Jh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qs=null,lr=null;function Rm(e){var t=Nr(e);if(t&&(e=t.stateNode)){var n=e[An]||null;t:switch(e=t.stateNode,t.type){case"input":if(rd(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Kn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[An]||null;if(!a)throw Error(et(90));rd(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&U_(i)}break t;case"textarea":L_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&or(e,!!n.multiple,t,!1)}}}var Pu=!1;function I_(e,t,n){if(Pu)return e(t,n);Pu=!0;try{var i=e(t);return i}finally{if(Pu=!1,(Qs!==null||lr!==null)&&(vu(),Qs&&(t=Qs,e=lr,lr=Qs=null,Rm(t),e)))for(t=0;t<e.length;t++)Rm(e[t])}}function Ro(e,t){var n=e.stateNode;if(n===null)return null;var i=n[An]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(et(231,t,typeof n));return n}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cd=!1;if($i)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){cd=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{cd=!1}var Ta=null,$h=null,$l=null;function B_(){if($l)return $l;var e,t=$h,n=t.length,i,a="value"in Ta?Ta.value:Ta.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return $l=a.slice(e,1<i?1-i:void 0)}function tc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hl(){return!0}function Cm(){return!1}function Rn(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?hl:Cm,this.isPropagationStopped=Cm,this}return Ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),t}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ou=Rn(ys),jo=Ce({},ys,{view:0,detail:0}),jM=Rn(jo),Iu,Bu,Vr,lu=Ce({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(Iu=e.screenX-Vr.screenX,Bu=e.screenY-Vr.screenY):Bu=Iu=0,Vr=e),Iu)},movementY:function(e){return"movementY"in e?e.movementY:Bu}}),wm=Rn(lu),ZM=Ce({},lu,{dataTransfer:0}),KM=Rn(ZM),QM=Ce({},jo,{relatedTarget:0}),Fu=Rn(QM),JM=Ce({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),$M=Rn(JM),ty=Ce({},ys,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ey=Rn(ty),ny=Ce({},ys,{data:0}),Dm=Rn(ny),iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ry(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sy[e])?!!t[e]:!1}function tp(){return ry}var oy=Ce({},jo,{key:function(e){if(e.key){var t=iy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=tc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ay[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tp,charCode:function(e){return e.type==="keypress"?tc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ly=Rn(oy),cy=Ce({},lu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Um=Rn(cy),uy=Ce({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tp}),fy=Rn(uy),dy=Ce({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),hy=Rn(dy),py=Ce({},lu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),my=Rn(py),gy=Ce({},ys,{newState:0,oldState:0}),_y=Rn(gy),vy=[9,13,27,32],ep=$i&&"CompositionEvent"in window,fo=null;$i&&"documentMode"in document&&(fo=document.documentMode);var xy=$i&&"TextEvent"in window&&!fo,F_=$i&&(!ep||fo&&8<fo&&11>=fo),Nm=" ",Lm=!1;function z_(e,t){switch(e){case"keyup":return vy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function G_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Js=!1;function Sy(e,t){switch(e){case"compositionend":return G_(t);case"keypress":return t.which!==32?null:(Lm=!0,Nm);case"textInput":return e=t.data,e===Nm&&Lm?null:e;default:return null}}function My(e,t){if(Js)return e==="compositionend"||!ep&&z_(e,t)?(e=B_(),$l=$h=Ta=null,Js=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return F_&&t.locale!=="ko"?null:t.data;default:return null}}var yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Om(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yy[e.type]:t==="textarea"}function H_(e,t,n,i){Qs?lr?lr.push(i):lr=[i]:Qs=i,t=Hc(t,"onChange"),0<t.length&&(n=new ou("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ho=null,Co=null;function Ey(e){Ix(e,0)}function cu(e){var t=ao(e);if(U_(t))return e}function Pm(e,t){if(e==="change")return t}var V_=!1;if($i){var zu;if($i){var Gu="oninput"in document;if(!Gu){var Im=document.createElement("div");Im.setAttribute("oninput","return;"),Gu=typeof Im.oninput=="function"}zu=Gu}else zu=!1;V_=zu&&(!document.documentMode||9<document.documentMode)}function Bm(){ho&&(ho.detachEvent("onpropertychange",k_),Co=ho=null)}function k_(e){if(e.propertyName==="value"&&cu(Co)){var t=[];H_(t,Co,e,Jh(e)),I_(Ey,t)}}function by(e,t,n){e==="focusin"?(Bm(),ho=t,Co=n,ho.attachEvent("onpropertychange",k_)):e==="focusout"&&Bm()}function Ty(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cu(Co)}function Ay(e,t){if(e==="click")return cu(t)}function Ry(e,t){if(e==="input"||e==="change")return cu(t)}function Cy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zn=typeof Object.is=="function"?Object.is:Cy;function wo(e,t){if(zn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!id.call(t,a)||!zn(e[a],t[a]))return!1}return!0}function Fm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zm(e,t){var n=Fm(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Fm(n)}}function X_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?X_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function W_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ec(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ec(e.document)}return t}function np(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var wy=$i&&"documentMode"in document&&11>=document.documentMode,$s=null,ud=null,po=null,fd=!1;function Gm(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fd||$s==null||$s!==Ec(i)||(i=$s,"selectionStart"in i&&np(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),po&&wo(po,i)||(po=i,i=Hc(ud,"onSelect"),0<i.length&&(t=new ou("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=$s)))}function ja(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tr={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},Hu={},q_={};$i&&(q_=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Es(e){if(Hu[e])return Hu[e];if(!tr[e])return e;var t=tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in q_)return Hu[e]=t[n];return e}var Y_=Es("animationend"),j_=Es("animationiteration"),Z_=Es("animationstart"),Dy=Es("transitionrun"),Uy=Es("transitionstart"),Ny=Es("transitioncancel"),K_=Es("transitionend"),Q_=new Map,dd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");dd.push("scrollEnd");function ui(e,t){Q_.set(e,t),Ms(t,[e])}var bc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Xn=[],er=0,ip=0;function uu(){for(var e=er,t=ip=er=0;t<e;){var n=Xn[t];Xn[t++]=null;var i=Xn[t];Xn[t++]=null;var a=Xn[t];Xn[t++]=null;var s=Xn[t];if(Xn[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&J_(n,a,s)}}function fu(e,t,n,i){Xn[er++]=e,Xn[er++]=t,Xn[er++]=n,Xn[er++]=i,ip|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function ap(e,t,n,i){return fu(e,t,n,i),Tc(e)}function bs(e,t){return fu(e,null,null,t),Tc(e)}function J_(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-Bn(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function Tc(e){if(50<Eo)throw Eo=0,Ld=null,Error(et(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var nr={};function Ly(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(e,t,n,i){return new Ly(e,t,n,i)}function sp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ji(e,t){var n=e.alternate;return n===null?(n=Ln(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function $_(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ec(e,t,n,i,a,s){var r=0;if(i=e,typeof e=="function")sp(e)&&(r=1);else if(typeof e=="string")r=FE(e,n,Mi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case $f:return e=Ln(31,n,t,a),e.elementType=$f,e.lanes=s,e;case js:return cs(n.children,a,s,t);case v_:r=8,a|=24;break;case Kf:return e=Ln(12,n,t,a|2),e.elementType=Kf,e.lanes=s,e;case Qf:return e=Ln(13,n,t,a),e.elementType=Qf,e.lanes=s,e;case Jf:return e=Ln(19,n,t,a),e.elementType=Jf,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xi:r=10;break t;case x_:r=9;break t;case Wh:r=11;break t;case qh:r=14;break t;case _a:r=16,i=null;break t}r=29,n=Error(et(130,e===null?"null":typeof e,"")),i=null}return t=Ln(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function cs(e,t,n,i){return e=Ln(7,e,i,t),e.lanes=n,e}function Vu(e,t,n){return e=Ln(6,e,null,t),e.lanes=n,e}function tv(e){var t=Ln(18,null,null,0);return t.stateNode=e,t}function ku(e,t,n){return t=Ln(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Hm=new WeakMap;function Qn(e,t){if(typeof e=="object"&&e!==null){var n=Hm.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Mm(t)},Hm.set(e,t),t)}return{value:e,source:t,stack:Mm(t)}}var ir=[],ar=0,Ac=null,Do=0,Yn=[],jn=0,za=null,gi=1,_i="";function Hi(e,t){ir[ar++]=Do,ir[ar++]=Ac,Ac=e,Do=t}function ev(e,t,n){Yn[jn++]=gi,Yn[jn++]=_i,Yn[jn++]=za,za=e;var i=gi;e=_i;var a=32-Bn(i)-1;i&=~(1<<a),n+=1;var s=32-Bn(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,gi=1<<32-Bn(t)+a|n<<a|i,_i=s+e}else gi=1<<s|n<<a|i,_i=e}function rp(e){e.return!==null&&(Hi(e,1),ev(e,1,0))}function op(e){for(;e===Ac;)Ac=ir[--ar],ir[ar]=null,Do=ir[--ar],ir[ar]=null;for(;e===za;)za=Yn[--jn],Yn[jn]=null,_i=Yn[--jn],Yn[jn]=null,gi=Yn[--jn],Yn[jn]=null}function nv(e,t){Yn[jn++]=gi,Yn[jn++]=_i,Yn[jn++]=za,gi=t.id,_i=t.overflow,za=e}var an=null,Ae=null,Jt=!1,Ua=null,Jn=!1,hd=Error(et(519));function Ga(e){var t=Error(et(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Uo(Qn(t,e)),hd}function Vm(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[nn]=e,t[An]=i,n){case"dialog":Yt("cancel",t),Yt("close",t);break;case"iframe":case"object":case"embed":Yt("load",t);break;case"video":case"audio":for(n=0;n<Po.length;n++)Yt(Po[n],t);break;case"source":Yt("error",t);break;case"img":case"image":case"link":Yt("error",t),Yt("load",t);break;case"details":Yt("toggle",t);break;case"input":Yt("invalid",t),N_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Yt("invalid",t);break;case"textarea":Yt("invalid",t),O_(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Fx(t.textContent,n)?(i.popover!=null&&(Yt("beforetoggle",t),Yt("toggle",t)),i.onScroll!=null&&Yt("scroll",t),i.onScrollEnd!=null&&Yt("scrollend",t),i.onClick!=null&&(t.onclick=Wi),t=!0):t=!1,t||Ga(e,!0)}function km(e){for(an=e.return;an;)switch(an.tag){case 5:case 31:case 13:Jn=!1;return;case 27:case 3:Jn=!0;return;default:an=an.return}}function ws(e){if(e!==an)return!1;if(!Jt)return km(e),Jt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Fd(e.type,e.memoizedProps)),n=!n),n&&Ae&&Ga(e),km(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(317));Ae=wg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(317));Ae=wg(e)}else t===27?(t=Ae,qa(e.type)?(e=Vd,Vd=null,Ae=e):Ae=t):Ae=an?ei(e.stateNode.nextSibling):null;return!0}function hs(){Ae=an=null,Jt=!1}function Xu(){var e=Ua;return e!==null&&(yn===null?yn=e:yn.push.apply(yn,e),Ua=null),e}function Uo(e){Ua===null?Ua=[e]:Ua.push(e)}var pd=Ci(null),Ts=null,qi=null;function xa(e,t,n){be(pd,t._currentValue),t._currentValue=n}function Zi(e){e._currentValue=pd.current,$e(pd)}function md(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function gd(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),md(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(et(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),md(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Lr(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(et(387));if(r=r.memoizedProps,r!==null){var o=a.type;zn(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===xc.current){if(r=a.alternate,r===null)throw Error(et(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Bo):e=[Bo])}a=a.return}e!==null&&gd(t,e,n,i),t.flags|=262144}function Rc(e){for(e=e.firstContext;e!==null;){if(!zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ps(e){Ts=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function sn(e){return iv(Ts,e)}function pl(e,t){return Ts===null&&ps(e),iv(e,t)}function iv(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},qi===null){if(e===null)throw Error(et(308));qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qi=qi.next=t;return n}var Oy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Py=Ye.unstable_scheduleCallback,Iy=Ye.unstable_NormalPriority,ke={$$typeof:Xi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lp(){return{controller:new Oy,data:new Map,refCount:0}}function Zo(e){e.refCount--,e.refCount===0&&Py(Iy,function(){e.controller.abort()})}var mo=null,_d=0,vr=0,cr=null;function By(e,t){if(mo===null){var n=mo=[];_d=0,vr=Lp(),cr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return _d++,t.then(Xm,Xm),t}function Xm(){if(--_d===0&&mo!==null){cr!==null&&(cr.status="fulfilled");var e=mo;mo=null,vr=0,cr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Fy(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Wm=Ut.S;Ut.S=function(e,t){_x=Pn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&By(e,t),Wm!==null&&Wm(e,t)};var us=Ci(null);function cp(){var e=us.current;return e!==null?e:Me.pooledCache}function nc(e,t){t===null?be(us,us.current):be(us,t.pool)}function av(){var e=cp();return e===null?null:{parent:ke._currentValue,pool:e}}var Or=Error(et(460)),up=Error(et(474)),du=Error(et(542)),Cc={then:function(){}};function qm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sv(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Wi,Wi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,jm(e),e;default:if(typeof t.status=="string")t.then(Wi,Wi);else{if(e=Me,e!==null&&100<e.shellSuspendCounter)throw Error(et(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,jm(e),e}throw fs=t,Or}}function es(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(fs=n,Or):n}}var fs=null;function Ym(){if(fs===null)throw Error(et(459));var e=fs;return fs=null,e}function jm(e){if(e===Or||e===du)throw Error(et(483))}var ur=null,No=0;function ml(e){var t=No;return No+=1,ur===null&&(ur=[]),sv(ur,e,t)}function kr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function gl(e,t){throw t.$$typeof===bM?Error(et(525)):(e=Object.prototype.toString.call(t),Error(et(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function rv(e){function t(f,m){if(e){var _=f.deletions;_===null?(f.deletions=[m],f.flags|=16):_.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function i(f){for(var m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function a(f,m){return f=ji(f,m),f.index=0,f.sibling=null,f}function s(f,m,_){return f.index=_,e?(_=f.alternate,_!==null?(_=_.index,_<m?(f.flags|=67108866,m):_):(f.flags|=67108866,m)):(f.flags|=1048576,m)}function r(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,m,_,M){return m===null||m.tag!==6?(m=Vu(_,f.mode,M),m.return=f,m):(m=a(m,_),m.return=f,m)}function l(f,m,_,M){var C=_.type;return C===js?d(f,m,_.props.children,M,_.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_a&&es(C)===m.type)?(m=a(m,_.props),kr(m,_),m.return=f,m):(m=ec(_.type,_.key,_.props,null,f.mode,M),kr(m,_),m.return=f,m)}function c(f,m,_,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=ku(_,f.mode,M),m.return=f,m):(m=a(m,_.children||[]),m.return=f,m)}function d(f,m,_,M,C){return m===null||m.tag!==7?(m=cs(_,f.mode,M,C),m.return=f,m):(m=a(m,_),m.return=f,m)}function h(f,m,_){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Vu(""+m,f.mode,_),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ll:return _=ec(m.type,m.key,m.props,null,f.mode,_),kr(_,m),_.return=f,_;case no:return m=ku(m,f.mode,_),m.return=f,m;case _a:return m=es(m),h(f,m,_)}if(io(m)||Gr(m))return m=cs(m,f.mode,_,null),m.return=f,m;if(typeof m.then=="function")return h(f,ml(m),_);if(m.$$typeof===Xi)return h(f,pl(f,m),_);gl(f,m)}return null}function u(f,m,_,M){var C=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return C!==null?null:o(f,m,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ll:return _.key===C?l(f,m,_,M):null;case no:return _.key===C?c(f,m,_,M):null;case _a:return _=es(_),u(f,m,_,M)}if(io(_)||Gr(_))return C!==null?null:d(f,m,_,M,null);if(typeof _.then=="function")return u(f,m,ml(_),M);if(_.$$typeof===Xi)return u(f,m,pl(f,_),M);gl(f,_)}return null}function p(f,m,_,M,C){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return f=f.get(_)||null,o(m,f,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ll:return f=f.get(M.key===null?_:M.key)||null,l(m,f,M,C);case no:return f=f.get(M.key===null?_:M.key)||null,c(m,f,M,C);case _a:return M=es(M),p(f,m,_,M,C)}if(io(M)||Gr(M))return f=f.get(_)||null,d(m,f,M,C,null);if(typeof M.then=="function")return p(f,m,_,ml(M),C);if(M.$$typeof===Xi)return p(f,m,_,pl(m,M),C);gl(m,M)}return null}function v(f,m,_,M){for(var C=null,b=null,R=m,x=m=0,A=null;R!==null&&x<_.length;x++){R.index>x?(A=R,R=null):A=R.sibling;var D=u(f,R,_[x],M);if(D===null){R===null&&(R=A);break}e&&R&&D.alternate===null&&t(f,R),m=s(D,m,x),b===null?C=D:b.sibling=D,b=D,R=A}if(x===_.length)return n(f,R),Jt&&Hi(f,x),C;if(R===null){for(;x<_.length;x++)R=h(f,_[x],M),R!==null&&(m=s(R,m,x),b===null?C=R:b.sibling=R,b=R);return Jt&&Hi(f,x),C}for(R=i(R);x<_.length;x++)A=p(R,f,x,_[x],M),A!==null&&(e&&A.alternate!==null&&R.delete(A.key===null?x:A.key),m=s(A,m,x),b===null?C=A:b.sibling=A,b=A);return e&&R.forEach(function(w){return t(f,w)}),Jt&&Hi(f,x),C}function y(f,m,_,M){if(_==null)throw Error(et(151));for(var C=null,b=null,R=m,x=m=0,A=null,D=_.next();R!==null&&!D.done;x++,D=_.next()){R.index>x?(A=R,R=null):A=R.sibling;var w=u(f,R,D.value,M);if(w===null){R===null&&(R=A);break}e&&R&&w.alternate===null&&t(f,R),m=s(w,m,x),b===null?C=w:b.sibling=w,b=w,R=A}if(D.done)return n(f,R),Jt&&Hi(f,x),C;if(R===null){for(;!D.done;x++,D=_.next())D=h(f,D.value,M),D!==null&&(m=s(D,m,x),b===null?C=D:b.sibling=D,b=D);return Jt&&Hi(f,x),C}for(R=i(R);!D.done;x++,D=_.next())D=p(R,f,x,D.value,M),D!==null&&(e&&D.alternate!==null&&R.delete(D.key===null?x:D.key),m=s(D,m,x),b===null?C=D:b.sibling=D,b=D);return e&&R.forEach(function(F){return t(f,F)}),Jt&&Hi(f,x),C}function g(f,m,_,M){if(typeof _=="object"&&_!==null&&_.type===js&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ll:t:{for(var C=_.key;m!==null;){if(m.key===C){if(C=_.type,C===js){if(m.tag===7){n(f,m.sibling),M=a(m,_.props.children),M.return=f,f=M;break t}}else if(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_a&&es(C)===m.type){n(f,m.sibling),M=a(m,_.props),kr(M,_),M.return=f,f=M;break t}n(f,m);break}else t(f,m);m=m.sibling}_.type===js?(M=cs(_.props.children,f.mode,M,_.key),M.return=f,f=M):(M=ec(_.type,_.key,_.props,null,f.mode,M),kr(M,_),M.return=f,f=M)}return r(f);case no:t:{for(C=_.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(f,m.sibling),M=a(m,_.children||[]),M.return=f,f=M;break t}else{n(f,m);break}else t(f,m);m=m.sibling}M=ku(_,f.mode,M),M.return=f,f=M}return r(f);case _a:return _=es(_),g(f,m,_,M)}if(io(_))return v(f,m,_,M);if(Gr(_)){if(C=Gr(_),typeof C!="function")throw Error(et(150));return _=C.call(_),y(f,m,_,M)}if(typeof _.then=="function")return g(f,m,ml(_),M);if(_.$$typeof===Xi)return g(f,m,pl(f,_),M);gl(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,m!==null&&m.tag===6?(n(f,m.sibling),M=a(m,_),M.return=f,f=M):(n(f,m),M=Vu(_,f.mode,M),M.return=f,f=M),r(f)):n(f,m)}return function(f,m,_,M){try{No=0;var C=g(f,m,_,M);return ur=null,C}catch(R){if(R===Or||R===du)throw R;var b=Ln(29,R,null,f.mode);return b.lanes=M,b.return=f,b}finally{}}}var ms=rv(!0),ov=rv(!1),va=!1;function fp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,ie&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Tc(e),J_(e,null,n),t}return fu(e,i,t,n),Tc(e)}function go(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,T_(e,n)}}function Wu(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var xd=!1;function _o(){if(xd){var e=cr;if(e!==null)throw e}}function vo(e,t,n,i){xd=!1;var a=e.updateQueue;va=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==r&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=a.baseState;r=0,d=c=l=null,o=s;do{var u=o.lane&-536870913,p=u!==o.lane;if(p?(Zt&u)===u:(i&u)===u){u!==0&&u===vr&&(xd=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,y=o;u=t;var g=n;switch(y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(g,h,u);break t}h=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,u=typeof v=="function"?v.call(g,h,u):v,u==null)break t;h=Ce({},h,u);break t;case 2:va=!0}}u=o.callback,u!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[u]:p.push(u))}else p={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,r|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);d===null&&(l=h),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=d,s===null&&(a.shared.lanes=0),Va|=r,e.lanes=r,e.memoizedState=h}}function lv(e,t){if(typeof e!="function")throw Error(et(191,e));e.call(t)}function cv(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)lv(n[e],t)}var xr=Ci(null),wc=Ci(0);function Zm(e,t){e=ia,be(wc,e),be(xr,t),ia=e|t.baseLanes}function Sd(){be(wc,ia),be(xr,xr.current)}function dp(){ia=wc.current,$e(xr),$e(wc)}var Gn=Ci(null),ti=null;function Sa(e){var t=e.alternate;be(Be,Be.current&1),be(Gn,e),ti===null&&(t===null||xr.current!==null||t.memoizedState!==null)&&(ti=e)}function Md(e){be(Be,Be.current),be(Gn,e),ti===null&&(ti=e)}function uv(e){e.tag===22?(be(Be,Be.current),be(Gn,e),ti===null&&(ti=e)):Ma()}function Ma(){be(Be,Be.current),be(Gn,Gn.current)}function Nn(e){$e(Gn),ti===e&&(ti=null),$e(Be)}var Be=Ci(0);function Dc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Gd(n)||Hd(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ta=0,zt=null,_e=null,He=null,Uc=!1,fr=!1,gs=!1,Nc=0,Lo=0,dr=null,zy=0;function Ne(){throw Error(et(321))}function hp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zn(e[n],t[n]))return!1;return!0}function pp(e,t,n,i,a,s){return ta=s,zt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ut.H=e===null||e.memoizedState===null?Hv:Tp,gs=!1,s=n(i,a),gs=!1,fr&&(s=dv(t,n,i,a)),fv(e),s}function fv(e){Ut.H=Oo;var t=_e!==null&&_e.next!==null;if(ta=0,He=_e=zt=null,Uc=!1,Lo=0,dr=null,t)throw Error(et(300));e===null||Xe||(e=e.dependencies,e!==null&&Rc(e)&&(Xe=!0))}function dv(e,t,n,i){zt=e;var a=0;do{if(fr&&(dr=null),Lo=0,fr=!1,25<=a)throw Error(et(301));if(a+=1,He=_e=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Ut.H=Vv,s=t(n,i)}while(fr);return s}function Gy(){var e=Ut.H,t=e.useState()[0];return t=typeof t.then=="function"?Ko(t):t,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(zt.flags|=1024),t}function mp(){var e=Nc!==0;return Nc=0,e}function gp(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function _p(e){if(Uc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Uc=!1}ta=0,He=_e=zt=null,fr=!1,Lo=Nc=0,dr=null}function pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?zt.memoizedState=He=e:He=He.next=e,He}function ze(){if(_e===null){var e=zt.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=He===null?zt.memoizedState:He.next;if(t!==null)He=t,_e=e;else{if(e===null)throw zt.alternate===null?Error(et(467)):Error(et(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},He===null?zt.memoizedState=He=e:He=He.next=e}return He}function hu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ko(e){var t=Lo;return Lo+=1,dr===null&&(dr=[]),e=sv(dr,e,t),t=zt,(He===null?t.memoizedState:He.next)===null&&(t=t.alternate,Ut.H=t===null||t.memoizedState===null?Hv:Tp),e}function pu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ko(e);if(e.$$typeof===Xi)return sn(e)}throw Error(et(438,String(e)))}function vp(e){var t=null,n=zt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=zt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=hu(),zt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=TM;return t.index++,n}function ea(e,t){return typeof t=="function"?t(e):t}function ic(e){var t=ze();return xp(t,_e,e)}function xp(e,t,n){var i=e.queue;if(i===null)throw Error(et(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,d=!1;do{var h=c.lane&-536870913;if(h!==c.lane?(Zt&h)===h:(ta&h)===h){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),h===vr&&(d=!0);else if((ta&u)===u){c=c.next,u===vr&&(d=!0);continue}else h={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=s):l=l.next=h,zt.lanes|=u,Va|=u;h=c.action,gs&&n(s,h),s=c.hasEagerState?c.eagerState:n(s,h)}else u={lane:h,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=s):l=l.next=u,zt.lanes|=h,Va|=h;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!zn(s,e.memoizedState)&&(Xe=!0,d&&(n=cr,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function qu(e){var t=ze(),n=t.queue;if(n===null)throw Error(et(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);zn(s,t.memoizedState)||(Xe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function hv(e,t,n){var i=zt,a=ze(),s=Jt;if(s){if(n===void 0)throw Error(et(407));n=n()}else n=t();var r=!zn((_e||a).memoizedState,n);if(r&&(a.memoizedState=n,Xe=!0),a=a.queue,Sp(gv.bind(null,i,a,e),[e]),a.getSnapshot!==t||r||He!==null&&He.memoizedState.tag&1){if(i.flags|=2048,Sr(9,{destroy:void 0},mv.bind(null,i,a,n,t),null),Me===null)throw Error(et(349));s||ta&127||pv(i,t,n)}return n}function pv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=zt.updateQueue,t===null?(t=hu(),zt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mv(e,t,n,i){t.value=n,t.getSnapshot=i,_v(t)&&vv(e)}function gv(e,t,n){return n(function(){_v(t)&&vv(e)})}function _v(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zn(e,n)}catch{return!0}}function vv(e){var t=bs(e,2);t!==null&&En(t,e,2)}function yd(e){var t=pn();if(typeof e=="function"){var n=e;if(e=n(),gs){ba(!0);try{n()}finally{ba(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},t}function xv(e,t,n,i){return e.baseState=n,xp(e,_e,typeof i=="function"?i:ea)}function Hy(e,t,n,i,a){if(gu(e))throw Error(et(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Ut.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,Sv(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Sv(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=Ut.T,r={};Ut.T=r;try{var o=n(a,i),l=Ut.S;l!==null&&l(r,o),Km(e,t,o)}catch(c){Ed(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Ut.T=s}}else try{s=n(a,i),Km(e,t,s)}catch(c){Ed(e,t,c)}}function Km(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Qm(e,t,i)},function(i){return Ed(e,t,i)}):Qm(e,t,n)}function Qm(e,t,n){t.status="fulfilled",t.value=n,Mv(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Sv(e,n)))}function Ed(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Mv(t),t=t.next;while(t!==i)}e.action=null}function Mv(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function yv(e,t){return t}function Jm(e,t){if(Jt){var n=Me.formState;if(n!==null){t:{var i=zt;if(Jt){if(Ae){e:{for(var a=Ae,s=Jn;a.nodeType!==8;){if(!s){a=null;break e}if(a=ei(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Ae=ei(a.nextSibling),i=a.data==="F!";break t}}Ga(i)}i=!1}i&&(t=n[0])}}return n=pn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yv,lastRenderedState:t},n.queue=i,n=Fv.bind(null,zt,i),i.dispatch=n,i=yd(!1),s=bp.bind(null,zt,!1,i.queue),i=pn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=Hy.bind(null,zt,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function $m(e){var t=ze();return Ev(t,_e,e)}function Ev(e,t,n){if(t=xp(e,t,yv)[0],e=ic(ea)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ko(t)}catch(r){throw r===Or?du:r}else i=t;t=ze();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(zt.flags|=2048,Sr(9,{destroy:void 0},Vy.bind(null,a,n),null)),[i,s,e]}function Vy(e,t){e.action=t}function tg(e){var t=ze(),n=_e;if(n!==null)return Ev(t,n,e);ze(),t=t.memoizedState,n=ze();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Sr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=zt.updateQueue,t===null&&(t=hu(),zt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function bv(){return ze().memoizedState}function ac(e,t,n,i){var a=pn();zt.flags|=e,a.memoizedState=Sr(1|t,{destroy:void 0},n,i===void 0?null:i)}function mu(e,t,n,i){var a=ze();i=i===void 0?null:i;var s=a.memoizedState.inst;_e!==null&&i!==null&&hp(i,_e.memoizedState.deps)?a.memoizedState=Sr(t,s,n,i):(zt.flags|=e,a.memoizedState=Sr(1|t,s,n,i))}function eg(e,t){ac(8390656,8,e,t)}function Sp(e,t){mu(2048,8,e,t)}function ky(e){zt.flags|=4;var t=zt.updateQueue;if(t===null)t=hu(),zt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Tv(e){var t=ze().memoizedState;return ky({ref:t,nextImpl:e}),function(){if(ie&2)throw Error(et(440));return t.impl.apply(void 0,arguments)}}function Av(e,t){return mu(4,2,e,t)}function Rv(e,t){return mu(4,4,e,t)}function Cv(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wv(e,t,n){n=n!=null?n.concat([e]):null,mu(4,4,Cv.bind(null,t,e),n)}function Mp(){}function Dv(e,t){var n=ze();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&hp(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Uv(e,t){var n=ze();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&hp(t,i[1]))return i[0];if(i=e(),gs){ba(!0);try{e()}finally{ba(!1)}}return n.memoizedState=[i,t],i}function yp(e,t,n){return n===void 0||ta&1073741824&&!(Zt&261930)?e.memoizedState=t:(e.memoizedState=n,e=xx(),zt.lanes|=e,Va|=e,n)}function Nv(e,t,n,i){return zn(n,t)?n:xr.current!==null?(e=yp(e,n,i),zn(e,t)||(Xe=!0),e):!(ta&42)||ta&1073741824&&!(Zt&261930)?(Xe=!0,e.memoizedState=n):(e=xx(),zt.lanes|=e,Va|=e,t)}function Lv(e,t,n,i,a){var s=ae.p;ae.p=s!==0&&8>s?s:8;var r=Ut.T,o={};Ut.T=o,bp(e,!1,t,n);try{var l=a(),c=Ut.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=Fy(l,i);xo(e,t,d,Fn(e))}else xo(e,t,i,Fn(e))}catch(h){xo(e,t,{then:function(){},status:"rejected",reason:h},Fn())}finally{ae.p=s,r!==null&&o.types!==null&&(r.types=o.types),Ut.T=r}}function Xy(){}function bd(e,t,n,i){if(e.tag!==5)throw Error(et(476));var a=Ov(e).queue;Lv(e,a,t,ls,n===null?Xy:function(){return Pv(e),n(i)})}function Ov(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ls,baseState:ls,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:ls},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Pv(e){var t=Ov(e);t.next===null&&(t=e.alternate.memoizedState),xo(e,t.next.queue,{},Fn())}function Ep(){return sn(Bo)}function Iv(){return ze().memoizedState}function Bv(){return ze().memoizedState}function Wy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Fn();e=Na(n);var i=La(t,e,n);i!==null&&(En(i,t,n),go(i,t,n)),t={cache:lp()},e.payload=t;return}t=t.return}}function qy(e,t,n){var i=Fn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},gu(e)?zv(t,n):(n=ap(e,t,n,i),n!==null&&(En(n,e,i),Gv(n,t,i)))}function Fv(e,t,n){var i=Fn();xo(e,t,n,i)}function xo(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(gu(e))zv(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,zn(o,r))return fu(e,t,a,0),Me===null&&uu(),!1}catch{}finally{}if(n=ap(e,t,a,i),n!==null)return En(n,e,i),Gv(n,t,i),!0}return!1}function bp(e,t,n,i){if(i={lane:2,revertLane:Lp(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},gu(e)){if(t)throw Error(et(479))}else t=ap(e,n,i,2),t!==null&&En(t,e,2)}function gu(e){var t=e.alternate;return e===zt||t!==null&&t===zt}function zv(e,t){fr=Uc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gv(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,T_(e,n)}}var Oo={readContext:sn,use:pu,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne};Oo.useEffectEvent=Ne;var Hv={readContext:sn,use:pu,useCallback:function(e,t){return pn().memoizedState=[e,t===void 0?null:t],e},useContext:sn,useEffect:eg,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ac(4194308,4,Cv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ac(4194308,4,e,t)},useInsertionEffect:function(e,t){ac(4,2,e,t)},useMemo:function(e,t){var n=pn();t=t===void 0?null:t;var i=e();if(gs){ba(!0);try{e()}finally{ba(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=pn();if(n!==void 0){var a=n(t);if(gs){ba(!0);try{n(t)}finally{ba(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=qy.bind(null,zt,e),[i.memoizedState,e]},useRef:function(e){var t=pn();return e={current:e},t.memoizedState=e},useState:function(e){e=yd(e);var t=e.queue,n=Fv.bind(null,zt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Mp,useDeferredValue:function(e,t){var n=pn();return yp(n,e,t)},useTransition:function(){var e=yd(!1);return e=Lv.bind(null,zt,e.queue,!0,!1),pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=zt,a=pn();if(Jt){if(n===void 0)throw Error(et(407));n=n()}else{if(n=t(),Me===null)throw Error(et(349));Zt&127||pv(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,eg(gv.bind(null,i,s,e),[e]),i.flags|=2048,Sr(9,{destroy:void 0},mv.bind(null,i,s,n,t),null),n},useId:function(){var e=pn(),t=Me.identifierPrefix;if(Jt){var n=_i,i=gi;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Nc++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=zy++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ep,useFormState:Jm,useActionState:Jm,useOptimistic:function(e){var t=pn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=bp.bind(null,zt,!0,n),n.dispatch=t,[e,t]},useMemoCache:vp,useCacheRefresh:function(){return pn().memoizedState=Wy.bind(null,zt)},useEffectEvent:function(e){var t=pn(),n={impl:e};return t.memoizedState=n,function(){if(ie&2)throw Error(et(440));return n.impl.apply(void 0,arguments)}}},Tp={readContext:sn,use:pu,useCallback:Dv,useContext:sn,useEffect:Sp,useImperativeHandle:wv,useInsertionEffect:Av,useLayoutEffect:Rv,useMemo:Uv,useReducer:ic,useRef:bv,useState:function(){return ic(ea)},useDebugValue:Mp,useDeferredValue:function(e,t){var n=ze();return Nv(n,_e.memoizedState,e,t)},useTransition:function(){var e=ic(ea)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:Ko(e),t]},useSyncExternalStore:hv,useId:Iv,useHostTransitionStatus:Ep,useFormState:$m,useActionState:$m,useOptimistic:function(e,t){var n=ze();return xv(n,_e,e,t)},useMemoCache:vp,useCacheRefresh:Bv};Tp.useEffectEvent=Tv;var Vv={readContext:sn,use:pu,useCallback:Dv,useContext:sn,useEffect:Sp,useImperativeHandle:wv,useInsertionEffect:Av,useLayoutEffect:Rv,useMemo:Uv,useReducer:qu,useRef:bv,useState:function(){return qu(ea)},useDebugValue:Mp,useDeferredValue:function(e,t){var n=ze();return _e===null?yp(n,e,t):Nv(n,_e.memoizedState,e,t)},useTransition:function(){var e=qu(ea)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:Ko(e),t]},useSyncExternalStore:hv,useId:Iv,useHostTransitionStatus:Ep,useFormState:tg,useActionState:tg,useOptimistic:function(e,t){var n=ze();return _e!==null?xv(n,_e,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:vp,useCacheRefresh:Bv};Vv.useEffectEvent=Tv;function Yu(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Td={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Fn(),a=Na(i);a.payload=t,n!=null&&(a.callback=n),t=La(e,a,i),t!==null&&(En(t,e,i),go(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Fn(),a=Na(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=La(e,a,i),t!==null&&(En(t,e,i),go(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fn(),i=Na(n);i.tag=2,t!=null&&(i.callback=t),t=La(e,i,n),t!==null&&(En(t,e,n),go(t,e,n))}};function ng(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!wo(n,i)||!wo(a,s):!0}function ig(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Td.enqueueReplaceState(t,t.state,null)}function _s(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ce({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function kv(e){bc(e)}function Xv(e){console.error(e)}function Wv(e){bc(e)}function Lc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function ag(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Ad(e,t,n){return n=Na(n),n.tag=3,n.payload={element:null},n.callback=function(){Lc(e,t)},n}function qv(e){return e=Na(e),e.tag=3,e}function Yv(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){ag(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){ag(t,n,i),typeof a!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function Yy(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Lr(t,n,a,!0),n=Gn.current,n!==null){switch(n.tag){case 31:case 13:return ti===null?Fc():n.alternate===null&&Le===0&&(Le=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Cc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),sf(e,i,a)),!1;case 22:return n.flags|=65536,i===Cc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),sf(e,i,a)),!1}throw Error(et(435,n.tag))}return sf(e,i,a),Fc(),!1}if(Jt)return t=Gn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==hd&&(e=Error(et(422),{cause:i}),Uo(Qn(e,n)))):(i!==hd&&(t=Error(et(423),{cause:i}),Uo(Qn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Qn(i,n),a=Ad(e.stateNode,i,a),Wu(e,a),Le!==4&&(Le=2)),!1;var s=Error(et(520),{cause:i});if(s=Qn(s,n),yo===null?yo=[s]:yo.push(s),Le!==4&&(Le=2),t===null)return!0;i=Qn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ad(n.stateNode,i,e),Wu(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Oa===null||!Oa.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=qv(a),Yv(a,e,n,i),Wu(n,a),!1}n=n.return}while(n!==null);return!1}var Ap=Error(et(461)),Xe=!1;function en(e,t,n,i){t.child=e===null?ov(t,null,n,i):ms(t,e.child,n,i)}function sg(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return ps(t),i=pp(e,t,n,r,s,a),o=mp(),e!==null&&!Xe?(gp(e,t,a),na(e,t,a)):(Jt&&o&&rp(t),t.flags|=1,en(e,t,i,a),t.child)}function rg(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!sp(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,jv(e,t,s,i,a)):(e=ec(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Rp(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:wo,n(r,i)&&e.ref===t.ref)return na(e,t,a)}return t.flags|=1,e=ji(s,i),e.ref=t.ref,e.return=t,t.child=e}function jv(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(wo(s,i)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=i=s,Rp(e,a))e.flags&131072&&(Xe=!0);else return t.lanes=e.lanes,na(e,t,a)}return Rd(e,t,n,i,a)}function Zv(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return og(e,t,s,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&nc(t,s!==null?s.cachePool:null),s!==null?Zm(t,s):Sd(),uv(t);else return i=t.lanes=536870912,og(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(nc(t,s.cachePool),Zm(t,s),Ma(),t.memoizedState=null):(e!==null&&nc(t,null),Sd(),Ma());return en(e,t,a,n),t.child}function so(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function og(e,t,n,i,a){var s=cp();return s=s===null?null:{parent:ke._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&nc(t,null),Sd(),uv(t),e!==null&&Lr(e,t,i,!0),t.childLanes=a,null}function sc(e,t){return t=Oc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function lg(e,t,n){return ms(t,e.child,null,n),e=sc(t,t.pendingProps),e.flags|=2,Nn(t),t.memoizedState=null,e}function jy(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Jt){if(i.mode==="hidden")return e=sc(t,i),t.lanes=536870912,so(null,e);if(Md(t),(e=Ae)?(e=Hx(e,Jn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:za!==null?{id:gi,overflow:_i}:null,retryLane:536870912,hydrationErrors:null},n=tv(e),n.return=t,t.child=n,an=t,Ae=null)):e=null,e===null)throw Ga(t);return t.lanes=536870912,null}return sc(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(Md(t),a)if(t.flags&256)t.flags&=-257,t=lg(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(et(558));else if(Xe||Lr(e,t,n,!1),a=(n&e.childLanes)!==0,Xe||a){if(i=Me,i!==null&&(r=A_(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,bs(e,r),En(i,e,r),Ap;Fc(),t=lg(e,t,n)}else e=s.treeContext,Ae=ei(r.nextSibling),an=t,Jt=!0,Ua=null,Jn=!1,e!==null&&nv(t,e),t=sc(t,i),t.flags|=4096;return t}return e=ji(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function rc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(et(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Rd(e,t,n,i,a){return ps(t),n=pp(e,t,n,i,void 0,a),i=mp(),e!==null&&!Xe?(gp(e,t,a),na(e,t,a)):(Jt&&i&&rp(t),t.flags|=1,en(e,t,n,a),t.child)}function cg(e,t,n,i,a,s){return ps(t),t.updateQueue=null,n=dv(t,i,n,a),fv(e),i=mp(),e!==null&&!Xe?(gp(e,t,s),na(e,t,s)):(Jt&&i&&rp(t),t.flags|=1,en(e,t,n,s),t.child)}function ug(e,t,n,i,a){if(ps(t),t.stateNode===null){var s=nr,r=n.contextType;typeof r=="object"&&r!==null&&(s=sn(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Td,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},fp(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?sn(r):nr,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Yu(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Td.enqueueReplaceState(s,s.state,null),vo(t,i,s,a),_o(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=_s(n,o);s.props=l;var c=s.context,d=n.contextType;r=nr,typeof d=="object"&&d!==null&&(r=sn(d));var h=n.getDerivedStateFromProps;d=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&ig(t,s,i,r),va=!1;var u=t.memoizedState;s.state=u,vo(t,i,s,a),_o(),c=t.memoizedState,o||u!==c||va?(typeof h=="function"&&(Yu(t,n,h,i),c=t.memoizedState),(l=va||ng(t,n,l,i,u,c,r))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,vd(e,t),r=t.memoizedProps,d=_s(n,r),s.props=d,h=t.pendingProps,u=s.context,c=n.contextType,l=nr,typeof c=="object"&&c!==null&&(l=sn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==h||u!==l)&&ig(t,s,i,l),va=!1,u=t.memoizedState,s.state=u,vo(t,i,s,a),_o();var p=t.memoizedState;r!==h||u!==p||va||e!==null&&e.dependencies!==null&&Rc(e.dependencies)?(typeof o=="function"&&(Yu(t,n,o,i),p=t.memoizedState),(d=va||ng(t,n,d,i,u,p,l)||e!==null&&e.dependencies!==null&&Rc(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,p,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,p,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),s.props=i,s.state=p,s.context=l,i=d):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,rc(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=ms(t,e.child,null,a),t.child=ms(t,null,n,a)):en(e,t,n,a),t.memoizedState=s.state,e=t.child):e=na(e,t,a),e}function fg(e,t,n,i){return hs(),t.flags|=256,en(e,t,n,i),t.child}var ju={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zu(e){return{baseLanes:e,cachePool:av()}}function Ku(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=On),e}function Kv(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Jt){if(a?Sa(t):Ma(),(e=Ae)?(e=Hx(e,Jn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:za!==null?{id:gi,overflow:_i}:null,retryLane:536870912,hydrationErrors:null},n=tv(e),n.return=t,t.child=n,an=t,Ae=null)):e=null,e===null)throw Ga(t);return Hd(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(Ma(),a=t.mode,o=Oc({mode:"hidden",children:o},a),i=cs(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Zu(n),i.childLanes=Ku(e,r,n),t.memoizedState=ju,so(null,i)):(Sa(t),Cd(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)t.flags&256?(Sa(t),t.flags&=-257,t=Qu(e,t,n)):t.memoizedState!==null?(Ma(),t.child=e.child,t.flags|=128,t=null):(Ma(),o=i.fallback,a=t.mode,i=Oc({mode:"visible",children:i.children},a),o=cs(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,ms(t,e.child,null,n),i=t.child,i.memoizedState=Zu(n),i.childLanes=Ku(e,r,n),t.memoizedState=ju,t=so(null,i));else if(Sa(t),Hd(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(et(419)),i.stack="",i.digest=r,Uo({value:i,source:null,stack:null}),t=Qu(e,t,n)}else if(Xe||Lr(e,t,n,!1),r=(n&e.childLanes)!==0,Xe||r){if(r=Me,r!==null&&(i=A_(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,bs(e,i),En(r,e,i),Ap;Gd(o)||Fc(),t=Qu(e,t,n)}else Gd(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ae=ei(o.nextSibling),an=t,Jt=!0,Ua=null,Jn=!1,e!==null&&nv(t,e),t=Cd(t,i.children),t.flags|=4096);return t}return a?(Ma(),o=i.fallback,a=t.mode,l=e.child,c=l.sibling,i=ji(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=ji(c,o):(o=cs(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,so(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Zu(n):(a=o.cachePool,a!==null?(l=ke._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=av(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=Ku(e,r,n),t.memoizedState=ju,so(e.child,i)):(Sa(t),n=e.child,e=n.sibling,n=ji(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Cd(e,t){return t=Oc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Oc(e,t){return e=Ln(22,e,null,t),e.lanes=0,e}function Qu(e,t,n){return ms(t,e.child,null,n),e=Cd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dg(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),md(e.return,t,n)}function Ju(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function Qv(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Be.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,be(Be,r),en(e,t,i,n),i=Jt?Do:0,!o&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dg(e,n,t);else if(e.tag===19)dg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Dc(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ju(t,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Dc(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ju(t,!0,n,null,s,i);break;case"together":Ju(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function na(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Va|=t.lanes,!(n&t.childLanes))if(e!==null){if(Lr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(et(153));if(t.child!==null){for(e=t.child,n=ji(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ji(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rp(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Rc(e)))}function Zy(e,t,n){switch(t.tag){case 3:Sc(t,t.stateNode.containerInfo),xa(t,ke,e.memoizedState.cache),hs();break;case 27:case 5:nd(t);break;case 4:Sc(t,t.stateNode.containerInfo);break;case 10:xa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Md(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Sa(t),t.flags|=128,null):n&t.child.childLanes?Kv(e,t,n):(Sa(t),e=na(e,t,n),e!==null?e.sibling:null);Sa(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Lr(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return Qv(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),be(Be,Be.current),i)break;return null;case 22:return t.lanes=0,Zv(e,t,n,t.pendingProps);case 24:xa(t,ke,e.memoizedState.cache)}return na(e,t,n)}function Jv(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!Rp(e,n)&&!(t.flags&128))return Xe=!1,Zy(e,t,n);Xe=!!(e.flags&131072)}else Xe=!1,Jt&&t.flags&1048576&&ev(t,Do,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=es(t.elementType),t.type=e,typeof e=="function")sp(e)?(i=_s(e,i),t.tag=1,t=ug(null,t,e,i,n)):(t.tag=0,t=Rd(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===Wh){t.tag=11,t=sg(null,t,e,i,n);break t}else if(a===qh){t.tag=14,t=rg(null,t,e,i,n);break t}}throw t=td(e)||e,Error(et(306,t,""))}}return t;case 0:return Rd(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=_s(i,t.pendingProps),ug(e,t,i,a,n);case 3:t:{if(Sc(t,t.stateNode.containerInfo),e===null)throw Error(et(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,vd(e,t),vo(t,i,null,n);var r=t.memoizedState;if(i=r.cache,xa(t,ke,i),i!==s.cache&&gd(t,[ke],n,!0),_o(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=fg(e,t,i,n);break t}else if(i!==a){a=Qn(Error(et(424)),t),Uo(a),t=fg(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ae=ei(e.firstChild),an=t,Jt=!0,Ua=null,Jn=!0,n=ov(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(hs(),i===a){t=na(e,t,n);break t}en(e,t,i,n)}t=t.child}return t;case 26:return rc(e,t),e===null?(n=Ng(t.type,null,t.pendingProps,null))?t.memoizedState=n:Jt||(n=t.type,e=t.pendingProps,i=Vc(Da.current).createElement(n),i[nn]=t,i[An]=e,on(i,n,e),Je(i),t.stateNode=i):t.memoizedState=Ng(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return nd(t),e===null&&Jt&&(i=t.stateNode=Vx(t.type,t.pendingProps,Da.current),an=t,Jn=!0,a=Ae,qa(t.type)?(Vd=a,Ae=ei(i.firstChild)):Ae=a),en(e,t,t.pendingProps.children,n),rc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Jt&&((a=i=Ae)&&(i=TE(i,t.type,t.pendingProps,Jn),i!==null?(t.stateNode=i,an=t,Ae=ei(i.firstChild),Jn=!1,a=!0):a=!1),a||Ga(t)),nd(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,Fd(a,s)?i=null:r!==null&&Fd(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=pp(e,t,Gy,null,null,n),Bo._currentValue=a),rc(e,t),en(e,t,i,n),t.child;case 6:return e===null&&Jt&&((e=n=Ae)&&(n=AE(n,t.pendingProps,Jn),n!==null?(t.stateNode=n,an=t,Ae=null,e=!0):e=!1),e||Ga(t)),null;case 13:return Kv(e,t,n);case 4:return Sc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ms(t,null,i,n):en(e,t,i,n),t.child;case 11:return sg(e,t,t.type,t.pendingProps,n);case 7:return en(e,t,t.pendingProps,n),t.child;case 8:return en(e,t,t.pendingProps.children,n),t.child;case 12:return en(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,xa(t,t.type,i.value),en(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,ps(t),a=sn(a),i=i(a),t.flags|=1,en(e,t,i,n),t.child;case 14:return rg(e,t,t.type,t.pendingProps,n);case 15:return jv(e,t,t.type,t.pendingProps,n);case 19:return Qv(e,t,n);case 31:return jy(e,t,n);case 22:return Zv(e,t,n,t.pendingProps);case 24:return ps(t),i=sn(ke),e===null?(a=cp(),a===null&&(a=Me,s=lp(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},fp(t),xa(t,ke,a)):(e.lanes&n&&(vd(e,t),vo(t,null,null,n),_o()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),xa(t,ke,i)):(i=s.cache,xa(t,ke,i),i!==a.cache&&gd(t,[ke],n,!0))),en(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(et(156,t.tag))}function Ni(e){e.flags|=4}function $u(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(yx())e.flags|=8192;else throw fs=Cc,up}else e.flags&=-16777217}function hg(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wx(t))if(yx())e.flags|=8192;else throw fs=Cc,up}function _l(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?E_():536870912,e.lanes|=t,Mr|=t)}function Xr(e,t){if(!Jt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Ky(e,t,n){var i=t.pendingProps;switch(op(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Zi(ke),mr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ws(t)?Ni(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xu())),Te(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(Ni(t),s!==null?(Te(t),hg(t,s)):(Te(t),$u(t,a,null,i,n))):s?s!==e.memoizedState?(Ni(t),Te(t),hg(t,s)):(Te(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Ni(t),Te(t),$u(t,a,e,i,n)),null;case 27:if(Mc(t),n=Da.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ni(t);else{if(!i){if(t.stateNode===null)throw Error(et(166));return Te(t),null}e=Mi.current,ws(t)?Vm(t):(e=Vx(a,i,n),t.stateNode=e,Ni(t))}return Te(t),null;case 5:if(Mc(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ni(t);else{if(!i){if(t.stateNode===null)throw Error(et(166));return Te(t),null}if(s=Mi.current,ws(t))Vm(t);else{var r=Vc(Da.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[nn]=t,s[An]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(on(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Ni(t)}}return Te(t),$u(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Ni(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(et(166));if(e=Da.current,ws(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=an,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[nn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Fx(e.nodeValue,n)),e||Ga(t,!0)}else e=Vc(e).createTextNode(i),e[nn]=t,t.stateNode=e}return Te(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=ws(t),n!==null){if(e===null){if(!i)throw Error(et(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(557));e[nn]=t}else hs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),e=!1}else n=Xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Nn(t),t):(Nn(t),null);if(t.flags&128)throw Error(et(558))}return Te(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ws(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(et(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(et(317));a[nn]=t}else hs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),a=!1}else a=Xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Nn(t),t):(Nn(t),null)}return Nn(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),_l(t,t.updateQueue),Te(t),null);case 4:return mr(),e===null&&Op(t.stateNode.containerInfo),Te(t),null;case 10:return Zi(t.type),Te(t),null;case 19:if($e(Be),i=t.memoizedState,i===null)return Te(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)Xr(i,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Dc(e),s!==null){for(t.flags|=128,Xr(i,!1),e=s.updateQueue,t.updateQueue=e,_l(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)$_(n,e),n=n.sibling;return be(Be,Be.current&1|2),Jt&&Hi(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Pn()>Ic&&(t.flags|=128,a=!0,Xr(i,!1),t.lanes=4194304)}else{if(!a)if(e=Dc(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,_l(t,e),Xr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Jt)return Te(t),null}else 2*Pn()-i.renderingStartTime>Ic&&n!==536870912&&(t.flags|=128,a=!0,Xr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Pn(),e.sibling=null,n=Be.current,be(Be,a?n&1|2:n&1),Jt&&Hi(t,i.treeForkCount),e):(Te(t),null);case 22:case 23:return Nn(t),dp(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),n=t.updateQueue,n!==null&&_l(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&$e(us),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zi(ke),Te(t),null;case 25:return null;case 30:return null}throw Error(et(156,t.tag))}function Qy(e,t){switch(op(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(ke),mr(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Mc(t),null;case 31:if(t.memoizedState!==null){if(Nn(t),t.alternate===null)throw Error(et(340));hs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Nn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(et(340));hs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $e(Be),null;case 4:return mr(),null;case 10:return Zi(t.type),null;case 22:case 23:return Nn(t),dp(),e!==null&&$e(us),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zi(ke),null;case 25:return null;default:return null}}function $v(e,t){switch(op(t),t.tag){case 3:Zi(ke),mr();break;case 26:case 27:case 5:Mc(t);break;case 4:mr();break;case 31:t.memoizedState!==null&&Nn(t);break;case 13:Nn(t);break;case 19:$e(Be);break;case 10:Zi(t.type);break;case 22:case 23:Nn(t),dp(),e!==null&&$e(us);break;case 24:Zi(ke)}}function Qo(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){ue(t,t.return,o)}}function Ha(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(d){ue(a,l,d)}}}i=i.next}while(i!==s)}}catch(d){ue(t,t.return,d)}}function tx(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{cv(t,n)}catch(i){ue(e,e.return,i)}}}function ex(e,t,n){n.props=_s(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ue(e,t,i)}}function So(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){ue(e,t,a)}}function vi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){ue(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ue(e,t,a)}else n.current=null}function nx(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){ue(e,e.return,a)}}function tf(e,t,n){try{var i=e.stateNode;xE(i,e.type,n,t),i[An]=t}catch(a){ue(e,e.return,a)}}function ix(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&qa(e.type)||e.tag===4}function ef(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ix(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wd(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wi));else if(i!==4&&(i===27&&qa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(wd(e,t,n),e=e.sibling;e!==null;)wd(e,t,n),e=e.sibling}function Pc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&qa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Pc(e,t,n),e=e.sibling;e!==null;)Pc(e,t,n),e=e.sibling}function ax(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);on(t,i,n),t[nn]=e,t[An]=n}catch(s){ue(e,e.return,s)}}var Vi=!1,Ve=!1,nf=!1,pg=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function Jy(e,t){if(e=e.containerInfo,Id=qc,e=W_(e),np(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,d=0,h=e,u=null;e:for(;;){for(var p;h!==n||a!==0&&h.nodeType!==3||(o=r+a),h!==s||i!==0&&h.nodeType!==3||(l=r+i),h.nodeType===3&&(r+=h.nodeValue.length),(p=h.firstChild)!==null;)u=h,h=p;for(;;){if(h===e)break e;if(u===n&&++c===a&&(o=r),u===s&&++d===i&&(l=r),(p=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bd={focusedElem:e,selectionRange:n},qc=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,s=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,n=t,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var v=_s(n.type,a);e=i.getSnapshotBeforeUpdate(v,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(y){ue(n,n.return,y)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)zd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(et(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function sx(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Oi(e,n),i&4&&Qo(5,n);break;case 1:if(Oi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ue(n,n.return,r)}else{var a=_s(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ue(n,n.return,r)}}i&64&&tx(n),i&512&&So(n,n.return);break;case 3:if(Oi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{cv(e,t)}catch(r){ue(n,n.return,r)}}break;case 27:t===null&&i&4&&ax(n);case 26:case 5:Oi(e,n),t===null&&i&4&&nx(n),i&512&&So(n,n.return);break;case 12:Oi(e,n);break;case 31:Oi(e,n),i&4&&lx(e,n);break;case 13:Oi(e,n),i&4&&cx(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=oE.bind(null,n),RE(e,n))));break;case 22:if(i=n.memoizedState!==null||Vi,!i){t=t!==null&&t.memoizedState!==null||Ve,a=Vi;var s=Ve;Vi=i,(Ve=t)&&!s?Gi(e,n,(n.subtreeFlags&8772)!==0):Oi(e,n),Vi=a,Ve=s}break;case 30:break;default:Oi(e,n)}}function rx(e){var t=e.alternate;t!==null&&(e.alternate=null,rx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Kh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var we=null,Mn=!1;function Li(e,t,n){for(n=n.child;n!==null;)ox(e,t,n),n=n.sibling}function ox(e,t,n){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount(Xo,n)}catch{}switch(n.tag){case 26:Ve||vi(n,t),Li(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ve||vi(n,t);var i=we,a=Mn;qa(n.type)&&(we=n.stateNode,Mn=!1),Li(e,t,n),bo(n.stateNode),we=i,Mn=a;break;case 5:Ve||vi(n,t);case 6:if(i=we,a=Mn,we=null,Li(e,t,n),we=i,Mn=a,we!==null)if(Mn)try{(we.nodeType===9?we.body:we.nodeName==="HTML"?we.ownerDocument.body:we).removeChild(n.stateNode)}catch(s){ue(n,t,s)}else try{we.removeChild(n.stateNode)}catch(s){ue(n,t,s)}break;case 18:we!==null&&(Mn?(e=we,Rg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Tr(e)):Rg(we,n.stateNode));break;case 4:i=we,a=Mn,we=n.stateNode.containerInfo,Mn=!0,Li(e,t,n),we=i,Mn=a;break;case 0:case 11:case 14:case 15:Ha(2,n,t),Ve||Ha(4,n,t),Li(e,t,n);break;case 1:Ve||(vi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&ex(n,t,i)),Li(e,t,n);break;case 21:Li(e,t,n);break;case 22:Ve=(i=Ve)||n.memoizedState!==null,Li(e,t,n),Ve=i;break;default:Li(e,t,n)}}function lx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Tr(e)}catch(n){ue(t,t.return,n)}}}function cx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tr(e)}catch(n){ue(t,t.return,n)}}function $y(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new pg),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new pg),t;default:throw Error(et(435,e.tag))}}function vl(e,t){var n=$y(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=lE.bind(null,e,i);i.then(a,a)}})}function vn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(qa(o.type)){we=o.stateNode,Mn=!1;break t}break;case 5:we=o.stateNode,Mn=!1;break t;case 3:case 4:we=o.stateNode.containerInfo,Mn=!0;break t}o=o.return}if(we===null)throw Error(et(160));ox(s,r,a),we=null,Mn=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ux(t,e),t=t.sibling}var oi=null;function ux(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vn(t,e),xn(e),i&4&&(Ha(3,e,e.return),Qo(3,e),Ha(5,e,e.return));break;case 1:vn(t,e),xn(e),i&512&&(Ve||n===null||vi(n,n.return)),i&64&&Vi&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=oi;if(vn(t,e),xn(e),i&512&&(Ve||n===null||vi(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[Yo]||s[nn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),on(s,i,n),s[nn]=e,Je(s),i=s;break t;case"link":var r=Og("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}s=a.createElement(i),on(s,i,n),a.head.appendChild(s);break;case"meta":if(r=Og("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}s=a.createElement(i),on(s,i,n),a.head.appendChild(s);break;default:throw Error(et(468,i))}s[nn]=e,Je(s),i=s}e.stateNode=i}else Pg(a,e.type,e.stateNode);else e.stateNode=Lg(a,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?Pg(a,e.type,e.stateNode):Lg(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&tf(e,e.memoizedProps,n.memoizedProps)}break;case 27:vn(t,e),xn(e),i&512&&(Ve||n===null||vi(n,n.return)),n!==null&&i&4&&tf(e,e.memoizedProps,n.memoizedProps);break;case 5:if(vn(t,e),xn(e),i&512&&(Ve||n===null||vi(n,n.return)),e.flags&32){a=e.stateNode;try{_r(a,"")}catch(v){ue(e,e.return,v)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,tf(e,a,n!==null?n.memoizedProps:a)),i&1024&&(nf=!0);break;case 6:if(vn(t,e),xn(e),i&4){if(e.stateNode===null)throw Error(et(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(v){ue(e,e.return,v)}}break;case 3:if(cc=null,a=oi,oi=kc(t.containerInfo),vn(t,e),oi=a,xn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Tr(t.containerInfo)}catch(v){ue(e,e.return,v)}nf&&(nf=!1,fx(e));break;case 4:i=oi,oi=kc(e.stateNode.containerInfo),vn(t,e),xn(e),oi=i;break;case 12:vn(t,e),xn(e);break;case 31:vn(t,e),xn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,vl(e,i)));break;case 13:vn(t,e),xn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(_u=Pn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,vl(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Vi,d=Ve;if(Vi=c||a,Ve=d||l,vn(t,e),Ve=d,Vi=c,xn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Vi||Ve||ns(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var h=l.memoizedProps.style,u=h!=null&&h.hasOwnProperty("display")?h.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(v){ue(l,l.return,v)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(v){ue(l,l.return,v)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;a?Cg(p,!0):Cg(l.stateNode,!1)}catch(v){ue(l,l.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,vl(e,n))));break;case 19:vn(t,e),xn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,vl(e,i)));break;case 30:break;case 21:break;default:vn(t,e),xn(e)}}function xn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(ix(i)){n=i;break}i=i.return}if(n==null)throw Error(et(160));switch(n.tag){case 27:var a=n.stateNode,s=ef(e);Pc(e,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(_r(r,""),n.flags&=-33);var o=ef(e);Pc(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=ef(e);wd(e,c,l);break;default:throw Error(et(161))}}catch(d){ue(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;fx(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Oi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sx(e,t.alternate,t),t=t.sibling}function ns(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ha(4,t,t.return),ns(t);break;case 1:vi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&ex(t,t.return,n),ns(t);break;case 27:bo(t.stateNode);case 26:case 5:vi(t,t.return),ns(t);break;case 22:t.memoizedState===null&&ns(t);break;case 30:ns(t);break;default:ns(t)}e=e.sibling}}function Gi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:Gi(a,s,n),Qo(4,s);break;case 1:if(Gi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){ue(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)lv(l[a],o)}catch(c){ue(i,i.return,c)}}n&&r&64&&tx(s),So(s,s.return);break;case 27:ax(s);case 26:case 5:Gi(a,s,n),n&&i===null&&r&4&&nx(s),So(s,s.return);break;case 12:Gi(a,s,n);break;case 31:Gi(a,s,n),n&&r&4&&lx(a,s);break;case 13:Gi(a,s,n),n&&r&4&&cx(a,s);break;case 22:s.memoizedState===null&&Gi(a,s,n),So(s,s.return);break;case 30:break;default:Gi(a,s,n)}t=t.sibling}}function Cp(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Zo(n))}function wp(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Zo(e))}function ii(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)dx(e,t,n,i),t=t.sibling}function dx(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ii(e,t,n,i),a&2048&&Qo(9,t);break;case 1:ii(e,t,n,i);break;case 3:ii(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Zo(e)));break;case 12:if(a&2048){ii(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ue(t,t.return,l)}}else ii(e,t,n,i);break;case 31:ii(e,t,n,i);break;case 13:ii(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?ii(e,t,n,i):Mo(e,t):s._visibility&2?ii(e,t,n,i):(s._visibility|=2,qs(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&Cp(r,t);break;case 24:ii(e,t,n,i),a&2048&&wp(t.alternate,t);break;default:ii(e,t,n,i)}}function qs(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:qs(s,r,o,l,a),Qo(8,r);break;case 23:break;case 22:var d=r.stateNode;r.memoizedState!==null?d._visibility&2?qs(s,r,o,l,a):Mo(s,r):(d._visibility|=2,qs(s,r,o,l,a)),a&&c&2048&&Cp(r.alternate,r);break;case 24:qs(s,r,o,l,a),a&&c&2048&&wp(r.alternate,r);break;default:qs(s,r,o,l,a)}t=t.sibling}}function Mo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:Mo(n,i),a&2048&&Cp(i.alternate,i);break;case 24:Mo(n,i),a&2048&&wp(i.alternate,i);break;default:Mo(n,i)}t=t.sibling}}var ro=8192;function Ds(e,t,n){if(e.subtreeFlags&ro)for(e=e.child;e!==null;)hx(e,t,n),e=e.sibling}function hx(e,t,n){switch(e.tag){case 26:Ds(e,t,n),e.flags&ro&&e.memoizedState!==null&&zE(n,oi,e.memoizedState,e.memoizedProps);break;case 5:Ds(e,t,n);break;case 3:case 4:var i=oi;oi=kc(e.stateNode.containerInfo),Ds(e,t,n),oi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ro,ro=16777216,Ds(e,t,n),ro=i):Ds(e,t,n));break;default:Ds(e,t,n)}}function px(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Wr(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,gx(i,e)}px(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)mx(e),e=e.sibling}function mx(e){switch(e.tag){case 0:case 11:case 15:Wr(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:Wr(e);break;case 12:Wr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,oc(e)):Wr(e);break;default:Wr(e)}}function oc(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,gx(i,e)}px(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ha(8,t,t.return),oc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,oc(t));break;default:oc(t)}e=e.sibling}}function gx(e,t){for(;Qe!==null;){var n=Qe;switch(n.tag){case 0:case 11:case 15:Ha(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Zo(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Qe=i;else t:for(n=e;Qe!==null;){i=Qe;var a=i.sibling,s=i.return;if(rx(i),i===n){Qe=null;break t}if(a!==null){a.return=s,Qe=a;break t}Qe=s}}}var tE={getCacheForType:function(e){var t=sn(ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return sn(ke).controller.signal}},eE=typeof WeakMap=="function"?WeakMap:Map,ie=0,Me=null,jt=null,Zt=0,ce=0,Un=null,Aa=!1,Pr=!1,Dp=!1,ia=0,Le=0,Va=0,ds=0,Up=0,On=0,Mr=0,yo=null,yn=null,Dd=!1,_u=0,_x=0,Ic=1/0,Bc=null,Oa=null,qe=0,Pa=null,yr=null,Ki=0,Ud=0,Nd=null,vx=null,Eo=0,Ld=null;function Fn(){return ie&2&&Zt!==0?Zt&-Zt:Ut.T!==null?Lp():R_()}function xx(){if(On===0)if(!(Zt&536870912)||Jt){var e=ul;ul<<=1,!(ul&3932160)&&(ul=262144),On=e}else On=536870912;return e=Gn.current,e!==null&&(e.flags|=32),On}function En(e,t,n){(e===Me&&(ce===2||ce===9)||e.cancelPendingCommit!==null)&&(Er(e,0),Ra(e,Zt,On,!1)),qo(e,n),(!(ie&2)||e!==Me)&&(e===Me&&(!(ie&2)&&(ds|=n),Le===4&&Ra(e,Zt,On,!1)),wi(e))}function Sx(e,t,n){if(ie&6)throw Error(et(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Wo(e,t),a=i?aE(e,t):af(e,t,!0),s=i;do{if(a===0){Pr&&!i&&Ra(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!nE(n)){a=af(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=yo;var l=o.current.memoizedState.isDehydrated;if(l&&(Er(o,r).flags|=256),r=af(o,r,!1),r!==2){if(Dp&&!l){o.errorRecoveryDisabledLanes|=s,ds|=s,a=4;break t}s=yn,yn=a,s!==null&&(yn===null?yn=s:yn.push.apply(yn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){Er(e,0),Ra(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error(et(345));case 4:if((t&4194048)!==t)break;case 6:Ra(i,t,On,!Aa);break t;case 2:yn=null;break;case 3:case 5:break;default:throw Error(et(329))}if((t&62914560)===t&&(a=_u+300-Pn(),10<a)){if(Ra(i,t,On,!Aa),ru(i,0,!0)!==0)break t;Ki=t,i.timeoutHandle=Gx(mg.bind(null,i,n,yn,Bc,Dd,t,On,ds,Mr,Aa,s,"Throttled",-0,0),a);break t}mg(i,n,yn,Bc,Dd,t,On,ds,Mr,Aa,s,null,-0,0)}}break}while(!0);wi(e)}function mg(e,t,n,i,a,s,r,o,l,c,d,h,u,p){if(e.timeoutHandle=-1,h=t.subtreeFlags,h&8192||(h&16785408)===16785408){h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},hx(t,s,h);var v=(s&62914560)===s?_u-Pn():(s&4194048)===s?_x-Pn():0;if(v=GE(h,v),v!==null){Ki=s,e.cancelPendingCommit=v(_g.bind(null,e,t,s,n,i,a,r,o,l,d,h,null,u,p)),Ra(e,s,r,!c);return}}_g(e,t,s,n,i,a,r,o,l)}function nE(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!zn(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ra(e,t,n,i){t&=~Up,t&=~ds,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-Bn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&b_(e,n,t)}function vu(){return ie&6?!0:(Jo(0),!1)}function Np(){if(jt!==null){if(ce===0)var e=jt.return;else e=jt,qi=Ts=null,_p(e),ur=null,No=0,e=jt;for(;e!==null;)$v(e.alternate,e),e=e.return;jt=null}}function Er(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,yE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ki=0,Np(),Me=e,jt=n=ji(e.current,null),Zt=t,ce=0,Un=null,Aa=!1,Pr=Wo(e,t),Dp=!1,Mr=On=Up=ds=Va=Le=0,yn=yo=null,Dd=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Bn(i),s=1<<a;t|=e[a],i&=~s}return ia=t,uu(),n}function Mx(e,t){zt=null,Ut.H=Oo,t===Or||t===du?(t=Ym(),ce=3):t===up?(t=Ym(),ce=4):ce=t===Ap?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Un=t,jt===null&&(Le=1,Lc(e,Qn(t,e.current)))}function yx(){var e=Gn.current;return e===null?!0:(Zt&4194048)===Zt?ti===null:(Zt&62914560)===Zt||Zt&536870912?e===ti:!1}function Ex(){var e=Ut.H;return Ut.H=Oo,e===null?Oo:e}function bx(){var e=Ut.A;return Ut.A=tE,e}function Fc(){Le=4,Aa||(Zt&4194048)!==Zt&&Gn.current!==null||(Pr=!0),!(Va&134217727)&&!(ds&134217727)||Me===null||Ra(Me,Zt,On,!1)}function af(e,t,n){var i=ie;ie|=2;var a=Ex(),s=bx();(Me!==e||Zt!==t)&&(Bc=null,Er(e,t)),t=!1;var r=Le;t:do try{if(ce!==0&&jt!==null){var o=jt,l=Un;switch(ce){case 8:Np(),r=6;break t;case 3:case 2:case 9:case 6:Gn.current===null&&(t=!0);var c=ce;if(ce=0,Un=null,sr(e,o,l,c),n&&Pr){r=0;break t}break;default:c=ce,ce=0,Un=null,sr(e,o,l,c)}}iE(),r=Le;break}catch(d){Mx(e,d)}while(!0);return t&&e.shellSuspendCounter++,qi=Ts=null,ie=i,Ut.H=a,Ut.A=s,jt===null&&(Me=null,Zt=0,uu()),r}function iE(){for(;jt!==null;)Tx(jt)}function aE(e,t){var n=ie;ie|=2;var i=Ex(),a=bx();Me!==e||Zt!==t?(Bc=null,Ic=Pn()+500,Er(e,t)):Pr=Wo(e,t);t:do try{if(ce!==0&&jt!==null){t=jt;var s=Un;e:switch(ce){case 1:ce=0,Un=null,sr(e,t,s,1);break;case 2:case 9:if(qm(s)){ce=0,Un=null,gg(t);break}t=function(){ce!==2&&ce!==9||Me!==e||(ce=7),wi(e)},s.then(t,t);break t;case 3:ce=7;break t;case 4:ce=5;break t;case 7:qm(s)?(ce=0,Un=null,gg(t)):(ce=0,Un=null,sr(e,t,s,7));break;case 5:var r=null;switch(jt.tag){case 26:r=jt.memoizedState;case 5:case 27:var o=jt;if(r?Wx(r):o.stateNode.complete){ce=0,Un=null;var l=o.sibling;if(l!==null)jt=l;else{var c=o.return;c!==null?(jt=c,xu(c)):jt=null}break e}}ce=0,Un=null,sr(e,t,s,5);break;case 6:ce=0,Un=null,sr(e,t,s,6);break;case 8:Np(),Le=6;break t;default:throw Error(et(462))}}sE();break}catch(d){Mx(e,d)}while(!0);return qi=Ts=null,Ut.H=i,Ut.A=a,ie=n,jt!==null?0:(Me=null,Zt=0,uu(),Le)}function sE(){for(;jt!==null&&!CM();)Tx(jt)}function Tx(e){var t=Jv(e.alternate,e,ia);e.memoizedProps=e.pendingProps,t===null?xu(e):jt=t}function gg(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=cg(n,t,t.pendingProps,t.type,void 0,Zt);break;case 11:t=cg(n,t,t.pendingProps,t.type.render,t.ref,Zt);break;case 5:_p(t);default:$v(n,t),t=jt=$_(t,ia),t=Jv(n,t,ia)}e.memoizedProps=e.pendingProps,t===null?xu(e):jt=t}function sr(e,t,n,i){qi=Ts=null,_p(t),ur=null,No=0;var a=t.return;try{if(Yy(e,a,t,n,Zt)){Le=1,Lc(e,Qn(n,e.current)),jt=null;return}}catch(s){if(a!==null)throw jt=a,s;Le=1,Lc(e,Qn(n,e.current)),jt=null;return}t.flags&32768?(Jt||i===1?e=!0:Pr||Zt&536870912?e=!1:(Aa=e=!0,(i===2||i===9||i===3||i===6)&&(i=Gn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Ax(t,e)):xu(t)}function xu(e){var t=e;do{if(t.flags&32768){Ax(t,Aa);return}e=t.return;var n=Ky(t.alternate,t,ia);if(n!==null){jt=n;return}if(t=t.sibling,t!==null){jt=t;return}jt=t=e}while(t!==null);Le===0&&(Le=5)}function Ax(e,t){do{var n=Qy(e.alternate,e);if(n!==null){n.flags&=32767,jt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){jt=e;return}jt=e=n}while(e!==null);Le=6,jt=null}function _g(e,t,n,i,a,s,r,o,l){e.cancelPendingCommit=null;do Su();while(qe!==0);if(ie&6)throw Error(et(327));if(t!==null){if(t===e.current)throw Error(et(177));if(s=t.lanes|t.childLanes,s|=ip,FM(e,n,s,r,o,l),e===Me&&(jt=Me=null,Zt=0),yr=t,Pa=e,Ki=n,Ud=s,Nd=a,vx=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,cE(yc,function(){return Ux(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Ut.T,Ut.T=null,a=ae.p,ae.p=2,r=ie,ie|=4;try{Jy(e,t,n)}finally{ie=r,ae.p=a,Ut.T=i}}qe=1,Rx(),Cx(),wx()}}function Rx(){if(qe===1){qe=0;var e=Pa,t=yr,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Ut.T,Ut.T=null;var i=ae.p;ae.p=2;var a=ie;ie|=4;try{ux(t,e);var s=Bd,r=W_(e.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&X_(o.ownerDocument.documentElement,o)){if(l!==null&&np(o)){var c=l.start,d=l.end;if(d===void 0&&(d=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(d,o.value.length);else{var h=o.ownerDocument||document,u=h&&h.defaultView||window;if(u.getSelection){var p=u.getSelection(),v=o.textContent.length,y=Math.min(l.start,v),g=l.end===void 0?y:Math.min(l.end,v);!p.extend&&y>g&&(r=g,g=y,y=r);var f=zm(o,y),m=zm(o,g);if(f&&m&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==m.node||p.focusOffset!==m.offset)){var _=h.createRange();_.setStart(f.node,f.offset),p.removeAllRanges(),y>g?(p.addRange(_),p.extend(m.node,m.offset)):(_.setEnd(m.node,m.offset),p.addRange(_))}}}}for(h=[],p=o;p=p.parentNode;)p.nodeType===1&&h.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<h.length;o++){var M=h[o];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}qc=!!Id,Bd=Id=null}finally{ie=a,ae.p=i,Ut.T=n}}e.current=t,qe=2}}function Cx(){if(qe===2){qe=0;var e=Pa,t=yr,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Ut.T,Ut.T=null;var i=ae.p;ae.p=2;var a=ie;ie|=4;try{sx(e,t.alternate,t)}finally{ie=a,ae.p=i,Ut.T=n}}qe=3}}function wx(){if(qe===4||qe===3){qe=0,wM();var e=Pa,t=yr,n=Ki,i=vx;t.subtreeFlags&10256||t.flags&10256?qe=5:(qe=0,yr=Pa=null,Dx(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Oa=null),Zh(n),t=t.stateNode,In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot(Xo,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Ut.T,a=ae.p,ae.p=2,Ut.T=null;try{for(var s=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{Ut.T=t,ae.p=a}}Ki&3&&Su(),wi(e),a=e.pendingLanes,n&261930&&a&42?e===Ld?Eo++:(Eo=0,Ld=e):Eo=0,Jo(0)}}function Dx(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Zo(t)))}function Su(){return Rx(),Cx(),wx(),Ux()}function Ux(){if(qe!==5)return!1;var e=Pa,t=Ud;Ud=0;var n=Zh(Ki),i=Ut.T,a=ae.p;try{ae.p=32>n?32:n,Ut.T=null,n=Nd,Nd=null;var s=Pa,r=Ki;if(qe=0,yr=Pa=null,Ki=0,ie&6)throw Error(et(331));var o=ie;if(ie|=4,mx(s.current),dx(s,s.current,r,n),ie=o,Jo(0,!1),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot(Xo,s)}catch{}return!0}finally{ae.p=a,Ut.T=i,Dx(e,t)}}function vg(e,t,n){t=Qn(n,t),t=Ad(e.stateNode,t,2),e=La(e,t,2),e!==null&&(qo(e,2),wi(e))}function ue(e,t,n){if(e.tag===3)vg(e,e,n);else for(;t!==null;){if(t.tag===3){vg(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Oa===null||!Oa.has(i))){e=Qn(n,e),n=qv(2),i=La(t,n,2),i!==null&&(Yv(n,i,t,e),qo(i,2),wi(i));break}}t=t.return}}function sf(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new eE;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Dp=!0,a.add(n),e=rE.bind(null,e,t,n),t.then(e,e))}function rE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Me===e&&(Zt&n)===n&&(Le===4||Le===3&&(Zt&62914560)===Zt&&300>Pn()-_u?!(ie&2)&&Er(e,0):Up|=n,Mr===Zt&&(Mr=0)),wi(e)}function Nx(e,t){t===0&&(t=E_()),e=bs(e,t),e!==null&&(qo(e,t),wi(e))}function oE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nx(e,n)}function lE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(et(314))}i!==null&&i.delete(t),Nx(e,n)}function cE(e,t){return Yh(e,t)}var zc=null,Ys=null,Od=!1,Gc=!1,rf=!1,Ca=0;function wi(e){e!==Ys&&e.next===null&&(Ys===null?zc=Ys=e:Ys=Ys.next=e),Gc=!0,Od||(Od=!0,fE())}function Jo(e,t){if(!rf&&Gc){rf=!0;do for(var n=!1,i=zc;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Bn(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,xg(i,s))}else s=Zt,s=ru(i,i===Me?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||Wo(i,s)||(n=!0,xg(i,s));i=i.next}while(n);rf=!1}}function uE(){Lx()}function Lx(){Gc=Od=!1;var e=0;Ca!==0&&ME()&&(e=Ca);for(var t=Pn(),n=null,i=zc;i!==null;){var a=i.next,s=Ox(i,t);s===0?(i.next=null,n===null?zc=a:n.next=a,a===null&&(Ys=n)):(n=i,(e!==0||s&3)&&(Gc=!0)),i=a}qe!==0&&qe!==5||Jo(e),Ca!==0&&(Ca=0)}function Ox(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-Bn(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=BM(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=Me,n=Zt,n=ru(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ce===2||ce===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Lu(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Wo(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Lu(i),Zh(n)){case 2:case 8:n=M_;break;case 32:n=yc;break;case 268435456:n=y_;break;default:n=yc}return i=Px.bind(null,e),n=Yh(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Lu(i),e.callbackPriority=2,e.callbackNode=null,2}function Px(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Su()&&e.callbackNode!==n)return null;var i=Zt;return i=ru(e,e===Me?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Sx(e,i,t),Ox(e,Pn()),e.callbackNode!=null&&e.callbackNode===n?Px.bind(null,e):null)}function xg(e,t){if(Su())return null;Sx(e,t,!0)}function fE(){EE(function(){ie&6?Yh(S_,uE):Lx()})}function Lp(){if(Ca===0){var e=vr;e===0&&(e=cl,cl<<=1,!(cl&261888)&&(cl=256)),Ca=e}return Ca}function Sg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jl(""+e)}function Mg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function dE(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=Sg((a[An]||null).action),r=i.submitter;r&&(t=(t=r[An]||null)?Sg(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new ou("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ca!==0){var l=r?Mg(a,r):new FormData(a);bd(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?Mg(a,r):new FormData(a),bd(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var of=0;of<dd.length;of++){var lf=dd[of],hE=lf.toLowerCase(),pE=lf[0].toUpperCase()+lf.slice(1);ui(hE,"on"+pE)}ui(Y_,"onAnimationEnd");ui(j_,"onAnimationIteration");ui(Z_,"onAnimationStart");ui("dblclick","onDoubleClick");ui("focusin","onFocus");ui("focusout","onBlur");ui(Dy,"onTransitionRun");ui(Uy,"onTransitionStart");ui(Ny,"onTransitionCancel");ui(K_,"onTransitionEnd");gr("onMouseEnter",["mouseout","mouseover"]);gr("onMouseLeave",["mouseout","mouseover"]);gr("onPointerEnter",["pointerout","pointerover"]);gr("onPointerLeave",["pointerout","pointerover"]);Ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po));function Ix(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(d){bc(d)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(d){bc(d)}a.currentTarget=null,s=l}}}}function Yt(e,t){var n=t[ad];n===void 0&&(n=t[ad]=new Set);var i=e+"__bubble";n.has(i)||(Bx(t,e,2,!1),n.add(i))}function cf(e,t,n){var i=0;t&&(i|=4),Bx(n,e,i,t)}var xl="_reactListening"+Math.random().toString(36).slice(2);function Op(e){if(!e[xl]){e[xl]=!0,C_.forEach(function(n){n!=="selectionchange"&&(mE.has(n)||cf(n,!1,e),cf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xl]||(t[xl]=!0,cf("selectionchange",!1,t))}}function Bx(e,t,n,i){switch(Kx(t)){case 2:var a=kE;break;case 8:a=XE;break;default:a=Fp}n=a.bind(null,t,n,e),a=void 0,!cd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function uf(e,t,n,i,a){var s=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=Ks(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}I_(function(){var c=s,d=Jh(n),h=[];t:{var u=Q_.get(e);if(u!==void 0){var p=ou,v=e;switch(e){case"keypress":if(tc(n)===0)break t;case"keydown":case"keyup":p=ly;break;case"focusin":v="focus",p=Fu;break;case"focusout":v="blur",p=Fu;break;case"beforeblur":case"afterblur":p=Fu;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=wm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=KM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=fy;break;case Y_:case j_:case Z_:p=$M;break;case K_:p=hy;break;case"scroll":case"scrollend":p=jM;break;case"wheel":p=my;break;case"copy":case"cut":case"paste":p=ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Um;break;case"toggle":case"beforetoggle":p=_y}var y=(t&4)!==0,g=!y&&(e==="scroll"||e==="scrollend"),f=y?u!==null?u+"Capture":null:u;y=[];for(var m=c,_;m!==null;){var M=m;if(_=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||_===null||f===null||(M=Ro(m,f),M!=null&&y.push(Io(m,M,_))),g)break;m=m.return}0<y.length&&(u=new p(u,v,null,n,d),h.push({event:u,listeners:y}))}}if(!(t&7)){t:{if(u=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",u&&n!==ld&&(v=n.relatedTarget||n.fromElement)&&(Ks(v)||v[Ur]))break t;if((p||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Ks(v):null,v!==null&&(g=ko(v),y=v.tag,v!==g||y!==5&&y!==27&&y!==6)&&(v=null)):(p=null,v=c),p!==v)){if(y=wm,M="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=Um,M="onPointerLeave",f="onPointerEnter",m="pointer"),g=p==null?u:ao(p),_=v==null?u:ao(v),u=new y(M,m+"leave",p,n,d),u.target=g,u.relatedTarget=_,M=null,Ks(d)===c&&(y=new y(f,m+"enter",v,n,d),y.target=_,y.relatedTarget=g,M=y),g=M,p&&v)e:{for(y=gE,f=p,m=v,_=0,M=f;M;M=y(M))_++;M=0;for(var C=m;C;C=y(C))M++;for(;0<_-M;)f=y(f),_--;for(;0<M-_;)m=y(m),M--;for(;_--;){if(f===m||m!==null&&f===m.alternate){y=f;break e}f=y(f),m=y(m)}y=null}else y=null;p!==null&&yg(h,u,p,y,!1),v!==null&&g!==null&&yg(h,g,v,y,!0)}}t:{if(u=c?ao(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var b=Pm;else if(Om(u))if(V_)b=Ry;else{b=Ty;var R=by}else p=u.nodeName,!p||p.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Qh(c.elementType)&&(b=Pm):b=Ay;if(b&&(b=b(e,c))){H_(h,b,n,d);break t}R&&R(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&od(u,"number",u.value)}switch(R=c?ao(c):window,e){case"focusin":(Om(R)||R.contentEditable==="true")&&($s=R,ud=c,po=null);break;case"focusout":po=ud=$s=null;break;case"mousedown":fd=!0;break;case"contextmenu":case"mouseup":case"dragend":fd=!1,Gm(h,n,d);break;case"selectionchange":if(wy)break;case"keydown":case"keyup":Gm(h,n,d)}var x;if(ep)t:{switch(e){case"compositionstart":var A="onCompositionStart";break t;case"compositionend":A="onCompositionEnd";break t;case"compositionupdate":A="onCompositionUpdate";break t}A=void 0}else Js?z_(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(F_&&n.locale!=="ko"&&(Js||A!=="onCompositionStart"?A==="onCompositionEnd"&&Js&&(x=B_()):(Ta=d,$h="value"in Ta?Ta.value:Ta.textContent,Js=!0)),R=Hc(c,A),0<R.length&&(A=new Dm(A,e,null,n,d),h.push({event:A,listeners:R}),x?A.data=x:(x=G_(n),x!==null&&(A.data=x)))),(x=xy?Sy(e,n):My(e,n))&&(A=Hc(c,"onBeforeInput"),0<A.length&&(R=new Dm("onBeforeInput","beforeinput",null,n,d),h.push({event:R,listeners:A}),R.data=x)),dE(h,e,c,n,d)}Ix(h,t)})}function Io(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hc(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=Ro(e,n),a!=null&&i.unshift(Io(e,a,s)),a=Ro(e,t),a!=null&&i.push(Io(e,a,s))),e.tag===3)return i;e=e.return}return[]}function gE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function yg(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=Ro(n,s),c!=null&&r.unshift(Io(n,c,l))):a||(c=Ro(n,s),c!=null&&r.push(Io(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var _E=/\r\n?/g,vE=/\u0000|\uFFFD/g;function Eg(e){return(typeof e=="string"?e:""+e).replace(_E,`
`).replace(vE,"")}function Fx(e,t){return t=Eg(t),Eg(e)===t}function ge(e,t,n,i,a,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||_r(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&_r(e,""+i);break;case"className":dl(e,"class",i);break;case"tabIndex":dl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":dl(e,n,i);break;case"style":P_(e,i,s);break;case"data":if(t!=="object"){dl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Jl(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&ge(e,t,"name",a.name,a,null),ge(e,t,"formEncType",a.formEncType,a,null),ge(e,t,"formMethod",a.formMethod,a,null),ge(e,t,"formTarget",a.formTarget,a,null)):(ge(e,t,"encType",a.encType,a,null),ge(e,t,"method",a.method,a,null),ge(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Jl(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Wi);break;case"onScroll":i!=null&&Yt("scroll",e);break;case"onScrollEnd":i!=null&&Yt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(et(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(et(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Jl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Yt("beforetoggle",e),Yt("toggle",e),Ql(e,"popover",i);break;case"xlinkActuate":Ui(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ui(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ui(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ui(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ui(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ui(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ui(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ui(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ui(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ql(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=qM.get(n)||n,Ql(e,n,i))}}function Pd(e,t,n,i,a,s){switch(n){case"style":P_(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(et(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(et(60));e.innerHTML=n}}break;case"children":typeof i=="string"?_r(e,i):(typeof i=="number"||typeof i=="bigint")&&_r(e,""+i);break;case"onScroll":i!=null&&Yt("scroll",e);break;case"onScrollEnd":i!=null&&Yt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!w_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),s=e[An]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Ql(e,n,i)}}}function on(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Yt("error",e),Yt("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(et(137,t));default:ge(e,t,s,r,n,null)}}a&&ge(e,t,"srcSet",n.srcSet,n,null),i&&ge(e,t,"src",n.src,n,null);return;case"input":Yt("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":a=d;break;case"type":r=d;break;case"checked":l=d;break;case"defaultChecked":c=d;break;case"value":s=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(et(137,t));break;default:ge(e,t,i,d,n,null)}}N_(e,s,o,l,c,r,a,!1);return;case"select":Yt("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:ge(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?or(e,!!i,t,!1):n!=null&&or(e,!!i,n,!0);return;case"textarea":Yt("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(et(91));break;default:ge(e,t,r,o,n,null)}O_(e,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ge(e,t,l,i,n,null)}return;case"dialog":Yt("beforetoggle",e),Yt("toggle",e),Yt("cancel",e),Yt("close",e);break;case"iframe":case"object":Yt("load",e);break;case"video":case"audio":for(i=0;i<Po.length;i++)Yt(Po[i],e);break;case"image":Yt("error",e),Yt("load",e);break;case"details":Yt("toggle",e);break;case"embed":case"source":case"link":Yt("error",e),Yt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(et(137,t));default:ge(e,t,c,i,n,null)}return;default:if(Qh(t)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&Pd(e,t,d,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ge(e,t,o,i,n,null))}function xE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,d=null;for(p in n){var h=n[p];if(n.hasOwnProperty(p)&&h!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=h;default:i.hasOwnProperty(p)||ge(e,t,p,null,i,h)}}for(var u in i){var p=i[u];if(h=n[u],i.hasOwnProperty(u)&&(p!=null||h!=null))switch(u){case"type":s=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":d=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(et(137,t));break;default:p!==h&&ge(e,t,u,p,i,h)}}rd(e,r,o,l,c,d,s,a);return;case"select":p=r=o=u=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(s)||ge(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":u=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&ge(e,t,a,s,i,l)}t=o,n=r,i=p,u!=null?or(e,!!n,u,!1):!!i!=!!n&&(t!=null?or(e,!!n,t,!0):or(e,!!n,n?[]:"",!1));return;case"textarea":p=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ge(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":u=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(et(91));break;default:a!==s&&ge(e,t,r,a,i,s)}L_(e,u,p);return;case"option":for(var v in n)if(u=n[v],n.hasOwnProperty(v)&&u!=null&&!i.hasOwnProperty(v))switch(v){case"selected":e.selected=!1;break;default:ge(e,t,v,null,i,u)}for(l in i)if(u=i[l],p=n[l],i.hasOwnProperty(l)&&u!==p&&(u!=null||p!=null))switch(l){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ge(e,t,l,u,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var y in n)u=n[y],n.hasOwnProperty(y)&&u!=null&&!i.hasOwnProperty(y)&&ge(e,t,y,null,i,u);for(c in i)if(u=i[c],p=n[c],i.hasOwnProperty(c)&&u!==p&&(u!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(et(137,t));break;default:ge(e,t,c,u,i,p)}return;default:if(Qh(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&Pd(e,t,g,void 0,i,u);for(d in i)u=i[d],p=n[d],!i.hasOwnProperty(d)||u===p||u===void 0&&p===void 0||Pd(e,t,d,u,i,p);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&ge(e,t,f,null,i,u);for(h in i)u=i[h],p=n[h],!i.hasOwnProperty(h)||u===p||u==null&&p==null||ge(e,t,h,u,i,p)}function bg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function SE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&bg(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var d=l.transferSize,h=l.initiatorType;d&&bg(h)&&(l=l.responseEnd,r+=d*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Id=null,Bd=null;function Vc(e){return e.nodeType===9?e:e.ownerDocument}function Tg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zx(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Fd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ff=null;function ME(){var e=window.event;return e&&e.type==="popstate"?e===ff?!1:(ff=e,!0):(ff=null,!1)}var Gx=typeof setTimeout=="function"?setTimeout:void 0,yE=typeof clearTimeout=="function"?clearTimeout:void 0,Ag=typeof Promise=="function"?Promise:void 0,EE=typeof queueMicrotask=="function"?queueMicrotask:typeof Ag<"u"?function(e){return Ag.resolve(null).then(e).catch(bE)}:Gx;function bE(e){setTimeout(function(){throw e})}function qa(e){return e==="head"}function Rg(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Tr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")bo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,bo(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[Yo]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&bo(e.ownerDocument.body);n=a}while(n);Tr(t)}function Cg(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function zd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":zd(n),Kh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function TE(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Yo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=ei(e.nextSibling),e===null)break}return null}function AE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ei(e.nextSibling),e===null))return null;return e}function Hx(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ei(e.nextSibling),e===null))return null;return e}function Gd(e){return e.data==="$?"||e.data==="$~"}function Hd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function RE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ei(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Vd=null;function wg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ei(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Dg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Vx(e,t,n){switch(t=Vc(n),e){case"html":if(e=t.documentElement,!e)throw Error(et(452));return e;case"head":if(e=t.head,!e)throw Error(et(453));return e;case"body":if(e=t.body,!e)throw Error(et(454));return e;default:throw Error(et(451))}}function bo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Kh(e)}var ni=new Map,Ug=new Set;function kc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ra=ae.d;ae.d={f:CE,r:wE,D:DE,C:UE,L:NE,m:LE,X:PE,S:OE,M:IE};function CE(){var e=ra.f(),t=vu();return e||t}function wE(e){var t=Nr(e);t!==null&&t.tag===5&&t.type==="form"?Pv(t):ra.r(e)}var Ir=typeof document>"u"?null:document;function kx(e,t,n){var i=Ir;if(i&&typeof t=="string"&&t){var a=Kn(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Ug.has(a)||(Ug.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),on(t,"link",e),Je(t),i.head.appendChild(t)))}}function DE(e){ra.D(e),kx("dns-prefetch",e,null)}function UE(e,t){ra.C(e,t),kx("preconnect",e,t)}function NE(e,t,n){ra.L(e,t,n);var i=Ir;if(i&&e&&t){var a='link[rel="preload"][as="'+Kn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Kn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Kn(n.imageSizes)+'"]')):a+='[href="'+Kn(e)+'"]';var s=a;switch(t){case"style":s=br(e);break;case"script":s=Br(e)}ni.has(s)||(e=Ce({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ni.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector($o(s))||t==="script"&&i.querySelector(tl(s))||(t=i.createElement("link"),on(t,"link",e),Je(t),i.head.appendChild(t)))}}function LE(e,t){ra.m(e,t);var n=Ir;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Kn(i)+'"][href="'+Kn(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Br(e)}if(!ni.has(s)&&(e=Ce({rel:"modulepreload",href:e},t),ni.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(tl(s)))return}i=n.createElement("link"),on(i,"link",e),Je(i),n.head.appendChild(i)}}}function OE(e,t,n){ra.S(e,t,n);var i=Ir;if(i&&e){var a=rr(i).hoistableStyles,s=br(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector($o(s)))o.loading=5;else{e=Ce({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ni.get(s))&&Pp(e,n);var l=r=i.createElement("link");Je(l),on(l,"link",e),l._p=new Promise(function(c,d){l.onload=c,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,lc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function PE(e,t){ra.X(e,t);var n=Ir;if(n&&e){var i=rr(n).hoistableScripts,a=Br(e),s=i.get(a);s||(s=n.querySelector(tl(a)),s||(e=Ce({src:e,async:!0},t),(t=ni.get(a))&&Ip(e,t),s=n.createElement("script"),Je(s),on(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function IE(e,t){ra.M(e,t);var n=Ir;if(n&&e){var i=rr(n).hoistableScripts,a=Br(e),s=i.get(a);s||(s=n.querySelector(tl(a)),s||(e=Ce({src:e,async:!0,type:"module"},t),(t=ni.get(a))&&Ip(e,t),s=n.createElement("script"),Je(s),on(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function Ng(e,t,n,i){var a=(a=Da.current)?kc(a):null;if(!a)throw Error(et(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=br(n.href),n=rr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=br(n.href);var s=rr(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector($o(e)))&&!s._p&&(r.instance=s,r.state.loading=5),ni.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ni.set(e,n),s||BE(a,e,n,r.state))),t&&i===null)throw Error(et(528,""));return r}if(t&&i!==null)throw Error(et(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Br(n),n=rr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(et(444,e))}}function br(e){return'href="'+Kn(e)+'"'}function $o(e){return'link[rel="stylesheet"]['+e+"]"}function Xx(e){return Ce({},e,{"data-precedence":e.precedence,precedence:null})}function BE(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),on(t,"link",n),Je(t),e.head.appendChild(t))}function Br(e){return'[src="'+Kn(e)+'"]'}function tl(e){return"script[async]"+e}function Lg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Kn(n.href)+'"]');if(i)return t.instance=i,Je(i),i;var a=Ce({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Je(i),on(i,"style",a),lc(i,n.precedence,e),t.instance=i;case"stylesheet":a=br(n.href);var s=e.querySelector($o(a));if(s)return t.state.loading|=4,t.instance=s,Je(s),s;i=Xx(n),(a=ni.get(a))&&Pp(i,a),s=(e.ownerDocument||e).createElement("link"),Je(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),on(s,"link",i),t.state.loading|=4,lc(s,n.precedence,e),t.instance=s;case"script":return s=Br(n.src),(a=e.querySelector(tl(s)))?(t.instance=a,Je(a),a):(i=n,(a=ni.get(s))&&(i=Ce({},n),Ip(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),Je(a),on(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(et(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,lc(i,n.precedence,e));return t.instance}function lc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Pp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ip(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var cc=null;function Og(e,t,n){if(cc===null){var i=new Map,a=cc=new Map;a.set(n,i)}else a=cc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[Yo]||s[nn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function Pg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function FE(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Wx(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function zE(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=br(i.href),s=t.querySelector($o(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Xc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,Je(s);return}s=t.ownerDocument||t,i=Xx(i),(a=ni.get(a))&&Pp(i,a),s=s.createElement("link"),Je(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),on(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Xc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var df=0;function GE(e,t){return e.stylesheets&&e.count===0&&uc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&uc(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&df===0&&(df=62500*SE());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&uc(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>df?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Xc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)uc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wc=null;function uc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wc=new Map,t.forEach(HE,e),Wc=null,Xc.call(e))}function HE(e,t){if(!(t.state.loading&4)){var n=Wc.get(e);if(n)var i=n.get(null);else{n=new Map,Wc.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=Xc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Bo={$$typeof:Xi,Provider:null,Consumer:null,_currentValue:ls,_currentValue2:ls,_threadCount:0};function VE(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ou(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ou(0),this.hiddenUpdates=Ou(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function qx(e,t,n,i,a,s,r,o,l,c,d,h){return e=new VE(e,t,n,r,l,c,d,h,o),t=1,s===!0&&(t|=24),s=Ln(3,null,null,t),e.current=s,s.stateNode=e,t=lp(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},fp(s),e}function Yx(e){return e?(e=nr,e):nr}function jx(e,t,n,i,a,s){a=Yx(a),i.context===null?i.context=a:i.pendingContext=a,i=Na(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=La(e,i,t),n!==null&&(En(n,e,t),go(n,e,t))}function Ig(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bp(e,t){Ig(e,t),(e=e.alternate)&&Ig(e,t)}function Zx(e){if(e.tag===13||e.tag===31){var t=bs(e,67108864);t!==null&&En(t,e,67108864),Bp(e,67108864)}}function Bg(e){if(e.tag===13||e.tag===31){var t=Fn();t=jh(t);var n=bs(e,t);n!==null&&En(n,e,t),Bp(e,t)}}var qc=!0;function kE(e,t,n,i){var a=Ut.T;Ut.T=null;var s=ae.p;try{ae.p=2,Fp(e,t,n,i)}finally{ae.p=s,Ut.T=a}}function XE(e,t,n,i){var a=Ut.T;Ut.T=null;var s=ae.p;try{ae.p=8,Fp(e,t,n,i)}finally{ae.p=s,Ut.T=a}}function Fp(e,t,n,i){if(qc){var a=kd(i);if(a===null)uf(e,t,i,Yc,n),Fg(e,i);else if(qE(a,e,t,n,i))i.stopPropagation();else if(Fg(e,i),t&4&&-1<WE.indexOf(e)){for(;a!==null;){var s=Nr(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=ts(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Bn(r);o.entanglements[1]|=l,r&=~l}wi(s),!(ie&6)&&(Ic=Pn()+500,Jo(0))}}break;case 31:case 13:o=bs(s,2),o!==null&&En(o,s,2),vu(),Bp(s,2)}if(s=kd(i),s===null&&uf(e,t,i,Yc,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else uf(e,t,i,null,n)}}function kd(e){return e=Jh(e),zp(e)}var Yc=null;function zp(e){if(Yc=null,e=Ks(e),e!==null){var t=ko(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=m_(t),e!==null)return e;e=null}else if(n===31){if(e=g_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Yc=e,null}function Kx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(DM()){case S_:return 2;case M_:return 8;case yc:case UM:return 32;case y_:return 268435456;default:return 32}default:return 32}}var Xd=!1,Ia=null,Ba=null,Fa=null,Fo=new Map,zo=new Map,ya=[],WE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fg(e,t){switch(e){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":Ba=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":Fo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(t.pointerId)}}function qr(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Nr(t),t!==null&&Zx(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function qE(e,t,n,i,a){switch(t){case"focusin":return Ia=qr(Ia,e,t,n,i,a),!0;case"dragenter":return Ba=qr(Ba,e,t,n,i,a),!0;case"mouseover":return Fa=qr(Fa,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return Fo.set(s,qr(Fo.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,zo.set(s,qr(zo.get(s)||null,e,t,n,i,a)),!0}return!1}function Qx(e){var t=Ks(e.target);if(t!==null){var n=ko(t);if(n!==null){if(t=n.tag,t===13){if(t=m_(n),t!==null){e.blockedOn=t,ym(e.priority,function(){Bg(n)});return}}else if(t===31){if(t=g_(n),t!==null){e.blockedOn=t,ym(e.priority,function(){Bg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=kd(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);ld=i,n.target.dispatchEvent(i),ld=null}else return t=Nr(n),t!==null&&Zx(t),e.blockedOn=n,!1;t.shift()}return!0}function zg(e,t,n){fc(e)&&n.delete(t)}function YE(){Xd=!1,Ia!==null&&fc(Ia)&&(Ia=null),Ba!==null&&fc(Ba)&&(Ba=null),Fa!==null&&fc(Fa)&&(Fa=null),Fo.forEach(zg),zo.forEach(zg)}function Sl(e,t){e.blockedOn===t&&(e.blockedOn=null,Xd||(Xd=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,YE)))}var Ml=null;function Gg(e){Ml!==e&&(Ml=e,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,function(){Ml===e&&(Ml=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(zp(i||n)===null)continue;break}var s=Nr(n);s!==null&&(e.splice(t,3),t-=3,bd(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Tr(e){function t(l){return Sl(l,e)}Ia!==null&&Sl(Ia,e),Ba!==null&&Sl(Ba,e),Fa!==null&&Sl(Fa,e),Fo.forEach(t),zo.forEach(t);for(var n=0;n<ya.length;n++){var i=ya[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ya.length&&(n=ya[0],n.blockedOn===null);)Qx(n),n.blockedOn===null&&ya.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[An]||null;if(typeof s=="function")r||Gg(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[An]||null)o=r.formAction;else if(zp(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Gg(n)}}}function Jx(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Gp(e){this._internalRoot=e}Mu.prototype.render=Gp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(et(409));var n=t.current,i=Fn();jx(n,i,e,t,null,null)};Mu.prototype.unmount=Gp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jx(e.current,2,null,e,null,null),vu(),t[Ur]=null}};function Mu(e){this._internalRoot=e}Mu.prototype.unstable_scheduleHydration=function(e){if(e){var t=R_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ya.length&&t!==0&&t<ya[n].priority;n++);ya.splice(n,0,e),n===0&&Qx(e)}};var Hg=h_.version;if(Hg!=="19.2.7")throw Error(et(527,Hg,"19.2.7"));ae.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(et(188)):(e=Object.keys(e).join(","),Error(et(268,e)));return e=EM(t),e=e!==null?__(e):null,e=e===null?null:e.stateNode,e};var jE={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:Ut,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{Xo=yl.inject(jE),In=yl}catch{}}au.createRoot=function(e,t){if(!p_(e))throw Error(et(299));var n=!1,i="",a=kv,s=Xv,r=Wv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=qx(e,1,!1,null,null,n,i,null,a,s,r,Jx),e[Ur]=t.current,Op(e),new Gp(t)};au.hydrateRoot=function(e,t,n){if(!p_(e))throw Error(et(299));var i=!1,a="",s=kv,r=Xv,o=Wv,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=qx(e,1,!0,t,n??null,i,a,l,s,r,o,Jx),t.context=Yx(null),n=t.current,i=Fn(),i=jh(i),a=Na(i),a.callback=null,La(n,a,i),n=i,t.current.lanes=n,qo(t,n),wi(t),e[Ur]=t.current,Op(e),new Mu(t)};au.version="19.2.7";function $x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($x)}catch(e){console.error(e)}}$x(),o_.exports=au;var ZE=o_.exports;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hp="184",KE=0,Vg=1,QE=2,dc=1,JE=2,oo=3,ka=0,bn=1,ki=2,Qi=0,hr=1,kg=2,Xg=3,Wg=4,$E=5,as=100,tb=101,eb=102,nb=103,ib=104,ab=200,sb=201,rb=202,ob=203,Wd=204,qd=205,lb=206,cb=207,ub=208,fb=209,db=210,hb=211,pb=212,mb=213,gb=214,Yd=0,jd=1,Zd=2,Ar=3,Kd=4,Qd=5,Jd=6,$d=7,tS=0,_b=1,vb=2,yi=0,eS=1,nS=2,iS=3,aS=4,sS=5,rS=6,oS=7,lS=300,vs=301,Rr=302,hf=303,pf=304,yu=306,th=1e3,Yi=1001,eh=1002,rn=1003,xb=1004,El=1005,dn=1006,mf=1007,rs=1008,$n=1009,cS=1010,uS=1011,Go=1012,Vp=1013,Ti=1014,xi=1015,aa=1016,kp=1017,Xp=1018,Ho=1020,fS=35902,dS=35899,hS=1021,pS=1022,ci=1023,sa=1026,os=1027,mS=1028,Wp=1029,xs=1030,qp=1031,Yp=1033,hc=33776,pc=33777,mc=33778,gc=33779,nh=35840,ih=35841,ah=35842,sh=35843,rh=36196,oh=37492,lh=37496,ch=37488,uh=37489,jc=37490,fh=37491,dh=37808,hh=37809,ph=37810,mh=37811,gh=37812,_h=37813,vh=37814,xh=37815,Sh=37816,Mh=37817,yh=37818,Eh=37819,bh=37820,Th=37821,Ah=36492,Rh=36494,Ch=36495,wh=36283,Dh=36284,Zc=36285,Uh=36286,Sb=3200,qg=0,Mb=1,Ea="",Wn="srgb",Kc="srgb-linear",Qc="linear",le="srgb",Us=7680,Yg=519,yb=512,Eb=513,bb=514,jp=515,Tb=516,Ab=517,Zp=518,Rb=519,jg=35044,Zg="300 es",Si=2e3,Jc=2001;function Cb(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function $c(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function wb(){const e=$c("canvas");return e.style.display="block",e}const Kg={};function Qg(...e){const t="THREE."+e.shift();console.log(t,...e)}function gS(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function wt(...e){e=gS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function ee(...e){e=gS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Nh(...e){const t=e.join(" ");t in Kg||(Kg[t]=!0,wt(...e))}function Db(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Ub={[Yd]:jd,[Zd]:Jd,[Kd]:$d,[Ar]:Qd,[jd]:Yd,[Jd]:Zd,[$d]:Kd,[Qd]:Ar};class As{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gf=Math.PI/180,Lh=180/Math.PI;function el(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[e&255]+un[e>>8&255]+un[e>>16&255]+un[e>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[n&63|128]+un[n>>8&255]+"-"+un[n>>16&255]+un[n>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function Qt(e,t,n){return Math.max(t,Math.min(n,e))}function Nb(e,t){return(e%t+t)%t}function _f(e,t,n){return(1-n)*e+n*t}function Yr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Sn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const em=class em{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};em.prototype.isVector2=!0;let se=em;class Fr{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],d=i[a+2],h=i[a+3],u=s[r+0],p=s[r+1],v=s[r+2],y=s[r+3];if(h!==y||l!==u||c!==p||d!==v){let g=l*u+c*p+d*v+h*y;g<0&&(u=-u,p=-p,v=-v,y=-y,g=-g);let f=1-o;if(g<.9995){const m=Math.acos(g),_=Math.sin(m);f=Math.sin(f*m)/_,o=Math.sin(o*m)/_,l=l*f+u*o,c=c*f+p*o,d=d*f+v*o,h=h*f+y*o}else{l=l*f+u*o,c=c*f+p*o,d=d*f+v*o,h=h*f+y*o;const m=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=m,c*=m,d*=m,h*=m}}t[n]=l,t[n+1]=c,t[n+2]=d,t[n+3]=h}static multiplyQuaternionsFlat(t,n,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],h=s[r],u=s[r+1],p=s[r+2],v=s[r+3];return t[n]=o*v+d*h+l*p-c*u,t[n+1]=l*v+d*u+c*h-o*p,t[n+2]=c*v+d*p+o*u-l*h,t[n+3]=d*v-o*h-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),h=o(s/2),u=l(i/2),p=l(a/2),v=l(s/2);switch(r){case"XYZ":this._x=u*d*h+c*p*v,this._y=c*p*h-u*d*v,this._z=c*d*v+u*p*h,this._w=c*d*h-u*p*v;break;case"YXZ":this._x=u*d*h+c*p*v,this._y=c*p*h-u*d*v,this._z=c*d*v-u*p*h,this._w=c*d*h+u*p*v;break;case"ZXY":this._x=u*d*h-c*p*v,this._y=c*p*h+u*d*v,this._z=c*d*v+u*p*h,this._w=c*d*h-u*p*v;break;case"ZYX":this._x=u*d*h-c*p*v,this._y=c*p*h+u*d*v,this._z=c*d*v-u*p*h,this._w=c*d*h+u*p*v;break;case"YZX":this._x=u*d*h+c*p*v,this._y=c*p*h+u*d*v,this._z=c*d*v-u*p*h,this._w=c*d*h-u*p*v;break;case"XZY":this._x=u*d*h-c*p*v,this._y=c*p*h-u*d*v,this._z=c*d*v+u*p*h,this._w=c*d*h+u*p*v;break;default:wt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],u=i+o+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(r-a)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(r-a)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+r*o+a*c-s*l,this._y=a*d+r*l+s*o-i*c,this._z=s*d+r*c+i*l-a*o,this._w=r*d-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const nm=class nm{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Jg.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Jg.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),d=2*(o*n-s*a),h=2*(s*i-r*n);return this.x=n+l*c+r*h-o*d,this.y=i+l*d+o*c-s*h,this.z=a+l*h+s*d-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this.z=Qt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this.z=Qt(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return vf.copy(this).projectOnVector(t),this.sub(vf)}reflect(t){return this.sub(vf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};nm.prototype.isVector3=!0;let z=nm;const vf=new z,Jg=new Fr,im=class im{constructor(t,n,i,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){const d=this.elements;return d[0]=t,d[1]=a,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],p=i[5],v=i[8],y=a[0],g=a[3],f=a[6],m=a[1],_=a[4],M=a[7],C=a[2],b=a[5],R=a[8];return s[0]=r*y+o*m+l*C,s[3]=r*g+o*_+l*b,s[6]=r*f+o*M+l*R,s[1]=c*y+d*m+h*C,s[4]=c*g+d*_+h*b,s[7]=c*f+d*M+h*R,s[2]=u*y+p*m+v*C,s[5]=u*g+p*_+v*b,s[8]=u*f+p*M+v*R,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return n*r*d-n*o*c-i*s*d+i*o*l+a*s*c-a*r*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=d*r-o*c,u=o*l-d*s,p=c*s-r*l,v=n*h+i*u+a*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return t[0]=h*y,t[1]=(a*c-d*i)*y,t[2]=(o*i-a*r)*y,t[3]=u*y,t[4]=(d*n-a*l)*y,t[5]=(a*s-o*n)*y,t[6]=p*y,t[7]=(i*l-c*n)*y,t[8]=(r*n-i*s)*y,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(xf.makeScale(t,n)),this}rotate(t){return this.premultiply(xf.makeRotation(-t)),this}translate(t,n){return this.premultiply(xf.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};im.prototype.isMatrix3=!0;let Pt=im;const xf=new Pt,$g=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),t0=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lb(){const e={enabled:!0,workingColorSpace:Kc,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===le&&(a.r=Ji(a.r),a.g=Ji(a.g),a.b=Ji(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===le&&(a.r=pr(a.r),a.g=pr(a.g),a.b=pr(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ea?Qc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Nh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Nh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Kc]:{primaries:t,whitePoint:i,transfer:Qc,toXYZ:$g,fromXYZ:t0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:t,whitePoint:i,transfer:le,toXYZ:$g,fromXYZ:t0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),e}const Kt=Lb();function Ji(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function pr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Ns;class Ob{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ns===void 0&&(Ns=$c("canvas")),Ns.width=t.width,Ns.height=t.height;const a=Ns.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=Ns}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=$c("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=Ji(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ji(n[i]/255)*255):n[i]=Ji(n[i]);return{data:n,width:t.width,height:t.height}}else return wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pb=0;class Kp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pb++}),this.uuid=el(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(Sf(a[r].image)):s.push(Sf(a[r]))}else s=Sf(a);i.url=s}return n||(t.images[this.uuid]=i),i}}function Sf(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Ob.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(wt("Texture: Unable to serialize Texture."),{})}let Ib=0;const Mf=new z;class gn extends As{constructor(t=gn.DEFAULT_IMAGE,n=gn.DEFAULT_MAPPING,i=Yi,a=Yi,s=dn,r=rs,o=ci,l=$n,c=gn.DEFAULT_ANISOTROPY,d=Ea){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ib++}),this.uuid=el(),this.name="",this.source=new Kp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Mf).x}get height(){return this.source.getSize(Mf).y}get depth(){return this.source.getSize(Mf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){wt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){wt(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case th:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case eh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case th:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case eh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=lS;gn.DEFAULT_ANISOTROPY=1;const am=class am{constructor(t=0,n=0,i=0,a=1){this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s;const l=t.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],v=l[9],y=l[2],g=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-y)<.01&&Math.abs(v-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+y)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,M=(p+1)/2,C=(f+1)/2,b=(d+u)/4,R=(h+y)/4,x=(v+g)/4;return _>M&&_>C?_<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(_),a=b/i,s=R/i):M>C?M<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(M),i=b/a,s=x/a):C<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(C),i=R/s,a=x/s),this.set(i,a,s,n),this}let m=Math.sqrt((g-v)*(g-v)+(h-y)*(h-y)+(u-d)*(u-d));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(h-y)/m,this.z=(u-d)/m,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this.z=Qt(this.z,t.z,n.z),this.w=Qt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this.z=Qt(this.z,t,n),this.w=Qt(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};am.prototype.isVector4=!0;let Fe=am;class Bb extends As{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Fe(0,0,t,n),this.scissorTest=!1,this.viewport=new Fe(0,0,t,n),this.textures=[];const a={width:t,height:n,depth:i.depth},s=new gn(a),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new Kp(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends Bb{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class _S extends gn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=rn,this.minFilter=rn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fb extends gn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=rn,this.minFilter=rn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nu=class nu{constructor(t,n,i,a,s,r,o,l,c,d,h,u,p,v,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,d,h,u,p,v,y,g)}set(t,n,i,a,s,r,o,l,c,d,h,u,p,v,y,g){const f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=v,f[11]=y,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nu().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,i=t.elements,a=1/Ls.setFromMatrixColumn(t,0).length(),s=1/Ls.setFromMatrixColumn(t,1).length(),r=1/Ls.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const u=r*d,p=r*h,v=o*d,y=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=p+v*c,n[5]=u-y*c,n[9]=-o*l,n[2]=y-u*c,n[6]=v+p*c,n[10]=r*l}else if(t.order==="YXZ"){const u=l*d,p=l*h,v=c*d,y=c*h;n[0]=u+y*o,n[4]=v*o-p,n[8]=r*c,n[1]=r*h,n[5]=r*d,n[9]=-o,n[2]=p*o-v,n[6]=y+u*o,n[10]=r*l}else if(t.order==="ZXY"){const u=l*d,p=l*h,v=c*d,y=c*h;n[0]=u-y*o,n[4]=-r*h,n[8]=v+p*o,n[1]=p+v*o,n[5]=r*d,n[9]=y-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){const u=r*d,p=r*h,v=o*d,y=o*h;n[0]=l*d,n[4]=v*c-p,n[8]=u*c+y,n[1]=l*h,n[5]=y*c+u,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){const u=r*l,p=r*c,v=o*l,y=o*c;n[0]=l*d,n[4]=y-u*h,n[8]=v*h+p,n[1]=h,n[5]=r*d,n[9]=-o*d,n[2]=-c*d,n[6]=p*h+v,n[10]=u-y*h}else if(t.order==="XZY"){const u=r*l,p=r*c,v=o*l,y=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=u*h+y,n[5]=r*d,n[9]=p*h-v,n[2]=v*h-p,n[6]=o*d,n[10]=y*h+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zb,t,Gb)}lookAt(t,n,i){const a=this.elements;return wn.subVectors(t,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),fa.crossVectors(i,wn),fa.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),fa.crossVectors(i,wn)),fa.normalize(),bl.crossVectors(wn,fa),a[0]=fa.x,a[4]=bl.x,a[8]=wn.x,a[1]=fa.y,a[5]=bl.y,a[9]=wn.y,a[2]=fa.z,a[6]=bl.z,a[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],p=i[13],v=i[2],y=i[6],g=i[10],f=i[14],m=i[3],_=i[7],M=i[11],C=i[15],b=a[0],R=a[4],x=a[8],A=a[12],D=a[1],w=a[5],F=a[9],Y=a[13],j=a[2],I=a[6],U=a[10],O=a[14],q=a[3],$=a[7],at=a[11],gt=a[15];return s[0]=r*b+o*D+l*j+c*q,s[4]=r*R+o*w+l*I+c*$,s[8]=r*x+o*F+l*U+c*at,s[12]=r*A+o*Y+l*O+c*gt,s[1]=d*b+h*D+u*j+p*q,s[5]=d*R+h*w+u*I+p*$,s[9]=d*x+h*F+u*U+p*at,s[13]=d*A+h*Y+u*O+p*gt,s[2]=v*b+y*D+g*j+f*q,s[6]=v*R+y*w+g*I+f*$,s[10]=v*x+y*F+g*U+f*at,s[14]=v*A+y*Y+g*O+f*gt,s[3]=m*b+_*D+M*j+C*q,s[7]=m*R+_*w+M*I+C*$,s[11]=m*x+_*F+M*U+C*at,s[15]=m*A+_*Y+M*O+C*gt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],d=t[2],h=t[6],u=t[10],p=t[14],v=t[3],y=t[7],g=t[11],f=t[15],m=l*p-c*u,_=o*p-c*h,M=o*u-l*h,C=r*p-c*d,b=r*u-l*d,R=r*h-o*d;return n*(y*m-g*_+f*M)-i*(v*m-g*C+f*b)+a*(v*_-y*C+f*R)-s*(v*M-y*b+g*R)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=t[9],u=t[10],p=t[11],v=t[12],y=t[13],g=t[14],f=t[15],m=n*o-i*r,_=n*l-a*r,M=n*c-s*r,C=i*l-a*o,b=i*c-s*o,R=a*c-s*l,x=d*y-h*v,A=d*g-u*v,D=d*f-p*v,w=h*g-u*y,F=h*f-p*y,Y=u*f-p*g,j=m*Y-_*F+M*w+C*D-b*A+R*x;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/j;return t[0]=(o*Y-l*F+c*w)*I,t[1]=(a*F-i*Y-s*w)*I,t[2]=(y*R-g*b+f*C)*I,t[3]=(u*b-h*R-p*C)*I,t[4]=(l*D-r*Y-c*A)*I,t[5]=(n*Y-a*D+s*A)*I,t[6]=(g*M-v*R-f*_)*I,t[7]=(d*R-u*M+p*_)*I,t[8]=(r*F-o*D+c*x)*I,t[9]=(i*D-n*F-s*x)*I,t[10]=(v*b-y*M+f*m)*I,t[11]=(h*M-d*b-p*m)*I,t[12]=(o*A-r*w-l*x)*I,t[13]=(n*w-i*A+a*x)*I,t[14]=(y*_-v*C-g*m)*I,t[15]=(d*C-h*_+u*m)*I,this}scale(t){const n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,d=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*r,0,c*l-a*o,d*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,d=r+r,h=o+o,u=s*c,p=s*d,v=s*h,y=r*d,g=r*h,f=o*h,m=l*c,_=l*d,M=l*h,C=i.x,b=i.y,R=i.z;return a[0]=(1-(y+f))*C,a[1]=(p+M)*C,a[2]=(v-_)*C,a[3]=0,a[4]=(p-M)*b,a[5]=(1-(u+f))*b,a[6]=(g+m)*b,a[7]=0,a[8]=(v+_)*R,a[9]=(g-m)*R,a[10]=(1-(u+y))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let r=Ls.set(a[0],a[1],a[2]).length();const o=Ls.set(a[4],a[5],a[6]).length(),l=Ls.set(a[8],a[9],a[10]).length();s<0&&(r=-r),ai.copy(this);const c=1/r,d=1/o,h=1/l;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=d,ai.elements[5]*=d,ai.elements[6]*=d,ai.elements[8]*=h,ai.elements[9]*=h,ai.elements[10]*=h,n.setFromRotationMatrix(ai),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,a,s,r,o=Si,l=!1){const c=this.elements,d=2*s/(n-t),h=2*s/(i-a),u=(n+t)/(n-t),p=(i+a)/(i-a);let v,y;if(l)v=s/(r-s),y=r*s/(r-s);else if(o===Si)v=-(r+s)/(r-s),y=-2*r*s/(r-s);else if(o===Jc)v=-r/(r-s),y=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=Si,l=!1){const c=this.elements,d=2/(n-t),h=2/(i-a),u=-(n+t)/(n-t),p=-(i+a)/(i-a);let v,y;if(l)v=1/(r-s),y=r/(r-s);else if(o===Si)v=-2/(r-s),y=-(r+s)/(r-s);else if(o===Jc)v=-1/(r-s),y=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};nu.prototype.isMatrix4=!0;let We=nu;const Ls=new z,ai=new We,zb=new z(0,0,0),Gb=new z(1,1,1),fa=new z,bl=new z,wn=new z,e0=new We,n0=new Fr;class Ss{constructor(t=0,n=0,i=0,a=Ss.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],d=a[9],h=a[2],u=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Qt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return e0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(e0,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return n0.setFromEuler(this),this.setFromQuaternion(n0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ss.DEFAULT_ORDER="XYZ";class vS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hb=0;const i0=new z,Os=new Fr,Pi=new We,Tl=new z,jr=new z,Vb=new z,kb=new Fr,a0=new z(1,0,0),s0=new z(0,1,0),r0=new z(0,0,1),o0={type:"added"},Xb={type:"removed"},Ps={type:"childadded",child:null},yf={type:"childremoved",child:null};class Tn extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=el(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const t=new z,n=new Ss,i=new Fr,a=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new We},normalMatrix:{value:new Pt}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Os.setFromAxisAngle(t,n),this.quaternion.multiply(Os),this}rotateOnWorldAxis(t,n){return Os.setFromAxisAngle(t,n),this.quaternion.premultiply(Os),this}rotateX(t){return this.rotateOnAxis(a0,t)}rotateY(t){return this.rotateOnAxis(s0,t)}rotateZ(t){return this.rotateOnAxis(r0,t)}translateOnAxis(t,n){return i0.copy(t).applyQuaternion(this.quaternion),this.position.add(i0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(a0,t)}translateY(t){return this.translateOnAxis(s0,t)}translateZ(t){return this.translateOnAxis(r0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Tl.copy(t):Tl.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(jr,Tl,this.up):Pi.lookAt(Tl,jr,this.up),this.quaternion.setFromRotationMatrix(Pi),a&&(Pi.extractRotation(a.matrixWorld),Os.setFromRotationMatrix(Pi),this.quaternion.premultiply(Os.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(o0),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Xb),yf.child=t,this.dispatchEvent(yf),yf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(o0),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,t,Vb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,kb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,i=t.y,a=t.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),d=r(t.images),h=r(t.shapes),u=r(t.skeletons),p=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=a,i;function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}Tn.DEFAULT_UP=new z(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Al extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wb={type:"move"};class Ef{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Al,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Al,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Al,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const y of t.hand.values()){const g=n.getJointPose(y,i),f=this._getHandJoint(c,y);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&u>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wb)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Al;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const xS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},da={h:0,s:0,l:0},Rl={h:0,s:0,l:0};function bf(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class fe{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=Kt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Kt.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=Kt.workingColorSpace){if(t=Nb(t,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=bf(r,s,t+1/3),this.g=bf(r,s,t),this.b=bf(r,s,t-1/3)}return Kt.colorSpaceToWorking(this,a),this}setStyle(t,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&wt("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:wt("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Wn){const i=xS[t.toLowerCase()];return i!==void 0?this.setHex(i,n):wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}copyLinearToSRGB(t){return this.r=pr(t.r),this.g=pr(t.g),this.b=pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Wn){return Kt.workingToColorSpace(fn.copy(this),t),Math.round(Qt(fn.r*255,0,255))*65536+Math.round(Qt(fn.g*255,0,255))*256+Math.round(Qt(fn.b*255,0,255))}getHexString(t=Wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Kt.workingColorSpace){Kt.workingToColorSpace(fn.copy(this),n);const i=fn.r,a=fn.g,s=fn.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const d=(o+r)/2;if(o===r)l=0,c=0;else{const h=r-o;switch(c=d<=.5?h/(r+o):h/(2-r-o),r){case i:l=(a-s)/h+(a<s?6:0);break;case a:l=(s-i)/h+2;break;case s:l=(i-a)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,n=Kt.workingColorSpace){return Kt.workingToColorSpace(fn.copy(this),n),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=Wn){Kt.workingToColorSpace(fn.copy(this),t);const n=fn.r,i=fn.g,a=fn.b;return t!==Wn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(da),this.setHSL(da.h+t,da.s+n,da.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(da),t.getHSL(Rl);const i=_f(da.h,Rl.h,n),a=_f(da.s,Rl.s,n),s=_f(da.l,Rl.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new fe;fe.NAMES=xS;class qb extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ss,this.environmentIntensity=1,this.environmentRotation=new Ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const si=new z,Ii=new z,Tf=new z,Bi=new z,Is=new z,Bs=new z,l0=new z,Af=new z,Rf=new z,Cf=new z,wf=new Fe,Df=new Fe,Uf=new Fe;class li{constructor(t=new z,n=new z,i=new z){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),si.subVectors(t,n),a.cross(si);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){si.subVectors(a,n),Ii.subVectors(i,n),Tf.subVectors(t,n);const r=si.dot(si),o=si.dot(Ii),l=si.dot(Tf),c=Ii.dot(Ii),d=Ii.dot(Tf),h=r*c-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,p=(c*l-o*d)*u,v=(r*d-o*l)*u;return s.set(1-p-v,v,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bi.x),l.addScaledVector(r,Bi.y),l.addScaledVector(o,Bi.z),l)}static getInterpolatedAttribute(t,n,i,a,s,r){return wf.setScalar(0),Df.setScalar(0),Uf.setScalar(0),wf.fromBufferAttribute(t,n),Df.fromBufferAttribute(t,i),Uf.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(wf,s.x),r.addScaledVector(Df,s.y),r.addScaledVector(Uf,s.z),r}static isFrontFacing(t,n,i,a){return si.subVectors(i,n),Ii.subVectors(t,n),si.cross(Ii).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),si.cross(Ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return li.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return li.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,s=this.c;let r,o;Is.subVectors(a,i),Bs.subVectors(s,i),Af.subVectors(t,i);const l=Is.dot(Af),c=Bs.dot(Af);if(l<=0&&c<=0)return n.copy(i);Rf.subVectors(t,a);const d=Is.dot(Rf),h=Bs.dot(Rf);if(d>=0&&h<=d)return n.copy(a);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return r=l/(l-d),n.copy(i).addScaledVector(Is,r);Cf.subVectors(t,s);const p=Is.dot(Cf),v=Bs.dot(Cf);if(v>=0&&p<=v)return n.copy(s);const y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Bs,o);const g=d*v-p*h;if(g<=0&&h-d>=0&&p-v>=0)return l0.subVectors(s,a),o=(h-d)/(h-d+(p-v)),n.copy(a).addScaledVector(l0,o);const f=1/(g+y+u);return r=y*f,o=u*f,n.copy(i).addScaledVector(Is,r).addScaledVector(Bs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class nl{constructor(t=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(ri.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(ri.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=ri.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ri):ri.fromBufferAttribute(s,r),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cl.copy(i.boundingBox)),Cl.applyMatrix4(t.matrixWorld),this.union(Cl)}const a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zr),wl.subVectors(this.max,Zr),Fs.subVectors(t.a,Zr),zs.subVectors(t.b,Zr),Gs.subVectors(t.c,Zr),ha.subVectors(zs,Fs),pa.subVectors(Gs,zs),Za.subVectors(Fs,Gs);let n=[0,-ha.z,ha.y,0,-pa.z,pa.y,0,-Za.z,Za.y,ha.z,0,-ha.x,pa.z,0,-pa.x,Za.z,0,-Za.x,-ha.y,ha.x,0,-pa.y,pa.x,0,-Za.y,Za.x,0];return!Nf(n,Fs,zs,Gs,wl)||(n=[1,0,0,0,1,0,0,0,1],!Nf(n,Fs,zs,Gs,wl))?!1:(Dl.crossVectors(ha,pa),n=[Dl.x,Dl.y,Dl.z],Nf(n,Fs,zs,Gs,wl))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Fi=[new z,new z,new z,new z,new z,new z,new z,new z],ri=new z,Cl=new nl,Fs=new z,zs=new z,Gs=new z,ha=new z,pa=new z,Za=new z,Zr=new z,wl=new z,Dl=new z,Ka=new z;function Nf(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){Ka.fromArray(e,s);const o=a.x*Math.abs(Ka.x)+a.y*Math.abs(Ka.y)+a.z*Math.abs(Ka.z),l=t.dot(Ka),c=n.dot(Ka),d=i.dot(Ka);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Ge=new z,Ul=new se;let Yb=0;class bi extends As{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yb++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=jg,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ul.fromBufferAttribute(this,n),Ul.applyMatrix3(t),this.setXY(n,Ul.x,Ul.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ge.fromBufferAttribute(this,n),Ge.applyMatrix3(t),this.setXYZ(n,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ge.fromBufferAttribute(this,n),Ge.applyMatrix4(t),this.setXYZ(n,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ge.fromBufferAttribute(this,n),Ge.applyNormalMatrix(t),this.setXYZ(n,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ge.fromBufferAttribute(this,n),Ge.transformDirection(t),this.setXYZ(n,Ge.x,Ge.y,Ge.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Yr(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Sn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Yr(n,this.array)),n}setX(t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Yr(n,this.array)),n}setY(t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Yr(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Yr(n,this.array)),n}setW(t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),a=Sn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),a=Sn(a,this.array),s=Sn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jg&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class SS extends bi{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class MS extends bi{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class tn extends bi{constructor(t,n,i){super(new Float32Array(t),n,i)}}const jb=new nl,Kr=new z,Lf=new z;class Eu{constructor(t=new z,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):jb.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Kr.subVectors(t,this.center);const n=Kr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Kr,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Kr.copy(t.center).add(Lf)),this.expandByPoint(Kr.copy(t.center).sub(Lf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Zb=0;const kn=new We,Of=new Tn,Hs=new z,Dn=new nl,Qr=new nl,Ke=new z;class Hn extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zb++}),this.uuid=el(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cb(t)?MS:SS)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Pt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,n,i){return kn.makeTranslation(t,n,i),this.applyMatrix4(kn),this}scale(t,n,i){return kn.makeScale(t,n,i),this.applyMatrix4(kn),this}lookAt(t){return Of.lookAt(t),Of.updateMatrix(),this.applyMatrix4(Of.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=t.length;a<s;a++){const r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new tn(i,3))}else{const i=Math.min(t.length,n.count);for(let a=0;a<i;a++){const s=t[a];n.setXYZ(a,s.x,s.y,s.z||0)}t.length>n.count&&wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Eu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];Qr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(Dn.min,Qr.min),Dn.expandByPoint(Ke),Ke.addVectors(Dn.max,Qr.max),Dn.expandByPoint(Ke)):(Dn.expandByPoint(Qr.min),Dn.expandByPoint(Qr.max))}Dn.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)Ke.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(Ke));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ke.fromBufferAttribute(o,c),l&&(Hs.fromBufferAttribute(t,c),Ke.add(Hs)),a=Math.max(a,i.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new z,l[x]=new z;const c=new z,d=new z,h=new z,u=new se,p=new se,v=new se,y=new z,g=new z;function f(x,A,D){c.fromBufferAttribute(i,x),d.fromBufferAttribute(i,A),h.fromBufferAttribute(i,D),u.fromBufferAttribute(s,x),p.fromBufferAttribute(s,A),v.fromBufferAttribute(s,D),d.sub(c),h.sub(c),p.sub(u),v.sub(u);const w=1/(p.x*v.y-v.x*p.y);isFinite(w)&&(y.copy(d).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(w),g.copy(h).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(w),o[x].add(y),o[A].add(y),o[D].add(y),l[x].add(g),l[A].add(g),l[D].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let x=0,A=m.length;x<A;++x){const D=m[x],w=D.start,F=D.count;for(let Y=w,j=w+F;Y<j;Y+=3)f(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const _=new z,M=new z,C=new z,b=new z;function R(x){C.fromBufferAttribute(a,x),b.copy(C);const A=o[x];_.copy(A),_.sub(C.multiplyScalar(C.dot(A))).normalize(),M.crossVectors(b,A);const w=M.dot(l[x])<0?-1:1;r.setXYZW(x,_.x,_.y,_.z,w)}for(let x=0,A=m.length;x<A;++x){const D=m[x],w=D.start,F=D.count;for(let Y=w,j=w+F;Y<j;Y+=3)R(t.getX(Y+0)),R(t.getX(Y+1)),R(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const a=new z,s=new z,r=new z,o=new z,l=new z,c=new z,d=new z,h=new z;if(t)for(let u=0,p=t.count;u<p;u+=3){const v=t.getX(u+0),y=t.getX(u+1),g=t.getX(u+2);a.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),r.fromBufferAttribute(n,g),d.subVectors(r,s),h.subVectors(a,s),d.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)a.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),d.subVectors(r,s),h.subVectors(a,s),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ke.fromBufferAttribute(t,n),Ke.normalize(),t.setXYZ(n,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let p=0,v=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*d;for(let f=0;f<d;f++)u[v++]=c[p++]}return new bi(u,d,h)}if(this.index===null)return wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Hn,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=t(u,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(t.data))}d.length>0&&(a[l]=d,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(n))}const s=t.morphAttributes;for(const c in s){const d=[],h=s[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,d=r.length;c<d;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Kb=0;class il extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kb++}),this.uuid=el(),this.name="",this.type="Material",this.blending=hr,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wd,this.blendDst=qd,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){wt(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){wt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(i.blending=this.blending),this.side!==ka&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wd&&(i.blendSrc=this.blendSrc),this.blendDst!==qd&&(i.blendDst=this.blendDst),this.blendEquation!==as&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const zi=new z,Pf=new z,Nl=new z,ma=new z,If=new z,Ll=new z,Bf=new z;class yS{constructor(t=new z,n=new z(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=zi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(zi.copy(this.origin).addScaledVector(this.direction,n),zi.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){Pf.copy(t).add(n).multiplyScalar(.5),Nl.copy(n).sub(t).normalize(),ma.copy(this.origin).sub(Pf);const s=t.distanceTo(n)*.5,r=-this.direction.dot(Nl),o=ma.dot(this.direction),l=-ma.dot(Nl),c=ma.lengthSq(),d=Math.abs(1-r*r);let h,u,p,v;if(d>0)if(h=r*l-o,u=r*o-l,v=s*d,h>=0)if(u>=-v)if(u<=v){const y=1/d;h*=y,u*=y,p=h*(h+r*u+2*o)+u*(r*h+u+2*l)+c}else u=s,h=Math.max(0,-(r*u+o)),p=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(r*u+o)),p=-h*h+u*(u+2*l)+c;else u<=-v?(h=Math.max(0,-(-r*s+o)),u=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c):u<=v?(h=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(h=Math.max(0,-(r*s+o)),u=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c);else u=r>0?-s:s,h=Math.max(0,-(r*u+o)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(Pf).addScaledVector(Nl,u),p}intersectSphere(t,n){zi.subVectors(t.center,this.origin);const i=zi.dot(this.direction),a=zi.dot(zi)-i*i,s=t.radius*t.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,a=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,a=(t.min.x-u.x)*c),d>=0?(s=(t.min.y-u.y)*d,r=(t.max.y-u.y)*d):(s=(t.max.y-u.y)*d,r=(t.min.y-u.y)*d),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),h>=0?(o=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(o=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,zi)!==null}intersectTriangle(t,n,i,a,s){If.subVectors(n,t),Ll.subVectors(i,t),Bf.crossVectors(If,Ll);let r=this.direction.dot(Bf),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ma.subVectors(this.origin,t);const l=o*this.direction.dot(Ll.crossVectors(ma,Ll));if(l<0)return null;const c=o*this.direction.dot(If.cross(ma));if(c<0||l+c>r)return null;const d=-o*ma.dot(Bf);return d<0?null:this.at(d/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qp extends il{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.combine=tS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const c0=new We,Qa=new yS,Ol=new Eu,u0=new z,Pl=new z,Il=new z,Bl=new z,Ff=new z,Fl=new z,f0=new z,zl=new z;class Ai extends Tn{constructor(t=new Hn,n=new Qp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(s&&o){Fl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(Ff.fromBufferAttribute(h,t),r?Fl.addScaledVector(Ff,d):Fl.addScaledVector(Ff.sub(n),d))}n.add(Fl)}return n}raycast(t,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ol.copy(i.boundingSphere),Ol.applyMatrix4(s),Qa.copy(t.ray).recast(t.near),!(Ol.containsPoint(Qa.origin)===!1&&(Qa.intersectSphere(Ol,u0)===null||Qa.origin.distanceToSquared(u0)>(t.far-t.near)**2))&&(c0.copy(s).invert(),Qa.copy(t.ray).applyMatrix4(c0),!(i.boundingBox!==null&&Qa.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Qa)))}_computeIntersections(t,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,y=u.length;v<y;v++){const g=u[v],f=r[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,C=_;M<C;M+=3){const b=o.getX(M),R=o.getX(M+1),x=o.getX(M+2);a=Gl(this,f,t,i,c,d,h,b,R,x),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const v=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let g=v,f=y;g<f;g+=3){const m=o.getX(g),_=o.getX(g+1),M=o.getX(g+2);a=Gl(this,r,t,i,c,d,h,m,_,M),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,y=u.length;v<y;v++){const g=u[v],f=r[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,C=_;M<C;M+=3){const b=M,R=M+1,x=M+2;a=Gl(this,f,t,i,c,d,h,b,R,x),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=v,f=y;g<f;g+=3){const m=g,_=g+1,M=g+2;a=Gl(this,r,t,i,c,d,h,m,_,M),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function Qb(e,t,n,i,a,s,r,o){let l;if(t.side===bn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===ka,o),l===null)return null;zl.copy(o),zl.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(zl);return c<n.near||c>n.far?null:{distance:c,point:zl.clone(),object:e}}function Gl(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,Pl),e.getVertexPosition(l,Il),e.getVertexPosition(c,Bl);const d=Qb(e,t,n,i,Pl,Il,Bl,f0);if(d){const h=new z;li.getBarycoord(f0,Pl,Il,Bl,h),a&&(d.uv=li.getInterpolatedAttribute(a,o,l,c,h,new se)),s&&(d.uv1=li.getInterpolatedAttribute(s,o,l,c,h,new se)),r&&(d.normal=li.getInterpolatedAttribute(r,o,l,c,h,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new z,materialIndex:0};li.getNormal(Pl,Il,Bl,u.normal),d.face=u,d.barycoord=h}return d}class Jb extends gn{constructor(t=null,n=1,i=1,a,s,r,o,l,c=rn,d=rn,h,u){super(null,r,o,l,c,d,a,s,h,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zf=new z,$b=new z,tT=new Pt;class is{constructor(t=new z(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=zf.subVectors(i,n).cross($b.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){const a=t.delta(zf),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(a,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||tT.getNormalMatrix(t),a=this.coplanarPoint(zf).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ja=new Eu,eT=new se(.5,.5),Hl=new z;class ES{constructor(t=new is,n=new is,i=new is,a=new is,s=new is,r=new is){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Si,i=!1){const a=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],c=s[3],d=s[4],h=s[5],u=s[6],p=s[7],v=s[8],y=s[9],g=s[10],f=s[11],m=s[12],_=s[13],M=s[14],C=s[15];if(a[0].setComponents(c-r,p-d,f-v,C-m).normalize(),a[1].setComponents(c+r,p+d,f+v,C+m).normalize(),a[2].setComponents(c+o,p+h,f+y,C+_).normalize(),a[3].setComponents(c-o,p-h,f-y,C-_).normalize(),i)a[4].setComponents(l,u,g,M).normalize(),a[5].setComponents(c-l,p-u,f-g,C-M).normalize();else if(a[4].setComponents(c-l,p-u,f-g,C-M).normalize(),n===Si)a[5].setComponents(c+l,p+u,f+g,C+M).normalize();else if(n===Jc)a[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ja.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ja)}intersectsSprite(t){Ja.center.set(0,0,0);const n=eT.distanceTo(t.center);return Ja.radius=.7071067811865476+n,Ja.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ja)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Hl.x=a.normal.x>0?t.max.x:t.min.x,Hl.y=a.normal.y>0?t.max.y:t.min.y,Hl.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Hl)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bS extends il{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const tu=new z,eu=new z,d0=new We,Jr=new yS,Vl=new Eu,Gf=new z,h0=new z;class nT extends Tn{constructor(t=new Hn,n=new bS){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let a=1,s=n.count;a<s;a++)tu.fromBufferAttribute(n,a-1),eu.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=tu.distanceTo(eu);t.setAttribute("lineDistance",new tn(i,1))}else wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vl.copy(i.boundingSphere),Vl.applyMatrix4(a),Vl.radius+=s,t.ray.intersectsSphere(Vl)===!1)return;d0.copy(a).invert(),Jr.copy(t.ray).applyMatrix4(d0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const p=Math.max(0,r.start),v=Math.min(d.count,r.start+r.count);for(let y=p,g=v-1;y<g;y+=c){const f=d.getX(y),m=d.getX(y+1),_=kl(this,t,Jr,l,f,m,y);_&&n.push(_)}if(this.isLineLoop){const y=d.getX(v-1),g=d.getX(p),f=kl(this,t,Jr,l,y,g,v-1);f&&n.push(f)}}else{const p=Math.max(0,r.start),v=Math.min(u.count,r.start+r.count);for(let y=p,g=v-1;y<g;y+=c){const f=kl(this,t,Jr,l,y,y+1,y);f&&n.push(f)}if(this.isLineLoop){const y=kl(this,t,Jr,l,v-1,p,v-1);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function kl(e,t,n,i,a,s,r){const o=e.geometry.attributes.position;if(tu.fromBufferAttribute(o,a),eu.fromBufferAttribute(o,s),n.distanceSqToSegment(tu,eu,Gf,h0)>i)return;Gf.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(Gf);if(!(c<t.near||c>t.far))return{distance:c,point:h0.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}const p0=new z,m0=new z;class iT extends nT{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[];for(let a=0,s=n.count;a<s;a+=2)p0.fromBufferAttribute(n,a),m0.fromBufferAttribute(n,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+p0.distanceTo(m0);t.setAttribute("lineDistance",new tn(i,1))}else wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class TS extends gn{constructor(t=[],n=vs,i,a,s,r,o,l,c,d){super(t,n,i,a,s,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Cr extends gn{constructor(t,n,i=Ti,a,s,r,o=rn,l=rn,c,d=sa,h=1){if(d!==sa&&d!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:n,depth:h};super(u,a,s,r,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Kp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class aT extends Cr{constructor(t,n=Ti,i=vs,a,s,r=rn,o=rn,l,c=sa){const d={width:t,height:t,depth:1},h=[d,d,d,d,d,d];super(t,t,n,i,a,s,r,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class AS extends gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class al extends Hn{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],d=[],h=[];let u=0,p=0;v("z","y","x",-1,-1,i,n,t,r,s,0),v("z","y","x",1,-1,i,n,-t,r,s,1),v("x","z","y",1,1,t,i,n,a,r,2),v("x","z","y",1,-1,t,i,-n,a,r,3),v("x","y","z",1,-1,t,n,i,a,s,4),v("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(d,3)),this.setAttribute("uv",new tn(h,2));function v(y,g,f,m,_,M,C,b,R,x,A){const D=M/R,w=C/x,F=M/2,Y=C/2,j=b/2,I=R+1,U=x+1;let O=0,q=0;const $=new z;for(let at=0;at<U;at++){const gt=at*w-Y;for(let yt=0;yt<I;yt++){const Lt=yt*D-F;$[y]=Lt*m,$[g]=gt*_,$[f]=j,c.push($.x,$.y,$.z),$[y]=0,$[g]=0,$[f]=b>0?1:-1,d.push($.x,$.y,$.z),h.push(yt/R),h.push(1-at/x),O+=1}}for(let at=0;at<x;at++)for(let gt=0;gt<R;gt++){const yt=u+gt+I*at,Lt=u+gt+I*(at+1),Gt=u+(gt+1)+I*(at+1),Dt=u+(gt+1)+I*at;l.push(yt,Lt,Dt),l.push(Lt,Gt,Dt),q+=6}o.addGroup(p,q,A),p+=q,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new al(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Jp extends Hn{constructor(t=[],n=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:a};const s=[],r=[];o(a),c(i),d(),this.setAttribute("position",new tn(s,3)),this.setAttribute("normal",new tn(s.slice(),3)),this.setAttribute("uv",new tn(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const _=new z,M=new z,C=new z;for(let b=0;b<n.length;b+=3)p(n[b+0],_),p(n[b+1],M),p(n[b+2],C),l(_,M,C,m)}function l(m,_,M,C){const b=C+1,R=[];for(let x=0;x<=b;x++){R[x]=[];const A=m.clone().lerp(M,x/b),D=_.clone().lerp(M,x/b),w=b-x;for(let F=0;F<=w;F++)F===0&&x===b?R[x][F]=A:R[x][F]=A.clone().lerp(D,F/w)}for(let x=0;x<b;x++)for(let A=0;A<2*(b-x)-1;A++){const D=Math.floor(A/2);A%2===0?(u(R[x][D+1]),u(R[x+1][D]),u(R[x][D])):(u(R[x][D+1]),u(R[x+1][D+1]),u(R[x+1][D]))}}function c(m){const _=new z;for(let M=0;M<s.length;M+=3)_.x=s[M+0],_.y=s[M+1],_.z=s[M+2],_.normalize().multiplyScalar(m),s[M+0]=_.x,s[M+1]=_.y,s[M+2]=_.z}function d(){const m=new z;for(let _=0;_<s.length;_+=3){m.x=s[_+0],m.y=s[_+1],m.z=s[_+2];const M=g(m)/2/Math.PI+.5,C=f(m)/Math.PI+.5;r.push(M,1-C)}v(),h()}function h(){for(let m=0;m<r.length;m+=6){const _=r[m+0],M=r[m+2],C=r[m+4],b=Math.max(_,M,C),R=Math.min(_,M,C);b>.9&&R<.1&&(_<.2&&(r[m+0]+=1),M<.2&&(r[m+2]+=1),C<.2&&(r[m+4]+=1))}}function u(m){s.push(m.x,m.y,m.z)}function p(m,_){const M=m*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function v(){const m=new z,_=new z,M=new z,C=new z,b=new se,R=new se,x=new se;for(let A=0,D=0;A<s.length;A+=9,D+=6){m.set(s[A+0],s[A+1],s[A+2]),_.set(s[A+3],s[A+4],s[A+5]),M.set(s[A+6],s[A+7],s[A+8]),b.set(r[D+0],r[D+1]),R.set(r[D+2],r[D+3]),x.set(r[D+4],r[D+5]),C.copy(m).add(_).add(M).divideScalar(3);const w=g(C);y(b,D+0,m,w),y(R,D+2,_,w),y(x,D+4,M,w)}}function y(m,_,M,C){C<0&&m.x===1&&(r[_]=m.x-1),M.x===0&&M.z===0&&(r[_]=C/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function f(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jp(t.vertices,t.indices,t.radius,t.detail)}}class $p extends Jp{constructor(t=1,n=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,s,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new $p(t.radius,t.detail)}}class bu extends Hn{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,h=t/o,u=n/l,p=[],v=[],y=[],g=[];for(let f=0;f<d;f++){const m=f*u-r;for(let _=0;_<c;_++){const M=_*h-s;v.push(M,-m,0),y.push(0,0,1),g.push(_/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const _=m+c*f,M=m+c*(f+1),C=m+1+c*(f+1),b=m+1+c*f;p.push(_,M,b),p.push(M,C,b)}this.setIndex(p),this.setAttribute("position",new tn(v,3)),this.setAttribute("normal",new tn(y,3)),this.setAttribute("uv",new tn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bu(t.width,t.height,t.widthSegments,t.heightSegments)}}class tm extends Hn{constructor(t=1,n=.4,i=12,a=48,s=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:a,arc:s,thetaStart:r,thetaLength:o},i=Math.floor(i),a=Math.floor(a);const l=[],c=[],d=[],h=[],u=new z,p=new z,v=new z;for(let y=0;y<=i;y++){const g=r+y/i*o;for(let f=0;f<=a;f++){const m=f/a*s;p.x=(t+n*Math.cos(g))*Math.cos(m),p.y=(t+n*Math.cos(g))*Math.sin(m),p.z=n*Math.sin(g),c.push(p.x,p.y,p.z),u.x=t*Math.cos(m),u.y=t*Math.sin(m),v.subVectors(p,u).normalize(),d.push(v.x,v.y,v.z),h.push(f/a),h.push(y/i)}}for(let y=1;y<=i;y++)for(let g=1;g<=a;g++){const f=(a+1)*y+g-1,m=(a+1)*(y-1)+g-1,_=(a+1)*(y-1)+g,M=(a+1)*y+g;l.push(f,m,M),l.push(m,_,M)}this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(d,3)),this.setAttribute("uv",new tn(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tm(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class sT extends Hn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const n=[],i=new Set,a=new z,s=new z;if(t.index!==null){const r=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,d=l.length;c<d;++c){const h=l[c],u=h.start,p=h.count;for(let v=u,y=u+p;v<y;v+=3)for(let g=0;g<3;g++){const f=o.getX(v+g),m=o.getX(v+(g+1)%3);a.fromBufferAttribute(r,f),s.fromBufferAttribute(r,m),g0(a,s,i)===!0&&(n.push(a.x,a.y,a.z),n.push(s.x,s.y,s.z))}}}else{const r=t.attributes.position;for(let o=0,l=r.count/3;o<l;o++)for(let c=0;c<3;c++){const d=3*o+c,h=3*o+(c+1)%3;a.fromBufferAttribute(r,d),s.fromBufferAttribute(r,h),g0(a,s,i)===!0&&(n.push(a.x,a.y,a.z),n.push(s.x,s.y,s.z))}}this.setAttribute("position",new tn(n,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function g0(e,t,n){const i=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,a=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return n.has(i)===!0||n.has(a)===!0?!1:(n.add(i),n.add(a),!0)}function wr(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];if(_0(a))a.isRenderTargetTexture?(wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone();else if(Array.isArray(a))if(_0(a[0])){const s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();t[n][i]=s}else t[n][i]=a.slice();else t[n][i]=a}}return t}function hn(e){const t={};for(let n=0;n<e.length;n++){const i=wr(e[n]);for(const a in i)t[a]=i[a]}return t}function _0(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function rT(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function RS(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const oT={clone:wr,merge:hn};var lT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends il{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lT,this.fragmentShader=cT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wr(t.uniforms),this.uniformsGroups=rT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class uT extends Ri{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fT extends il{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dT extends il{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Xl=new z,Wl=new Fr,hi=new z;class CS extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Xl,Wl,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xl,Wl,hi.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(Xl,Wl,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xl,Wl,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ga=new z,v0=new se,x0=new se;class Zn extends CS{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Lh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lh*2*Math.atan(Math.tan(gf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ga.x,ga.y).multiplyScalar(-t/ga.z),ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ga.x,ga.y).multiplyScalar(-t/ga.z)}getViewSize(t,n){return this.getViewBounds(t,v0,x0),n.subVectors(x0,v0)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(gf*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class wS extends CS{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Vs=-90,ks=1;class hT extends Tn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Zn(Vs,ks,t,n);a.layers=this.layers,this.add(a);const s=new Zn(Vs,ks,t,n);s.layers=this.layers,this.add(s);const r=new Zn(Vs,ks,t,n);r.layers=this.layers,this.add(r);const o=new Zn(Vs,ks,t,n);o.layers=this.layers,this.add(o);const l=new Zn(Vs,ks,t,n);l.layers=this.layers,this.add(l);const c=new Zn(Vs,ks,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const c of n)this.remove(c);if(t===Si)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Jc)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,d]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,s),t.setRenderTarget(i,1,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),t.setRenderTarget(h,u,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class pT extends Zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const sm=class sm{constructor(t,n,i,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,a){const s=this.elements;return s[0]=t,s[2]=n,s[1]=i,s[3]=a,this}};sm.prototype.isMatrix2=!0;let S0=sm;function M0(e,t,n,i){const a=mT(i);switch(n){case hS:return e*t;case mS:return e*t/a.components*a.byteLength;case Wp:return e*t/a.components*a.byteLength;case xs:return e*t*2/a.components*a.byteLength;case qp:return e*t*2/a.components*a.byteLength;case pS:return e*t*3/a.components*a.byteLength;case ci:return e*t*4/a.components*a.byteLength;case Yp:return e*t*4/a.components*a.byteLength;case hc:case pc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case mc:case gc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ih:case sh:return Math.max(e,16)*Math.max(t,8)/4;case nh:case ah:return Math.max(e,8)*Math.max(t,8)/2;case rh:case oh:case ch:case uh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case lh:case jc:case fh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case dh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case hh:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ph:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case mh:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case gh:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case _h:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case vh:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case xh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Sh:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Mh:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case yh:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Eh:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case bh:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Th:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ah:case Rh:case Ch:return Math.ceil(e/4)*Math.ceil(t/4)*16;case wh:case Dh:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Zc:case Uh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function mT(e){switch(e){case $n:case cS:return{byteLength:1,components:1};case Go:case uS:case aa:return{byteLength:2,components:1};case kp:case Xp:return{byteLength:2,components:4};case Ti:case Vp:case xi:return{byteLength:4,components:1};case fS:case dS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hp}}));typeof window<"u"&&(window.__THREE__?wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function DS(){let e=null,t=!1,n=null,i=null;function a(s,r){n(s,r),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function gT(e){const t=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(e.bindBuffer(c,o),h.length===0)e.bufferSubData(c,0,d);else{h.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<h.length;p++){const v=h[u],y=h[p];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++u,h[u]=y)}h.length=u+1;for(let p=0,v=h.length;p<v;p++){const y=h[p];e.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var _T=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vT=`#ifdef USE_ALPHAHASH
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
#endif`,xT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ST=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ET=`#ifdef USE_AOMAP
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
#endif`,bT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TT=`#ifdef USE_BATCHING
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
#endif`,AT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DT=`#ifdef USE_IRIDESCENCE
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
#endif`,UT=`#ifdef USE_BUMPMAP
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
#endif`,NT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,LT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,BT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,FT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,GT=`#define PI 3.141592653589793
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
} // validated`,HT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,VT=`vec3 transformedNormal = objectNormal;
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
#endif`,kT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YT="gl_FragColor = linearToOutputTexel( gl_FragColor );",jT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZT=`#ifdef USE_ENVMAP
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
#endif`,KT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,QT=`#ifdef USE_ENVMAP
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
#endif`,JT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$T=`#ifdef USE_ENVMAP
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
#endif`,t1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a1=`#ifdef USE_GRADIENTMAP
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
}`,s1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,c1=`#ifdef USE_ENVMAP
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
#endif`,u1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p1=`PhysicalMaterial material;
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
#endif`,m1=`uniform sampler2D dfgLUT;
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
}`,g1=`
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
#endif`,_1=`#if defined( RE_IndirectDiffuse )
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
#endif`,v1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,S1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,R1=`#if defined( USE_POINTS_UV )
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
#endif`,C1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,U1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L1=`#ifdef USE_MORPHTARGETS
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
#endif`,O1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,I1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,B1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G1=`#ifdef USE_NORMALMAP
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
#endif`,H1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Y1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nA=`float getShadowMask() {
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
}`,iA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aA=`#ifdef USE_SKINNING
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
#endif`,sA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rA=`#ifdef USE_SKINNING
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
#endif`,oA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fA=`#ifdef USE_TRANSMISSION
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
#endif`,dA=`#ifdef USE_TRANSMISSION
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
#endif`,hA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _A=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vA=`uniform sampler2D t2D;
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
}`,xA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,MA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EA=`#include <common>
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
}`,bA=`#if DEPTH_PACKING == 3200
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
}`,TA=`#define DISTANCE
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
}`,AA=`#define DISTANCE
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
}`,RA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wA=`uniform float scale;
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
}`,DA=`uniform vec3 diffuse;
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
}`,UA=`#include <common>
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
}`,NA=`uniform vec3 diffuse;
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
}`,LA=`#define LAMBERT
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
}`,OA=`#define LAMBERT
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
}`,PA=`#define MATCAP
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
}`,IA=`#define MATCAP
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
}`,BA=`#define NORMAL
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
}`,FA=`#define NORMAL
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
}`,zA=`#define PHONG
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
}`,GA=`#define PHONG
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
}`,HA=`#define STANDARD
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
}`,VA=`#define STANDARD
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
}`,kA=`#define TOON
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
}`,XA=`#define TOON
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
}`,WA=`uniform float size;
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
}`,qA=`uniform vec3 diffuse;
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
}`,YA=`#include <common>
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
}`,jA=`uniform vec3 color;
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
}`,ZA=`uniform float rotation;
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
}`,KA=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:_T,alphahash_pars_fragment:vT,alphamap_fragment:xT,alphamap_pars_fragment:ST,alphatest_fragment:MT,alphatest_pars_fragment:yT,aomap_fragment:ET,aomap_pars_fragment:bT,batching_pars_vertex:TT,batching_vertex:AT,begin_vertex:RT,beginnormal_vertex:CT,bsdfs:wT,iridescence_fragment:DT,bumpmap_pars_fragment:UT,clipping_planes_fragment:NT,clipping_planes_pars_fragment:LT,clipping_planes_pars_vertex:OT,clipping_planes_vertex:PT,color_fragment:IT,color_pars_fragment:BT,color_pars_vertex:FT,color_vertex:zT,common:GT,cube_uv_reflection_fragment:HT,defaultnormal_vertex:VT,displacementmap_pars_vertex:kT,displacementmap_vertex:XT,emissivemap_fragment:WT,emissivemap_pars_fragment:qT,colorspace_fragment:YT,colorspace_pars_fragment:jT,envmap_fragment:ZT,envmap_common_pars_fragment:KT,envmap_pars_fragment:QT,envmap_pars_vertex:JT,envmap_physical_pars_fragment:c1,envmap_vertex:$T,fog_vertex:t1,fog_pars_vertex:e1,fog_fragment:n1,fog_pars_fragment:i1,gradientmap_pars_fragment:a1,lightmap_pars_fragment:s1,lights_lambert_fragment:r1,lights_lambert_pars_fragment:o1,lights_pars_begin:l1,lights_toon_fragment:u1,lights_toon_pars_fragment:f1,lights_phong_fragment:d1,lights_phong_pars_fragment:h1,lights_physical_fragment:p1,lights_physical_pars_fragment:m1,lights_fragment_begin:g1,lights_fragment_maps:_1,lights_fragment_end:v1,lightprobes_pars_fragment:x1,logdepthbuf_fragment:S1,logdepthbuf_pars_fragment:M1,logdepthbuf_pars_vertex:y1,logdepthbuf_vertex:E1,map_fragment:b1,map_pars_fragment:T1,map_particle_fragment:A1,map_particle_pars_fragment:R1,metalnessmap_fragment:C1,metalnessmap_pars_fragment:w1,morphinstance_vertex:D1,morphcolor_vertex:U1,morphnormal_vertex:N1,morphtarget_pars_vertex:L1,morphtarget_vertex:O1,normal_fragment_begin:P1,normal_fragment_maps:I1,normal_pars_fragment:B1,normal_pars_vertex:F1,normal_vertex:z1,normalmap_pars_fragment:G1,clearcoat_normal_fragment_begin:H1,clearcoat_normal_fragment_maps:V1,clearcoat_pars_fragment:k1,iridescence_pars_fragment:X1,opaque_fragment:W1,packing:q1,premultiplied_alpha_fragment:Y1,project_vertex:j1,dithering_fragment:Z1,dithering_pars_fragment:K1,roughnessmap_fragment:Q1,roughnessmap_pars_fragment:J1,shadowmap_pars_fragment:$1,shadowmap_pars_vertex:tA,shadowmap_vertex:eA,shadowmask_pars_fragment:nA,skinbase_vertex:iA,skinning_pars_vertex:aA,skinning_vertex:sA,skinnormal_vertex:rA,specularmap_fragment:oA,specularmap_pars_fragment:lA,tonemapping_fragment:cA,tonemapping_pars_fragment:uA,transmission_fragment:fA,transmission_pars_fragment:dA,uv_pars_fragment:hA,uv_pars_vertex:pA,uv_vertex:mA,worldpos_vertex:gA,background_vert:_A,background_frag:vA,backgroundCube_vert:xA,backgroundCube_frag:SA,cube_vert:MA,cube_frag:yA,depth_vert:EA,depth_frag:bA,distance_vert:TA,distance_frag:AA,equirect_vert:RA,equirect_frag:CA,linedashed_vert:wA,linedashed_frag:DA,meshbasic_vert:UA,meshbasic_frag:NA,meshlambert_vert:LA,meshlambert_frag:OA,meshmatcap_vert:PA,meshmatcap_frag:IA,meshnormal_vert:BA,meshnormal_frag:FA,meshphong_vert:zA,meshphong_frag:GA,meshphysical_vert:HA,meshphysical_frag:VA,meshtoon_vert:kA,meshtoon_frag:XA,points_vert:WA,points_frag:qA,shadow_vert:YA,shadow_frag:jA,sprite_vert:ZA,sprite_frag:KA},dt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},mi={basic:{uniforms:hn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:hn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:hn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:hn([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:hn([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new fe(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:hn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:hn([dt.points,dt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:hn([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:hn([dt.common,dt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:hn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:hn([dt.sprite,dt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:hn([dt.common,dt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:hn([dt.lights,dt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};mi.physical={uniforms:hn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const ql={r:0,b:0,g:0},QA=new We,US=new Pt;US.set(-1,0,0,0,1,0,0,0,1);function JA(e,t,n,i,a,s){const r=new fe(0);let o=a===!0?0:1,l,c,d=null,h=0,u=null;function p(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){const M=m.backgroundBlurriness>0;_=t.get(_,M)}return _}function v(m){let _=!1;const M=p(m);M===null?g(r,o):M&&M.isColor&&(g(M,1),_=!0);const C=e.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(e.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function y(m,_){const M=p(_);M&&(M.isCubeTexture||M.mapping===yu)?(c===void 0&&(c=new Ai(new al(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:wr(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(QA.makeRotationFromEuler(_.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(US),c.material.toneMapped=Kt.getTransfer(M.colorSpace)!==le,(d!==M||h!==M.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,d=M,h=M.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ai(new bu(2,2),new Ri({name:"BackgroundMaterial",uniforms:wr(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(M.colorSpace)!==le,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,d=M,h=M.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,_){m.getRGB(ql,RS(e)),n.buffers.color.setClear(ql.r,ql.g,ql.b,_,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,_=1){r.set(m),o=_,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:v,addToRenderList:y,dispose:f}}function $A(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=u(null);let s=a,r=!1;function o(w,F,Y,j,I){let U=!1;const O=h(w,j,Y,F);s!==O&&(s=O,c(s.object)),U=p(w,j,Y,I),U&&v(w,j,Y,I),I!==null&&t.update(I,e.ELEMENT_ARRAY_BUFFER),(U||r)&&(r=!1,M(w,F,Y,j),I!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return e.createVertexArray()}function c(w){return e.bindVertexArray(w)}function d(w){return e.deleteVertexArray(w)}function h(w,F,Y,j){const I=j.wireframe===!0;let U=i[F.id];U===void 0&&(U={},i[F.id]=U);const O=w.isInstancedMesh===!0?w.id:0;let q=U[O];q===void 0&&(q={},U[O]=q);let $=q[Y.id];$===void 0&&($={},q[Y.id]=$);let at=$[I];return at===void 0&&(at=u(l()),$[I]=at),at}function u(w){const F=[],Y=[],j=[];for(let I=0;I<n;I++)F[I]=0,Y[I]=0,j[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Y,attributeDivisors:j,object:w,attributes:{},index:null}}function p(w,F,Y,j){const I=s.attributes,U=F.attributes;let O=0;const q=Y.getAttributes();for(const $ in q)if(q[$].location>=0){const gt=I[$];let yt=U[$];if(yt===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor)),gt===void 0||gt.attribute!==yt||yt&&gt.data!==yt.data)return!0;O++}return s.attributesNum!==O||s.index!==j}function v(w,F,Y,j){const I={},U=F.attributes;let O=0;const q=Y.getAttributes();for(const $ in q)if(q[$].location>=0){let gt=U[$];gt===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(gt=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(gt=w.instanceColor));const yt={};yt.attribute=gt,gt&&gt.data&&(yt.data=gt.data),I[$]=yt,O++}s.attributes=I,s.attributesNum=O,s.index=j}function y(){const w=s.newAttributes;for(let F=0,Y=w.length;F<Y;F++)w[F]=0}function g(w){f(w,0)}function f(w,F){const Y=s.newAttributes,j=s.enabledAttributes,I=s.attributeDivisors;Y[w]=1,j[w]===0&&(e.enableVertexAttribArray(w),j[w]=1),I[w]!==F&&(e.vertexAttribDivisor(w,F),I[w]=F)}function m(){const w=s.newAttributes,F=s.enabledAttributes;for(let Y=0,j=F.length;Y<j;Y++)F[Y]!==w[Y]&&(e.disableVertexAttribArray(Y),F[Y]=0)}function _(w,F,Y,j,I,U,O){O===!0?e.vertexAttribIPointer(w,F,Y,I,U):e.vertexAttribPointer(w,F,Y,j,I,U)}function M(w,F,Y,j){y();const I=j.attributes,U=Y.getAttributes(),O=F.defaultAttributeValues;for(const q in U){const $=U[q];if($.location>=0){let at=I[q];if(at===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(at=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(at=w.instanceColor)),at!==void 0){const gt=at.normalized,yt=at.itemSize,Lt=t.get(at);if(Lt===void 0)continue;const Gt=Lt.buffer,Dt=Lt.type,tt=Lt.bytesPerElement,ft=Dt===e.INT||Dt===e.UNSIGNED_INT||at.gpuType===Vp;if(at.isInterleavedBufferAttribute){const st=at.data,bt=st.stride,Nt=at.offset;if(st.isInstancedInterleavedBuffer){for(let Ct=0;Ct<$.locationSize;Ct++)f($.location+Ct,st.meshPerAttribute);w.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ct=0;Ct<$.locationSize;Ct++)g($.location+Ct);e.bindBuffer(e.ARRAY_BUFFER,Gt);for(let Ct=0;Ct<$.locationSize;Ct++)_($.location+Ct,yt/$.locationSize,Dt,gt,bt*tt,(Nt+yt/$.locationSize*Ct)*tt,ft)}else{if(at.isInstancedBufferAttribute){for(let st=0;st<$.locationSize;st++)f($.location+st,at.meshPerAttribute);w.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let st=0;st<$.locationSize;st++)g($.location+st);e.bindBuffer(e.ARRAY_BUFFER,Gt);for(let st=0;st<$.locationSize;st++)_($.location+st,yt/$.locationSize,Dt,gt,yt*tt,yt/$.locationSize*st*tt,ft)}}else if(O!==void 0){const gt=O[q];if(gt!==void 0)switch(gt.length){case 2:e.vertexAttrib2fv($.location,gt);break;case 3:e.vertexAttrib3fv($.location,gt);break;case 4:e.vertexAttrib4fv($.location,gt);break;default:e.vertexAttrib1fv($.location,gt)}}}}m()}function C(){A();for(const w in i){const F=i[w];for(const Y in F){const j=F[Y];for(const I in j){const U=j[I];for(const O in U)d(U[O].object),delete U[O];delete j[I]}}delete i[w]}}function b(w){if(i[w.id]===void 0)return;const F=i[w.id];for(const Y in F){const j=F[Y];for(const I in j){const U=j[I];for(const O in U)d(U[O].object),delete U[O];delete j[I]}}delete i[w.id]}function R(w){for(const F in i){const Y=i[F];for(const j in Y){const I=Y[j];if(I[w.id]===void 0)continue;const U=I[w.id];for(const O in U)d(U[O].object),delete U[O];delete I[w.id]}}}function x(w){for(const F in i){const Y=i[F],j=w.isInstancedMesh===!0?w.id:0,I=Y[j];if(I!==void 0){for(const U in I){const O=I[U];for(const q in O)d(O[q].object),delete O[q];delete I[U]}delete Y[j],Object.keys(Y).length===0&&delete i[F]}}}function A(){D(),r=!0,s!==a&&(s=a,c(s.object))}function D(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:A,resetDefaultState:D,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:g,disableUnusedAttributes:m}}function tR(e,t,n){let i;function a(l){i=l}function s(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,d){d!==0&&(e.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function o(l,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let p=0;p<d;p++)u+=c[p];n.update(u,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function eR(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(R){return!(R!==ci&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const x=R===aa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==$n&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==xi&&!x)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(wt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),C=e.getParameter(e.MAX_SAMPLES),b=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:M,maxSamples:C,samples:b}}function nR(e){const t=this;let n=null,i=0,a=!1,s=!1;const r=new is,o=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||i!==0||a;return a=u,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){n=d(h,u,0)},this.setState=function(h,u,p){const v=h.clippingPlanes,y=h.clipIntersection,g=h.clipShadows,f=e.get(h);if(!a||v===null||v.length===0||s&&!g)s?d(null):c();else{const m=s?0:i,_=m*4;let M=f.clippingState||null;l.value=M,M=d(v,u,_,p);for(let C=0;C!==_;++C)M[C]=n[C];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(h,u,p,v){const y=h!==null?h.length:0;let g=null;if(y!==0){if(g=l.value,v!==!0||g===null){const f=p+y*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let _=0,M=p;_!==y;++_,M+=4)r.copy(h[_]).applyMatrix4(m,o),r.normal.toArray(g,M),g[M+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}const wa=4,y0=[.125,.215,.35,.446,.526,.582],ss=20,iR=256,$r=new wS,E0=new fe;let Hf=null,Vf=0,kf=0,Xf=!1;const aR=new z;class b0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,a=100,s={}){const{size:r=256,position:o=aR}=s;Hf=this._renderer.getRenderTarget(),Vf=this._renderer.getActiveCubeFace(),kf=this._renderer.getActiveMipmapLevel(),Xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=R0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=A0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Hf,Vf,kf),this._renderer.xr.enabled=Xf,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===vs||t.mapping===Rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hf=this._renderer.getRenderTarget(),Vf=this._renderer.getActiveCubeFace(),kf=this._renderer.getActiveMipmapLevel(),Xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:aa,format:ci,colorSpace:Kc,depthBuffer:!1},a=T0(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=T0(t,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sR(s)),this._blurMaterial=oR(s,t,n),this._ggxMaterial=rR(s,t,n)}return a}_compileMaterial(t){const n=new Ai(new Hn,t);this._renderer.compile(n,$r)}_sceneToCubeUV(t,n,i,a,s){const l=new Zn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(E0),h.toneMapping=yi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(a),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ai(new al,new Qp({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,g=y.material;let f=!1;const m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,f=!0):(g.color.copy(E0),f=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[_],s.y,s.z)):M===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[_]));const C=this._cubeSize;Xs(a,M*C,_>2?C:0,C,C),h.setRenderTarget(a),f&&h.render(y,l),h.render(t,l)}h.toneMapping=p,h.autoClear=u,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===vs||t.mapping===Rr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=R0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=A0());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Xs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,$r)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(t,s-1,s);n.autoClear=i}_applyGGXFilter(t,n,i){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=0+c*1.25,p=h*u,{_lodMax:v}=this,y=this._sizeLods[i],g=3*y*(i>v-wa?i-v+wa:0),f=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=v-n,Xs(s,g,f,3*y,2*y),a.setRenderTarget(s),a.render(o,$r),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Xs(t,g,f,3*y,2*y),a.setRenderTarget(t),a.render(o,$r)}_blur(t,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,a,"latitudinal",s),this._halfBlur(r,t,i,i,a,"longitudinal",s)}_halfBlur(t,n,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&ee("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[a];h.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ss-1),y=s/v,g=isFinite(s)?1+Math.floor(d*y):ss;g>ss&&wt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ss}`);const f=[];let m=0;for(let R=0;R<ss;++R){const x=R/y,A=Math.exp(-x*x/2);f.push(A),R===0?m+=A:R<g&&(m+=2*A)}for(let R=0;R<f.length;R++)f[R]=f[R]/m;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=v,u.mipInt.value=_-i;const M=this._sizeLods[a],C=3*M*(a>_-wa?a-_+wa:0),b=4*(this._cubeSize-M);Xs(n,C,b,3*M,2*M),l.setRenderTarget(n),l.render(h,$r)}}function sR(e){const t=[],n=[],i=[];let a=e;const s=e-wa+1+y0.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let l=1/o;r>e-wa?l=y0[r-e+wa-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,v=6,y=3,g=2,f=1,m=new Float32Array(y*v*p),_=new Float32Array(g*v*p),M=new Float32Array(f*v*p);for(let b=0;b<p;b++){const R=b%3*2/3-1,x=b>2?0:-1,A=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];m.set(A,y*v*b),_.set(u,g*v*b);const D=[b,b,b,b,b,b];M.set(D,f*v*b)}const C=new Hn;C.setAttribute("position",new bi(m,y)),C.setAttribute("uv",new bi(_,g)),C.setAttribute("faceIndex",new bi(M,f)),i.push(new Ai(C,null)),a>wa&&a--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function T0(e,t,n){const i=new Ei(e,t,n);return i.texture.mapping=yu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xs(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function rR(e,t,n){return new Ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tu(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function oR(e,t,n){const i=new Float32Array(ss),a=new z(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Tu(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function A0(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tu(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function R0(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Tu(){return`

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
	`}class NS extends Ei{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new TS(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new al(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:Qi});s.uniforms.tEquirect.value=n;const r=new Ai(a,s),o=n.minFilter;return n.minFilter===rs&&(n.minFilter=dn),new hT(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}}function lR(e){let t=new WeakMap,n=new WeakMap,i=null;function a(u,p=!1){return u==null?null:p?r(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===hf||p===pf)if(t.has(u)){const v=t.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const y=new NS(v.height);return y.fromEquirectangularTexture(e,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const p=u.mapping,v=p===hf||p===pf,y=p===vs||p===Rr;if(v||y){let g=n.get(u);const f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new b0(e)),g=v?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const m=u.image;return v&&m&&m.height>0||y&&m&&l(m)?(i===null&&(i=new b0(e)),g=v?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function o(u,p){return p===hf?u.mapping=vs:p===pf&&(u.mapping=Rr),u}function l(u){let p=0;const v=6;for(let y=0;y<v;y++)u[y]!==void 0&&p++;return p===v}function c(u){const p=u.target;p.removeEventListener("dispose",c);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function d(u){const p=u.target;p.removeEventListener("dispose",d);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function h(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:h}}function cR(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Nh("WebGLRenderer: "+i+" extension not supported."),a}}}function uR(e,t,n,i){const a={},s=new WeakMap;function r(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",r),delete a[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(h,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,n.memory.geometries++),u}function l(h){const u=h.attributes;for(const p in u)t.update(u[p],e.ARRAY_BUFFER)}function c(h){const u=[],p=h.index,v=h.attributes.position;let y=0;if(v===void 0)return;if(p!==null){const m=p.array;y=p.version;for(let _=0,M=m.length;_<M;_+=3){const C=m[_+0],b=m[_+1],R=m[_+2];u.push(C,b,b,R,R,C)}}else{const m=v.array;y=v.version;for(let _=0,M=m.length/3-1;_<M;_+=3){const C=_+0,b=_+1,R=_+2;u.push(C,b,b,R,R,C)}}const g=new(v.count>=65535?MS:SS)(u,1);g.version=y;const f=s.get(h);f&&t.remove(f),s.set(h,g)}function d(h){const u=s.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function fR(e,t,n){let i;function a(h){i=h}let s,r;function o(h){s=h.type,r=h.bytesPerElement}function l(h,u){e.drawElements(i,u,s,h*r),n.update(u,i,1)}function c(h,u,p){p!==0&&(e.drawElementsInstanced(i,u,s,h*r,p),n.update(u,i,p))}function d(h,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,h,0,p);let y=0;for(let g=0;g<p;g++)y+=u[g];n.update(y,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function dR(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:ee("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function hR(e,t,n){const i=new WeakMap,a=new Fe;function s(r,o,l){const c=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==h){let A=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],m=o.morphAttributes.color||[];let _=0;p===!0&&(_=1),v===!0&&(_=2),y===!0&&(_=3);let M=o.attributes.position.count*_,C=1;M>t.maxTextureSize&&(C=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const b=new Float32Array(M*C*4*h),R=new _S(b,M,C,h);R.type=xi,R.needsUpdate=!0;const x=_*4;for(let D=0;D<h;D++){const w=g[D],F=f[D],Y=m[D],j=M*C*4*D;for(let I=0;I<w.count;I++){const U=I*x;p===!0&&(a.fromBufferAttribute(w,I),b[j+U+0]=a.x,b[j+U+1]=a.y,b[j+U+2]=a.z,b[j+U+3]=0),v===!0&&(a.fromBufferAttribute(F,I),b[j+U+4]=a.x,b[j+U+5]=a.y,b[j+U+6]=a.z,b[j+U+7]=0),y===!0&&(a.fromBufferAttribute(Y,I),b[j+U+8]=a.x,b[j+U+9]=a.y,b[j+U+10]=a.z,b[j+U+11]=Y.itemSize===4?a.w:1)}}u={count:h,texture:R,size:new se(M,C)},i.set(o,u),o.addEventListener("dispose",A)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];const v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function pR(e,t,n,i,a){let s=new WeakMap;function r(c){const d=a.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==d&&(t.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return u}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:r,dispose:o}}const mR={[eS]:"LINEAR_TONE_MAPPING",[nS]:"REINHARD_TONE_MAPPING",[iS]:"CINEON_TONE_MAPPING",[aS]:"ACES_FILMIC_TONE_MAPPING",[rS]:"AGX_TONE_MAPPING",[oS]:"NEUTRAL_TONE_MAPPING",[sS]:"CUSTOM_TONE_MAPPING"};function gR(e,t,n,i,a){const s=new Ei(t,n,{type:e,depthBuffer:i,stencilBuffer:a,depthTexture:i?new Cr(t,n):void 0}),r=new Ei(t,n,{type:aa,depthBuffer:!1,stencilBuffer:!1}),o=new Hn;o.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new tn([0,2,0,0,2,0],2));const l=new uT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ai(o,l),d=new wS(-1,1,1,-1,0,1);let h=null,u=null,p=!1,v,y=null,g=[],f=!1;this.setSize=function(m,_){s.setSize(m,_),r.setSize(m,_);for(let M=0;M<g.length;M++){const C=g[M];C.setSize&&C.setSize(m,_)}},this.setEffects=function(m){g=m,f=g.length>0&&g[0].isRenderPass===!0;const _=s.width,M=s.height;for(let C=0;C<g.length;C++){const b=g[C];b.setSize&&b.setSize(_,M)}},this.begin=function(m,_){if(p||m.toneMapping===yi&&g.length===0)return!1;if(y=_,_!==null){const M=_.width,C=_.height;(s.width!==M||s.height!==C)&&this.setSize(M,C)}return f===!1&&m.setRenderTarget(s),v=m.toneMapping,m.toneMapping=yi,!0},this.hasRenderPass=function(){return f},this.end=function(m,_){m.toneMapping=v,p=!0;let M=s,C=r;for(let b=0;b<g.length;b++){const R=g[b];if(R.enabled!==!1&&(R.render(m,C,M,_),R.needsSwap!==!1)){const x=M;M=C,C=x}}if(h!==m.outputColorSpace||u!==m.toneMapping){h=m.outputColorSpace,u=m.toneMapping,l.defines={},Kt.getTransfer(h)===le&&(l.defines.SRGB_TRANSFER="");const b=mR[u];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,m.setRenderTarget(y),m.render(c,d),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),r.dispose(),o.dispose(),l.dispose()}}const LS=new gn,Oh=new Cr(1,1),OS=new _S,PS=new Fb,IS=new TS,C0=[],w0=[],D0=new Float32Array(16),U0=new Float32Array(9),N0=new Float32Array(4);function zr(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let s=C0[a];if(s===void 0&&(s=new Float32Array(a),C0[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function je(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ze(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Au(e,t){let n=w0[t];n===void 0&&(n=new Int32Array(t),w0[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function _R(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function vR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2fv(this.addr,t),Ze(n,t)}}function xR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(je(n,t))return;e.uniform3fv(this.addr,t),Ze(n,t)}}function SR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4fv(this.addr,t),Ze(n,t)}}function MR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ze(n,t)}else{if(je(n,i))return;N0.set(i),e.uniformMatrix2fv(this.addr,!1,N0),Ze(n,i)}}function yR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ze(n,t)}else{if(je(n,i))return;U0.set(i),e.uniformMatrix3fv(this.addr,!1,U0),Ze(n,i)}}function ER(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ze(n,t)}else{if(je(n,i))return;D0.set(i),e.uniformMatrix4fv(this.addr,!1,D0),Ze(n,i)}}function bR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function TR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2iv(this.addr,t),Ze(n,t)}}function AR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3iv(this.addr,t),Ze(n,t)}}function RR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4iv(this.addr,t),Ze(n,t)}}function CR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function wR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2uiv(this.addr,t),Ze(n,t)}}function DR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3uiv(this.addr,t),Ze(n,t)}}function UR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4uiv(this.addr,t),Ze(n,t)}}function NR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(Oh.compareFunction=n.isReversedDepthBuffer()?Zp:jp,s=Oh):s=LS,n.setTexture2D(t||s,a)}function LR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||PS,a)}function OR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||IS,a)}function PR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||OS,a)}function IR(e){switch(e){case 5126:return _R;case 35664:return vR;case 35665:return xR;case 35666:return SR;case 35674:return MR;case 35675:return yR;case 35676:return ER;case 5124:case 35670:return bR;case 35667:case 35671:return TR;case 35668:case 35672:return AR;case 35669:case 35673:return RR;case 5125:return CR;case 36294:return wR;case 36295:return DR;case 36296:return UR;case 35678:case 36198:case 36298:case 36306:case 35682:return NR;case 35679:case 36299:case 36307:return LR;case 35680:case 36300:case 36308:case 36293:return OR;case 36289:case 36303:case 36311:case 36292:return PR}}function BR(e,t){e.uniform1fv(this.addr,t)}function FR(e,t){const n=zr(t,this.size,2);e.uniform2fv(this.addr,n)}function zR(e,t){const n=zr(t,this.size,3);e.uniform3fv(this.addr,n)}function GR(e,t){const n=zr(t,this.size,4);e.uniform4fv(this.addr,n)}function HR(e,t){const n=zr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function VR(e,t){const n=zr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function kR(e,t){const n=zr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function XR(e,t){e.uniform1iv(this.addr,t)}function WR(e,t){e.uniform2iv(this.addr,t)}function qR(e,t){e.uniform3iv(this.addr,t)}function YR(e,t){e.uniform4iv(this.addr,t)}function jR(e,t){e.uniform1uiv(this.addr,t)}function ZR(e,t){e.uniform2uiv(this.addr,t)}function KR(e,t){e.uniform3uiv(this.addr,t)}function QR(e,t){e.uniform4uiv(this.addr,t)}function JR(e,t,n){const i=this.cache,a=t.length,s=Au(n,a);je(i,s)||(e.uniform1iv(this.addr,s),Ze(i,s));let r;this.type===e.SAMPLER_2D_SHADOW?r=Oh:r=LS;for(let o=0;o!==a;++o)n.setTexture2D(t[o]||r,s[o])}function $R(e,t,n){const i=this.cache,a=t.length,s=Au(n,a);je(i,s)||(e.uniform1iv(this.addr,s),Ze(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||PS,s[r])}function t3(e,t,n){const i=this.cache,a=t.length,s=Au(n,a);je(i,s)||(e.uniform1iv(this.addr,s),Ze(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||IS,s[r])}function e3(e,t,n){const i=this.cache,a=t.length,s=Au(n,a);je(i,s)||(e.uniform1iv(this.addr,s),Ze(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||OS,s[r])}function n3(e){switch(e){case 5126:return BR;case 35664:return FR;case 35665:return zR;case 35666:return GR;case 35674:return HR;case 35675:return VR;case 35676:return kR;case 5124:case 35670:return XR;case 35667:case 35671:return WR;case 35668:case 35672:return qR;case 35669:case 35673:return YR;case 5125:return jR;case 36294:return ZR;case 36295:return KR;case 36296:return QR;case 35678:case 36198:case 36298:case 36306:case 35682:return JR;case 35679:case 36299:case 36307:return $R;case 35680:case 36300:case 36308:case 36293:return t3;case 36289:case 36303:case 36311:case 36292:return e3}}class i3{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=IR(n.type)}}class a3{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=n3(n.type)}}class s3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(t,n[o.id],i)}}}const Wf=/(\w+)(\])?(\[|\.)?/g;function L0(e,t){e.seq.push(t),e.map[t.id]=t}function r3(e,t,n){const i=e.name,a=i.length;for(Wf.lastIndex=0;;){const s=Wf.exec(i),r=Wf.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){L0(n,c===void 0?new i3(o,e,t):new a3(o,e,t));break}else{let h=n.map[o];h===void 0&&(h=new s3(o),L0(n,h)),n=h}}}class _c{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);r3(o,l,this)}const a=[],s=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(t,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,s=t.length;a!==s;++a){const r=t[a];r.id in n&&i.push(r)}return i}}function O0(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const o3=37297;let l3=0;function c3(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}const P0=new Pt;function u3(e){Kt._getMatrix(P0,Kt.workingColorSpace,e);const t=`mat3( ${P0.elements.map(n=>n.toFixed(4))} )`;switch(Kt.getTransfer(e)){case Qc:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return wt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function I0(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+c3(e.getShaderSource(t),o)}else return s}function f3(e,t){const n=u3(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const d3={[eS]:"Linear",[nS]:"Reinhard",[iS]:"Cineon",[aS]:"ACESFilmic",[rS]:"AgX",[oS]:"Neutral",[sS]:"Custom"};function h3(e,t){const n=d3[t];return n===void 0?(wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Yl=new z;function p3(){Kt.getLuminanceCoefficients(Yl);const e=Yl.x.toFixed(4),t=Yl.y.toFixed(4),n=Yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m3(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function g3(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function _3(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=e.getActiveAttrib(t,a),r=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function lo(e){return e!==""}function B0(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function F0(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const v3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(e){return e.replace(v3,S3)}const x3=new Map;function S3(e,t){let n=kt[t];if(n===void 0){const i=x3.get(t);if(i!==void 0)n=kt[i],wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ph(n)}const M3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function z0(e){return e.replace(M3,y3)}function y3(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function G0(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}const E3={[dc]:"SHADOWMAP_TYPE_PCF",[oo]:"SHADOWMAP_TYPE_VSM"};function b3(e){return E3[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const T3={[vs]:"ENVMAP_TYPE_CUBE",[Rr]:"ENVMAP_TYPE_CUBE",[yu]:"ENVMAP_TYPE_CUBE_UV"};function A3(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":T3[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const R3={[Rr]:"ENVMAP_MODE_REFRACTION"};function C3(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":R3[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const w3={[tS]:"ENVMAP_BLENDING_MULTIPLY",[_b]:"ENVMAP_BLENDING_MIX",[vb]:"ENVMAP_BLENDING_ADD"};function D3(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":w3[e.combine]||"ENVMAP_BLENDING_NONE"}function U3(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function N3(e,t,n,i){const a=e.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=b3(n),c=A3(n),d=C3(n),h=D3(n),u=U3(n),p=m3(n),v=g3(s),y=a.createProgram();let g,f,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(lo).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(lo).join(`
`),f.length>0&&(f+=`
`)):(g=[G0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),f=[G0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yi?"#define TONE_MAPPING":"",n.toneMapping!==yi?kt.tonemapping_pars_fragment:"",n.toneMapping!==yi?h3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,f3("linearToOutputTexel",n.outputColorSpace),p3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(lo).join(`
`)),r=Ph(r),r=B0(r,n),r=F0(r,n),o=Ph(o),o=B0(o,n),o=F0(o,n),r=z0(r),o=z0(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===Zg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Zg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=m+g+r,M=m+f+o,C=O0(a,a.VERTEX_SHADER,_),b=O0(a,a.FRAGMENT_SHADER,M);a.attachShader(y,C),a.attachShader(y,b),n.index0AttributeName!==void 0?a.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function R(w){if(e.debug.checkShaderErrors){const F=a.getProgramInfoLog(y)||"",Y=a.getShaderInfoLog(C)||"",j=a.getShaderInfoLog(b)||"",I=F.trim(),U=Y.trim(),O=j.trim();let q=!0,$=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(q=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,y,C,b);else{const at=I0(a,C,"vertex"),gt=I0(a,b,"fragment");ee("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+I+`
`+at+`
`+gt)}else I!==""?wt("WebGLProgram: Program Info Log:",I):(U===""||O==="")&&($=!1);$&&(w.diagnostics={runnable:q,programLog:I,vertexShader:{log:U,prefix:g},fragmentShader:{log:O,prefix:f}})}a.deleteShader(C),a.deleteShader(b),x=new _c(a,y),A=_3(a,y)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=a.getProgramParameter(y,o3)),D},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=l3++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=b,this}let L3=0;class O3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new P3(t),n.set(t,i)),i}}class P3{constructor(t){this.id=L3++,this.code=t,this.usedTimes=0}}function I3(e){return e===xs||e===jc||e===Zc}function B3(e,t,n,i,a,s){const r=new vS,o=new O3,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,A,D,w,F,Y){const j=w.fog,I=F.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?w.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,q=t.get(x.envMap||U,O),$=q&&q.mapping===yu?q.image.height:null,at=p[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&wt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const gt=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,yt=gt!==void 0?gt.length:0;let Lt=0;I.morphAttributes.position!==void 0&&(Lt=1),I.morphAttributes.normal!==void 0&&(Lt=2),I.morphAttributes.color!==void 0&&(Lt=3);let Gt,Dt,tt,ft;if(at){const Bt=mi[at];Gt=Bt.vertexShader,Dt=Bt.fragmentShader}else Gt=x.vertexShader,Dt=x.fragmentShader,o.update(x),tt=o.getVertexShaderID(x),ft=o.getFragmentShaderID(x);const st=e.getRenderTarget(),bt=e.state.buffers.depth.getReversed(),Nt=F.isInstancedMesh===!0,Ct=F.isBatchedMesh===!0,ye=!!x.map,Xt=!!x.matcap,re=!!q,oe=!!x.aoMap,Vt=!!x.lightMap,de=!!x.bumpMap,he=!!x.normalMap,ln=!!x.displacementMap,L=!!x.emissiveMap,De=!!x.metalnessMap,Wt=!!x.roughnessMap,$t=x.anisotropy>0,ut=x.clearcoat>0,ve=x.dispersion>0,T=x.iridescence>0,S=x.sheen>0,G=x.transmission>0,J=$t&&!!x.anisotropyMap,B=ut&&!!x.clearcoatMap,Z=ut&&!!x.clearcoatNormalMap,it=ut&&!!x.clearcoatRoughnessMap,W=T&&!!x.iridescenceMap,K=T&&!!x.iridescenceThicknessMap,ht=S&&!!x.sheenColorMap,xt=S&&!!x.sheenRoughnessMap,lt=!!x.specularMap,rt=!!x.specularColorMap,Ot=!!x.specularIntensityMap,Ht=G&&!!x.transmissionMap,ne=G&&!!x.thicknessMap,N=!!x.gradientMap,ot=!!x.alphaMap,Q=x.alphaTest>0,_t=!!x.alphaHash,ct=!!x.extensions;let nt=yi;x.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(nt=e.toneMapping);const Tt={shaderID:at,shaderType:x.type,shaderName:x.name,vertexShader:Gt,fragmentShader:Dt,defines:x.defines,customVertexShaderID:tt,customFragmentShaderID:ft,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Ct,batchingColor:Ct&&F._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&F.instanceColor!==null,instancingMorph:Nt&&F.morphTexture!==null,outputColorSpace:st===null?e.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Kt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ye,matcap:Xt,envMap:re,envMapMode:re&&q.mapping,envMapCubeUVHeight:$,aoMap:oe,lightMap:Vt,bumpMap:de,normalMap:he,displacementMap:ln,emissiveMap:L,normalMapObjectSpace:he&&x.normalMapType===Mb,normalMapTangentSpace:he&&x.normalMapType===qg,packedNormalMap:he&&x.normalMapType===qg&&I3(x.normalMap.format),metalnessMap:De,roughnessMap:Wt,anisotropy:$t,anisotropyMap:J,clearcoat:ut,clearcoatMap:B,clearcoatNormalMap:Z,clearcoatRoughnessMap:it,dispersion:ve,iridescence:T,iridescenceMap:W,iridescenceThicknessMap:K,sheen:S,sheenColorMap:ht,sheenRoughnessMap:xt,specularMap:lt,specularColorMap:rt,specularIntensityMap:Ot,transmission:G,transmissionMap:Ht,thicknessMap:ne,gradientMap:N,opaque:x.transparent===!1&&x.blending===hr&&x.alphaToCoverage===!1,alphaMap:ot,alphaTest:Q,alphaHash:_t,combine:x.combine,mapUv:ye&&v(x.map.channel),aoMapUv:oe&&v(x.aoMap.channel),lightMapUv:Vt&&v(x.lightMap.channel),bumpMapUv:de&&v(x.bumpMap.channel),normalMapUv:he&&v(x.normalMap.channel),displacementMapUv:ln&&v(x.displacementMap.channel),emissiveMapUv:L&&v(x.emissiveMap.channel),metalnessMapUv:De&&v(x.metalnessMap.channel),roughnessMapUv:Wt&&v(x.roughnessMap.channel),anisotropyMapUv:J&&v(x.anisotropyMap.channel),clearcoatMapUv:B&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:Z&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:K&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:xt&&v(x.sheenRoughnessMap.channel),specularMapUv:lt&&v(x.specularMap.channel),specularColorMapUv:rt&&v(x.specularColorMap.channel),specularIntensityMapUv:Ot&&v(x.specularIntensityMap.channel),transmissionMapUv:Ht&&v(x.transmissionMap.channel),thicknessMapUv:ne&&v(x.thicknessMap.channel),alphaMapUv:ot&&v(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(he||$t),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!I.attributes.uv&&(ye||ot),fog:!!j,useFog:x.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&he===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:bt,skinning:F.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Lt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:nt,decodeVideoTexture:ye&&x.map.isVideoTexture===!0&&Kt.getTransfer(x.map.colorSpace)===le,decodeVideoTextureEmissive:L&&x.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(x.emissiveMap.colorSpace)===le,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ki,flipSided:x.side===bn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ct&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&x.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Tt.vertexUv1s=l.has(1),Tt.vertexUv2s=l.has(2),Tt.vertexUv3s=l.has(3),l.clear(),Tt}function g(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)A.push(D),A.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(f(A,x),m(A,x),A.push(e.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function f(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function m(x,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),x.push(r.mask)}function _(x){const A=p[x.type];let D;if(A){const w=mi[A];D=oT.clone(w.uniforms)}else D=x.uniforms;return D}function M(x,A){let D=d.get(A);return D!==void 0?++D.usedTimes:(D=new N3(e,A,x,a),c.push(D),d.set(A,D)),D}function C(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:_,acquireProgram:M,releaseProgram:C,releaseShaderCache:b,programs:c,dispose:R}}function F3(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function z3(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function H0(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function V0(){const e=[];let t=0;const n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,v,y,g,f){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:p,material:v,materialVariant:r(u),groupOrder:y,renderOrder:u.renderOrder,z:g,group:f},e[t]=m):(m.id=u.id,m.object=u,m.geometry=p,m.material=v,m.materialVariant=r(u),m.groupOrder=y,m.renderOrder=u.renderOrder,m.z=g,m.group=f),t++,m}function l(u,p,v,y,g,f){const m=o(u,p,v,y,g,f);v.transmission>0?i.push(m):v.transparent===!0?a.push(m):n.push(m)}function c(u,p,v,y,g,f){const m=o(u,p,v,y,g,f);v.transmission>0?i.unshift(m):v.transparent===!0?a.unshift(m):n.unshift(m)}function d(u,p){n.length>1&&n.sort(u||z3),i.length>1&&i.sort(p||H0),a.length>1&&a.sort(p||H0)}function h(){for(let u=t,p=e.length;u<p;u++){const v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:l,unshift:c,finish:h,sort:d}}function G3(){let e=new WeakMap;function t(i,a){const s=e.get(i);let r;return s===void 0?(r=new V0,e.set(i,[r])):a>=s.length?(r=new V0,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function H3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new z,color:new fe};break;case"SpotLight":n={position:new z,direction:new z,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new fe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":n={color:new fe,position:new z,halfWidth:new z,halfHeight:new z};break}return e[t.id]=n,n}}}function V3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let k3=0;function X3(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function W3(e){const t=new H3,n=V3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const a=new z,s=new We,r=new We;function o(c){let d=0,h=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,v=0,y=0,g=0,f=0,m=0,_=0,M=0,C=0,b=0,R=0;c.sort(X3);for(let A=0,D=c.length;A<D;A++){const w=c[A],F=w.color,Y=w.intensity,j=w.distance;let I=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===xs?I=w.shadow.map.texture:I=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)d+=F.r*Y,h+=F.g*Y,u+=F.b*Y;else if(w.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(w.sh.coefficients[U],Y);R++}else if(w.isDirectionalLight){const U=t.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const O=w.shadow,q=n.get(w);q.shadowIntensity=O.intensity,q.shadowBias=O.bias,q.shadowNormalBias=O.normalBias,q.shadowRadius=O.radius,q.shadowMapSize=O.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=I,i.directionalShadowMatrix[p]=w.shadow.matrix,m++}i.directional[p]=U,p++}else if(w.isSpotLight){const U=t.get(w);U.position.setFromMatrixPosition(w.matrixWorld),U.color.copy(F).multiplyScalar(Y),U.distance=j,U.coneCos=Math.cos(w.angle),U.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),U.decay=w.decay,i.spot[y]=U;const O=w.shadow;if(w.map&&(i.spotLightMap[C]=w.map,C++,O.updateMatrices(w),w.castShadow&&b++),i.spotLightMatrix[y]=O.matrix,w.castShadow){const q=n.get(w);q.shadowIntensity=O.intensity,q.shadowBias=O.bias,q.shadowNormalBias=O.normalBias,q.shadowRadius=O.radius,q.shadowMapSize=O.mapSize,i.spotShadow[y]=q,i.spotShadowMap[y]=I,M++}y++}else if(w.isRectAreaLight){const U=t.get(w);U.color.copy(F).multiplyScalar(Y),U.halfWidth.set(w.width*.5,0,0),U.halfHeight.set(0,w.height*.5,0),i.rectArea[g]=U,g++}else if(w.isPointLight){const U=t.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),U.distance=w.distance,U.decay=w.decay,w.castShadow){const O=w.shadow,q=n.get(w);q.shadowIntensity=O.intensity,q.shadowBias=O.bias,q.shadowNormalBias=O.normalBias,q.shadowRadius=O.radius,q.shadowMapSize=O.mapSize,q.shadowCameraNear=O.camera.near,q.shadowCameraFar=O.camera.far,i.pointShadow[v]=q,i.pointShadowMap[v]=I,i.pointShadowMatrix[v]=w.shadow.matrix,_++}i.point[v]=U,v++}else if(w.isHemisphereLight){const U=t.get(w);U.skyColor.copy(w.color).multiplyScalar(Y),U.groundColor.copy(w.groundColor).multiplyScalar(Y),i.hemi[f]=U,f++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;const x=i.hash;(x.directionalLength!==p||x.pointLength!==v||x.spotLength!==y||x.rectAreaLength!==g||x.hemiLength!==f||x.numDirectionalShadows!==m||x.numPointShadows!==_||x.numSpotShadows!==M||x.numSpotMaps!==C||x.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=g,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=R,x.directionalLength=p,x.pointLength=v,x.spotLength=y,x.rectAreaLength=g,x.hemiLength=f,x.numDirectionalShadows=m,x.numPointShadows=_,x.numSpotShadows=M,x.numSpotMaps=C,x.numLightProbes=R,i.version=k3++)}function l(c,d){let h=0,u=0,p=0,v=0,y=0;const g=d.matrixWorldInverse;for(let f=0,m=c.length;f<m;f++){const _=c[f];if(_.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(g),h++}else if(_.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),r.identity(),s.copy(_.matrixWorld),s.premultiply(g),r.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),v++}else if(_.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(g),y++}}}return{setup:o,setupView:l,state:i}}function k0(e){const t=new W3(e),n=[],i=[],a=[];function s(u){h.camera=u,n.length=0,i.length=0,a.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){t.setup(n)}function d(u){t.setupView(n,u)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function q3(e){let t=new WeakMap;function n(a,s=0){const r=t.get(a);let o;return r===void 0?(o=new k0(e),t.set(a,[o])):s>=r.length?(o=new k0(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const Y3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j3=`uniform sampler2D shadow_pass;
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
}`,Z3=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],K3=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],X0=new We,to=new z,qf=new z;function Q3(e,t,n){let i=new ES;const a=new se,s=new se,r=new Fe,o=new fT,l=new dT,c={},d=n.maxTextureSize,h={[ka]:bn,[bn]:ka,[ki]:ki},u=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Y3,fragmentShader:j3}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new Hn;v.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ai(v,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dc;let f=this.type;this.render=function(b,R,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===JE&&(wt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=dc);const A=e.getRenderTarget(),D=e.getActiveCubeFace(),w=e.getActiveMipmapLevel(),F=e.state;F.setBlending(Qi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const Y=f!==this.type;Y&&R.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(I=>I.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,I=b.length;j<I;j++){const U=b[j],O=U.shadow;if(O===void 0){wt("WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);const q=O.getFrameExtents();a.multiply(q),s.copy(O.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(s.x=Math.floor(d/q.x),a.x=s.x*q.x,O.mapSize.x=s.x),a.y>d&&(s.y=Math.floor(d/q.y),a.y=s.y*q.y,O.mapSize.y=s.y));const $=e.state.buffers.depth.getReversed();if(O.camera._reversedDepth=$,O.map===null||Y===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===oo){if(U.isPointLight){wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Ei(a.x,a.y,{format:xs,type:aa,minFilter:dn,magFilter:dn,generateMipmaps:!1}),O.map.texture.name=U.name+".shadowMap",O.map.depthTexture=new Cr(a.x,a.y,xi),O.map.depthTexture.name=U.name+".shadowMapDepth",O.map.depthTexture.format=sa,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=rn,O.map.depthTexture.magFilter=rn}else U.isPointLight?(O.map=new NS(a.x),O.map.depthTexture=new aT(a.x,Ti)):(O.map=new Ei(a.x,a.y),O.map.depthTexture=new Cr(a.x,a.y,Ti)),O.map.depthTexture.name=U.name+".shadowMap",O.map.depthTexture.format=sa,this.type===dc?(O.map.depthTexture.compareFunction=$?Zp:jp,O.map.depthTexture.minFilter=dn,O.map.depthTexture.magFilter=dn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=rn,O.map.depthTexture.magFilter=rn);O.camera.updateProjectionMatrix()}const at=O.map.isWebGLCubeRenderTarget?6:1;for(let gt=0;gt<at;gt++){if(O.map.isWebGLCubeRenderTarget)e.setRenderTarget(O.map,gt),e.clear();else{gt===0&&(e.setRenderTarget(O.map),e.clear());const yt=O.getViewport(gt);r.set(s.x*yt.x,s.y*yt.y,s.x*yt.z,s.y*yt.w),F.viewport(r)}if(U.isPointLight){const yt=O.camera,Lt=O.matrix,Gt=U.distance||yt.far;Gt!==yt.far&&(yt.far=Gt,yt.updateProjectionMatrix()),to.setFromMatrixPosition(U.matrixWorld),yt.position.copy(to),qf.copy(yt.position),qf.add(Z3[gt]),yt.up.copy(K3[gt]),yt.lookAt(qf),yt.updateMatrixWorld(),Lt.makeTranslation(-to.x,-to.y,-to.z),X0.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),O._frustum.setFromProjectionMatrix(X0,yt.coordinateSystem,yt.reversedDepth)}else O.updateMatrices(U);i=O.getFrustum(),M(R,x,O.camera,U,this.type)}O.isPointLightShadow!==!0&&this.type===oo&&m(O,x),O.needsUpdate=!1}f=this.type,g.needsUpdate=!1,e.setRenderTarget(A,D,w)};function m(b,R){const x=t.update(y);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ei(a.x,a.y,{format:xs,type:aa})),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,e.setRenderTarget(b.mapPass),e.clear(),e.renderBufferDirect(R,null,x,u,y,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,e.setRenderTarget(b.map),e.clear(),e.renderBufferDirect(R,null,x,p,y,null)}function _(b,R,x,A){let D=null;const w=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)D=w;else if(D=x.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=D.uuid,Y=R.uuid;let j=c[F];j===void 0&&(j={},c[F]=j);let I=j[Y];I===void 0&&(I=D.clone(),j[Y]=I,R.addEventListener("dispose",C)),D=I}if(D.visible=R.visible,D.wireframe=R.wireframe,A===oo?D.side=R.shadowSide!==null?R.shadowSide:R.side:D.side=R.shadowSide!==null?R.shadowSide:h[R.side],D.alphaMap=R.alphaMap,D.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,D.map=R.map,D.clipShadows=R.clipShadows,D.clippingPlanes=R.clippingPlanes,D.clipIntersection=R.clipIntersection,D.displacementMap=R.displacementMap,D.displacementScale=R.displacementScale,D.displacementBias=R.displacementBias,D.wireframeLinewidth=R.wireframeLinewidth,D.linewidth=R.linewidth,x.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const F=e.properties.get(D);F.light=x}return D}function M(b,R,x,A,D){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===oo)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const Y=t.update(b),j=b.material;if(Array.isArray(j)){const I=Y.groups;for(let U=0,O=I.length;U<O;U++){const q=I[U],$=j[q.materialIndex];if($&&$.visible){const at=_(b,$,A,D);b.onBeforeShadow(e,b,R,x,Y,at,q),e.renderBufferDirect(x,null,Y,at,b,q),b.onAfterShadow(e,b,R,x,Y,at,q)}}}else if(j.visible){const I=_(b,j,A,D);b.onBeforeShadow(e,b,R,x,Y,I,null),e.renderBufferDirect(x,null,Y,I,b,null),b.onAfterShadow(e,b,R,x,Y,I,null)}}const F=b.children;for(let Y=0,j=F.length;Y<j;Y++)M(F[Y],R,x,A,D)}function C(b){b.target.removeEventListener("dispose",C);for(const x in c){const A=c[x],D=b.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}function J3(e,t){function n(){let N=!1;const ot=new Fe;let Q=null;const _t=new Fe(0,0,0,0);return{setMask:function(ct){Q!==ct&&!N&&(e.colorMask(ct,ct,ct,ct),Q=ct)},setLocked:function(ct){N=ct},setClear:function(ct,nt,Tt,Bt,Oe){Oe===!0&&(ct*=Bt,nt*=Bt,Tt*=Bt),ot.set(ct,nt,Tt,Bt),_t.equals(ot)===!1&&(e.clearColor(ct,nt,Tt,Bt),_t.copy(ot))},reset:function(){N=!1,Q=null,_t.set(-1,0,0,0)}}}function i(){let N=!1,ot=!1,Q=null,_t=null,ct=null;return{setReversed:function(nt){if(ot!==nt){const Tt=t.get("EXT_clip_control");nt?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),ot=nt;const Bt=ct;ct=null,this.setClear(Bt)}},getReversed:function(){return ot},setTest:function(nt){nt?st(e.DEPTH_TEST):bt(e.DEPTH_TEST)},setMask:function(nt){Q!==nt&&!N&&(e.depthMask(nt),Q=nt)},setFunc:function(nt){if(ot&&(nt=Ub[nt]),_t!==nt){switch(nt){case Yd:e.depthFunc(e.NEVER);break;case jd:e.depthFunc(e.ALWAYS);break;case Zd:e.depthFunc(e.LESS);break;case Ar:e.depthFunc(e.LEQUAL);break;case Kd:e.depthFunc(e.EQUAL);break;case Qd:e.depthFunc(e.GEQUAL);break;case Jd:e.depthFunc(e.GREATER);break;case $d:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}_t=nt}},setLocked:function(nt){N=nt},setClear:function(nt){ct!==nt&&(ct=nt,ot&&(nt=1-nt),e.clearDepth(nt))},reset:function(){N=!1,Q=null,_t=null,ct=null,ot=!1}}}function a(){let N=!1,ot=null,Q=null,_t=null,ct=null,nt=null,Tt=null,Bt=null,Oe=null;return{setTest:function(pe){N||(pe?st(e.STENCIL_TEST):bt(e.STENCIL_TEST))},setMask:function(pe){ot!==pe&&!N&&(e.stencilMask(pe),ot=pe)},setFunc:function(pe,Di,fi){(Q!==pe||_t!==Di||ct!==fi)&&(e.stencilFunc(pe,Di,fi),Q=pe,_t=Di,ct=fi)},setOp:function(pe,Di,fi){(nt!==pe||Tt!==Di||Bt!==fi)&&(e.stencilOp(pe,Di,fi),nt=pe,Tt=Di,Bt=fi)},setLocked:function(pe){N=pe},setClear:function(pe){Oe!==pe&&(e.clearStencil(pe),Oe=pe)},reset:function(){N=!1,ot=null,Q=null,_t=null,ct=null,nt=null,Tt=null,Bt=null,Oe=null}}}const s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap;let d={},h={},u={},p=new WeakMap,v=[],y=null,g=!1,f=null,m=null,_=null,M=null,C=null,b=null,R=null,x=new fe(0,0,0),A=0,D=!1,w=null,F=null,Y=null,j=null,I=null;const U=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,q=0;const $=e.getParameter(e.VERSION);$.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec($)[1]),O=q>=1):$.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),O=q>=2);let at=null,gt={};const yt=e.getParameter(e.SCISSOR_BOX),Lt=e.getParameter(e.VIEWPORT),Gt=new Fe().fromArray(yt),Dt=new Fe().fromArray(Lt);function tt(N,ot,Q,_t){const ct=new Uint8Array(4),nt=e.createTexture();e.bindTexture(N,nt),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Tt=0;Tt<Q;Tt++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(ot,0,e.RGBA,1,1,_t,0,e.RGBA,e.UNSIGNED_BYTE,ct):e.texImage2D(ot+Tt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ct);return nt}const ft={};ft[e.TEXTURE_2D]=tt(e.TEXTURE_2D,e.TEXTURE_2D,1),ft[e.TEXTURE_CUBE_MAP]=tt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[e.TEXTURE_2D_ARRAY]=tt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ft[e.TEXTURE_3D]=tt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),st(e.DEPTH_TEST),r.setFunc(Ar),de(!1),he(Vg),st(e.CULL_FACE),oe(Qi);function st(N){d[N]!==!0&&(e.enable(N),d[N]=!0)}function bt(N){d[N]!==!1&&(e.disable(N),d[N]=!1)}function Nt(N,ot){return u[N]!==ot?(e.bindFramebuffer(N,ot),u[N]=ot,N===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=ot),N===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=ot),!0):!1}function Ct(N,ot){let Q=v,_t=!1;if(N){Q=p.get(ot),Q===void 0&&(Q=[],p.set(ot,Q));const ct=N.textures;if(Q.length!==ct.length||Q[0]!==e.COLOR_ATTACHMENT0){for(let nt=0,Tt=ct.length;nt<Tt;nt++)Q[nt]=e.COLOR_ATTACHMENT0+nt;Q.length=ct.length,_t=!0}}else Q[0]!==e.BACK&&(Q[0]=e.BACK,_t=!0);_t&&e.drawBuffers(Q)}function ye(N){return y!==N?(e.useProgram(N),y=N,!0):!1}const Xt={[as]:e.FUNC_ADD,[tb]:e.FUNC_SUBTRACT,[eb]:e.FUNC_REVERSE_SUBTRACT};Xt[nb]=e.MIN,Xt[ib]=e.MAX;const re={[ab]:e.ZERO,[sb]:e.ONE,[rb]:e.SRC_COLOR,[Wd]:e.SRC_ALPHA,[db]:e.SRC_ALPHA_SATURATE,[ub]:e.DST_COLOR,[lb]:e.DST_ALPHA,[ob]:e.ONE_MINUS_SRC_COLOR,[qd]:e.ONE_MINUS_SRC_ALPHA,[fb]:e.ONE_MINUS_DST_COLOR,[cb]:e.ONE_MINUS_DST_ALPHA,[hb]:e.CONSTANT_COLOR,[pb]:e.ONE_MINUS_CONSTANT_COLOR,[mb]:e.CONSTANT_ALPHA,[gb]:e.ONE_MINUS_CONSTANT_ALPHA};function oe(N,ot,Q,_t,ct,nt,Tt,Bt,Oe,pe){if(N===Qi){g===!0&&(bt(e.BLEND),g=!1);return}if(g===!1&&(st(e.BLEND),g=!0),N!==$E){if(N!==f||pe!==D){if((m!==as||C!==as)&&(e.blendEquation(e.FUNC_ADD),m=as,C=as),pe)switch(N){case hr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case kg:e.blendFunc(e.ONE,e.ONE);break;case Xg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Wg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ee("WebGLState: Invalid blending: ",N);break}else switch(N){case hr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case kg:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Xg:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wg:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",N);break}_=null,M=null,b=null,R=null,x.set(0,0,0),A=0,f=N,D=pe}return}ct=ct||ot,nt=nt||Q,Tt=Tt||_t,(ot!==m||ct!==C)&&(e.blendEquationSeparate(Xt[ot],Xt[ct]),m=ot,C=ct),(Q!==_||_t!==M||nt!==b||Tt!==R)&&(e.blendFuncSeparate(re[Q],re[_t],re[nt],re[Tt]),_=Q,M=_t,b=nt,R=Tt),(Bt.equals(x)===!1||Oe!==A)&&(e.blendColor(Bt.r,Bt.g,Bt.b,Oe),x.copy(Bt),A=Oe),f=N,D=!1}function Vt(N,ot){N.side===ki?bt(e.CULL_FACE):st(e.CULL_FACE);let Q=N.side===bn;ot&&(Q=!Q),de(Q),N.blending===hr&&N.transparent===!1?oe(Qi):oe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);const _t=N.stencilWrite;o.setTest(_t),_t&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),L(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?st(e.SAMPLE_ALPHA_TO_COVERAGE):bt(e.SAMPLE_ALPHA_TO_COVERAGE)}function de(N){w!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),w=N)}function he(N){N!==KE?(st(e.CULL_FACE),N!==F&&(N===Vg?e.cullFace(e.BACK):N===QE?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):bt(e.CULL_FACE),F=N}function ln(N){N!==Y&&(O&&e.lineWidth(N),Y=N)}function L(N,ot,Q){N?(st(e.POLYGON_OFFSET_FILL),(j!==ot||I!==Q)&&(j=ot,I=Q,r.getReversed()&&(ot=-ot),e.polygonOffset(ot,Q))):bt(e.POLYGON_OFFSET_FILL)}function De(N){N?st(e.SCISSOR_TEST):bt(e.SCISSOR_TEST)}function Wt(N){N===void 0&&(N=e.TEXTURE0+U-1),at!==N&&(e.activeTexture(N),at=N)}function $t(N,ot,Q){Q===void 0&&(at===null?Q=e.TEXTURE0+U-1:Q=at);let _t=gt[Q];_t===void 0&&(_t={type:void 0,texture:void 0},gt[Q]=_t),(_t.type!==N||_t.texture!==ot)&&(at!==Q&&(e.activeTexture(Q),at=Q),e.bindTexture(N,ot||ft[N]),_t.type=N,_t.texture=ot)}function ut(){const N=gt[at];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ve(){try{e.compressedTexImage2D(...arguments)}catch(N){ee("WebGLState:",N)}}function T(){try{e.compressedTexImage3D(...arguments)}catch(N){ee("WebGLState:",N)}}function S(){try{e.texSubImage2D(...arguments)}catch(N){ee("WebGLState:",N)}}function G(){try{e.texSubImage3D(...arguments)}catch(N){ee("WebGLState:",N)}}function J(){try{e.compressedTexSubImage2D(...arguments)}catch(N){ee("WebGLState:",N)}}function B(){try{e.compressedTexSubImage3D(...arguments)}catch(N){ee("WebGLState:",N)}}function Z(){try{e.texStorage2D(...arguments)}catch(N){ee("WebGLState:",N)}}function it(){try{e.texStorage3D(...arguments)}catch(N){ee("WebGLState:",N)}}function W(){try{e.texImage2D(...arguments)}catch(N){ee("WebGLState:",N)}}function K(){try{e.texImage3D(...arguments)}catch(N){ee("WebGLState:",N)}}function ht(N){return h[N]!==void 0?h[N]:e.getParameter(N)}function xt(N,ot){h[N]!==ot&&(e.pixelStorei(N,ot),h[N]=ot)}function lt(N){Gt.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),Gt.copy(N))}function rt(N){Dt.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),Dt.copy(N))}function Ot(N,ot){let Q=c.get(ot);Q===void 0&&(Q=new WeakMap,c.set(ot,Q));let _t=Q.get(N);_t===void 0&&(_t=e.getUniformBlockIndex(ot,N.name),Q.set(N,_t))}function Ht(N,ot){const _t=c.get(ot).get(N);l.get(ot)!==_t&&(e.uniformBlockBinding(ot,_t,N.__bindingPointIndex),l.set(ot,_t))}function ne(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),d={},h={},at=null,gt={},u={},p=new WeakMap,v=[],y=null,g=!1,f=null,m=null,_=null,M=null,C=null,b=null,R=null,x=new fe(0,0,0),A=0,D=!1,w=null,F=null,Y=null,j=null,I=null,Gt.set(0,0,e.canvas.width,e.canvas.height),Dt.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:st,disable:bt,bindFramebuffer:Nt,drawBuffers:Ct,useProgram:ye,setBlending:oe,setMaterial:Vt,setFlipSided:de,setCullFace:he,setLineWidth:ln,setPolygonOffset:L,setScissorTest:De,activeTexture:Wt,bindTexture:$t,unbindTexture:ut,compressedTexImage2D:ve,compressedTexImage3D:T,texImage2D:W,texImage3D:K,pixelStorei:xt,getParameter:ht,updateUBOMapping:Ot,uniformBlockBinding:Ht,texStorage2D:Z,texStorage3D:it,texSubImage2D:S,texSubImage3D:G,compressedTexSubImage2D:J,compressedTexSubImage3D:B,scissor:lt,viewport:rt,reset:ne}}function $3(e,t,n,i,a,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,d=new WeakMap,h=new Set;let u;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,S){return v?new OffscreenCanvas(T,S):$c("canvas")}function g(T,S,G){let J=1;const B=ve(T);if((B.width>G||B.height>G)&&(J=G/Math.max(B.width,B.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Z=Math.floor(J*B.width),it=Math.floor(J*B.height);u===void 0&&(u=y(Z,it));const W=S?y(Z,it):u;return W.width=Z,W.height=it,W.getContext("2d").drawImage(T,0,0,Z,it),wt("WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+Z+"x"+it+")."),W}else return"data"in T&&wt("WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),T;return T}function f(T){return T.generateMipmaps}function m(T){e.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function M(T,S,G,J,B,Z=!1){if(T!==null){if(e[T]!==void 0)return e[T];wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let it;J&&(it=t.get("EXT_texture_norm16"),it||wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=S;if(S===e.RED&&(G===e.FLOAT&&(W=e.R32F),G===e.HALF_FLOAT&&(W=e.R16F),G===e.UNSIGNED_BYTE&&(W=e.R8),G===e.UNSIGNED_SHORT&&it&&(W=it.R16_EXT),G===e.SHORT&&it&&(W=it.R16_SNORM_EXT)),S===e.RED_INTEGER&&(G===e.UNSIGNED_BYTE&&(W=e.R8UI),G===e.UNSIGNED_SHORT&&(W=e.R16UI),G===e.UNSIGNED_INT&&(W=e.R32UI),G===e.BYTE&&(W=e.R8I),G===e.SHORT&&(W=e.R16I),G===e.INT&&(W=e.R32I)),S===e.RG&&(G===e.FLOAT&&(W=e.RG32F),G===e.HALF_FLOAT&&(W=e.RG16F),G===e.UNSIGNED_BYTE&&(W=e.RG8),G===e.UNSIGNED_SHORT&&it&&(W=it.RG16_EXT),G===e.SHORT&&it&&(W=it.RG16_SNORM_EXT)),S===e.RG_INTEGER&&(G===e.UNSIGNED_BYTE&&(W=e.RG8UI),G===e.UNSIGNED_SHORT&&(W=e.RG16UI),G===e.UNSIGNED_INT&&(W=e.RG32UI),G===e.BYTE&&(W=e.RG8I),G===e.SHORT&&(W=e.RG16I),G===e.INT&&(W=e.RG32I)),S===e.RGB_INTEGER&&(G===e.UNSIGNED_BYTE&&(W=e.RGB8UI),G===e.UNSIGNED_SHORT&&(W=e.RGB16UI),G===e.UNSIGNED_INT&&(W=e.RGB32UI),G===e.BYTE&&(W=e.RGB8I),G===e.SHORT&&(W=e.RGB16I),G===e.INT&&(W=e.RGB32I)),S===e.RGBA_INTEGER&&(G===e.UNSIGNED_BYTE&&(W=e.RGBA8UI),G===e.UNSIGNED_SHORT&&(W=e.RGBA16UI),G===e.UNSIGNED_INT&&(W=e.RGBA32UI),G===e.BYTE&&(W=e.RGBA8I),G===e.SHORT&&(W=e.RGBA16I),G===e.INT&&(W=e.RGBA32I)),S===e.RGB&&(G===e.UNSIGNED_SHORT&&it&&(W=it.RGB16_EXT),G===e.SHORT&&it&&(W=it.RGB16_SNORM_EXT),G===e.UNSIGNED_INT_5_9_9_9_REV&&(W=e.RGB9_E5),G===e.UNSIGNED_INT_10F_11F_11F_REV&&(W=e.R11F_G11F_B10F)),S===e.RGBA){const K=Z?Qc:Kt.getTransfer(B);G===e.FLOAT&&(W=e.RGBA32F),G===e.HALF_FLOAT&&(W=e.RGBA16F),G===e.UNSIGNED_BYTE&&(W=K===le?e.SRGB8_ALPHA8:e.RGBA8),G===e.UNSIGNED_SHORT&&it&&(W=it.RGBA16_EXT),G===e.SHORT&&it&&(W=it.RGBA16_SNORM_EXT),G===e.UNSIGNED_SHORT_4_4_4_4&&(W=e.RGBA4),G===e.UNSIGNED_SHORT_5_5_5_1&&(W=e.RGB5_A1)}return(W===e.R16F||W===e.R32F||W===e.RG16F||W===e.RG32F||W===e.RGBA16F||W===e.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function C(T,S){let G;return T?S===null||S===Ti||S===Ho?G=e.DEPTH24_STENCIL8:S===xi?G=e.DEPTH32F_STENCIL8:S===Go&&(G=e.DEPTH24_STENCIL8,wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ti||S===Ho?G=e.DEPTH_COMPONENT24:S===xi?G=e.DEPTH_COMPONENT32F:S===Go&&(G=e.DEPTH_COMPONENT16),G}function b(T,S){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==rn&&T.minFilter!==dn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function R(T){const S=T.target;S.removeEventListener("dispose",R),A(S),S.isVideoTexture&&d.delete(S),S.isHTMLTexture&&h.delete(S)}function x(T){const S=T.target;S.removeEventListener("dispose",x),w(S)}function A(T){const S=i.get(T);if(S.__webglInit===void 0)return;const G=T.source,J=p.get(G);if(J){const B=J[S.__cacheKey];B.usedTimes--,B.usedTimes===0&&D(T),Object.keys(J).length===0&&p.delete(G)}i.remove(T)}function D(T){const S=i.get(T);e.deleteTexture(S.__webglTexture);const G=T.source,J=p.get(G);delete J[S.__cacheKey],r.memory.textures--}function w(T){const S=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let B=0;B<S.__webglFramebuffer[J].length;B++)e.deleteFramebuffer(S.__webglFramebuffer[J][B]);else e.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)e.deleteFramebuffer(S.__webglFramebuffer[J]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=T.textures;for(let J=0,B=G.length;J<B;J++){const Z=i.get(G[J]);Z.__webglTexture&&(e.deleteTexture(Z.__webglTexture),r.memory.textures--),i.remove(G[J])}i.remove(T)}let F=0;function Y(){F=0}function j(){return F}function I(T){F=T}function U(){const T=F;return T>=a.maxTextures&&wt("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+a.maxTextures),F+=1,T}function O(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function q(T,S){const G=i.get(T);if(T.isVideoTexture&&$t(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&G.__version!==T.version){const J=T.image;if(J===null)wt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)wt("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(G,T,S);return}}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,G.__webglTexture,e.TEXTURE0+S)}function $(T,S){const G=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){bt(G,T,S);return}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,G.__webglTexture,e.TEXTURE0+S)}function at(T,S){const G=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){bt(G,T,S);return}n.bindTexture(e.TEXTURE_3D,G.__webglTexture,e.TEXTURE0+S)}function gt(T,S){const G=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&G.__version!==T.version){Nt(G,T,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture,e.TEXTURE0+S)}const yt={[th]:e.REPEAT,[Yi]:e.CLAMP_TO_EDGE,[eh]:e.MIRRORED_REPEAT},Lt={[rn]:e.NEAREST,[xb]:e.NEAREST_MIPMAP_NEAREST,[El]:e.NEAREST_MIPMAP_LINEAR,[dn]:e.LINEAR,[mf]:e.LINEAR_MIPMAP_NEAREST,[rs]:e.LINEAR_MIPMAP_LINEAR},Gt={[yb]:e.NEVER,[Rb]:e.ALWAYS,[Eb]:e.LESS,[jp]:e.LEQUAL,[bb]:e.EQUAL,[Zp]:e.GEQUAL,[Tb]:e.GREATER,[Ab]:e.NOTEQUAL};function Dt(T,S){if(S.type===xi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===dn||S.magFilter===mf||S.magFilter===El||S.magFilter===rs||S.minFilter===dn||S.minFilter===mf||S.minFilter===El||S.minFilter===rs)&&wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,yt[S.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,yt[S.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,yt[S.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,Lt[S.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,Lt[S.minFilter]),S.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,Gt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===rn||S.minFilter!==El&&S.minFilter!==rs||S.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function tt(T,S){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",R));const J=S.source;let B=p.get(J);B===void 0&&(B={},p.set(J,B));const Z=O(S);if(Z!==T.__cacheKey){B[Z]===void 0&&(B[Z]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,G=!0),B[Z].usedTimes++;const it=B[T.__cacheKey];it!==void 0&&(B[T.__cacheKey].usedTimes--,it.usedTimes===0&&D(S)),T.__cacheKey=Z,T.__webglTexture=B[Z].texture}return G}function ft(T,S,G){return Math.floor(Math.floor(T/G)/S)}function st(T,S,G,J){const Z=T.updateRanges;if(Z.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,G,J,S.data);else{Z.sort((xt,lt)=>xt.start-lt.start);let it=0;for(let xt=1;xt<Z.length;xt++){const lt=Z[it],rt=Z[xt],Ot=lt.start+lt.count,Ht=ft(rt.start,S.width,4),ne=ft(lt.start,S.width,4);rt.start<=Ot+1&&Ht===ne&&ft(rt.start+rt.count-1,S.width,4)===Ht?lt.count=Math.max(lt.count,rt.start+rt.count-lt.start):(++it,Z[it]=rt)}Z.length=it+1;const W=n.getParameter(e.UNPACK_ROW_LENGTH),K=n.getParameter(e.UNPACK_SKIP_PIXELS),ht=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let xt=0,lt=Z.length;xt<lt;xt++){const rt=Z[xt],Ot=Math.floor(rt.start/4),Ht=Math.ceil(rt.count/4),ne=Ot%S.width,N=Math.floor(Ot/S.width),ot=Ht,Q=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(e.UNPACK_SKIP_ROWS,N),n.texSubImage2D(e.TEXTURE_2D,0,ne,N,ot,Q,G,J,S.data)}T.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,W),n.pixelStorei(e.UNPACK_SKIP_PIXELS,K),n.pixelStorei(e.UNPACK_SKIP_ROWS,ht)}}function bt(T,S,G){let J=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=e.TEXTURE_3D);const B=tt(T,S),Z=S.source;n.bindTexture(J,T.__webglTexture,e.TEXTURE0+G);const it=i.get(Z);if(Z.version!==it.__version||B===!0){if(n.activeTexture(e.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const Q=Kt.getPrimaries(Kt.workingColorSpace),_t=S.colorSpace===Ea?null:Kt.getPrimaries(S.colorSpace),ct=S.colorSpace===Ea||Q===_t?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct)}n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment);let K=g(S.image,!1,a.maxTextureSize);K=ut(S,K);const ht=s.convert(S.format,S.colorSpace),xt=s.convert(S.type);let lt=M(S.internalFormat,ht,xt,S.normalized,S.colorSpace,S.isVideoTexture);Dt(J,S);let rt;const Ot=S.mipmaps,Ht=S.isVideoTexture!==!0,ne=it.__version===void 0||B===!0,N=Z.dataReady,ot=b(S,K);if(S.isDepthTexture)lt=C(S.format===os,S.type),ne&&(Ht?n.texStorage2D(e.TEXTURE_2D,1,lt,K.width,K.height):n.texImage2D(e.TEXTURE_2D,0,lt,K.width,K.height,0,ht,xt,null));else if(S.isDataTexture)if(Ot.length>0){Ht&&ne&&n.texStorage2D(e.TEXTURE_2D,ot,lt,Ot[0].width,Ot[0].height);for(let Q=0,_t=Ot.length;Q<_t;Q++)rt=Ot[Q],Ht?N&&n.texSubImage2D(e.TEXTURE_2D,Q,0,0,rt.width,rt.height,ht,xt,rt.data):n.texImage2D(e.TEXTURE_2D,Q,lt,rt.width,rt.height,0,ht,xt,rt.data);S.generateMipmaps=!1}else Ht?(ne&&n.texStorage2D(e.TEXTURE_2D,ot,lt,K.width,K.height),N&&st(S,K,ht,xt)):n.texImage2D(e.TEXTURE_2D,0,lt,K.width,K.height,0,ht,xt,K.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ht&&ne&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ot,lt,Ot[0].width,Ot[0].height,K.depth);for(let Q=0,_t=Ot.length;Q<_t;Q++)if(rt=Ot[Q],S.format!==ci)if(ht!==null)if(Ht){if(N)if(S.layerUpdates.size>0){const ct=M0(rt.width,rt.height,S.format,S.type);for(const nt of S.layerUpdates){const Tt=rt.data.subarray(nt*ct/rt.data.BYTES_PER_ELEMENT,(nt+1)*ct/rt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,nt,rt.width,rt.height,1,ht,Tt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,rt.width,rt.height,K.depth,ht,rt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Q,lt,rt.width,rt.height,K.depth,0,rt.data,0,0);else wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?N&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,rt.width,rt.height,K.depth,ht,xt,rt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,Q,lt,rt.width,rt.height,K.depth,0,ht,xt,rt.data)}else{Ht&&ne&&n.texStorage2D(e.TEXTURE_2D,ot,lt,Ot[0].width,Ot[0].height);for(let Q=0,_t=Ot.length;Q<_t;Q++)rt=Ot[Q],S.format!==ci?ht!==null?Ht?N&&n.compressedTexSubImage2D(e.TEXTURE_2D,Q,0,0,rt.width,rt.height,ht,rt.data):n.compressedTexImage2D(e.TEXTURE_2D,Q,lt,rt.width,rt.height,0,rt.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?N&&n.texSubImage2D(e.TEXTURE_2D,Q,0,0,rt.width,rt.height,ht,xt,rt.data):n.texImage2D(e.TEXTURE_2D,Q,lt,rt.width,rt.height,0,ht,xt,rt.data)}else if(S.isDataArrayTexture)if(Ht){if(ne&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ot,lt,K.width,K.height,K.depth),N)if(S.layerUpdates.size>0){const Q=M0(K.width,K.height,S.format,S.type);for(const _t of S.layerUpdates){const ct=K.data.subarray(_t*Q/K.data.BYTES_PER_ELEMENT,(_t+1)*Q/K.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,_t,K.width,K.height,1,ht,xt,ct)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ht,xt,K.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,lt,K.width,K.height,K.depth,0,ht,xt,K.data);else if(S.isData3DTexture)Ht?(ne&&n.texStorage3D(e.TEXTURE_3D,ot,lt,K.width,K.height,K.depth),N&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ht,xt,K.data)):n.texImage3D(e.TEXTURE_3D,0,lt,K.width,K.height,K.depth,0,ht,xt,K.data);else if(S.isFramebufferTexture){if(ne)if(Ht)n.texStorage2D(e.TEXTURE_2D,ot,lt,K.width,K.height);else{let Q=K.width,_t=K.height;for(let ct=0;ct<ot;ct++)n.texImage2D(e.TEXTURE_2D,ct,lt,Q,_t,0,ht,xt,null),Q>>=1,_t>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in e){const Q=e.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),K.parentNode!==Q){Q.appendChild(K),h.add(S),Q.onpaint=Bt=>{const Oe=Bt.changedElements;for(const pe of h)Oe.includes(pe.image)&&(pe.needsUpdate=!0)},Q.requestPaint();return}const _t=0,ct=e.RGBA,nt=e.RGBA,Tt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,_t,ct,nt,Tt,K),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(Ht&&ne){const Q=ve(Ot[0]);n.texStorage2D(e.TEXTURE_2D,ot,lt,Q.width,Q.height)}for(let Q=0,_t=Ot.length;Q<_t;Q++)rt=Ot[Q],Ht?N&&n.texSubImage2D(e.TEXTURE_2D,Q,0,0,ht,xt,rt):n.texImage2D(e.TEXTURE_2D,Q,lt,ht,xt,rt);S.generateMipmaps=!1}else if(Ht){if(ne){const Q=ve(K);n.texStorage2D(e.TEXTURE_2D,ot,lt,Q.width,Q.height)}N&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ht,xt,K)}else n.texImage2D(e.TEXTURE_2D,0,lt,ht,xt,K);f(S)&&m(J),it.__version=Z.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Nt(T,S,G){if(S.image.length!==6)return;const J=tt(T,S),B=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+G);const Z=i.get(B);if(B.version!==Z.__version||J===!0){n.activeTexture(e.TEXTURE0+G);const it=Kt.getPrimaries(Kt.workingColorSpace),W=S.colorSpace===Ea?null:Kt.getPrimaries(S.colorSpace),K=S.colorSpace===Ea||it===W?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const ht=S.isCompressedTexture||S.image[0].isCompressedTexture,xt=S.image[0]&&S.image[0].isDataTexture,lt=[];for(let nt=0;nt<6;nt++)!ht&&!xt?lt[nt]=g(S.image[nt],!0,a.maxCubemapSize):lt[nt]=xt?S.image[nt].image:S.image[nt],lt[nt]=ut(S,lt[nt]);const rt=lt[0],Ot=s.convert(S.format,S.colorSpace),Ht=s.convert(S.type),ne=M(S.internalFormat,Ot,Ht,S.normalized,S.colorSpace),N=S.isVideoTexture!==!0,ot=Z.__version===void 0||J===!0,Q=B.dataReady;let _t=b(S,rt);Dt(e.TEXTURE_CUBE_MAP,S);let ct;if(ht){N&&ot&&n.texStorage2D(e.TEXTURE_CUBE_MAP,_t,ne,rt.width,rt.height);for(let nt=0;nt<6;nt++){ct=lt[nt].mipmaps;for(let Tt=0;Tt<ct.length;Tt++){const Bt=ct[Tt];S.format!==ci?Ot!==null?N?Q&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,Bt.width,Bt.height,Ot,Bt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,ne,Bt.width,Bt.height,0,Bt.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,Bt.width,Bt.height,Ot,Ht,Bt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,ne,Bt.width,Bt.height,0,Ot,Ht,Bt.data)}}}else{if(ct=S.mipmaps,N&&ot){ct.length>0&&_t++;const nt=ve(lt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,_t,ne,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(xt){N?Q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,lt[nt].width,lt[nt].height,Ot,Ht,lt[nt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ne,lt[nt].width,lt[nt].height,0,Ot,Ht,lt[nt].data);for(let Tt=0;Tt<ct.length;Tt++){const Oe=ct[Tt].image[nt].image;N?Q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,Oe.width,Oe.height,Ot,Ht,Oe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,ne,Oe.width,Oe.height,0,Ot,Ht,Oe.data)}}else{N?Q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Ot,Ht,lt[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ne,Ot,Ht,lt[nt]);for(let Tt=0;Tt<ct.length;Tt++){const Bt=ct[Tt];N?Q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,Ot,Ht,Bt.image[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,ne,Ot,Ht,Bt.image[nt])}}}f(S)&&m(e.TEXTURE_CUBE_MAP),Z.__version=B.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Ct(T,S,G,J,B,Z){const it=s.convert(G.format,G.colorSpace),W=s.convert(G.type),K=M(G.internalFormat,it,W,G.normalized,G.colorSpace),ht=i.get(S),xt=i.get(G);if(xt.__renderTarget=S,!ht.__hasExternalTextures){const lt=Math.max(1,S.width>>Z),rt=Math.max(1,S.height>>Z);B===e.TEXTURE_3D||B===e.TEXTURE_2D_ARRAY?n.texImage3D(B,Z,K,lt,rt,S.depth,0,it,W,null):n.texImage2D(B,Z,K,lt,rt,0,it,W,null)}n.bindFramebuffer(e.FRAMEBUFFER,T),Wt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,B,xt.__webglTexture,0,De(S)):(B===e.TEXTURE_2D||B>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,J,B,xt.__webglTexture,Z),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(T,S,G){if(e.bindRenderbuffer(e.RENDERBUFFER,T),S.depthBuffer){const J=S.depthTexture,B=J&&J.isDepthTexture?J.type:null,Z=C(S.stencilBuffer,B),it=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Wt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,De(S),Z,S.width,S.height):G?e.renderbufferStorageMultisample(e.RENDERBUFFER,De(S),Z,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,Z,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,it,e.RENDERBUFFER,T)}else{const J=S.textures;for(let B=0;B<J.length;B++){const Z=J[B],it=s.convert(Z.format,Z.colorSpace),W=s.convert(Z.type),K=M(Z.internalFormat,it,W,Z.normalized,Z.colorSpace);Wt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,De(S),K,S.width,S.height):G?e.renderbufferStorageMultisample(e.RENDERBUFFER,De(S),K,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,K,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Xt(T,S,G){const J=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const B=i.get(S.depthTexture);if(B.__renderTarget=S,(!B.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J){if(B.__webglInit===void 0&&(B.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),B.__webglTexture===void 0){B.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture),Dt(e.TEXTURE_CUBE_MAP,S.depthTexture);const ht=s.convert(S.depthTexture.format),xt=s.convert(S.depthTexture.type);let lt;S.depthTexture.format===sa?lt=e.DEPTH_COMPONENT24:S.depthTexture.format===os&&(lt=e.DEPTH24_STENCIL8);for(let rt=0;rt<6;rt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,lt,S.width,S.height,0,ht,xt,null)}}else q(S.depthTexture,0);const Z=B.__webglTexture,it=De(S),W=J?e.TEXTURE_CUBE_MAP_POSITIVE_X+G:e.TEXTURE_2D,K=S.depthTexture.format===os?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(S.depthTexture.format===sa)Wt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,W,Z,0,it):e.framebufferTexture2D(e.FRAMEBUFFER,K,W,Z,0);else if(S.depthTexture.format===os)Wt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,W,Z,0,it):e.framebufferTexture2D(e.FRAMEBUFFER,K,W,Z,0);else throw new Error("Unknown depthTexture format")}function re(T){const S=i.get(T),G=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const J=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const B=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",B)};J.addEventListener("dispose",B),S.__depthDisposeCallback=B}S.__boundDepthTexture=J}if(T.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let J=0;J<6;J++)Xt(S.__webglFramebuffer[J],T,J);else{const J=T.texture.mipmaps;J&&J.length>0?Xt(S.__webglFramebuffer[0],T,0):Xt(S.__webglFramebuffer,T,0)}else if(G){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=e.createRenderbuffer(),ye(S.__webglDepthbuffer[J],T,!1);else{const B=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[J];e.bindRenderbuffer(e.RENDERBUFFER,Z),e.framebufferRenderbuffer(e.FRAMEBUFFER,B,e.RENDERBUFFER,Z)}}else{const J=T.texture.mipmaps;if(J&&J.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),ye(S.__webglDepthbuffer,T,!1);else{const B=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,Z),e.framebufferRenderbuffer(e.FRAMEBUFFER,B,e.RENDERBUFFER,Z)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function oe(T,S,G){const J=i.get(T);S!==void 0&&Ct(J.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),G!==void 0&&re(T)}function Vt(T){const S=T.texture,G=i.get(T),J=i.get(S);T.addEventListener("dispose",x);const B=T.textures,Z=T.isWebGLCubeRenderTarget===!0,it=B.length>1;if(it||(J.__webglTexture===void 0&&(J.__webglTexture=e.createTexture()),J.__version=S.version,r.memory.textures++),Z){G.__webglFramebuffer=[];for(let W=0;W<6;W++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[W]=[];for(let K=0;K<S.mipmaps.length;K++)G.__webglFramebuffer[W][K]=e.createFramebuffer()}else G.__webglFramebuffer[W]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let W=0;W<S.mipmaps.length;W++)G.__webglFramebuffer[W]=e.createFramebuffer()}else G.__webglFramebuffer=e.createFramebuffer();if(it)for(let W=0,K=B.length;W<K;W++){const ht=i.get(B[W]);ht.__webglTexture===void 0&&(ht.__webglTexture=e.createTexture(),r.memory.textures++)}if(T.samples>0&&Wt(T)===!1){G.__webglMultisampledFramebuffer=e.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let W=0;W<B.length;W++){const K=B[W];G.__webglColorRenderbuffer[W]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,G.__webglColorRenderbuffer[W]);const ht=s.convert(K.format,K.colorSpace),xt=s.convert(K.type),lt=M(K.internalFormat,ht,xt,K.normalized,K.colorSpace,T.isXRRenderTarget===!0),rt=De(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,rt,lt,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+W,e.RENDERBUFFER,G.__webglColorRenderbuffer[W])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=e.createRenderbuffer(),ye(G.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Z){n.bindTexture(e.TEXTURE_CUBE_MAP,J.__webglTexture),Dt(e.TEXTURE_CUBE_MAP,S);for(let W=0;W<6;W++)if(S.mipmaps&&S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)Ct(G.__webglFramebuffer[W][K],T,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,K);else Ct(G.__webglFramebuffer[W],T,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);f(S)&&m(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(it){for(let W=0,K=B.length;W<K;W++){const ht=B[W],xt=i.get(ht);let lt=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(lt=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(lt,xt.__webglTexture),Dt(lt,ht),Ct(G.__webglFramebuffer,T,ht,e.COLOR_ATTACHMENT0+W,lt,0),f(ht)&&m(lt)}n.unbindTexture()}else{let W=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(W=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(W,J.__webglTexture),Dt(W,S),S.mipmaps&&S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)Ct(G.__webglFramebuffer[K],T,S,e.COLOR_ATTACHMENT0,W,K);else Ct(G.__webglFramebuffer,T,S,e.COLOR_ATTACHMENT0,W,0);f(S)&&m(W),n.unbindTexture()}T.depthBuffer&&re(T)}function de(T){const S=T.textures;for(let G=0,J=S.length;G<J;G++){const B=S[G];if(f(B)){const Z=_(T),it=i.get(B).__webglTexture;n.bindTexture(Z,it),m(Z),n.unbindTexture()}}}const he=[],ln=[];function L(T){if(T.samples>0){if(Wt(T)===!1){const S=T.textures,G=T.width,J=T.height;let B=e.COLOR_BUFFER_BIT;const Z=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,it=i.get(T),W=S.length>1;if(W)for(let ht=0;ht<S.length;ht++)n.bindFramebuffer(e.FRAMEBUFFER,it.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,it.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,it.__webglMultisampledFramebuffer);const K=T.texture.mipmaps;K&&K.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,it.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,it.__webglFramebuffer);for(let ht=0;ht<S.length;ht++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(B|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(B|=e.STENCIL_BUFFER_BIT)),W){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,it.__webglColorRenderbuffer[ht]);const xt=i.get(S[ht]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,xt,0)}e.blitFramebuffer(0,0,G,J,0,0,G,J,B,e.NEAREST),l===!0&&(he.length=0,ln.length=0,he.push(e.COLOR_ATTACHMENT0+ht),T.depthBuffer&&T.resolveDepthBuffer===!1&&(he.push(Z),ln.push(Z),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ln)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,he))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),W)for(let ht=0;ht<S.length;ht++){n.bindFramebuffer(e.FRAMEBUFFER,it.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.RENDERBUFFER,it.__webglColorRenderbuffer[ht]);const xt=i.get(S[ht]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,it.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.TEXTURE_2D,xt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,it.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const S=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function De(T){return Math.min(a.maxSamples,T.samples)}function Wt(T){const S=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function $t(T){const S=r.render.frame;d.get(T)!==S&&(d.set(T,S),T.update())}function ut(T,S){const G=T.colorSpace,J=T.format,B=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==Kc&&G!==Ea&&(Kt.getTransfer(G)===le?(J!==ci||B!==$n)&&wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",G)),S}function ve(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=Y,this.getTextureUnits=j,this.setTextureUnits=I,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=at,this.setTextureCube=gt,this.rebindTextures=oe,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function tC(e,t){function n(i,a=Ea){let s;const r=Kt.getTransfer(a);if(i===$n)return e.UNSIGNED_BYTE;if(i===kp)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Xp)return e.UNSIGNED_SHORT_5_5_5_1;if(i===fS)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===dS)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===cS)return e.BYTE;if(i===uS)return e.SHORT;if(i===Go)return e.UNSIGNED_SHORT;if(i===Vp)return e.INT;if(i===Ti)return e.UNSIGNED_INT;if(i===xi)return e.FLOAT;if(i===aa)return e.HALF_FLOAT;if(i===hS)return e.ALPHA;if(i===pS)return e.RGB;if(i===ci)return e.RGBA;if(i===sa)return e.DEPTH_COMPONENT;if(i===os)return e.DEPTH_STENCIL;if(i===mS)return e.RED;if(i===Wp)return e.RED_INTEGER;if(i===xs)return e.RG;if(i===qp)return e.RG_INTEGER;if(i===Yp)return e.RGBA_INTEGER;if(i===hc||i===pc||i===mc||i===gc)if(r===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===hc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===hc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nh||i===ih||i===ah||i===sh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===nh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ih)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ah)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rh||i===oh||i===lh||i===ch||i===uh||i===jc||i===fh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===rh||i===oh)return r===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===lh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ch)return s.COMPRESSED_R11_EAC;if(i===uh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===jc)return s.COMPRESSED_RG11_EAC;if(i===fh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===dh||i===hh||i===ph||i===mh||i===gh||i===_h||i===vh||i===xh||i===Sh||i===Mh||i===yh||i===Eh||i===bh||i===Th)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===dh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ph)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_h)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Eh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bh)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Th)return r===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ah||i===Rh||i===Ch)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Ah)return r===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ch)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wh||i===Dh||i===Zc||i===Uh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===wh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Dh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ho?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const eC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nC=`
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

}`;class iC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new AS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Ri({vertexShader:eC,fragmentShader:nC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ai(new bu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aC extends As{constructor(t,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,v=null;const y=typeof XRWebGLBinding<"u",g=new iC,f={},m=n.getContextAttributes();let _=null,M=null;const C=[],b=[],R=new se;let x=null;const A=new Zn;A.viewport=new Fe;const D=new Zn;D.viewport=new Fe;const w=[A,D],F=new pT;let Y=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ft=C[tt];return ft===void 0&&(ft=new Ef,C[tt]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(tt){let ft=C[tt];return ft===void 0&&(ft=new Ef,C[tt]=ft),ft.getGripSpace()},this.getHand=function(tt){let ft=C[tt];return ft===void 0&&(ft=new Ef,C[tt]=ft),ft.getHandSpace()};function I(tt){const ft=b.indexOf(tt.inputSource);if(ft===-1)return;const st=C[ft];st!==void 0&&(st.update(tt.inputSource,tt.frame,c||r),st.dispatchEvent({type:tt.type,data:tt.inputSource}))}function U(){a.removeEventListener("select",I),a.removeEventListener("selectstart",I),a.removeEventListener("selectend",I),a.removeEventListener("squeeze",I),a.removeEventListener("squeezestart",I),a.removeEventListener("squeezeend",I),a.removeEventListener("end",U),a.removeEventListener("inputsourceschange",O);for(let tt=0;tt<C.length;tt++){const ft=b[tt];ft!==null&&(b[tt]=null,C[tt].disconnect(ft))}Y=null,j=null,g.reset();for(const tt in f)delete f[tt];t.setRenderTarget(_),p=null,u=null,h=null,a=null,M=null,Dt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){s=tt,i.isPresenting===!0&&wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){o=tt,i.isPresenting===!0&&wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(a,n)),h},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(tt){if(a=tt,a!==null){if(_=t.getRenderTarget(),a.addEventListener("select",I),a.addEventListener("selectstart",I),a.addEventListener("selectend",I),a.addEventListener("squeeze",I),a.addEventListener("squeezestart",I),a.addEventListener("squeezeend",I),a.addEventListener("end",U),a.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,bt=null,Nt=null;m.depth&&(Nt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,st=m.stencil?os:sa,bt=m.stencil?Ho:Ti);const Ct={colorFormat:n.RGBA8,depthFormat:Nt,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(Ct),a.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Ei(u.textureWidth,u.textureHeight,{format:ci,type:$n,depthTexture:new Cr(u.textureWidth,u.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,n,st),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Ei(p.framebufferWidth,p.framebufferHeight,{format:ci,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),Dt.setContext(a),Dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(tt){for(let ft=0;ft<tt.removed.length;ft++){const st=tt.removed[ft],bt=b.indexOf(st);bt>=0&&(b[bt]=null,C[bt].disconnect(st))}for(let ft=0;ft<tt.added.length;ft++){const st=tt.added[ft];let bt=b.indexOf(st);if(bt===-1){for(let Ct=0;Ct<C.length;Ct++)if(Ct>=b.length){b.push(st),bt=Ct;break}else if(b[Ct]===null){b[Ct]=st,bt=Ct;break}if(bt===-1)break}const Nt=C[bt];Nt&&Nt.connect(st)}}const q=new z,$=new z;function at(tt,ft,st){q.setFromMatrixPosition(ft.matrixWorld),$.setFromMatrixPosition(st.matrixWorld);const bt=q.distanceTo($),Nt=ft.projectionMatrix.elements,Ct=st.projectionMatrix.elements,ye=Nt[14]/(Nt[10]-1),Xt=Nt[14]/(Nt[10]+1),re=(Nt[9]+1)/Nt[5],oe=(Nt[9]-1)/Nt[5],Vt=(Nt[8]-1)/Nt[0],de=(Ct[8]+1)/Ct[0],he=ye*Vt,ln=ye*de,L=bt/(-Vt+de),De=L*-Vt;if(ft.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(De),tt.translateZ(L),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Nt[10]===-1)tt.projectionMatrix.copy(ft.projectionMatrix),tt.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Wt=ye+L,$t=Xt+L,ut=he-De,ve=ln+(bt-De),T=re*Xt/$t*Wt,S=oe*Xt/$t*Wt;tt.projectionMatrix.makePerspective(ut,ve,T,S,Wt,$t),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function gt(tt,ft){ft===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ft.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(a===null)return;let ft=tt.near,st=tt.far;g.texture!==null&&(g.depthNear>0&&(ft=g.depthNear),g.depthFar>0&&(st=g.depthFar)),F.near=D.near=A.near=ft,F.far=D.far=A.far=st,(Y!==F.near||j!==F.far)&&(a.updateRenderState({depthNear:F.near,depthFar:F.far}),Y=F.near,j=F.far),F.layers.mask=tt.layers.mask|6,A.layers.mask=F.layers.mask&-5,D.layers.mask=F.layers.mask&-3;const bt=tt.parent,Nt=F.cameras;gt(F,bt);for(let Ct=0;Ct<Nt.length;Ct++)gt(Nt[Ct],bt);Nt.length===2?at(F,A,D):F.projectionMatrix.copy(A.projectionMatrix),yt(tt,F,bt)};function yt(tt,ft,st){st===null?tt.matrix.copy(ft.matrixWorld):(tt.matrix.copy(st.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ft.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ft.projectionMatrix),tt.projectionMatrixInverse.copy(ft.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Lh*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(tt){l=tt,u!==null&&(u.fixedFoveation=tt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=tt)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(tt){return f[tt]};let Lt=null;function Gt(tt,ft){if(d=ft.getViewerPose(c||r),v=ft,d!==null){const st=d.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let bt=!1;st.length!==F.cameras.length&&(F.cameras.length=0,bt=!0);for(let Xt=0;Xt<st.length;Xt++){const re=st[Xt];let oe=null;if(p!==null)oe=p.getViewport(re);else{const de=h.getViewSubImage(u,re);oe=de.viewport,Xt===0&&(t.setRenderTargetTextures(M,de.colorTexture,de.depthStencilTexture),t.setRenderTarget(M))}let Vt=w[Xt];Vt===void 0&&(Vt=new Zn,Vt.layers.enable(Xt),Vt.viewport=new Fe,w[Xt]=Vt),Vt.matrix.fromArray(re.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(re.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(oe.x,oe.y,oe.width,oe.height),Xt===0&&(F.matrix.copy(Vt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),bt===!0&&F.cameras.push(Vt)}const Nt=a.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&y){h=i.getBinding();const Xt=h.getDepthInformation(st[0]);Xt&&Xt.isValid&&Xt.texture&&g.init(Xt,a.renderState)}if(Nt&&Nt.includes("camera-access")&&y){t.state.unbindTexture(),h=i.getBinding();for(let Xt=0;Xt<st.length;Xt++){const re=st[Xt].camera;if(re){let oe=f[re];oe||(oe=new AS,f[re]=oe);const Vt=h.getCameraImage(re);oe.sourceTexture=Vt}}}}for(let st=0;st<C.length;st++){const bt=b[st],Nt=C[st];bt!==null&&Nt!==void 0&&Nt.update(bt,ft,c||r)}Lt&&Lt(tt,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),v=null}const Dt=new DS;Dt.setAnimationLoop(Gt),this.setAnimationLoop=function(tt){Lt=tt},this.dispose=function(){}}}const sC=new We,BS=new Pt;BS.set(-1,0,0,0,1,0,0,0,1);function rC(e,t){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,RS(e)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function a(g,f,m,_,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),h(g,f)):f.isMeshPhongMaterial?(s(g,f),d(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),u(g,f),f.isMeshPhysicalMaterial&&p(g,f,M)):f.isMeshMatcapMaterial?(s(g,f),v(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),y(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(r(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,m,_):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===bn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===bn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const m=t.get(f),_=m.envMap,M=m.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(sC.makeRotationFromEuler(M)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(BS),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function r(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,_){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=_*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function d(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,m){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===bn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function y(g,f){const m=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function oC(e,t,n,i){let a={},s={},r=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const M=_.program;i.uniformBlockBinding(m,M)}function c(m,_){let M=a[m.id];M===void 0&&(v(m),M=d(m),a[m.id]=M,m.addEventListener("dispose",g));const C=_.program;i.updateUBOMapping(m,C);const b=t.render.frame;s[m.id]!==b&&(u(m),s[m.id]=b)}function d(m){const _=h();m.__bindingPointIndex=_;const M=e.createBuffer(),C=m.__size,b=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,M),e.bufferData(e.UNIFORM_BUFFER,C,b),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,M),M}function h(){for(let m=0;m<o;m++)if(r.indexOf(m)===-1)return r.push(m),m;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){const _=a[m.id],M=m.uniforms,C=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let b=0,R=M.length;b<R;b++){const x=Array.isArray(M[b])?M[b]:[M[b]];for(let A=0,D=x.length;A<D;A++){const w=x[A];if(p(w,b,A,C)===!0){const F=w.__offset,Y=Array.isArray(w.value)?w.value:[w.value];let j=0;for(let I=0;I<Y.length;I++){const U=Y[I],O=y(U);typeof U=="number"||typeof U=="boolean"?(w.__data[0]=U,e.bufferSubData(e.UNIFORM_BUFFER,F+j,w.__data)):U.isMatrix3?(w.__data[0]=U.elements[0],w.__data[1]=U.elements[1],w.__data[2]=U.elements[2],w.__data[3]=0,w.__data[4]=U.elements[3],w.__data[5]=U.elements[4],w.__data[6]=U.elements[5],w.__data[7]=0,w.__data[8]=U.elements[6],w.__data[9]=U.elements[7],w.__data[10]=U.elements[8],w.__data[11]=0):ArrayBuffer.isView(U)?w.__data.set(new U.constructor(U.buffer,U.byteOffset,w.__data.length)):(U.toArray(w.__data,j),j+=O.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,F,w.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(m,_,M,C){const b=m.value,R=_+"_"+M;if(C[R]===void 0)return typeof b=="number"||typeof b=="boolean"?C[R]=b:ArrayBuffer.isView(b)?C[R]=b.slice():C[R]=b.clone(),!0;{const x=C[R];if(typeof b=="number"||typeof b=="boolean"){if(x!==b)return C[R]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(x.equals(b)===!1)return x.copy(b),!0}}return!1}function v(m){const _=m.uniforms;let M=0;const C=16;for(let R=0,x=_.length;R<x;R++){const A=Array.isArray(_[R])?_[R]:[_[R]];for(let D=0,w=A.length;D<w;D++){const F=A[D],Y=Array.isArray(F.value)?F.value:[F.value];for(let j=0,I=Y.length;j<I;j++){const U=Y[j],O=y(U),q=M%C,$=q%O.boundary,at=q+$;M+=$,at!==0&&C-at<O.storage&&(M+=C-at),F.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=O.storage}}}const b=M%C;return b>0&&(M+=C-b),m.__size=M,m.__cache={},this}function y(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(_.boundary=16,_.storage=m.byteLength):wt("WebGLRenderer: Unsupported uniform value type.",m),_}function g(m){const _=m.target;_.removeEventListener("dispose",g);const M=r.indexOf(_.__bindingPointIndex);r.splice(M,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete s[_.id]}function f(){for(const m in a)e.deleteBuffer(a[m]);r=[],a={},s={}}return{bind:l,update:c,dispose:f}}const lC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pi=null;function cC(){return pi===null&&(pi=new Jb(lC,16,16,xs,aa),pi.name="DFG_LUT",pi.minFilter=dn,pi.magFilter=dn,pi.wrapS=Yi,pi.wrapT=Yi,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}class uC{constructor(t={}){const{canvas:n=wb(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:p=$n}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=r;const y=p,g=new Set([Yp,qp,Wp]),f=new Set([$n,Ti,Go,Ho,kp,Xp]),m=new Uint32Array(4),_=new Int32Array(4),M=new z;let C=null,b=null;const R=[],x=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let w=!1,F=null;this._outputColorSpace=Wn;let Y=0,j=0,I=null,U=-1,O=null;const q=new Fe,$=new Fe;let at=null;const gt=new fe(0);let yt=0,Lt=n.width,Gt=n.height,Dt=1,tt=null,ft=null;const st=new Fe(0,0,Lt,Gt),bt=new Fe(0,0,Lt,Gt);let Nt=!1;const Ct=new ES;let ye=!1,Xt=!1;const re=new We,oe=new z,Vt=new Fe,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function ln(){return I===null?Dt:1}let L=i;function De(E,P){return n.getContext(E,P)}try{const E={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Hp}`),n.addEventListener("webglcontextlost",nt,!1),n.addEventListener("webglcontextrestored",Tt,!1),n.addEventListener("webglcontextcreationerror",Bt,!1),L===null){const P="webgl2";if(L=De(P,E),L===null)throw De(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw ee("WebGLRenderer: "+E.message),E}let Wt,$t,ut,ve,T,S,G,J,B,Z,it,W,K,ht,xt,lt,rt,Ot,Ht,ne,N,ot,Q;function _t(){Wt=new cR(L),Wt.init(),N=new tC(L,Wt),$t=new eR(L,Wt,t,N),ut=new J3(L,Wt),$t.reversedDepthBuffer&&u&&ut.buffers.depth.setReversed(!0),ve=new dR(L),T=new F3,S=new $3(L,Wt,ut,T,$t,N,ve),G=new lR(D),J=new gT(L),ot=new $A(L,J),B=new uR(L,J,ve,ot),Z=new pR(L,B,J,ot,ve),Ot=new hR(L,$t,S),xt=new nR(T),it=new B3(D,G,Wt,$t,ot,xt),W=new rC(D,T),K=new G3,ht=new q3(Wt),rt=new JA(D,G,ut,Z,v,l),lt=new Q3(D,Z,$t),Q=new oC(L,ve,$t,ut),Ht=new tR(L,Wt,ve),ne=new fR(L,Wt,ve),ve.programs=it.programs,D.capabilities=$t,D.extensions=Wt,D.properties=T,D.renderLists=K,D.shadowMap=lt,D.state=ut,D.info=ve}_t(),y!==$n&&(A=new gR(y,n.width,n.height,a,s));const ct=new aC(D,L);this.xr=ct,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Wt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Wt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Dt},this.setPixelRatio=function(E){E!==void 0&&(Dt=E,this.setSize(Lt,Gt,!1))},this.getSize=function(E){return E.set(Lt,Gt)},this.setSize=function(E,P,X=!0){if(ct.isPresenting){wt("WebGLRenderer: Can't change size while VR device is presenting.");return}Lt=E,Gt=P,n.width=Math.floor(E*Dt),n.height=Math.floor(P*Dt),X===!0&&(n.style.width=E+"px",n.style.height=P+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,E,P)},this.getDrawingBufferSize=function(E){return E.set(Lt*Dt,Gt*Dt).floor()},this.setDrawingBufferSize=function(E,P,X){Lt=E,Gt=P,Dt=X,n.width=Math.floor(E*X),n.height=Math.floor(P*X),this.setViewport(0,0,E,P)},this.setEffects=function(E){if(y===$n){ee("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let P=0;P<E.length;P++)if(E[P].isOutputPass===!0){wt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(q)},this.getViewport=function(E){return E.copy(st)},this.setViewport=function(E,P,X,H){E.isVector4?st.set(E.x,E.y,E.z,E.w):st.set(E,P,X,H),ut.viewport(q.copy(st).multiplyScalar(Dt).round())},this.getScissor=function(E){return E.copy(bt)},this.setScissor=function(E,P,X,H){E.isVector4?bt.set(E.x,E.y,E.z,E.w):bt.set(E,P,X,H),ut.scissor($.copy(bt).multiplyScalar(Dt).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(E){ut.setScissorTest(Nt=E)},this.setOpaqueSort=function(E){tt=E},this.setTransparentSort=function(E){ft=E},this.getClearColor=function(E){return E.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(E=!0,P=!0,X=!0){let H=0;if(E){let k=!1;if(I!==null){const mt=I.texture.format;k=g.has(mt)}if(k){const mt=I.texture.type,Mt=f.has(mt),pt=rt.getClearColor(),Et=rt.getClearAlpha(),At=pt.r,Ft=pt.g,qt=pt.b;Mt?(m[0]=At,m[1]=Ft,m[2]=qt,m[3]=Et,L.clearBufferuiv(L.COLOR,0,m)):(_[0]=At,_[1]=Ft,_[2]=qt,_[3]=Et,L.clearBufferiv(L.COLOR,0,_))}else H|=L.COLOR_BUFFER_BIT}P&&(H|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){n.removeEventListener("webglcontextlost",nt,!1),n.removeEventListener("webglcontextrestored",Tt,!1),n.removeEventListener("webglcontextcreationerror",Bt,!1),rt.dispose(),K.dispose(),ht.dispose(),T.dispose(),G.dispose(),Z.dispose(),ot.dispose(),Q.dispose(),it.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",rm),ct.removeEventListener("sessionend",om),Ya.stop()};function nt(E){E.preventDefault(),Qg("WebGLRenderer: Context Lost."),w=!0}function Tt(){Qg("WebGLRenderer: Context Restored."),w=!1;const E=ve.autoReset,P=lt.enabled,X=lt.autoUpdate,H=lt.needsUpdate,k=lt.type;_t(),ve.autoReset=E,lt.enabled=P,lt.autoUpdate=X,lt.needsUpdate=H,lt.type=k}function Bt(E){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Oe(E){const P=E.target;P.removeEventListener("dispose",Oe),pe(P)}function pe(E){Di(E),T.remove(E)}function Di(E){const P=T.get(E).programs;P!==void 0&&(P.forEach(function(X){it.releaseProgram(X)}),E.isShaderMaterial&&it.releaseShaderCache(E))}this.renderBufferDirect=function(E,P,X,H,k,mt){P===null&&(P=de);const Mt=k.isMesh&&k.matrixWorld.determinant()<0,pt=YS(E,P,X,H,k);ut.setMaterial(H,Mt);let Et=X.index,At=1;if(H.wireframe===!0){if(Et=B.getWireframeAttribute(X),Et===void 0)return;At=2}const Ft=X.drawRange,qt=X.attributes.position;let Rt=Ft.start*At,me=(Ft.start+Ft.count)*At;mt!==null&&(Rt=Math.max(Rt,mt.start*At),me=Math.min(me,(mt.start+mt.count)*At)),Et!==null?(Rt=Math.max(Rt,0),me=Math.min(me,Et.count)):qt!=null&&(Rt=Math.max(Rt,0),me=Math.min(me,qt.count));const Pe=me-Rt;if(Pe<0||Pe===1/0)return;ot.setup(k,H,pt,X,Et);let Ue,xe=Ht;if(Et!==null&&(Ue=J.get(Et),xe=ne,xe.setIndex(Ue)),k.isMesh)H.wireframe===!0?(ut.setLineWidth(H.wireframeLinewidth*ln()),xe.setMode(L.LINES)):xe.setMode(L.TRIANGLES);else if(k.isLine){let cn=H.linewidth;cn===void 0&&(cn=1),ut.setLineWidth(cn*ln()),k.isLineSegments?xe.setMode(L.LINES):k.isLineLoop?xe.setMode(L.LINE_LOOP):xe.setMode(L.LINE_STRIP)}else k.isPoints?xe.setMode(L.POINTS):k.isSprite&&xe.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(Wt.get("WEBGL_multi_draw"))xe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const cn=k._multiDrawStarts,St=k._multiDrawCounts,Cn=k._multiDrawCount,te=Et?J.get(Et).bytesPerElement:1,Vn=T.get(H).currentProgram.getUniforms();for(let di=0;di<Cn;di++)Vn.setValue(L,"_gl_DrawID",di),xe.render(cn[di]/te,St[di])}else if(k.isInstancedMesh)xe.renderInstances(Rt,Pe,k.count);else if(X.isInstancedBufferGeometry){const cn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,St=Math.min(X.instanceCount,cn);xe.renderInstances(Rt,Pe,St)}else xe.render(Rt,Pe)};function fi(E,P,X){E.transparent===!0&&E.side===ki&&E.forceSinglePass===!1?(E.side=bn,E.needsUpdate=!0,rl(E,P,X),E.side=ka,E.needsUpdate=!0,rl(E,P,X),E.side=ki):rl(E,P,X)}this.compile=function(E,P,X=null){X===null&&(X=E),b=ht.get(X),b.init(P),x.push(b),X.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),E!==X&&E.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),b.setupLights();const H=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const mt=k.material;if(mt)if(Array.isArray(mt))for(let Mt=0;Mt<mt.length;Mt++){const pt=mt[Mt];fi(pt,X,k),H.add(pt)}else fi(mt,X,k),H.add(mt)}),b=x.pop(),H},this.compileAsync=function(E,P,X=null){const H=this.compile(E,P,X);return new Promise(k=>{function mt(){if(H.forEach(function(Mt){T.get(Mt).currentProgram.isReady()&&H.delete(Mt)}),H.size===0){k(E);return}setTimeout(mt,10)}Wt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Ru=null;function WS(E){Ru&&Ru(E)}function rm(){Ya.stop()}function om(){Ya.start()}const Ya=new DS;Ya.setAnimationLoop(WS),typeof self<"u"&&Ya.setContext(self),this.setAnimationLoop=function(E){Ru=E,ct.setAnimationLoop(E),E===null?Ya.stop():Ya.start()},ct.addEventListener("sessionstart",rm),ct.addEventListener("sessionend",om),this.render=function(E,P){if(P!==void 0&&P.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;F!==null&&F.renderStart(E,P);const X=ct.enabled===!0&&ct.isPresenting===!0,H=A!==null&&(I===null||X)&&A.begin(D,I);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(P),P=ct.getCamera()),E.isScene===!0&&E.onBeforeRender(D,E,P,I),b=ht.get(E,x.length),b.init(P),b.state.textureUnits=S.getTextureUnits(),x.push(b),re.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Ct.setFromProjectionMatrix(re,Si,P.reversedDepth),Xt=this.localClippingEnabled,ye=xt.init(this.clippingPlanes,Xt),C=K.get(E,R.length),C.init(),R.push(C),ct.enabled===!0&&ct.isPresenting===!0){const Mt=D.xr.getDepthSensingMesh();Mt!==null&&Cu(Mt,P,-1/0,D.sortObjects)}Cu(E,P,0,D.sortObjects),C.finish(),D.sortObjects===!0&&C.sort(tt,ft),he=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,he&&rt.addToRenderList(C,E),this.info.render.frame++,ye===!0&&xt.beginShadows();const k=b.state.shadowsArray;if(lt.render(k,E,P),ye===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&A.hasRenderPass())===!1){const Mt=C.opaque,pt=C.transmissive;if(b.setupLights(),P.isArrayCamera){const Et=P.cameras;if(pt.length>0)for(let At=0,Ft=Et.length;At<Ft;At++){const qt=Et[At];cm(Mt,pt,E,qt)}he&&rt.render(E);for(let At=0,Ft=Et.length;At<Ft;At++){const qt=Et[At];lm(C,E,qt,qt.viewport)}}else pt.length>0&&cm(Mt,pt,E,P),he&&rt.render(E),lm(C,E,P)}I!==null&&j===0&&(S.updateMultisampleRenderTarget(I),S.updateRenderTargetMipmap(I)),H&&A.end(D),E.isScene===!0&&E.onAfterRender(D,E,P),ot.resetDefaultState(),U=-1,O=null,x.pop(),x.length>0?(b=x[x.length-1],S.setTextureUnits(b.state.textureUnits),ye===!0&&xt.setGlobalState(D.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?C=R[R.length-1]:C=null,F!==null&&F.renderEnd()};function Cu(E,P,X,H){if(E.visible===!1)return;if(E.layers.test(P.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(P);else if(E.isLightProbeGrid)b.pushLightProbeGrid(E);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ct.intersectsSprite(E)){H&&Vt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(re);const Mt=Z.update(E),pt=E.material;pt.visible&&C.push(E,Mt,pt,X,Vt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ct.intersectsObject(E))){const Mt=Z.update(E),pt=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Vt.copy(E.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Vt.copy(Mt.boundingSphere.center)),Vt.applyMatrix4(E.matrixWorld).applyMatrix4(re)),Array.isArray(pt)){const Et=Mt.groups;for(let At=0,Ft=Et.length;At<Ft;At++){const qt=Et[At],Rt=pt[qt.materialIndex];Rt&&Rt.visible&&C.push(E,Mt,Rt,X,Vt.z,qt)}}else pt.visible&&C.push(E,Mt,pt,X,Vt.z,null)}}const mt=E.children;for(let Mt=0,pt=mt.length;Mt<pt;Mt++)Cu(mt[Mt],P,X,H)}function lm(E,P,X,H){const{opaque:k,transmissive:mt,transparent:Mt}=E;b.setupLightsView(X),ye===!0&&xt.setGlobalState(D.clippingPlanes,X),H&&ut.viewport(q.copy(H)),k.length>0&&sl(k,P,X),mt.length>0&&sl(mt,P,X),Mt.length>0&&sl(Mt,P,X),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function cm(E,P,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){const Rt=Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new Ei(1,1,{generateMipmaps:!0,type:Rt?aa:$n,minFilter:rs,samples:Math.max(4,$t.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace})}const mt=b.state.transmissionRenderTarget[H.id],Mt=H.viewport||q;mt.setSize(Mt.z*D.transmissionResolutionScale,Mt.w*D.transmissionResolutionScale);const pt=D.getRenderTarget(),Et=D.getActiveCubeFace(),At=D.getActiveMipmapLevel();D.setRenderTarget(mt),D.getClearColor(gt),yt=D.getClearAlpha(),yt<1&&D.setClearColor(16777215,.5),D.clear(),he&&rt.render(X);const Ft=D.toneMapping;D.toneMapping=yi;const qt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),ye===!0&&xt.setGlobalState(D.clippingPlanes,H),sl(E,X,H),S.updateMultisampleRenderTarget(mt),S.updateRenderTargetMipmap(mt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let me=0,Pe=P.length;me<Pe;me++){const Ue=P[me],{object:xe,geometry:cn,material:St,group:Cn}=Ue;if(St.side===ki&&xe.layers.test(H.layers)){const te=St.side;St.side=bn,St.needsUpdate=!0,um(xe,X,H,cn,St,Cn),St.side=te,St.needsUpdate=!0,Rt=!0}}Rt===!0&&(S.updateMultisampleRenderTarget(mt),S.updateRenderTargetMipmap(mt))}D.setRenderTarget(pt,Et,At),D.setClearColor(gt,yt),qt!==void 0&&(H.viewport=qt),D.toneMapping=Ft}function sl(E,P,X){const H=P.isScene===!0?P.overrideMaterial:null;for(let k=0,mt=E.length;k<mt;k++){const Mt=E[k],{object:pt,geometry:Et,group:At}=Mt;let Ft=Mt.material;Ft.allowOverride===!0&&H!==null&&(Ft=H),pt.layers.test(X.layers)&&um(pt,P,X,Et,Ft,At)}}function um(E,P,X,H,k,mt){E.onBeforeRender(D,P,X,H,k,mt),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(D,P,X,H,E,mt),k.transparent===!0&&k.side===ki&&k.forceSinglePass===!1?(k.side=bn,k.needsUpdate=!0,D.renderBufferDirect(X,P,H,k,E,mt),k.side=ka,k.needsUpdate=!0,D.renderBufferDirect(X,P,H,k,E,mt),k.side=ki):D.renderBufferDirect(X,P,H,k,E,mt),E.onAfterRender(D,P,X,H,k,mt)}function rl(E,P,X){P.isScene!==!0&&(P=de);const H=T.get(E),k=b.state.lights,mt=b.state.shadowsArray,Mt=k.state.version,pt=it.getParameters(E,k.state,mt,P,X,b.state.lightProbeGridArray),Et=it.getProgramCacheKey(pt);let At=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?P.environment:null,H.fog=P.fog;const Ft=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=G.get(E.envMap||H.environment,Ft),H.envMapRotation=H.environment!==null&&E.envMap===null?P.environmentRotation:E.envMapRotation,At===void 0&&(E.addEventListener("dispose",Oe),At=new Map,H.programs=At);let qt=At.get(Et);if(qt!==void 0){if(H.currentProgram===qt&&H.lightsStateVersion===Mt)return dm(E,pt),qt}else pt.uniforms=it.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,X,pt),E.onBeforeCompile(pt,D),qt=it.acquireProgram(pt,Et),At.set(Et,qt),H.uniforms=pt.uniforms;const Rt=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Rt.clippingPlanes=xt.uniform),dm(E,pt),H.needsLights=ZS(E),H.lightsStateVersion=Mt,H.needsLights&&(Rt.ambientLightColor.value=k.state.ambient,Rt.lightProbe.value=k.state.probe,Rt.directionalLights.value=k.state.directional,Rt.directionalLightShadows.value=k.state.directionalShadow,Rt.spotLights.value=k.state.spot,Rt.spotLightShadows.value=k.state.spotShadow,Rt.rectAreaLights.value=k.state.rectArea,Rt.ltc_1.value=k.state.rectAreaLTC1,Rt.ltc_2.value=k.state.rectAreaLTC2,Rt.pointLights.value=k.state.point,Rt.pointLightShadows.value=k.state.pointShadow,Rt.hemisphereLights.value=k.state.hemi,Rt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Rt.spotLightMatrix.value=k.state.spotLightMatrix,Rt.spotLightMap.value=k.state.spotLightMap,Rt.pointShadowMatrix.value=k.state.pointShadowMatrix),H.lightProbeGrid=b.state.lightProbeGridArray.length>0,H.currentProgram=qt,H.uniformsList=null,qt}function fm(E){if(E.uniformsList===null){const P=E.currentProgram.getUniforms();E.uniformsList=_c.seqWithValue(P.seq,E.uniforms)}return E.uniformsList}function dm(E,P){const X=T.get(E);X.outputColorSpace=P.outputColorSpace,X.batching=P.batching,X.batchingColor=P.batchingColor,X.instancing=P.instancing,X.instancingColor=P.instancingColor,X.instancingMorph=P.instancingMorph,X.skinning=P.skinning,X.morphTargets=P.morphTargets,X.morphNormals=P.morphNormals,X.morphColors=P.morphColors,X.morphTargetsCount=P.morphTargetsCount,X.numClippingPlanes=P.numClippingPlanes,X.numIntersection=P.numClipIntersection,X.vertexAlphas=P.vertexAlphas,X.vertexTangents=P.vertexTangents,X.toneMapping=P.toneMapping}function qS(E,P){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;M.setFromMatrixPosition(P.matrixWorld);for(let X=0,H=E.length;X<H;X++){const k=E[X];if(k.texture!==null&&k.boundingBox.containsPoint(M))return k}return null}function YS(E,P,X,H,k){P.isScene!==!0&&(P=de),S.resetTextureUnits();const mt=P.fog,Mt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?P.environment:null,pt=I===null?D.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Kt.workingColorSpace,Et=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,At=G.get(H.envMap||Mt,Et),Ft=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,qt=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Rt=!!X.morphAttributes.position,me=!!X.morphAttributes.normal,Pe=!!X.morphAttributes.color;let Ue=yi;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ue=D.toneMapping);const xe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,cn=xe!==void 0?xe.length:0,St=T.get(H),Cn=b.state.lights;if(ye===!0&&(Xt===!0||E!==O)){const Ee=E===O&&H.id===U;xt.setState(H,E,Ee)}let te=!1;H.version===St.__version?(St.needsLights&&St.lightsStateVersion!==Cn.state.version||St.outputColorSpace!==pt||k.isBatchedMesh&&St.batching===!1||!k.isBatchedMesh&&St.batching===!0||k.isBatchedMesh&&St.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&St.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&St.instancing===!1||!k.isInstancedMesh&&St.instancing===!0||k.isSkinnedMesh&&St.skinning===!1||!k.isSkinnedMesh&&St.skinning===!0||k.isInstancedMesh&&St.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&St.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&St.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&St.instancingMorph===!1&&k.morphTexture!==null||St.envMap!==At||H.fog===!0&&St.fog!==mt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==xt.numPlanes||St.numIntersection!==xt.numIntersection)||St.vertexAlphas!==Ft||St.vertexTangents!==qt||St.morphTargets!==Rt||St.morphNormals!==me||St.morphColors!==Pe||St.toneMapping!==Ue||St.morphTargetsCount!==cn||!!St.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(te=!0):(te=!0,St.__version=H.version);let Vn=St.currentProgram;te===!0&&(Vn=rl(H,P,k),F&&H.isNodeMaterial&&F.onUpdateProgram(H,Vn,St));let di=!1,oa=!1,Rs=!1;const Se=Vn.getUniforms(),Ie=St.uniforms;if(ut.useProgram(Vn.program)&&(di=!0,oa=!0,Rs=!0),H.id!==U&&(U=H.id,oa=!0),St.needsLights){const Ee=qS(b.state.lightProbeGridArray,k);St.lightProbeGrid!==Ee&&(St.lightProbeGrid=Ee,oa=!0)}if(di||O!==E){ut.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Se.setValue(L,"projectionMatrix",E.projectionMatrix),Se.setValue(L,"viewMatrix",E.matrixWorldInverse);const ca=Se.map.cameraPosition;ca!==void 0&&ca.setValue(L,oe.setFromMatrixPosition(E.matrixWorld)),$t.logarithmicDepthBuffer&&Se.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Se.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),O!==E&&(O=E,oa=!0,Rs=!0)}if(St.needsLights&&(Cn.state.directionalShadowMap.length>0&&Se.setValue(L,"directionalShadowMap",Cn.state.directionalShadowMap,S),Cn.state.spotShadowMap.length>0&&Se.setValue(L,"spotShadowMap",Cn.state.spotShadowMap,S),Cn.state.pointShadowMap.length>0&&Se.setValue(L,"pointShadowMap",Cn.state.pointShadowMap,S)),k.isSkinnedMesh){Se.setOptional(L,k,"bindMatrix"),Se.setOptional(L,k,"bindMatrixInverse");const Ee=k.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),Se.setValue(L,"boneTexture",Ee.boneTexture,S))}k.isBatchedMesh&&(Se.setOptional(L,k,"batchingTexture"),Se.setValue(L,"batchingTexture",k._matricesTexture,S),Se.setOptional(L,k,"batchingIdTexture"),Se.setValue(L,"batchingIdTexture",k._indirectTexture,S),Se.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&Se.setValue(L,"batchingColorTexture",k._colorsTexture,S));const la=X.morphAttributes;if((la.position!==void 0||la.normal!==void 0||la.color!==void 0)&&Ot.update(k,X,Vn),(oa||St.receiveShadow!==k.receiveShadow)&&(St.receiveShadow=k.receiveShadow,Se.setValue(L,"receiveShadow",k.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&P.environment!==null&&(Ie.envMapIntensity.value=P.environmentIntensity),Ie.dfgLUT!==void 0&&(Ie.dfgLUT.value=cC()),oa){if(Se.setValue(L,"toneMappingExposure",D.toneMappingExposure),St.needsLights&&jS(Ie,Rs),mt&&H.fog===!0&&W.refreshFogUniforms(Ie,mt),W.refreshMaterialUniforms(Ie,H,Dt,Gt,b.state.transmissionRenderTarget[E.id]),St.needsLights&&St.lightProbeGrid){const Ee=St.lightProbeGrid;Ie.probesSH.value=Ee.texture,Ie.probesMin.value.copy(Ee.boundingBox.min),Ie.probesMax.value.copy(Ee.boundingBox.max),Ie.probesResolution.value.copy(Ee.resolution)}_c.upload(L,fm(St),Ie,S)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(_c.upload(L,fm(St),Ie,S),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Se.setValue(L,"center",k.center),Se.setValue(L,"modelViewMatrix",k.modelViewMatrix),Se.setValue(L,"normalMatrix",k.normalMatrix),Se.setValue(L,"modelMatrix",k.matrixWorld),H.uniformsGroups!==void 0){const Ee=H.uniformsGroups;for(let ca=0,Cs=Ee.length;ca<Cs;ca++){const hm=Ee[ca];Q.update(hm,Vn),Q.bind(hm,Vn)}}return Vn}function jS(E,P){E.ambientLightColor.needsUpdate=P,E.lightProbe.needsUpdate=P,E.directionalLights.needsUpdate=P,E.directionalLightShadows.needsUpdate=P,E.pointLights.needsUpdate=P,E.pointLightShadows.needsUpdate=P,E.spotLights.needsUpdate=P,E.spotLightShadows.needsUpdate=P,E.rectAreaLights.needsUpdate=P,E.hemisphereLights.needsUpdate=P}function ZS(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,P,X){const H=T.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),T.get(E.texture).__webglTexture=P,T.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,P){const X=T.get(E);X.__webglFramebuffer=P,X.__useDefaultFramebuffer=P===void 0};const KS=L.createFramebuffer();this.setRenderTarget=function(E,P=0,X=0){I=E,Y=P,j=X;let H=null,k=!1,mt=!1;if(E){const pt=T.get(E);if(pt.__useDefaultFramebuffer!==void 0){ut.bindFramebuffer(L.FRAMEBUFFER,pt.__webglFramebuffer),q.copy(E.viewport),$.copy(E.scissor),at=E.scissorTest,ut.viewport(q),ut.scissor($),ut.setScissorTest(at),U=-1;return}else if(pt.__webglFramebuffer===void 0)S.setupRenderTarget(E);else if(pt.__hasExternalTextures)S.rebindTextures(E,T.get(E.texture).__webglTexture,T.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ft=E.depthTexture;if(pt.__boundDepthTexture!==Ft){if(Ft!==null&&T.has(Ft)&&(E.width!==Ft.image.width||E.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(E)}}const Et=E.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(mt=!0);const At=T.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(At[P])?H=At[P][X]:H=At[P],k=!0):E.samples>0&&S.useMultisampledRTT(E)===!1?H=T.get(E).__webglMultisampledFramebuffer:Array.isArray(At)?H=At[X]:H=At,q.copy(E.viewport),$.copy(E.scissor),at=E.scissorTest}else q.copy(st).multiplyScalar(Dt).floor(),$.copy(bt).multiplyScalar(Dt).floor(),at=Nt;if(X!==0&&(H=KS),ut.bindFramebuffer(L.FRAMEBUFFER,H)&&ut.drawBuffers(E,H),ut.viewport(q),ut.scissor($),ut.setScissorTest(at),k){const pt=T.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+P,pt.__webglTexture,X)}else if(mt){const pt=P;for(let Et=0;Et<E.textures.length;Et++){const At=T.get(E.textures[Et]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Et,At.__webglTexture,X,pt)}}else if(E!==null&&X!==0){const pt=T.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pt.__webglTexture,X)}U=-1},this.readRenderTargetPixels=function(E,P,X,H,k,mt,Mt,pt=0){if(!(E&&E.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=T.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(Et=Et[Mt]),Et){ut.bindFramebuffer(L.FRAMEBUFFER,Et);try{const At=E.textures[pt],Ft=At.format,qt=At.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pt),!$t.textureFormatReadable(Ft)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(qt)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=E.width-H&&X>=0&&X<=E.height-k&&L.readPixels(P,X,H,k,N.convert(Ft),N.convert(qt),mt)}finally{const At=I!==null?T.get(I).__webglFramebuffer:null;ut.bindFramebuffer(L.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(E,P,X,H,k,mt,Mt,pt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=T.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(Et=Et[Mt]),Et)if(P>=0&&P<=E.width-H&&X>=0&&X<=E.height-k){ut.bindFramebuffer(L.FRAMEBUFFER,Et);const At=E.textures[pt],Ft=At.format,qt=At.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pt),!$t.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Rt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Rt),L.bufferData(L.PIXEL_PACK_BUFFER,mt.byteLength,L.STREAM_READ),L.readPixels(P,X,H,k,N.convert(Ft),N.convert(qt),0);const me=I!==null?T.get(I).__webglFramebuffer:null;ut.bindFramebuffer(L.FRAMEBUFFER,me);const Pe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Db(L,Pe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Rt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,mt),L.deleteBuffer(Rt),L.deleteSync(Pe),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,P=null,X=0){const H=Math.pow(2,-X),k=Math.floor(E.image.width*H),mt=Math.floor(E.image.height*H),Mt=P!==null?P.x:0,pt=P!==null?P.y:0;S.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,Mt,pt,k,mt),ut.unbindTexture()};const QS=L.createFramebuffer(),JS=L.createFramebuffer();this.copyTextureToTexture=function(E,P,X=null,H=null,k=0,mt=0){let Mt,pt,Et,At,Ft,qt,Rt,me,Pe;const Ue=E.isCompressedTexture?E.mipmaps[mt]:E.image;if(X!==null)Mt=X.max.x-X.min.x,pt=X.max.y-X.min.y,Et=X.isBox3?X.max.z-X.min.z:1,At=X.min.x,Ft=X.min.y,qt=X.isBox3?X.min.z:0;else{const Ie=Math.pow(2,-k);Mt=Math.floor(Ue.width*Ie),pt=Math.floor(Ue.height*Ie),E.isDataArrayTexture?Et=Ue.depth:E.isData3DTexture?Et=Math.floor(Ue.depth*Ie):Et=1,At=0,Ft=0,qt=0}H!==null?(Rt=H.x,me=H.y,Pe=H.z):(Rt=0,me=0,Pe=0);const xe=N.convert(P.format),cn=N.convert(P.type);let St;P.isData3DTexture?(S.setTexture3D(P,0),St=L.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(S.setTexture2DArray(P,0),St=L.TEXTURE_2D_ARRAY):(S.setTexture2D(P,0),St=L.TEXTURE_2D),ut.activeTexture(L.TEXTURE0),ut.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,P.flipY),ut.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),ut.pixelStorei(L.UNPACK_ALIGNMENT,P.unpackAlignment);const Cn=ut.getParameter(L.UNPACK_ROW_LENGTH),te=ut.getParameter(L.UNPACK_IMAGE_HEIGHT),Vn=ut.getParameter(L.UNPACK_SKIP_PIXELS),di=ut.getParameter(L.UNPACK_SKIP_ROWS),oa=ut.getParameter(L.UNPACK_SKIP_IMAGES);ut.pixelStorei(L.UNPACK_ROW_LENGTH,Ue.width),ut.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ue.height),ut.pixelStorei(L.UNPACK_SKIP_PIXELS,At),ut.pixelStorei(L.UNPACK_SKIP_ROWS,Ft),ut.pixelStorei(L.UNPACK_SKIP_IMAGES,qt);const Rs=E.isDataArrayTexture||E.isData3DTexture,Se=P.isDataArrayTexture||P.isData3DTexture;if(E.isDepthTexture){const Ie=T.get(E),la=T.get(P),Ee=T.get(Ie.__renderTarget),ca=T.get(la.__renderTarget);ut.bindFramebuffer(L.READ_FRAMEBUFFER,Ee.__webglFramebuffer),ut.bindFramebuffer(L.DRAW_FRAMEBUFFER,ca.__webglFramebuffer);for(let Cs=0;Cs<Et;Cs++)Rs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,T.get(E).__webglTexture,k,qt+Cs),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,T.get(P).__webglTexture,mt,Pe+Cs)),L.blitFramebuffer(At,Ft,Mt,pt,Rt,me,Mt,pt,L.DEPTH_BUFFER_BIT,L.NEAREST);ut.bindFramebuffer(L.READ_FRAMEBUFFER,null),ut.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||E.isRenderTargetTexture||T.has(E)){const Ie=T.get(E),la=T.get(P);ut.bindFramebuffer(L.READ_FRAMEBUFFER,QS),ut.bindFramebuffer(L.DRAW_FRAMEBUFFER,JS);for(let Ee=0;Ee<Et;Ee++)Rs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ie.__webglTexture,k,qt+Ee):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ie.__webglTexture,k),Se?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,la.__webglTexture,mt,Pe+Ee):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,la.__webglTexture,mt),k!==0?L.blitFramebuffer(At,Ft,Mt,pt,Rt,me,Mt,pt,L.COLOR_BUFFER_BIT,L.NEAREST):Se?L.copyTexSubImage3D(St,mt,Rt,me,Pe+Ee,At,Ft,Mt,pt):L.copyTexSubImage2D(St,mt,Rt,me,At,Ft,Mt,pt);ut.bindFramebuffer(L.READ_FRAMEBUFFER,null),ut.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Se?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(St,mt,Rt,me,Pe,Mt,pt,Et,xe,cn,Ue.data):P.isCompressedArrayTexture?L.compressedTexSubImage3D(St,mt,Rt,me,Pe,Mt,pt,Et,xe,Ue.data):L.texSubImage3D(St,mt,Rt,me,Pe,Mt,pt,Et,xe,cn,Ue):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,mt,Rt,me,Mt,pt,xe,cn,Ue.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,mt,Rt,me,Ue.width,Ue.height,xe,Ue.data):L.texSubImage2D(L.TEXTURE_2D,mt,Rt,me,Mt,pt,xe,cn,Ue);ut.pixelStorei(L.UNPACK_ROW_LENGTH,Cn),ut.pixelStorei(L.UNPACK_IMAGE_HEIGHT,te),ut.pixelStorei(L.UNPACK_SKIP_PIXELS,Vn),ut.pixelStorei(L.UNPACK_SKIP_ROWS,di),ut.pixelStorei(L.UNPACK_SKIP_IMAGES,oa),mt===0&&P.generateMipmaps&&L.generateMipmap(St),ut.unbindTexture()},this.initRenderTarget=function(E){T.get(E).__webglFramebuffer===void 0&&S.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),ut.unbindTexture()},this.resetState=function(){Y=0,j=0,I=null,ut.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Kt._getUnpackColorSpace()}}function FS(){const e=vt.useRef(null);return vt.useEffect(()=>{const t=e.current;if(!t)return;const n=new qb,i=new Zn(45,window.innerWidth/window.innerHeight,.1,100);i.position.z=4.2;const a=new uC({alpha:!0,antialias:!0});a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setSize(window.innerWidth,window.innerHeight),a.setClearColor(0,0),t.appendChild(a.domElement);const s=new $p(.95,1),r=new iT(new sT(s),new bS({color:16722474,transparent:!0,opacity:.55}));n.add(r);const o=[];for(let h=0;h<3;h++){const u=new Ai(new tm(1.35+h*.28,.012,8,96),new Qp({color:16722474,transparent:!0,opacity:.22-h*.05}));u.rotation.x=Math.PI/2+h*.18,u.rotation.y=h*.4,n.add(u),o.push(u)}let l=0;const c=()=>{r.rotation.x+=.0032,r.rotation.y+=.0048,o.forEach((h,u)=>{h.rotation.z+=.0018+u*6e-4}),a.render(n,i),l=requestAnimationFrame(c)};c();const d=()=>{const h=window.innerWidth,u=window.innerHeight;i.aspect=h/u,i.updateProjectionMatrix(),a.setSize(h,u)};return window.addEventListener("resize",d),()=>{cancelAnimationFrame(l),window.removeEventListener("resize",d),s.dispose(),r.geometry.dispose(),r.material.dispose(),o.forEach(h=>{h.geometry.dispose(),h.material.dispose()}),a.dispose(),t.removeChild(a.domElement)}},[]),V.jsx("div",{ref:e,className:"jerv-canvas","aria-hidden":"true"})}function fC(e){const t=new Worker(new URL("/GROVEE-STDIO/assets/sd.worker-BwefFosn.js",import.meta.url),{type:"module"});return t.addEventListener("message",n=>{e.onMessage(n.data)}),t}function eo(e,t){e.postMessage(t)}const W0=["What will you create today?","Describe your vision.","Turn words into images.","What scene do you imagine?","Let's bring your idea to life.","Create something unique.","Paint with prompts."],q0=[{id:"astronaut-horse",icon:"🧑‍🚀",label:"Astronaut on horse",prompt:"An astronaut riding a horse"},{id:"cat-sports-car",icon:"🐱",label:"Cat sports car",prompt:"A cat driving a sports car"},{id:"crystal-dragon",icon:"💎",label:"Crystal dragon",prompt:"A dragon made of crystal"},{id:"city-giant-tree",icon:"🌳",label:"City in a tree",prompt:"A city inside a giant tree"},{id:"floating-castle",icon:"🏰",label:"Floating castle",prompt:"A floating castle above the clouds"},{id:"cyberpunk-samurai",icon:"⚔️",label:"Cyberpunk samurai",prompt:"A cyberpunk samurai warrior"},{id:"giant-robot",icon:"🤖",label:"Giant robot",prompt:"A giant robot protecting a city"},{id:"flying-whale",icon:"🐋",label:"Flying whale",prompt:"A whale flying through the sky"},{id:"magical-fox",icon:"🦊",label:"Magical fox",prompt:"A magical fox with glowing tails"},{id:"tokyo-skyline",icon:"🗼",label:"Tokyo skyline",prompt:"A futuristic Tokyo skyline"},{id:"floating-island",icon:"🏝️",label:"Floating island",prompt:"A castle on a floating island"},{id:"phoenix-mountains",icon:"🔥",label:"Phoenix mountains",prompt:"A phoenix soaring over mountains"},{id:"forest-portal",icon:"🌀",label:"Forest portal",prompt:"A hidden portal in the forest"},{id:"wormhole-ship",icon:"🚀",label:"Wormhole ship",prompt:"A spaceship entering a wormhole"},{id:"mech-dragon-knight",icon:"🐲",label:"Mech dragon knight",prompt:"A knight riding a mechanical dragon"},{id:"giant-moon",icon:"🌕",label:"Giant moon",prompt:"A giant moon above the ocean"},{id:"panda-astronaut",icon:"🐼",label:"Panda astronaut",prompt:"A panda astronaut in space"},{id:"underwater-city",icon:"🌊",label:"Underwater city",prompt:"A futuristic underwater city"},{id:"wizard-spell",icon:"🧙",label:"Wizard spell",prompt:"A wizard casting a powerful spell"},{id:"dragon-awakening",icon:"🐉",label:"Dragon awakening",prompt:"A legendary dragon awakening"}],dC=11e3,zS=90,hC=520,pC=620;function mC(e=3){return hC+zS*Math.max(0,e-1)}function gC(e=3){return pC+zS*Math.max(0,e-1)}function Ih(e=3,t=[]){const n=new Set(t);let i=q0.filter(r=>!n.has(r.id));i.length<e&&(i=[...q0]);const a=[],s=[...i];for(;a.length<e&&s.length>0;){const r=Math.floor(Math.random()*s.length);a.push(s[r]),s.splice(r,1)}return a}function _C(){return{headline:W0[Math.floor(Math.random()*W0.length)],suggestions:Ih(3)}}const vC=!0,xC="sd15",Xa={sd15:{hfId:"ehristoforu/stable-diffusion-v1-5-tiny",estimatedBytes:2064947141,label:"Stable Diffusion 1.5",shortLabel:"SD 1.5",resolution:"512×512",introBlurb:"~2.0 GB · 512×512 · WebGPU or WASM"}};function SC(e){return Xa.sd15.estimatedBytes}function MC(e,t){return e==="start"||e==="loading"&&t===0}function yC(e,t){return e==="loading"&&t.length>0}const Vo="blurry, low quality, distorted, deformed, ugly, bad anatomy, extra limbs, watermark, text, logo, cartoon, sketch, flat colors",EC={photoreal:"photorealistic, professional photography, natural lighting, high detail, sharp focus, realistic textures",portrait:"cinematic portrait, soft studio lighting, shallow depth of field, natural skin texture, expressive eyes",product:"commercial product photography, studio lighting, clean background, accurate shadows, crisp details",landscape:"landscape photography, golden hour light, atmospheric depth, vivid natural colors, wide composition",anime:"anime illustration, clean line art, vibrant colors, detailed background, studio ghibli inspired"},bC={photoreal:"cartoon, illustration, painting, 3d render, plastic skin, oversaturated",portrait:"bad face, asymmetrical eyes, crossed eyes, extra teeth, plastic skin, deformed hands",product:"cluttered background, wrong shadows, floating object, messy composition",landscape:"flat lighting, dull colors, horizon tilt, oversharpened",anime:"3d render, realistic photo, western cartoon, photorealistic"},TC="photorealistic, high detail, sharp focus, professional quality, natural lighting";function AC(e){return e.trim().split(/\s+/).filter(Boolean).length<8||e.trim().length<40}function RC(e,t,n="photoreal"){const i=e.trim();if(!i)return{prompt:"",negativePrompt:""};const a=[i];n!=="none"?a.push(EC[n]):AC(i)&&a.push(TC);const s=[];return t.trim()&&s.push(t.trim()),n!=="none"&&s.push(bC[n]),{prompt:a.join(", "),negativePrompt:s.join(", ")}}function CC(e,t,n){return RC(e,n,t.style)}const Y0="A stunning princess from Kabul in red and white traditional clothing, blue eyes, brown hair, soft natural lighting, photorealistic portrait, high detail, sharp focus",jl={numInferenceSteps:20,guidanceScale:7.5,height:512,width:512},To={guidanceScale:jl.guidanceScale,numInferenceSteps:jl.numInferenceSteps,height:jl.height,width:jl.width,style:"photoreal"},co="janusgrove-settings-",Bh="janusgrove-negative-prompt",wC=[`${co}sd15`,`${co}sana`,`${co}flux`,`${co}janus`];function GS(e){return`${co}${e}`}function Zl(e,t,n){return Math.min(n,Math.max(t,e))}function DC(){if(typeof localStorage>"u")return Vo;for(const e of wC)try{const t=localStorage.getItem(e);if(!t)continue;const n=JSON.parse(t);if(typeof n.negativePrompt=="string")return n.negativePrompt}catch{}return Vo}function UC(){if(typeof localStorage>"u")return Vo;try{const e=localStorage.getItem(Bh);if(e!==null)return e;const t=DC();return localStorage.setItem(Bh,t),t}catch{return Vo}}function NC(e){typeof localStorage>"u"||localStorage.setItem(Bh,e)}function HS(e){const t=To;if(!e)return{...t};const n=Zl(Math.round(Number(e.height??t.height)),256,768),i=Zl(Math.round(Number(e.width??t.width)),256,768);return{guidanceScale:Zl(Number(e.guidanceScale??t.guidanceScale),1,20),numInferenceSteps:Zl(Math.round(Number(e.numInferenceSteps??t.numInferenceSteps)),5,50),height:n-n%64,width:i-i%64,style:e.style??t.style}}function Yf(e){if(typeof localStorage>"u")return{...To};try{const t=localStorage.getItem(GS(e));return t?HS(JSON.parse(t)):{...To}}catch{return{...To}}}function LC(e,t){typeof localStorage>"u"||localStorage.setItem(GS(e),JSON.stringify(HS(t)))}function OC(e){return{numInferenceSteps:e.numInferenceSteps,guidanceScale:e.guidanceScale,height:e.height,width:e.width}}function PC(e){return`CFG ${e.guidanceScale.toFixed(1)} · ${e.numInferenceSteps} steps`}const VS="GROVEE STDIO",kS="SD 1.5 // LOCAL INFERENCE",IC="grovee-stdio",BC=["מערכת מוכנה להפעלה...","טוען מודל יצירת תמונות מקומי...","אני ממתין להוראותיך.","SD 1.5 · WebGPU · דפדפן בלבד"];function FC(e,t=42,n=2200){const[i,a]=vt.useState(""),[s,r]=vt.useState(0),[o,l]=vt.useState(0),[c,d]=vt.useState(!1);return vt.useEffect(()=>{const h=e[s]??"",u=!c&&o===h.length,p=c&&o===0;let v=t;u?v=n:p?v=480:c&&(v=Math.max(18,t*.45));const y=window.setTimeout(()=>{if(u){d(!0);return}if(p){d(!1),r(f=>(f+1)%e.length);return}const g=c?o-1:o+1;l(g),a(h.slice(0,g))},v);return()=>window.clearTimeout(y)},[e,s,o,c,t,n]),i}function Fh(e){if(!Number.isFinite(e)||e<=0)return"0 B";const t=["B","KB","MB","GB"];let n=e,i=0;for(;n>=1024&&i<t.length-1;)n/=1024,i+=1;return`${n<10&&i>0?n.toFixed(1):Math.round(n)} ${t[i]}`}function zC(e){return!Number.isFinite(e)||e<512?"—":`${Fh(e)}/s`}const zh=54,jf=2*Math.PI*zh;function GC({percent:e,size:t=140,label:n,indeterminate:i=!1}){const a=Math.min(100,Math.max(0,e)),s=jf*(1-a/100);return V.jsxs("div",{className:`hal-ring${i?" hal-ring--indeterminate":""}`,style:{width:t,height:t},"data-testid":"download-ring","aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":100,role:"progressbar",children:[V.jsxs("svg",{viewBox:"0 0 120 120","aria-hidden":"true",children:[V.jsx("circle",{className:"hal-ring__track",cx:"60",cy:"60",r:zh}),V.jsx("circle",{className:"hal-ring__fill",cx:"60",cy:"60",r:zh,strokeDasharray:jf,strokeDashoffset:i?jf*.72:s})]}),V.jsxs("div",{className:"hal-ring__center",dir:"ltr",children:[V.jsx("span",{className:"hal-ring__pct",children:i?"…":`${Math.round(a)}%`}),n?V.jsx("span",{className:"hal-ring__label",children:n}):null]})]})}const HC=["https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/a3a3965e4fabd0cf744c37df37f79ccddc4e825648d42e2b737fe627a5e97c68.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/47c3c15382e94ea71f08c76fe4ead909a7c399df8ab9b93a3560114454c6e1de.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/7807b28d6bb324e27095c8ee7ed3e51157f4201dcd31709839c84011430cc078.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/5e33ff4597345c34fa96b63f4871e73b146a880943608ca1757158f3d1a5c71a.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/0ba4f4f5f0351bbc11e69d627b47471b37844c0e0b50debdae67b9d8c7ebc640.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/f36919370a6e4ffb31c5a9e184f360f912fba8d7e6ed03daade9e40cb566223b.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/bb2ab3a3410ce91a5425ab2c8b4cbd56335894c07537ee5258e61db0b354fd9d.png","https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/58c9db2329620a7045503ededebbd3aca6552d68992516af93be48147cd26bf6.png"],XS=10,VC=5;function kC(){const e=[],t=[];return HC.forEach((n,i)=>{i%2===0?e.push(n):t.push(n)}),{left:e,right:t}}function XC(e){return e*XS}function j0({side:e,urls:t,phaseOffsetSec:n}){const i=XC(t.length);return V.jsx("div",{className:`loading-holo-gallery__side loading-holo-gallery__side--${e}`,"aria-hidden":"true",children:V.jsx("div",{className:"loading-holo-gallery__slot",children:t.map((a,s)=>{const r=n+s*XS;return V.jsxs("div",{className:"loading-holo-gallery__frame",style:{animationDuration:`${i}s`,animationDelay:`${r}s`,"--holo-delay":`${r}s`,"--holo-duration":`${i}s`},children:[V.jsx("img",{className:"loading-holo-gallery__img",src:a,alt:"",loading:"eager",decoding:"async"}),V.jsx("span",{className:"loading-holo-gallery__glow"})]},a)})})})}function WC(){const{left:e,right:t}=kC();return V.jsxs("div",{className:"loading-holo-gallery","data-testid":"loading-holo-gallery",children:[V.jsx(j0,{side:"left",urls:e,phaseOffsetSec:0}),V.jsx(j0,{side:"right",urls:t,phaseOffsetSec:VC})]})}function qC({phase:e,modelProgress:t,aggregateProgress:n,aggregateLoaded:i,aggregateTotal:a,downloadSpeed:s,status:r,webgpu:o,onLoad:l}){const c=Xa.sd15,d=t.sd15,h=a>0?a:c.estimatedBytes,u=Math.min(100,Math.max(0,Math.round(n))),p=i>0,v=e==="loading"&&!p,y=(d==null?void 0:d.compiling)===!0,g=FC(BC),[f,m]=vt.useState(["> STANDBY"]),_=vt.useRef(""),M=vt.useMemo(()=>y?`> COMPILE: ${(d==null?void 0:d.currentFile)||"UNet"}…`:d!=null&&d.currentFile?`> FETCH: ${d.currentFile}`:r?`> ${r.toUpperCase()}`:"> STANDBY",[y,d==null?void 0:d.currentFile,r]);return vt.useEffect(()=>{e!=="loading"||M===_.current||(_.current=M,m(C=>[...C,M].slice(-6)))},[e,M]),V.jsxs("div",{className:"intro-screen hal-landing","data-testid":"intro-screen","data-phase":e,"aria-busy":e==="loading",dir:"rtl",children:[V.jsx(FS,{}),V.jsx(WC,{}),V.jsx("div",{className:"scanlines","aria-hidden":"true"}),V.jsxs("div",{className:"hal-landing__content",children:[V.jsxs("header",{className:"hal-landing__header",children:[V.jsx("p",{className:"hal-landing__eyebrow",dir:"ltr",children:kS}),V.jsx("h1",{className:"hal-landing__title",dir:"ltr",children:VS}),V.jsxs("p",{className:"hal-landing__typewriter","aria-live":"polite",children:[g,V.jsx("span",{className:"hal-cursor","aria-hidden":"true",children:"▌"})]})]}),o?null:V.jsx("p",{className:"hal-warn",role:"alert",children:"WebGPU לא זוהה — WASM עלול להיות איטי."}),e==="start"?V.jsxs("div",{className:"hal-landing__start",children:[V.jsxs("div",{className:"hal-model-chip","data-testid":"model-sd15",dir:"ltr",children:[V.jsx("span",{className:"hal-model-chip__name",children:c.label}),V.jsx("span",{className:"hal-model-chip__meta",children:c.introBlurb})]}),V.jsxs("button",{type:"button",className:"btn-hal","data-testid":"load-model",onClick:l,children:[V.jsx("span",{className:"btn-hal__shine","aria-hidden":"true"}),"INITIALIZE MODEL"]})]}):V.jsxs("div",{className:"hal-download","data-testid":"download-progress",children:[V.jsx(GC,{percent:d!=null&&d.done?100:u,indeterminate:v||y,label:y?"COMPILE":c.shortLabel}),V.jsxs("div",{className:"hal-console",dir:"ltr","data-testid":"download-bytes",children:[f.map((C,b)=>V.jsx("div",{className:"hal-console__line",children:C},`${C}-${b}`)),V.jsxs("div",{className:"hal-console__line hal-console__line--meta",children:[Fh(i)," / ",Fh(h)," · ",zC(s)]})]}),V.jsxs("div",{className:"compact-progress-row hal-download__bar","data-testid":"download-progress-sd15",children:[V.jsx("span",{className:"compact-progress-label",children:c.shortLabel}),V.jsx("div",{className:"compact-progress-track",children:V.jsx("div",{className:`compact-progress-fill${y?" compact-progress-fill--compile":""}`,style:{width:d!=null&&d.done?"100%":`${u}%`}})}),V.jsx("span",{className:"compact-progress-pct",children:d!=null&&d.done?"✓":y?"…":`${u}%`})]})]})]})]})}function YC({prompt:e,sdSettings:t,deviceLabel:n,status:i,isGenerating:a,isModelLoaded:s,settingsOpen:r,onPromptChange:o,onOpenSettings:l,onGenerate:c,onStop:d}){const h=e.trim().length>0&&!a&&s&&vC,u=Xa.sd15,p=PC(t),v=`${t.width}×${t.height}`;return V.jsxs("div",{className:"workspace-header","data-testid":"composer-bar",dir:"rtl",children:[V.jsxs("header",{className:"hal-studio-bar",children:[V.jsxs("div",{className:"hal-studio-bar__status",dir:"ltr",children:[V.jsx("span",{className:"hal-pulse-dot","aria-hidden":"true"}),V.jsx("span",{className:"hal-studio-bar__label",children:VS})]}),V.jsxs("div",{className:"hal-studio-bar__meta",dir:"ltr",children:[V.jsxs("span",{className:"hal-meta-chip",children:["MEMORY ",V.jsx("strong",{children:"OK"})]}),V.jsxs("span",{className:"hal-meta-chip",children:["MODEL ",V.jsx("strong",{children:u.shortLabel})]}),V.jsx("span",{className:"hal-meta-chip hal-meta-chip--dim",children:n||"READY"})]}),V.jsx("p",{className:"hal-studio-bar__tagline",dir:"ltr",children:kS})]}),V.jsxs("section",{className:"input-terminal",children:[V.jsx("label",{className:"input-terminal__label",htmlFor:"prompt-input",dir:"ltr",children:"ENTER PROMPT"}),V.jsxs("div",{className:"input-terminal__row",children:[V.jsx("input",{id:"prompt-input",className:"input-terminal__field",type:"text",dir:"auto",placeholder:"תיאור תמונה…","aria-label":"Image prompt",value:e,onChange:y=>o(y.target.value),onKeyDown:y=>{y.key==="Enter"&&!y.shiftKey&&(y.preventDefault(),h&&c())},disabled:a}),V.jsxs("div",{className:"input-terminal__actions",children:[V.jsx("button",{type:"button",className:`input-terminal__gear ${r?"active":""}`,"data-testid":"settings-btn","aria-label":`${u.label} settings`,title:"Settings",onClick:l,disabled:a,children:"⚙"}),a?V.jsx("button",{type:"button",className:"btn-hal btn-hal--small btn-hal--stop",onClick:d,children:"STOP"}):V.jsxs("button",{type:"button",className:"btn-hal btn-hal--small btn-hal--play","data-testid":"generate-btn",disabled:!h,onClick:c,"aria-label":"Generate image",children:[V.jsx("span",{className:"btn-hal__shine","aria-hidden":"true"}),"▶"]})]})]}),V.jsxs("div",{className:"input-terminal__meta",dir:"ltr",children:[V.jsx("span",{children:p}),V.jsxs("span",{children:["SCALE ",v]}),V.jsx("span",{className:"input-terminal__status",children:a?"GENERATING…":i}),null]})]})]})}const jC=[{id:"photoreal",label:"Photoreal"},{id:"none",label:"None"},{id:"portrait",label:"Portrait"},{id:"landscape",label:"Landscape"},{id:"product",label:"Product"},{id:"anime",label:"Anime"}];function Z0({label:e,value:t,min:n,max:i,step:a,onChange:s,hint:r}){return V.jsxs("label",{className:"settings-field",children:[V.jsxs("div",{className:"settings-field-head",children:[V.jsx("span",{children:e}),V.jsx("span",{className:"settings-field-value",dir:"ltr",children:a<1?t.toFixed(2):t})]}),V.jsx("input",{type:"range",dir:"ltr",min:n,max:i,step:a,value:t,onChange:o=>s(Number(o.target.value))}),r?V.jsx("span",{className:"settings-field-hint",children:r}):null]})}function ZC({open:e,deviceLabel:t,globalNegativePrompt:n,sdSettings:i,onClose:a,onGlobalNegativeChange:s,onSdChange:r}){if(!e)return null;const o=Xa.sd15;return V.jsx("div",{className:"settings-overlay",role:"presentation",onClick:a,children:V.jsxs("aside",{className:"settings-panel",dir:"ltr",role:"dialog","aria-labelledby":"settings-title","aria-modal":"true",onClick:l=>l.stopPropagation(),"data-testid":"settings-panel",children:[V.jsxs("header",{className:"settings-header",children:[V.jsxs("div",{children:[V.jsx("h2",{id:"settings-title",children:o.label}),V.jsx("p",{className:"settings-subtitle",children:"Generation settings"})]}),V.jsx("button",{type:"button",className:"settings-close",onClick:a,"aria-label":"Close settings",children:"×"})]}),V.jsxs("div",{className:"settings-readonly",dir:"ltr",children:[V.jsxs("div",{children:[V.jsx("span",{className:"settings-readonly-label",children:"Model ID"}),V.jsx("span",{children:o.hfId})]}),V.jsxs("div",{children:[V.jsx("span",{className:"settings-readonly-label",children:"Device"}),V.jsx("span",{children:t||"—"})]}),V.jsxs("div",{children:[V.jsx("span",{className:"settings-readonly-label",children:"Resolution"}),V.jsx("span",{children:o.resolution})]})]}),V.jsxs(V.Fragment,{children:[V.jsxs("div",{className:"settings-body",children:[V.jsx(Z0,{label:"Guidance scale (CFG)",value:i.guidanceScale,min:1,max:20,step:.5,onChange:l=>r(c=>({...c,guidanceScale:l}))}),V.jsx(Z0,{label:"Inference steps",value:i.numInferenceSteps,min:5,max:50,step:1,onChange:l=>r(c=>({...c,numInferenceSteps:Math.round(l)})),hint:"5–50 steps (subsampled from SD 1.5 schedule)"}),V.jsx("p",{className:"settings-note",children:"SD 1.5 uses native negative_prompt (separate channel)."})]}),V.jsxs("div",{className:"settings-shared",children:[V.jsx("div",{className:"style-chips",role:"group","aria-label":"Style preset",children:jC.map(l=>V.jsx("button",{type:"button",className:`style-chip ${i.style===l.id?"active":""}`,onClick:()=>r(c=>({...c,style:l.id})),children:l.label},l.id))}),V.jsxs("label",{className:"settings-field",children:[V.jsx("span",{children:"Negative prompt"}),V.jsx("p",{className:"settings-field-hint",children:"Shared preset for all generations. Clear to disable custom terms. Style may still add terms unless set to None."}),V.jsx("textarea",{className:"negative-textarea",dir:"ltr",rows:4,placeholder:"Optional custom negative terms…",value:n,onChange:l=>s(l.target.value)})]}),V.jsxs("div",{className:"settings-negative-actions",children:[V.jsx("button",{type:"button",className:"text-btn",onClick:()=>s(""),children:"Clear negative"}),V.jsx("button",{type:"button",className:"text-btn",onClick:()=>s(Vo),children:"Reset to recommended defaults"})]})]}),V.jsx("footer",{className:"settings-footer",children:V.jsx("button",{type:"button",className:"text-btn",onClick:()=>r({...To}),children:"Reset all to recommended defaults"})})]})]})})}const Kl=3;function KC({headline:e,initialSuggestions:t,onPick:n}){const[i,a]=vt.useState(()=>t??Ih(Kl)),[s,r]=vt.useState("idle"),o=vt.useRef(i),l=vt.useRef(s),c=vt.useRef(null);o.current=i,l.current=s;const d=vt.useCallback(()=>{if(l.current!=="idle")return;const h=o.current;r("exit"),window.setTimeout(()=>{a(Ih(Kl,h.map(u=>u.id))),r("enter"),window.setTimeout(()=>{r("idle")},gC(Kl))},mC(Kl))},[]);return vt.useEffect(()=>{const h=()=>{c.current=window.setTimeout(()=>{d(),h()},dC)};return h(),()=>{c.current!==null&&window.clearTimeout(c.current)}},[d]),V.jsxs("div",{className:"hal-studio-landing",dir:"rtl",children:[V.jsx("h1",{className:"hal-studio-landing__headline",children:e}),V.jsx("p",{className:"hal-studio-landing__hint",dir:"ltr",children:"QUICK PROMPTS"}),V.jsx("div",{className:"hal-studio-landing__chips","data-phase":s,"aria-live":"polite","aria-atomic":"true",children:i.map(h=>V.jsxs("button",{type:"button",className:"btn-hal btn-hal--chip hal-chip",onClick:()=>n(h.prompt),title:h.prompt,disabled:s!=="idle",children:[V.jsx("span",{className:"btn-hal__shine","aria-hidden":"true"}),V.jsx("span",{className:"hal-chip-icon","aria-hidden":"true",children:h.icon}),V.jsx("span",{className:"hal-chip-label",dir:"ltr",children:h.label})]},h.id))})]})}function QC({item:e,onRegenerate:t,onDelete:n}){const i=Xa.sd15,a=()=>{const r=document.createElement("a");r.href=e.imageUrl,r.download=`${IC}-${e.id}.png`,r.click()},s=async()=>{await navigator.clipboard.writeText(e.prompt)};return V.jsxs("article",{className:"img-card",children:[V.jsxs("div",{className:"img-card__media",children:[V.jsx("img",{src:e.imageUrl,alt:e.prompt,loading:"lazy","data-testid":"gallery-image"}),V.jsx("span",{className:"img-card__badge",dir:"ltr",children:i.shortLabel})]}),V.jsxs("div",{className:"img-card__meta",children:[V.jsx("p",{className:"img-card__prompt",dir:"auto",title:e.prompt,children:e.prompt}),V.jsxs("p",{className:"img-card__stats",dir:"ltr",children:[e.width,"×",e.height," · ",(e.durationMs/1e3).toFixed(1),"s"]}),V.jsxs("div",{className:"img-card__actions",children:[V.jsx("button",{type:"button",className:"hal-card-btn",onClick:a,children:"SAVE"}),V.jsx("button",{type:"button",className:"hal-card-btn",onClick:()=>void s(),children:"COPY"}),V.jsx("button",{type:"button",className:"hal-card-btn",onClick:()=>t(e.prompt),children:"RE-RUN"}),V.jsx("button",{type:"button",className:"hal-card-btn hal-card-btn--danger",onClick:()=>n(e.id),children:"DEL"})]})]})]})}function JC({items:e,onRegenerate:t,onDelete:n}){return e.length?V.jsxs("section",{className:"hal-gallery","aria-label":"Generated images",dir:"rtl",children:[V.jsx("h2",{className:"hal-gallery__title",dir:"ltr",children:"OUTPUT BUFFER"}),V.jsx("div",{className:"hal-gallery__grid",children:e.map(i=>V.jsx(QC,{item:i,onRegenerate:t,onDelete:n},i.id))})]}):null}function $C({progress:e,tokenCount:t,tokenTotal:n,label:i="tokens"}){const a=Math.round(e*100);return V.jsxs("div",{className:"hal-generating","aria-live":"polite","aria-busy":"true",dir:"rtl",children:[V.jsxs("p",{className:"hal-generating__title",dir:"ltr",children:["RENDERING",V.jsx("span",{className:"hal-generating__dots",children:"····"})]}),V.jsx("div",{className:"hal-generating__bar",children:V.jsx("div",{className:"hal-generating__fill",style:{width:`${a}%`}})}),V.jsxs("p",{className:"hal-generating__meta",dir:"ltr",children:[n>0?`${t} / ${n} ${i} · `:"",a,"%"]})]})}function t2(e){typeof window>"u"||(window.__janusQa=e)}const K0=typeof window<"u"&&new URLSearchParams(window.location.search).has("qa"),e2=typeof window<"u"&&new URLSearchParams(window.location.search).get("autogen")==="1",Q0=typeof window<"u"?new URLSearchParams(window.location.search).get("prompt")??Y0:Y0;function vc(){return{progress:0,loaded:0,total:Xa.sd15.estimatedBytes,downloadSpeed:0,currentFile:"",status:"Waiting…",done:!1,compiling:!1}}function n2(e,t){e(n=>{const i={...n,sd15:{...n.sd15??vc(),progress:100,done:!0,compiling:!1,status:"Ready"}};return t(i),i})}function i2(){const e=vt.useRef(null),t=vt.useRef(0),n=vt.useRef(""),i=vt.useRef("start"),a=vt.useRef(!1),s=vt.useRef(Yf("sd15")),r=vt.useRef({lastLoaded:0,lastTime:0,samples:[]}),o=vt.useRef(!1),[l,c]=vt.useState("start");i.current=l;const[d,h]=vt.useState(!1);o.current=d;const[u,p]=vt.useState(!0),[v,y]=vt.useState(""),[g,f]=vt.useState(0),[m,_]=vt.useState(0),[M,C]=vt.useState(0),[b,R]=vt.useState(0),[x,A]=vt.useState({}),[D,w]=vt.useState("Ready to load SD 1.5"),[F,Y]=vt.useState(null),[j,I]=vt.useState(""),[U,O]=vt.useState(()=>UC()),q=vt.useRef(U),[$,at]=vt.useState(()=>Yf("sd15")),[gt,yt]=vt.useState(!1);q.current=U,s.current=$;const[Lt,Gt]=vt.useState(!1),[Dt,tt]=vt.useState(0),[ft,st]=vt.useState({count:0,total:0}),[bt,Nt]=vt.useState([]),[Ct,ye]=vt.useState(!1),Xt=vt.useMemo(()=>_C(),[]),re=l==="ready"&&bt.length===0&&!Lt,oe=MC(l,d?1:0),Vt=Xa.sd15,de=vt.useCallback(B=>{const Z=B.sd15;Z&&(_(Z.loaded),C(Z.total||Xa.sd15.estimatedBytes),f(Math.min(100,Math.max(0,Z.progress))))},[]),he=vt.useCallback(()=>{i.current!=="ready"&&(c("ready"),w(`${Vt.shortLabel} ready — studio open`))},[Vt.shortLabel]),ln=vt.useCallback(B=>{n2(A,de),h(!0),o.current=!0,y(B),he()},[he,de]),L=vt.useCallback(B=>{A(Z=>{const it={...Z,sd15:{...Z.sd15??vc(),status:`Unavailable — ${B}`,done:!1,compiling:!1}};return de(it),it}),Y(B)},[de]),De=vt.useCallback(B=>{switch(B.type){case"webgpu_check":p(B.webgpu);break;case"download_progress":{const Z=B.status==="compile";A(it=>{const W=it.sd15??vc(),K={...it,sd15:{...W,loaded:B.loaded,total:B.total,progress:B.total>0?B.loaded/B.total*100:B.progress<=1?B.progress*100:B.progress,currentFile:B.file,compiling:Z,status:Z?`Compiling ${B.file||"UNet"}…`:B.file?`Downloading ${B.file}…`:W.status}};return de(K),K}),(B.file||Z)&&w(Z?"SD 1.5: compiling on WebGPU (2–5 min)…":`SD 1.5: downloading ${B.file}…`);break}case"status":w(B.text);break;case"loaded":ln(B.device);break;case"gen_progress":if(!a.current)break;tt(B.progress),st({count:B.count,total:B.total});break;case"image_ready":{if(!a.current)break;const Z=URL.createObjectURL(B.blob),it={id:crypto.randomUUID(),prompt:n.current,negativePrompt:q.current,imageUrl:Z,width:B.width,height:B.height,durationMs:performance.now()-t.current,createdAt:Date.now(),modelId:"sd15"};Nt(W=>[it,...W]),a.current=!1,Gt(!1),tt(0),w("Image ready");break}case"aborted":a.current&&(a.current=!1,Gt(!1),tt(0),w("Generation stopped"));break;case"error":a.current&&(a.current=!1,Gt(!1)),i.current==="loading"&&!o.current?L(B.error):Y(`SD 1.5: ${B.error}`);break}},[L,ln,de]),Wt=vt.useRef(De);Wt.current=De;const $t=vt.useCallback(()=>{if(e.current)return e.current;const B=fC({onMessage:Z=>Wt.current(Z)});return e.current=B,eo(B,{type:"check_webgpu"}),B},[]);vt.useEffect(()=>{const B=$t();return eo(B,{type:"check_webgpu"}),()=>{var Z;(Z=e.current)==null||Z.terminate(),e.current=null}},[$t]);const ut=vt.useCallback(()=>{Y(null),c("loading"),h(!1),o.current=!1,f(0),_(0),C(SC()),R(0),r.current={lastLoaded:0,lastTime:0,samples:[]};const B={sd15:vc()};A(B),de(B),w("Preparing download…"),$t(),eo(e.current,{type:"load"})},[$t,de]);vt.useEffect(()=>{if(l!=="loading"&&l!=="ready"||m<=0)return;const B=performance.now(),Z=r.current;if(Z.lastTime>0&&m>Z.lastLoaded){const it=(B-Z.lastTime)/1e3;if(it>=.4){const W=(m-Z.lastLoaded)/it,K=[...Z.samples,W].slice(-6);R(K.reduce((ht,xt)=>ht+xt,0)/K.length),r.current={lastLoaded:m,lastTime:B,samples:K};return}}Z.lastTime===0&&(r.current={...Z,lastLoaded:m,lastTime:B})},[m,l]);const ve=vt.useCallback(B=>{if(!B.trim()||!o.current){o.current||Y("SD 1.5 is not loaded yet");return}n.current=B,Y(null),a.current=!0,Gt(!0),tt(0),st({count:0,total:0}),t.current=performance.now(),w("Generating…");const Z=s.current,it=q.current,{prompt:W,negativePrompt:K}=CC(B,Z,it);eo($t(),{type:"generate_image",prompt:W,negativePrompt:K,generation:OC(Z)})},[$t]),T=vt.useCallback(B=>{q.current=B,O(B),NC(B)},[]),S=vt.useCallback(B=>{at(Z=>{const it=typeof B=="function"?B(Z):B;LC("sd15",it);const W=Yf("sd15");return s.current=W,W})},[]);vt.useEffect(()=>{var B,Z;t2({phase:l,webgpu:u,deviceLabel:v,loadedBytes:m,totalBytes:M,progress:g,status:D,isGenerating:Lt,galleryCount:bt.length,lastImageWidth:((B=bt[0])==null?void 0:B.width)??0,lastImageHeight:((Z=bt[0])==null?void 0:Z.height)??0,error:F})},[l,u,v,m,M,g,D,Lt,bt,F]),vt.useEffect(()=>{yC(l,d?[xC]:[])&&he()},[l,d,he]),vt.useEffect(()=>{if(oe){ye(!1);return}const B=requestAnimationFrame(()=>ye(!0));return()=>cancelAnimationFrame(B)},[oe]),vt.useEffect(()=>{if(!K0||l!=="start")return;const B=window.setTimeout(()=>ut(),400);return()=>window.clearTimeout(B)},[l,ut]),vt.useEffect(()=>{if(!K0||!e2||l!=="ready"||Lt||bt.length>0)return;I(Q0);const B=window.setTimeout(()=>ve(Q0),300);return()=>window.clearTimeout(B)},[l,Lt,bt.length,ve]);const G=()=>{eo($t(),{type:"abort"})},J=B=>{Nt(Z=>{const it=Z.find(W=>W.id===B);return it&&URL.revokeObjectURL(it.imageUrl),Z.filter(W=>W.id!==B)})};return oe?V.jsxs("main",{className:"app hal-app","data-testid":"app-root","data-phase":l,dir:"rtl",children:[V.jsx(qC,{phase:l==="loading"?"loading":"start",modelProgress:x,aggregateProgress:g,aggregateLoaded:m,aggregateTotal:M,downloadSpeed:b,status:D,webgpu:u,onLoad:ut}),F?V.jsx("div",{className:"error-banner",role:"alert",children:F}):null]}):V.jsxs("main",{className:`app app--studio workspace hal-app${Ct?" workspace--visible":""}`,"data-testid":"app-studio","data-phase":"ready",dir:"rtl",children:[V.jsx(FS,{}),V.jsx("div",{className:"scanlines","aria-hidden":"true"}),V.jsx(YC,{prompt:j,sdSettings:$,deviceLabel:v,status:D,isGenerating:Lt,isModelLoaded:d,settingsOpen:gt,onPromptChange:I,onOpenSettings:()=>yt(B=>!B),onGenerate:()=>ve(j),onStop:G}),V.jsxs("div",{className:"studio-body",children:[Lt?V.jsx($C,{progress:Dt,tokenCount:ft.count,tokenTotal:ft.total,label:"steps"}):null,re?V.jsx(KC,{headline:Xt.headline,initialSuggestions:Xt.suggestions,onPick:B=>I(B)}):null,V.jsx(JC,{items:bt,onRegenerate:B=>{I(B),ve(B)},onDelete:J})]}),V.jsx(ZC,{open:gt,deviceLabel:v,globalNegativePrompt:U,sdSettings:$,onClose:()=>yt(!1),onGlobalNegativeChange:T,onSdChange:S}),F?V.jsxs("div",{className:"error-banner error-banner--studio",role:"alert",children:[F,V.jsx("button",{type:"button",onClick:()=>Y(null),children:"×"})]}):null]})}ZE.createRoot(document.getElementById("root")).render(V.jsx(vt.StrictMode,{children:V.jsx(i2,{})}));
