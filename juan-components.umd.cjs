(function(h,x){typeof exports=="object"&&typeof module<"u"?x(require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["react","react-dom"],x):(h=typeof globalThis<"u"?globalThis:h||self,x(h.require$$0,h.require$$0$1))})(this,function(h,x){"use strict";var z={exports:{}},j={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne;function je(){if(ne)return j;ne=1;var g=h,E=Symbol.for("react.element"),I=Symbol.for("react.fragment"),O=Object.prototype.hasOwnProperty,L=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U={key:!0,ref:!0,__self:!0,__source:!0};function W(m,l,P){var v,y={},b=null,V=null;P!==void 0&&(b=""+P),l.key!==void 0&&(b=""+l.key),l.ref!==void 0&&(V=l.ref);for(v in l)O.call(l,v)&&!U.hasOwnProperty(v)&&(y[v]=l[v]);if(m&&m.defaultProps)for(v in l=m.defaultProps,l)y[v]===void 0&&(y[v]=l[v]);return{$$typeof:E,type:m,key:b,ref:V,props:y,_owner:L.current}}return j.Fragment=I,j.jsx=W,j.jsxs=W,j}var k={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae;function ke(){return ae||(ae=1,process.env.NODE_ENV!=="production"&&function(){var g=h,E=Symbol.for("react.element"),I=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),m=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),oe=Symbol.iterator,Fe="@@iterator";function Ae(e){if(e===null||typeof e!="object")return null;var r=oe&&e[oe]||e[Fe];return typeof r=="function"?r:null}var C=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function c(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Ie("error",e,t)}}function Ie(e,r,t){{var n=C.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var We=!1,Ne=!1,Ye=!1,$e=!1,Le=!1,ie;ie=Symbol.for("react.module.reference");function Ue(e){return!!(typeof e=="string"||typeof e=="function"||e===O||e===U||Le||e===L||e===P||e===v||$e||e===V||We||Ne||Ye||typeof e=="object"&&e!==null&&(e.$$typeof===b||e.$$typeof===y||e.$$typeof===W||e.$$typeof===m||e.$$typeof===l||e.$$typeof===ie||e.getModuleId!==void 0))}function Ve(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function ue(e){return e.displayName||"Context"}function R(e){if(e==null)return null;if(typeof e.tag=="number"&&c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case O:return"Fragment";case I:return"Portal";case U:return"Profiler";case L:return"StrictMode";case P:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case m:var r=e;return ue(r)+".Consumer";case W:var t=e;return ue(t._context)+".Provider";case l:return Ve(e,e.render,"ForwardRef");case y:var n=e.displayName||null;return n!==null?n:R(e.type)||"Memo";case b:{var i=e,u=i._payload,o=i._init;try{return R(o(u))}catch{return null}}}return null}var T=Object.assign,N=0,se,fe,le,ce,de,ve,pe;function Ee(){}Ee.__reactDisabledLog=!0;function Me(){{if(N===0){se=console.log,fe=console.info,le=console.warn,ce=console.error,de=console.group,ve=console.groupCollapsed,pe=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ee,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}N++}}function Be(){{if(N--,N===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:T({},e,{value:se}),info:T({},e,{value:fe}),warn:T({},e,{value:le}),error:T({},e,{value:ce}),group:T({},e,{value:de}),groupCollapsed:T({},e,{value:ve}),groupEnd:T({},e,{value:pe})})}N<0&&c("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var K=C.ReactCurrentDispatcher,H;function M(e,r,t){{if(H===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);H=n&&n[1]||""}return`
`+H+e}}var X=!1,B;{var qe=typeof WeakMap=="function"?WeakMap:Map;B=new qe}function ye(e,r){if(!e||X)return"";{var t=B.get(e);if(t!==void 0)return t}var n;X=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=K.current,K.current=null,Me();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(_){n=_}Reflect.construct(e,[],o)}else{try{o.call()}catch(_){n=_}e.call(o.prototype)}}else{try{throw Error()}catch(_){n=_}e()}}catch(_){if(_&&n&&typeof _.stack=="string"){for(var a=_.stack.split(`
`),d=n.stack.split(`
`),s=a.length-1,f=d.length-1;s>=1&&f>=0&&a[s]!==d[f];)f--;for(;s>=1&&f>=0;s--,f--)if(a[s]!==d[f]){if(s!==1||f!==1)do if(s--,f--,f<0||a[s]!==d[f]){var p=`
`+a[s].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),typeof e=="function"&&B.set(e,p),p}while(s>=1&&f>=0);break}}}finally{X=!1,K.current=u,Be(),Error.prepareStackTrace=i}var w=e?e.displayName||e.name:"",xe=w?M(w):"";return typeof e=="function"&&B.set(e,xe),xe}function Ge(e,r,t){return ye(e,!1)}function Je(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function q(e,r,t){if(e==null)return"";if(typeof e=="function")return ye(e,Je(e));if(typeof e=="string")return M(e);switch(e){case P:return M("Suspense");case v:return M("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case l:return Ge(e.render);case y:return q(e.type,r,t);case b:{var n=e,i=n._payload,u=n._init;try{return q(u(i),r,t)}catch{}}}return""}var G=Object.prototype.hasOwnProperty,Re={},_e=C.ReactDebugCurrentFrame;function J(e){if(e){var r=e._owner,t=q(e.type,e._source,r?r.type:null);_e.setExtraStackFrame(t)}else _e.setExtraStackFrame(null)}function ze(e,r,t,n,i){{var u=Function.call.bind(G);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var d=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(J(i),c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),J(null)),a instanceof Error&&!(a.message in Re)&&(Re[a.message]=!0,J(i),c("Failed %s type: %s",t,a.message),J(null))}}}var Ke=Array.isArray;function Z(e){return Ke(e)}function He(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Xe(e){try{return he(e),!1}catch{return!0}}function he(e){return""+e}function ge(e){if(Xe(e))return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",He(e)),he(e)}var Y=C.ReactCurrentOwner,Ze={key:!0,ref:!0,__self:!0,__source:!0},me,be,Q;Q={};function Qe(e){if(G.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function er(e){if(G.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function rr(e,r){if(typeof e.ref=="string"&&Y.current&&r&&Y.current.stateNode!==r){var t=R(Y.current.type);Q[t]||(c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',R(Y.current.type),e.ref),Q[t]=!0)}}function tr(e,r){{var t=function(){me||(me=!0,c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function nr(e,r){{var t=function(){be||(be=!0,c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var ar=function(e,r,t,n,i,u,o){var a={$$typeof:E,type:e,key:r,ref:t,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function or(e,r,t,n,i){{var u,o={},a=null,d=null;t!==void 0&&(ge(t),a=""+t),er(r)&&(ge(r.key),a=""+r.key),Qe(r)&&(d=r.ref,rr(r,i));for(u in r)G.call(r,u)&&!Ze.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)o[u]===void 0&&(o[u]=s[u])}if(a||d){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&tr(o,f),d&&nr(o,f)}return ar(e,a,d,i,n,Y.current,o)}}var ee=C.ReactCurrentOwner,Te=C.ReactDebugCurrentFrame;function S(e){if(e){var r=e._owner,t=q(e.type,e._source,r?r.type:null);Te.setExtraStackFrame(t)}else Te.setExtraStackFrame(null)}var re;re=!1;function te(e){return typeof e=="object"&&e!==null&&e.$$typeof===E}function Oe(){{if(ee.current){var e=R(ee.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function ir(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Pe={};function ur(e){{var r=Oe();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Ce(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=ur(r);if(Pe[t])return;Pe[t]=!0;var n="";e&&e._owner&&e._owner!==ee.current&&(n=" It was passed a child from "+R(e._owner.type)+"."),S(e),c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),S(null)}}function Se(e,r){{if(typeof e!="object")return;if(Z(e))for(var t=0;t<e.length;t++){var n=e[t];te(n)&&Ce(n,r)}else if(te(e))e._store&&(e._store.validated=!0);else if(e){var i=Ae(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)te(o.value)&&Ce(o.value,r)}}}function sr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===l||r.$$typeof===y))t=r.propTypes;else return;if(t){var n=R(r);ze(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!re){re=!0;var i=R(r);c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function fr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){S(e),c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),S(null);break}}e.ref!==null&&(S(e),c("Invalid attribute `ref` supplied to `React.Fragment`."),S(null))}}function we(e,r,t,n,i,u){{var o=Ue(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var d=ir(i);d?a+=d:a+=Oe();var s;e===null?s="null":Z(e)?s="array":e!==void 0&&e.$$typeof===E?(s="<"+(R(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var f=or(e,r,t,i,u);if(f==null)return f;if(o){var p=r.children;if(p!==void 0)if(n)if(Z(p)){for(var w=0;w<p.length;w++)Se(p[w],e);Object.freeze&&Object.freeze(p)}else c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Se(p,e)}return e===O?fr(f):sr(f),f}}function lr(e,r,t){return we(e,r,t,!0)}function cr(e,r,t){return we(e,r,t,!1)}var dr=cr,vr=lr;k.Fragment=O,k.jsx=dr,k.jsxs=vr}()),k}process.env.NODE_ENV==="production"?z.exports=je():z.exports=ke();var D=z.exports;const pr="";function De(){return D.jsx(D.Fragment,{children:D.jsx("div",{className:"text-red-500 text-2xl font-bold underline",children:"APP PAGE"})})}var F={},A=x;if(process.env.NODE_ENV==="production")F.createRoot=A.createRoot,F.hydrateRoot=A.hydrateRoot;else{var $=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;F.createRoot=function(g,E){$.usingClientEntryPoint=!0;try{return A.createRoot(g,E)}finally{$.usingClientEntryPoint=!1}},F.hydrateRoot=function(g,E,I){$.usingClientEntryPoint=!0;try{return A.hydrateRoot(g,E,I)}finally{$.usingClientEntryPoint=!1}}}F.createRoot(document.getElementById("root")).render(D.jsx(h.StrictMode,{children:D.jsx(De,{})}))});
