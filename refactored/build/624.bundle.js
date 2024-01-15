/*! For license information please see 624.bundle.js.LICENSE.txt */
(self.webpackChunkcrypt_edit=self.webpackChunkcrypt_edit||[]).push([[624],{645:t=>{"use strict";t.exports=function(r){var f=[];return f.toString=function(){return this.map(function(t){var e="",n=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),n&&(e+="@layer".concat(0<t[5].length?" ".concat(t[5]):""," {")),e+=r(t),n&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e}).join("")},f.i=function(t,e,n,r,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(n)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(i[l]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);n&&i[s[0]]||(void 0!==o&&(void 0!==s[5]&&(s[1]="@layer".concat(0<s[5].length?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),e&&(s[2]&&(s[1]="@media ".concat(s[2]," {").concat(s[1],"}")),s[2]=e),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),f.push(s))}},f}},81:t=>{"use strict";t.exports=function(t){return t[1]}},61:(F,t,e)=>{var P=e(698).default;function n(){"use strict";F.exports=function(){return a},F.exports.__esModule=!0,F.exports.default=F.exports;var c,a={},t=Object.prototype,s=t.hasOwnProperty,f=Object.defineProperty||function(t,e,n){t[e]=n.value},e="function"==typeof Symbol?Symbol:{},r=e.iterator||"@@iterator",n=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function i(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(c){i=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o,i,a,l,e=e&&e.prototype instanceof g?e:g,e=Object.create(e.prototype),r=new T(r||[]);return f(e,"_invoke",{value:(o=t,i=n,a=r,l=h,function(t,e){if(l===d)throw new Error("Generator is already running");if(l===y){if("throw"===t)throw e;return{value:c,done:!0}}for(a.method=t,a.arg=e;;){var n=a.delegate;if(n){n=function t(e,n){var r=n.method,o=e.iterator[r];if(o===c)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=c,t(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;r=u(o,e.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,m;o=r.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=c),n.delegate=null,m):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}(n,a);if(n){if(n===m)continue;return n}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(l===h)throw l=y,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);l=d;n=u(o,i,a);if("normal"===n.type){if(l=a.done?y:p,n.arg===m)continue;return{value:n.arg,done:a.done}}"throw"===n.type&&(l=y,a.method="throw",a.arg=n.arg)}})}),e}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}a.wrap=l;var h="suspendedStart",p="suspendedYield",d="executing",y="completed",m={};function g(){}function v(){}function x(){}var e={},w=(i(e,r,function(){return this}),Object.getPrototypeOf),w=w&&w(w(O([]))),b=(w&&w!==t&&s.call(w,r)&&(e=w),x.prototype=g.prototype=Object.create(e));function L(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function R(a,l){var e;f(this,"_invoke",{value:function(n,r){function t(){return new l(function(t,e){!function e(t,n,r,o){var i,t=u(a[t],a,n);if("throw"!==t.type)return(n=(i=t.arg).value)&&"object"==P(n)&&s.call(n,"__await")?l.resolve(n.__await).then(function(t){e("next",t,r,o)},function(t){e("throw",t,r,o)}):l.resolve(n).then(function(t){i.value=t,r(i)},function(t){return e("throw",t,r,o)});o(t.arg)}(n,r,t,e)})}return e=e?e.then(t,t):t()}})}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function O(e){if(e||""===e){var n,t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return n=-1,(t=function t(){for(;++n<e.length;)if(s.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=c,t.done=!0,t}).next=t}throw new TypeError(P(e)+" is not iterable")}return f(b,"constructor",{value:v.prototype=x,configurable:!0}),f(x,"constructor",{value:v,configurable:!0}),v.displayName=i(x,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,i(t,o,"GeneratorFunction")),t.prototype=Object.create(b),t},a.awrap=function(t){return{__await:t}},L(R.prototype),i(R.prototype,n,function(){return this}),a.AsyncIterator=R,a.async=function(t,e,n,r,o){void 0===o&&(o=Promise);var i=new R(l(t,e,n,r),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},L(b),i(b,o,"Generator"),i(b,r,function(){return this}),i(b,"toString",function(){return"[object Generator]"}),a.keys=function(t){var e,n=Object(t),r=[];for(e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=O,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=c,this.done=!1,this.delegate=null,this.method="next",this.arg=c,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=c)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function t(t,e){return i.type="throw",i.arg=n,r.next=t,e&&(r.method="next",r.arg=c),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=s.call(o,"catchLoc"),l=s.call(o,"finallyLoc");if(a&&l){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&s.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n,r,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(n=o.completion).type&&(r=n.arg,E(o)),r}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=c),m}},a}F.exports=n,F.exports.__esModule=!0,F.exports.default=F.exports},698:e=>{function n(t){return e.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e.exports.__esModule=!0,e.exports.default=e.exports,n(t)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},687:(t,e,n)=>{n=n(61)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},983:(t,e,n)=>{"use strict";n.d(e,{RR:()=>a,X5:()=>i,cv:()=>l,oo:()=>r,uY:()=>c,x7:()=>o});var L=n(347);function x(t,e,n){var{reference:r,floating:o}=t,t=(0,L.Qq)(e),i=(0,L.Wh)(e),a=(0,L.I4)(i),l=(0,L.k3)(e),c="y"===t,s=r.x+r.width/2-o.width/2,f=r.y+r.height/2-o.height/2,u=r[a]/2-o[a]/2;let h;switch(l){case"top":h={x:s,y:r.y-o.height};break;case"bottom":h={x:s,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:f};break;case"left":h={x:r.x-o.width,y:f};break;default:h={x:r.x,y:r.y}}switch((0,L.hp)(e)){case"start":h[i]-=u*(n&&c?-1:1);break;case"end":h[i]+=u*(n&&c?-1:1)}return h}const r=async(e,n,t)=>{var{placement:r="bottom",strategy:o="absolute",middleware:t=[],platform:i}=t,a=t.filter(Boolean),l=await(null==i.isRTL?void 0:i.isRTL(n));let c=await i.getElementRects({reference:e,floating:n,strategy:o}),{x:s,y:f}=x(c,r,l),u=r,h={},p=0;for(let t=0;t<a.length;t++){var{name:d,fn:y}=a[t],{x:y,y:m,data:g,reset:v}=await y({x:s,y:f,initialPlacement:r,placement:u,strategy:o,middlewareData:h,rects:c,platform:i,elements:{reference:e,floating:n}});s=null!=y?y:s,f=null!=m?m:f,h={...h,[d]:{...h[d],...g}},v&&p<=50&&(p++,"object"==typeof v&&(v.placement&&(u=v.placement),v.rects&&(c=!0===v.rects?await i.getElementRects({reference:e,floating:n,strategy:o}):v.rects),{x:s,y:f}=x(c,u,l)),t=-1)}return{x:s,y:f,placement:u,strategy:o,middlewareData:h}};async function R(t,e){var{x:n,y:r,platform:o,rects:i,elements:a,strategy:l}=t,{boundary:e="clippingAncestors",rootBoundary:t="viewport",elementContext:c="floating",altBoundary:s=!1,padding:f=0}=(0,L.ku)(e=void 0===e?{}:e,t),f=(0,L.yd)(f),s=a[s?"floating"===c?"reference":"floating":c],u=(0,L.JB)(await o.getClippingRect({element:null==(u=await(null==o.isElement?void 0:o.isElement(s)))||u?s:s.contextElement||await(null==o.getDocumentElement?void 0:o.getDocumentElement(a.floating)),boundary:e,rootBoundary:t,strategy:l})),s="floating"===c?{...i.floating,x:n,y:r}:i.reference,e=await(null==o.getOffsetParent?void 0:o.getOffsetParent(a.floating)),t=await(null==o.isElement?void 0:o.isElement(e))&&await(null==o.getScale?void 0:o.getScale(e))||{x:1,y:1},c=(0,L.JB)(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:s,offsetParent:e,strategy:l}):s);return{top:(u.top-c.top+f.top)/t.y,bottom:(c.bottom-u.bottom+f.bottom)/t.y,left:(u.left-c.left+f.left)/t.x,right:(c.right-u.right+f.right)/t.x}}const o=g=>({name:"arrow",options:g,async fn(t){var{x:e,y:n,placement:r,rects:o,platform:i,elements:a,middlewareData:l}=t,{element:t,padding:c=0}=(0,L.ku)(g,t)||{};if(null==t)return{};var c=(0,L.yd)(c),e={x:e,y:n},n=(0,L.Wh)(r),s=(0,L.I4)(n),f=await i.getDimensions(t),u="y"===n,h=u?"top":"left",p=u?"bottom":"right",u=u?"clientHeight":"clientWidth",d=o.reference[s]+o.reference[n]-e[n]-o.floating[s],y=e[n]-o.reference[n],t=await(null==i.getOffsetParent?void 0:i.getOffsetParent(t));let m=t?t[u]:0;d=d/2-y/2,y=(m=m&&await(null==i.isElement?void 0:i.isElement(t))?m:a.floating[u]||o.floating[s])/2-f[s]/2-1,i=(0,L.VV)(c[h],y),t=(0,L.VV)(c[p],y),a=i,u=m-f[s]-t,h=m/2-f[s]/2+d,c=(0,L.uZ)(a,h,u),p=!l.arrow&&null!=(0,L.hp)(r)&&h!=c&&o.reference[s]/2-(h<a?i:t)-f[s]/2<0,y=p?h<a?h-a:h-u:0;return{[n]:e[n]+y,data:{[n]:c,centerOffset:h-c-y,...p&&{alignmentOffset:y}},reset:p}}});const i=function(m){return{name:"autoPlacement",options:m=void 0===m?{}:m,async fn(t){var{rects:e,middlewareData:n,placement:r,platform:o,elements:i}=t;const{crossAxis:a=!1,alignment:l,allowedPlacements:c=L.Ct,autoAlignment:s=!0,...f}=(0,L.ku)(m,t);var u,h,p=void 0!==l||c===L.Ct?(h=s,p=c,((u=l||null)?[...p.filter(t=>(0,L.hp)(t)===u),...p.filter(t=>(0,L.hp)(t)!==u)]:p.filter(t=>(0,L.k3)(t)===t)).filter(t=>!u||(0,L.hp)(t)===u||!!h&&(0,L.Go)(t)!==t)):c,t=await R(t,f),d=(null==(d=n.autoPlacement)?void 0:d.index)||0,y=p[d];return null==y?{}:(e=(0,L.i8)(y,e,await(null==o.isRTL?void 0:o.isRTL(i.floating))),r!==y?{reset:{placement:p[0]}}:(o=[t[(0,L.k3)(y)],t[e[0]],t[e[1]]],t=[...(null==(i=n.autoPlacement)?void 0:i.overflows)||[],{placement:y,overflows:o}],(e=p[d+1])?{data:{index:d+1,overflows:t},reset:{placement:e}}:(y=(null==(i=(n=t.map(t=>{var e=(0,L.hp)(t.placement);return[t.placement,e&&a?t.overflows.slice(0,2).reduce((t,e)=>t+e,0):t.overflows[0],t.overflows]}).sort((t,e)=>t[1]-e[1])).filter(t=>t[2].slice(0,(0,L.hp)(t[0])?2:3).every(t=>t<=0))[0])?void 0:i[0])||n[0][0])!==r?{data:{index:d+1,overflows:t},reset:{placement:y}}:{}))}}},a=function(b){return{name:"flip",options:b=void 0===b?{}:b,async fn(e){const{placement:n,middlewareData:r,rects:t,initialPlacement:o,platform:i,elements:a}=e,{mainAxis:l=!0,crossAxis:c=!0,fallbackPlacements:s,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:u="none",flipAlignment:h=!0,...p}=(0,L.ku)(b,e);if(null==(d=r.arrow)||!d.alignmentOffset){var d=(0,L.k3)(n),y=(0,L.k3)(o)===o,m=await(null==i.isRTL?void 0:i.isRTL(a.floating)),y=s||(y||!h?[(0,L.pw)(o)]:(0,L.gy)(o)),y=(s||"none"===u||y.push(...(0,L.KX)(o,h,u,m)),[o,...y]),e=await R(e,p),g=[],v=(null==(x=r.flip)?void 0:x.overflows)||[];if(l&&g.push(e[d]),c&&(x=(0,L.i8)(n,t,m),g.push(e[x[0]],e[x[1]])),v=[...v,{placement:n,overflows:g}],!g.every(t=>t<=0)){var x,w,m=((null==(d=r.flip)?void 0:d.index)||0)+1,e=y[m];if(e)return{data:{index:m,overflows:v},reset:{placement:e}};let t=null==(x=v.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:x.placement;if(!t)switch(f){case"bestFit":{const n=null==(w=v.map(t=>[t.placement,t.overflows.filter(t=>0<t).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:w[0];n&&(t=n);break}case"initialPlacement":t=o}if(n!==t)return{reset:{placement:t}}}}return{}}}};const l=function(a){return{name:"offset",options:a=void 0===a?0:a,async fn(t){var e,{x:n,y:r,placement:o,middlewareData:i}=t,t=await async function(t,e){var{placement:n,platform:r,elements:o}=t,r=await(null==r.isRTL?void 0:r.isRTL(o.floating)),o=(0,L.k3)(n),i=(0,L.hp)(n),n="y"===(0,L.Qq)(n),o=["left","top"].includes(o)?-1:1,r=r&&n?-1:1;let{mainAxis:a,crossAxis:l,alignmentAxis:c}="number"==typeof(e=(0,L.ku)(e,t))?{mainAxis:e,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...e};return i&&"number"==typeof c&&(l="end"===i?-1*c:c),n?{x:l*r,y:a*o}:{x:a*o,y:l*r}}(t,a);return o===(null==(e=i.offset)?void 0:e.placement)&&null!=(e=i.arrow)&&e.alignmentOffset?{}:{x:n+t.x,y:r+t.y,data:{...t,placement:o}}}}},c=function(d){return{name:"shift",options:d=void 0===d?{}:d,async fn(t){var{x:e,y:n,placement:r}=t;const{mainAxis:o=!0,crossAxis:i=!1,limiter:a={fn:t=>{var{x:t,y:e}=t;return{x:t,y:e}}},...l}=(0,L.ku)(d,t);var c,s={x:e,y:n},f=await R(t,l),r=(0,L.Qq)((0,L.k3)(r)),u=(0,L.Rn)(r);let h=s[u],p=s[r];o&&(s=h+f["y"===u?"top":"left"],c=h-f["y"===u?"bottom":"right"],h=(0,L.uZ)(s,h,c)),i&&(s=p+f["y"===r?"top":"left"],c=p-f["y"===r?"bottom":"right"],p=(0,L.uZ)(s,p,c));f=a.fn({...t,[u]:h,[r]:p});return{...f,data:{x:f.x-e,y:f.y-n}}}}}},37:(t,e,n)=>{"use strict";n.d(e,{Me:()=>function(n,e,r,t){void 0===t&&(t={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:c=!1}=t,s=x(n),f=o||i?[...s?(0,v.Kx)(s):[],...(0,v.Kx)(e)]:[],u=(f.forEach(t=>{o&&t.addEventListener("scroll",r,{passive:!0}),i&&t.addEventListener("resize",r)}),s&&l?function(s,e){let f=null,u;const h=(0,v.tF)(s);function p(){clearTimeout(u),f&&f.disconnect(),f=null}return function n(r,o){void 0===r&&(r=!1),void 0===o&&(o=1),p();var{left:t,top:i,width:a,height:l}=s.getBoundingClientRect();if(r||e(),a&&l){r={rootMargin:-(0,g.GW)(i)+"px "+-(0,g.GW)(h.clientWidth-(t+a))+"px "+-(0,g.GW)(h.clientHeight-(i+l))+"px "+-(0,g.GW)(t)+"px",threshold:(0,g.Fp)(0,(0,g.VV)(1,o))||1};let e=!0;try{f=new IntersectionObserver(c,{...r,root:h.ownerDocument})}catch(t){f=new IntersectionObserver(c,r)}function c(t){if((t=t[0].intersectionRatio)!==o){if(!e)return n();t?n(!1,t):u=setTimeout(()=>{n(!1,1e-7)},100)}e=!1}f.observe(s)}}(!0),p}(s,r):null);let h=-1,p=null;a&&(p=new ResizeObserver(t=>{var[t]=t;t&&t.target===s&&p&&(p.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{p&&p.observe(e)})),r()}),s&&!c&&p.observe(s),p.observe(e));let d,y=c?m(n):null;c&&!function t(){const e=m(n);!y||e.x===y.x&&e.y===y.y&&e.width===y.width&&e.height===y.height||r();y=e;d=requestAnimationFrame(t)}();return r(),()=>{f.forEach(t=>{o&&t.removeEventListener("scroll",r),i&&t.removeEventListener("resize",r)}),u&&u(),p&&p.disconnect(),p=null,c&&cancelAnimationFrame(d)}},oo:()=>h});var g=n(347),o=n(983),v=n(365);function a(t){var e=(0,v.Dx)(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;var e=(0,v.Re)(t),o=e?t.offsetWidth:n,e=e?t.offsetHeight:r,t=(0,g.NM)(n)!==o||(0,g.NM)(r)!==e;return t&&(n=o,r=e),{width:n,height:r,$:t}}function x(t){return(0,v.kK)(t)?t:t.contextElement}function w(t){t=x(t);if(!(0,v.Re)(t))return(0,g.ze)(1);var e=t.getBoundingClientRect(),{width:t,height:n,$:r}=a(t);let o=(r?(0,g.NM)(e.width):e.width)/t,i=(r?(0,g.NM)(e.height):e.height)/n;return o&&Number.isFinite(o)||(o=1),i&&Number.isFinite(i)||(i=1),{x:o,y:i}}const r=(0,g.ze)(0);function b(t){t=(0,v.Jj)(t);return(0,v.Pf)()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:r}function m(t,e,n,r){void 0===e&&(e=!1),void 0===n&&(n=!1);var o=t.getBoundingClientRect(),i=x(t);let a=(0,g.ze)(1);e&&(r?(0,v.kK)(r)&&(a=w(r)):a=w(t));e=i,void 0===(t=n)&&(t=!1);n=!(n=r)||t&&n!==(0,v.Jj)(e)||!t?(0,g.ze)(0):b(i);let l=(o.left+n.x)/a.x,c=(o.top+n.y)/a.y,s=o.width/a.x,f=o.height/a.y;if(i){var u=(0,v.Jj)(i),h=r&&(0,v.kK)(r)?(0,v.Jj)(r):r;let t=u.frameElement;for(;t&&r&&h!==u;){var p=w(t),d=t.getBoundingClientRect(),y=(0,v.Dx)(t),m=d.left+(t.clientLeft+parseFloat(y.paddingLeft))*p.x,d=d.top+(t.clientTop+parseFloat(y.paddingTop))*p.y;l*=p.x,c*=p.y,s*=p.x,f*=p.y,l+=m,c+=d,t=(0,v.Jj)(t).frameElement}}return(0,g.JB)({width:s,height:f,x:l,y:c})}function l(t){return m((0,v.tF)(t)).left+(0,v.Lw)(t).scrollLeft}function c(t,e,n){let r;var o,i,a;return r="viewport"===e?function(t,e){var n=(0,v.Jj)(t),t=(0,v.tF)(t),n=n.visualViewport;let r=t.clientWidth,o=t.clientHeight,i=0,a=0;return n&&(r=n.width,o=n.height,(0,v.Pf)()&&"fixed"!==e||(i=n.offsetLeft,a=n.offsetTop)),{width:r,height:o,x:i,y:a}}(t,n):"document"===e?function(t){var e=(0,v.tF)(t),n=(0,v.Lw)(t),r=t.ownerDocument.body,o=(0,g.Fp)(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),i=(0,g.Fp)(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+l(t);return t=-n.scrollTop,"rtl"===(0,v.Dx)(r).direction&&(a+=(0,g.Fp)(e.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:t}}((0,v.tF)(t)):(0,v.kK)(e)?(i=(n=m(o=e,!0,"fixed"===(n=n))).top+o.clientTop,n=n.left+o.clientLeft,a=(0,v.Re)(o)?w(o):(0,g.ze)(1),{width:o.clientWidth*a.x,height:o.clientHeight*a.y,x:n*a.x,y:i*a.y}):(o=b(t),{...e,x:e.x-o.x,y:e.y-o.y}),(0,g.JB)(r)}function s(t,e){var n=e.get(t);if(n)return n;let r=(0,v.Kx)(t,[],!1).filter(t=>(0,v.kK)(t)&&"body"!==(0,v.wk)(t)),o=null;var i="fixed"===(0,v.Dx)(t).position;let a=i?(0,v.Ow)(t):t;for(;(0,v.kK)(a)&&!(0,v.Py)(a);){var l=(0,v.Dx)(a),c=(0,v.hT)(a),c=(c||"fixed"!==l.position||(o=null),i?!c&&!o:!c&&"static"===l.position&&!!o&&["absolute","fixed"].includes(o.position)||(0,v.ao)(a)&&!c&&function t(e,n){e=(0,v.Ow)(e);return!(e===n||!(0,v.kK)(e)||(0,v.Py)(e))&&("fixed"===(0,v.Dx)(e).position||t(e,n))}(t,a));c?r=r.filter(t=>t!==a):o=l,a=(0,v.Ow)(a)}return e.set(t,r),r}function i(t,e){return(0,v.Re)(t)&&"fixed"!==(0,v.Dx)(t).position?e?e(t):t.offsetParent:null}function f(t,e){var n=(0,v.Jj)(t);if(!(0,v.Re)(t))return n;let r=i(t,e);for(;r&&(0,v.Ze)(r)&&"static"===(0,v.Dx)(r).position;)r=i(r,e);return(!r||"html"!==(0,v.wk)(r)&&("body"!==(0,v.wk)(r)||"static"!==(0,v.Dx)(r).position||(0,v.hT)(r)))&&(r||(0,v.gQ)(t))||n}const u={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){var{rect:t,offsetParent:e,strategy:n}=t,r=(0,v.Re)(e),o=(0,v.tF)(e);if(e===o)return t;let i={scrollLeft:0,scrollTop:0},a=(0,g.ze)(1);var l=(0,g.ze)(0);return(r||!r&&"fixed"!==n)&&("body"===(0,v.wk)(e)&&!(0,v.ao)(o)||(i=(0,v.Lw)(e)),(0,v.Re)(e))&&(r=m(e),a=w(e),l.x=r.x+e.clientLeft,l.y=r.y+e.clientTop),{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-i.scrollLeft*a.x+l.x,y:t.y*a.y-i.scrollTop*a.y+l.y}},getDocumentElement:v.tF,getClippingRect:function(t){let{element:n,boundary:e,rootBoundary:r,strategy:o}=t;var i=(t=[..."clippingAncestors"===e?s(n,this._c):[].concat(e),r])[0];return{width:(t=t.reduce((t,e)=>{e=c(n,e,o);return t.top=(0,g.Fp)(e.top,t.top),t.right=(0,g.VV)(e.right,t.right),t.bottom=(0,g.VV)(e.bottom,t.bottom),t.left=(0,g.Fp)(e.left,t.left),t},c(n,i,o))).right-t.left,height:t.bottom-t.top,x:t.left,y:t.top}},getOffsetParent:f,getElementRects:async function(t){var{reference:t,floating:e,strategy:n}=t,r=this.getOffsetParent||f,o=this.getDimensions;return{reference:function(t,e,n){var r=(0,v.Re)(e),o=(0,v.tF)(e),t=m(t,!0,n="fixed"===n,e);let i={scrollLeft:0,scrollTop:0};var a=(0,g.ze)(0);return!r&&n||("body"===(0,v.wk)(e)&&!(0,v.ao)(o)||(i=(0,v.Lw)(e)),r?(r=m(e,!0,n,e),a.x=r.x+e.clientLeft,a.y=r.y+e.clientTop):o&&(a.x=l(o))),{x:t.left+i.scrollLeft-a.x,y:t.top+i.scrollTop-a.y,width:t.width,height:t.height}}(t,await r(e),n),floating:{x:0,y:0,...await o(e)}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:a,getScale:w,isElement:v.kK,isRTL:function(t){return"rtl"===(0,v.Dx)(t).direction}};const h=(t,e,n)=>{var r=new Map,n={platform:u,...n},r={...n.platform,_c:r};return(0,o.oo)(t,e,{...n,platform:r})}}}]);