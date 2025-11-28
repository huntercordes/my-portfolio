(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function cS(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Oh={exports:{}},Jo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hx;function uS(){if(hx)return Jo;hx=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var f in o)f!=="key"&&(l[f]=o[f])}else l=o;return o=l.ref,{$$typeof:i,type:r,key:u,ref:o!==void 0?o:null,props:l}}return Jo.Fragment=e,Jo.jsx=t,Jo.jsxs=t,Jo}var dx;function e_(){return dx||(dx=1,Oh.exports=uS()),Oh.exports}var G=e_(),Ph={exports:{}},ht={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var px;function fS(){if(px)return ht;px=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,M={};function S(O,re,Se){this.props=O,this.context=re,this.refs=M,this.updater=Se||y}S.prototype.isReactComponent={},S.prototype.setState=function(O,re){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,re,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _(){}_.prototype=S.prototype;function w(O,re,Se){this.props=O,this.context=re,this.refs=M,this.updater=Se||y}var A=w.prototype=new _;A.constructor=w,b(A,S.prototype),A.isPureReactComponent=!0;var L=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},N=Object.prototype.hasOwnProperty;function F(O,re,Se,Me,De,We){return Se=We.ref,{$$typeof:i,type:O,key:re,ref:Se!==void 0?Se:null,props:We}}function q(O,re){return F(O.type,re,void 0,void 0,void 0,O.props)}function D(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function C(O){var re={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Se){return re[Se]})}var H=/\/+/g;function j(O,re){return typeof O=="object"&&O!==null&&O.key!=null?C(""+O.key):re.toString(36)}function ne(){}function ee(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(ne,ne):(O.status="pending",O.then(function(re){O.status==="pending"&&(O.status="fulfilled",O.value=re)},function(re){O.status==="pending"&&(O.status="rejected",O.reason=re)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function K(O,re,Se,Me,De){var We=typeof O;(We==="undefined"||We==="boolean")&&(O=null);var ae=!1;if(O===null)ae=!0;else switch(We){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(O.$$typeof){case i:case e:ae=!0;break;case g:return ae=O._init,K(ae(O._payload),re,Se,Me,De)}}if(ae)return De=De(O),ae=Me===""?"."+j(O,0):Me,L(De)?(Se="",ae!=null&&(Se=ae.replace(H,"$&/")+"/"),K(De,re,Se,"",function(qe){return qe})):De!=null&&(D(De)&&(De=q(De,Se+(De.key==null||O&&O.key===De.key?"":(""+De.key).replace(H,"$&/")+"/")+ae)),re.push(De)),1;ae=0;var ge=Me===""?".":Me+":";if(L(O))for(var be=0;be<O.length;be++)Me=O[be],We=ge+j(Me,be),ae+=K(Me,re,Se,We,De);else if(be=v(O),typeof be=="function")for(O=be.call(O),be=0;!(Me=O.next()).done;)Me=Me.value,We=ge+j(Me,be++),ae+=K(Me,re,Se,We,De);else if(We==="object"){if(typeof O.then=="function")return K(ee(O),re,Se,Me,De);throw re=String(O),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.")}return ae}function I(O,re,Se){if(O==null)return O;var Me=[],De=0;return K(O,Me,"","",function(We){return re.call(Se,We,De++)}),Me}function W(O){if(O._status===-1){var re=O._result;re=re(),re.then(function(Se){(O._status===0||O._status===-1)&&(O._status=1,O._result=Se)},function(Se){(O._status===0||O._status===-1)&&(O._status=2,O._result=Se)}),O._status===-1&&(O._status=0,O._result=re)}if(O._status===1)return O._result.default;throw O._result}var Y=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var re=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(re))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function pe(){}return ht.Children={map:I,forEach:function(O,re,Se){I(O,function(){re.apply(this,arguments)},Se)},count:function(O){var re=0;return I(O,function(){re++}),re},toArray:function(O){return I(O,function(re){return re})||[]},only:function(O){if(!D(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ht.Component=S,ht.Fragment=t,ht.Profiler=o,ht.PureComponent=w,ht.StrictMode=r,ht.Suspense=d,ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ht.__COMPILER_RUNTIME={__proto__:null,c:function(O){return P.H.useMemoCache(O)}},ht.cache=function(O){return function(){return O.apply(null,arguments)}},ht.cloneElement=function(O,re,Se){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Me=b({},O.props),De=O.key,We=void 0;if(re!=null)for(ae in re.ref!==void 0&&(We=void 0),re.key!==void 0&&(De=""+re.key),re)!N.call(re,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&re.ref===void 0||(Me[ae]=re[ae]);var ae=arguments.length-2;if(ae===1)Me.children=Se;else if(1<ae){for(var ge=Array(ae),be=0;be<ae;be++)ge[be]=arguments[be+2];Me.children=ge}return F(O.type,De,void 0,void 0,We,Me)},ht.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:l,_context:O},O},ht.createElement=function(O,re,Se){var Me,De={},We=null;if(re!=null)for(Me in re.key!==void 0&&(We=""+re.key),re)N.call(re,Me)&&Me!=="key"&&Me!=="__self"&&Me!=="__source"&&(De[Me]=re[Me]);var ae=arguments.length-2;if(ae===1)De.children=Se;else if(1<ae){for(var ge=Array(ae),be=0;be<ae;be++)ge[be]=arguments[be+2];De.children=ge}if(O&&O.defaultProps)for(Me in ae=O.defaultProps,ae)De[Me]===void 0&&(De[Me]=ae[Me]);return F(O,We,void 0,void 0,null,De)},ht.createRef=function(){return{current:null}},ht.forwardRef=function(O){return{$$typeof:f,render:O}},ht.isValidElement=D,ht.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:W}},ht.memo=function(O,re){return{$$typeof:p,type:O,compare:re===void 0?null:re}},ht.startTransition=function(O){var re=P.T,Se={};P.T=Se;try{var Me=O(),De=P.S;De!==null&&De(Se,Me),typeof Me=="object"&&Me!==null&&typeof Me.then=="function"&&Me.then(pe,Y)}catch(We){Y(We)}finally{P.T=re}},ht.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ht.use=function(O){return P.H.use(O)},ht.useActionState=function(O,re,Se){return P.H.useActionState(O,re,Se)},ht.useCallback=function(O,re){return P.H.useCallback(O,re)},ht.useContext=function(O){return P.H.useContext(O)},ht.useDebugValue=function(){},ht.useDeferredValue=function(O,re){return P.H.useDeferredValue(O,re)},ht.useEffect=function(O,re,Se){var Me=P.H;if(typeof Se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Me.useEffect(O,re)},ht.useId=function(){return P.H.useId()},ht.useImperativeHandle=function(O,re,Se){return P.H.useImperativeHandle(O,re,Se)},ht.useInsertionEffect=function(O,re){return P.H.useInsertionEffect(O,re)},ht.useLayoutEffect=function(O,re){return P.H.useLayoutEffect(O,re)},ht.useMemo=function(O,re){return P.H.useMemo(O,re)},ht.useOptimistic=function(O,re){return P.H.useOptimistic(O,re)},ht.useReducer=function(O,re,Se){return P.H.useReducer(O,re,Se)},ht.useRef=function(O){return P.H.useRef(O)},ht.useState=function(O){return P.H.useState(O)},ht.useSyncExternalStore=function(O,re,Se){return P.H.useSyncExternalStore(O,re,Se)},ht.useTransition=function(){return P.H.useTransition()},ht.version="19.1.1",ht}var mx;function Mu(){return mx||(mx=1,Ph.exports=fS()),Ph.exports}var ue=Mu();const lr=cS(ue);var Bh={exports:{}},el={},Ih={exports:{}},Fh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gx;function hS(){return gx||(gx=1,(function(i){function e(I,W){var Y=I.length;I.push(W);e:for(;0<Y;){var pe=Y-1>>>1,O=I[pe];if(0<o(O,W))I[pe]=W,I[Y]=O,Y=pe;else break e}}function t(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var W=I[0],Y=I.pop();if(Y!==W){I[0]=Y;e:for(var pe=0,O=I.length,re=O>>>1;pe<re;){var Se=2*(pe+1)-1,Me=I[Se],De=Se+1,We=I[De];if(0>o(Me,Y))De<O&&0>o(We,Me)?(I[pe]=We,I[De]=Y,pe=De):(I[pe]=Me,I[Se]=Y,pe=Se);else if(De<O&&0>o(We,Y))I[pe]=We,I[De]=Y,pe=De;else break e}}return W}function o(I,W){var Y=I.sortIndex-W.sortIndex;return Y!==0?Y:I.id-W.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();i.unstable_now=function(){return u.now()-f}}var d=[],p=[],g=1,x=null,v=3,y=!1,b=!1,M=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function L(I){for(var W=t(p);W!==null;){if(W.callback===null)r(p);else if(W.startTime<=I)r(p),W.sortIndex=W.expirationTime,e(d,W);else break;W=t(p)}}function P(I){if(M=!1,L(I),!b)if(t(d)!==null)b=!0,N||(N=!0,j());else{var W=t(p);W!==null&&K(P,W.startTime-I)}}var N=!1,F=-1,q=5,D=-1;function C(){return S?!0:!(i.unstable_now()-D<q)}function H(){if(S=!1,N){var I=i.unstable_now();D=I;var W=!0;try{e:{b=!1,M&&(M=!1,w(F),F=-1),y=!0;var Y=v;try{t:{for(L(I),x=t(d);x!==null&&!(x.expirationTime>I&&C());){var pe=x.callback;if(typeof pe=="function"){x.callback=null,v=x.priorityLevel;var O=pe(x.expirationTime<=I);if(I=i.unstable_now(),typeof O=="function"){x.callback=O,L(I),W=!0;break t}x===t(d)&&r(d),L(I)}else r(d);x=t(d)}if(x!==null)W=!0;else{var re=t(p);re!==null&&K(P,re.startTime-I),W=!1}}break e}finally{x=null,v=Y,y=!1}W=void 0}}finally{W?j():N=!1}}}var j;if(typeof A=="function")j=function(){A(H)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,ee=ne.port2;ne.port1.onmessage=H,j=function(){ee.postMessage(null)}}else j=function(){_(H,0)};function K(I,W){F=_(function(){I(i.unstable_now())},W)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(I){I.callback=null},i.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<I?Math.floor(1e3/I):5},i.unstable_getCurrentPriorityLevel=function(){return v},i.unstable_next=function(I){switch(v){case 1:case 2:case 3:var W=3;break;default:W=v}var Y=v;v=W;try{return I()}finally{v=Y}},i.unstable_requestPaint=function(){S=!0},i.unstable_runWithPriority=function(I,W){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Y=v;v=I;try{return W()}finally{v=Y}},i.unstable_scheduleCallback=function(I,W,Y){var pe=i.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?pe+Y:pe):Y=pe,I){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=Y+O,I={id:g++,callback:W,priorityLevel:I,startTime:Y,expirationTime:O,sortIndex:-1},Y>pe?(I.sortIndex=Y,e(p,I),t(d)===null&&I===t(p)&&(M?(w(F),F=-1):M=!0,K(P,Y-pe))):(I.sortIndex=O,e(d,I),b||y||(b=!0,N||(N=!0,j()))),I},i.unstable_shouldYield=C,i.unstable_wrapCallback=function(I){var W=v;return function(){var Y=v;v=W;try{return I.apply(this,arguments)}finally{v=Y}}}})(Fh)),Fh}var xx;function dS(){return xx||(xx=1,Ih.exports=hS()),Ih.exports}var zh={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vx;function pS(){if(vx)return In;vx=1;var i=Mu();function e(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var r={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(d,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:x==null?null:""+x,children:d,containerInfo:p,implementation:g}}var u=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,In.createPortal=function(d,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return l(d,p,null,g)},In.flushSync=function(d){var p=u.T,g=r.p;try{if(u.T=null,r.p=2,d)return d()}finally{u.T=p,r.p=g,r.d.f()}},In.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(d,p))},In.prefetchDNS=function(d){typeof d=="string"&&r.d.D(d)},In.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var g=p.as,x=f(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:y}):g==="script"&&r.d.X(d,{crossOrigin:x,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},In.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);r.d.M(d,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(d)},In.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=f(g,p.crossOrigin);r.d.L(d,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},In.preloadModule=function(d,p){if(typeof d=="string")if(p){var g=f(p.as,p.crossOrigin);r.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(d)},In.requestFormReset=function(d){r.d.r(d)},In.unstable_batchedUpdates=function(d,p){return d(p)},In.useFormState=function(d,p,g){return u.H.useFormState(d,p,g)},In.useFormStatus=function(){return u.H.useHostTransitionStatus()},In.version="19.1.1",In}var _x;function mS(){if(_x)return zh.exports;_x=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),zh.exports=pS(),zh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yx;function gS(){if(yx)return el;yx=1;var i=dS(),e=Mu(),t=mS();function r(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)a+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var a=n,s=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(s=a.return),n=a.return;while(n)}return a.tag===3?s:null}function u(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function f(n){if(l(n)!==n)throw Error(r(188))}function d(n){var a=n.alternate;if(!a){if(a=l(n),a===null)throw Error(r(188));return a!==n?null:n}for(var s=n,c=a;;){var h=s.return;if(h===null)break;var m=h.alternate;if(m===null){if(c=h.return,c!==null){s=c;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===s)return f(h),n;if(m===c)return f(h),a;m=m.sibling}throw Error(r(188))}if(s.return!==c.return)s=h,c=m;else{for(var E=!1,R=h.child;R;){if(R===s){E=!0,s=h,c=m;break}if(R===c){E=!0,c=h,s=m;break}R=R.sibling}if(!E){for(R=m.child;R;){if(R===s){E=!0,s=m,c=h;break}if(R===c){E=!0,c=m,s=h;break}R=R.sibling}if(!E)throw Error(r(189))}}if(s.alternate!==c)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?n:a}function p(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=p(n),a!==null)return a;n=n.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),A=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function j(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Symbol.for("react.client.reference");function ee(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===ne?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case b:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case N:return"SuspenseList";case D:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case y:return"Portal";case A:return(n.displayName||"Context")+".Provider";case w:return(n._context.displayName||"Context")+".Consumer";case L:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case F:return a=n.displayName||null,a!==null?a:ee(n.type)||"Memo";case q:a=n._payload,n=n._init;try{return ee(n(a))}catch{}}return null}var K=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},pe=[],O=-1;function re(n){return{current:n}}function Se(n){0>O||(n.current=pe[O],pe[O]=null,O--)}function Me(n,a){O++,pe[O]=n.current,n.current=a}var De=re(null),We=re(null),ae=re(null),ge=re(null);function be(n,a){switch(Me(ae,a),Me(We,n),Me(De,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?Hg(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=Hg(a),n=Gg(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Se(De),Me(De,n)}function qe(){Se(De),Se(We),Se(ae)}function Xe(n){n.memoizedState!==null&&Me(ge,n);var a=De.current,s=Gg(a,n.type);a!==s&&(Me(We,n),Me(De,s))}function ct(n){We.current===n&&(Se(De),Se(We)),ge.current===n&&(Se(ge),Yo._currentValue=Y)}var Qt=Object.prototype.hasOwnProperty,ut=i.unstable_scheduleCallback,Rt=i.unstable_cancelCallback,V=i.unstable_shouldYield,He=i.unstable_requestPaint,Fe=i.unstable_now,gt=i.unstable_getCurrentPriorityLevel,Pe=i.unstable_ImmediatePriority,Ot=i.unstable_UserBlockingPriority,je=i.unstable_NormalPriority,lt=i.unstable_LowPriority,B=i.unstable_IdlePriority,T=i.log,ie=i.unstable_setDisableYieldValue,me=null,ve=null;function fe(n){if(typeof T=="function"&&ie(n),ve&&typeof ve.setStrictMode=="function")try{ve.setStrictMode(me,n)}catch{}}var Ie=Math.clz32?Math.clz32:Ye,Le=Math.log,tt=Math.LN2;function Ye(n){return n>>>=0,n===0?32:31-(Le(n)/tt|0)|0}var Ee=256,Re=4194304;function Qe(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function et(n,a,s){var c=n.pendingLanes;if(c===0)return 0;var h=0,m=n.suspendedLanes,E=n.pingedLanes;n=n.warmLanes;var R=c&134217727;return R!==0?(c=R&~m,c!==0?h=Qe(c):(E&=R,E!==0?h=Qe(E):s||(s=R&~n,s!==0&&(h=Qe(s))))):(R=c&~m,R!==0?h=Qe(R):E!==0?h=Qe(E):s||(s=c&~n,s!==0&&(h=Qe(s)))),h===0?0:a!==0&&a!==h&&(a&m)===0&&(m=h&-h,s=a&-a,m>=s||m===32&&(s&4194048)!==0)?a:h}function Be(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function rt(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var n=Ee;return Ee<<=1,(Ee&4194048)===0&&(Ee=256),n}function Ne(){var n=Re;return Re<<=1,(Re&62914560)===0&&(Re=4194304),n}function Ce(n){for(var a=[],s=0;31>s;s++)a.push(n);return a}function we(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Te(n,a,s,c,h,m){var E=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var R=n.entanglements,z=n.expirationTimes,te=n.hiddenUpdates;for(s=E&~s;0<s;){var de=31-Ie(s),_e=1<<de;R[de]=0,z[de]=-1;var se=te[de];if(se!==null)for(te[de]=null,de=0;de<se.length;de++){var oe=se[de];oe!==null&&(oe.lane&=-536870913)}s&=~_e}c!==0&&ye(n,c,0),m!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=m&~(E&~a))}function ye(n,a,s){n.pendingLanes|=a,n.suspendedLanes&=~a;var c=31-Ie(a);n.entangledLanes|=a,n.entanglements[c]=n.entanglements[c]|1073741824|s&4194090}function Ve(n,a){var s=n.entangledLanes|=a;for(n=n.entanglements;s;){var c=31-Ie(s),h=1<<c;h&a|n[c]&a&&(n[c]|=a),s&=~h}}function st(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Bt(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Ut(){var n=W.p;return n!==0?n:(n=window.event,n===void 0?32:sx(n.type))}function fi(n,a){var s=W.p;try{return W.p=n,a()}finally{W.p=s}}var fn=Math.random().toString(36).slice(2),Mn="__reactFiber$"+fn,Un="__reactProps$"+fn,Yi="__reactContainer$"+fn,bi="__reactEvents$"+fn,io="__reactListeners$"+fn,Al="__reactHandles$"+fn,ao="__reactResources$"+fn,Pi="__reactMarker$"+fn;function Kr(n){delete n[Mn],delete n[Un],delete n[bi],delete n[io],delete n[Al]}function Mi(n){var a=n[Mn];if(a)return a;for(var s=n.parentNode;s;){if(a=s[Yi]||s[Mn]){if(s=a.alternate,a.child!==null||s!==null&&s.child!==null)for(n=Wg(n);n!==null;){if(s=n[Mn])return s;n=Wg(n)}return a}n=s,s=n.parentNode}return null}function Zi(n){if(n=n[Mn]||n[Yi]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function Ra(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(r(33))}function wa(n){var a=n[ao];return a||(a=n[ao]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function hn(n){n[Pi]=!0}var Rl=new Set,wl={};function Ki(n,a){Ca(n,a),Ca(n+"Capture",a)}function Ca(n,a){for(wl[n]=a,n=0;n<a.length;n++)Rl.add(a[n])}var U=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Q={},le={};function ce(n){return Qt.call(le,n)?!0:Qt.call(Q,n)?!1:U.test(n)?le[n]=!0:(Q[n]=!0,!1)}function $(n,a,s){if(ce(a))if(s===null)n.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var c=a.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+s)}}function Ae(n,a,s){if(s===null)n.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+s)}}function Ue(n,a,s,c){if(c===null)n.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(a,s,""+c)}}var Ge,ze;function $e(n){if(Ge===void 0)try{throw Error()}catch(s){var a=s.stack.trim().match(/\n( *(at )?)/);Ge=a&&a[1]||"",ze=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ge+n+ze}var nt=!1;function Ze(n,a){if(!n||nt)return"";nt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(a){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(oe){var se=oe}Reflect.construct(n,[],_e)}else{try{_e.call()}catch(oe){se=oe}n.call(_e.prototype)}}else{try{throw Error()}catch(oe){se=oe}(_e=n())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(oe){if(oe&&se&&typeof oe.stack=="string")return[oe.stack,se.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),E=m[0],R=m[1];if(E&&R){var z=E.split(`
`),te=R.split(`
`);for(h=c=0;c<z.length&&!z[c].includes("DetermineComponentFrameRoot");)c++;for(;h<te.length&&!te[h].includes("DetermineComponentFrameRoot");)h++;if(c===z.length||h===te.length)for(c=z.length-1,h=te.length-1;1<=c&&0<=h&&z[c]!==te[h];)h--;for(;1<=c&&0<=h;c--,h--)if(z[c]!==te[h]){if(c!==1||h!==1)do if(c--,h--,0>h||z[c]!==te[h]){var de=`
`+z[c].replace(" at new "," at ");return n.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",n.displayName)),de}while(1<=c&&0<=h);break}}}finally{nt=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?$e(s):""}function xt(n){switch(n.tag){case 26:case 27:case 5:return $e(n.type);case 16:return $e("Lazy");case 13:return $e("Suspense");case 19:return $e("SuspenseList");case 0:case 15:return Ze(n.type,!1);case 11:return Ze(n.type.render,!1);case 1:return Ze(n.type,!0);case 31:return $e("Activity");default:return""}}function Nt(n){try{var a="";do a+=xt(n),n=n.return;while(n);return a}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Mt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Yt(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function It(n){var a=Yt(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),c=""+n[a];if(!n.hasOwnProperty(a)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,m=s.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return h.call(this)},set:function(E){c=""+E,m.call(this,E)}}),Object.defineProperty(n,a,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function Je(n){n._valueTracker||(n._valueTracker=It(n))}function qt(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var s=a.getValue(),c="";return n&&(c=Yt(n)?n.checked?"true":"false":n.value),n=c,n!==s?(a.setValue(n),!0):!1}function yt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Hn=/[\n"\\]/g;function xn(n){return n.replace(Hn,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Nn(n,a,s,c,h,m,E,R){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),a!=null?E==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+Mt(a)):n.value!==""+Mt(a)&&(n.value=""+Mt(a)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),a!=null?Xt(n,E,Mt(a)):s!=null?Xt(n,E,Mt(s)):c!=null&&n.removeAttribute("value"),h==null&&m!=null&&(n.defaultChecked=!!m),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?n.name=""+Mt(R):n.removeAttribute("name")}function Da(n,a,s,c,h,m,E,R){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),a!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||a!=null))return;s=s!=null?""+Mt(s):"",a=a!=null?""+Mt(a):s,R||a===n.value||(n.value=a),n.defaultValue=a}c=c??h,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=R?n.checked:!!c,n.defaultChecked=!!c,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E)}function Xt(n,a,s){a==="number"&&yt(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function nn(n,a,s,c){if(n=n.options,a){a={};for(var h=0;h<s.length;h++)a["$"+s[h]]=!0;for(s=0;s<n.length;s++)h=a.hasOwnProperty("$"+n[s].value),n[s].selected!==h&&(n[s].selected=h),h&&c&&(n[s].defaultSelected=!0)}else{for(s=""+Mt(s),a=null,h=0;h<n.length;h++){if(n[h].value===s){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}a!==null||n[h].disabled||(a=n[h])}a!==null&&(a.selected=!0)}}function Gn(n,a,s){if(a!=null&&(a=""+Mt(a),a!==n.value&&(n.value=a),s==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=s!=null?""+Mt(s):""}function En(n,a,s,c){if(a==null){if(c!=null){if(s!=null)throw Error(r(92));if(K(c)){if(1<c.length)throw Error(r(93));c=c[0]}s=c}s==null&&(s=""),a=s}s=Mt(a),n.defaultValue=s,c=n.textContent,c===s&&c!==""&&c!==null&&(n.value=c)}function an(n,a){if(a){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=a;return}}n.textContent=a}var ro=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bi(n,a,s){var c=a.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":c?n.setProperty(a,s):typeof s!="number"||s===0||ro.has(a)?a==="float"?n.cssFloat=s:n[a]=(""+s).trim():n[a]=s+"px"}function Gp(n,a,s){if(a!=null&&typeof a!="object")throw Error(r(62));if(n=n.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||a!=null&&a.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var h in a)c=a[h],a.hasOwnProperty(h)&&s[h]!==c&&Bi(n,h,c)}else for(var m in a)a.hasOwnProperty(m)&&Bi(n,m,a[m])}function Nu(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ly=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cl(n){return ly.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Lu=null;function Ou(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Qr=null,$r=null;function Vp(n){var a=Zi(n);if(a&&(n=a.stateNode)){var s=n[Un]||null;e:switch(n=a.stateNode,a.type){case"input":if(Nn(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),a=s.name,s.type==="radio"&&a!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+xn(""+a)+'"][type="radio"]'),a=0;a<s.length;a++){var c=s[a];if(c!==n&&c.form===n.form){var h=c[Un]||null;if(!h)throw Error(r(90));Nn(c,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(a=0;a<s.length;a++)c=s[a],c.form===n.form&&qt(c)}break e;case"textarea":Gn(n,s.value,s.defaultValue);break e;case"select":a=s.value,a!=null&&nn(n,!!s.multiple,a,!1)}}}var Pu=!1;function kp(n,a,s){if(Pu)return n(a,s);Pu=!0;try{var c=n(a);return c}finally{if(Pu=!1,(Qr!==null||$r!==null)&&(pc(),Qr&&(a=Qr,n=$r,$r=Qr=null,Vp(a),n)))for(a=0;a<n.length;a++)Vp(n[a])}}function so(n,a){var s=n.stateNode;if(s===null)return null;var c=s[Un]||null;if(c===null)return null;s=c[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(r(231,a,typeof s));return s}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bu=!1;if(Qi)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){Bu=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{Bu=!1}var Ua=null,Iu=null,Dl=null;function Xp(){if(Dl)return Dl;var n,a=Iu,s=a.length,c,h="value"in Ua?Ua.value:Ua.textContent,m=h.length;for(n=0;n<s&&a[n]===h[n];n++);var E=s-n;for(c=1;c<=E&&a[s-c]===h[m-c];c++);return Dl=h.slice(n,1<c?1-c:void 0)}function Ul(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function Nl(){return!0}function Wp(){return!1}function Xn(n){function a(s,c,h,m,E){this._reactName=s,this._targetInst=h,this.type=c,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var R in n)n.hasOwnProperty(R)&&(s=n[R],this[R]=s?s(m):m[R]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Nl:Wp,this.isPropagationStopped=Wp,this}return g(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Nl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Nl)},persist:function(){},isPersistent:Nl}),a}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ll=Xn(mr),lo=g({},mr,{view:0,detail:0}),cy=Xn(lo),Fu,zu,co,Ol=g({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==co&&(co&&n.type==="mousemove"?(Fu=n.screenX-co.screenX,zu=n.screenY-co.screenY):zu=Fu=0,co=n),Fu)},movementY:function(n){return"movementY"in n?n.movementY:zu}}),qp=Xn(Ol),uy=g({},Ol,{dataTransfer:0}),fy=Xn(uy),hy=g({},lo,{relatedTarget:0}),Hu=Xn(hy),dy=g({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),py=Xn(dy),my=g({},mr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),gy=Xn(my),xy=g({},mr,{data:0}),jp=Xn(xy),vy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_y={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sy(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=yy[n])?!!a[n]:!1}function Gu(){return Sy}var by=g({},lo,{key:function(n){if(n.key){var a=vy[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=Ul(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?_y[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gu,charCode:function(n){return n.type==="keypress"?Ul(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ul(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),My=Xn(by),Ey=g({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yp=Xn(Ey),Ty=g({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gu}),Ay=Xn(Ty),Ry=g({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),wy=Xn(Ry),Cy=g({},Ol,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Dy=Xn(Cy),Uy=g({},mr,{newState:0,oldState:0}),Ny=Xn(Uy),Ly=[9,13,27,32],Vu=Qi&&"CompositionEvent"in window,uo=null;Qi&&"documentMode"in document&&(uo=document.documentMode);var Oy=Qi&&"TextEvent"in window&&!uo,Zp=Qi&&(!Vu||uo&&8<uo&&11>=uo),Kp=" ",Qp=!1;function $p(n,a){switch(n){case"keyup":return Ly.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Jr=!1;function Py(n,a){switch(n){case"compositionend":return Jp(a);case"keypress":return a.which!==32?null:(Qp=!0,Kp);case"textInput":return n=a.data,n===Kp&&Qp?null:n;default:return null}}function By(n,a){if(Jr)return n==="compositionend"||!Vu&&$p(n,a)?(n=Xp(),Dl=Iu=Ua=null,Jr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Zp&&a.locale!=="ko"?null:a.data;default:return null}}var Iy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function em(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!Iy[n.type]:a==="textarea"}function tm(n,a,s,c){Qr?$r?$r.push(c):$r=[c]:Qr=c,a=yc(a,"onChange"),0<a.length&&(s=new Ll("onChange","change",null,s,c),n.push({event:s,listeners:a}))}var fo=null,ho=null;function Fy(n){Pg(n,0)}function Pl(n){var a=Ra(n);if(qt(a))return n}function nm(n,a){if(n==="change")return a}var im=!1;if(Qi){var ku;if(Qi){var Xu="oninput"in document;if(!Xu){var am=document.createElement("div");am.setAttribute("oninput","return;"),Xu=typeof am.oninput=="function"}ku=Xu}else ku=!1;im=ku&&(!document.documentMode||9<document.documentMode)}function rm(){fo&&(fo.detachEvent("onpropertychange",sm),ho=fo=null)}function sm(n){if(n.propertyName==="value"&&Pl(ho)){var a=[];tm(a,ho,n,Ou(n)),kp(Fy,a)}}function zy(n,a,s){n==="focusin"?(rm(),fo=a,ho=s,fo.attachEvent("onpropertychange",sm)):n==="focusout"&&rm()}function Hy(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Pl(ho)}function Gy(n,a){if(n==="click")return Pl(a)}function Vy(n,a){if(n==="input"||n==="change")return Pl(a)}function ky(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var Qn=typeof Object.is=="function"?Object.is:ky;function po(n,a){if(Qn(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var s=Object.keys(n),c=Object.keys(a);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var h=s[c];if(!Qt.call(a,h)||!Qn(n[h],a[h]))return!1}return!0}function om(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function lm(n,a){var s=om(n);n=0;for(var c;s;){if(s.nodeType===3){if(c=n+s.textContent.length,n<=a&&c>=a)return{node:s,offset:a-n};n=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=om(s)}}function cm(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?cm(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function um(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=yt(n.document);a instanceof n.HTMLIFrameElement;){try{var s=typeof a.contentWindow.location.href=="string"}catch{s=!1}if(s)n=a.contentWindow;else break;a=yt(n.document)}return a}function Wu(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var Xy=Qi&&"documentMode"in document&&11>=document.documentMode,es=null,qu=null,mo=null,ju=!1;function fm(n,a,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;ju||es==null||es!==yt(c)||(c=es,"selectionStart"in c&&Wu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),mo&&po(mo,c)||(mo=c,c=yc(qu,"onSelect"),0<c.length&&(a=new Ll("onSelect","select",null,a,s),n.push({event:a,listeners:c}),a.target=es)))}function gr(n,a){var s={};return s[n.toLowerCase()]=a.toLowerCase(),s["Webkit"+n]="webkit"+a,s["Moz"+n]="moz"+a,s}var ts={animationend:gr("Animation","AnimationEnd"),animationiteration:gr("Animation","AnimationIteration"),animationstart:gr("Animation","AnimationStart"),transitionrun:gr("Transition","TransitionRun"),transitionstart:gr("Transition","TransitionStart"),transitioncancel:gr("Transition","TransitionCancel"),transitionend:gr("Transition","TransitionEnd")},Yu={},hm={};Qi&&(hm=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function xr(n){if(Yu[n])return Yu[n];if(!ts[n])return n;var a=ts[n],s;for(s in a)if(a.hasOwnProperty(s)&&s in hm)return Yu[n]=a[s];return n}var dm=xr("animationend"),pm=xr("animationiteration"),mm=xr("animationstart"),Wy=xr("transitionrun"),qy=xr("transitionstart"),jy=xr("transitioncancel"),gm=xr("transitionend"),xm=new Map,Zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zu.push("scrollEnd");function Ei(n,a){xm.set(n,a),Ki(a,[n])}var vm=new WeakMap;function hi(n,a){if(typeof n=="object"&&n!==null){var s=vm.get(n);return s!==void 0?s:(a={value:n,source:a,stack:Nt(a)},vm.set(n,a),a)}return{value:n,source:a,stack:Nt(a)}}var di=[],ns=0,Ku=0;function Bl(){for(var n=ns,a=Ku=ns=0;a<n;){var s=di[a];di[a++]=null;var c=di[a];di[a++]=null;var h=di[a];di[a++]=null;var m=di[a];if(di[a++]=null,c!==null&&h!==null){var E=c.pending;E===null?h.next=h:(h.next=E.next,E.next=h),c.pending=h}m!==0&&_m(s,h,m)}}function Il(n,a,s,c){di[ns++]=n,di[ns++]=a,di[ns++]=s,di[ns++]=c,Ku|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function Qu(n,a,s,c){return Il(n,a,s,c),Fl(n)}function is(n,a){return Il(n,null,null,a),Fl(n)}function _m(n,a,s){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s);for(var h=!1,m=n.return;m!==null;)m.childLanes|=s,c=m.alternate,c!==null&&(c.childLanes|=s),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(h=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,h&&a!==null&&(h=31-Ie(s),n=m.hiddenUpdates,c=n[h],c===null?n[h]=[a]:c.push(a),a.lane=s|536870912),m):null}function Fl(n){if(50<Ho)throw Ho=0,ah=null,Error(r(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var as={};function Yy(n,a,s,c){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(n,a,s,c){return new Yy(n,a,s,c)}function $u(n){return n=n.prototype,!(!n||!n.isReactComponent)}function $i(n,a){var s=n.alternate;return s===null?(s=$n(n.tag,a,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=a,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,a=n.dependencies,s.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function ym(n,a){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,a=s.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function zl(n,a,s,c,h,m){var E=0;if(c=n,typeof n=="function")$u(n)&&(E=1);else if(typeof n=="string")E=K1(n,s,De.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case D:return n=$n(31,s,a,h),n.elementType=D,n.lanes=m,n;case b:return vr(s.children,h,m,a);case M:E=8,h|=24;break;case S:return n=$n(12,s,a,h|2),n.elementType=S,n.lanes=m,n;case P:return n=$n(13,s,a,h),n.elementType=P,n.lanes=m,n;case N:return n=$n(19,s,a,h),n.elementType=N,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case _:case A:E=10;break e;case w:E=9;break e;case L:E=11;break e;case F:E=14;break e;case q:E=16,c=null;break e}E=29,s=Error(r(130,n===null?"null":typeof n,"")),c=null}return a=$n(E,s,a,h),a.elementType=n,a.type=c,a.lanes=m,a}function vr(n,a,s,c){return n=$n(7,n,c,a),n.lanes=s,n}function Ju(n,a,s){return n=$n(6,n,null,a),n.lanes=s,n}function ef(n,a,s){return a=$n(4,n.children!==null?n.children:[],n.key,a),a.lanes=s,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var rs=[],ss=0,Hl=null,Gl=0,pi=[],mi=0,_r=null,Ji=1,ea="";function yr(n,a){rs[ss++]=Gl,rs[ss++]=Hl,Hl=n,Gl=a}function Sm(n,a,s){pi[mi++]=Ji,pi[mi++]=ea,pi[mi++]=_r,_r=n;var c=Ji;n=ea;var h=32-Ie(c)-1;c&=~(1<<h),s+=1;var m=32-Ie(a)+h;if(30<m){var E=h-h%5;m=(c&(1<<E)-1).toString(32),c>>=E,h-=E,Ji=1<<32-Ie(a)+h|s<<h|c,ea=m+n}else Ji=1<<m|s<<h|c,ea=n}function tf(n){n.return!==null&&(yr(n,1),Sm(n,1,0))}function nf(n){for(;n===Hl;)Hl=rs[--ss],rs[ss]=null,Gl=rs[--ss],rs[ss]=null;for(;n===_r;)_r=pi[--mi],pi[mi]=null,ea=pi[--mi],pi[mi]=null,Ji=pi[--mi],pi[mi]=null}var Vn=null,en=null,Lt=!1,Sr=null,Ii=!1,af=Error(r(519));function br(n){var a=Error(r(418,""));throw vo(hi(a,n)),af}function bm(n){var a=n.stateNode,s=n.type,c=n.memoizedProps;switch(a[Mn]=n,a[Un]=c,s){case"dialog":bt("cancel",a),bt("close",a);break;case"iframe":case"object":case"embed":bt("load",a);break;case"video":case"audio":for(s=0;s<Vo.length;s++)bt(Vo[s],a);break;case"source":bt("error",a);break;case"img":case"image":case"link":bt("error",a),bt("load",a);break;case"details":bt("toggle",a);break;case"input":bt("invalid",a),Da(a,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Je(a);break;case"select":bt("invalid",a);break;case"textarea":bt("invalid",a),En(a,c.value,c.defaultValue,c.children),Je(a)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||a.textContent===""+s||c.suppressHydrationWarning===!0||zg(a.textContent,s)?(c.popover!=null&&(bt("beforetoggle",a),bt("toggle",a)),c.onScroll!=null&&bt("scroll",a),c.onScrollEnd!=null&&bt("scrollend",a),c.onClick!=null&&(a.onclick=Sc),a=!0):a=!1,a||br(n)}function Mm(n){for(Vn=n.return;Vn;)switch(Vn.tag){case 5:case 13:Ii=!1;return;case 27:case 3:Ii=!0;return;default:Vn=Vn.return}}function go(n){if(n!==Vn)return!1;if(!Lt)return Mm(n),Lt=!0,!1;var a=n.tag,s;if((s=a!==3&&a!==27)&&((s=a===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||yh(n.type,n.memoizedProps)),s=!s),s&&en&&br(n),Mm(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));e:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(a===0){en=Ai(n.nextSibling);break e}a--}else s!=="$"&&s!=="$!"&&s!=="$?"||a++;n=n.nextSibling}en=null}}else a===27?(a=en,ja(n.type)?(n=Eh,Eh=null,en=n):en=a):en=Vn?Ai(n.stateNode.nextSibling):null;return!0}function xo(){en=Vn=null,Lt=!1}function Em(){var n=Sr;return n!==null&&(jn===null?jn=n:jn.push.apply(jn,n),Sr=null),n}function vo(n){Sr===null?Sr=[n]:Sr.push(n)}var rf=re(null),Mr=null,ta=null;function Na(n,a,s){Me(rf,a._currentValue),a._currentValue=s}function na(n){n._currentValue=rf.current,Se(rf)}function sf(n,a,s){for(;n!==null;){var c=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),n===s)break;n=n.return}}function of(n,a,s,c){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var m=h.dependencies;if(m!==null){var E=h.child;m=m.firstContext;e:for(;m!==null;){var R=m;m=h;for(var z=0;z<a.length;z++)if(R.context===a[z]){m.lanes|=s,R=m.alternate,R!==null&&(R.lanes|=s),sf(m.return,s,n),c||(E=null);break e}m=R.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(r(341));E.lanes|=s,m=E.alternate,m!==null&&(m.lanes|=s),sf(E,s,n),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===n){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function _o(n,a,s,c){n=null;for(var h=a,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(r(387));if(E=E.memoizedProps,E!==null){var R=h.type;Qn(h.pendingProps.value,E.value)||(n!==null?n.push(R):n=[R])}}else if(h===ge.current){if(E=h.alternate,E===null)throw Error(r(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(Yo):n=[Yo])}h=h.return}n!==null&&of(a,n,s,c),a.flags|=262144}function Vl(n){for(n=n.firstContext;n!==null;){if(!Qn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Er(n){Mr=n,ta=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Bn(n){return Tm(Mr,n)}function kl(n,a){return Mr===null&&Er(n),Tm(n,a)}function Tm(n,a){var s=a._currentValue;if(a={context:a,memoizedValue:s,next:null},ta===null){if(n===null)throw Error(r(308));ta=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else ta=ta.next=a;return s}var Zy=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(s,c){n.push(c)}};this.abort=function(){a.aborted=!0,n.forEach(function(s){return s()})}},Ky=i.unstable_scheduleCallback,Qy=i.unstable_NormalPriority,vn={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lf(){return{controller:new Zy,data:new Map,refCount:0}}function yo(n){n.refCount--,n.refCount===0&&Ky(Qy,function(){n.controller.abort()})}var So=null,cf=0,os=0,ls=null;function $y(n,a){if(So===null){var s=So=[];cf=0,os=fh(),ls={status:"pending",value:void 0,then:function(c){s.push(c)}}}return cf++,a.then(Am,Am),a}function Am(){if(--cf===0&&So!==null){ls!==null&&(ls.status="fulfilled");var n=So;So=null,os=0,ls=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function Jy(n,a){var s=[],c={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return n.then(function(){c.status="fulfilled",c.value=a;for(var h=0;h<s.length;h++)(0,s[h])(a)},function(h){for(c.status="rejected",c.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),c}var Rm=I.S;I.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&$y(n,a),Rm!==null&&Rm(n,a)};var Tr=re(null);function uf(){var n=Tr.current;return n!==null?n:jt.pooledCache}function Xl(n,a){a===null?Me(Tr,Tr.current):Me(Tr,a.pool)}function wm(){var n=uf();return n===null?null:{parent:vn._currentValue,pool:n}}var bo=Error(r(460)),Cm=Error(r(474)),Wl=Error(r(542)),ff={then:function(){}};function Dm(n){return n=n.status,n==="fulfilled"||n==="rejected"}function ql(){}function Um(n,a,s){switch(s=n[s],s===void 0?n.push(a):s!==a&&(a.then(ql,ql),a=s),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,Lm(n),n;default:if(typeof a.status=="string")a.then(ql,ql);else{if(n=jt,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=a,n.status="pending",n.then(function(c){if(a.status==="pending"){var h=a;h.status="fulfilled",h.value=c}},function(c){if(a.status==="pending"){var h=a;h.status="rejected",h.reason=c}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,Lm(n),n}throw Mo=a,bo}}var Mo=null;function Nm(){if(Mo===null)throw Error(r(459));var n=Mo;return Mo=null,n}function Lm(n){if(n===bo||n===Wl)throw Error(r(483))}var La=!1;function hf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function df(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Oa(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Pa(n,a,s){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ft&2)!==0){var h=c.pending;return h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a,a=Fl(n),_m(n,null,s),a}return Il(n,c,a,s),Fl(n)}function Eo(n,a,s){if(a=a.updateQueue,a!==null&&(a=a.shared,(s&4194048)!==0)){var c=a.lanes;c&=n.pendingLanes,s|=c,a.lanes=s,Ve(n,s)}}function pf(n,a){var s=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var h=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?h=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?h=m=a:m=m.next=a}else h=m=a;s={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=a:n.next=a,s.lastBaseUpdate=a}var mf=!1;function To(){if(mf){var n=ls;if(n!==null)throw n}}function Ao(n,a,s,c){mf=!1;var h=n.updateQueue;La=!1;var m=h.firstBaseUpdate,E=h.lastBaseUpdate,R=h.shared.pending;if(R!==null){h.shared.pending=null;var z=R,te=z.next;z.next=null,E===null?m=te:E.next=te,E=z;var de=n.alternate;de!==null&&(de=de.updateQueue,R=de.lastBaseUpdate,R!==E&&(R===null?de.firstBaseUpdate=te:R.next=te,de.lastBaseUpdate=z))}if(m!==null){var _e=h.baseState;E=0,de=te=z=null,R=m;do{var se=R.lane&-536870913,oe=se!==R.lane;if(oe?(Tt&se)===se:(c&se)===se){se!==0&&se===os&&(mf=!0),de!==null&&(de=de.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var ot=n,it=R;se=a;var Vt=s;switch(it.tag){case 1:if(ot=it.payload,typeof ot=="function"){_e=ot.call(Vt,_e,se);break e}_e=ot;break e;case 3:ot.flags=ot.flags&-65537|128;case 0:if(ot=it.payload,se=typeof ot=="function"?ot.call(Vt,_e,se):ot,se==null)break e;_e=g({},_e,se);break e;case 2:La=!0}}se=R.callback,se!==null&&(n.flags|=64,oe&&(n.flags|=8192),oe=h.callbacks,oe===null?h.callbacks=[se]:oe.push(se))}else oe={lane:se,tag:R.tag,payload:R.payload,callback:R.callback,next:null},de===null?(te=de=oe,z=_e):de=de.next=oe,E|=se;if(R=R.next,R===null){if(R=h.shared.pending,R===null)break;oe=R,R=oe.next,oe.next=null,h.lastBaseUpdate=oe,h.shared.pending=null}}while(!0);de===null&&(z=_e),h.baseState=z,h.firstBaseUpdate=te,h.lastBaseUpdate=de,m===null&&(h.shared.lanes=0),ka|=E,n.lanes=E,n.memoizedState=_e}}function Om(n,a){if(typeof n!="function")throw Error(r(191,n));n.call(a)}function Pm(n,a){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)Om(s[n],a)}var cs=re(null),jl=re(0);function Bm(n,a){n=ca,Me(jl,n),Me(cs,a),ca=n|a.baseLanes}function gf(){Me(jl,ca),Me(cs,cs.current)}function xf(){ca=jl.current,Se(cs),Se(jl)}var Ba=0,mt=null,Ht=null,dn=null,Yl=!1,us=!1,Ar=!1,Zl=0,Ro=0,fs=null,e1=0;function rn(){throw Error(r(321))}function vf(n,a){if(a===null)return!1;for(var s=0;s<a.length&&s<n.length;s++)if(!Qn(n[s],a[s]))return!1;return!0}function _f(n,a,s,c,h,m){return Ba=m,mt=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,I.H=n===null||n.memoizedState===null?_0:y0,Ar=!1,m=s(c,h),Ar=!1,us&&(m=Fm(a,s,c,h)),Im(n),m}function Im(n){I.H=tc;var a=Ht!==null&&Ht.next!==null;if(Ba=0,dn=Ht=mt=null,Yl=!1,Ro=0,fs=null,a)throw Error(r(300));n===null||Tn||(n=n.dependencies,n!==null&&Vl(n)&&(Tn=!0))}function Fm(n,a,s,c){mt=n;var h=0;do{if(us&&(fs=null),Ro=0,us=!1,25<=h)throw Error(r(301));if(h+=1,dn=Ht=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}I.H=o1,m=a(s,c)}while(us);return m}function t1(){var n=I.H,a=n.useState()[0];return a=typeof a.then=="function"?wo(a):a,n=n.useState()[0],(Ht!==null?Ht.memoizedState:null)!==n&&(mt.flags|=1024),a}function yf(){var n=Zl!==0;return Zl=0,n}function Sf(n,a,s){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~s}function bf(n){if(Yl){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Yl=!1}Ba=0,dn=Ht=mt=null,us=!1,Ro=Zl=0,fs=null}function Wn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?mt.memoizedState=dn=n:dn=dn.next=n,dn}function pn(){if(Ht===null){var n=mt.alternate;n=n!==null?n.memoizedState:null}else n=Ht.next;var a=dn===null?mt.memoizedState:dn.next;if(a!==null)dn=a,Ht=n;else{if(n===null)throw mt.alternate===null?Error(r(467)):Error(r(310));Ht=n,n={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},dn===null?mt.memoizedState=dn=n:dn=dn.next=n}return dn}function Mf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wo(n){var a=Ro;return Ro+=1,fs===null&&(fs=[]),n=Um(fs,n,a),a=mt,(dn===null?a.memoizedState:dn.next)===null&&(a=a.alternate,I.H=a===null||a.memoizedState===null?_0:y0),n}function Kl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return wo(n);if(n.$$typeof===A)return Bn(n)}throw Error(r(438,String(n)))}function Ef(n){var a=null,s=mt.updateQueue;if(s!==null&&(a=s.memoCache),a==null){var c=mt.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(a={data:c.data.map(function(h){return h.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),s===null&&(s=Mf(),mt.updateQueue=s),s.memoCache=a,s=a.data[a.index],s===void 0)for(s=a.data[a.index]=Array(n),c=0;c<n;c++)s[c]=C;return a.index++,s}function ia(n,a){return typeof a=="function"?a(n):a}function Ql(n){var a=pn();return Tf(a,Ht,n)}function Tf(n,a,s){var c=n.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=s;var h=n.baseQueue,m=c.pending;if(m!==null){if(h!==null){var E=h.next;h.next=m.next,m.next=E}a.baseQueue=h=m,c.pending=null}if(m=n.baseState,h===null)n.memoizedState=m;else{a=h.next;var R=E=null,z=null,te=a,de=!1;do{var _e=te.lane&-536870913;if(_e!==te.lane?(Tt&_e)===_e:(Ba&_e)===_e){var se=te.revertLane;if(se===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),_e===os&&(de=!0);else if((Ba&se)===se){te=te.next,se===os&&(de=!0);continue}else _e={lane:0,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},z===null?(R=z=_e,E=m):z=z.next=_e,mt.lanes|=se,ka|=se;_e=te.action,Ar&&s(m,_e),m=te.hasEagerState?te.eagerState:s(m,_e)}else se={lane:_e,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},z===null?(R=z=se,E=m):z=z.next=se,mt.lanes|=_e,ka|=_e;te=te.next}while(te!==null&&te!==a);if(z===null?E=m:z.next=R,!Qn(m,n.memoizedState)&&(Tn=!0,de&&(s=ls,s!==null)))throw s;n.memoizedState=m,n.baseState=E,n.baseQueue=z,c.lastRenderedState=m}return h===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function Af(n){var a=pn(),s=a.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=n;var c=s.dispatch,h=s.pending,m=a.memoizedState;if(h!==null){s.pending=null;var E=h=h.next;do m=n(m,E.action),E=E.next;while(E!==h);Qn(m,a.memoizedState)||(Tn=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),s.lastRenderedState=m}return[m,c]}function zm(n,a,s){var c=mt,h=pn(),m=Lt;if(m){if(s===void 0)throw Error(r(407));s=s()}else s=a();var E=!Qn((Ht||h).memoizedState,s);E&&(h.memoizedState=s,Tn=!0),h=h.queue;var R=Vm.bind(null,c,h,n);if(Co(2048,8,R,[n]),h.getSnapshot!==a||E||dn!==null&&dn.memoizedState.tag&1){if(c.flags|=2048,hs(9,$l(),Gm.bind(null,c,h,s,a),null),jt===null)throw Error(r(349));m||(Ba&124)!==0||Hm(c,a,s)}return s}function Hm(n,a,s){n.flags|=16384,n={getSnapshot:a,value:s},a=mt.updateQueue,a===null?(a=Mf(),mt.updateQueue=a,a.stores=[n]):(s=a.stores,s===null?a.stores=[n]:s.push(n))}function Gm(n,a,s,c){a.value=s,a.getSnapshot=c,km(a)&&Xm(n)}function Vm(n,a,s){return s(function(){km(a)&&Xm(n)})}function km(n){var a=n.getSnapshot;n=n.value;try{var s=a();return!Qn(n,s)}catch{return!0}}function Xm(n){var a=is(n,2);a!==null&&ii(a,n,2)}function Rf(n){var a=Wn();if(typeof n=="function"){var s=n;if(n=s(),Ar){fe(!0);try{s()}finally{fe(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:n},a}function Wm(n,a,s,c){return n.baseState=s,Tf(n,Ht,typeof c=="function"?c:ia)}function n1(n,a,s,c,h){if(ec(n))throw Error(r(485));if(n=a.action,n!==null){var m={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};I.T!==null?s(!0):m.isTransition=!1,c(m),s=a.pending,s===null?(m.next=a.pending=m,qm(a,m)):(m.next=s.next,a.pending=s.next=m)}}function qm(n,a){var s=a.action,c=a.payload,h=n.state;if(a.isTransition){var m=I.T,E={};I.T=E;try{var R=s(h,c),z=I.S;z!==null&&z(E,R),jm(n,a,R)}catch(te){wf(n,a,te)}finally{I.T=m}}else try{m=s(h,c),jm(n,a,m)}catch(te){wf(n,a,te)}}function jm(n,a,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){Ym(n,a,c)},function(c){return wf(n,a,c)}):Ym(n,a,s)}function Ym(n,a,s){a.status="fulfilled",a.value=s,Zm(a),n.state=s,a=n.pending,a!==null&&(s=a.next,s===a?n.pending=null:(s=s.next,a.next=s,qm(n,s)))}function wf(n,a,s){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do a.status="rejected",a.reason=s,Zm(a),a=a.next;while(a!==c)}n.action=null}function Zm(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function Km(n,a){return a}function Qm(n,a){if(Lt){var s=jt.formState;if(s!==null){e:{var c=mt;if(Lt){if(en){t:{for(var h=en,m=Ii;h.nodeType!==8;){if(!m){h=null;break t}if(h=Ai(h.nextSibling),h===null){h=null;break t}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){en=Ai(h.nextSibling),c=h.data==="F!";break e}}br(c)}c=!1}c&&(a=s[0])}}return s=Wn(),s.memoizedState=s.baseState=a,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Km,lastRenderedState:a},s.queue=c,s=g0.bind(null,mt,c),c.dispatch=s,c=Rf(!1),m=Lf.bind(null,mt,!1,c.queue),c=Wn(),h={state:a,dispatch:null,action:n,pending:null},c.queue=h,s=n1.bind(null,mt,h,m,s),h.dispatch=s,c.memoizedState=n,[a,s,!1]}function $m(n){var a=pn();return Jm(a,Ht,n)}function Jm(n,a,s){if(a=Tf(n,a,Km)[0],n=Ql(ia)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var c=wo(a)}catch(E){throw E===bo?Wl:E}else c=a;a=pn();var h=a.queue,m=h.dispatch;return s!==a.memoizedState&&(mt.flags|=2048,hs(9,$l(),i1.bind(null,h,s),null)),[c,m,n]}function i1(n,a){n.action=a}function e0(n){var a=pn(),s=Ht;if(s!==null)return Jm(a,s,n);pn(),a=a.memoizedState,s=pn();var c=s.queue.dispatch;return s.memoizedState=n,[a,c,!1]}function hs(n,a,s,c){return n={tag:n,create:s,deps:c,inst:a,next:null},a=mt.updateQueue,a===null&&(a=Mf(),mt.updateQueue=a),s=a.lastEffect,s===null?a.lastEffect=n.next=n:(c=s.next,s.next=n,n.next=c,a.lastEffect=n),n}function $l(){return{destroy:void 0,resource:void 0}}function t0(){return pn().memoizedState}function Jl(n,a,s,c){var h=Wn();c=c===void 0?null:c,mt.flags|=n,h.memoizedState=hs(1|a,$l(),s,c)}function Co(n,a,s,c){var h=pn();c=c===void 0?null:c;var m=h.memoizedState.inst;Ht!==null&&c!==null&&vf(c,Ht.memoizedState.deps)?h.memoizedState=hs(a,m,s,c):(mt.flags|=n,h.memoizedState=hs(1|a,m,s,c))}function n0(n,a){Jl(8390656,8,n,a)}function i0(n,a){Co(2048,8,n,a)}function a0(n,a){return Co(4,2,n,a)}function r0(n,a){return Co(4,4,n,a)}function s0(n,a){if(typeof a=="function"){n=n();var s=a(n);return function(){typeof s=="function"?s():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function o0(n,a,s){s=s!=null?s.concat([n]):null,Co(4,4,s0.bind(null,a,n),s)}function Cf(){}function l0(n,a){var s=pn();a=a===void 0?null:a;var c=s.memoizedState;return a!==null&&vf(a,c[1])?c[0]:(s.memoizedState=[n,a],n)}function c0(n,a){var s=pn();a=a===void 0?null:a;var c=s.memoizedState;if(a!==null&&vf(a,c[1]))return c[0];if(c=n(),Ar){fe(!0);try{n()}finally{fe(!1)}}return s.memoizedState=[c,a],c}function Df(n,a,s){return s===void 0||(Ba&1073741824)!==0?n.memoizedState=a:(n.memoizedState=s,n=hg(),mt.lanes|=n,ka|=n,s)}function u0(n,a,s,c){return Qn(s,a)?s:cs.current!==null?(n=Df(n,s,c),Qn(n,a)||(Tn=!0),n):(Ba&42)===0?(Tn=!0,n.memoizedState=s):(n=hg(),mt.lanes|=n,ka|=n,a)}function f0(n,a,s,c,h){var m=W.p;W.p=m!==0&&8>m?m:8;var E=I.T,R={};I.T=R,Lf(n,!1,a,s);try{var z=h(),te=I.S;if(te!==null&&te(R,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var de=Jy(z,c);Do(n,a,de,ni(n))}else Do(n,a,c,ni(n))}catch(_e){Do(n,a,{then:function(){},status:"rejected",reason:_e},ni())}finally{W.p=m,I.T=E}}function a1(){}function Uf(n,a,s,c){if(n.tag!==5)throw Error(r(476));var h=h0(n).queue;f0(n,h,a,Y,s===null?a1:function(){return d0(n),s(c)})}function h0(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:Y},next:null};var s={};return a.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:s},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function d0(n){var a=h0(n).next.queue;Do(n,a,{},ni())}function Nf(){return Bn(Yo)}function p0(){return pn().memoizedState}function m0(){return pn().memoizedState}function r1(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var s=ni();n=Oa(s);var c=Pa(a,n,s);c!==null&&(ii(c,a,s),Eo(c,a,s)),a={cache:lf()},n.payload=a;return}a=a.return}}function s1(n,a,s){var c=ni();s={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},ec(n)?x0(a,s):(s=Qu(n,a,s,c),s!==null&&(ii(s,n,c),v0(s,a,c)))}function g0(n,a,s){var c=ni();Do(n,a,s,c)}function Do(n,a,s,c){var h={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(ec(n))x0(a,h);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var E=a.lastRenderedState,R=m(E,s);if(h.hasEagerState=!0,h.eagerState=R,Qn(R,E))return Il(n,a,h,0),jt===null&&Bl(),!1}catch{}finally{}if(s=Qu(n,a,h,c),s!==null)return ii(s,n,c),v0(s,a,c),!0}return!1}function Lf(n,a,s,c){if(c={lane:2,revertLane:fh(),action:c,hasEagerState:!1,eagerState:null,next:null},ec(n)){if(a)throw Error(r(479))}else a=Qu(n,s,c,2),a!==null&&ii(a,n,2)}function ec(n){var a=n.alternate;return n===mt||a!==null&&a===mt}function x0(n,a){us=Yl=!0;var s=n.pending;s===null?a.next=a:(a.next=s.next,s.next=a),n.pending=a}function v0(n,a,s){if((s&4194048)!==0){var c=a.lanes;c&=n.pendingLanes,s|=c,a.lanes=s,Ve(n,s)}}var tc={readContext:Bn,use:Kl,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn},_0={readContext:Bn,use:Kl,useCallback:function(n,a){return Wn().memoizedState=[n,a===void 0?null:a],n},useContext:Bn,useEffect:n0,useImperativeHandle:function(n,a,s){s=s!=null?s.concat([n]):null,Jl(4194308,4,s0.bind(null,a,n),s)},useLayoutEffect:function(n,a){return Jl(4194308,4,n,a)},useInsertionEffect:function(n,a){Jl(4,2,n,a)},useMemo:function(n,a){var s=Wn();a=a===void 0?null:a;var c=n();if(Ar){fe(!0);try{n()}finally{fe(!1)}}return s.memoizedState=[c,a],c},useReducer:function(n,a,s){var c=Wn();if(s!==void 0){var h=s(a);if(Ar){fe(!0);try{s(a)}finally{fe(!1)}}}else h=a;return c.memoizedState=c.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},c.queue=n,n=n.dispatch=s1.bind(null,mt,n),[c.memoizedState,n]},useRef:function(n){var a=Wn();return n={current:n},a.memoizedState=n},useState:function(n){n=Rf(n);var a=n.queue,s=g0.bind(null,mt,a);return a.dispatch=s,[n.memoizedState,s]},useDebugValue:Cf,useDeferredValue:function(n,a){var s=Wn();return Df(s,n,a)},useTransition:function(){var n=Rf(!1);return n=f0.bind(null,mt,n.queue,!0,!1),Wn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,s){var c=mt,h=Wn();if(Lt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=a(),jt===null)throw Error(r(349));(Tt&124)!==0||Hm(c,a,s)}h.memoizedState=s;var m={value:s,getSnapshot:a};return h.queue=m,n0(Vm.bind(null,c,m,n),[n]),c.flags|=2048,hs(9,$l(),Gm.bind(null,c,m,s,a),null),s},useId:function(){var n=Wn(),a=jt.identifierPrefix;if(Lt){var s=ea,c=Ji;s=(c&~(1<<32-Ie(c)-1)).toString(32)+s,a="«"+a+"R"+s,s=Zl++,0<s&&(a+="H"+s.toString(32)),a+="»"}else s=e1++,a="«"+a+"r"+s.toString(32)+"»";return n.memoizedState=a},useHostTransitionStatus:Nf,useFormState:Qm,useActionState:Qm,useOptimistic:function(n){var a=Wn();a.memoizedState=a.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=s,a=Lf.bind(null,mt,!0,s),s.dispatch=a,[n,a]},useMemoCache:Ef,useCacheRefresh:function(){return Wn().memoizedState=r1.bind(null,mt)}},y0={readContext:Bn,use:Kl,useCallback:l0,useContext:Bn,useEffect:i0,useImperativeHandle:o0,useInsertionEffect:a0,useLayoutEffect:r0,useMemo:c0,useReducer:Ql,useRef:t0,useState:function(){return Ql(ia)},useDebugValue:Cf,useDeferredValue:function(n,a){var s=pn();return u0(s,Ht.memoizedState,n,a)},useTransition:function(){var n=Ql(ia)[0],a=pn().memoizedState;return[typeof n=="boolean"?n:wo(n),a]},useSyncExternalStore:zm,useId:p0,useHostTransitionStatus:Nf,useFormState:$m,useActionState:$m,useOptimistic:function(n,a){var s=pn();return Wm(s,Ht,n,a)},useMemoCache:Ef,useCacheRefresh:m0},o1={readContext:Bn,use:Kl,useCallback:l0,useContext:Bn,useEffect:i0,useImperativeHandle:o0,useInsertionEffect:a0,useLayoutEffect:r0,useMemo:c0,useReducer:Af,useRef:t0,useState:function(){return Af(ia)},useDebugValue:Cf,useDeferredValue:function(n,a){var s=pn();return Ht===null?Df(s,n,a):u0(s,Ht.memoizedState,n,a)},useTransition:function(){var n=Af(ia)[0],a=pn().memoizedState;return[typeof n=="boolean"?n:wo(n),a]},useSyncExternalStore:zm,useId:p0,useHostTransitionStatus:Nf,useFormState:e0,useActionState:e0,useOptimistic:function(n,a){var s=pn();return Ht!==null?Wm(s,Ht,n,a):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:Ef,useCacheRefresh:m0},ds=null,Uo=0;function nc(n){var a=Uo;return Uo+=1,ds===null&&(ds=[]),Um(ds,n,a)}function No(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function ic(n,a){throw a.$$typeof===x?Error(r(525)):(n=Object.prototype.toString.call(a),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function S0(n){var a=n._init;return a(n._payload)}function b0(n){function a(Z,X){if(n){var J=Z.deletions;J===null?(Z.deletions=[X],Z.flags|=16):J.push(X)}}function s(Z,X){if(!n)return null;for(;X!==null;)a(Z,X),X=X.sibling;return null}function c(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function h(Z,X){return Z=$i(Z,X),Z.index=0,Z.sibling=null,Z}function m(Z,X,J){return Z.index=J,n?(J=Z.alternate,J!==null?(J=J.index,J<X?(Z.flags|=67108866,X):J):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function E(Z){return n&&Z.alternate===null&&(Z.flags|=67108866),Z}function R(Z,X,J,xe){return X===null||X.tag!==6?(X=Ju(J,Z.mode,xe),X.return=Z,X):(X=h(X,J),X.return=Z,X)}function z(Z,X,J,xe){var ke=J.type;return ke===b?de(Z,X,J.props.children,xe,J.key):X!==null&&(X.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===q&&S0(ke)===X.type)?(X=h(X,J.props),No(X,J),X.return=Z,X):(X=zl(J.type,J.key,J.props,null,Z.mode,xe),No(X,J),X.return=Z,X)}function te(Z,X,J,xe){return X===null||X.tag!==4||X.stateNode.containerInfo!==J.containerInfo||X.stateNode.implementation!==J.implementation?(X=ef(J,Z.mode,xe),X.return=Z,X):(X=h(X,J.children||[]),X.return=Z,X)}function de(Z,X,J,xe,ke){return X===null||X.tag!==7?(X=vr(J,Z.mode,xe,ke),X.return=Z,X):(X=h(X,J),X.return=Z,X)}function _e(Z,X,J){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Ju(""+X,Z.mode,J),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case v:return J=zl(X.type,X.key,X.props,null,Z.mode,J),No(J,X),J.return=Z,J;case y:return X=ef(X,Z.mode,J),X.return=Z,X;case q:var xe=X._init;return X=xe(X._payload),_e(Z,X,J)}if(K(X)||j(X))return X=vr(X,Z.mode,J,null),X.return=Z,X;if(typeof X.then=="function")return _e(Z,nc(X),J);if(X.$$typeof===A)return _e(Z,kl(Z,X),J);ic(Z,X)}return null}function se(Z,X,J,xe){var ke=X!==null?X.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return ke!==null?null:R(Z,X,""+J,xe);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case v:return J.key===ke?z(Z,X,J,xe):null;case y:return J.key===ke?te(Z,X,J,xe):null;case q:return ke=J._init,J=ke(J._payload),se(Z,X,J,xe)}if(K(J)||j(J))return ke!==null?null:de(Z,X,J,xe,null);if(typeof J.then=="function")return se(Z,X,nc(J),xe);if(J.$$typeof===A)return se(Z,X,kl(Z,J),xe);ic(Z,J)}return null}function oe(Z,X,J,xe,ke){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return Z=Z.get(J)||null,R(X,Z,""+xe,ke);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case v:return Z=Z.get(xe.key===null?J:xe.key)||null,z(X,Z,xe,ke);case y:return Z=Z.get(xe.key===null?J:xe.key)||null,te(X,Z,xe,ke);case q:var vt=xe._init;return xe=vt(xe._payload),oe(Z,X,J,xe,ke)}if(K(xe)||j(xe))return Z=Z.get(J)||null,de(X,Z,xe,ke,null);if(typeof xe.then=="function")return oe(Z,X,J,nc(xe),ke);if(xe.$$typeof===A)return oe(Z,X,J,kl(X,xe),ke);ic(X,xe)}return null}function ot(Z,X,J,xe){for(var ke=null,vt=null,Ke=X,at=X=0,Rn=null;Ke!==null&&at<J.length;at++){Ke.index>at?(Rn=Ke,Ke=null):Rn=Ke.sibling;var wt=se(Z,Ke,J[at],xe);if(wt===null){Ke===null&&(Ke=Rn);break}n&&Ke&&wt.alternate===null&&a(Z,Ke),X=m(wt,X,at),vt===null?ke=wt:vt.sibling=wt,vt=wt,Ke=Rn}if(at===J.length)return s(Z,Ke),Lt&&yr(Z,at),ke;if(Ke===null){for(;at<J.length;at++)Ke=_e(Z,J[at],xe),Ke!==null&&(X=m(Ke,X,at),vt===null?ke=Ke:vt.sibling=Ke,vt=Ke);return Lt&&yr(Z,at),ke}for(Ke=c(Ke);at<J.length;at++)Rn=oe(Ke,Z,at,J[at],xe),Rn!==null&&(n&&Rn.alternate!==null&&Ke.delete(Rn.key===null?at:Rn.key),X=m(Rn,X,at),vt===null?ke=Rn:vt.sibling=Rn,vt=Rn);return n&&Ke.forEach(function($a){return a(Z,$a)}),Lt&&yr(Z,at),ke}function it(Z,X,J,xe){if(J==null)throw Error(r(151));for(var ke=null,vt=null,Ke=X,at=X=0,Rn=null,wt=J.next();Ke!==null&&!wt.done;at++,wt=J.next()){Ke.index>at?(Rn=Ke,Ke=null):Rn=Ke.sibling;var $a=se(Z,Ke,wt.value,xe);if($a===null){Ke===null&&(Ke=Rn);break}n&&Ke&&$a.alternate===null&&a(Z,Ke),X=m($a,X,at),vt===null?ke=$a:vt.sibling=$a,vt=$a,Ke=Rn}if(wt.done)return s(Z,Ke),Lt&&yr(Z,at),ke;if(Ke===null){for(;!wt.done;at++,wt=J.next())wt=_e(Z,wt.value,xe),wt!==null&&(X=m(wt,X,at),vt===null?ke=wt:vt.sibling=wt,vt=wt);return Lt&&yr(Z,at),ke}for(Ke=c(Ke);!wt.done;at++,wt=J.next())wt=oe(Ke,Z,at,wt.value,xe),wt!==null&&(n&&wt.alternate!==null&&Ke.delete(wt.key===null?at:wt.key),X=m(wt,X,at),vt===null?ke=wt:vt.sibling=wt,vt=wt);return n&&Ke.forEach(function(lS){return a(Z,lS)}),Lt&&yr(Z,at),ke}function Vt(Z,X,J,xe){if(typeof J=="object"&&J!==null&&J.type===b&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case v:e:{for(var ke=J.key;X!==null;){if(X.key===ke){if(ke=J.type,ke===b){if(X.tag===7){s(Z,X.sibling),xe=h(X,J.props.children),xe.return=Z,Z=xe;break e}}else if(X.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===q&&S0(ke)===X.type){s(Z,X.sibling),xe=h(X,J.props),No(xe,J),xe.return=Z,Z=xe;break e}s(Z,X);break}else a(Z,X);X=X.sibling}J.type===b?(xe=vr(J.props.children,Z.mode,xe,J.key),xe.return=Z,Z=xe):(xe=zl(J.type,J.key,J.props,null,Z.mode,xe),No(xe,J),xe.return=Z,Z=xe)}return E(Z);case y:e:{for(ke=J.key;X!==null;){if(X.key===ke)if(X.tag===4&&X.stateNode.containerInfo===J.containerInfo&&X.stateNode.implementation===J.implementation){s(Z,X.sibling),xe=h(X,J.children||[]),xe.return=Z,Z=xe;break e}else{s(Z,X);break}else a(Z,X);X=X.sibling}xe=ef(J,Z.mode,xe),xe.return=Z,Z=xe}return E(Z);case q:return ke=J._init,J=ke(J._payload),Vt(Z,X,J,xe)}if(K(J))return ot(Z,X,J,xe);if(j(J)){if(ke=j(J),typeof ke!="function")throw Error(r(150));return J=ke.call(J),it(Z,X,J,xe)}if(typeof J.then=="function")return Vt(Z,X,nc(J),xe);if(J.$$typeof===A)return Vt(Z,X,kl(Z,J),xe);ic(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,X!==null&&X.tag===6?(s(Z,X.sibling),xe=h(X,J),xe.return=Z,Z=xe):(s(Z,X),xe=Ju(J,Z.mode,xe),xe.return=Z,Z=xe),E(Z)):s(Z,X)}return function(Z,X,J,xe){try{Uo=0;var ke=Vt(Z,X,J,xe);return ds=null,ke}catch(Ke){if(Ke===bo||Ke===Wl)throw Ke;var vt=$n(29,Ke,null,Z.mode);return vt.lanes=xe,vt.return=Z,vt}finally{}}}var ps=b0(!0),M0=b0(!1),gi=re(null),Fi=null;function Ia(n){var a=n.alternate;Me(_n,_n.current&1),Me(gi,n),Fi===null&&(a===null||cs.current!==null||a.memoizedState!==null)&&(Fi=n)}function E0(n){if(n.tag===22){if(Me(_n,_n.current),Me(gi,n),Fi===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(Fi=n)}}else Fa()}function Fa(){Me(_n,_n.current),Me(gi,gi.current)}function aa(n){Se(gi),Fi===n&&(Fi=null),Se(_n)}var _n=re(0);function ac(n){for(var a=n;a!==null;){if(a.tag===13){var s=a.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Mh(s)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function Of(n,a,s,c){a=n.memoizedState,s=s(c,a),s=s==null?a:g({},a,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var Pf={enqueueSetState:function(n,a,s){n=n._reactInternals;var c=ni(),h=Oa(c);h.payload=a,s!=null&&(h.callback=s),a=Pa(n,h,c),a!==null&&(ii(a,n,c),Eo(a,n,c))},enqueueReplaceState:function(n,a,s){n=n._reactInternals;var c=ni(),h=Oa(c);h.tag=1,h.payload=a,s!=null&&(h.callback=s),a=Pa(n,h,c),a!==null&&(ii(a,n,c),Eo(a,n,c))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var s=ni(),c=Oa(s);c.tag=2,a!=null&&(c.callback=a),a=Pa(n,c,s),a!==null&&(ii(a,n,s),Eo(a,n,s))}};function T0(n,a,s,c,h,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,E):a.prototype&&a.prototype.isPureReactComponent?!po(s,c)||!po(h,m):!0}function A0(n,a,s,c){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(s,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(s,c),a.state!==n&&Pf.enqueueReplaceState(a,a.state,null)}function Rr(n,a){var s=a;if("ref"in a){s={};for(var c in a)c!=="ref"&&(s[c]=a[c])}if(n=n.defaultProps){s===a&&(s=g({},s));for(var h in n)s[h]===void 0&&(s[h]=n[h])}return s}var rc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function R0(n){rc(n)}function w0(n){console.error(n)}function C0(n){rc(n)}function sc(n,a){try{var s=n.onUncaughtError;s(a.value,{componentStack:a.stack})}catch(c){setTimeout(function(){throw c})}}function D0(n,a,s){try{var c=n.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Bf(n,a,s){return s=Oa(s),s.tag=3,s.payload={element:null},s.callback=function(){sc(n,a)},s}function U0(n){return n=Oa(n),n.tag=3,n}function N0(n,a,s,c){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var m=c.value;n.payload=function(){return h(m)},n.callback=function(){D0(a,s,c)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){D0(a,s,c),typeof h!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var R=c.stack;this.componentDidCatch(c.value,{componentStack:R!==null?R:""})})}function l1(n,a,s,c,h){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(a=s.alternate,a!==null&&_o(a,s,h,!0),s=gi.current,s!==null){switch(s.tag){case 13:return Fi===null?sh():s.alternate===null&&tn===0&&(tn=3),s.flags&=-257,s.flags|=65536,s.lanes=h,c===ff?s.flags|=16384:(a=s.updateQueue,a===null?s.updateQueue=new Set([c]):a.add(c),lh(n,c,h)),!1;case 22:return s.flags|=65536,c===ff?s.flags|=16384:(a=s.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=a):(s=a.retryQueue,s===null?a.retryQueue=new Set([c]):s.add(c)),lh(n,c,h)),!1}throw Error(r(435,s.tag))}return lh(n,c,h),sh(),!1}if(Lt)return a=gi.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=h,c!==af&&(n=Error(r(422),{cause:c}),vo(hi(n,s)))):(c!==af&&(a=Error(r(423),{cause:c}),vo(hi(a,s))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,c=hi(c,s),h=Bf(n.stateNode,c,h),pf(n,h),tn!==4&&(tn=2)),!1;var m=Error(r(520),{cause:c});if(m=hi(m,s),zo===null?zo=[m]:zo.push(m),tn!==4&&(tn=2),a===null)return!0;c=hi(c,s),s=a;do{switch(s.tag){case 3:return s.flags|=65536,n=h&-h,s.lanes|=n,n=Bf(s.stateNode,c,n),pf(s,n),!1;case 1:if(a=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Xa===null||!Xa.has(m))))return s.flags|=65536,h&=-h,s.lanes|=h,h=U0(h),N0(h,n,s,c),pf(s,h),!1}s=s.return}while(s!==null);return!1}var L0=Error(r(461)),Tn=!1;function Ln(n,a,s,c){a.child=n===null?M0(a,null,s,c):ps(a,n.child,s,c)}function O0(n,a,s,c,h){s=s.render;var m=a.ref;if("ref"in c){var E={};for(var R in c)R!=="ref"&&(E[R]=c[R])}else E=c;return Er(a),c=_f(n,a,s,E,m,h),R=yf(),n!==null&&!Tn?(Sf(n,a,h),ra(n,a,h)):(Lt&&R&&tf(a),a.flags|=1,Ln(n,a,c,h),a.child)}function P0(n,a,s,c,h){if(n===null){var m=s.type;return typeof m=="function"&&!$u(m)&&m.defaultProps===void 0&&s.compare===null?(a.tag=15,a.type=m,B0(n,a,m,c,h)):(n=zl(s.type,null,c,a,a.mode,h),n.ref=a.ref,n.return=a,a.child=n)}if(m=n.child,!Xf(n,h)){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:po,s(E,c)&&n.ref===a.ref)return ra(n,a,h)}return a.flags|=1,n=$i(m,c),n.ref=a.ref,n.return=a,a.child=n}function B0(n,a,s,c,h){if(n!==null){var m=n.memoizedProps;if(po(m,c)&&n.ref===a.ref)if(Tn=!1,a.pendingProps=c=m,Xf(n,h))(n.flags&131072)!==0&&(Tn=!0);else return a.lanes=n.lanes,ra(n,a,h)}return If(n,a,s,c,h)}function I0(n,a,s){var c=a.pendingProps,h=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden"){if((a.flags&128)!==0){if(c=m!==null?m.baseLanes|s:s,n!==null){for(h=a.child=n.child,m=0;h!==null;)m=m|h.lanes|h.childLanes,h=h.sibling;a.childLanes=m&~c}else a.childLanes=0,a.child=null;return F0(n,a,c,s)}if((s&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&Xl(a,m!==null?m.cachePool:null),m!==null?Bm(a,m):gf(),E0(a);else return a.lanes=a.childLanes=536870912,F0(n,a,m!==null?m.baseLanes|s:s,s)}else m!==null?(Xl(a,m.cachePool),Bm(a,m),Fa(),a.memoizedState=null):(n!==null&&Xl(a,null),gf(),Fa());return Ln(n,a,h,s),a.child}function F0(n,a,s,c){var h=uf();return h=h===null?null:{parent:vn._currentValue,pool:h},a.memoizedState={baseLanes:s,cachePool:h},n!==null&&Xl(a,null),gf(),E0(a),n!==null&&_o(n,a,c,!0),null}function oc(n,a){var s=a.ref;if(s===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(n===null||n.ref!==s)&&(a.flags|=4194816)}}function If(n,a,s,c,h){return Er(a),s=_f(n,a,s,c,void 0,h),c=yf(),n!==null&&!Tn?(Sf(n,a,h),ra(n,a,h)):(Lt&&c&&tf(a),a.flags|=1,Ln(n,a,s,h),a.child)}function z0(n,a,s,c,h,m){return Er(a),a.updateQueue=null,s=Fm(a,c,s,h),Im(n),c=yf(),n!==null&&!Tn?(Sf(n,a,m),ra(n,a,m)):(Lt&&c&&tf(a),a.flags|=1,Ln(n,a,s,m),a.child)}function H0(n,a,s,c,h){if(Er(a),a.stateNode===null){var m=as,E=s.contextType;typeof E=="object"&&E!==null&&(m=Bn(E)),m=new s(c,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Pf,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=c,m.state=a.memoizedState,m.refs={},hf(a),E=s.contextType,m.context=typeof E=="object"&&E!==null?Bn(E):as,m.state=a.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(Of(a,s,E,c),m.state=a.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Pf.enqueueReplaceState(m,m.state,null),Ao(a,c,m,h),To(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),c=!0}else if(n===null){m=a.stateNode;var R=a.memoizedProps,z=Rr(s,R);m.props=z;var te=m.context,de=s.contextType;E=as,typeof de=="object"&&de!==null&&(E=Bn(de));var _e=s.getDerivedStateFromProps;de=typeof _e=="function"||typeof m.getSnapshotBeforeUpdate=="function",R=a.pendingProps!==R,de||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(R||te!==E)&&A0(a,m,c,E),La=!1;var se=a.memoizedState;m.state=se,Ao(a,c,m,h),To(),te=a.memoizedState,R||se!==te||La?(typeof _e=="function"&&(Of(a,s,_e,c),te=a.memoizedState),(z=La||T0(a,s,z,c,se,te,E))?(de||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=te),m.props=c,m.state=te,m.context=E,c=z):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{m=a.stateNode,df(n,a),E=a.memoizedProps,de=Rr(s,E),m.props=de,_e=a.pendingProps,se=m.context,te=s.contextType,z=as,typeof te=="object"&&te!==null&&(z=Bn(te)),R=s.getDerivedStateFromProps,(te=typeof R=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==_e||se!==z)&&A0(a,m,c,z),La=!1,se=a.memoizedState,m.state=se,Ao(a,c,m,h),To();var oe=a.memoizedState;E!==_e||se!==oe||La||n!==null&&n.dependencies!==null&&Vl(n.dependencies)?(typeof R=="function"&&(Of(a,s,R,c),oe=a.memoizedState),(de=La||T0(a,s,de,c,se,oe,z)||n!==null&&n.dependencies!==null&&Vl(n.dependencies))?(te||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,oe,z),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,oe,z)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===n.memoizedProps&&se===n.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&se===n.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=oe),m.props=c,m.state=oe,m.context=z,c=de):(typeof m.componentDidUpdate!="function"||E===n.memoizedProps&&se===n.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&se===n.memoizedState||(a.flags|=1024),c=!1)}return m=c,oc(n,a),c=(a.flags&128)!==0,m||c?(m=a.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,n!==null&&c?(a.child=ps(a,n.child,null,h),a.child=ps(a,null,s,h)):Ln(n,a,s,h),a.memoizedState=m.state,n=a.child):n=ra(n,a,h),n}function G0(n,a,s,c){return xo(),a.flags|=256,Ln(n,a,s,c),a.child}var Ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zf(n){return{baseLanes:n,cachePool:wm()}}function Hf(n,a,s){return n=n!==null?n.childLanes&~s:0,a&&(n|=xi),n}function V0(n,a,s){var c=a.pendingProps,h=!1,m=(a.flags&128)!==0,E;if((E=m)||(E=n!==null&&n.memoizedState===null?!1:(_n.current&2)!==0),E&&(h=!0,a.flags&=-129),E=(a.flags&32)!==0,a.flags&=-33,n===null){if(Lt){if(h?Ia(a):Fa(),Lt){var R=en,z;if(z=R){e:{for(z=R,R=Ii;z.nodeType!==8;){if(!R){R=null;break e}if(z=Ai(z.nextSibling),z===null){R=null;break e}}R=z}R!==null?(a.memoizedState={dehydrated:R,treeContext:_r!==null?{id:Ji,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},z=$n(18,null,null,0),z.stateNode=R,z.return=a,a.child=z,Vn=a,en=null,z=!0):z=!1}z||br(a)}if(R=a.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return Mh(R)?a.lanes=32:a.lanes=536870912,null;aa(a)}return R=c.children,c=c.fallback,h?(Fa(),h=a.mode,R=lc({mode:"hidden",children:R},h),c=vr(c,h,s,null),R.return=a,c.return=a,R.sibling=c,a.child=R,h=a.child,h.memoizedState=zf(s),h.childLanes=Hf(n,E,s),a.memoizedState=Ff,c):(Ia(a),Gf(a,R))}if(z=n.memoizedState,z!==null&&(R=z.dehydrated,R!==null)){if(m)a.flags&256?(Ia(a),a.flags&=-257,a=Vf(n,a,s)):a.memoizedState!==null?(Fa(),a.child=n.child,a.flags|=128,a=null):(Fa(),h=c.fallback,R=a.mode,c=lc({mode:"visible",children:c.children},R),h=vr(h,R,s,null),h.flags|=2,c.return=a,h.return=a,c.sibling=h,a.child=c,ps(a,n.child,null,s),c=a.child,c.memoizedState=zf(s),c.childLanes=Hf(n,E,s),a.memoizedState=Ff,a=h);else if(Ia(a),Mh(R)){if(E=R.nextSibling&&R.nextSibling.dataset,E)var te=E.dgst;E=te,c=Error(r(419)),c.stack="",c.digest=E,vo({value:c,source:null,stack:null}),a=Vf(n,a,s)}else if(Tn||_o(n,a,s,!1),E=(s&n.childLanes)!==0,Tn||E){if(E=jt,E!==null&&(c=s&-s,c=(c&42)!==0?1:st(c),c=(c&(E.suspendedLanes|s))!==0?0:c,c!==0&&c!==z.retryLane))throw z.retryLane=c,is(n,c),ii(E,n,c),L0;R.data==="$?"||sh(),a=Vf(n,a,s)}else R.data==="$?"?(a.flags|=192,a.child=n.child,a=null):(n=z.treeContext,en=Ai(R.nextSibling),Vn=a,Lt=!0,Sr=null,Ii=!1,n!==null&&(pi[mi++]=Ji,pi[mi++]=ea,pi[mi++]=_r,Ji=n.id,ea=n.overflow,_r=a),a=Gf(a,c.children),a.flags|=4096);return a}return h?(Fa(),h=c.fallback,R=a.mode,z=n.child,te=z.sibling,c=$i(z,{mode:"hidden",children:c.children}),c.subtreeFlags=z.subtreeFlags&65011712,te!==null?h=$i(te,h):(h=vr(h,R,s,null),h.flags|=2),h.return=a,c.return=a,c.sibling=h,a.child=c,c=h,h=a.child,R=n.child.memoizedState,R===null?R=zf(s):(z=R.cachePool,z!==null?(te=vn._currentValue,z=z.parent!==te?{parent:te,pool:te}:z):z=wm(),R={baseLanes:R.baseLanes|s,cachePool:z}),h.memoizedState=R,h.childLanes=Hf(n,E,s),a.memoizedState=Ff,c):(Ia(a),s=n.child,n=s.sibling,s=$i(s,{mode:"visible",children:c.children}),s.return=a,s.sibling=null,n!==null&&(E=a.deletions,E===null?(a.deletions=[n],a.flags|=16):E.push(n)),a.child=s,a.memoizedState=null,s)}function Gf(n,a){return a=lc({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function lc(n,a){return n=$n(22,n,null,a),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Vf(n,a,s){return ps(a,n.child,null,s),n=Gf(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function k0(n,a,s){n.lanes|=a;var c=n.alternate;c!==null&&(c.lanes|=a),sf(n.return,a,s)}function kf(n,a,s,c,h){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:h}:(m.isBackwards=a,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=s,m.tailMode=h)}function X0(n,a,s){var c=a.pendingProps,h=c.revealOrder,m=c.tail;if(Ln(n,a,c.children,s),c=_n.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&k0(n,s,a);else if(n.tag===19)k0(n,s,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break e;for(;n.sibling===null;){if(n.return===null||n.return===a)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(Me(_n,c),h){case"forwards":for(s=a.child,h=null;s!==null;)n=s.alternate,n!==null&&ac(n)===null&&(h=s),s=s.sibling;s=h,s===null?(h=a.child,a.child=null):(h=s.sibling,s.sibling=null),kf(a,!1,h,s,m);break;case"backwards":for(s=null,h=a.child,a.child=null;h!==null;){if(n=h.alternate,n!==null&&ac(n)===null){a.child=h;break}n=h.sibling,h.sibling=s,s=h,h=n}kf(a,!0,s,null,m);break;case"together":kf(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function ra(n,a,s){if(n!==null&&(a.dependencies=n.dependencies),ka|=a.lanes,(s&a.childLanes)===0)if(n!==null){if(_o(n,a,s,!1),(s&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(r(153));if(a.child!==null){for(n=a.child,s=$i(n,n.pendingProps),a.child=s,s.return=a;n.sibling!==null;)n=n.sibling,s=s.sibling=$i(n,n.pendingProps),s.return=a;s.sibling=null}return a.child}function Xf(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&Vl(n)))}function c1(n,a,s){switch(a.tag){case 3:be(a,a.stateNode.containerInfo),Na(a,vn,n.memoizedState.cache),xo();break;case 27:case 5:Xe(a);break;case 4:be(a,a.stateNode.containerInfo);break;case 10:Na(a,a.type,a.memoizedProps.value);break;case 13:var c=a.memoizedState;if(c!==null)return c.dehydrated!==null?(Ia(a),a.flags|=128,null):(s&a.child.childLanes)!==0?V0(n,a,s):(Ia(a),n=ra(n,a,s),n!==null?n.sibling:null);Ia(a);break;case 19:var h=(n.flags&128)!==0;if(c=(s&a.childLanes)!==0,c||(_o(n,a,s,!1),c=(s&a.childLanes)!==0),h){if(c)return X0(n,a,s);a.flags|=128}if(h=a.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Me(_n,_n.current),c)break;return null;case 22:case 23:return a.lanes=0,I0(n,a,s);case 24:Na(a,vn,n.memoizedState.cache)}return ra(n,a,s)}function W0(n,a,s){if(n!==null)if(n.memoizedProps!==a.pendingProps)Tn=!0;else{if(!Xf(n,s)&&(a.flags&128)===0)return Tn=!1,c1(n,a,s);Tn=(n.flags&131072)!==0}else Tn=!1,Lt&&(a.flags&1048576)!==0&&Sm(a,Gl,a.index);switch(a.lanes=0,a.tag){case 16:e:{n=a.pendingProps;var c=a.elementType,h=c._init;if(c=h(c._payload),a.type=c,typeof c=="function")$u(c)?(n=Rr(c,n),a.tag=1,a=H0(null,a,c,n,s)):(a.tag=0,a=If(null,a,c,n,s));else{if(c!=null){if(h=c.$$typeof,h===L){a.tag=11,a=O0(null,a,c,n,s);break e}else if(h===F){a.tag=14,a=P0(null,a,c,n,s);break e}}throw a=ee(c)||c,Error(r(306,a,""))}}return a;case 0:return If(n,a,a.type,a.pendingProps,s);case 1:return c=a.type,h=Rr(c,a.pendingProps),H0(n,a,c,h,s);case 3:e:{if(be(a,a.stateNode.containerInfo),n===null)throw Error(r(387));c=a.pendingProps;var m=a.memoizedState;h=m.element,df(n,a),Ao(a,c,null,s);var E=a.memoizedState;if(c=E.cache,Na(a,vn,c),c!==m.cache&&of(a,[vn],s,!0),To(),c=E.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:E.cache},a.updateQueue.baseState=m,a.memoizedState=m,a.flags&256){a=G0(n,a,c,s);break e}else if(c!==h){h=hi(Error(r(424)),a),vo(h),a=G0(n,a,c,s);break e}else{switch(n=a.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(en=Ai(n.firstChild),Vn=a,Lt=!0,Sr=null,Ii=!0,s=M0(a,null,c,s),a.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(xo(),c===h){a=ra(n,a,s);break e}Ln(n,a,c,s)}a=a.child}return a;case 26:return oc(n,a),n===null?(s=Zg(a.type,null,a.pendingProps,null))?a.memoizedState=s:Lt||(s=a.type,n=a.pendingProps,c=bc(ae.current).createElement(s),c[Mn]=a,c[Un]=n,Pn(c,s,n),hn(c),a.stateNode=c):a.memoizedState=Zg(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return Xe(a),n===null&&Lt&&(c=a.stateNode=qg(a.type,a.pendingProps,ae.current),Vn=a,Ii=!0,h=en,ja(a.type)?(Eh=h,en=Ai(c.firstChild)):en=h),Ln(n,a,a.pendingProps.children,s),oc(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&Lt&&((h=c=en)&&(c=I1(c,a.type,a.pendingProps,Ii),c!==null?(a.stateNode=c,Vn=a,en=Ai(c.firstChild),Ii=!1,h=!0):h=!1),h||br(a)),Xe(a),h=a.type,m=a.pendingProps,E=n!==null?n.memoizedProps:null,c=m.children,yh(h,m)?c=null:E!==null&&yh(h,E)&&(a.flags|=32),a.memoizedState!==null&&(h=_f(n,a,t1,null,null,s),Yo._currentValue=h),oc(n,a),Ln(n,a,c,s),a.child;case 6:return n===null&&Lt&&((n=s=en)&&(s=F1(s,a.pendingProps,Ii),s!==null?(a.stateNode=s,Vn=a,en=null,n=!0):n=!1),n||br(a)),null;case 13:return V0(n,a,s);case 4:return be(a,a.stateNode.containerInfo),c=a.pendingProps,n===null?a.child=ps(a,null,c,s):Ln(n,a,c,s),a.child;case 11:return O0(n,a,a.type,a.pendingProps,s);case 7:return Ln(n,a,a.pendingProps,s),a.child;case 8:return Ln(n,a,a.pendingProps.children,s),a.child;case 12:return Ln(n,a,a.pendingProps.children,s),a.child;case 10:return c=a.pendingProps,Na(a,a.type,c.value),Ln(n,a,c.children,s),a.child;case 9:return h=a.type._context,c=a.pendingProps.children,Er(a),h=Bn(h),c=c(h),a.flags|=1,Ln(n,a,c,s),a.child;case 14:return P0(n,a,a.type,a.pendingProps,s);case 15:return B0(n,a,a.type,a.pendingProps,s);case 19:return X0(n,a,s);case 31:return c=a.pendingProps,s=a.mode,c={mode:c.mode,children:c.children},n===null?(s=lc(c,s),s.ref=a.ref,a.child=s,s.return=a,a=s):(s=$i(n.child,c),s.ref=a.ref,a.child=s,s.return=a,a=s),a;case 22:return I0(n,a,s);case 24:return Er(a),c=Bn(vn),n===null?(h=uf(),h===null&&(h=jt,m=lf(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=s),h=m),a.memoizedState={parent:c,cache:h},hf(a),Na(a,vn,h)):((n.lanes&s)!==0&&(df(n,a),Ao(a,null,null,s),To()),h=n.memoizedState,m=a.memoizedState,h.parent!==c?(h={parent:c,cache:c},a.memoizedState=h,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=h),Na(a,vn,c)):(c=m.cache,Na(a,vn,c),c!==h.cache&&of(a,[vn],s,!0))),Ln(n,a,a.pendingProps.children,s),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}function sa(n){n.flags|=4}function q0(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!ex(a)){if(a=gi.current,a!==null&&((Tt&4194048)===Tt?Fi!==null:(Tt&62914560)!==Tt&&(Tt&536870912)===0||a!==Fi))throw Mo=ff,Cm;n.flags|=8192}}function cc(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?Ne():536870912,n.lanes|=a,vs|=a)}function Lo(n,a){if(!Lt)switch(n.tailMode){case"hidden":a=n.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function $t(n){var a=n.alternate!==null&&n.alternate.child===n.child,s=0,c=0;if(a)for(var h=n.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags&65011712,c|=h.flags&65011712,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=s,a}function u1(n,a,s){var c=a.pendingProps;switch(nf(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(a),null;case 1:return $t(a),null;case 3:return s=a.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),a.memoizedState.cache!==c&&(a.flags|=2048),na(vn),qe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(go(a)?sa(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Em())),$t(a),null;case 26:return s=a.memoizedState,n===null?(sa(a),s!==null?($t(a),q0(a,s)):($t(a),a.flags&=-16777217)):s?s!==n.memoizedState?(sa(a),$t(a),q0(a,s)):($t(a),a.flags&=-16777217):(n.memoizedProps!==c&&sa(a),$t(a),a.flags&=-16777217),null;case 27:ct(a),s=ae.current;var h=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==c&&sa(a);else{if(!c){if(a.stateNode===null)throw Error(r(166));return $t(a),null}n=De.current,go(a)?bm(a):(n=qg(h,c,s),a.stateNode=n,sa(a))}return $t(a),null;case 5:if(ct(a),s=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==c&&sa(a);else{if(!c){if(a.stateNode===null)throw Error(r(166));return $t(a),null}if(n=De.current,go(a))bm(a);else{switch(h=bc(ae.current),n){case 1:n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=h.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?h.createElement("select",{is:c.is}):h.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?h.createElement(s,{is:c.is}):h.createElement(s)}}n[Mn]=a,n[Un]=c;e:for(h=a.child;h!==null;){if(h.tag===5||h.tag===6)n.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===a)break e;for(;h.sibling===null;){if(h.return===null||h.return===a)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}a.stateNode=n;e:switch(Pn(n,s,c),s){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&sa(a)}}return $t(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==c&&sa(a);else{if(typeof c!="string"&&a.stateNode===null)throw Error(r(166));if(n=ae.current,go(a)){if(n=a.stateNode,s=a.memoizedProps,c=null,h=Vn,h!==null)switch(h.tag){case 27:case 5:c=h.memoizedProps}n[Mn]=a,n=!!(n.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||zg(n.nodeValue,s)),n||br(a)}else n=bc(n).createTextNode(c),n[Mn]=a,a.stateNode=n}return $t(a),null;case 13:if(c=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=go(a),c!==null&&c.dehydrated!==null){if(n===null){if(!h)throw Error(r(318));if(h=a.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(r(317));h[Mn]=a}else xo(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;$t(a),h=!1}else h=Em(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=h),h=!0;if(!h)return a.flags&256?(aa(a),a):(aa(a),null)}if(aa(a),(a.flags&128)!==0)return a.lanes=s,a;if(s=c!==null,n=n!==null&&n.memoizedState!==null,s){c=a.child,h=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(h=c.alternate.memoizedState.cachePool.pool);var m=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==h&&(c.flags|=2048)}return s!==n&&s&&(a.child.flags|=8192),cc(a,a.updateQueue),$t(a),null;case 4:return qe(),n===null&&mh(a.stateNode.containerInfo),$t(a),null;case 10:return na(a.type),$t(a),null;case 19:if(Se(_n),h=a.memoizedState,h===null)return $t(a),null;if(c=(a.flags&128)!==0,m=h.rendering,m===null)if(c)Lo(h,!1);else{if(tn!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(m=ac(n),m!==null){for(a.flags|=128,Lo(h,!1),n=m.updateQueue,a.updateQueue=n,cc(a,n),a.subtreeFlags=0,n=s,s=a.child;s!==null;)ym(s,n),s=s.sibling;return Me(_n,_n.current&1|2),a.child}n=n.sibling}h.tail!==null&&Fe()>hc&&(a.flags|=128,c=!0,Lo(h,!1),a.lanes=4194304)}else{if(!c)if(n=ac(m),n!==null){if(a.flags|=128,c=!0,n=n.updateQueue,a.updateQueue=n,cc(a,n),Lo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!Lt)return $t(a),null}else 2*Fe()-h.renderingStartTime>hc&&s!==536870912&&(a.flags|=128,c=!0,Lo(h,!1),a.lanes=4194304);h.isBackwards?(m.sibling=a.child,a.child=m):(n=h.last,n!==null?n.sibling=m:a.child=m,h.last=m)}return h.tail!==null?(a=h.tail,h.rendering=a,h.tail=a.sibling,h.renderingStartTime=Fe(),a.sibling=null,n=_n.current,Me(_n,c?n&1|2:n&1),a):($t(a),null);case 22:case 23:return aa(a),xf(),c=a.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(a.flags|=8192):c&&(a.flags|=8192),c?(s&536870912)!==0&&(a.flags&128)===0&&($t(a),a.subtreeFlags&6&&(a.flags|=8192)):$t(a),s=a.updateQueue,s!==null&&cc(a,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==s&&(a.flags|=2048),n!==null&&Se(Tr),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),na(vn),$t(a),null;case 25:return null;case 30:return null}throw Error(r(156,a.tag))}function f1(n,a){switch(nf(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return na(vn),qe(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return ct(a),null;case 13:if(aa(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(r(340));xo()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return Se(_n),null;case 4:return qe(),null;case 10:return na(a.type),null;case 22:case 23:return aa(a),xf(),n!==null&&Se(Tr),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return na(vn),null;case 25:return null;default:return null}}function j0(n,a){switch(nf(a),a.tag){case 3:na(vn),qe();break;case 26:case 27:case 5:ct(a);break;case 4:qe();break;case 13:aa(a);break;case 19:Se(_n);break;case 10:na(a.type);break;case 22:case 23:aa(a),xf(),n!==null&&Se(Tr);break;case 24:na(vn)}}function Oo(n,a){try{var s=a.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var h=c.next;s=h;do{if((s.tag&n)===n){c=void 0;var m=s.create,E=s.inst;c=m(),E.destroy=c}s=s.next}while(s!==h)}}catch(R){Wt(a,a.return,R)}}function za(n,a,s){try{var c=a.updateQueue,h=c!==null?c.lastEffect:null;if(h!==null){var m=h.next;c=m;do{if((c.tag&n)===n){var E=c.inst,R=E.destroy;if(R!==void 0){E.destroy=void 0,h=a;var z=s,te=R;try{te()}catch(de){Wt(h,z,de)}}}c=c.next}while(c!==m)}}catch(de){Wt(a,a.return,de)}}function Y0(n){var a=n.updateQueue;if(a!==null){var s=n.stateNode;try{Pm(a,s)}catch(c){Wt(n,n.return,c)}}}function Z0(n,a,s){s.props=Rr(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(c){Wt(n,a,c)}}function Po(n,a){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof s=="function"?n.refCleanup=s(c):s.current=c}}catch(h){Wt(n,a,h)}}function zi(n,a){var s=n.ref,c=n.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(h){Wt(n,a,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){Wt(n,a,h)}else s.current=null}function K0(n){var a=n.type,s=n.memoizedProps,c=n.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break e;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(h){Wt(n,n.return,h)}}function Wf(n,a,s){try{var c=n.stateNode;N1(c,n.type,s,a),c[Un]=a}catch(h){Wt(n,n.return,h)}}function Q0(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&ja(n.type)||n.tag===4}function qf(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Q0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&ja(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function jf(n,a,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,a):(a=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,a.appendChild(n),s=s._reactRootContainer,s!=null||a.onclick!==null||(a.onclick=Sc));else if(c!==4&&(c===27&&ja(n.type)&&(s=n.stateNode,a=null),n=n.child,n!==null))for(jf(n,a,s),n=n.sibling;n!==null;)jf(n,a,s),n=n.sibling}function uc(n,a,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?s.insertBefore(n,a):s.appendChild(n);else if(c!==4&&(c===27&&ja(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(uc(n,a,s),n=n.sibling;n!==null;)uc(n,a,s),n=n.sibling}function $0(n){var a=n.stateNode,s=n.memoizedProps;try{for(var c=n.type,h=a.attributes;h.length;)a.removeAttributeNode(h[0]);Pn(a,c,s),a[Mn]=n,a[Un]=s}catch(m){Wt(n,n.return,m)}}var oa=!1,sn=!1,Yf=!1,J0=typeof WeakSet=="function"?WeakSet:Set,An=null;function h1(n,a){if(n=n.containerInfo,vh=wc,n=um(n),Wu(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var h=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var E=0,R=-1,z=-1,te=0,de=0,_e=n,se=null;t:for(;;){for(var oe;_e!==s||h!==0&&_e.nodeType!==3||(R=E+h),_e!==m||c!==0&&_e.nodeType!==3||(z=E+c),_e.nodeType===3&&(E+=_e.nodeValue.length),(oe=_e.firstChild)!==null;)se=_e,_e=oe;for(;;){if(_e===n)break t;if(se===s&&++te===h&&(R=E),se===m&&++de===c&&(z=E),(oe=_e.nextSibling)!==null)break;_e=se,se=_e.parentNode}_e=oe}s=R===-1||z===-1?null:{start:R,end:z}}else s=null}s=s||{start:0,end:0}}else s=null;for(_h={focusedElem:n,selectionRange:s},wc=!1,An=a;An!==null;)if(a=An,n=a.child,(a.subtreeFlags&1024)!==0&&n!==null)n.return=a,An=n;else for(;An!==null;){switch(a=An,m=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,s=a,h=m.memoizedProps,m=m.memoizedState,c=s.stateNode;try{var ot=Rr(s.type,h,s.elementType===s.type);n=c.getSnapshotBeforeUpdate(ot,m),c.__reactInternalSnapshotBeforeUpdate=n}catch(it){Wt(s,s.return,it)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,s=n.nodeType,s===9)bh(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":bh(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(r(163))}if(n=a.sibling,n!==null){n.return=a.return,An=n;break}An=a.return}}function eg(n,a,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:Ha(n,s),c&4&&Oo(5,s);break;case 1:if(Ha(n,s),c&4)if(n=s.stateNode,a===null)try{n.componentDidMount()}catch(E){Wt(s,s.return,E)}else{var h=Rr(s.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(h,a,n.__reactInternalSnapshotBeforeUpdate)}catch(E){Wt(s,s.return,E)}}c&64&&Y0(s),c&512&&Po(s,s.return);break;case 3:if(Ha(n,s),c&64&&(n=s.updateQueue,n!==null)){if(a=null,s.child!==null)switch(s.child.tag){case 27:case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}try{Pm(n,a)}catch(E){Wt(s,s.return,E)}}break;case 27:a===null&&c&4&&$0(s);case 26:case 5:Ha(n,s),a===null&&c&4&&K0(s),c&512&&Po(s,s.return);break;case 12:Ha(n,s);break;case 13:Ha(n,s),c&4&&ig(n,s),c&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=S1.bind(null,s),z1(n,s))));break;case 22:if(c=s.memoizedState!==null||oa,!c){a=a!==null&&a.memoizedState!==null||sn,h=oa;var m=sn;oa=c,(sn=a)&&!m?Ga(n,s,(s.subtreeFlags&8772)!==0):Ha(n,s),oa=h,sn=m}break;case 30:break;default:Ha(n,s)}}function tg(n){var a=n.alternate;a!==null&&(n.alternate=null,tg(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&Kr(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Kt=null,qn=!1;function la(n,a,s){for(s=s.child;s!==null;)ng(n,a,s),s=s.sibling}function ng(n,a,s){if(ve&&typeof ve.onCommitFiberUnmount=="function")try{ve.onCommitFiberUnmount(me,s)}catch{}switch(s.tag){case 26:sn||zi(s,a),la(n,a,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:sn||zi(s,a);var c=Kt,h=qn;ja(s.type)&&(Kt=s.stateNode,qn=!1),la(n,a,s),Xo(s.stateNode),Kt=c,qn=h;break;case 5:sn||zi(s,a);case 6:if(c=Kt,h=qn,Kt=null,la(n,a,s),Kt=c,qn=h,Kt!==null)if(qn)try{(Kt.nodeType===9?Kt.body:Kt.nodeName==="HTML"?Kt.ownerDocument.body:Kt).removeChild(s.stateNode)}catch(m){Wt(s,a,m)}else try{Kt.removeChild(s.stateNode)}catch(m){Wt(s,a,m)}break;case 18:Kt!==null&&(qn?(n=Kt,Xg(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),$o(n)):Xg(Kt,s.stateNode));break;case 4:c=Kt,h=qn,Kt=s.stateNode.containerInfo,qn=!0,la(n,a,s),Kt=c,qn=h;break;case 0:case 11:case 14:case 15:sn||za(2,s,a),sn||za(4,s,a),la(n,a,s);break;case 1:sn||(zi(s,a),c=s.stateNode,typeof c.componentWillUnmount=="function"&&Z0(s,a,c)),la(n,a,s);break;case 21:la(n,a,s);break;case 22:sn=(c=sn)||s.memoizedState!==null,la(n,a,s),sn=c;break;default:la(n,a,s)}}function ig(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{$o(n)}catch(s){Wt(a,a.return,s)}}function d1(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new J0),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new J0),a;default:throw Error(r(435,n.tag))}}function Zf(n,a){var s=d1(n);a.forEach(function(c){var h=b1.bind(null,n,c);s.has(c)||(s.add(c),c.then(h,h))})}function Jn(n,a){var s=a.deletions;if(s!==null)for(var c=0;c<s.length;c++){var h=s[c],m=n,E=a,R=E;e:for(;R!==null;){switch(R.tag){case 27:if(ja(R.type)){Kt=R.stateNode,qn=!1;break e}break;case 5:Kt=R.stateNode,qn=!1;break e;case 3:case 4:Kt=R.stateNode.containerInfo,qn=!0;break e}R=R.return}if(Kt===null)throw Error(r(160));ng(m,E,h),Kt=null,qn=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)ag(a,n),a=a.sibling}var Ti=null;function ag(n,a){var s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Jn(a,n),ei(n),c&4&&(za(3,n,n.return),Oo(3,n),za(5,n,n.return));break;case 1:Jn(a,n),ei(n),c&512&&(sn||s===null||zi(s,s.return)),c&64&&oa&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var h=Ti;if(Jn(a,n),ei(n),c&512&&(sn||s===null||zi(s,s.return)),c&4){var m=s!==null?s.memoizedState:null;if(c=n.memoizedState,s===null)if(c===null)if(n.stateNode===null){e:{c=n.type,s=n.memoizedProps,h=h.ownerDocument||h;t:switch(c){case"title":m=h.getElementsByTagName("title")[0],(!m||m[Pi]||m[Mn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(c),h.head.insertBefore(m,h.querySelector("head > title"))),Pn(m,c,s),m[Mn]=n,hn(m),c=m;break e;case"link":var E=$g("link","href",h).get(c+(s.href||""));if(E){for(var R=0;R<E.length;R++)if(m=E[R],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(R,1);break t}}m=h.createElement(c),Pn(m,c,s),h.head.appendChild(m);break;case"meta":if(E=$g("meta","content",h).get(c+(s.content||""))){for(R=0;R<E.length;R++)if(m=E[R],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(R,1);break t}}m=h.createElement(c),Pn(m,c,s),h.head.appendChild(m);break;default:throw Error(r(468,c))}m[Mn]=n,hn(m),c=m}n.stateNode=c}else Jg(h,n.type,n.stateNode);else n.stateNode=Qg(h,c,n.memoizedProps);else m!==c?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,c===null?Jg(h,n.type,n.stateNode):Qg(h,c,n.memoizedProps)):c===null&&n.stateNode!==null&&Wf(n,n.memoizedProps,s.memoizedProps)}break;case 27:Jn(a,n),ei(n),c&512&&(sn||s===null||zi(s,s.return)),s!==null&&c&4&&Wf(n,n.memoizedProps,s.memoizedProps);break;case 5:if(Jn(a,n),ei(n),c&512&&(sn||s===null||zi(s,s.return)),n.flags&32){h=n.stateNode;try{an(h,"")}catch(oe){Wt(n,n.return,oe)}}c&4&&n.stateNode!=null&&(h=n.memoizedProps,Wf(n,h,s!==null?s.memoizedProps:h)),c&1024&&(Yf=!0);break;case 6:if(Jn(a,n),ei(n),c&4){if(n.stateNode===null)throw Error(r(162));c=n.memoizedProps,s=n.stateNode;try{s.nodeValue=c}catch(oe){Wt(n,n.return,oe)}}break;case 3:if(Tc=null,h=Ti,Ti=Mc(a.containerInfo),Jn(a,n),Ti=h,ei(n),c&4&&s!==null&&s.memoizedState.isDehydrated)try{$o(a.containerInfo)}catch(oe){Wt(n,n.return,oe)}Yf&&(Yf=!1,rg(n));break;case 4:c=Ti,Ti=Mc(n.stateNode.containerInfo),Jn(a,n),ei(n),Ti=c;break;case 12:Jn(a,n),ei(n);break;case 13:Jn(a,n),ei(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(th=Fe()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Zf(n,c)));break;case 22:h=n.memoizedState!==null;var z=s!==null&&s.memoizedState!==null,te=oa,de=sn;if(oa=te||h,sn=de||z,Jn(a,n),sn=de,oa=te,ei(n),c&8192)e:for(a=n.stateNode,a._visibility=h?a._visibility&-2:a._visibility|1,h&&(s===null||z||oa||sn||wr(n)),s=null,a=n;;){if(a.tag===5||a.tag===26){if(s===null){z=s=a;try{if(m=z.stateNode,h)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{R=z.stateNode;var _e=z.memoizedProps.style,se=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;R.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(oe){Wt(z,z.return,oe)}}}else if(a.tag===6){if(s===null){z=a;try{z.stateNode.nodeValue=h?"":z.memoizedProps}catch(oe){Wt(z,z.return,oe)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break e;for(;a.sibling===null;){if(a.return===null||a.return===n)break e;s===a&&(s=null),a=a.return}s===a&&(s=null),a.sibling.return=a.return,a=a.sibling}c&4&&(c=n.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,Zf(n,s))));break;case 19:Jn(a,n),ei(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Zf(n,c)));break;case 30:break;case 21:break;default:Jn(a,n),ei(n)}}function ei(n){var a=n.flags;if(a&2){try{for(var s,c=n.return;c!==null;){if(Q0(c)){s=c;break}c=c.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var h=s.stateNode,m=qf(n);uc(n,m,h);break;case 5:var E=s.stateNode;s.flags&32&&(an(E,""),s.flags&=-33);var R=qf(n);uc(n,R,E);break;case 3:case 4:var z=s.stateNode.containerInfo,te=qf(n);jf(n,te,z);break;default:throw Error(r(161))}}catch(de){Wt(n,n.return,de)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function rg(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;rg(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function Ha(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)eg(n,a.alternate,a),a=a.sibling}function wr(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:za(4,a,a.return),wr(a);break;case 1:zi(a,a.return);var s=a.stateNode;typeof s.componentWillUnmount=="function"&&Z0(a,a.return,s),wr(a);break;case 27:Xo(a.stateNode);case 26:case 5:zi(a,a.return),wr(a);break;case 22:a.memoizedState===null&&wr(a);break;case 30:wr(a);break;default:wr(a)}n=n.sibling}}function Ga(n,a,s){for(s=s&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var c=a.alternate,h=n,m=a,E=m.flags;switch(m.tag){case 0:case 11:case 15:Ga(h,m,s),Oo(4,m);break;case 1:if(Ga(h,m,s),c=m,h=c.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(te){Wt(c,c.return,te)}if(c=m,h=c.updateQueue,h!==null){var R=c.stateNode;try{var z=h.shared.hiddenCallbacks;if(z!==null)for(h.shared.hiddenCallbacks=null,h=0;h<z.length;h++)Om(z[h],R)}catch(te){Wt(c,c.return,te)}}s&&E&64&&Y0(m),Po(m,m.return);break;case 27:$0(m);case 26:case 5:Ga(h,m,s),s&&c===null&&E&4&&K0(m),Po(m,m.return);break;case 12:Ga(h,m,s);break;case 13:Ga(h,m,s),s&&E&4&&ig(h,m);break;case 22:m.memoizedState===null&&Ga(h,m,s),Po(m,m.return);break;case 30:break;default:Ga(h,m,s)}a=a.sibling}}function Kf(n,a){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&yo(s))}function Qf(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&yo(n))}function Hi(n,a,s,c){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)sg(n,a,s,c),a=a.sibling}function sg(n,a,s,c){var h=a.flags;switch(a.tag){case 0:case 11:case 15:Hi(n,a,s,c),h&2048&&Oo(9,a);break;case 1:Hi(n,a,s,c);break;case 3:Hi(n,a,s,c),h&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&yo(n)));break;case 12:if(h&2048){Hi(n,a,s,c),n=a.stateNode;try{var m=a.memoizedProps,E=m.id,R=m.onPostCommit;typeof R=="function"&&R(E,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(z){Wt(a,a.return,z)}}else Hi(n,a,s,c);break;case 13:Hi(n,a,s,c);break;case 23:break;case 22:m=a.stateNode,E=a.alternate,a.memoizedState!==null?m._visibility&2?Hi(n,a,s,c):Bo(n,a):m._visibility&2?Hi(n,a,s,c):(m._visibility|=2,ms(n,a,s,c,(a.subtreeFlags&10256)!==0)),h&2048&&Kf(E,a);break;case 24:Hi(n,a,s,c),h&2048&&Qf(a.alternate,a);break;default:Hi(n,a,s,c)}}function ms(n,a,s,c,h){for(h=h&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var m=n,E=a,R=s,z=c,te=E.flags;switch(E.tag){case 0:case 11:case 15:ms(m,E,R,z,h),Oo(8,E);break;case 23:break;case 22:var de=E.stateNode;E.memoizedState!==null?de._visibility&2?ms(m,E,R,z,h):Bo(m,E):(de._visibility|=2,ms(m,E,R,z,h)),h&&te&2048&&Kf(E.alternate,E);break;case 24:ms(m,E,R,z,h),h&&te&2048&&Qf(E.alternate,E);break;default:ms(m,E,R,z,h)}a=a.sibling}}function Bo(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var s=n,c=a,h=c.flags;switch(c.tag){case 22:Bo(s,c),h&2048&&Kf(c.alternate,c);break;case 24:Bo(s,c),h&2048&&Qf(c.alternate,c);break;default:Bo(s,c)}a=a.sibling}}var Io=8192;function gs(n){if(n.subtreeFlags&Io)for(n=n.child;n!==null;)og(n),n=n.sibling}function og(n){switch(n.tag){case 26:gs(n),n.flags&Io&&n.memoizedState!==null&&$1(Ti,n.memoizedState,n.memoizedProps);break;case 5:gs(n);break;case 3:case 4:var a=Ti;Ti=Mc(n.stateNode.containerInfo),gs(n),Ti=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=Io,Io=16777216,gs(n),Io=a):gs(n));break;default:gs(n)}}function lg(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function Fo(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];An=c,ug(c,n)}lg(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)cg(n),n=n.sibling}function cg(n){switch(n.tag){case 0:case 11:case 15:Fo(n),n.flags&2048&&za(9,n,n.return);break;case 3:Fo(n);break;case 12:Fo(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,fc(n)):Fo(n);break;default:Fo(n)}}function fc(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];An=c,ug(c,n)}lg(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:za(8,a,a.return),fc(a);break;case 22:s=a.stateNode,s._visibility&2&&(s._visibility&=-3,fc(a));break;default:fc(a)}n=n.sibling}}function ug(n,a){for(;An!==null;){var s=An;switch(s.tag){case 0:case 11:case 15:za(8,s,a);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:yo(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,An=c;else e:for(s=n;An!==null;){c=An;var h=c.sibling,m=c.return;if(tg(c),c===s){An=null;break e}if(h!==null){h.return=m,An=h;break e}An=m}}}var p1={getCacheForType:function(n){var a=Bn(vn),s=a.data.get(n);return s===void 0&&(s=n(),a.data.set(n,s)),s}},m1=typeof WeakMap=="function"?WeakMap:Map,Ft=0,jt=null,St=null,Tt=0,zt=0,ti=null,Va=!1,xs=!1,$f=!1,ca=0,tn=0,ka=0,Cr=0,Jf=0,xi=0,vs=0,zo=null,jn=null,eh=!1,th=0,hc=1/0,dc=null,Xa=null,On=0,Wa=null,_s=null,ys=0,nh=0,ih=null,fg=null,Ho=0,ah=null;function ni(){if((Ft&2)!==0&&Tt!==0)return Tt&-Tt;if(I.T!==null){var n=os;return n!==0?n:fh()}return Ut()}function hg(){xi===0&&(xi=(Tt&536870912)===0||Lt?k():536870912);var n=gi.current;return n!==null&&(n.flags|=32),xi}function ii(n,a,s){(n===jt&&(zt===2||zt===9)||n.cancelPendingCommit!==null)&&(Ss(n,0),qa(n,Tt,xi,!1)),we(n,s),((Ft&2)===0||n!==jt)&&(n===jt&&((Ft&2)===0&&(Cr|=s),tn===4&&qa(n,Tt,xi,!1)),Gi(n))}function dg(n,a,s){if((Ft&6)!==0)throw Error(r(327));var c=!s&&(a&124)===0&&(a&n.expiredLanes)===0||Be(n,a),h=c?v1(n,a):oh(n,a,!0),m=c;do{if(h===0){xs&&!c&&qa(n,a,0,!1);break}else{if(s=n.current.alternate,m&&!g1(s)){h=oh(n,a,!1),m=!1;continue}if(h===2){if(m=a,n.errorRecoveryDisabledLanes&m)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){a=E;e:{var R=n;h=zo;var z=R.current.memoizedState.isDehydrated;if(z&&(Ss(R,E).flags|=256),E=oh(R,E,!1),E!==2){if($f&&!z){R.errorRecoveryDisabledLanes|=m,Cr|=m,h=4;break e}m=jn,jn=h,m!==null&&(jn===null?jn=m:jn.push.apply(jn,m))}h=E}if(m=!1,h!==2)continue}}if(h===1){Ss(n,0),qa(n,a,0,!0);break}e:{switch(c=n,m=h,m){case 0:case 1:throw Error(r(345));case 4:if((a&4194048)!==a)break;case 6:qa(c,a,xi,!Va);break e;case 2:jn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((a&62914560)===a&&(h=th+300-Fe(),10<h)){if(qa(c,a,xi,!Va),et(c,0,!0)!==0)break e;c.timeoutHandle=Vg(pg.bind(null,c,s,jn,dc,eh,a,xi,Cr,vs,Va,m,2,-0,0),h);break e}pg(c,s,jn,dc,eh,a,xi,Cr,vs,Va,m,0,-0,0)}}break}while(!0);Gi(n)}function pg(n,a,s,c,h,m,E,R,z,te,de,_e,se,oe){if(n.timeoutHandle=-1,_e=a.subtreeFlags,(_e&8192||(_e&16785408)===16785408)&&(jo={stylesheets:null,count:0,unsuspend:Q1},og(a),_e=J1(),_e!==null)){n.cancelPendingCommit=_e(Sg.bind(null,n,a,m,s,c,h,E,R,z,de,1,se,oe)),qa(n,m,E,!te);return}Sg(n,a,m,s,c,h,E,R,z)}function g1(n){for(var a=n;;){var s=a.tag;if((s===0||s===11||s===15)&&a.flags&16384&&(s=a.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var h=s[c],m=h.getSnapshot;h=h.value;try{if(!Qn(m(),h))return!1}catch{return!1}}if(s=a.child,a.subtreeFlags&16384&&s!==null)s.return=a,a=s;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function qa(n,a,s,c){a&=~Jf,a&=~Cr,n.suspendedLanes|=a,n.pingedLanes&=~a,c&&(n.warmLanes|=a),c=n.expirationTimes;for(var h=a;0<h;){var m=31-Ie(h),E=1<<m;c[m]=-1,h&=~E}s!==0&&ye(n,s,a)}function pc(){return(Ft&6)===0?(Go(0),!1):!0}function rh(){if(St!==null){if(zt===0)var n=St.return;else n=St,ta=Mr=null,bf(n),ds=null,Uo=0,n=St;for(;n!==null;)j0(n.alternate,n),n=n.return;St=null}}function Ss(n,a){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,O1(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),rh(),jt=n,St=s=$i(n.current,null),Tt=a,zt=0,ti=null,Va=!1,xs=Be(n,a),$f=!1,vs=xi=Jf=Cr=ka=tn=0,jn=zo=null,eh=!1,(a&8)!==0&&(a|=a&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=a;0<c;){var h=31-Ie(c),m=1<<h;a|=n[h],c&=~m}return ca=a,Bl(),s}function mg(n,a){mt=null,I.H=tc,a===bo||a===Wl?(a=Nm(),zt=3):a===Cm?(a=Nm(),zt=4):zt=a===L0?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ti=a,St===null&&(tn=1,sc(n,hi(a,n.current)))}function gg(){var n=I.H;return I.H=tc,n===null?tc:n}function xg(){var n=I.A;return I.A=p1,n}function sh(){tn=4,Va||(Tt&4194048)!==Tt&&gi.current!==null||(xs=!0),(ka&134217727)===0&&(Cr&134217727)===0||jt===null||qa(jt,Tt,xi,!1)}function oh(n,a,s){var c=Ft;Ft|=2;var h=gg(),m=xg();(jt!==n||Tt!==a)&&(dc=null,Ss(n,a)),a=!1;var E=tn;e:do try{if(zt!==0&&St!==null){var R=St,z=ti;switch(zt){case 8:rh(),E=6;break e;case 3:case 2:case 9:case 6:gi.current===null&&(a=!0);var te=zt;if(zt=0,ti=null,bs(n,R,z,te),s&&xs){E=0;break e}break;default:te=zt,zt=0,ti=null,bs(n,R,z,te)}}x1(),E=tn;break}catch(de){mg(n,de)}while(!0);return a&&n.shellSuspendCounter++,ta=Mr=null,Ft=c,I.H=h,I.A=m,St===null&&(jt=null,Tt=0,Bl()),E}function x1(){for(;St!==null;)vg(St)}function v1(n,a){var s=Ft;Ft|=2;var c=gg(),h=xg();jt!==n||Tt!==a?(dc=null,hc=Fe()+500,Ss(n,a)):xs=Be(n,a);e:do try{if(zt!==0&&St!==null){a=St;var m=ti;t:switch(zt){case 1:zt=0,ti=null,bs(n,a,m,1);break;case 2:case 9:if(Dm(m)){zt=0,ti=null,_g(a);break}a=function(){zt!==2&&zt!==9||jt!==n||(zt=7),Gi(n)},m.then(a,a);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:Dm(m)?(zt=0,ti=null,_g(a)):(zt=0,ti=null,bs(n,a,m,7));break;case 5:var E=null;switch(St.tag){case 26:E=St.memoizedState;case 5:case 27:var R=St;if(!E||ex(E)){zt=0,ti=null;var z=R.sibling;if(z!==null)St=z;else{var te=R.return;te!==null?(St=te,mc(te)):St=null}break t}}zt=0,ti=null,bs(n,a,m,5);break;case 6:zt=0,ti=null,bs(n,a,m,6);break;case 8:rh(),tn=6;break e;default:throw Error(r(462))}}_1();break}catch(de){mg(n,de)}while(!0);return ta=Mr=null,I.H=c,I.A=h,Ft=s,St!==null?0:(jt=null,Tt=0,Bl(),tn)}function _1(){for(;St!==null&&!V();)vg(St)}function vg(n){var a=W0(n.alternate,n,ca);n.memoizedProps=n.pendingProps,a===null?mc(n):St=a}function _g(n){var a=n,s=a.alternate;switch(a.tag){case 15:case 0:a=z0(s,a,a.pendingProps,a.type,void 0,Tt);break;case 11:a=z0(s,a,a.pendingProps,a.type.render,a.ref,Tt);break;case 5:bf(a);default:j0(s,a),a=St=ym(a,ca),a=W0(s,a,ca)}n.memoizedProps=n.pendingProps,a===null?mc(n):St=a}function bs(n,a,s,c){ta=Mr=null,bf(a),ds=null,Uo=0;var h=a.return;try{if(l1(n,h,a,s,Tt)){tn=1,sc(n,hi(s,n.current)),St=null;return}}catch(m){if(h!==null)throw St=h,m;tn=1,sc(n,hi(s,n.current)),St=null;return}a.flags&32768?(Lt||c===1?n=!0:xs||(Tt&536870912)!==0?n=!1:(Va=n=!0,(c===2||c===9||c===3||c===6)&&(c=gi.current,c!==null&&c.tag===13&&(c.flags|=16384))),yg(a,n)):mc(a)}function mc(n){var a=n;do{if((a.flags&32768)!==0){yg(a,Va);return}n=a.return;var s=u1(a.alternate,a,ca);if(s!==null){St=s;return}if(a=a.sibling,a!==null){St=a;return}St=a=n}while(a!==null);tn===0&&(tn=5)}function yg(n,a){do{var s=f1(n.alternate,n);if(s!==null){s.flags&=32767,St=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!a&&(n=n.sibling,n!==null)){St=n;return}St=n=s}while(n!==null);tn=6,St=null}function Sg(n,a,s,c,h,m,E,R,z){n.cancelPendingCommit=null;do gc();while(On!==0);if((Ft&6)!==0)throw Error(r(327));if(a!==null){if(a===n.current)throw Error(r(177));if(m=a.lanes|a.childLanes,m|=Ku,Te(n,s,m,E,R,z),n===jt&&(St=jt=null,Tt=0),_s=a,Wa=n,ys=s,nh=m,ih=h,fg=c,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,M1(je,function(){return Ag(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||c){c=I.T,I.T=null,h=W.p,W.p=2,E=Ft,Ft|=4;try{h1(n,a,s)}finally{Ft=E,W.p=h,I.T=c}}On=1,bg(),Mg(),Eg()}}function bg(){if(On===1){On=0;var n=Wa,a=_s,s=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||s){s=I.T,I.T=null;var c=W.p;W.p=2;var h=Ft;Ft|=4;try{ag(a,n);var m=_h,E=um(n.containerInfo),R=m.focusedElem,z=m.selectionRange;if(E!==R&&R&&R.ownerDocument&&cm(R.ownerDocument.documentElement,R)){if(z!==null&&Wu(R)){var te=z.start,de=z.end;if(de===void 0&&(de=te),"selectionStart"in R)R.selectionStart=te,R.selectionEnd=Math.min(de,R.value.length);else{var _e=R.ownerDocument||document,se=_e&&_e.defaultView||window;if(se.getSelection){var oe=se.getSelection(),ot=R.textContent.length,it=Math.min(z.start,ot),Vt=z.end===void 0?it:Math.min(z.end,ot);!oe.extend&&it>Vt&&(E=Vt,Vt=it,it=E);var Z=lm(R,it),X=lm(R,Vt);if(Z&&X&&(oe.rangeCount!==1||oe.anchorNode!==Z.node||oe.anchorOffset!==Z.offset||oe.focusNode!==X.node||oe.focusOffset!==X.offset)){var J=_e.createRange();J.setStart(Z.node,Z.offset),oe.removeAllRanges(),it>Vt?(oe.addRange(J),oe.extend(X.node,X.offset)):(J.setEnd(X.node,X.offset),oe.addRange(J))}}}}for(_e=[],oe=R;oe=oe.parentNode;)oe.nodeType===1&&_e.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<_e.length;R++){var xe=_e[R];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}wc=!!vh,_h=vh=null}finally{Ft=h,W.p=c,I.T=s}}n.current=a,On=2}}function Mg(){if(On===2){On=0;var n=Wa,a=_s,s=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||s){s=I.T,I.T=null;var c=W.p;W.p=2;var h=Ft;Ft|=4;try{eg(n,a.alternate,a)}finally{Ft=h,W.p=c,I.T=s}}On=3}}function Eg(){if(On===4||On===3){On=0,He();var n=Wa,a=_s,s=ys,c=fg;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?On=5:(On=0,_s=Wa=null,Tg(n,n.pendingLanes));var h=n.pendingLanes;if(h===0&&(Xa=null),Bt(s),a=a.stateNode,ve&&typeof ve.onCommitFiberRoot=="function")try{ve.onCommitFiberRoot(me,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=I.T,h=W.p,W.p=2,I.T=null;try{for(var m=n.onRecoverableError,E=0;E<c.length;E++){var R=c[E];m(R.value,{componentStack:R.stack})}}finally{I.T=a,W.p=h}}(ys&3)!==0&&gc(),Gi(n),h=n.pendingLanes,(s&4194090)!==0&&(h&42)!==0?n===ah?Ho++:(Ho=0,ah=n):Ho=0,Go(0)}}function Tg(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,yo(a)))}function gc(n){return bg(),Mg(),Eg(),Ag()}function Ag(){if(On!==5)return!1;var n=Wa,a=nh;nh=0;var s=Bt(ys),c=I.T,h=W.p;try{W.p=32>s?32:s,I.T=null,s=ih,ih=null;var m=Wa,E=ys;if(On=0,_s=Wa=null,ys=0,(Ft&6)!==0)throw Error(r(331));var R=Ft;if(Ft|=4,cg(m.current),sg(m,m.current,E,s),Ft=R,Go(0,!1),ve&&typeof ve.onPostCommitFiberRoot=="function")try{ve.onPostCommitFiberRoot(me,m)}catch{}return!0}finally{W.p=h,I.T=c,Tg(n,a)}}function Rg(n,a,s){a=hi(s,a),a=Bf(n.stateNode,a,2),n=Pa(n,a,2),n!==null&&(we(n,2),Gi(n))}function Wt(n,a,s){if(n.tag===3)Rg(n,n,s);else for(;a!==null;){if(a.tag===3){Rg(a,n,s);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Xa===null||!Xa.has(c))){n=hi(s,n),s=U0(2),c=Pa(a,s,2),c!==null&&(N0(s,c,a,n),we(c,2),Gi(c));break}}a=a.return}}function lh(n,a,s){var c=n.pingCache;if(c===null){c=n.pingCache=new m1;var h=new Set;c.set(a,h)}else h=c.get(a),h===void 0&&(h=new Set,c.set(a,h));h.has(s)||($f=!0,h.add(s),n=y1.bind(null,n,a,s),a.then(n,n))}function y1(n,a,s){var c=n.pingCache;c!==null&&c.delete(a),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,jt===n&&(Tt&s)===s&&(tn===4||tn===3&&(Tt&62914560)===Tt&&300>Fe()-th?(Ft&2)===0&&Ss(n,0):Jf|=s,vs===Tt&&(vs=0)),Gi(n)}function wg(n,a){a===0&&(a=Ne()),n=is(n,a),n!==null&&(we(n,a),Gi(n))}function S1(n){var a=n.memoizedState,s=0;a!==null&&(s=a.retryLane),wg(n,s)}function b1(n,a){var s=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(s=h.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(r(314))}c!==null&&c.delete(a),wg(n,s)}function M1(n,a){return ut(n,a)}var xc=null,Ms=null,ch=!1,vc=!1,uh=!1,Dr=0;function Gi(n){n!==Ms&&n.next===null&&(Ms===null?xc=Ms=n:Ms=Ms.next=n),vc=!0,ch||(ch=!0,T1())}function Go(n,a){if(!uh&&vc){uh=!0;do for(var s=!1,c=xc;c!==null;){if(n!==0){var h=c.pendingLanes;if(h===0)var m=0;else{var E=c.suspendedLanes,R=c.pingedLanes;m=(1<<31-Ie(42|n)+1)-1,m&=h&~(E&~R),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,Ng(c,m))}else m=Tt,m=et(c,c===jt?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||Be(c,m)||(s=!0,Ng(c,m));c=c.next}while(s);uh=!1}}function E1(){Cg()}function Cg(){vc=ch=!1;var n=0;Dr!==0&&(L1()&&(n=Dr),Dr=0);for(var a=Fe(),s=null,c=xc;c!==null;){var h=c.next,m=Dg(c,a);m===0?(c.next=null,s===null?xc=h:s.next=h,h===null&&(Ms=s)):(s=c,(n!==0||(m&3)!==0)&&(vc=!0)),c=h}Go(n)}function Dg(n,a){for(var s=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var E=31-Ie(m),R=1<<E,z=h[E];z===-1?((R&s)===0||(R&c)!==0)&&(h[E]=rt(R,a)):z<=a&&(n.expiredLanes|=R),m&=~R}if(a=jt,s=Tt,s=et(n,n===a?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,s===0||n===a&&(zt===2||zt===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&Rt(c),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||Be(n,s)){if(a=s&-s,a===n.callbackPriority)return a;switch(c!==null&&Rt(c),Bt(s)){case 2:case 8:s=Ot;break;case 32:s=je;break;case 268435456:s=B;break;default:s=je}return c=Ug.bind(null,n),s=ut(s,c),n.callbackPriority=a,n.callbackNode=s,a}return c!==null&&c!==null&&Rt(c),n.callbackPriority=2,n.callbackNode=null,2}function Ug(n,a){if(On!==0&&On!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(gc()&&n.callbackNode!==s)return null;var c=Tt;return c=et(n,n===jt?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(dg(n,c,a),Dg(n,Fe()),n.callbackNode!=null&&n.callbackNode===s?Ug.bind(null,n):null)}function Ng(n,a){if(gc())return null;dg(n,a,!0)}function T1(){P1(function(){(Ft&6)!==0?ut(Pe,E1):Cg()})}function fh(){return Dr===0&&(Dr=k()),Dr}function Lg(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Cl(""+n)}function Og(n,a){var s=a.ownerDocument.createElement("input");return s.name=a.name,s.value=a.value,n.id&&s.setAttribute("form",n.id),a.parentNode.insertBefore(s,a),n=new FormData(n),s.parentNode.removeChild(s),n}function A1(n,a,s,c,h){if(a==="submit"&&s&&s.stateNode===h){var m=Lg((h[Un]||null).action),E=c.submitter;E&&(a=(a=E[Un]||null)?Lg(a.formAction):E.getAttribute("formAction"),a!==null&&(m=a,E=null));var R=new Ll("action","action",null,c,h);n.push({event:R,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Dr!==0){var z=E?Og(h,E):new FormData(h);Uf(s,{pending:!0,data:z,method:h.method,action:m},null,z)}}else typeof m=="function"&&(R.preventDefault(),z=E?Og(h,E):new FormData(h),Uf(s,{pending:!0,data:z,method:h.method,action:m},m,z))},currentTarget:h}]})}}for(var hh=0;hh<Zu.length;hh++){var dh=Zu[hh],R1=dh.toLowerCase(),w1=dh[0].toUpperCase()+dh.slice(1);Ei(R1,"on"+w1)}Ei(dm,"onAnimationEnd"),Ei(pm,"onAnimationIteration"),Ei(mm,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(Wy,"onTransitionRun"),Ei(qy,"onTransitionStart"),Ei(jy,"onTransitionCancel"),Ei(gm,"onTransitionEnd"),Ca("onMouseEnter",["mouseout","mouseover"]),Ca("onMouseLeave",["mouseout","mouseover"]),Ca("onPointerEnter",["pointerout","pointerover"]),Ca("onPointerLeave",["pointerout","pointerover"]),Ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ki("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));function Pg(n,a){a=(a&4)!==0;for(var s=0;s<n.length;s++){var c=n[s],h=c.event;c=c.listeners;e:{var m=void 0;if(a)for(var E=c.length-1;0<=E;E--){var R=c[E],z=R.instance,te=R.currentTarget;if(R=R.listener,z!==m&&h.isPropagationStopped())break e;m=R,h.currentTarget=te;try{m(h)}catch(de){rc(de)}h.currentTarget=null,m=z}else for(E=0;E<c.length;E++){if(R=c[E],z=R.instance,te=R.currentTarget,R=R.listener,z!==m&&h.isPropagationStopped())break e;m=R,h.currentTarget=te;try{m(h)}catch(de){rc(de)}h.currentTarget=null,m=z}}}}function bt(n,a){var s=a[bi];s===void 0&&(s=a[bi]=new Set);var c=n+"__bubble";s.has(c)||(Bg(a,n,2,!1),s.add(c))}function ph(n,a,s){var c=0;a&&(c|=4),Bg(s,n,c,a)}var _c="_reactListening"+Math.random().toString(36).slice(2);function mh(n){if(!n[_c]){n[_c]=!0,Rl.forEach(function(s){s!=="selectionchange"&&(C1.has(s)||ph(s,!1,n),ph(s,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[_c]||(a[_c]=!0,ph("selectionchange",!1,a))}}function Bg(n,a,s,c){switch(sx(a)){case 2:var h=nS;break;case 8:h=iS;break;default:h=Ch}s=h.bind(null,a,s,n),h=void 0,!Bu||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(a,s,{capture:!0,passive:h}):n.addEventListener(a,s,!0):h!==void 0?n.addEventListener(a,s,{passive:h}):n.addEventListener(a,s,!1)}function gh(n,a,s,c,h){var m=c;if((a&1)===0&&(a&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var R=c.stateNode.containerInfo;if(R===h)break;if(E===4)for(E=c.return;E!==null;){var z=E.tag;if((z===3||z===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;R!==null;){if(E=Mi(R),E===null)return;if(z=E.tag,z===5||z===6||z===26||z===27){c=m=E;continue e}R=R.parentNode}}c=c.return}kp(function(){var te=m,de=Ou(s),_e=[];e:{var se=xm.get(n);if(se!==void 0){var oe=Ll,ot=n;switch(n){case"keypress":if(Ul(s)===0)break e;case"keydown":case"keyup":oe=My;break;case"focusin":ot="focus",oe=Hu;break;case"focusout":ot="blur",oe=Hu;break;case"beforeblur":case"afterblur":oe=Hu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=fy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=Ay;break;case dm:case pm:case mm:oe=py;break;case gm:oe=wy;break;case"scroll":case"scrollend":oe=cy;break;case"wheel":oe=Dy;break;case"copy":case"cut":case"paste":oe=gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=Yp;break;case"toggle":case"beforetoggle":oe=Ny}var it=(a&4)!==0,Vt=!it&&(n==="scroll"||n==="scrollend"),Z=it?se!==null?se+"Capture":null:se;it=[];for(var X=te,J;X!==null;){var xe=X;if(J=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||J===null||Z===null||(xe=so(X,Z),xe!=null&&it.push(ko(X,xe,J))),Vt)break;X=X.return}0<it.length&&(se=new oe(se,ot,null,s,de),_e.push({event:se,listeners:it}))}}if((a&7)===0){e:{if(se=n==="mouseover"||n==="pointerover",oe=n==="mouseout"||n==="pointerout",se&&s!==Lu&&(ot=s.relatedTarget||s.fromElement)&&(Mi(ot)||ot[Yi]))break e;if((oe||se)&&(se=de.window===de?de:(se=de.ownerDocument)?se.defaultView||se.parentWindow:window,oe?(ot=s.relatedTarget||s.toElement,oe=te,ot=ot?Mi(ot):null,ot!==null&&(Vt=l(ot),it=ot.tag,ot!==Vt||it!==5&&it!==27&&it!==6)&&(ot=null)):(oe=null,ot=te),oe!==ot)){if(it=qp,xe="onMouseLeave",Z="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(it=Yp,xe="onPointerLeave",Z="onPointerEnter",X="pointer"),Vt=oe==null?se:Ra(oe),J=ot==null?se:Ra(ot),se=new it(xe,X+"leave",oe,s,de),se.target=Vt,se.relatedTarget=J,xe=null,Mi(de)===te&&(it=new it(Z,X+"enter",ot,s,de),it.target=J,it.relatedTarget=Vt,xe=it),Vt=xe,oe&&ot)t:{for(it=oe,Z=ot,X=0,J=it;J;J=Es(J))X++;for(J=0,xe=Z;xe;xe=Es(xe))J++;for(;0<X-J;)it=Es(it),X--;for(;0<J-X;)Z=Es(Z),J--;for(;X--;){if(it===Z||Z!==null&&it===Z.alternate)break t;it=Es(it),Z=Es(Z)}it=null}else it=null;oe!==null&&Ig(_e,se,oe,it,!1),ot!==null&&Vt!==null&&Ig(_e,Vt,ot,it,!0)}}e:{if(se=te?Ra(te):window,oe=se.nodeName&&se.nodeName.toLowerCase(),oe==="select"||oe==="input"&&se.type==="file")var ke=nm;else if(em(se))if(im)ke=Vy;else{ke=Hy;var vt=zy}else oe=se.nodeName,!oe||oe.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?te&&Nu(te.elementType)&&(ke=nm):ke=Gy;if(ke&&(ke=ke(n,te))){tm(_e,ke,s,de);break e}vt&&vt(n,se,te),n==="focusout"&&te&&se.type==="number"&&te.memoizedProps.value!=null&&Xt(se,"number",se.value)}switch(vt=te?Ra(te):window,n){case"focusin":(em(vt)||vt.contentEditable==="true")&&(es=vt,qu=te,mo=null);break;case"focusout":mo=qu=es=null;break;case"mousedown":ju=!0;break;case"contextmenu":case"mouseup":case"dragend":ju=!1,fm(_e,s,de);break;case"selectionchange":if(Xy)break;case"keydown":case"keyup":fm(_e,s,de)}var Ke;if(Vu)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else Jr?$p(n,s)&&(at="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(at="onCompositionStart");at&&(Zp&&s.locale!=="ko"&&(Jr||at!=="onCompositionStart"?at==="onCompositionEnd"&&Jr&&(Ke=Xp()):(Ua=de,Iu="value"in Ua?Ua.value:Ua.textContent,Jr=!0)),vt=yc(te,at),0<vt.length&&(at=new jp(at,n,null,s,de),_e.push({event:at,listeners:vt}),Ke?at.data=Ke:(Ke=Jp(s),Ke!==null&&(at.data=Ke)))),(Ke=Oy?Py(n,s):By(n,s))&&(at=yc(te,"onBeforeInput"),0<at.length&&(vt=new jp("onBeforeInput","beforeinput",null,s,de),_e.push({event:vt,listeners:at}),vt.data=Ke)),A1(_e,n,te,s,de)}Pg(_e,a)})}function ko(n,a,s){return{instance:n,listener:a,currentTarget:s}}function yc(n,a){for(var s=a+"Capture",c=[];n!==null;){var h=n,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=so(n,s),h!=null&&c.unshift(ko(n,h,m)),h=so(n,a),h!=null&&c.push(ko(n,h,m))),n.tag===3)return c;n=n.return}return[]}function Es(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Ig(n,a,s,c,h){for(var m=a._reactName,E=[];s!==null&&s!==c;){var R=s,z=R.alternate,te=R.stateNode;if(R=R.tag,z!==null&&z===c)break;R!==5&&R!==26&&R!==27||te===null||(z=te,h?(te=so(s,m),te!=null&&E.unshift(ko(s,te,z))):h||(te=so(s,m),te!=null&&E.push(ko(s,te,z)))),s=s.return}E.length!==0&&n.push({event:a,listeners:E})}var D1=/\r\n?/g,U1=/\u0000|\uFFFD/g;function Fg(n){return(typeof n=="string"?n:""+n).replace(D1,`
`).replace(U1,"")}function zg(n,a){return a=Fg(a),Fg(n)===a}function Sc(){}function Gt(n,a,s,c,h,m){switch(s){case"children":typeof c=="string"?a==="body"||a==="textarea"&&c===""||an(n,c):(typeof c=="number"||typeof c=="bigint")&&a!=="body"&&an(n,""+c);break;case"className":Ae(n,"class",c);break;case"tabIndex":Ae(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Ae(n,s,c);break;case"style":Gp(n,c,m);break;case"data":if(a!=="object"){Ae(n,"data",c);break}case"src":case"href":if(c===""&&(a!=="a"||s!=="href")){n.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=Cl(""+c),n.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(a!=="input"&&Gt(n,a,"name",h.name,h,null),Gt(n,a,"formEncType",h.formEncType,h,null),Gt(n,a,"formMethod",h.formMethod,h,null),Gt(n,a,"formTarget",h.formTarget,h,null)):(Gt(n,a,"encType",h.encType,h,null),Gt(n,a,"method",h.method,h,null),Gt(n,a,"target",h.target,h,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=Cl(""+c),n.setAttribute(s,c);break;case"onClick":c!=null&&(n.onclick=Sc);break;case"onScroll":c!=null&&bt("scroll",n);break;case"onScrollEnd":c!=null&&bt("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(r(60));n.innerHTML=s}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}s=Cl(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""+c):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":c===!0?n.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,c):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(s,c):n.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(s):n.setAttribute(s,c);break;case"popover":bt("beforetoggle",n),bt("toggle",n),$(n,"popover",c);break;case"xlinkActuate":Ue(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Ue(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Ue(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Ue(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Ue(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Ue(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Ue(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Ue(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Ue(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":$(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=oy.get(s)||s,$(n,s,c))}}function xh(n,a,s,c,h,m){switch(s){case"style":Gp(n,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(r(60));n.innerHTML=s}}break;case"children":typeof c=="string"?an(n,c):(typeof c=="number"||typeof c=="bigint")&&an(n,""+c);break;case"onScroll":c!=null&&bt("scroll",n);break;case"onScrollEnd":c!=null&&bt("scrollend",n);break;case"onClick":c!=null&&(n.onclick=Sc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wl.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),a=s.slice(2,h?s.length-7:void 0),m=n[Un]||null,m=m!=null?m[s]:null,typeof m=="function"&&n.removeEventListener(a,m,h),typeof c=="function")){typeof m!="function"&&m!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(a,c,h);break e}s in n?n[s]=c:c===!0?n.setAttribute(s,""):$(n,s,c)}}}function Pn(n,a,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":bt("error",n),bt("load",n);var c=!1,h=!1,m;for(m in s)if(s.hasOwnProperty(m)){var E=s[m];if(E!=null)switch(m){case"src":c=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Gt(n,a,m,E,s,null)}}h&&Gt(n,a,"srcSet",s.srcSet,s,null),c&&Gt(n,a,"src",s.src,s,null);return;case"input":bt("invalid",n);var R=m=E=h=null,z=null,te=null;for(c in s)if(s.hasOwnProperty(c)){var de=s[c];if(de!=null)switch(c){case"name":h=de;break;case"type":E=de;break;case"checked":z=de;break;case"defaultChecked":te=de;break;case"value":m=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,a));break;default:Gt(n,a,c,de,s,null)}}Da(n,m,R,z,te,E,h,!1),Je(n);return;case"select":bt("invalid",n),c=E=m=null;for(h in s)if(s.hasOwnProperty(h)&&(R=s[h],R!=null))switch(h){case"value":m=R;break;case"defaultValue":E=R;break;case"multiple":c=R;default:Gt(n,a,h,R,s,null)}a=m,s=E,n.multiple=!!c,a!=null?nn(n,!!c,a,!1):s!=null&&nn(n,!!c,s,!0);return;case"textarea":bt("invalid",n),m=h=c=null;for(E in s)if(s.hasOwnProperty(E)&&(R=s[E],R!=null))switch(E){case"value":c=R;break;case"defaultValue":h=R;break;case"children":m=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Gt(n,a,E,R,s,null)}En(n,c,h,m),Je(n);return;case"option":for(z in s)if(s.hasOwnProperty(z)&&(c=s[z],c!=null))switch(z){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Gt(n,a,z,c,s,null)}return;case"dialog":bt("beforetoggle",n),bt("toggle",n),bt("cancel",n),bt("close",n);break;case"iframe":case"object":bt("load",n);break;case"video":case"audio":for(c=0;c<Vo.length;c++)bt(Vo[c],n);break;case"image":bt("error",n),bt("load",n);break;case"details":bt("toggle",n);break;case"embed":case"source":case"link":bt("error",n),bt("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in s)if(s.hasOwnProperty(te)&&(c=s[te],c!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Gt(n,a,te,c,s,null)}return;default:if(Nu(a)){for(de in s)s.hasOwnProperty(de)&&(c=s[de],c!==void 0&&xh(n,a,de,c,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(c=s[R],c!=null&&Gt(n,a,R,c,s,null))}function N1(n,a,s,c){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,E=null,R=null,z=null,te=null,de=null;for(oe in s){var _e=s[oe];if(s.hasOwnProperty(oe)&&_e!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":z=_e;default:c.hasOwnProperty(oe)||Gt(n,a,oe,null,c,_e)}}for(var se in c){var oe=c[se];if(_e=s[se],c.hasOwnProperty(se)&&(oe!=null||_e!=null))switch(se){case"type":m=oe;break;case"name":h=oe;break;case"checked":te=oe;break;case"defaultChecked":de=oe;break;case"value":E=oe;break;case"defaultValue":R=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,a));break;default:oe!==_e&&Gt(n,a,se,oe,c,_e)}}Nn(n,E,R,z,te,de,m,h);return;case"select":oe=E=R=se=null;for(m in s)if(z=s[m],s.hasOwnProperty(m)&&z!=null)switch(m){case"value":break;case"multiple":oe=z;default:c.hasOwnProperty(m)||Gt(n,a,m,null,c,z)}for(h in c)if(m=c[h],z=s[h],c.hasOwnProperty(h)&&(m!=null||z!=null))switch(h){case"value":se=m;break;case"defaultValue":R=m;break;case"multiple":E=m;default:m!==z&&Gt(n,a,h,m,c,z)}a=R,s=E,c=oe,se!=null?nn(n,!!s,se,!1):!!c!=!!s&&(a!=null?nn(n,!!s,a,!0):nn(n,!!s,s?[]:"",!1));return;case"textarea":oe=se=null;for(R in s)if(h=s[R],s.hasOwnProperty(R)&&h!=null&&!c.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Gt(n,a,R,null,c,h)}for(E in c)if(h=c[E],m=s[E],c.hasOwnProperty(E)&&(h!=null||m!=null))switch(E){case"value":se=h;break;case"defaultValue":oe=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(r(91));break;default:h!==m&&Gt(n,a,E,h,c,m)}Gn(n,se,oe);return;case"option":for(var ot in s)if(se=s[ot],s.hasOwnProperty(ot)&&se!=null&&!c.hasOwnProperty(ot))switch(ot){case"selected":n.selected=!1;break;default:Gt(n,a,ot,null,c,se)}for(z in c)if(se=c[z],oe=s[z],c.hasOwnProperty(z)&&se!==oe&&(se!=null||oe!=null))switch(z){case"selected":n.selected=se&&typeof se!="function"&&typeof se!="symbol";break;default:Gt(n,a,z,se,c,oe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in s)se=s[it],s.hasOwnProperty(it)&&se!=null&&!c.hasOwnProperty(it)&&Gt(n,a,it,null,c,se);for(te in c)if(se=c[te],oe=s[te],c.hasOwnProperty(te)&&se!==oe&&(se!=null||oe!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(r(137,a));break;default:Gt(n,a,te,se,c,oe)}return;default:if(Nu(a)){for(var Vt in s)se=s[Vt],s.hasOwnProperty(Vt)&&se!==void 0&&!c.hasOwnProperty(Vt)&&xh(n,a,Vt,void 0,c,se);for(de in c)se=c[de],oe=s[de],!c.hasOwnProperty(de)||se===oe||se===void 0&&oe===void 0||xh(n,a,de,se,c,oe);return}}for(var Z in s)se=s[Z],s.hasOwnProperty(Z)&&se!=null&&!c.hasOwnProperty(Z)&&Gt(n,a,Z,null,c,se);for(_e in c)se=c[_e],oe=s[_e],!c.hasOwnProperty(_e)||se===oe||se==null&&oe==null||Gt(n,a,_e,se,c,oe)}var vh=null,_h=null;function bc(n){return n.nodeType===9?n:n.ownerDocument}function Hg(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gg(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function yh(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Sh=null;function L1(){var n=window.event;return n&&n.type==="popstate"?n===Sh?!1:(Sh=n,!0):(Sh=null,!1)}var Vg=typeof setTimeout=="function"?setTimeout:void 0,O1=typeof clearTimeout=="function"?clearTimeout:void 0,kg=typeof Promise=="function"?Promise:void 0,P1=typeof queueMicrotask=="function"?queueMicrotask:typeof kg<"u"?function(n){return kg.resolve(null).then(n).catch(B1)}:Vg;function B1(n){setTimeout(function(){throw n})}function ja(n){return n==="head"}function Xg(n,a){var s=a,c=0,h=0;do{var m=s.nextSibling;if(n.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<c&&8>c){s=c;var E=n.ownerDocument;if(s&1&&Xo(E.documentElement),s&2&&Xo(E.body),s&4)for(s=E.head,Xo(s),E=s.firstChild;E;){var R=E.nextSibling,z=E.nodeName;E[Pi]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=R}}if(h===0){n.removeChild(m),$o(a);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:c=s.charCodeAt(0)-48;else c=0;s=m}while(s);$o(a)}function bh(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var s=a;switch(a=a.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":bh(s),Kr(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function I1(n,a,s,c){for(;n.nodeType===1;){var h=s;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[Pi])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==h.rel||n.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=Ai(n.nextSibling),n===null)break}return null}function F1(n,a,s){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=Ai(n.nextSibling),n===null))return null;return n}function Mh(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function z1(n,a){var s=n.ownerDocument;if(n.data!=="$?"||s.readyState==="complete")a();else{var c=function(){a(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function Ai(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}var Eh=null;function Wg(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(a===0)return n;a--}else s==="/$"&&a++}n=n.previousSibling}return null}function qg(n,a,s){switch(a=bc(s),n){case"html":if(n=a.documentElement,!n)throw Error(r(452));return n;case"head":if(n=a.head,!n)throw Error(r(453));return n;case"body":if(n=a.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}function Xo(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);Kr(n)}var vi=new Map,jg=new Set;function Mc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ua=W.d;W.d={f:H1,r:G1,D:V1,C:k1,L:X1,m:W1,X:j1,S:q1,M:Y1};function H1(){var n=ua.f(),a=pc();return n||a}function G1(n){var a=Zi(n);a!==null&&a.tag===5&&a.type==="form"?d0(a):ua.r(n)}var Ts=typeof document>"u"?null:document;function Yg(n,a,s){var c=Ts;if(c&&typeof a=="string"&&a){var h=xn(a);h='link[rel="'+n+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),jg.has(h)||(jg.add(h),n={rel:n,crossOrigin:s,href:a},c.querySelector(h)===null&&(a=c.createElement("link"),Pn(a,"link",n),hn(a),c.head.appendChild(a)))}}function V1(n){ua.D(n),Yg("dns-prefetch",n,null)}function k1(n,a){ua.C(n,a),Yg("preconnect",n,a)}function X1(n,a,s){ua.L(n,a,s);var c=Ts;if(c&&n&&a){var h='link[rel="preload"][as="'+xn(a)+'"]';a==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+xn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+xn(s.imageSizes)+'"]')):h+='[href="'+xn(n)+'"]';var m=h;switch(a){case"style":m=As(n);break;case"script":m=Rs(n)}vi.has(m)||(n=g({rel:"preload",href:a==="image"&&s&&s.imageSrcSet?void 0:n,as:a},s),vi.set(m,n),c.querySelector(h)!==null||a==="style"&&c.querySelector(Wo(m))||a==="script"&&c.querySelector(qo(m))||(a=c.createElement("link"),Pn(a,"link",n),hn(a),c.head.appendChild(a)))}}function W1(n,a){ua.m(n,a);var s=Ts;if(s&&n){var c=a&&typeof a.as=="string"?a.as:"script",h='link[rel="modulepreload"][as="'+xn(c)+'"][href="'+xn(n)+'"]',m=h;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Rs(n)}if(!vi.has(m)&&(n=g({rel:"modulepreload",href:n},a),vi.set(m,n),s.querySelector(h)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(qo(m)))return}c=s.createElement("link"),Pn(c,"link",n),hn(c),s.head.appendChild(c)}}}function q1(n,a,s){ua.S(n,a,s);var c=Ts;if(c&&n){var h=wa(c).hoistableStyles,m=As(n);a=a||"default";var E=h.get(m);if(!E){var R={loading:0,preload:null};if(E=c.querySelector(Wo(m)))R.loading=5;else{n=g({rel:"stylesheet",href:n,"data-precedence":a},s),(s=vi.get(m))&&Th(n,s);var z=E=c.createElement("link");hn(z),Pn(z,"link",n),z._p=new Promise(function(te,de){z.onload=te,z.onerror=de}),z.addEventListener("load",function(){R.loading|=1}),z.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Ec(E,a,c)}E={type:"stylesheet",instance:E,count:1,state:R},h.set(m,E)}}}function j1(n,a){ua.X(n,a);var s=Ts;if(s&&n){var c=wa(s).hoistableScripts,h=Rs(n),m=c.get(h);m||(m=s.querySelector(qo(h)),m||(n=g({src:n,async:!0},a),(a=vi.get(h))&&Ah(n,a),m=s.createElement("script"),hn(m),Pn(m,"link",n),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(h,m))}}function Y1(n,a){ua.M(n,a);var s=Ts;if(s&&n){var c=wa(s).hoistableScripts,h=Rs(n),m=c.get(h);m||(m=s.querySelector(qo(h)),m||(n=g({src:n,async:!0,type:"module"},a),(a=vi.get(h))&&Ah(n,a),m=s.createElement("script"),hn(m),Pn(m,"link",n),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(h,m))}}function Zg(n,a,s,c){var h=(h=ae.current)?Mc(h):null;if(!h)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(a=As(s.href),s=wa(h).hoistableStyles,c=s.get(a),c||(c={type:"style",instance:null,count:0,state:null},s.set(a,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=As(s.href);var m=wa(h).hoistableStyles,E=m.get(n);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,E),(m=h.querySelector(Wo(n)))&&!m._p&&(E.instance=m,E.state.loading=5),vi.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},vi.set(n,s),m||Z1(h,n,s,E.state))),a&&c===null)throw Error(r(528,""));return E}if(a&&c!==null)throw Error(r(529,""));return null;case"script":return a=s.async,s=s.src,typeof s=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Rs(s),s=wa(h).hoistableScripts,c=s.get(a),c||(c={type:"script",instance:null,count:0,state:null},s.set(a,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function As(n){return'href="'+xn(n)+'"'}function Wo(n){return'link[rel="stylesheet"]['+n+"]"}function Kg(n){return g({},n,{"data-precedence":n.precedence,precedence:null})}function Z1(n,a,s,c){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?c.loading=1:(a=n.createElement("link"),c.preload=a,a.addEventListener("load",function(){return c.loading|=1}),a.addEventListener("error",function(){return c.loading|=2}),Pn(a,"link",s),hn(a),n.head.appendChild(a))}function Rs(n){return'[src="'+xn(n)+'"]'}function qo(n){return"script[async]"+n}function Qg(n,a,s){if(a.count++,a.instance===null)switch(a.type){case"style":var c=n.querySelector('style[data-href~="'+xn(s.href)+'"]');if(c)return a.instance=c,hn(c),c;var h=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),hn(c),Pn(c,"style",h),Ec(c,s.precedence,n),a.instance=c;case"stylesheet":h=As(s.href);var m=n.querySelector(Wo(h));if(m)return a.state.loading|=4,a.instance=m,hn(m),m;c=Kg(s),(h=vi.get(h))&&Th(c,h),m=(n.ownerDocument||n).createElement("link"),hn(m);var E=m;return E._p=new Promise(function(R,z){E.onload=R,E.onerror=z}),Pn(m,"link",c),a.state.loading|=4,Ec(m,s.precedence,n),a.instance=m;case"script":return m=Rs(s.src),(h=n.querySelector(qo(m)))?(a.instance=h,hn(h),h):(c=s,(h=vi.get(m))&&(c=g({},s),Ah(c,h)),n=n.ownerDocument||n,h=n.createElement("script"),hn(h),Pn(h,"link",c),n.head.appendChild(h),a.instance=h);case"void":return null;default:throw Error(r(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(c=a.instance,a.state.loading|=4,Ec(c,s.precedence,n));return a.instance}function Ec(n,a,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=c.length?c[c.length-1]:null,m=h,E=0;E<c.length;E++){var R=c[E];if(R.dataset.precedence===a)m=R;else if(m!==h)break}m?m.parentNode.insertBefore(n,m.nextSibling):(a=s.nodeType===9?s.head:s,a.insertBefore(n,a.firstChild))}function Th(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function Ah(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var Tc=null;function $g(n,a,s){if(Tc===null){var c=new Map,h=Tc=new Map;h.set(s,c)}else h=Tc,c=h.get(s),c||(c=new Map,h.set(s,c));if(c.has(n))return c;for(c.set(n,null),s=s.getElementsByTagName(n),h=0;h<s.length;h++){var m=s[h];if(!(m[Pi]||m[Mn]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(a)||"";E=n+E;var R=c.get(E);R?R.push(m):c.set(E,[m])}}return c}function Jg(n,a,s){n=n.ownerDocument||n,n.head.insertBefore(s,a==="title"?n.querySelector("head > title"):null)}function K1(n,a,s){if(s===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function ex(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var jo=null;function Q1(){}function $1(n,a,s){if(jo===null)throw Error(r(475));var c=jo;if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=As(s.href),m=n.querySelector(Wo(h));if(m){n=m._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=Ac.bind(c),n.then(c,c)),a.state.loading|=4,a.instance=m,hn(m);return}m=n.ownerDocument||n,s=Kg(s),(h=vi.get(h))&&Th(s,h),m=m.createElement("link"),hn(m);var E=m;E._p=new Promise(function(R,z){E.onload=R,E.onerror=z}),Pn(m,"link",s),a.instance=m}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(c.count++,a=Ac.bind(c),n.addEventListener("load",a),n.addEventListener("error",a))}}function J1(){if(jo===null)throw Error(r(475));var n=jo;return n.stylesheets&&n.count===0&&Rh(n,n.stylesheets),0<n.count?function(a){var s=setTimeout(function(){if(n.stylesheets&&Rh(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(s)}}:null}function Ac(){if(this.count--,this.count===0){if(this.stylesheets)Rh(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Rc=null;function Rh(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Rc=new Map,a.forEach(eS,n),Rc=null,Ac.call(n))}function eS(n,a){if(!(a.state.loading&4)){var s=Rc.get(n);if(s)var c=s.get(null);else{s=new Map,Rc.set(n,s);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var E=h[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),c=E)}c&&s.set(null,c)}h=a.instance,E=h.getAttribute("data-precedence"),m=s.get(E)||c,m===c&&s.set(null,h),s.set(E,h),this.count++,c=Ac.bind(this),h.addEventListener("load",c),h.addEventListener("error",c),m?m.parentNode.insertBefore(h,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),a.state.loading|=4}}var Yo={$$typeof:A,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function tS(n,a,s,c,h,m,E,R){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=c,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function tx(n,a,s,c,h,m,E,R,z,te,de,_e){return n=new tS(n,a,s,E,R,z,te,_e),a=1,m===!0&&(a|=24),m=$n(3,null,null,a),n.current=m,m.stateNode=n,a=lf(),a.refCount++,n.pooledCache=a,a.refCount++,m.memoizedState={element:c,isDehydrated:s,cache:a},hf(m),n}function nx(n){return n?(n=as,n):as}function ix(n,a,s,c,h,m){h=nx(h),c.context===null?c.context=h:c.pendingContext=h,c=Oa(a),c.payload={element:s},m=m===void 0?null:m,m!==null&&(c.callback=m),s=Pa(n,c,a),s!==null&&(ii(s,n,a),Eo(s,n,a))}function ax(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<a?s:a}}function wh(n,a){ax(n,a),(n=n.alternate)&&ax(n,a)}function rx(n){if(n.tag===13){var a=is(n,67108864);a!==null&&ii(a,n,67108864),wh(n,67108864)}}var wc=!0;function nS(n,a,s,c){var h=I.T;I.T=null;var m=W.p;try{W.p=2,Ch(n,a,s,c)}finally{W.p=m,I.T=h}}function iS(n,a,s,c){var h=I.T;I.T=null;var m=W.p;try{W.p=8,Ch(n,a,s,c)}finally{W.p=m,I.T=h}}function Ch(n,a,s,c){if(wc){var h=Dh(c);if(h===null)gh(n,a,c,Cc,s),ox(n,c);else if(rS(h,n,a,s,c))c.stopPropagation();else if(ox(n,c),a&4&&-1<aS.indexOf(n)){for(;h!==null;){var m=Zi(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Qe(m.pendingLanes);if(E!==0){var R=m;for(R.pendingLanes|=2,R.entangledLanes|=2;E;){var z=1<<31-Ie(E);R.entanglements[1]|=z,E&=~z}Gi(m),(Ft&6)===0&&(hc=Fe()+500,Go(0))}}break;case 13:R=is(m,2),R!==null&&ii(R,m,2),pc(),wh(m,2)}if(m=Dh(c),m===null&&gh(n,a,c,Cc,s),m===h)break;h=m}h!==null&&c.stopPropagation()}else gh(n,a,c,null,s)}}function Dh(n){return n=Ou(n),Uh(n)}var Cc=null;function Uh(n){if(Cc=null,n=Mi(n),n!==null){var a=l(n);if(a===null)n=null;else{var s=a.tag;if(s===13){if(n=u(a),n!==null)return n;n=null}else if(s===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return Cc=n,null}function sx(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gt()){case Pe:return 2;case Ot:return 8;case je:case lt:return 32;case B:return 268435456;default:return 32}default:return 32}}var Nh=!1,Ya=null,Za=null,Ka=null,Zo=new Map,Ko=new Map,Qa=[],aS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ox(n,a){switch(n){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":Zo.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(a.pointerId)}}function Qo(n,a,s,c,h,m){return n===null||n.nativeEvent!==m?(n={blockedOn:a,domEventName:s,eventSystemFlags:c,nativeEvent:m,targetContainers:[h]},a!==null&&(a=Zi(a),a!==null&&rx(a)),n):(n.eventSystemFlags|=c,a=n.targetContainers,h!==null&&a.indexOf(h)===-1&&a.push(h),n)}function rS(n,a,s,c,h){switch(a){case"focusin":return Ya=Qo(Ya,n,a,s,c,h),!0;case"dragenter":return Za=Qo(Za,n,a,s,c,h),!0;case"mouseover":return Ka=Qo(Ka,n,a,s,c,h),!0;case"pointerover":var m=h.pointerId;return Zo.set(m,Qo(Zo.get(m)||null,n,a,s,c,h)),!0;case"gotpointercapture":return m=h.pointerId,Ko.set(m,Qo(Ko.get(m)||null,n,a,s,c,h)),!0}return!1}function lx(n){var a=Mi(n.target);if(a!==null){var s=l(a);if(s!==null){if(a=s.tag,a===13){if(a=u(s),a!==null){n.blockedOn=a,fi(n.priority,function(){if(s.tag===13){var c=ni();c=st(c);var h=is(s,c);h!==null&&ii(h,s,c),wh(s,c)}});return}}else if(a===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Dc(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var s=Dh(n.nativeEvent);if(s===null){s=n.nativeEvent;var c=new s.constructor(s.type,s);Lu=c,s.target.dispatchEvent(c),Lu=null}else return a=Zi(s),a!==null&&rx(a),n.blockedOn=s,!1;a.shift()}return!0}function cx(n,a,s){Dc(n)&&s.delete(a)}function sS(){Nh=!1,Ya!==null&&Dc(Ya)&&(Ya=null),Za!==null&&Dc(Za)&&(Za=null),Ka!==null&&Dc(Ka)&&(Ka=null),Zo.forEach(cx),Ko.forEach(cx)}function Uc(n,a){n.blockedOn===a&&(n.blockedOn=null,Nh||(Nh=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,sS)))}var Nc=null;function ux(n){Nc!==n&&(Nc=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Nc===n&&(Nc=null);for(var a=0;a<n.length;a+=3){var s=n[a],c=n[a+1],h=n[a+2];if(typeof c!="function"){if(Uh(c||s)===null)continue;break}var m=Zi(s);m!==null&&(n.splice(a,3),a-=3,Uf(m,{pending:!0,data:h,method:s.method,action:c},c,h))}}))}function $o(n){function a(z){return Uc(z,n)}Ya!==null&&Uc(Ya,n),Za!==null&&Uc(Za,n),Ka!==null&&Uc(Ka,n),Zo.forEach(a),Ko.forEach(a);for(var s=0;s<Qa.length;s++){var c=Qa[s];c.blockedOn===n&&(c.blockedOn=null)}for(;0<Qa.length&&(s=Qa[0],s.blockedOn===null);)lx(s),s.blockedOn===null&&Qa.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var h=s[c],m=s[c+1],E=h[Un]||null;if(typeof m=="function")E||ux(s);else if(E){var R=null;if(m&&m.hasAttribute("formAction")){if(h=m,E=m[Un]||null)R=E.formAction;else if(Uh(h)!==null)continue}else R=E.action;typeof R=="function"?s[c+1]=R:(s.splice(c,3),c-=3),ux(s)}}}function Lh(n){this._internalRoot=n}Lc.prototype.render=Lh.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(r(409));var s=a.current,c=ni();ix(s,c,n,a,null,null)},Lc.prototype.unmount=Lh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;ix(n.current,2,null,n,null,null),pc(),a[Yi]=null}};function Lc(n){this._internalRoot=n}Lc.prototype.unstable_scheduleHydration=function(n){if(n){var a=Ut();n={blockedOn:null,target:n,priority:a};for(var s=0;s<Qa.length&&a!==0&&a<Qa[s].priority;s++);Qa.splice(s,0,n),s===0&&lx(n)}};var fx=e.version;if(fx!=="19.1.1")throw Error(r(527,fx,"19.1.1"));W.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=d(a),n=n!==null?p(n):null,n=n===null?null:n.stateNode,n};var oS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oc.isDisabled&&Oc.supportsFiber)try{me=Oc.inject(oS),ve=Oc}catch{}}return el.createRoot=function(n,a){if(!o(n))throw Error(r(299));var s=!1,c="",h=R0,m=w0,E=C0,R=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(R=a.unstable_transitionCallbacks)),a=tx(n,1,!1,null,null,s,c,h,m,E,R,null),n[Yi]=a.current,mh(n),new Lh(a)},el.hydrateRoot=function(n,a,s){if(!o(n))throw Error(r(299));var c=!1,h="",m=R0,E=w0,R=C0,z=null,te=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(z=s.unstable_transitionCallbacks),s.formState!==void 0&&(te=s.formState)),a=tx(n,1,!0,a,s??null,c,h,m,E,R,z,te),a.context=nx(null),s=a.current,c=ni(),c=st(c),h=Oa(c),h.callback=null,Pa(s,h,c),s=c,a.current.lanes=s,we(a,s),Gi(a),n[Yi]=a.current,mh(n),new Lc(a)},el.version="19.1.1",el}var Sx;function xS(){if(Sx)return Bh.exports;Sx=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Bh.exports=gS(),Bh.exports}var vS=xS();/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var bx="popstate";function _S(i={}){function e(o,l){let{pathname:u="/",search:f="",hash:d=""}=Yr(o.location.hash.substring(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),Cd("",{pathname:u,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(o,l){let u=o.document.querySelector("base"),f="";if(u&&u.getAttribute("href")){let d=o.location.href,p=d.indexOf("#");f=p===-1?d:d.slice(0,p)}return f+"#"+(typeof l=="string"?l:dl(l))}function r(o,l){Li(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(l)})`)}return SS(e,t,r,i)}function Jt(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function Li(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function yS(){return Math.random().toString(36).substring(2,10)}function Mx(i,e){return{usr:i.state,key:i.key,idx:e}}function Cd(i,e,t=null,r){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?Yr(e):e,state:t,key:e&&e.key||r||yS()}}function dl({pathname:i="/",search:e="",hash:t=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(i+=t.charAt(0)==="#"?t:"#"+t),i}function Yr(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substring(t),i=i.substring(0,t));let r=i.indexOf("?");r>=0&&(e.search=i.substring(r),i=i.substring(0,r)),i&&(e.pathname=i)}return e}function SS(i,e,t,r={}){let{window:o=document.defaultView,v5Compat:l=!1}=r,u=o.history,f="POP",d=null,p=g();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function g(){return(u.state||{idx:null}).idx}function x(){f="POP";let S=g(),_=S==null?null:S-p;p=S,d&&d({action:f,location:M.location,delta:_})}function v(S,_){f="PUSH";let w=Cd(M.location,S,_);t&&t(w,S),p=g()+1;let A=Mx(w,p),L=M.createHref(w);try{u.pushState(A,"",L)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;o.location.assign(L)}l&&d&&d({action:f,location:M.location,delta:1})}function y(S,_){f="REPLACE";let w=Cd(M.location,S,_);t&&t(w,S),p=g();let A=Mx(w,p),L=M.createHref(w);u.replaceState(A,"",L),l&&d&&d({action:f,location:M.location,delta:0})}function b(S){return bS(S)}let M={get action(){return f},get location(){return i(o,u)},listen(S){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(bx,x),d=S,()=>{o.removeEventListener(bx,x),d=null}},createHref(S){return e(o,S)},createURL:b,encodeLocation(S){let _=b(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:v,replace:y,go(S){return u.go(S)}};return M}function bS(i,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),Jt(t,"No window.location.(origin|href) available to create URL");let r=typeof i=="string"?i:dl(i);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=t+r),new URL(r,t)}function t_(i,e,t="/"){return MS(i,e,t,!1)}function MS(i,e,t,r){let o=typeof e=="string"?Yr(e):e,l=Ma(o.pathname||"/",t);if(l==null)return null;let u=n_(i);ES(u);let f=null;for(let d=0;f==null&&d<u.length;++d){let p=PS(l);f=LS(u[d],p,r)}return f}function n_(i,e=[],t=[],r="",o=!1){let l=(u,f,d=o,p)=>{let g={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&d)return;Jt(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let x=Sa([r,g.relativePath]),v=t.concat(g);u.children&&u.children.length>0&&(Jt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),n_(u.children,e,v,x,d)),!(u.path==null&&!u.index)&&e.push({path:x,score:US(x,u.index),routesMeta:v})};return i.forEach((u,f)=>{if(u.path===""||!u.path?.includes("?"))l(u,f);else for(let d of i_(u.path))l(u,f,!0,d)}),e}function i_(i){let e=i.split("/");if(e.length===0)return[];let[t,...r]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let u=i_(r.join("/")),f=[];return f.push(...u.map(d=>d===""?l:[l,d].join("/"))),o&&f.push(...u),f.map(d=>i.startsWith("/")&&d===""?"/":d)}function ES(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:NS(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var TS=/^:[\w-]+$/,AS=3,RS=2,wS=1,CS=10,DS=-2,Ex=i=>i==="*";function US(i,e){let t=i.split("/"),r=t.length;return t.some(Ex)&&(r+=DS),e&&(r+=RS),t.filter(o=>!Ex(o)).reduce((o,l)=>o+(TS.test(l)?AS:l===""?wS:CS),r)}function NS(i,e){return i.length===e.length&&i.slice(0,-1).every((r,o)=>r===e[o])?i[i.length-1]-e[e.length-1]:0}function LS(i,e,t=!1){let{routesMeta:r}=i,o={},l="/",u=[];for(let f=0;f<r.length;++f){let d=r[f],p=f===r.length-1,g=l==="/"?e:e.slice(l.length)||"/",x=gu({path:d.relativePath,caseSensitive:d.caseSensitive,end:p},g),v=d.route;if(!x&&p&&t&&!r[r.length-1].route.index&&(x=gu({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},g)),!x)return null;Object.assign(o,x.params),u.push({params:o,pathname:Sa([l,x.pathname]),pathnameBase:zS(Sa([l,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(l=Sa([l,x.pathnameBase]))}return u}function gu(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,r]=OS(i.path,i.caseSensitive,i.end),o=e.match(t);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:x},v)=>{if(g==="*"){let b=f[v]||"";u=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const y=f[v];return x&&!y?p[g]=void 0:p[g]=(y||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:u,pattern:i}}function OS(i,e=!1,t=!0){Li(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let r=[],o="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,d)=>(r.push({paramName:f,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(r.push({paramName:"*"}),o+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":i!==""&&i!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function PS(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Li(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function Ma(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=i.charAt(t);return r&&r!=="/"?null:i.slice(t)||"/"}function BS(i,e="/"){let{pathname:t,search:r="",hash:o=""}=typeof i=="string"?Yr(i):i;return{pathname:t?t.startsWith("/")?t:IS(t,e):e,search:HS(r),hash:GS(o)}}function IS(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Hh(i,e,t,r){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function FS(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function a_(i){let e=FS(i);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function r_(i,e,t,r=!1){let o;typeof i=="string"?o=Yr(i):(o={...i},Jt(!o.pathname||!o.pathname.includes("?"),Hh("?","pathname","search",o)),Jt(!o.pathname||!o.pathname.includes("#"),Hh("#","pathname","hash",o)),Jt(!o.search||!o.search.includes("#"),Hh("#","search","hash",o)));let l=i===""||o.pathname==="",u=l?"/":o.pathname,f;if(u==null)f=t;else{let x=e.length-1;if(!r&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),x-=1;o.pathname=v.join("/")}f=x>=0?e[x]:"/"}let d=BS(o,f),p=u&&u!=="/"&&u.endsWith("/"),g=(l||u===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(p||g)&&(d.pathname+="/"),d}var Sa=i=>i.join("/").replace(/\/\/+/g,"/"),zS=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),HS=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,GS=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function VS(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var s_=["POST","PUT","PATCH","DELETE"];new Set(s_);var kS=["GET",...s_];new Set(kS);var Js=ue.createContext(null);Js.displayName="DataRouter";var Eu=ue.createContext(null);Eu.displayName="DataRouterState";ue.createContext(!1);var o_=ue.createContext({isTransitioning:!1});o_.displayName="ViewTransition";var XS=ue.createContext(new Map);XS.displayName="Fetchers";var WS=ue.createContext(null);WS.displayName="Await";var ji=ue.createContext(null);ji.displayName="Navigation";var xl=ue.createContext(null);xl.displayName="Location";var Ta=ue.createContext({outlet:null,matches:[],isDataRoute:!1});Ta.displayName="Route";var Ep=ue.createContext(null);Ep.displayName="RouteError";function qS(i,{relative:e}={}){Jt(vl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=ue.useContext(ji),{hash:o,pathname:l,search:u}=_l(i,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:Sa([t,l])),r.createHref({pathname:f,search:u,hash:o})}function vl(){return ue.useContext(xl)!=null}function Zr(){return Jt(vl(),"useLocation() may be used only in the context of a <Router> component."),ue.useContext(xl).location}var l_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function c_(i){ue.useContext(ji).static||ue.useLayoutEffect(i)}function jS(){let{isDataRoute:i}=ue.useContext(Ta);return i?sb():YS()}function YS(){Jt(vl(),"useNavigate() may be used only in the context of a <Router> component.");let i=ue.useContext(Js),{basename:e,navigator:t}=ue.useContext(ji),{matches:r}=ue.useContext(Ta),{pathname:o}=Zr(),l=JSON.stringify(a_(r)),u=ue.useRef(!1);return c_(()=>{u.current=!0}),ue.useCallback((d,p={})=>{if(Li(u.current,l_),!u.current)return;if(typeof d=="number"){t.go(d);return}let g=r_(d,JSON.parse(l),o,p.relative==="path");i==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Sa([e,g.pathname])),(p.replace?t.replace:t.push)(g,p.state,p)},[e,t,l,o,i])}ue.createContext(null);function _l(i,{relative:e}={}){let{matches:t}=ue.useContext(Ta),{pathname:r}=Zr(),o=JSON.stringify(a_(t));return ue.useMemo(()=>r_(i,JSON.parse(o),r,e==="path"),[i,o,r,e])}function ZS(i,e){return u_(i,e)}function u_(i,e,t,r,o){Jt(vl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=ue.useContext(ji),{matches:u}=ue.useContext(Ta),f=u[u.length-1],d=f?f.params:{},p=f?f.pathname:"/",g=f?f.pathnameBase:"/",x=f&&f.route;{let w=x&&x.path||"";f_(p,!x||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let v=Zr(),y;if(e){let w=typeof e=="string"?Yr(e):e;Jt(g==="/"||w.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${w.pathname}" was given in the \`location\` prop.`),y=w}else y=v;let b=y.pathname||"/",M=b;if(g!=="/"){let w=g.replace(/^\//,"").split("/");M="/"+b.replace(/^\//,"").split("/").slice(w.length).join("/")}let S=t_(i,{pathname:M});Li(x||S!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Li(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=eb(S&&S.map(w=>Object.assign({},w,{params:Object.assign({},d,w.params),pathname:Sa([g,l.encodeLocation?l.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?g:Sa([g,l.encodeLocation?l.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),u,t,r,o);return e&&_?ue.createElement(xl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},_):_}function KS(){let i=rb(),e=VS(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",i),u=ue.createElement(ue.Fragment,null,ue.createElement("p",null,"💿 Hey developer 👋"),ue.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ue.createElement("code",{style:l},"ErrorBoundary")," or"," ",ue.createElement("code",{style:l},"errorElement")," prop on your route.")),ue.createElement(ue.Fragment,null,ue.createElement("h2",null,"Unexpected Application Error!"),ue.createElement("h3",{style:{fontStyle:"italic"}},e),t?ue.createElement("pre",{style:o},t):null,u)}var QS=ue.createElement(KS,null),$S=class extends ue.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){this.props.unstable_onError?this.props.unstable_onError(i,e):console.error("React Router caught the following error during render",i)}render(){return this.state.error!==void 0?ue.createElement(Ta.Provider,{value:this.props.routeContext},ue.createElement(Ep.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function JS({routeContext:i,match:e,children:t}){let r=ue.useContext(Js);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),ue.createElement(Ta.Provider,{value:i},t)}function eb(i,e=[],t=null,r=null,o=null){if(i==null){if(!t)return null;if(t.errors)i=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let l=i,u=t?.errors;if(u!=null){let p=l.findIndex(g=>g.route.id&&u?.[g.route.id]!==void 0);Jt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let f=!1,d=-1;if(t)for(let p=0;p<l.length;p++){let g=l[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=p),g.route.id){let{loaderData:x,errors:v}=t,y=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!v||v[g.route.id]===void 0);if(g.route.lazy||y){f=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((p,g,x)=>{let v,y=!1,b=null,M=null;t&&(v=u&&g.route.id?u[g.route.id]:void 0,b=g.route.errorElement||QS,f&&(d<0&&x===0?(f_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,M=null):d===x&&(y=!0,M=g.route.hydrateFallbackElement||null)));let S=e.concat(l.slice(0,x+1)),_=()=>{let w;return v?w=b:y?w=M:g.route.Component?w=ue.createElement(g.route.Component,null):g.route.element?w=g.route.element:w=p,ue.createElement(JS,{match:g,routeContext:{outlet:p,matches:S,isDataRoute:t!=null},children:w})};return t&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?ue.createElement($S,{location:t.location,revalidation:t.revalidation,component:b,error:v,children:_(),routeContext:{outlet:null,matches:S,isDataRoute:!0},unstable_onError:r}):_()},null)}function Tp(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tb(i){let e=ue.useContext(Js);return Jt(e,Tp(i)),e}function nb(i){let e=ue.useContext(Eu);return Jt(e,Tp(i)),e}function ib(i){let e=ue.useContext(Ta);return Jt(e,Tp(i)),e}function Ap(i){let e=ib(i),t=e.matches[e.matches.length-1];return Jt(t.route.id,`${i} can only be used on routes that contain a unique "id"`),t.route.id}function ab(){return Ap("useRouteId")}function rb(){let i=ue.useContext(Ep),e=nb("useRouteError"),t=Ap("useRouteError");return i!==void 0?i:e.errors?.[t]}function sb(){let{router:i}=tb("useNavigate"),e=Ap("useNavigate"),t=ue.useRef(!1);return c_(()=>{t.current=!0}),ue.useCallback(async(o,l={})=>{Li(t.current,l_),t.current&&(typeof o=="number"?i.navigate(o):await i.navigate(o,{fromRouteId:e,...l}))},[i,e])}var Tx={};function f_(i,e,t){!e&&!Tx[i]&&(Tx[i]=!0,Li(!1,t))}ue.memo(ob);function ob({routes:i,future:e,state:t,unstable_onError:r}){return u_(i,void 0,t,r,e)}function sr(i){Jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function lb({basename:i="/",children:e=null,location:t,navigationType:r="POP",navigator:o,static:l=!1}){Jt(!vl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=i.replace(/^\/*/,"/"),f=ue.useMemo(()=>({basename:u,navigator:o,static:l,future:{}}),[u,o,l]);typeof t=="string"&&(t=Yr(t));let{pathname:d="/",search:p="",hash:g="",state:x=null,key:v="default"}=t,y=ue.useMemo(()=>{let b=Ma(d,u);return b==null?null:{location:{pathname:b,search:p,hash:g,state:x,key:v},navigationType:r}},[u,d,p,g,x,v,r]);return Li(y!=null,`<Router basename="${u}"> is not able to match the URL "${d}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:ue.createElement(ji.Provider,{value:f},ue.createElement(xl.Provider,{children:e,value:y}))}function cb({children:i,location:e}){return ZS(Dd(i),e)}function Dd(i,e=[]){let t=[];return ue.Children.forEach(i,(r,o)=>{if(!ue.isValidElement(r))return;let l=[...e,o];if(r.type===ue.Fragment){t.push.apply(t,Dd(r.props.children,l));return}Jt(r.type===sr,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Jt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=Dd(r.props.children,l)),t.push(u)}),t}var su="get",ou="application/x-www-form-urlencoded";function Tu(i){return i!=null&&typeof i.tagName=="string"}function ub(i){return Tu(i)&&i.tagName.toLowerCase()==="button"}function fb(i){return Tu(i)&&i.tagName.toLowerCase()==="form"}function hb(i){return Tu(i)&&i.tagName.toLowerCase()==="input"}function db(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function pb(i,e){return i.button===0&&(!e||e==="_self")&&!db(i)}var Pc=null;function mb(){if(Pc===null)try{new FormData(document.createElement("form"),0),Pc=!1}catch{Pc=!0}return Pc}var gb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gh(i){return i!=null&&!gb.has(i)?(Li(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ou}"`),null):i}function xb(i,e){let t,r,o,l,u;if(fb(i)){let f=i.getAttribute("action");r=f?Ma(f,e):null,t=i.getAttribute("method")||su,o=Gh(i.getAttribute("enctype"))||ou,l=new FormData(i)}else if(ub(i)||hb(i)&&(i.type==="submit"||i.type==="image")){let f=i.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=i.getAttribute("formaction")||f.getAttribute("action");if(r=d?Ma(d,e):null,t=i.getAttribute("formmethod")||f.getAttribute("method")||su,o=Gh(i.getAttribute("formenctype"))||Gh(f.getAttribute("enctype"))||ou,l=new FormData(f,i),!mb()){let{name:p,type:g,value:x}=i;if(g==="image"){let v=p?`${p}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else p&&l.append(p,x)}}else{if(Tu(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=su,r=null,o=ou,u=i}return l&&o==="text/plain"&&(u=l,l=void 0),{action:r,method:t.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Rp(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function vb(i,e,t){let r=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return r.pathname==="/"?r.pathname=`_root.${t}`:e&&Ma(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${t}`,r}async function _b(i,e){if(i.id in e)return e[i.id];try{let t=await import(i.module);return e[i.id]=t,t}catch(t){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function yb(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Sb(i,e,t){let r=await Promise.all(i.map(async o=>{let l=e.routes[o.route.id];if(l){let u=await _b(l,t);return u.links?u.links():[]}return[]}));return Tb(r.flat(1).filter(yb).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Ax(i,e,t,r,o,l){let u=(d,p)=>t[p]?d.route.id!==t[p].route.id:!0,f=(d,p)=>t[p].pathname!==d.pathname||t[p].route.path?.endsWith("*")&&t[p].params["*"]!==d.params["*"];return l==="assets"?e.filter((d,p)=>u(d,p)||f(d,p)):l==="data"?e.filter((d,p)=>{let g=r.routes[d.route.id];if(!g||!g.hasLoader)return!1;if(u(d,p)||f(d,p))return!0;if(d.route.shouldRevalidate){let x=d.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function bb(i,e,{includeHydrateFallback:t}={}){return Mb(i.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function Mb(i){return[...new Set(i)]}function Eb(i){let e={},t=Object.keys(i).sort();for(let r of t)e[r]=i[r];return e}function Tb(i,e){let t=new Set;return new Set(e),i.reduce((r,o)=>{let l=JSON.stringify(Eb(o));return t.has(l)||(t.add(l),r.push({key:l,link:o})),r},[])}function h_(){let i=ue.useContext(Js);return Rp(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Ab(){let i=ue.useContext(Eu);return Rp(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var wp=ue.createContext(void 0);wp.displayName="FrameworkContext";function d_(){let i=ue.useContext(wp);return Rp(i,"You must render this element inside a <HydratedRouter> element"),i}function Rb(i,e){let t=ue.useContext(wp),[r,o]=ue.useState(!1),[l,u]=ue.useState(!1),{onFocus:f,onBlur:d,onMouseEnter:p,onMouseLeave:g,onTouchStart:x}=e,v=ue.useRef(null);ue.useEffect(()=>{if(i==="render"&&u(!0),i==="viewport"){let M=_=>{_.forEach(w=>{u(w.isIntersecting)})},S=new IntersectionObserver(M,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[i]),ue.useEffect(()=>{if(r){let M=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(M)}}},[r]);let y=()=>{o(!0)},b=()=>{o(!1),u(!1)};return t?i!=="intent"?[l,v,{}]:[l,v,{onFocus:tl(f,y),onBlur:tl(d,b),onMouseEnter:tl(p,y),onMouseLeave:tl(g,b),onTouchStart:tl(x,y)}]:[!1,v,{}]}function tl(i,e){return t=>{i&&i(t),t.defaultPrevented||e(t)}}function wb({page:i,...e}){let{router:t}=h_(),r=ue.useMemo(()=>t_(t.routes,i,t.basename),[t.routes,i,t.basename]);return r?ue.createElement(Db,{page:i,matches:r,...e}):null}function Cb(i){let{manifest:e,routeModules:t}=d_(),[r,o]=ue.useState([]);return ue.useEffect(()=>{let l=!1;return Sb(i,e,t).then(u=>{l||o(u)}),()=>{l=!0}},[i,e,t]),r}function Db({page:i,matches:e,...t}){let r=Zr(),{manifest:o,routeModules:l}=d_(),{basename:u}=h_(),{loaderData:f,matches:d}=Ab(),p=ue.useMemo(()=>Ax(i,e,d,o,r,"data"),[i,e,d,o,r]),g=ue.useMemo(()=>Ax(i,e,d,o,r,"assets"),[i,e,d,o,r]),x=ue.useMemo(()=>{if(i===r.pathname+r.search+r.hash)return[];let b=new Set,M=!1;if(e.forEach(_=>{let w=o.routes[_.route.id];!w||!w.hasLoader||(!p.some(A=>A.route.id===_.route.id)&&_.route.id in f&&l[_.route.id]?.shouldRevalidate||w.hasClientLoader?M=!0:b.add(_.route.id))}),b.size===0)return[];let S=vb(i,u,"data");return M&&b.size>0&&S.searchParams.set("_routes",e.filter(_=>b.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[u,f,r,o,p,e,i,l]),v=ue.useMemo(()=>bb(g,o),[g,o]),y=Cb(g);return ue.createElement(ue.Fragment,null,x.map(b=>ue.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...t})),v.map(b=>ue.createElement("link",{key:b,rel:"modulepreload",href:b,...t})),y.map(({key:b,link:M})=>ue.createElement("link",{key:b,nonce:t.nonce,...M})))}function Ub(...i){return e=>{i.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var p_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{p_&&(window.__reactRouterVersion="7.8.2")}catch{}function Nb({basename:i,children:e,window:t}){let r=ue.useRef();r.current==null&&(r.current=_S({window:t,v5Compat:!0}));let o=r.current,[l,u]=ue.useState({action:o.action,location:o.location}),f=ue.useCallback(d=>{ue.startTransition(()=>u(d))},[u]);return ue.useLayoutEffect(()=>o.listen(f),[o,f]),ue.createElement(lb,{basename:i,children:e,location:l.location,navigationType:l.action,navigator:o})}var m_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zn=ue.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:o,reloadDocument:l,replace:u,state:f,target:d,to:p,preventScrollReset:g,viewTransition:x,...v},y){let{basename:b}=ue.useContext(ji),M=typeof p=="string"&&m_.test(p),S,_=!1;if(typeof p=="string"&&M&&(S=p,p_))try{let D=new URL(window.location.href),C=p.startsWith("//")?new URL(D.protocol+p):new URL(p),H=Ma(C.pathname,b);C.origin===D.origin&&H!=null?p=H+C.search+C.hash:_=!0}catch{Li(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let w=qS(p,{relative:o}),[A,L,P]=Rb(r,v),N=Bb(p,{replace:u,state:f,target:d,preventScrollReset:g,relative:o,viewTransition:x});function F(D){e&&e(D),D.defaultPrevented||N(D)}let q=ue.createElement("a",{...v,...P,href:S||w,onClick:_||l?e:F,ref:Ub(y,L),target:d,"data-discover":!M&&t==="render"?"true":void 0});return A&&!M?ue.createElement(ue.Fragment,null,q,ue.createElement(wb,{page:w})):q});Zn.displayName="Link";var Lb=ue.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:o=!1,style:l,to:u,viewTransition:f,children:d,...p},g){let x=_l(u,{relative:p.relative}),v=Zr(),y=ue.useContext(Eu),{navigator:b,basename:M}=ue.useContext(ji),S=y!=null&&Gb(x)&&f===!0,_=b.encodeLocation?b.encodeLocation(x).pathname:x.pathname,w=v.pathname,A=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;t||(w=w.toLowerCase(),A=A?A.toLowerCase():null,_=_.toLowerCase()),A&&M&&(A=Ma(A,M)||A);const L=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let P=w===_||!o&&w.startsWith(_)&&w.charAt(L)==="/",N=A!=null&&(A===_||!o&&A.startsWith(_)&&A.charAt(_.length)==="/"),F={isActive:P,isPending:N,isTransitioning:S},q=P?e:void 0,D;typeof r=="function"?D=r(F):D=[r,P?"active":null,N?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let C=typeof l=="function"?l(F):l;return ue.createElement(Zn,{...p,"aria-current":q,className:D,ref:g,style:C,to:u,viewTransition:f},typeof d=="function"?d(F):d)});Lb.displayName="NavLink";var Ob=ue.forwardRef(({discover:i="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:o,state:l,method:u=su,action:f,onSubmit:d,relative:p,preventScrollReset:g,viewTransition:x,...v},y)=>{let b=zb(),M=Hb(f,{relative:p}),S=u.toLowerCase()==="get"?"get":"post",_=typeof f=="string"&&m_.test(f),w=A=>{if(d&&d(A),A.defaultPrevented)return;A.preventDefault();let L=A.nativeEvent.submitter,P=L?.getAttribute("formmethod")||u;b(L||A.currentTarget,{fetcherKey:e,method:P,navigate:t,replace:o,state:l,relative:p,preventScrollReset:g,viewTransition:x})};return ue.createElement("form",{ref:y,method:S,action:M,onSubmit:r?d:w,...v,"data-discover":!_&&i==="render"?"true":void 0})});Ob.displayName="Form";function Pb(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function g_(i){let e=ue.useContext(Js);return Jt(e,Pb(i)),e}function Bb(i,{target:e,replace:t,state:r,preventScrollReset:o,relative:l,viewTransition:u}={}){let f=jS(),d=Zr(),p=_l(i,{relative:l});return ue.useCallback(g=>{if(pb(g,e)){g.preventDefault();let x=t!==void 0?t:dl(d)===dl(p);f(i,{replace:x,state:r,preventScrollReset:o,relative:l,viewTransition:u})}},[d,f,p,t,r,e,i,o,l,u])}var Ib=0,Fb=()=>`__${String(++Ib)}__`;function zb(){let{router:i}=g_("useSubmit"),{basename:e}=ue.useContext(ji),t=ab();return ue.useCallback(async(r,o={})=>{let{action:l,method:u,encType:f,formData:d,body:p}=xb(r,e);if(o.navigate===!1){let g=o.fetcherKey||Fb();await i.fetch(g,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||u,formEncType:o.encType||f,flushSync:o.flushSync})}else await i.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||u,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[i,e,t])}function Hb(i,{relative:e}={}){let{basename:t}=ue.useContext(ji),r=ue.useContext(Ta);Jt(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),l={..._l(i||".",{relative:e})},u=Zr();if(i==null){l.search=u.search;let f=new URLSearchParams(l.search),d=f.getAll("index");if(d.some(g=>g==="")){f.delete("index"),d.filter(x=>x).forEach(x=>f.append("index",x));let g=f.toString();l.search=g?`?${g}`:""}}return(!i||i===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Sa([t,l.pathname])),dl(l)}function Gb(i,{relative:e}={}){let t=ue.useContext(o_);Jt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=g_("useViewTransitionState"),o=_l(i,{relative:e});if(!t.isTransitioning)return!1;let l=Ma(t.currentLocation.pathname,r)||t.currentLocation.pathname,u=Ma(t.nextLocation.pathname,r)||t.nextLocation.pathname;return gu(o.pathname,u)!=null||gu(o.pathname,l)!=null}const Vb="_logo_fu2sb_3",kb="_navbar_fu2sb_15",Xb="_scrolled_fu2sb_43",Wb="_navCenterContainer_fu2sb_57",qb="_navLinks_fu2sb_85",jb="_rightButtons_fu2sb_171",Yb="_navButton_fu2sb_185",Zb="_mobileMenu_fu2sb_231",Kb="_burgerButton_fu2sb_239",Qb="_icon_fu2sb_281",$b="_open_fu2sb_291",Jb="_popupOverlay_fu2sb_297",eM="_popup_fu2sb_297",tM="_cvOverlay_fu2sb_343",nM="_cvPopup_fu2sb_369",iM="_cvCloseButton_fu2sb_391",aM="_cvFrame_fu2sb_451",rM="_closeButton_fu2sb_485",sM="_navLinksMobile_fu2sb_589",oM="_navButtonsMobile_fu2sb_635",Zt={logo:Vb,navbar:kb,scrolled:Xb,navCenterContainer:Wb,navLinks:qb,rightButtons:jb,navButton:Yb,mobileMenu:Zb,burgerButton:Kb,icon:Qb,open:$b,popupOverlay:Jb,popup:eM,cvOverlay:tM,cvPopup:nM,cvCloseButton:iM,cvFrame:aM,closeButton:rM,navLinksMobile:sM,navButtonsMobile:oM},lM="/my-portfolio/assets/animelogo33-Ccu0kgcB.png";var x_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Rx=lr.createContext&&lr.createContext(x_),cM=["attr","size","title"];function uM(i,e){if(i==null)return{};var t=fM(i,e),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(i);for(o=0;o<l.length;o++)r=l[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(i,r)&&(t[r]=i[r])}return t}function fM(i,e){if(i==null)return{};var t={};for(var r in i)if(Object.prototype.hasOwnProperty.call(i,r)){if(e.indexOf(r)>=0)continue;t[r]=i[r]}return t}function xu(){return xu=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},xu.apply(this,arguments)}function wx(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(i,o).enumerable})),t.push.apply(t,r)}return t}function vu(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?wx(Object(t),!0).forEach(function(r){hM(i,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):wx(Object(t)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(t,r))})}return i}function hM(i,e,t){return e=dM(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function dM(i){var e=pM(i,"string");return typeof e=="symbol"?e:e+""}function pM(i,e){if(typeof i!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var r=t.call(i,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function v_(i){return i&&i.map((e,t)=>lr.createElement(e.tag,vu({key:t},e.attr),v_(e.child)))}function __(i){return e=>lr.createElement(mM,xu({attr:vu({},i.attr)},e),v_(i.child))}function mM(i){var e=t=>{var{attr:r,size:o,title:l}=i,u=uM(i,cM),f=o||t.size||"1em",d;return t.className&&(d=t.className),i.className&&(d=(d?d+" ":"")+i.className),lr.createElement("svg",xu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,u,{className:d,style:vu(vu({color:i.color||t.color},t.style),i.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&lr.createElement("title",null,l),i.children)};return Rx!==void 0?lr.createElement(Rx.Consumer,null,t=>e(t)):e(x_)}function gM(i){return __({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(i)}function xM(i){return __({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(i)}function vM(){const[i,e]=ue.useState(!1),[t,r]=ue.useState(!1),[o,l]=ue.useState(!1),[u,f]=ue.useState(!1);ue.useEffect(()=>{const p=()=>e(window.scrollY>50);return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]),ue.useEffect(()=>{document.body.style.overflow=t?"hidden":"auto"},[t]);const d=()=>r(!1);return G.jsxs("nav",{className:`${Zt.navbar} ${i?Zt.scrolled:""}`,children:[G.jsx(Zn,{to:"/",onClick:d,className:Zt.logo,children:G.jsx("img",{src:lM,alt:"Hunter Logo"})}),G.jsx("div",{className:Zt.navCenterContainer,children:G.jsxs("ul",{className:Zt.navLinks,children:[G.jsx("li",{children:G.jsx(Zn,{to:"/",onClick:d,children:"Home"})}),G.jsx("li",{children:G.jsx(Zn,{to:"/featured-projects",onClick:d,children:"Featured Projects"})}),G.jsx("li",{children:G.jsx(Zn,{to:"/experience",onClick:d,children:"Experience"})}),G.jsx("li",{children:G.jsx(Zn,{to:"/about",onClick:d,children:"All About Me"})})]})}),G.jsxs("div",{className:Zt.rightButtons,children:[G.jsx("button",{className:Zt.navButton,onClick:()=>l(!0),children:"CV"}),G.jsx("button",{className:Zt.navButton,onClick:()=>f(!0),children:"Contact"})]}),G.jsx("button",{className:`${Zt.burgerButton} ${t?Zt.open:""}`,onClick:()=>r(!t),"aria-label":"Toggle menu","aria-expanded":t,children:t?G.jsx(xM,{size:26,color:"#fff",className:Zt.icon}):G.jsx(gM,{size:26,color:"var(--color--primarywhite)",className:Zt.icon})}),G.jsxs("div",{className:`${Zt.mobileMenu} ${t?Zt.open:""}`,children:[G.jsxs("ul",{className:Zt.navLinksMobile,children:[G.jsx("li",{children:G.jsx(Zn,{to:"/",onClick:d,children:"Home"})}),G.jsx("li",{children:G.jsx(Zn,{to:"/featured-projects",onClick:d,children:"Featured Projects"})}),G.jsx("li",{children:G.jsx(Zn,{to:"/experience",onClick:d,children:"Experience"})}),G.jsx("li",{children:G.jsx(Zn,{to:"/about",onClick:d,children:"All About Me"})})]}),G.jsxs("div",{className:Zt.navButtonsMobile,children:[G.jsx("button",{className:Zt.navButton,onClick:()=>{l(!0),d()},children:"CV"}),G.jsx("button",{className:Zt.navButton,onClick:()=>{f(!0),d()},children:"Contact"})]})]}),o&&G.jsx("div",{className:Zt.cvOverlay,onClick:()=>l(!1),children:G.jsxs("div",{className:Zt.cvPopup,onClick:p=>p.stopPropagation(),children:[G.jsx("button",{className:Zt.cvCloseButton,onClick:()=>l(!1),children:"✕"}),G.jsx("iframe",{src:"/my-portfolio/your-cv.pdf",title:"My CV",className:Zt.cvFrame})]})}),u&&G.jsx("div",{className:Zt.popupOverlay,onClick:()=>f(!1),children:G.jsxs("div",{className:Zt.popup,onClick:p=>p.stopPropagation(),children:[G.jsx("h2",{children:"Contact Me:"}),G.jsx("p",{children:"Email: huntercordes@gmail.com"}),G.jsx("p",{children:"Phone: +45 31 71 29 77"}),G.jsx("button",{className:Zt.closeButton,onClick:()=>f(!1),children:"Close"})]})})]})}const _M="_homePage_7ekhn_1",yM="_homeContainer_7ekhn_17",SM="_pixelBackground_7ekhn_33",bM="_homeWrapper_7ekhn_51",MM="_title_7ekhn_79",EM="_divide_7ekhn_109",TM="_titleTwo_7ekhn_125",AM="_highlight_7ekhn_139",RM="_projectButton_7ekhn_187",fa={homePage:_M,homeContainer:yM,pixelBackground:SM,homeWrapper:bM,title:MM,divide:EM,titleTwo:TM,highlight:AM,projectButton:RM};var ws={},Cx;function wM(){if(Cx)return ws;Cx=1,Object.defineProperty(ws,"__esModule",{value:!0});var i=e_(),e=Mu(),t=function(){return t=Object.assign||function(d){for(var p,g=1,x=arguments.length;g<x;g++)for(var v in p=arguments[g])Object.prototype.hasOwnProperty.call(p,v)&&(d[v]=p[v]);return d},t.apply(this,arguments)};function r(d,p){var g,x;switch(p.type){case"TYPE":return t(t({},d),{speed:p.speed,text:(g=p.payload)===null||g===void 0?void 0:g.substring(0,d.text.length+1)});case"DELAY":return t(t({},d),{speed:p.payload});case"DELETE":return t(t({},d),{speed:p.speed,text:(x=p.payload)===null||x===void 0?void 0:x.substring(0,d.text.length-1)});case"COUNT":return t(t({},d),{count:d.count+1});default:return d}}var o=function(d){var p=d.words,g=p===void 0?["Hello World!","This is","a simple Typewriter"]:p,x=d.loop,v=x===void 0?1:x,y=d.typeSpeed,b=y===void 0?80:y,M=d.deleteSpeed,S=M===void 0?50:M,_=d.delaySpeed,w=_===void 0?1500:_,A=d.onLoopDone,L=d.onType,P=d.onDelete,N=d.onDelay,F=e.useReducer(r,{speed:b,text:"",count:0}),q=F[0],D=q.speed,C=q.text,H=q.count,j=F[1],ne=e.useRef(0),ee=e.useRef(!1),K=e.useRef(!1),I=e.useRef(!1),W=e.useRef(!1),Y=e.useCallback((function(){var pe=H%g.length,O=g[pe];K.current?(j({type:"DELETE",payload:O,speed:S}),C===""&&(K.current=!1,j({type:"COUNT"}))):(j({type:"TYPE",payload:O,speed:b}),I.current=!0,C===O&&(j({type:"DELAY",payload:w}),I.current=!1,W.current=!0,setTimeout((function(){W.current=!1,K.current=!0}),w),v>0&&(ne.current+=1,ne.current/g.length===v&&(W.current=!1,ee.current=!0)))),I.current&&L&&L(ne.current),K.current&&P&&P(),W.current&&N&&N()}),[H,w,S,v,b,g,C,L,P,N]);return e.useEffect((function(){var pe=setTimeout(Y,D);return ee.current&&clearTimeout(pe),function(){return clearTimeout(pe)}}),[Y,D]),e.useEffect((function(){A&&ee.current&&A()}),[A]),[C,{isType:I.current,isDelay:W.current,isDelete:K.current,isDone:ee.current}]},l="styles-module_blinkingCursor__yugAC",u="styles-module_blinking__9VXRT";(function(d,p){p===void 0&&(p={});var g=p.insertAt;if(typeof document<"u"){var x=document.head||document.getElementsByTagName("head")[0],v=document.createElement("style");v.type="text/css",g==="top"&&x.firstChild?x.insertBefore(v,x.firstChild):x.appendChild(v),v.styleSheet?v.styleSheet.cssText=d:v.appendChild(document.createTextNode(d))}})(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var f=e.memo((function(d){var p=d.cursorBlinking,g=p===void 0||p,x=d.cursorStyle,v=x===void 0?"|":x,y=d.cursorColor,b=y===void 0?"inherit":y;return i.jsx("span",t({style:{color:b},className:"".concat(l," ").concat(g?u:"")},{children:v}))}));return ws.Cursor=f,ws.Typewriter=function(d){var p=d.words,g=p===void 0?["Hello World!","This is","a simple Typewriter"]:p,x=d.loop,v=x===void 0?1:x,y=d.typeSpeed,b=y===void 0?80:y,M=d.deleteSpeed,S=M===void 0?50:M,_=d.delaySpeed,w=_===void 0?1500:_,A=d.cursor,L=A!==void 0&&A,P=d.cursorStyle,N=P===void 0?"|":P,F=d.cursorColor,q=F===void 0?"inherit":F,D=d.cursorBlinking,C=D===void 0||D,H=d.onLoopDone,j=d.onType,ne=d.onDelay,ee=d.onDelete,K=o({words:g,loop:v,typeSpeed:b,deleteSpeed:S,delaySpeed:w,onLoopDone:H,onType:j,onDelay:ne,onDelete:ee})[0];return i.jsxs(i.Fragment,{children:[i.jsx("span",{children:K}),L&&i.jsx(f,{cursorStyle:N,cursorColor:q,cursorBlinking:C})]})},ws.useTypewriter=o,ws}var CM=wM();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Au="181",DM=0,Dx=1,UM=2,y_=1,NM=2,va=3,Ea=0,Cn=1,si=2,Ni=0,Ws=1,Ux=2,Nx=3,Lx=4,LM=5,Vr=100,OM=101,PM=102,BM=103,IM=104,FM=200,zM=201,HM=202,GM=203,Ud=204,Nd=205,VM=206,kM=207,XM=208,WM=209,qM=210,jM=211,YM=212,ZM=213,KM=214,Ld=0,_u=1,Od=2,js=3,Pd=4,Bd=5,Id=6,Fd=7,S_=0,QM=1,$M=2,cr=0,JM=1,eE=2,tE=3,nE=4,iE=5,aE=6,rE=7,b_=300,Ys=301,Zs=302,zd=303,Hd=304,Ru=306,Gd=1e3,_a=1001,Vd=1002,oi=1003,sE=1004,Bc=1005,Dn=1006,Vh=1007,Xr=1008,ci=1009,M_=1010,E_=1011,pl=1012,Cp=1013,fr=1014,ya=1015,eo=1016,Dp=1017,Up=1018,Ks=1020,T_=35902,A_=35899,R_=1021,w_=1022,Ui=1023,ml=1026,Qs=1027,C_=1028,Np=1029,Lp=1030,Op=1031,Pp=1033,lu=33776,cu=33777,uu=33778,fu=33779,kd=35840,Xd=35841,Wd=35842,qd=35843,jd=36196,Yd=37492,Zd=37496,Kd=37808,Qd=37809,$d=37810,Jd=37811,ep=37812,tp=37813,np=37814,ip=37815,ap=37816,rp=37817,sp=37818,op=37819,lp=37820,cp=37821,up=36492,fp=36494,hp=36495,dp=36283,pp=36284,mp=36285,gp=36286,yl=3200,oE=3201,lE=0,cE=1,Xi="",ln="srgb",hr="srgb-linear",yu="linear",kt="srgb",Cs=7680,Ox=519,uE=512,fE=513,hE=514,D_=515,dE=516,pE=517,mE=518,gE=519,Px=35044,xp="300 es",Wi=2e3,Su=2001;function U_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bu(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xE(){const i=bu("canvas");return i.style.display="block",i}const Bx={};function Ix(...i){const e="THREE."+i.shift();console.log(e,...i)}function ft(...i){const e="THREE."+i.shift();console.warn(e,...i)}function cn(...i){const e="THREE."+i.shift();console.error(e,...i)}function gl(...i){const e=i.join(" ");e in Bx||(Bx[e]=!0,ft(...i))}function vE(i,e,t){return new Promise(function(r,o){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}class dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kh=Math.PI/180,vp=180/Math.PI;function Sl(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Fn[i&255]+Fn[i>>8&255]+Fn[i>>16&255]+Fn[i>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[t&63|128]+Fn[t>>8&255]+"-"+Fn[t>>16&255]+Fn[t>>24&255]+Fn[r&255]+Fn[r>>8&255]+Fn[r>>16&255]+Fn[r>>24&255]).toLowerCase()}function Et(i,e,t){return Math.max(e,Math.min(t,i))}function _E(i,e){return(i%e+e)%e}function Xh(i,e,t){return(1-t)*i+t*e}function nl(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class _t{constructor(e=0,t=0){_t.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bl{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let d=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3],v=l[u+0],y=l[u+1],b=l[u+2],M=l[u+3];if(f<=0){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(f>=1){e[t+0]=v,e[t+1]=y,e[t+2]=b,e[t+3]=M;return}if(x!==M||d!==v||p!==y||g!==b){let S=d*v+p*y+g*b+x*M;S<0&&(v=-v,y=-y,b=-b,M=-M,S=-S);let _=1-f;if(S<.9995){const w=Math.acos(S),A=Math.sin(w);_=Math.sin(_*w)/A,f=Math.sin(f*w)/A,d=d*_+v*f,p=p*_+y*f,g=g*_+b*f,x=x*_+M*f}else{d=d*_+v*f,p=p*_+y*f,g=g*_+b*f,x=x*_+M*f;const w=1/Math.sqrt(d*d+p*p+g*g+x*x);d*=w,p*=w,g*=w,x*=w}}e[t]=d,e[t+1]=p,e[t+2]=g,e[t+3]=x}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],d=r[o+1],p=r[o+2],g=r[o+3],x=l[u],v=l[u+1],y=l[u+2],b=l[u+3];return e[t]=f*b+g*x+d*y-p*v,e[t+1]=d*b+g*v+p*x-f*y,e[t+2]=p*b+g*y+f*v-d*x,e[t+3]=g*b-f*x-d*v-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,d=Math.sin,p=f(r/2),g=f(o/2),x=f(l/2),v=d(r/2),y=d(o/2),b=d(l/2);switch(u){case"XYZ":this._x=v*g*x+p*y*b,this._y=p*y*x-v*g*b,this._z=p*g*b+v*y*x,this._w=p*g*x-v*y*b;break;case"YXZ":this._x=v*g*x+p*y*b,this._y=p*y*x-v*g*b,this._z=p*g*b-v*y*x,this._w=p*g*x+v*y*b;break;case"ZXY":this._x=v*g*x-p*y*b,this._y=p*y*x+v*g*b,this._z=p*g*b+v*y*x,this._w=p*g*x-v*y*b;break;case"ZYX":this._x=v*g*x-p*y*b,this._y=p*y*x+v*g*b,this._z=p*g*b-v*y*x,this._w=p*g*x+v*y*b;break;case"YZX":this._x=v*g*x+p*y*b,this._y=p*y*x+v*g*b,this._z=p*g*b-v*y*x,this._w=p*g*x-v*y*b;break;case"XZY":this._x=v*g*x-p*y*b,this._y=p*y*x-v*g*b,this._z=p*g*b+v*y*x,this._w=p*g*x+v*y*b;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],d=t[9],p=t[2],g=t[6],x=t[10],v=r+f+x;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-d)*y,this._y=(l-p)*y,this._z=(u-o)*y}else if(r>f&&r>x){const y=2*Math.sqrt(1+r-f-x);this._w=(g-d)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+p)/y}else if(f>x){const y=2*Math.sqrt(1+f-r-x);this._w=(l-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(d+g)/y}else{const y=2*Math.sqrt(1+x-r-f);this._w=(u-o)/y,this._x=(l+p)/y,this._y=(d+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,d=t._y,p=t._z,g=t._w;return this._x=r*g+u*f+o*p-l*d,this._y=o*g+u*d+l*f-r*p,this._z=l*g+u*p+r*d-o*f,this._w=u*g-r*f-o*d-l*p,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let d=1-t;if(f<.9995){const p=Math.acos(f),g=Math.sin(p);d=Math.sin(d*p)/g,t=Math.sin(t*p)/g,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class he{constructor(e=0,t=0,r=0){he.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,d=e.w,p=2*(u*o-f*r),g=2*(f*t-l*o),x=2*(l*r-u*t);return this.x=t+d*p+u*x-f*g,this.y=r+d*g+f*p-l*x,this.z=o+d*x+l*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,d=t.z;return this.x=o*d-l*f,this.y=l*u-r*d,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Wh.copy(this).projectOnVector(e),this.sub(Wh)}reflect(e){return this.sub(Wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wh=new he,Fx=new bl;class dt{constructor(e,t,r,o,l,u,f,d,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,d,p)}set(e,t,r,o,l,u,f,d,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=t,g[4]=l,g[5]=d,g[6]=r,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],d=r[6],p=r[1],g=r[4],x=r[7],v=r[2],y=r[5],b=r[8],M=o[0],S=o[3],_=o[6],w=o[1],A=o[4],L=o[7],P=o[2],N=o[5],F=o[8];return l[0]=u*M+f*w+d*P,l[3]=u*S+f*A+d*N,l[6]=u*_+f*L+d*F,l[1]=p*M+g*w+x*P,l[4]=p*S+g*A+x*N,l[7]=p*_+g*L+x*F,l[2]=v*M+y*w+b*P,l[5]=v*S+y*A+b*N,l[8]=v*_+y*L+b*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],p=e[7],g=e[8];return t*u*g-t*f*p-r*l*g+r*f*d+o*l*p-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],p=e[7],g=e[8],x=g*u-f*p,v=f*d-g*l,y=p*l-u*d,b=t*x+r*v+o*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/b;return e[0]=x*M,e[1]=(o*p-g*r)*M,e[2]=(f*r-o*u)*M,e[3]=v*M,e[4]=(g*t-o*d)*M,e[5]=(o*l-f*t)*M,e[6]=y*M,e[7]=(r*d-p*t)*M,e[8]=(u*t-r*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const d=Math.cos(l),p=Math.sin(l);return this.set(r*d,r*p,-r*(d*u+p*f)+u+e,-o*p,o*d,-o*(-p*u+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(qh.makeScale(e,t)),this}rotate(e){return this.premultiply(qh.makeRotation(-e)),this}translate(e,t){return this.premultiply(qh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qh=new dt,zx=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hx=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yE(){const i={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===kt&&(o.r=ba(o.r),o.g=ba(o.g),o.b=ba(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===kt&&(o.r=qs(o.r),o.g=qs(o.g),o.b=qs(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Xi?yu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return gl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return gl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[hr]:{primaries:e,whitePoint:r,transfer:yu,toXYZ:zx,fromXYZ:Hx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:r,transfer:kt,toXYZ:zx,fromXYZ:Hx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),i}const Ct=yE();function ba(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ds;class SE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ds===void 0&&(Ds=bu("canvas")),Ds.width=e.width,Ds.height=e.height;const o=Ds.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ds}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=ba(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ba(t[r]/255)*255):t[r]=ba(t[r]);return{data:t,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bE=0;class Bp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=Sl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(jh(o[u].image)):l.push(jh(o[u]))}else l=jh(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function jh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?SE.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let ME=0;const Yh=new he;let Kn=class hu extends dr{constructor(e=hu.DEFAULT_IMAGE,t=hu.DEFAULT_MAPPING,r=_a,o=_a,l=Dn,u=Xr,f=Ui,d=ci,p=hu.DEFAULT_ANISOTROPY,g=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=Sl(),this.name="",this.source=new Bp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yh).x}get height(){return this.source.getSize(Yh).y}get depth(){return this.source.getSize(Yh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ft(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ft(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==b_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gd:e.x=e.x-Math.floor(e.x);break;case _a:e.x=e.x<0?0:1;break;case Vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gd:e.y=e.y-Math.floor(e.y);break;case _a:e.y=e.y<0?0:1;break;case Vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=b_;Kn.DEFAULT_ANISOTROPY=1;class un{constructor(e=0,t=0,r=0,o=1){un.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,p=d[0],g=d[4],x=d[8],v=d[1],y=d[5],b=d[9],M=d[2],S=d[6],_=d[10];if(Math.abs(g-v)<.01&&Math.abs(x-M)<.01&&Math.abs(b-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+M)<.1&&Math.abs(b+S)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(p+1)/2,L=(y+1)/2,P=(_+1)/2,N=(g+v)/4,F=(x+M)/4,q=(b+S)/4;return A>L&&A>P?A<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(A),o=N/r,l=F/r):L>P?L<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(L),r=N/o,l=q/o):P<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(P),r=F/l,o=q/l),this.set(r,o,l,t),this}let w=Math.sqrt((S-b)*(S-b)+(x-M)*(x-M)+(v-g)*(v-g));return Math.abs(w)<.001&&(w=1),this.x=(S-b)/w,this.y=(x-M)/w,this.z=(v-g)/w,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this.w=Et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this.w=Et(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class EE extends dr{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new un(0,0,e,t),this.scissorTest=!1,this.viewport=new un(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new Kn(o);this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Bp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends EE{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class N_ extends Kn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=oi,this.minFilter=oi,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class TE extends Kn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=oi,this.minFilter=oi,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ml{constructor(e=new he(1/0,1/0,1/0),t=new he(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ri):Ri.fromBufferAttribute(l,u),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ic.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ic.copy(r.boundingBox)),Ic.applyMatrix4(e.matrixWorld),this.union(Ic)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(il),Fc.subVectors(this.max,il),Us.subVectors(e.a,il),Ns.subVectors(e.b,il),Ls.subVectors(e.c,il),Ja.subVectors(Ns,Us),er.subVectors(Ls,Ns),Ur.subVectors(Us,Ls);let t=[0,-Ja.z,Ja.y,0,-er.z,er.y,0,-Ur.z,Ur.y,Ja.z,0,-Ja.x,er.z,0,-er.x,Ur.z,0,-Ur.x,-Ja.y,Ja.x,0,-er.y,er.x,0,-Ur.y,Ur.x,0];return!Zh(t,Us,Ns,Ls,Fc)||(t=[1,0,0,0,1,0,0,0,1],!Zh(t,Us,Ns,Ls,Fc))?!1:(zc.crossVectors(Ja,er),t=[zc.x,zc.y,zc.z],Zh(t,Us,Ns,Ls,Fc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ha),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ha=[new he,new he,new he,new he,new he,new he,new he,new he],Ri=new he,Ic=new Ml,Us=new he,Ns=new he,Ls=new he,Ja=new he,er=new he,Ur=new he,il=new he,Fc=new he,zc=new he,Nr=new he;function Zh(i,e,t,r,o){for(let l=0,u=i.length-3;l<=u;l+=3){Nr.fromArray(i,l);const f=o.x*Math.abs(Nr.x)+o.y*Math.abs(Nr.y)+o.z*Math.abs(Nr.z),d=e.dot(Nr),p=t.dot(Nr),g=r.dot(Nr);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>f)return!1}return!0}const AE=new Ml,al=new he,Kh=new he;class Ip{constructor(e=new he,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):AE.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;al.subVectors(e,this.center);const t=al.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(al,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(al.copy(e.center).add(Kh)),this.expandByPoint(al.copy(e.center).sub(Kh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const da=new he,Qh=new he,Hc=new he,tr=new he,$h=new he,Gc=new he,Jh=new he;class RE{constructor(e=new he,t=new he(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,da)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=da.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(da.copy(this.origin).addScaledVector(this.direction,t),da.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Qh.copy(e).add(t).multiplyScalar(.5),Hc.copy(t).sub(e).normalize(),tr.copy(this.origin).sub(Qh);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Hc),f=tr.dot(this.direction),d=-tr.dot(Hc),p=tr.lengthSq(),g=Math.abs(1-u*u);let x,v,y,b;if(g>0)if(x=u*d-f,v=u*f-d,b=l*g,x>=0)if(v>=-b)if(v<=b){const M=1/g;x*=M,v*=M,y=x*(x+u*v+2*f)+v*(u*x+v+2*d)+p}else v=l,x=Math.max(0,-(u*v+f)),y=-x*x+v*(v+2*d)+p;else v=-l,x=Math.max(0,-(u*v+f)),y=-x*x+v*(v+2*d)+p;else v<=-b?(x=Math.max(0,-(-u*l+f)),v=x>0?-l:Math.min(Math.max(-l,-d),l),y=-x*x+v*(v+2*d)+p):v<=b?(x=0,v=Math.min(Math.max(-l,-d),l),y=v*(v+2*d)+p):(x=Math.max(0,-(u*l+f)),v=x>0?l:Math.min(Math.max(-l,-d),l),y=-x*x+v*(v+2*d)+p);else v=u>0?-l:l,x=Math.max(0,-(u*v+f)),y=-x*x+v*(v+2*d)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(Qh).addScaledVector(Hc,v),y}intersectSphere(e,t){da.subVectors(e.center,this.origin);const r=da.dot(this.direction),o=da.dot(da)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,d=r+u;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,d;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,o=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,o=(e.min.x-v.x)*p),g>=0?(l=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(l=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),x>=0?(f=(e.min.z-v.z)*x,d=(e.max.z-v.z)*x):(f=(e.max.z-v.z)*x,d=(e.min.z-v.z)*x),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,da)!==null}intersectTriangle(e,t,r,o,l){$h.subVectors(t,e),Gc.subVectors(r,e),Jh.crossVectors($h,Gc);let u=this.direction.dot(Jh),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;tr.subVectors(this.origin,e);const d=f*this.direction.dot(Gc.crossVectors(tr,Gc));if(d<0)return null;const p=f*this.direction.dot($h.cross(tr));if(p<0||d+p>u)return null;const g=-f*tr.dot(Jh);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yn{constructor(e,t,r,o,l,u,f,d,p,g,x,v,y,b,M,S){yn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,d,p,g,x,v,y,b,M,S)}set(e,t,r,o,l,u,f,d,p,g,x,v,y,b,M,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=f,_[13]=d,_[2]=p,_[6]=g,_[10]=x,_[14]=v,_[3]=y,_[7]=b,_[11]=M,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yn().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Os.setFromMatrixColumn(e,0).length(),l=1/Os.setFromMatrixColumn(e,1).length(),u=1/Os.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),d=Math.cos(o),p=Math.sin(o),g=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const v=u*g,y=u*x,b=f*g,M=f*x;t[0]=d*g,t[4]=-d*x,t[8]=p,t[1]=y+b*p,t[5]=v-M*p,t[9]=-f*d,t[2]=M-v*p,t[6]=b+y*p,t[10]=u*d}else if(e.order==="YXZ"){const v=d*g,y=d*x,b=p*g,M=p*x;t[0]=v+M*f,t[4]=b*f-y,t[8]=u*p,t[1]=u*x,t[5]=u*g,t[9]=-f,t[2]=y*f-b,t[6]=M+v*f,t[10]=u*d}else if(e.order==="ZXY"){const v=d*g,y=d*x,b=p*g,M=p*x;t[0]=v-M*f,t[4]=-u*x,t[8]=b+y*f,t[1]=y+b*f,t[5]=u*g,t[9]=M-v*f,t[2]=-u*p,t[6]=f,t[10]=u*d}else if(e.order==="ZYX"){const v=u*g,y=u*x,b=f*g,M=f*x;t[0]=d*g,t[4]=b*p-y,t[8]=v*p+M,t[1]=d*x,t[5]=M*p+v,t[9]=y*p-b,t[2]=-p,t[6]=f*d,t[10]=u*d}else if(e.order==="YZX"){const v=u*d,y=u*p,b=f*d,M=f*p;t[0]=d*g,t[4]=M-v*x,t[8]=b*x+y,t[1]=x,t[5]=u*g,t[9]=-f*g,t[2]=-p*g,t[6]=y*x+b,t[10]=v-M*x}else if(e.order==="XZY"){const v=u*d,y=u*p,b=f*d,M=f*p;t[0]=d*g,t[4]=-x,t[8]=p*g,t[1]=v*x+M,t[5]=u*g,t[9]=y*x-b,t[2]=b*x-y,t[6]=f*g,t[10]=M*x+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wE,e,CE)}lookAt(e,t,r){const o=this.elements;return ai.subVectors(e,t),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),nr.crossVectors(r,ai),nr.lengthSq()===0&&(Math.abs(r.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),nr.crossVectors(r,ai)),nr.normalize(),Vc.crossVectors(ai,nr),o[0]=nr.x,o[4]=Vc.x,o[8]=ai.x,o[1]=nr.y,o[5]=Vc.y,o[9]=ai.y,o[2]=nr.z,o[6]=Vc.z,o[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],d=r[8],p=r[12],g=r[1],x=r[5],v=r[9],y=r[13],b=r[2],M=r[6],S=r[10],_=r[14],w=r[3],A=r[7],L=r[11],P=r[15],N=o[0],F=o[4],q=o[8],D=o[12],C=o[1],H=o[5],j=o[9],ne=o[13],ee=o[2],K=o[6],I=o[10],W=o[14],Y=o[3],pe=o[7],O=o[11],re=o[15];return l[0]=u*N+f*C+d*ee+p*Y,l[4]=u*F+f*H+d*K+p*pe,l[8]=u*q+f*j+d*I+p*O,l[12]=u*D+f*ne+d*W+p*re,l[1]=g*N+x*C+v*ee+y*Y,l[5]=g*F+x*H+v*K+y*pe,l[9]=g*q+x*j+v*I+y*O,l[13]=g*D+x*ne+v*W+y*re,l[2]=b*N+M*C+S*ee+_*Y,l[6]=b*F+M*H+S*K+_*pe,l[10]=b*q+M*j+S*I+_*O,l[14]=b*D+M*ne+S*W+_*re,l[3]=w*N+A*C+L*ee+P*Y,l[7]=w*F+A*H+L*K+P*pe,l[11]=w*q+A*j+L*I+P*O,l[15]=w*D+A*ne+L*W+P*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],d=e[9],p=e[13],g=e[2],x=e[6],v=e[10],y=e[14],b=e[3],M=e[7],S=e[11],_=e[15];return b*(+l*d*x-o*p*x-l*f*v+r*p*v+o*f*y-r*d*y)+M*(+t*d*y-t*p*v+l*u*v-o*u*y+o*p*g-l*d*g)+S*(+t*p*x-t*f*y-l*u*x+r*u*y+l*f*g-r*p*g)+_*(-o*f*g-t*d*x+t*f*v+o*u*x-r*u*v+r*d*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],p=e[7],g=e[8],x=e[9],v=e[10],y=e[11],b=e[12],M=e[13],S=e[14],_=e[15],w=x*S*p-M*v*p+M*d*y-f*S*y-x*d*_+f*v*_,A=b*v*p-g*S*p-b*d*y+u*S*y+g*d*_-u*v*_,L=g*M*p-b*x*p+b*f*y-u*M*y-g*f*_+u*x*_,P=b*x*d-g*M*d-b*f*v+u*M*v+g*f*S-u*x*S,N=t*w+r*A+o*L+l*P;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return e[0]=w*F,e[1]=(M*v*l-x*S*l-M*o*y+r*S*y+x*o*_-r*v*_)*F,e[2]=(f*S*l-M*d*l+M*o*p-r*S*p-f*o*_+r*d*_)*F,e[3]=(x*d*l-f*v*l-x*o*p+r*v*p+f*o*y-r*d*y)*F,e[4]=A*F,e[5]=(g*S*l-b*v*l+b*o*y-t*S*y-g*o*_+t*v*_)*F,e[6]=(b*d*l-u*S*l-b*o*p+t*S*p+u*o*_-t*d*_)*F,e[7]=(u*v*l-g*d*l+g*o*p-t*v*p-u*o*y+t*d*y)*F,e[8]=L*F,e[9]=(b*x*l-g*M*l-b*r*y+t*M*y+g*r*_-t*x*_)*F,e[10]=(u*M*l-b*f*l+b*r*p-t*M*p-u*r*_+t*f*_)*F,e[11]=(g*f*l-u*x*l-g*r*p+t*x*p+u*r*y-t*f*y)*F,e[12]=P*F,e[13]=(g*M*o-b*x*o+b*r*v-t*M*v-g*r*S+t*x*S)*F,e[14]=(b*f*o-u*M*o-b*r*d+t*M*d+u*r*S-t*f*S)*F,e[15]=(u*x*o-g*f*o+g*r*d-t*x*d-u*r*v+t*f*v)*F,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,d=e.z,p=l*u,g=l*f;return this.set(p*u+r,p*f-o*d,p*d+o*f,0,p*f+o*d,g*f+r,g*d-o*u,0,p*d-o*f,g*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,d=t._w,p=l+l,g=u+u,x=f+f,v=l*p,y=l*g,b=l*x,M=u*g,S=u*x,_=f*x,w=d*p,A=d*g,L=d*x,P=r.x,N=r.y,F=r.z;return o[0]=(1-(M+_))*P,o[1]=(y+L)*P,o[2]=(b-A)*P,o[3]=0,o[4]=(y-L)*N,o[5]=(1-(v+_))*N,o[6]=(S+w)*N,o[7]=0,o[8]=(b+A)*F,o[9]=(S-w)*F,o[10]=(1-(v+M))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=Os.set(o[0],o[1],o[2]).length();const u=Os.set(o[4],o[5],o[6]).length(),f=Os.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],wi.copy(this);const p=1/l,g=1/u,x=1/f;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=g,wi.elements[5]*=g,wi.elements[6]*=g,wi.elements[8]*=x,wi.elements[9]*=x,wi.elements[10]*=x,t.setFromRotationMatrix(wi),r.x=l,r.y=u,r.z=f,this}makePerspective(e,t,r,o,l,u,f=Wi,d=!1){const p=this.elements,g=2*l/(t-e),x=2*l/(r-o),v=(t+e)/(t-e),y=(r+o)/(r-o);let b,M;if(d)b=l/(u-l),M=u*l/(u-l);else if(f===Wi)b=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(f===Su)b=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=x,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=M,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=Wi,d=!1){const p=this.elements,g=2/(t-e),x=2/(r-o),v=-(t+e)/(t-e),y=-(r+o)/(r-o);let b,M;if(d)b=1/(u-l),M=u/(u-l);else if(f===Wi)b=-2/(u-l),M=-(u+l)/(u-l);else if(f===Su)b=-1/(u-l),M=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=x,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=M,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Os=new he,wi=new yn,wE=new he(0,0,0),CE=new he(1,1,1),nr=new he,Vc=new he,ai=new he,Gx=new yn,Vx=new bl;let jr=class L_{constructor(e=0,t=0,r=0,o=L_.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],d=o[1],p=o[5],g=o[9],x=o[2],v=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Et(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,y),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Gx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gx,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vx.setFromEuler(this),this.setFromQuaternion(Vx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jr.DEFAULT_ORDER="XYZ";class O_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DE=0;const kx=new he,Ps=new bl,pa=new yn,kc=new he,rl=new he,UE=new he,NE=new bl,Xx=new he(1,0,0),Wx=new he(0,1,0),qx=new he(0,0,1),jx={type:"added"},LE={type:"removed"},Bs={type:"childadded",child:null},ed={type:"childremoved",child:null};class li extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=Sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=li.DEFAULT_UP.clone();const e=new he,t=new jr,r=new bl,o=new he(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new yn},normalMatrix:{value:new dt}}),this.matrix=new yn,this.matrixWorld=new yn,this.matrixAutoUpdate=li.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new O_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(Xx,e)}rotateY(e){return this.rotateOnAxis(Wx,e)}rotateZ(e){return this.rotateOnAxis(qx,e)}translateOnAxis(e,t){return kx.copy(e).applyQuaternion(this.quaternion),this.position.add(kx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xx,e)}translateY(e){return this.translateOnAxis(Wx,e)}translateZ(e){return this.translateOnAxis(qx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?kc.copy(e):kc.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(rl,kc,this.up):pa.lookAt(kc,rl,this.up),this.quaternion.setFromRotationMatrix(pa),o&&(pa.extractRotation(o.matrixWorld),Ps.setFromRotationMatrix(pa),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(cn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jx),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):cn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(LE),ed.child=e,this.dispatchEvent(ed),ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pa.multiply(e.parent.matrixWorld)),e.applyMatrix4(pa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jx),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,e,UE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,NE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const x=d[p];l(e.shapes,x)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(t){const f=u(e.geometries),d=u(e.materials),p=u(e.textures),g=u(e.images),x=u(e.shapes),v=u(e.skeletons),y=u(e.animations),b=u(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),b.length>0&&(r.nodes=b)}return r.object=o,r;function u(f){const d=[];for(const p in f){const g=f[p];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}li.DEFAULT_UP=new he(0,1,0);li.DEFAULT_MATRIX_AUTO_UPDATE=!0;li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new he,ma=new he,td=new he,ga=new he,Is=new he,Fs=new he,Yx=new he,nd=new he,id=new he,ad=new he,rd=new un,sd=new un,od=new un;class Di{constructor(e=new he,t=new he,r=new he){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ci.subVectors(e,t),o.cross(Ci);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Ci.subVectors(o,t),ma.subVectors(r,t),td.subVectors(e,t);const u=Ci.dot(Ci),f=Ci.dot(ma),d=Ci.dot(td),p=ma.dot(ma),g=ma.dot(td),x=u*p-f*f;if(x===0)return l.set(0,0,0),null;const v=1/x,y=(p*d-f*g)*v,b=(u*g-f*d)*v;return l.set(1-y-b,b,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(e,t,r,o,l,u,f,d){return this.getBarycoord(e,t,r,o,ga)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,ga.x),d.addScaledVector(u,ga.y),d.addScaledVector(f,ga.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return rd.setScalar(0),sd.setScalar(0),od.setScalar(0),rd.fromBufferAttribute(e,t),sd.fromBufferAttribute(e,r),od.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(rd,l.x),u.addScaledVector(sd,l.y),u.addScaledVector(od,l.z),u}static isFrontFacing(e,t,r,o){return Ci.subVectors(r,t),ma.subVectors(e,t),Ci.cross(ma).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),Ci.cross(ma).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Di.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;Is.subVectors(o,r),Fs.subVectors(l,r),nd.subVectors(e,r);const d=Is.dot(nd),p=Fs.dot(nd);if(d<=0&&p<=0)return t.copy(r);id.subVectors(e,o);const g=Is.dot(id),x=Fs.dot(id);if(g>=0&&x<=g)return t.copy(o);const v=d*x-g*p;if(v<=0&&d>=0&&g<=0)return u=d/(d-g),t.copy(r).addScaledVector(Is,u);ad.subVectors(e,l);const y=Is.dot(ad),b=Fs.dot(ad);if(b>=0&&y<=b)return t.copy(l);const M=y*p-d*b;if(M<=0&&p>=0&&b<=0)return f=p/(p-b),t.copy(r).addScaledVector(Fs,f);const S=g*b-y*x;if(S<=0&&x-g>=0&&y-b>=0)return Yx.subVectors(l,o),f=(x-g)/(x-g+(y-b)),t.copy(o).addScaledVector(Yx,f);const _=1/(S+M+v);return u=M*_,f=v*_,t.copy(r).addScaledVector(Is,u).addScaledVector(Fs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const P_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},Xc={h:0,s:0,l:0};function ld(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ct.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Ct.workingColorSpace){if(e=_E(e,1),t=Et(t,0,1),r=Et(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=ld(u,l,e+1/3),this.g=ld(u,l,e),this.b=ld(u,l,e-1/3)}return Ct.colorSpaceToWorking(this,o),this}setStyle(e,t=ln){function r(l){l!==void 0&&parseFloat(l)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ft("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const r=P_[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return Ct.workingToColorSpace(zn.copy(this),e),Math.round(Et(zn.r*255,0,255))*65536+Math.round(Et(zn.g*255,0,255))*256+Math.round(Et(zn.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.workingToColorSpace(zn.copy(this),t);const r=zn.r,o=zn.g,l=zn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let d,p;const g=(f+u)/2;if(f===u)d=0,p=0;else{const x=u-f;switch(p=g<=.5?x/(u+f):x/(2-u-f),u){case r:d=(o-l)/x+(o<l?6:0);break;case o:d=(l-r)/x+2;break;case l:d=(r-o)/x+4;break}d/=6}return e.h=d,e.s=p,e.l=g,e}getRGB(e,t=Ct.workingColorSpace){return Ct.workingToColorSpace(zn.copy(this),t),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=ln){Ct.workingToColorSpace(zn.copy(this),e);const t=zn.r,r=zn.g,o=zn.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+t,ir.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(ir),e.getHSL(Xc);const r=Xh(ir.h,Xc.h,t),o=Xh(ir.s,Xc.s,t),l=Xh(ir.l,Xc.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Pt;Pt.NAMES=P_;let OE=0;class to extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=Sl(),this.name="",this.type="Material",this.blending=Ws,this.side=Ea,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ud,this.blendDst=Nd,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ox,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ft(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ft(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(r.blending=this.blending),this.side!==Ea&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ud&&(r.blendSrc=this.blendSrc),this.blendDst!==Nd&&(r.blendDst=this.blendDst),this.blendEquation!==Vr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ox&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class B_ extends to{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jr,this.combine=S_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mn=new he,Wc=new _t;let PE=0;class Si{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Px,this.updateRanges=[],this.gpuType=ya,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Wc.fromBufferAttribute(this,t),Wc.applyMatrix3(e),this.setXY(t,Wc.x,Wc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=nl(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Yn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),r=Yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),r=Yn(r,this.array),o=Yn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),r=Yn(r,this.array),o=Yn(o,this.array),l=Yn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Px&&(e.usage=this.usage),e}}class I_ extends Si{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class F_ extends Si{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Wr extends Si{constructor(e,t,r){super(new Float32Array(e),t,r)}}let BE=0;const _i=new yn,cd=new li,zs=new he,ri=new Ml,sl=new Ml,wn=new he;class Aa extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=Sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U_(e)?F_:I_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new dt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,r){return _i.makeTranslation(e,t,r),this.applyMatrix4(_i),this}scale(e,t,r){return _i.makeScale(e,t,r),this.applyMatrix4(_i),this}lookAt(e){return cd.lookAt(e),cd.updateMatrix(),this.applyMatrix4(cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Wr(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ml);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){cn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new he(-1/0,-1/0,-1/0),new he(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ri.setFromBufferAttribute(l),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&cn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ip);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){cn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new he,1/0);return}if(e){const r=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];sl.setFromBufferAttribute(f),this.morphTargetsRelative?(wn.addVectors(ri.min,sl.min),ri.expandByPoint(wn),wn.addVectors(ri.max,sl.max),ri.expandByPoint(wn)):(ri.expandByPoint(sl.min),ri.expandByPoint(sl.max))}ri.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)wn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(wn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],d=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)wn.fromBufferAttribute(f,p),d&&(zs.fromBufferAttribute(e,p),wn.add(zs)),o=Math.max(o,r.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&cn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){cn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let q=0;q<r.count;q++)f[q]=new he,d[q]=new he;const p=new he,g=new he,x=new he,v=new _t,y=new _t,b=new _t,M=new he,S=new he;function _(q,D,C){p.fromBufferAttribute(r,q),g.fromBufferAttribute(r,D),x.fromBufferAttribute(r,C),v.fromBufferAttribute(l,q),y.fromBufferAttribute(l,D),b.fromBufferAttribute(l,C),g.sub(p),x.sub(p),y.sub(v),b.sub(v);const H=1/(y.x*b.y-b.x*y.y);isFinite(H)&&(M.copy(g).multiplyScalar(b.y).addScaledVector(x,-y.y).multiplyScalar(H),S.copy(x).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(H),f[q].add(M),f[D].add(M),f[C].add(M),d[q].add(S),d[D].add(S),d[C].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let q=0,D=w.length;q<D;++q){const C=w[q],H=C.start,j=C.count;for(let ne=H,ee=H+j;ne<ee;ne+=3)_(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const A=new he,L=new he,P=new he,N=new he;function F(q){P.fromBufferAttribute(o,q),N.copy(P);const D=f[q];A.copy(D),A.sub(P.multiplyScalar(P.dot(D))).normalize(),L.crossVectors(N,D);const H=L.dot(d[q])<0?-1:1;u.setXYZW(q,A.x,A.y,A.z,H)}for(let q=0,D=w.length;q<D;++q){const C=w[q],H=C.start,j=C.count;for(let ne=H,ee=H+j;ne<ee;ne+=3)F(e.getX(ne+0)),F(e.getX(ne+1)),F(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Si(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const o=new he,l=new he,u=new he,f=new he,d=new he,p=new he,g=new he,x=new he;if(e)for(let v=0,y=e.count;v<y;v+=3){const b=e.getX(v+0),M=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(t,b),l.fromBufferAttribute(t,M),u.fromBufferAttribute(t,S),g.subVectors(u,l),x.subVectors(o,l),g.cross(x),f.fromBufferAttribute(r,b),d.fromBufferAttribute(r,M),p.fromBufferAttribute(r,S),f.add(g),d.add(g),p.add(g),r.setXYZ(b,f.x,f.y,f.z),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,y=t.count;v<y;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),g.subVectors(u,l),x.subVectors(o,l),g.cross(x),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)wn.fromBufferAttribute(e,t),wn.normalize(),e.setXYZ(t,wn.x,wn.y,wn.z)}toNonIndexed(){function e(f,d){const p=f.array,g=f.itemSize,x=f.normalized,v=new p.constructor(d.length*g);let y=0,b=0;for(let M=0,S=d.length;M<S;M++){f.isInterleavedBufferAttribute?y=d[M]*f.data.stride+f.offset:y=d[M]*g;for(let _=0;_<g;_++)v[b++]=p[y++]}return new Si(v,g,x)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Aa,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],p=e(d,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let g=0,x=p.length;g<x;g++){const v=p[g],y=e(v,r);d.push(y)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const p=r[d];e.data.attributes[d]=p.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let x=0,v=p.length;x<v;x++){const y=p[x];g.push(y.toJSON(e.data))}g.length>0&&(o[d]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],x=l[p];for(let v=0,y=x.length;v<y;v++)g.push(x[v].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const x=u[p];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zx=new yn,Lr=new RE,qc=new Ip,Kx=new he,jc=new he,Yc=new he,Zc=new he,ud=new he,Kc=new he,Qx=new he,Qc=new he;let qi=class extends li{constructor(e=new Aa,t=new B_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Kc.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const g=f[d],x=l[d];g!==0&&(ud.fromBufferAttribute(x,e),u?Kc.addScaledVector(ud,g):Kc.addScaledVector(ud.sub(t),g))}t.add(Kc)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),qc.copy(r.boundingSphere),qc.applyMatrix4(l),Lr.copy(e.ray).recast(e.near),!(qc.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(qc,Kx)===null||Lr.origin.distanceToSquared(Kx)>(e.far-e.near)**2))&&(Zx.copy(l).invert(),Lr.copy(e.ray).applyMatrix4(Zx),!(r.boundingBox!==null&&Lr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Lr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,x=l.attributes.normal,v=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(u))for(let b=0,M=v.length;b<M;b++){const S=v[b],_=u[S.materialIndex],w=Math.max(S.start,y.start),A=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let L=w,P=A;L<P;L+=3){const N=f.getX(L),F=f.getX(L+1),q=f.getX(L+2);o=$c(this,_,e,r,p,g,x,N,F,q),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const b=Math.max(0,y.start),M=Math.min(f.count,y.start+y.count);for(let S=b,_=M;S<_;S+=3){const w=f.getX(S),A=f.getX(S+1),L=f.getX(S+2);o=$c(this,u,e,r,p,g,x,w,A,L),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let b=0,M=v.length;b<M;b++){const S=v[b],_=u[S.materialIndex],w=Math.max(S.start,y.start),A=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let L=w,P=A;L<P;L+=3){const N=L,F=L+1,q=L+2;o=$c(this,_,e,r,p,g,x,N,F,q),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const b=Math.max(0,y.start),M=Math.min(d.count,y.start+y.count);for(let S=b,_=M;S<_;S+=3){const w=S,A=S+1,L=S+2;o=$c(this,u,e,r,p,g,x,w,A,L),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}};function IE(i,e,t,r,o,l,u,f){let d;if(e.side===Cn?d=r.intersectTriangle(u,l,o,!0,f):d=r.intersectTriangle(o,l,u,e.side===Ea,f),d===null)return null;Qc.copy(f),Qc.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(Qc);return p<t.near||p>t.far?null:{distance:p,point:Qc.clone(),object:i}}function $c(i,e,t,r,o,l,u,f,d,p){i.getVertexPosition(f,jc),i.getVertexPosition(d,Yc),i.getVertexPosition(p,Zc);const g=IE(i,e,t,r,jc,Yc,Zc,Qx);if(g){const x=new he;Di.getBarycoord(Qx,jc,Yc,Zc,x),o&&(g.uv=Di.getInterpolatedAttribute(o,f,d,p,x,new _t)),l&&(g.uv1=Di.getInterpolatedAttribute(l,f,d,p,x,new _t)),u&&(g.normal=Di.getInterpolatedAttribute(u,f,d,p,x,new he),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:f,b:d,c:p,normal:new he,materialIndex:0};Di.getNormal(jc,Yc,Zc,v.normal),g.face=v,g.barycoord=x}return g}class El extends Aa{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],p=[],g=[],x=[];let v=0,y=0;b("z","y","x",-1,-1,r,t,e,u,l,0),b("z","y","x",1,-1,r,t,-e,u,l,1),b("x","z","y",1,1,e,r,t,o,u,2),b("x","z","y",1,-1,e,r,-t,o,u,3),b("x","y","z",1,-1,e,t,r,o,l,4),b("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Wr(p,3)),this.setAttribute("normal",new Wr(g,3)),this.setAttribute("uv",new Wr(x,2));function b(M,S,_,w,A,L,P,N,F,q,D){const C=L/F,H=P/q,j=L/2,ne=P/2,ee=N/2,K=F+1,I=q+1;let W=0,Y=0;const pe=new he;for(let O=0;O<I;O++){const re=O*H-ne;for(let Se=0;Se<K;Se++){const Me=Se*C-j;pe[M]=Me*w,pe[S]=re*A,pe[_]=ee,p.push(pe.x,pe.y,pe.z),pe[M]=0,pe[S]=0,pe[_]=N>0?1:-1,g.push(pe.x,pe.y,pe.z),x.push(Se/F),x.push(1-O/q),W+=1}}for(let O=0;O<q;O++)for(let re=0;re<F;re++){const Se=v+re+K*O,Me=v+re+K*(O+1),De=v+(re+1)+K*(O+1),We=v+(re+1)+K*O;d.push(Se,Me,We),d.push(Me,De,We),Y+=6}f.addGroup(y,Y,D),y+=Y,v+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const o=i[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function kn(i){const e={};for(let t=0;t<i.length;t++){const r=$s(i[t]);for(const o in r)e[o]=r[o]}return e}function FE(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function z_(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const zE={clone:$s,merge:kn};var HE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends to{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HE,this.fragmentShader=GE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=FE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}let H_=class extends li{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yn,this.projectionMatrix=new yn,this.projectionMatrixInverse=new yn,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const ar=new he,$x=new _t,Jx=new _t;class yi extends H_{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vp*2*Math.atan(Math.tan(kh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,t){return this.getViewBounds(e,$x,Jx),t.subVectors(Jx,$x)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(kh*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/p,o*=u.width/d,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hs=-90,Gs=1;class VE extends li{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new yi(Hs,Gs,e,t);o.layers=this.layers,this.add(o);const l=new yi(Hs,Gs,e,t);l.layers=this.layers,this.add(l);const u=new yi(Hs,Gs,e,t);u.layers=this.layers,this.add(u);const f=new yi(Hs,Gs,e,t);f.layers=this.layers,this.add(f);const d=new yi(Hs,Gs,e,t);d.layers=this.layers,this.add(d);const p=new yi(Hs,Gs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,d]=t;for(const p of t)this.remove(p);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Su)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,p,g]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const M=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,f),e.setRenderTarget(r,3,o),e.render(t,d),e.setRenderTarget(r,4,o),e.render(t,p),r.texture.generateMipmaps=M,e.setRenderTarget(r,5,o),e.render(t,g),e.setRenderTarget(x,v,y),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class G_ extends Kn{constructor(e=[],t=Ys,r,o,l,u,f,d,p,g){super(e,t,r,o,l,u,f,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kE extends Oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new G_(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new El(5,5,5),l=new ui({name:"CubemapFromEquirect",uniforms:$s(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Cn,blending:Ni});l.uniforms.tEquirect.value=t;const u=new qi(o,l),f=t.minFilter;return t.minFilter===Xr&&(t.minFilter=Dn),new VE(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class Jc extends li{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XE={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new he,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new he),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new he,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new he),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,r),_=this._getHandJoint(p,M);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],v=g.position.distanceTo(x.position),y=.02,b=.005;p.inputState.pinching&&v>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(XE)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Jc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class _p extends li{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jr,this.environmentIntensity=1,this.environmentRotation=new jr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class WE extends Kn{constructor(e=null,t=1,r=1,o,l,u,f,d,p=oi,g=oi,x,v){super(null,u,f,d,p,g,o,l,x,v),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hd=new he,qE=new he,jE=new dt;let Gr=class{constructor(e=new he(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=hd.subVectors(r,t).cross(qE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(hd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||jE.getNormalMatrix(e),o=this.coplanarPoint(hd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Or=new Ip,YE=new _t(.5,.5),eu=new he;class V_{constructor(e=new Gr,t=new Gr,r=new Gr,o=new Gr,l=new Gr,u=new Gr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Wi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],d=l[2],p=l[3],g=l[4],x=l[5],v=l[6],y=l[7],b=l[8],M=l[9],S=l[10],_=l[11],w=l[12],A=l[13],L=l[14],P=l[15];if(o[0].setComponents(p-u,y-g,_-b,P-w).normalize(),o[1].setComponents(p+u,y+g,_+b,P+w).normalize(),o[2].setComponents(p+f,y+x,_+M,P+A).normalize(),o[3].setComponents(p-f,y-x,_-M,P-A).normalize(),r)o[4].setComponents(d,v,S,L).normalize(),o[5].setComponents(p-d,y-v,_-S,P-L).normalize();else if(o[4].setComponents(p-d,y-v,_-S,P-L).normalize(),t===Wi)o[5].setComponents(p+d,y+v,_+S,P+L).normalize();else if(t===Su)o[5].setComponents(d,v,S,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){Or.center.set(0,0,0);const t=YE.distanceTo(e.center);return Or.radius=.7071067811865476+t,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(eu.x=o.normal.x>0?e.max.x:e.min.x,eu.y=o.normal.y>0?e.max.y:e.min.y,eu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(eu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fp extends Kn{constructor(e,t,r=fr,o,l,u,f=oi,d=oi,p,g=ml,x=1){if(g!==ml&&g!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:x};super(v,o,l,u,f,d,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class k_ extends Kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Tl extends Aa{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),d=Math.floor(o),p=f+1,g=d+1,x=e/f,v=t/d,y=[],b=[],M=[],S=[];for(let _=0;_<g;_++){const w=_*v-u;for(let A=0;A<p;A++){const L=A*x-l;b.push(L,-w,0),M.push(0,0,1),S.push(A/f),S.push(1-_/d)}}for(let _=0;_<d;_++)for(let w=0;w<f;w++){const A=w+p*_,L=w+p*(_+1),P=w+1+p*(_+1),N=w+1+p*_;y.push(A,L,N),y.push(L,P,N)}this.setIndex(y),this.setAttribute("position",new Wr(b,3)),this.setAttribute("normal",new Wr(M,3)),this.setAttribute("uv",new Wr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.width,e.height,e.widthSegments,e.heightSegments)}}class ZE extends to{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KE extends to{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zp extends H_{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class QE extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class $E{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class on{constructor(e){this.value=e}clone(){return new on(this.value.clone===void 0?this.value:this.value.clone())}}function ev(i,e,t,r){const o=JE(r);switch(t){case R_:return i*e;case C_:return i*e/o.components*o.byteLength;case Np:return i*e/o.components*o.byteLength;case Lp:return i*e*2/o.components*o.byteLength;case Op:return i*e*2/o.components*o.byteLength;case w_:return i*e*3/o.components*o.byteLength;case Ui:return i*e*4/o.components*o.byteLength;case Pp:return i*e*4/o.components*o.byteLength;case lu:case cu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uu:case fu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xd:case qd:return Math.max(i,16)*Math.max(e,8)/4;case kd:case Wd:return Math.max(i,8)*Math.max(e,8)/2;case jd:case Yd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case $d:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ep:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case tp:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case np:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ip:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ap:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case rp:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case sp:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case op:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case lp:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case cp:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case up:case fp:case hp:return Math.ceil(i/4)*Math.ceil(e/4)*16;case dp:case pp:return Math.ceil(i/4)*Math.ceil(e/4)*8;case mp:case gp:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function JE(i){switch(i){case ci:case M_:return{byteLength:1,components:1};case pl:case E_:case eo:return{byteLength:2,components:1};case Dp:case Up:return{byteLength:2,components:4};case fr:case Cp:case ya:return{byteLength:4,components:1};case T_:case A_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Au}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Au);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function X_(){let i=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function e3(i){const e=new WeakMap;function t(f,d){const p=f.array,g=f.usage,x=p.byteLength,v=i.createBuffer();i.bindBuffer(d,v),i.bufferData(d,p,g),f.onUploadCallback();let y;if(p instanceof Float32Array)y=i.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=i.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=i.SHORT;else if(p instanceof Uint32Array)y=i.UNSIGNED_INT;else if(p instanceof Int32Array)y=i.INT;else if(p instanceof Int8Array)y=i.BYTE;else if(p instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,d,p){const g=d.array,x=d.updateRanges;if(i.bindBuffer(p,f),x.length===0)i.bufferSubData(p,0,g);else{x.sort((y,b)=>y.start-b.start);let v=0;for(let y=1;y<x.length;y++){const b=x[v],M=x[y];M.start<=b.start+b.count+1?b.count=Math.max(b.count,M.start+M.count-b.start):(++v,x[v]=M)}x.length=v+1;for(let y=0,b=x.length;y<b;y++){const M=x[y];i.bufferSubData(p,M.start*g.BYTES_PER_ELEMENT,g,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(i.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,d),p.version=f.version}}return{get:o,remove:l,update:u}}var t3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n3=`#ifdef USE_ALPHAHASH
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
#endif`,i3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o3=`#ifdef USE_AOMAP
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
#endif`,l3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c3=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,u3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,p3=`#ifdef USE_IRIDESCENCE
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
#endif`,m3=`#ifdef USE_BUMPMAP
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
#endif`,g3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,x3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,b3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,M3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,E3=`#define PI 3.141592653589793
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
} // validated`,T3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,A3=`vec3 transformedNormal = objectNormal;
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
#endif`,R3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U3="gl_FragColor = linearToOutputTexel( gl_FragColor );",N3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L3=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,O3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,P3=`#ifdef USE_ENVMAP
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
#endif`,B3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I3=`#ifdef USE_ENVMAP
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
#endif`,F3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V3=`#ifdef USE_GRADIENTMAP
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
}`,k3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,q3=`uniform bool receiveShadow;
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
#endif`,j3=`#ifdef USE_ENVMAP
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
#endif`,Y3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,J3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eT=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,nT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uT=`#if defined( USE_POINTS_UV )
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
#endif`,fT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gT=`#ifdef USE_MORPHTARGETS
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
#endif`,xT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_T=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ST=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,MT=`#ifdef USE_NORMALMAP
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
#endif`,ET=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,DT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,IT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,zT=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,HT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GT=`#ifdef USE_SKINNING
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
#endif`,VT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kT=`#ifdef USE_SKINNING
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
#endif`,XT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YT=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZT=`#ifdef USE_TRANSMISSION
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
#endif`,KT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t2=`uniform sampler2D t2D;
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
}`,n2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s2=`#include <common>
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
}`,o2=`#if DEPTH_PACKING == 3200
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
}`,l2=`#define DISTANCE
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
}`,c2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,u2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h2=`uniform float scale;
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
}`,d2=`uniform vec3 diffuse;
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
}`,p2=`#include <common>
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
}`,m2=`uniform vec3 diffuse;
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
}`,g2=`#define LAMBERT
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
}`,x2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,v2=`#define MATCAP
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
}`,_2=`#define MATCAP
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
}`,y2=`#define NORMAL
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
}`,S2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,b2=`#define PHONG
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
}`,M2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,E2=`#define STANDARD
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
}`,T2=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,A2=`#define TOON
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
}`,R2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,w2=`uniform float size;
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
}`,C2=`uniform vec3 diffuse;
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
}`,D2=`#include <common>
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
}`,U2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,N2=`uniform float rotation;
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
}`,L2=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:t3,alphahash_pars_fragment:n3,alphamap_fragment:i3,alphamap_pars_fragment:a3,alphatest_fragment:r3,alphatest_pars_fragment:s3,aomap_fragment:o3,aomap_pars_fragment:l3,batching_pars_vertex:c3,batching_vertex:u3,begin_vertex:f3,beginnormal_vertex:h3,bsdfs:d3,iridescence_fragment:p3,bumpmap_pars_fragment:m3,clipping_planes_fragment:g3,clipping_planes_pars_fragment:x3,clipping_planes_pars_vertex:v3,clipping_planes_vertex:_3,color_fragment:y3,color_pars_fragment:S3,color_pars_vertex:b3,color_vertex:M3,common:E3,cube_uv_reflection_fragment:T3,defaultnormal_vertex:A3,displacementmap_pars_vertex:R3,displacementmap_vertex:w3,emissivemap_fragment:C3,emissivemap_pars_fragment:D3,colorspace_fragment:U3,colorspace_pars_fragment:N3,envmap_fragment:L3,envmap_common_pars_fragment:O3,envmap_pars_fragment:P3,envmap_pars_vertex:B3,envmap_physical_pars_fragment:j3,envmap_vertex:I3,fog_vertex:F3,fog_pars_vertex:z3,fog_fragment:H3,fog_pars_fragment:G3,gradientmap_pars_fragment:V3,lightmap_pars_fragment:k3,lights_lambert_fragment:X3,lights_lambert_pars_fragment:W3,lights_pars_begin:q3,lights_toon_fragment:Y3,lights_toon_pars_fragment:Z3,lights_phong_fragment:K3,lights_phong_pars_fragment:Q3,lights_physical_fragment:$3,lights_physical_pars_fragment:J3,lights_fragment_begin:eT,lights_fragment_maps:tT,lights_fragment_end:nT,logdepthbuf_fragment:iT,logdepthbuf_pars_fragment:aT,logdepthbuf_pars_vertex:rT,logdepthbuf_vertex:sT,map_fragment:oT,map_pars_fragment:lT,map_particle_fragment:cT,map_particle_pars_fragment:uT,metalnessmap_fragment:fT,metalnessmap_pars_fragment:hT,morphinstance_vertex:dT,morphcolor_vertex:pT,morphnormal_vertex:mT,morphtarget_pars_vertex:gT,morphtarget_vertex:xT,normal_fragment_begin:vT,normal_fragment_maps:_T,normal_pars_fragment:yT,normal_pars_vertex:ST,normal_vertex:bT,normalmap_pars_fragment:MT,clearcoat_normal_fragment_begin:ET,clearcoat_normal_fragment_maps:TT,clearcoat_pars_fragment:AT,iridescence_pars_fragment:RT,opaque_fragment:wT,packing:CT,premultiplied_alpha_fragment:DT,project_vertex:UT,dithering_fragment:NT,dithering_pars_fragment:LT,roughnessmap_fragment:OT,roughnessmap_pars_fragment:PT,shadowmap_pars_fragment:BT,shadowmap_pars_vertex:IT,shadowmap_vertex:FT,shadowmask_pars_fragment:zT,skinbase_vertex:HT,skinning_pars_vertex:GT,skinning_vertex:VT,skinnormal_vertex:kT,specularmap_fragment:XT,specularmap_pars_fragment:WT,tonemapping_fragment:qT,tonemapping_pars_fragment:jT,transmission_fragment:YT,transmission_pars_fragment:ZT,uv_pars_fragment:KT,uv_pars_vertex:QT,uv_vertex:$T,worldpos_vertex:JT,background_vert:e2,background_frag:t2,backgroundCube_vert:n2,backgroundCube_frag:i2,cube_vert:a2,cube_frag:r2,depth_vert:s2,depth_frag:o2,distanceRGBA_vert:l2,distanceRGBA_frag:c2,equirect_vert:u2,equirect_frag:f2,linedashed_vert:h2,linedashed_frag:d2,meshbasic_vert:p2,meshbasic_frag:m2,meshlambert_vert:g2,meshlambert_frag:x2,meshmatcap_vert:v2,meshmatcap_frag:_2,meshnormal_vert:y2,meshnormal_frag:S2,meshphong_vert:b2,meshphong_frag:M2,meshphysical_vert:E2,meshphysical_frag:T2,meshtoon_vert:A2,meshtoon_frag:R2,points_vert:w2,points_frag:C2,shadow_vert:D2,shadow_frag:U2,sprite_vert:N2,sprite_frag:L2},Oe={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},ki={basic:{uniforms:kn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:kn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:kn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:kn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:kn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:kn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:kn([Oe.points,Oe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:kn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:kn([Oe.common,Oe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:kn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:kn([Oe.sprite,Oe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:kn([Oe.common,Oe.displacementmap,{referencePosition:{value:new he},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:kn([Oe.lights,Oe.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};ki.physical={uniforms:kn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const tu={r:0,b:0,g:0},Pr=new jr,O2=new yn;function P2(i,e,t,r,o,l,u){const f=new Pt(0);let d=l===!0?0:1,p,g,x=null,v=0,y=null;function b(A){let L=A.isScene===!0?A.background:null;return L&&L.isTexture&&(L=(A.backgroundBlurriness>0?t:e).get(L)),L}function M(A){let L=!1;const P=b(A);P===null?_(f,d):P&&P.isColor&&(_(P,1),L=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,u):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(i.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(A,L){const P=b(L);P&&(P.isCubeTexture||P.mapping===Ru)?(g===void 0&&(g=new qi(new El(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:$s(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(N,F,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Pr.copy(L.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(O2.makeRotationFromEuler(Pr)),g.material.toneMapped=Ct.getTransfer(P.colorSpace)!==kt,(x!==P||v!==P.version||y!==i.toneMapping)&&(g.material.needsUpdate=!0,x=P,v=P.version,y=i.toneMapping),g.layers.enableAll(),A.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new qi(new Tl(2,2),new ui({name:"BackgroundMaterial",uniforms:$s(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Ea,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Ct.getTransfer(P.colorSpace)!==kt,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(x!==P||v!==P.version||y!==i.toneMapping)&&(p.material.needsUpdate=!0,x=P,v=P.version,y=i.toneMapping),p.layers.enableAll(),A.unshift(p,p.geometry,p.material,0,0,null))}function _(A,L){A.getRGB(tu,z_(i)),r.buffers.color.setClear(tu.r,tu.g,tu.b,L,u)}function w(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(A,L=1){f.set(A),d=L,_(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(A){d=A,_(f,d)},render:M,addToRenderList:S,dispose:w}}function B2(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,u=!1;function f(C,H,j,ne,ee){let K=!1;const I=x(ne,j,H);l!==I&&(l=I,p(l.object)),K=y(C,ne,j,ee),K&&b(C,ne,j,ee),ee!==null&&e.update(ee,i.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,L(C,H,j,ne),ee!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function d(){return i.createVertexArray()}function p(C){return i.bindVertexArray(C)}function g(C){return i.deleteVertexArray(C)}function x(C,H,j){const ne=j.wireframe===!0;let ee=r[C.id];ee===void 0&&(ee={},r[C.id]=ee);let K=ee[H.id];K===void 0&&(K={},ee[H.id]=K);let I=K[ne];return I===void 0&&(I=v(d()),K[ne]=I),I}function v(C){const H=[],j=[],ne=[];for(let ee=0;ee<t;ee++)H[ee]=0,j[ee]=0,ne[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:ne,object:C,attributes:{},index:null}}function y(C,H,j,ne){const ee=l.attributes,K=H.attributes;let I=0;const W=j.getAttributes();for(const Y in W)if(W[Y].location>=0){const O=ee[Y];let re=K[Y];if(re===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(re=C.instanceColor)),O===void 0||O.attribute!==re||re&&O.data!==re.data)return!0;I++}return l.attributesNum!==I||l.index!==ne}function b(C,H,j,ne){const ee={},K=H.attributes;let I=0;const W=j.getAttributes();for(const Y in W)if(W[Y].location>=0){let O=K[Y];O===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(O=C.instanceColor));const re={};re.attribute=O,O&&O.data&&(re.data=O.data),ee[Y]=re,I++}l.attributes=ee,l.attributesNum=I,l.index=ne}function M(){const C=l.newAttributes;for(let H=0,j=C.length;H<j;H++)C[H]=0}function S(C){_(C,0)}function _(C,H){const j=l.newAttributes,ne=l.enabledAttributes,ee=l.attributeDivisors;j[C]=1,ne[C]===0&&(i.enableVertexAttribArray(C),ne[C]=1),ee[C]!==H&&(i.vertexAttribDivisor(C,H),ee[C]=H)}function w(){const C=l.newAttributes,H=l.enabledAttributes;for(let j=0,ne=H.length;j<ne;j++)H[j]!==C[j]&&(i.disableVertexAttribArray(j),H[j]=0)}function A(C,H,j,ne,ee,K,I){I===!0?i.vertexAttribIPointer(C,H,j,ee,K):i.vertexAttribPointer(C,H,j,ne,ee,K)}function L(C,H,j,ne){M();const ee=ne.attributes,K=j.getAttributes(),I=H.defaultAttributeValues;for(const W in K){const Y=K[W];if(Y.location>=0){let pe=ee[W];if(pe===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(pe=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(pe=C.instanceColor)),pe!==void 0){const O=pe.normalized,re=pe.itemSize,Se=e.get(pe);if(Se===void 0)continue;const Me=Se.buffer,De=Se.type,We=Se.bytesPerElement,ae=De===i.INT||De===i.UNSIGNED_INT||pe.gpuType===Cp;if(pe.isInterleavedBufferAttribute){const ge=pe.data,be=ge.stride,qe=pe.offset;if(ge.isInstancedInterleavedBuffer){for(let Xe=0;Xe<Y.locationSize;Xe++)_(Y.location+Xe,ge.meshPerAttribute);C.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Xe=0;Xe<Y.locationSize;Xe++)S(Y.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let Xe=0;Xe<Y.locationSize;Xe++)A(Y.location+Xe,re/Y.locationSize,De,O,be*We,(qe+re/Y.locationSize*Xe)*We,ae)}else{if(pe.isInstancedBufferAttribute){for(let ge=0;ge<Y.locationSize;ge++)_(Y.location+ge,pe.meshPerAttribute);C.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ge=0;ge<Y.locationSize;ge++)S(Y.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let ge=0;ge<Y.locationSize;ge++)A(Y.location+ge,re/Y.locationSize,De,O,re*We,re/Y.locationSize*ge*We,ae)}}else if(I!==void 0){const O=I[W];if(O!==void 0)switch(O.length){case 2:i.vertexAttrib2fv(Y.location,O);break;case 3:i.vertexAttrib3fv(Y.location,O);break;case 4:i.vertexAttrib4fv(Y.location,O);break;default:i.vertexAttrib1fv(Y.location,O)}}}}w()}function P(){q();for(const C in r){const H=r[C];for(const j in H){const ne=H[j];for(const ee in ne)g(ne[ee].object),delete ne[ee];delete H[j]}delete r[C]}}function N(C){if(r[C.id]===void 0)return;const H=r[C.id];for(const j in H){const ne=H[j];for(const ee in ne)g(ne[ee].object),delete ne[ee];delete H[j]}delete r[C.id]}function F(C){for(const H in r){const j=r[H];if(j[C.id]===void 0)continue;const ne=j[C.id];for(const ee in ne)g(ne[ee].object),delete ne[ee];delete j[C.id]}}function q(){D(),u=!0,l!==o&&(l=o,p(l.object))}function D(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:q,resetDefaultState:D,dispose:P,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:M,enableAttribute:S,disableUnusedAttributes:w}}function I2(i,e,t){let r;function o(p){r=p}function l(p,g){i.drawArrays(r,p,g),t.update(g,r,1)}function u(p,g,x){x!==0&&(i.drawArraysInstanced(r,p,g,x),t.update(g,r,x))}function f(p,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,x);let y=0;for(let b=0;b<x;b++)y+=g[b];t.update(y,r,1)}function d(p,g,x,v){if(x===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)u(p[b],g[b],v[b]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,v,0,x);let b=0;for(let M=0;M<x;M++)b+=g[M]*v[M];t.update(b,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function F2(i,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==Ui&&r.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const q=F===eo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ci&&r.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ya&&!q)}function d(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=d(p);g!==p&&(ft("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),L=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=b>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:b,maxTextureSize:M,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:L,vertexTextures:P,maxSamples:N}}function z2(i){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Gr,f=new dt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const y=x.length!==0||v||r!==0||o;return o=v,r=x.length,y},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,v){t=g(x,v,0)},this.setState=function(x,v,y){const b=x.clippingPlanes,M=x.clipIntersection,S=x.clipShadows,_=i.get(x);if(!o||b===null||b.length===0||l&&!S)l?g(null):p();else{const w=l?0:r,A=w*4;let L=_.clippingState||null;d.value=L,L=g(b,v,A,y);for(let P=0;P!==A;++P)L[P]=t[P];_.clippingState=L,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(x,v,y,b){const M=x!==null?x.length:0;let S=null;if(M!==0){if(S=d.value,b!==!0||S===null){const _=y+M*4,w=v.matrixWorldInverse;f.getNormalMatrix(w),(S===null||S.length<_)&&(S=new Float32Array(_));for(let A=0,L=y;A!==M;++A,L+=4)u.copy(x[A]).applyMatrix4(w,f),u.normal.toArray(S,L),S[L+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}function H2(i){let e=new WeakMap;function t(u,f){return f===zd?u.mapping=Ys:f===Hd&&(u.mapping=Zs),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===zd||f===Hd)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const p=new kE(d.height);return p.fromEquirectangularTexture(i,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const or=4,tv=[.125,.215,.35,.446,.526,.582],kr=20,G2=256,ol=new zp,nv=new Pt;let dd=null,pd=0,md=0,gd=!1;const V2=new he;class iv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=V2}=l;dd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dd,pd,md),this._renderer.xr.enabled=gd,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:eo,format:Ui,colorSpace:hr,depthBuffer:!1},o=av(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=av(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=k2(l)),this._blurMaterial=W2(l,e,t)}return o}_compileMaterial(e){const t=new qi(new Aa,e);this._renderer.compile(t,ol)}_sceneToCubeUV(e,t,r,o,l){const d=new yi(90,1,t,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,y=x.toneMapping;x.getClearColor(nv),x.toneMapping=cr,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qi(new El,new B_({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,S=M.material;let _=!1;const w=e.background;w?w.isColor&&(S.color.copy(w),e.background=null,_=!0):(S.color.copy(nv),_=!0);for(let A=0;A<6;A++){const L=A%3;L===0?(d.up.set(0,p[A],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+g[A],l.y,l.z)):L===1?(d.up.set(0,0,p[A]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+g[A],l.z)):(d.up.set(0,p[A],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+g[A]));const P=this._cubeSize;Vs(o,L*P,A>2?P:0,P,P),x.setRenderTarget(o),_&&x.render(M,d),x.render(e,d)}x.toneMapping=y,x.autoClear=v,e.background=w}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ys||e.mapping===Zs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rv());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;Vs(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,ol)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget;if(this._ggxMaterial===null){const w=3*Math.max(this._cubeSize,16),A=4*this._cubeSize;this._ggxMaterial=X2(this._lodMax,w,A)}const u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const d=u.uniforms,p=r/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),x=Math.sqrt(p*p-g*g),v=.05+p*.95,y=x*v,{_lodMax:b}=this,M=this._sizeLods[r],S=3*M*(r>b-or?r-b+or:0),_=4*(this._cubeSize-M);d.envMap.value=e.texture,d.roughness.value=y,d.mipInt.value=b-t,Vs(l,S,_,3*M,2*M),o.setRenderTarget(l),o.render(f,ol),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=b-r,Vs(e,S,_,3*M,2*M),o.setRenderTarget(e),o.render(f,ol)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&cn("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[o];x.material=p;const v=p.uniforms,y=this._sizeLods[r]-1,b=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*kr-1),M=l/b,S=isFinite(l)?1+Math.floor(g*M):kr;S>kr&&ft(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${kr}`);const _=[];let w=0;for(let F=0;F<kr;++F){const q=F/M,D=Math.exp(-q*q/2);_.push(D),F===0?w+=D:F<S&&(w+=2*D)}for(let F=0;F<_.length;F++)_[F]=_[F]/w;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=_,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:A}=this;v.dTheta.value=b,v.mipInt.value=A-r;const L=this._sizeLods[o],P=3*L*(o>A-or?o-A+or:0),N=4*(this._cubeSize-L);Vs(t,P,N,3*L,2*L),d.setRenderTarget(t),d.render(x,ol)}}function k2(i){const e=[],t=[],r=[];let o=i;const l=i-or+1+tv.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let d=1/f;u>i-or?d=tv[u-i+or-1]:u===0&&(d=0),t.push(d);const p=1/(f-2),g=-p,x=1+p,v=[g,g,x,g,x,x,g,g,x,x,g,x],y=6,b=6,M=3,S=2,_=1,w=new Float32Array(M*b*y),A=new Float32Array(S*b*y),L=new Float32Array(_*b*y);for(let N=0;N<y;N++){const F=N%3*2/3-1,q=N>2?0:-1,D=[F,q,0,F+2/3,q,0,F+2/3,q+1,0,F,q,0,F+2/3,q+1,0,F,q+1,0];w.set(D,M*b*N),A.set(v,S*b*N);const C=[N,N,N,N,N,N];L.set(C,_*b*N)}const P=new Aa;P.setAttribute("position",new Si(w,M)),P.setAttribute("uv",new Si(A,S)),P.setAttribute("faceIndex",new Si(L,_)),r.push(new qi(P,null)),o>or&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function av(i,e,t){const r=new Oi(i,e,t);return r.texture.mapping=Ru,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Vs(i,e,t,r,o){i.viewport.set(e,t,r,o),i.scissor.set(e,t,r,o)}function X2(i,e,t){return new ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:G2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wu(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function W2(i,e,t){const r=new Float32Array(kr),o=new he(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:wu(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function rv(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wu(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function sv(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function wu(){return`

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
	`}function q2(i){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const d=f.mapping,p=d===zd||d===Hd,g=d===Ys||d===Zs;if(p||g){let x=e.get(f);const v=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return t===null&&(t=new iv(i)),x=p?t.fromEquirectangular(f,x):t.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const y=f.image;return p&&y&&y.height>0||g&&y&&o(y)?(t===null&&(t=new iv(i)),x=p?t.fromEquirectangular(f):t.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",l),x.texture):null}}}return f}function o(f){let d=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function j2(i){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=i.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&gl("WebGLRenderer: "+r+" extension not supported."),o}}}function Y2(i,e,t,r){const o={},l=new WeakMap;function u(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",u),delete o[v.id];const y=l.get(v);y&&(e.remove(y),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(x,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function d(x){const v=x.attributes;for(const y in v)e.update(v[y],i.ARRAY_BUFFER)}function p(x){const v=[],y=x.index,b=x.attributes.position;let M=0;if(y!==null){const w=y.array;M=y.version;for(let A=0,L=w.length;A<L;A+=3){const P=w[A+0],N=w[A+1],F=w[A+2];v.push(P,N,N,F,F,P)}}else if(b!==void 0){const w=b.array;M=b.version;for(let A=0,L=w.length/3-1;A<L;A+=3){const P=A+0,N=A+1,F=A+2;v.push(P,N,N,F,F,P)}}else return;const S=new(U_(v)?F_:I_)(v,1);S.version=M;const _=l.get(x);_&&e.remove(_),l.set(x,S)}function g(x){const v=l.get(x);if(v){const y=x.index;y!==null&&v.version<y.version&&p(x)}else p(x);return l.get(x)}return{get:f,update:d,getWireframeAttribute:g}}function Z2(i,e,t){let r;function o(v){r=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function d(v,y){i.drawElements(r,y,l,v*u),t.update(y,r,1)}function p(v,y,b){b!==0&&(i.drawElementsInstanced(r,y,l,v*u,b),t.update(y,r,b))}function g(v,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,v,0,b);let S=0;for(let _=0;_<b;_++)S+=y[_];t.update(S,r,1)}function x(v,y,b,M){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<v.length;_++)p(v[_]/u,y[_],M[_]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,l,v,0,M,0,b);let _=0;for(let w=0;w<b;w++)_+=y[w]*M[w];t.update(_,r,1)}}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function K2(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=f*(l/3);break;case i.LINES:t.lines+=f*(l/2);break;case i.LINE_STRIP:t.lines+=f*(l-1);break;case i.LINE_LOOP:t.lines+=f*l;break;case i.POINTS:t.points+=f*l;break;default:cn("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function Q2(i,e,t){const r=new WeakMap,o=new un;function l(u,f,d){const p=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=g!==void 0?g.length:0;let v=r.get(f);if(v===void 0||v.count!==x){let C=function(){q.dispose(),r.delete(f),f.removeEventListener("dispose",C)};var y=C;v!==void 0&&v.texture.dispose();const b=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],w=f.morphAttributes.normal||[],A=f.morphAttributes.color||[];let L=0;b===!0&&(L=1),M===!0&&(L=2),S===!0&&(L=3);let P=f.attributes.position.count*L,N=1;P>e.maxTextureSize&&(N=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const F=new Float32Array(P*N*4*x),q=new N_(F,P,N,x);q.type=ya,q.needsUpdate=!0;const D=L*4;for(let H=0;H<x;H++){const j=_[H],ne=w[H],ee=A[H],K=P*N*4*H;for(let I=0;I<j.count;I++){const W=I*D;b===!0&&(o.fromBufferAttribute(j,I),F[K+W+0]=o.x,F[K+W+1]=o.y,F[K+W+2]=o.z,F[K+W+3]=0),M===!0&&(o.fromBufferAttribute(ne,I),F[K+W+4]=o.x,F[K+W+5]=o.y,F[K+W+6]=o.z,F[K+W+7]=0),S===!0&&(o.fromBufferAttribute(ee,I),F[K+W+8]=o.x,F[K+W+9]=o.y,F[K+W+10]=o.z,F[K+W+11]=ee.itemSize===4?o.w:1)}}v={count:x,texture:q,size:new _t(P,N)},r.set(f,v),f.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let b=0;for(let S=0;S<p.length;S++)b+=p[S];const M=f.morphTargetsRelative?1:1-b;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",p)}d.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:l}}function $2(i,e,t,r){let o=new WeakMap;function l(d){const p=r.render.frame,g=d.geometry,x=e.get(d,g);if(o.get(x)!==p&&(e.update(x),o.set(x,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),o.get(d)!==p&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),o.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;o.get(v)!==p&&(v.update(),o.set(v,p))}return x}function u(){o=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}const W_=new Kn,ov=new Fp(1,1),q_=new N_,j_=new TE,Y_=new G_,lv=[],cv=[],uv=new Float32Array(16),fv=new Float32Array(9),hv=new Float32Array(4);function no(i,e,t){const r=i[0];if(r<=0||r>0)return i;const o=e*t;let l=lv[o];if(l===void 0&&(l=new Float32Array(o),lv[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,i[u].toArray(l,f)}return l}function Sn(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function bn(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Cu(i,e){let t=cv[e];t===void 0&&(t=new Int32Array(e),cv[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function J2(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function eA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;i.uniform2fv(this.addr,e),bn(t,e)}}function tA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;i.uniform3fv(this.addr,e),bn(t,e)}}function nA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;i.uniform4fv(this.addr,e),bn(t,e)}}function iA(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bn(t,e)}else{if(Sn(t,r))return;hv.set(r),i.uniformMatrix2fv(this.addr,!1,hv),bn(t,r)}}function aA(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bn(t,e)}else{if(Sn(t,r))return;fv.set(r),i.uniformMatrix3fv(this.addr,!1,fv),bn(t,r)}}function rA(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bn(t,e)}else{if(Sn(t,r))return;uv.set(r),i.uniformMatrix4fv(this.addr,!1,uv),bn(t,r)}}function sA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function oA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;i.uniform2iv(this.addr,e),bn(t,e)}}function lA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;i.uniform3iv(this.addr,e),bn(t,e)}}function cA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;i.uniform4iv(this.addr,e),bn(t,e)}}function uA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function fA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;i.uniform2uiv(this.addr,e),bn(t,e)}}function hA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;i.uniform3uiv(this.addr,e),bn(t,e)}}function dA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;i.uniform4uiv(this.addr,e),bn(t,e)}}function pA(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o);let l;this.type===i.SAMPLER_2D_SHADOW?(ov.compareFunction=D_,l=ov):l=W_,t.setTexture2D(e||l,o)}function mA(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||j_,o)}function gA(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Y_,o)}function xA(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||q_,o)}function vA(i){switch(i){case 5126:return J2;case 35664:return eA;case 35665:return tA;case 35666:return nA;case 35674:return iA;case 35675:return aA;case 35676:return rA;case 5124:case 35670:return sA;case 35667:case 35671:return oA;case 35668:case 35672:return lA;case 35669:case 35673:return cA;case 5125:return uA;case 36294:return fA;case 36295:return hA;case 36296:return dA;case 35678:case 36198:case 36298:case 36306:case 35682:return pA;case 35679:case 36299:case 36307:return mA;case 35680:case 36300:case 36308:case 36293:return gA;case 36289:case 36303:case 36311:case 36292:return xA}}function _A(i,e){i.uniform1fv(this.addr,e)}function yA(i,e){const t=no(e,this.size,2);i.uniform2fv(this.addr,t)}function SA(i,e){const t=no(e,this.size,3);i.uniform3fv(this.addr,t)}function bA(i,e){const t=no(e,this.size,4);i.uniform4fv(this.addr,t)}function MA(i,e){const t=no(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function EA(i,e){const t=no(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function TA(i,e){const t=no(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function AA(i,e){i.uniform1iv(this.addr,e)}function RA(i,e){i.uniform2iv(this.addr,e)}function wA(i,e){i.uniform3iv(this.addr,e)}function CA(i,e){i.uniform4iv(this.addr,e)}function DA(i,e){i.uniform1uiv(this.addr,e)}function UA(i,e){i.uniform2uiv(this.addr,e)}function NA(i,e){i.uniform3uiv(this.addr,e)}function LA(i,e){i.uniform4uiv(this.addr,e)}function OA(i,e,t){const r=this.cache,o=e.length,l=Cu(t,o);Sn(r,l)||(i.uniform1iv(this.addr,l),bn(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||W_,l[u])}function PA(i,e,t){const r=this.cache,o=e.length,l=Cu(t,o);Sn(r,l)||(i.uniform1iv(this.addr,l),bn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||j_,l[u])}function BA(i,e,t){const r=this.cache,o=e.length,l=Cu(t,o);Sn(r,l)||(i.uniform1iv(this.addr,l),bn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Y_,l[u])}function IA(i,e,t){const r=this.cache,o=e.length,l=Cu(t,o);Sn(r,l)||(i.uniform1iv(this.addr,l),bn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||q_,l[u])}function FA(i){switch(i){case 5126:return _A;case 35664:return yA;case 35665:return SA;case 35666:return bA;case 35674:return MA;case 35675:return EA;case 35676:return TA;case 5124:case 35670:return AA;case 35667:case 35671:return RA;case 35668:case 35672:return wA;case 35669:case 35673:return CA;case 5125:return DA;case 36294:return UA;case 36295:return NA;case 36296:return LA;case 35678:case 36198:case 36298:case 36306:case 35682:return OA;case 35679:case 36299:case 36307:return PA;case 35680:case 36300:case 36308:case 36293:return BA;case 36289:case 36303:case 36311:case 36292:return IA}}class zA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=vA(t.type)}}class HA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FA(t.type)}}class GA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const xd=/(\w+)(\])?(\[|\.)?/g;function dv(i,e){i.seq.push(e),i.map[e.id]=e}function VA(i,e,t){const r=i.name,o=r.length;for(xd.lastIndex=0;;){const l=xd.exec(r),u=xd.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&u+2===o){dv(t,p===void 0?new zA(f,i,e):new HA(f,i,e));break}else{let x=t.map[f];x===void 0&&(x=new GA(f),dv(t,x)),t=x}}}class du{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);VA(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function pv(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const kA=37297;let XA=0;function WA(i,e){const t=i.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const mv=new dt;function qA(i){Ct._getMatrix(mv,Ct.workingColorSpace,i);const e=`mat3( ${mv.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(i)){case yu:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gv(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),l=(i.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+WA(i.getShaderSource(e),f)}else return l}function jA(i,e){const t=qA(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function YA(i,e){let t;switch(e){case JM:t="Linear";break;case eE:t="Reinhard";break;case tE:t="Cineon";break;case nE:t="ACESFilmic";break;case aE:t="AgX";break;case rE:t="Neutral";break;case iE:t="Custom";break;default:ft("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nu=new he;function ZA(){Ct.getLuminanceCoefficients(nu);const i=nu.x.toFixed(4),e=nu.y.toFixed(4),t=nu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fl).join(`
`)}function QA(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function $A(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=i.getActiveAttrib(e,o),u=l.name;let f=1;l.type===i.FLOAT_MAT2&&(f=2),l.type===i.FLOAT_MAT3&&(f=3),l.type===i.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:i.getAttribLocation(e,u),locationSize:f}}return t}function fl(i){return i!==""}function xv(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vv(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JA=/^[ \t]*#include +<([\w\d./]+)>/gm;function yp(i){return i.replace(JA,tR)}const eR=new Map;function tR(i,e){let t=pt[e];if(t===void 0){const r=eR.get(e);if(r!==void 0)t=pt[r],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return yp(t)}const nR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _v(i){return i.replace(nR,iR)}function iR(i,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function yv(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function aR(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===y_?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===NM?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===va&&(e="SHADOWMAP_TYPE_VSM"),e}function rR(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ys:case Zs:e="ENVMAP_TYPE_CUBE";break;case Ru:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sR(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function oR(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case S_:e="ENVMAP_BLENDING_MULTIPLY";break;case QM:e="ENVMAP_BLENDING_MIX";break;case $M:e="ENVMAP_BLENDING_ADD";break}return e}function lR(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function cR(i,e,t,r){const o=i.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const d=aR(t),p=rR(t),g=sR(t),x=oR(t),v=lR(t),y=KA(t),b=QA(l),M=o.createProgram();let S,_,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(fl).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(fl).join(`
`),_.length>0&&(_+=`
`)):(S=[yv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fl).join(`
`),_=[yv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cr?"#define TONE_MAPPING":"",t.toneMapping!==cr?pt.tonemapping_pars_fragment:"",t.toneMapping!==cr?YA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,jA("linearToOutputTexel",t.outputColorSpace),ZA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fl).join(`
`)),u=yp(u),u=xv(u,t),u=vv(u,t),f=yp(f),f=xv(f,t),f=vv(f,t),u=_v(u),f=_v(f),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const A=w+S+u,L=w+_+f,P=pv(o,o.VERTEX_SHADER,A),N=pv(o,o.FRAGMENT_SHADER,L);o.attachShader(M,P),o.attachShader(M,N),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function F(H){if(i.debug.checkShaderErrors){const j=o.getProgramInfoLog(M)||"",ne=o.getShaderInfoLog(P)||"",ee=o.getShaderInfoLog(N)||"",K=j.trim(),I=ne.trim(),W=ee.trim();let Y=!0,pe=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,M,P,N);else{const O=gv(o,P,"vertex"),re=gv(o,N,"fragment");cn("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+K+`
`+O+`
`+re)}else K!==""?ft("WebGLProgram: Program Info Log:",K):(I===""||W==="")&&(pe=!1);pe&&(H.diagnostics={runnable:Y,programLog:K,vertexShader:{log:I,prefix:S},fragmentShader:{log:W,prefix:_}})}o.deleteShader(P),o.deleteShader(N),q=new du(o,M),D=$A(o,M)}let q;this.getUniforms=function(){return q===void 0&&F(this),q};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(M,kA)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=XA++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=P,this.fragmentShader=N,this}let uR=0;class fR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new hR(e),t.set(e,r)),r}}class hR{constructor(e){this.id=uR++,this.code=e,this.usedTimes=0}}function dR(i,e,t,r,o,l,u){const f=new O_,d=new fR,p=new Set,g=[],x=o.logarithmicDepthBuffer,v=o.vertexTextures;let y=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(D){return p.add(D),D===0?"uv":`uv${D}`}function S(D,C,H,j,ne){const ee=j.fog,K=ne.geometry,I=D.isMeshStandardMaterial?j.environment:null,W=(D.isMeshStandardMaterial?t:e).get(D.envMap||I),Y=W&&W.mapping===Ru?W.image.height:null,pe=b[D.type];D.precision!==null&&(y=o.getMaxPrecision(D.precision),y!==D.precision&&ft("WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const O=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,re=O!==void 0?O.length:0;let Se=0;K.morphAttributes.position!==void 0&&(Se=1),K.morphAttributes.normal!==void 0&&(Se=2),K.morphAttributes.color!==void 0&&(Se=3);let Me,De,We,ae;if(pe){const Ut=ki[pe];Me=Ut.vertexShader,De=Ut.fragmentShader}else Me=D.vertexShader,De=D.fragmentShader,d.update(D),We=d.getVertexShaderID(D),ae=d.getFragmentShaderID(D);const ge=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),qe=ne.isInstancedMesh===!0,Xe=ne.isBatchedMesh===!0,ct=!!D.map,Qt=!!D.matcap,ut=!!W,Rt=!!D.aoMap,V=!!D.lightMap,He=!!D.bumpMap,Fe=!!D.normalMap,gt=!!D.displacementMap,Pe=!!D.emissiveMap,Ot=!!D.metalnessMap,je=!!D.roughnessMap,lt=D.anisotropy>0,B=D.clearcoat>0,T=D.dispersion>0,ie=D.iridescence>0,me=D.sheen>0,ve=D.transmission>0,fe=lt&&!!D.anisotropyMap,Ie=B&&!!D.clearcoatMap,Le=B&&!!D.clearcoatNormalMap,tt=B&&!!D.clearcoatRoughnessMap,Ye=ie&&!!D.iridescenceMap,Ee=ie&&!!D.iridescenceThicknessMap,Re=me&&!!D.sheenColorMap,Qe=me&&!!D.sheenRoughnessMap,et=!!D.specularMap,Be=!!D.specularColorMap,rt=!!D.specularIntensityMap,k=ve&&!!D.transmissionMap,Ne=ve&&!!D.thicknessMap,Ce=!!D.gradientMap,we=!!D.alphaMap,Te=D.alphaTest>0,ye=!!D.alphaHash,Ve=!!D.extensions;let st=cr;D.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(st=i.toneMapping);const Bt={shaderID:pe,shaderType:D.type,shaderName:D.name,vertexShader:Me,fragmentShader:De,defines:D.defines,customVertexShaderID:We,customFragmentShaderID:ae,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:Xe,batchingColor:Xe&&ne._colorsTexture!==null,instancing:qe,instancingColor:qe&&ne.instanceColor!==null,instancingMorph:qe&&ne.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:hr,alphaToCoverage:!!D.alphaToCoverage,map:ct,matcap:Qt,envMap:ut,envMapMode:ut&&W.mapping,envMapCubeUVHeight:Y,aoMap:Rt,lightMap:V,bumpMap:He,normalMap:Fe,displacementMap:v&&gt,emissiveMap:Pe,normalMapObjectSpace:Fe&&D.normalMapType===cE,normalMapTangentSpace:Fe&&D.normalMapType===lE,metalnessMap:Ot,roughnessMap:je,anisotropy:lt,anisotropyMap:fe,clearcoat:B,clearcoatMap:Ie,clearcoatNormalMap:Le,clearcoatRoughnessMap:tt,dispersion:T,iridescence:ie,iridescenceMap:Ye,iridescenceThicknessMap:Ee,sheen:me,sheenColorMap:Re,sheenRoughnessMap:Qe,specularMap:et,specularColorMap:Be,specularIntensityMap:rt,transmission:ve,transmissionMap:k,thicknessMap:Ne,gradientMap:Ce,opaque:D.transparent===!1&&D.blending===Ws&&D.alphaToCoverage===!1,alphaMap:we,alphaTest:Te,alphaHash:ye,combine:D.combine,mapUv:ct&&M(D.map.channel),aoMapUv:Rt&&M(D.aoMap.channel),lightMapUv:V&&M(D.lightMap.channel),bumpMapUv:He&&M(D.bumpMap.channel),normalMapUv:Fe&&M(D.normalMap.channel),displacementMapUv:gt&&M(D.displacementMap.channel),emissiveMapUv:Pe&&M(D.emissiveMap.channel),metalnessMapUv:Ot&&M(D.metalnessMap.channel),roughnessMapUv:je&&M(D.roughnessMap.channel),anisotropyMapUv:fe&&M(D.anisotropyMap.channel),clearcoatMapUv:Ie&&M(D.clearcoatMap.channel),clearcoatNormalMapUv:Le&&M(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&M(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&M(D.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&M(D.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&M(D.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&M(D.sheenRoughnessMap.channel),specularMapUv:et&&M(D.specularMap.channel),specularColorMapUv:Be&&M(D.specularColorMap.channel),specularIntensityMapUv:rt&&M(D.specularIntensityMap.channel),transmissionMapUv:k&&M(D.transmissionMap.channel),thicknessMapUv:Ne&&M(D.thicknessMap.channel),alphaMapUv:we&&M(D.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Fe||lt),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!K.attributes.uv&&(ct||we),fog:!!ee,useFog:D.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:be,skinning:ne.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Se,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:D.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:ct&&D.map.isVideoTexture===!0&&Ct.getTransfer(D.map.colorSpace)===kt,decodeVideoTextureEmissive:Pe&&D.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(D.emissiveMap.colorSpace)===kt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===si,flipSided:D.side===Cn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ve&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&D.extensions.multiDraw===!0||Xe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Bt.vertexUv1s=p.has(1),Bt.vertexUv2s=p.has(2),Bt.vertexUv3s=p.has(3),p.clear(),Bt}function _(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)C.push(H),C.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(w(C,D),A(C,D),C.push(i.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function w(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function A(D,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),C.gradientMap&&f.enable(22),D.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reversedDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),D.push(f.mask)}function L(D){const C=b[D.type];let H;if(C){const j=ki[C];H=zE.clone(j.uniforms)}else H=D.uniforms;return H}function P(D,C){let H;for(let j=0,ne=g.length;j<ne;j++){const ee=g[j];if(ee.cacheKey===C){H=ee,++H.usedTimes;break}}return H===void 0&&(H=new cR(i,C,D,l),g.push(H)),H}function N(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function F(D){d.remove(D)}function q(){d.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:L,acquireProgram:P,releaseProgram:N,releaseShaderCache:F,programs:g,dispose:q}}function pR(){let i=new WeakMap;function e(u){return i.has(u)}function t(u){let f=i.get(u);return f===void 0&&(f={},i.set(u,f)),f}function r(u){i.delete(u)}function o(u,f,d){i.get(u)[f]=d}function l(){i=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function mR(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Sv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bv(){const i=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(x,v,y,b,M,S){let _=i[e];return _===void 0?(_={id:x.id,object:x,geometry:v,material:y,groupOrder:b,renderOrder:x.renderOrder,z:M,group:S},i[e]=_):(_.id=x.id,_.object=x,_.geometry=v,_.material=y,_.groupOrder=b,_.renderOrder=x.renderOrder,_.z=M,_.group=S),e++,_}function f(x,v,y,b,M,S){const _=u(x,v,y,b,M,S);y.transmission>0?r.push(_):y.transparent===!0?o.push(_):t.push(_)}function d(x,v,y,b,M,S){const _=u(x,v,y,b,M,S);y.transmission>0?r.unshift(_):y.transparent===!0?o.unshift(_):t.unshift(_)}function p(x,v){t.length>1&&t.sort(x||mR),r.length>1&&r.sort(v||Sv),o.length>1&&o.sort(v||Sv)}function g(){for(let x=e,v=i.length;x<v;x++){const y=i[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:d,finish:g,sort:p}}function gR(){let i=new WeakMap;function e(r,o){const l=i.get(r);let u;return l===void 0?(u=new bv,i.set(r,[u])):o>=l.length?(u=new bv,l.push(u)):u=l[o],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function xR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new he,color:new Pt};break;case"SpotLight":t={position:new he,direction:new he,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new he,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new he,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":t={color:new Pt,position:new he,halfWidth:new he,halfHeight:new he};break}return i[e.id]=t,t}}}function vR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _R=0;function yR(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function SR(i){const e=new xR,t=vR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new he);const o=new he,l=new yn,u=new yn;function f(p){let g=0,x=0,v=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let y=0,b=0,M=0,S=0,_=0,w=0,A=0,L=0,P=0,N=0,F=0;p.sort(yR);for(let D=0,C=p.length;D<C;D++){const H=p[D],j=H.color,ne=H.intensity,ee=H.distance,K=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=j.r*ne,x+=j.g*ne,v+=j.b*ne;else if(H.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(H.sh.coefficients[I],ne);F++}else if(H.isDirectionalLight){const I=e.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const W=H.shadow,Y=t.get(H);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=K,r.directionalShadowMatrix[y]=H.shadow.matrix,w++}r.directional[y]=I,y++}else if(H.isSpotLight){const I=e.get(H);I.position.setFromMatrixPosition(H.matrixWorld),I.color.copy(j).multiplyScalar(ne),I.distance=ee,I.coneCos=Math.cos(H.angle),I.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),I.decay=H.decay,r.spot[M]=I;const W=H.shadow;if(H.map&&(r.spotLightMap[P]=H.map,P++,W.updateMatrices(H),H.castShadow&&N++),r.spotLightMatrix[M]=W.matrix,H.castShadow){const Y=t.get(H);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,r.spotShadow[M]=Y,r.spotShadowMap[M]=K,L++}M++}else if(H.isRectAreaLight){const I=e.get(H);I.color.copy(j).multiplyScalar(ne),I.halfWidth.set(H.width*.5,0,0),I.halfHeight.set(0,H.height*.5,0),r.rectArea[S]=I,S++}else if(H.isPointLight){const I=e.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),I.distance=H.distance,I.decay=H.decay,H.castShadow){const W=H.shadow,Y=t.get(H);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,Y.shadowCameraNear=W.camera.near,Y.shadowCameraFar=W.camera.far,r.pointShadow[b]=Y,r.pointShadowMap[b]=K,r.pointShadowMatrix[b]=H.shadow.matrix,A++}r.point[b]=I,b++}else if(H.isHemisphereLight){const I=e.get(H);I.skyColor.copy(H.color).multiplyScalar(ne),I.groundColor.copy(H.groundColor).multiplyScalar(ne),r.hemi[_]=I,_++}}S>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=v;const q=r.hash;(q.directionalLength!==y||q.pointLength!==b||q.spotLength!==M||q.rectAreaLength!==S||q.hemiLength!==_||q.numDirectionalShadows!==w||q.numPointShadows!==A||q.numSpotShadows!==L||q.numSpotMaps!==P||q.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=M,r.rectArea.length=S,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=L+P-N,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=F,q.directionalLength=y,q.pointLength=b,q.spotLength=M,q.rectAreaLength=S,q.hemiLength=_,q.numDirectionalShadows=w,q.numPointShadows=A,q.numSpotShadows=L,q.numSpotMaps=P,q.numLightProbes=F,r.version=_R++)}function d(p,g){let x=0,v=0,y=0,b=0,M=0;const S=g.matrixWorldInverse;for(let _=0,w=p.length;_<w;_++){const A=p[_];if(A.isDirectionalLight){const L=r.directional[x];L.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(S),x++}else if(A.isSpotLight){const L=r.spot[y];L.position.setFromMatrixPosition(A.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(S),y++}else if(A.isRectAreaLight){const L=r.rectArea[b];L.position.setFromMatrixPosition(A.matrixWorld),L.position.applyMatrix4(S),u.identity(),l.copy(A.matrixWorld),l.premultiply(S),u.extractRotation(l),L.halfWidth.set(A.width*.5,0,0),L.halfHeight.set(0,A.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),b++}else if(A.isPointLight){const L=r.point[v];L.position.setFromMatrixPosition(A.matrixWorld),L.position.applyMatrix4(S),v++}else if(A.isHemisphereLight){const L=r.hemi[M];L.direction.setFromMatrixPosition(A.matrixWorld),L.direction.transformDirection(S),M++}}}return{setup:f,setupView:d,state:r}}function Mv(i){const e=new SR(i),t=[],r=[];function o(g){p.camera=g,t.length=0,r.length=0}function l(g){t.push(g)}function u(g){r.push(g)}function f(){e.setup(t)}function d(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:u}}function bR(i){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new Mv(i),e.set(o,[f])):l>=u.length?(f=new Mv(i),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const MR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ER=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function TR(i,e,t){let r=new V_;const o=new _t,l=new _t,u=new un,f=new ZE({depthPacking:oE}),d=new KE,p={},g=t.maxTextureSize,x={[Ea]:Cn,[Cn]:Ea,[si]:si},v=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:MR,fragmentShader:ER}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const b=new Aa;b.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new qi(b,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=y_;let _=this.type;this.render=function(N,F,q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;const D=i.getRenderTarget(),C=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),j=i.state;j.setBlending(Ni),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ne=_!==va&&this.type===va,ee=_===va&&this.type!==va;for(let K=0,I=N.length;K<I;K++){const W=N[K],Y=W.shadow;if(Y===void 0){ft("WebGLShadowMap:",W,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;o.copy(Y.mapSize);const pe=Y.getFrameExtents();if(o.multiply(pe),l.copy(Y.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/pe.x),o.x=l.x*pe.x,Y.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/pe.y),o.y=l.y*pe.y,Y.mapSize.y=l.y)),Y.map===null||ne===!0||ee===!0){const re=this.type!==va?{minFilter:oi,magFilter:oi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Oi(o.x,o.y,re),Y.map.texture.name=W.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const O=Y.getViewportCount();for(let re=0;re<O;re++){const Se=Y.getViewport(re);u.set(l.x*Se.x,l.y*Se.y,l.x*Se.z,l.y*Se.w),j.viewport(u),Y.updateMatrices(W,re),r=Y.getFrustum(),L(F,q,Y.camera,W,this.type)}Y.isPointLightShadow!==!0&&this.type===va&&w(Y,q),Y.needsUpdate=!1}_=this.type,S.needsUpdate=!1,i.setRenderTarget(D,C,H)};function w(N,F){const q=e.update(M);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Oi(o.x,o.y)),v.uniforms.shadow_pass.value=N.map.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(F,null,q,v,M,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(F,null,q,y,M,null)}function A(N,F,q,D){let C=null;const H=q.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)C=H;else if(C=q.isPointLight===!0?d:f,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const j=C.uuid,ne=F.uuid;let ee=p[j];ee===void 0&&(ee={},p[j]=ee);let K=ee[ne];K===void 0&&(K=C.clone(),ee[ne]=K,F.addEventListener("dispose",P)),C=K}if(C.visible=F.visible,C.wireframe=F.wireframe,D===va?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:x[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const j=i.properties.get(C);j.light=q}return C}function L(N,F,q,D,C){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===va)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,N.matrixWorld);const ne=e.update(N),ee=N.material;if(Array.isArray(ee)){const K=ne.groups;for(let I=0,W=K.length;I<W;I++){const Y=K[I],pe=ee[Y.materialIndex];if(pe&&pe.visible){const O=A(N,pe,D,C);N.onBeforeShadow(i,N,F,q,ne,O,Y),i.renderBufferDirect(q,null,ne,O,N,Y),N.onAfterShadow(i,N,F,q,ne,O,Y)}}}else if(ee.visible){const K=A(N,ee,D,C);N.onBeforeShadow(i,N,F,q,ne,K,null),i.renderBufferDirect(q,null,ne,K,N,null),N.onAfterShadow(i,N,F,q,ne,K,null)}}const j=N.children;for(let ne=0,ee=j.length;ne<ee;ne++)L(j[ne],F,q,D,C)}function P(N){N.target.removeEventListener("dispose",P);for(const q in p){const D=p[q],C=N.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const AR={[Ld]:_u,[Od]:Id,[Pd]:Fd,[js]:Bd,[_u]:Ld,[Id]:Od,[Fd]:Pd,[Bd]:js};function RR(i,e){function t(){let k=!1;const Ne=new un;let Ce=null;const we=new un(0,0,0,0);return{setMask:function(Te){Ce!==Te&&!k&&(i.colorMask(Te,Te,Te,Te),Ce=Te)},setLocked:function(Te){k=Te},setClear:function(Te,ye,Ve,st,Bt){Bt===!0&&(Te*=st,ye*=st,Ve*=st),Ne.set(Te,ye,Ve,st),we.equals(Ne)===!1&&(i.clearColor(Te,ye,Ve,st),we.copy(Ne))},reset:function(){k=!1,Ce=null,we.set(-1,0,0,0)}}}function r(){let k=!1,Ne=!1,Ce=null,we=null,Te=null;return{setReversed:function(ye){if(Ne!==ye){const Ve=e.get("EXT_clip_control");ye?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),Ne=ye;const st=Te;Te=null,this.setClear(st)}},getReversed:function(){return Ne},setTest:function(ye){ye?ge(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(ye){Ce!==ye&&!k&&(i.depthMask(ye),Ce=ye)},setFunc:function(ye){if(Ne&&(ye=AR[ye]),we!==ye){switch(ye){case Ld:i.depthFunc(i.NEVER);break;case _u:i.depthFunc(i.ALWAYS);break;case Od:i.depthFunc(i.LESS);break;case js:i.depthFunc(i.LEQUAL);break;case Pd:i.depthFunc(i.EQUAL);break;case Bd:i.depthFunc(i.GEQUAL);break;case Id:i.depthFunc(i.GREATER);break;case Fd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=ye}},setLocked:function(ye){k=ye},setClear:function(ye){Te!==ye&&(Ne&&(ye=1-ye),i.clearDepth(ye),Te=ye)},reset:function(){k=!1,Ce=null,we=null,Te=null,Ne=!1}}}function o(){let k=!1,Ne=null,Ce=null,we=null,Te=null,ye=null,Ve=null,st=null,Bt=null;return{setTest:function(Ut){k||(Ut?ge(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Ut){Ne!==Ut&&!k&&(i.stencilMask(Ut),Ne=Ut)},setFunc:function(Ut,fi,fn){(Ce!==Ut||we!==fi||Te!==fn)&&(i.stencilFunc(Ut,fi,fn),Ce=Ut,we=fi,Te=fn)},setOp:function(Ut,fi,fn){(ye!==Ut||Ve!==fi||st!==fn)&&(i.stencilOp(Ut,fi,fn),ye=Ut,Ve=fi,st=fn)},setLocked:function(Ut){k=Ut},setClear:function(Ut){Bt!==Ut&&(i.clearStencil(Ut),Bt=Ut)},reset:function(){k=!1,Ne=null,Ce=null,we=null,Te=null,ye=null,Ve=null,st=null,Bt=null}}}const l=new t,u=new r,f=new o,d=new WeakMap,p=new WeakMap;let g={},x={},v=new WeakMap,y=[],b=null,M=!1,S=null,_=null,w=null,A=null,L=null,P=null,N=null,F=new Pt(0,0,0),q=0,D=!1,C=null,H=null,j=null,ne=null,ee=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,W=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Y)[1]),I=W>=1):Y.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),I=W>=2);let pe=null,O={};const re=i.getParameter(i.SCISSOR_BOX),Se=i.getParameter(i.VIEWPORT),Me=new un().fromArray(re),De=new un().fromArray(Se);function We(k,Ne,Ce,we){const Te=new Uint8Array(4),ye=i.createTexture();i.bindTexture(k,ye),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<Ce;Ve++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Ne,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(Ne+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return ye}const ae={};ae[i.TEXTURE_2D]=We(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=We(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=We(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=We(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ge(i.DEPTH_TEST),u.setFunc(js),He(!1),Fe(Dx),ge(i.CULL_FACE),Rt(Ni);function ge(k){g[k]!==!0&&(i.enable(k),g[k]=!0)}function be(k){g[k]!==!1&&(i.disable(k),g[k]=!1)}function qe(k,Ne){return x[k]!==Ne?(i.bindFramebuffer(k,Ne),x[k]=Ne,k===i.DRAW_FRAMEBUFFER&&(x[i.FRAMEBUFFER]=Ne),k===i.FRAMEBUFFER&&(x[i.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Xe(k,Ne){let Ce=y,we=!1;if(k){Ce=v.get(Ne),Ce===void 0&&(Ce=[],v.set(Ne,Ce));const Te=k.textures;if(Ce.length!==Te.length||Ce[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,Ve=Te.length;ye<Ve;ye++)Ce[ye]=i.COLOR_ATTACHMENT0+ye;Ce.length=Te.length,we=!0}}else Ce[0]!==i.BACK&&(Ce[0]=i.BACK,we=!0);we&&i.drawBuffers(Ce)}function ct(k){return b!==k?(i.useProgram(k),b=k,!0):!1}const Qt={[Vr]:i.FUNC_ADD,[OM]:i.FUNC_SUBTRACT,[PM]:i.FUNC_REVERSE_SUBTRACT};Qt[BM]=i.MIN,Qt[IM]=i.MAX;const ut={[FM]:i.ZERO,[zM]:i.ONE,[HM]:i.SRC_COLOR,[Ud]:i.SRC_ALPHA,[qM]:i.SRC_ALPHA_SATURATE,[XM]:i.DST_COLOR,[VM]:i.DST_ALPHA,[GM]:i.ONE_MINUS_SRC_COLOR,[Nd]:i.ONE_MINUS_SRC_ALPHA,[WM]:i.ONE_MINUS_DST_COLOR,[kM]:i.ONE_MINUS_DST_ALPHA,[jM]:i.CONSTANT_COLOR,[YM]:i.ONE_MINUS_CONSTANT_COLOR,[ZM]:i.CONSTANT_ALPHA,[KM]:i.ONE_MINUS_CONSTANT_ALPHA};function Rt(k,Ne,Ce,we,Te,ye,Ve,st,Bt,Ut){if(k===Ni){M===!0&&(be(i.BLEND),M=!1);return}if(M===!1&&(ge(i.BLEND),M=!0),k!==LM){if(k!==S||Ut!==D){if((_!==Vr||L!==Vr)&&(i.blendEquation(i.FUNC_ADD),_=Vr,L=Vr),Ut)switch(k){case Ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ux:i.blendFunc(i.ONE,i.ONE);break;case Nx:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lx:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:cn("WebGLState: Invalid blending: ",k);break}else switch(k){case Ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ux:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nx:cn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lx:cn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:cn("WebGLState: Invalid blending: ",k);break}w=null,A=null,P=null,N=null,F.set(0,0,0),q=0,S=k,D=Ut}return}Te=Te||Ne,ye=ye||Ce,Ve=Ve||we,(Ne!==_||Te!==L)&&(i.blendEquationSeparate(Qt[Ne],Qt[Te]),_=Ne,L=Te),(Ce!==w||we!==A||ye!==P||Ve!==N)&&(i.blendFuncSeparate(ut[Ce],ut[we],ut[ye],ut[Ve]),w=Ce,A=we,P=ye,N=Ve),(st.equals(F)===!1||Bt!==q)&&(i.blendColor(st.r,st.g,st.b,Bt),F.copy(st),q=Bt),S=k,D=!1}function V(k,Ne){k.side===si?be(i.CULL_FACE):ge(i.CULL_FACE);let Ce=k.side===Cn;Ne&&(Ce=!Ce),He(Ce),k.blending===Ws&&k.transparent===!1?Rt(Ni):Rt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),u.setFunc(k.depthFunc),u.setTest(k.depthTest),u.setMask(k.depthWrite),l.setMask(k.colorWrite);const we=k.stencilWrite;f.setTest(we),we&&(f.setMask(k.stencilWriteMask),f.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),f.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Pe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(k){C!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),C=k)}function Fe(k){k!==DM?(ge(i.CULL_FACE),k!==H&&(k===Dx?i.cullFace(i.BACK):k===UM?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),H=k}function gt(k){k!==j&&(I&&i.lineWidth(k),j=k)}function Pe(k,Ne,Ce){k?(ge(i.POLYGON_OFFSET_FILL),(ne!==Ne||ee!==Ce)&&(i.polygonOffset(Ne,Ce),ne=Ne,ee=Ce)):be(i.POLYGON_OFFSET_FILL)}function Ot(k){k?ge(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function je(k){k===void 0&&(k=i.TEXTURE0+K-1),pe!==k&&(i.activeTexture(k),pe=k)}function lt(k,Ne,Ce){Ce===void 0&&(pe===null?Ce=i.TEXTURE0+K-1:Ce=pe);let we=O[Ce];we===void 0&&(we={type:void 0,texture:void 0},O[Ce]=we),(we.type!==k||we.texture!==Ne)&&(pe!==Ce&&(i.activeTexture(Ce),pe=Ce),i.bindTexture(k,Ne||ae[k]),we.type=k,we.texture=Ne)}function B(){const k=O[pe];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function ie(){try{i.compressedTexImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function me(){try{i.texSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function ve(){try{i.texSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function fe(){try{i.compressedTexSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Ie(){try{i.compressedTexSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Le(){try{i.texStorage2D(...arguments)}catch(k){k("WebGLState:",k)}}function tt(){try{i.texStorage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Ye(){try{i.texImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Ee(){try{i.texImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Re(k){Me.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Me.copy(k))}function Qe(k){De.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),De.copy(k))}function et(k,Ne){let Ce=p.get(Ne);Ce===void 0&&(Ce=new WeakMap,p.set(Ne,Ce));let we=Ce.get(k);we===void 0&&(we=i.getUniformBlockIndex(Ne,k.name),Ce.set(k,we))}function Be(k,Ne){const we=p.get(Ne).get(k);d.get(Ne)!==we&&(i.uniformBlockBinding(Ne,we,k.__bindingPointIndex),d.set(Ne,we))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},pe=null,O={},x={},v=new WeakMap,y=[],b=null,M=!1,S=null,_=null,w=null,A=null,L=null,P=null,N=null,F=new Pt(0,0,0),q=0,D=!1,C=null,H=null,j=null,ne=null,ee=null,Me.set(0,0,i.canvas.width,i.canvas.height),De.set(0,0,i.canvas.width,i.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ge,disable:be,bindFramebuffer:qe,drawBuffers:Xe,useProgram:ct,setBlending:Rt,setMaterial:V,setFlipSided:He,setCullFace:Fe,setLineWidth:gt,setPolygonOffset:Pe,setScissorTest:Ot,activeTexture:je,bindTexture:lt,unbindTexture:B,compressedTexImage2D:T,compressedTexImage3D:ie,texImage2D:Ye,texImage3D:Ee,updateUBOMapping:et,uniformBlockBinding:Be,texStorage2D:Le,texStorage3D:tt,texSubImage2D:me,texSubImage3D:ve,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ie,scissor:Re,viewport:Qe,reset:rt}}function wR(i,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new _t,g=new WeakMap;let x;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(B,T){return y?new OffscreenCanvas(B,T):bu("canvas")}function M(B,T,ie){let me=1;const ve=lt(B);if((ve.width>ie||ve.height>ie)&&(me=ie/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const fe=Math.floor(me*ve.width),Ie=Math.floor(me*ve.height);x===void 0&&(x=b(fe,Ie));const Le=T?b(fe,Ie):x;return Le.width=fe,Le.height=Ie,Le.getContext("2d").drawImage(B,0,0,fe,Ie),ft("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+fe+"x"+Ie+")."),Le}else return"data"in B&&ft("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),B;return B}function S(B){return B.generateMipmaps}function _(B){i.generateMipmap(B)}function w(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(B,T,ie,me,ve=!1){if(B!==null){if(i[B]!==void 0)return i[B];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let fe=T;if(T===i.RED&&(ie===i.FLOAT&&(fe=i.R32F),ie===i.HALF_FLOAT&&(fe=i.R16F),ie===i.UNSIGNED_BYTE&&(fe=i.R8)),T===i.RED_INTEGER&&(ie===i.UNSIGNED_BYTE&&(fe=i.R8UI),ie===i.UNSIGNED_SHORT&&(fe=i.R16UI),ie===i.UNSIGNED_INT&&(fe=i.R32UI),ie===i.BYTE&&(fe=i.R8I),ie===i.SHORT&&(fe=i.R16I),ie===i.INT&&(fe=i.R32I)),T===i.RG&&(ie===i.FLOAT&&(fe=i.RG32F),ie===i.HALF_FLOAT&&(fe=i.RG16F),ie===i.UNSIGNED_BYTE&&(fe=i.RG8)),T===i.RG_INTEGER&&(ie===i.UNSIGNED_BYTE&&(fe=i.RG8UI),ie===i.UNSIGNED_SHORT&&(fe=i.RG16UI),ie===i.UNSIGNED_INT&&(fe=i.RG32UI),ie===i.BYTE&&(fe=i.RG8I),ie===i.SHORT&&(fe=i.RG16I),ie===i.INT&&(fe=i.RG32I)),T===i.RGB_INTEGER&&(ie===i.UNSIGNED_BYTE&&(fe=i.RGB8UI),ie===i.UNSIGNED_SHORT&&(fe=i.RGB16UI),ie===i.UNSIGNED_INT&&(fe=i.RGB32UI),ie===i.BYTE&&(fe=i.RGB8I),ie===i.SHORT&&(fe=i.RGB16I),ie===i.INT&&(fe=i.RGB32I)),T===i.RGBA_INTEGER&&(ie===i.UNSIGNED_BYTE&&(fe=i.RGBA8UI),ie===i.UNSIGNED_SHORT&&(fe=i.RGBA16UI),ie===i.UNSIGNED_INT&&(fe=i.RGBA32UI),ie===i.BYTE&&(fe=i.RGBA8I),ie===i.SHORT&&(fe=i.RGBA16I),ie===i.INT&&(fe=i.RGBA32I)),T===i.RGB&&(ie===i.UNSIGNED_INT_5_9_9_9_REV&&(fe=i.RGB9_E5),ie===i.UNSIGNED_INT_10F_11F_11F_REV&&(fe=i.R11F_G11F_B10F)),T===i.RGBA){const Ie=ve?yu:Ct.getTransfer(me);ie===i.FLOAT&&(fe=i.RGBA32F),ie===i.HALF_FLOAT&&(fe=i.RGBA16F),ie===i.UNSIGNED_BYTE&&(fe=Ie===kt?i.SRGB8_ALPHA8:i.RGBA8),ie===i.UNSIGNED_SHORT_4_4_4_4&&(fe=i.RGBA4),ie===i.UNSIGNED_SHORT_5_5_5_1&&(fe=i.RGB5_A1)}return(fe===i.R16F||fe===i.R32F||fe===i.RG16F||fe===i.RG32F||fe===i.RGBA16F||fe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function L(B,T){let ie;return B?T===null||T===fr||T===Ks?ie=i.DEPTH24_STENCIL8:T===ya?ie=i.DEPTH32F_STENCIL8:T===pl&&(ie=i.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===fr||T===Ks?ie=i.DEPTH_COMPONENT24:T===ya?ie=i.DEPTH_COMPONENT32F:T===pl&&(ie=i.DEPTH_COMPONENT16),ie}function P(B,T){return S(B)===!0||B.isFramebufferTexture&&B.minFilter!==oi&&B.minFilter!==Dn?Math.log2(Math.max(T.width,T.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?T.mipmaps.length:1}function N(B){const T=B.target;T.removeEventListener("dispose",N),q(T),T.isVideoTexture&&g.delete(T)}function F(B){const T=B.target;T.removeEventListener("dispose",F),C(T)}function q(B){const T=r.get(B);if(T.__webglInit===void 0)return;const ie=B.source,me=v.get(ie);if(me){const ve=me[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&D(B),Object.keys(me).length===0&&v.delete(ie)}r.remove(B)}function D(B){const T=r.get(B);i.deleteTexture(T.__webglTexture);const ie=B.source,me=v.get(ie);delete me[T.__cacheKey],u.memory.textures--}function C(B){const T=r.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),r.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(T.__webglFramebuffer[me]))for(let ve=0;ve<T.__webglFramebuffer[me].length;ve++)i.deleteFramebuffer(T.__webglFramebuffer[me][ve]);else i.deleteFramebuffer(T.__webglFramebuffer[me]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[me])}else{if(Array.isArray(T.__webglFramebuffer))for(let me=0;me<T.__webglFramebuffer.length;me++)i.deleteFramebuffer(T.__webglFramebuffer[me]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let me=0;me<T.__webglColorRenderbuffer.length;me++)T.__webglColorRenderbuffer[me]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[me]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ie=B.textures;for(let me=0,ve=ie.length;me<ve;me++){const fe=r.get(ie[me]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),u.memory.textures--),r.remove(ie[me])}r.remove(B)}let H=0;function j(){H=0}function ne(){const B=H;return B>=o.maxTextures&&ft("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+o.maxTextures),H+=1,B}function ee(B){const T=[];return T.push(B.wrapS),T.push(B.wrapT),T.push(B.wrapR||0),T.push(B.magFilter),T.push(B.minFilter),T.push(B.anisotropy),T.push(B.internalFormat),T.push(B.format),T.push(B.type),T.push(B.generateMipmaps),T.push(B.premultiplyAlpha),T.push(B.flipY),T.push(B.unpackAlignment),T.push(B.colorSpace),T.join()}function K(B,T){const ie=r.get(B);if(B.isVideoTexture&&Ot(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&ie.__version!==B.version){const me=B.image;if(me===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(ie,B,T);return}}else B.isExternalTexture&&(ie.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture,i.TEXTURE0+T)}function I(B,T){const ie=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&ie.__version!==B.version){ae(ie,B,T);return}else B.isExternalTexture&&(ie.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,ie.__webglTexture,i.TEXTURE0+T)}function W(B,T){const ie=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&ie.__version!==B.version){ae(ie,B,T);return}t.bindTexture(i.TEXTURE_3D,ie.__webglTexture,i.TEXTURE0+T)}function Y(B,T){const ie=r.get(B);if(B.version>0&&ie.__version!==B.version){ge(ie,B,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture,i.TEXTURE0+T)}const pe={[Gd]:i.REPEAT,[_a]:i.CLAMP_TO_EDGE,[Vd]:i.MIRRORED_REPEAT},O={[oi]:i.NEAREST,[sE]:i.NEAREST_MIPMAP_NEAREST,[Bc]:i.NEAREST_MIPMAP_LINEAR,[Dn]:i.LINEAR,[Vh]:i.LINEAR_MIPMAP_NEAREST,[Xr]:i.LINEAR_MIPMAP_LINEAR},re={[uE]:i.NEVER,[gE]:i.ALWAYS,[fE]:i.LESS,[D_]:i.LEQUAL,[hE]:i.EQUAL,[mE]:i.GEQUAL,[dE]:i.GREATER,[pE]:i.NOTEQUAL};function Se(B,T){if(T.type===ya&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Dn||T.magFilter===Vh||T.magFilter===Bc||T.magFilter===Xr||T.minFilter===Dn||T.minFilter===Vh||T.minFilter===Bc||T.minFilter===Xr)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,pe[T.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,pe[T.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,pe[T.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,O[T.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,O[T.minFilter]),T.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,re[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===oi||T.minFilter!==Bc&&T.minFilter!==Xr||T.type===ya&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");i.texParameterf(B,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Me(B,T){let ie=!1;B.__webglInit===void 0&&(B.__webglInit=!0,T.addEventListener("dispose",N));const me=T.source;let ve=v.get(me);ve===void 0&&(ve={},v.set(me,ve));const fe=ee(T);if(fe!==B.__cacheKey){ve[fe]===void 0&&(ve[fe]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,ie=!0),ve[fe].usedTimes++;const Ie=ve[B.__cacheKey];Ie!==void 0&&(ve[B.__cacheKey].usedTimes--,Ie.usedTimes===0&&D(T)),B.__cacheKey=fe,B.__webglTexture=ve[fe].texture}return ie}function De(B,T,ie){return Math.floor(Math.floor(B/ie)/T)}function We(B,T,ie,me){const fe=B.updateRanges;if(fe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,ie,me,T.data);else{fe.sort((Ee,Re)=>Ee.start-Re.start);let Ie=0;for(let Ee=1;Ee<fe.length;Ee++){const Re=fe[Ie],Qe=fe[Ee],et=Re.start+Re.count,Be=De(Qe.start,T.width,4),rt=De(Re.start,T.width,4);Qe.start<=et+1&&Be===rt&&De(Qe.start+Qe.count-1,T.width,4)===Be?Re.count=Math.max(Re.count,Qe.start+Qe.count-Re.start):(++Ie,fe[Ie]=Qe)}fe.length=Ie+1;const Le=i.getParameter(i.UNPACK_ROW_LENGTH),tt=i.getParameter(i.UNPACK_SKIP_PIXELS),Ye=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Ee=0,Re=fe.length;Ee<Re;Ee++){const Qe=fe[Ee],et=Math.floor(Qe.start/4),Be=Math.ceil(Qe.count/4),rt=et%T.width,k=Math.floor(et/T.width),Ne=Be,Ce=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,rt,k,Ne,Ce,ie,me,T.data)}B.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Le),i.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ye)}}function ae(B,T,ie){let me=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=i.TEXTURE_3D);const ve=Me(B,T),fe=T.source;t.bindTexture(me,B.__webglTexture,i.TEXTURE0+ie);const Ie=r.get(fe);if(fe.version!==Ie.__version||ve===!0){t.activeTexture(i.TEXTURE0+ie);const Le=Ct.getPrimaries(Ct.workingColorSpace),tt=T.colorSpace===Xi?null:Ct.getPrimaries(T.colorSpace),Ye=T.colorSpace===Xi||Le===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let Ee=M(T.image,!1,o.maxTextureSize);Ee=je(T,Ee);const Re=l.convert(T.format,T.colorSpace),Qe=l.convert(T.type);let et=A(T.internalFormat,Re,Qe,T.colorSpace,T.isVideoTexture);Se(me,T);let Be;const rt=T.mipmaps,k=T.isVideoTexture!==!0,Ne=Ie.__version===void 0||ve===!0,Ce=fe.dataReady,we=P(T,Ee);if(T.isDepthTexture)et=L(T.format===Qs,T.type),Ne&&(k?t.texStorage2D(i.TEXTURE_2D,1,et,Ee.width,Ee.height):t.texImage2D(i.TEXTURE_2D,0,et,Ee.width,Ee.height,0,Re,Qe,null));else if(T.isDataTexture)if(rt.length>0){k&&Ne&&t.texStorage2D(i.TEXTURE_2D,we,et,rt[0].width,rt[0].height);for(let Te=0,ye=rt.length;Te<ye;Te++)Be=rt[Te],k?Ce&&t.texSubImage2D(i.TEXTURE_2D,Te,0,0,Be.width,Be.height,Re,Qe,Be.data):t.texImage2D(i.TEXTURE_2D,Te,et,Be.width,Be.height,0,Re,Qe,Be.data);T.generateMipmaps=!1}else k?(Ne&&t.texStorage2D(i.TEXTURE_2D,we,et,Ee.width,Ee.height),Ce&&We(T,Ee,Re,Qe)):t.texImage2D(i.TEXTURE_2D,0,et,Ee.width,Ee.height,0,Re,Qe,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&Ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,et,rt[0].width,rt[0].height,Ee.depth);for(let Te=0,ye=rt.length;Te<ye;Te++)if(Be=rt[Te],T.format!==Ui)if(Re!==null)if(k){if(Ce)if(T.layerUpdates.size>0){const Ve=ev(Be.width,Be.height,T.format,T.type);for(const st of T.layerUpdates){const Bt=Be.data.subarray(st*Ve/Be.data.BYTES_PER_ELEMENT,(st+1)*Ve/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Te,0,0,st,Be.width,Be.height,1,Re,Bt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Te,0,0,0,Be.width,Be.height,Ee.depth,Re,Be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Te,et,Be.width,Be.height,Ee.depth,0,Be.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Ce&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Te,0,0,0,Be.width,Be.height,Ee.depth,Re,Qe,Be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Te,et,Be.width,Be.height,Ee.depth,0,Re,Qe,Be.data)}else{k&&Ne&&t.texStorage2D(i.TEXTURE_2D,we,et,rt[0].width,rt[0].height);for(let Te=0,ye=rt.length;Te<ye;Te++)Be=rt[Te],T.format!==Ui?Re!==null?k?Ce&&t.compressedTexSubImage2D(i.TEXTURE_2D,Te,0,0,Be.width,Be.height,Re,Be.data):t.compressedTexImage2D(i.TEXTURE_2D,Te,et,Be.width,Be.height,0,Be.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Ce&&t.texSubImage2D(i.TEXTURE_2D,Te,0,0,Be.width,Be.height,Re,Qe,Be.data):t.texImage2D(i.TEXTURE_2D,Te,et,Be.width,Be.height,0,Re,Qe,Be.data)}else if(T.isDataArrayTexture)if(k){if(Ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,et,Ee.width,Ee.height,Ee.depth),Ce)if(T.layerUpdates.size>0){const Te=ev(Ee.width,Ee.height,T.format,T.type);for(const ye of T.layerUpdates){const Ve=Ee.data.subarray(ye*Te/Ee.data.BYTES_PER_ELEMENT,(ye+1)*Te/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ye,Ee.width,Ee.height,1,Re,Qe,Ve)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Re,Qe,Ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,et,Ee.width,Ee.height,Ee.depth,0,Re,Qe,Ee.data);else if(T.isData3DTexture)k?(Ne&&t.texStorage3D(i.TEXTURE_3D,we,et,Ee.width,Ee.height,Ee.depth),Ce&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Re,Qe,Ee.data)):t.texImage3D(i.TEXTURE_3D,0,et,Ee.width,Ee.height,Ee.depth,0,Re,Qe,Ee.data);else if(T.isFramebufferTexture){if(Ne)if(k)t.texStorage2D(i.TEXTURE_2D,we,et,Ee.width,Ee.height);else{let Te=Ee.width,ye=Ee.height;for(let Ve=0;Ve<we;Ve++)t.texImage2D(i.TEXTURE_2D,Ve,et,Te,ye,0,Re,Qe,null),Te>>=1,ye>>=1}}else if(rt.length>0){if(k&&Ne){const Te=lt(rt[0]);t.texStorage2D(i.TEXTURE_2D,we,et,Te.width,Te.height)}for(let Te=0,ye=rt.length;Te<ye;Te++)Be=rt[Te],k?Ce&&t.texSubImage2D(i.TEXTURE_2D,Te,0,0,Re,Qe,Be):t.texImage2D(i.TEXTURE_2D,Te,et,Re,Qe,Be);T.generateMipmaps=!1}else if(k){if(Ne){const Te=lt(Ee);t.texStorage2D(i.TEXTURE_2D,we,et,Te.width,Te.height)}Ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,Qe,Ee)}else t.texImage2D(i.TEXTURE_2D,0,et,Re,Qe,Ee);S(T)&&_(me),Ie.__version=fe.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function ge(B,T,ie){if(T.image.length!==6)return;const me=Me(B,T),ve=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+ie);const fe=r.get(ve);if(ve.version!==fe.__version||me===!0){t.activeTexture(i.TEXTURE0+ie);const Ie=Ct.getPrimaries(Ct.workingColorSpace),Le=T.colorSpace===Xi?null:Ct.getPrimaries(T.colorSpace),tt=T.colorSpace===Xi||Ie===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const Ye=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,Re=[];for(let ye=0;ye<6;ye++)!Ye&&!Ee?Re[ye]=M(T.image[ye],!0,o.maxCubemapSize):Re[ye]=Ee?T.image[ye].image:T.image[ye],Re[ye]=je(T,Re[ye]);const Qe=Re[0],et=l.convert(T.format,T.colorSpace),Be=l.convert(T.type),rt=A(T.internalFormat,et,Be,T.colorSpace),k=T.isVideoTexture!==!0,Ne=fe.__version===void 0||me===!0,Ce=ve.dataReady;let we=P(T,Qe);Se(i.TEXTURE_CUBE_MAP,T);let Te;if(Ye){k&&Ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,rt,Qe.width,Qe.height);for(let ye=0;ye<6;ye++){Te=Re[ye].mipmaps;for(let Ve=0;Ve<Te.length;Ve++){const st=Te[Ve];T.format!==Ui?et!==null?k?Ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve,0,0,st.width,st.height,et,st.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve,rt,st.width,st.height,0,st.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve,0,0,st.width,st.height,et,Be,st.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve,rt,st.width,st.height,0,et,Be,st.data)}}}else{if(Te=T.mipmaps,k&&Ne){Te.length>0&&we++;const ye=lt(Re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,rt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Ee){k?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Re[ye].width,Re[ye].height,et,Be,Re[ye].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,rt,Re[ye].width,Re[ye].height,0,et,Be,Re[ye].data);for(let Ve=0;Ve<Te.length;Ve++){const Bt=Te[Ve].image[ye].image;k?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve+1,0,0,Bt.width,Bt.height,et,Be,Bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve+1,rt,Bt.width,Bt.height,0,et,Be,Bt.data)}}else{k?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,et,Be,Re[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,rt,et,Be,Re[ye]);for(let Ve=0;Ve<Te.length;Ve++){const st=Te[Ve];k?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve+1,0,0,et,Be,st.image[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve+1,rt,et,Be,st.image[ye])}}}S(T)&&_(i.TEXTURE_CUBE_MAP),fe.__version=ve.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function be(B,T,ie,me,ve,fe){const Ie=l.convert(ie.format,ie.colorSpace),Le=l.convert(ie.type),tt=A(ie.internalFormat,Ie,Le,ie.colorSpace),Ye=r.get(T),Ee=r.get(ie);if(Ee.__renderTarget=T,!Ye.__hasExternalTextures){const Re=Math.max(1,T.width>>fe),Qe=Math.max(1,T.height>>fe);ve===i.TEXTURE_3D||ve===i.TEXTURE_2D_ARRAY?t.texImage3D(ve,fe,tt,Re,Qe,T.depth,0,Ie,Le,null):t.texImage2D(ve,fe,tt,Re,Qe,0,Ie,Le,null)}t.bindFramebuffer(i.FRAMEBUFFER,B),Pe(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,ve,Ee.__webglTexture,0,gt(T)):(ve===i.TEXTURE_2D||ve>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,me,ve,Ee.__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(B,T,ie){if(i.bindRenderbuffer(i.RENDERBUFFER,B),T.depthBuffer){const me=T.depthTexture,ve=me&&me.isDepthTexture?me.type:null,fe=L(T.stencilBuffer,ve),Ie=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=gt(T);Pe(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,fe,T.width,T.height):ie?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,fe,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,fe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,B)}else{const me=T.textures;for(let ve=0;ve<me.length;ve++){const fe=me[ve],Ie=l.convert(fe.format,fe.colorSpace),Le=l.convert(fe.type),tt=A(fe.internalFormat,Ie,Le,fe.colorSpace),Ye=gt(T);ie&&Pe(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,tt,T.width,T.height):Pe(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye,tt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,tt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Xe(B,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,B),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(T.depthTexture);me.__renderTarget=T,(!me.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),K(T.depthTexture,0);const ve=me.__webglTexture,fe=gt(T);if(T.depthTexture.format===ml)Pe(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ve,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ve,0);else if(T.depthTexture.format===Qs)Pe(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ve,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function ct(B){const T=r.get(B),ie=B.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==B.depthTexture){const me=B.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),me){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=me}if(B.depthTexture&&!T.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");const me=B.texture.mipmaps;me&&me.length>0?Xe(T.__webglFramebuffer[0],B):Xe(T.__webglFramebuffer,B)}else if(ie){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]===void 0)T.__webglDepthbuffer[me]=i.createRenderbuffer(),qe(T.__webglDepthbuffer[me],B,!1);else{const ve=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer[me];i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,fe)}}else{const me=B.texture.mipmaps;if(me&&me.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),qe(T.__webglDepthbuffer,B,!1);else{const ve=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,fe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qt(B,T,ie){const me=r.get(B);T!==void 0&&be(me.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ie!==void 0&&ct(B)}function ut(B){const T=B.texture,ie=r.get(B),me=r.get(T);B.addEventListener("dispose",F);const ve=B.textures,fe=B.isWebGLCubeRenderTarget===!0,Ie=ve.length>1;if(Ie||(me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture()),me.__version=T.version,u.memory.textures++),fe){ie.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(T.mipmaps&&T.mipmaps.length>0){ie.__webglFramebuffer[Le]=[];for(let tt=0;tt<T.mipmaps.length;tt++)ie.__webglFramebuffer[Le][tt]=i.createFramebuffer()}else ie.__webglFramebuffer[Le]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ie.__webglFramebuffer=[];for(let Le=0;Le<T.mipmaps.length;Le++)ie.__webglFramebuffer[Le]=i.createFramebuffer()}else ie.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let Le=0,tt=ve.length;Le<tt;Le++){const Ye=r.get(ve[Le]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),u.memory.textures++)}if(B.samples>0&&Pe(B)===!1){ie.__webglMultisampledFramebuffer=i.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let Le=0;Le<ve.length;Le++){const tt=ve[Le];ie.__webglColorRenderbuffer[Le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ie.__webglColorRenderbuffer[Le]);const Ye=l.convert(tt.format,tt.colorSpace),Ee=l.convert(tt.type),Re=A(tt.internalFormat,Ye,Ee,tt.colorSpace,B.isXRRenderTarget===!0),Qe=gt(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,Re,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,ie.__webglColorRenderbuffer[Le])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(ie.__webglDepthRenderbuffer=i.createRenderbuffer(),qe(ie.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,me.__webglTexture),Se(i.TEXTURE_CUBE_MAP,T);for(let Le=0;Le<6;Le++)if(T.mipmaps&&T.mipmaps.length>0)for(let tt=0;tt<T.mipmaps.length;tt++)be(ie.__webglFramebuffer[Le][tt],B,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,tt);else be(ie.__webglFramebuffer[Le],B,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);S(T)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let Le=0,tt=ve.length;Le<tt;Le++){const Ye=ve[Le],Ee=r.get(Ye);let Re=i.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Re=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Re,Ee.__webglTexture),Se(Re,Ye),be(ie.__webglFramebuffer,B,Ye,i.COLOR_ATTACHMENT0+Le,Re,0),S(Ye)&&_(Re)}t.unbindTexture()}else{let Le=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Le=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Le,me.__webglTexture),Se(Le,T),T.mipmaps&&T.mipmaps.length>0)for(let tt=0;tt<T.mipmaps.length;tt++)be(ie.__webglFramebuffer[tt],B,T,i.COLOR_ATTACHMENT0,Le,tt);else be(ie.__webglFramebuffer,B,T,i.COLOR_ATTACHMENT0,Le,0);S(T)&&_(Le),t.unbindTexture()}B.depthBuffer&&ct(B)}function Rt(B){const T=B.textures;for(let ie=0,me=T.length;ie<me;ie++){const ve=T[ie];if(S(ve)){const fe=w(B),Ie=r.get(ve).__webglTexture;t.bindTexture(fe,Ie),_(fe),t.unbindTexture()}}}const V=[],He=[];function Fe(B){if(B.samples>0){if(Pe(B)===!1){const T=B.textures,ie=B.width,me=B.height;let ve=i.COLOR_BUFFER_BIT;const fe=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=r.get(B),Le=T.length>1;if(Le)for(let Ye=0;Ye<T.length;Ye++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const tt=B.texture.mipmaps;tt&&tt.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ye=0;Ye<T.length;Ye++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(ve|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(ve|=i.STENCIL_BUFFER_BIT)),Le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ye]);const Ee=r.get(T[Ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,ie,me,0,0,ie,me,ve,i.NEAREST),d===!0&&(V.length=0,He.length=0,V.push(i.COLOR_ATTACHMENT0+Ye),B.depthBuffer&&B.resolveDepthBuffer===!1&&(V.push(fe),He.push(fe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,He)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,V))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Le)for(let Ye=0;Ye<T.length;Ye++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ye]);const Ee=r.get(T[Ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&d){const T=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function gt(B){return Math.min(o.maxSamples,B.samples)}function Pe(B){const T=r.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ot(B){const T=u.render.frame;g.get(B)!==T&&(g.set(B,T),B.update())}function je(B,T){const ie=B.colorSpace,me=B.format,ve=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||ie!==hr&&ie!==Xi&&(Ct.getTransfer(ie)===kt?(me!==Ui||ve!==ci)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):cn("WebGLTextures: Unsupported texture color space:",ie)),T}function lt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(p.width=B.naturalWidth||B.width,p.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(p.width=B.displayWidth,p.height=B.displayHeight):(p.width=B.width,p.height=B.height),p}this.allocateTextureUnit=ne,this.resetTextureUnits=j,this.setTexture2D=K,this.setTexture2DArray=I,this.setTexture3D=W,this.setTextureCube=Y,this.rebindTextures=Qt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Pe}function CR(i,e){function t(r,o=Xi){let l;const u=Ct.getTransfer(o);if(r===ci)return i.UNSIGNED_BYTE;if(r===Dp)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Up)return i.UNSIGNED_SHORT_5_5_5_1;if(r===T_)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===A_)return i.UNSIGNED_INT_10F_11F_11F_REV;if(r===M_)return i.BYTE;if(r===E_)return i.SHORT;if(r===pl)return i.UNSIGNED_SHORT;if(r===Cp)return i.INT;if(r===fr)return i.UNSIGNED_INT;if(r===ya)return i.FLOAT;if(r===eo)return i.HALF_FLOAT;if(r===R_)return i.ALPHA;if(r===w_)return i.RGB;if(r===Ui)return i.RGBA;if(r===ml)return i.DEPTH_COMPONENT;if(r===Qs)return i.DEPTH_STENCIL;if(r===C_)return i.RED;if(r===Np)return i.RED_INTEGER;if(r===Lp)return i.RG;if(r===Op)return i.RG_INTEGER;if(r===Pp)return i.RGBA_INTEGER;if(r===lu||r===cu||r===uu||r===fu)if(u===kt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===lu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===cu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===uu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===lu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===cu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===uu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===kd||r===Xd||r===Wd||r===qd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===kd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===qd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jd||r===Yd||r===Zd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===jd||r===Yd)return u===kt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Zd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Kd||r===Qd||r===$d||r===Jd||r===ep||r===tp||r===np||r===ip||r===ap||r===rp||r===sp||r===op||r===lp||r===cp)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Kd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Qd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$d)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Jd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ep)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===tp)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===np)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ip)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ap)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rp)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sp)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===op)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lp)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===cp)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===up||r===fp||r===hp)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===up)return u===kt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===fp)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===hp)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===dp||r===pp||r===mp||r===gp)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===dp)return l.COMPRESSED_RED_RGTC1_EXT;if(r===pp)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===mp)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===gp)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ks?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}const DR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UR=`
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

}`;class NR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new k_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new ui({vertexShader:DR,fragmentShader:UR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qi(new Tl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LR extends dr{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",d=1,p=null,g=null,x=null,v=null,y=null,b=null;const M=typeof XRWebGLBinding<"u",S=new NR,_={},w=t.getContextAttributes();let A=null,L=null;const P=[],N=[],F=new _t;let q=null;const D=new yi;D.viewport=new un;const C=new yi;C.viewport=new un;const H=[D,C],j=new QE;let ne=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ge=P[ae];return ge===void 0&&(ge=new fd,P[ae]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ae){let ge=P[ae];return ge===void 0&&(ge=new fd,P[ae]=ge),ge.getGripSpace()},this.getHand=function(ae){let ge=P[ae];return ge===void 0&&(ge=new fd,P[ae]=ge),ge.getHandSpace()};function K(ae){const ge=N.indexOf(ae.inputSource);if(ge===-1)return;const be=P[ge];be!==void 0&&(be.update(ae.inputSource,ae.frame,p||u),be.dispatchEvent({type:ae.type,data:ae.inputSource}))}function I(){o.removeEventListener("select",K),o.removeEventListener("selectstart",K),o.removeEventListener("selectend",K),o.removeEventListener("squeeze",K),o.removeEventListener("squeezestart",K),o.removeEventListener("squeezeend",K),o.removeEventListener("end",I),o.removeEventListener("inputsourceschange",W);for(let ae=0;ae<P.length;ae++){const ge=N[ae];ge!==null&&(N[ae]=null,P[ae].disconnect(ge))}ne=null,ee=null,S.reset();for(const ae in _)delete _[ae];e.setRenderTarget(A),y=null,v=null,x=null,o=null,L=null,We.stop(),r.isPresenting=!1,e.setPixelRatio(q),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){l=ae,r.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){f=ae,r.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return x===null&&M&&(x=new XRWebGLBinding(o,t)),x},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(A=e.getRenderTarget(),o.addEventListener("select",K),o.addEventListener("selectstart",K),o.addEventListener("selectend",K),o.addEventListener("squeeze",K),o.addEventListener("squeezestart",K),o.addEventListener("squeezeend",K),o.addEventListener("end",I),o.addEventListener("inputsourceschange",W),w.xrCompatible!==!0&&await t.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(F),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,qe=null,Xe=null;w.depth&&(Xe=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=w.stencil?Qs:ml,qe=w.stencil?Ks:fr);const ct={colorFormat:t.RGBA8,depthFormat:Xe,scaleFactor:l};x=this.getBinding(),v=x.createProjectionLayer(ct),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new Oi(v.textureWidth,v.textureHeight,{format:Ui,type:ci,depthTexture:new Fp(v.textureWidth,v.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const be={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,be),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Oi(y.framebufferWidth,y.framebufferHeight,{format:Ui,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await o.requestReferenceSpace(f),We.setContext(o),We.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function W(ae){for(let ge=0;ge<ae.removed.length;ge++){const be=ae.removed[ge],qe=N.indexOf(be);qe>=0&&(N[qe]=null,P[qe].disconnect(be))}for(let ge=0;ge<ae.added.length;ge++){const be=ae.added[ge];let qe=N.indexOf(be);if(qe===-1){for(let ct=0;ct<P.length;ct++)if(ct>=N.length){N.push(be),qe=ct;break}else if(N[ct]===null){N[ct]=be,qe=ct;break}if(qe===-1)break}const Xe=P[qe];Xe&&Xe.connect(be)}}const Y=new he,pe=new he;function O(ae,ge,be){Y.setFromMatrixPosition(ge.matrixWorld),pe.setFromMatrixPosition(be.matrixWorld);const qe=Y.distanceTo(pe),Xe=ge.projectionMatrix.elements,ct=be.projectionMatrix.elements,Qt=Xe[14]/(Xe[10]-1),ut=Xe[14]/(Xe[10]+1),Rt=(Xe[9]+1)/Xe[5],V=(Xe[9]-1)/Xe[5],He=(Xe[8]-1)/Xe[0],Fe=(ct[8]+1)/ct[0],gt=Qt*He,Pe=Qt*Fe,Ot=qe/(-He+Fe),je=Ot*-He;if(ge.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(je),ae.translateZ(Ot),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Xe[10]===-1)ae.projectionMatrix.copy(ge.projectionMatrix),ae.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const lt=Qt+Ot,B=ut+Ot,T=gt-je,ie=Pe+(qe-je),me=Rt*ut/B*lt,ve=V*ut/B*lt;ae.projectionMatrix.makePerspective(T,ie,me,ve,lt,B),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function re(ae,ge){ge===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ge.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let ge=ae.near,be=ae.far;S.texture!==null&&(S.depthNear>0&&(ge=S.depthNear),S.depthFar>0&&(be=S.depthFar)),j.near=C.near=D.near=ge,j.far=C.far=D.far=be,(ne!==j.near||ee!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),ne=j.near,ee=j.far),j.layers.mask=ae.layers.mask|6,D.layers.mask=j.layers.mask&3,C.layers.mask=j.layers.mask&5;const qe=ae.parent,Xe=j.cameras;re(j,qe);for(let ct=0;ct<Xe.length;ct++)re(Xe[ct],qe);Xe.length===2?O(j,D,C):j.projectionMatrix.copy(D.projectionMatrix),Se(ae,j,qe)};function Se(ae,ge,be){be===null?ae.matrix.copy(ge.matrixWorld):(ae.matrix.copy(be.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ge.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ge.projectionMatrix),ae.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=vp*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(v===null&&y===null))return d},this.setFoveation=function(ae){d=ae,v!==null&&(v.fixedFoveation=ae),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ae)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(j)},this.getCameraTexture=function(ae){return _[ae]};let Me=null;function De(ae,ge){if(g=ge.getViewerPose(p||u),b=ge,g!==null){const be=g.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let qe=!1;be.length!==j.cameras.length&&(j.cameras.length=0,qe=!0);for(let ut=0;ut<be.length;ut++){const Rt=be[ut];let V=null;if(y!==null)V=y.getViewport(Rt);else{const Fe=x.getViewSubImage(v,Rt);V=Fe.viewport,ut===0&&(e.setRenderTargetTextures(L,Fe.colorTexture,Fe.depthStencilTexture),e.setRenderTarget(L))}let He=H[ut];He===void 0&&(He=new yi,He.layers.enable(ut),He.viewport=new un,H[ut]=He),He.matrix.fromArray(Rt.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Rt.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(V.x,V.y,V.width,V.height),ut===0&&(j.matrix.copy(He.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),qe===!0&&j.cameras.push(He)}const Xe=o.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&M){x=r.getBinding();const ut=x.getDepthInformation(be[0]);ut&&ut.isValid&&ut.texture&&S.init(ut,o.renderState)}if(Xe&&Xe.includes("camera-access")&&M){e.state.unbindTexture(),x=r.getBinding();for(let ut=0;ut<be.length;ut++){const Rt=be[ut].camera;if(Rt){let V=_[Rt];V||(V=new k_,_[Rt]=V);const He=x.getCameraImage(Rt);V.sourceTexture=He}}}}for(let be=0;be<P.length;be++){const qe=N[be],Xe=P[be];qe!==null&&Xe!==void 0&&Xe.update(qe,ge,p||u)}Me&&Me(ae,ge),ge.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ge}),b=null}const We=new X_;We.setAnimationLoop(De),this.setAnimationLoop=function(ae){Me=ae},this.dispose=function(){}}}const Br=new jr,OR=new yn;function PR(i,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,z_(i)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function o(S,_,w,A,L){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(S,_):_.isMeshToonMaterial?(l(S,_),x(S,_)):_.isMeshPhongMaterial?(l(S,_),g(S,_)):_.isMeshStandardMaterial?(l(S,_),v(S,_),_.isMeshPhysicalMaterial&&y(S,_,L)):_.isMeshMatcapMaterial?(l(S,_),b(S,_)):_.isMeshDepthMaterial?l(S,_):_.isMeshDistanceMaterial?(l(S,_),M(S,_)):_.isMeshNormalMaterial?l(S,_):_.isLineBasicMaterial?(u(S,_),_.isLineDashedMaterial&&f(S,_)):_.isPointsMaterial?d(S,_,w,A):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Cn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Cn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const w=e.get(_),A=w.envMap,L=w.envMapRotation;A&&(S.envMap.value=A,Br.copy(L),Br.x*=-1,Br.y*=-1,Br.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),S.envMapRotation.value.setFromMatrix4(OR.makeRotationFromEuler(Br)),S.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function u(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function f(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function d(S,_,w,A){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*w,S.scale.value=A*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function v(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,w){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Cn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=w.texture,S.transmissionSamplerSize.value.set(w.width,w.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,_){_.matcap&&(S.matcap.value=_.matcap)}function M(S,_){const w=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(w.matrixWorld),S.nearDistance.value=w.shadow.camera.near,S.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function BR(i,e,t,r){let o={},l={},u=[];const f=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(w,A){const L=A.program;r.uniformBlockBinding(w,L)}function p(w,A){let L=o[w.id];L===void 0&&(b(w),L=g(w),o[w.id]=L,w.addEventListener("dispose",S));const P=A.program;r.updateUBOMapping(w,P);const N=e.render.frame;l[w.id]!==N&&(v(w),l[w.id]=N)}function g(w){const A=x();w.__bindingPointIndex=A;const L=i.createBuffer(),P=w.__size,N=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,P,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,L),L}function x(){for(let w=0;w<f;w++)if(u.indexOf(w)===-1)return u.push(w),w;return cn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(w){const A=o[w.id],L=w.uniforms,P=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let N=0,F=L.length;N<F;N++){const q=Array.isArray(L[N])?L[N]:[L[N]];for(let D=0,C=q.length;D<C;D++){const H=q[D];if(y(H,N,D,P)===!0){const j=H.__offset,ne=Array.isArray(H.value)?H.value:[H.value];let ee=0;for(let K=0;K<ne.length;K++){const I=ne[K],W=M(I);typeof I=="number"||typeof I=="boolean"?(H.__data[0]=I,i.bufferSubData(i.UNIFORM_BUFFER,j+ee,H.__data)):I.isMatrix3?(H.__data[0]=I.elements[0],H.__data[1]=I.elements[1],H.__data[2]=I.elements[2],H.__data[3]=0,H.__data[4]=I.elements[3],H.__data[5]=I.elements[4],H.__data[6]=I.elements[5],H.__data[7]=0,H.__data[8]=I.elements[6],H.__data[9]=I.elements[7],H.__data[10]=I.elements[8],H.__data[11]=0):(I.toArray(H.__data,ee),ee+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(w,A,L,P){const N=w.value,F=A+"_"+L;if(P[F]===void 0)return typeof N=="number"||typeof N=="boolean"?P[F]=N:P[F]=N.clone(),!0;{const q=P[F];if(typeof N=="number"||typeof N=="boolean"){if(q!==N)return P[F]=N,!0}else if(q.equals(N)===!1)return q.copy(N),!0}return!1}function b(w){const A=w.uniforms;let L=0;const P=16;for(let F=0,q=A.length;F<q;F++){const D=Array.isArray(A[F])?A[F]:[A[F]];for(let C=0,H=D.length;C<H;C++){const j=D[C],ne=Array.isArray(j.value)?j.value:[j.value];for(let ee=0,K=ne.length;ee<K;ee++){const I=ne[ee],W=M(I),Y=L%P,pe=Y%W.boundary,O=Y+pe;L+=pe,O!==0&&P-O<W.storage&&(L+=P-O),j.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=L,L+=W.storage}}}const N=L%P;return N>0&&(L+=P-N),w.__size=L,w.__cache={},this}function M(w){const A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=48,A.storage=48):w.isMatrix4?(A.boundary=64,A.storage=64):w.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ft("WebGLRenderer: Unsupported uniform value type.",w),A}function S(w){const A=w.target;A.removeEventListener("dispose",S);const L=u.indexOf(A.__bindingPointIndex);u.splice(L,1),i.deleteBuffer(o[A.id]),delete o[A.id],delete l[A.id]}function _(){for(const w in o)i.deleteBuffer(o[w]);u=[],o={},l={}}return{bind:d,update:p,dispose:_}}const IR=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let xa=null;function FR(){return xa===null&&(xa=new WE(IR,32,32,Lp,eo),xa.minFilter=Dn,xa.magFilter=Dn,xa.wrapS=_a,xa.wrapT=_a,xa.generateMipmaps=!1,xa.needsUpdate=!0),xa}class zR{constructor(e={}){const{canvas:t=xE(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=u;const b=new Set([Pp,Op,Np]),M=new Set([ci,fr,pl,Ks,Dp,Up]),S=new Uint32Array(4),_=new Int32Array(4);let w=null,A=null;const L=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let F=!1;this._outputColorSpace=ln;let q=0,D=0,C=null,H=-1,j=null;const ne=new un,ee=new un;let K=null;const I=new Pt(0);let W=0,Y=t.width,pe=t.height,O=1,re=null,Se=null;const Me=new un(0,0,Y,pe),De=new un(0,0,Y,pe);let We=!1;const ae=new V_;let ge=!1,be=!1;const qe=new yn,Xe=new he,ct=new un,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Rt(){return C===null?O:1}let V=r;function He(U,Q){return t.getContext(U,Q)}try{const U={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Au}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",Ve,!1),V===null){const Q="webgl2";if(V=He(Q,U),V===null)throw He(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw U("WebGLRenderer: "+U.message),U}let Fe,gt,Pe,Ot,je,lt,B,T,ie,me,ve,fe,Ie,Le,tt,Ye,Ee,Re,Qe,et,Be,rt,k,Ne;function Ce(){Fe=new j2(V),Fe.init(),rt=new CR(V,Fe),gt=new F2(V,Fe,e,rt),Pe=new RR(V,Fe),gt.reversedDepthBuffer&&v&&Pe.buffers.depth.setReversed(!0),Ot=new K2(V),je=new pR,lt=new wR(V,Fe,Pe,je,gt,rt,Ot),B=new H2(N),T=new q2(N),ie=new e3(V),k=new B2(V,ie),me=new Y2(V,ie,Ot,k),ve=new $2(V,me,ie,Ot),Qe=new Q2(V,gt,lt),Ye=new z2(je),fe=new dR(N,B,T,Fe,gt,k,Ye),Ie=new PR(N,je),Le=new gR,tt=new bR(Fe),Re=new P2(N,B,T,Pe,ve,y,d),Ee=new TR(N,ve,gt),Ne=new BR(V,Ot,gt,Pe),et=new I2(V,Fe,Ot),Be=new Z2(V,Fe,Ot),Ot.programs=fe.programs,N.capabilities=gt,N.extensions=Fe,N.properties=je,N.renderLists=Le,N.shadowMap=Ee,N.state=Pe,N.info=Ot}Ce();const we=new LR(N,V);this.xr=we,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const U=Fe.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=Fe.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(U){U!==void 0&&(O=U,this.setSize(Y,pe,!1))},this.getSize=function(U){return U.set(Y,pe)},this.setSize=function(U,Q,le=!0){if(we.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=U,pe=Q,t.width=Math.floor(U*O),t.height=Math.floor(Q*O),le===!0&&(t.style.width=U+"px",t.style.height=Q+"px"),this.setViewport(0,0,U,Q)},this.getDrawingBufferSize=function(U){return U.set(Y*O,pe*O).floor()},this.setDrawingBufferSize=function(U,Q,le){Y=U,pe=Q,O=le,t.width=Math.floor(U*le),t.height=Math.floor(Q*le),this.setViewport(0,0,U,Q)},this.getCurrentViewport=function(U){return U.copy(ne)},this.getViewport=function(U){return U.copy(Me)},this.setViewport=function(U,Q,le,ce){U.isVector4?Me.set(U.x,U.y,U.z,U.w):Me.set(U,Q,le,ce),Pe.viewport(ne.copy(Me).multiplyScalar(O).round())},this.getScissor=function(U){return U.copy(De)},this.setScissor=function(U,Q,le,ce){U.isVector4?De.set(U.x,U.y,U.z,U.w):De.set(U,Q,le,ce),Pe.scissor(ee.copy(De).multiplyScalar(O).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(U){Pe.setScissorTest(We=U)},this.setOpaqueSort=function(U){re=U},this.setTransparentSort=function(U){Se=U},this.getClearColor=function(U){return U.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(U=!0,Q=!0,le=!0){let ce=0;if(U){let $=!1;if(C!==null){const Ae=C.texture.format;$=b.has(Ae)}if($){const Ae=C.texture.type,Ue=M.has(Ae),Ge=Re.getClearColor(),ze=Re.getClearAlpha(),$e=Ge.r,nt=Ge.g,Ze=Ge.b;Ue?(S[0]=$e,S[1]=nt,S[2]=Ze,S[3]=ze,V.clearBufferuiv(V.COLOR,0,S)):(_[0]=$e,_[1]=nt,_[2]=Ze,_[3]=ze,V.clearBufferiv(V.COLOR,0,_))}else ce|=V.COLOR_BUFFER_BIT}Q&&(ce|=V.DEPTH_BUFFER_BIT),le&&(ce|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),Re.dispose(),Le.dispose(),tt.dispose(),je.dispose(),B.dispose(),T.dispose(),ve.dispose(),k.dispose(),Ne.dispose(),fe.dispose(),we.dispose(),we.removeEventListener("sessionstart",Un),we.removeEventListener("sessionend",Yi),bi.stop()};function Te(U){U.preventDefault(),Ix("WebGLRenderer: Context Lost."),F=!0}function ye(){Ix("WebGLRenderer: Context Restored."),F=!1;const U=Ot.autoReset,Q=Ee.enabled,le=Ee.autoUpdate,ce=Ee.needsUpdate,$=Ee.type;Ce(),Ot.autoReset=U,Ee.enabled=Q,Ee.autoUpdate=le,Ee.needsUpdate=ce,Ee.type=$}function Ve(U){cn("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function st(U){const Q=U.target;Q.removeEventListener("dispose",st),Bt(Q)}function Bt(U){Ut(U),je.remove(U)}function Ut(U){const Q=je.get(U).programs;Q!==void 0&&(Q.forEach(function(le){fe.releaseProgram(le)}),U.isShaderMaterial&&fe.releaseShaderCache(U))}this.renderBufferDirect=function(U,Q,le,ce,$,Ae){Q===null&&(Q=Qt);const Ue=$.isMesh&&$.matrixWorld.determinant()<0,Ge=wa(U,Q,le,ce,$);Pe.setMaterial(ce,Ue);let ze=le.index,$e=1;if(ce.wireframe===!0){if(ze=me.getWireframeAttribute(le),ze===void 0)return;$e=2}const nt=le.drawRange,Ze=le.attributes.position;let xt=nt.start*$e,Nt=(nt.start+nt.count)*$e;Ae!==null&&(xt=Math.max(xt,Ae.start*$e),Nt=Math.min(Nt,(Ae.start+Ae.count)*$e)),ze!==null?(xt=Math.max(xt,0),Nt=Math.min(Nt,ze.count)):Ze!=null&&(xt=Math.max(xt,0),Nt=Math.min(Nt,Ze.count));const Mt=Nt-xt;if(Mt<0||Mt===1/0)return;k.setup($,ce,Ge,le,ze);let Yt,It=et;if(ze!==null&&(Yt=ie.get(ze),It=Be,It.setIndex(Yt)),$.isMesh)ce.wireframe===!0?(Pe.setLineWidth(ce.wireframeLinewidth*Rt()),It.setMode(V.LINES)):It.setMode(V.TRIANGLES);else if($.isLine){let Je=ce.linewidth;Je===void 0&&(Je=1),Pe.setLineWidth(Je*Rt()),$.isLineSegments?It.setMode(V.LINES):$.isLineLoop?It.setMode(V.LINE_LOOP):It.setMode(V.LINE_STRIP)}else $.isPoints?It.setMode(V.POINTS):$.isSprite&&It.setMode(V.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)gl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),It.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))It.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Je=$._multiDrawStarts,qt=$._multiDrawCounts,yt=$._multiDrawCount,Hn=ze?ie.get(ze).bytesPerElement:1,xn=je.get(ce).currentProgram.getUniforms();for(let Nn=0;Nn<yt;Nn++)xn.setValue(V,"_gl_DrawID",Nn),It.render(Je[Nn]/Hn,qt[Nn])}else if($.isInstancedMesh)It.renderInstances(xt,Mt,$.count);else if(le.isInstancedBufferGeometry){const Je=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,qt=Math.min(le.instanceCount,Je);It.renderInstances(xt,Mt,qt)}else It.render(xt,Mt)};function fi(U,Q,le){U.transparent===!0&&U.side===si&&U.forceSinglePass===!1?(U.side=Cn,U.needsUpdate=!0,Mi(U,Q,le),U.side=Ea,U.needsUpdate=!0,Mi(U,Q,le),U.side=si):Mi(U,Q,le)}this.compile=function(U,Q,le=null){le===null&&(le=U),A=tt.get(le),A.init(Q),P.push(A),le.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(A.pushLight($),$.castShadow&&A.pushShadow($))}),U!==le&&U.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(A.pushLight($),$.castShadow&&A.pushShadow($))}),A.setupLights();const ce=new Set;return U.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ae=$.material;if(Ae)if(Array.isArray(Ae))for(let Ue=0;Ue<Ae.length;Ue++){const Ge=Ae[Ue];fi(Ge,le,$),ce.add(Ge)}else fi(Ae,le,$),ce.add(Ae)}),A=P.pop(),ce},this.compileAsync=function(U,Q,le=null){const ce=this.compile(U,Q,le);return new Promise($=>{function Ae(){if(ce.forEach(function(Ue){je.get(Ue).currentProgram.isReady()&&ce.delete(Ue)}),ce.size===0){$(U);return}setTimeout(Ae,10)}Fe.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let fn=null;function Mn(U){fn&&fn(U)}function Un(){bi.stop()}function Yi(){bi.start()}const bi=new X_;bi.setAnimationLoop(Mn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(U){fn=U,we.setAnimationLoop(U),U===null?bi.stop():bi.start()},we.addEventListener("sessionstart",Un),we.addEventListener("sessionend",Yi),this.render=function(U,Q){if(Q!==void 0&&Q.isCamera!==!0){cn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(Q),Q=we.getCamera()),U.isScene===!0&&U.onBeforeRender(N,U,Q,C),A=tt.get(U,P.length),A.init(Q),P.push(A),qe.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),ae.setFromProjectionMatrix(qe,Wi,Q.reversedDepth),be=this.localClippingEnabled,ge=Ye.init(this.clippingPlanes,be),w=Le.get(U,L.length),w.init(),L.push(w),we.enabled===!0&&we.isPresenting===!0){const Ae=N.xr.getDepthSensingMesh();Ae!==null&&io(Ae,Q,-1/0,N.sortObjects)}io(U,Q,0,N.sortObjects),w.finish(),N.sortObjects===!0&&w.sort(re,Se),ut=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,ut&&Re.addToRenderList(w,U),this.info.render.frame++,ge===!0&&Ye.beginShadows();const le=A.state.shadowsArray;Ee.render(le,U,Q),ge===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=w.opaque,$=w.transmissive;if(A.setupLights(),Q.isArrayCamera){const Ae=Q.cameras;if($.length>0)for(let Ue=0,Ge=Ae.length;Ue<Ge;Ue++){const ze=Ae[Ue];ao(ce,$,U,ze)}ut&&Re.render(U);for(let Ue=0,Ge=Ae.length;Ue<Ge;Ue++){const ze=Ae[Ue];Al(w,U,ze,ze.viewport)}}else $.length>0&&ao(ce,$,U,Q),ut&&Re.render(U),Al(w,U,Q);C!==null&&D===0&&(lt.updateMultisampleRenderTarget(C),lt.updateRenderTargetMipmap(C)),U.isScene===!0&&U.onAfterRender(N,U,Q),k.resetDefaultState(),H=-1,j=null,P.pop(),P.length>0?(A=P[P.length-1],ge===!0&&Ye.setGlobalState(N.clippingPlanes,A.state.camera)):A=null,L.pop(),L.length>0?w=L[L.length-1]:w=null};function io(U,Q,le,ce){if(U.visible===!1)return;if(U.layers.test(Q.layers)){if(U.isGroup)le=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(Q);else if(U.isLight)A.pushLight(U),U.castShadow&&A.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||ae.intersectsSprite(U)){ce&&ct.setFromMatrixPosition(U.matrixWorld).applyMatrix4(qe);const Ue=ve.update(U),Ge=U.material;Ge.visible&&w.push(U,Ue,Ge,le,ct.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||ae.intersectsObject(U))){const Ue=ve.update(U),Ge=U.material;if(ce&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),ct.copy(U.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ct.copy(Ue.boundingSphere.center)),ct.applyMatrix4(U.matrixWorld).applyMatrix4(qe)),Array.isArray(Ge)){const ze=Ue.groups;for(let $e=0,nt=ze.length;$e<nt;$e++){const Ze=ze[$e],xt=Ge[Ze.materialIndex];xt&&xt.visible&&w.push(U,Ue,xt,le,ct.z,Ze)}}else Ge.visible&&w.push(U,Ue,Ge,le,ct.z,null)}}const Ae=U.children;for(let Ue=0,Ge=Ae.length;Ue<Ge;Ue++)io(Ae[Ue],Q,le,ce)}function Al(U,Q,le,ce){const{opaque:$,transmissive:Ae,transparent:Ue}=U;A.setupLightsView(le),ge===!0&&Ye.setGlobalState(N.clippingPlanes,le),ce&&Pe.viewport(ne.copy(ce)),$.length>0&&Pi($,Q,le),Ae.length>0&&Pi(Ae,Q,le),Ue.length>0&&Pi(Ue,Q,le),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function ao(U,Q,le,ce){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;A.state.transmissionRenderTarget[ce.id]===void 0&&(A.state.transmissionRenderTarget[ce.id]=new Oi(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?eo:ci,minFilter:Xr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Ae=A.state.transmissionRenderTarget[ce.id],Ue=ce.viewport||ne;Ae.setSize(Ue.z*N.transmissionResolutionScale,Ue.w*N.transmissionResolutionScale);const Ge=N.getRenderTarget(),ze=N.getActiveCubeFace(),$e=N.getActiveMipmapLevel();N.setRenderTarget(Ae),N.getClearColor(I),W=N.getClearAlpha(),W<1&&N.setClearColor(16777215,.5),N.clear(),ut&&Re.render(le);const nt=N.toneMapping;N.toneMapping=cr;const Ze=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),A.setupLightsView(ce),ge===!0&&Ye.setGlobalState(N.clippingPlanes,ce),Pi(U,le,ce),lt.updateMultisampleRenderTarget(Ae),lt.updateRenderTargetMipmap(Ae),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let Nt=0,Mt=Q.length;Nt<Mt;Nt++){const Yt=Q[Nt],{object:It,geometry:Je,material:qt,group:yt}=Yt;if(qt.side===si&&It.layers.test(ce.layers)){const Hn=qt.side;qt.side=Cn,qt.needsUpdate=!0,Kr(It,le,ce,Je,qt,yt),qt.side=Hn,qt.needsUpdate=!0,xt=!0}}xt===!0&&(lt.updateMultisampleRenderTarget(Ae),lt.updateRenderTargetMipmap(Ae))}N.setRenderTarget(Ge,ze,$e),N.setClearColor(I,W),Ze!==void 0&&(ce.viewport=Ze),N.toneMapping=nt}function Pi(U,Q,le){const ce=Q.isScene===!0?Q.overrideMaterial:null;for(let $=0,Ae=U.length;$<Ae;$++){const Ue=U[$],{object:Ge,geometry:ze,group:$e}=Ue;let nt=Ue.material;nt.allowOverride===!0&&ce!==null&&(nt=ce),Ge.layers.test(le.layers)&&Kr(Ge,Q,le,ze,nt,$e)}}function Kr(U,Q,le,ce,$,Ae){U.onBeforeRender(N,Q,le,ce,$,Ae),U.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),$.onBeforeRender(N,Q,le,ce,U,Ae),$.transparent===!0&&$.side===si&&$.forceSinglePass===!1?($.side=Cn,$.needsUpdate=!0,N.renderBufferDirect(le,Q,ce,$,U,Ae),$.side=Ea,$.needsUpdate=!0,N.renderBufferDirect(le,Q,ce,$,U,Ae),$.side=si):N.renderBufferDirect(le,Q,ce,$,U,Ae),U.onAfterRender(N,Q,le,ce,$,Ae)}function Mi(U,Q,le){Q.isScene!==!0&&(Q=Qt);const ce=je.get(U),$=A.state.lights,Ae=A.state.shadowsArray,Ue=$.state.version,Ge=fe.getParameters(U,$.state,Ae,Q,le),ze=fe.getProgramCacheKey(Ge);let $e=ce.programs;ce.environment=U.isMeshStandardMaterial?Q.environment:null,ce.fog=Q.fog,ce.envMap=(U.isMeshStandardMaterial?T:B).get(U.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&U.envMap===null?Q.environmentRotation:U.envMapRotation,$e===void 0&&(U.addEventListener("dispose",st),$e=new Map,ce.programs=$e);let nt=$e.get(ze);if(nt!==void 0){if(ce.currentProgram===nt&&ce.lightsStateVersion===Ue)return Ra(U,Ge),nt}else Ge.uniforms=fe.getUniforms(U),U.onBeforeCompile(Ge,N),nt=fe.acquireProgram(Ge,ze),$e.set(ze,nt),ce.uniforms=Ge.uniforms;const Ze=ce.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Ze.clippingPlanes=Ye.uniform),Ra(U,Ge),ce.needsLights=Rl(U),ce.lightsStateVersion=Ue,ce.needsLights&&(Ze.ambientLightColor.value=$.state.ambient,Ze.lightProbe.value=$.state.probe,Ze.directionalLights.value=$.state.directional,Ze.directionalLightShadows.value=$.state.directionalShadow,Ze.spotLights.value=$.state.spot,Ze.spotLightShadows.value=$.state.spotShadow,Ze.rectAreaLights.value=$.state.rectArea,Ze.ltc_1.value=$.state.rectAreaLTC1,Ze.ltc_2.value=$.state.rectAreaLTC2,Ze.pointLights.value=$.state.point,Ze.pointLightShadows.value=$.state.pointShadow,Ze.hemisphereLights.value=$.state.hemi,Ze.directionalShadowMap.value=$.state.directionalShadowMap,Ze.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ze.spotShadowMap.value=$.state.spotShadowMap,Ze.spotLightMatrix.value=$.state.spotLightMatrix,Ze.spotLightMap.value=$.state.spotLightMap,Ze.pointShadowMap.value=$.state.pointShadowMap,Ze.pointShadowMatrix.value=$.state.pointShadowMatrix),ce.currentProgram=nt,ce.uniformsList=null,nt}function Zi(U){if(U.uniformsList===null){const Q=U.currentProgram.getUniforms();U.uniformsList=du.seqWithValue(Q.seq,U.uniforms)}return U.uniformsList}function Ra(U,Q){const le=je.get(U);le.outputColorSpace=Q.outputColorSpace,le.batching=Q.batching,le.batchingColor=Q.batchingColor,le.instancing=Q.instancing,le.instancingColor=Q.instancingColor,le.instancingMorph=Q.instancingMorph,le.skinning=Q.skinning,le.morphTargets=Q.morphTargets,le.morphNormals=Q.morphNormals,le.morphColors=Q.morphColors,le.morphTargetsCount=Q.morphTargetsCount,le.numClippingPlanes=Q.numClippingPlanes,le.numIntersection=Q.numClipIntersection,le.vertexAlphas=Q.vertexAlphas,le.vertexTangents=Q.vertexTangents,le.toneMapping=Q.toneMapping}function wa(U,Q,le,ce,$){Q.isScene!==!0&&(Q=Qt),lt.resetTextureUnits();const Ae=Q.fog,Ue=ce.isMeshStandardMaterial?Q.environment:null,Ge=C===null?N.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:hr,ze=(ce.isMeshStandardMaterial?T:B).get(ce.envMap||Ue),$e=ce.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,nt=!!le.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Ze=!!le.morphAttributes.position,xt=!!le.morphAttributes.normal,Nt=!!le.morphAttributes.color;let Mt=cr;ce.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Mt=N.toneMapping);const Yt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,It=Yt!==void 0?Yt.length:0,Je=je.get(ce),qt=A.state.lights;if(ge===!0&&(be===!0||U!==j)){const En=U===j&&ce.id===H;Ye.setState(ce,U,En)}let yt=!1;ce.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==qt.state.version||Je.outputColorSpace!==Ge||$.isBatchedMesh&&Je.batching===!1||!$.isBatchedMesh&&Je.batching===!0||$.isBatchedMesh&&Je.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Je.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Je.instancing===!1||!$.isInstancedMesh&&Je.instancing===!0||$.isSkinnedMesh&&Je.skinning===!1||!$.isSkinnedMesh&&Je.skinning===!0||$.isInstancedMesh&&Je.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Je.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Je.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Je.instancingMorph===!1&&$.morphTexture!==null||Je.envMap!==ze||ce.fog===!0&&Je.fog!==Ae||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Ye.numPlanes||Je.numIntersection!==Ye.numIntersection)||Je.vertexAlphas!==$e||Je.vertexTangents!==nt||Je.morphTargets!==Ze||Je.morphNormals!==xt||Je.morphColors!==Nt||Je.toneMapping!==Mt||Je.morphTargetsCount!==It)&&(yt=!0):(yt=!0,Je.__version=ce.version);let Hn=Je.currentProgram;yt===!0&&(Hn=Mi(ce,Q,$));let xn=!1,Nn=!1,Da=!1;const Xt=Hn.getUniforms(),nn=Je.uniforms;if(Pe.useProgram(Hn.program)&&(xn=!0,Nn=!0,Da=!0),ce.id!==H&&(H=ce.id,Nn=!0),xn||j!==U){Pe.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),Xt.setValue(V,"projectionMatrix",U.projectionMatrix),Xt.setValue(V,"viewMatrix",U.matrixWorldInverse);const an=Xt.map.cameraPosition;an!==void 0&&an.setValue(V,Xe.setFromMatrixPosition(U.matrixWorld)),gt.logarithmicDepthBuffer&&Xt.setValue(V,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Xt.setValue(V,"isOrthographic",U.isOrthographicCamera===!0),j!==U&&(j=U,Nn=!0,Da=!0)}if($.isSkinnedMesh){Xt.setOptional(V,$,"bindMatrix"),Xt.setOptional(V,$,"bindMatrixInverse");const En=$.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Xt.setValue(V,"boneTexture",En.boneTexture,lt))}$.isBatchedMesh&&(Xt.setOptional(V,$,"batchingTexture"),Xt.setValue(V,"batchingTexture",$._matricesTexture,lt),Xt.setOptional(V,$,"batchingIdTexture"),Xt.setValue(V,"batchingIdTexture",$._indirectTexture,lt),Xt.setOptional(V,$,"batchingColorTexture"),$._colorsTexture!==null&&Xt.setValue(V,"batchingColorTexture",$._colorsTexture,lt));const Gn=le.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&Qe.update($,le,Hn),(Nn||Je.receiveShadow!==$.receiveShadow)&&(Je.receiveShadow=$.receiveShadow,Xt.setValue(V,"receiveShadow",$.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(nn.envMap.value=ze,nn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&Q.environment!==null&&(nn.envMapIntensity.value=Q.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=FR()),Nn&&(Xt.setValue(V,"toneMappingExposure",N.toneMappingExposure),Je.needsLights&&hn(nn,Da),Ae&&ce.fog===!0&&Ie.refreshFogUniforms(nn,Ae),Ie.refreshMaterialUniforms(nn,ce,O,pe,A.state.transmissionRenderTarget[U.id]),du.upload(V,Zi(Je),nn,lt)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(du.upload(V,Zi(Je),nn,lt),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Xt.setValue(V,"center",$.center),Xt.setValue(V,"modelViewMatrix",$.modelViewMatrix),Xt.setValue(V,"normalMatrix",$.normalMatrix),Xt.setValue(V,"modelMatrix",$.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const En=ce.uniformsGroups;for(let an=0,ro=En.length;an<ro;an++){const Bi=En[an];Ne.update(Bi,Hn),Ne.bind(Bi,Hn)}}return Hn}function hn(U,Q){U.ambientLightColor.needsUpdate=Q,U.lightProbe.needsUpdate=Q,U.directionalLights.needsUpdate=Q,U.directionalLightShadows.needsUpdate=Q,U.pointLights.needsUpdate=Q,U.pointLightShadows.needsUpdate=Q,U.spotLights.needsUpdate=Q,U.spotLightShadows.needsUpdate=Q,U.rectAreaLights.needsUpdate=Q,U.hemisphereLights.needsUpdate=Q}function Rl(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(U,Q,le){const ce=je.get(U);ce.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),je.get(U.texture).__webglTexture=Q,je.get(U.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:le,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,Q){const le=je.get(U);le.__webglFramebuffer=Q,le.__useDefaultFramebuffer=Q===void 0};const wl=V.createFramebuffer();this.setRenderTarget=function(U,Q=0,le=0){C=U,q=Q,D=le;let ce=!0,$=null,Ae=!1,Ue=!1;if(U){const ze=je.get(U);if(ze.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(V.FRAMEBUFFER,null),ce=!1;else if(ze.__webglFramebuffer===void 0)lt.setupRenderTarget(U);else if(ze.__hasExternalTextures)lt.rebindTextures(U,je.get(U.texture).__webglTexture,je.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const Ze=U.depthTexture;if(ze.__boundDepthTexture!==Ze){if(Ze!==null&&je.has(Ze)&&(U.width!==Ze.image.width||U.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(U)}}const $e=U.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ue=!0);const nt=je.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(nt[Q])?$=nt[Q][le]:$=nt[Q],Ae=!0):U.samples>0&&lt.useMultisampledRTT(U)===!1?$=je.get(U).__webglMultisampledFramebuffer:Array.isArray(nt)?$=nt[le]:$=nt,ne.copy(U.viewport),ee.copy(U.scissor),K=U.scissorTest}else ne.copy(Me).multiplyScalar(O).floor(),ee.copy(De).multiplyScalar(O).floor(),K=We;if(le!==0&&($=wl),Pe.bindFramebuffer(V.FRAMEBUFFER,$)&&ce&&Pe.drawBuffers(U,$),Pe.viewport(ne),Pe.scissor(ee),Pe.setScissorTest(K),Ae){const ze=je.get(U.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ze.__webglTexture,le)}else if(Ue){const ze=Q;for(let $e=0;$e<U.textures.length;$e++){const nt=je.get(U.textures[$e]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+$e,nt.__webglTexture,le,ze)}}else if(U!==null&&le!==0){const ze=je.get(U.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ze.__webglTexture,le)}H=-1},this.readRenderTargetPixels=function(U,Q,le,ce,$,Ae,Ue,Ge=0){if(!(U&&U.isWebGLRenderTarget)){cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=je.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze){Pe.bindFramebuffer(V.FRAMEBUFFER,ze);try{const $e=U.textures[Ge],nt=$e.format,Ze=$e.type;if(!gt.textureFormatReadable(nt)){cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(Ze)){cn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=U.width-ce&&le>=0&&le<=U.height-$&&(U.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ge),V.readPixels(Q,le,ce,$,rt.convert(nt),rt.convert(Ze),Ae))}finally{const $e=C!==null?je.get(C).__webglFramebuffer:null;Pe.bindFramebuffer(V.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(U,Q,le,ce,$,Ae,Ue,Ge=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=je.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze)if(Q>=0&&Q<=U.width-ce&&le>=0&&le<=U.height-$){Pe.bindFramebuffer(V.FRAMEBUFFER,ze);const $e=U.textures[Ge],nt=$e.format,Ze=$e.type;if(!gt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,xt),V.bufferData(V.PIXEL_PACK_BUFFER,Ae.byteLength,V.STREAM_READ),U.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ge),V.readPixels(Q,le,ce,$,rt.convert(nt),rt.convert(Ze),0);const Nt=C!==null?je.get(C).__webglFramebuffer:null;Pe.bindFramebuffer(V.FRAMEBUFFER,Nt);const Mt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await vE(V,Mt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,xt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ae),V.deleteBuffer(xt),V.deleteSync(Mt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,Q=null,le=0){const ce=Math.pow(2,-le),$=Math.floor(U.image.width*ce),Ae=Math.floor(U.image.height*ce),Ue=Q!==null?Q.x:0,Ge=Q!==null?Q.y:0;lt.setTexture2D(U,0),V.copyTexSubImage2D(V.TEXTURE_2D,le,0,0,Ue,Ge,$,Ae),Pe.unbindTexture()};const Ki=V.createFramebuffer(),Ca=V.createFramebuffer();this.copyTextureToTexture=function(U,Q,le=null,ce=null,$=0,Ae=null){Ae===null&&($!==0?(gl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=$,$=0):Ae=0);let Ue,Ge,ze,$e,nt,Ze,xt,Nt,Mt;const Yt=U.isCompressedTexture?U.mipmaps[Ae]:U.image;if(le!==null)Ue=le.max.x-le.min.x,Ge=le.max.y-le.min.y,ze=le.isBox3?le.max.z-le.min.z:1,$e=le.min.x,nt=le.min.y,Ze=le.isBox3?le.min.z:0;else{const Gn=Math.pow(2,-$);Ue=Math.floor(Yt.width*Gn),Ge=Math.floor(Yt.height*Gn),U.isDataArrayTexture?ze=Yt.depth:U.isData3DTexture?ze=Math.floor(Yt.depth*Gn):ze=1,$e=0,nt=0,Ze=0}ce!==null?(xt=ce.x,Nt=ce.y,Mt=ce.z):(xt=0,Nt=0,Mt=0);const It=rt.convert(Q.format),Je=rt.convert(Q.type);let qt;Q.isData3DTexture?(lt.setTexture3D(Q,0),qt=V.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(lt.setTexture2DArray(Q,0),qt=V.TEXTURE_2D_ARRAY):(lt.setTexture2D(Q,0),qt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Q.unpackAlignment);const yt=V.getParameter(V.UNPACK_ROW_LENGTH),Hn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),xn=V.getParameter(V.UNPACK_SKIP_PIXELS),Nn=V.getParameter(V.UNPACK_SKIP_ROWS),Da=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Yt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Yt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,$e),V.pixelStorei(V.UNPACK_SKIP_ROWS,nt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ze);const Xt=U.isDataArrayTexture||U.isData3DTexture,nn=Q.isDataArrayTexture||Q.isData3DTexture;if(U.isDepthTexture){const Gn=je.get(U),En=je.get(Q),an=je.get(Gn.__renderTarget),ro=je.get(En.__renderTarget);Pe.bindFramebuffer(V.READ_FRAMEBUFFER,an.__webglFramebuffer),Pe.bindFramebuffer(V.DRAW_FRAMEBUFFER,ro.__webglFramebuffer);for(let Bi=0;Bi<ze;Bi++)Xt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,je.get(U).__webglTexture,$,Ze+Bi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,je.get(Q).__webglTexture,Ae,Mt+Bi)),V.blitFramebuffer($e,nt,Ue,Ge,xt,Nt,Ue,Ge,V.DEPTH_BUFFER_BIT,V.NEAREST);Pe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if($!==0||U.isRenderTargetTexture||je.has(U)){const Gn=je.get(U),En=je.get(Q);Pe.bindFramebuffer(V.READ_FRAMEBUFFER,Ki),Pe.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ca);for(let an=0;an<ze;an++)Xt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Gn.__webglTexture,$,Ze+an):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Gn.__webglTexture,$),nn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,En.__webglTexture,Ae,Mt+an):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,En.__webglTexture,Ae),$!==0?V.blitFramebuffer($e,nt,Ue,Ge,xt,Nt,Ue,Ge,V.COLOR_BUFFER_BIT,V.NEAREST):nn?V.copyTexSubImage3D(qt,Ae,xt,Nt,Mt+an,$e,nt,Ue,Ge):V.copyTexSubImage2D(qt,Ae,xt,Nt,$e,nt,Ue,Ge);Pe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else nn?U.isDataTexture||U.isData3DTexture?V.texSubImage3D(qt,Ae,xt,Nt,Mt,Ue,Ge,ze,It,Je,Yt.data):Q.isCompressedArrayTexture?V.compressedTexSubImage3D(qt,Ae,xt,Nt,Mt,Ue,Ge,ze,It,Yt.data):V.texSubImage3D(qt,Ae,xt,Nt,Mt,Ue,Ge,ze,It,Je,Yt):U.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ae,xt,Nt,Ue,Ge,It,Je,Yt.data):U.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ae,xt,Nt,Yt.width,Yt.height,It,Yt.data):V.texSubImage2D(V.TEXTURE_2D,Ae,xt,Nt,Ue,Ge,It,Je,Yt);V.pixelStorei(V.UNPACK_ROW_LENGTH,yt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Hn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,xn),V.pixelStorei(V.UNPACK_SKIP_ROWS,Nn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Da),Ae===0&&Q.generateMipmaps&&V.generateMipmap(qt),Pe.unbindTexture()},this.initRenderTarget=function(U){je.get(U).__webglFramebuffer===void 0&&lt.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?lt.setTextureCube(U,0):U.isData3DTexture?lt.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?lt.setTexture2DArray(U,0):lt.setTexture2D(U,0),Pe.unbindTexture()},this.resetState=function(){q=0,D=0,C=null,Pe.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}/**
 * postprocessing v6.38.0 build Sat Nov 08 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */var vd=1/1e3,HR=1e3,GR=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(i){typeof document<"u"&&document.hidden!==void 0&&(i?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=i)}get delta(){return this._delta*vd}get fixedDelta(){return this._fixedDelta*vd}set fixedDelta(i){this._fixedDelta=i*HR}get elapsed(){return this._elapsed*vd}update(i){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(i!==void 0?i:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(i){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},VR=(()=>{const i=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new Aa;return t.setAttribute("position",new Si(i,3)),t.setAttribute("uv",new Si(e,2)),t})(),pr=class Sp{static get fullscreenGeometry(){return VR}constructor(e="Pass",t=new _p,r=new zp){this.name=e,this.renderer=null,this.scene=t,this.camera=r,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new qi(Sp.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new _p),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=yl){}render(e,t,r,o,l){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,r){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof Oi||t instanceof to||t instanceof Kn||t instanceof Sp)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},kR=class extends pr{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(i,e,t,r,o){const l=i.state.buffers.stencil;l.setLocked(!1),l.setTest(!1)}},XR=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,WR="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",qR=class extends ui{constructor(){super({name:"CopyMaterial",defines:{DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new on(null),depthBuffer:new on(null),channelWeights:new on(null),opacity:new on(1)},blending:Ni,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:XR,vertexShader:WR}),this.depthFunc=_u}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(i){const e=i!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=i}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(i){const e=i!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=i}set depthPacking(i){this.defines.DEPTH_PACKING=i.toFixed(0),this.needsUpdate=!0}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(i){i!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=i):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(i){this.uniforms.inputBuffer.value=i}getOpacity(i){return this.uniforms.opacity.value}setOpacity(i){this.uniforms.opacity.value=i}},jR=class extends pr{constructor(i,e=!0){super("CopyPass"),this.fullscreenMaterial=new qR,this.needsSwap=!1,this.renderTarget=i,i===void 0&&(this.renderTarget=new Oi(1,1,{minFilter:Dn,magFilter:Dn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(i){this.autoResize=i}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(i){this.autoResize=i}render(i,e,t,r,o){this.fullscreenMaterial.inputBuffer=e.texture,i.setRenderTarget(this.renderToScreen?null:this.renderTarget),i.render(this.scene,this.camera)}setSize(i,e){this.autoResize&&this.renderTarget.setSize(i,e)}initialize(i,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==ci?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":i!==null&&i.outputColorSpace===ln&&(this.renderTarget.texture.colorSpace=ln))}},Ev=new Pt,Z_=class extends pr{constructor(i=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=i,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(i,e,t){this.color=i,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(i){this.overrideClearColor=i}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(i){this.overrideClearAlpha=i}render(i,e,t,r,o){const l=this.overrideClearColor,u=this.overrideClearAlpha,f=i.getClearAlpha(),d=l!==null,p=u>=0;d?(i.getClearColor(Ev),i.setClearColor(l,p?u:f)):p&&i.setClearAlpha(u),i.setRenderTarget(this.renderToScreen?null:e),i.clear(this.color,this.depth,this.stencil),d?i.setClearColor(Ev,f):p&&i.setClearAlpha(f)}},YR=class extends pr{constructor(i,e){super("MaskPass",i,e),this.needsSwap=!1,this.clearPass=new Z_(!1,!1,!0),this.inverse=!1}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get inverted(){return this.inverse}set inverted(i){this.inverse=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(i){this.inverted=i}render(i,e,t,r,o){const l=i.getContext(),u=i.state.buffers,f=this.scene,d=this.camera,p=this.clearPass,g=this.inverted?0:1,x=1-g;u.color.setMask(!1),u.depth.setMask(!1),u.color.setLocked(!0),u.depth.setLocked(!0),u.stencil.setTest(!0),u.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),u.stencil.setFunc(l.ALWAYS,g,4294967295),u.stencil.setClear(x),u.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?p.render(i,null):(p.render(i,e),p.render(i,t))),this.renderToScreen?(i.setRenderTarget(null),i.render(f,d)):(i.setRenderTarget(e),i.render(f,d),i.setRenderTarget(t),i.render(f,d)),u.color.setLocked(!1),u.depth.setLocked(!1),u.stencil.setLocked(!1),u.stencil.setFunc(l.EQUAL,1,4294967295),u.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),u.stencil.setLocked(!0)}},Tv=class{constructor(i=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:r=0,frameBufferType:o}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,o,r),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new jR,this.depthTexture=null,this.passes=[],this.timer=new GR,this.autoRenderToScreen=!0,this.setRenderer(i)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(i){const e=this.inputBuffer,t=this.multisampling;t>0&&i>0?(this.inputBuffer.samples=i,this.outputBuffer.samples=i,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==i&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,i),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(i){if(this.renderer=i,i!==null){const e=i.getSize(new _t),t=i.getContext().getContextAttributes().alpha,r=this.inputBuffer.texture.type;r===ci&&i.outputColorSpace===ln&&(this.inputBuffer.texture.colorSpace=ln,this.outputBuffer.texture.colorSpace=ln,this.inputBuffer.dispose(),this.outputBuffer.dispose()),i.autoClear=!1,this.setSize(e.width,e.height);for(const o of this.passes)o.initialize(i,t,r)}}replaceRenderer(i,e=!0){const t=this.renderer,r=t.domElement.parentNode;return this.setRenderer(i),e&&r!==null&&(r.removeChild(t.domElement),r.appendChild(i.domElement)),t}createDepthTexture(){const i=this.depthTexture=new Fp;return this.inputBuffer.depthTexture=i,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(i.format=Qs,i.type=Ks):i.type=fr,i}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const i of this.passes)i.setDepthTexture(null)}}createBuffer(i,e,t,r){const o=this.renderer,l=o===null?new _t:o.getDrawingBufferSize(new _t),u={minFilter:Dn,magFilter:Dn,stencilBuffer:e,depthBuffer:i,type:t},f=new Oi(l.width,l.height,u);return r>0&&(f.samples=r),t===ci&&o!==null&&o.outputColorSpace===ln&&(f.texture.colorSpace=ln),f.texture.name="EffectComposer.Buffer",f.texture.generateMipmaps=!1,f}setMainScene(i){for(const e of this.passes)e.mainScene=i}setMainCamera(i){for(const e of this.passes)e.mainCamera=i}addPass(i,e){const t=this.passes,r=this.renderer,o=r.getDrawingBufferSize(new _t),l=r.getContext().getContextAttributes().alpha,u=this.inputBuffer.texture.type;if(i.setRenderer(r),i.setSize(o.width,o.height),i.initialize(r,l,u),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),i.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,i):t.push(i),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),i.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const f=this.createDepthTexture();for(i of t)i.setDepthTexture(f)}else i.setDepthTexture(this.depthTexture)}removePass(i){const e=this.passes,t=e.indexOf(i);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const l=(f,d)=>f||d.needsDepthTexture;e.reduce(l,!1)||(i.getDepthTexture()===this.depthTexture&&i.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(i.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const i=this.passes;this.deleteDepthTexture(),i.length>0&&(this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!1),this.passes=[])}render(i){const e=this.renderer,t=this.copyPass;let r=this.inputBuffer,o=this.outputBuffer,l=!1,u,f,d;i===void 0&&(this.timer.update(),i=this.timer.getDelta());for(const p of this.passes)p.enabled&&(p.render(e,r,o,i,l),p.needsSwap&&(l&&(t.renderToScreen=p.renderToScreen,u=e.getContext(),f=e.state.buffers.stencil,f.setFunc(u.NOTEQUAL,1,4294967295),t.render(e,r,o,i,l),f.setFunc(u.EQUAL,1,4294967295)),d=r,r=o,o=d),p instanceof YR?l=!0:p instanceof kR&&(l=!1))}setSize(i,e,t){const r=this.renderer,o=r.getSize(new _t);(i===void 0||e===void 0)&&(i=o.width,e=o.height),(o.width!==i||o.height!==e)&&r.setSize(i,e,t);const l=r.getDrawingBufferSize(new _t);this.inputBuffer.setSize(l.width,l.height),this.outputBuffer.setSize(l.width,l.height);for(const u of this.passes)u.setSize(l.width,l.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const i of this.passes)i.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),pr.fullscreenGeometry.dispose()}},qr={NONE:0,DEPTH:1,CONVOLUTION:2},Dt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},ZR=class{constructor(){this.shaderParts=new Map([[Dt.FRAGMENT_HEAD,null],[Dt.FRAGMENT_MAIN_UV,null],[Dt.FRAGMENT_MAIN_IMAGE,null],[Dt.VERTEX_HEAD,null],[Dt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=qr.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=hr}},_d=!1,Av=class{constructor(i=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(i),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case si:t=this.materialsFlatShadedDoubleSide;break;case Cn:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case si:t=this.materialsDoubleSide;break;case Cn:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(i){if(!(i instanceof ui))return i.clone();const e=i.uniforms,t=new Map;for(const o in e){const l=e[o].value;l.isRenderTargetTexture&&(e[o].value=null,t.set(o,l))}const r=i.clone();for(const o of t)e[o[0]].value=o[1],r.uniforms[o[0]].value=o[1];return r}setMaterial(i){if(this.disposeMaterials(),this.material=i,i!==null){const e=this.materials=[this.cloneMaterial(i),this.cloneMaterial(i),this.cloneMaterial(i)];for(const t of e)t.uniforms=Object.assign({},i.uniforms),t.side=Ea;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const r=this.cloneMaterial(t);return r.uniforms=Object.assign({},i.uniforms),r.side=Cn,r}),this.materialsDoubleSide=e.map(t=>{const r=this.cloneMaterial(t);return r.uniforms=Object.assign({},i.uniforms),r.side=si,r}),this.materialsFlatShaded=e.map(t=>{const r=this.cloneMaterial(t);return r.uniforms=Object.assign({},i.uniforms),r.flatShading=!0,r}),this.materialsFlatShadedBackSide=e.map(t=>{const r=this.cloneMaterial(t);return r.uniforms=Object.assign({},i.uniforms),r.flatShading=!0,r.side=Cn,r}),this.materialsFlatShadedDoubleSide=e.map(t=>{const r=this.cloneMaterial(t);return r.uniforms=Object.assign({},i.uniforms),r.flatShading=!0,r.side=si,r})}}render(i,e,t){const r=i.shadowMap.enabled;if(i.shadowMap.enabled=!1,_d){const o=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),i.render(e,t);for(const l of o)l[0].material=l[1];this.meshCount!==o.size&&o.clear()}else{const o=e.overrideMaterial;e.overrideMaterial=this.material,i.render(e,t),e.overrideMaterial=o}i.shadowMap.enabled=r}disposeMaterials(){if(this.material!==null){const i=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of i)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return _d}static set workaroundEnabled(i){_d=i}},At={ADD:0,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},KR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb,y.a),y.a*opacity);}",QR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb)*0.5,y.a),y.a*opacity);}",$R="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.xy,xHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",JR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/b)),vec3(1.0),step(1.0,a));return mix(x,vec4(z,y.a),y.a*opacity);}",ew="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(x,vec4(z,y.a),y.a*opacity);}",tw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb,y.rgb),y.a),y.a*opacity);}",nw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(abs(x.rgb-y.rgb),y.a),y.a*opacity);}",iw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb/max(y.rgb,1e-12),y.a),y.a*opacity);}",aw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb-2.0*x.rgb*y.rgb),y.a),y.a*opacity);}",rw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=min(x.rgb,1.0);vec3 b=min(y.rgb,1.0);vec3 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(x,vec4(z,y.a),y.a*opacity);}",sw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(step(1.0,x.rgb+y.rgb),y.a),y.a*opacity);}",ow="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.x,xHSL.yz));return mix(x,vec4(z,y.a),y.a*opacity);}",lw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-y.rgb,y.a),y.a*opacity);}",cw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(y.rgb*(1.0-x.rgb),y.a),y.a*opacity);}",uw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb,y.rgb),y.a),y.a*opacity);}",fw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(y.rgb+x.rgb-1.0,0.0,1.0),y.a),y.a*opacity);}",hw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb+y.rgb,1.0),y.a),y.a*opacity);}",dw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(2.0*y.rgb+x.rgb-1.0,0.0,1.0),y.a),y.a*opacity);}",pw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.xy,yHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",mw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb*y.rgb,y.a),y.a*opacity);}",gw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-abs(1.0-x.rgb-y.rgb),y.a),y.a*opacity);}",xw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,y.a*opacity);}",vw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(2.0*y.rgb*x.rgb,1.0-2.0*(1.0-y.rgb)*(1.0-x.rgb),step(0.5,x.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",_w="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 y2=2.0*y.rgb;vec3 z=mix(mix(y2,x.rgb,step(0.5*x.rgb,y.rgb)),max(y2-1.0,vec3(0.0)),step(x.rgb,y2-1.0));return mix(x,vec4(z,y.a),y.a*opacity);}",yw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(min(x.rgb*x.rgb/max(1.0-y.rgb,1e-12),1.0),y.rgb,step(1.0,y.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",Sw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.x,yHSL.y,xHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",bw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb-min(x.rgb*y.rgb,1.0),y.a),y.a*opacity);}",Mw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb;vec3 b=y.rgb;vec3 y2=2.0*b;vec3 w=step(0.5,b);vec3 c=a-(1.0-y2)*a*(1.0-a);vec3 d=mix(a+(y2-1.0)*(sqrt(a)-a),a+(y2-1.0)*a*((16.0*a-12.0)*a+3.0),w*(1.0-step(0.25,a)));vec3 z=mix(c,d,w);return mix(x,vec4(z,y.a),y.a*opacity);}",Ew="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",Tw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb+y.rgb-1.0,0.0),y.a),y.a*opacity);}",Aw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(max(1.0-min((1.0-x.rgb)/(2.0*y.rgb),1.0),0.0),min(x.rgb/(2.0*(1.0-y.rgb)),1.0),step(0.5,y.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",Rw=new Map([[At.ADD,KR],[At.AVERAGE,QR],[At.COLOR,$R],[At.COLOR_BURN,JR],[At.COLOR_DODGE,ew],[At.DARKEN,tw],[At.DIFFERENCE,nw],[At.DIVIDE,iw],[At.DST,null],[At.EXCLUSION,aw],[At.HARD_LIGHT,rw],[At.HARD_MIX,sw],[At.HUE,ow],[At.INVERT,lw],[At.INVERT_RGB,cw],[At.LIGHTEN,uw],[At.LINEAR_BURN,fw],[At.LINEAR_DODGE,hw],[At.LINEAR_LIGHT,dw],[At.LUMINOSITY,pw],[At.MULTIPLY,mw],[At.NEGATION,gw],[At.NORMAL,xw],[At.OVERLAY,vw],[At.PIN_LIGHT,_w],[At.REFLECT,yw],[At.SATURATION,Sw],[At.SCREEN,bw],[At.SOFT_LIGHT,Mw],[At.SRC,Ew],[At.SUBTRACT,Tw],[At.VIVID_LIGHT,Aw]]),ww=class extends dr{constructor(i,e=1){super(),this._blendFunction=i,this.opacity=new on(e)}getOpacity(){return this.opacity.value}setOpacity(i){this.opacity.value=i}get blendFunction(){return this._blendFunction}set blendFunction(i){this._blendFunction=i,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(i){this.blendFunction=i}getShaderCode(){return Rw.get(this.blendFunction)}},K_=class extends dr{constructor(i,e,{attributes:t=qr.NONE,blendFunction:r=At.NORMAL,defines:o=new Map,uniforms:l=new Map,extensions:u=null,vertexShader:f=null}={}){super(),this.name=i,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=f,this.defines=o,this.uniforms=l,this.extensions=u,this.blendMode=new ww(r),this.blendMode.addEventListener("change",d=>this.setChanged()),this._inputColorSpace=hr,this._outputColorSpace=Xi}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(i){this._inputColorSpace=i,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(i){this._outputColorSpace=i,this.setChanged()}set mainScene(i){}set mainCamera(i){}getName(){return this.name}setRenderer(i){this.renderer=i}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(i){this.attributes=i,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(i){this.fragmentShader=i,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(i){this.vertexShader=i,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(i,e=yl){}update(i,e,t){}setSize(i,e){}initialize(i,e,t){}dispose(){for(const i of Object.keys(this)){const e=this[i];(e instanceof Oi||e instanceof to||e instanceof Kn||e instanceof pr)&&this[i].dispose()}}},Rv=class extends pr{constructor(i,e,t=null){super("RenderPass",i,e),this.needsSwap=!1,this.clearPass=new Z_,this.overrideMaterialManager=t===null?null:new Av(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get renderToScreen(){return super.renderToScreen}set renderToScreen(i){super.renderToScreen=i,this.clearPass.renderToScreen=i}get overrideMaterial(){const i=this.overrideMaterialManager;return i!==null?i.material:null}set overrideMaterial(i){const e=this.overrideMaterialManager;i!==null?e!==null?e.setMaterial(i):this.overrideMaterialManager=new Av(i):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(i){this.overrideMaterial=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getSelection(){return this.selection}setSelection(i){this.selection=i}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(i){this.ignoreBackground=i}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(i){this.skipShadowMapUpdate=i}getClearPass(){return this.clearPass}render(i,e,t,r,o){const l=this.scene,u=this.camera,f=this.selection,d=u.layers.mask,p=l.background,g=i.shadowMap.autoUpdate,x=this.renderToScreen?null:e;f!==null&&u.layers.set(f.getLayer()),this.skipShadowMapUpdate&&(i.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(l.background=null),this.clearPass.enabled&&this.clearPass.render(i,e),i.setRenderTarget(x),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(i,l,u):i.render(l,u),u.layers.mask=d,l.background=p,i.shadowMap.autoUpdate=g}},Cw=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,Dw="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",Uw=class extends ui{constructor(i,e,t,r,o=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Au.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new on(null),depthBuffer:new on(null),resolution:new on(new _t),texelSize:new on(new _t),cameraNear:new on(.3),cameraFar:new on(1e3),aspect:new on(1),time:new on(0)},blending:Ni,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:o}),i&&this.setShaderParts(i),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(r)}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(i){this.uniforms.depthBuffer.value=i}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(i){this.defines.DEPTH_PACKING=i.toFixed(0),this.needsUpdate=!0}setDepthBuffer(i,e=yl){this.depthBuffer=i,this.depthPacking=e}setShaderData(i){this.setShaderParts(i.shaderParts),this.setDefines(i.defines),this.setUniforms(i.uniforms),this.setExtensions(i.extensions)}setShaderParts(i){return this.fragmentShader=Cw.replace(Dt.FRAGMENT_HEAD,i.get(Dt.FRAGMENT_HEAD)||"").replace(Dt.FRAGMENT_MAIN_UV,i.get(Dt.FRAGMENT_MAIN_UV)||"").replace(Dt.FRAGMENT_MAIN_IMAGE,i.get(Dt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=Dw.replace(Dt.VERTEX_HEAD,i.get(Dt.VERTEX_HEAD)||"").replace(Dt.VERTEX_MAIN_SUPPORT,i.get(Dt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(i){for(const e of i.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(i){for(const e of i.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(i){this.extensions={};for(const e of i)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(i){this.encodeOutput!==i&&(i?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(i){return this.encodeOutput}setOutputEncodingEnabled(i){this.encodeOutput=i}get time(){return this.uniforms.time.value}set time(i){this.uniforms.time.value=i}setDeltaTime(i){this.uniforms.time.value+=i}adoptCameraSettings(i){this.copyCameraSettings(i)}copyCameraSettings(i){i&&(this.uniforms.cameraNear.value=i.near,this.uniforms.cameraFar.value=i.far,i instanceof yi?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(i,e){const t=this.uniforms;t.resolution.value.set(i,e),t.texelSize.value.set(1/i,1/e),t.aspect.value=i/e}static get Section(){return Dt}};function wv(i,e,t){for(const r of e){const o="$1"+i+r.charAt(0).toUpperCase()+r.slice(1),l=new RegExp("([^\\.])(\\b"+r+"\\b)","g");for(const u of t.entries())u[1]!==null&&t.set(u[0],u[1].replace(l,o))}}function Nw(i,e,t){let r=e.getFragmentShader(),o=e.getVertexShader();const l=r!==void 0&&/mainImage/.test(r),u=r!==void 0&&/mainUv/.test(r);if(t.attributes|=e.getAttributes(),r===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(u&&(t.attributes&qr.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!l&&!u)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const f=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,d=t.shaderParts;let p=d.get(Dt.FRAGMENT_HEAD)||"",g=d.get(Dt.FRAGMENT_MAIN_UV)||"",x=d.get(Dt.FRAGMENT_MAIN_IMAGE)||"",v=d.get(Dt.VERTEX_HEAD)||"",y=d.get(Dt.VERTEX_MAIN_SUPPORT)||"";const b=new Set,M=new Set;if(u&&(g+=`	${i}MainUv(UV);
`,t.uvTransformation=!0),o!==null&&/mainSupport/.test(o)){const w=/mainSupport *\([\w\s]*?uv\s*?\)/.test(o);y+=`	${i}MainSupport(`,y+=w?`vUv);
`:`);
`;for(const A of o.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const L of A[1].split(/\s*,\s*/))t.varyings.add(L),b.add(L),M.add(L);for(const A of o.matchAll(f))M.add(A[1])}for(const w of r.matchAll(f))M.add(w[1]);for(const w of e.defines.keys())M.add(w.replace(/\([\w\s,]*\)/g,""));for(const w of e.uniforms.keys())M.add(w);M.delete("while"),M.delete("for"),M.delete("if"),e.uniforms.forEach((w,A)=>t.uniforms.set(i+A.charAt(0).toUpperCase()+A.slice(1),w)),e.defines.forEach((w,A)=>t.defines.set(i+A.charAt(0).toUpperCase()+A.slice(1),w));const S=new Map([["fragment",r],["vertex",o]]);wv(i,M,t.defines),wv(i,M,S),r=S.get("fragment"),o=S.get("vertex");const _=e.blendMode;if(t.blendModes.set(_.blendFunction,_),l){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(x+=e.inputColorSpace===ln?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Xi?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const w=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;x+=`${i}MainImage(color0, UV, `,(t.attributes&qr.DEPTH)!==0&&w.test(r)&&(x+="depth, ",t.readDepth=!0),x+=`color1);
	`;const A=i+"BlendOpacity";t.uniforms.set(A,_.opacity),x+=`color0 = blend${_.blendFunction}(color0, color1, ${A});

	`,p+=`uniform float ${A};

`}if(p+=r+`
`,o!==null&&(v+=o+`
`),d.set(Dt.FRAGMENT_HEAD,p),d.set(Dt.FRAGMENT_MAIN_UV,g),d.set(Dt.FRAGMENT_MAIN_IMAGE,x),d.set(Dt.VERTEX_HEAD,v),d.set(Dt.VERTEX_MAIN_SUPPORT,y),e.extensions!==null)for(const w of e.extensions)t.extensions.add(w)}}var Cv=class extends pr{constructor(i,...e){super("EffectPass"),this.fullscreenMaterial=new Uw(null,null,null,i),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(i){for(const e of this.effects)e.mainScene=i}set mainCamera(i){this.fullscreenMaterial.copyCameraSettings(i);for(const e of this.effects)e.mainCamera=i}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(i){this.fullscreenMaterial.encodeOutput=i}get dithering(){return this.fullscreenMaterial.dithering}set dithering(i){const e=this.fullscreenMaterial;e.dithering=i,e.needsUpdate=!0}setEffects(i){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=i.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const i=new ZR;let e=0;for(const u of this.effects)if(u.blendMode.blendFunction===At.DST)i.attributes|=u.getAttributes()&qr.DEPTH;else{if((i.attributes&u.getAttributes()&qr.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${u.name})`);Nw("e"+e++,u,i)}let t=i.shaderParts.get(Dt.FRAGMENT_HEAD),r=i.shaderParts.get(Dt.FRAGMENT_MAIN_IMAGE),o=i.shaderParts.get(Dt.FRAGMENT_MAIN_UV);const l=/\bblend\b/g;for(const u of i.blendModes.values())t+=u.getShaderCode().replace(l,`blend${u.blendFunction}`)+`
`;(i.attributes&qr.DEPTH)!==0?(i.readDepth&&(r=`float depth = readDepth(UV);

	`+r),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,i.colorSpace===ln&&(r+=`color0 = sRGBToLinear(color0);
	`),i.uvTransformation?(o=`vec2 transformedUv = vUv;
`+o,i.defines.set("UV","transformedUv")):i.defines.set("UV","vUv"),i.shaderParts.set(Dt.FRAGMENT_HEAD,t),i.shaderParts.set(Dt.FRAGMENT_MAIN_IMAGE,r),i.shaderParts.set(Dt.FRAGMENT_MAIN_UV,o);for(const[u,f]of i.shaderParts)f!==null&&i.shaderParts.set(u,f.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(i)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(i,e=yl){this.fullscreenMaterial.depthBuffer=i,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(i,e)}render(i,e,t,r,o){for(const l of this.effects)l.update(i,e,r);if(!this.skipRendering||this.renderToScreen){const l=this.fullscreenMaterial;l.inputBuffer=e.texture,l.time+=r*this.timeScale,i.setRenderTarget(this.renderToScreen?null:t),i.render(this.scene,this.camera)}}setSize(i,e){this.fullscreenMaterial.setSize(i,e);for(const t of this.effects)t.setSize(i,e)}initialize(i,e,t){this.renderer=i;for(const r of this.effects)r.initialize(i,e,t);this.updateMaterial(),t!==void 0&&t!==ci&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const i of this.effects)i.removeEventListener("change",this.listener),i.dispose()}handleEvent(i){switch(i.type){case"change":this.recompile();break}}};const Lw=()=>{const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");if(!t)throw new Error("2D context not available");t.fillStyle="black",t.fillRect(0,0,e.width,e.height);const r=new Kn(e);r.minFilter=Dn,r.magFilter=Dn,r.generateMipmaps=!1;const o=[];let l=null;const u=64;let f=.1*64;const d=1/u,p=()=>{t.fillStyle="black",t.fillRect(0,0,e.width,e.height)},g=y=>{const b={x:y.x*64,y:(1-y.y)*64};let M=1;const S=L=>Math.sin(L*Math.PI/2),_=L=>-L*(L-2);y.age<u*.3?M=S(y.age/(u*.3)):M=_(1-(y.age-u*.3)/(u*.7))||0,M*=y.force;const w=`${(y.vx+1)/2*255}, ${(y.vy+1)/2*255}, ${M*255}`,A=320;t.shadowOffsetX=A,t.shadowOffsetY=A,t.shadowBlur=f,t.shadowColor=`rgba(${w},${.22*M})`,t.beginPath(),t.fillStyle="rgba(255,0,0,1)",t.arc(b.x-A,b.y-A,f,0,Math.PI*2),t.fill()};return{canvas:e,texture:r,addTouch:y=>{let b=0,M=0,S=0;if(l){const _=y.x-l.x,w=y.y-l.y;if(_===0&&w===0)return;const A=_*_+w*w,L=Math.sqrt(A);M=_/(L||1),S=w/(L||1),b=Math.min(A*1e4,1)}l={x:y.x,y:y.y},o.push({x:y.x,y:y.y,age:0,force:b,vx:M,vy:S})},update:()=>{p();for(let y=o.length-1;y>=0;y--){const b=o[y],M=b.force*d*(1-b.age/u);b.x+=b.vx*M,b.y+=b.vy*M,b.age++,b.age>u&&o.splice(y,1)}for(let y=0;y<o.length;y++)g(o[y]);r.needsUpdate=!0},set radiusScale(y){f=.1*64*y},get radiusScale(){return f/(.1*64)},size:64}},Ow=(i,e)=>{const t=`
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;

    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;

      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);

      float amt = uStrength * intensity * wave;

      uv += vec2(vx, vy) * amt;
    }
    `;return new K_("LiquidEffect",t,{uniforms:new Map([["uTexture",new on(i)],["uStrength",new on(e?.strength??.025)],["uTime",new on(0)],["uFreq",new on(e?.freq??4.5)]])})},Dv={square:0,circle:1,triangle:2,diamond:3},Pw=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,Bw=`
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;
  fragColor = vec4(color, M);
}
`,yd=10,Du=({variant:i="square",pixelSize:e=3,color:t="#B19EEF",className:r,style:o,antialias:l=!0,patternScale:u=2,patternDensity:f=1,liquid:d=!1,liquidStrength:p=.1,liquidRadius:g=1,pixelSizeJitter:x=0,enableRipples:v=!0,rippleIntensityScale:y=1,rippleThickness:b=.1,rippleSpeed:M=.3,liquidWobbleSpeed:S=4.5,autoPauseOffscreen:_=!0,speed:w=.5,transparent:A=!0,edgeFade:L=.5,noiseAmount:P=0})=>{const N=ue.useRef(null),F=ue.useRef({visible:!0}),q=ue.useRef(w),D=ue.useRef(null),C=ue.useRef(null);return ue.useEffect(()=>{const H=N.current;if(!H)return;q.current=w;const j=["antialias","liquid","noiseAmount"],ne={antialias:l,liquid:d,noiseAmount:P};let ee=!1;if(!D.current)ee=!0;else if(C.current){for(const K of j)if(C.current[K]!==ne[K]){ee=!0;break}}if(ee){if(D.current){const He=D.current;He.resizeObserver?.disconnect(),cancelAnimationFrame(He.raf),He.quad?.geometry.dispose(),He.material.dispose(),He.composer?.dispose(),He.renderer.dispose(),He.renderer.domElement.parentElement===H&&H.removeChild(He.renderer.domElement),D.current=null}const K=document.createElement("canvas"),I=new zR({canvas:K,antialias:l,alpha:!0,powerPreference:"high-performance"});I.domElement.style.width="100%",I.domElement.style.height="100%",I.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),H.appendChild(I.domElement),A?I.setClearAlpha(0):I.setClearColor(0,1);const W={uResolution:{value:new _t(0,0)},uTime:{value:0},uColor:{value:new Pt(t)},uClickPos:{value:Array.from({length:yd},()=>new _t(-1,-1))},uClickTimes:{value:new Float32Array(yd)},uShapeType:{value:Dv[i]??0},uPixelSize:{value:e*I.getPixelRatio()},uScale:{value:u},uDensity:{value:f},uPixelJitter:{value:x},uEnableRipples:{value:v?1:0},uRippleSpeed:{value:M},uRippleThickness:{value:b},uRippleIntensity:{value:y},uEdgeFade:{value:L}},Y=new _p,pe=new zp(-1,1,1,-1,0,1),O=new ui({vertexShader:Pw,fragmentShader:Bw,uniforms:W,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:xp}),re=new Tl(2,2),Se=new qi(re,O);Y.add(Se);const Me=new $E,De=()=>{const He=H.clientWidth||1,Fe=H.clientHeight||1;I.setSize(He,Fe,!1),W.uResolution.value.set(I.domElement.width,I.domElement.height),D.current?.composer&&D.current.composer.setSize(I.domElement.width,I.domElement.height),W.uPixelSize.value=e*I.getPixelRatio()};De();const We=new ResizeObserver(De);We.observe(H);const ge=(()=>{if(typeof window<"u"&&window.crypto?.getRandomValues){const He=new Uint32Array(1);return window.crypto.getRandomValues(He),He[0]/4294967295}return Math.random()})()*1e3;let be,qe,Xe;if(d){qe=Lw(),qe.radiusScale=g,be=new Tv(I);const He=new Rv(Y,pe);Xe=Ow(qe.texture,{strength:p,freq:S});const Fe=new Cv(pe,Xe);Fe.renderToScreen=!0,be.addPass(He),be.addPass(Fe)}if(P>0){be||(be=new Tv(I),be.addPass(new Rv(Y,pe)));const He=new K_("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new on(0)],["uAmount",new on(P)]])}),Fe=new Cv(pe,He);Fe.renderToScreen=!0,be&&be.passes.length>0&&be.passes.forEach(gt=>gt.renderToScreen=!1),be.addPass(Fe)}be&&be.setSize(I.domElement.width,I.domElement.height);const ct=He=>{const Fe=I.domElement.getBoundingClientRect(),gt=I.domElement.width/Fe.width,Pe=I.domElement.height/Fe.height,Ot=(He.clientX-Fe.left)*gt,je=(Fe.height-(He.clientY-Fe.top))*Pe;return{fx:Ot,fy:je,w:I.domElement.width,h:I.domElement.height}},Qt=He=>{const{fx:Fe,fy:gt}=ct(He),Pe=D.current?.clickIx??0;W.uClickPos.value[Pe].set(Fe,gt),W.uClickTimes.value[Pe]=W.uTime.value,D.current&&(D.current.clickIx=(Pe+1)%yd)},ut=He=>{if(!qe)return;const{fx:Fe,fy:gt,w:Pe,h:Ot}=ct(He);qe.addTouch({x:Fe/Pe,y:gt/Ot})};I.domElement.addEventListener("pointerdown",Qt,{passive:!0}),I.domElement.addEventListener("pointermove",ut,{passive:!0});let Rt=0;const V=()=>{if(_&&!F.current.visible){Rt=requestAnimationFrame(V);return}W.uTime.value=ge+Me.getElapsedTime()*q.current,Xe&&(Xe.uniforms.get("uTime").value=W.uTime.value),be?(qe&&qe.update(),be.passes.forEach(He=>{const Fe=He.effects;Fe&&Fe.forEach(gt=>{const Pe=gt.uniforms?.get("uTime");Pe&&(Pe.value=W.uTime.value)})}),be.render()):I.render(Y,pe),Rt=requestAnimationFrame(V)};Rt=requestAnimationFrame(V),D.current={renderer:I,scene:Y,camera:pe,material:O,clock:Me,clickIx:0,uniforms:W,resizeObserver:We,raf:Rt,quad:Se,timeOffset:ge,composer:be,touch:qe,liquidEffect:Xe}}else{const K=D.current;if(K.uniforms.uShapeType.value=Dv[i]??0,K.uniforms.uPixelSize.value=e*K.renderer.getPixelRatio(),K.uniforms.uColor.value.set(t),K.uniforms.uScale.value=u,K.uniforms.uDensity.value=f,K.uniforms.uPixelJitter.value=x,K.uniforms.uEnableRipples.value=v?1:0,K.uniforms.uRippleIntensity.value=y,K.uniforms.uRippleThickness.value=b,K.uniforms.uRippleSpeed.value=M,K.uniforms.uEdgeFade.value=L,A?K.renderer.setClearAlpha(0):K.renderer.setClearColor(0,1),K.liquidEffect){const I=K.liquidEffect;I&&(I.value=p);const W=K.liquidEffect.uniforms.get("uFreq");W&&(W.value=S)}K.touch&&(K.touch.radiusScale=g)}return C.current=ne,()=>{if(D.current&&ee||!D.current)return;const K=D.current;K.resizeObserver?.disconnect(),cancelAnimationFrame(K.raf),K.quad?.geometry.dispose(),K.material.dispose(),K.composer?.dispose(),K.renderer.dispose(),K.renderer.domElement.parentElement===H&&H.removeChild(K.renderer.domElement),D.current=null}},[l,d,P,e,u,f,v,y,b,M,x,L,A,p,g,S,_,i,t,w]),G.jsx("div",{ref:N,className:`pixel-blast-container ${r??""}`,style:o,"aria-label":"PixelBlast interactive background"})};function Iw(){return G.jsx("div",{className:fa.homePage,children:G.jsxs("div",{className:fa.homeContainer,children:[G.jsx(Du,{className:fa.pixelBackground,color:"#b5ff7b",transparent:!1}),G.jsxs("div",{className:fa.homeWrapper,children:[G.jsx("h1",{className:fa.title,children:"Hello, My name is Hunter "}),G.jsxs("h1",{className:fa.titleTwo,children:[G.jsx("span",{className:fa.divide,children:" I am a "})," ",G.jsx("span",{className:fa.highlight,children:G.jsx(CM.Typewriter,{words:["<CREATIVE STORYTELLER","<UX/UI DESIGNER","<FRONTEND DEVELOPER"],loop:2,cursor:!0,cursorStyle:">",typeSpeed:100,deleteSpeed:100,delaySpeed:2e3})})," "]}),G.jsx(Zn,{to:"/featured-projects",className:fa.projectButton,children:"Explore my projects"})]})]})})}const Fw="_container_1lgk8_3",zw="_title_1lgk8_11",Hw="_cards_1lgk8_23",Gw="_card_1lgk8_23",iu={container:Fw,title:zw,cards:Hw,card:Gw};function Vw(){return G.jsxs("div",{className:iu.container,children:[G.jsx("h1",{className:iu.title,children:"My Work"}),G.jsx("div",{className:iu.cards,children:G.jsxs("div",{className:iu.card,children:[G.jsx("h2",{children:"Naturhistorisk Museum"}),G.jsx("p",{children:"A project I worked on with React and UX design."}),G.jsx(Zn,{to:"/mywork/naturhistoriskmuseum",children:"See More"})]})})]})}const kw="_intro_wlg69_1",Xw="_title_wlg69_15",Ww="_description_wlg69_31",qw="_meta_wlg69_57",jw="_bubbles_wlg69_97",Yw="_bubble_wlg69_97",Ir={intro:kw,title:Xw,description:Ww,meta:qw,bubbles:jw,bubble:Yw};function Q_({title:i,subtitle:e,description:t,role:r=[],date:o}){return G.jsxs("section",{className:Ir.intro,children:[G.jsx("h1",{className:Ir.title,children:i}),G.jsx("div",{className:Ir.description,children:t.split(`
`).map((l,u)=>G.jsx("p",{children:l},u))}),G.jsxs("div",{className:Ir.meta,children:[G.jsxs("div",{children:[G.jsx("h3",{children:"Role"}),G.jsx("div",{className:Ir.bubbles,children:Array.isArray(r)?r.map((l,u)=>G.jsx("span",{className:Ir.bubble,children:l},u)):G.jsx("span",{className:Ir.bubble,children:r})})]}),G.jsxs("div",{children:[G.jsx("h3",{children:"Date"}),G.jsx("p",{children:o})]})]})]})}const Zw="_rowContainer_15xk3_1",Kw="_column_15xk3_17",Qw="_title_15xk3_27",$w="_text_15xk3_41",Fr={rowContainer:Zw,column:Kw,title:Qw,text:$w};function ll({leftTitle:i,leftText:e,rightTitle:t,rightText:r}){return G.jsxs("div",{className:Fr.rowContainer,children:[G.jsxs("div",{className:Fr.column,children:[G.jsx("h3",{className:Fr.title,children:i}),G.jsx("p",{className:Fr.text,children:e})]}),G.jsxs("div",{className:Fr.column,children:[G.jsx("h3",{className:Fr.title,children:t}),G.jsx("p",{className:Fr.text,children:r})]})]})}const Jw="_container_oaix9_25",$_={container:Jw},eC="_photoContainer_n6c87_1",tC="_photo_n6c87_1",Uv={photoContainer:eC,photo:tC};function pu({src:i,alt:e}){return G.jsx("div",{className:Uv.photoContainer,children:G.jsx("img",{src:i,alt:e,className:Uv.photo})})}const nC="/my-portfolio/assets/Bioms-DmwD7JJs.png",iC="_startSection_hoxa5_1",aC="_textContainer_hoxa5_21",rC="_title_hoxa5_41",sC="_description_hoxa5_57",oC="_toggleButton_hoxa5_71",lC="_imageContainer_hoxa5_109",cC="_image_hoxa5_109",zr={startSection:iC,textContainer:aC,title:rC,description:sC,toggleButton:oC,imageContainer:lC,image:cC};function Nv({deskTitle:i,deskDescription:e,deskImgSrc:t,deskImgAlt:r,fieldTitle:o,fieldDescription:l,fieldImgSrc:u,fieldImgAlt:f,deskButtonText:d="Click for Field Research",fieldButtonText:p="Click for Desk Research"}){const[g,x]=ue.useState(!1),v=()=>x(w=>!w),y=g?o:i,b=g?l:e,M=g?u:t,S=g?f:r,_=g?p:d;return G.jsxs("section",{className:zr.startSection,children:[G.jsxs("div",{className:zr.textContainer,children:[G.jsx("h2",{className:zr.title,children:y}),G.jsx("p",{className:zr.description,children:b}),G.jsx("button",{onClick:v,className:zr.toggleButton,children:_})]}),G.jsx("div",{className:zr.imageContainer,children:G.jsx("img",{src:M,alt:S,className:zr.image})})]})}const uC="/my-portfolio/assets/deskresearchr-CrAd0d1i.png",fC="/my-portfolio/assets/fieldresearch-BYYLboyg.png",hC="/my-portfolio/assets/doublediamond-CDUxuK4C.png",dC="_startSection_16ftt_1",pC="_textContainer_16ftt_21",mC="_title_16ftt_31",gC="_description_16ftt_45",xC="_imageContainer_16ftt_57",vC="_image_16ftt_57",ks={startSection:dC,textContainer:pC,title:mC,description:gC,imageContainer:xC,image:vC};function Lv({title:i,description:e,imgSrc:t,imgAlt:r}){return G.jsxs("section",{className:ks.startSection,children:[G.jsx("div",{className:ks.imageContainer,children:G.jsx("img",{src:t,alt:r,className:ks.image})}),G.jsxs("div",{className:ks.textContainer,children:[G.jsx("h2",{className:ks.title,children:i}),G.jsx("p",{className:ks.description,children:e})]})]})}const _C="_doublePicture_12siw_1",yC="_imageWrapper_12siw_19",SC="_image_12siw_19",cl={doublePicture:_C,imageWrapper:yC,image:SC};function mu({leftImg:i,rightImg:e,leftAlt:t,rightAlt:r}){return G.jsxs("section",{className:cl.doublePicture,children:[G.jsx("div",{className:cl.imageWrapper,children:G.jsx("img",{src:i,alt:t,className:cl.image})}),G.jsx("div",{className:cl.imageWrapper,children:G.jsx("img",{src:e,alt:r,className:cl.image})})]})}const bC="/my-portfolio/assets/affinity-D4rnGDke.png",MC="/my-portfolio/assets/persona-CIJB4k8l.png",EC="/my-portfolio/assets/listofvalues-PjUIjLGt.png",TC="/my-portfolio/assets/ooux-C8WNx7Fc.png",AC="/my-portfolio/assets/moodboard-9vuJdLW0.png",RC="/my-portfolio/assets/styleguide-CCwMO4vi.png",wC="/my-portfolio/assets/userflowexam-BZuPeQcO.jpg",CC="/my-portfolio/assets/hifive-Bd9x97Hn.png",DC="/my-portfolio/assets/lofi-MTURm_ZY.png",UC="/my-portfolio/assets/contrastcheck-BOPwdj9O.jpg",NC="/my-portfolio/assets/Navbar-DA8liXpL.jpg";function LC(){return G.jsxs("div",{className:$_.container,children:[G.jsx(Q_,{title:"Naturhistorisk Museum",description:"This project was completed during my second semester in the Multimedia Design program. We were asked to apply key design processes and principles to redesign the Naturhistorisk Museum’s website and create a new digital solution that encourages visitors to return and engage more deeply with the exhibitions.",role:["UX","UI","User Research","Front-end Development"],date:"May - June 2025"}),G.jsx(pu,{src:nC,alt:"Naturhistorisk Museum redesign"}),G.jsx(Lv,{title:"Project Management",description:"We used the double diamond framework to guide our design process, ensuring a structured approach to problem-solving and innovation. This involved phases of discovery, definition, development, and delivery, allowing us to thoroughly explore the challenges and opportunities presented by the museum's digital presence.",imgSrc:hC,imgAlt:"Double diamond framework"}),G.jsx(Nv,{deskTitle:"Desk Research",deskDescription:"We began by exploring the Naturhistorisk Museum’s existing digital presence and identifying opportunities to connect the online and physical experiences by also exploring solutions created by existing museums. Our early desk research focused on observing ways other locations make exhibits more interactive and engaging for visitors.",deskImgSrc:uC,deskImgAlt:"Desk research workspace",fieldTitle:"Field Research",fieldDescription:"Our field research involved developing a structured observation and interview guide to gain deeper insights into visitor behavior and engagement patterns at the museum. We conducted on-site visits to observe how guests interacted with the exhibits, noting moments of curiosity, confusion, and disengagement. Alongside this, we held short contextual interviews with visitors to understand their motivations, expectations, and challenges when navigating the space. These findings helped us identify key touchpoints in the user journey and uncover opportunities to enhance both the digital and physical experience of the museum.",fieldImgSrc:fC,fieldImgAlt:"Field research observations",deskButtonText:"Click for Field Research",fieldButtonText:"Click for Desk Research"}),G.jsx(ll,{leftTitle:"Affinity Diagram",leftText:"We divided the insights from our interviews into five main categories: visit motivation, discovery, exhibit impressions, pain points and critiques, and suggestions for improvement. This method helped us identify which experiences and issues appeared most frequently, providing a strong foundation for shaping our solution. It also allowed us to distinguish between general feedback and feedback that pointed to specific needs or frustrations. Having everything grouped visually made it easier to understand what mattered most to our users and where our design efforts should focus",rightTitle:"Persona",rightText:" Using the themes and patterns identified in the affinity diagram, we created a persona to represent our target group. This persona helps guide our design decisions and keeps the user experience at the center of the project. By referring to it throughout the design process, we remain focused on user needs grounded in research. It ensures that our design choices align with the type of experience visitors - like the one represented by our persona - are looking for."}),G.jsx(mu,{leftImg:bC,rightImg:MC,leftAlt:"Affinity diagram",rightAlt:"Persona"}),G.jsx(ll,{leftTitle:"Further into Defining",leftText:"Following our persona, we continued our defining phase by creating: an empathy map - to help us capture what users think, feel, see, hear, say, and do while interacting with the museum space, a value proposition canvas - to connect user needs with what our solution could offer, and OOUX tables - to provide a clear foundation for how we structured our content and plan future features.",rightTitle:"List of Requirements/Values",rightText:"Based on our research, we defined a set of core requirements that guide the development of our digital solution. The login system will allow users to sign in using their mobile number, followed by an SMS verification. To support accessibility, the app includes features such as high contrast visuals, easy-to-read fonts, and animal sounds. These features help make the app easier to use for everyone and are based on accessibility principles recommended in mobile app design. We defined the core values of our digital solution after reviewing insights from research and field observations. From an initial list of 41 values, we selected five that best represent the purpose of our app and what users care most about. These are Creativity, Discovery, Education, Experience, and Nature."}),G.jsx(mu,{leftImg:TC,rightImg:EC,leftAlt:"OOUX tables",rightAlt:"List of Requirements/Values"}),G.jsx(Nv,{deskTitle:"Moodboard",deskDescription:"Our moodboard was created to set the visual direction for the app in a way that connects to the theme of nature and the atmosphere of the Natural History Museum. The goal was to create a style that feels calm, modern, and inspired by the natural world.",deskImgSrc:AC,deskImgAlt:"Moodboard",fieldTitle:"Style Guide",fieldDescription:"After thoroughly reviewing the system, we created a style guide that includes all the necessary components such as colors, heading levels, text styles, and spacing rules to ensure consistency.",fieldImgSrc:RC,fieldImgAlt:"Style guide",deskButtonText:"Click for Style Guide",fieldButtonText:"Click for Moodboard"}),G.jsx(ll,{leftTitle:"Sketches",leftText:"As part of our ideation process, we used a modified version of the Crazy 8 sketching method, known as Crazy 4. The original Crazy 8 approach is a fast-paced brainstorming exercise where participants sketch eight different design ideas in eight minutes. This activity helped us build momentum in the early stages of design and made it easier to move from broad exploration into focused concept development.",rightTitle:"User Flow",rightText:"User flow is a crucial part of designing our solution because it shows the path users take to complete important tasks on the website. It helps us understand how users move through the system and what steps they follow to reach their goals smoothly."}),G.jsx(pu,{src:wC,alt:"Naturhistorisk Museum redesign"}),G.jsx(ll,{leftTitle:"Lo-Fi Wireframes",leftText:"This phase helped us define the app’s main features, organize content effectively, and plan how users would interact with different parts of the app. The Lo-Fi wireframes served as a blueprint, allowing us to test the flow and functionality early on, and make improvements before developing the high-fidelity design.",rightTitle:"Gangster and Guerilla testing",rightText:"To evaluate the usability and findability of our lo-fi wireframe, we applied gangster testing (Trunk Testing) and guerrilla testing methods. We asked people to test the prototype by completing typical tasks like exploring biomes, accessing animal information, and using the profile and story game page. During these sessions, we observed their interactions and asked questions to understand where they struggled or became confused."}),G.jsx(pu,{src:DC,alt:"Naturhistorisk Museum redesign"}),G.jsx(ll,{leftTitle:"Hi-Fi Wireframes",leftText:"After getting useful feedback from our Lo-Fi testing, we moved on to the high-fidelity mockups. Here, we focused on visual style, adding real content, and making everything feel more finished and user-friendly. We followed our mood board to keep colors consistent across all screens. For visuals, we used AI to generate images that matched the theme of our app. On the Biomes page, we used Sora to create short videos for each biome instead of static pictures.",rightTitle:"Accessibility",rightText:"To make sure our design is accessible for everyone, we used a Figma plugin called Stark – Contrast and Accessibility Checker. This tool helped us test different parts of our design so that people with different needs and abilities can still use the website comfortably."}),G.jsx(mu,{leftImg:CC,rightImg:UC,leftAlt:"Hi-Fi Wireframes",rightAlt:"Accessibility checker"}),G.jsx(Lv,{title:"Coding",description:"Once our high-fidelity prototypes were finalized and user-tested, we began developing the new museum website using React, a component-based JavaScript library that supports modular, reusable, and scalable design. This approach streamlined our workflow and improved performance through React’s virtual DOM, which updates only the necessary parts of a page. From the beginning, we also prioritized SEO, implementing best practices such as metadata optimization, descriptive alt text, and server-side rendering where possible. Each component was styled using CSS modules to ensure maintainability and prevent style conflicts. Finally, we focused on responsive design, ensuring the layout adapted smoothly across devices for both on-site and remote visitors.",imgSrc:NC,imgAlt:"Navigation Bar Code"})]})}const OC="/my-portfolio/assets/Klara-DZU3sgLQ.png",PC="/my-portfolio/assets/morisaki-CsSxlLjs.png",BC="_experiencePage_bwvh6_1",IC="_pixelBackground_bwvh6_15",FC="_updateMessage_bwvh6_27",Sd={experiencePage:BC,pixelBackground:IC,updateMessage:FC};function zC(){return G.jsxs("div",{className:Sd.experiencePage,children:[G.jsx(Du,{className:Sd.pixelBackground,color:"#74c8f8",transparent:!1}),G.jsxs("div",{className:Sd.updateMessage,children:[G.jsx("h1",{children:"Experience Page Coming Soon"}),G.jsx("p",{children:"I'm currently updating this page to showcase my experience and collaborations. Please check back soon!"})]})]})}const HC="_section_1sem8_1",GC="_visible_1sem8_41",VC="_scrollPanel_1sem8_51",bd={section:HC,visible:GC,scrollPanel:VC};function au({children:i}){const e=ue.useRef(null),[t,r]=ue.useState(!1);return ue.useEffect(()=>{const o=new IntersectionObserver(([l])=>r(l.isIntersecting),{threshold:.4});return e.current&&o.observe(e.current),()=>o.disconnect()},[]),G.jsx("section",{ref:e,className:`${bd.section} ${t?bd.visible:""}`,children:G.jsx("div",{className:bd.scrollPanel,children:i})})}const kC="_wrapper_nqo8s_1",XC="_card_nqo8s_21",WC="_title_nqo8s_63",qC="_text_nqo8s_83",ru={wrapper:kC,card:XC,title:WC,text:qC};function Ov({title:i,children:e}){return G.jsx("div",{className:ru.wrapper,children:G.jsxs("div",{className:ru.card,children:[G.jsx("h2",{className:ru.title,children:i}),e&&G.jsx("p",{className:ru.text,children:e})]})})}const jC="_introWrapper_862ts_1",YC="_textBlock_862ts_21",Pv={introWrapper:jC,textBlock:YC};function hl(i){let e=i[0],t=i[1],r=i[2];return Math.sqrt(e*e+t*t+r*r)}function bp(i,e){return i[0]=e[0],i[1]=e[1],i[2]=e[2],i}function ZC(i,e,t,r){return i[0]=e,i[1]=t,i[2]=r,i}function Bv(i,e,t){return i[0]=e[0]+t[0],i[1]=e[1]+t[1],i[2]=e[2]+t[2],i}function Iv(i,e,t){return i[0]=e[0]-t[0],i[1]=e[1]-t[1],i[2]=e[2]-t[2],i}function KC(i,e,t){return i[0]=e[0]*t[0],i[1]=e[1]*t[1],i[2]=e[2]*t[2],i}function QC(i,e,t){return i[0]=e[0]/t[0],i[1]=e[1]/t[1],i[2]=e[2]/t[2],i}function Md(i,e,t){return i[0]=e[0]*t,i[1]=e[1]*t,i[2]=e[2]*t,i}function $C(i,e){let t=e[0]-i[0],r=e[1]-i[1],o=e[2]-i[2];return Math.sqrt(t*t+r*r+o*o)}function JC(i,e){let t=e[0]-i[0],r=e[1]-i[1],o=e[2]-i[2];return t*t+r*r+o*o}function Fv(i){let e=i[0],t=i[1],r=i[2];return e*e+t*t+r*r}function eD(i,e){return i[0]=-e[0],i[1]=-e[1],i[2]=-e[2],i}function tD(i,e){return i[0]=1/e[0],i[1]=1/e[1],i[2]=1/e[2],i}function Mp(i,e){let t=e[0],r=e[1],o=e[2],l=t*t+r*r+o*o;return l>0&&(l=1/Math.sqrt(l)),i[0]=e[0]*l,i[1]=e[1]*l,i[2]=e[2]*l,i}function J_(i,e){return i[0]*e[0]+i[1]*e[1]+i[2]*e[2]}function zv(i,e,t){let r=e[0],o=e[1],l=e[2],u=t[0],f=t[1],d=t[2];return i[0]=o*d-l*f,i[1]=l*u-r*d,i[2]=r*f-o*u,i}function nD(i,e,t,r){let o=e[0],l=e[1],u=e[2];return i[0]=o+r*(t[0]-o),i[1]=l+r*(t[1]-l),i[2]=u+r*(t[2]-u),i}function iD(i,e,t,r,o){const l=Math.exp(-r*o);let u=e[0],f=e[1],d=e[2];return i[0]=t[0]+(u-t[0])*l,i[1]=t[1]+(f-t[1])*l,i[2]=t[2]+(d-t[2])*l,i}function aD(i,e,t){let r=e[0],o=e[1],l=e[2],u=t[3]*r+t[7]*o+t[11]*l+t[15];return u=u||1,i[0]=(t[0]*r+t[4]*o+t[8]*l+t[12])/u,i[1]=(t[1]*r+t[5]*o+t[9]*l+t[13])/u,i[2]=(t[2]*r+t[6]*o+t[10]*l+t[14])/u,i}function rD(i,e,t){let r=e[0],o=e[1],l=e[2],u=t[3]*r+t[7]*o+t[11]*l+t[15];return u=u||1,i[0]=(t[0]*r+t[4]*o+t[8]*l)/u,i[1]=(t[1]*r+t[5]*o+t[9]*l)/u,i[2]=(t[2]*r+t[6]*o+t[10]*l)/u,i}function sD(i,e,t){let r=e[0],o=e[1],l=e[2];return i[0]=r*t[0]+o*t[3]+l*t[6],i[1]=r*t[1]+o*t[4]+l*t[7],i[2]=r*t[2]+o*t[5]+l*t[8],i}function oD(i,e,t){let r=e[0],o=e[1],l=e[2],u=t[0],f=t[1],d=t[2],p=t[3],g=f*l-d*o,x=d*r-u*l,v=u*o-f*r,y=f*v-d*x,b=d*g-u*v,M=u*x-f*g,S=p*2;return g*=S,x*=S,v*=S,y*=2,b*=2,M*=2,i[0]=r+g+y,i[1]=o+x+b,i[2]=l+v+M,i}const lD=(function(){const i=[0,0,0],e=[0,0,0];return function(t,r){bp(i,t),bp(e,r),Mp(i,i),Mp(e,e);let o=J_(i,e);return o>1?0:o<-1?Math.PI:Math.acos(o)}})();function cD(i,e){return i[0]===e[0]&&i[1]===e[1]&&i[2]===e[2]}class gn extends Array{constructor(e=0,t=e,r=e){return super(e,t,r),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,t=e,r=e){return e.length?this.copy(e):(ZC(this,e,t,r),this)}copy(e){return bp(this,e),this}add(e,t){return t?Bv(this,e,t):Bv(this,this,e),this}sub(e,t){return t?Iv(this,e,t):Iv(this,this,e),this}multiply(e){return e.length?KC(this,this,e):Md(this,this,e),this}divide(e){return e.length?QC(this,this,e):Md(this,this,1/e),this}inverse(e=this){return tD(this,e),this}len(){return hl(this)}distance(e){return e?$C(this,e):hl(this)}squaredLen(){return Fv(this)}squaredDistance(e){return e?JC(this,e):Fv(this)}negate(e=this){return eD(this,e),this}cross(e,t){return t?zv(this,e,t):zv(this,this,e),this}scale(e){return Md(this,this,e),this}normalize(){return Mp(this,this),this}dot(e){return J_(this,e)}equals(e){return cD(this,e)}applyMatrix3(e){return sD(this,this,e),this}applyMatrix4(e){return aD(this,this,e),this}scaleRotateMatrix4(e){return rD(this,this,e),this}applyQuaternion(e){return oD(this,this,e),this}angle(e){return lD(this,e)}lerp(e,t){return nD(this,this,e,t),this}smoothLerp(e,t,r){return iD(this,this,e,t,r),this}clone(){return new gn(this[0],this[1],this[2])}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e}transformDirection(e){const t=this[0],r=this[1],o=this[2];return this[0]=e[0]*t+e[4]*r+e[8]*o,this[1]=e[1]*t+e[5]*r+e[9]*o,this[2]=e[2]*t+e[6]*r+e[10]*o,this.normalize()}}const Hv=new gn;let uD=1,fD=1,Gv=!1;class hD{constructor(e,t={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=t,this.id=uD++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let r in t)this.addAttribute(r,t[r])}addAttribute(e,t){if(this.attributes[e]=t,t.id=fD++,t.size=t.size||1,t.type=t.type||(t.data.constructor===Float32Array?this.gl.FLOAT:t.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),t.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,t.normalized=t.normalized||!1,t.stride=t.stride||0,t.offset=t.offset||0,t.count=t.count||(t.stride?t.data.byteLength/t.stride:t.data.length/t.size),t.divisor=t.instanced||0,t.needsUpdate=!1,t.usage=t.usage||this.gl.STATIC_DRAW,t.buffer||this.updateAttribute(t),t.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==t.count*t.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,t.count*t.divisor);this.instancedCount=t.count*t.divisor}else e==="index"?this.drawRange.count=t.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,t.count))}updateAttribute(e){const t=!e.buffer;t&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),t?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((t,{name:r,type:o})=>{if(!this.attributes[r]){console.warn(`active attribute ${r} not being supplied`);return}const l=this.attributes[r];this.gl.bindBuffer(l.target,l.buffer),this.glState.boundBuffer=l.buffer;let u=1;o===35674&&(u=2),o===35675&&(u=3),o===35676&&(u=4);const f=l.size/u,d=u===1?0:u*u*4,p=u===1?0:u*4;for(let g=0;g<u;g++)this.gl.vertexAttribPointer(t+g,f,l.type,l.normalized,l.stride+d,l.offset+g*p),this.gl.enableVertexAttribArray(t+g),this.gl.renderer.vertexAttribDivisor(t+g,l.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:t=this.gl.TRIANGLES}){this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((o,{name:l})=>{const u=this.attributes[l];u.needsUpdate&&this.updateAttribute(u)});let r=2;this.attributes.index?.type===this.gl.UNSIGNED_INT&&(r=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(t,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*r,this.instancedCount):this.gl.renderer.drawArraysInstanced(t,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(t,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*r):this.gl.drawArrays(t,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!Gv)return console.warn("No position buffer data found to compute bounds"),Gv=!0}computeBoundingBox(e){e||(e=this.getPosition());const t=e.data,r=e.size;this.bounds||(this.bounds={min:new gn,max:new gn,center:new gn,scale:new gn,radius:1/0});const o=this.bounds.min,l=this.bounds.max,u=this.bounds.center,f=this.bounds.scale;o.set(1/0),l.set(-1/0);for(let d=0,p=t.length;d<p;d+=r){const g=t[d],x=t[d+1],v=t[d+2];o.x=Math.min(g,o.x),o.y=Math.min(x,o.y),o.z=Math.min(v,o.z),l.x=Math.max(g,l.x),l.y=Math.max(x,l.y),l.z=Math.max(v,l.z)}f.sub(l,o),u.add(o,l).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const t=e.data,r=e.size;this.bounds||this.computeBoundingBox(e);let o=0;for(let l=0,u=t.length;l<u;l+=r)Hv.fromArray(t,l),o=Math.max(o,this.bounds.center.squaredDistance(Hv));this.bounds.radius=Math.sqrt(o)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let dD=1;const Vv={};class ey{constructor(e,{vertex:t,fragment:r,uniforms:o={},transparent:l=!1,cullFace:u=e.BACK,frontFace:f=e.CCW,depthTest:d=!0,depthWrite:p=!0,depthFunc:g=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=o,this.id=dD++,t||console.warn("vertex shader not supplied"),r||console.warn("fragment shader not supplied"),this.transparent=l,this.cullFace=u,this.frontFace=f,this.depthTest=d,this.depthWrite=p,this.depthFunc=g,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:t,fragment:r})}setShaders({vertex:e,fragment:t}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${kv(e)}`)),t&&(this.gl.shaderSource(this.fragmentShader,t),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${kv(t)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let r=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let u=0;u<r;u++){let f=this.gl.getActiveUniform(this.program,u);this.uniformLocations.set(f,this.gl.getUniformLocation(this.program,f.name));const d=f.name.match(/(\w+)/g);f.uniformName=d[0],f.nameComponents=d.slice(1)}this.attributeLocations=new Map;const o=[],l=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let u=0;u<l;u++){const f=this.gl.getActiveAttrib(this.program,u),d=this.gl.getAttribLocation(this.program,f.name);d!==-1&&(o[d]=f.name,this.attributeLocations.set(f,d))}this.attributeOrder=o.join("")}setBlendFunc(e,t,r,o){this.blendFunc.src=e,this.blendFunc.dst=t,this.blendFunc.srcAlpha=r,this.blendFunc.dstAlpha=o,e&&(this.transparent=!0)}setBlendEquation(e,t){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=t}setStencilFunc(e,t,r){this.stencilRef=t,this.stencilFunc.func=e,this.stencilFunc.ref=t,this.stencilFunc.mask=r}setStencilOp(e,t,r){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=t,this.stencilOp.depthPass=r}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let t=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((o,l)=>{let u=this.uniforms[l.uniformName];for(const f of l.nameComponents){if(!u)break;if(f in u)u=u[f];else{if(Array.isArray(u.value))break;u=void 0;break}}if(!u)return Xv(`Active uniform ${l.name} has not been supplied`);if(u&&u.value===void 0)return Xv(`${l.name} uniform is missing a value parameter`);if(u.value.texture)return t=t+1,u.value.update(t),Ed(this.gl,l.type,o,t);if(u.value.length&&u.value[0].texture){const f=[];return u.value.forEach(d=>{t=t+1,d.update(t),f.push(t)}),Ed(this.gl,l.type,o,f)}Ed(this.gl,l.type,o,u.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function Ed(i,e,t,r){r=r.length?pD(r):r;const o=i.renderer.state.uniformLocations.get(t);if(r.length)if(o===void 0||o.length!==r.length)i.renderer.state.uniformLocations.set(t,r.slice(0));else{if(mD(o,r))return;o.set?o.set(r):gD(o,r),i.renderer.state.uniformLocations.set(t,o)}else{if(o===r)return;i.renderer.state.uniformLocations.set(t,r)}switch(e){case 5126:return r.length?i.uniform1fv(t,r):i.uniform1f(t,r);case 35664:return i.uniform2fv(t,r);case 35665:return i.uniform3fv(t,r);case 35666:return i.uniform4fv(t,r);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return r.length?i.uniform1iv(t,r):i.uniform1i(t,r);case 35671:case 35667:return i.uniform2iv(t,r);case 35672:case 35668:return i.uniform3iv(t,r);case 35673:case 35669:return i.uniform4iv(t,r);case 35674:return i.uniformMatrix2fv(t,!1,r);case 35675:return i.uniformMatrix3fv(t,!1,r);case 35676:return i.uniformMatrix4fv(t,!1,r)}}function kv(i){let e=i.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function pD(i){const e=i.length,t=i[0].length;if(t===void 0)return i;const r=e*t;let o=Vv[r];o||(Vv[r]=o=new Float32Array(r));for(let l=0;l<e;l++)o.set(i[l],l*t);return o}function mD(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function gD(i,e){for(let t=0,r=i.length;t<r;t++)i[t]=e[t]}let Td=0;function Xv(i){Td>100||(console.warn(i),Td++,Td>100&&console.warn("More than 100 program warnings - stopping logs."))}const Ad=new gn;let xD=1;class vD{constructor({canvas:e=document.createElement("canvas"),width:t=300,height:r=150,dpr:o=1,alpha:l=!1,depth:u=!0,stencil:f=!1,antialias:d=!1,premultipliedAlpha:p=!1,preserveDrawingBuffer:g=!1,powerPreference:x="default",autoClear:v=!0,webgl:y=2}={}){const b={alpha:l,depth:u,stencil:f,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:x};this.dpr=o,this.alpha=l,this.color=!0,this.depth=u,this.stencil=f,this.premultipliedAlpha=p,this.autoClear=v,this.id=xD++,y===2&&(this.gl=e.getContext("webgl2",b)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",b)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(t,r),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,t){this.width=e,this.height=t,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=t*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:t+"px"})}setViewport(e,t,r=0,o=0){this.state.viewport.width===e&&this.state.viewport.height===t||(this.state.viewport.width=e,this.state.viewport.height=t,this.state.viewport.x=r,this.state.viewport.y=o,this.gl.viewport(r,o,e,t))}setScissor(e,t,r=0,o=0){this.gl.scissor(r,o,e,t)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,t,r,o){this.state.blendFunc.src===e&&this.state.blendFunc.dst===t&&this.state.blendFunc.srcAlpha===r&&this.state.blendFunc.dstAlpha===o||(this.state.blendFunc.src=e,this.state.blendFunc.dst=t,this.state.blendFunc.srcAlpha=r,this.state.blendFunc.dstAlpha=o,r!==void 0?this.gl.blendFuncSeparate(e,t,r,o):this.gl.blendFunc(e,t))}setBlendEquation(e,t){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===t)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=t,t!==void 0?this.gl.blendEquationSeparate(e,t):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,t,r){this.state.stencilFunc===e&&this.state.stencilRef===t&&this.state.stencilFuncMask===r||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=t||0,this.state.stencilFuncMask=r||0,this.gl.stencilFunc(e||this.gl.ALWAYS,t||0,r||0))}setStencilOp(e,t,r){this.state.stencilFail===e&&this.state.stencilDepthFail===t&&this.state.stencilDepthPass===r||(this.state.stencilFail=e,this.state.stencilDepthFail=t,this.state.stencilDepthPass=r,this.gl.stencilOp(e,t,r))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:t=null}={}){this.state.framebuffer!==t&&(this.state.framebuffer=t,this.gl.bindFramebuffer(e,t))}getExtension(e,t,r){return t&&this.gl[t]?this.gl[t].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),t?this.extensions[e]?this.extensions[e][r].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program.id!==t.program.id?e.program.id-t.program.id:e.zDepth!==t.zDepth?e.zDepth-t.zDepth:t.id-e.id}sortTransparent(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.zDepth!==t.zDepth?t.zDepth-e.zDepth:t.id-e.id}sortUI(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program.id!==t.program.id?e.program.id-t.program.id:t.id-e.id}getRenderList({scene:e,camera:t,frustumCull:r,sort:o}){let l=[];if(t&&r&&t.updateFrustum(),e.traverse(u=>{if(!u.visible)return!0;u.draw&&(r&&u.frustumCulled&&t&&!t.frustumIntersectsMesh(u)||l.push(u))}),o){const u=[],f=[],d=[];l.forEach(p=>{p.program.transparent?p.program.depthTest?f.push(p):d.push(p):u.push(p),p.zDepth=0,!(p.renderOrder!==0||!p.program.depthTest||!t)&&(p.worldMatrix.getTranslation(Ad),Ad.applyMatrix4(t.projectionViewMatrix),p.zDepth=Ad.z)}),u.sort(this.sortOpaque),f.sort(this.sortTransparent),d.sort(this.sortUI),l=u.concat(f,d)}return l}render({scene:e,camera:t,target:r=null,update:o=!0,sort:l=!0,frustumCull:u=!0,clear:f}){r===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(r),this.setViewport(r.width,r.height)),(f||this.autoClear&&f!==!1)&&(this.depth&&(!r||r.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!r||r.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),o&&e.updateMatrixWorld(),t&&t.updateMatrixWorld(),this.getRenderList({scene:e,camera:t,frustumCull:u,sort:l}).forEach(p=>{p.draw({camera:t})})}}function _D(i,e){return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i}function yD(i,e,t,r,o){return i[0]=e,i[1]=t,i[2]=r,i[3]=o,i}function SD(i,e){let t=e[0],r=e[1],o=e[2],l=e[3],u=t*t+r*r+o*o+l*l;return u>0&&(u=1/Math.sqrt(u)),i[0]=t*u,i[1]=r*u,i[2]=o*u,i[3]=l*u,i}function bD(i,e){return i[0]*e[0]+i[1]*e[1]+i[2]*e[2]+i[3]*e[3]}function MD(i){return i[0]=0,i[1]=0,i[2]=0,i[3]=1,i}function ED(i,e,t){t=t*.5;let r=Math.sin(t);return i[0]=r*e[0],i[1]=r*e[1],i[2]=r*e[2],i[3]=Math.cos(t),i}function Wv(i,e,t){let r=e[0],o=e[1],l=e[2],u=e[3],f=t[0],d=t[1],p=t[2],g=t[3];return i[0]=r*g+u*f+o*p-l*d,i[1]=o*g+u*d+l*f-r*p,i[2]=l*g+u*p+r*d-o*f,i[3]=u*g-r*f-o*d-l*p,i}function TD(i,e,t){t*=.5;let r=e[0],o=e[1],l=e[2],u=e[3],f=Math.sin(t),d=Math.cos(t);return i[0]=r*d+u*f,i[1]=o*d+l*f,i[2]=l*d-o*f,i[3]=u*d-r*f,i}function AD(i,e,t){t*=.5;let r=e[0],o=e[1],l=e[2],u=e[3],f=Math.sin(t),d=Math.cos(t);return i[0]=r*d-l*f,i[1]=o*d+u*f,i[2]=l*d+r*f,i[3]=u*d-o*f,i}function RD(i,e,t){t*=.5;let r=e[0],o=e[1],l=e[2],u=e[3],f=Math.sin(t),d=Math.cos(t);return i[0]=r*d+o*f,i[1]=o*d-r*f,i[2]=l*d+u*f,i[3]=u*d-l*f,i}function wD(i,e,t,r){let o=e[0],l=e[1],u=e[2],f=e[3],d=t[0],p=t[1],g=t[2],x=t[3],v,y,b,M,S;return y=o*d+l*p+u*g+f*x,y<0&&(y=-y,d=-d,p=-p,g=-g,x=-x),1-y>1e-6?(v=Math.acos(y),b=Math.sin(v),M=Math.sin((1-r)*v)/b,S=Math.sin(r*v)/b):(M=1-r,S=r),i[0]=M*o+S*d,i[1]=M*l+S*p,i[2]=M*u+S*g,i[3]=M*f+S*x,i}function CD(i,e){let t=e[0],r=e[1],o=e[2],l=e[3],u=t*t+r*r+o*o+l*l,f=u?1/u:0;return i[0]=-t*f,i[1]=-r*f,i[2]=-o*f,i[3]=l*f,i}function DD(i,e){return i[0]=-e[0],i[1]=-e[1],i[2]=-e[2],i[3]=e[3],i}function UD(i,e){let t=e[0]+e[4]+e[8],r;if(t>0)r=Math.sqrt(t+1),i[3]=.5*r,r=.5/r,i[0]=(e[5]-e[7])*r,i[1]=(e[6]-e[2])*r,i[2]=(e[1]-e[3])*r;else{let o=0;e[4]>e[0]&&(o=1),e[8]>e[o*3+o]&&(o=2);let l=(o+1)%3,u=(o+2)%3;r=Math.sqrt(e[o*3+o]-e[l*3+l]-e[u*3+u]+1),i[o]=.5*r,r=.5/r,i[3]=(e[l*3+u]-e[u*3+l])*r,i[l]=(e[l*3+o]+e[o*3+l])*r,i[u]=(e[u*3+o]+e[o*3+u])*r}return i}function ND(i,e,t="YXZ"){let r=Math.sin(e[0]*.5),o=Math.cos(e[0]*.5),l=Math.sin(e[1]*.5),u=Math.cos(e[1]*.5),f=Math.sin(e[2]*.5),d=Math.cos(e[2]*.5);return t==="XYZ"?(i[0]=r*u*d+o*l*f,i[1]=o*l*d-r*u*f,i[2]=o*u*f+r*l*d,i[3]=o*u*d-r*l*f):t==="YXZ"?(i[0]=r*u*d+o*l*f,i[1]=o*l*d-r*u*f,i[2]=o*u*f-r*l*d,i[3]=o*u*d+r*l*f):t==="ZXY"?(i[0]=r*u*d-o*l*f,i[1]=o*l*d+r*u*f,i[2]=o*u*f+r*l*d,i[3]=o*u*d-r*l*f):t==="ZYX"?(i[0]=r*u*d-o*l*f,i[1]=o*l*d+r*u*f,i[2]=o*u*f-r*l*d,i[3]=o*u*d+r*l*f):t==="YZX"?(i[0]=r*u*d+o*l*f,i[1]=o*l*d+r*u*f,i[2]=o*u*f-r*l*d,i[3]=o*u*d-r*l*f):t==="XZY"&&(i[0]=r*u*d-o*l*f,i[1]=o*l*d-r*u*f,i[2]=o*u*f+r*l*d,i[3]=o*u*d+r*l*f),i}const LD=_D,OD=yD,PD=bD,BD=SD;class ID extends Array{constructor(e=0,t=0,r=0,o=1){super(e,t,r,o),this.onChange=()=>{},this._target=this;const l=["0","1","2","3"];return new Proxy(this,{set(u,f){const d=Reflect.set(...arguments);return d&&l.includes(f)&&u.onChange(),d}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return MD(this._target),this.onChange(),this}set(e,t,r,o){return e.length?this.copy(e):(OD(this._target,e,t,r,o),this.onChange(),this)}rotateX(e){return TD(this._target,this._target,e),this.onChange(),this}rotateY(e){return AD(this._target,this._target,e),this.onChange(),this}rotateZ(e){return RD(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return CD(this._target,e),this.onChange(),this}conjugate(e=this._target){return DD(this._target,e),this.onChange(),this}copy(e){return LD(this._target,e),this.onChange(),this}normalize(e=this._target){return BD(this._target,e),this.onChange(),this}multiply(e,t){return t?Wv(this._target,e,t):Wv(this._target,this._target,e),this.onChange(),this}dot(e){return PD(this._target,e)}fromMatrix3(e){return UD(this._target,e),this.onChange(),this}fromEuler(e,t){return ND(this._target,e,e.order),t||this.onChange(),this}fromAxisAngle(e,t){return ED(this._target,e,t),this.onChange(),this}slerp(e,t){return wD(this._target,this._target,e,t),this.onChange(),this}fromArray(e,t=0){return this._target[0]=e[t],this._target[1]=e[t+1],this._target[2]=e[t+2],this._target[3]=e[t+3],this.onChange(),this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e}}const FD=1e-6;function zD(i,e){return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=e[11],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15],i}function HD(i,e,t,r,o,l,u,f,d,p,g,x,v,y,b,M,S){return i[0]=e,i[1]=t,i[2]=r,i[3]=o,i[4]=l,i[5]=u,i[6]=f,i[7]=d,i[8]=p,i[9]=g,i[10]=x,i[11]=v,i[12]=y,i[13]=b,i[14]=M,i[15]=S,i}function GD(i){return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=1,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=1,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function VD(i,e){let t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],p=e[7],g=e[8],x=e[9],v=e[10],y=e[11],b=e[12],M=e[13],S=e[14],_=e[15],w=t*f-r*u,A=t*d-o*u,L=t*p-l*u,P=r*d-o*f,N=r*p-l*f,F=o*p-l*d,q=g*M-x*b,D=g*S-v*b,C=g*_-y*b,H=x*S-v*M,j=x*_-y*M,ne=v*_-y*S,ee=w*ne-A*j+L*H+P*C-N*D+F*q;return ee?(ee=1/ee,i[0]=(f*ne-d*j+p*H)*ee,i[1]=(o*j-r*ne-l*H)*ee,i[2]=(M*F-S*N+_*P)*ee,i[3]=(v*N-x*F-y*P)*ee,i[4]=(d*C-u*ne-p*D)*ee,i[5]=(t*ne-o*C+l*D)*ee,i[6]=(S*L-b*F-_*A)*ee,i[7]=(g*F-v*L+y*A)*ee,i[8]=(u*j-f*C+p*q)*ee,i[9]=(r*C-t*j-l*q)*ee,i[10]=(b*N-M*L+_*w)*ee,i[11]=(x*L-g*N-y*w)*ee,i[12]=(f*D-u*H-d*q)*ee,i[13]=(t*H-r*D+o*q)*ee,i[14]=(M*A-b*P-S*w)*ee,i[15]=(g*P-x*A+v*w)*ee,i):null}function ty(i){let e=i[0],t=i[1],r=i[2],o=i[3],l=i[4],u=i[5],f=i[6],d=i[7],p=i[8],g=i[9],x=i[10],v=i[11],y=i[12],b=i[13],M=i[14],S=i[15],_=e*u-t*l,w=e*f-r*l,A=e*d-o*l,L=t*f-r*u,P=t*d-o*u,N=r*d-o*f,F=p*b-g*y,q=p*M-x*y,D=p*S-v*y,C=g*M-x*b,H=g*S-v*b,j=x*S-v*M;return _*j-w*H+A*C+L*D-P*q+N*F}function qv(i,e,t){let r=e[0],o=e[1],l=e[2],u=e[3],f=e[4],d=e[5],p=e[6],g=e[7],x=e[8],v=e[9],y=e[10],b=e[11],M=e[12],S=e[13],_=e[14],w=e[15],A=t[0],L=t[1],P=t[2],N=t[3];return i[0]=A*r+L*f+P*x+N*M,i[1]=A*o+L*d+P*v+N*S,i[2]=A*l+L*p+P*y+N*_,i[3]=A*u+L*g+P*b+N*w,A=t[4],L=t[5],P=t[6],N=t[7],i[4]=A*r+L*f+P*x+N*M,i[5]=A*o+L*d+P*v+N*S,i[6]=A*l+L*p+P*y+N*_,i[7]=A*u+L*g+P*b+N*w,A=t[8],L=t[9],P=t[10],N=t[11],i[8]=A*r+L*f+P*x+N*M,i[9]=A*o+L*d+P*v+N*S,i[10]=A*l+L*p+P*y+N*_,i[11]=A*u+L*g+P*b+N*w,A=t[12],L=t[13],P=t[14],N=t[15],i[12]=A*r+L*f+P*x+N*M,i[13]=A*o+L*d+P*v+N*S,i[14]=A*l+L*p+P*y+N*_,i[15]=A*u+L*g+P*b+N*w,i}function kD(i,e,t){let r=t[0],o=t[1],l=t[2],u,f,d,p,g,x,v,y,b,M,S,_;return e===i?(i[12]=e[0]*r+e[4]*o+e[8]*l+e[12],i[13]=e[1]*r+e[5]*o+e[9]*l+e[13],i[14]=e[2]*r+e[6]*o+e[10]*l+e[14],i[15]=e[3]*r+e[7]*o+e[11]*l+e[15]):(u=e[0],f=e[1],d=e[2],p=e[3],g=e[4],x=e[5],v=e[6],y=e[7],b=e[8],M=e[9],S=e[10],_=e[11],i[0]=u,i[1]=f,i[2]=d,i[3]=p,i[4]=g,i[5]=x,i[6]=v,i[7]=y,i[8]=b,i[9]=M,i[10]=S,i[11]=_,i[12]=u*r+g*o+b*l+e[12],i[13]=f*r+x*o+M*l+e[13],i[14]=d*r+v*o+S*l+e[14],i[15]=p*r+y*o+_*l+e[15]),i}function XD(i,e,t){let r=t[0],o=t[1],l=t[2];return i[0]=e[0]*r,i[1]=e[1]*r,i[2]=e[2]*r,i[3]=e[3]*r,i[4]=e[4]*o,i[5]=e[5]*o,i[6]=e[6]*o,i[7]=e[7]*o,i[8]=e[8]*l,i[9]=e[9]*l,i[10]=e[10]*l,i[11]=e[11]*l,i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15],i}function WD(i,e,t,r){let o=r[0],l=r[1],u=r[2],f=Math.hypot(o,l,u),d,p,g,x,v,y,b,M,S,_,w,A,L,P,N,F,q,D,C,H,j,ne,ee,K;return Math.abs(f)<FD?null:(f=1/f,o*=f,l*=f,u*=f,d=Math.sin(t),p=Math.cos(t),g=1-p,x=e[0],v=e[1],y=e[2],b=e[3],M=e[4],S=e[5],_=e[6],w=e[7],A=e[8],L=e[9],P=e[10],N=e[11],F=o*o*g+p,q=l*o*g+u*d,D=u*o*g-l*d,C=o*l*g-u*d,H=l*l*g+p,j=u*l*g+o*d,ne=o*u*g+l*d,ee=l*u*g-o*d,K=u*u*g+p,i[0]=x*F+M*q+A*D,i[1]=v*F+S*q+L*D,i[2]=y*F+_*q+P*D,i[3]=b*F+w*q+N*D,i[4]=x*C+M*H+A*j,i[5]=v*C+S*H+L*j,i[6]=y*C+_*H+P*j,i[7]=b*C+w*H+N*j,i[8]=x*ne+M*ee+A*K,i[9]=v*ne+S*ee+L*K,i[10]=y*ne+_*ee+P*K,i[11]=b*ne+w*ee+N*K,e!==i&&(i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i)}function qD(i,e){return i[0]=e[12],i[1]=e[13],i[2]=e[14],i}function ny(i,e){let t=e[0],r=e[1],o=e[2],l=e[4],u=e[5],f=e[6],d=e[8],p=e[9],g=e[10];return i[0]=Math.hypot(t,r,o),i[1]=Math.hypot(l,u,f),i[2]=Math.hypot(d,p,g),i}function jD(i){let e=i[0],t=i[1],r=i[2],o=i[4],l=i[5],u=i[6],f=i[8],d=i[9],p=i[10];const g=e*e+t*t+r*r,x=o*o+l*l+u*u,v=f*f+d*d+p*p;return Math.sqrt(Math.max(g,x,v))}const iy=(function(){const i=[1,1,1];return function(e,t){let r=i;ny(r,t);let o=1/r[0],l=1/r[1],u=1/r[2],f=t[0]*o,d=t[1]*l,p=t[2]*u,g=t[4]*o,x=t[5]*l,v=t[6]*u,y=t[8]*o,b=t[9]*l,M=t[10]*u,S=f+x+M,_=0;return S>0?(_=Math.sqrt(S+1)*2,e[3]=.25*_,e[0]=(v-b)/_,e[1]=(y-p)/_,e[2]=(d-g)/_):f>x&&f>M?(_=Math.sqrt(1+f-x-M)*2,e[3]=(v-b)/_,e[0]=.25*_,e[1]=(d+g)/_,e[2]=(y+p)/_):x>M?(_=Math.sqrt(1+x-f-M)*2,e[3]=(y-p)/_,e[0]=(d+g)/_,e[1]=.25*_,e[2]=(v+b)/_):(_=Math.sqrt(1+M-f-x)*2,e[3]=(d-g)/_,e[0]=(y+p)/_,e[1]=(v+b)/_,e[2]=.25*_),e}})();function YD(i,e,t,r){let o=hl([i[0],i[1],i[2]]);const l=hl([i[4],i[5],i[6]]),u=hl([i[8],i[9],i[10]]);ty(i)<0&&(o=-o),t[0]=i[12],t[1]=i[13],t[2]=i[14];const d=i.slice(),p=1/o,g=1/l,x=1/u;d[0]*=p,d[1]*=p,d[2]*=p,d[4]*=g,d[5]*=g,d[6]*=g,d[8]*=x,d[9]*=x,d[10]*=x,iy(e,d),r[0]=o,r[1]=l,r[2]=u}function ZD(i,e,t,r){const o=i,l=e[0],u=e[1],f=e[2],d=e[3],p=l+l,g=u+u,x=f+f,v=l*p,y=l*g,b=l*x,M=u*g,S=u*x,_=f*x,w=d*p,A=d*g,L=d*x,P=r[0],N=r[1],F=r[2];return o[0]=(1-(M+_))*P,o[1]=(y+L)*P,o[2]=(b-A)*P,o[3]=0,o[4]=(y-L)*N,o[5]=(1-(v+_))*N,o[6]=(S+w)*N,o[7]=0,o[8]=(b+A)*F,o[9]=(S-w)*F,o[10]=(1-(v+M))*F,o[11]=0,o[12]=t[0],o[13]=t[1],o[14]=t[2],o[15]=1,o}function KD(i,e){let t=e[0],r=e[1],o=e[2],l=e[3],u=t+t,f=r+r,d=o+o,p=t*u,g=r*u,x=r*f,v=o*u,y=o*f,b=o*d,M=l*u,S=l*f,_=l*d;return i[0]=1-x-b,i[1]=g+_,i[2]=v-S,i[3]=0,i[4]=g-_,i[5]=1-p-b,i[6]=y+M,i[7]=0,i[8]=v+S,i[9]=y-M,i[10]=1-p-x,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function QD(i,e,t,r,o){let l=1/Math.tan(e/2),u=1/(r-o);return i[0]=l/t,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=l,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=(o+r)*u,i[11]=-1,i[12]=0,i[13]=0,i[14]=2*o*r*u,i[15]=0,i}function $D(i,e,t,r,o,l,u){let f=1/(e-t),d=1/(r-o),p=1/(l-u);return i[0]=-2*f,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=-2*d,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=2*p,i[11]=0,i[12]=(e+t)*f,i[13]=(o+r)*d,i[14]=(u+l)*p,i[15]=1,i}function JD(i,e,t,r){let o=e[0],l=e[1],u=e[2],f=r[0],d=r[1],p=r[2],g=o-t[0],x=l-t[1],v=u-t[2],y=g*g+x*x+v*v;y===0?v=1:(y=1/Math.sqrt(y),g*=y,x*=y,v*=y);let b=d*v-p*x,M=p*g-f*v,S=f*x-d*g;return y=b*b+M*M+S*S,y===0&&(p?f+=1e-6:d?p+=1e-6:d+=1e-6,b=d*v-p*x,M=p*g-f*v,S=f*x-d*g,y=b*b+M*M+S*S),y=1/Math.sqrt(y),b*=y,M*=y,S*=y,i[0]=b,i[1]=M,i[2]=S,i[3]=0,i[4]=x*S-v*M,i[5]=v*b-g*S,i[6]=g*M-x*b,i[7]=0,i[8]=g,i[9]=x,i[10]=v,i[11]=0,i[12]=o,i[13]=l,i[14]=u,i[15]=1,i}function jv(i,e,t){return i[0]=e[0]+t[0],i[1]=e[1]+t[1],i[2]=e[2]+t[2],i[3]=e[3]+t[3],i[4]=e[4]+t[4],i[5]=e[5]+t[5],i[6]=e[6]+t[6],i[7]=e[7]+t[7],i[8]=e[8]+t[8],i[9]=e[9]+t[9],i[10]=e[10]+t[10],i[11]=e[11]+t[11],i[12]=e[12]+t[12],i[13]=e[13]+t[13],i[14]=e[14]+t[14],i[15]=e[15]+t[15],i}function Yv(i,e,t){return i[0]=e[0]-t[0],i[1]=e[1]-t[1],i[2]=e[2]-t[2],i[3]=e[3]-t[3],i[4]=e[4]-t[4],i[5]=e[5]-t[5],i[6]=e[6]-t[6],i[7]=e[7]-t[7],i[8]=e[8]-t[8],i[9]=e[9]-t[9],i[10]=e[10]-t[10],i[11]=e[11]-t[11],i[12]=e[12]-t[12],i[13]=e[13]-t[13],i[14]=e[14]-t[14],i[15]=e[15]-t[15],i}function eU(i,e,t){return i[0]=e[0]*t,i[1]=e[1]*t,i[2]=e[2]*t,i[3]=e[3]*t,i[4]=e[4]*t,i[5]=e[5]*t,i[6]=e[6]*t,i[7]=e[7]*t,i[8]=e[8]*t,i[9]=e[9]*t,i[10]=e[10]*t,i[11]=e[11]*t,i[12]=e[12]*t,i[13]=e[13]*t,i[14]=e[14]*t,i[15]=e[15]*t,i}class ur extends Array{constructor(e=1,t=0,r=0,o=0,l=0,u=1,f=0,d=0,p=0,g=0,x=1,v=0,y=0,b=0,M=0,S=1){return super(e,t,r,o,l,u,f,d,p,g,x,v,y,b,M,S),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,t,r,o,l,u,f,d,p,g,x,v,y,b,M,S){return e.length?this.copy(e):(HD(this,e,t,r,o,l,u,f,d,p,g,x,v,y,b,M,S),this)}translate(e,t=this){return kD(this,t,e),this}rotate(e,t,r=this){return WD(this,r,e,t),this}scale(e,t=this){return XD(this,t,typeof e=="number"?[e,e,e]:e),this}add(e,t){return t?jv(this,e,t):jv(this,this,e),this}sub(e,t){return t?Yv(this,e,t):Yv(this,this,e),this}multiply(e,t){return e.length?t?qv(this,e,t):qv(this,this,e):eU(this,this,e),this}identity(){return GD(this),this}copy(e){return zD(this,e),this}fromPerspective({fov:e,aspect:t,near:r,far:o}={}){return QD(this,e,t,r,o),this}fromOrthogonal({left:e,right:t,bottom:r,top:o,near:l,far:u}){return $D(this,e,t,r,o,l,u),this}fromQuaternion(e){return KD(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return VD(this,e),this}compose(e,t,r){return ZD(this,e,t,r),this}decompose(e,t,r){return YD(this,e,t,r),this}getRotation(e){return iy(e,this),this}getTranslation(e){return qD(e,this),this}getScaling(e){return ny(e,this),this}getMaxScaleOnAxis(){return jD(this)}lookAt(e,t,r){return JD(this,e,t,r),this}determinant(){return ty(this)}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this[3]=e[t+3],this[4]=e[t+4],this[5]=e[t+5],this[6]=e[t+6],this[7]=e[t+7],this[8]=e[t+8],this[9]=e[t+9],this[10]=e[t+10],this[11]=e[t+11],this[12]=e[t+12],this[13]=e[t+13],this[14]=e[t+14],this[15]=e[t+15],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e[t+4]=this[4],e[t+5]=this[5],e[t+6]=this[6],e[t+7]=this[7],e[t+8]=this[8],e[t+9]=this[9],e[t+10]=this[10],e[t+11]=this[11],e[t+12]=this[12],e[t+13]=this[13],e[t+14]=this[14],e[t+15]=this[15],e}}function tU(i,e,t="YXZ"){return t==="XYZ"?(i[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(i[0]=Math.atan2(-e[9],e[10]),i[2]=Math.atan2(-e[4],e[0])):(i[0]=Math.atan2(e[6],e[5]),i[2]=0)):t==="YXZ"?(i[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(i[1]=Math.atan2(e[8],e[10]),i[2]=Math.atan2(e[1],e[5])):(i[1]=Math.atan2(-e[2],e[0]),i[2]=0)):t==="ZXY"?(i[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(i[1]=Math.atan2(-e[2],e[10]),i[2]=Math.atan2(-e[4],e[5])):(i[1]=0,i[2]=Math.atan2(e[1],e[0]))):t==="ZYX"?(i[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(i[0]=Math.atan2(e[6],e[10]),i[2]=Math.atan2(e[1],e[0])):(i[0]=0,i[2]=Math.atan2(-e[4],e[5]))):t==="YZX"?(i[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(i[0]=Math.atan2(-e[9],e[5]),i[1]=Math.atan2(-e[2],e[0])):(i[0]=0,i[1]=Math.atan2(e[8],e[10]))):t==="XZY"&&(i[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(i[0]=Math.atan2(e[6],e[5]),i[1]=Math.atan2(e[8],e[0])):(i[0]=Math.atan2(-e[9],e[10]),i[1]=0)),i}const Zv=new ur;class nU extends Array{constructor(e=0,t=e,r=e,o="YXZ"){super(e,t,r),this.order=o,this.onChange=()=>{},this._target=this;const l=["0","1","2"];return new Proxy(this,{set(u,f){const d=Reflect.set(...arguments);return d&&l.includes(f)&&u.onChange(),d}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,t=e,r=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=t,this._target[2]=r,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,t=this.order){return tU(this._target,e,t),this.onChange(),this}fromQuaternion(e,t=this.order,r){return Zv.fromQuaternion(e),this._target.fromRotationMatrix(Zv,t),r||this.onChange(),this}fromArray(e,t=0){return this._target[0]=e[t],this._target[1]=e[t+1],this._target[2]=e[t+2],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e}}class Hp{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new ur,this.worldMatrix=new ur,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new gn,this.quaternion=new ID,this.scale=new gn(1),this.rotation=new nU,this.up=new gn(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,t=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,t&&e&&e.addChild(this,!1)}addChild(e,t=!0){~this.children.indexOf(e)||this.children.push(e),t&&e.setParent(this,!1)}removeChild(e,t=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),t&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let t=0,r=this.children.length;t<r;t++)this.children[t].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let t=0,r=this.children.length;t<r;t++)this.children[t].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,t=!1){t?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}const iU=new ur,aU=new gn,rU=new gn;class sU extends Hp{constructor(e,{near:t=.1,far:r=100,fov:o=45,aspect:l=1,left:u,right:f,bottom:d,top:p,zoom:g=1}={}){super(),Object.assign(this,{near:t,far:r,fov:o,aspect:l,left:u,right:f,bottom:d,top:p,zoom:g}),this.projectionMatrix=new ur,this.viewMatrix=new ur,this.projectionViewMatrix=new ur,this.worldPosition=new gn,this.type=u||f?"orthographic":"perspective",this.type==="orthographic"?this.orthographic():this.perspective()}perspective({near:e=this.near,far:t=this.far,fov:r=this.fov,aspect:o=this.aspect}={}){return Object.assign(this,{near:e,far:t,fov:r,aspect:o}),this.projectionMatrix.fromPerspective({fov:r*(Math.PI/180),aspect:o,near:e,far:t}),this.type="perspective",this}orthographic({near:e=this.near,far:t=this.far,left:r=this.left||-1,right:o=this.right||1,bottom:l=this.bottom||-1,top:u=this.top||1,zoom:f=this.zoom}={}){return Object.assign(this,{near:e,far:t,left:r,right:o,bottom:l,top:u,zoom:f}),r/=f,o/=f,l/=f,u/=f,this.projectionMatrix.fromOrthogonal({left:r,right:o,bottom:l,top:u,near:e,far:t}),this.type="orthographic",this}updateMatrixWorld(){return super.updateMatrixWorld(),this.viewMatrix.inverse(this.worldMatrix),this.worldMatrix.getTranslation(this.worldPosition),this.projectionViewMatrix.multiply(this.projectionMatrix,this.viewMatrix),this}updateProjectionMatrix(){return this.type==="perspective"?this.perspective():this.orthographic()}lookAt(e){return super.lookAt(e,!0),this}project(e){return e.applyMatrix4(this.viewMatrix),e.applyMatrix4(this.projectionMatrix),this}unproject(e){return e.applyMatrix4(iU.inverse(this.projectionMatrix)),e.applyMatrix4(this.worldMatrix),this}updateFrustum(){this.frustum||(this.frustum=[new gn,new gn,new gn,new gn,new gn,new gn]);const e=this.projectionViewMatrix;this.frustum[0].set(e[3]-e[0],e[7]-e[4],e[11]-e[8]).constant=e[15]-e[12],this.frustum[1].set(e[3]+e[0],e[7]+e[4],e[11]+e[8]).constant=e[15]+e[12],this.frustum[2].set(e[3]+e[1],e[7]+e[5],e[11]+e[9]).constant=e[15]+e[13],this.frustum[3].set(e[3]-e[1],e[7]-e[5],e[11]-e[9]).constant=e[15]-e[13],this.frustum[4].set(e[3]-e[2],e[7]-e[6],e[11]-e[10]).constant=e[15]-e[14],this.frustum[5].set(e[3]+e[2],e[7]+e[6],e[11]+e[10]).constant=e[15]+e[14];for(let t=0;t<6;t++){const r=1/this.frustum[t].distance();this.frustum[t].multiply(r),this.frustum[t].constant*=r}}frustumIntersectsMesh(e,t=e.worldMatrix){if(!e.geometry.attributes.position||((!e.geometry.bounds||e.geometry.bounds.radius===1/0)&&e.geometry.computeBoundingSphere(),!e.geometry.bounds))return!0;const r=aU;r.copy(e.geometry.bounds.center),r.applyMatrix4(t);const o=e.geometry.bounds.radius*t.getMaxScaleOnAxis();return this.frustumIntersectsSphere(r,o)}frustumIntersectsSphere(e,t){const r=rU;for(let o=0;o<6;o++){const l=this.frustum[o];if(r.copy(l).dot(e)+l.constant<-t)return!1}return!0}}function oU(i,e){return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[4],i[4]=e[5],i[5]=e[6],i[6]=e[8],i[7]=e[9],i[8]=e[10],i}function lU(i,e){let t=e[0],r=e[1],o=e[2],l=e[3],u=t+t,f=r+r,d=o+o,p=t*u,g=r*u,x=r*f,v=o*u,y=o*f,b=o*d,M=l*u,S=l*f,_=l*d;return i[0]=1-x-b,i[3]=g-_,i[6]=v+S,i[1]=g+_,i[4]=1-p-b,i[7]=y-M,i[2]=v-S,i[5]=y+M,i[8]=1-p-x,i}function cU(i,e){return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[8]=e[8],i}function uU(i,e,t,r,o,l,u,f,d,p){return i[0]=e,i[1]=t,i[2]=r,i[3]=o,i[4]=l,i[5]=u,i[6]=f,i[7]=d,i[8]=p,i}function fU(i){return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=1,i[5]=0,i[6]=0,i[7]=0,i[8]=1,i}function hU(i,e){let t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],p=e[7],g=e[8],x=g*u-f*p,v=-g*l+f*d,y=p*l-u*d,b=t*x+r*v+o*y;return b?(b=1/b,i[0]=x*b,i[1]=(-g*r+o*p)*b,i[2]=(f*r-o*u)*b,i[3]=v*b,i[4]=(g*t-o*d)*b,i[5]=(-f*t+o*l)*b,i[6]=y*b,i[7]=(-p*t+r*d)*b,i[8]=(u*t-r*l)*b,i):null}function Kv(i,e,t){let r=e[0],o=e[1],l=e[2],u=e[3],f=e[4],d=e[5],p=e[6],g=e[7],x=e[8],v=t[0],y=t[1],b=t[2],M=t[3],S=t[4],_=t[5],w=t[6],A=t[7],L=t[8];return i[0]=v*r+y*u+b*p,i[1]=v*o+y*f+b*g,i[2]=v*l+y*d+b*x,i[3]=M*r+S*u+_*p,i[4]=M*o+S*f+_*g,i[5]=M*l+S*d+_*x,i[6]=w*r+A*u+L*p,i[7]=w*o+A*f+L*g,i[8]=w*l+A*d+L*x,i}function dU(i,e,t){let r=e[0],o=e[1],l=e[2],u=e[3],f=e[4],d=e[5],p=e[6],g=e[7],x=e[8],v=t[0],y=t[1];return i[0]=r,i[1]=o,i[2]=l,i[3]=u,i[4]=f,i[5]=d,i[6]=v*r+y*u+p,i[7]=v*o+y*f+g,i[8]=v*l+y*d+x,i}function pU(i,e,t){let r=e[0],o=e[1],l=e[2],u=e[3],f=e[4],d=e[5],p=e[6],g=e[7],x=e[8],v=Math.sin(t),y=Math.cos(t);return i[0]=y*r+v*u,i[1]=y*o+v*f,i[2]=y*l+v*d,i[3]=y*u-v*r,i[4]=y*f-v*o,i[5]=y*d-v*l,i[6]=p,i[7]=g,i[8]=x,i}function mU(i,e,t){let r=t[0],o=t[1];return i[0]=r*e[0],i[1]=r*e[1],i[2]=r*e[2],i[3]=o*e[3],i[4]=o*e[4],i[5]=o*e[5],i[6]=e[6],i[7]=e[7],i[8]=e[8],i}function gU(i,e){let t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],p=e[7],g=e[8],x=e[9],v=e[10],y=e[11],b=e[12],M=e[13],S=e[14],_=e[15],w=t*f-r*u,A=t*d-o*u,L=t*p-l*u,P=r*d-o*f,N=r*p-l*f,F=o*p-l*d,q=g*M-x*b,D=g*S-v*b,C=g*_-y*b,H=x*S-v*M,j=x*_-y*M,ne=v*_-y*S,ee=w*ne-A*j+L*H+P*C-N*D+F*q;return ee?(ee=1/ee,i[0]=(f*ne-d*j+p*H)*ee,i[1]=(d*C-u*ne-p*D)*ee,i[2]=(u*j-f*C+p*q)*ee,i[3]=(o*j-r*ne-l*H)*ee,i[4]=(t*ne-o*C+l*D)*ee,i[5]=(r*C-t*j-l*q)*ee,i[6]=(M*F-S*N+_*P)*ee,i[7]=(S*L-b*F-_*A)*ee,i[8]=(b*N-M*L+_*w)*ee,i):null}class xU extends Array{constructor(e=1,t=0,r=0,o=0,l=1,u=0,f=0,d=0,p=1){return super(e,t,r,o,l,u,f,d,p),this}set(e,t,r,o,l,u,f,d,p){return e.length?this.copy(e):(uU(this,e,t,r,o,l,u,f,d,p),this)}translate(e,t=this){return dU(this,t,e),this}rotate(e,t=this){return pU(this,t,e),this}scale(e,t=this){return mU(this,t,e),this}multiply(e,t){return t?Kv(this,e,t):Kv(this,this,e),this}identity(){return fU(this),this}copy(e){return cU(this,e),this}fromMatrix4(e){return oU(this,e),this}fromQuaternion(e){return lU(this,e),this}fromBasis(e,t,r){return this.set(e[0],e[1],e[2],t[0],t[1],t[2],r[0],r[1],r[2]),this}inverse(e=this){return hU(this,e),this}getNormalMatrix(e){return gU(this,e),this}}let vU=0;class ay extends Hp{constructor(e,{geometry:t,program:r,mode:o=e.TRIANGLES,frustumCulled:l=!0,renderOrder:u=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=vU++,this.geometry=t,this.program=r,this.mode=o,this.frustumCulled=l,this.renderOrder=u,this.modelViewMatrix=new ur,this.normalMatrix=new xU,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(r=>r&&r({mesh:this,camera:e}));let t=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:t}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(r=>r&&r({mesh:this,camera:e}))}}const Qv=new Uint8Array(4);function $v(i){return(i&i-1)===0}let _U=1;class ry{constructor(e,{image:t,target:r=e.TEXTURE_2D,type:o=e.UNSIGNED_BYTE,format:l=e.RGBA,internalFormat:u=l,wrapS:f=e.CLAMP_TO_EDGE,wrapT:d=e.CLAMP_TO_EDGE,wrapR:p=e.CLAMP_TO_EDGE,generateMipmaps:g=r===(e.TEXTURE_2D||e.TEXTURE_CUBE_MAP),minFilter:x=g?e.NEAREST_MIPMAP_LINEAR:e.LINEAR,magFilter:v=e.LINEAR,premultiplyAlpha:y=!1,unpackAlignment:b=4,flipY:M=r==(e.TEXTURE_2D||e.TEXTURE_3D),anisotropy:S=0,level:_=0,width:w,height:A=w,length:L=1}={}){this.gl=e,this.id=_U++,this.image=t,this.target=r,this.type=o,this.format=l,this.internalFormat=u,this.minFilter=x,this.magFilter=v,this.wrapS=f,this.wrapT=d,this.wrapR=p,this.generateMipmaps=g,this.premultiplyAlpha=y,this.unpackAlignment=b,this.flipY=M,this.anisotropy=Math.min(S,this.gl.renderer.parameters.maxAnisotropy),this.level=_,this.width=w,this.height=A,this.length=L,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(e=0){const t=!(this.image===this.store.image&&!this.needsUpdate);if((t||this.glState.textureUnits[e]!==this.id)&&(this.gl.renderer.activeTexture(e),this.bind()),!!t){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.wrapR!==this.state.wrapR&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_R,this.wrapR),this.state.wrapR=this.wrapR),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let r=0;r<6;r++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+r,this.level,this.internalFormat,this.format,this.type,this.image[r]);else if(ArrayBuffer.isView(this.image))this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image):(this.target===this.gl.TEXTURE_2D_ARRAY||this.target===this.gl.TEXTURE_3D)&&this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let r=0;r<this.image.length;r++)this.gl.compressedTexImage2D(this.target,r,this.internalFormat,this.image[r].width,this.image[r].height,0,this.image[r].data);else this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!$v(this.image.width)||!$v(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let r=0;r<6;r++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,Qv);else this.width?this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,Qv);this.store.image=this.image}}}class Uu extends hD{constructor(e,{width:t=1,height:r=1,widthSegments:o=1,heightSegments:l=1,attributes:u={}}={}){const f=o,d=l,p=(f+1)*(d+1),g=f*d*6,x=new Float32Array(p*3),v=new Float32Array(p*3),y=new Float32Array(p*2),b=g>65536?new Uint32Array(g):new Uint16Array(g);Uu.buildPlane(x,v,y,b,t,r,0,f,d),Object.assign(u,{position:{size:3,data:x},normal:{size:3,data:v},uv:{size:2,data:y},index:{data:b}}),super(e,u)}static buildPlane(e,t,r,o,l,u,f,d,p,g=0,x=1,v=2,y=1,b=-1,M=0,S=0){const _=M,w=l/d,A=u/p;for(let L=0;L<=p;L++){let P=L*A-u/2;for(let N=0;N<=d;N++,M++){let F=N*w-l/2;if(e[M*3+g]=F*y,e[M*3+x]=P*b,e[M*3+v]=f/2,t[M*3+g]=0,t[M*3+x]=0,t[M*3+v]=f>=0?1:-1,r[M*2]=N/d,r[M*2+1]=1-L/p,L===p||N===d)continue;let q=_+N+L*(d+1),D=_+N+(L+1)*(d+1),C=_+N+(L+1)*(d+1)+1,H=_+N+L*(d+1)+1;o[S*6]=q,o[S*6+1]=D,o[S*6+2]=H,o[S*6+3]=D,o[S*6+4]=C,o[S*6+5]=H,S++}}}}function yU(i,e){let t;return function(...r){clearTimeout(t),t=setTimeout(()=>i.apply(this,r),e)}}function SU(i,e,t){return i+(e-i)*t}function bU(i){const e=Object.getPrototypeOf(i);Object.getOwnPropertyNames(e).forEach(t=>{t!=="constructor"&&typeof i[t]=="function"&&(i[t]=i[t].bind(i))})}function MU(i,e,t="bold 42px Figtree",r="white"){const o=document.createElement("canvas"),l=o.getContext("2d"),u=500,f=42,d=f*1.25;l.font=`${f}px Figtree`;const p=e.split(" ");let g="";const x=[];p.forEach(M=>{const S=g+M+" ";l.measureText(S).width>u?(x.push(g.trim()),g=M+" "):g=S}),x.push(g.trim());const v=window.devicePixelRatio||1;o.width=u*v,o.height=(d*x.length+40)*v,l.scale(v,v),l.font=`${f}px Figtree`,l.fillStyle=r,l.textAlign="center",l.textBaseline="top";const y=20;x.forEach((M,S)=>{l.fillText(M,u/2,y+S*d)});const b=new ry(i,{generateMipmaps:!0});return b.image=o,{texture:b,width:o.width,height:o.height}}class EU{constructor({gl:e,plane:t,renderer:r,text:o,textColor:l="#545050",font:u="30px sans-serif"}){bU(this),this.gl=e,this.plane=t,this.renderer=r,this.text=o,this.textColor=l,this.font=u,this.createMesh()}createMesh(){const{texture:e,width:t,height:r}=MU(this.gl,this.text,"bold 42px Figtree",this.textColor),o=new Uu(this.gl),l=new ey(this.gl,{vertex:`
      attribute vec3 position;
      attribute vec2 uv;
      uniform mat4 modelViewMatrix;
      uniform mat4 projectionMatrix;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragment:`
      precision highp float;
      uniform sampler2D tMap;
      uniform float uOpacity;
      varying vec2 vUv;
      void main() {
        vec4 c = texture2D(tMap, vUv);
        if (c.a < 0.1) discard;
        gl_FragColor = vec4(c.rgb, c.a * uOpacity);
      }
    `,uniforms:{tMap:{value:e},uOpacity:{value:0}},transparent:!0});this.mesh=new ay(this.gl,{geometry:o,program:l});const u=t/r,f=this.plane.scale.y*.28,d=f*u;this.mesh.scale.set(d,f,1),this.mesh.position.y=-this.plane.scale.y*.55-f*.35,this.mesh.setParent(this.plane)}}class TU{constructor({geometry:e,gl:t,image:r,index:o,length:l,renderer:u,scene:f,screen:d,text:p,viewport:g,bend:x,textColor:v,borderRadius:y=0,font:b}){this.extra=0,this.geometry=e,this.gl=t,this.image=r,this.index=o,this.length=l,this.renderer=u,this.scene=f,this.screen=d,this.text=p,this.viewport=g,this.bend=x,this.textColor=v,this.borderRadius=y,this.font=b,this.createShader(),this.createMesh(),this.createTitle(),this.onResize()}createShader(){const e=new ry(this.gl,{generateMipmaps:!0});this.program=new ey(this.gl,{depthTest:!1,depthWrite:!1,vertex:`
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          // 🔥 removed wavy displacement – keep p.z flat
          p.z = 0.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,fragment:`
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;
        
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }
        
        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );
          vec4 color = texture2D(tMap, uv);
          
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          
          // Smooth antialiasing for edges
          float edgeSmooth = 0.002;
          float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);
          
          gl_FragColor = vec4(color.rgb, alpha);
        }
      `,uniforms:{tMap:{value:e},uPlaneSizes:{value:[0,0]},uImageSizes:{value:[0,0]},uSpeed:{value:0},uTime:{value:100*Math.random()},uBorderRadius:{value:this.borderRadius}},transparent:!0});const t=new Image;t.crossOrigin="anonymous",t.src=this.image,t.onload=()=>{e.image=t,this.program.uniforms.uImageSizes.value=[t.naturalWidth,t.naturalHeight]}}createMesh(){this.plane=new ay(this.gl,{geometry:this.geometry,program:this.program}),this.plane.setParent(this.scene)}createTitle(){this.title=new EU({gl:this.gl,plane:this.plane,renderer:this.renderer,text:this.text,textColor:this.textColor,fontFamily:this.font})}update(e,t){this.plane.position.x=this.x-e.current-this.extra;const r=this.plane.position.x,o=this.viewport.width/2;if(this.bend===0)this.plane.position.y=0,this.plane.rotation.z=0;else{const f=Math.abs(this.bend),d=(o*o+f*f)/(2*f),p=Math.min(Math.abs(r),o),g=d-Math.sqrt(d*d-p*p);this.bend>0?(this.plane.position.y=-g,this.plane.rotation.z=-Math.sign(r)*Math.asin(p/d)):(this.plane.position.y=g,this.plane.rotation.z=Math.sign(r)*Math.asin(p/d))}this.speed=e.current-e.last,this.program.uniforms.uTime.value+=.04,this.program.uniforms.uSpeed.value=this.speed;const l=this.plane.scale.x/2,u=this.viewport.width/2;this.isBefore=this.plane.position.x+l<-u,this.isAfter=this.plane.position.x-l>u,t==="right"&&this.isBefore&&(this.extra-=this.widthTotal,this.isBefore=this.isAfter=!1),t==="left"&&this.isAfter&&(this.extra+=this.widthTotal,this.isBefore=this.isAfter=!1)}onResize({screen:e,viewport:t}={}){e&&(this.screen=e),t&&(this.viewport=t,this.plane.program.uniforms.uViewportSizes&&(this.plane.program.uniforms.uViewportSizes.value=[this.viewport.width,this.viewport.height])),this.scale=this.screen.height/1500,this.plane.scale.y=this.viewport.height*(900*this.scale)/this.screen.height,this.plane.scale.x=this.viewport.width*(700*this.scale)/this.screen.width,this.plane.program.uniforms.uPlaneSizes.value=[this.plane.scale.x,this.plane.scale.y],this.padding=4,this.width=this.plane.scale.x+this.padding,this.widthTotal=this.width*this.length,this.x=this.width*this.index}}let AU=class{constructor(e,{items:t,bend:r,textColor:o="#ffffff",borderRadius:l=0,font:u="bold 30px Figtree",scrollSpeed:f=2,scrollEase:d=.05}={}){document.documentElement.classList.remove("no-js"),this.container=e,this.scrollSpeed=f,this.scroll={ease:d,current:0,target:0,last:0},this.onCheckDebounce=yU(this.onCheck,200),this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.createGeometry(),this.createMedias(t,r,o,l,u),this.update(),this.addEventListeners()}createRenderer(){this.renderer=new vD({alpha:!0,antialias:!0,dpr:Math.min(window.devicePixelRatio||1,2)}),this.gl=this.renderer.gl,this.gl.clearColor(0,0,0,0),this.container.appendChild(this.gl.canvas)}createCamera(){this.camera=new sU(this.gl),this.camera.fov=45,this.camera.position.z=20}createScene(){this.scene=new Hp}createGeometry(){this.planeGeometry=new Uu(this.gl,{heightSegments:50,widthSegments:100})}createMedias(e,t=1,r,o,l){const u=[{image:"https://picsum.photos/seed/1/800/600?grayscale",text:"Bridge"},{image:"https://picsum.photos/seed/2/800/600?grayscale",text:"Desk Setup"},{image:"https://picsum.photos/seed/3/800/600?grayscale",text:"Waterfall"},{image:"https://picsum.photos/seed/4/800/600?grayscale",text:"Strawberries"},{image:"https://picsum.photos/seed/5/800/600?grayscale",text:"Deep Diving"},{image:"https://picsum.photos/seed/16/800/600?grayscale",text:"Train Track"},{image:"https://picsum.photos/seed/17/800/600?grayscale",text:"Santorini"},{image:"https://picsum.photos/seed/8/800/600?grayscale",text:"Blurry Lights"},{image:"https://picsum.photos/seed/9/800/600?grayscale",text:"New York"},{image:"https://picsum.photos/seed/10/800/600?grayscale",text:"Good Boy"},{image:"https://picsum.photos/seed/21/800/600?grayscale",text:"Coastline"},{image:"https://picsum.photos/seed/12/800/600?grayscale",text:"Palm Trees"}],f=e&&e.length?e:u;this.mediasImages=f.concat(f),this.medias=this.mediasImages.map((d,p)=>new TU({geometry:this.planeGeometry,gl:this.gl,image:d.image,index:p,length:this.mediasImages.length,renderer:this.renderer,scene:this.scene,screen:this.screen,text:d.text,viewport:this.viewport,bend:t,textColor:r,borderRadius:o,font:l}))}onTouchDown(e){this.isDown=!0,this.scroll.position=this.scroll.current,this.start=e.touches?e.touches[0].clientX:e.clientX}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientX:e.clientX,r=(this.start-t)*(this.scrollSpeed*.025);this.scroll.target=this.scroll.position+r}onTouchUp(){this.isDown=!1,this.onCheck()}onWheel(e){const t=e.deltaY||e.wheelDelta||e.detail;this.scroll.target+=(t>0?this.scrollSpeed:-this.scrollSpeed)*.2,this.onCheckDebounce()}onCheck(){if(!this.medias||!this.medias[0])return;const e=this.medias[0].width,t=Math.round(Math.abs(this.scroll.target)/e),r=e*t;this.scroll.target=this.scroll.target<0?-r:r}onResize(){this.screen={width:this.container.clientWidth,height:this.container.clientHeight},this.renderer.setSize(this.screen.width,this.screen.height),this.camera.perspective({aspect:this.screen.width/this.screen.height});const e=this.camera.fov*Math.PI/180,t=2*Math.tan(e/2)*this.camera.position.z,r=t*this.camera.aspect;this.viewport={width:r,height:t},this.medias&&this.medias.forEach(o=>o.onResize({screen:this.screen,viewport:this.viewport}))}update(){this.scroll.current=SU(this.scroll.current,this.scroll.target,this.scroll.ease);const e=this.scroll.current>this.scroll.last?"right":"left";this.medias&&this.medias.forEach(t=>t.update(this.scroll,e)),this.renderer.render({scene:this.scene,camera:this.camera}),this.scroll.last=this.scroll.current,this.raf=window.requestAnimationFrame(this.update.bind(this))}addEventListeners(){this.boundOnResize=this.onResize.bind(this),this.boundOnWheel=this.onWheel.bind(this),this.boundOnTouchDown=this.onTouchDown.bind(this),this.boundOnTouchMove=this.onTouchMove.bind(this),this.boundOnTouchUp=this.onTouchUp.bind(this),window.addEventListener("resize",this.boundOnResize),window.addEventListener("mousewheel",this.boundOnWheel),window.addEventListener("wheel",this.boundOnWheel),window.addEventListener("mousedown",this.boundOnTouchDown),window.addEventListener("mousemove",this.boundOnTouchMove),window.addEventListener("mouseup",this.boundOnTouchUp),window.addEventListener("touchstart",this.boundOnTouchDown),window.addEventListener("touchmove",this.boundOnTouchMove),window.addEventListener("touchend",this.onTouchUp)}destroy(){window.cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.boundOnResize),window.removeEventListener("mousewheel",this.boundOnWheel),window.removeEventListener("wheel",this.boundOnWheel),window.removeEventListener("mousedown",this.boundOnTouchDown),window.removeEventListener("mousemove",this.boundOnTouchMove),window.removeEventListener("mouseup",this.boundOnTouchUp),window.removeEventListener("touchstart",this.boundOnTouchDown),window.removeEventListener("touchmove",this.boundOnTouchMove),window.removeEventListener("touchend",this.onTouchUp),this.renderer&&this.renderer.gl&&this.renderer.gl.canvas.parentNode&&this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas)}};function RU({items:i,bend:e=3,textColor:t="#ffffff",borderRadius:r=.05,font:o="bold 30px Figtree",scrollSpeed:l=2,scrollEase:u=.05}){const f=ue.useRef(null);return ue.useEffect(()=>{const d=new AU(f.current,{items:i,bend:e,textColor:t,borderRadius:r,font:o,scrollSpeed:l,scrollEase:u});return()=>{d.destroy()}},[i,e,t,r,o,l,u]),G.jsx("div",{className:"circular-gallery",ref:f})}const wU="/my-portfolio/assets/agfselfie-COPRDC9p.jpg",CU="/my-portfolio/assets/boatselfie-DQ77fE6h.jpeg",DU="/my-portfolio/assets/injuryselfie-5k7eKXnn.jpg",UU="/my-portfolio/assets/lacabraselfie-DqGCd6te.jpg",NU="/my-portfolio/assets/madsselfie-DlevVqV-.jpg",LU="/my-portfolio/assets/waterpoloselfie-BxXnNcBE.JPG";function OU(){return G.jsx("div",{className:Pv.introWrapper,children:G.jsxs("div",{className:Pv.textBlock,children:[G.jsx(RU,{items:[{image:wU,text:"I Enjoy a good Superliga game"},{image:CU,text:"Worked in Ebeltoft for a summer focusing on my Danish"},{image:DU,text:"A short football injury can't stop me!"},{image:UU,text:"I have a BMO addiction"},{image:NU,text:"I met Mads Mikkelsen in Tokyo"},{image:LU,text:"I love playing waterpolo"}],bend:2,textColor:"#fff",borderRadius:.06},"intro-gallery"),G.jsx("p",{children:"I have driven to all 49 states you can drive to (multiple times), lived in multiple states and countries, and even learned a few languages! Through experiencing different cultures deeply and intently, I have gained an understanding of how people respond differently to interactions and environments. This has helped me become a more empathetic and adaptable person, which I believe are crucial qualities for a successful designer."})]})})}const PU="_carousel_n2dr4_1",BU="_images_n2dr4_27",IU="_arrow_n2dr4_49",FU="_arrowLeft_n2dr4_99",zU="_arrowRight_n2dr4_107",HU="_imageWrapper_n2dr4_127",GU="_overlay_n2dr4_169",rr={carousel:PU,images:BU,arrow:IU,arrowLeft:FU,arrowRight:zU,imageWrapper:HU,overlay:GU};function VU({images:i}){const[e,t]=ue.useState(0),[r,o]=ue.useState(3);ue.useEffect(()=>{const d=()=>{window.innerWidth<=700?o(1):window.innerWidth<=1100?o(2):o(3)};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]);const l=()=>{t(d=>(d+r)%i.length)},u=()=>{t(d=>(d-r+i.length)%i.length)},f=i.slice(e,e+r).concat(e+r>i.length?i.slice(0,(e+r)%i.length):[]);return G.jsxs("div",{className:rr.carousel,children:[G.jsx("button",{onClick:u,className:`${rr.arrow} ${rr.arrowLeft}`,children:"‹"}),G.jsx("div",{className:rr.images,children:f.map((d,p)=>G.jsxs("div",{className:rr.imageWrapper,children:[G.jsx("img",{src:d.src,alt:`Photography ${p}`}),G.jsx("div",{className:rr.overlay,children:G.jsx("p",{children:d.description})})]},p))}),G.jsx("button",{onClick:l,className:`${rr.arrow} ${rr.arrowRight}`,children:"›"})]})}const sy=ue.createContext();function kU({children:i}){const e=ue.useRef(null),t=r=>{e.current&&e.current!==r&&e.current.pause(),e.current=r};return G.jsx(sy.Provider,{value:{registerVideo:t},children:i})}const XU="_hero_2j4wt_1",WU="_video_2j4wt_25",qU="_playPauseButton_2j4wt_35",Rd={hero:XU,video:WU,playPauseButton:qU},jU="_mediaWrapper_ou8qy_1",YU="_media_ou8qy_1",ZU="_overlay_ou8qy_45",wd={mediaWrapper:jU,media:YU,overlay:ZU};function KU({src:i,alt:e,title:t,description:r}){const o=ue.useRef(null),[l,u]=ue.useState(!1),{registerVideo:f}=ue.useContext(sy),d=()=>{o.current&&(l?o.current.pause():(o.current.play(),f(o.current)),u(!l))};return G.jsxs("div",{className:`${Rd.hero} ${wd.mediaWrapper}`,children:[G.jsxs("video",{ref:o,loop:!0,playsInline:!0,className:`${Rd.video} ${wd.media}`,onPlay:()=>f(o.current),children:[G.jsx("source",{src:i,type:"video/mp4"}),e]}),G.jsx("div",{className:wd.overlay,children:G.jsxs("div",{children:[G.jsx("h3",{children:t}),G.jsx("p",{children:r})]})}),G.jsx("button",{className:Rd.playPauseButton,onClick:d,children:l?"❚❚":"▶"})]})}const QU="_bookRow_r7ydi_1",$U="_rowTitle_r7ydi_21",JU="_booksContainer_r7ydi_37",eN="_bookWrapper_r7ydi_51",tN="_bookCover_r7ydi_81",nN="_overlay_r7ydi_93",Hr={bookRow:QU,rowTitle:$U,booksContainer:JU,bookWrapper:eN,bookCover:tN,overlay:nN};function iN({books:i,title:e}){const[t,r]=ue.useState(null);return G.jsxs("div",{className:Hr.bookRow,children:[G.jsx("h3",{className:Hr.rowTitle,children:e}),G.jsx("div",{className:Hr.booksContainer,children:i.map((o,l)=>G.jsxs("div",{className:`${Hr.bookWrapper} ${t===l?Hr.hovered:""}`,onMouseEnter:()=>r(l),onMouseLeave:()=>r(null),children:[G.jsx("img",{src:o.cover,alt:o.alt,className:Hr.bookCover}),t===l&&G.jsx("div",{className:Hr.overlay,children:G.jsx("p",{children:o.description})})]},l))})]})}const aN="_aboutPage_1s8am_1",rN="_pixelBackground_1s8am_15",Xs={aboutPage:aN,pixelBackground:rN},sN="/my-portfolio/assets/quantum-CPT9py7C.png",oN="/my-portfolio/assets/indianman-BmV6Ddir.jpg",lN="/my-portfolio/assets/berlin-D9Jbk3dQ.PNG",cN="/my-portfolio/assets/lisbonfilm-DdRhNDXS.JPG",uN="/my-portfolio/assets/photoshoot-CdTSvL6h.jpeg",fN="/my-portfolio/assets/wedding-BxyuTpuJ.jpg",hN="/my-portfolio/assets/texas-CvdOVPvg.jpg";function dN(){return G.jsxs("div",{className:Xs.aboutPage,children:[G.jsx(Du,{className:Xs.pixelBackground,color:"#b5ff7b"}),G.jsx(Ov,{title:"Introduction",children:"My name is Hunter Cordes and I was born and raised in Los Angeles, California. Growing up in a city of over 12 million people has exposed me to so many cultures and has given me so many experiences that have shaped who I am today. I love art, music, and reading, and can have a good conversation about almost anything as I am fascinated and curious about almost everything in this crazy world we live in."}),G.jsx(au,{children:G.jsx("div",{className:Xs.card,children:G.jsx(OU,{})})}),G.jsx(Ov,{title:"My Hobbies",children:"I am unashamedly a huge nerd when it comes to my hobbies. These hobbies allow me to express myself creatively and unwind from the stresses of daily life. Below are a few snippets of my photography and piano playing, as well as the last 3 books I've read - which can contest to my curiosity and constant endeavor to grow!"}),G.jsx(au,{children:G.jsx("div",{className:Xs.card,children:G.jsx(VU,{images:[{src:oN,description:"A portrait of a man when I worked in India."},{src:lN,description:"A friend from Berlin showing me her hometown."},{src:cN,description:"Black and white film photograph of old friends out in Lisbon."},{src:uN,description:"A shot from a photoshoot I did of a jewelry line in Copenhagen."},{src:fN,description:"Overlooking a wedding ceremony outside Delhi, India."},{src:hN,description:"An art installation of Cadillacs in a field outside Amarillo, Texas."}]})})}),G.jsx(au,{children:G.jsx("div",{className:Xs.card,children:G.jsx(KU,{src:"https://firebasestorage.googleapis.com/v0/b/my-portfolio-fbac0.firebasestorage.app/o/LunEditPortfolio.mp4?alt=media&token=94914e80-35d0-4747-bbf3-74265ccbaa71",title:"My Piano",description:"In 2021, I bought a piano as a means to spend my time after moving to Denmark and the effects of the pandemic still lingered in our socializing opportunities. This would turn into an unending pursuit of learning piano pieces from classical to contemporary, and I found myself completely immersed in the world of music. Playing piano has become a meditative practice for me, and I love being able to express myself through it."})})}),G.jsx(au,{children:G.jsx("div",{className:Xs.card,children:G.jsx(iN,{title:"My Last 3 Books",books:[{cover:OC,alt:"Klara and the Sun",description:"A Nobel Prize winner... portrayal of being “born” into the world as an AI..."},{cover:PC,alt:"Days at the Morisaki Bookshop",description:"Reading this in a Kyoto bookstore while it rained..."},{cover:sN,alt:"Beyond Weird",description:"Wanted a Cillian Murphy moment. Did not get it. Still fun."}]})})})]})}const pN="_card_t0hjf_1",mN="_content_t0hjf_25",gN="_imageWrapper_t0hjf_35",xN="_image_t0hjf_35",vN="_title_t0hjf_65",_N="_subtitle_t0hjf_79",yN="_bubbles_t0hjf_93",SN="_bubble_t0hjf_93",bN="_description_t0hjf_137",MN="_button_t0hjf_151",Vi={card:pN,content:mN,imageWrapper:gN,image:xN,title:vN,subtitle:_N,bubbles:yN,bubble:SN,description:bN,button:MN};function EN({id:i,title:e,date:t,keywords:r=[],description:o,link:l,image:u}){return G.jsxs("div",{id:i,className:Vi.card,children:[G.jsxs("div",{className:Vi.content,children:[G.jsx("h2",{className:Vi.title,children:e}),G.jsx("h4",{className:Vi.subtitle,children:t}),G.jsx("div",{className:Vi.bubbles,children:r.map((f,d)=>G.jsx("span",{className:Vi.bubble,children:f},d))}),G.jsx("p",{className:Vi.description,children:o}),G.jsx(Zn,{to:l,className:Vi.button,children:"See More"})]}),G.jsx("div",{className:Vi.imageWrapper,children:G.jsx("img",{src:u,alt:e,className:Vi.image})})]})}const TN="_container_j8k7g_1",AN="_pixelBackground_j8k7g_7",RN="_content_j8k7g_21",wN="_title_j8k7g_31",CN="_cards_j8k7g_45",ul={container:TN,pixelBackground:AN,content:RN,title:wN,cards:CN},DN="/my-portfolio/assets/spilcafeenmockuphome-CyZ4o3f6.png",UN="/my-portfolio/assets/handeheldforest-DrfwGA-f.png",NN=[{id:"project-1",title:"Naturhistorisk Museum (Full Case Study)",date:"Spring 2025",keywords:["React","Figma","UX/UI Design","Team Project","Prototyping and Testing"],description:"An interactive digital solution built to increase user engagement with exhibitions at the Naturhistorisk Museum in Aarhus.",link:"/featured-projects/naturhistoriskmuseum",image:UN},{id:"project-2",title:"Spilcaféen",date:"Fall 2024",keywords:["UX/UI","Prototyping","Case Study"],description:"A redesign of Spilcaféen’s website aimed at creating a more intuitive, visually consistent, and user-friendly experience.",link:"/featured-projects/spilcafeen",image:DN}];function LN(){const i=ue.useRef(null);return ue.useEffect(()=>{i.current&&(i.current.playbackRate=.5)},[]),G.jsxs("div",{className:ul.container,children:[G.jsx(Du,{className:ul.pixelBackground,color:"#B19EEF",transparent:!1}),G.jsxs("div",{className:ul.content,children:[G.jsx("h1",{className:ul.title,children:"Featured Projects"}),G.jsx("div",{className:ul.cards,children:NN.map(e=>G.jsx(EN,{id:e.id,title:e.title,date:e.date,keywords:e.keywords,description:e.description,link:e.link,image:e.image},e.id))})]})]})}const ON="/my-portfolio/assets/userandclientmap-DnGWC-9N.png",PN="/my-portfolio/assets/inspirationboard-9Aziiedo.png",BN="/my-portfolio/assets/guerillatesting-DqaNq8Ht.png",IN="_videoWrapper_nkcyo_1",FN="_video_nkcyo_1",Jv={videoWrapper:IN,video:FN};function zN({src:i}){return G.jsx("div",{className:Jv.videoWrapper,children:G.jsx("video",{className:Jv.video,src:i,autoPlay:!0,muted:!0,loop:!0,playsInline:!0})})}const HN="/my-portfolio/assets/spilcafeenvideo-BOsqJ5hL.mp4";function GN(){return G.jsxs("div",{className:$_.container,children:[G.jsx(Q_,{title:"Spilcafeen",description:`This project took place over two weeks in our first semester. To begin, our class spent an afternoon at the café, observing how visitors interacted with both the physical space and the available games. These insights helped us understand the user journey and how it connected to the café’s website.\r
\r
From there, we reviewed the existing website and identified several usability issues that affected how visitors searched for games or explored upcoming events. We redesigned the site to create a more intuitive experience and built a system for keeping the café’s game inventory up to date.\r
\r
My responsibilities included conducting user research, defining the site’s requirements, and designing the admin-facing interface.`,role:["UX","UI","User Research","Front-end Development"],date:"May - June 2025"}),G.jsx(pu,{src:ON,alt:"User and Client story mappings"}),G.jsx(mu,{leftImg:PN,rightImg:BN,leftAlt:"Inspiration Board",rightAlt:"Guerrilla Testing"}),G.jsx(zN,{src:HN})]})}function VN(){return G.jsx(kU,{children:G.jsxs(G.Fragment,{children:[G.jsx(vM,{}),G.jsxs(cb,{children:[G.jsx(sr,{path:"/",element:G.jsx(Iw,{})}),G.jsx(sr,{path:"/mywork",element:G.jsx(Vw,{})}),G.jsx(sr,{path:"/featured-projects/naturhistoriskmuseum",element:G.jsx(LC,{})}),G.jsx(sr,{path:"/featured-projects/spilcafeen",element:G.jsx(GN,{})}),G.jsx(sr,{path:"/about",element:G.jsx(dN,{})}),G.jsx(sr,{path:"/experience",element:G.jsx(zC,{})}),G.jsx(sr,{path:"/featured-projects",element:G.jsx(LN,{})})]})]})})}vS.createRoot(document.getElementById("root")).render(G.jsx(lr.StrictMode,{children:G.jsx(Nb,{children:G.jsx(VN,{})})}));
