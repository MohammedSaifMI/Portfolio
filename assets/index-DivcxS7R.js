(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function NE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var vx={exports:{}},od={},xx={exports:{}},rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ku=Symbol.for("react.element"),IE=Symbol.for("react.portal"),UE=Symbol.for("react.fragment"),FE=Symbol.for("react.strict_mode"),OE=Symbol.for("react.profiler"),kE=Symbol.for("react.provider"),BE=Symbol.for("react.context"),zE=Symbol.for("react.forward_ref"),VE=Symbol.for("react.suspense"),HE=Symbol.for("react.memo"),GE=Symbol.for("react.lazy"),Pg=Symbol.iterator;function WE(n){return n===null||typeof n!="object"?null:(n=Pg&&n[Pg]||n["@@iterator"],typeof n=="function"?n:null)}var yx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sx=Object.assign,Mx={};function ol(n,e,t){this.props=n,this.context=e,this.refs=Mx,this.updater=t||yx}ol.prototype.isReactComponent={};ol.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ol.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Ex(){}Ex.prototype=ol.prototype;function Jm(n,e,t){this.props=n,this.context=e,this.refs=Mx,this.updater=t||yx}var e_=Jm.prototype=new Ex;e_.constructor=Jm;Sx(e_,ol.prototype);e_.isPureReactComponent=!0;var bg=Array.isArray,Tx=Object.prototype.hasOwnProperty,t_={current:null},wx={key:!0,ref:!0,__self:!0,__source:!0};function Ax(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Tx.call(e,i)&&!wx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ku,type:n,key:s,ref:o,props:r,_owner:t_.current}}function XE(n,e){return{$$typeof:ku,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function n_(n){return typeof n=="object"&&n!==null&&n.$$typeof===ku}function jE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Dg=/\/+/g;function bd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?jE(""+n.key):e.toString(36)}function qc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ku:case IE:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+bd(o,0):i,bg(r)?(t="",n!=null&&(t=n.replace(Dg,"$&/")+"/"),qc(r,e,t,"",function(u){return u})):r!=null&&(n_(r)&&(r=XE(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Dg,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",bg(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+bd(s,a);o+=qc(s,e,t,l,r)}else if(l=WE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+bd(s,a++),o+=qc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ku(n,e,t){if(n==null)return n;var i=[],r=0;return qc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function YE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var jn={current:null},Kc={transition:null},$E={ReactCurrentDispatcher:jn,ReactCurrentBatchConfig:Kc,ReactCurrentOwner:t_};function Cx(){throw Error("act(...) is not supported in production builds of React.")}rt.Children={map:Ku,forEach:function(n,e,t){Ku(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ku(n,function(){e++}),e},toArray:function(n){return Ku(n,function(e){return e})||[]},only:function(n){if(!n_(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};rt.Component=ol;rt.Fragment=UE;rt.Profiler=OE;rt.PureComponent=Jm;rt.StrictMode=FE;rt.Suspense=VE;rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$E;rt.act=Cx;rt.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Sx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=t_.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Tx.call(e,l)&&!wx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ku,type:n.type,key:r,ref:s,props:i,_owner:o}};rt.createContext=function(n){return n={$$typeof:BE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:kE,_context:n},n.Consumer=n};rt.createElement=Ax;rt.createFactory=function(n){var e=Ax.bind(null,n);return e.type=n,e};rt.createRef=function(){return{current:null}};rt.forwardRef=function(n){return{$$typeof:zE,render:n}};rt.isValidElement=n_;rt.lazy=function(n){return{$$typeof:GE,_payload:{_status:-1,_result:n},_init:YE}};rt.memo=function(n,e){return{$$typeof:HE,type:n,compare:e===void 0?null:e}};rt.startTransition=function(n){var e=Kc.transition;Kc.transition={};try{n()}finally{Kc.transition=e}};rt.unstable_act=Cx;rt.useCallback=function(n,e){return jn.current.useCallback(n,e)};rt.useContext=function(n){return jn.current.useContext(n)};rt.useDebugValue=function(){};rt.useDeferredValue=function(n){return jn.current.useDeferredValue(n)};rt.useEffect=function(n,e){return jn.current.useEffect(n,e)};rt.useId=function(){return jn.current.useId()};rt.useImperativeHandle=function(n,e,t){return jn.current.useImperativeHandle(n,e,t)};rt.useInsertionEffect=function(n,e){return jn.current.useInsertionEffect(n,e)};rt.useLayoutEffect=function(n,e){return jn.current.useLayoutEffect(n,e)};rt.useMemo=function(n,e){return jn.current.useMemo(n,e)};rt.useReducer=function(n,e,t){return jn.current.useReducer(n,e,t)};rt.useRef=function(n){return jn.current.useRef(n)};rt.useState=function(n){return jn.current.useState(n)};rt.useSyncExternalStore=function(n,e,t){return jn.current.useSyncExternalStore(n,e,t)};rt.useTransition=function(){return jn.current.useTransition()};rt.version="18.3.1";xx.exports=rt;var St=xx.exports;const qE=NE(St);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KE=St,ZE=Symbol.for("react.element"),QE=Symbol.for("react.fragment"),JE=Object.prototype.hasOwnProperty,e1=KE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t1={key:!0,ref:!0,__self:!0,__source:!0};function Rx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)JE.call(e,i)&&!t1.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ZE,type:n,key:s,ref:o,props:r,_owner:e1.current}}od.Fragment=QE;od.jsx=Rx;od.jsxs=Rx;vx.exports=od;var O=vx.exports,Px={exports:{}},wi={},bx={exports:{}},Dx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(L,$){var b=L.length;L.push($);e:for(;0<b;){var ie=b-1>>>1,ye=L[ie];if(0<r(ye,$))L[ie]=$,L[b]=ye,b=ie;else break e}}function t(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var $=L[0],b=L.pop();if(b!==$){L[0]=b;e:for(var ie=0,ye=L.length,Xe=ye>>>1;ie<Xe;){var Y=2*(ie+1)-1,ne=L[Y],fe=Y+1,re=L[fe];if(0>r(ne,b))fe<ye&&0>r(re,ne)?(L[ie]=re,L[fe]=b,ie=fe):(L[ie]=ne,L[Y]=b,ie=Y);else if(fe<ye&&0>r(re,b))L[ie]=re,L[fe]=b,ie=fe;else break e}}return $}function r(L,$){var b=L.sortIndex-$.sortIndex;return b!==0?b:L.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var $=t(u);$!==null;){if($.callback===null)i(u);else if($.startTime<=L)i(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=t(u)}}function y(L){if(_=!1,x(L),!g)if(t(l)!==null)g=!0,W(C);else{var $=t(u);$!==null&&X(y,$.startTime-L)}}function C(L,$){g=!1,_&&(_=!1,d(R),R=-1),p=!0;var b=h;try{for(x($),f=t(l);f!==null&&(!(f.expirationTime>$)||L&&!D());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,h=f.priorityLevel;var ye=ie(f.expirationTime<=$);$=n.unstable_now(),typeof ye=="function"?f.callback=ye:f===t(l)&&i(l),x($)}else i(l);f=t(l)}if(f!==null)var Xe=!0;else{var Y=t(u);Y!==null&&X(y,Y.startTime-$),Xe=!1}return Xe}finally{f=null,h=b,p=!1}}var w=!1,E=null,R=-1,M=5,S=-1;function D(){return!(n.unstable_now()-S<M)}function F(){if(E!==null){var L=n.unstable_now();S=L;var $=!0;try{$=E(!0,L)}finally{$?B():(w=!1,E=null)}}else w=!1}var B;if(typeof v=="function")B=function(){v(F)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,Z=j.port2;j.port1.onmessage=F,B=function(){Z.postMessage(null)}}else B=function(){m(F,0)};function W(L){E=L,w||(w=!0,B())}function X(L,$){R=m(function(){L(n.unstable_now())},$)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,W(C))},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(L){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var b=h;h=$;try{return L()}finally{h=b}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(L,$){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var b=h;h=L;try{return $()}finally{h=b}},n.unstable_scheduleCallback=function(L,$,b){var ie=n.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?ie+b:ie):b=ie,L){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=b+ye,L={id:c++,callback:$,priorityLevel:L,startTime:b,expirationTime:ye,sortIndex:-1},b>ie?(L.sortIndex=b,e(u,L),t(l)===null&&L===t(u)&&(_?(d(R),R=-1):_=!0,X(y,b-ie))):(L.sortIndex=ye,e(l,L),g||p||(g=!0,W(C))),L},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(L){var $=h;return function(){var b=h;h=$;try{return L.apply(this,arguments)}finally{h=b}}}})(Dx);bx.exports=Dx;var n1=bx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i1=St,Ei=n1;function se(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lx=new Set,cu={};function Bo(n,e){Va(n,e),Va(n+"Capture",e)}function Va(n,e){for(cu[n]=e,n=0;n<e.length;n++)Lx.add(e[n])}var Xr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$h=Object.prototype.hasOwnProperty,r1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lg={},Ng={};function s1(n){return $h.call(Ng,n)?!0:$h.call(Lg,n)?!1:r1.test(n)?Ng[n]=!0:(Lg[n]=!0,!1)}function o1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function a1(n,e,t,i){if(e===null||typeof e>"u"||o1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var yn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){yn[n]=new Yn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];yn[e]=new Yn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){yn[n]=new Yn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){yn[n]=new Yn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){yn[n]=new Yn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){yn[n]=new Yn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){yn[n]=new Yn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){yn[n]=new Yn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){yn[n]=new Yn(n,5,!1,n.toLowerCase(),null,!1,!1)});var i_=/[\-:]([a-z])/g;function r_(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(i_,r_);yn[e]=new Yn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(i_,r_);yn[e]=new Yn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(i_,r_);yn[e]=new Yn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){yn[n]=new Yn(n,1,!1,n.toLowerCase(),null,!1,!1)});yn.xlinkHref=new Yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){yn[n]=new Yn(n,1,!1,n.toLowerCase(),null,!0,!0)});function s_(n,e,t,i){var r=yn.hasOwnProperty(e)?yn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(a1(e,t,r,i)&&(t=null),i||r===null?s1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var es=i1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zu=Symbol.for("react.element"),ca=Symbol.for("react.portal"),fa=Symbol.for("react.fragment"),o_=Symbol.for("react.strict_mode"),qh=Symbol.for("react.profiler"),Nx=Symbol.for("react.provider"),Ix=Symbol.for("react.context"),a_=Symbol.for("react.forward_ref"),Kh=Symbol.for("react.suspense"),Zh=Symbol.for("react.suspense_list"),l_=Symbol.for("react.memo"),fs=Symbol.for("react.lazy"),Ux=Symbol.for("react.offscreen"),Ig=Symbol.iterator;function pl(n){return n===null||typeof n!="object"?null:(n=Ig&&n[Ig]||n["@@iterator"],typeof n=="function"?n:null)}var Vt=Object.assign,Dd;function bl(n){if(Dd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Dd=e&&e[1]||""}return`
`+Dd+n}var Ld=!1;function Nd(n,e){if(!n||Ld)return"";Ld=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ld=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?bl(n):""}function l1(n){switch(n.tag){case 5:return bl(n.type);case 16:return bl("Lazy");case 13:return bl("Suspense");case 19:return bl("SuspenseList");case 0:case 2:case 15:return n=Nd(n.type,!1),n;case 11:return n=Nd(n.type.render,!1),n;case 1:return n=Nd(n.type,!0),n;default:return""}}function Qh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case fa:return"Fragment";case ca:return"Portal";case qh:return"Profiler";case o_:return"StrictMode";case Kh:return"Suspense";case Zh:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Ix:return(n.displayName||"Context")+".Consumer";case Nx:return(n._context.displayName||"Context")+".Provider";case a_:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case l_:return e=n.displayName||null,e!==null?e:Qh(n.type)||"Memo";case fs:e=n._payload,n=n._init;try{return Qh(n(e))}catch{}}return null}function u1(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qh(e);case 8:return e===o_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fs(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fx(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function c1(n){var e=Fx(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Qu(n){n._valueTracker||(n._valueTracker=c1(n))}function Ox(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Fx(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Ef(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Jh(n,e){var t=e.checked;return Vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Ug(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Fs(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function kx(n,e){e=e.checked,e!=null&&s_(n,"checked",e,!1)}function ep(n,e){kx(n,e);var t=Fs(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?tp(n,e.type,t):e.hasOwnProperty("defaultValue")&&tp(n,e.type,Fs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Fg(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function tp(n,e,t){(e!=="number"||Ef(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Dl=Array.isArray;function Aa(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Fs(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function np(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Vt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Og(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(se(92));if(Dl(t)){if(1<t.length)throw Error(se(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Fs(t)}}function Bx(n,e){var t=Fs(e.value),i=Fs(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function kg(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function zx(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ip(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?zx(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ju,Vx=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ju=Ju||document.createElement("div"),Ju.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ju.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function fu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Gl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f1=["Webkit","ms","Moz","O"];Object.keys(Gl).forEach(function(n){f1.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Gl[e]=Gl[n]})});function Hx(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Gl.hasOwnProperty(n)&&Gl[n]?(""+e).trim():e+"px"}function Gx(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Hx(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var d1=Vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rp(n,e){if(e){if(d1[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function sp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var op=null;function u_(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ap=null,Ca=null,Ra=null;function Bg(n){if(n=Vu(n)){if(typeof ap!="function")throw Error(se(280));var e=n.stateNode;e&&(e=fd(e),ap(n.stateNode,n.type,e))}}function Wx(n){Ca?Ra?Ra.push(n):Ra=[n]:Ca=n}function Xx(){if(Ca){var n=Ca,e=Ra;if(Ra=Ca=null,Bg(n),e)for(n=0;n<e.length;n++)Bg(e[n])}}function jx(n,e){return n(e)}function Yx(){}var Id=!1;function $x(n,e,t){if(Id)return n(e,t);Id=!0;try{return jx(n,e,t)}finally{Id=!1,(Ca!==null||Ra!==null)&&(Yx(),Xx())}}function du(n,e){var t=n.stateNode;if(t===null)return null;var i=fd(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(se(231,e,typeof t));return t}var lp=!1;if(Xr)try{var ml={};Object.defineProperty(ml,"passive",{get:function(){lp=!0}}),window.addEventListener("test",ml,ml),window.removeEventListener("test",ml,ml)}catch{lp=!1}function h1(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Wl=!1,Tf=null,wf=!1,up=null,p1={onError:function(n){Wl=!0,Tf=n}};function m1(n,e,t,i,r,s,o,a,l){Wl=!1,Tf=null,h1.apply(p1,arguments)}function _1(n,e,t,i,r,s,o,a,l){if(m1.apply(this,arguments),Wl){if(Wl){var u=Tf;Wl=!1,Tf=null}else throw Error(se(198));wf||(wf=!0,up=u)}}function zo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function qx(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function zg(n){if(zo(n)!==n)throw Error(se(188))}function g1(n){var e=n.alternate;if(!e){if(e=zo(n),e===null)throw Error(se(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return zg(r),n;if(s===i)return zg(r),e;s=s.sibling}throw Error(se(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(t.alternate!==i)throw Error(se(190))}if(t.tag!==3)throw Error(se(188));return t.stateNode.current===t?n:e}function Kx(n){return n=g1(n),n!==null?Zx(n):null}function Zx(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Zx(n);if(e!==null)return e;n=n.sibling}return null}var Qx=Ei.unstable_scheduleCallback,Vg=Ei.unstable_cancelCallback,v1=Ei.unstable_shouldYield,x1=Ei.unstable_requestPaint,Yt=Ei.unstable_now,y1=Ei.unstable_getCurrentPriorityLevel,c_=Ei.unstable_ImmediatePriority,Jx=Ei.unstable_UserBlockingPriority,Af=Ei.unstable_NormalPriority,S1=Ei.unstable_LowPriority,ey=Ei.unstable_IdlePriority,ad=null,vr=null;function M1(n){if(vr&&typeof vr.onCommitFiberRoot=="function")try{vr.onCommitFiberRoot(ad,n,void 0,(n.current.flags&128)===128)}catch{}}var nr=Math.clz32?Math.clz32:w1,E1=Math.log,T1=Math.LN2;function w1(n){return n>>>=0,n===0?32:31-(E1(n)/T1|0)|0}var ec=64,tc=4194304;function Ll(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Cf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ll(a):(s&=o,s!==0&&(i=Ll(s)))}else o=t&~r,o!==0?i=Ll(o):s!==0&&(i=Ll(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-nr(e),r=1<<t,i|=n[t],e&=~r;return i}function A1(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function C1(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-nr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=A1(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function cp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ty(){var n=ec;return ec<<=1,!(ec&4194240)&&(ec=64),n}function Ud(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Bu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-nr(e),n[e]=t}function R1(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-nr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function f_(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-nr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var gt=0;function ny(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var iy,d_,ry,sy,oy,fp=!1,nc=[],Es=null,Ts=null,ws=null,hu=new Map,pu=new Map,hs=[],P1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hg(n,e){switch(n){case"focusin":case"focusout":Es=null;break;case"dragenter":case"dragleave":Ts=null;break;case"mouseover":case"mouseout":ws=null;break;case"pointerover":case"pointerout":hu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pu.delete(e.pointerId)}}function _l(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Vu(e),e!==null&&d_(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function b1(n,e,t,i,r){switch(e){case"focusin":return Es=_l(Es,n,e,t,i,r),!0;case"dragenter":return Ts=_l(Ts,n,e,t,i,r),!0;case"mouseover":return ws=_l(ws,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return hu.set(s,_l(hu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,pu.set(s,_l(pu.get(s)||null,n,e,t,i,r)),!0}return!1}function ay(n){var e=uo(n.target);if(e!==null){var t=zo(e);if(t!==null){if(e=t.tag,e===13){if(e=qx(t),e!==null){n.blockedOn=e,oy(n.priority,function(){ry(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Zc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=dp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);op=i,t.target.dispatchEvent(i),op=null}else return e=Vu(t),e!==null&&d_(e),n.blockedOn=t,!1;e.shift()}return!0}function Gg(n,e,t){Zc(n)&&t.delete(e)}function D1(){fp=!1,Es!==null&&Zc(Es)&&(Es=null),Ts!==null&&Zc(Ts)&&(Ts=null),ws!==null&&Zc(ws)&&(ws=null),hu.forEach(Gg),pu.forEach(Gg)}function gl(n,e){n.blockedOn===e&&(n.blockedOn=null,fp||(fp=!0,Ei.unstable_scheduleCallback(Ei.unstable_NormalPriority,D1)))}function mu(n){function e(r){return gl(r,n)}if(0<nc.length){gl(nc[0],n);for(var t=1;t<nc.length;t++){var i=nc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Es!==null&&gl(Es,n),Ts!==null&&gl(Ts,n),ws!==null&&gl(ws,n),hu.forEach(e),pu.forEach(e),t=0;t<hs.length;t++)i=hs[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<hs.length&&(t=hs[0],t.blockedOn===null);)ay(t),t.blockedOn===null&&hs.shift()}var Pa=es.ReactCurrentBatchConfig,Rf=!0;function L1(n,e,t,i){var r=gt,s=Pa.transition;Pa.transition=null;try{gt=1,h_(n,e,t,i)}finally{gt=r,Pa.transition=s}}function N1(n,e,t,i){var r=gt,s=Pa.transition;Pa.transition=null;try{gt=4,h_(n,e,t,i)}finally{gt=r,Pa.transition=s}}function h_(n,e,t,i){if(Rf){var r=dp(n,e,t,i);if(r===null)Xd(n,e,i,Pf,t),Hg(n,i);else if(b1(r,n,e,t,i))i.stopPropagation();else if(Hg(n,i),e&4&&-1<P1.indexOf(n)){for(;r!==null;){var s=Vu(r);if(s!==null&&iy(s),s=dp(n,e,t,i),s===null&&Xd(n,e,i,Pf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Xd(n,e,i,null,t)}}var Pf=null;function dp(n,e,t,i){if(Pf=null,n=u_(i),n=uo(n),n!==null)if(e=zo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=qx(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Pf=n,null}function ly(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(y1()){case c_:return 1;case Jx:return 4;case Af:case S1:return 16;case ey:return 536870912;default:return 16}default:return 16}}var _s=null,p_=null,Qc=null;function uy(){if(Qc)return Qc;var n,e=p_,t=e.length,i,r="value"in _s?_s.value:_s.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Qc=r.slice(n,1<i?1-i:void 0)}function Jc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ic(){return!0}function Wg(){return!1}function Ai(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ic:Wg,this.isPropagationStopped=Wg,this}return Vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ic)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ic)},persist:function(){},isPersistent:ic}),e}var al={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},m_=Ai(al),zu=Vt({},al,{view:0,detail:0}),I1=Ai(zu),Fd,Od,vl,ld=Vt({},zu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:__,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==vl&&(vl&&n.type==="mousemove"?(Fd=n.screenX-vl.screenX,Od=n.screenY-vl.screenY):Od=Fd=0,vl=n),Fd)},movementY:function(n){return"movementY"in n?n.movementY:Od}}),Xg=Ai(ld),U1=Vt({},ld,{dataTransfer:0}),F1=Ai(U1),O1=Vt({},zu,{relatedTarget:0}),kd=Ai(O1),k1=Vt({},al,{animationName:0,elapsedTime:0,pseudoElement:0}),B1=Ai(k1),z1=Vt({},al,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),V1=Ai(z1),H1=Vt({},al,{data:0}),jg=Ai(H1),G1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=X1[n])?!!e[n]:!1}function __(){return j1}var Y1=Vt({},zu,{key:function(n){if(n.key){var e=G1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Jc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?W1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:__,charCode:function(n){return n.type==="keypress"?Jc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Jc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),$1=Ai(Y1),q1=Vt({},ld,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yg=Ai(q1),K1=Vt({},zu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:__}),Z1=Ai(K1),Q1=Vt({},al,{propertyName:0,elapsedTime:0,pseudoElement:0}),J1=Ai(Q1),eT=Vt({},ld,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),tT=Ai(eT),nT=[9,13,27,32],g_=Xr&&"CompositionEvent"in window,Xl=null;Xr&&"documentMode"in document&&(Xl=document.documentMode);var iT=Xr&&"TextEvent"in window&&!Xl,cy=Xr&&(!g_||Xl&&8<Xl&&11>=Xl),$g=" ",qg=!1;function fy(n,e){switch(n){case"keyup":return nT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dy(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var da=!1;function rT(n,e){switch(n){case"compositionend":return dy(e);case"keypress":return e.which!==32?null:(qg=!0,$g);case"textInput":return n=e.data,n===$g&&qg?null:n;default:return null}}function sT(n,e){if(da)return n==="compositionend"||!g_&&fy(n,e)?(n=uy(),Qc=p_=_s=null,da=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cy&&e.locale!=="ko"?null:e.data;default:return null}}var oT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!oT[n.type]:e==="textarea"}function hy(n,e,t,i){Wx(i),e=bf(e,"onChange"),0<e.length&&(t=new m_("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var jl=null,_u=null;function aT(n){Ty(n,0)}function ud(n){var e=ma(n);if(Ox(e))return n}function lT(n,e){if(n==="change")return e}var py=!1;if(Xr){var Bd;if(Xr){var zd="oninput"in document;if(!zd){var Zg=document.createElement("div");Zg.setAttribute("oninput","return;"),zd=typeof Zg.oninput=="function"}Bd=zd}else Bd=!1;py=Bd&&(!document.documentMode||9<document.documentMode)}function Qg(){jl&&(jl.detachEvent("onpropertychange",my),_u=jl=null)}function my(n){if(n.propertyName==="value"&&ud(_u)){var e=[];hy(e,_u,n,u_(n)),$x(aT,e)}}function uT(n,e,t){n==="focusin"?(Qg(),jl=e,_u=t,jl.attachEvent("onpropertychange",my)):n==="focusout"&&Qg()}function cT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ud(_u)}function fT(n,e){if(n==="click")return ud(e)}function dT(n,e){if(n==="input"||n==="change")return ud(e)}function hT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var sr=typeof Object.is=="function"?Object.is:hT;function gu(n,e){if(sr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!$h.call(e,r)||!sr(n[r],e[r]))return!1}return!0}function Jg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function e0(n,e){var t=Jg(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Jg(t)}}function _y(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?_y(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function gy(){for(var n=window,e=Ef();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ef(n.document)}return e}function v_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function pT(n){var e=gy(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&_y(t.ownerDocument.documentElement,t)){if(i!==null&&v_(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=e0(t,s);var o=e0(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var mT=Xr&&"documentMode"in document&&11>=document.documentMode,ha=null,hp=null,Yl=null,pp=!1;function t0(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;pp||ha==null||ha!==Ef(i)||(i=ha,"selectionStart"in i&&v_(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Yl&&gu(Yl,i)||(Yl=i,i=bf(hp,"onSelect"),0<i.length&&(e=new m_("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ha)))}function rc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var pa={animationend:rc("Animation","AnimationEnd"),animationiteration:rc("Animation","AnimationIteration"),animationstart:rc("Animation","AnimationStart"),transitionend:rc("Transition","TransitionEnd")},Vd={},vy={};Xr&&(vy=document.createElement("div").style,"AnimationEvent"in window||(delete pa.animationend.animation,delete pa.animationiteration.animation,delete pa.animationstart.animation),"TransitionEvent"in window||delete pa.transitionend.transition);function cd(n){if(Vd[n])return Vd[n];if(!pa[n])return n;var e=pa[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in vy)return Vd[n]=e[t];return n}var xy=cd("animationend"),yy=cd("animationiteration"),Sy=cd("animationstart"),My=cd("transitionend"),Ey=new Map,n0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hs(n,e){Ey.set(n,e),Bo(e,[n])}for(var Hd=0;Hd<n0.length;Hd++){var Gd=n0[Hd],_T=Gd.toLowerCase(),gT=Gd[0].toUpperCase()+Gd.slice(1);Hs(_T,"on"+gT)}Hs(xy,"onAnimationEnd");Hs(yy,"onAnimationIteration");Hs(Sy,"onAnimationStart");Hs("dblclick","onDoubleClick");Hs("focusin","onFocus");Hs("focusout","onBlur");Hs(My,"onTransitionEnd");Va("onMouseEnter",["mouseout","mouseover"]);Va("onMouseLeave",["mouseout","mouseover"]);Va("onPointerEnter",["pointerout","pointerover"]);Va("onPointerLeave",["pointerout","pointerover"]);Bo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nl));function i0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,_1(i,e,void 0,n),n.currentTarget=null}function Ty(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;i0(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;i0(r,a,u),s=l}}}if(wf)throw n=up,wf=!1,up=null,n}function Dt(n,e){var t=e[xp];t===void 0&&(t=e[xp]=new Set);var i=n+"__bubble";t.has(i)||(wy(e,n,2,!1),t.add(i))}function Wd(n,e,t){var i=0;e&&(i|=4),wy(t,n,i,e)}var sc="_reactListening"+Math.random().toString(36).slice(2);function vu(n){if(!n[sc]){n[sc]=!0,Lx.forEach(function(t){t!=="selectionchange"&&(vT.has(t)||Wd(t,!1,n),Wd(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[sc]||(e[sc]=!0,Wd("selectionchange",!1,e))}}function wy(n,e,t,i){switch(ly(e)){case 1:var r=L1;break;case 4:r=N1;break;default:r=h_}t=r.bind(null,e,t,n),r=void 0,!lp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Xd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=uo(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}$x(function(){var u=s,c=u_(t),f=[];e:{var h=Ey.get(n);if(h!==void 0){var p=m_,g=n;switch(n){case"keypress":if(Jc(t)===0)break e;case"keydown":case"keyup":p=$1;break;case"focusin":g="focus",p=kd;break;case"focusout":g="blur",p=kd;break;case"beforeblur":case"afterblur":p=kd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Xg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=F1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Z1;break;case xy:case yy:case Sy:p=B1;break;case My:p=J1;break;case"scroll":p=I1;break;case"wheel":p=tT;break;case"copy":case"cut":case"paste":p=V1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Yg}var _=(e&4)!==0,m=!_&&n==="scroll",d=_?h!==null?h+"Capture":null:h;_=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,d!==null&&(y=du(v,d),y!=null&&_.push(xu(v,y,x)))),m)break;v=v.return}0<_.length&&(h=new p(h,g,null,t,c),f.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==op&&(g=t.relatedTarget||t.fromElement)&&(uo(g)||g[jr]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=u,g=g?uo(g):null,g!==null&&(m=zo(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(_=Xg,y="onMouseLeave",d="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=Yg,y="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?h:ma(p),x=g==null?h:ma(g),h=new _(y,v+"leave",p,t,c),h.target=m,h.relatedTarget=x,y=null,uo(c)===u&&(_=new _(d,v+"enter",g,t,c),_.target=x,_.relatedTarget=m,y=_),m=y,p&&g)t:{for(_=p,d=g,v=0,x=_;x;x=Wo(x))v++;for(x=0,y=d;y;y=Wo(y))x++;for(;0<v-x;)_=Wo(_),v--;for(;0<x-v;)d=Wo(d),x--;for(;v--;){if(_===d||d!==null&&_===d.alternate)break t;_=Wo(_),d=Wo(d)}_=null}else _=null;p!==null&&r0(f,h,p,_,!1),g!==null&&m!==null&&r0(f,m,g,_,!0)}}e:{if(h=u?ma(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=lT;else if(Kg(h))if(py)C=dT;else{C=cT;var w=uT}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=fT);if(C&&(C=C(n,u))){hy(f,C,t,c);break e}w&&w(n,h,u),n==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&tp(h,"number",h.value)}switch(w=u?ma(u):window,n){case"focusin":(Kg(w)||w.contentEditable==="true")&&(ha=w,hp=u,Yl=null);break;case"focusout":Yl=hp=ha=null;break;case"mousedown":pp=!0;break;case"contextmenu":case"mouseup":case"dragend":pp=!1,t0(f,t,c);break;case"selectionchange":if(mT)break;case"keydown":case"keyup":t0(f,t,c)}var E;if(g_)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else da?fy(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(cy&&t.locale!=="ko"&&(da||R!=="onCompositionStart"?R==="onCompositionEnd"&&da&&(E=uy()):(_s=c,p_="value"in _s?_s.value:_s.textContent,da=!0)),w=bf(u,R),0<w.length&&(R=new jg(R,n,null,t,c),f.push({event:R,listeners:w}),E?R.data=E:(E=dy(t),E!==null&&(R.data=E)))),(E=iT?rT(n,t):sT(n,t))&&(u=bf(u,"onBeforeInput"),0<u.length&&(c=new jg("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=E))}Ty(f,e)})}function xu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function bf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=du(n,t),s!=null&&i.unshift(xu(n,s,r)),s=du(n,e),s!=null&&i.push(xu(n,s,r))),n=n.return}return i}function Wo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function r0(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=du(t,s),l!=null&&o.unshift(xu(t,l,a))):r||(l=du(t,s),l!=null&&o.push(xu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var xT=/\r\n?/g,yT=/\u0000|\uFFFD/g;function s0(n){return(typeof n=="string"?n:""+n).replace(xT,`
`).replace(yT,"")}function oc(n,e,t){if(e=s0(e),s0(n)!==e&&t)throw Error(se(425))}function Df(){}var mp=null,_p=null;function gp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vp=typeof setTimeout=="function"?setTimeout:void 0,ST=typeof clearTimeout=="function"?clearTimeout:void 0,o0=typeof Promise=="function"?Promise:void 0,MT=typeof queueMicrotask=="function"?queueMicrotask:typeof o0<"u"?function(n){return o0.resolve(null).then(n).catch(ET)}:vp;function ET(n){setTimeout(function(){throw n})}function jd(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),mu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);mu(e)}function As(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function a0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ll=Math.random().toString(36).slice(2),dr="__reactFiber$"+ll,yu="__reactProps$"+ll,jr="__reactContainer$"+ll,xp="__reactEvents$"+ll,TT="__reactListeners$"+ll,wT="__reactHandles$"+ll;function uo(n){var e=n[dr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[jr]||t[dr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=a0(n);n!==null;){if(t=n[dr])return t;n=a0(n)}return e}n=t,t=n.parentNode}return null}function Vu(n){return n=n[dr]||n[jr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ma(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(se(33))}function fd(n){return n[yu]||null}var yp=[],_a=-1;function Gs(n){return{current:n}}function Nt(n){0>_a||(n.current=yp[_a],yp[_a]=null,_a--)}function Rt(n,e){_a++,yp[_a]=n.current,n.current=e}var Os={},Ln=Gs(Os),Jn=Gs(!1),Co=Os;function Ha(n,e){var t=n.type.contextTypes;if(!t)return Os;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ei(n){return n=n.childContextTypes,n!=null}function Lf(){Nt(Jn),Nt(Ln)}function l0(n,e,t){if(Ln.current!==Os)throw Error(se(168));Rt(Ln,e),Rt(Jn,t)}function Ay(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,u1(n)||"Unknown",r));return Vt({},t,i)}function Nf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Os,Co=Ln.current,Rt(Ln,n),Rt(Jn,Jn.current),!0}function u0(n,e,t){var i=n.stateNode;if(!i)throw Error(se(169));t?(n=Ay(n,e,Co),i.__reactInternalMemoizedMergedChildContext=n,Nt(Jn),Nt(Ln),Rt(Ln,n)):Nt(Jn),Rt(Jn,t)}var Nr=null,dd=!1,Yd=!1;function Cy(n){Nr===null?Nr=[n]:Nr.push(n)}function AT(n){dd=!0,Cy(n)}function Ws(){if(!Yd&&Nr!==null){Yd=!0;var n=0,e=gt;try{var t=Nr;for(gt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Nr=null,dd=!1}catch(r){throw Nr!==null&&(Nr=Nr.slice(n+1)),Qx(c_,Ws),r}finally{gt=e,Yd=!1}}return null}var ga=[],va=0,If=null,Uf=0,Di=[],Li=0,Ro=null,Or=1,kr="";function eo(n,e){ga[va++]=Uf,ga[va++]=If,If=n,Uf=e}function Ry(n,e,t){Di[Li++]=Or,Di[Li++]=kr,Di[Li++]=Ro,Ro=n;var i=Or;n=kr;var r=32-nr(i)-1;i&=~(1<<r),t+=1;var s=32-nr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Or=1<<32-nr(e)+r|t<<r|i,kr=s+n}else Or=1<<s|t<<r|i,kr=n}function x_(n){n.return!==null&&(eo(n,1),Ry(n,1,0))}function y_(n){for(;n===If;)If=ga[--va],ga[va]=null,Uf=ga[--va],ga[va]=null;for(;n===Ro;)Ro=Di[--Li],Di[Li]=null,kr=Di[--Li],Di[Li]=null,Or=Di[--Li],Di[Li]=null}var yi=null,vi=null,It=!1,Qi=null;function Py(n,e){var t=Fi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function c0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,yi=n,vi=As(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,yi=n,vi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ro!==null?{id:Or,overflow:kr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Fi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,yi=n,vi=null,!0):!1;default:return!1}}function Sp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Mp(n){if(It){var e=vi;if(e){var t=e;if(!c0(n,e)){if(Sp(n))throw Error(se(418));e=As(t.nextSibling);var i=yi;e&&c0(n,e)?Py(i,t):(n.flags=n.flags&-4097|2,It=!1,yi=n)}}else{if(Sp(n))throw Error(se(418));n.flags=n.flags&-4097|2,It=!1,yi=n}}}function f0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;yi=n}function ac(n){if(n!==yi)return!1;if(!It)return f0(n),It=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!gp(n.type,n.memoizedProps)),e&&(e=vi)){if(Sp(n))throw by(),Error(se(418));for(;e;)Py(n,e),e=As(e.nextSibling)}if(f0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(se(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){vi=As(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}vi=null}}else vi=yi?As(n.stateNode.nextSibling):null;return!0}function by(){for(var n=vi;n;)n=As(n.nextSibling)}function Ga(){vi=yi=null,It=!1}function S_(n){Qi===null?Qi=[n]:Qi.push(n)}var CT=es.ReactCurrentBatchConfig;function xl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(se(309));var i=t.stateNode}if(!i)throw Error(se(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(se(284));if(!t._owner)throw Error(se(290,n))}return n}function lc(n,e){throw n=Object.prototype.toString.call(e),Error(se(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function d0(n){var e=n._init;return e(n._payload)}function Dy(n){function e(d,v){if(n){var x=d.deletions;x===null?(d.deletions=[v],d.flags|=16):x.push(v)}}function t(d,v){if(!n)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=bs(d,v),d.index=0,d.sibling=null,d}function s(d,v,x){return d.index=x,n?(x=d.alternate,x!==null?(x=x.index,x<v?(d.flags|=2,v):x):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,v,x,y){return v===null||v.tag!==6?(v=eh(x,d.mode,y),v.return=d,v):(v=r(v,x),v.return=d,v)}function l(d,v,x,y){var C=x.type;return C===fa?c(d,v,x.props.children,y,x.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===fs&&d0(C)===v.type)?(y=r(v,x.props),y.ref=xl(d,v,x),y.return=d,y):(y=af(x.type,x.key,x.props,null,d.mode,y),y.ref=xl(d,v,x),y.return=d,y)}function u(d,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=th(x,d.mode,y),v.return=d,v):(v=r(v,x.children||[]),v.return=d,v)}function c(d,v,x,y,C){return v===null||v.tag!==7?(v=vo(x,d.mode,y,C),v.return=d,v):(v=r(v,x),v.return=d,v)}function f(d,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=eh(""+v,d.mode,x),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Zu:return x=af(v.type,v.key,v.props,null,d.mode,x),x.ref=xl(d,null,v),x.return=d,x;case ca:return v=th(v,d.mode,x),v.return=d,v;case fs:var y=v._init;return f(d,y(v._payload),x)}if(Dl(v)||pl(v))return v=vo(v,d.mode,x,null),v.return=d,v;lc(d,v)}return null}function h(d,v,x,y){var C=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(d,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Zu:return x.key===C?l(d,v,x,y):null;case ca:return x.key===C?u(d,v,x,y):null;case fs:return C=x._init,h(d,v,C(x._payload),y)}if(Dl(x)||pl(x))return C!==null?null:c(d,v,x,y,null);lc(d,x)}return null}function p(d,v,x,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(x)||null,a(v,d,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Zu:return d=d.get(y.key===null?x:y.key)||null,l(v,d,y,C);case ca:return d=d.get(y.key===null?x:y.key)||null,u(v,d,y,C);case fs:var w=y._init;return p(d,v,x,w(y._payload),C)}if(Dl(y)||pl(y))return d=d.get(x)||null,c(v,d,y,C,null);lc(v,y)}return null}function g(d,v,x,y){for(var C=null,w=null,E=v,R=v=0,M=null;E!==null&&R<x.length;R++){E.index>R?(M=E,E=null):M=E.sibling;var S=h(d,E,x[R],y);if(S===null){E===null&&(E=M);break}n&&E&&S.alternate===null&&e(d,E),v=s(S,v,R),w===null?C=S:w.sibling=S,w=S,E=M}if(R===x.length)return t(d,E),It&&eo(d,R),C;if(E===null){for(;R<x.length;R++)E=f(d,x[R],y),E!==null&&(v=s(E,v,R),w===null?C=E:w.sibling=E,w=E);return It&&eo(d,R),C}for(E=i(d,E);R<x.length;R++)M=p(E,d,R,x[R],y),M!==null&&(n&&M.alternate!==null&&E.delete(M.key===null?R:M.key),v=s(M,v,R),w===null?C=M:w.sibling=M,w=M);return n&&E.forEach(function(D){return e(d,D)}),It&&eo(d,R),C}function _(d,v,x,y){var C=pl(x);if(typeof C!="function")throw Error(se(150));if(x=C.call(x),x==null)throw Error(se(151));for(var w=C=null,E=v,R=v=0,M=null,S=x.next();E!==null&&!S.done;R++,S=x.next()){E.index>R?(M=E,E=null):M=E.sibling;var D=h(d,E,S.value,y);if(D===null){E===null&&(E=M);break}n&&E&&D.alternate===null&&e(d,E),v=s(D,v,R),w===null?C=D:w.sibling=D,w=D,E=M}if(S.done)return t(d,E),It&&eo(d,R),C;if(E===null){for(;!S.done;R++,S=x.next())S=f(d,S.value,y),S!==null&&(v=s(S,v,R),w===null?C=S:w.sibling=S,w=S);return It&&eo(d,R),C}for(E=i(d,E);!S.done;R++,S=x.next())S=p(E,d,R,S.value,y),S!==null&&(n&&S.alternate!==null&&E.delete(S.key===null?R:S.key),v=s(S,v,R),w===null?C=S:w.sibling=S,w=S);return n&&E.forEach(function(F){return e(d,F)}),It&&eo(d,R),C}function m(d,v,x,y){if(typeof x=="object"&&x!==null&&x.type===fa&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Zu:e:{for(var C=x.key,w=v;w!==null;){if(w.key===C){if(C=x.type,C===fa){if(w.tag===7){t(d,w.sibling),v=r(w,x.props.children),v.return=d,d=v;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===fs&&d0(C)===w.type){t(d,w.sibling),v=r(w,x.props),v.ref=xl(d,w,x),v.return=d,d=v;break e}t(d,w);break}else e(d,w);w=w.sibling}x.type===fa?(v=vo(x.props.children,d.mode,y,x.key),v.return=d,d=v):(y=af(x.type,x.key,x.props,null,d.mode,y),y.ref=xl(d,v,x),y.return=d,d=y)}return o(d);case ca:e:{for(w=x.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(d,v.sibling),v=r(v,x.children||[]),v.return=d,d=v;break e}else{t(d,v);break}else e(d,v);v=v.sibling}v=th(x,d.mode,y),v.return=d,d=v}return o(d);case fs:return w=x._init,m(d,v,w(x._payload),y)}if(Dl(x))return g(d,v,x,y);if(pl(x))return _(d,v,x,y);lc(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(d,v.sibling),v=r(v,x),v.return=d,d=v):(t(d,v),v=eh(x,d.mode,y),v.return=d,d=v),o(d)):t(d,v)}return m}var Wa=Dy(!0),Ly=Dy(!1),Ff=Gs(null),Of=null,xa=null,M_=null;function E_(){M_=xa=Of=null}function T_(n){var e=Ff.current;Nt(Ff),n._currentValue=e}function Ep(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ba(n,e){Of=n,M_=xa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Qn=!0),n.firstContext=null)}function Vi(n){var e=n._currentValue;if(M_!==n)if(n={context:n,memoizedValue:e,next:null},xa===null){if(Of===null)throw Error(se(308));xa=n,Of.dependencies={lanes:0,firstContext:n}}else xa=xa.next=n;return e}var co=null;function w_(n){co===null?co=[n]:co.push(n)}function Ny(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,w_(e)):(t.next=r.next,r.next=t),e.interleaved=t,Yr(n,i)}function Yr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ds=!1;function A_(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iy(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Hr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Cs(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ct&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Yr(n,t)}return r=i.interleaved,r===null?(e.next=e,w_(i)):(e.next=r.next,r.next=e),i.interleaved=e,Yr(n,t)}function ef(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,f_(n,t)}}function h0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function kf(n,e,t,i){var r=n.updateQueue;ds=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,_=a;switch(h=e,p=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(p,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,h=typeof g=="function"?g.call(p,f,h):g,h==null)break e;f=Vt({},f,h);break e;case 2:ds=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);bo|=o,n.lanes=o,n.memoizedState=f}}function p0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Hu={},xr=Gs(Hu),Su=Gs(Hu),Mu=Gs(Hu);function fo(n){if(n===Hu)throw Error(se(174));return n}function C_(n,e){switch(Rt(Mu,e),Rt(Su,n),Rt(xr,Hu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ip(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=ip(e,n)}Nt(xr),Rt(xr,e)}function Xa(){Nt(xr),Nt(Su),Nt(Mu)}function Uy(n){fo(Mu.current);var e=fo(xr.current),t=ip(e,n.type);e!==t&&(Rt(Su,n),Rt(xr,t))}function R_(n){Su.current===n&&(Nt(xr),Nt(Su))}var Ot=Gs(0);function Bf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $d=[];function P_(){for(var n=0;n<$d.length;n++)$d[n]._workInProgressVersionPrimary=null;$d.length=0}var tf=es.ReactCurrentDispatcher,qd=es.ReactCurrentBatchConfig,Po=0,zt=null,sn=null,hn=null,zf=!1,$l=!1,Eu=0,RT=0;function Sn(){throw Error(se(321))}function b_(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!sr(n[t],e[t]))return!1;return!0}function D_(n,e,t,i,r,s){if(Po=s,zt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tf.current=n===null||n.memoizedState===null?LT:NT,n=t(i,r),$l){s=0;do{if($l=!1,Eu=0,25<=s)throw Error(se(301));s+=1,hn=sn=null,e.updateQueue=null,tf.current=IT,n=t(i,r)}while($l)}if(tf.current=Vf,e=sn!==null&&sn.next!==null,Po=0,hn=sn=zt=null,zf=!1,e)throw Error(se(300));return n}function L_(){var n=Eu!==0;return Eu=0,n}function lr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?zt.memoizedState=hn=n:hn=hn.next=n,hn}function Hi(){if(sn===null){var n=zt.alternate;n=n!==null?n.memoizedState:null}else n=sn.next;var e=hn===null?zt.memoizedState:hn.next;if(e!==null)hn=e,sn=n;else{if(n===null)throw Error(se(310));sn=n,n={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},hn===null?zt.memoizedState=hn=n:hn=hn.next=n}return hn}function Tu(n,e){return typeof e=="function"?e(n):e}function Kd(n){var e=Hi(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=sn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Po&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,zt.lanes|=c,bo|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,sr(i,e.memoizedState)||(Qn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,zt.lanes|=s,bo|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Zd(n){var e=Hi(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);sr(s,e.memoizedState)||(Qn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Fy(){}function Oy(n,e){var t=zt,i=Hi(),r=e(),s=!sr(i.memoizedState,r);if(s&&(i.memoizedState=r,Qn=!0),i=i.queue,N_(zy.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||hn!==null&&hn.memoizedState.tag&1){if(t.flags|=2048,wu(9,By.bind(null,t,i,r,e),void 0,null),mn===null)throw Error(se(349));Po&30||ky(t,e,r)}return r}function ky(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=zt.updateQueue,e===null?(e={lastEffect:null,stores:null},zt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function By(n,e,t,i){e.value=t,e.getSnapshot=i,Vy(e)&&Hy(n)}function zy(n,e,t){return t(function(){Vy(e)&&Hy(n)})}function Vy(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!sr(n,t)}catch{return!0}}function Hy(n){var e=Yr(n,1);e!==null&&ir(e,n,1,-1)}function m0(n){var e=lr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Tu,lastRenderedState:n},e.queue=n,n=n.dispatch=DT.bind(null,zt,n),[e.memoizedState,n]}function wu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=zt.updateQueue,e===null?(e={lastEffect:null,stores:null},zt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Gy(){return Hi().memoizedState}function nf(n,e,t,i){var r=lr();zt.flags|=n,r.memoizedState=wu(1|e,t,void 0,i===void 0?null:i)}function hd(n,e,t,i){var r=Hi();i=i===void 0?null:i;var s=void 0;if(sn!==null){var o=sn.memoizedState;if(s=o.destroy,i!==null&&b_(i,o.deps)){r.memoizedState=wu(e,t,s,i);return}}zt.flags|=n,r.memoizedState=wu(1|e,t,s,i)}function _0(n,e){return nf(8390656,8,n,e)}function N_(n,e){return hd(2048,8,n,e)}function Wy(n,e){return hd(4,2,n,e)}function Xy(n,e){return hd(4,4,n,e)}function jy(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Yy(n,e,t){return t=t!=null?t.concat([n]):null,hd(4,4,jy.bind(null,e,n),t)}function I_(){}function $y(n,e){var t=Hi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&b_(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function qy(n,e){var t=Hi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&b_(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Ky(n,e,t){return Po&21?(sr(t,e)||(t=ty(),zt.lanes|=t,bo|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Qn=!0),n.memoizedState=t)}function PT(n,e){var t=gt;gt=t!==0&&4>t?t:4,n(!0);var i=qd.transition;qd.transition={};try{n(!1),e()}finally{gt=t,qd.transition=i}}function Zy(){return Hi().memoizedState}function bT(n,e,t){var i=Ps(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Qy(n))Jy(e,t);else if(t=Ny(n,e,t,i),t!==null){var r=Wn();ir(t,n,i,r),eS(t,e,i)}}function DT(n,e,t){var i=Ps(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Qy(n))Jy(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,sr(a,o)){var l=e.interleaved;l===null?(r.next=r,w_(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Ny(n,e,r,i),t!==null&&(r=Wn(),ir(t,n,i,r),eS(t,e,i))}}function Qy(n){var e=n.alternate;return n===zt||e!==null&&e===zt}function Jy(n,e){$l=zf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function eS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,f_(n,t)}}var Vf={readContext:Vi,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},LT={readContext:Vi,useCallback:function(n,e){return lr().memoizedState=[n,e===void 0?null:e],n},useContext:Vi,useEffect:_0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,nf(4194308,4,jy.bind(null,e,n),t)},useLayoutEffect:function(n,e){return nf(4194308,4,n,e)},useInsertionEffect:function(n,e){return nf(4,2,n,e)},useMemo:function(n,e){var t=lr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=lr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=bT.bind(null,zt,n),[i.memoizedState,n]},useRef:function(n){var e=lr();return n={current:n},e.memoizedState=n},useState:m0,useDebugValue:I_,useDeferredValue:function(n){return lr().memoizedState=n},useTransition:function(){var n=m0(!1),e=n[0];return n=PT.bind(null,n[1]),lr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=zt,r=lr();if(It){if(t===void 0)throw Error(se(407));t=t()}else{if(t=e(),mn===null)throw Error(se(349));Po&30||ky(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,_0(zy.bind(null,i,s,n),[n]),i.flags|=2048,wu(9,By.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=lr(),e=mn.identifierPrefix;if(It){var t=kr,i=Or;t=(i&~(1<<32-nr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Eu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=RT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},NT={readContext:Vi,useCallback:$y,useContext:Vi,useEffect:N_,useImperativeHandle:Yy,useInsertionEffect:Wy,useLayoutEffect:Xy,useMemo:qy,useReducer:Kd,useRef:Gy,useState:function(){return Kd(Tu)},useDebugValue:I_,useDeferredValue:function(n){var e=Hi();return Ky(e,sn.memoizedState,n)},useTransition:function(){var n=Kd(Tu)[0],e=Hi().memoizedState;return[n,e]},useMutableSource:Fy,useSyncExternalStore:Oy,useId:Zy,unstable_isNewReconciler:!1},IT={readContext:Vi,useCallback:$y,useContext:Vi,useEffect:N_,useImperativeHandle:Yy,useInsertionEffect:Wy,useLayoutEffect:Xy,useMemo:qy,useReducer:Zd,useRef:Gy,useState:function(){return Zd(Tu)},useDebugValue:I_,useDeferredValue:function(n){var e=Hi();return sn===null?e.memoizedState=n:Ky(e,sn.memoizedState,n)},useTransition:function(){var n=Zd(Tu)[0],e=Hi().memoizedState;return[n,e]},useMutableSource:Fy,useSyncExternalStore:Oy,useId:Zy,unstable_isNewReconciler:!1};function Ki(n,e){if(n&&n.defaultProps){e=Vt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Tp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Vt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var pd={isMounted:function(n){return(n=n._reactInternals)?zo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Wn(),r=Ps(n),s=Hr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Cs(n,s,r),e!==null&&(ir(e,n,r,i),ef(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Wn(),r=Ps(n),s=Hr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Cs(n,s,r),e!==null&&(ir(e,n,r,i),ef(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Wn(),i=Ps(n),r=Hr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Cs(n,r,i),e!==null&&(ir(e,n,i,t),ef(e,n,i))}};function g0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!gu(t,i)||!gu(r,s):!0}function tS(n,e,t){var i=!1,r=Os,s=e.contextType;return typeof s=="object"&&s!==null?s=Vi(s):(r=ei(e)?Co:Ln.current,i=e.contextTypes,s=(i=i!=null)?Ha(n,r):Os),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pd,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function v0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&pd.enqueueReplaceState(e,e.state,null)}function wp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},A_(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Vi(s):(s=ei(e)?Co:Ln.current,r.context=Ha(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Tp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&pd.enqueueReplaceState(r,r.state,null),kf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ja(n,e){try{var t="",i=e;do t+=l1(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Qd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Ap(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var UT=typeof WeakMap=="function"?WeakMap:Map;function nS(n,e,t){t=Hr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Gf||(Gf=!0,Fp=i),Ap(n,e)},t}function iS(n,e,t){t=Hr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Ap(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Ap(n,e),typeof i!="function"&&(Rs===null?Rs=new Set([this]):Rs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function x0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new UT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=qT.bind(null,n,e,t),e.then(n,n))}function y0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function S0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Hr(-1,1),e.tag=2,Cs(t,e,1))),t.lanes|=1),n)}var FT=es.ReactCurrentOwner,Qn=!1;function kn(n,e,t,i){e.child=n===null?Ly(e,null,t,i):Wa(e,n.child,t,i)}function M0(n,e,t,i,r){t=t.render;var s=e.ref;return ba(e,r),i=D_(n,e,t,i,s,r),t=L_(),n!==null&&!Qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,$r(n,e,r)):(It&&t&&x_(e),e.flags|=1,kn(n,e,i,r),e.child)}function E0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!H_(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,rS(n,e,s,i,r)):(n=af(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:gu,t(o,i)&&n.ref===e.ref)return $r(n,e,r)}return e.flags|=1,n=bs(s,i),n.ref=e.ref,n.return=e,e.child=n}function rS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(gu(s,i)&&n.ref===e.ref)if(Qn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Qn=!0);else return e.lanes=n.lanes,$r(n,e,r)}return Cp(n,e,t,i,r)}function sS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Rt(Sa,hi),hi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Rt(Sa,hi),hi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Rt(Sa,hi),hi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Rt(Sa,hi),hi|=i;return kn(n,e,r,t),e.child}function oS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Cp(n,e,t,i,r){var s=ei(t)?Co:Ln.current;return s=Ha(e,s),ba(e,r),t=D_(n,e,t,i,s,r),i=L_(),n!==null&&!Qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,$r(n,e,r)):(It&&i&&x_(e),e.flags|=1,kn(n,e,t,r),e.child)}function T0(n,e,t,i,r){if(ei(t)){var s=!0;Nf(e)}else s=!1;if(ba(e,r),e.stateNode===null)rf(n,e),tS(e,t,i),wp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Vi(u):(u=ei(t)?Co:Ln.current,u=Ha(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&v0(e,o,i,u),ds=!1;var h=e.memoizedState;o.state=h,kf(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Jn.current||ds?(typeof c=="function"&&(Tp(e,t,c,i),l=e.memoizedState),(a=ds||g0(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Iy(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ki(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Vi(l):(l=ei(t)?Co:Ln.current,l=Ha(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&v0(e,o,i,l),ds=!1,h=e.memoizedState,o.state=h,kf(e,i,o,r);var g=e.memoizedState;a!==f||h!==g||Jn.current||ds?(typeof p=="function"&&(Tp(e,t,p,i),g=e.memoizedState),(u=ds||g0(e,t,u,i,h,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Rp(n,e,t,i,s,r)}function Rp(n,e,t,i,r,s){oS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&u0(e,t,!1),$r(n,e,s);i=e.stateNode,FT.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Wa(e,n.child,null,s),e.child=Wa(e,null,a,s)):kn(n,e,a,s),e.memoizedState=i.state,r&&u0(e,t,!0),e.child}function aS(n){var e=n.stateNode;e.pendingContext?l0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&l0(n,e.context,!1),C_(n,e.containerInfo)}function w0(n,e,t,i,r){return Ga(),S_(r),e.flags|=256,kn(n,e,t,i),e.child}var Pp={dehydrated:null,treeContext:null,retryLane:0};function bp(n){return{baseLanes:n,cachePool:null,transitions:null}}function lS(n,e,t){var i=e.pendingProps,r=Ot.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Rt(Ot,r&1),n===null)return Mp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gd(o,i,0,null),n=vo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=bp(t),e.memoizedState=Pp,n):U_(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return OT(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=bs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=bs(a,s):(s=vo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?bp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Pp,i}return s=n.child,n=s.sibling,i=bs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function U_(n,e){return e=gd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function uc(n,e,t,i){return i!==null&&S_(i),Wa(e,n.child,null,t),n=U_(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function OT(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Qd(Error(se(422))),uc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=gd({mode:"visible",children:i.children},r,0,null),s=vo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Wa(e,n.child,null,o),e.child.memoizedState=bp(o),e.memoizedState=Pp,s);if(!(e.mode&1))return uc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=Qd(s,i,void 0),uc(n,e,o,i)}if(a=(o&n.childLanes)!==0,Qn||a){if(i=mn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Yr(n,r),ir(i,n,r,-1))}return V_(),i=Qd(Error(se(421))),uc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=KT.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,vi=As(r.nextSibling),yi=e,It=!0,Qi=null,n!==null&&(Di[Li++]=Or,Di[Li++]=kr,Di[Li++]=Ro,Or=n.id,kr=n.overflow,Ro=e),e=U_(e,i.children),e.flags|=4096,e)}function A0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Ep(n.return,e,t)}function Jd(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function uS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(kn(n,e,i.children,t),i=Ot.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&A0(n,t,e);else if(n.tag===19)A0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Rt(Ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Bf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Jd(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Bf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Jd(e,!0,t,null,s);break;case"together":Jd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function rf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function $r(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),bo|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(se(153));if(e.child!==null){for(n=e.child,t=bs(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=bs(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function kT(n,e,t){switch(e.tag){case 3:aS(e),Ga();break;case 5:Uy(e);break;case 1:ei(e.type)&&Nf(e);break;case 4:C_(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Rt(Ff,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Rt(Ot,Ot.current&1),e.flags|=128,null):t&e.child.childLanes?lS(n,e,t):(Rt(Ot,Ot.current&1),n=$r(n,e,t),n!==null?n.sibling:null);Rt(Ot,Ot.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return uS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Rt(Ot,Ot.current),i)break;return null;case 22:case 23:return e.lanes=0,sS(n,e,t)}return $r(n,e,t)}var cS,Dp,fS,dS;cS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Dp=function(){};fS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,fo(xr.current);var s=null;switch(t){case"input":r=Jh(n,r),i=Jh(n,i),s=[];break;case"select":r=Vt({},r,{value:void 0}),i=Vt({},i,{value:void 0}),s=[];break;case"textarea":r=np(n,r),i=np(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Df)}rp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(cu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(cu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Dt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};dS=function(n,e,t,i){t!==i&&(e.flags|=4)};function yl(n,e){if(!It)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Mn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function BT(n,e,t){var i=e.pendingProps;switch(y_(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(e),null;case 1:return ei(e.type)&&Lf(),Mn(e),null;case 3:return i=e.stateNode,Xa(),Nt(Jn),Nt(Ln),P_(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(ac(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qi!==null&&(Bp(Qi),Qi=null))),Dp(n,e),Mn(e),null;case 5:R_(e);var r=fo(Mu.current);if(t=e.type,n!==null&&e.stateNode!=null)fS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Mn(e),null}if(n=fo(xr.current),ac(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[dr]=e,i[yu]=s,n=(e.mode&1)!==0,t){case"dialog":Dt("cancel",i),Dt("close",i);break;case"iframe":case"object":case"embed":Dt("load",i);break;case"video":case"audio":for(r=0;r<Nl.length;r++)Dt(Nl[r],i);break;case"source":Dt("error",i);break;case"img":case"image":case"link":Dt("error",i),Dt("load",i);break;case"details":Dt("toggle",i);break;case"input":Ug(i,s),Dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Dt("invalid",i);break;case"textarea":Og(i,s),Dt("invalid",i)}rp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&oc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&oc(i.textContent,a,n),r=["children",""+a]):cu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Dt("scroll",i)}switch(t){case"input":Qu(i),Fg(i,s,!0);break;case"textarea":Qu(i),kg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Df)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=zx(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[dr]=e,n[yu]=i,cS(n,e,!1,!1),e.stateNode=n;e:{switch(o=sp(t,i),t){case"dialog":Dt("cancel",n),Dt("close",n),r=i;break;case"iframe":case"object":case"embed":Dt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Nl.length;r++)Dt(Nl[r],n);r=i;break;case"source":Dt("error",n),r=i;break;case"img":case"image":case"link":Dt("error",n),Dt("load",n),r=i;break;case"details":Dt("toggle",n),r=i;break;case"input":Ug(n,i),r=Jh(n,i),Dt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Vt({},i,{value:void 0}),Dt("invalid",n);break;case"textarea":Og(n,i),r=np(n,i),Dt("invalid",n);break;default:r=i}rp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Gx(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vx(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&fu(n,l):typeof l=="number"&&fu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(cu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Dt("scroll",n):l!=null&&s_(n,s,l,o))}switch(t){case"input":Qu(n),Fg(n,i,!1);break;case"textarea":Qu(n),kg(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Fs(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Aa(n,!!i.multiple,s,!1):i.defaultValue!=null&&Aa(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Df)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Mn(e),null;case 6:if(n&&e.stateNode!=null)dS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(t=fo(Mu.current),fo(xr.current),ac(e)){if(i=e.stateNode,t=e.memoizedProps,i[dr]=e,(s=i.nodeValue!==t)&&(n=yi,n!==null))switch(n.tag){case 3:oc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&oc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[dr]=e,e.stateNode=i}return Mn(e),null;case 13:if(Nt(Ot),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(It&&vi!==null&&e.mode&1&&!(e.flags&128))by(),Ga(),e.flags|=98560,s=!1;else if(s=ac(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[dr]=e}else Ga(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Mn(e),s=!1}else Qi!==null&&(Bp(Qi),Qi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Ot.current&1?an===0&&(an=3):V_())),e.updateQueue!==null&&(e.flags|=4),Mn(e),null);case 4:return Xa(),Dp(n,e),n===null&&vu(e.stateNode.containerInfo),Mn(e),null;case 10:return T_(e.type._context),Mn(e),null;case 17:return ei(e.type)&&Lf(),Mn(e),null;case 19:if(Nt(Ot),s=e.memoizedState,s===null)return Mn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)yl(s,!1);else{if(an!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Bf(n),o!==null){for(e.flags|=128,yl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Rt(Ot,Ot.current&1|2),e.child}n=n.sibling}s.tail!==null&&Yt()>Ya&&(e.flags|=128,i=!0,yl(s,!1),e.lanes=4194304)}else{if(!i)if(n=Bf(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),yl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!It)return Mn(e),null}else 2*Yt()-s.renderingStartTime>Ya&&t!==1073741824&&(e.flags|=128,i=!0,yl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Yt(),e.sibling=null,t=Ot.current,Rt(Ot,i?t&1|2:t&1),e):(Mn(e),null);case 22:case 23:return z_(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hi&1073741824&&(Mn(e),e.subtreeFlags&6&&(e.flags|=8192)):Mn(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function zT(n,e){switch(y_(e),e.tag){case 1:return ei(e.type)&&Lf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Xa(),Nt(Jn),Nt(Ln),P_(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return R_(e),null;case 13:if(Nt(Ot),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Ga()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Nt(Ot),null;case 4:return Xa(),null;case 10:return T_(e.type._context),null;case 22:case 23:return z_(),null;case 24:return null;default:return null}}var cc=!1,Cn=!1,VT=typeof WeakSet=="function"?WeakSet:Set,Te=null;function ya(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Gt(n,e,i)}else t.current=null}function Lp(n,e,t){try{t()}catch(i){Gt(n,e,i)}}var C0=!1;function HT(n,e){if(mp=Rf,n=gy(),v_(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,h=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(_p={focusedElem:n,selectionRange:t},Rf=!1,Te=e;Te!==null;)if(e=Te,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Te=n;else for(;Te!==null;){e=Te;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:Ki(e.type,_),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(y){Gt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}return g=C0,C0=!1,g}function ql(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Lp(e,t,s)}r=r.next}while(r!==i)}}function md(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Np(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function hS(n){var e=n.alternate;e!==null&&(n.alternate=null,hS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[dr],delete e[yu],delete e[xp],delete e[TT],delete e[wT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function pS(n){return n.tag===5||n.tag===3||n.tag===4}function R0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||pS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ip(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Df));else if(i!==4&&(n=n.child,n!==null))for(Ip(n,e,t),n=n.sibling;n!==null;)Ip(n,e,t),n=n.sibling}function Up(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Up(n,e,t),n=n.sibling;n!==null;)Up(n,e,t),n=n.sibling}var gn=null,Zi=!1;function is(n,e,t){for(t=t.child;t!==null;)mS(n,e,t),t=t.sibling}function mS(n,e,t){if(vr&&typeof vr.onCommitFiberUnmount=="function")try{vr.onCommitFiberUnmount(ad,t)}catch{}switch(t.tag){case 5:Cn||ya(t,e);case 6:var i=gn,r=Zi;gn=null,is(n,e,t),gn=i,Zi=r,gn!==null&&(Zi?(n=gn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):gn.removeChild(t.stateNode));break;case 18:gn!==null&&(Zi?(n=gn,t=t.stateNode,n.nodeType===8?jd(n.parentNode,t):n.nodeType===1&&jd(n,t),mu(n)):jd(gn,t.stateNode));break;case 4:i=gn,r=Zi,gn=t.stateNode.containerInfo,Zi=!0,is(n,e,t),gn=i,Zi=r;break;case 0:case 11:case 14:case 15:if(!Cn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Lp(t,e,o),r=r.next}while(r!==i)}is(n,e,t);break;case 1:if(!Cn&&(ya(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Gt(t,e,a)}is(n,e,t);break;case 21:is(n,e,t);break;case 22:t.mode&1?(Cn=(i=Cn)||t.memoizedState!==null,is(n,e,t),Cn=i):is(n,e,t);break;default:is(n,e,t)}}function P0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new VT),e.forEach(function(i){var r=ZT.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Xi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:gn=a.stateNode,Zi=!1;break e;case 3:gn=a.stateNode.containerInfo,Zi=!0;break e;case 4:gn=a.stateNode.containerInfo,Zi=!0;break e}a=a.return}if(gn===null)throw Error(se(160));mS(s,o,r),gn=null,Zi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Gt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_S(e,n),e=e.sibling}function _S(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Xi(e,n),ar(n),i&4){try{ql(3,n,n.return),md(3,n)}catch(_){Gt(n,n.return,_)}try{ql(5,n,n.return)}catch(_){Gt(n,n.return,_)}}break;case 1:Xi(e,n),ar(n),i&512&&t!==null&&ya(t,t.return);break;case 5:if(Xi(e,n),ar(n),i&512&&t!==null&&ya(t,t.return),n.flags&32){var r=n.stateNode;try{fu(r,"")}catch(_){Gt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&kx(r,s),sp(a,o);var u=sp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Gx(r,f):c==="dangerouslySetInnerHTML"?Vx(r,f):c==="children"?fu(r,f):s_(r,c,f,u)}switch(a){case"input":ep(r,s);break;case"textarea":Bx(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Aa(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Aa(r,!!s.multiple,s.defaultValue,!0):Aa(r,!!s.multiple,s.multiple?[]:"",!1))}r[yu]=s}catch(_){Gt(n,n.return,_)}}break;case 6:if(Xi(e,n),ar(n),i&4){if(n.stateNode===null)throw Error(se(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Gt(n,n.return,_)}}break;case 3:if(Xi(e,n),ar(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{mu(e.containerInfo)}catch(_){Gt(n,n.return,_)}break;case 4:Xi(e,n),ar(n);break;case 13:Xi(e,n),ar(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(k_=Yt())),i&4&&P0(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Cn=(u=Cn)||c,Xi(e,n),Cn=u):Xi(e,n),ar(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Te=n,c=n.child;c!==null;){for(f=Te=c;Te!==null;){switch(h=Te,p=h.child,h.tag){case 0:case 11:case 14:case 15:ql(4,h,h.return);break;case 1:ya(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Gt(i,t,_)}}break;case 5:ya(h,h.return);break;case 22:if(h.memoizedState!==null){D0(f);continue}}p!==null?(p.return=h,Te=p):D0(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Hx("display",o))}catch(_){Gt(n,n.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){Gt(n,n.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Xi(e,n),ar(n),i&4&&P0(n);break;case 21:break;default:Xi(e,n),ar(n)}}function ar(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(pS(t)){var i=t;break e}t=t.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(fu(r,""),i.flags&=-33);var s=R0(n);Up(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=R0(n);Ip(n,a,o);break;default:throw Error(se(161))}}catch(l){Gt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function GT(n,e,t){Te=n,gS(n)}function gS(n,e,t){for(var i=(n.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||cc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Cn;a=cc;var u=Cn;if(cc=o,(Cn=l)&&!u)for(Te=r;Te!==null;)o=Te,l=o.child,o.tag===22&&o.memoizedState!==null?L0(r):l!==null?(l.return=o,Te=l):L0(r);for(;s!==null;)Te=s,gS(s),s=s.sibling;Te=r,cc=a,Cn=u}b0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):b0(n)}}function b0(n){for(;Te!==null;){var e=Te;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Cn||md(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Cn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Ki(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&p0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}p0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&mu(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Cn||e.flags&512&&Np(e)}catch(h){Gt(e,e.return,h)}}if(e===n){Te=null;break}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}}function D0(n){for(;Te!==null;){var e=Te;if(e===n){Te=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Te=t;break}Te=e.return}}function L0(n){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{md(4,e)}catch(l){Gt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Gt(e,r,l)}}var s=e.return;try{Np(e)}catch(l){Gt(e,s,l)}break;case 5:var o=e.return;try{Np(e)}catch(l){Gt(e,o,l)}}}catch(l){Gt(e,e.return,l)}if(e===n){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var WT=Math.ceil,Hf=es.ReactCurrentDispatcher,F_=es.ReactCurrentOwner,Bi=es.ReactCurrentBatchConfig,ct=0,mn=null,en=null,xn=0,hi=0,Sa=Gs(0),an=0,Au=null,bo=0,_d=0,O_=0,Kl=null,Kn=null,k_=0,Ya=1/0,Dr=null,Gf=!1,Fp=null,Rs=null,fc=!1,gs=null,Wf=0,Zl=0,Op=null,sf=-1,of=0;function Wn(){return ct&6?Yt():sf!==-1?sf:sf=Yt()}function Ps(n){return n.mode&1?ct&2&&xn!==0?xn&-xn:CT.transition!==null?(of===0&&(of=ty()),of):(n=gt,n!==0||(n=window.event,n=n===void 0?16:ly(n.type)),n):1}function ir(n,e,t,i){if(50<Zl)throw Zl=0,Op=null,Error(se(185));Bu(n,t,i),(!(ct&2)||n!==mn)&&(n===mn&&(!(ct&2)&&(_d|=t),an===4&&ps(n,xn)),ti(n,i),t===1&&ct===0&&!(e.mode&1)&&(Ya=Yt()+500,dd&&Ws()))}function ti(n,e){var t=n.callbackNode;C1(n,e);var i=Cf(n,n===mn?xn:0);if(i===0)t!==null&&Vg(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Vg(t),e===1)n.tag===0?AT(N0.bind(null,n)):Cy(N0.bind(null,n)),MT(function(){!(ct&6)&&Ws()}),t=null;else{switch(ny(i)){case 1:t=c_;break;case 4:t=Jx;break;case 16:t=Af;break;case 536870912:t=ey;break;default:t=Af}t=wS(t,vS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function vS(n,e){if(sf=-1,of=0,ct&6)throw Error(se(327));var t=n.callbackNode;if(Da()&&n.callbackNode!==t)return null;var i=Cf(n,n===mn?xn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Xf(n,i);else{e=i;var r=ct;ct|=2;var s=yS();(mn!==n||xn!==e)&&(Dr=null,Ya=Yt()+500,go(n,e));do try{YT();break}catch(a){xS(n,a)}while(!0);E_(),Hf.current=s,ct=r,en!==null?e=0:(mn=null,xn=0,e=an)}if(e!==0){if(e===2&&(r=cp(n),r!==0&&(i=r,e=kp(n,r))),e===1)throw t=Au,go(n,0),ps(n,i),ti(n,Yt()),t;if(e===6)ps(n,i);else{if(r=n.current.alternate,!(i&30)&&!XT(r)&&(e=Xf(n,i),e===2&&(s=cp(n),s!==0&&(i=s,e=kp(n,s))),e===1))throw t=Au,go(n,0),ps(n,i),ti(n,Yt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:to(n,Kn,Dr);break;case 3:if(ps(n,i),(i&130023424)===i&&(e=k_+500-Yt(),10<e)){if(Cf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Wn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=vp(to.bind(null,n,Kn,Dr),e);break}to(n,Kn,Dr);break;case 4:if(ps(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-nr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*WT(i/1960))-i,10<i){n.timeoutHandle=vp(to.bind(null,n,Kn,Dr),i);break}to(n,Kn,Dr);break;case 5:to(n,Kn,Dr);break;default:throw Error(se(329))}}}return ti(n,Yt()),n.callbackNode===t?vS.bind(null,n):null}function kp(n,e){var t=Kl;return n.current.memoizedState.isDehydrated&&(go(n,e).flags|=256),n=Xf(n,e),n!==2&&(e=Kn,Kn=t,e!==null&&Bp(e)),n}function Bp(n){Kn===null?Kn=n:Kn.push.apply(Kn,n)}function XT(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!sr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ps(n,e){for(e&=~O_,e&=~_d,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-nr(e),i=1<<t;n[t]=-1,e&=~i}}function N0(n){if(ct&6)throw Error(se(327));Da();var e=Cf(n,0);if(!(e&1))return ti(n,Yt()),null;var t=Xf(n,e);if(n.tag!==0&&t===2){var i=cp(n);i!==0&&(e=i,t=kp(n,i))}if(t===1)throw t=Au,go(n,0),ps(n,e),ti(n,Yt()),t;if(t===6)throw Error(se(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,to(n,Kn,Dr),ti(n,Yt()),null}function B_(n,e){var t=ct;ct|=1;try{return n(e)}finally{ct=t,ct===0&&(Ya=Yt()+500,dd&&Ws())}}function Do(n){gs!==null&&gs.tag===0&&!(ct&6)&&Da();var e=ct;ct|=1;var t=Bi.transition,i=gt;try{if(Bi.transition=null,gt=1,n)return n()}finally{gt=i,Bi.transition=t,ct=e,!(ct&6)&&Ws()}}function z_(){hi=Sa.current,Nt(Sa)}function go(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,ST(t)),en!==null)for(t=en.return;t!==null;){var i=t;switch(y_(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Lf();break;case 3:Xa(),Nt(Jn),Nt(Ln),P_();break;case 5:R_(i);break;case 4:Xa();break;case 13:Nt(Ot);break;case 19:Nt(Ot);break;case 10:T_(i.type._context);break;case 22:case 23:z_()}t=t.return}if(mn=n,en=n=bs(n.current,null),xn=hi=e,an=0,Au=null,O_=_d=bo=0,Kn=Kl=null,co!==null){for(e=0;e<co.length;e++)if(t=co[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}co=null}return n}function xS(n,e){do{var t=en;try{if(E_(),tf.current=Vf,zf){for(var i=zt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}zf=!1}if(Po=0,hn=sn=zt=null,$l=!1,Eu=0,F_.current=null,t===null||t.return===null){an=1,Au=e,en=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=xn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=y0(o);if(p!==null){p.flags&=-257,S0(p,o,a,s,e),p.mode&1&&x0(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){x0(s,u,e),V_();break e}l=Error(se(426))}}else if(It&&a.mode&1){var m=y0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),S0(m,o,a,s,e),S_(ja(l,a));break e}}s=l=ja(l,a),an!==4&&(an=2),Kl===null?Kl=[s]:Kl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=nS(s,l,e);h0(s,d);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Rs===null||!Rs.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=iS(s,a,e);h0(s,y);break e}}s=s.return}while(s!==null)}MS(t)}catch(C){e=C,en===t&&t!==null&&(en=t=t.return);continue}break}while(!0)}function yS(){var n=Hf.current;return Hf.current=Vf,n===null?Vf:n}function V_(){(an===0||an===3||an===2)&&(an=4),mn===null||!(bo&268435455)&&!(_d&268435455)||ps(mn,xn)}function Xf(n,e){var t=ct;ct|=2;var i=yS();(mn!==n||xn!==e)&&(Dr=null,go(n,e));do try{jT();break}catch(r){xS(n,r)}while(!0);if(E_(),ct=t,Hf.current=i,en!==null)throw Error(se(261));return mn=null,xn=0,an}function jT(){for(;en!==null;)SS(en)}function YT(){for(;en!==null&&!v1();)SS(en)}function SS(n){var e=TS(n.alternate,n,hi);n.memoizedProps=n.pendingProps,e===null?MS(n):en=e,F_.current=null}function MS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=zT(t,e),t!==null){t.flags&=32767,en=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{an=6,en=null;return}}else if(t=BT(t,e,hi),t!==null){en=t;return}if(e=e.sibling,e!==null){en=e;return}en=e=n}while(e!==null);an===0&&(an=5)}function to(n,e,t){var i=gt,r=Bi.transition;try{Bi.transition=null,gt=1,$T(n,e,t,i)}finally{Bi.transition=r,gt=i}return null}function $T(n,e,t,i){do Da();while(gs!==null);if(ct&6)throw Error(se(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(se(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(R1(n,s),n===mn&&(en=mn=null,xn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||fc||(fc=!0,wS(Af,function(){return Da(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Bi.transition,Bi.transition=null;var o=gt;gt=1;var a=ct;ct|=4,F_.current=null,HT(n,t),_S(t,n),pT(_p),Rf=!!mp,_p=mp=null,n.current=t,GT(t),x1(),ct=a,gt=o,Bi.transition=s}else n.current=t;if(fc&&(fc=!1,gs=n,Wf=r),s=n.pendingLanes,s===0&&(Rs=null),M1(t.stateNode),ti(n,Yt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Gf)throw Gf=!1,n=Fp,Fp=null,n;return Wf&1&&n.tag!==0&&Da(),s=n.pendingLanes,s&1?n===Op?Zl++:(Zl=0,Op=n):Zl=0,Ws(),null}function Da(){if(gs!==null){var n=ny(Wf),e=Bi.transition,t=gt;try{if(Bi.transition=null,gt=16>n?16:n,gs===null)var i=!1;else{if(n=gs,gs=null,Wf=0,ct&6)throw Error(se(331));var r=ct;for(ct|=4,Te=n.current;Te!==null;){var s=Te,o=s.child;if(Te.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Te=u;Te!==null;){var c=Te;switch(c.tag){case 0:case 11:case 15:ql(8,c,s)}var f=c.child;if(f!==null)f.return=c,Te=f;else for(;Te!==null;){c=Te;var h=c.sibling,p=c.return;if(hS(c),c===u){Te=null;break}if(h!==null){h.return=p,Te=h;break}Te=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Te=o;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ql(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Te=d;break e}Te=s.return}}var v=n.current;for(Te=v;Te!==null;){o=Te;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Te=x;else e:for(o=v;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:md(9,a)}}catch(C){Gt(a,a.return,C)}if(a===o){Te=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Te=y;break e}Te=a.return}}if(ct=r,Ws(),vr&&typeof vr.onPostCommitFiberRoot=="function")try{vr.onPostCommitFiberRoot(ad,n)}catch{}i=!0}return i}finally{gt=t,Bi.transition=e}}return!1}function I0(n,e,t){e=ja(t,e),e=nS(n,e,1),n=Cs(n,e,1),e=Wn(),n!==null&&(Bu(n,1,e),ti(n,e))}function Gt(n,e,t){if(n.tag===3)I0(n,n,t);else for(;e!==null;){if(e.tag===3){I0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Rs===null||!Rs.has(i))){n=ja(t,n),n=iS(e,n,1),e=Cs(e,n,1),n=Wn(),e!==null&&(Bu(e,1,n),ti(e,n));break}}e=e.return}}function qT(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Wn(),n.pingedLanes|=n.suspendedLanes&t,mn===n&&(xn&t)===t&&(an===4||an===3&&(xn&130023424)===xn&&500>Yt()-k_?go(n,0):O_|=t),ti(n,e)}function ES(n,e){e===0&&(n.mode&1?(e=tc,tc<<=1,!(tc&130023424)&&(tc=4194304)):e=1);var t=Wn();n=Yr(n,e),n!==null&&(Bu(n,e,t),ti(n,t))}function KT(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),ES(n,t)}function ZT(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),ES(n,t)}var TS;TS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Jn.current)Qn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Qn=!1,kT(n,e,t);Qn=!!(n.flags&131072)}else Qn=!1,It&&e.flags&1048576&&Ry(e,Uf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;rf(n,e),n=e.pendingProps;var r=Ha(e,Ln.current);ba(e,t),r=D_(null,e,i,n,r,t);var s=L_();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ei(i)?(s=!0,Nf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,A_(e),r.updater=pd,e.stateNode=r,r._reactInternals=e,wp(e,i,n,t),e=Rp(null,e,i,!0,s,t)):(e.tag=0,It&&s&&x_(e),kn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(rf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=JT(i),n=Ki(i,n),r){case 0:e=Cp(null,e,i,n,t);break e;case 1:e=T0(null,e,i,n,t);break e;case 11:e=M0(null,e,i,n,t);break e;case 14:e=E0(null,e,i,Ki(i.type,n),t);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ki(i,r),Cp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ki(i,r),T0(n,e,i,r,t);case 3:e:{if(aS(e),n===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Iy(n,e),kf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ja(Error(se(423)),e),e=w0(n,e,i,t,r);break e}else if(i!==r){r=ja(Error(se(424)),e),e=w0(n,e,i,t,r);break e}else for(vi=As(e.stateNode.containerInfo.firstChild),yi=e,It=!0,Qi=null,t=Ly(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ga(),i===r){e=$r(n,e,t);break e}kn(n,e,i,t)}e=e.child}return e;case 5:return Uy(e),n===null&&Mp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,gp(i,r)?o=null:s!==null&&gp(i,s)&&(e.flags|=32),oS(n,e),kn(n,e,o,t),e.child;case 6:return n===null&&Mp(e),null;case 13:return lS(n,e,t);case 4:return C_(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Wa(e,null,i,t):kn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ki(i,r),M0(n,e,i,r,t);case 7:return kn(n,e,e.pendingProps,t),e.child;case 8:return kn(n,e,e.pendingProps.children,t),e.child;case 12:return kn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Rt(Ff,i._currentValue),i._currentValue=o,s!==null)if(sr(s.value,o)){if(s.children===r.children&&!Jn.current){e=$r(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Hr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Ep(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Ep(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ba(e,t),r=Vi(r),i=i(r),e.flags|=1,kn(n,e,i,t),e.child;case 14:return i=e.type,r=Ki(i,e.pendingProps),r=Ki(i.type,r),E0(n,e,i,r,t);case 15:return rS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ki(i,r),rf(n,e),e.tag=1,ei(i)?(n=!0,Nf(e)):n=!1,ba(e,t),tS(e,i,r),wp(e,i,r,t),Rp(null,e,i,!0,n,t);case 19:return uS(n,e,t);case 22:return sS(n,e,t)}throw Error(se(156,e.tag))};function wS(n,e){return Qx(n,e)}function QT(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fi(n,e,t,i){return new QT(n,e,t,i)}function H_(n){return n=n.prototype,!(!n||!n.isReactComponent)}function JT(n){if(typeof n=="function")return H_(n)?1:0;if(n!=null){if(n=n.$$typeof,n===a_)return 11;if(n===l_)return 14}return 2}function bs(n,e){var t=n.alternate;return t===null?(t=Fi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function af(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")H_(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case fa:return vo(t.children,r,s,e);case o_:o=8,r|=8;break;case qh:return n=Fi(12,t,e,r|2),n.elementType=qh,n.lanes=s,n;case Kh:return n=Fi(13,t,e,r),n.elementType=Kh,n.lanes=s,n;case Zh:return n=Fi(19,t,e,r),n.elementType=Zh,n.lanes=s,n;case Ux:return gd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Nx:o=10;break e;case Ix:o=9;break e;case a_:o=11;break e;case l_:o=14;break e;case fs:o=16,i=null;break e}throw Error(se(130,n==null?n:typeof n,""))}return e=Fi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function vo(n,e,t,i){return n=Fi(7,n,i,e),n.lanes=t,n}function gd(n,e,t,i){return n=Fi(22,n,i,e),n.elementType=Ux,n.lanes=t,n.stateNode={isHidden:!1},n}function eh(n,e,t){return n=Fi(6,n,null,e),n.lanes=t,n}function th(n,e,t){return e=Fi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function ew(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ud(0),this.expirationTimes=Ud(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ud(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function G_(n,e,t,i,r,s,o,a,l){return n=new ew(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},A_(s),n}function tw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ca,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function AS(n){if(!n)return Os;n=n._reactInternals;e:{if(zo(n)!==n||n.tag!==1)throw Error(se(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ei(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(n.tag===1){var t=n.type;if(ei(t))return Ay(n,t,e)}return e}function CS(n,e,t,i,r,s,o,a,l){return n=G_(t,i,!0,n,r,s,o,a,l),n.context=AS(null),t=n.current,i=Wn(),r=Ps(t),s=Hr(i,r),s.callback=e??null,Cs(t,s,r),n.current.lanes=r,Bu(n,r,i),ti(n,i),n}function vd(n,e,t,i){var r=e.current,s=Wn(),o=Ps(r);return t=AS(t),e.context===null?e.context=t:e.pendingContext=t,e=Hr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Cs(r,e,o),n!==null&&(ir(n,r,o,s),ef(n,r,o)),o}function jf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function U0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function W_(n,e){U0(n,e),(n=n.alternate)&&U0(n,e)}function nw(){return null}var RS=typeof reportError=="function"?reportError:function(n){console.error(n)};function X_(n){this._internalRoot=n}xd.prototype.render=X_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(se(409));vd(n,e,null,null)};xd.prototype.unmount=X_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Do(function(){vd(null,n,null,null)}),e[jr]=null}};function xd(n){this._internalRoot=n}xd.prototype.unstable_scheduleHydration=function(n){if(n){var e=sy();n={blockedOn:null,target:n,priority:e};for(var t=0;t<hs.length&&e!==0&&e<hs[t].priority;t++);hs.splice(t,0,n),t===0&&ay(n)}};function j_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function yd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function F0(){}function iw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=jf(o);s.call(u)}}var o=CS(e,i,n,0,null,!1,!1,"",F0);return n._reactRootContainer=o,n[jr]=o.current,vu(n.nodeType===8?n.parentNode:n),Do(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=jf(l);a.call(u)}}var l=G_(n,0,!1,null,null,!1,!1,"",F0);return n._reactRootContainer=l,n[jr]=l.current,vu(n.nodeType===8?n.parentNode:n),Do(function(){vd(e,l,t,i)}),l}function Sd(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=jf(o);a.call(l)}}vd(e,o,n,r)}else o=iw(t,e,n,r,i);return jf(o)}iy=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ll(e.pendingLanes);t!==0&&(f_(e,t|1),ti(e,Yt()),!(ct&6)&&(Ya=Yt()+500,Ws()))}break;case 13:Do(function(){var i=Yr(n,1);if(i!==null){var r=Wn();ir(i,n,1,r)}}),W_(n,1)}};d_=function(n){if(n.tag===13){var e=Yr(n,134217728);if(e!==null){var t=Wn();ir(e,n,134217728,t)}W_(n,134217728)}};ry=function(n){if(n.tag===13){var e=Ps(n),t=Yr(n,e);if(t!==null){var i=Wn();ir(t,n,e,i)}W_(n,e)}};sy=function(){return gt};oy=function(n,e){var t=gt;try{return gt=n,e()}finally{gt=t}};ap=function(n,e,t){switch(e){case"input":if(ep(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=fd(i);if(!r)throw Error(se(90));Ox(i),ep(i,r)}}}break;case"textarea":Bx(n,t);break;case"select":e=t.value,e!=null&&Aa(n,!!t.multiple,e,!1)}};jx=B_;Yx=Do;var rw={usingClientEntryPoint:!1,Events:[Vu,ma,fd,Wx,Xx,B_]},Sl={findFiberByHostInstance:uo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sw={bundleType:Sl.bundleType,version:Sl.version,rendererPackageName:Sl.rendererPackageName,rendererConfig:Sl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:es.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Kx(n),n===null?null:n.stateNode},findFiberByHostInstance:Sl.findFiberByHostInstance||nw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{ad=dc.inject(sw),vr=dc}catch{}}wi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rw;wi.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!j_(e))throw Error(se(200));return tw(n,e,null,t)};wi.createRoot=function(n,e){if(!j_(n))throw Error(se(299));var t=!1,i="",r=RS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=G_(n,1,!1,null,null,t,!1,i,r),n[jr]=e.current,vu(n.nodeType===8?n.parentNode:n),new X_(e)};wi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(se(188)):(n=Object.keys(n).join(","),Error(se(268,n)));return n=Kx(e),n=n===null?null:n.stateNode,n};wi.flushSync=function(n){return Do(n)};wi.hydrate=function(n,e,t){if(!yd(e))throw Error(se(200));return Sd(null,n,e,!0,t)};wi.hydrateRoot=function(n,e,t){if(!j_(n))throw Error(se(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=RS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=CS(e,null,n,1,t??null,r,!1,s,o),n[jr]=e.current,vu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new xd(e)};wi.render=function(n,e,t){if(!yd(e))throw Error(se(200));return Sd(null,n,e,!1,t)};wi.unmountComponentAtNode=function(n){if(!yd(n))throw Error(se(40));return n._reactRootContainer?(Do(function(){Sd(null,null,n,!1,function(){n._reactRootContainer=null,n[jr]=null})}),!0):!1};wi.unstable_batchedUpdates=B_;wi.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!yd(t))throw Error(se(200));if(n==null||n._reactInternals===void 0)throw Error(se(38));return Sd(n,e,t,!1,i)};wi.version="18.3.1-next-f1338f8080-20240426";function PS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(PS)}catch(n){console.error(n)}}PS(),Px.exports=wi;var ow=Px.exports,bS,O0=ow;bS=O0.createRoot,O0.hydrateRoot;function Lr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function DS(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$a={duration:.5,overwrite:!1,delay:0},Y_,bn,Ut,Oi=1e8,Ct=1/Oi,zp=Math.PI*2,aw=zp/4,lw=0,LS=Math.sqrt,uw=Math.cos,cw=Math.sin,_n=function(e){return typeof e=="string"},Wt=function(e){return typeof e=="function"},qr=function(e){return typeof e=="number"},$_=function(e){return typeof e>"u"},Er=function(e){return typeof e=="object"},ni=function(e){return e!==!1},q_=function(){return typeof window<"u"},hc=function(e){return Wt(e)||_n(e)},NS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Dn=Array.isArray,Vp=/(?:-?\.?\d|\.)+/gi,IS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ma=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,US=/[+-]=-?[.\d]+/,FS=/[^,'"\[\]\s]+/gi,fw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,ur,Hp,K_,Ti={},Yf={},OS,kS=function(e){return(Yf=Lo(e,Ti))&&ai},Z_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Cu=function(e,t){return!t&&console.warn(e)},BS=function(e,t){return e&&(Ti[e]=t)&&Yf&&(Yf[e]=t)||Ti},Ru=function(){return 0},dw={suppressEvents:!0,isStart:!0,kill:!1},lf={suppressEvents:!0,kill:!1},hw={suppressEvents:!0},Q_={},Ds=[],Gp={},zS,mi={},ih={},k0=30,uf=[],J_="",eg=function(e){var t=e[0],i,r;if(Er(t)||Wt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=uf.length;r--&&!uf[r].targetTest(t););i=uf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new cM(e[r],i)))||e.splice(r,1);return e},xo=function(e){return e._gsap||eg(ki(e))[0]._gsap},VS=function(e,t,i){return(i=e[t])&&Wt(i)?e[t]():$_(i)&&e.getAttribute&&e.getAttribute(t)||i},ii=function(e,t){return(e=e.split(",")).forEach(t)||e},jt=function(e){return Math.round(e*1e5)/1e5||0},pn=function(e){return Math.round(e*1e7)/1e7||0},La=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},pw=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},$f=function(){var e=Ds.length,t=Ds.slice(0),i,r;for(Gp={},Ds.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},HS=function(e,t,i,r){Ds.length&&!bn&&$f(),e.render(t,i,bn&&t<0&&(e._initted||e._startAt)),Ds.length&&!bn&&$f()},GS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(FS).length<2?t:_n(e)?e.trim():e},WS=function(e){return e},Gi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},mw=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Lo=function(e,t){for(var i in t)e[i]=t[i];return e},B0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Er(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},qf=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Ql=function(e){var t=e.parent||kt,i=e.keyframes?mw(Dn(e.keyframes)):Gi;if(ni(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},_w=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},XS=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Md=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},ks=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},yo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},gw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Wp=function(e,t,i,r){return e._startAt&&(bn?e._startAt.revert(lf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},vw=function n(e){return!e||e._ts&&n(e.parent)},z0=function(e){return e._repeat?qa(e._tTime,e=e.duration()+e._rDelay)*e:0},qa=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},Kf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ed=function(e){return e._end=pn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ct)||0))},Td=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=pn(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ed(e),i._dirty||yo(i,e)),e},jS=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Kf(e.rawTime(),t),(!t._dur||Gu(0,t.totalDuration(),i)-t._tTime>Ct)&&t.render(i,!0)),yo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Ct}},hr=function(e,t,i,r){return t.parent&&ks(t),t._start=pn((qr(i)?i:i||e!==kt?Pi(e,i,t):e._time)+t._delay),t._end=pn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),XS(e,t,"_first","_last",e._sort?"_start":0),Xp(t)||(e._recent=t),r||jS(e,t),e._ts<0&&Td(e,e._tTime),e},YS=function(e,t){return(Ti.ScrollTrigger||Z_("scrollTrigger",t))&&Ti.ScrollTrigger.create(t,e)},$S=function(e,t,i,r,s){if(ng(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!bn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&zS!==_i.frame)return Ds.push(e),e._lazy=[s,r],1},xw=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Xp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},yw=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&xw(e)&&!(!e._initted&&Xp(e))||(e._ts<0||e._dp._ts<0)&&!Xp(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=Gu(0,e._tDur,t),c=qa(l,a),e._yoyo&&c&1&&(o=1-o),c!==qa(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||bn||r||e._zTime===Ct||!t&&e._zTime){if(!e._initted&&$S(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?Ct:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Wp(e,t,i,!0),e._onUpdate&&!i&&xi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&xi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ks(e,1),!i&&!bn&&(xi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Sw=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ka=function(e,t,i,r){var s=e._repeat,o=pn(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:pn(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Td(e,e._tTime=e._tDur*a),e.parent&&Ed(e),i||yo(e.parent,e),e},V0=function(e){return e instanceof Vn?yo(e):Ka(e,e._dur)},Mw={_start:0,endTime:Ru,totalDuration:Ru},Pi=function n(e,t,i){var r=e.labels,s=e._recent||Mw,o=e.duration()>=Oi?s.endTime(!1):e._dur,a,l,u;return _n(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Dn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Jl=function(e,t,i){var r=qr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ni(l.vars.inherit)&&l.parent;o.immediateRender=ni(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Jt(t[0],o,t[s+1])},Xs=function(e,t){return e||e===0?t(e):t},Gu=function(e,t,i){return i<e?e:i>t?t:i},Rn=function(e,t){return!_n(e)||!(t=fw.exec(e))?"":t[1]},Ew=function(e,t,i){return Xs(i,function(r){return Gu(e,t,r)})},jp=[].slice,qS=function(e,t){return e&&Er(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Er(e[0]))&&!e.nodeType&&e!==ur},Tw=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return _n(r)&&!t||qS(r,1)?(s=i).push.apply(s,ki(r)):i.push(r)})||i},ki=function(e,t,i){return Ut&&!t&&Ut.selector?Ut.selector(e):_n(e)&&!i&&(Hp||!Za())?jp.call((t||K_).querySelectorAll(e),0):Dn(e)?Tw(e,i):qS(e)?jp.call(e,0):e?[e]:[]},Yp=function(e){return e=ki(e)[0]||Cu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ki(t,i.querySelectorAll?i:i===e?Cu("Invalid scope")||K_.createElement("div"):e)}},KS=function(e){return e.sort(function(){return .5-Math.random()})},ZS=function(e){if(Wt(e))return e;var t=Er(e)?e:{each:e},i=So(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return _n(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(h,p,g){var _=(g||t).length,m=o[_],d,v,x,y,C,w,E,R,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,Oi])[1],!M){for(E=-Oi;E<(E=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=o[_]=[],d=l?Math.min(M,_)*c-.5:r%M,v=M===Oi?0:l?_*f/M-.5:r/M|0,E=0,R=Oi,w=0;w<_;w++)x=w%M-d,y=v-(w/M|0),m[w]=C=u?Math.abs(u==="y"?y:x):LS(x*x+y*y),C>E&&(E=C),C<R&&(R=C);r==="random"&&KS(m),m.max=E-R,m.min=R,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:u?u==="y"?_/M:M:Math.max(M,_/M))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Rn(t.amount||t.each)||0,i=i&&_<0?aM(i):i}return _=(m[h]-m.min)/m.max||0,pn(m.b+(i?i(_):_)*m.v)+m.u}},$p=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=pn(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(qr(i)?0:Rn(i))}},QS=function(e,t){var i=Dn(e),r,s;return!i&&Er(e)&&(r=i=e.radius||Oi,e.values?(e=ki(e.values),(s=!qr(e[0]))&&(r*=r)):e=$p(e.increment)),Xs(t,i?Wt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Oi,c=0,f=e.length,h,p;f--;)s?(h=e[f].x-a,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-a),h<u&&(u=h,c=f);return c=!r||u<=r?e[c]:o,s||c===o||qr(o)?c:c+Rn(o)}:$p(e))},JS=function(e,t,i,r){return Xs(Dn(e)?!t:i===!0?!!(i=0):!r,function(){return Dn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},ww=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},Aw=function(e,t){return function(i){return e(parseFloat(i))+(t||Rn(i))}},Cw=function(e,t,i){return tM(e,t,0,1,i)},eM=function(e,t,i){return Xs(i,function(r){return e[~~t(r)]})},Rw=function n(e,t,i){var r=t-e;return Dn(e)?eM(e,n(0,e.length),t):Xs(i,function(s){return(r+(s-e)%r)%r+e})},Pw=function n(e,t,i){var r=t-e,s=r*2;return Dn(e)?eM(e,n(0,e.length-1),t):Xs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Pu=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?FS:Vp),i+=e.substr(t,r-t)+JS(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},tM=function(e,t,i,r,s){var o=t-e,a=r-i;return Xs(s,function(l){return i+((l-e)/o*a||0)})},bw=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=_n(e),a={},l,u,c,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Dn(e)&&!Dn(t)){for(c=[],f=e.length,h=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return c[_](g-_)},i=t}else r||(e=Lo(Dn(e)?[]:{},e));if(!c){for(l in t)tg.call(a,e,l,"get",t[l]);s=function(g){return sg(g,a)||(o?e.p:e)}}}return Xs(i,s)},H0=function(e,t,i){var r=e.labels,s=Oi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},xi=function(e,t,i){var r=e.vars,s=r[t],o=Ut,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ds.length&&$f(),a&&(Ut=a),c=l?s.apply(u,l):s.call(u),Ut=o,c},Il=function(e){return ks(e),e.scrollTrigger&&e.scrollTrigger.kill(!!bn),e.progress()<1&&xi(e,"onInterrupt"),e},Ea,nM=[],iM=function(e){if(e)if(e=!e.name&&e.default||e,q_()||e.headless){var t=e.name,i=Wt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Ru,render:sg,add:tg,kill:jw,modifier:Xw,rawVars:0},o={targetTest:0,get:0,getSetter:rg,aliases:{},register:0};if(Za(),e!==r){if(mi[t])return;Gi(r,Gi(qf(e,s),o)),Lo(r.prototype,Lo(s,qf(e,o))),mi[r.prop=t]=r,e.targetTest&&(uf.push(r),Q_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}BS(t,r),e.register&&e.register(ai,r,ri)}else nM.push(e)},wt=255,Ul={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},rh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*wt+.5|0},rM=function(e,t,i){var r=e?qr(e)?[e>>16,e>>8&wt,e&wt]:0:Ul.black,s,o,a,l,u,c,f,h,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ul[e])r=Ul[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&wt,r&wt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&wt,e&wt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Vp),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=rh(l+1/3,s,o),r[1]=rh(l,s,o),r[2]=rh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(IS),i&&r.length<4&&(r[3]=1),r}else r=e.match(Vp)||Ul.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/wt,o=r[1]/wt,a=r[2]/wt,f=Math.max(s,o,a),h=Math.min(s,o,a),c=(f+h)/2,f===h?l=u=0:(p=f-h,u=c>.5?p/(2-f-h):p/(f+h),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},sM=function(e){var t=[],i=[],r=-1;return e.split(Ls).forEach(function(s){var o=s.match(Ma)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},G0=function(e,t,i){var r="",s=(e+r).match(Ls),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(h){return(h=rM(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=sM(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Ls,"1").split(Ma),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Ls),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},Ls=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ul)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),Dw=/hsl[a]?\(/,oM=function(e){var t=e.join(" "),i;if(Ls.lastIndex=0,Ls.test(t))return i=Dw.test(t),e[1]=G0(e[1],i),e[0]=G0(e[0],i,sM(e[1])),!0},bu,_i=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,h,p,g=function _(m){var d=n()-r,v=m===!0,x,y,C,w;if((d>e||d<0)&&(i+=d-t),r+=d,C=r-i,x=C-o,(x>0||v)&&(w=++f.frame,h=C-f.time*1e3,f.time=C=C/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=u(_)),y)for(p=0;p<a.length;p++)a[p](C,h,w,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){OS&&(!Hp&&q_()&&(ur=Hp=window,K_=ur.document||{},Ti.gsap=ai,(ur.gsapVersions||(ur.gsapVersions=[])).push(ai.version),kS(Yf||ur.GreenSockGlobals||!ur.gsap&&ur||{}),nM.forEach(iM)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(m){return setTimeout(m,o-f.time*1e3+1|0)},bu=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),bu=0,u=Ru},lagSmoothing:function(m,d){e=m||1/0,t=Math.min(d||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,d,v){var x=d?function(y,C,w,E){m(y,C,w,E),f.remove(x)}:m;return f.remove(m),a[v?"unshift":"push"](x),Za(),x},remove:function(m,d){~(d=a.indexOf(m))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},f}(),Za=function(){return!bu&&_i.wake()},at={},Lw=/^[\d.\-M][\d.\-,\s]/,Nw=/["']/g,Iw=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(Nw,"").trim():+u,r=l.substr(a+1).trim();return t},Uw=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},Fw=function(e){var t=(e+"").split("("),i=at[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Iw(t[1])]:Uw(e).split(",").map(GS)):at._CE&&Lw.test(e)?at._CE("",e):i},aM=function(e){return function(t){return 1-e(1-t)}},lM=function n(e,t){for(var i=e._first,r;i;)i instanceof Vn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},So=function(e,t){return e&&(Wt(e)?e:at[e]||Fw(e))||t},Vo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ii(e,function(a){at[a]=Ti[a]=s,at[o=a.toLowerCase()]=i;for(var l in s)at[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=at[a+"."+l]=s[l]}),s},uM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},sh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/zp*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*cw((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:uM(a);return s=zp/s,l.config=function(u,c){return n(e,u,c)},l},oh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:uM(i);return r.config=function(s){return n(e,s)},r};ii("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Vo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});at.Linear.easeNone=at.none=at.Linear.easeIn;Vo("Elastic",sh("in"),sh("out"),sh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Vo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Vo("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});Vo("Circ",function(n){return-(LS(1-n*n)-1)});Vo("Sine",function(n){return n===1?1:-uw(n*aw)+1});Vo("Back",oh("in"),oh("out"),oh());at.SteppedEase=at.steps=Ti.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Ct;return function(a){return((r*Gu(0,o,a)|0)+s)*i}}};$a.ease=at["quad.out"];ii("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return J_+=n+","+n+"Params,"});var cM=function(e,t){this.id=lw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:VS,this.set=t?t.getSetter:rg},Du=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ka(this,+t.duration,1,1),this.data=t.data,Ut&&(this._ctx=Ut,Ut.data.push(this)),bu||_i.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ka(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Za(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Td(this,i),!s._dp||s.parent||jS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&hr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ct||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),HS(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+z0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+z0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?qa(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Ct?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Kf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Ct?0:this._rts,this.totalTime(Gu(-Math.abs(this._delay),this._tDur,s),r!==!1),Ed(this),gw(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Za(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ct&&(this._tTime-=Ct)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&hr(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ni(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Kf(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=hw);var r=bn;return bn=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),bn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,V0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,V0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Pi(this,i),ni(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ni(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ct,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Ct)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=Wt(i)?i:WS,a=function(){var u=r.then;r.then=null,Wt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Il(this)},n}();Gi(Du.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ct,_prom:0,_ps:!1,_rts:1});var Vn=function(n){DS(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ni(i.sortChildren),kt&&hr(i.parent||kt,Lr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&YS(Lr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Jl(0,arguments,this),this},t.from=function(r,s,o){return Jl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Jl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Ql(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Jt(r,s,Pi(this,o),1),this},t.call=function(r,s,o){return hr(this,Jt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Jt(r,o,Pi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Ql(o).immediateRender=ni(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,Ql(a).immediateRender=ni(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:pn(r),f=this._zTime<0!=r<0&&(this._initted||!u),h,p,g,_,m,d,v,x,y,C,w,E;if(this!==kt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,y=this._start,x=this._ts,d=!x,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=pn(c%m),c===l?(_=this._repeat,h=u):(_=~~(c/m),_&&_===c/m&&(h=u,_--),h>u&&(h=u)),C=qa(this._tTime,m),!a&&this._tTime&&C!==_&&this._tTime-C*m-this._dur<=0&&(C=_),w&&_&1&&(h=u-h,E=1),_!==C&&!this._lock){var R=w&&C&1,M=R===(w&&_&1);if(_<C&&(R=!R),a=R?0:c%u?u:c,this._lock=1,this.render(a||(E?0:pn(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&xi(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,M&&(this._lock=2,a=R?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;lM(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Sw(this,pn(a),pn(h)),v&&(c-=h-(h=v._start))),this._tTime=c,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!_&&(xi(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||h>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!d){v=0,g&&(c+=this._zTime=-Ct);break}}p=g}else{p=this._last;for(var S=r<0?r:h;p;){if(g=p._prev,(p._act||S<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,s,o||bn&&(p._initted||p._startAt)),h!==this._time||!this._ts&&!d){v=0,g&&(c+=this._zTime=S?-Ct:Ct);break}}p=g}}if(v&&!s&&(this.pause(),v.render(h>=a?0:-Ct)._zTime=h>=a?1:-1,this._ts))return this._start=y,Ed(this),this.render(r,s,o);this._onUpdate&&!s&&xi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&ks(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(xi(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(qr(s)||(s=Pi(this,s,r)),!(r instanceof Du)){if(Dn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(_n(r))return this.addLabel(r,s);if(Wt(r))r=Jt.delayedCall(0,r);else return this}return this!==r?hr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Oi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Jt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return _n(r)?this.removeLabel(r):Wt(r)?this.killTweensOf(r):(Md(this,r),r===this._recent&&(this._recent=this._last),yo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=pn(_i.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Pi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Jt.delayedCall(0,s||Ru,o);return a.data="isPause",this._hasPause=1,hr(this,a,Pi(this,r))},t.removePause=function(r){var s=this._first;for(r=Pi(this,r);s;)s._start===r&&s.data==="isPause"&&ks(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)vs!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ki(r),l=this._first,u=qr(s),c;l;)l instanceof Jt?pw(l._targets,a)&&(u?(!vs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Pi(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,h=l.immediateRender,p,g=Jt.to(o,Gi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Ct,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&Ka(g,m,0,1).render(g._time,!0,!0),p=1}c&&c.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Gi({startAt:{time:Pi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),H0(this,Pi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),H0(this,Pi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ct)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return yo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),yo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Oi,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,hr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Ka(o,o===kt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(kt._ts&&(HS(kt,Kf(r,kt)),zS=_i.frame),_i.frame>=k0){k0+=Si.autoSleep||120;var s=kt._first;if((!s||!s._ts)&&Si.autoSleep&&_i._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||_i.sleep()}}},e}(Du);Gi(Vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ow=function(e,t,i,r,s,o,a){var l=new ri(this._pt,e,t,0,1,_M,null,s),u=0,c=0,f,h,p,g,_,m,d,v;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=Pu(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),h=i.match(nh)||[];f=nh.exec(r);)g=f[0],_=r.substring(u,f.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?La(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},u=nh.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(US.test(r)||d)&&(l.e=0),this._pt=l,l},tg=function(e,t,i,r,s,o,a,l,u,c){Wt(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:Wt(f)?u?e[t.indexOf("set")||!Wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,p=Wt(f)?u?Hw:pM:ig,g;if(_n(r)&&(~r.indexOf("random(")&&(r=Pu(r)),r.charAt(1)==="="&&(g=La(h,r)+(Rn(h)||0),(g||g===0)&&(r=g))),!c||h!==r||qp)return!isNaN(h*r)&&r!==""?(g=new ri(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?Ww:mM,0,p),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Z_(t,r),Ow.call(this,e,t,h,r,p,l||Si.stringFilter,u))},kw=function(e,t,i,r,s){if(Wt(e)&&(e=eu(e,s,t,i,r)),!Er(e)||e.style&&e.nodeType||Dn(e)||NS(e))return _n(e)?eu(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=eu(e[a],s,t,i,r);return o},fM=function(e,t,i,r,s,o){var a,l,u,c;if(mi[e]&&(a=new mi[e]).init(s,a.rawVars?t[e]:kw(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ri(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Ea))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},vs,qp,ng=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,h=r.keyframes,p=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,d=e.parent,v=d&&d.data==="nested"?d.vars.targets:m,x=e._overwrite==="auto"&&!Y_,y=e.timeline,C,w,E,R,M,S,D,F,B,j,Z,W,X;if(y&&(!h||!s)&&(s="none"),e._ease=So(s,$a.ease),e._yEase=f?aM(So(f===!0?s:f,$a.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!y&&!!r.runBackwards,!y||h&&!r.stagger){if(F=m[0]?xo(m[0]).harness:0,W=F&&r[F.prop],C=qf(r,Q_),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!p?_.render(-1,!0):_.revert(c&&g?lf:dw),_._lazy=0),o){if(ks(e._startAt=Jt.set(m,Gi({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&ni(l),startAt:null,delay:0,onUpdate:u&&function(){return xi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bn||!a&&!p)&&e._startAt.revert(lf),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!_){if(t&&(a=!1),E=Gi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ni(l),immediateRender:a,stagger:0,parent:d},C),W&&(E[F.prop]=W),ks(e._startAt=Jt.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bn?e._startAt.revert(lf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Ct,Ct);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ni(l)||l&&!g,w=0;w<m.length;w++){if(M=m[w],D=M._gsap||eg(m)[w]._gsap,e._ptLookup[w]=j={},Gp[D.id]&&Ds.length&&$f(),Z=v===m?w:v.indexOf(M),F&&(B=new F).init(M,W||C,e,Z,v)!==!1&&(e._pt=R=new ri(e._pt,M,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(L){j[L]=R}),B.priority&&(S=1)),!F||W)for(E in C)mi[E]&&(B=fM(E,C,e,Z,M,v))?B.priority&&(S=1):j[E]=R=tg.call(e,M,E,"get",C[E],Z,v,0,r.stringFilter);e._op&&e._op[w]&&e.kill(M,e._op[w]),x&&e._pt&&(vs=e,kt.killTweensOf(M,j,e.globalTime(t)),X=!e.parent,vs=0),e._pt&&l&&(Gp[D.id]=1)}S&&gM(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!X,h&&t<=0&&y.render(Oi,!0,!0)},Bw=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,h,p;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(c=h[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return qp=1,e.vars[t]="+=0",ng(e,a),qp=0,l?Cu(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)f=u[p],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=jt(i)+Rn(f.e)),f.b&&(f.b=c.s+Rn(f.b))},zw=function(e,t){var i=e[0]?xo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Lo({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Vw=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Dn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},eu=function(e,t,i,r,s){return Wt(e)?e.call(t,i,r,s):_n(e)&&~e.indexOf("random(")?Pu(e):e},dM=J_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",hM={};ii(dM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return hM[n]=1});var Jt=function(n){DS(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Ql(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,v=r.parent||kt,x=(Dn(i)||NS(i)?qr(i[0]):"length"in r)?[i]:ki(i),y,C,w,E,R,M,S,D;if(a._targets=x.length?eg(x):Cu("GSAP target "+i+" not found. https://gsap.com",!Si.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||h||hc(u)||hc(c)){if(r=a.vars,y=a.timeline=new Vn({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:x}),y.kill(),y.parent=y._dp=Lr(a),y._start=0,h||hc(u)||hc(c)){if(E=x.length,S=h&&ZS(h),Er(h))for(R in h)~dM.indexOf(R)&&(D||(D={}),D[R]=h[R]);for(C=0;C<E;C++)w=qf(r,hM),w.stagger=0,d&&(w.yoyoEase=d),D&&Lo(w,D),M=x[C],w.duration=+eu(u,Lr(a),C,M,x),w.delay=(+eu(c,Lr(a),C,M,x)||0)-a._delay,!h&&E===1&&w.delay&&(a._delay=c=w.delay,a._start+=c,w.delay=0),y.to(M,w,S?S(C,M,x):0),y._ease=at.none;y.duration()?u=c=0:a.timeline=0}else if(g){Ql(Gi(y.vars.defaults,{ease:"none"})),y._ease=So(g.ease||r.ease||"none");var F=0,B,j,Z;if(Dn(g))g.forEach(function(W){return y.to(x,W,">")}),y.duration();else{w={};for(R in g)R==="ease"||R==="easeEach"||Vw(R,g[R],w,g.easeEach);for(R in w)for(B=w[R].sort(function(W,X){return W.t-X.t}),F=0,C=0;C<B.length;C++)j=B[C],Z={ease:j.e,duration:(j.t-(C?B[C-1].t:0))/100*u},Z[R]=j.v,y.to(x,Z,F),F+=Z.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!Y_&&(vs=Lr(a),kt.killTweensOf(x),vs=0),hr(v,Lr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!g&&a._start===pn(v._time)&&ni(f)&&vw(Lr(a))&&v.data!=="nested")&&(a._tTime=-Ct,a.render(Math.max(0,-c)||0)),m&&YS(Lr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-Ct&&!c?l:r<Ct?0:r,h,p,g,_,m,d,v,x,y;if(!u)yw(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(h=f,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(h=pn(f%_),f===l?(g=this._repeat,h=u):(g=~~(f/_),g&&g===pn(f/_)&&(h=u,g--),h>u&&(h=u)),d=this._yoyo&&g&1,d&&(y=this._yEase,h=u-h),m=qa(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(x&&this._yEase&&lM(x,d),this.vars.repeatRefresh&&!d&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(pn(_*g),!0).invalidate()._lock=0))}if(!this._initted){if($S(this,c?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(h/u),this._from&&(this.ratio=v=1-v),h&&!a&&!s&&!g&&(xi(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Wp(this,r,s,o),xi(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&xi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&Wp(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ks(this,1),!s&&!(c&&!a)&&(f||a||d)&&(xi(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){bu||_i.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||ng(this,u),c=this._ease(u/this._dur),Bw(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Td(this,0),this.parent||XS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Il(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,vs&&vs.vars.overwrite!==!0)._first||Il(this),this.parent&&o!==this.timeline.totalDuration()&&Ka(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ki(r):a,u=this._ptLookup,c=this._pt,f,h,p,g,_,m,d;if((!s||s==="all")&&_w(a,l))return s==="all"&&(this._pt=0),Il(this);for(f=this._op=this._op||[],s!=="all"&&(_n(s)&&(_={},ii(s,function(v){return _[v]=1}),s=_),s=zw(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){h=u[d],s==="all"?(f[d]=s,g=h,p={}):(p=f[d]=f[d]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Md(this,m,"_pt"),delete h[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&c&&Il(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Jl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Jl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return kt.killTweensOf(r,s,o)},e}(Du);Gi(Jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ii("staggerTo,staggerFrom,staggerFromTo",function(n){Jt[n]=function(){var e=new Vn,t=jp.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var ig=function(e,t,i){return e[t]=i},pM=function(e,t,i){return e[t](i)},Hw=function(e,t,i,r){return e[t](r.fp,i)},Gw=function(e,t,i){return e.setAttribute(t,i)},rg=function(e,t){return Wt(e[t])?pM:$_(e[t])&&e.setAttribute?Gw:ig},mM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Ww=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},_M=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},sg=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Xw=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},jw=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Md(this,t,"_pt"):t.dep||(i=1),t=r;return!i},Yw=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},gM=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},ri=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||mM,this.d=l||this,this.set=u||ig,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Yw,this.m=i,this.mt=s,this.tween=r},n}();ii(J_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Q_[n]=1});Ti.TweenMax=Ti.TweenLite=Jt;Ti.TimelineLite=Ti.TimelineMax=Vn;kt=new Vn({sortChildren:!1,defaults:$a,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Si.stringFilter=oM;var Mo=[],cf={},$w=[],W0=0,qw=0,ah=function(e){return(cf[e]||$w).map(function(t){return t()})},Kp=function(){var e=Date.now(),t=[];e-W0>2&&(ah("matchMediaInit"),Mo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=ur.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),ah("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),W0=e,ah("matchMedia"))},vM=function(){function n(t,i){this.selector=i&&Yp(i),this.data=[],this._r=[],this.isReverted=!1,this.id=qw++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Wt(i)&&(s=r,r=i,i=Wt);var o=this,a=function(){var u=Ut,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=Yp(s)),Ut=o,f=r.apply(o,arguments),Wt(f)&&o._r.push(f),Ut=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===Wt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Ut;Ut=null,i(this),Ut=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Jt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Vn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Jt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Mo.length;o--;)Mo[o].id===this.id&&Mo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),Kw=function(){function n(t){this.contexts=[],this.scope=t,Ut&&Ut.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Er(i)||(i={matches:i});var o=new vM(0,s||this.scope),a=o.conditions={},l,u,c;Ut&&!o.selector&&(o.selector=Ut.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=ur.matchMedia(i[u]),l&&(Mo.indexOf(o)<0&&Mo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Kp):l.addEventListener("change",Kp)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Zf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return iM(r)})},timeline:function(e){return new Vn(e)},getTweensOf:function(e,t){return kt.getTweensOf(e,t)},getProperty:function(e,t,i,r){_n(e)&&(e=ki(e)[0]);var s=xo(e||{}).get,o=i?WS:GS;return i==="native"&&(i=""),e&&(t?o((mi[t]&&mi[t].get||s)(e,t,i,r)):function(a,l,u){return o((mi[a]&&mi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=ki(e),e.length>1){var r=e.map(function(c){return ai.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=mi[t],a=xo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;Ea._pt=0,f.init(e,i?c+i:c,Ea,0,[e]),f.render(1,f),Ea._pt&&sg(1,Ea)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=ai.to(e,Lo((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=So(e.ease,$a.ease)),B0($a,e||{})},config:function(e){return B0(Si,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!mi[a]&&!Ti[a]&&Cu(t+" effect requires "+a+" plugin.")}),ih[t]=function(a,l,u){return i(ki(a),Gi(l||{},s),u)},o&&(Vn.prototype[t]=function(a,l,u){return this.add(ih[t](a,Er(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){at[e]=So(t)},parseEase:function(e,t){return arguments.length?So(e,t):at},getById:function(e){return kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Vn(e),r,s;for(i.smoothChildTiming=ni(e.smoothChildTiming),kt.remove(i),i._dp=0,i._time=i._tTime=kt._time,r=kt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Jt&&r.vars.onComplete===r._targets[0]))&&hr(i,r,r._start-r._delay),r=s;return hr(kt,i,0),i},context:function(e,t){return e?new vM(e,t):Ut},matchMedia:function(e){return new Kw(e)},matchMediaRefresh:function(){return Mo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Kp()},addEventListener:function(e,t){var i=cf[e]||(cf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=cf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:Rw,wrapYoyo:Pw,distribute:ZS,random:JS,snap:QS,normalize:Cw,getUnit:Rn,clamp:Ew,splitColor:rM,toArray:ki,selector:Yp,mapRange:tM,pipe:ww,unitize:Aw,interpolate:bw,shuffle:KS},install:kS,effects:ih,ticker:_i,updateRoot:Vn.updateRoot,plugins:mi,globalTimeline:kt,core:{PropTween:ri,globals:BS,Tween:Jt,Timeline:Vn,Animation:Du,getCache:xo,_removeLinkedListItem:Md,reverting:function(){return bn},context:function(e){return e&&Ut&&(Ut.data.push(e),e._ctx=Ut),Ut},suppressOverwrites:function(e){return Y_=e}}};ii("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Zf[n]=Jt[n]});_i.add(Vn.updateRoot);Ea=Zf.to({},{duration:0});var Zw=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Qw=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Zw(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},lh=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(_n(s)&&(l={},ii(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}Qw(a,s)}}}},ai=Zf.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)bn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},lh("roundProps",$p),lh("modifiers"),lh("snap",QS))||Zf;Jt.version=Vn.version=ai.version="3.12.5";OS=1;q_()&&Za();at.Power0;at.Power1;at.Power2;at.Power3;at.Power4;at.Linear;at.Quad;at.Cubic;at.Quart;at.Quint;at.Strong;at.Elastic;at.Back;at.SteppedEase;at.Bounce;at.Sine;at.Expo;at.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var X0,xs,Na,og,ho,j0,ag,Jw=function(){return typeof window<"u"},Kr={},no=180/Math.PI,Ia=Math.PI/180,Xo=Math.atan2,Y0=1e8,lg=/([A-Z])/g,eA=/(left|right|width|margin|padding|x)/i,tA=/[\s,\(]\S/,pr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Zp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},nA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},iA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},rA=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},xM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},yM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},sA=function(e,t,i){return e.style[t]=i},oA=function(e,t,i){return e.style.setProperty(t,i)},aA=function(e,t,i){return e._gsap[t]=i},lA=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},uA=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},cA=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Bt="transform",si=Bt+"Origin",fA=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Kr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=pr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Ir(r,a)}):this.tfm[e]=o.x?o[e]:Ir(r,e),e===si&&(this.tfm.zOrigin=o.zOrigin);else return pr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Bt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(si,t,"")),e=Bt}(s||t)&&this.props.push(e,t,s[e])},SM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},dA=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(lg,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ag(),(!s||!s.isStart)&&!i[Bt]&&(SM(i),r.zOrigin&&i[si]&&(i[si]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},MM=function(e,t){var i={target:e,props:[],revert:dA,save:fA};return e._gsap||ai.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},EM,Qp=function(e,t){var i=xs.createElementNS?xs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):xs.createElement(e);return i&&i.style?i:xs.createElement(e)},yr=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(lg,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Qa(t)||t,1)||""},$0="O,Moz,ms,Ms,Webkit".split(","),Qa=function(e,t,i){var r=t||ho,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!($0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?$0[o]:"")+e},Jp=function(){Jw()&&window.document&&(X0=window,xs=X0.document,Na=xs.documentElement,ho=Qp("div")||{style:{}},Qp("div"),Bt=Qa(Bt),si=Bt+"Origin",ho.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",EM=!!Qa("perspective"),ag=ai.core.reverting,og=1)},uh=function n(e){var t=Qp("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Na.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Na.removeChild(t),this.style.cssText=s,o},q0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},TM=function(e){var t;try{t=e.getBBox()}catch{t=uh.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===uh||(t=uh.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+q0(e,["x","cx","x1"])||0,y:+q0(e,["y","cy","y1"])||0,width:0,height:0}:t},wM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&TM(e))},No=function(e,t){if(t){var i=e.style,r;t in Kr&&t!==si&&(t=Bt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(lg,"-$1").toLowerCase())):i.removeAttribute(t)}},ys=function(e,t,i,r,s,o){var a=new ri(e._pt,t,i,0,1,o?yM:xM);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},K0={deg:1,rad:1,turn:1},hA={grid:1,flex:1},Bs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=ho.style,l=eA.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",p=r==="%",g,_,m,d;if(r===o||!s||K0[r]||K0[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),d=e.getCTM&&wM(e),(p||o==="%")&&(Kr[t]||~t.indexOf("adius")))return g=d?e.getBBox()[l?"width":"height"]:e[c],jt(p?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,d&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===xs||!_.appendChild)&&(_=xs.body),m=_._gsap,m&&p&&m.width&&l&&m.time===_i.time&&!m.uncache)return jt(s/m.width*f);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+r,g=e[c],v?e.style[t]=v:No(e,t)}else(p||o==="%")&&!hA[yr(_,"display")]&&(a.position=yr(e,"position")),_===e&&(a.position="static"),_.appendChild(ho),g=ho[c],_.removeChild(ho),a.position="absolute";return l&&p&&(m=xo(_),m.time=_i.time,m.width=_[c]),jt(h?g*s/f:g&&s?f/g*s:0)},Ir=function(e,t,i,r){var s;return og||Jp(),t in pr&&t!=="transform"&&(t=pr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Kr[t]&&t!=="transform"?(s=Nu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Jf(yr(e,si))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Qf[t]&&Qf[t](e,t,i)||yr(e,t)||VS(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Bs(e,t,s,i)+i:s},pA=function(e,t,i,r){if(!i||i==="none"){var s=Qa(t,e,1),o=s&&yr(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=yr(e,"borderTopColor"))}var a=new ri(this._pt,e.style,t,0,1,_M),l=0,u=0,c,f,h,p,g,_,m,d,v,x,y,C;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=yr(e,t)||r,_?e.style[t]=_:No(e,t)),c=[i,r],oM(c),i=c[0],r=c[1],h=i.match(Ma)||[],C=r.match(Ma)||[],C.length){for(;f=Ma.exec(r);)m=f[0],v=r.substring(l,f.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=h[u++]||"")&&(p=parseFloat(_)||0,y=_.substr((p+"").length),m.charAt(1)==="="&&(m=La(p,m)+y),d=parseFloat(m),x=m.substr((d+"").length),l=Ma.lastIndex-x.length,x||(x=x||Si.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(p=Bs(e,t,_,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:d-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?yM:xM;return US.test(r)&&(a.e=0),this._pt=a,a},Z0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},mA=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Z0[i]||i,t[1]=Z0[r]||r,t.join(" ")},_A=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Kr[a]&&(l=1,a=a==="transformOrigin"?si:Bt),No(i,a);l&&(No(i,Bt),o&&(o.svg&&i.removeAttribute("transform"),Nu(i,1),o.uncache=1,SM(r)))}},Qf={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ri(e._pt,t,i,0,0,_A);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Lu=[1,0,0,1,0,0],AM={},CM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Q0=function(e){var t=yr(e,Bt);return CM(t)?Lu:t.substr(7).match(IS).map(jt)},ug=function(e,t){var i=e._gsap||xo(e),r=e.style,s=Q0(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Lu:s):(s===Lu&&!e.offsetParent&&e!==Na&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,Na.appendChild(e)),s=Q0(e),l?r.display=l:No(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Na.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},em=function(e,t,i,r,s,o){var a=e._gsap,l=s||ug(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],d=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,C=parseFloat(x[1])||0,w,E,R,M;i?l!==Lu&&(E=p*m-g*_)&&(R=y*(m/E)+C*(-_/E)+(_*v-m*d)/E,M=y*(-g/E)+C*(p/E)-(p*v-g*d)/E,y=R,C=M):(w=TM(e),y=w.x+(~x[0].indexOf("%")?y/100*w.width:y),C=w.y+(~(x[1]||x[0]).indexOf("%")?C/100*w.height:C)),r||r!==!1&&a.smooth?(d=y-u,v=C-c,a.xOffset=f+(d*p+v*_)-d,a.yOffset=h+(d*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[si]="0px 0px",o&&(ys(o,a,"xOrigin",u,y),ys(o,a,"yOrigin",c,C),ys(o,a,"xOffset",f,a.xOffset),ys(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+C)},Nu=function(e,t){var i=e._gsap||new cM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=yr(e,si)||"0",c,f,h,p,g,_,m,d,v,x,y,C,w,E,R,M,S,D,F,B,j,Z,W,X,L,$,b,ie,ye,Xe,Y,ne;return c=f=h=_=m=d=v=x=y=0,p=g=1,i.svg=!!(e.getCTM&&wM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Bt]!=="none"?l[Bt]:"")),r.scale=r.rotate=r.translate="none"),E=ug(e,i.svg),i.svg&&(i.uncache?(L=e.getBBox(),u=i.xOrigin-L.x+"px "+(i.yOrigin-L.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),em(e,X||u,!!X||i.originIsAbsolute,i.smooth!==!1,E)),C=i.xOrigin||0,w=i.yOrigin||0,E!==Lu&&(D=E[0],F=E[1],B=E[2],j=E[3],c=Z=E[4],f=W=E[5],E.length===6?(p=Math.sqrt(D*D+F*F),g=Math.sqrt(j*j+B*B),_=D||F?Xo(F,D)*no:0,v=B||j?Xo(B,j)*no+_:0,v&&(g*=Math.abs(Math.cos(v*Ia))),i.svg&&(c-=C-(C*D+w*B),f-=w-(C*F+w*j))):(ne=E[6],Xe=E[7],b=E[8],ie=E[9],ye=E[10],Y=E[11],c=E[12],f=E[13],h=E[14],R=Xo(ne,ye),m=R*no,R&&(M=Math.cos(-R),S=Math.sin(-R),X=Z*M+b*S,L=W*M+ie*S,$=ne*M+ye*S,b=Z*-S+b*M,ie=W*-S+ie*M,ye=ne*-S+ye*M,Y=Xe*-S+Y*M,Z=X,W=L,ne=$),R=Xo(-B,ye),d=R*no,R&&(M=Math.cos(-R),S=Math.sin(-R),X=D*M-b*S,L=F*M-ie*S,$=B*M-ye*S,Y=j*S+Y*M,D=X,F=L,B=$),R=Xo(F,D),_=R*no,R&&(M=Math.cos(R),S=Math.sin(R),X=D*M+F*S,L=Z*M+W*S,F=F*M-D*S,W=W*M-Z*S,D=X,Z=L),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=jt(Math.sqrt(D*D+F*F+B*B)),g=jt(Math.sqrt(W*W+ne*ne)),R=Xo(Z,W),v=Math.abs(R)>2e-4?R*no:0,y=Y?1/(Y<0?-Y:Y):0),i.svg&&(X=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!CM(yr(e,Bt)),X&&e.setAttribute("transform",X))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=jt(p),i.scaleY=jt(g),i.rotation=jt(_)+a,i.rotationX=jt(m)+a,i.rotationY=jt(d)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[si]=Jf(u)),i.xOffset=i.yOffset=0,i.force3D=Si.force3D,i.renderTransform=i.svg?vA:EM?RM:gA,i.uncache=0,i},Jf=function(e){return(e=e.split(" "))[0]+" "+e[1]},ch=function(e,t,i){var r=Rn(t);return jt(parseFloat(t)+parseFloat(Bs(e,"x",i+"px",r)))+r},gA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,RM(e,t)},js="0deg",Ml="0px",Ys=") ",RM=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,h=i.skewX,p=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,d=i.force3D,v=i.target,x=i.zOrigin,y="",C=d==="auto"&&e&&e!==1||d===!0;if(x&&(f!==js||c!==js)){var w=parseFloat(c)*Ia,E=Math.sin(w),R=Math.cos(w),M;w=parseFloat(f)*Ia,M=Math.cos(w),o=ch(v,o,E*M*-x),a=ch(v,a,-Math.sin(w)*-x),l=ch(v,l,R*M*-x+x)}m!==Ml&&(y+="perspective("+m+Ys),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(C||o!==Ml||a!==Ml||l!==Ml)&&(y+=l!==Ml||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ys),u!==js&&(y+="rotate("+u+Ys),c!==js&&(y+="rotateY("+c+Ys),f!==js&&(y+="rotateX("+f+Ys),(h!==js||p!==js)&&(y+="skew("+h+", "+p+Ys),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Ys),v.style[Bt]=y||"translate(0, 0)"},vA=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,h=i.scaleY,p=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,d=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),C,w,E,R,M;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ia,u*=Ia,C=Math.cos(l)*f,w=Math.sin(l)*f,E=Math.sin(l-u)*-h,R=Math.cos(l-u)*h,u&&(c*=Ia,M=Math.tan(u-c),M=Math.sqrt(1+M*M),E*=M,R*=M,c&&(M=Math.tan(c),M=Math.sqrt(1+M*M),C*=M,w*=M)),C=jt(C),w=jt(w),E=jt(E),R=jt(R)):(C=f,R=h,w=E=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Bs(p,"x",o,"px"),y=Bs(p,"y",a,"px")),(g||_||m||d)&&(x=jt(x+g-(g*C+_*E)+m),y=jt(y+_-(g*w+_*R)+d)),(r||s)&&(M=p.getBBox(),x=jt(x+r/100*M.width),y=jt(y+s/100*M.height)),M="matrix("+C+","+w+","+E+","+R+","+x+","+y+")",p.setAttribute("transform",M),v&&(p.style[Bt]=M)},xA=function(e,t,i,r,s){var o=360,a=_n(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?no:1),u=l-r,c=r+u+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*Y0)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*Y0)%o-~~(u/o)*o)),e._pt=h=new ri(e._pt,t,i,r,u,nA),h.e=c,h.u="deg",e._props.push(i),h},J0=function(e,t){for(var i in t)e[i]=t[i];return e},yA=function(e,t,i){var r=J0({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,h,p,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Bt]=t,a=Nu(i,1),No(i,Bt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Bt],o[Bt]=t,a=Nu(i,1),o[Bt]=u);for(l in Kr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Rn(u),g=Rn(c),f=p!==g?Bs(i,l,u,g):parseFloat(u),h=parseFloat(c),e._pt=new ri(e._pt,a,l,f,h-f,Zp),e._pt.u=g||0,e._props.push(l));J0(a,r)};ii("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Qf[e>1?"border"+n:n]=function(a,l,u,c,f){var h,p;if(arguments.length<4)return h=o.map(function(g){return Ir(a,g,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(g,_){return p[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,p,f)}});var PM={name:"css",register:Jp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,h,p,g,_,m,d,v,x,y,C,w,E,R;og||Jp(),this.styles=this.styles||MM(e),R=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(mi[_]&&fM(_,t,i,r,e,s)))){if(p=typeof c,g=Qf[_],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Pu(c)),g)g(this,e,_,c,i)&&(E=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",Ls.lastIndex=0,Ls.test(u)||(m=Rn(u),d=Rn(c)),d?m!==d&&(u=Bs(e,_,u,d)+d):m&&(c+=m),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],_n(u)&&~u.indexOf("random(")&&(u=Pu(u)),Rn(u+"")||u==="auto"||(u+=Si.units[_]||Rn(Ir(e,_))||""),(u+"").charAt(1)==="="&&(u=Ir(e,_))):u=Ir(e,_),h=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),f=parseFloat(c),_ in pr&&(_==="autoAlpha"&&(h===1&&Ir(e,"visibility")==="hidden"&&f&&(h=0),R.push("visibility",0,a.visibility),ys(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=pr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Kr,x){if(this.styles.save(_),y||(C=e._gsap,C.renderTransform&&!t.parseTransform||Nu(e,t.parseTransform),w=t.smoothOrigin!==!1&&C.smooth,y=this._pt=new ri(this._pt,a,Bt,0,1,C.renderTransform,C,0,-1),y.dep=1),_==="scale")this._pt=new ri(this._pt,C,"scaleY",C.scaleY,(v?La(C.scaleY,v+f):f)-C.scaleY||0,Zp),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(si,0,a[si]),c=mA(c),C.svg?em(e,c,0,w,0,this):(d=parseFloat(c.split(" ")[2])||0,d!==C.zOrigin&&ys(this,C,"zOrigin",C.zOrigin,d),ys(this,a,_,Jf(u),Jf(c)));continue}else if(_==="svgOrigin"){em(e,c,1,w,0,this);continue}else if(_ in AM){xA(this,C,_,h,v?La(h,v+c):c);continue}else if(_==="smoothOrigin"){ys(this,C,"smooth",C.smooth,c);continue}else if(_==="force3D"){C[_]=c;continue}else if(_==="transform"){yA(this,c,e);continue}}else _ in a||(_=Qa(_)||_);if(x||(f||f===0)&&(h||h===0)&&!tA.test(c)&&_ in a)m=(u+"").substr((h+"").length),f||(f=0),d=Rn(c)||(_ in Si.units?Si.units[_]:m),m!==d&&(h=Bs(e,_,u,d)),this._pt=new ri(this._pt,x?C:a,_,h,(v?La(h,v+f):f)-h,!x&&(d==="px"||_==="zIndex")&&t.autoRound!==!1?rA:Zp),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=u,this._pt.r=iA);else if(_ in a)pA.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,r,s);else if(_!=="parseTransform"){Z_(_,c);continue}x||(_ in a?R.push(_,0,a[_]):R.push(_,1,u||e[_])),o.push(_)}}E&&gM(this)},render:function(e,t){if(t.tween._time||!ag())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Ir,aliases:pr,getSetter:function(e,t,i){var r=pr[t];return r&&r.indexOf(",")<0&&(t=r),t in Kr&&t!==si&&(e._gsap.x||Ir(e,"x"))?i&&j0===i?t==="scale"?lA:aA:(j0=i||{})&&(t==="scale"?uA:cA):e.style&&!$_(e.style[t])?sA:~t.indexOf("-")?oA:rg(e,t)},core:{_removeProperty:No,_getMatrix:ug}};ai.utils.checkPrefix=Qa;ai.core.getStyleSaver=MM;(function(n,e,t,i){var r=ii(n+","+e+","+t,function(s){Kr[s]=1});ii(e,function(s){Si.units[s]="deg",AM[s]=1}),pr[r[13]]=n+","+e,ii(i,function(s){var o=s.split(":");pr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ii("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Si.units[n]="px"});ai.registerPlugin(PM);var Pn=ai.registerPlugin(PM)||ai;Pn.core.Tween;function SA(){return St.useEffect(()=>{Pn.fromTo(".Hero-sl-text p",{y:115,opacity:0},{y:0,opacity:1,delay:.2,duration:.5,ease:"power3.out"}),Pn.fromTo(".span1",{x:-200,opacity:0},{x:0,opacity:1,delay:.2,duration:1.5,ease:"power3.out"}),Pn.fromTo(".span2",{x:200,opacity:0},{x:0,opacity:1,delay:.4,duration:1.5,ease:"power3.out"}),Pn.fromTo(".span3",{x:-200,opacity:0},{x:0,opacity:1,delay:.6,duration:1.5,ease:"power3.out"})},[]),O.jsxs("div",{className:"Home d-flex flex-column justify-content-between text-white",children:[O.jsx("div",{className:"home_scroll position-absolute start-0 mt-5",children:O.jsxs("p",{className:"m-0 ms-4",children:[O.jsxs("span",{className:"home_scroll_text",children:["01 // 04 ",O.jsx("span",{className:"scroll_hy"}),O.jsx("span",{children:"SCROLL "})]}),O.jsx("span",{className:"home_scroll_arrow",children:O.jsx("i",{className:"fa-solid fa-arrow-down"})})]})}),O.jsxs("div",{className:"container flex-grow-1 d-flex flex-lg-row flex-column align-items-center justify-content-center text-center text-lg-start",children:[O.jsx("div",{className:"Hero-title mx-lg-5 mb-lg-0",children:O.jsx("table",{className:"table-borderless",children:O.jsxs("tbody",{children:[O.jsx("tr",{children:O.jsx("td",{children:O.jsx("span",{className:"span1 ms-5",children:"Multi-"})})}),O.jsx("tr",{children:O.jsx("td",{children:O.jsx("span",{className:"span2",children:"Disciplinary"})})}),O.jsx("tr",{children:O.jsx("td",{children:O.jsx("span",{className:"span3 ms-5",children:"Designer"})})})]})})}),O.jsx("div",{className:"Hero-sl-text lead",children:O.jsxs("p",{children:["Creative thinking and problem ",O.jsx("br",{}),"solving are where my mind wanders, ",O.jsx("br",{}),"using my knowledge and passion for ",O.jsx("br",{}),"design as my medium."]})})]}),O.jsx("div",{className:"Arrow-btn mb-3 text-center",children:O.jsx("button",{className:"btn btn-custom rounded-circle",children:O.jsx("i",{className:"fa-solid fa-arrow-down"})})})]})}const cg=()=>{const[n,e]=St.useState(null),[t,i]=St.useState(!1),r=St.useRef(null),s=200;St.useEffect(()=>{if(n!==null&&r.current){const l=t?150:-30;Pn.to(r.current,{attr:{d:`M0,50 
                        L${n-s},50 
                        Q${n},${l} ${n+s},50 
                        L1000,50`},duration:.5,ease:"power2.out"})}else r.current&&Pn.to(r.current,{attr:{d:"M0,50 L1000,50"},duration:.5,ease:"power2.out"})},[n,t]);const o=l=>{const u=l.currentTarget.getBoundingClientRect(),c=l.clientX-u.left,f=l.clientY,h=u.top+50;i(f<h),e(c)},a=()=>{e(null)};return O.jsx("div",{className:"line-container",onMouseMove:o,onMouseLeave:a,children:O.jsx("svg",{className:"wave",height:"100",viewBox:"0 0 1000 83",children:O.jsx("path",{ref:r,d:"M0,50 L1000,50",fill:"none",stroke:"#FFFFFF",strokeWidth:"1"})})})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fg="170",MA=0,ev=1,EA=2,bM=1,TA=2,br=3,zs=0,oi=1,Ur=2,Ns=0,Ua=1,tv=2,nv=3,iv=4,wA=5,ao=100,AA=101,CA=102,RA=103,PA=104,bA=200,DA=201,LA=202,NA=203,tm=204,nm=205,IA=206,UA=207,FA=208,OA=209,kA=210,BA=211,zA=212,VA=213,HA=214,im=0,rm=1,sm=2,Ja=3,om=4,am=5,lm=6,um=7,DM=0,GA=1,WA=2,Is=0,XA=1,jA=2,YA=3,$A=4,qA=5,KA=6,ZA=7,LM=300,el=301,tl=302,cm=303,fm=304,wd=306,dm=1e3,po=1001,hm=1002,rr=1003,QA=1004,pc=1005,mr=1006,fh=1007,mo=1008,Zr=1009,NM=1010,IM=1011,Iu=1012,dg=1013,Io=1014,Br=1015,Wu=1016,hg=1017,pg=1018,nl=1020,UM=35902,FM=1021,OM=1022,tr=1023,kM=1024,BM=1025,Fa=1026,il=1027,zM=1028,mg=1029,VM=1030,_g=1031,gg=1033,ff=33776,df=33777,hf=33778,pf=33779,pm=35840,mm=35841,_m=35842,gm=35843,vm=36196,xm=37492,ym=37496,Sm=37808,Mm=37809,Em=37810,Tm=37811,wm=37812,Am=37813,Cm=37814,Rm=37815,Pm=37816,bm=37817,Dm=37818,Lm=37819,Nm=37820,Im=37821,mf=36492,Um=36494,Fm=36495,HM=36283,Om=36284,km=36285,Bm=36286,JA=3200,eC=3201,tC=0,nC=1,ms="",bi="srgb",ul="srgb-linear",Ad="linear",xt="srgb",jo=7680,rv=519,iC=512,rC=513,sC=514,GM=515,oC=516,aC=517,lC=518,uC=519,sv=35044,ov="300 es",zr=2e3,ed=2001;class cl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dh=Math.PI/180,zm=180/Math.PI;function Xu(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function Zn(n,e,t){return Math.max(e,Math.min(t,n))}function cC(n,e){return(n%e+e)%e}function hh(n,e,t){return(1-t)*n+t*e}function El(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $n(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class vt{constructor(e=0,t=0){vt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,r,s,o,a,l,u){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],v=r[1],x=r[4],y=r[7],C=r[2],w=r[5],E=r[8];return s[0]=o*_+a*v+l*C,s[3]=o*m+a*x+l*w,s[6]=o*d+a*y+l*E,s[1]=u*_+c*v+f*C,s[4]=u*m+c*x+f*w,s[7]=u*d+c*y+f*E,s[2]=h*_+p*v+g*C,s[5]=h*m+p*x+g*w,s[8]=h*d+p*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,g=t*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ph.makeScale(e,t)),this}rotate(e){return this.premultiply(ph.makeRotation(-e)),this}translate(e,t){return this.premultiply(ph.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ph=new Ze;function WM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Uu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function fC(){const n=Uu("canvas");return n.style.display="block",n}const av={};function Fl(n){n in av||(av[n]=!0,console.warn(n))}function dC(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function hC(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function pC(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ut={enabled:!0,workingColorSpace:ul,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===xt&&(n.r=Gr(n.r),n.g=Gr(n.g),n.b=Gr(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===xt&&(n.r=Oa(n.r),n.g=Oa(n.g),n.b=Oa(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ms?Ad:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Gr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Oa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const lv=[.64,.33,.3,.6,.15,.06],uv=[.2126,.7152,.0722],cv=[.3127,.329],fv=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dv=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ut.define({[ul]:{primaries:lv,whitePoint:cv,transfer:Ad,toXYZ:fv,fromXYZ:dv,luminanceCoefficients:uv,workingColorSpaceConfig:{unpackColorSpace:bi},outputColorSpaceConfig:{drawingBufferColorSpace:bi}},[bi]:{primaries:lv,whitePoint:cv,transfer:xt,toXYZ:fv,fromXYZ:dv,luminanceCoefficients:uv,outputColorSpaceConfig:{drawingBufferColorSpace:bi}}});let Yo;class mC{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yo===void 0&&(Yo=Uu("canvas")),Yo.width=e.width,Yo.height=e.height;const i=Yo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Yo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Uu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Gr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gr(t[i]/255)*255):t[i]=Gr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _C=0;class XM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_C++}),this.uuid=Xu(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(mh(r[o].image)):s.push(mh(r[o]))}else s=mh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function mh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gC=0;class Xn extends cl{constructor(e=Xn.DEFAULT_IMAGE,t=Xn.DEFAULT_MAPPING,i=po,r=po,s=mr,o=mo,a=tr,l=Zr,u=Xn.DEFAULT_ANISOTROPY,c=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gC++}),this.uuid=Xu(),this.name="",this.source=new XM(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==LM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dm:e.x=e.x-Math.floor(e.x);break;case po:e.x=e.x<0?0:1;break;case hm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dm:e.y=e.y-Math.floor(e.y);break;case po:e.y=e.y<0?0:1;break;case hm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=LM;Xn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,i=0,r=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,C=(d+1)/2,w=(c+h)/4,E=(f+_)/4,R=(g+m)/4;return x>y&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=E/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=E/s,r=R/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-_)/v,this.z=(h-c)/v,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vC extends cl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new XM(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Uo extends vC{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class jM extends Xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=rr,this.minFilter=rr,this.wrapR=po,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xC extends Xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=rr,this.minFilter=rr,this.wrapR=po,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ju{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||u!==p||c!==g){let m=1-a;const d=l*h+u*p+c*g+f*_,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const C=Math.sqrt(x),w=Math.atan2(C,d*v);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const y=a*v;if(l=l*m+h*y,u=u*m+p*y,c=c*m+g*y,f=f*m+_*y,m===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=C,u*=C,c*=C,f*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+c*f+l*p-u*h,e[t+1]=l*g+c*h+u*f-a*p,e[t+2]=u*g+c*p+a*h-l*f,e[t+3]=c*g-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"YXZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"ZXY":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"ZYX":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"YZX":this._x=h*c*f+u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f-h*p*g;break;case"XZY":this._x=h*c*f-u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _h.copy(this).projectOnVector(e),this.sub(_h)}reflect(e){return this.sub(_h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _h=new K,hv=new ju;class Yu{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ji.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ji.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ji):ji.fromBufferAttribute(s,o),ji.applyMatrix4(e.matrixWorld),this.expandByPoint(ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mc.copy(i.boundingBox)),mc.applyMatrix4(e.matrixWorld),this.union(mc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tl),_c.subVectors(this.max,Tl),$o.subVectors(e.a,Tl),qo.subVectors(e.b,Tl),Ko.subVectors(e.c,Tl),rs.subVectors(qo,$o),ss.subVectors(Ko,qo),$s.subVectors($o,Ko);let t=[0,-rs.z,rs.y,0,-ss.z,ss.y,0,-$s.z,$s.y,rs.z,0,-rs.x,ss.z,0,-ss.x,$s.z,0,-$s.x,-rs.y,rs.x,0,-ss.y,ss.x,0,-$s.y,$s.x,0];return!gh(t,$o,qo,Ko,_c)||(t=[1,0,0,0,1,0,0,0,1],!gh(t,$o,qo,Ko,_c))?!1:(gc.crossVectors(rs,ss),t=[gc.x,gc.y,gc.z],gh(t,$o,qo,Ko,_c))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wr=[new K,new K,new K,new K,new K,new K,new K,new K],ji=new K,mc=new Yu,$o=new K,qo=new K,Ko=new K,rs=new K,ss=new K,$s=new K,Tl=new K,_c=new K,gc=new K,qs=new K;function gh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){qs.fromArray(n,s);const a=r.x*Math.abs(qs.x)+r.y*Math.abs(qs.y)+r.z*Math.abs(qs.z),l=e.dot(qs),u=t.dot(qs),c=i.dot(qs);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const yC=new Yu,wl=new K,vh=new K;class vg{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):yC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wl.subVectors(e,this.center);const t=wl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(wl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wl.copy(e.center).add(vh)),this.expandByPoint(wl.copy(e.center).sub(vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ar=new K,xh=new K,vc=new K,os=new K,yh=new K,xc=new K,Sh=new K;class SC{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ar.copy(this.origin).addScaledVector(this.direction,t),Ar.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){xh.copy(e).add(t).multiplyScalar(.5),vc.copy(t).sub(e).normalize(),os.copy(this.origin).sub(xh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(vc),a=os.dot(this.direction),l=-os.dot(vc),u=os.lengthSq(),c=Math.abs(1-o*o);let f,h,p,g;if(c>0)if(f=o*l-a,h=o*a-l,g=s*c,f>=0)if(h>=-g)if(h<=g){const _=1/c;f*=_,h*=_,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(xh).addScaledVector(vc,h),p}intersectSphere(e,t){Ar.subVectors(e.center,this.origin);const i=Ar.dot(this.direction),r=Ar.dot(Ar)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ar)!==null}intersectTriangle(e,t,i,r,s){yh.subVectors(t,e),xc.subVectors(i,e),Sh.crossVectors(yh,xc);let o=this.direction.dot(Sh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;os.subVectors(this.origin,e);const l=a*this.direction.dot(xc.crossVectors(os,xc));if(l<0)return null;const u=a*this.direction.dot(yh.cross(os));if(u<0||l+u>o)return null;const c=-a*os.dot(Sh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,t,i,r,s,o,a,l,u,c,f,h,p,g,_,m){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,p,g,_,m)}set(e,t,i,r,s,o,a,l,u,c,f,h,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Zo.setFromMatrixColumn(e,0).length(),s=1/Zo.setFromMatrixColumn(e,1).length(),o=1/Zo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*f,g=a*c,_=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+g*u,t[5]=h-_*u,t[9]=-a*l,t[2]=_-h*u,t[6]=g+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,g=u*c,_=u*f;t[0]=h+_*a,t[4]=g*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,g=u*c,_=u*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*c,t[9]=_-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,g=a*c,_=a*f;t[0]=l*c,t[4]=g*u-p,t[8]=h*u+_,t[1]=l*f,t[5]=_*u+h,t[9]=p*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+_,t[5]=o*c,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*c,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(MC,e,EC)}lookAt(e,t,i){const r=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),as.crossVectors(i,ci),as.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),as.crossVectors(i,ci)),as.normalize(),yc.crossVectors(ci,as),r[0]=as.x,r[4]=yc.x,r[8]=ci.x,r[1]=as.y,r[5]=yc.y,r[9]=ci.y,r[2]=as.z,r[6]=yc.z,r[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],v=i[3],x=i[7],y=i[11],C=i[15],w=r[0],E=r[4],R=r[8],M=r[12],S=r[1],D=r[5],F=r[9],B=r[13],j=r[2],Z=r[6],W=r[10],X=r[14],L=r[3],$=r[7],b=r[11],ie=r[15];return s[0]=o*w+a*S+l*j+u*L,s[4]=o*E+a*D+l*Z+u*$,s[8]=o*R+a*F+l*W+u*b,s[12]=o*M+a*B+l*X+u*ie,s[1]=c*w+f*S+h*j+p*L,s[5]=c*E+f*D+h*Z+p*$,s[9]=c*R+f*F+h*W+p*b,s[13]=c*M+f*B+h*X+p*ie,s[2]=g*w+_*S+m*j+d*L,s[6]=g*E+_*D+m*Z+d*$,s[10]=g*R+_*F+m*W+d*b,s[14]=g*M+_*B+m*X+d*ie,s[3]=v*w+x*S+y*j+C*L,s[7]=v*E+x*D+y*Z+C*$,s[11]=v*R+x*F+y*W+C*b,s[15]=v*M+x*B+y*X+C*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+_*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+t*u*f-t*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],v=f*m*u-_*h*u+_*l*p-a*m*p-f*l*d+a*h*d,x=g*h*u-c*m*u-g*l*p+o*m*p+c*l*d-o*h*d,y=c*_*u-g*f*u+g*a*p-o*_*p-c*a*d+o*f*d,C=g*f*l-c*_*l-g*a*h+o*_*h+c*a*m-o*f*m,w=t*v+i*x+r*y+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=v*E,e[1]=(_*h*s-f*m*s-_*r*p+i*m*p+f*r*d-i*h*d)*E,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*d+i*l*d)*E,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*E,e[4]=x*E,e[5]=(c*m*s-g*h*s+g*r*p-t*m*p-c*r*d+t*h*d)*E,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*d-t*l*d)*E,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*E,e[8]=y*E,e[9]=(g*f*s-c*_*s-g*i*p+t*_*p+c*i*d-t*f*d)*E,e[10]=(o*_*s-g*a*s+g*i*u-t*_*u-o*i*d+t*a*d)*E,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*p-t*a*p)*E,e[12]=C*E,e[13]=(c*_*r-g*f*r+g*i*h-t*_*h-c*i*m+t*f*m)*E,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*E,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,g=s*f,_=o*c,m=o*f,d=a*f,v=l*u,x=l*c,y=l*f,C=i.x,w=i.y,E=i.z;return r[0]=(1-(_+d))*C,r[1]=(p+y)*C,r[2]=(g-x)*C,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(h+d))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+x)*E,r[9]=(m-v)*E,r[10]=(1-(h+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Zo.set(r[0],r[1],r[2]).length();const o=Zo.set(r[4],r[5],r[6]).length(),a=Zo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yi.copy(this);const u=1/s,c=1/o,f=1/a;return Yi.elements[0]*=u,Yi.elements[1]*=u,Yi.elements[2]*=u,Yi.elements[4]*=c,Yi.elements[5]*=c,Yi.elements[6]*=c,Yi.elements[8]*=f,Yi.elements[9]*=f,Yi.elements[10]*=f,t.setFromRotationMatrix(Yi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=zr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,g;if(a===zr)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ed)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=zr){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),h=(t+e)*u,p=(i+r)*c;let g,_;if(a===zr)g=(o+s)*f,_=-2*f;else if(a===ed)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Zo=new K,Yi=new tn,MC=new K(0,0,0),EC=new K(1,1,1),as=new K,yc=new K,ci=new K,pv=new tn,mv=new ju;class Qr{constructor(e=0,t=0,i=0,r=Qr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Zn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Zn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Zn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Zn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mv.setFromEuler(this),this.setFromQuaternion(mv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qr.DEFAULT_ORDER="XYZ";class YM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let TC=0;const _v=new K,Qo=new ju,Cr=new tn,Sc=new K,Al=new K,wC=new K,AC=new ju,gv=new K(1,0,0),vv=new K(0,1,0),xv=new K(0,0,1),yv={type:"added"},CC={type:"removed"},Jo={type:"childadded",child:null},Mh={type:"childremoved",child:null};class Mi extends cl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TC++}),this.uuid=Xu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mi.DEFAULT_UP.clone();const e=new K,t=new Qr,i=new ju,r=new K(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tn},normalMatrix:{value:new Ze}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Mi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new YM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qo.setFromAxisAngle(e,t),this.quaternion.multiply(Qo),this}rotateOnWorldAxis(e,t){return Qo.setFromAxisAngle(e,t),this.quaternion.premultiply(Qo),this}rotateX(e){return this.rotateOnAxis(gv,e)}rotateY(e){return this.rotateOnAxis(vv,e)}rotateZ(e){return this.rotateOnAxis(xv,e)}translateOnAxis(e,t){return _v.copy(e).applyQuaternion(this.quaternion),this.position.add(_v.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gv,e)}translateY(e){return this.translateOnAxis(vv,e)}translateZ(e){return this.translateOnAxis(xv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Sc.copy(e):Sc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cr.lookAt(Al,Sc,this.up):Cr.lookAt(Sc,Al,this.up),this.quaternion.setFromRotationMatrix(Cr),r&&(Cr.extractRotation(r.matrixWorld),Qo.setFromRotationMatrix(Cr),this.quaternion.premultiply(Qo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yv),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(CC),Mh.child=e,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yv),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,e,wC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,AC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Mi.DEFAULT_UP=new K(0,1,0);Mi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $i=new K,Rr=new K,Eh=new K,Pr=new K,ea=new K,ta=new K,Sv=new K,Th=new K,wh=new K,Ah=new K,Ch=new $t,Rh=new $t,Ph=new $t;class er{constructor(e=new K,t=new K,i=new K){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),$i.subVectors(e,t),r.cross($i);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){$i.subVectors(r,t),Rr.subVectors(i,t),Eh.subVectors(e,t);const o=$i.dot($i),a=$i.dot(Rr),l=$i.dot(Eh),u=Rr.dot(Rr),c=Rr.dot(Eh),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,g=(o*c-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Pr)===null?!1:Pr.x>=0&&Pr.y>=0&&Pr.x+Pr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Pr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pr.x),l.addScaledVector(o,Pr.y),l.addScaledVector(a,Pr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ch.setScalar(0),Rh.setScalar(0),Ph.setScalar(0),Ch.fromBufferAttribute(e,t),Rh.fromBufferAttribute(e,i),Ph.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ch,s.x),o.addScaledVector(Rh,s.y),o.addScaledVector(Ph,s.z),o}static isFrontFacing(e,t,i,r){return $i.subVectors(i,t),Rr.subVectors(e,t),$i.cross(Rr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),Rr.subVectors(this.a,this.b),$i.cross(Rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return er.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return er.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return er.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return er.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return er.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ea.subVectors(r,i),ta.subVectors(s,i),Th.subVectors(e,i);const l=ea.dot(Th),u=ta.dot(Th);if(l<=0&&u<=0)return t.copy(i);wh.subVectors(e,r);const c=ea.dot(wh),f=ta.dot(wh);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(ea,o);Ah.subVectors(e,s);const p=ea.dot(Ah),g=ta.dot(Ah);if(g>=0&&p<=g)return t.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(ta,a);const m=c*g-p*f;if(m<=0&&f-c>=0&&p-g>=0)return Sv.subVectors(s,r),a=(f-c)/(f-c+(p-g)),t.copy(r).addScaledVector(Sv,a);const d=1/(m+_+h);return o=_*d,a=h*d,t.copy(i).addScaledVector(ea,o).addScaledVector(ta,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $M={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},Mc={h:0,s:0,l:0};function bh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class yt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ut.workingColorSpace){if(e=cC(e,1),t=Zn(t,0,1),i=Zn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=bh(o,s,e+1/3),this.g=bh(o,s,e),this.b=bh(o,s,e-1/3)}return ut.toWorkingColorSpace(this,r),this}setStyle(e,t=bi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bi){const i=$M[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}copyLinearToSRGB(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bi){return ut.fromWorkingColorSpace(Tn.copy(this),e),Math.round(Zn(Tn.r*255,0,255))*65536+Math.round(Zn(Tn.g*255,0,255))*256+Math.round(Zn(Tn.b*255,0,255))}getHexString(e=bi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(Tn.copy(this),t);const i=Tn.r,r=Tn.g,s=Tn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=bi){ut.fromWorkingColorSpace(Tn.copy(this),e);const t=Tn.r,i=Tn.g,r=Tn.b;return e!==bi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+t,ls.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ls),e.getHSL(Mc);const i=hh(ls.h,Mc.h,t),r=hh(ls.s,Mc.s,t),s=hh(ls.l,Mc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new yt;yt.NAMES=$M;let RC=0;class Cd extends cl{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RC++}),this.uuid=Xu(),this.name="",this.blending=Ua,this.side=zs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tm,this.blendDst=nm,this.blendEquation=ao,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jo,this.stencilZFail=jo,this.stencilZPass=jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ua&&(i.blending=this.blending),this.side!==zs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tm&&(i.blendSrc=this.blendSrc),this.blendDst!==nm&&(i.blendDst=this.blendDst),this.blendEquation!==ao&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ja&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==jo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==jo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qM extends Cd{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qr,this.combine=DM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new K,Ec=new vt;class Sr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sv,this.updateRanges=[],this.gpuType=Br,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ec.fromBufferAttribute(this,t),Ec.applyMatrix3(e),this.setXY(t,Ec.x,Ec.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=El(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=El(t,this.array)),t}setX(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=El(t,this.array)),t}setY(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=El(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=El(t,this.array)),t}setW(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),i=$n(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),i=$n(i,this.array),r=$n(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),i=$n(i,this.array),r=$n(r,this.array),s=$n(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sv&&(e.usage=this.usage),e}}class KM extends Sr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ZM extends Sr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Eo extends Sr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let PC=0;const Ri=new tn,Dh=new Mi,na=new K,fi=new Yu,Cl=new Yu,cn=new K;class Ho extends cl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PC++}),this.uuid=Xu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(WM(e)?ZM:KM)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,i){return Ri.makeTranslation(e,t,i),this.applyMatrix4(Ri),this}scale(e,t,i){return Ri.makeScale(e,t,i),this.applyMatrix4(Ri),this}lookAt(e){return Dh.lookAt(e),Dh.updateMatrix(),this.applyMatrix4(Dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(na).negate(),this.translate(na.x,na.y,na.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Eo(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];fi.setFromBufferAttribute(s),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vg);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Cl.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(fi.min,Cl.min),fi.expandByPoint(cn),cn.addVectors(fi.max,Cl.max),fi.expandByPoint(cn)):(fi.expandByPoint(Cl.min),fi.expandByPoint(Cl.max))}fi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)cn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(cn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)cn.fromBufferAttribute(a,u),l&&(na.fromBufferAttribute(e,u),cn.add(na)),r=Math.max(r,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new K,l[R]=new K;const u=new K,c=new K,f=new K,h=new vt,p=new vt,g=new vt,_=new K,m=new K;function d(R,M,S){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,R),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),c.sub(u),f.sub(u),p.sub(h),g.sub(h);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(D),a[R].add(_),a[M].add(_),a[S].add(_),l[R].add(m),l[M].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,M=v.length;R<M;++R){const S=v[R],D=S.start,F=S.count;for(let B=D,j=D+F;B<j;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const x=new K,y=new K,C=new K,w=new K;function E(R){C.fromBufferAttribute(r,R),w.copy(C);const M=a[R];x.copy(M),x.sub(C.multiplyScalar(C.dot(M))).normalize(),y.crossVectors(w,M);const D=y.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,D)}for(let R=0,M=v.length;R<M;++R){const S=v[R],D=S.start,F=S.count;for(let B=D,j=D+F;B<j;B+=3)E(e.getX(B+0)),E(e.getX(B+1)),E(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new K,s=new K,o=new K,a=new K,l=new K,u=new K,c=new K,f=new K;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let d=0;d<c;d++)h[g++]=u[p++]}return new Sr(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ho,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mv=new tn,Ks=new SC,Tc=new vg,Ev=new K,wc=new K,Ac=new K,Cc=new K,Lh=new K,Rc=new K,Tv=new K,Pc=new K;class _r extends Mi{constructor(e=new Ho,t=new qM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Rc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Lh.fromBufferAttribute(f,e),o?Rc.addScaledVector(Lh,c):Rc.addScaledVector(Lh.sub(t),c))}t.add(Rc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tc.copy(i.boundingSphere),Tc.applyMatrix4(s),Ks.copy(e.ray).recast(e.near),!(Tc.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(Tc,Ev)===null||Ks.origin.distanceToSquared(Ev)>(e.far-e.near)**2))&&(Mv.copy(s).invert(),Ks.copy(e.ray).applyMatrix4(Mv),!(i.boundingBox!==null&&Ks.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ks)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=x;y<C;y+=3){const w=a.getX(y),E=a.getX(y+1),R=a.getX(y+2);r=bc(this,d,e,i,u,c,f,w,E,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=bc(this,o,e,i,u,c,f,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=x;y<C;y+=3){const w=y,E=y+1,R=y+2;r=bc(this,d,e,i,u,c,f,w,E,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=m,x=m+1,y=m+2;r=bc(this,o,e,i,u,c,f,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function bC(n,e,t,i,r,s,o,a){let l;if(e.side===oi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===zs,a),l===null)return null;Pc.copy(a),Pc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Pc);return u<t.near||u>t.far?null:{distance:u,point:Pc.clone(),object:n}}function bc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,wc),n.getVertexPosition(l,Ac),n.getVertexPosition(u,Cc);const c=bC(n,e,t,i,wc,Ac,Cc,Tv);if(c){const f=new K;er.getBarycoord(Tv,wc,Ac,Cc,f),r&&(c.uv=er.getInterpolatedAttribute(r,a,l,u,f,new vt)),s&&(c.uv1=er.getInterpolatedAttribute(s,a,l,u,f,new vt)),o&&(c.normal=er.getInterpolatedAttribute(o,a,l,u,f,new K),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new K,materialIndex:0};er.getNormal(wc,Ac,Cc,h.normal),c.face=h,c.barycoord=f}return c}class $u extends Ho{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Eo(u,3)),this.setAttribute("normal",new Eo(c,3)),this.setAttribute("uv",new Eo(f,2));function g(_,m,d,v,x,y,C,w,E,R,M){const S=y/E,D=C/R,F=y/2,B=C/2,j=w/2,Z=E+1,W=R+1;let X=0,L=0;const $=new K;for(let b=0;b<W;b++){const ie=b*D-B;for(let ye=0;ye<Z;ye++){const Xe=ye*S-F;$[_]=Xe*v,$[m]=ie*x,$[d]=j,u.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[d]=w>0?1:-1,c.push($.x,$.y,$.z),f.push(ye/E),f.push(1-b/R),X+=1}}for(let b=0;b<R;b++)for(let ie=0;ie<E;ie++){const ye=h+ie+Z*b,Xe=h+ie+Z*(b+1),Y=h+(ie+1)+Z*(b+1),ne=h+(ie+1)+Z*b;l.push(ye,Xe,ne),l.push(Xe,Y,ne),L+=6}a.addGroup(p,L,M),p+=L,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $u(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Fn(n){const e={};for(let t=0;t<n.length;t++){const i=rl(n[t]);for(const r in i)e[r]=i[r]}return e}function DC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function QM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const LC={clone:rl,merge:Fn};var NC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jr extends Cd{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NC,this.fragmentShader=IC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rl(e.uniforms),this.uniformsGroups=DC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class JM extends Mi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=zr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const us=new K,wv=new vt,Av=new vt;class Ni extends JM{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zm*2*Math.atan(Math.tan(dh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,t){return this.getViewBounds(e,wv,Av),t.subVectors(Av,wv)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ia=-90,ra=1;class UC extends Mi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ni(ia,ra,e,t);r.layers=this.layers,this.add(r);const s=new Ni(ia,ra,e,t);s.layers=this.layers,this.add(s);const o=new Ni(ia,ra,e,t);o.layers=this.layers,this.add(o);const a=new Ni(ia,ra,e,t);a.layers=this.layers,this.add(a);const l=new Ni(ia,ra,e,t);l.layers=this.layers,this.add(l);const u=new Ni(ia,ra,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===zr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ed)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class eE extends Xn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:el,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class FC extends Uo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new eE(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $u(5,5,5),s=new Jr({name:"CubemapFromEquirect",uniforms:rl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:oi,blending:Ns});s.uniforms.tEquirect.value=t;const o=new _r(r,s),a=t.minFilter;return t.minFilter===mo&&(t.minFilter=mr),new UC(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Nh=new K,OC=new K,kC=new Ze;class io{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Nh.subVectors(i,t).cross(OC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Nh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||kC.getNormalMatrix(e),r=this.coplanarPoint(Nh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zs=new vg,Dc=new K;class tE{constructor(e=new io,t=new io,i=new io,r=new io,s=new io,o=new io){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,m-p,y-d).normalize(),i[1].setComponents(l+s,h+u,m+p,y+d).normalize(),i[2].setComponents(l+o,h+c,m+g,y+v).normalize(),i[3].setComponents(l-o,h-c,m-g,y-v).normalize(),i[4].setComponents(l-a,h-f,m-_,y-x).normalize(),t===zr)i[5].setComponents(l+a,h+f,m+_,y+x).normalize();else if(t===ed)i[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(e){return Zs.center.set(0,0,0),Zs.radius=.7071067811865476,Zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Dc.x=r.normal.x>0?e.max.x:e.min.x,Dc.y=r.normal.y>0?e.max.y:e.min.y,Dc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nE(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function BC(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class qu extends Ho{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<c;d++){const v=d*h-o;for(let x=0;x<u;x++){const y=x*f-s;g.push(y,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const x=v+u*d,y=v+u*(d+1),C=v+1+u*(d+1),w=v+1+u*d;p.push(x,y,w),p.push(y,C,w)}this.setIndex(p),this.setAttribute("position",new Eo(g,3)),this.setAttribute("normal",new Eo(_,3)),this.setAttribute("uv",new Eo(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qu(e.width,e.height,e.widthSegments,e.heightSegments)}}var zC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VC=`#ifdef USE_ALPHAHASH
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
#endif`,HC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jC=`#ifdef USE_AOMAP
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
#endif`,YC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$C=`#ifdef USE_BATCHING
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
#endif`,qC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,JC=`#ifdef USE_IRIDESCENCE
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
#endif`,eR=`#ifdef USE_BUMPMAP
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
#endif`,tR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lR=`#if defined( USE_COLOR_ALPHA )
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
#endif`,uR=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,cR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fR=`vec3 transformedNormal = objectNormal;
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
#endif`,dR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_R="gl_FragColor = linearToOutputTexel( gl_FragColor );",gR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vR=`#ifdef USE_ENVMAP
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
#endif`,xR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yR=`#ifdef USE_ENVMAP
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
#endif`,SR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MR=`#ifdef USE_ENVMAP
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
#endif`,ER=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CR=`#ifdef USE_GRADIENTMAP
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
}`,RR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DR=`uniform bool receiveShadow;
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
#endif`,LR=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,NR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OR=`PhysicalMaterial material;
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
#endif`,kR=`struct PhysicalMaterial {
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,BR=`
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
#endif`,zR=`#if defined( RE_IndirectDiffuse )
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
#endif`,VR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$R=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qR=`#if defined( USE_POINTS_UV )
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
#endif`,KR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tP=`#ifdef USE_MORPHTARGETS
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
#endif`,nP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lP=`#ifdef USE_NORMALMAP
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
#endif`,uP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pP=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_P=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,MP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,EP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,TP=`float getShadowMask() {
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
}`,wP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AP=`#ifdef USE_SKINNING
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
#endif`,CP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RP=`#ifdef USE_SKINNING
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
#endif`,PP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LP=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NP=`#ifdef USE_TRANSMISSION
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
#endif`,IP=`#ifdef USE_TRANSMISSION
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
#endif`,UP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zP=`uniform sampler2D t2D;
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
}`,VP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HP=`#ifdef ENVMAP_TYPE_CUBE
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
}`,GP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XP=`#include <common>
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
}`,jP=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,YP=`#define DISTANCE
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
}`,$P=`#define DISTANCE
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
}`,qP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZP=`uniform float scale;
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
}`,QP=`uniform vec3 diffuse;
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
}`,JP=`#include <common>
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
}`,eb=`uniform vec3 diffuse;
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
}`,tb=`#define LAMBERT
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
}`,nb=`#define LAMBERT
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
}`,ib=`#define MATCAP
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
}`,rb=`#define MATCAP
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
}`,sb=`#define NORMAL
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
}`,ob=`#define NORMAL
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
}`,ab=`#define PHONG
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
}`,lb=`#define PHONG
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
}`,ub=`#define STANDARD
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
}`,cb=`#define STANDARD
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
}`,fb=`#define TOON
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
}`,db=`#define TOON
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
}`,hb=`uniform float size;
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
}`,pb=`uniform vec3 diffuse;
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
}`,mb=`#include <common>
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
}`,_b=`uniform vec3 color;
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
}`,gb=`uniform float rotation;
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
}`,vb=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:zC,alphahash_pars_fragment:VC,alphamap_fragment:HC,alphamap_pars_fragment:GC,alphatest_fragment:WC,alphatest_pars_fragment:XC,aomap_fragment:jC,aomap_pars_fragment:YC,batching_pars_vertex:$C,batching_vertex:qC,begin_vertex:KC,beginnormal_vertex:ZC,bsdfs:QC,iridescence_fragment:JC,bumpmap_pars_fragment:eR,clipping_planes_fragment:tR,clipping_planes_pars_fragment:nR,clipping_planes_pars_vertex:iR,clipping_planes_vertex:rR,color_fragment:sR,color_pars_fragment:oR,color_pars_vertex:aR,color_vertex:lR,common:uR,cube_uv_reflection_fragment:cR,defaultnormal_vertex:fR,displacementmap_pars_vertex:dR,displacementmap_vertex:hR,emissivemap_fragment:pR,emissivemap_pars_fragment:mR,colorspace_fragment:_R,colorspace_pars_fragment:gR,envmap_fragment:vR,envmap_common_pars_fragment:xR,envmap_pars_fragment:yR,envmap_pars_vertex:SR,envmap_physical_pars_fragment:LR,envmap_vertex:MR,fog_vertex:ER,fog_pars_vertex:TR,fog_fragment:wR,fog_pars_fragment:AR,gradientmap_pars_fragment:CR,lightmap_pars_fragment:RR,lights_lambert_fragment:PR,lights_lambert_pars_fragment:bR,lights_pars_begin:DR,lights_toon_fragment:NR,lights_toon_pars_fragment:IR,lights_phong_fragment:UR,lights_phong_pars_fragment:FR,lights_physical_fragment:OR,lights_physical_pars_fragment:kR,lights_fragment_begin:BR,lights_fragment_maps:zR,lights_fragment_end:VR,logdepthbuf_fragment:HR,logdepthbuf_pars_fragment:GR,logdepthbuf_pars_vertex:WR,logdepthbuf_vertex:XR,map_fragment:jR,map_pars_fragment:YR,map_particle_fragment:$R,map_particle_pars_fragment:qR,metalnessmap_fragment:KR,metalnessmap_pars_fragment:ZR,morphinstance_vertex:QR,morphcolor_vertex:JR,morphnormal_vertex:eP,morphtarget_pars_vertex:tP,morphtarget_vertex:nP,normal_fragment_begin:iP,normal_fragment_maps:rP,normal_pars_fragment:sP,normal_pars_vertex:oP,normal_vertex:aP,normalmap_pars_fragment:lP,clearcoat_normal_fragment_begin:uP,clearcoat_normal_fragment_maps:cP,clearcoat_pars_fragment:fP,iridescence_pars_fragment:dP,opaque_fragment:hP,packing:pP,premultiplied_alpha_fragment:mP,project_vertex:_P,dithering_fragment:gP,dithering_pars_fragment:vP,roughnessmap_fragment:xP,roughnessmap_pars_fragment:yP,shadowmap_pars_fragment:SP,shadowmap_pars_vertex:MP,shadowmap_vertex:EP,shadowmask_pars_fragment:TP,skinbase_vertex:wP,skinning_pars_vertex:AP,skinning_vertex:CP,skinnormal_vertex:RP,specularmap_fragment:PP,specularmap_pars_fragment:bP,tonemapping_fragment:DP,tonemapping_pars_fragment:LP,transmission_fragment:NP,transmission_pars_fragment:IP,uv_pars_fragment:UP,uv_pars_vertex:FP,uv_vertex:OP,worldpos_vertex:kP,background_vert:BP,background_frag:zP,backgroundCube_vert:VP,backgroundCube_frag:HP,cube_vert:GP,cube_frag:WP,depth_vert:XP,depth_frag:jP,distanceRGBA_vert:YP,distanceRGBA_frag:$P,equirect_vert:qP,equirect_frag:KP,linedashed_vert:ZP,linedashed_frag:QP,meshbasic_vert:JP,meshbasic_frag:eb,meshlambert_vert:tb,meshlambert_frag:nb,meshmatcap_vert:ib,meshmatcap_frag:rb,meshnormal_vert:sb,meshnormal_frag:ob,meshphong_vert:ab,meshphong_frag:lb,meshphysical_vert:ub,meshphysical_frag:cb,meshtoon_vert:fb,meshtoon_frag:db,points_vert:hb,points_frag:pb,shadow_vert:mb,shadow_frag:_b,sprite_vert:gb,sprite_frag:vb},xe={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},fr={basic:{uniforms:Fn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Fn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new yt(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Fn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Fn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Fn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new yt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Fn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Fn([xe.points,xe.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Fn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Fn([xe.common,xe.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Fn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Fn([xe.sprite,xe.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Fn([xe.common,xe.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Fn([xe.lights,xe.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};fr.physical={uniforms:Fn([fr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Lc={r:0,b:0,g:0},Qs=new Qr,xb=new tn;function yb(n,e,t,i,r,s,o){const a=new yt(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const y=g(v);y===null?d(a,l):y&&y.isColor&&(d(y,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,x){const y=g(x);y&&(y.isCubeTexture||y.mapping===wd)?(c===void 0&&(c=new _r(new $u(1,1,1),new Jr({name:"BackgroundCubeMaterial",uniforms:rl(fr.backgroundCube.uniforms),vertexShader:fr.backgroundCube.vertexShader,fragmentShader:fr.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Qs.copy(x.backgroundRotation),Qs.x*=-1,Qs.y*=-1,Qs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Qs.y*=-1,Qs.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(xb.makeRotationFromEuler(Qs)),c.material.toneMapped=ut.getTransfer(y.colorSpace)!==xt,(f!==y||h!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new _r(new qu(2,2),new Jr({name:"BackgroundMaterial",uniforms:rl(fr.background.uniforms),vertexShader:fr.background.vertexShader,fragmentShader:fr.background.fragmentShader,side:zs,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=ut.getTransfer(y.colorSpace)!==xt,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,p=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function d(v,x){v.getRGB(Lc,QM(n)),i.buffers.color.setClear(Lc.r,Lc.g,Lc.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:_,addToRenderList:m}}function Sb(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,D,F,B,j){let Z=!1;const W=f(B,F,D);s!==W&&(s=W,u(s.object)),Z=p(S,B,F,j),Z&&g(S,B,F,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,y(S,D,F,B),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return n.createVertexArray()}function u(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function f(S,D,F){const B=F.wireframe===!0;let j=i[S.id];j===void 0&&(j={},i[S.id]=j);let Z=j[D.id];Z===void 0&&(Z={},j[D.id]=Z);let W=Z[B];return W===void 0&&(W=h(l()),Z[B]=W),W}function h(S){const D=[],F=[],B=[];for(let j=0;j<t;j++)D[j]=0,F[j]=0,B[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:B,object:S,attributes:{},index:null}}function p(S,D,F,B){const j=s.attributes,Z=D.attributes;let W=0;const X=F.getAttributes();for(const L in X)if(X[L].location>=0){const b=j[L];let ie=Z[L];if(ie===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),b===void 0||b.attribute!==ie||ie&&b.data!==ie.data)return!0;W++}return s.attributesNum!==W||s.index!==B}function g(S,D,F,B){const j={},Z=D.attributes;let W=0;const X=F.getAttributes();for(const L in X)if(X[L].location>=0){let b=Z[L];b===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(b=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(b=S.instanceColor));const ie={};ie.attribute=b,b&&b.data&&(ie.data=b.data),j[L]=ie,W++}s.attributes=j,s.attributesNum=W,s.index=B}function _(){const S=s.newAttributes;for(let D=0,F=S.length;D<F;D++)S[D]=0}function m(S){d(S,0)}function d(S,D){const F=s.newAttributes,B=s.enabledAttributes,j=s.attributeDivisors;F[S]=1,B[S]===0&&(n.enableVertexAttribArray(S),B[S]=1),j[S]!==D&&(n.vertexAttribDivisor(S,D),j[S]=D)}function v(){const S=s.newAttributes,D=s.enabledAttributes;for(let F=0,B=D.length;F<B;F++)D[F]!==S[F]&&(n.disableVertexAttribArray(F),D[F]=0)}function x(S,D,F,B,j,Z,W){W===!0?n.vertexAttribIPointer(S,D,F,j,Z):n.vertexAttribPointer(S,D,F,B,j,Z)}function y(S,D,F,B){_();const j=B.attributes,Z=F.getAttributes(),W=D.defaultAttributeValues;for(const X in Z){const L=Z[X];if(L.location>=0){let $=j[X];if($===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),$!==void 0){const b=$.normalized,ie=$.itemSize,ye=e.get($);if(ye===void 0)continue;const Xe=ye.buffer,Y=ye.type,ne=ye.bytesPerElement,fe=Y===n.INT||Y===n.UNSIGNED_INT||$.gpuType===dg;if($.isInterleavedBufferAttribute){const re=$.data,Ce=re.stride,be=$.offset;if(re.isInstancedInterleavedBuffer){for(let He=0;He<L.locationSize;He++)d(L.location+He,re.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let He=0;He<L.locationSize;He++)m(L.location+He);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let He=0;He<L.locationSize;He++)x(L.location+He,ie/L.locationSize,Y,b,Ce*ne,(be+ie/L.locationSize*He)*ne,fe)}else{if($.isInstancedBufferAttribute){for(let re=0;re<L.locationSize;re++)d(L.location+re,$.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let re=0;re<L.locationSize;re++)m(L.location+re);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let re=0;re<L.locationSize;re++)x(L.location+re,ie/L.locationSize,Y,b,ie*ne,ie/L.locationSize*re*ne,fe)}}else if(W!==void 0){const b=W[X];if(b!==void 0)switch(b.length){case 2:n.vertexAttrib2fv(L.location,b);break;case 3:n.vertexAttrib3fv(L.location,b);break;case 4:n.vertexAttrib4fv(L.location,b);break;default:n.vertexAttrib1fv(L.location,b)}}}}v()}function C(){R();for(const S in i){const D=i[S];for(const F in D){const B=D[F];for(const j in B)c(B[j].object),delete B[j];delete D[F]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const F in D){const B=D[F];for(const j in B)c(B[j].object),delete B[j];delete D[F]}delete i[S.id]}function E(S){for(const D in i){const F=i[D];if(F[S.id]===void 0)continue;const B=F[S.id];for(const j in B)c(B[j].object),delete B[j];delete F[S.id]}}function R(){M(),o=!0,s!==r&&(s=r,u(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Mb(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let g=0;g<f;g++)p+=c[g];t.update(p,i,1)}function l(u,c,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],c[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=c[_]*h[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Eb(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==tr&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const R=E===Wu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Zr&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Br&&!R)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:C,maxSamples:w}}function Tb(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new io,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let y=d.clippingState||null;l.value=y,y=c(g,h,x,p);for(let C=0;C!==x;++C)y[C]=t[C];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,y=p;x!==_;++x,y+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function wb(n){let e=new WeakMap;function t(o,a){return a===cm?o.mapping=el:a===fm&&(o.mapping=tl),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===cm||a===fm)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new FC(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ab extends JM{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ta=4,Cv=[.125,.215,.35,.446,.526,.582],lo=20,Ih=new Ab,Rv=new yt;let Uh=null,Fh=0,Oh=0,kh=!1;const ro=(1+Math.sqrt(5))/2,sa=1/ro,Pv=[new K(-ro,sa,0),new K(ro,sa,0),new K(-sa,0,ro),new K(sa,0,ro),new K(0,ro,-sa),new K(0,ro,sa),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class bv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Uh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uh,Fh,Oh),this._renderer.xr.enabled=kh,e.scissorTest=!1,Nc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===el||e.mapping===tl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mr,minFilter:mr,generateMipmaps:!1,type:Wu,format:tr,colorSpace:ul,depthBuffer:!1},r=Dv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dv(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cb(s)),this._blurMaterial=Rb(s,e,t)}return r}_compileMaterial(e){const t=new _r(this._lodPlanes[0],e);this._renderer.compile(t,Ih)}_sceneToCubeUV(e,t,i,r){const a=new Ni(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(Rv),c.toneMapping=Is,c.autoClear=!1;const p=new qM({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1}),g=new _r(new $u,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Rv),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const x=this._cubeSize;Nc(r,v*x,d>2?x:0,x,x),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===el||e.mapping===tl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new _r(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Nc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ih)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Pv[(r-s-1)%Pv.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new _r(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*lo-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):lo;m>lo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${lo}`);const d=[];let v=0;for(let E=0;E<lo;++E){const R=E/_,M=Math.exp(-R*R/2);d.push(M),E===0?v+=M:E<m&&(v+=2*M)}for(let E=0;E<d.length;E++)d[E]=d[E]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-i;const y=this._sizeLods[r],C=3*y*(r>x-Ta?r-x+Ta:0),w=4*(this._cubeSize-y);Nc(t,C,w,3*y,2*y),l.setRenderTarget(t),l.render(f,Ih)}}function Cb(n){const e=[],t=[],i=[];let r=n;const s=n-Ta+1+Cv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ta?l=Cv[o-n+Ta-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,g=6,_=3,m=2,d=1,v=new Float32Array(_*g*p),x=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let w=0;w<p;w++){const E=w%3*2/3-1,R=w>2?0:-1,M=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];v.set(M,_*g*w),x.set(h,m*g*w);const S=[w,w,w,w,w,w];y.set(S,d*g*w)}const C=new Ho;C.setAttribute("position",new Sr(v,_)),C.setAttribute("uv",new Sr(x,m)),C.setAttribute("faceIndex",new Sr(y,d)),e.push(C),r>Ta&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Dv(n,e,t){const i=new Uo(n,e,t);return i.texture.mapping=wd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Nc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Rb(n,e,t){const i=new Float32Array(lo),r=new K(0,1,0);return new Jr({name:"SphericalGaussianBlur",defines:{n:lo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xg(),fragmentShader:`

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
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function Lv(){return new Jr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xg(),fragmentShader:`

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
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function Nv(){return new Jr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function xg(){return`

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
	`}function Pb(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===cm||l===fm,c=l===el||l===tl;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new bv(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new bv(n)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function bb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Fl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Db(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let x=0,y=v.length;x<y;x+=3){const C=v[x+0],w=v[x+1],E=v[x+2];h.push(C,w,w,E,E,C)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const C=x+0,w=x+1,E=x+2;h.push(C,w,w,E,E,C)}}else return;const m=new(WM(h)?ZM:KM)(h,1);m.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function Lb(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function u(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,h*o,g),t.update(p,i,g))}function c(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function f(h,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)u(h[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,_,0,g);let d=0;for(let v=0;v<g;v++)d+=p[v]*_[v];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function Nb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ib(n,e,t){const i=new WeakMap,r=new $t;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const E=new Float32Array(C*w*4*f),R=new jM(E,C,w,f);R.type=Br,R.needsUpdate=!0;const M=y*4;for(let D=0;D<f;D++){const F=d[D],B=v[D],j=x[D],Z=C*w*4*D;for(let W=0;W<F.count;W++){const X=W*M;g===!0&&(r.fromBufferAttribute(F,W),E[Z+X+0]=r.x,E[Z+X+1]=r.y,E[Z+X+2]=r.z,E[Z+X+3]=0),_===!0&&(r.fromBufferAttribute(B,W),E[Z+X+4]=r.x,E[Z+X+5]=r.y,E[Z+X+6]=r.z,E[Z+X+7]=0),m===!0&&(r.fromBufferAttribute(j,W),E[Z+X+8]=r.x,E[Z+X+9]=r.y,E[Z+X+10]=r.z,E[Z+X+11]=j.itemSize===4?r.w:1)}}h={count:f,texture:R,size:new vt(C,w)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Ub(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class iE extends Xn{constructor(e,t,i,r,s,o,a,l,u,c=Fa){if(c!==Fa&&c!==il)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Fa&&(i=Io),i===void 0&&c===il&&(i=nl),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:rr,this.minFilter=l!==void 0?l:rr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const rE=new Xn,Iv=new iE(1,1),sE=new jM,oE=new xC,aE=new eE,Uv=[],Fv=[],Ov=new Float32Array(16),kv=new Float32Array(9),Bv=new Float32Array(4);function fl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Uv[r];if(s===void 0&&(s=new Float32Array(r),Uv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ln(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function un(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Rd(n,e){let t=Fv[e];t===void 0&&(t=new Int32Array(e),Fv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Fb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ob(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2fv(this.addr,e),un(t,e)}}function kb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;n.uniform3fv(this.addr,e),un(t,e)}}function Bb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4fv(this.addr,e),un(t,e)}}function zb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(ln(t,i))return;Bv.set(i),n.uniformMatrix2fv(this.addr,!1,Bv),un(t,i)}}function Vb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(ln(t,i))return;kv.set(i),n.uniformMatrix3fv(this.addr,!1,kv),un(t,i)}}function Hb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(ln(t,i))return;Ov.set(i),n.uniformMatrix4fv(this.addr,!1,Ov),un(t,i)}}function Gb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Wb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2iv(this.addr,e),un(t,e)}}function Xb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3iv(this.addr,e),un(t,e)}}function jb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4iv(this.addr,e),un(t,e)}}function Yb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $b(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2uiv(this.addr,e),un(t,e)}}function qb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3uiv(this.addr,e),un(t,e)}}function Kb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4uiv(this.addr,e),un(t,e)}}function Zb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Iv.compareFunction=GM,s=Iv):s=rE,t.setTexture2D(e||s,r)}function Qb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||oE,r)}function Jb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||aE,r)}function e2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||sE,r)}function t2(n){switch(n){case 5126:return Fb;case 35664:return Ob;case 35665:return kb;case 35666:return Bb;case 35674:return zb;case 35675:return Vb;case 35676:return Hb;case 5124:case 35670:return Gb;case 35667:case 35671:return Wb;case 35668:case 35672:return Xb;case 35669:case 35673:return jb;case 5125:return Yb;case 36294:return $b;case 36295:return qb;case 36296:return Kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Zb;case 35679:case 36299:case 36307:return Qb;case 35680:case 36300:case 36308:case 36293:return Jb;case 36289:case 36303:case 36311:case 36292:return e2}}function n2(n,e){n.uniform1fv(this.addr,e)}function i2(n,e){const t=fl(e,this.size,2);n.uniform2fv(this.addr,t)}function r2(n,e){const t=fl(e,this.size,3);n.uniform3fv(this.addr,t)}function s2(n,e){const t=fl(e,this.size,4);n.uniform4fv(this.addr,t)}function o2(n,e){const t=fl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function a2(n,e){const t=fl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function l2(n,e){const t=fl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function u2(n,e){n.uniform1iv(this.addr,e)}function c2(n,e){n.uniform2iv(this.addr,e)}function f2(n,e){n.uniform3iv(this.addr,e)}function d2(n,e){n.uniform4iv(this.addr,e)}function h2(n,e){n.uniform1uiv(this.addr,e)}function p2(n,e){n.uniform2uiv(this.addr,e)}function m2(n,e){n.uniform3uiv(this.addr,e)}function _2(n,e){n.uniform4uiv(this.addr,e)}function g2(n,e,t){const i=this.cache,r=e.length,s=Rd(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||rE,s[o])}function v2(n,e,t){const i=this.cache,r=e.length,s=Rd(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||oE,s[o])}function x2(n,e,t){const i=this.cache,r=e.length,s=Rd(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||aE,s[o])}function y2(n,e,t){const i=this.cache,r=e.length,s=Rd(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||sE,s[o])}function S2(n){switch(n){case 5126:return n2;case 35664:return i2;case 35665:return r2;case 35666:return s2;case 35674:return o2;case 35675:return a2;case 35676:return l2;case 5124:case 35670:return u2;case 35667:case 35671:return c2;case 35668:case 35672:return f2;case 35669:case 35673:return d2;case 5125:return h2;case 36294:return p2;case 36295:return m2;case 36296:return _2;case 35678:case 36198:case 36298:case 36306:case 35682:return g2;case 35679:case 36299:case 36307:return v2;case 35680:case 36300:case 36308:case 36293:return x2;case 36289:case 36303:case 36311:case 36292:return y2}}class M2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=t2(t.type)}}class E2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=S2(t.type)}}class T2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Bh=/(\w+)(\])?(\[|\.)?/g;function zv(n,e){n.seq.push(e),n.map[e.id]=e}function w2(n,e,t){const i=n.name,r=i.length;for(Bh.lastIndex=0;;){const s=Bh.exec(i),o=Bh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){zv(t,u===void 0?new M2(a,n,e):new E2(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new T2(a),zv(t,f)),t=f}}}class _f{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);w2(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Vv(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const A2=37297;let C2=0;function R2(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Hv=new Ze;function P2(n){ut._getMatrix(Hv,ut.workingColorSpace,n);const e=`mat3( ${Hv.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case Ad:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Gv(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+R2(n.getShaderSource(e),o)}else return r}function b2(n,e){const t=P2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function D2(n,e){let t;switch(e){case XA:t="Linear";break;case jA:t="Reinhard";break;case YA:t="Cineon";break;case $A:t="ACESFilmic";break;case KA:t="AgX";break;case ZA:t="Neutral";break;case qA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ic=new K;function L2(){ut.getLuminanceCoefficients(Ic);const n=Ic.x.toFixed(4),e=Ic.y.toFixed(4),t=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ol).join(`
`)}function I2(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function U2(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ol(n){return n!==""}function Wv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const F2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vm(n){return n.replace(F2,k2)}const O2=new Map;function k2(n,e){let t=Qe[e];if(t===void 0){const i=O2.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vm(t)}const B2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jv(n){return n.replace(B2,z2)}function z2(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yv(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function V2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bM?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===TA?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===br&&(e="SHADOWMAP_TYPE_VSM"),e}function H2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case el:case tl:e="ENVMAP_TYPE_CUBE";break;case wd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function G2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case tl:e="ENVMAP_MODE_REFRACTION";break}return e}function W2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case DM:e="ENVMAP_BLENDING_MULTIPLY";break;case GA:e="ENVMAP_BLENDING_MIX";break;case WA:e="ENVMAP_BLENDING_ADD";break}return e}function X2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function j2(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=V2(t),u=H2(t),c=G2(t),f=W2(t),h=X2(t),p=N2(t),g=I2(s),_=r.createProgram();let m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ol).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ol).join(`
`),d.length>0&&(d+=`
`)):(m=[Yv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ol).join(`
`),d=[Yv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Is?"#define TONE_MAPPING":"",t.toneMapping!==Is?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Is?D2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,b2("linearToOutputTexel",t.outputColorSpace),L2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ol).join(`
`)),o=Vm(o),o=Wv(o,t),o=Xv(o,t),a=Vm(a),a=Wv(a,t),a=Xv(a,t),o=jv(o),a=jv(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===ov?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ov?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=v+m+o,y=v+d+a,C=Vv(r,r.VERTEX_SHADER,x),w=Vv(r,r.FRAGMENT_SHADER,y);r.attachShader(_,C),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(D){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(C).trim(),j=r.getShaderInfoLog(w).trim();let Z=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,w);else{const X=Gv(r,C,"vertex"),L=Gv(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+X+`
`+L)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||j==="")&&(W=!1);W&&(D.diagnostics={runnable:Z,programLog:F,vertexShader:{log:B,prefix:m},fragmentShader:{log:j,prefix:d}})}r.deleteShader(C),r.deleteShader(w),R=new _f(r,_),M=U2(r,_)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,A2)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C2++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}let Y2=0;class $2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new q2(e),t.set(e,i)),i}}class q2{constructor(e){this.id=Y2++,this.code=e,this.usedTimes=0}}function K2(n,e,t,i,r,s,o){const a=new YM,l=new $2,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return u.add(M),M===0?"uv":`uv${M}`}function m(M,S,D,F,B){const j=F.fog,Z=B.geometry,W=M.isMeshStandardMaterial?F.environment:null,X=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),L=X&&X.mapping===wd?X.image.height:null,$=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const b=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ie=b!==void 0?b.length:0;let ye=0;Z.morphAttributes.position!==void 0&&(ye=1),Z.morphAttributes.normal!==void 0&&(ye=2),Z.morphAttributes.color!==void 0&&(ye=3);let Xe,Y,ne,fe;if($){const Se=fr[$];Xe=Se.vertexShader,Y=Se.fragmentShader}else Xe=M.vertexShader,Y=M.fragmentShader,l.update(M),ne=l.getVertexShaderID(M),fe=l.getFragmentShaderID(M);const re=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),be=B.isInstancedMesh===!0,He=B.isBatchedMesh===!0,Je=!!M.map,Ge=!!M.matcap,Ie=!!X,I=!!M.aoMap,Mt=!!M.lightMap,ke=!!M.bumpMap,z=!!M.normalMap,Re=!!M.displacementMap,st=!!M.emissiveMap,De=!!M.metalnessMap,P=!!M.roughnessMap,T=M.anisotropy>0,G=M.clearcoat>0,te=M.dispersion>0,ee=M.iridescence>0,Q=M.sheen>0,pe=M.transmission>0,ce=T&&!!M.anisotropyMap,ge=G&&!!M.clearcoatMap,Ye=G&&!!M.clearcoatNormalMap,oe=G&&!!M.clearcoatRoughnessMap,ue=ee&&!!M.iridescenceMap,Fe=ee&&!!M.iridescenceThicknessMap,Ue=Q&&!!M.sheenColorMap,Me=Q&&!!M.sheenRoughnessMap,qe=!!M.specularMap,Oe=!!M.specularColorMap,lt=!!M.specularIntensityMap,N=pe&&!!M.transmissionMap,he=pe&&!!M.thicknessMap,q=!!M.gradientMap,J=!!M.alphaMap,de=M.alphaTest>0,me=!!M.alphaHash,Be=!!M.extensions;let ft=Is;M.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ft=n.toneMapping);const Ht={shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:Xe,fragmentShader:Y,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:He,batchingColor:He&&B._colorsTexture!==null,instancing:be,instancingColor:be&&B.instanceColor!==null,instancingMorph:be&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:ul,alphaToCoverage:!!M.alphaToCoverage,map:Je,matcap:Ge,envMap:Ie,envMapMode:Ie&&X.mapping,envMapCubeUVHeight:L,aoMap:I,lightMap:Mt,bumpMap:ke,normalMap:z,displacementMap:h&&Re,emissiveMap:st,normalMapObjectSpace:z&&M.normalMapType===nC,normalMapTangentSpace:z&&M.normalMapType===tC,metalnessMap:De,roughnessMap:P,anisotropy:T,anisotropyMap:ce,clearcoat:G,clearcoatMap:ge,clearcoatNormalMap:Ye,clearcoatRoughnessMap:oe,dispersion:te,iridescence:ee,iridescenceMap:ue,iridescenceThicknessMap:Fe,sheen:Q,sheenColorMap:Ue,sheenRoughnessMap:Me,specularMap:qe,specularColorMap:Oe,specularIntensityMap:lt,transmission:pe,transmissionMap:N,thicknessMap:he,gradientMap:q,opaque:M.transparent===!1&&M.blending===Ua&&M.alphaToCoverage===!1,alphaMap:J,alphaTest:de,alphaHash:me,combine:M.combine,mapUv:Je&&_(M.map.channel),aoMapUv:I&&_(M.aoMap.channel),lightMapUv:Mt&&_(M.lightMap.channel),bumpMapUv:ke&&_(M.bumpMap.channel),normalMapUv:z&&_(M.normalMap.channel),displacementMapUv:Re&&_(M.displacementMap.channel),emissiveMapUv:st&&_(M.emissiveMap.channel),metalnessMapUv:De&&_(M.metalnessMap.channel),roughnessMapUv:P&&_(M.roughnessMap.channel),anisotropyMapUv:ce&&_(M.anisotropyMap.channel),clearcoatMapUv:ge&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(M.sheenRoughnessMap.channel),specularMapUv:qe&&_(M.specularMap.channel),specularColorMapUv:Oe&&_(M.specularColorMap.channel),specularIntensityMapUv:lt&&_(M.specularIntensityMap.channel),transmissionMapUv:N&&_(M.transmissionMap.channel),thicknessMapUv:he&&_(M.thicknessMap.channel),alphaMapUv:J&&_(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(z||T),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(Je||J),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ce,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ft,decodeVideoTexture:Je&&M.map.isVideoTexture===!0&&ut.getTransfer(M.map.colorSpace)===xt,decodeVideoTextureEmissive:st&&M.emissiveMap.isVideoTexture===!0&&ut.getTransfer(M.emissiveMap.colorSpace)===xt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ur,flipSided:M.side===oi,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Be&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&M.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ht.vertexUv1s=u.has(1),Ht.vertexUv2s=u.has(2),Ht.vertexUv3s=u.has(3),u.clear(),Ht}function d(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)S.push(D),S.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(v(S,M),x(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const S=g[M.type];let D;if(S){const F=fr[S];D=LC.clone(F.uniforms)}else D=M.uniforms;return D}function C(M,S){let D;for(let F=0,B=c.length;F<B;F++){const j=c[F];if(j.cacheKey===S){D=j,++D.usedTimes;break}}return D===void 0&&(D=new j2(n,S,M,s),c.push(D)),D}function w(M){if(--M.usedTimes===0){const S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:C,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:R}}function Z2(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Q2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $v(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function qv(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,g,_,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function a(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||Q2),i.length>1&&i.sort(h||$v),r.length>1&&r.sort(h||$v)}function c(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function J2(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new qv,n.set(i,[o])):r>=s.length?(o=new qv,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function eD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new yt};break;case"SpotLight":t={position:new K,direction:new K,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new K,halfWidth:new K,halfHeight:new K};break}return n[e.id]=t,t}}}function tD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nD=0;function iD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rD(n){const e=new eD,t=tD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new K);const r=new K,s=new tn,o=new tn;function a(u){let c=0,f=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,v=0,x=0,y=0,C=0,w=0,E=0;u.sort(iD);for(let M=0,S=u.length;M<S;M++){const D=u[M],F=D.color,B=D.intensity,j=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)c+=F.r*B,f+=F.g*B,h+=F.b*B;else if(D.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],B);E++}else if(D.isDirectionalLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const X=D.shadow,L=t.get(D);L.shadowIntensity=X.intensity,L.shadowBias=X.bias,L.shadowNormalBias=X.normalBias,L.shadowRadius=X.radius,L.shadowMapSize=X.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=D.shadow.matrix,v++}i.directional[p]=W,p++}else if(D.isSpotLight){const W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(F).multiplyScalar(B),W.distance=j,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[_]=W;const X=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,X.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[_]=X.matrix,D.castShadow){const L=t.get(D);L.shadowIntensity=X.intensity,L.shadowBias=X.bias,L.shadowNormalBias=X.normalBias,L.shadowRadius=X.radius,L.shadowMapSize=X.mapSize,i.spotShadow[_]=L,i.spotShadowMap[_]=Z,y++}_++}else if(D.isRectAreaLight){const W=e.get(D);W.color.copy(F).multiplyScalar(B),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=W,m++}else if(D.isPointLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const X=D.shadow,L=t.get(D);L.shadowIntensity=X.intensity,L.shadowBias=X.bias,L.shadowNormalBias=X.normalBias,L.shadowRadius=X.radius,L.shadowMapSize=X.mapSize,L.shadowCameraNear=X.camera.near,L.shadowCameraFar=X.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=D.shadow.matrix,x++}i.point[g]=W,g++}else if(D.isHemisphereLight){const W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(B),W.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[d]=W,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==v||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==C||R.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=v,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=C,R.numLightProbes=E,i.version=nD++)}function l(u,c){let f=0,h=0,p=0,g=0,_=0;const m=c.matrixWorldInverse;for(let d=0,v=u.length;d<v;d++){const x=u[d];if(x.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Kv(n){const e=new rD(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function sD(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Kv(n),e.set(r,[a])):s>=o.length?(a=new Kv(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class oD extends Cd{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=JA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aD extends Cd{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uD=`uniform sampler2D shadow_pass;
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
}`;function cD(n,e,t){let i=new tE;const r=new vt,s=new vt,o=new $t,a=new oD({depthPacking:eC}),l=new aD,u={},c=t.maxTextureSize,f={[zs]:oi,[oi]:zs,[Ur]:Ur},h=new Jr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:lD,fragmentShader:uD}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ho;g.setAttribute("position",new Sr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _r(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bM;let d=this.type;this.render=function(w,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Ns),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=d!==br&&this.type===br,j=d===br&&this.type!==br;for(let Z=0,W=w.length;Z<W;Z++){const X=w[Z],L=X.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const $=L.getFrameExtents();if(r.multiply($),s.copy(L.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/$.x),r.x=s.x*$.x,L.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/$.y),r.y=s.y*$.y,L.mapSize.y=s.y)),L.map===null||B===!0||j===!0){const ie=this.type!==br?{minFilter:rr,magFilter:rr}:{};L.map!==null&&L.map.dispose(),L.map=new Uo(r.x,r.y,ie),L.map.texture.name=X.name+".shadowMap",L.camera.updateProjectionMatrix()}n.setRenderTarget(L.map),n.clear();const b=L.getViewportCount();for(let ie=0;ie<b;ie++){const ye=L.getViewport(ie);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),F.viewport(o),L.updateMatrices(X,ie),i=L.getFrustum(),y(E,R,L.camera,X,this.type)}L.isPointLightShadow!==!0&&this.type===br&&v(L,R),L.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,D)};function v(w,E){const R=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Uo(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(E,null,R,h,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(E,null,R,p,_,null)}function x(w,E,R,M){let S=null;const D=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)S=D;else if(S=R.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const F=S.uuid,B=E.uuid;let j=u[F];j===void 0&&(j={},u[F]=j);let Z=j[B];Z===void 0&&(Z=S.clone(),j[B]=Z,E.addEventListener("dispose",C)),S=Z}if(S.visible=E.visible,S.wireframe=E.wireframe,M===br?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:f[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=n.properties.get(S);F.light=R}return S}function y(w,E,R,M,S){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===br)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const B=e.update(w),j=w.material;if(Array.isArray(j)){const Z=B.groups;for(let W=0,X=Z.length;W<X;W++){const L=Z[W],$=j[L.materialIndex];if($&&$.visible){const b=x(w,$,M,S);w.onBeforeShadow(n,w,E,R,B,b,L),n.renderBufferDirect(R,null,B,b,w,L),w.onAfterShadow(n,w,E,R,B,b,L)}}}else if(j.visible){const Z=x(w,j,M,S);w.onBeforeShadow(n,w,E,R,B,Z,null),n.renderBufferDirect(R,null,B,Z,w,null),w.onAfterShadow(n,w,E,R,B,Z,null)}}const F=w.children;for(let B=0,j=F.length;B<j;B++)y(F[B],E,R,M,S)}function C(w){w.target.removeEventListener("dispose",C);for(const R in u){const M=u[R],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const fD={[im]:rm,[sm]:lm,[om]:um,[Ja]:am,[rm]:im,[lm]:sm,[um]:om,[am]:Ja};function dD(n,e){function t(){let N=!1;const he=new $t;let q=null;const J=new $t(0,0,0,0);return{setMask:function(de){q!==de&&!N&&(n.colorMask(de,de,de,de),q=de)},setLocked:function(de){N=de},setClear:function(de,me,Be,ft,Ht){Ht===!0&&(de*=ft,me*=ft,Be*=ft),he.set(de,me,Be,ft),J.equals(he)===!1&&(n.clearColor(de,me,Be,ft),J.copy(he))},reset:function(){N=!1,q=null,J.set(-1,0,0,0)}}}function i(){let N=!1,he=!1,q=null,J=null,de=null;return{setReversed:function(me){if(he!==me){const Be=e.get("EXT_clip_control");he?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const ft=de;de=null,this.setClear(ft)}he=me},getReversed:function(){return he},setTest:function(me){me?re(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(me){q!==me&&!N&&(n.depthMask(me),q=me)},setFunc:function(me){if(he&&(me=fD[me]),J!==me){switch(me){case im:n.depthFunc(n.NEVER);break;case rm:n.depthFunc(n.ALWAYS);break;case sm:n.depthFunc(n.LESS);break;case Ja:n.depthFunc(n.LEQUAL);break;case om:n.depthFunc(n.EQUAL);break;case am:n.depthFunc(n.GEQUAL);break;case lm:n.depthFunc(n.GREATER);break;case um:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=me}},setLocked:function(me){N=me},setClear:function(me){de!==me&&(he&&(me=1-me),n.clearDepth(me),de=me)},reset:function(){N=!1,q=null,J=null,de=null,he=!1}}}function r(){let N=!1,he=null,q=null,J=null,de=null,me=null,Be=null,ft=null,Ht=null;return{setTest:function(Se){N||(Se?re(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(Se){he!==Se&&!N&&(n.stencilMask(Se),he=Se)},setFunc:function(Se,Pe,Ke){(q!==Se||J!==Pe||de!==Ke)&&(n.stencilFunc(Se,Pe,Ke),q=Se,J=Pe,de=Ke)},setOp:function(Se,Pe,Ke){(me!==Se||Be!==Pe||ft!==Ke)&&(n.stencilOp(Se,Pe,Ke),me=Se,Be=Pe,ft=Ke)},setLocked:function(Se){N=Se},setClear:function(Se){Ht!==Se&&(n.clearStencil(Se),Ht=Se)},reset:function(){N=!1,he=null,q=null,J=null,de=null,me=null,Be=null,ft=null,Ht=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,v=null,x=null,y=null,C=null,w=null,E=new yt(0,0,0),R=0,M=!1,S=null,D=null,F=null,B=null,j=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const L=n.getParameter(n.VERSION);L.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(L)[1]),W=X>=1):L.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),W=X>=2);let $=null,b={};const ie=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),Xe=new $t().fromArray(ie),Y=new $t().fromArray(ye);function ne(N,he,q,J){const de=new Uint8Array(4),me=n.createTexture();n.bindTexture(N,me),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<q;Be++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(he+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return me}const fe={};fe[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(n.DEPTH_TEST),o.setFunc(Ja),ke(!1),z(ev),re(n.CULL_FACE),I(Ns);function re(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function Ce(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function be(N,he){return f[N]!==he?(n.bindFramebuffer(N,he),f[N]=he,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=he),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=he),!0):!1}function He(N,he){let q=p,J=!1;if(N){q=h.get(he),q===void 0&&(q=[],h.set(he,q));const de=N.textures;if(q.length!==de.length||q[0]!==n.COLOR_ATTACHMENT0){for(let me=0,Be=de.length;me<Be;me++)q[me]=n.COLOR_ATTACHMENT0+me;q.length=de.length,J=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,J=!0);J&&n.drawBuffers(q)}function Je(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const Ge={[ao]:n.FUNC_ADD,[AA]:n.FUNC_SUBTRACT,[CA]:n.FUNC_REVERSE_SUBTRACT};Ge[RA]=n.MIN,Ge[PA]=n.MAX;const Ie={[bA]:n.ZERO,[DA]:n.ONE,[LA]:n.SRC_COLOR,[tm]:n.SRC_ALPHA,[kA]:n.SRC_ALPHA_SATURATE,[FA]:n.DST_COLOR,[IA]:n.DST_ALPHA,[NA]:n.ONE_MINUS_SRC_COLOR,[nm]:n.ONE_MINUS_SRC_ALPHA,[OA]:n.ONE_MINUS_DST_COLOR,[UA]:n.ONE_MINUS_DST_ALPHA,[BA]:n.CONSTANT_COLOR,[zA]:n.ONE_MINUS_CONSTANT_COLOR,[VA]:n.CONSTANT_ALPHA,[HA]:n.ONE_MINUS_CONSTANT_ALPHA};function I(N,he,q,J,de,me,Be,ft,Ht,Se){if(N===Ns){_===!0&&(Ce(n.BLEND),_=!1);return}if(_===!1&&(re(n.BLEND),_=!0),N!==wA){if(N!==m||Se!==M){if((d!==ao||y!==ao)&&(n.blendEquation(n.FUNC_ADD),d=ao,y=ao),Se)switch(N){case Ua:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tv:n.blendFunc(n.ONE,n.ONE);break;case nv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case iv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ua:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tv:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case nv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case iv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,x=null,C=null,w=null,E.set(0,0,0),R=0,m=N,M=Se}return}de=de||he,me=me||q,Be=Be||J,(he!==d||de!==y)&&(n.blendEquationSeparate(Ge[he],Ge[de]),d=he,y=de),(q!==v||J!==x||me!==C||Be!==w)&&(n.blendFuncSeparate(Ie[q],Ie[J],Ie[me],Ie[Be]),v=q,x=J,C=me,w=Be),(ft.equals(E)===!1||Ht!==R)&&(n.blendColor(ft.r,ft.g,ft.b,Ht),E.copy(ft),R=Ht),m=N,M=!1}function Mt(N,he){N.side===Ur?Ce(n.CULL_FACE):re(n.CULL_FACE);let q=N.side===oi;he&&(q=!q),ke(q),N.blending===Ua&&N.transparent===!1?I(Ns):I(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const J=N.stencilWrite;a.setTest(J),J&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),st(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(N){S!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),S=N)}function z(N){N!==MA?(re(n.CULL_FACE),N!==D&&(N===ev?n.cullFace(n.BACK):N===EA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),D=N}function Re(N){N!==F&&(W&&n.lineWidth(N),F=N)}function st(N,he,q){N?(re(n.POLYGON_OFFSET_FILL),(B!==he||j!==q)&&(n.polygonOffset(he,q),B=he,j=q)):Ce(n.POLYGON_OFFSET_FILL)}function De(N){N?re(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function P(N){N===void 0&&(N=n.TEXTURE0+Z-1),$!==N&&(n.activeTexture(N),$=N)}function T(N,he,q){q===void 0&&($===null?q=n.TEXTURE0+Z-1:q=$);let J=b[q];J===void 0&&(J={type:void 0,texture:void 0},b[q]=J),(J.type!==N||J.texture!==he)&&($!==q&&(n.activeTexture(q),$=q),n.bindTexture(N,he||fe[N]),J.type=N,J.texture=he)}function G(){const N=b[$];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function te(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ye(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(N){Xe.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Xe.copy(N))}function Me(N){Y.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Y.copy(N))}function qe(N,he){let q=u.get(he);q===void 0&&(q=new WeakMap,u.set(he,q));let J=q.get(N);J===void 0&&(J=n.getUniformBlockIndex(he,N.name),q.set(N,J))}function Oe(N,he){const J=u.get(he).get(N);l.get(he)!==J&&(n.uniformBlockBinding(he,J,N.__bindingPointIndex),l.set(he,J))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},$=null,b={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,v=null,x=null,y=null,C=null,w=null,E=new yt(0,0,0),R=0,M=!1,S=null,D=null,F=null,B=null,j=null,Xe.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:Ce,bindFramebuffer:be,drawBuffers:He,useProgram:Je,setBlending:I,setMaterial:Mt,setFlipSided:ke,setCullFace:z,setLineWidth:Re,setPolygonOffset:st,setScissorTest:De,activeTexture:P,bindTexture:T,unbindTexture:G,compressedTexImage2D:te,compressedTexImage3D:ee,texImage2D:ue,texImage3D:Fe,updateUBOMapping:qe,uniformBlockBinding:Oe,texStorage2D:Ye,texStorage3D:oe,texSubImage2D:Q,texSubImage3D:pe,compressedTexSubImage2D:ce,compressedTexSubImage3D:ge,scissor:Ue,viewport:Me,reset:lt}}function Zv(n,e,t,i){const r=hD(i);switch(t){case FM:return n*e;case kM:return n*e;case BM:return n*e*2;case zM:return n*e/r.components*r.byteLength;case mg:return n*e/r.components*r.byteLength;case VM:return n*e*2/r.components*r.byteLength;case _g:return n*e*2/r.components*r.byteLength;case OM:return n*e*3/r.components*r.byteLength;case tr:return n*e*4/r.components*r.byteLength;case gg:return n*e*4/r.components*r.byteLength;case ff:case df:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hf:case pf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mm:case gm:return Math.max(n,16)*Math.max(e,8)/4;case pm:case _m:return Math.max(n,8)*Math.max(e,8)/2;case vm:case xm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ym:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mm:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Em:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Tm:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case wm:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Am:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Cm:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Rm:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Pm:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bm:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Dm:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Lm:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Nm:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Im:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case mf:case Um:case Fm:return Math.ceil(n/4)*Math.ceil(e/4)*16;case HM:case Om:return Math.ceil(n/4)*Math.ceil(e/4)*8;case km:case Bm:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hD(n){switch(n){case Zr:case NM:return{byteLength:1,components:1};case Iu:case IM:case Wu:return{byteLength:2,components:1};case hg:case pg:return{byteLength:2,components:4};case Io:case dg:case Br:return{byteLength:4,components:1};case UM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function pD(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new vt,c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return p?new OffscreenCanvas(P,T):Uu("canvas")}function _(P,T,G){let te=1;const ee=De(P);if((ee.width>G||ee.height>G)&&(te=G/Math.max(ee.width,ee.height)),te<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Q=Math.floor(te*ee.width),pe=Math.floor(te*ee.height);f===void 0&&(f=g(Q,pe));const ce=T?g(Q,pe):f;return ce.width=Q,ce.height=pe,ce.getContext("2d").drawImage(P,0,0,Q,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Q+"x"+pe+")."),ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),P;return P}function m(P){return P.generateMipmaps}function d(P){n.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(P,T,G,te,ee=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=T;if(T===n.RED&&(G===n.FLOAT&&(Q=n.R32F),G===n.HALF_FLOAT&&(Q=n.R16F),G===n.UNSIGNED_BYTE&&(Q=n.R8)),T===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.R8UI),G===n.UNSIGNED_SHORT&&(Q=n.R16UI),G===n.UNSIGNED_INT&&(Q=n.R32UI),G===n.BYTE&&(Q=n.R8I),G===n.SHORT&&(Q=n.R16I),G===n.INT&&(Q=n.R32I)),T===n.RG&&(G===n.FLOAT&&(Q=n.RG32F),G===n.HALF_FLOAT&&(Q=n.RG16F),G===n.UNSIGNED_BYTE&&(Q=n.RG8)),T===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RG8UI),G===n.UNSIGNED_SHORT&&(Q=n.RG16UI),G===n.UNSIGNED_INT&&(Q=n.RG32UI),G===n.BYTE&&(Q=n.RG8I),G===n.SHORT&&(Q=n.RG16I),G===n.INT&&(Q=n.RG32I)),T===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),G===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),G===n.UNSIGNED_INT&&(Q=n.RGB32UI),G===n.BYTE&&(Q=n.RGB8I),G===n.SHORT&&(Q=n.RGB16I),G===n.INT&&(Q=n.RGB32I)),T===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),G===n.UNSIGNED_INT&&(Q=n.RGBA32UI),G===n.BYTE&&(Q=n.RGBA8I),G===n.SHORT&&(Q=n.RGBA16I),G===n.INT&&(Q=n.RGBA32I)),T===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),T===n.RGBA){const pe=ee?Ad:ut.getTransfer(te);G===n.FLOAT&&(Q=n.RGBA32F),G===n.HALF_FLOAT&&(Q=n.RGBA16F),G===n.UNSIGNED_BYTE&&(Q=pe===xt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(P,T){let G;return P?T===null||T===Io||T===nl?G=n.DEPTH24_STENCIL8:T===Br?G=n.DEPTH32F_STENCIL8:T===Iu&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Io||T===nl?G=n.DEPTH_COMPONENT24:T===Br?G=n.DEPTH_COMPONENT32F:T===Iu&&(G=n.DEPTH_COMPONENT16),G}function C(P,T){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==rr&&P.minFilter!==mr?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function w(P){const T=P.target;T.removeEventListener("dispose",w),R(T),T.isVideoTexture&&c.delete(T)}function E(P){const T=P.target;T.removeEventListener("dispose",E),S(T)}function R(P){const T=i.get(P);if(T.__webglInit===void 0)return;const G=P.source,te=h.get(G);if(te){const ee=te[T.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(P),Object.keys(te).length===0&&h.delete(G)}i.remove(P)}function M(P){const T=i.get(P);n.deleteTexture(T.__webglTexture);const G=P.source,te=h.get(G);delete te[T.__cacheKey],o.memory.textures--}function S(P){const T=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(T.__webglFramebuffer[te]))for(let ee=0;ee<T.__webglFramebuffer[te].length;ee++)n.deleteFramebuffer(T.__webglFramebuffer[te][ee]);else n.deleteFramebuffer(T.__webglFramebuffer[te]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[te])}else{if(Array.isArray(T.__webglFramebuffer))for(let te=0;te<T.__webglFramebuffer.length;te++)n.deleteFramebuffer(T.__webglFramebuffer[te]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let te=0;te<T.__webglColorRenderbuffer.length;te++)T.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[te]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const G=P.textures;for(let te=0,ee=G.length;te<ee;te++){const Q=i.get(G[te]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(G[te])}i.remove(P)}let D=0;function F(){D=0}function B(){const P=D;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),D+=1,P}function j(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function Z(P,T){const G=i.get(P);if(P.isVideoTexture&&Re(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const te=P.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(G,P,T);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+T)}function W(P,T){const G=i.get(P);if(P.version>0&&G.__version!==P.version){Y(G,P,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+T)}function X(P,T){const G=i.get(P);if(P.version>0&&G.__version!==P.version){Y(G,P,T);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+T)}function L(P,T){const G=i.get(P);if(P.version>0&&G.__version!==P.version){ne(G,P,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+T)}const $={[dm]:n.REPEAT,[po]:n.CLAMP_TO_EDGE,[hm]:n.MIRRORED_REPEAT},b={[rr]:n.NEAREST,[QA]:n.NEAREST_MIPMAP_NEAREST,[pc]:n.NEAREST_MIPMAP_LINEAR,[mr]:n.LINEAR,[fh]:n.LINEAR_MIPMAP_NEAREST,[mo]:n.LINEAR_MIPMAP_LINEAR},ie={[iC]:n.NEVER,[uC]:n.ALWAYS,[rC]:n.LESS,[GM]:n.LEQUAL,[sC]:n.EQUAL,[lC]:n.GEQUAL,[oC]:n.GREATER,[aC]:n.NOTEQUAL};function ye(P,T){if(T.type===Br&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===mr||T.magFilter===fh||T.magFilter===pc||T.magFilter===mo||T.minFilter===mr||T.minFilter===fh||T.minFilter===pc||T.minFilter===mo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,$[T.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,$[T.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,$[T.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,b[T.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,b[T.minFilter]),T.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ie[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===rr||T.minFilter!==pc&&T.minFilter!==mo||T.type===Br&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Xe(P,T){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",w));const te=T.source;let ee=h.get(te);ee===void 0&&(ee={},h.set(te,ee));const Q=j(T);if(Q!==P.__cacheKey){ee[Q]===void 0&&(ee[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ee[Q].usedTimes++;const pe=ee[P.__cacheKey];pe!==void 0&&(ee[P.__cacheKey].usedTimes--,pe.usedTimes===0&&M(T)),P.__cacheKey=Q,P.__webglTexture=ee[Q].texture}return G}function Y(P,T,G){let te=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(te=n.TEXTURE_3D);const ee=Xe(P,T),Q=T.source;t.bindTexture(te,P.__webglTexture,n.TEXTURE0+G);const pe=i.get(Q);if(Q.version!==pe.__version||ee===!0){t.activeTexture(n.TEXTURE0+G);const ce=ut.getPrimaries(ut.workingColorSpace),ge=T.colorSpace===ms?null:ut.getPrimaries(T.colorSpace),Ye=T.colorSpace===ms||ce===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let oe=_(T.image,!1,r.maxTextureSize);oe=st(T,oe);const ue=s.convert(T.format,T.colorSpace),Fe=s.convert(T.type);let Ue=x(T.internalFormat,ue,Fe,T.colorSpace,T.isVideoTexture);ye(te,T);let Me;const qe=T.mipmaps,Oe=T.isVideoTexture!==!0,lt=pe.__version===void 0||ee===!0,N=Q.dataReady,he=C(T,oe);if(T.isDepthTexture)Ue=y(T.format===il,T.type),lt&&(Oe?t.texStorage2D(n.TEXTURE_2D,1,Ue,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Ue,oe.width,oe.height,0,ue,Fe,null));else if(T.isDataTexture)if(qe.length>0){Oe&&lt&&t.texStorage2D(n.TEXTURE_2D,he,Ue,qe[0].width,qe[0].height);for(let q=0,J=qe.length;q<J;q++)Me=qe[q],Oe?N&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Me.width,Me.height,ue,Fe,Me.data):t.texImage2D(n.TEXTURE_2D,q,Ue,Me.width,Me.height,0,ue,Fe,Me.data);T.generateMipmaps=!1}else Oe?(lt&&t.texStorage2D(n.TEXTURE_2D,he,Ue,oe.width,oe.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,ue,Fe,oe.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,oe.width,oe.height,0,ue,Fe,oe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Oe&&lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ue,qe[0].width,qe[0].height,oe.depth);for(let q=0,J=qe.length;q<J;q++)if(Me=qe[q],T.format!==tr)if(ue!==null)if(Oe){if(N)if(T.layerUpdates.size>0){const de=Zv(Me.width,Me.height,T.format,T.type);for(const me of T.layerUpdates){const Be=Me.data.subarray(me*de/Me.data.BYTES_PER_ELEMENT,(me+1)*de/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,me,Me.width,Me.height,1,ue,Be)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Me.width,Me.height,oe.depth,ue,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Ue,Me.width,Me.height,oe.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Me.width,Me.height,oe.depth,ue,Fe,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,Ue,Me.width,Me.height,oe.depth,0,ue,Fe,Me.data)}else{Oe&&lt&&t.texStorage2D(n.TEXTURE_2D,he,Ue,qe[0].width,qe[0].height);for(let q=0,J=qe.length;q<J;q++)Me=qe[q],T.format!==tr?ue!==null?Oe?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,Me.width,Me.height,ue,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,q,Ue,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?N&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Me.width,Me.height,ue,Fe,Me.data):t.texImage2D(n.TEXTURE_2D,q,Ue,Me.width,Me.height,0,ue,Fe,Me.data)}else if(T.isDataArrayTexture)if(Oe){if(lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ue,oe.width,oe.height,oe.depth),N)if(T.layerUpdates.size>0){const q=Zv(oe.width,oe.height,T.format,T.type);for(const J of T.layerUpdates){const de=oe.data.subarray(J*q/oe.data.BYTES_PER_ELEMENT,(J+1)*q/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,oe.width,oe.height,1,ue,Fe,de)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ue,Fe,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,oe.width,oe.height,oe.depth,0,ue,Fe,oe.data);else if(T.isData3DTexture)Oe?(lt&&t.texStorage3D(n.TEXTURE_3D,he,Ue,oe.width,oe.height,oe.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ue,Fe,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,oe.width,oe.height,oe.depth,0,ue,Fe,oe.data);else if(T.isFramebufferTexture){if(lt)if(Oe)t.texStorage2D(n.TEXTURE_2D,he,Ue,oe.width,oe.height);else{let q=oe.width,J=oe.height;for(let de=0;de<he;de++)t.texImage2D(n.TEXTURE_2D,de,Ue,q,J,0,ue,Fe,null),q>>=1,J>>=1}}else if(qe.length>0){if(Oe&&lt){const q=De(qe[0]);t.texStorage2D(n.TEXTURE_2D,he,Ue,q.width,q.height)}for(let q=0,J=qe.length;q<J;q++)Me=qe[q],Oe?N&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,ue,Fe,Me):t.texImage2D(n.TEXTURE_2D,q,Ue,ue,Fe,Me);T.generateMipmaps=!1}else if(Oe){if(lt){const q=De(oe);t.texStorage2D(n.TEXTURE_2D,he,Ue,q.width,q.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,Fe,oe)}else t.texImage2D(n.TEXTURE_2D,0,Ue,ue,Fe,oe);m(T)&&d(te),pe.__version=Q.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ne(P,T,G){if(T.image.length!==6)return;const te=Xe(P,T),ee=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+G);const Q=i.get(ee);if(ee.version!==Q.__version||te===!0){t.activeTexture(n.TEXTURE0+G);const pe=ut.getPrimaries(ut.workingColorSpace),ce=T.colorSpace===ms?null:ut.getPrimaries(T.colorSpace),ge=T.colorSpace===ms||pe===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ye=T.isCompressedTexture||T.image[0].isCompressedTexture,oe=T.image[0]&&T.image[0].isDataTexture,ue=[];for(let J=0;J<6;J++)!Ye&&!oe?ue[J]=_(T.image[J],!0,r.maxCubemapSize):ue[J]=oe?T.image[J].image:T.image[J],ue[J]=st(T,ue[J]);const Fe=ue[0],Ue=s.convert(T.format,T.colorSpace),Me=s.convert(T.type),qe=x(T.internalFormat,Ue,Me,T.colorSpace),Oe=T.isVideoTexture!==!0,lt=Q.__version===void 0||te===!0,N=ee.dataReady;let he=C(T,Fe);ye(n.TEXTURE_CUBE_MAP,T);let q;if(Ye){Oe&&lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,qe,Fe.width,Fe.height);for(let J=0;J<6;J++){q=ue[J].mipmaps;for(let de=0;de<q.length;de++){const me=q[de];T.format!==tr?Ue!==null?Oe?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,me.width,me.height,Ue,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,qe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,me.width,me.height,Ue,Me,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,qe,me.width,me.height,0,Ue,Me,me.data)}}}else{if(q=T.mipmaps,Oe&&lt){q.length>0&&he++;const J=De(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,qe,J.width,J.height)}for(let J=0;J<6;J++)if(oe){Oe?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ue[J].width,ue[J].height,Ue,Me,ue[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,ue[J].width,ue[J].height,0,Ue,Me,ue[J].data);for(let de=0;de<q.length;de++){const Be=q[de].image[J].image;Oe?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Be.width,Be.height,Ue,Me,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,qe,Be.width,Be.height,0,Ue,Me,Be.data)}}else{Oe?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ue,Me,ue[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,Ue,Me,ue[J]);for(let de=0;de<q.length;de++){const me=q[de];Oe?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Ue,Me,me.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,qe,Ue,Me,me.image[J])}}}m(T)&&d(n.TEXTURE_CUBE_MAP),Q.__version=ee.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function fe(P,T,G,te,ee,Q){const pe=s.convert(G.format,G.colorSpace),ce=s.convert(G.type),ge=x(G.internalFormat,pe,ce,G.colorSpace),Ye=i.get(T),oe=i.get(G);if(oe.__renderTarget=T,!Ye.__hasExternalTextures){const ue=Math.max(1,T.width>>Q),Fe=Math.max(1,T.height>>Q);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,Q,ge,ue,Fe,T.depth,0,pe,ce,null):t.texImage2D(ee,Q,ge,ue,Fe,0,pe,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),z(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,ee,oe.__webglTexture,0,ke(T)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,ee,oe.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(P,T,G){if(n.bindRenderbuffer(n.RENDERBUFFER,P),T.depthBuffer){const te=T.depthTexture,ee=te&&te.isDepthTexture?te.type:null,Q=y(T.stencilBuffer,ee),pe=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=ke(T);z(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,Q,T.width,T.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,Q,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Q,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,P)}else{const te=T.textures;for(let ee=0;ee<te.length;ee++){const Q=te[ee],pe=s.convert(Q.format,Q.colorSpace),ce=s.convert(Q.type),ge=x(Q.internalFormat,pe,ce,Q.colorSpace),Ye=ke(T);G&&z(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,ge,T.width,T.height):z(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye,ge,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ge,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(T.depthTexture);te.__renderTarget=T,(!te.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Z(T.depthTexture,0);const ee=te.__webglTexture,Q=ke(T);if(T.depthTexture.format===Fa)z(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(T.depthTexture.format===il)z(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function be(P){const T=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const te=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),te){const ee=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,te.removeEventListener("dispose",ee)};te.addEventListener("dispose",ee),T.__depthDisposeCallback=ee}T.__boundDepthTexture=te}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ce(T.__webglFramebuffer,P)}else if(G){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]===void 0)T.__webglDepthbuffer[te]=n.createRenderbuffer(),re(T.__webglDepthbuffer[te],P,!1);else{const ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),re(T.__webglDepthbuffer,P,!1);else{const te=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(P,T,G){const te=i.get(P);T!==void 0&&fe(te.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&be(P)}function Je(P){const T=P.texture,G=i.get(P),te=i.get(T);P.addEventListener("dispose",E);const ee=P.textures,Q=P.isWebGLCubeRenderTarget===!0,pe=ee.length>1;if(pe||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=T.version,o.memory.textures++),Q){G.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[ce]=[];for(let ge=0;ge<T.mipmaps.length;ge++)G.__webglFramebuffer[ce][ge]=n.createFramebuffer()}else G.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let ce=0;ce<T.mipmaps.length;ce++)G.__webglFramebuffer[ce]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(pe)for(let ce=0,ge=ee.length;ce<ge;ce++){const Ye=i.get(ee[ce]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&z(P)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ce=0;ce<ee.length;ce++){const ge=ee[ce];G.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[ce]);const Ye=s.convert(ge.format,ge.colorSpace),oe=s.convert(ge.type),ue=x(ge.internalFormat,Ye,oe,ge.colorSpace,P.isXRRenderTarget===!0),Fe=ke(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,ue,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,G.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),re(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),ye(n.TEXTURE_CUBE_MAP,T);for(let ce=0;ce<6;ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)fe(G.__webglFramebuffer[ce][ge],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ge);else fe(G.__webglFramebuffer[ce],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(T)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let ce=0,ge=ee.length;ce<ge;ce++){const Ye=ee[ce],oe=i.get(Ye);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),ye(n.TEXTURE_2D,Ye),fe(G.__webglFramebuffer,P,Ye,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(Ye)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,te.__webglTexture),ye(ce,T),T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)fe(G.__webglFramebuffer[ge],P,T,n.COLOR_ATTACHMENT0,ce,ge);else fe(G.__webglFramebuffer,P,T,n.COLOR_ATTACHMENT0,ce,0);m(T)&&d(ce),t.unbindTexture()}P.depthBuffer&&be(P)}function Ge(P){const T=P.textures;for(let G=0,te=T.length;G<te;G++){const ee=T[G];if(m(ee)){const Q=v(P),pe=i.get(ee).__webglTexture;t.bindTexture(Q,pe),d(Q),t.unbindTexture()}}}const Ie=[],I=[];function Mt(P){if(P.samples>0){if(z(P)===!1){const T=P.textures,G=P.width,te=P.height;let ee=n.COLOR_BUFFER_BIT;const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(P),ce=T.length>1;if(ce)for(let ge=0;ge<T.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ge=0;ge<T.length;ge++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const Ye=i.get(T[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,G,te,0,0,G,te,ee,n.NEAREST),l===!0&&(Ie.length=0,I.length=0,Ie.push(n.COLOR_ATTACHMENT0+ge),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ie.push(Q),I.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ie))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let ge=0;ge<T.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const Ye=i.get(T[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const T=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function ke(P){return Math.min(r.maxSamples,P.samples)}function z(P){const T=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Re(P){const T=o.render.frame;c.get(P)!==T&&(c.set(P,T),P.update())}function st(P,T){const G=P.colorSpace,te=P.format,ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==ul&&G!==ms&&(ut.getTransfer(G)===xt?(te!==tr||ee!==Zr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}function De(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=X,this.setTextureCube=L,this.rebindTextures=He,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=z}function mD(n,e){function t(i,r=ms){let s;const o=ut.getTransfer(r);if(i===Zr)return n.UNSIGNED_BYTE;if(i===hg)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pg)return n.UNSIGNED_SHORT_5_5_5_1;if(i===UM)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===NM)return n.BYTE;if(i===IM)return n.SHORT;if(i===Iu)return n.UNSIGNED_SHORT;if(i===dg)return n.INT;if(i===Io)return n.UNSIGNED_INT;if(i===Br)return n.FLOAT;if(i===Wu)return n.HALF_FLOAT;if(i===FM)return n.ALPHA;if(i===OM)return n.RGB;if(i===tr)return n.RGBA;if(i===kM)return n.LUMINANCE;if(i===BM)return n.LUMINANCE_ALPHA;if(i===Fa)return n.DEPTH_COMPONENT;if(i===il)return n.DEPTH_STENCIL;if(i===zM)return n.RED;if(i===mg)return n.RED_INTEGER;if(i===VM)return n.RG;if(i===_g)return n.RG_INTEGER;if(i===gg)return n.RGBA_INTEGER;if(i===ff||i===df||i===hf||i===pf)if(o===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ff)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===df)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ff)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===df)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pm||i===mm||i===_m||i===gm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===pm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_m)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vm||i===xm||i===ym)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vm||i===xm)return o===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ym)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sm||i===Mm||i===Em||i===Tm||i===wm||i===Am||i===Cm||i===Rm||i===Pm||i===bm||i===Dm||i===Lm||i===Nm||i===Im)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Sm)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mm)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Em)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tm)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wm)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Am)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cm)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rm)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pm)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bm)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dm)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lm)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nm)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Im)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mf||i===Um||i===Fm)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===mf)return o===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Um)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fm)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===HM||i===Om||i===km||i===Bm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===mf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Om)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===km)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class _D extends Ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Uc extends Mi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gD={type:"move"};class zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&h>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gD)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Uc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const vD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xD=`
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

}`;class yD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Xn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Jr({vertexShader:vD,fragmentShader:xD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _r(new qu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SD extends cl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,g=null;const _=new yD,m=t.getContextAttributes();let d=null,v=null;const x=[],y=[],C=new vt;let w=null;const E=new Ni;E.viewport=new $t;const R=new Ni;R.viewport=new $t;const M=[E,R],S=new _D;let D=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=x[Y];return ne===void 0&&(ne=new zh,x[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=x[Y];return ne===void 0&&(ne=new zh,x[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=x[Y];return ne===void 0&&(ne=new zh,x[Y]=ne),ne.getHandSpace()};function B(Y){const ne=y.indexOf(Y.inputSource);if(ne===-1)return;const fe=x[ne];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,u||o),fe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function j(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<x.length;Y++){const ne=y[Y];ne!==null&&(y[Y]=null,x[Y].disconnect(ne))}D=null,F=null,_.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,v=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",j),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Uo(p.framebufferWidth,p.framebufferHeight,{format:tr,type:Zr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,fe=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?il:Fa,fe=m.stencil?nl:Io);const Ce={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ce),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Uo(h.textureWidth,h.textureHeight,{format:tr,type:Zr,depthTexture:new iE(h.textureWidth,h.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(Y){for(let ne=0;ne<Y.removed.length;ne++){const fe=Y.removed[ne],re=y.indexOf(fe);re>=0&&(y[re]=null,x[re].disconnect(fe))}for(let ne=0;ne<Y.added.length;ne++){const fe=Y.added[ne];let re=y.indexOf(fe);if(re===-1){for(let be=0;be<x.length;be++)if(be>=y.length){y.push(fe),re=be;break}else if(y[be]===null){y[be]=fe,re=be;break}if(re===-1)break}const Ce=x[re];Ce&&Ce.connect(fe)}}const W=new K,X=new K;function L(Y,ne,fe){W.setFromMatrixPosition(ne.matrixWorld),X.setFromMatrixPosition(fe.matrixWorld);const re=W.distanceTo(X),Ce=ne.projectionMatrix.elements,be=fe.projectionMatrix.elements,He=Ce[14]/(Ce[10]-1),Je=Ce[14]/(Ce[10]+1),Ge=(Ce[9]+1)/Ce[5],Ie=(Ce[9]-1)/Ce[5],I=(Ce[8]-1)/Ce[0],Mt=(be[8]+1)/be[0],ke=He*I,z=He*Mt,Re=re/(-I+Mt),st=Re*-I;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(st),Y.translateZ(Re),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ce[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const De=He+Re,P=Je+Re,T=ke-st,G=z+(re-st),te=Ge*Je/P*De,ee=Ie*Je/P*De;Y.projectionMatrix.makePerspective(T,G,te,ee,De,P),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function $(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ne=Y.near,fe=Y.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(fe=_.depthFar)),S.near=R.near=E.near=ne,S.far=R.far=E.far=fe,(D!==S.near||F!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,F=S.far),E.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,S.layers.mask=E.layers.mask|R.layers.mask;const re=Y.parent,Ce=S.cameras;$(S,re);for(let be=0;be<Ce.length;be++)$(Ce[be],re);Ce.length===2?L(S,E,R):S.projectionMatrix.copy(E.projectionMatrix),b(Y,S,re)};function b(Y,ne,fe){fe===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=zm*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let ie=null;function ye(Y,ne){if(c=ne.getViewerPose(u||o),g=ne,c!==null){const fe=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let re=!1;fe.length!==S.cameras.length&&(S.cameras.length=0,re=!0);for(let be=0;be<fe.length;be++){const He=fe[be];let Je=null;if(p!==null)Je=p.getViewport(He);else{const Ie=f.getViewSubImage(h,He);Je=Ie.viewport,be===0&&(e.setRenderTargetTextures(v,Ie.colorTexture,h.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(v))}let Ge=M[be];Ge===void 0&&(Ge=new Ni,Ge.layers.enable(be),Ge.viewport=new $t,M[be]=Ge),Ge.matrix.fromArray(He.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(He.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Je.x,Je.y,Je.width,Je.height),be===0&&(S.matrix.copy(Ge.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),re===!0&&S.cameras.push(Ge)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const be=f.getDepthInformation(fe[0]);be&&be.isValid&&be.texture&&_.init(e,be,r.renderState)}}for(let fe=0;fe<x.length;fe++){const re=y[fe],Ce=x[fe];re!==null&&Ce!==void 0&&Ce.update(re,ne,u||o)}ie&&ie(Y,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Xe=new nE;Xe.setAnimationLoop(ye),this.setAnimationLoop=function(Y){ie=Y},this.dispose=function(){}}}const Js=new Qr,MD=new tn;function ED(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,QM(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,x):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===oi&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===oi&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,Js.copy(y),Js.x*=-1,Js.y*=-1,Js.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Js.y*=-1,Js.z*=-1),m.envMapRotation.value.setFromMatrix4(MD.makeRotationFromEuler(Js)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===oi&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function TD(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(g(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(v,C);const w=e.render.frame;s[v.id]!==w&&(h(v),s[v.id]=w)}function c(v){const x=f();v.__bindingPointIndex=x;const y=n.createBuffer(),C=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=r[v.id],y=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,E=y.length;w<E;w++){const R=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,S=R.length;M<S;M++){const D=R[M];if(p(D,w,M,C)===!0){const F=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let j=0;for(let Z=0;Z<B.length;Z++){const W=B[Z],X=_(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,F+j,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,j),j+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,y,C){const w=v.value,E=x+"_"+y;if(C[E]===void 0)return typeof w=="number"||typeof w=="boolean"?C[E]=w:C[E]=w.clone(),!0;{const R=C[E];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return C[E]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(v){const x=v.uniforms;let y=0;const C=16;for(let E=0,R=x.length;E<R;E++){const M=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,D=M.length;S<D;S++){const F=M[S],B=Array.isArray(F.value)?F.value:[F.value];for(let j=0,Z=B.length;j<Z;j++){const W=B[j],X=_(W),L=y%C,$=L%X.boundary,b=L+$;y+=$,b!==0&&C-b<X.storage&&(y+=C-b),F.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=X.storage}}}const w=y%C;return w>0&&(y+=C-w),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class wD{constructor(e={}){const{canvas:t=fC(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bi,this.toneMapping=Is,this.toneMappingExposure=1;const y=this;let C=!1,w=0,E=0,R=null,M=-1,S=null;const D=new $t,F=new $t;let B=null;const j=new yt(0);let Z=0,W=t.width,X=t.height,L=1,$=null,b=null;const ie=new $t(0,0,W,X),ye=new $t(0,0,W,X);let Xe=!1;const Y=new tE;let ne=!1,fe=!1;const re=new tn,Ce=new tn,be=new K,He=new $t,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function Ie(){return R===null?L:1}let I=i;function Mt(A,U){return t.getContext(A,U)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fg}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",me,!1),I===null){const U="webgl2";if(I=Mt(U,A),I===null)throw Mt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ke,z,Re,st,De,P,T,G,te,ee,Q,pe,ce,ge,Ye,oe,ue,Fe,Ue,Me,qe,Oe,lt,N;function he(){ke=new bb(I),ke.init(),Oe=new mD(I,ke),z=new Eb(I,ke,e,Oe),Re=new dD(I,ke),z.reverseDepthBuffer&&h&&Re.buffers.depth.setReversed(!0),st=new Nb(I),De=new Z2,P=new pD(I,ke,Re,De,z,Oe,st),T=new wb(y),G=new Pb(y),te=new BC(I),lt=new Sb(I,te),ee=new Db(I,te,st,lt),Q=new Ub(I,ee,te,st),Ue=new Ib(I,z,P),oe=new Tb(De),pe=new K2(y,T,G,ke,z,lt,oe),ce=new ED(y,De),ge=new J2,Ye=new sD(ke),Fe=new yb(y,T,G,Re,Q,p,l),ue=new cD(y,Q,z),N=new TD(I,st,z,Re),Me=new Mb(I,ke,st),qe=new Lb(I,ke,st),st.programs=pe.programs,y.capabilities=z,y.extensions=ke,y.properties=De,y.renderLists=ge,y.shadowMap=ue,y.state=Re,y.info=st}he();const q=new SD(y,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=ke.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ke.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(A){A!==void 0&&(L=A,this.setSize(W,X,!1))},this.getSize=function(A){return A.set(W,X)},this.setSize=function(A,U,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,X=U,t.width=Math.floor(A*L),t.height=Math.floor(U*L),V===!0&&(t.style.width=A+"px",t.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(W*L,X*L).floor()},this.setDrawingBufferSize=function(A,U,V){W=A,X=U,L=V,t.width=Math.floor(A*V),t.height=Math.floor(U*V),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(ie)},this.setViewport=function(A,U,V,H){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,U,V,H),Re.viewport(D.copy(ie).multiplyScalar(L).round())},this.getScissor=function(A){return A.copy(ye)},this.setScissor=function(A,U,V,H){A.isVector4?ye.set(A.x,A.y,A.z,A.w):ye.set(A,U,V,H),Re.scissor(F.copy(ye).multiplyScalar(L).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(A){Re.setScissorTest(Xe=A)},this.setOpaqueSort=function(A){$=A},this.setTransparentSort=function(A){b=A},this.getClearColor=function(A){return A.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(A=!0,U=!0,V=!0){let H=0;if(A){let k=!1;if(R!==null){const ae=R.texture.format;k=ae===gg||ae===_g||ae===mg}if(k){const ae=R.texture.type,le=ae===Zr||ae===Io||ae===Iu||ae===nl||ae===hg||ae===pg,_e=Fe.getClearColor(),Ee=Fe.getClearAlpha(),ze=_e.r,je=_e.g,Ae=_e.b;le?(g[0]=ze,g[1]=je,g[2]=Ae,g[3]=Ee,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=ze,_[1]=je,_[2]=Ae,_[3]=Ee,I.clearBufferiv(I.COLOR,0,_))}else H|=I.COLOR_BUFFER_BIT}U&&(H|=I.DEPTH_BUFFER_BIT),V&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ge.dispose(),Ye.dispose(),De.dispose(),T.dispose(),G.dispose(),Q.dispose(),lt.dispose(),N.dispose(),pe.dispose(),q.dispose(),q.removeEventListener("sessionstart",ve),q.removeEventListener("sessionend",We),Le.stop()};function J(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const A=st.autoReset,U=ue.enabled,V=ue.autoUpdate,H=ue.needsUpdate,k=ue.type;he(),st.autoReset=A,ue.enabled=U,ue.autoUpdate=V,ue.needsUpdate=H,ue.type=k}function me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Be(A){const U=A.target;U.removeEventListener("dispose",Be),ft(U)}function ft(A){Ht(A),De.remove(A)}function Ht(A){const U=De.get(A).programs;U!==void 0&&(U.forEach(function(V){pe.releaseProgram(V)}),A.isShaderMaterial&&pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,V,H,k,ae){U===null&&(U=Je);const le=k.isMesh&&k.matrixWorld.determinant()<0,_e=li(A,U,V,H,k);Re.setMaterial(H,le);let Ee=V.index,ze=1;if(H.wireframe===!0){if(Ee=ee.getWireframeAttribute(V),Ee===void 0)return;ze=2}const je=V.drawRange,Ae=V.attributes.position;let $e=je.start*ze,dt=(je.start+je.count)*ze;ae!==null&&($e=Math.max($e,ae.start*ze),dt=Math.min(dt,(ae.start+ae.count)*ze)),Ee!==null?($e=Math.max($e,0),dt=Math.min(dt,Ee.count)):Ae!=null&&($e=Math.max($e,0),dt=Math.min(dt,Ae.count));const pt=dt-$e;if(pt<0||pt===1/0)return;lt.setup(k,H,_e,V,Ee);let Kt,mt=Me;if(Ee!==null&&(Kt=te.get(Ee),mt=qe,mt.setIndex(Kt)),k.isMesh)H.wireframe===!0?(Re.setLineWidth(H.wireframeLinewidth*Ie()),mt.setMode(I.LINES)):mt.setMode(I.TRIANGLES);else if(k.isLine){let Ne=H.linewidth;Ne===void 0&&(Ne=1),Re.setLineWidth(Ne*Ie()),k.isLineSegments?mt.setMode(I.LINES):k.isLineLoop?mt.setMode(I.LINE_LOOP):mt.setMode(I.LINE_STRIP)}else k.isPoints?mt.setMode(I.POINTS):k.isSprite&&mt.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)mt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))mt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ne=k._multiDrawStarts,Tr=k._multiDrawCounts,_t=k._multiDrawCount,Wi=Ee?te.get(Ee).bytesPerElement:1,Go=De.get(H).currentProgram.getUniforms();for(let ui=0;ui<_t;ui++)Go.setValue(I,"_gl_DrawID",ui),mt.render(Ne[ui]/Wi,Tr[ui])}else if(k.isInstancedMesh)mt.renderInstances($e,pt,k.count);else if(V.isInstancedBufferGeometry){const Ne=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Tr=Math.min(V.instanceCount,Ne);mt.renderInstances($e,pt,Tr)}else mt.render($e,pt)};function Se(A,U,V){A.transparent===!0&&A.side===Ur&&A.forceSinglePass===!1?(A.side=oi,A.needsUpdate=!0,Et(A,U,V),A.side=zs,A.needsUpdate=!0,Et(A,U,V),A.side=Ur):Et(A,U,V)}this.compile=function(A,U,V=null){V===null&&(V=A),d=Ye.get(V),d.init(U),x.push(d),V.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),A!==V&&A.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights();const H=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ae=k.material;if(ae)if(Array.isArray(ae))for(let le=0;le<ae.length;le++){const _e=ae[le];Se(_e,V,k),H.add(_e)}else Se(ae,V,k),H.add(ae)}),x.pop(),d=null,H},this.compileAsync=function(A,U,V=null){const H=this.compile(A,U,V);return new Promise(k=>{function ae(){if(H.forEach(function(le){De.get(le).currentProgram.isReady()&&H.delete(le)}),H.size===0){k(A);return}setTimeout(ae,10)}ke.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Pe=null;function Ke(A){Pe&&Pe(A)}function ve(){Le.stop()}function We(){Le.start()}const Le=new nE;Le.setAnimationLoop(Ke),typeof self<"u"&&Le.setContext(self),this.setAnimationLoop=function(A){Pe=A,q.setAnimationLoop(A),A===null?Le.stop():Le.start()},q.addEventListener("sessionstart",ve),q.addEventListener("sessionend",We),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,U,R),d=Ye.get(A,x.length),d.init(U),x.push(d),Ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(Ce),fe=this.localClippingEnabled,ne=oe.init(this.clippingPlanes,fe),m=ge.get(A,v.length),m.init(),v.push(m),q.enabled===!0&&q.isPresenting===!0){const ae=y.xr.getDepthSensingMesh();ae!==null&&Ve(ae,U,-1/0,y.sortObjects)}Ve(A,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort($,b),Ge=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Ge&&Fe.addToRenderList(m,A),this.info.render.frame++,ne===!0&&oe.beginShadows();const V=d.state.shadowsArray;ue.render(V,A,U),ne===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,k=m.transmissive;if(d.setupLights(),U.isArrayCamera){const ae=U.cameras;if(k.length>0)for(let le=0,_e=ae.length;le<_e;le++){const Ee=ae[le];tt(H,k,A,Ee)}Ge&&Fe.render(A);for(let le=0,_e=ae.length;le<_e;le++){const Ee=ae[le];Xt(m,A,Ee,Ee.viewport)}}else k.length>0&&tt(H,k,A,U),Ge&&Fe.render(A),Xt(m,A,U);R!==null&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(y,A,U),lt.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?(d=x[x.length-1],ne===!0&&oe.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Ve(A,U,V,H){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){H&&He.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ce);const le=Q.update(A),_e=A.material;_e.visible&&m.push(A,le,_e,V,He.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const le=Q.update(A),_e=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),He.copy(A.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),He.copy(le.boundingSphere.center)),He.applyMatrix4(A.matrixWorld).applyMatrix4(Ce)),Array.isArray(_e)){const Ee=le.groups;for(let ze=0,je=Ee.length;ze<je;ze++){const Ae=Ee[ze],$e=_e[Ae.materialIndex];$e&&$e.visible&&m.push(A,le,$e,V,He.z,Ae)}}else _e.visible&&m.push(A,le,_e,V,He.z,null)}}const ae=A.children;for(let le=0,_e=ae.length;le<_e;le++)Ve(ae[le],U,V,H)}function Xt(A,U,V,H){const k=A.opaque,ae=A.transmissive,le=A.transparent;d.setupLightsView(V),ne===!0&&oe.setGlobalState(y.clippingPlanes,V),H&&Re.viewport(D.copy(H)),k.length>0&&At(k,U,V),ae.length>0&&At(ae,U,V),le.length>0&&At(le,U,V),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function tt(A,U,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new Uo(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?Wu:Zr,minFilter:mo,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const ae=d.state.transmissionRenderTarget[H.id],le=H.viewport||D;ae.setSize(le.z,le.w);const _e=y.getRenderTarget();y.setRenderTarget(ae),y.getClearColor(j),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),Ge&&Fe.render(V);const Ee=y.toneMapping;y.toneMapping=Is;const ze=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),ne===!0&&oe.setGlobalState(y.clippingPlanes,H),At(A,V,H),P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae),ke.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Ae=0,$e=U.length;Ae<$e;Ae++){const dt=U[Ae],pt=dt.object,Kt=dt.geometry,mt=dt.material,Ne=dt.group;if(mt.side===Ur&&pt.layers.test(H.layers)){const Tr=mt.side;mt.side=oi,mt.needsUpdate=!0,nn(pt,V,H,Kt,mt,Ne),mt.side=Tr,mt.needsUpdate=!0,je=!0}}je===!0&&(P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae))}y.setRenderTarget(_e),y.setClearColor(j,Z),ze!==void 0&&(H.viewport=ze),y.toneMapping=Ee}function At(A,U,V){const H=U.isScene===!0?U.overrideMaterial:null;for(let k=0,ae=A.length;k<ae;k++){const le=A[k],_e=le.object,Ee=le.geometry,ze=H===null?le.material:H,je=le.group;_e.layers.test(V.layers)&&nn(_e,U,V,Ee,ze,je)}}function nn(A,U,V,H,k,ae){A.onBeforeRender(y,U,V,H,k,ae),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(y,U,V,H,A,ae),k.transparent===!0&&k.side===Ur&&k.forceSinglePass===!1?(k.side=oi,k.needsUpdate=!0,y.renderBufferDirect(V,U,H,k,A,ae),k.side=zs,k.needsUpdate=!0,y.renderBufferDirect(V,U,H,k,A,ae),k.side=Ur):y.renderBufferDirect(V,U,H,k,A,ae),A.onAfterRender(y,U,V,H,k,ae)}function Et(A,U,V){U.isScene!==!0&&(U=Je);const H=De.get(A),k=d.state.lights,ae=d.state.shadowsArray,le=k.state.version,_e=pe.getParameters(A,k.state,ae,U,V),Ee=pe.getProgramCacheKey(_e);let ze=H.programs;H.environment=A.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(A.isMeshStandardMaterial?G:T).get(A.envMap||H.environment),H.envMapRotation=H.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,ze===void 0&&(A.addEventListener("dispose",Be),ze=new Map,H.programs=ze);let je=ze.get(Ee);if(je!==void 0){if(H.currentProgram===je&&H.lightsStateVersion===le)return ht(A,_e),je}else _e.uniforms=pe.getUniforms(A),A.onBeforeCompile(_e,y),je=pe.acquireProgram(_e,Ee),ze.set(Ee,je),H.uniforms=_e.uniforms;const Ae=H.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ae.clippingPlanes=oe.uniform),ht(A,_e),H.needsLights=Nn(A),H.lightsStateVersion=le,H.needsLights&&(Ae.ambientLightColor.value=k.state.ambient,Ae.lightProbe.value=k.state.probe,Ae.directionalLights.value=k.state.directional,Ae.directionalLightShadows.value=k.state.directionalShadow,Ae.spotLights.value=k.state.spot,Ae.spotLightShadows.value=k.state.spotShadow,Ae.rectAreaLights.value=k.state.rectArea,Ae.ltc_1.value=k.state.rectAreaLTC1,Ae.ltc_2.value=k.state.rectAreaLTC2,Ae.pointLights.value=k.state.point,Ae.pointLightShadows.value=k.state.pointShadow,Ae.hemisphereLights.value=k.state.hemi,Ae.directionalShadowMap.value=k.state.directionalShadowMap,Ae.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ae.spotShadowMap.value=k.state.spotShadowMap,Ae.spotLightMatrix.value=k.state.spotLightMatrix,Ae.spotLightMap.value=k.state.spotLightMap,Ae.pointShadowMap.value=k.state.pointShadowMap,Ae.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=je,H.uniformsList=null,je}function Tt(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=_f.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function ht(A,U){const V=De.get(A);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function li(A,U,V,H,k){U.isScene!==!0&&(U=Je),P.resetTextureUnits();const ae=U.fog,le=H.isMeshStandardMaterial?U.environment:null,_e=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ul,Ee=(H.isMeshStandardMaterial?G:T).get(H.envMap||le),ze=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,je=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ae=!!V.morphAttributes.position,$e=!!V.morphAttributes.normal,dt=!!V.morphAttributes.color;let pt=Is;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(pt=y.toneMapping);const Kt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,mt=Kt!==void 0?Kt.length:0,Ne=De.get(H),Tr=d.state.lights;if(ne===!0&&(fe===!0||A!==S)){const Ci=A===S&&H.id===M;oe.setState(H,A,Ci)}let _t=!1;H.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Tr.state.version||Ne.outputColorSpace!==_e||k.isBatchedMesh&&Ne.batching===!1||!k.isBatchedMesh&&Ne.batching===!0||k.isBatchedMesh&&Ne.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ne.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ne.instancing===!1||!k.isInstancedMesh&&Ne.instancing===!0||k.isSkinnedMesh&&Ne.skinning===!1||!k.isSkinnedMesh&&Ne.skinning===!0||k.isInstancedMesh&&Ne.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ne.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ne.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ne.instancingMorph===!1&&k.morphTexture!==null||Ne.envMap!==Ee||H.fog===!0&&Ne.fog!==ae||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==oe.numPlanes||Ne.numIntersection!==oe.numIntersection)||Ne.vertexAlphas!==ze||Ne.vertexTangents!==je||Ne.morphTargets!==Ae||Ne.morphNormals!==$e||Ne.morphColors!==dt||Ne.toneMapping!==pt||Ne.morphTargetsCount!==mt)&&(_t=!0):(_t=!0,Ne.__version=H.version);let Wi=Ne.currentProgram;_t===!0&&(Wi=Et(H,U,k));let Go=!1,ui=!1,dl=!1;const bt=Wi.getUniforms(),or=Ne.uniforms;if(Re.useProgram(Wi.program)&&(Go=!0,ui=!0,dl=!0),H.id!==M&&(M=H.id,ui=!0),Go||S!==A){Re.buffers.depth.getReversed()?(re.copy(A.projectionMatrix),hC(re),pC(re),bt.setValue(I,"projectionMatrix",re)):bt.setValue(I,"projectionMatrix",A.projectionMatrix),bt.setValue(I,"viewMatrix",A.matrixWorldInverse);const ts=bt.map.cameraPosition;ts!==void 0&&ts.setValue(I,be.setFromMatrixPosition(A.matrixWorld)),z.logarithmicDepthBuffer&&bt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&bt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,ui=!0,dl=!0)}if(k.isSkinnedMesh){bt.setOptional(I,k,"bindMatrix"),bt.setOptional(I,k,"bindMatrixInverse");const Ci=k.skeleton;Ci&&(Ci.boneTexture===null&&Ci.computeBoneTexture(),bt.setValue(I,"boneTexture",Ci.boneTexture,P))}k.isBatchedMesh&&(bt.setOptional(I,k,"batchingTexture"),bt.setValue(I,"batchingTexture",k._matricesTexture,P),bt.setOptional(I,k,"batchingIdTexture"),bt.setValue(I,"batchingIdTexture",k._indirectTexture,P),bt.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&bt.setValue(I,"batchingColorTexture",k._colorsTexture,P));const hl=V.morphAttributes;if((hl.position!==void 0||hl.normal!==void 0||hl.color!==void 0)&&Ue.update(k,V,Wi),(ui||Ne.receiveShadow!==k.receiveShadow)&&(Ne.receiveShadow=k.receiveShadow,bt.setValue(I,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(or.envMap.value=Ee,or.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(or.envMapIntensity.value=U.environmentIntensity),ui&&(bt.setValue(I,"toneMappingExposure",y.toneMappingExposure),Ne.needsLights&&Pt(or,dl),ae&&H.fog===!0&&ce.refreshFogUniforms(or,ae),ce.refreshMaterialUniforms(or,H,L,X,d.state.transmissionRenderTarget[A.id]),_f.upload(I,Tt(Ne),or,P)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(_f.upload(I,Tt(Ne),or,P),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&bt.setValue(I,"center",k.center),bt.setValue(I,"modelViewMatrix",k.modelViewMatrix),bt.setValue(I,"normalMatrix",k.normalMatrix),bt.setValue(I,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ci=H.uniformsGroups;for(let ts=0,ns=Ci.length;ts<ns;ts++){const Rg=Ci[ts];N.update(Rg,Wi),N.bind(Rg,Wi)}}return Wi}function Pt(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function Nn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,U,V){De.get(A.texture).__webglTexture=U,De.get(A.depthTexture).__webglTexture=V;const H=De.get(A);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=V===void 0,H.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,U){const V=De.get(A);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,V=0){R=A,w=U,E=V;let H=!0,k=null,ae=!1,le=!1;if(A){const Ee=De.get(A);if(Ee.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(I.FRAMEBUFFER,null),H=!1;else if(Ee.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Ee.__hasExternalTextures)P.rebindTextures(A,De.get(A.texture).__webglTexture,De.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ae=A.depthTexture;if(Ee.__boundDepthTexture!==Ae){if(Ae!==null&&De.has(Ae)&&(A.width!==Ae.image.width||A.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const ze=A.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(le=!0);const je=De.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(je[U])?k=je[U][V]:k=je[U],ae=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?k=De.get(A).__webglMultisampledFramebuffer:Array.isArray(je)?k=je[V]:k=je,D.copy(A.viewport),F.copy(A.scissor),B=A.scissorTest}else D.copy(ie).multiplyScalar(L).floor(),F.copy(ye).multiplyScalar(L).floor(),B=Xe;if(Re.bindFramebuffer(I.FRAMEBUFFER,k)&&H&&Re.drawBuffers(A,k),Re.viewport(D),Re.scissor(F),Re.setScissorTest(B),ae){const Ee=De.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee.__webglTexture,V)}else if(le){const Ee=De.get(A.texture),ze=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ee.__webglTexture,V||0,ze)}M=-1},this.readRenderTargetPixels=function(A,U,V,H,k,ae,le){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=De.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&le!==void 0&&(_e=_e[le]),_e){Re.bindFramebuffer(I.FRAMEBUFFER,_e);try{const Ee=A.texture,ze=Ee.format,je=Ee.type;if(!z.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-H&&V>=0&&V<=A.height-k&&I.readPixels(U,V,H,k,Oe.convert(ze),Oe.convert(je),ae)}finally{const Ee=R!==null?De.get(R).__webglFramebuffer:null;Re.bindFramebuffer(I.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(A,U,V,H,k,ae,le){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=De.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&le!==void 0&&(_e=_e[le]),_e){const Ee=A.texture,ze=Ee.format,je=Ee.type;if(!z.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=A.width-H&&V>=0&&V<=A.height-k){Re.bindFramebuffer(I.FRAMEBUFFER,_e);const Ae=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ae),I.bufferData(I.PIXEL_PACK_BUFFER,ae.byteLength,I.STREAM_READ),I.readPixels(U,V,H,k,Oe.convert(ze),Oe.convert(je),0);const $e=R!==null?De.get(R).__webglFramebuffer:null;Re.bindFramebuffer(I.FRAMEBUFFER,$e);const dt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await dC(I,dt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ae),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ae),I.deleteBuffer(Ae),I.deleteSync(dt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,U=null,V=0){A.isTexture!==!0&&(Fl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,A=arguments[1]);const H=Math.pow(2,-V),k=Math.floor(A.image.width*H),ae=Math.floor(A.image.height*H),le=U!==null?U.x:0,_e=U!==null?U.y:0;P.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,le,_e,k,ae),Re.unbindTexture()},this.copyTextureToTexture=function(A,U,V=null,H=null,k=0){A.isTexture!==!0&&(Fl("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1],U=arguments[2],k=arguments[3]||0,V=null);let ae,le,_e,Ee,ze,je,Ae,$e,dt;const pt=A.isCompressedTexture?A.mipmaps[k]:A.image;V!==null?(ae=V.max.x-V.min.x,le=V.max.y-V.min.y,_e=V.isBox3?V.max.z-V.min.z:1,Ee=V.min.x,ze=V.min.y,je=V.isBox3?V.min.z:0):(ae=pt.width,le=pt.height,_e=pt.depth||1,Ee=0,ze=0,je=0),H!==null?(Ae=H.x,$e=H.y,dt=H.z):(Ae=0,$e=0,dt=0);const Kt=Oe.convert(U.format),mt=Oe.convert(U.type);let Ne;U.isData3DTexture?(P.setTexture3D(U,0),Ne=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(P.setTexture2DArray(U,0),Ne=I.TEXTURE_2D_ARRAY):(P.setTexture2D(U,0),Ne=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Tr=I.getParameter(I.UNPACK_ROW_LENGTH),_t=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Wi=I.getParameter(I.UNPACK_SKIP_PIXELS),Go=I.getParameter(I.UNPACK_SKIP_ROWS),ui=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,pt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ee),I.pixelStorei(I.UNPACK_SKIP_ROWS,ze),I.pixelStorei(I.UNPACK_SKIP_IMAGES,je);const dl=A.isDataArrayTexture||A.isData3DTexture,bt=U.isDataArrayTexture||U.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const or=De.get(A),hl=De.get(U),Ci=De.get(or.__renderTarget),ts=De.get(hl.__renderTarget);Re.bindFramebuffer(I.READ_FRAMEBUFFER,Ci.__webglFramebuffer),Re.bindFramebuffer(I.DRAW_FRAMEBUFFER,ts.__webglFramebuffer);for(let ns=0;ns<_e;ns++)dl&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,De.get(A).__webglTexture,k,je+ns),A.isDepthTexture?(bt&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,De.get(U).__webglTexture,k,dt+ns),I.blitFramebuffer(Ee,ze,ae,le,Ae,$e,ae,le,I.DEPTH_BUFFER_BIT,I.NEAREST)):bt?I.copyTexSubImage3D(Ne,k,Ae,$e,dt+ns,Ee,ze,ae,le):I.copyTexSubImage2D(Ne,k,Ae,$e,dt+ns,Ee,ze,ae,le);Re.bindFramebuffer(I.READ_FRAMEBUFFER,null),Re.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else bt?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Ne,k,Ae,$e,dt,ae,le,_e,Kt,mt,pt.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Ne,k,Ae,$e,dt,ae,le,_e,Kt,pt.data):I.texSubImage3D(Ne,k,Ae,$e,dt,ae,le,_e,Kt,mt,pt):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,k,Ae,$e,ae,le,Kt,mt,pt.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,k,Ae,$e,pt.width,pt.height,Kt,pt.data):I.texSubImage2D(I.TEXTURE_2D,k,Ae,$e,ae,le,Kt,mt,pt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Tr),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_t),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Wi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Go),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ui),k===0&&U.generateMipmaps&&I.generateMipmap(Ne),Re.unbindTexture()},this.copyTextureToTexture3D=function(A,U,V=null,H=null,k=0){return A.isTexture!==!0&&(Fl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,H=arguments[1]||null,A=arguments[2],U=arguments[3],k=arguments[4]||0),Fl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,U,V,H,k)},this.initRenderTarget=function(A){De.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Re.unbindTexture()},this.resetState=function(){w=0,E=0,R=null,Re.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}class AD extends Mi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qr,this.environmentIntensity=1,this.environmentRotation=new Qr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Qv={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class CD{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const p=u[f],g=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null}}}const RD=new CD;class yg{constructor(e){this.manager=e!==void 0?e:RD,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}yg.DEFAULT_MATERIAL_NAME="__DEFAULT";class PD extends yg{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Qv.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Uu("img");function l(){c(),Qv.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class bD extends yg{constructor(e){super(e)}load(e,t,i,r){const s=new Xn,o=new PD(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fg);const DD="/Portfolio/assets/Profile-pic-Cfb0Gdji.jpg",LD=()=>{const n=St.useRef(null),e=St.useRef(null);return St.useEffect(()=>{let t=.02,i,r,s,o,a={x:.5,y:.5},l={x:.5,y:.5},u={x:.5,y:.5},c=0;const f=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,h=`
      varying vec2 vUv;
      uniform sampler2D u_texture;    
      uniform vec2 u_mouse;
      uniform vec2 u_prevMouse;
      uniform float u_aberrationIntensity;

      void main() {
          vec2 gridUV = floor(vUv * vec2(20.0, 20.0)) / vec2(20.0, 20.0);
          vec2 centerOfPixel = gridUV + vec2(1.0/20.0, 1.0/20.0);
          
          vec2 mouseDirection = u_mouse - u_prevMouse;
          vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
          float pixelDistanceToMouse = length(pixelToMouseDirection);
          float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse);

          vec2 uvOffset = strength * -mouseDirection * 0.2;
          vec2 uv = vUv - uvOffset;

          vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));
          vec4 colorG = texture2D(u_texture, uv);
          vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));

          gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
      }
    `,p=C=>{i=new AD,r=new Ni(80,e.current.offsetWidth/e.current.offsetHeight,.01,10),r.position.z=1;const w={u_mouse:{type:"v2",value:new vt},u_prevMouse:{type:"v2",value:new vt},u_aberrationIntensity:{type:"f",value:0},u_texture:{type:"t",value:C}};o=new _r(new qu(2,2),new Jr({uniforms:w,vertexShader:f,fragmentShader:h})),i.add(o),s=new wD,s.setSize(e.current.offsetWidth,e.current.offsetHeight),n.current.appendChild(s.domElement)},g=()=>{requestAnimationFrame(g),a.x+=(l.x-a.x)*t,a.y+=(l.y-a.y)*t,o.material.uniforms.u_mouse.value.set(a.x,1-a.y),o.material.uniforms.u_prevMouse.value.set(u.x,1-u.y),c=Math.max(0,c-.05),o.material.uniforms.u_aberrationIntensity.value=c,s.render(i,r)},_=C=>{t=.02;const w=n.current.getBoundingClientRect();u={...l},l.x=(C.clientX-w.left)/w.width,l.y=(C.clientY-w.top)/w.height,c=1},m=C=>{t=.02;const w=n.current.getBoundingClientRect();a.x=l.x=(C.clientX-w.left)/w.width,a.y=l.y=(C.clientY-w.top)/w.height},d=()=>{t=.05,l={...u}},x=new bD().load(e.current.src);p(x),g();const y=n.current;return y.addEventListener("mousemove",_),y.addEventListener("mouseenter",m),y.addEventListener("mouseleave",d),()=>{y.removeEventListener("mousemove",_),y.removeEventListener("mouseenter",m),y.removeEventListener("mouseleave",d),s.dispose()}},[]),O.jsx(O.Fragment,{children:O.jsx("div",{id:"imageContainer",ref:n,children:O.jsx("img",{id:"myImage",ref:e,src:DD,alt:"Profile Picture",style:{opacity:0,position:"absolute",zIndex:-1}})})})},ND="/Portfolio/assets/SaifResume-CrZqEv_4.pdf";function ID(){St.useEffect(()=>{const e=document.querySelector(".btn-responsive");return e&&(e.addEventListener("mouseenter",()=>{Pn.to(".btn-responsive",{backgroundColor:"#fff",color:"#222",scale:1.2,duration:.4,ease:"elastic.out(1, 0.3)"})}),e.addEventListener("mouseleave",()=>{Pn.to(".btn-responsive",{backgroundColor:"",color:"#fff",scale:1,duration:.4,ease:"elastic.out(1, 0.3)"})})),()=>{e&&(e.removeEventListener("mouseenter",()=>{}),e.removeEventListener("mouseleave",()=>{}))}},[]);const n=e=>{e.preventDefault(),document.body.style.overflow="hidden",Pn.to(".btn-responsive",{scale:30,zIndex:2,rotation:360,backgroundColor:"#fff",color:"#fff",duration:1,ease:"power4.inOut",onComplete:()=>{window.location.href=ND}})};return O.jsxs("div",{className:"box2 text-white",children:[O.jsx(cg,{}),O.jsxs("div",{className:"top-nav d-flex justify-content-between align-items-center px-4 py-3",children:[O.jsx("p",{className:"page-number",children:"02/"}),O.jsx("p",{children:O.jsx("span",{children:"About"})}),O.jsx("p",{children:O.jsx("span",{children:"EMAIL / GITHUB / TWITTER / LINKEDIN"})}),O.jsx("p",{className:"page-total",children:"/04"})]}),O.jsxs("div",{className:"main-content-grid container-fluid",children:[O.jsx("div",{className:"intro",children:O.jsxs("p",{className:"intro-text",children:["HELLO, MY NAME'S Saif, I THRIVE ON",O.jsx("br",{}),"TURNING IDEAS INTO REALITY CRAFTING ",O.jsx("br",{}),"PRODUCTS, DYNAMIC WEBSITES."]})}),O.jsx("div",{className:"center-image-container",children:O.jsx(LD,{})}),O.jsx("div",{className:"animated-text",children:O.jsx("marquee",{className:"text1",children:"Mohammed Saif - Mohammed Saif - Mohammed Saif - Mohammed Saif Mohammed Saif - Mohammed Saif - Mohammed Saif - Mohammed Saif Mohammed Saif - Mohammed Saif - Mohammed Saif - Mohammed Saif"})}),O.jsx("div",{className:"learn-more",children:O.jsx("a",{onClick:n,children:O.jsx("button",{className:"btn btn-outline-light rounded-circle btn-responsive",children:"CV"})})})]})]})}var Hm=new Map,Fc=new WeakMap,Jv=0,UD=void 0;function FD(n){return n?(Fc.has(n)||(Jv+=1,Fc.set(n,Jv.toString())),Fc.get(n)):"0"}function OD(n){return Object.keys(n).sort().filter(e=>n[e]!==void 0).map(e=>`${e}_${e==="root"?FD(n.root):n[e]}`).toString()}function kD(n){const e=OD(n);let t=Hm.get(e);if(!t){const i=new Map;let r;const s=new IntersectionObserver(o=>{o.forEach(a=>{var l;const u=a.isIntersecting&&r.some(c=>a.intersectionRatio>=c);n.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(l=i.get(a.target))==null||l.forEach(c=>{c(u,a)})})},n);r=s.thresholds||(Array.isArray(n.threshold)?n.threshold:[n.threshold||0]),t={id:e,observer:s,elements:i},Hm.set(e,t)}return t}function BD(n,e,t={},i=UD){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const l=n.getBoundingClientRect();return e(i,{isIntersecting:i,target:n,intersectionRatio:typeof t.threshold=="number"?t.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:r,observer:s,elements:o}=kD(t),a=o.get(n)||[];return o.has(n)||o.set(n,a),a.push(e),s.observe(n),function(){a.splice(a.indexOf(e),1),a.length===0&&(o.delete(n),s.unobserve(n)),o.size===0&&(s.disconnect(),Hm.delete(r))}}function zD({threshold:n,delay:e,trackVisibility:t,rootMargin:i,root:r,triggerOnce:s,skip:o,initialInView:a,fallbackInView:l,onChange:u}={}){var c;const[f,h]=St.useState(null),p=St.useRef(),[g,_]=St.useState({inView:!!a,entry:void 0});p.current=u,St.useEffect(()=>{if(o||!f)return;let x;return x=BD(f,(y,C)=>{_({inView:y,entry:C}),p.current&&p.current(y,C),C.isIntersecting&&s&&x&&(x(),x=void 0)},{root:r,rootMargin:i,threshold:n,trackVisibility:t,delay:e},l),()=>{x&&x()}},[Array.isArray(n)?n.toString():n,f,r,i,s,o,t,l,e]);const m=(c=g.entry)==null?void 0:c.target,d=St.useRef();!f&&m&&!s&&!o&&d.current!==m&&(d.current=m,_({inView:!!a,entry:void 0}));const v=[h,g.inView,g.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}function VD(){const[n,e]=St.useState(""),[t,i]=St.useState(!1),{ref:r,inView:s}=zD({threshold:.5,triggerOnce:!1}),o=St.useCallback(()=>{s&&!t?(e("animate-icons"),i(!0)):!s&&t&&(e(""),i(!1))},[s,t]);return qE.useEffect(()=>{o()},[o]),O.jsx(O.Fragment,{children:O.jsxs("div",{className:"box4 capabilities-showcase d-flex flex-column text-white",ref:r,children:[O.jsxs("div",{className:"top-nav d-flex justify-content-between align-items-center px-4 py-3",children:[O.jsx(cg,{}),O.jsx("p",{className:"page-number",children:"04/"}),O.jsx("p",{children:O.jsx("span",{children:"Capabilities"})}),O.jsx("p",{className:"page-total",children:"/04"})]}),O.jsxs("div",{className:`capabilities-content d-flex flex-column align-items-center justify-content-center text-center ${n}`,children:[O.jsx("h1",{className:"main-title",children:"SPECIALIZE IN"}),O.jsxs("div",{className:"app-container",children:[O.jsxs("div",{className:"row justify-content-center",children:[O.jsx("div",{className:"col-2 col-sm-1 d-flex justify-content-center",children:O.jsx("img",{src:"https://www.svgrepo.com/show/452228/html-5.svg",alt:"HTML",className:"icon"})}),O.jsx("div",{className:"col-2 col-sm-1 d-flex justify-content-center",children:O.jsx("img",{src:"https://www.svgrepo.com/show/373535/css.svg",alt:"CSS",className:"icon"})}),O.jsx("div",{className:"col-2 col-sm-1 d-flex justify-content-center",children:O.jsx("img",{src:"https://www.svgrepo.com/show/349419/javascript.svg",alt:"JavaScript",className:"icon"})}),O.jsx("div",{className:"col-2 col-sm-1 d-flex justify-content-center",children:O.jsx("img",{src:"https://www.svgrepo.com/show/303293/bootstrap-4-logo.svg",alt:"Bootstrap",className:"icon"})}),O.jsx("div",{className:"col-2 col-sm-1 d-flex justify-content-center",children:O.jsx("img",{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",alt:"React",className:"icon"})}),O.jsx("div",{className:"col-2 col-sm-1 d-flex justify-content-center",children:O.jsx("img",{src:"https://seeklogo.com/images/G/greensock-gsap-icon-logo-13BB451E88-seeklogo.com.png",alt:"GSAP",className:"icon"})})]}),O.jsxs("div",{className:"row justify-content-center",children:[O.jsx("div",{className:"col-2 col-sm-1 d-flex justify-content-center",children:O.jsx("img",{src:"https://www.svgrepo.com/show/353924/java.svg",alt:"Java",className:"icon"})}),O.jsx("div",{className:"col-2 col-sm-1 d-flex justify-content-center",children:O.jsx("img",{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",alt:"Node.js",className:"icon"})}),O.jsx("div",{className:"col-2 col-sm-1 d-flex justify-content-center",children:O.jsx("img",{src:"https://www.vectorlogo.zone/logos/springio/springio-icon.svg",alt:"Spring Boot",className:"icon"})}),O.jsx("div",{className:"col-2 col-sm-1 d-flex justify-content-center",children:O.jsx("img",{src:"https://www.svgrepo.com/show/331488/mongodb.svg",alt:"MongoDB",className:"icon"})}),O.jsx("div",{className:"col-2 col-sm-1 d-flex justify-content-center",children:O.jsx("img",{src:"https://www.svgrepo.com/show/439233/mysql.svg",alt:"MySQL",className:"icon"})})]}),O.jsxs("div",{className:"row justify-content-center",children:[O.jsx("div",{className:"col-2 col-sm-1 d-flex justify-content-center",children:O.jsx("img",{src:"https://www.svgrepo.com/show/373595/firebase.svg",alt:"Firebase",className:"icon"})}),O.jsx("div",{className:"col-2 col-sm-1 d-flex justify-content-center",children:O.jsx("img",{src:"https://www.svgrepo.com/show/439171/github.svg",alt:"GitHub",className:"icon"})}),O.jsx("div",{className:"col-2 col-sm-1 d-flex justify-content-center",children:O.jsx("img",{src:"https://www.svgrepo.com/show/452210/git.svg",alt:"Git",className:"icon"})})]}),O.jsxs("div",{className:"row justify-content-center",children:[O.jsx("div",{className:"col-2 col-sm-1 d-flex justify-content-center",children:O.jsx("img",{src:"https://www.svgrepo.com/show/353733/figma.svg",alt:"Figma",className:"icon"})}),O.jsx("div",{className:"col-2 col-sm-1 d-flex justify-content-center",children:O.jsx("img",{src:"https://www.svgrepo.com/show/354202/postman-icon.svg",alt:"Postman",className:"icon"})})]})]})]})]})})}function HD(){const n=St.useRef(null);St.useEffect(()=>{const t=new IntersectionObserver(([i])=>{i.isIntersecting?n.current.classList.add("open"):n.current.classList.remove("open")},{threshold:.1});return n.current&&t.observe(n.current),()=>{n.current&&t.unobserve(n.current)}},[]);const e=()=>{const t="mailto:md.saifmi1969@gmail.com?subject=Let's Connect&body=Hi there, I’d like to discuss a project!";window.location.href=t};return O.jsxs("div",{className:"connect-container",ref:n,children:[O.jsxs("div",{className:"connect-content",children:[O.jsx("p",{className:"project-in-mind",children:"GOT A PROJECT IN MIND?"}),O.jsx("h1",{className:"connect-title",children:"LET'S CONNECT"}),O.jsx("div",{className:"write-message",children:O.jsx("button",{onClick:e,className:"message-button",children:"WRITE A MESSAGE"})})]}),O.jsxs("div",{className:"social-links",children:[O.jsx("p",{children:"FEEL FREE TO CONNECT WITH ME ON SOCIAL"}),O.jsxs("div",{className:"links",children:[O.jsx("span",{children:O.jsxs("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noopener noreferrer",children:[O.jsx("img",{src:"src/assets/Image/instagram-1-svgrepo-com.svg",alt:"Instagram",className:"icons"}),"INSTAGRAM"]})}),O.jsx("span",{children:O.jsxs("a",{href:"https://wa.me/9789988242",target:"_blank",rel:"noopener noreferrer",children:[O.jsx("img",{src:"src/assets/Image/whatsapp-svgrepo-com.svg",alt:"WhatsApp",className:"icons"}),"WHATSAPP"]})}),O.jsx("span",{children:O.jsxs("a",{href:"https://www.linkedin.com/in/mdsaif233/",target:"_blank",rel:"noopener noreferrer",children:[O.jsx("img",{src:"src/assets/Image/linkedin-svgrepo-com.svg",alt:"LinkedIn",className:"icons"}),"LINKEDIN"]})})]})]})]})}const GD="/Portfolio/assets/ms1-CUaLFFPR.png";function WD(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function XD(n,e,t){return e&&WD(n.prototype,e),n}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var vn,gf,gi,Ss,Ms,ka,lE,so,tu,uE,Vr,qi,cE,fE=function(){return vn||typeof window<"u"&&(vn=window.gsap)&&vn.registerPlugin&&vn},dE=1,wa=[],it=[],Mr=[],nu=Date.now,Gm=function(e,t){return t},jD=function(){var e=tu.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,it),r.push.apply(r,Mr),it=i,Mr=r,Gm=function(o,a){return t[o](a)}},Us=function(e,t){return~Mr.indexOf(e)&&Mr[Mr.indexOf(e)+1][t]},iu=function(e){return!!~uE.indexOf(e)},Un=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},In=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Oc="scrollLeft",kc="scrollTop",Wm=function(){return Vr&&Vr.isPressed||it.cache++},td=function(e,t){var i=function r(s){if(s||s===0){dE&&(gi.history.scrollRestoration="manual");var o=Vr&&Vr.isPressed;s=r.v=Math.round(s)||(Vr&&Vr.iOS?1:0),e(s),r.cacheID=it.cache,o&&Gm("ss",s)}else(t||it.cache!==r.cacheID||Gm("ref"))&&(r.cacheID=it.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Hn={s:Oc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:td(function(n){return arguments.length?gi.scrollTo(n,on.sc()):gi.pageXOffset||Ss[Oc]||Ms[Oc]||ka[Oc]||0})},on={s:kc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Hn,sc:td(function(n){return arguments.length?gi.scrollTo(Hn.sc(),n):gi.pageYOffset||Ss[kc]||Ms[kc]||ka[kc]||0})},qn=function(e,t){return(t&&t._ctx&&t._ctx.selector||vn.utils.toArray)(e)[0]||(typeof e=="string"&&vn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Vs=function(e,t){var i=t.s,r=t.sc;iu(e)&&(e=Ss.scrollingElement||Ms);var s=it.indexOf(e),o=r===on.sc?1:2;!~s&&(s=it.push(e)-1),it[s+o]||Un(e,"scroll",Wm);var a=it[s+o],l=a||(it[s+o]=td(Us(e,i),!0)||(iu(e)?r:td(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=vn.getProperty(e,"scrollBehavior")==="smooth"),l},Xm=function(e,t,i){var r=e,s=e,o=nu(),a=o,l=t||50,u=Math.max(500,l*3),c=function(g,_){var m=nu();_||m-o>l?(s=r,r=g,a=o,o=m):i?r+=g:r=s+(g-s)/(m-a)*(o-a)},f=function(){s=r=i?0:r,a=o=0},h=function(g){var _=a,m=s,d=nu();return(g||g===0)&&g!==r&&c(g),o===a||d-a>u?0:(r+(i?m:-m))/((i?d:o)-_)*1e3};return{update:c,reset:f,getVelocity:h}},Rl=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ex=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},hE=function(){tu=vn.core.globals().ScrollTrigger,tu&&tu.core&&jD()},pE=function(e){return vn=e||fE(),!gf&&vn&&typeof document<"u"&&document.body&&(gi=window,Ss=document,Ms=Ss.documentElement,ka=Ss.body,uE=[gi,Ss,Ms,ka],vn.utils.clamp,cE=vn.core.context||function(){},so="onpointerenter"in ka?"pointer":"mouse",lE=qt.isTouch=gi.matchMedia&&gi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in gi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,qi=qt.eventTypes=("ontouchstart"in Ms?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ms?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return dE=0},500),hE(),gf=1),gf};Hn.op=on;it.cache=0;var qt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){gf||pE(vn)||console.warn("Please gsap.registerPlugin(Observer)"),tu||hE();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,f=i.onStop,h=i.onStopDelay,p=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,d=i.onDragEnd,v=i.onDrag,x=i.onPress,y=i.onRelease,C=i.onRight,w=i.onLeft,E=i.onUp,R=i.onDown,M=i.onChangeX,S=i.onChangeY,D=i.onChange,F=i.onToggleX,B=i.onToggleY,j=i.onHover,Z=i.onHoverEnd,W=i.onMove,X=i.ignoreCheck,L=i.isNormalizer,$=i.onGestureStart,b=i.onGestureEnd,ie=i.onWheel,ye=i.onEnable,Xe=i.onDisable,Y=i.onClick,ne=i.scrollSpeed,fe=i.capture,re=i.allowClicks,Ce=i.lockAxis,be=i.onLockAxis;this.target=a=qn(a)||Ms,this.vars=i,p&&(p=vn.utils.toArray(p)),r=r||1e-9,s=s||0,g=g||1,ne=ne||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(gi.getComputedStyle(ka).lineHeight)||22);var He,Je,Ge,Ie,I,Mt,ke,z=this,Re=0,st=0,De=i.passive||!c,P=Vs(a,Hn),T=Vs(a,on),G=P(),te=T(),ee=~o.indexOf("touch")&&!~o.indexOf("pointer")&&qi[0]==="pointerdown",Q=iu(a),pe=a.ownerDocument||Ss,ce=[0,0,0],ge=[0,0,0],Ye=0,oe=function(){return Ye=nu()},ue=function(Pe,Ke){return(z.event=Pe)&&p&&~p.indexOf(Pe.target)||Ke&&ee&&Pe.pointerType!=="touch"||X&&X(Pe,Ke)},Fe=function(){z._vx.reset(),z._vy.reset(),Je.pause(),f&&f(z)},Ue=function(){var Pe=z.deltaX=ex(ce),Ke=z.deltaY=ex(ge),ve=Math.abs(Pe)>=r,We=Math.abs(Ke)>=r;D&&(ve||We)&&D(z,Pe,Ke,ce,ge),ve&&(C&&z.deltaX>0&&C(z),w&&z.deltaX<0&&w(z),M&&M(z),F&&z.deltaX<0!=Re<0&&F(z),Re=z.deltaX,ce[0]=ce[1]=ce[2]=0),We&&(R&&z.deltaY>0&&R(z),E&&z.deltaY<0&&E(z),S&&S(z),B&&z.deltaY<0!=st<0&&B(z),st=z.deltaY,ge[0]=ge[1]=ge[2]=0),(Ie||Ge)&&(W&&W(z),Ge&&(v(z),Ge=!1),Ie=!1),Mt&&!(Mt=!1)&&be&&be(z),I&&(ie(z),I=!1),He=0},Me=function(Pe,Ke,ve){ce[ve]+=Pe,ge[ve]+=Ke,z._vx.update(Pe),z._vy.update(Ke),u?He||(He=requestAnimationFrame(Ue)):Ue()},qe=function(Pe,Ke){Ce&&!ke&&(z.axis=ke=Math.abs(Pe)>Math.abs(Ke)?"x":"y",Mt=!0),ke!=="y"&&(ce[2]+=Pe,z._vx.update(Pe,!0)),ke!=="x"&&(ge[2]+=Ke,z._vy.update(Ke,!0)),u?He||(He=requestAnimationFrame(Ue)):Ue()},Oe=function(Pe){if(!ue(Pe,1)){Pe=Rl(Pe,c);var Ke=Pe.clientX,ve=Pe.clientY,We=Ke-z.x,Le=ve-z.y,Ve=z.isDragging;z.x=Ke,z.y=ve,(Ve||Math.abs(z.startX-Ke)>=s||Math.abs(z.startY-ve)>=s)&&(v&&(Ge=!0),Ve||(z.isDragging=!0),qe(We,Le),Ve||m&&m(z))}},lt=z.onPress=function(Se){ue(Se,1)||Se&&Se.button||(z.axis=ke=null,Je.pause(),z.isPressed=!0,Se=Rl(Se),Re=st=0,z.startX=z.x=Se.clientX,z.startY=z.y=Se.clientY,z._vx.reset(),z._vy.reset(),Un(L?a:pe,qi[1],Oe,De,!0),z.deltaX=z.deltaY=0,x&&x(z))},N=z.onRelease=function(Se){if(!ue(Se,1)){In(L?a:pe,qi[1],Oe,!0);var Pe=!isNaN(z.y-z.startY),Ke=z.isDragging,ve=Ke&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),We=Rl(Se);!ve&&Pe&&(z._vx.reset(),z._vy.reset(),c&&re&&vn.delayedCall(.08,function(){if(nu()-Ye>300&&!Se.defaultPrevented){if(Se.target.click)Se.target.click();else if(pe.createEvent){var Le=pe.createEvent("MouseEvents");Le.initMouseEvent("click",!0,!0,gi,1,We.screenX,We.screenY,We.clientX,We.clientY,!1,!1,!1,!1,0,null),Se.target.dispatchEvent(Le)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,f&&Ke&&!L&&Je.restart(!0),d&&Ke&&d(z),y&&y(z,ve)}},he=function(Pe){return Pe.touches&&Pe.touches.length>1&&(z.isGesturing=!0)&&$(Pe,z.isDragging)},q=function(){return(z.isGesturing=!1)||b(z)},J=function(Pe){if(!ue(Pe)){var Ke=P(),ve=T();Me((Ke-G)*ne,(ve-te)*ne,1),G=Ke,te=ve,f&&Je.restart(!0)}},de=function(Pe){if(!ue(Pe)){Pe=Rl(Pe,c),ie&&(I=!0);var Ke=(Pe.deltaMode===1?l:Pe.deltaMode===2?gi.innerHeight:1)*g;Me(Pe.deltaX*Ke,Pe.deltaY*Ke,0),f&&!L&&Je.restart(!0)}},me=function(Pe){if(!ue(Pe)){var Ke=Pe.clientX,ve=Pe.clientY,We=Ke-z.x,Le=ve-z.y;z.x=Ke,z.y=ve,Ie=!0,f&&Je.restart(!0),(We||Le)&&qe(We,Le)}},Be=function(Pe){z.event=Pe,j(z)},ft=function(Pe){z.event=Pe,Z(z)},Ht=function(Pe){return ue(Pe)||Rl(Pe,c)&&Y(z)};Je=z._dc=vn.delayedCall(h||.25,Fe).pause(),z.deltaX=z.deltaY=0,z._vx=Xm(0,50,!0),z._vy=Xm(0,50,!0),z.scrollX=P,z.scrollY=T,z.isDragging=z.isGesturing=z.isPressed=!1,cE(this),z.enable=function(Se){return z.isEnabled||(Un(Q?pe:a,"scroll",Wm),o.indexOf("scroll")>=0&&Un(Q?pe:a,"scroll",J,De,fe),o.indexOf("wheel")>=0&&Un(a,"wheel",de,De,fe),(o.indexOf("touch")>=0&&lE||o.indexOf("pointer")>=0)&&(Un(a,qi[0],lt,De,fe),Un(pe,qi[2],N),Un(pe,qi[3],N),re&&Un(a,"click",oe,!0,!0),Y&&Un(a,"click",Ht),$&&Un(pe,"gesturestart",he),b&&Un(pe,"gestureend",q),j&&Un(a,so+"enter",Be),Z&&Un(a,so+"leave",ft),W&&Un(a,so+"move",me)),z.isEnabled=!0,Se&&Se.type&&lt(Se),ye&&ye(z)),z},z.disable=function(){z.isEnabled&&(wa.filter(function(Se){return Se!==z&&iu(Se.target)}).length||In(Q?pe:a,"scroll",Wm),z.isPressed&&(z._vx.reset(),z._vy.reset(),In(L?a:pe,qi[1],Oe,!0)),In(Q?pe:a,"scroll",J,fe),In(a,"wheel",de,fe),In(a,qi[0],lt,fe),In(pe,qi[2],N),In(pe,qi[3],N),In(a,"click",oe,!0),In(a,"click",Ht),In(pe,"gesturestart",he),In(pe,"gestureend",q),In(a,so+"enter",Be),In(a,so+"leave",ft),In(a,so+"move",me),z.isEnabled=z.isPressed=z.isDragging=!1,Xe&&Xe(z))},z.kill=z.revert=function(){z.disable();var Se=wa.indexOf(z);Se>=0&&wa.splice(Se,1),Vr===z&&(Vr=0)},wa.push(z),L&&iu(a)&&(Vr=z),z.enable(_)},XD(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();qt.version="3.12.5";qt.create=function(n){return new qt(n)};qt.register=pE;qt.getAll=function(){return wa.slice()};qt.getById=function(n){return wa.filter(function(e){return e.vars.id===n})[0]};fE()&&vn.registerPlugin(qt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var we,la,ot,Ft,Ji,Lt,mE,nd,Fu,ru,kl,Bc,wn,Pd,jm,Bn,tx,nx,ua,_E,Vh,gE,On,Ym,vE,xE,cs,$m,Sg,Ba,Mg,id,qm,Hh,zc=1,An=Date.now,Gh=An(),zi=0,Bl=0,ix=function(e,t,i){var r=pi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},rx=function(e,t){return t&&(!pi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},YD=function n(){return Bl&&requestAnimationFrame(n)},sx=function(){return Pd=1},ox=function(){return Pd=0},cr=function(e){return e},zl=function(e){return Math.round(e*1e5)/1e5||0},yE=function(){return typeof window<"u"},SE=function(){return we||yE()&&(we=window.gsap)&&we.registerPlugin&&we},Fo=function(e){return!!~mE.indexOf(e)},ME=function(e){return(e==="Height"?Mg:ot["inner"+e])||Ji["client"+e]||Lt["client"+e]},EE=function(e){return Us(e,"getBoundingClientRect")||(Fo(e)?function(){return Mf.width=ot.innerWidth,Mf.height=Mg,Mf}:function(){return Fr(e)})},$D=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Us(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?ME(s):e["client"+s])||0}},qD=function(e,t){return!t||~Mr.indexOf(e)?EE(e):function(){return Mf}},gr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Us(e,i))?o()-EE(e)()[s]:Fo(e)?(Ji[i]||Lt[i])-ME(r):e[i]-e["offset"+r])},Vc=function(e,t){for(var i=0;i<ua.length;i+=3)(!t||~t.indexOf(ua[i+1]))&&e(ua[i],ua[i+1],ua[i+2])},pi=function(e){return typeof e=="string"},Gn=function(e){return typeof e=="function"},Vl=function(e){return typeof e=="number"},oo=function(e){return typeof e=="object"},Pl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Wh=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},oa=Math.abs,TE="left",wE="top",Eg="right",Tg="bottom",To="width",wo="height",su="Right",ou="Left",au="Top",lu="Bottom",Qt="padding",Ii="margin",sl="Width",wg="Height",rn="px",Ui=function(e){return ot.getComputedStyle(e)},KD=function(e){var t=Ui(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},ax=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Fr=function(e,t){var i=t&&Ui(e)[jm]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},rd=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},AE=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},ZD=function(e){return function(t){return we.utils.snap(AE(e),t)}},Ag=function(e){var t=we.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},QD=function(e){return function(t,i){return Ag(AE(e))(t,i.direction)}},Hc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},dn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},fn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Gc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},lx={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Wc={toggleActions:"play",anticipatePin:0},sd={top:0,left:0,center:.5,bottom:1,right:1},vf=function(e,t){if(pi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in sd?sd[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Xc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,f=s.fontSize,h=s.indent,p=s.fontWeight,g=Ft.createElement("div"),_=Fo(i)||Us(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,d=_?Lt:i,v=e.indexOf("start")!==-1,x=v?u:c,y="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(r===on?Eg:Tg)+":"+(o+parseFloat(h))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,d.children[0]?d.insertBefore(g,d.children[0]):d.appendChild(g),g._offset=g["offset"+r.op.d2],xf(g,0,r,v),g},xf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+sl]=1,s["border"+a+sl]=0,s[i.p]=t+"px",we.set(e,s)},nt=[],Km={},Ou,ux=function(){return An()-zi>34&&(Ou||(Ou=requestAnimationFrame(Wr)))},aa=function(){(!On||!On.isPressed||On.startX>Lt.clientWidth)&&(it.cache++,On?Ou||(Ou=requestAnimationFrame(Wr)):Wr(),zi||ko("scrollStart"),zi=An())},Xh=function(){xE=ot.innerWidth,vE=ot.innerHeight},Hl=function(){it.cache++,!wn&&!gE&&!Ft.fullscreenElement&&!Ft.webkitFullscreenElement&&(!Ym||xE!==ot.innerWidth||Math.abs(ot.innerHeight-vE)>ot.innerHeight*.25)&&nd.restart(!0)},Oo={},JD=[],CE=function n(){return fn(et,"scrollEnd",n)||_o(!0)},ko=function(e){return Oo[e]&&Oo[e].map(function(t){return t()})||JD},di=[],RE=function(e){for(var t=0;t<di.length;t+=5)(!e||di[t+4]&&di[t+4].query===e)&&(di[t].style.cssText=di[t+1],di[t].getBBox&&di[t].setAttribute("transform",di[t+2]||""),di[t+3].uncache=1)},Cg=function(e,t){var i;for(Bn=0;Bn<nt.length;Bn++)i=nt[Bn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));id=!0,t&&RE(t),t||ko("revert")},PE=function(e,t){it.cache++,(t||!zn)&&it.forEach(function(i){return Gn(i)&&i.cacheID++&&(i.rec=0)}),pi(e)&&(ot.history.scrollRestoration=Sg=e)},zn,Ao=0,cx,eL=function(){if(cx!==Ao){var e=cx=Ao;requestAnimationFrame(function(){return e===Ao&&_o(!0)})}},bE=function(){Lt.appendChild(Ba),Mg=!On&&Ba.offsetHeight||ot.innerHeight,Lt.removeChild(Ba)},fx=function(e){return Fu(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},_o=function(e,t){if(zi&&!e&&!id){dn(et,"scrollEnd",CE);return}bE(),zn=et.isRefreshing=!0,it.forEach(function(r){return Gn(r)&&++r.cacheID&&(r.rec=r())});var i=ko("refreshInit");_E&&et.sort(),t||Cg(),it.forEach(function(r){Gn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),nt.slice(0).forEach(function(r){return r.refresh()}),id=!1,nt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),qm=1,fx(!0),nt.forEach(function(r){var s=gr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),fx(!1),qm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),it.forEach(function(r){Gn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),PE(Sg,1),nd.pause(),Ao++,zn=2,Wr(2),nt.forEach(function(r){return Gn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),zn=et.isRefreshing=!1,ko("refresh")},Zm=0,yf=1,uu,Wr=function(e){if(e===2||!zn&&!id){et.isUpdating=!0,uu&&uu.update(0);var t=nt.length,i=An(),r=i-Gh>=50,s=t&&nt[0].scroll();if(yf=Zm>s?-1:1,zn||(Zm=s),r&&(zi&&!Pd&&i-zi>200&&(zi=0,ko("scrollEnd")),kl=Gh,Gh=i),yf<0){for(Bn=t;Bn-- >0;)nt[Bn]&&nt[Bn].update(0,r);yf=1}else for(Bn=0;Bn<t;Bn++)nt[Bn]&&nt[Bn].update(0,r);et.isUpdating=!1}Ou=0},Qm=[TE,wE,Tg,Eg,Ii+lu,Ii+su,Ii+au,Ii+ou,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Sf=Qm.concat([To,wo,"boxSizing","max"+sl,"max"+wg,"position",Ii,Qt,Qt+au,Qt+su,Qt+lu,Qt+ou]),tL=function(e,t,i){za(i);var r=e._gsap;if(r.spacerIsNative)za(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},jh=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Qm.length,o=t.style,a=e.style,l;s--;)l=Qm[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Tg]=a[Eg]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[To]=rd(e,Hn)+rn,o[wo]=rd(e,on)+rn,o[Qt]=a[Ii]=a[wE]=a[TE]="0",za(r),a[To]=a["max"+sl]=i[To],a[wo]=a["max"+wg]=i[wo],a[Qt]=i[Qt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},nL=/([A-Z])/g,za=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||we.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(nL,"-$1").toLowerCase())}},jc=function(e){for(var t=Sf.length,i=e.style,r=[],s=0;s<t;s++)r.push(Sf[s],i[Sf[s]]);return r.t=e,r},iL=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Mf={left:0,top:0},dx=function(e,t,i,r,s,o,a,l,u,c,f,h,p,g){Gn(e)&&(e=e(l)),pi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?vf("0"+e.substr(3),i):0));var _=p?p.time():0,m,d,v;if(p&&p.seek(0),isNaN(e)||(e=+e),Vl(e))p&&(e=we.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,h,e)),a&&xf(a,i,r,!0);else{Gn(t)&&(t=t(l));var x=(e||"0").split(" "),y,C,w,E;v=qn(t,l)||Lt,y=Fr(v)||{},(!y||!y.left&&!y.top)&&Ui(v).display==="none"&&(E=v.style.display,v.style.display="block",y=Fr(v),E?v.style.display=E:v.style.removeProperty("display")),C=vf(x[0],y[r.d]),w=vf(x[1]||"0",i),e=y[r.p]-u[r.p]-c+C+s-w,a&&xf(a,w,r,i-w<20||a._isStart&&w>20),i-=i-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var R=e+i,M=o._isStart;m="scroll"+r.d2,xf(o,R,r,M&&R>20||!M&&(f?Math.max(Lt[m],Ji[m]):o.parentNode[m])<=R+1),f&&(u=Fr(a),f&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+rn))}return p&&v&&(m=Fr(v),p.seek(h),d=Fr(v),p._caScrollDist=m[r.p]-d[r.p],e=e/p._caScrollDist*h),p&&p.seek(_),p?e:Math.round(e)},rL=/(webkit|moz|length|cssText|inset)/i,hx=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===Lt){e._stOrig=s.cssText,a=Ui(e);for(o in a)!+o&&!rL.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;we.core.getCache(e).uncache=1,t.appendChild(e)}},DE=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=o,o}},Yc=function(e,t,i){var r={};r[t.p]="+="+i,we.set(e,r)},px=function(e,t){var i=Vs(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,f){var h=o.tween,p=l.onComplete,g={};u=u||i();var _=DE(i,u,function(){h.kill(),o.tween=0});return f=c&&f||0,c=c||a-u,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(u+c*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){it.cache++,o.tween&&Wr()},l.onComplete=function(){o.tween=0,p&&p.call(h)},h=o.tween=we.to(e,l),h};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},dn(e,"wheel",i.wheelHandler),et.isTouch&&dn(e,"touchmove",i.wheelHandler),s},et=function(){function n(t,i){la||n.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),$m(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Bl){this.update=this.refresh=this.kill=cr;return}i=ax(pi(i)||Vl(i)||i.nodeType?{trigger:i}:i,Wc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,f=s.scrub,h=s.trigger,p=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,d=s.onScrubComplete,v=s.onSnapComplete,x=s.once,y=s.snap,C=s.pinReparent,w=s.pinSpacer,E=s.containerAnimation,R=s.fastScrollEnd,M=s.preventOverlaps,S=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Hn:on,D=!f&&f!==0,F=qn(i.scroller||ot),B=we.core.getCache(F),j=Fo(F),Z=("pinType"in i?i.pinType:Us(F,"pinType")||j&&"fixed")==="fixed",W=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],X=D&&i.toggleActions.split(" "),L="markers"in i?i.markers:Wc.markers,$=j?0:parseFloat(Ui(F)["border"+S.p2+sl])||0,b=this,ie=i.onRefreshInit&&function(){return i.onRefreshInit(b)},ye=$D(F,j,S),Xe=qD(F,j),Y=0,ne=0,fe=0,re=Vs(F,S),Ce,be,He,Je,Ge,Ie,I,Mt,ke,z,Re,st,De,P,T,G,te,ee,Q,pe,ce,ge,Ye,oe,ue,Fe,Ue,Me,qe,Oe,lt,N,he,q,J,de,me,Be,ft;if(b._startClamp=b._endClamp=!1,b._dir=S,m*=45,b.scroller=F,b.scroll=E?E.time.bind(E):re,Je=re(),b.vars=i,r=r||i.animation,"refreshPriority"in i&&(_E=1,i.refreshPriority===-9999&&(uu=b)),B.tweenScroll=B.tweenScroll||{top:px(F,on),left:px(F,Hn)},b.tweenTo=Ce=B.tweenScroll[S.p],b.scrubDuration=function(ve){he=Vl(ve)&&ve,he?N?N.duration(ve):N=we.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:he,paused:!0,onComplete:function(){return d&&d(b)}}):(N&&N.progress(1).kill(),N=0)},r&&(r.vars.lazy=!1,r._initted&&!b.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),b.animation=r.pause(),r.scrollTrigger=b,b.scrubDuration(f),Oe=0,l||(l=r.vars.id)),y&&((!oo(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in Lt.style&&we.set(j?[Lt,Ji]:F,{scrollBehavior:"auto"}),it.forEach(function(ve){return Gn(ve)&&ve.target===(j?Ft.scrollingElement||Ji:F)&&(ve.smooth=!1)}),He=Gn(y.snapTo)?y.snapTo:y.snapTo==="labels"?ZD(r):y.snapTo==="labelsDirectional"?QD(r):y.directional!==!1?function(ve,We){return Ag(y.snapTo)(ve,An()-ne<500?0:We.direction)}:we.utils.snap(y.snapTo),q=y.duration||{min:.1,max:2},q=oo(q)?ru(q.min,q.max):ru(q,q),J=we.delayedCall(y.delay||he/2||.1,function(){var ve=re(),We=An()-ne<500,Le=Ce.tween;if((We||Math.abs(b.getVelocity())<10)&&!Le&&!Pd&&Y!==ve){var Ve=(ve-Ie)/P,Xt=r&&!D?r.totalProgress():Ve,tt=We?0:(Xt-lt)/(An()-kl)*1e3||0,At=we.utils.clamp(-Ve,1-Ve,oa(tt/2)*tt/.185),nn=Ve+(y.inertia===!1?0:At),Et,Tt,ht=y,li=ht.onStart,Pt=ht.onInterrupt,Nn=ht.onComplete;if(Et=He(nn,b),Vl(Et)||(Et=nn),Tt=Math.round(Ie+Et*P),ve<=I&&ve>=Ie&&Tt!==ve){if(Le&&!Le._initted&&Le.data<=oa(Tt-ve))return;y.inertia===!1&&(At=Et-Ve),Ce(Tt,{duration:q(oa(Math.max(oa(nn-Xt),oa(Et-Xt))*.185/tt/.05||0)),ease:y.ease||"power3",data:oa(Tt-ve),onInterrupt:function(){return J.restart(!0)&&Pt&&Pt(b)},onComplete:function(){b.update(),Y=re(),r&&(N?N.resetTo("totalProgress",Et,r._tTime/r._tDur):r.progress(Et)),Oe=lt=r&&!D?r.totalProgress():b.progress,v&&v(b),Nn&&Nn(b)}},ve,At*P,Tt-ve-At*P),li&&li(b,Ce.tween)}}else b.isActive&&Y!==ve&&J.restart(!0)}).pause()),l&&(Km[l]=b),h=b.trigger=qn(h||p!==!0&&p),ft=h&&h._gsap&&h._gsap.stRevert,ft&&(ft=ft(b)),p=p===!0?h:qn(p),pi(a)&&(a={targets:h,className:a}),p&&(g===!1||g===Ii||(g=!g&&p.parentNode&&p.parentNode.style&&Ui(p.parentNode).display==="flex"?!1:Qt),b.pin=p,be=we.core.getCache(p),be.spacer?T=be.pinState:(w&&(w=qn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),be.spacerIsNative=!!w,w&&(be.spacerState=jc(w))),be.spacer=ee=w||Ft.createElement("div"),ee.classList.add("pin-spacer"),l&&ee.classList.add("pin-spacer-"+l),be.pinState=T=jc(p)),i.force3D!==!1&&we.set(p,{force3D:!0}),b.spacer=ee=be.spacer,qe=Ui(p),oe=qe[g+S.os2],pe=we.getProperty(p),ce=we.quickSetter(p,S.a,rn),jh(p,ee,qe),te=jc(p)),L){st=oo(L)?ax(L,lx):lx,z=Xc("scroller-start",l,F,S,st,0),Re=Xc("scroller-end",l,F,S,st,0,z),Q=z["offset"+S.op.d2];var Ht=qn(Us(F,"content")||F);Mt=this.markerStart=Xc("start",l,Ht,S,st,Q,0,E),ke=this.markerEnd=Xc("end",l,Ht,S,st,Q,0,E),E&&(Be=we.quickSetter([Mt,ke],S.a,rn)),!Z&&!(Mr.length&&Us(F,"fixedMarkers")===!0)&&(KD(j?Lt:F),we.set([z,Re],{force3D:!0}),Fe=we.quickSetter(z,S.a,rn),Me=we.quickSetter(Re,S.a,rn))}if(E){var Se=E.vars.onUpdate,Pe=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){b.update(0,0,1),Se&&Se.apply(E,Pe||[])})}if(b.previous=function(){return nt[nt.indexOf(b)-1]},b.next=function(){return nt[nt.indexOf(b)+1]},b.revert=function(ve,We){if(!We)return b.kill(!0);var Le=ve!==!1||!b.enabled,Ve=wn;Le!==b.isReverted&&(Le&&(de=Math.max(re(),b.scroll.rec||0),fe=b.progress,me=r&&r.progress()),Mt&&[Mt,ke,z,Re].forEach(function(Xt){return Xt.style.display=Le?"none":"block"}),Le&&(wn=b,b.update(Le)),p&&(!C||!b.isActive)&&(Le?tL(p,ee,T):jh(p,ee,Ui(p),ue)),Le||b.update(Le),wn=Ve,b.isReverted=Le)},b.refresh=function(ve,We,Le,Ve){if(!((wn||!b.enabled)&&!We)){if(p&&ve&&zi){dn(n,"scrollEnd",CE);return}!zn&&ie&&ie(b),wn=b,Ce.tween&&!Le&&(Ce.tween.kill(),Ce.tween=0),N&&N.pause(),_&&r&&r.revert({kill:!1}).invalidate(),b.isReverted||b.revert(!0,!0),b._subPinOffset=!1;var Xt=ye(),tt=Xe(),At=E?E.duration():gr(F,S),nn=P<=.01,Et=0,Tt=Ve||0,ht=oo(Le)?Le.end:i.end,li=i.endTrigger||h,Pt=oo(Le)?Le.start:i.start||(i.start===0||!h?0:p?"0 0":"0 100%"),Nn=b.pinnedContainer=i.pinnedContainer&&qn(i.pinnedContainer,b),A=h&&Math.max(0,nt.indexOf(b))||0,U=A,V,H,k,ae,le,_e,Ee,ze,je,Ae,$e,dt,pt;for(L&&oo(Le)&&(dt=we.getProperty(z,S.p),pt=we.getProperty(Re,S.p));U--;)_e=nt[U],_e.end||_e.refresh(0,1)||(wn=b),Ee=_e.pin,Ee&&(Ee===h||Ee===p||Ee===Nn)&&!_e.isReverted&&(Ae||(Ae=[]),Ae.unshift(_e),_e.revert(!0,!0)),_e!==nt[U]&&(A--,U--);for(Gn(Pt)&&(Pt=Pt(b)),Pt=ix(Pt,"start",b),Ie=dx(Pt,h,Xt,S,re(),Mt,z,b,tt,$,Z,At,E,b._startClamp&&"_startClamp")||(p?-.001:0),Gn(ht)&&(ht=ht(b)),pi(ht)&&!ht.indexOf("+=")&&(~ht.indexOf(" ")?ht=(pi(Pt)?Pt.split(" ")[0]:"")+ht:(Et=vf(ht.substr(2),Xt),ht=pi(Pt)?Pt:(E?we.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Ie):Ie)+Et,li=h)),ht=ix(ht,"end",b),I=Math.max(Ie,dx(ht||(li?"100% 0":At),li,Xt,S,re()+Et,ke,Re,b,tt,$,Z,At,E,b._endClamp&&"_endClamp"))||-.001,Et=0,U=A;U--;)_e=nt[U],Ee=_e.pin,Ee&&_e.start-_e._pinPush<=Ie&&!E&&_e.end>0&&(V=_e.end-(b._startClamp?Math.max(0,_e.start):_e.start),(Ee===h&&_e.start-_e._pinPush<Ie||Ee===Nn)&&isNaN(Pt)&&(Et+=V*(1-_e.progress)),Ee===p&&(Tt+=V));if(Ie+=Et,I+=Et,b._startClamp&&(b._startClamp+=Et),b._endClamp&&!zn&&(b._endClamp=I||-.001,I=Math.min(I,gr(F,S))),P=I-Ie||(Ie-=.01)&&.001,nn&&(fe=we.utils.clamp(0,1,we.utils.normalize(Ie,I,de))),b._pinPush=Tt,Mt&&Et&&(V={},V[S.a]="+="+Et,Nn&&(V[S.p]="-="+re()),we.set([Mt,ke],V)),p&&!(qm&&b.end>=gr(F,S)))V=Ui(p),ae=S===on,k=re(),ge=parseFloat(pe(S.a))+Tt,!At&&I>1&&($e=(j?Ft.scrollingElement||Ji:F).style,$e={style:$e,value:$e["overflow"+S.a.toUpperCase()]},j&&Ui(Lt)["overflow"+S.a.toUpperCase()]!=="scroll"&&($e.style["overflow"+S.a.toUpperCase()]="scroll")),jh(p,ee,V),te=jc(p),H=Fr(p,!0),ze=Z&&Vs(F,ae?Hn:on)(),g?(ue=[g+S.os2,P+Tt+rn],ue.t=ee,U=g===Qt?rd(p,S)+P+Tt:0,U&&(ue.push(S.d,U+rn),ee.style.flexBasis!=="auto"&&(ee.style.flexBasis=U+rn)),za(ue),Nn&&nt.forEach(function(Kt){Kt.pin===Nn&&Kt.vars.pinSpacing!==!1&&(Kt._subPinOffset=!0)}),Z&&re(de)):(U=rd(p,S),U&&ee.style.flexBasis!=="auto"&&(ee.style.flexBasis=U+rn)),Z&&(le={top:H.top+(ae?k-Ie:ze)+rn,left:H.left+(ae?ze:k-Ie)+rn,boxSizing:"border-box",position:"fixed"},le[To]=le["max"+sl]=Math.ceil(H.width)+rn,le[wo]=le["max"+wg]=Math.ceil(H.height)+rn,le[Ii]=le[Ii+au]=le[Ii+su]=le[Ii+lu]=le[Ii+ou]="0",le[Qt]=V[Qt],le[Qt+au]=V[Qt+au],le[Qt+su]=V[Qt+su],le[Qt+lu]=V[Qt+lu],le[Qt+ou]=V[Qt+ou],G=iL(T,le,C),zn&&re(0)),r?(je=r._initted,Vh(1),r.render(r.duration(),!0,!0),Ye=pe(S.a)-ge+P+Tt,Ue=Math.abs(P-Ye)>1,Z&&Ue&&G.splice(G.length-2,2),r.render(0,!0,!0),je||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Vh(0)):Ye=P,$e&&($e.value?$e.style["overflow"+S.a.toUpperCase()]=$e.value:$e.style.removeProperty("overflow-"+S.a));else if(h&&re()&&!E)for(H=h.parentNode;H&&H!==Lt;)H._pinOffset&&(Ie-=H._pinOffset,I-=H._pinOffset),H=H.parentNode;Ae&&Ae.forEach(function(Kt){return Kt.revert(!1,!0)}),b.start=Ie,b.end=I,Je=Ge=zn?de:re(),!E&&!zn&&(Je<de&&re(de),b.scroll.rec=0),b.revert(!1,!0),ne=An(),J&&(Y=-1,J.restart(!0)),wn=0,r&&D&&(r._initted||me)&&r.progress()!==me&&r.progress(me||0,!0).render(r.time(),!0,!0),(nn||fe!==b.progress||E||_)&&(r&&!D&&r.totalProgress(E&&Ie<-.001&&!fe?we.utils.normalize(Ie,I,0):fe,!0),b.progress=nn||(Je-Ie)/P===fe?0:fe),p&&g&&(ee._pinOffset=Math.round(b.progress*Ye)),N&&N.invalidate(),isNaN(dt)||(dt-=we.getProperty(z,S.p),pt-=we.getProperty(Re,S.p),Yc(z,S,dt),Yc(Mt,S,dt-(Ve||0)),Yc(Re,S,pt),Yc(ke,S,pt-(Ve||0))),nn&&!zn&&b.update(),c&&!zn&&!De&&(De=!0,c(b),De=!1)}},b.getVelocity=function(){return(re()-Ge)/(An()-kl)*1e3||0},b.endAnimation=function(){Pl(b.callbackAnimation),r&&(N?N.progress(1):r.paused()?D||Pl(r,b.direction<0,1):Pl(r,r.reversed()))},b.labelToScroll=function(ve){return r&&r.labels&&(Ie||b.refresh()||Ie)+r.labels[ve]/r.duration()*P||0},b.getTrailing=function(ve){var We=nt.indexOf(b),Le=b.direction>0?nt.slice(0,We).reverse():nt.slice(We+1);return(pi(ve)?Le.filter(function(Ve){return Ve.vars.preventOverlaps===ve}):Le).filter(function(Ve){return b.direction>0?Ve.end<=Ie:Ve.start>=I})},b.update=function(ve,We,Le){if(!(E&&!Le&&!ve)){var Ve=zn===!0?de:b.scroll(),Xt=ve?0:(Ve-Ie)/P,tt=Xt<0?0:Xt>1?1:Xt||0,At=b.progress,nn,Et,Tt,ht,li,Pt,Nn,A;if(We&&(Ge=Je,Je=E?re():Ve,y&&(lt=Oe,Oe=r&&!D?r.totalProgress():tt)),m&&p&&!wn&&!zc&&zi&&(!tt&&Ie<Ve+(Ve-Ge)/(An()-kl)*m?tt=1e-4:tt===1&&I>Ve+(Ve-Ge)/(An()-kl)*m&&(tt=.9999)),tt!==At&&b.enabled){if(nn=b.isActive=!!tt&&tt<1,Et=!!At&&At<1,Pt=nn!==Et,li=Pt||!!tt!=!!At,b.direction=tt>At?1:-1,b.progress=tt,li&&!wn&&(Tt=tt&&!At?0:tt===1?1:At===1?2:3,D&&(ht=!Pt&&X[Tt+1]!=="none"&&X[Tt+1]||X[Tt],A=r&&(ht==="complete"||ht==="reset"||ht in r))),M&&(Pt||A)&&(A||f||!r)&&(Gn(M)?M(b):b.getTrailing(M).forEach(function(k){return k.endAnimation()})),D||(N&&!wn&&!zc?(N._dp._time-N._start!==N._time&&N.render(N._dp._time-N._start),N.resetTo?N.resetTo("totalProgress",tt,r._tTime/r._tDur):(N.vars.totalProgress=tt,N.invalidate().restart())):r&&r.totalProgress(tt,!!(wn&&(ne||ve)))),p){if(ve&&g&&(ee.style[g+S.os2]=oe),!Z)ce(zl(ge+Ye*tt));else if(li){if(Nn=!ve&&tt>At&&I+1>Ve&&Ve+1>=gr(F,S),C)if(!ve&&(nn||Nn)){var U=Fr(p,!0),V=Ve-Ie;hx(p,Lt,U.top+(S===on?V:0)+rn,U.left+(S===on?0:V)+rn)}else hx(p,ee);za(nn||Nn?G:te),Ue&&tt<1&&nn||ce(ge+(tt===1&&!Nn?Ye:0))}}y&&!Ce.tween&&!wn&&!zc&&J.restart(!0),a&&(Pt||x&&tt&&(tt<1||!Hh))&&Fu(a.targets).forEach(function(k){return k.classList[nn||x?"add":"remove"](a.className)}),o&&!D&&!ve&&o(b),li&&!wn?(D&&(A&&(ht==="complete"?r.pause().totalProgress(1):ht==="reset"?r.restart(!0).pause():ht==="restart"?r.restart(!0):r[ht]()),o&&o(b)),(Pt||!Hh)&&(u&&Pt&&Wh(b,u),W[Tt]&&Wh(b,W[Tt]),x&&(tt===1?b.kill(!1,1):W[Tt]=0),Pt||(Tt=tt===1?1:3,W[Tt]&&Wh(b,W[Tt]))),R&&!nn&&Math.abs(b.getVelocity())>(Vl(R)?R:2500)&&(Pl(b.callbackAnimation),N?N.progress(1):Pl(r,ht==="reverse"?1:!tt,1))):D&&o&&!wn&&o(b)}if(Me){var H=E?Ve/E.duration()*(E._caScrollDist||0):Ve;Fe(H+(z._isFlipped?1:0)),Me(H)}Be&&Be(-Ve/E.duration()*(E._caScrollDist||0))}},b.enable=function(ve,We){b.enabled||(b.enabled=!0,dn(F,"resize",Hl),j||dn(F,"scroll",aa),ie&&dn(n,"refreshInit",ie),ve!==!1&&(b.progress=fe=0,Je=Ge=Y=re()),We!==!1&&b.refresh())},b.getTween=function(ve){return ve&&Ce?Ce.tween:N},b.setPositions=function(ve,We,Le,Ve){if(E){var Xt=E.scrollTrigger,tt=E.duration(),At=Xt.end-Xt.start;ve=Xt.start+At*ve/tt,We=Xt.start+At*We/tt}b.refresh(!1,!1,{start:rx(ve,Le&&!!b._startClamp),end:rx(We,Le&&!!b._endClamp)},Ve),b.update()},b.adjustPinSpacing=function(ve){if(ue&&ve){var We=ue.indexOf(S.d)+1;ue[We]=parseFloat(ue[We])+ve+rn,ue[1]=parseFloat(ue[1])+ve+rn,za(ue)}},b.disable=function(ve,We){if(b.enabled&&(ve!==!1&&b.revert(!0,!0),b.enabled=b.isActive=!1,We||N&&N.pause(),de=0,be&&(be.uncache=1),ie&&fn(n,"refreshInit",ie),J&&(J.pause(),Ce.tween&&Ce.tween.kill()&&(Ce.tween=0)),!j)){for(var Le=nt.length;Le--;)if(nt[Le].scroller===F&&nt[Le]!==b)return;fn(F,"resize",Hl),j||fn(F,"scroll",aa)}},b.kill=function(ve,We){b.disable(ve,We),N&&!We&&N.kill(),l&&delete Km[l];var Le=nt.indexOf(b);Le>=0&&nt.splice(Le,1),Le===Bn&&yf>0&&Bn--,Le=0,nt.forEach(function(Ve){return Ve.scroller===b.scroller&&(Le=1)}),Le||zn||(b.scroll.rec=0),r&&(r.scrollTrigger=null,ve&&r.revert({kill:!1}),We||r.kill()),Mt&&[Mt,ke,z,Re].forEach(function(Ve){return Ve.parentNode&&Ve.parentNode.removeChild(Ve)}),uu===b&&(uu=0),p&&(be&&(be.uncache=1),Le=0,nt.forEach(function(Ve){return Ve.pin===p&&Le++}),Le||(be.spacer=0)),i.onKill&&i.onKill(b)},nt.push(b),b.enable(!1,!1),ft&&ft(b),r&&r.add&&!P){var Ke=b.update;b.update=function(){b.update=Ke,Ie||I||b.refresh()},we.delayedCall(.01,b.update),P=.01,Ie=I=0}else b.refresh();p&&eL()},n.register=function(i){return la||(we=i||SE(),yE()&&window.document&&n.enable(),la=Bl),la},n.defaults=function(i){if(i)for(var r in i)Wc[r]=i[r];return Wc},n.disable=function(i,r){Bl=0,nt.forEach(function(o){return o[r?"kill":"disable"](i)}),fn(ot,"wheel",aa),fn(Ft,"scroll",aa),clearInterval(Bc),fn(Ft,"touchcancel",cr),fn(Lt,"touchstart",cr),Hc(fn,Ft,"pointerdown,touchstart,mousedown",sx),Hc(fn,Ft,"pointerup,touchend,mouseup",ox),nd.kill(),Vc(fn);for(var s=0;s<it.length;s+=3)Gc(fn,it[s],it[s+1]),Gc(fn,it[s],it[s+2])},n.enable=function(){if(ot=window,Ft=document,Ji=Ft.documentElement,Lt=Ft.body,we&&(Fu=we.utils.toArray,ru=we.utils.clamp,$m=we.core.context||cr,Vh=we.core.suppressOverwrites||cr,Sg=ot.history.scrollRestoration||"auto",Zm=ot.pageYOffset,we.core.globals("ScrollTrigger",n),Lt)){Bl=1,Ba=document.createElement("div"),Ba.style.height="100vh",Ba.style.position="absolute",bE(),YD(),qt.register(we),n.isTouch=qt.isTouch,cs=qt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ym=qt.isTouch===1,dn(ot,"wheel",aa),mE=[ot,Ft,Ji,Lt],we.matchMedia?(n.matchMedia=function(l){var u=we.matchMedia(),c;for(c in l)u.add(c,l[c]);return u},we.addEventListener("matchMediaInit",function(){return Cg()}),we.addEventListener("matchMediaRevert",function(){return RE()}),we.addEventListener("matchMedia",function(){_o(0,1),ko("matchMedia")}),we.matchMedia("(orientation: portrait)",function(){return Xh(),Xh})):console.warn("Requires GSAP 3.11.0 or later"),Xh(),dn(Ft,"scroll",aa);var i=Lt.style,r=i.borderTopStyle,s=we.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Fr(Lt),on.m=Math.round(o.top+on.sc())||0,Hn.m=Math.round(o.left+Hn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),Bc=setInterval(ux,250),we.delayedCall(.5,function(){return zc=0}),dn(Ft,"touchcancel",cr),dn(Lt,"touchstart",cr),Hc(dn,Ft,"pointerdown,touchstart,mousedown",sx),Hc(dn,Ft,"pointerup,touchend,mouseup",ox),jm=we.utils.checkPrefix("transform"),Sf.push(jm),la=An(),nd=we.delayedCall(.2,_o).pause(),ua=[Ft,"visibilitychange",function(){var l=ot.innerWidth,u=ot.innerHeight;Ft.hidden?(tx=l,nx=u):(tx!==l||nx!==u)&&Hl()},Ft,"DOMContentLoaded",_o,ot,"load",_o,ot,"resize",Hl],Vc(dn),nt.forEach(function(l){return l.enable(0,1)}),a=0;a<it.length;a+=3)Gc(fn,it[a],it[a+1]),Gc(fn,it[a],it[a+2])}},n.config=function(i){"limitCallbacks"in i&&(Hh=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Bc)||(Bc=r)&&setInterval(ux,r),"ignoreMobileResize"in i&&(Ym=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Vc(fn)||Vc(dn,i.autoRefreshEvents||"none"),gE=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=qn(i),o=it.indexOf(s),a=Fo(s);~o&&it.splice(o,a?6:2),r&&(a?Mr.unshift(ot,r,Lt,r,Ji,r):Mr.unshift(s,r))},n.clearMatchMedia=function(i){nt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(pi(i)?qn(i):i).getBoundingClientRect(),a=o[s?To:wo]*r||0;return s?o.right-a>0&&o.left+a<ot.innerWidth:o.bottom-a>0&&o.top+a<ot.innerHeight},n.positionInViewport=function(i,r,s){pi(i)&&(i=qn(i));var o=i.getBoundingClientRect(),a=o[s?To:wo],l=r==null?a/2:r in sd?sd[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ot.innerWidth:(o.top+l)/ot.innerHeight},n.killAll=function(i){if(nt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Oo.killAll||[];Oo={},r.forEach(function(s){return s()})}},n}();et.version="3.12.5";et.saveStyles=function(n){return n?Fu(n).forEach(function(e){if(e&&e.style){var t=di.indexOf(e);t>=0&&di.splice(t,5),di.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),$m())}}):di};et.revert=function(n,e){return Cg(!n,e)};et.create=function(n,e){return new et(n,e)};et.refresh=function(n){return n?Hl():(la||et.register())&&_o(!0)};et.update=function(n){return++it.cache&&Wr(n===!0?2:0)};et.clearScrollMemory=PE;et.maxScroll=function(n,e){return gr(n,e?Hn:on)};et.getScrollFunc=function(n,e){return Vs(qn(n),e?Hn:on)};et.getById=function(n){return Km[n]};et.getAll=function(){return nt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};et.isScrolling=function(){return!!zi};et.snapDirectional=Ag;et.addEventListener=function(n,e){var t=Oo[n]||(Oo[n]=[]);~t.indexOf(e)||t.push(e)};et.removeEventListener=function(n,e){var t=Oo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};et.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var f=[],h=[],p=we.delayedCall(r,function(){c(f,h),f=[],h=[]}).pause();return function(g){f.length||p.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Gn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Gn(s)&&(s=s(),dn(et,"refresh",function(){return s=e.batchMax()})),Fu(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(et.create(u))}),t};var mx=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Yh=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(qt.isTouch?" pinch-zoom":""):"none",e===Ji&&n(Lt,t)},$c={auto:1,scroll:1},sL=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||we.core.getCache(s),a=An(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Lt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!($c[(l=Ui(s)).overflowY]||$c[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Fo(s)&&($c[(l=Ui(s)).overflowY]||$c[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},LE=function(e,t,i,r){return qt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&sL,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&dn(Ft,qt.eventTypes[0],gx,!1,!0)},onDisable:function(){return fn(Ft,qt.eventTypes[0],gx,!0)}})},oL=/(input|label|select|textarea)/i,_x,gx=function(e){var t=oL.test(e.target.tagName);(t||_x)&&(e._gsapAllow=!0,_x=t)},aL=function(e){oo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=qn(e.target)||Ji,c=we.core.globals().ScrollSmoother,f=c&&c.get(),h=cs&&(e.content&&qn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),p=Vs(u,on),g=Vs(u,Hn),_=1,m=(qt.isTouch&&ot.visualViewport?ot.visualViewport.scale*ot.visualViewport.width:ot.outerWidth)/ot.innerWidth,d=0,v=Gn(r)?function(){return r(a)}:function(){return r||2.8},x,y,C=LE(u,e.type,!0,s),w=function(){return y=!1},E=cr,R=cr,M=function(){l=gr(u,on),R=ru(cs?1:0,l),i&&(E=ru(0,gr(u,Hn))),x=Ao},S=function(){h._gsap.y=zl(parseFloat(h._gsap.y)+p.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},D=function(){if(y){requestAnimationFrame(w);var L=zl(a.deltaY/2),$=R(p.v-L);if(h&&$!==p.v+p.offset){p.offset=$-p.v;var b=zl((parseFloat(h&&h._gsap.y)||0)-p.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+b+", 0, 1)",h._gsap.y=b+"px",p.cacheID=it.cache,Wr()}return!0}p.offset&&S(),y=!0},F,B,j,Z,W=function(){M(),F.isActive()&&F.vars.scrollY>l&&(p()>l?F.progress(1)&&p(l):F.resetTo("scrollY",l))};return h&&we.set(h,{y:"+=0"}),e.ignoreCheck=function(X){return cs&&X.type==="touchmove"&&D()||_>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){y=!1;var X=_;_=zl((ot.visualViewport&&ot.visualViewport.scale||1)/m),F.pause(),X!==_&&Yh(u,_>1.01?!0:i?!1:"x"),B=g(),j=p(),M(),x=Ao},e.onRelease=e.onGestureStart=function(X,L){if(p.offset&&S(),!L)Z.restart(!0);else{it.cache++;var $=v(),b,ie;i&&(b=g(),ie=b+$*.05*-X.velocityX/.227,$*=mx(g,b,ie,gr(u,Hn)),F.vars.scrollX=E(ie)),b=p(),ie=b+$*.05*-X.velocityY/.227,$*=mx(p,b,ie,gr(u,on)),F.vars.scrollY=R(ie),F.invalidate().duration($).play(.01),(cs&&F.vars.scrollY>=l||b>=l-1)&&we.to({},{onUpdate:W,duration:$})}o&&o(X)},e.onWheel=function(){F._ts&&F.pause(),An()-d>1e3&&(x=0,d=An())},e.onChange=function(X,L,$,b,ie){if(Ao!==x&&M(),L&&i&&g(E(b[2]===L?B+(X.startX-X.x):g()+L-b[1])),$){p.offset&&S();var ye=ie[2]===$,Xe=ye?j+X.startY-X.y:p()+$-ie[1],Y=R(Xe);ye&&Xe!==Y&&(j+=Y-Xe),p(Y)}($||L)&&Wr()},e.onEnable=function(){Yh(u,i?!1:"x"),et.addEventListener("refresh",W),dn(ot,"resize",W),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=g.smooth=!1),C.enable()},e.onDisable=function(){Yh(u,!0),fn(ot,"resize",W),et.removeEventListener("refresh",W),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new qt(e),a.iOS=cs,cs&&!p()&&p(1),cs&&we.ticker.add(cr),Z=a._dc,F=we.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:DE(p,p(),function(){return F.pause()})},onUpdate:Wr,onComplete:Z.vars.onComplete}),a};et.sort=function(n){return nt.sort(n||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};et.observe=function(n){return new qt(n)};et.normalizeScroll=function(n){if(typeof n>"u")return On;if(n===!0&&On)return On.enable();if(n===!1){On&&On.kill(),On=n;return}var e=n instanceof qt?n:aL(n);return On&&On.target===e.target&&On.kill(),Fo(e.target)&&(On=e),e};et.core={_getVelocityProp:Xm,_inputObserver:LE,_scrollers:it,_proxies:Mr,bridge:{ss:function(){zi||ko("scrollStart"),zi=An()},ref:function(){return wn}}};SE()&&we.registerPlugin(et);Pn.registerPlugin(et);function lL(){const n=[{id:1,name:"Project 1",img:"https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600"},{id:2,name:"Project 2",img:"https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600"},{id:3,name:"Project 3",img:"https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600"}],[e,t]=St.useState(null);St.useEffect(()=>(et.create({trigger:".box3",start:"top 80%",end:"bottom 50%",markers:!1,onEnter:()=>{Pn.fromTo(".projects-header span",{y:100,opacity:0,skewY:7},{y:0,opacity:1,skewY:0,duration:1.5,ease:"power4.out",stagger:.2})}}),document.querySelectorAll(".project-card").forEach(r=>{et.create({trigger:r,start:"top 50%",end:"bottom 5%",markers:!1,onEnter:()=>{Pn.fromTo(".project-card",{opacity:0,y:50},{opacity:1,y:0,duration:2,ease:"power3.out",stagger:{amount:1,from:"start"}})}})}),()=>et.getAll().forEach(r=>r.kill())),[]);const i=()=>{document.body.style.overflow="hidden",Pn.to(".circle-button",{backgroundColor:"#fff",color:"#fff",zIndex:2,scale:30,rotation:360,duration:1,ease:"power4.inOut",onComplete:()=>{document.body.style.overflow="",window.location.href="https://github.com/MohammedSaifMI?tab=repositories"}})};return O.jsxs("div",{className:"box3 project-showcase-container d-flex flex-column min-vh-100 text-white",children:[O.jsxs("div",{className:"top-nav d-flex justify-content-between align-items-center px-4 py-3",children:[O.jsx(cg,{}),O.jsx("p",{className:"page-number",children:"03/"}),O.jsx("p",{children:"Projects"}),O.jsx("p",{className:"page-total",children:"/04"})]}),O.jsxs("div",{className:"content-wrapper d-flex flex-column flex-md-row align-items-center",children:[O.jsx("div",{className:"left-section",children:O.jsx("div",{className:"circle-button",onMouseEnter:()=>{Pn.to(".circle-button",{backgroundColor:"#fff",color:"black",scale:1.2,duration:.4,ease:"elastic.out(1, 0.3)"})},onMouseLeave:()=>{Pn.to(".circle-button",{backgroundColor:"",color:"#fff",scale:1,duration:.4,ease:"elastic.out(1, 0.3)"})},onClick:i,children:"VIEW ALL PROJECTS"})}),O.jsx("div",{className:"right-section",children:O.jsxs("h2",{className:"projects-header",children:[O.jsx("span",{children:"Here are some selected projects that exemplify"}),O.jsx("br",{}),O.jsx("span",{children:"my passion for creating impactful web experiences"}),O.jsx("br",{}),O.jsx("span",{children:"and innovative software solutions."})]})})]}),O.jsxs("div",{className:"projects-center mt-4",children:[O.jsx("div",{className:"projects-row",children:n.map(r=>O.jsxs("div",{className:"project-card",onMouseEnter:()=>t(r.id),onMouseLeave:()=>t(null),children:[O.jsx("img",{src:r.img,alt:r.name,className:"project-image",style:{opacity:e&&e!==r.id?.2:1}}),O.jsx("div",{className:"project-name",children:r.name})]},r.id))}),e&&O.jsx("div",{className:"project-name",style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:100,color:"white",fontSize:"2rem",pointerEvents:"none"},children:n.find(r=>r.id===e).name})]})]})}function uL(){const[n,e]=St.useState(!1),t=()=>{e(!n)};return O.jsxs("div",{className:"navbar-container w-100",children:[O.jsx("div",{className:"container-fluid",children:O.jsxs("nav",{className:"navbar",children:[O.jsx("a",{className:"navbar-brand",href:"#",children:O.jsx("img",{className:"logo",src:GD,alt:"Logo"})}),O.jsxs("div",{className:"navbar-nav ",children:[O.jsx("a",{className:"nav-link",href:"#",children:"About"}),O.jsx("a",{className:"nav-link",href:"#",children:"Project"}),O.jsx("a",{className:"nav-link",href:"#",children:"Contact"})]}),O.jsx("button",{className:`navbar-toggler  d-lg-none ${n?"open":""}`,onClick:t,children:O.jsx("span",{className:"navbar-toggler-icon"})})]})}),O.jsx("div",{className:`menu-overlay ${n?"show":""}`,children:O.jsxs("ul",{className:"menu-list",children:[O.jsx("li",{className:"menu-item",children:O.jsx("a",{href:"#",onClick:t,children:"About"})}),O.jsx("li",{className:"menu-item",children:O.jsx("a",{href:"#",onClick:t,children:"Project"})}),O.jsx("li",{className:"menu-item",children:O.jsx("a",{href:"#",onClick:t,children:"Contact"})}),O.jsx("li",{children:O.jsx("hr",{})})]})})]})}function cL(){const[n,e]=St.useState(!0);return St.useEffect(()=>{const t=setTimeout(()=>{e(!1)},7e3);return()=>clearTimeout(t)},[]),O.jsxs(O.Fragment,{children:[O.jsxs("div",{className:"background",children:[O.jsx("span",{}),O.jsx("span",{}),O.jsx("span",{}),O.jsx("span",{}),O.jsx("span",{}),O.jsx("span",{}),O.jsx("span",{}),O.jsx("span",{}),O.jsx("span",{}),O.jsx("span",{}),O.jsx("span",{}),O.jsx("span",{})]}),O.jsx(uL,{}),O.jsx(SA,{}),O.jsx(ID,{}),O.jsx(lL,{}),O.jsx(VD,{}),O.jsx(HD,{})]})}bS(document.getElementById("root")).render(O.jsx(St.StrictMode,{children:O.jsx(cL,{})}));
